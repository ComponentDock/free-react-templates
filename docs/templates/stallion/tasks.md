# Stallion — Implementation Tasks

Source design: **Fitness** (`https://colorlib.com/wp/template/fitness/`) →
recreation name **stallion**. Shipped at
https://stallion.free.componentdock.com.

Scope: a gym landing page — utility bar + red nav strip, photo hero, course
cards, a two-half CTA, three feature cards, a BMI calculator, a gallery, three
testimonials, a brand strip, a closing CTA band and a three-column footer.

## Component breakdown

Render order as composed in `apps/stallion/src/App.tsx`:

### 1. Header
- E-mail left, logo centre, phone right; red nav strip below.
- Scenario — nav strip: **WHEN** the page loads; **THEN** the nav shows Home,
  About, Services, Trainers, Blog and Contact.

### 2. Hero
- Photo hero, uppercase `h1` "Shape your Perfect body", paragraph, red CTA.
- Scenario — headline: **WHEN** the page loads; **THEN** the hero shows
  "Shape your Perfect body".

### 3. TopCourses
- Three course cards with name + price ($275 / $200 / $225).
- Scenario — pricing: **WHEN** the page loads; **THEN** each course card shows a
  price.

### 4. CtaBanner
- Two photo halves, each with "Get into shape now".

### 5. Features
- Three icon cards: Smart Security, Unlimited Colors, Endless Support.

### 6. BmiCalculator
- Height (inches) and weight (lbs) inputs + "Calculate Your BMI".
- Scenario — valid input: **WHEN** the user enters height 70 and weight 160 and
  submits; **THEN** the BMI is 22.96 (703 × lb / in²).
- Scenario — empty input: **WHEN** an input is empty; **THEN** no BMI figure is
  shown and the page does not reload.

### 7. Gallery
- Photo mosaic, no captions.

### 8. Testimonials
- Three quotes with names (Helena Phillips, Cordelia Barton, Carrie Reese).

### 9. Brands
- One row of logo marks.

### 10. FinalCta
- Closing photo band: "It's never late to start, join us today!".

### 11. Footer
- About Us, Contact Us, Newsletter (input + submit) + bottom row + Component
  Dock link.
- Scenario — Component Dock link: **WHEN** the page loads; **THEN** the footer
  contains a link to "https://www.componentdock.com/" labelled "Component Dock".

### Cross-cutting requirements

- **Page title** — "Stallion — Fitness".
- **Design tokens** — red `#f6214b` on white / `#f9f9ff`, ink `#222222`, muted
  `#777777`; `Poppins` throughout; button radius 3px; uppercase tracked nav on a
  solid red strip.
- **Provenance** — no file under `apps/stallion/` may contain "ColorLib", a
  colorlib.com URL, or the source template's name; the footer credits Component
  Dock instead.

## Verification

- [x] `apps/stallion` ships on https://stallion.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order: hero → courses → CTA pair → features → BMI → gallery →
      testimonials → brands → final CTA → footer
- [x] Red `#f6214b` nav strip and buttons; Poppins headings
- [x] No source-designer name, source URL or source template name under
      `apps/stallion/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer SHALL link Component Dock
  (`https://www.componentdock.com/`).
- **Provenance ban.** No `colorlib.com` URL, designer name or source template
  name under `apps/stallion/` (AGENTS.md rule 5).
- **Deploy identity.** `public/CNAME` = `stallion.free.componentdock.com`,
  package `homepage` = `https://stallion.free.componentdock.com`.
