# Sana (ColorLib Hospice) — Tasks & Design Notes

> Prep artifacts prepared on `main`; implementation ships on
> `feat/template-sana`.

## Design notes (replication findings)

- **Original:** ColorLib "Hospice" — medical / healthcare website template
  (source: https://colorlib.com/wp/template/hospice/).
- **Preview analyzed:** https://preview.colorlib.com/theme/hospice/ (HTTP 200,
  "Hospice Medical"). Live DOM + unminified `css/style.css` parsed for
  structure + tokens; Google Fonts `@import` (Roboto 300/400/500/700)
  confirmed inside the stylesheet. Screenshot `hospice-free-template.jpg`
  reviewed visually in a browser.
- **Visual design:** clean, professional medical site in white + sky blue
  `#3face4`. Thin white top strip (socials left; phone + email right); white
  main header with blue-cross logo + uppercase nav (active link blue); hero =
  soft pastel-blue medical still (stethoscope + anatomical heart model) with
  white headline "We Care for Your Health Every Moment" and blue "Get
  Started" CTA; light `#f9f9ff` bands for About / Feedback / Appointment;
  dark `#222222` footer. Calm, trustworthy, lots of whitespace.
- **Structure (1:1, section order):**
  1. Header — `.top_menu` white 40px: socials left; right phone
     `012-6532-568-9746` + `emergency@colorlib.com` (12px `#777`).
     `.main_menu` bg `#f8f8f8`: logo (blue cross + wordmark); uppercase nav
     Home, Departments, Doctors, Pages (dropdown: Blog, Blog Details,
     Elements), About, Services, Blog, Contact — 500 12px/80px Roboto `#000`,
     hover/active `#3face4`; search icon. Sticky on scroll.
  2. Hero `.home_banner_area` — bg image (cover, 900px), left content: h1
     48px white, p 14px/24px white, CTA "get started" `.main_btn` (blue,
     radius 0). `.white_bg_btn` alt variant exists (translucent white, radius
     5px, hover `#3face4`).
  3. Procedure Category `.procedure_category.section_gap` — centered title +
     p; 3 image cards; hover overlay `rgba(34,34,34,0.8)` →
     `rgba(63,172,228,0.63)` with white uppercase h5 + 1px divider + p. (DOM
     repeats "Emergency Treatment" ×3 — use three distinct procedure names,
     e.g. Emergency Treatment, Cardiac Care, Lab Tests.)
  4. About Myself `.about_myself.pad_bottom` — `.about_box` bg `#f9f9ff`
     (80px 120px padding): left-aligned title "About Myself" + p; 4
     `.activity_box` cards (white, 1px `#ddd` border, radius 5px, hover
     shadow `0 8px 21px #ddd`): icon 24px `#3face4` (lnr-database,
     lnr-book, lnr-users ×2) + h3 stat ($2.5 M, 1465, 3965) + p label.
  5. Feedback `.feedback_area.section_gap.relative` — bg `#f9f9ff`; title
     "Enjoy our Client's Feedback"; owl carousel of 4 slides (margin-top
     70px): quote + avatar + name "Fannie Rowe" + role + orange star rating.
  6. Our Offered Services `.service_area.section_gap` — title "Our Offered
     Services"; 4 `.single_service` columns: lnr icon 35px `#3face4` + h4
     (24/7 Emergency, Expert Consultation, Intensive Care, Family Planning)
     - p; hover h4 → `#3face4`.
  7. Appointment `.appointment-area` — bg `#f9f9ff`; left: h1 "Servicing
     Hours" + time-list rows (Monday-Friday / Saturday / Sunday, each
     "08.00 am - 10.00 pm", divider 1px `#eee`); right: white card (shadow
     `0px 10px 20px rgba(153,153,153,0.1)`): h3 "Book an Appointment" + form
     — Disease Type select (Type One…Four), Patient Name, Phone, Email
     Address, Date of Birth, Appointment Date, Message; "Confirm Booking"
     submit (100% width, `#3face4`, radius 0).
  8. Recent Blogs `.recent-blog-area.section_gap` — title "Our Recent
     Blogs"; 3 cards: image + h4 title ("Portable Fashion for women",
     "Summer ware are coming" ×2) + lorem excerpt. (DOM has no date/read-more
     — keep image + title + excerpt.)
  9. Footer `.footer-area.section_gap` — bg `#222222`; 3 columns: "Top
     Products" (Managed Website, Manage Reputation, Power Tools, Marketing
     Service; `#777` → hover `#3face4`), "Contact Us" (phone, email,
     address), "Newsletter" (radius-0 input + `#3face4` button); copyright
     bar (replace ColorLib credit with "© <year> Sana. All rights
     reserved.").

## Design tokens (see spec for full list)

- Sky blue `#3face4` (primary: buttons, nav active/hover, service + activity
  icons, form focus, newsletter button, footer hovers)
- `#fff` surfaces, `#f8f8f8` main menu, `#f9f9ff` section bands (About box,
  Feedback, Appointment), `#222222` headings + footer, `#777777` body/top-bar
  text, `#ddd` card borders, `#eee` dividers, `#ced4da` form borders
- Font: Roboto 300/400/500/700 (Google Fonts `<link>` in `index.html`)
- Buttons: square `border-radius: 0`, 13px w500, padding 0 40px,
  line-height 48px; hover = transparent bg + `#3face4` text
- Form controls: radius 0, 13px w300, focus border `#3face4`, no shadow
- Section rhythm: `.section_gap` = 120px 0 (50px mobile); centered titles
  margin-bottom 40–80px

## Implementation tasks

- [ ] Scaffold `apps/sana` (copy simplest existing app, rename package to
      `@free-react-templates/sana`, `npm install` at root so the lockfile
      registers the workspace).
- [ ] `src/index.css`: `@theme` tokens — brand sky blue `#3face4`, band
      `#f9f9ff`, menu `#f8f8f8`, dark `#222222`, muted `#777777`; Roboto via
      Google Fonts `<link>` in `index.html`.
- [ ] Header — top info bar (socials left, phone + email right), logo,
      uppercase anchor links, Pages dropdown, search icon, sticky on scroll
      (aria-expanded hamburger on mobile).
- [ ] Hero — full-width bg image (seeded picsum) + white headline/subtext +
      "Get Started" primary button.
- [ ] Procedure Category — centered title + 3 image cards with hover overlay
      (name, divider, blurb); three distinct procedure names.
- [ ] About Myself — `#f9f9ff` box, left-aligned title, 4 activity cards
      (icon + stat + label, hover shadow).
- [ ] Client Feedback — carousel of 4 testimonial cards (quote, avatar,
      name, role, orange star rating), auto-advance + controls.
- [ ] Our Offered Services — 4-column grid (icon + title + blurb, hover
      accent).
- [ ] Appointment — left service-hours list; right booking card form
      (Disease Type select, Patient Name, Phone, Email, Date of Birth,
      Appointment Date, Message) with validation + confirmation.
- [ ] Recent Blogs — 3 blog cards (image + title + excerpt).
- [ ] Footer — 3 columns (Top Products, Contact Us, Newsletter) + copyright
      bar.
- [ ] Tests colocated per component (scenario-style), 100% coverage.
- [ ] Gate: `bash scripts/verify-app.sh sana` (typecheck + lint + coverage
      tests + build). PR: source ColorLib Hospice, preview URL, tokens, what
      differs (placeholder images, Google Fonts, distinct procedure names,
      presentational booking form).
