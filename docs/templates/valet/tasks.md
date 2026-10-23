# Valet — Implementation Tasks

**Source:** ColorLib Virtualassistant
**Preview:** https://preview.colorlib.com/theme/virtualassistant/
**Spec:** `openspec/specs/template-valet/spec.md`

## Task outline

### 1. Scaffold app
- Copy simplest existing app as template
- Rename package to `@free-react-templates/valet`
- Set `public/CNAME` to `valet.free.componentdock.com`
- Set `homepage` to `https://valet.free.componentdock.com`
- Run `npm install` at repo root for lockfile

### 2. Theme & tokens (`src/index.css`)
- Import Roboto font (weights 300, 400, 500, 700) via Google Fonts
- Define `@theme` tokens: brand accent `#21bf73`, primary `#007bff`, footer bg `#1a1a1a`
- Configure Tailwind v4 with the brand colors

### 3. Components (section-by-section)

| # | Component | Source section class | Fidelity notes |
|---|-----------|---------------------|----------------|
| 1 | `Navbar.tsx` | `navbar-dark ftco-navbar bg-dark` | Dark navbar, logo text "Virtual Assistant", 7 links, responsive hamburger with `aria-label` toggle |
| 2 | `Hero.tsx` | `hero-wrap` | Full-width bg image (picsum), dark overlay, H1 + paragraph + CTA button, mouse scroll indicator |
| 3 | `WhyChooseUs.tsx` | `ftco-fullwidth` | Split layout: left = image, right = 4 feature items with icon + title. Heading "Why Choose Us?" |
| 4 | `Services.tsx` | `ftco-section` | "Our Services & Offers", 8 service cards in 4-col grid, each with lucide icon + title |
| 5 | `Comparison.tsx` | `ftco-no-pb ftco-no-pt` | Two-column: "Regular Office Employee" vs "Virtual Assistant Employee" |
| 6 | `Testimonials.tsx` | `testimony-section` | Green (#21bf73) overlay top, "Happy Clients", carousel with 3-5 testimonial cards (avatar, quote, name) |
| 7 | `HowItWorks.tsx` | `ftco-section bg-light` | "How It Works", 3+ step process with icons |
| 8 | `Pricing.tsx` | `ftco-section bg-light` | 4 pricing cards: Small $49, Startup $79, Medium $109, Commercial $149. Price in #21bf73. Box-shadow cards |
| 9 | `Blog.tsx` | `ftco-section` | "Recent Blog", 3 blog cards with image + title + date + description |
| 10 | `ContactForm.tsx` | `ftco-appointment` | Background image, form with Name + Email + Message + "Send message" button |
| 11 | `Footer.tsx` | `ftco-footer` | Dark (#1a1a1a), 5 columns (brand+social, Explore, Legal, Company, contact info), ComponentDock link |

### 4. App.tsx
- Compose all sections in order

### 5. Tests (TDD)
- One test file per component
- Render all sections, verify headings, button text, card counts
- Verify form fields exist with correct placeholders
- Verify footer has ComponentDock link
- 100% coverage required

### 6. Build & verify
- `npm run typecheck`
- `npm run lint`
- `npm run test:coverage` (100%)
- `npm run build`

## Design tokens summary

| Token | Value |
|-------|-------|
| Font | Roboto 300/400/500/700 |
| Brand accent (prices, testimony overlay) | #21bf73 |
| Primary button | #007bff |
| Footer bg | #1a1a1a |
| Card shadow | 0 24px 48px -13px rgba(0,0,0,0.05) |
| Card border-radius | 4px |
| Light section bg | #f8f9fa |
| Body text | #212529 |

## Fidelity notes

- The original uses Bootstrap 4 grid — recreate with Tailwind utility classes
- Owl carousel for testimonials — use a CSS-based carousel or simple state-driven slider
- Font Awesome 4 icons → use `lucide-react` equivalents
- Flaticon custom icons → use `lucide-react`
- Background images → `https://picsum.photos/seed/valet-<n>/<w>/<h>`
- Parallax effects (stellar-background-ratio) → CSS `background-attachment: fixed`
- The "mouse" scroll indicator is a simple SVG animation — keep it
