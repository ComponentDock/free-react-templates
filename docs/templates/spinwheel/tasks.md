# SpinWheel — Implementation Tasks

Source design: **Carousel 17** (`https://colorlib.com/wp/template/carousel-17/`) →
recreation name **spinwheel**. Shipped at
https://spinwheel.free.componentdock.com.

Scope: a single-carousel component demo. The source page is one centred heading
plus a three-slide carousel on a blank white page — no navbar, no hero, no
content bands, no footer. The recreation keeps that shape and appends the
mandatory Component Dock footer.

## Component breakdown

Render order as composed in `apps/spinwheel/src/App.tsx`:

### 1. TestimonialCarousel
- One slide window at a time (3 cards at `md+`, 1 below), round prev/next arrow
  buttons at the slide edges, dot indicators underneath.
- Scenario — visible slide: **WHEN** the page loads; **THEN** the first
  testimonial is visible with a name and a quote.
- Scenario — next control: **WHEN** the user activates the next arrow;
  **THEN** the following testimonial becomes visible.
- Scenario — previous control: **WHEN** the user activates the previous arrow;
  **THEN** the preceding testimonial becomes visible.
- Scenario — dots: **WHEN** the user activates a dot; **THEN** the carousel
  jumps to that slide and the dot is marked active.
- Scenario — no arrow chrome in the sheet: the source's arrows are injected by
  its own script, so the buttons are present but unstyled by the reference
  beyond white circles with dark chevrons.

### 2. TestimonialCard
- Circular avatar, name, quote; centred, no card border or shadow (the source
  rounds nothing but dots).

### 3. Footer
- Component Dock credit + copyright.
- Scenario — Component Dock link: **WHEN** the page loads; **THEN** the footer
  contains a link to "https://www.componentdock.com/" labelled "Component Dock".

### Cross-cutting requirements

- **Page title** — "SpinWheel — Testimonials".
- **Design tokens** — white ground, ink `#212529`, muted `#999999`, dots 50%
  radius; `Roboto` throughout; **no rounded cards, no shadows**.
- **Provenance** — no file under `apps/spinwheel/` may contain "ColorLib", a
  colorlib.com URL, or the source template's name; the footer credits Component
  Dock instead.

## Verification

- [x] `apps/spinwheel` ships on https://spinwheel.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Page shape matches the source: heading + single carousel + footer, no
      navbar/hero
- [x] Roboto, round dots, round arrow buttons, square card corners
- [x] No source-designer name, source URL or source template name under
      `apps/spinwheel/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer SHALL link Component Dock
  (`https://www.componentdock.com/`).
- **Provenance ban.** No `colorlib.com` URL, designer name or source template
  name under `apps/spinwheel/` (AGENTS.md rule 5).
- **Deploy identity.** `public/CNAME` = `spinwheel.free.componentdock.com`,
  package `homepage` = `https://spinwheel.free.componentdock.com`.
