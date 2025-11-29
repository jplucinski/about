# jplucinski.dev

Personal portfolio website built with Astro.js and Decap CMS (Netlify CMS fork) backed by GitHub editorial workflow.

## Features

- Modern, responsive design with expressive typography
- Content editing through Decap CMS with GitHub-backed drafts/approvals
- Astro static site generation + TypeScript
- Structured data + SEO defaults editable from the CMS

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:4321` for the site and `http://localhost:4321/admin` for the CMS UI.

### Decap CMS + GitHub auth

Decap uses the GitHub backend defined in `public/admin/config.yml`. Because `local_backend: true` is set you can work fully offline or through GitHub PRs.

#### Local-only editing

1. Run the Astro dev server (`npm run dev`).
2. In another terminal start the Decap local proxy (`npm run dec`), which is just:
   ```bash
   decap-server --port 8081 --allowed-hosts 4321
   ```
3. Visit `/admin`, click “Login with GitHub” (Decap will fake auth), and edits write directly to the repo.

#### GitHub editorial workflow

1. Create a GitHub OAuth app (or use the standard Decap auth server) for your production URL.
2. Export `GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET`, and `GIT_HOST=https://github.com`, then run:
   ```bash
   npx decap-server
   ```
3. Log in at `/admin`. Changes now open PRs because `publish_mode: editorial_workflow` is enabled.

If you deploy on Netlify, you can alternatively switch the backend to `git-gateway` and rely on Netlify Identity.

### Build

```bash
npm run build
npm run preview
```

### GitLab Codespaces / Dev Containers

GitLab’s Remote Development beta understands the standard Dev Container spec. This repo ships `.devcontainer/devcontainer.json`, so you can spin up a Codespace-like workspace straight from GitLab:

1. Push the branch (or fork) to GitLab.
2. In GitLab, go to **Workspace → Remote Development → New Workspace**, select this repo/branch, and pick the Dev Container template detected from `.devcontainer`.
3. When the workspace boots it automatically runs `npm install`. Start the site with `npm run dev` (Astro on port `4321`) and, if needed, `npm run dec` for the Decap proxy on port `8081`—both ports are pre-forwarded.
4. Editor extensions (Astro, Tailwind, ESLint, Prettier) are preinstalled via the container customizations, so you get the same DX locally and in Codespaces.

Because the container image is `mcr.microsoft.com/devcontainers/typescript-node:20`, you can also reopen the folder locally in a Dev Container using VS Code or `devcontainer up` for parity with GitLab.

## Project Structure

```
/
├── src/
│   ├── components/       # Reusable Astro components
│   ├── content/          # Content collections (ideas, pages, site settings)
│   ├── layouts/          # Page layouts
│   ├── pages/            # Route pages
│   └── styles/           # Global styles
├── public/
│   └── admin/            # Decap CMS entry + config
└── public/uploads        # (Created by Decap when media is uploaded)
```

## Content Management

Decap exposes the same files Astro reads:

- `src/content/ideas/*.md` – idea cards (title, description, pubDate, author, markdown body)
- `src/content/pages/home.md` – hero copy, CTA labels/links, featured section
- `src/content/pages/about.md` – bio, skills, experience timeline, education, languages
- `src/content/site/settings.json` – site name/tagline, contact info, social links and SEO defaults that power the JSON-LD helpers

You can edit these files directly or through `/admin`. Any SEO metadata (default description + keywords) and the JSON-LD person/site data automatically update from the same settings file.

## License

MIT

