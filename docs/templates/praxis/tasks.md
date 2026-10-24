# Praxis — Implementation Tasks

Source design: **Drpro** (`https://colorlib.com/wp/template/drpro/`) → recreation
name **praxis**. Shipped at https://praxis.free.componentdock.com.

Scope: a plastic-surgery clinic landing page — split slider hero, welcome +
appointment form, "why choose us" list, six services, a parallax promo band, a
newsletter field and a four-column dark footer. Single page.

## Component breakdown

Render order as composed in `apps/praxis/src/App.tsx`:

### 1. Navbar
- Two-line logo lockup, Home / About us / Services / News / Contact, phone,
  appointment pill, social buttons.
- Scenario — links: **WHEN** the page loads; **THEN** the nav shows Home, About
  us, Services, News and Contact.

### 2. Hero
- Split hero: kicker, `h1` "Love the new you", paragraph, two CTAs (filled +
  outline pill), portrait photograph.
- Scenario — headline: **WHEN** the page loads; **THEN** the hero shows
  "Love the new you".
- Scenario — CTAs: **WHEN** the page loads; **THEN** a `read more` CTA and a
  `make an appointment` CTA are visible.

### 3. Intro
- "Welcome to our Clinic" copy + the appointment form (name, e-mail, phone,
  treatment, doctor, date) anchored at `#appointment`.
- Scenario — required fields: **WHEN** the form is empty; **THEN** submitting
  does not navigate away and the form is still rendered with the same fields.
- Scenario — treatment/doctor: **WHEN** the user opens the treatment and doctor
  selects; **THEN** each offers at least two options.

### 4. WhyChooseUs
- Image + three ranked rows (title + blurb) over a parallax photo band.

### 5. CtaBanner
- Phone strip: "Make your appointment today!" + clickable number.
- Scenario — phone link: **WHEN** the strip renders; **THEN** the number is a
  `tel:` link.

### 6. Services
- Six cards: icon, title, blurb; 3 per row at `xl`, 2 at `md`.

### 7. ParallaxDiscount
- Full-bleed photo band, large numeral promo, outline pill CTA.

### 8. Newsletter
- Inline e-mail field + submit.
- Scenario — no reload: **WHEN** the user submits an e-mail; **THEN** the page
  does not reload.

### 9. Footer
- Four columns (about + logo, contact, locations, nav) + bar + Component Dock
  link.
- Scenario — Component Dock link: **WHEN** the page loads; **THEN** the footer
  contains a link to "https://www.componentdock.com/" labelled "Component Dock".

### Cross-cutting requirements

- **Page title** — "Praxis — Plastic Surgery Clinic".
- **Design tokens** — source brand is teal `#57ccc3` with pink `#fd556d` CTAs on
  white / `#404040` ink; `Montserrat` throughout; buttons 46px tall, 20px radius,
  uppercase 14px/600. The shipped app currently themes on coral `#ffa07f` —
  re-point to the teal when the app is next touched.
- **Provenance** — no file under `apps/praxis/` may contain "ColorLib", a
  colorlib.com URL, or the source template's name; the footer credits Component
  Dock instead.

## Verification

- [x] `apps/praxis` ships on https://praxis.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order: hero → intro/appointment → why choose us → services →
  promo band → newsletter → footer
- [ ] Brand tokens re-pointed from coral `#ffa07f` to the source teal
  `#57ccc3` + pink `#fd556d` (open gap, recorded in the design notes)
- [x] No source-designer name, source URL or source template name under
      `apps/praxis/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer SHALL link Component Dock
  (`https://www.componentdock.com/`).
- **Provenance ban.** No `colorlib.com` URL, designer name or source template
  name under `apps/praxis/` (AGENTS.md rule 5).
- **Deploy identity.** `public/CNAME` = `praxis.free.componentdock.com`, package
  `homepage` = `https://praxis.free.componentdock.com`.
