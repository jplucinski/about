# Design Specification
## jplucinski.dev Portfolio Website

### Design Philosophy

This portfolio website embodies a **modern, sophisticated aesthetic** that balances professionalism with creative expression. The design emphasizes:

- **Elegant Typography**: Contrasting serif and sans-serif fonts create visual hierarchy
- **Dynamic Gradients**: Animated color transitions add life and movement
- **Spatial Awareness**: Generous whitespace and thoughtful spacing
- **Subtle Motion**: Purposeful animations that enhance, not distract
- **Glass Morphism**: Modern backdrop blur effects for depth

---

## Color Palette

### Primary Colors (Sky Blue)
- **50**: `#f0f9ff` - Lightest background tints
- **100**: `#e0f2fe` - Subtle backgrounds
- **400**: `#38bdf8` - Accent highlights
- **500**: `#0ea5e9` - Primary actions
- **600**: `#0284c7` - Primary text/links
- **700**: `#0369a1` - Hover states

### Accent Colors (Purple/Pink)
- **400**: `#e879f9` - Gradient accents
- **500**: `#d946ef` - Secondary highlights
- **600**: `#c026d3` - Accent text

### Neutral Colors
- **Slate 50**: `#f8fafc` - Light backgrounds
- **Slate 100**: `#f1f5f9` - Card backgrounds
- **Slate 600**: `#475569` - Muted text
- **Slate 700**: `#334155` - Body text
- **Slate 900**: `#0f172a` - Headings

### Usage Guidelines
- Primary colors for main actions, links, and brand elements
- Accent colors for highlights, gradients, and creative flourishes
- Neutrals for text hierarchy and subtle UI elements
- Gradients combine primary and accent for dynamic effects

---

## Typography

### Font Families

**Display Font**: Playfair Display (Serif)
- Used for: Headings (h1-h6), hero text, emphasis
- Weights: 400, 500, 600, 700, 800, 900
- Characteristics: Elegant, sophisticated, high contrast

**Body Font**: Inter (Sans-serif)
- Used for: Body text, UI elements, navigation
- Weights: 300, 400, 500, 600, 700, 800, 900
- Characteristics: Clean, readable, modern

**Monospace Font**: JetBrains Mono
- Used for: Code blocks, technical content
- Weights: 400, 500, 600, 700

### Type Scale

| Element | Size (Mobile) | Size (Desktop) | Weight | Line Height |
|---------|--------------|----------------|--------|-------------|
| Display Heading | 3rem (48px) | 5rem (80px) | 900 | 1.1 |
| H1 | 2.25rem (36px) | 3.75rem (60px) | 700 | 1.2 |
| H2 | 1.875rem (30px) | 3rem (48px) | 700 | 1.25 |
| H3 | 1.5rem (24px) | 1.875rem (30px) | 600 | 1.3 |
| Body Large | 1.125rem (18px) | 1.25rem (20px) | 400 | 1.75 |
| Body | 1rem (16px) | 1rem (16px) | 400 | 1.6 |
| Small | 0.875rem (14px) | 0.875rem (14px) | 400 | 1.5 |

### Typography Classes

- `.heading-display` - Hero/display text (5xl → 8xl)
- `.heading-1` - Page titles (4xl → 6xl)
- `.heading-2` - Section headers (3xl → 5xl)
- `.heading-3` - Subsection headers (2xl → 3xl)
- `.text-body` - Body text (lg → xl)
- `.text-muted` - Secondary text

---

## Components

### Buttons

**Primary Button** (`.btn-primary`)
- Gradient background: `primary-600` → `primary-700`
- White text, rounded-lg
- Hover: Darker gradient, scale 105%, enhanced shadow
- Padding: `px-8 py-4`
- Font weight: Semibold

**Secondary Button** (`.btn-secondary`)
- White background, `primary-600` border (2px)
- `primary-600` text
- Hover: `primary-50` background, `primary-700` border
- Same padding and hover effects as primary

### Cards

**Standard Card** (`.card`)
- White background
- Rounded-2xl corners
- Shadow-lg with hover: shadow-xl
- Border: `slate-200`
- Hover: Translate up 4px, shimmer effect
- Padding: `p-6 md:p-8`

**Gradient Card** (`.card-gradient`)
- Subtle gradient background: `white` → `primary-50/30` → `accent-50/30`
- Enhanced shadow and hover effects
- Top accent bar: Gradient stripe
- Hover: Scale 102%, translate up 8px

### Links

**Standard Link** (`.link`)
- `primary-600` color
- Hover: `primary-700`, underline
- Underline offset: 4px
- Smooth transitions

---

## Layout & Spacing

### Container
- Max width: `1280px` (container)
- Padding: `px-6` (24px) on mobile, responsive on larger screens
- Centered with `mx-auto`

### Section Spacing
- Vertical padding: `py-20` (80px) mobile, `py-32` (128px) desktop
- Consistent horizontal padding: `px-6`

### Grid System
- Blog cards: 1 column mobile → 2 columns tablet → 3 columns desktop
- Gap: `gap-8` (32px) between grid items

---

## Animations & Effects

### Fade In
- Duration: 600ms
- Easing: ease-in-out
- Effect: Opacity 0→1, translateY 20px→0

### Slide Up
- Duration: 600ms
- Easing: ease-out
- Effect: Opacity 0→1, translateY 40px→0
- Staggered delays for sequential reveals

### Float
- Duration: 6s
- Easing: ease-in-out
- Infinite loop
- Effect: Vertical float ±20px
- Used for: Background orbs

### Gradient Animation
- Duration: 15s
- Infinite loop
- Effect: Background position shift
- Used for: Mesh gradients, text gradients

### Hover Effects
- Cards: Translate up, scale, shadow enhancement
- Buttons: Scale 105%, color transitions
- Links: Color change, underline reveal

---

## Visual Effects

### Mesh Gradient Background
- Multi-color gradient: `#667eea` → `#764ba2` → `#f093fb` → `#4facfe` → `#00f2fe`
- Animated background position
- Opacity: 20% overlay
- Used in: Hero sections

### Floating Orbs
- Large blurred circles (288px)
- Colors: Primary and accent variants
- Blend mode: Multiply
- Opacity: 30%
- Animated float with staggered delays
- Used in: Hero backgrounds

### Grid Pattern Overlay
- Subtle grid lines (1px, 12% opacity)
- 24px × 24px grid size
- Used for: Texture and depth

### Glass Morphism
- Backdrop blur: `backdrop-blur-md`
- Background: `white/80`
- Border: `white/20`
- Used in: Header navigation

---

## Responsive Design

### Breakpoints
- **Mobile**: < 768px (default)
- **Tablet**: ≥ 768px (`md:`)
- **Desktop**: ≥ 1024px (`lg:`)

### Mobile Considerations
- Collapsible navigation menu
- Stacked layouts
- Reduced font sizes
- Touch-friendly button sizes (min 44px)
- Simplified animations

### Desktop Enhancements
- Larger typography
- Multi-column layouts
- Enhanced hover states
- More complex animations

---

## Accessibility

### Color Contrast
- All text meets WCAG AA standards (4.5:1 minimum)
- Primary actions have sufficient contrast
- Focus states clearly visible

### Interactive Elements
- Minimum touch target: 44×44px
- Clear hover and focus states
- Keyboard navigation support
- ARIA labels where appropriate

### Typography
- Readable font sizes (minimum 16px body)
- Adequate line height (1.6+)
- Sufficient letter spacing

---

## Performance Considerations

### Animations
- Use CSS transforms (GPU accelerated)
- Prefer `will-change` for animated elements
- Limit simultaneous animations
- Respect `prefers-reduced-motion`

### Images & Assets
- Optimize all images
- Use modern formats (WebP, AVIF)
- Lazy load below-fold content

### Fonts
- Preload critical fonts
- Use `font-display: swap`
- Limit font weights loaded

---

## Design Tokens

### Shadows
- `shadow-lg`: `0 10px 15px -3px rgba(0, 0, 0, 0.1)`
- `shadow-xl`: `0 20px 25px -5px rgba(0, 0, 0, 0.1)`
- `shadow-2xl`: `0 25px 50px -12px rgba(0, 0, 0, 0.25)`

### Border Radius
- `rounded-lg`: `0.5rem` (8px)
- `rounded-xl`: `0.75rem` (12px)
- `rounded-2xl`: `1rem` (16px)
- `rounded-full`: `9999px`

### Transitions
- Standard: `transition-all duration-300`
- Fast: `duration-200`
- Slow: `duration-500`

---

## Brand Guidelines

### Logo/Name Treatment
- Use gradient text effect for name
- Playfair Display font, bold weight
- Responsive sizing: `text-xl md:text-2xl`

### Voice & Tone
- Professional yet approachable
- Technical but accessible
- Confident without arrogance
- Creative and innovative

---

## Future Enhancements

Potential additions:
- Dark mode support
- More micro-interactions
- Advanced scroll animations
- 3D elements (WebGL)
- Custom cursor effects
- Particle systems
- Parallax scrolling

---

*Last Updated: January 2025*

