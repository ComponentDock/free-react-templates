# Zing — Implementation Tasks

> **SHIPPED** — this prep's design shipped as `apps/zing`
> (<https://zing.free.componentdock.com>). The unchecked items below are
> prep history, not outstanding work.

Source design: **Tasteit** (`https://colorlib.com/wp/template/tasteit/`) →
recreation name **zing**. Shipped at https://zing.free.componentdock.com.

Scope: a restaurant landing page — red contact strip, dark nav, photo hero with a
script numeral, a red booking card beside a welcome split, a statement band, a
six-group menu, a dark testimonial slider, four chefs, an ingredients split,
three blog cards, a red newsletter band and a near-black footer.

## Component breakdown

Render order as composed in `apps/zing/src/App.tsx`:

### 1. Navbar
- Contact strip (phone, e-mail, hours, socials) + `Zing` wordmark, Home, About,
  Chef, Menu, Blog, Contact, `Book a table` CTA.
- Scenario — strip: **WHEN** the page loads; **THEN** a `tel:` link and a
  `mailto:` link are visible above the nav.
- Scenario — links: **WHEN** the page loads; **THEN** the nav shows Home, About,
  Menu, Chefs and Contact.

### 2. Hero
- Photo hero, boxed uppercase eyebrow, `h1` "Cooking Since" + script `1958`,
  paragraph.
- Scenario — headline: **WHEN** the page loads; **THEN** the hero shows
  "Cooking Since" and the year in a script face.

### 3. About (booking card + welcome split)
- Six-field booking card (name, e-mail, phone, date, time, guests) on the brand
  red, plus the welcome copy and portrait.
- Scenario — submit without reload: **WHEN** the user submits the booking form;
  **THEN** the page does not reload and the form remains rendered.
- Scenario — typing: **WHEN** the user types a name; **THEN** the field holds the
  value.

### 4. Menu
- Six groups (Brunch, Lunch, Dinner, Desserts, Wine Card, Drinks & Tea), three
  dishes each with prices, active-group state.
- Scenario — tabs: **WHEN** the user activates `Lunch`; **THEN** the lunch dishes
  and prices are shown and the tab is highlighted.
- Scenario — dishes: **WHEN** a group is active; **THEN** at least three dish
  names and prices are visible.

### 5. Testimonials
- Dark photo band, quote cards with avatar circles, slide controls.
- Scenario — navigation: **WHEN** the user activates the next slide control;
  **THEN** a different guest quote is shown.

### 6. Chefs
- Four portraits with name + role.

### 7. Ingredients
- Split band: copy, ingredient chips, photo.

### 8. Blog
- Three post cards: photo, date, title, `read more`.

### 9. CtaBanner / Newsletter
- Full-bleed brand-red band with a headline and an inline e-mail field + submit.
- Scenario — newsletter submit: **WHEN** the user submits an e-mail; **THEN** the
  page does not reload.

### 10. Footer
- Brand + socials, hours, explore links, contact, copyright + Component Dock
  link.
- Scenario — Component Dock link: **WHEN** the page loads; **THEN** the footer
  contains a link to "https://www.componentdock.com/" labelled "Component Dock".

### Cross-cutting requirements

- **Page title** — "Zing — Restaurant".
- **Design tokens** — brand red `#cf1f28` (focus accent `#e52b34`), ink `#000` /
  `#343a40`, muted `#6c757d`, light band `#f8f9fa`, footer `#1a1a1a`; `Roboto`
  body + `Dancing Script` accents; boxed eyebrows with `letter-spacing: 5px`;
  avatars/dots 50%, small radii 2–4px elsewhere. The shipped app currently themes
  on `#e52b34` — re-point to `#cf1f28` when the app is next touched.
- **Provenance** — no file under `apps/zing/` may contain "ColorLib", a
  colorlib.com URL, or the source template's name; the footer credits Component
  Dock instead.

## Verification

- [x] `apps/zing` ships on https://zing.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order: hero → booking/welcome → intro band → menu → testimonials →
      chefs → ingredients → blog → newsletter → footer
- [x] Red brand fill, boxed uppercase eyebrows, script numeral in the hero
- [ ] Brand token re-pointed from `#e52b34` to `#cf1f28` (open gap, recorded in
      the design notes)
- [x] No source-designer name, source URL or source template name under
      `apps/zing/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer SHALL link Component Dock
  (`https://www.componentdock.com/`).
- **Provenance ban.** No `colorlib.com` URL, designer name or source template
  name under `apps/zing/` (AGENTS.md rule 5).
- **Deploy identity.** `public/CNAME` = `zing.free.componentdock.com`, package
  `homepage` = `https://zing.free.componentdock.com`.
