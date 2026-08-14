# Dentara (ColorLib Toothcare) — Tasks & Design Notes

> Recreation of ColorLib "Toothcare — free Bootstrap 5 dental clinic
> website template" (https://colorlib.com/wp/template/toothcare/) under the
> NEW name **Dentara** (coined from "dental" + "-ara"; single lowercase
> word, no collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md — verified 2026-08-14), per the monorepo naming mandate
> (never reuse the ColorLib source name). TEMPLATES.md categories: Bootstrap
> 5 (89) + Dentist (14). Appears 2× in TEMPLATES.md (duplicate rows, same
> slug) — when implementing, mark ALL rows `[x]` with the same
> URL/homepage (rows 630 and 1514).

## Design notes (replication findings)

- **Original:** ColorLib "Toothcare" — bright cyan medical landing: top
  utility strip (brand + hours/phone/location), light navbar with cyan
  uppercase CTA, full-height 2-slide photo hero (white h1 + cyan accent
  span, cyan solid + white buttons, dot nav), solid-cyan appointment form
  split against "We Offer Best Dental Services" with 3 icon features,
  light 8-card services grid, welcome split with counters (3000/2200/24),
  4-doctor team grid, parallax cyan-overlay CTA band, testimonial slider,
  patient stories grid, 3-post blog strip, 4-plan pricing, photo footer
  with cyan gradient overlay. The recreation brands itself **Dentara**.
- **Live preview analyzed (verified 2026-08-14):**
  `https://preview.colorlib.com/theme/toothcare/` — HTTP 200, ~71 KB HTML +
  `css/style.css` ~83 KB (curl; plus animate, aos, datepicker.min,
  flaticon, glightbox.min, tiny-slider, ionicons, font-awesome). Standard
  preview.colorlib.com host. The TEMPLATES.md screenshot
  (`toothcare-free-template.jpg`, 1200×946, AVIF container — convert with
  PIL before viewing) shows the white navbar + cyan CTA, the full-height
  hero photo of two dental professionals with white headline and cyan
  "MAKE AN APPOINTMENT" + white "LEARN MORE" buttons, and the cyan
  appointment form split with the Easy Booking / Team Dentist cards; it
  matches the live render (below-the-fold sections captured from the live
  DOM + CSS).
- **Visual design (screenshot):** white navbar with cyan rectangular CTA
  on the right; hero = dental-clinic staff photo (man + woman in white
  coats, masks, dental mirror), text on the LEFT half over a dark 10%
  overlay, slider dots bottom-center; split section = LEFT solid cyan
  appointment form ("WE ARE HERE FOR YOU" / "Make An Appointment" with
  underline-style inputs), RIGHT white "LEARN ANYTHING" / "We Offer Best
  Dental Services" with stacked icon cards. Color story: BRIGHT CYAN
  `#00bcd4` primary, `#65c4cf` secondary, near-black `#111111` headings,
  light `#f8f9fa` section bgs, white content. Clean modern medical look.

## Section order (1:1 — implement in this order)

1. **Top utility strip** — light strip above nav: LEFT brand "Dentara"
   - span "Dental Clinic Services"; then 3 info blocks (icon + label +
     value): "Monday - Friday" / **8:00AM-8:00PM** (clock), "Call Us" /
     **+2 392 3929 210** (phone), "Location" / **San Francisco, California,
     USA** (pin). Hidden on small screens.
2. **Navbar** — light (`#ebebeb`, scrolled `#00cae3`), sticky. Brand +
   links Home · Dentist · About · Services · Pricing · Blog · Contact
   (active cyan). RIGHT uppercase cyan CTA button "Make An Appointment"
   (13px/700, padding 1.5rem, radius 0, white text). Mobile: burger →
   panel with same links.
3. **Hero slider** — full-height (100vh), 2 slides (state-based slider,
   dot nav 10px circles, active cyan). Each slide: photo bg (cover) +
   `#111` overlay opacity .1 on LEFT 50%, left-aligned white h1 (60px/400,
   cyan accent span) — "Dentist Services that You Can Trust" /
   "A Brighter Dental Experienced" — copy paragraph + buttons: solid cyan
   ("See Our Services" / "Make An Appointment") + white "View Course"
   (screenshot shows "Learn More" — either is fine, keep the kind).
4. **Appointment split** — `container-xl`, 2 cols (`g-xl-5`):
   - LEFT: SOLID CYAN form card (padding 30px): subheading "We Are Here
     For You" + h2 "Make An Appointment"; 2-col field grid: Your Full
     Name, Email, Your Phone Number, Appointment Date (native date input —
     source uses a datepicker), Appointment Time, Select A Doctor
     (Dr. Lloyd Wilson · Dr. Rachel Parker · Dr. Ian Smith · Dr. Alicia
     Henderson · Dr. Robert Johnson · Dr. Blake Wood), Message textarea
     (full width), submit "Send message" (white bg, cyan text, rounded).
     Inputs: transparent bg, bottom border only, white 70% text, radius 0.
   - RIGHT: subheading "Learn Anything" + h2 "We Offer Best Dental
     Services" + 3 stacked icon items: **Easy Booking** (calendar icon),
     **Team Dentist** (users icon), **Best Price Guarantee** (badge icon)
     — icon + title + blurb.
5. **Services grid** — LIGHT bg `#f8f9fa`: subheading "Services" + h2
   "Toothcare Services" + 8 cards (4→2→1 cols, text-center, line icon +
   title + blurb): Tooth Protection · Dental Implants · Dental Care ·
   Teeth Whitening · **Dental Calculus** (source typo "Caculus" — use the
   corrected spelling) · Tooth Removal · Removal of Tartar · Tooth
   Inspection.
6. **Welcome split** — subheading "Welcome to our Dental Clinic" + h2
   "Toothcare is a Dental Clinic and Innovative Approach to Treatment" +
   copy + photo + 3 counters (icon + number + caption): **3000 Happy
   Patients**, **2200 Performed Treatments**, **24 Year of Experienced**.
7. **Team** — subheading "Our Doctors" + h2 "Qualified Dentist" + 4 cards
   (portrait + name + role): Dr. Lloyd Wilson (Head Dentist) · Dr. Rachel
   Parker (Dentist) · Dr. Ian Smith (Dentist) · Dr. Alicia Henderson
   (Dentist).
8. **Parallax CTA band** — photo bg + solid cyan overlay (opacity .8):
   subheading "Book your appointment" + h1 "Do not wait make an appointment
   today!" + cyan "Make An Appointment" button.
9. **Testimonials** — subheading "Testimonial" + h2 "Happy Customers" +
   slider (bar dots 30px×2px, active cyan): quote + name **Roger Scott** +
   role "Marketing Manager".
10. **Patient stories** — LIGHT bg: subheading "Stories" + h2 "Result of
    our Treatment and Work" + 4 cards (photo + caption "France, 28 years"
    - name): John Johnson · Leah Tylor · Mary Johnson · Beatrice
      Schwarzenegger.
11. **Blog** — subheading "Our Blog" + h2 "Recent From Blog" + 3 cards
    (image + meta "Admin · Jan. 20, 2021 · 3 Comments" + title). Source
    repeats ONE title on all three ("How to keep your teeth always in the
    best condition") — vary per content-kind rule (dental care tips).
12. **Pricing** — subheading "Our Pricing" + h2 "Pricing & Packages"
    (Packages in cyan span) + 4 plans (4→2→1 cols): Basic $50 · Beginner
    $79 · Premium $89 · Ultimate $99 — each: name, `$` + number price, 6
    features (Diagnostic Services · Professional Consultation · Tooth
    Implants · Surgical Extractions · Teeth Whitening · Teeth Cleaning)
    with arrow glyphs, "Get Started" full-width cyan button.
13. **Footer** — photo bg + cyan gradient overlay (linear-gradient(45deg,
    #00bcd4, #65c4cf), opacity .9), white text: about widget (brand
    "Dentara / Dental Clinic Services" + blurb + circular social icons) ·
    Services links (Tooth Protection · Dental Implants · Dental Care ·
    Teeth Whitening · Dental Calculus) · Quick Links (Home · About ·
    Services · Dentists & Conditions · Blog · Contact) · Recent Posts (3
    items: Jan. 18, 2021 · Admin · "Creativity and Inspiration") + "Have a
    Questions?" contact block (203 Fake St. Mountain View, San Francisco,
    California, USA · +2 392 3929 210 · info@yourdomain.com). Copyright
    bar MUST credit Component Dock.

## Design tokens (from css/style.css, verified 2026-08-14)

- Brand cyan `#00bcd4` (appointment form bg, primary buttons, navbar CTA,
  hero accent spans, active nav link, parallax overlay, footer gradient
  start, active slider dots) — `@theme` token.
- Secondary cyan `#65c4cf` (footer gradient end, light accents).
- Near-black `#111111` (headings rgba(0,0,0,.8), hero left-half overlay
  at opacity .1).
- Neutrals: `#fff` (cards, hero text, white buttons), `#f8f9fa`/`#f8f8f8`
  (light section bgs), `#ebebeb` (navbar), text gray `#6c757d`, `#ddd`
  (idle dots).
- Font: "Roboto" (body + headings) via Google Fonts `<link>`.
- Buttons: 4px radius, shadow `0px 24px 36px -11px rgba(0,0,0,.09)`;
  primary = solid cyan → hover transparent + cyan text; white = white bg +
  cyan text → hover transparent + white; nav CTA = uppercase 13px/700,
  cyan, radius 0, padding 1.5rem.
- Section titles: h2 38-40px/500, lh 1.4, small subheading above, cyan
  `<span>` accents.
- Hero h1: 60px/400 white, lh 1.2, cyan span; buttons `p-4 py-3`.
- Form: cyan bg, underline inputs (transparent, bottom border, white 70%),
  white submit.
- Counters: number + caption with icon.

## Implementer tasks

1. `apps/dentara` scaffold: copy simplest existing app, rename package
   `@free-react-templates/dentara`, set `public/CNAME` →
   `dentara.free.componentdock.com`, `homepage` →
   `https://dentara.free.componentdock.com`, register workspace +
   `npm install` at root (lockfile!), verify
   `grep -c "free-react-templates/dentara" package-lock.json`.
2. `src/index.css`: Tailwind v4 `@theme` tokens (`--color-brand: #00bcd4;
--color-accent: #65c4cf; --color-ink: #111111`), Roboto via `<link>` in
   index.html; keep `injectUiSource()` in vite.config.ts.
3. Components (one `describe` per component, scenario-style tests first):
   `Topbar`, `Navbar` (burger + mobile panel), `HeroSlider` (2 slides +
   dots), `AppointmentForm` (split w/ right features), `Services` (8
   cards), `Welcome` (counters), `Team`, `CtaBand`, `Testimonials`
   (slider), `Stories`, `Blog`, `Pricing`, `Footer`.
4. Placeholder images: `https://picsum.photos/seed/dentara-<n>/<w>/<h>`
   (hero dental scene ≈ 1-2, about ≈ 3, doctor portraits ≈ 4-7, result
   photos ≈ 8-11, blog ≈ 12-14, testimonial portrait ≈ 15; screen seeds
   for plausible medical scenes before committing — picsum is arbitrary
   photos, verify subjects).
5. Icons: lucide-react (Calendar, Phone, MapPin, Users, BadgeCheck,
   Stethoscope/HeartPulse, ArrowRight, Check, Menu, X); social brands as
   inline SVG paths (lucide removed brand icons — verify with
   `node -e "console.log(typeof require('lucide-react').Facebook)"`).
6. Appointment form: zod validation + per-field errors; success state
   (queryByLabelText absent after submit — form swaps to success message).
   Doctor select is a dropdown of 6 names.
7. jsdom 30: no localStorage needed for this template (no dark mode);
   if a MemoryStorage polyfill is ever required, copy from
   `apps/cura/src/test/setup.ts`.
8. Phone/email: do NOT write literal `tel:`/`mailto:` hrefs in source
   (toolchain redaction corrupts them) — render contact info as plain
   label+value text like the source (footer block), or compute hrefs at
   runtime from spaced display strings.
9. Gate: `scripts/verify-app.sh dentara` (typecheck + lint + knip + fallow
   - vitest 100% + build). PR: `feat: add Dentara (ColorLib Toothcare)`,
     immediate squash merge, TEMPLATES.md `[x]` ×2 (BOTH Toothcare rows:
     630 + 1514) + surge URL + homepage + `npm run readme:status`
     bookkeeping.
