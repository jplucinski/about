# Copilot Instructions for jplucinski.dev

## Project Overview
Personal portfolio website built with **Astro 5** (static site generation) + **Decap CMS** (GitHub-backed content management) + **Tailwind CSS** (custom minimal design system).

## Architecture & Content Model

### Content Collections (Astro Content Layer)
All content lives in `src/content/` with strict Zod schemas defined in `src/content/config.ts`:

- **ideas/** - Blog-style posts (frontmatter: `title`, `description`, `pubDate`, `author`, `tags`, `category`, optional `seo` object)
- **projects/** - Portfolio items (frontmatter: `techStack[]`, `projectUrl`, `githubUrl`, `status`, `featured` boolean)
- **pages/** - Editable page content (`home.md`, `about.md`) with hero sections and CTAs
- **site/** - Global settings (`settings.json`) for site name, SEO defaults, social links, contact info
- **resume/** - Structured data (`data.json`) for skills, education, certifications

Query with `getCollection('ideas')` or `getEntry('site', 'settings')`. Always handle missing entries gracefully with try/catch.

### Decap CMS Integration
- **Config**: `public/admin/config.yml` defines all collection schemas mirroring Astro content types
- **Editorial Workflow**: `publish_mode: editorial_workflow` creates GitHub PRs for content changes
- **Local Dev**: Run `npm run dec` (port 8081) alongside `npm run dev` (port 4321) for offline editing with `local_backend: true`
- **Media**: Uploads go to `public/images/uploads/` (configured in `media_folder`)

### Page Routing
- Static pages: `src/pages/index.astro`, `about.astro`
- Dynamic routes: `[...slug].astro` files in `ideas/`, `blog/`, `projects/` folders
- `getStaticPaths()` generates pages from content collections at build time

## Design System (DESIGN_SPEC.md Reference)

### Typography
- **Display font**: Playfair Display (serif) - headings only via `.heading-display`, `.heading-1/2/3`
- **Body font**: Inter (sans-serif) - all UI/body text
- **Monospace**: JetBrains Mono - code blocks

### Custom Color Palette (Tailwind Extended)
Instead of standard Tailwind colors, use **earth-tone custom tokens** from `tailwind.config.mjs`:
- `ink` (#191919) - primary text/buttons
- `terracotta` (#d0684f) - accent/hovers
- `sand` (#f4f3ef), `clay` (#e6e4dd) - backgrounds/borders
- `stone` (#666666), `charcoal` (#333333) - muted text
- `sage` (#8fa398), `forest` (#2d3b3b) - secondary accents

**Never use** `blue-500`, `purple-600`, etc. The design uses minimal earth tones exclusively.

### Component Patterns
- **Cards**: Use `.card` utility (white bg, rounded-lg, border-clay, hover:-translate-y-1)
- **Buttons**: `.btn-primary` (ink bg, terracotta hover) or `.btn-secondary` (bordered, sand hover)
- **Links**: `.link` utility (ink color, clay border-bottom, terracotta hover)
- **Animations**: Prefer `animate-slide-up`, `animate-fade-in` from `global.css`. Respect `prefers-reduced-motion`

### Layout Conventions
- Max container width: `max-w-4xl mx-auto` (most content), `max-w-3xl` (articles)
- Vertical spacing: `py-12 md:py-16` (sections), `py-32 md:py-48` (hero areas)
- Borders: Use `border-clay` for dividers, never hard black

## Key Developer Workflows

### Development
```bash
npm run dev     # Astro dev server on localhost:4321
npm run dec     # Decap CMS local proxy on localhost:8081 (run in separate terminal)
```

### Building
```bash
npm run build   # Generates static site to dist/
npm run preview # Preview production build locally
```

### Content Editing
1. Visit `/admin` to access Decap CMS UI
2. Changes write directly to repo (local) or create GitHub PRs (production with OAuth)
3. Content files are markdown frontmatter + body, matching Zod schemas exactly

## Component Patterns

### Layout Component (`src/components/Layout.astro`)
All pages wrap content in `<Layout title="..." description="...">`. It:
- Renders `<SEO>` component with Open Graph/Twitter cards
- Includes `<Header>` and `<Footer>`
- Auto-generates `fullTitle` with " | jplucinski.dev" suffix if missing

### SEO & Structured Data
- `<SEO>` component handles all meta tags (defined in `src/components/SEO.astro`)
- `<StructuredData type="BlogPosting|WebSite" data={...}>` injects JSON-LD for rich snippets
- Always provide `title`, `description`, `type`, and `url` props

### Scroll Animations
Use `<ScrollAnimation direction="up|left|right" delay="0|100|200">` wrapper (see `ideas/[...slug].astro` for examples). Delays stagger sequential reveals.

## Critical Conventions

1. **Type Safety**: Import types from `astro:content` - `CollectionEntry<'ideas'>`, use `.render()` for markdown content
2. **Responsive Mobile-First**: Always use `md:` and `lg:` prefixes for larger screens
3. **Font Classes**: Never inline font families - use `font-display` (serif headings), `font-sans` (body), `font-mono` (code)
4. **No Generic Tailwind Colors**: Stick to custom palette tokens (`ink`, `terracotta`, etc.)
5. **Graceful Fallbacks**: Content queries should have try/catch with default values (see `index.astro` line 11-21)
6. **Accessibility**: Always include `aria-label` on icon buttons, semantic HTML (`<article>`, `<header>`, `<nav>`)

## Common Pitfalls

- **Don't** use `primary-500` colors - design spec eliminated sky blue gradients for minimal earth tones
- **Don't** forget `.heading-*` classes on headings - plain `<h1>` won't match design system
- **Don't** hardcode site name/contact info - pull from `getEntry('site', 'settings')`
- **Don't** use Astro image optimization (no `@astrojs/image` integration) - static images only

## File Organization Tips

- **Reusable components**: `src/components/*.astro`
- **Page-specific components**: Keep inline or create `*Card.astro` (e.g., `IdeaCard.astro`)
- **Global styles**: Add to `src/styles/global.css` under `@layer utilities` or `@layer components`
- **Static assets**: `public/` folder (images, admin config, favicon)

## References

- Design specification: `DESIGN_SPEC.md` (full color palette, typography scale, animation specs)
- Content schemas: `src/content/config.ts` (Zod validation for all collections)
- CMS config: `public/admin/config.yml` (field definitions mirror Astro schemas)
- Example pages: `src/pages/ideas/[...slug].astro` (dynamic routing), `src/pages/index.astro` (data fetching patterns)
