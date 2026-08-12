# Hostelry — implementation plan (ColorLib Royal)

Recreates https://colorlib.com/wp/template/royal/ as `apps/hostelry`
(package `@free-react-templates/hostelry`). Full fidelity reference in
`openspec/specs/template-hostelry/spec.md`.

## Source reference

- Preview: https://preview.colorlib.com/theme/royal/ (HTTP 200, fetched
  2026-08-12; ~32KB HTML, `<title>Royal Hotel</title>`, css/style.css ~61KB
  - bootstrap.css + responsive.css + owl-carousel/datepicker/nice-select
    vendors)
- Screenshot: TEMPLATES.md line 491 (`royal-free-template.jpg`, 1200×946) —
  white header strip, dark resort-pool hero, yellow GET STARTED + BOOK NOW
  buttons, dark BOOK YOUR ROOM widget, white "Hotel Accomodation" heading
  (screenshot cuts off just below the section heading).
- Template page: https://colorlib.com/wp/template/royal/
- TEMPLATES.md dup rows (both `- [ ]`, same source slug): lines 491 and
  1926 — bookkeeping should mark BOTH `[x]` with the surge URL when
  Hostelry ships.

## Task order (TDD, one commit per green slice is fine)

1. Scaffold `apps/hostelry` from the simplest existing app, rename package
   to `@free-react-templates/hostelry`, register the workspace (`npm install`
   at root → package-lock.json), and get a passing 100%-coverage scaffold
   (App smoke test).
2. `src/index.css` — `@theme` tokens: `--color-brand: #f3c300`,
   `--color-brand-2: #f8b600`, `--color-accent: #52c5fd`, `--color-ink:
#222222`, `--color-muted: #777777`, `--color-dark: #04091e`,
   `--color-surface: #f9f9ff`, `--color-line: #eeeeee`; Poppins Google
   Fonts `<link>` in `index.html` (300..700). Set body font-family. Keep
   `injectUiSource()` in vite.config.ts.
3. Data module `src/data.ts`: nav links (+ Blog dropdown items), hero copy,
   room cards (name, price, blurb, picsum seed), facilities (icon name +
   title + blurb), testimonials (4 entries, varied names — the original
   repeats "Fanny Spencer" on every slide), blog posts (date, tag, title,
   excerpt), footer links/widgets.
4. `Navbar.tsx` — absolute header over hero: logo mark + "Hostelry"
   wordmark left; links right (Home, About us, Accomodation, Gallery, Blog
   dropdown, Contact); uppercase 12px dark links, #52c5fd hover/active;
   Blog dropdown opens on hover/focus (white panel); mobile hamburger
   (yellow 3-bar → X) toggles collapsed menu with aria-expanded.
5. `Hero.tsx` — dark #04091e band with picsum photo background (seed
   hostelry-hero) + overlay; centered yellow uppercase kicker "Away from
   monotonous life", white 60px "Relax Your Mind", lorem paragraph, yellow
   sharp-corner "Get Started" button.
6. `BookingForm.tsx` — dark #04091e panel, uppercase "Book Your Room"
   title; Arrival Date + Departure Date (native date inputs), Adult / Child
   / Number of Rooms selects, full-width yellow "Book Now" button. zod
   validation: both dates required, departure ≥ arrival; success state on
   valid submit. (Note: original date fields are text inputs with
   bootstrap-datepicker — native date inputs are the faithful-enough
   recreation; the original's 3rd select has a copy-paste label quirk —
   use proper "Number of Rooms" label.)
7. `Accomodation.tsx` — white section: "Hotel Accomodation" heading (KEEP
   the original misspelling) + grey subtitle; 4 room cards (grid): rounded
   10px image (picsum seed hostelry-1..4) with hover zoom + yellow "Book
   Now" overlay bottom-center; title 18px dark, price 24px #52c5fd
   ($250/night, $200/night, $750/night, $200/night), blurb.
8. `Facilities.tsx` — dark #04091e section + photo bg (picsum seed
   hostelry-fac): "Royal Facilities" heading; 6 cards (1px #777777 border,
   radius 10px, translucent white bg, white text): icon (lucide: Utensils,
   Bike, Waves, Car, Dumbbell, Martini — original lnr mapping:
   dinner/bicycle/shirt/car/construction/coffee-cup; lucide has no "shirt
   pool" or "construction gym" icon so pick the closest sensible one) +
   title (keep original spellings Sports CLub / Gymnesium) + blurb.
9. `About.tsx` — split: left "About Us Our History Mission & Vision"
   heading + paragraph + dark "Request Custom Price" button (bg #222222);
   right picsum photo.
10. `Testimonials.tsx` — #f9f9ff section, "Testimonial from our Clients";
    4 white quote cards (padding 40px, 1px #eeeeee border): avatar, name
    (vary: Fanny Spencer, Laura Wilson, Michael Doe, Sarah Johnson), quote.
    Slider behavior: prev/next controls + auto-advance is fine.
11. `Blog.tsx` — "latest posts from blog" heading (lowercase, as original);
    3 cards: thumb (hover scale(1.23) rotate(10deg)), date, tag (Travel /
    Life Style), dark title (hover #52c5fd), excerpt.
12. `Footer.tsx` — #04091e, padding ~142px: 4 columns — About Agency
    (blurb + social icons 18px #82848f, hover #f3c300), Navigation Links
    (Home, Feature, Services, Portfolio, Team, Pricing, Blog, Contact),
    Newsletter (email input + yellow sub button), InstaFeed (grid of
    thumbnails); footer-bottom copyright bar with repo-standard credit.
13. `App.tsx` — compose sections in order: Navbar → Hero → Booking →
    Accomodation → Facilities → About → Testimonials → Blog → Footer.

## Fidelity notes (from the live preview DOM)

- Buttons are SHARP-cornered (border-radius: 0), uppercase, 14px — do not
  round them.
- Yellow #f3c300 on buttons: white text for `theme_btn` (Get Started, room
  overlays), but #222222 text for `book_now_btn` — implement both variants.
- Section padding rhythm: 120px vertical (`section_gap`), footer 142px.
- Nav links: `font: 500 12px/80px Poppins`, uppercase, 30px gaps.
- Booking widget sits ON the hero area in the original (dark box overlaying
  the photo bottom) — place it overlapping the hero bottom or directly
  below it, matching the screenshot.
- Room image hover zoom ~1.19; blog thumb hover scale(1.23) + rotate(10deg).
- Testimonial section bg #f9f9ff (light), NOT dark.
- Facilities + footer + hero + booking all use the same near-black #04091e —
  it is the template's dark anchor color.
- Do not copy any ColorLib assets; use
  `https://picsum.photos/seed/hostelry-<n>/<w>/<h>`.
