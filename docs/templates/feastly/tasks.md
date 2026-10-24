# Feastly — Implementation Tasks

Source design: **Foodfun** (`https://colorlib.com/wp/template/foodfun/`) →
recreation name **feastly**. Shipped at https://feastly.free.componentdock.com.

Scope: a restaurant landing page — navy hero, split welcome, priced menu,
dark reservation band, numbered specials, testimonials, blog updates, a booking
form and a dark footer. Single page.

## Component breakdown

Render order as composed in `apps/feastly/src/App.tsx`:

### 1. Navbar
- Logo + Home, About, Menu, Specials, Contact.
- Scenario — links: **WHEN** the page loads; **THEN** the nav shows Home, About,
  Menu, Specials and Contact.

### 2. Banner
- Navy hero, tracked kicker, `h1` "Discover the flavors of feastly" with italic
  yellow emphasis, `book a table` CTA.
- Scenario — headline: **WHEN** the page loads; **THEN** the hero shows
  "Discover the flavors of feastly".

### 3. Welcome
- Photo left, copy right, `book a table` CTA.
- Scenario — split layout: **WHEN** the page loads; **THEN** a welcome section
  with an image and a CTA is visible.

### 4. Menu
- Section heading "we serve delicious food" + dishes with prices.
- Scenario — priced dishes: **WHEN** the page loads; **THEN** at least three
  dishes with prices are listed.

### 5. ReservationCTA
- Dark photo band, `h2` "Natural ingredients and testy food", filled CTA.

### 6. Specials
- Numbered `01.` / `02.` specials with alternating photos.

### 7. Testimonials
- Circular avatars + quotes, three across at desktop.

### 8. Updates
- Three blog cards with photo, meta line, title and `read more`.

### 9. BookingForm
- One form: date, name, phone, e-mail + submit; native date input.
- Scenario — submit without reload: **WHEN** the user submits the booking form;
  **THEN** the page does not reload and the form stays rendered.

### 10. Footer
- About, opening hours, contact + copyright + Component Dock link.
- Scenario — Component Dock link: **WHEN** the page loads; **THEN** the footer
  contains a link to "https://www.componentdock.com/" labelled "Component Dock".

### Cross-cutting requirements

- **Page title** — "Feastly — Restaurant".
- **Design tokens** — yellow `#ffb606`, navy `#131230`, smoke `#f9f9ff`;
  `Playfair Display` headings, `Roboto` body; button radius 3px, card radius 8px.
- **Provenance** — no file under `apps/feastly/` may contain "ColorLib", a
  colorlib.com URL, or the source template's name; the footer credits Component
  Dock instead.

## Verification

- [x] `apps/feastly` ships on https://feastly.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order: banner → welcome → menu → reservation → specials →
      testimonials → updates → booking → footer
- [x] Yellow `#ffb606` on navy `#131230`; Playfair Display headline with italic
      accent words
- [x] No source-designer name, source URL or source template name under
      `apps/feastly/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer SHALL link Component Dock
  (`https://www.componentdock.com/`).
- **Provenance ban.** No `colorlib.com` URL, designer name or source template
  name under `apps/feastly/` (AGENTS.md rule 5).
- **Deploy identity.** `public/CNAME` = `feastly.free.componentdock.com`,
  package `homepage` = `https://feastly.free.componentdock.com`.
