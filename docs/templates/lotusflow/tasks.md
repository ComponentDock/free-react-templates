# LotusFlow (Colorlib Yoga Studio) — Tasks & Design Notes

> Prep artifacts prepared on `main` under the source name (template-yoga-studio);
> renamed to the NEW name **LotusFlow** in the implementation PR.

## Design notes (replication findings)

- **Original:** ColorLib "Yoga Studio" — yoga studio landing page
  (source: https://colorlib.com/wp/template/yoga-studio/).
- **Preview DOM:** https://preview.colorlib.com/theme/yoga-studio/
  (UNREACHABLE — HTTP 404 at prep time. Design notes derived from ColorLib
  page description, screenshot, and standard yoga template conventions.)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/yogastudio-free-template.jpg
  (viewed on ColorLib page; shows a modern, vibrant yoga studio landing with
  warm color palette, hero image, and clean layout.)
- **Visual design (from page description + conventions):**
  "modern, vibrant and lively" yoga studio landing. Features: hero slider,
  CTA buttons, testimonials carousel, pricing tables, contact form + Google
  Maps, blog/news section.
- **Design tokens (inferred — preview unreachable):**
  - Primary warm terracotta/peach `#E8A87C` (yoga warmth).
  - Secondary sage/teal `#41B3A3` (calm, wellness).
  - Accent dusty rose `#C38D9E` (feminine, gentle).
  - Dark navy `#202A44` (text, headings, dark sections).
  - Light backgrounds: white, warm off-white `#F8F5F0`, light gray `#FAFAFA`.
  - Fonts: "Playfair Display" (headings) + "Open Sans" (body) via Google Fonts.
  - Buttons: pill-shaped (`border-radius: 30px`), primary background, white text.
  - Hero: full-width background image, dark overlay gradient, centered white text.
- **Structure (1:1 section order):**
  1. Navbar: "LotusFlow" logo + Home, About, Classes, Pricing, Testimonials,
     Contact + dark-mode toggle.
  2. Hero: Full-width background image (yoga class), headline "Find Your Inner
     Peace", subheadline, "Start Your Journey" CTA button.
  3. About: "About Our Studio" heading + description + studio image.
  4. Classes: "Our Classes" heading + 3 class cards (name, description, image).
  5. Pricing: "Pricing Plans" heading + 3 columns (Basic, Standard, Premium),
     middle column highlighted, feature lists with checkmarks.
  6. Testimonials: "What Our Students Say" heading + carousel of quote cards.
  7. Contact: "Get In Touch" heading + form (Name, Email, Subject, Message,
     Submit) + Google Maps placeholder.
  8. Footer: Logo, nav links, social icons, Component Dock link, copyright.
- **Recreation name:** LotusFlow (NEW — the ColorLib source is "Yoga Studio").
  App folder `apps/lotusflow`, package `@free-react-templates/lotusflow`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/yoga-studio-<n>/<w>/<h>`); lucide-react icons; Playfair
  Display + Open Sans via Google Fonts; forms prevent default (no backend);
  terracotta primary in `@theme`; repo-standard Navbar (dark-mode toggle) +
  Footer chrome.

## Implementation tasks

### Phase 1: Scaffold
- [ ] Copy simplest existing app as base (e.g., `apps/abode`)
- [ ] Rename package to `@free-react-templates/lotusflow`
- [ ] Update `public/CNAME` to `lotusflow.free.componentdock.com`
- [ ] Update `homepage` in `package.json` to `https://lotusflow.free.componentdock.com`
- [ ] Run `npm install` at repo root to register workspace in lockfile

### Phase 2: Design tokens
- [ ] Set up `src/index.css` with `@theme` tokens:
  - `--color-primary: #E8A87C` (terracotta)
  - `--color-secondary: #41B3A3` (sage)
  - `--color-accent: #C38D9E` (dusty rose)
  - `--color-dark: #202A44` (navy)
- [ ] Add Google Fonts link to `index.html` (Playfair Display + Open Sans)

### Phase 3: Components (TDD — write tests first)
- [ ] `Navbar.tsx` — sticky nav with logo + 6 links + dark-mode toggle
- [ ] `Hero.tsx` — full-width background image, overlay, headline, CTA
- [ ] `About.tsx` — heading, description, studio image
- [ ] `Classes.tsx` — heading + 3 class cards (grid layout)
- [ ] `Pricing.tsx` — heading + 3 pricing columns, middle highlighted
- [ ] `Testimonials.tsx` — heading + carousel/slider of quote cards
- [ ] `Contact.tsx` — heading + form (4 fields) + map placeholder
- [ ] `Footer.tsx` — logo, links, social icons, Component Dock link, copyright

### Phase 4: Assembly
- [ ] Compose all sections in `App.tsx` in correct order
- [ ] Add placeholder images via `picsum.photos/seed/yoga-studio-<n>`
- [ ] Ensure responsive layout (mobile-first)

### Phase 5: Verification
- [ ] `npm run test:coverage` — 100% lines/functions/branches/statements
- [ ] `npm run typecheck` — no errors
- [ ] `npm run lint` — no warnings
- [ ] `npm run build` — successful build
- [ ] `scripts/verify-app.sh lotusflow` — full per-app gate passes
- [ ] No ColorLib references in any `apps/lotusflow/` file
- [ ] Footer links to https://www.componentdock.com/

### Phase 6: Ship
- [ ] Commit as `feat: add LotusFlow (ColorLib Yoga Studio) template`
- [ ] Open PR, merge immediately
- [ ] Update `TEMPLATES.md`: mark Yoga Studio as `[x]`
- [ ] Regenerate README status
