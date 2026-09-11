# Heirloom — Implementation Tasks

Source: ColorLib Classic (https://colorlib.com/wp/template/classic/)
Preview: https://preview.colorlib.com/theme/classic/
New name: heirloom

## Task list

### Setup

- [ ] Create `apps/heirloom/` (copy simplest existing app, rename package to `@free-react-templates/heirloom`)
- [ ] Add `public/CNAME` with `heirloom.free.componentdock.com`
- [ ] Set `homepage` in package.json to `https://heirloom.free.componentdock.com`
- [ ] Configure `vite.config.ts` with `injectUiSource()` pattern
- [ ] Run `npm install` at repo root to register workspace in lockfile

### Design tokens (src/index.css @theme)

- [ ] Brand colors: `--color-brand-primary: #a1c4fd`, `--color-brand-secondary: #c2e9fb`
- [ ] Accent: `--color-accent: #f7c336`
- [ ] Text palette: `--color-text-dark: #4f4f4f`, `--color-text-medium: #6b6d6f`, `--color-text-light: #898989`
- [ ] Section gray: `--color-section-gray: #f5f5f5`
- [ ] Font families: Montserrat (headings), Roboto (body), Satisfy (decorative) via Google Fonts `<link>`

### Components (src/components/)

- [ ] `Navbar.tsx` — sticky top, logo, 9 nav links, hamburger for mobile, search toggle
- [ ] `Hero.tsx` — full-viewport, background image (picsum.photos), dark overlay, headline, CTA button
- [ ] `About.tsx` — two-column: text + image left, tabbed panel right (Mission/Vision/Support)
- [ ] `Services.tsx` — 3-column grid, 6 service cards with lucide-react icons
- [ ] `Skills.tsx` — progress bars with percentage labels, gray background section
- [ ] `Portfolio.tsx` — filter tabs + image grid with hover overlay
- [ ] `Team.tsx` — team member cards: photo, name, role, social icons
- [ ] `Pricing.tsx` — Monthly/Yearly toggle, pricing cards in columns
- [ ] `Blog.tsx` — blog post cards with image, date, title
- [ ] `Contact.tsx` — form (4 fields + submit) + contact info sidebar
- [ ] `Footer.tsx` — multi-column links, social icons, Component Dock attribution
- [ ] `App.tsx` — compose all sections in order

### Testing (TDD)

- [ ] Write tests for each component before implementation
- [ ] Ensure 100% lines/functions/branches/statements coverage
- [ ] Verify with `npm run test:coverage` in workspace

### Verification

- [ ] `scripts/verify-app.sh heirloom` passes (typecheck + lint + knip + fallow + test + build)
- [ ] Visual fidelity check against screenshot
- [ ] No ColorLib references in app code

## Design notes — section-by-section fidelity

### Navbar

- Fixed/affixed on scroll (data-spy="affix" in original)
- Logo left, nav links right, utility icons (user, search) in a secondary menu
- Language selector dropdown (can be simplified to decorative in React)

### Hero

- Full viewport height with background image
- Dark overlay: rgba(0,0,0,0.4)
- Centered headline with animated dot decoration
- Gradient primary button CTA
- Search input bar

### About

- Left: page title heading, paragraph text, image
- Right: tabbed panel with 3 tabs (Mission/Vision/Support), each showing "25 YEARS EXPERIENCE" stat
- Alternating gray background section

### Services

- 6 cards: Unique Design, Clean Layout, Well Responsive, Pro Developing, Well Documented, Quick Marketing
- Each card: icon (use lucide-react equivalents), title, short description
- 3-column grid layout

### Skills

- Progress bars with labels and percentages
- Animated counters (95%, 85%, 90%, etc.)
- Gray background section

### Portfolio

- Filter tabs at top
- Image grid with hover overlay effect
- Use picsum.photos with seed for deterministic images

### Team

- "Our expert team" heading
- Cards with team photo, name, role, social media icon links

### Pricing

- Monthly/Yearly toggle switch
- Pricing cards in columns with features list and CTA

### Blog

- "Latest Blog" heading
- Cards with image, date, title, brief excerpt

### Contact

- Form: Full Name, Email, Subject, Message textarea, Submit
- Contact info sidebar (address, phone, email)
- Map placeholder area

### Footer

- Multi-column: Company, News, Company links, Resources, Solutions
- Social media icons
- Copyright with Component Dock link (replace ColorLib attribution)
