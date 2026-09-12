# Creativar — Implementation Todo & Design Notes

## Template Overview
- **Name:** Creativar (new, original)
- **Source:** ColorLib Evans (https://colorlib.com/wp/template/evans/)
- **Preview:** https://preview.colorlib.com/theme/evans/
- **Category:** Personal creative portfolio / freelancer landing page

## Implementation Tasks

### Phase 1: Scaffold
- [ ] Create `apps/creativar/` by copying simplest existing app (e.g. apps/aurora)
- [ ] Rename package to `@free-react-templates/creativar`
- [ ] Update `public/CNAME` to `creativar.free.componentdock.com`
- [ ] Update `package.json` homepage to `https://creativar.free.componentdock.com`
- [ ] Run `npm install` at repo root to register workspace in lockfile

### Phase 2: Design Tokens (src/index.css)
- [ ] Add `@theme` block with brand-accent `#fdcb6e`
- [ ] Add `@theme` block with dark-bg `#000000`, dark-surface `#1e1e1e`, light-gray `#b3b3b3`
- [ ] Configure Poppins, Lora, Barlow Condensed via Google Fonts `<link>` in index.html

### Phase 3: Section Components
- [ ] `Navbar.tsx` — Dark bg, brand text, 3 links (About/Work/Contact), transparent→dark on scroll
- [ ] `Hero.tsx` — Split layout: left=VR outline text (Barlow Condensed 900, stroke), right=background image carousel (2 slides)
- [ ] `Intro.tsx` — Right-aligned text block, heading with gold-highlighted keywords, paragraph
- [ ] `Services.tsx` — 4-col grid, icon + title + description, hover→gold, active cards dark/gold
- [ ] `Portfolio.tsx` — "Latest & Greatest" heading, 3 full-width entries with alternating layout, hover text reveal
- [ ] `Footer.tsx` — Black bg, 3 columns (brand/links/contact), social icons, Component Dock attribution

### Phase 4: App Composition
- [ ] `App.tsx` — Compose all sections in order: Navbar → Hero → Intro → Services → Portfolio → Footer
- [ ] `vite.config.ts` — Register `injectUiSource()` for Tailwind v4.3

### Phase 5: Tests (TDD)
- [ ] Navbar.test.tsx — renders links, hamburger on mobile
- [ ] Hero.test.tsx — renders VR text, background images
- [ ] Intro.test.tsx — renders highlighted text, paragraph
- [ ] Services.test.tsx — renders 4 cards, hover state
- [ ] Portfolio.test.tsx — renders 3 entries, alternating layout
- [ ] Footer.test.tsx — renders brand, links, Component Dock attribution
- [ ] App.test.tsx — composes all sections

### Phase 6: Verification
- [ ] `scripts/verify-app.sh creativar` passes
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com

## Design Notes — Section-by-Section Fidelity

### Navbar
- Dark background (#212529 or darker), transparent at top → solid dark on scroll
- Brand name "Creativar" as text (no logo image)
- 3 nav links: About, Work, Contact — right-aligned (ml-auto)
- Mobile: hamburger toggle with collapse

### Hero
- Two-column split: left = solid black with giant VR text, right = image slider
- VR text: "Creativar" in Barlow Condensed 900, transparent fill, white stroke (1px), centered vertically, ~41vw font-size
- Right side: background image carousel, 750px height, navigation arrows (60x60 white squares, hover→black+gold)
- On mobile: full-width stacked, image becomes background with dark overlay

### Intro
- Right-aligned text block (col-md-8, justify-content-end)
- Heading: "Web Designer, hobbyist writer, and the CEO & Founder of Creativar"
- Key words highlighted with gold (#fdcb6e) background via `<span>`
- Lora font for heading, ~60px font-size
- Short paragraph below

### Services
- 4 equal columns (col-lg-3), no gutters
- Each card: large icon (80px, flaticon-style), title (28px, font-weight 400), description/address text
- Hover: background→#fdcb6e, text→black, icon→white, 0.3s transition
- Card states: one card "active" (dark bg #1e1e1e, white text), one "active-2" (gold bg #fdcb6e)
- On mobile: stacks to single column

### Portfolio
- Section heading: "Latest & Greatest" centered, gold highlight on "Greatest"
- Entry 1: image left (col-md-5), text right (col-md-7) — category tag + title + description + "View Portfolio" link
- Entry 2: image right, text left (alternating)
- Entry 3: image left, text right
- Text: custom-btn style (uppercase, 12px, letter-spacing 3px, #b3b3b3)
- Hover: text slides up (translateY + opacity transition)
- Full-width images via container-fluid, no gutters

### Footer
- Black background (#000), 7em vertical padding
- 3 columns: brand + description, quick links, newsletter/contact
- Font: Poppins for headings (13px, uppercase, letter-spacing 3px, font-weight 900)
- Text: rgba(255,255,255,0.7) for body, white for headings
- Social icons row
- "Made with Component Dock" attribution (replaces ColorLib credit)
