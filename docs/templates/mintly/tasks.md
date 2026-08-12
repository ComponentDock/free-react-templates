# Mintly (ColorLib Wordpress Dentist Themes) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream (stream 3). The spec
> folder `openspec/specs/template-mintly/` is the claim marker — implementers
> start here.

## Design notes (replication findings)

- **Original:** ColorLib "Wordpress Dentist Themes" — a dentist-themes
  ROUNDUP/listicle page, not a single free template
  (source: https://colorlib.com/wp/template/wordpress-dentist-themes/; the
  article is "20 Best WordPress Dentist Themes 2026" — 20 third-party picks:
  Jevelin, Webify, Kalium, Divi, Medicare, DentiCare, HEALTHFLEX, Ekko, Sway,
  Bridge, Dentist WP, MedicalPress, RT-Theme 20, iDent, SmilePure, Mediz,
  ApexClinic, AllSmiles, Dr.Patterson, SmileCare; all demo links are
  third-party, no preview.colorlib.com links on the page). Listed FOUR times
  in TEMPLATES.md — line 536, line 1516, line 1885, line 2257, all `- [ ]`,
  same slug → implement ONE app, mark ALL FOUR rows `[x]` at bookkeeping.
- **Preview UNREACHABLE:** https://preview.colorlib.com/theme/wordpress-dentist-themes/
  → HTTP 404, absent from preview.colorlib.com/assets/js/products.js.
  Screenshot `dentist-wordpress-themes-1.jpg` (1200×890, AVIF) converted to
  PNG, viewed in the browser, tokens pixel-sampled with PIL.
- **Visual design (capture = Jevelin demo, the roundup's #1 pick — top ~72%
  of the page only):** white NAVBAR with dark navy wordmark + cross/plus
  icon (capture brand "JEVELIN" → "Mintly"), links Home / About /
  Departments / FAQ / Contacts, plus user + search icons. SPLIT HERO on
  white: left ~55% large bold charcoal headline "Dentist WordPress themes."
  - smaller UPPERCASE letter-spaced sub-line + three circular mint-teal
    icons (heart, house, leaf); right ~45% photo of a smiling female dentist
    in a white lab coat (blurred clinic bg) blending into the white ground.
    Below the hero: THREE MINT CARDS on a light mint band — Emergency Service
    (phone 1-800-600-3800, "See More"), Appointment (calendar icon, "Book
    Now"), Opening Hours (clock icon, Mon–Fri / Sat–Sun, "Contact Us"), each
    with a WHITE PILL (oval) button. A floating right-edge icon rail in the
    capture is demo chrome — do NOT reproduce it.
- **Palette (screenshot-sampled, no stylesheet):** mint-teal accent
  `#3BE2AE` `(59,226,174)` (hero icon circles; reuse for buttons/links/icon
  accents; hover ≈ `#2BCA99`); mint card band `#B9F7F8` `(185,247,248)`
  (lighter tones `#D3FEFD`/`#D9FCFB` at card edges); charcoal text
  `#373737` `(55,55,55)`; deepest glyphs `#151515`; white `#FFFFFF`
  (navbar/hero/card faces); soft blue-grey `#F0F5F9` (sampled in photo
  area — use for alternating light bands).
- **Fonts:** bold geometric sans (Montserrat-like) — load **Montserrat
  400/600/700** via Google Fonts `<link>`; uppercase sub-line weight
  500–600 + letter-spacing; body 400.
- **Buttons:** white pill (`rounded-full`) with dark charcoal or mint text
  on mint cards; on light reconstructed sections mint `#3BE2AE` fill +
  white text, `rounded-full`, hover `#2BCA99`. Hero icons are circular.
- **No assets copied:** picsum placeholders (`picsum.photos/seed/mintly-<n>/<w>/<h>`),
  lucide-react icons (heart, home, leaf, calendar, clock, phone, user,
  search, cross), Montserrat via `<link>`. No colorlib references in app
  code — provenance lives in this file + the spec + TEMPLATES.md only.
  Footer MUST link https://www.componentdock.com/.

## Section order (hero band 1:1 as captured; remainder reconstructed)

1. **Navbar** — white, sticky: brand "Mintly" (cross/plus icon) left; links
   Home / About / Departments / FAQ / Contact (scroll anchors) right; user +
   search icons far right; hamburger on mobile with `aria-expanded` +
   `aria-label`, click-to-scroll + close.
2. **Hero** — white split: left headline (paraphrase "Dental Care, Done
   Right."), UPPERCASE sub-line (e.g. "MODERN CARE FOR YOUR WHOLE SMILE"),
   three circular mint `#3BE2AE` icons (heart, house, leaf); right portrait
   (`picsum.photos/seed/mintly-hero/…`, smiling professional in light
   uniform, object-cover, blend into white bg).
3. **Info cards** — full-width mint `#B9F7F8` band, three cards (1 col
   mobile): Emergency Service (phone 1-800-600-3800, white pill "See
   More"), Appointment (calendar icon, "Book Now"), Opening Hours (clock
   icon, "Monday – Friday" / "Saturday – Sunday", "Contact Us").
4. **Departments** (reconstructed) — heading + sub-line, six cards 3-col
   grid (2 tablet / 1 mobile), shared `Card`: mint icon + title + blurb
   (General Dentistry, Orthodontics, Cosmetic Dentistry, Dental Surgery,
   Pediatric Dentistry, Emergency Care).
5. **About** (reconstructed) — split: image + heading, two paragraphs,
   mint pill button, quick stats in mint accent (Years of Experience, Happy
   Patients).
6. **FAQ** (reconstructed) — accordion, ≥4 dental-clinic questions,
   one-open-at-a-time, `aria-expanded`.
7. **Contact** (reconstructed) — heading + details (address/phone/email with
   mint icons) + form (Name/Email/Message, validation, mint pill "Send
   Message").
8. **Footer** — brand + blurb + link columns, dark charcoal or mint-tinted;
   copyright bar with https://www.componentdock.com/ link.

## Tasks (implementer checklist)

- [ ] Copy the simplest existing app (e.g. `apps/slate`) → `apps/mintly`;
      rename package to `@free-react-templates/mintly`; run `npm install` at
      root so `package-lock.json` registers the workspace
- [ ] `index.html`: title "Mintly", Montserrat Google Fonts `<link>`
- [ ] `src/index.css`: `@theme` tokens — brand `#3BE2AE` (hover `#2BCA99`),
      mint band `#B9F7F8`, charcoal `#373737`, soft `#F0F5F9`
- [ ] Components: `Navbar` (with mobile menu), `Hero`, `InfoCards`,
      `Departments`, `About`, `Faq`, `Contact`, `Footer` — composed in
      `App.tsx`
- [ ] Tests per component mirroring the spec scenarios; 100% coverage
- [ ] `public/CNAME` = `mintly.free.componentdock.com`; package `homepage` =
      `https://mintly.free.componentdock.com`
- [ ] `scripts/verify-app.sh mintly` green (typecheck + lint + coverage +
      build)
- [ ] TEMPLATES.md lines 536, 1516, 1885, 2257 → `[x]` + surge URL; mark
      claim `[~]` before starting (claim rule: push `[~]` first)
