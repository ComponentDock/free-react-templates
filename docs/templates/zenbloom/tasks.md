# Zenbloom — Implementation Tasks

Source design: **Yogabest** (`https://colorlib.com/wp/template/yogabest/`) →
recreation name **zenbloom**. Shipped at
https://zenbloom.free.componentdock.com.

Scope: a yoga-studio landing page — top bar + transparent nav, a 900px photo hero
with an angled cut, three services, a split about, a dark four-card band,
counters, six class cards, a testimonial slider, a weekly schedule table, four
trainers, three blog cards and a four-column dark footer. Single page.

## Component breakdown

Render order as composed in `apps/zenbloom/src/App.tsx`:

### 1. TopBar
- Phone, e-mail, four social dots.
- Scenario — contact strip: **WHEN** the page loads; **THEN** a phone number and
  an e-mail are visible above the nav.

### 2. Navbar
- Logo + Home, About, Trainer, Classes, Schedule, Blog, Contact; transparent over
  the hero.
- Scenario — links: **WHEN** the page loads; **THEN** the nav shows Home, About,
  Classes, Schedule and Contact.

### 3. Hero
- Angled photo hero, script green kicker, `h1` "Yoga Enhances Your Life",
  paragraph, play button.
- Scenario — headline: **WHEN** the page loads; **THEN** the hero shows
  "Yoga Enhances Your Life".
- Scenario — angled edge: **WHEN** the hero renders; **THEN** its bottom-right
  corner is diagonally clipped.

### 4. Services
- Three icon cards: Outdoor Activities, Experienced Trainers, Happy Environment.

### 5. About
- Split photo + "Life in Divine Yoga", blockquote, video link.

### 6. Features
- Photo band, four translucent cards (Body & Mind Balance, Healthy Daily Life,
  Improves your flexibility, …).

### 7. Counter
- Four figures with captions.
- Scenario — values: **WHEN** the counters render; **THEN** all four show
  numeric values.

### 8. Classes
- Six cards: Private & Group Lessons, Yoga for Pregnant, Yoga for Beginners,
  Yoga Barre, Yoga Core, Yoga Restore.

### 9. Testimonials
- Quote column over a photo, five slides with dots.

### 10. Schedule
- Weekly table (time × weekday), horizontally scrollable under `md`.
- Scenario — table scroll: **WHEN** the viewport is narrow; **THEN** the
  schedule remains readable inside a horizontal scroll container.

### 11. Trainers
- Four portraits with name + role.

### 12. Blog
- Three post cards: photo, meta, title, `read more`.

### 13. Footer
- Brand + socials, Recent Blog, Explore, Have a Questions? + Component Dock link.
- Scenario — Component Dock link: **WHEN** the page loads; **THEN** the footer
  contains a link to "https://www.componentdock.com/" labelled "Component Dock".

### Cross-cutting requirements

- **Page title** — "Zenbloom — Yoga Studio".
- **Design tokens** — brand green `#6cae22` (tint `#9acb56`), paper `#fff`, ink
  `#000`, muted `#6c757d`; `Poppins` body + `Reenie Beanie` script kickers; round
  (50%) avatars and play button, 4–5px card radius.
- **Provenance** — no file under `apps/zenbloom/` may contain "ColorLib", a
  colorlib.com URL, or the source template's name; the footer credits Component
  Dock instead.

## Verification

- [x] `apps/zenbloom` ships on https://zenbloom.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order: hero → services → about → features → counters → classes →
      testimonials → schedule → trainers → blog → footer
- [x] Green `#6cae22` brand, script kicker, angled hero cut
- [x] No source-designer name, source URL or source template name under
      `apps/zenbloom/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer SHALL link Component Dock
  (`https://www.componentdock.com/`).
- **Provenance ban.** No `colorlib.com` URL, designer name or source template
  name under `apps/zenbloom/` (AGENTS.md rule 5).
- **Deploy identity.** `public/CNAME` = `zenbloom.free.componentdock.com`,
  package `homepage` = `https://zenbloom.free.componentdock.com`.
