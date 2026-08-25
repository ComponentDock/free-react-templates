# Advocate — Implementation Task Checklist

## App Scaffold

- [ ] Create `apps/advocate/` with Vite + React 19 + TypeScript + Tailwind CSS 4
- [ ] Configure `vite.config.ts` with `injectUiSource()` helper (copy pattern from existing apps)
- [ ] Set `package.json` name to `@free-react-templates/advocate`
- [ ] Add `public/CNAME` with `advocate.free.componentdock.com`
- [ ] Add Google Fonts (Playfair Display + Roboto) in `index.html`
- [ ] Run `npm install` at repo root to register workspace in lockfile

## Design Tokens in `src/index.css`

- [ ] `@theme` block with colors: `--color-primary: #037ef3`, `--color-primary-hover: #2991f5`, `--color-dark: #0f0f11`, `--color-surface: #1b1c1e`, `--color-text-muted: rgba(255 255 255 / 0.5)`
- [ ] Font families: `--font-heading: "Playfair Display", serif`, `--font-body: "Roboto", sans-serif`
- [ ] Tailwind base styles

## Shared UI Components (packages/ui or app-level)

- [ ] `Button` — variants: `primary` (solid blue), `outline` (white border)
- [ ] `Card` compound component (`Card.Root`, `Card.Header`, `Card.Content`, `Card.Footer`)
- [ ] `Section` wrapper with consistent py/px

## Section Components (in order)

### Navbar.tsx

- [ ] Fixed top, transparent → dark bg on scroll
- [ ] Logo "Advocate" (Playfair Display)
- [ ] Nav links: Home, Practice Areas, Services, About, Contact
- [ ] Phone CTA with icon (right side)
- [ ] Mobile hamburger menu

### Hero.tsx

- [ ] Fullscreen (100vh, min-h-[780px])
- [ ] Background image (picsum seed `advocate-hero`) + dark overlay `rgba(0,0,0,0.4)`
- [ ] Headline: "Meet all your investigative and litigation needs" (Playfair Display, text-4xl→5xl)
- [ ] Subtext paragraph (muted white)
- [ ] Dual CTAs: Primary "Our Services" + Outline "Contact Us"
- [ ] Responsive layout (text right-aligned on desktop)

### About.tsx

- [ ] Dark section bg (`--color-dark`)
- [ ] Two-column: left text, right image
- [ ] Left: "I'm Jon Campbell" heading + 2 paragraphs + Primary CTA button
- [ ] Right: Portrait image (picsum seed `advocate-about`) with accent bar (`::after` bg `--color-dark` offset)

### ServicesGrid.tsx

- [ ] Section with subtle bg (`rgba(255,255,255,0.02)`)
- [ ] 6 cards in responsive grid (3 cols lg, 2 cols md, 1 col sm)
- [ ] Cards: Councel, Legal Dept, Compliance, Identity, Hall of Justice, Law Abiding
- [ ] Each: h4 title + paragraph

### WhyUs.tsx

- [ ] Dark bg section
- [ ] Two-column: left content, right tabbed features
- [ ] Left: "Security Consultants" heading, "Justice serves" subheading, copy paragraph
- [ ] Right: 3 vertical feature tabs (Investigative, Security, Criminal Defense)

### ServicesTabs.tsx

- [ ] Vertical pill tabs on left (col-md-4), content on right (col-md-7 + offset)
- [ ] 3 tabs: Investigative Services, Security Consultations, Criminal Defense Investigations
- [ ] Active state styling with primary blue accent

### PracticeAreas.tsx

- [ ] Numbered cards grid (3 cols lg, 2 cols md, 1 col sm)
- [ ] Cards: 01 Asset Searches, 02 Background Investigations, 03 Business Due Diligence, etc.
- [ ] Each: number badge, h3 title, right-arrow icon, full card link hover

### Testimonials.tsx

- [ ] Vertical avatar tabs (left) + quote panels (right)
- [ ] 3 testimonials with avatar, name, title, quote
- [ ] Avatars: picsum seeds `advocate-testimonial-1/2/3`

### Resources.tsx

- [ ] Dark bg section
- [ ] "Resources" heading
- [ ] List of links with Lucide icon bullets (e.g., `ChevronRight` or `ArrowRight`)

### Footer.tsx

- [ ] Dark bg
- [ ] "Made with Component Dock" link → `https://www.componentdock.com/`
- [ ] Copyright / minimal legal links

## App Assembly

- [ ] `App.tsx` imports and composes all sections in correct order
- [ ] `main.tsx` entry point
- [ ] Verify no ColorLib references anywhere in `apps/advocate/`

## Tests (Vitest + Testing Library)

- [ ] Unit tests for each section component
- [ ] Interaction tests (tabs, mobile menu)
- [ ] 100% coverage (lines, functions, branches, statements)
- [ ] Run `npm run test:coverage` and verify

## Verification Gates

- [ ] `npm run typecheck` passes
- [ ] `npm run lint` passes
- [ ] `npm run build` passes
- [ ] `scripts/verify-app.sh advocate` passes (per-app gate)
- [ ] Deploy to `advocate.free.componentdock.com` verified

## PR & Documentation

- [ ] Open PR with title `feat: advocate (ColorLib Solicitor) template`
- [ ] PR description includes: source template, preview URL, design tokens, what differs (renames, placeholder images)
- [ ] Squash merge immediately
- [ ] Post-merge: update TEMPLATES.md `[ ]` → `[x]` with surge URL, run `npm run readme:status`
