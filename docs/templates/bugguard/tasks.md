# BugGuard — Implementation TODO + Design Notes

Source: ColorLib Pestcontrol (https://colorlib.com/wp/template/pestcontrol/)
Preview: https://preview.colorlib.com/theme/pestcontrol/
New name: `bugguard` · Package: `@free-react-templates/bugguard`

## Implementation tasks

### Phase 1: Scaffold
- [ ] Copy simplest existing app as base (e.g. `apps/aurora` or similar small template)
- [ ] Rename package to `@free-react-templates/bugguard`
- [ ] Update `public/CNAME` to `bugguard.free.componentdock.com`
- [ ] Update `homepage` in `package.json` to `https://bugguard.free.componentdock.com`
- [ ] Update `vite.config.ts` with `injectUiSource()` pattern
- [ ] Run `npm install` at repo root to register workspace in lockfile
- [ ] Load Lato font via `<link>` in `index.html`

### Phase 2: Components (section-by-section)
- [ ] `Header.tsx` — TopBar + Navbar (address, hours, phone, social, nav links, CTA)
- [ ] `Hero.tsx` — Background image slider with overlay text (subtitle, h2, tagline, CTA)
- [ ] `About.tsx` — Two-column: text left (heading, description, sub-items, CTA) + image gallery right
- [ ] `Services.tsx` — 2×4 grid of service cards with circular icon holders
- [ ] `ChooseUs.tsx` — Three-column: text + image + feature list with icons
- [ ] `Counter.tsx` — Full-width blue bar with 4 stat columns
- [ ] `Testimonials.tsx` — Heading + rating widget + testimonial carousel
- [ ] `LatestBlog.tsx` — Section title + 2-column blog post grid (1 large + 3 small)
- [ ] `Footer.tsx` — Dark 4-column footer + copyright bar + Component Dock link

### Phase 3: Tests (TDD — write tests first)
- [ ] `Header.test.tsx` — Nav links, CTA, contact info
- [ ] `Hero.test.tsx` — Heading, subtitle, tagline, CTA, background
- [ ] `About.test.tsx` — Heading, sub-items, CTA, images
- [ ] `Services.test.tsx` — 8 cards rendered, each with icon + title + desc
- [ ] `ChooseUs.test.tsx` — Heading, features, image, CTA
- [ ] `Counter.test.tsx` — 4 stats, blue background
- [ ] `Testimonials.test.tsx` — Heading, rating, quotes, nav dots
- [ ] `LatestBlog.test.tsx` — Posts rendered, dates, titles
- [ ] `Footer.test.tsx` — Columns, links, copyright, Component Dock link

### Phase 4: Verification
- [ ] `scripts/verify-app.sh bugguard` passes
- [ ] 100% line/function/branch/statement coverage
- [ ] TypeScript strict mode clean
- [ ] Build succeeds
- [ ] Mobile responsive

## Design notes

### Color palette
- Primary (buttons/accents): `#d7553b` — orange-red, used for all CTA buttons,
  date highlights, star ratings
- Secondary (counter bg): `#1c6ab8` — medium blue
- Text: `#0d0d0d` headings, `#111111` body, `#4e4e4e` muted
- Backgrounds: `#ffffff` (cards/body), `#f2f4f5` (alt sections), `#222222` (footer)

### Typography
- Font: Lato (300, 400, 700, 900) — clean sans-serif
- Section headings: 42px, 700 weight, `#0d0d0d`, 52px line-height
- Subheadings: 20px, 700 weight
- Body text: 16px default, `#4e4e4e` or `#111111`

### Button style
- Pill-shaped: `border-radius: 60px`
- Primary: `background: #d7553b`, white text, no border
- Hover: darker shade of primary

### Layout patterns
- Hero: Full-width slider, dark overlay, centered text, no container constraint
- About: 2-column with image gallery (1 large + 2 small stacked)
- Services: 2×4 grid, white cards with circular icon overlapping top edge
- Choose Us: 3-column (text | image | feature list)
- Counter: Full-width blue bar, 4 equal columns with icon + number + label
- Testimonials: Centered, heading + rating widget side by side, carousel below
- Blog: 2-column, left = 1 large post card, right = 3 stacked small posts
- Footer: 4-column dark layout, copyright bar below

### Section-specific fidelity notes
- Hero slider uses owl-carousel in original → implement as CSS-based auto-slide
  or simple React state carousel (no external carousel lib needed)
- Service card icon circles protrude above the card (negative top margin/absolute)
- Counter uses animated number counting in original → can use simple static
  numbers or add count-up animation
- Testimonial rating widget shows "4.7" in a circular badge with star icons
- Blog date uses calendar icon + "DD Month YYYY / Category" format
- Footer copyright bar has social icon links (4 icons)
