# Jurist (ColorLib Legalcare) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-jurist`.

## Source mapping

- **ColorLib item:** "Legalcare" (TEMPLATES.md — appears 2×: lines 437 and
  2128; both rows point to the same source, one prep covers all; verified
  with `grep -c 'wp/template/legalcare/'` = 2).
- **Source URL:** https://colorlib.com/wp/template/legalcare/
- **Preview URL:** https://preview.colorlib.com/theme/legalcare/ — **HTTP 200,
  live** (confirmed 2026-08-13, ~38 KB HTML; browsed visually too). Do not
  redo this lookup.
- **Preview CSS:** https://preview.colorlib.com/theme/legalcare/css/style.css
  (~81 KB, parsed for tokens) — also imports animate.css, aos.css,
  flaticon.css, icomoon.css, ionicons.min.css, magnific-popup.css,
  open-iconic-bootstrap.min.css, owl.carousel.min.css,
  owl.theme.default.min.css (all css/). Site is Bootstrap 4 + jQuery +
  owl.carousel + scrollax + magnific-popup + AOS — **NOT Tailwind**. Font:
  `"Poppins", Arial, sans-serif` (5 rules in style.css; loaded via an inline
  `@font-face` block in the HTML head, weights 300–900 — add the Google
  Fonts `<link>` for Poppins in index.html; do NOT copy the woff2 files).

## Reference research (done — do not redo)

### Screenshot (`legalcare-free-template.jpg`, 1200×946)

Browsed visually in the browser. Professional man with glasses/beard in a
dark suit in the hero (blurred warm office bokeh); dark uppercase LEGALCARE
logo; nav links Home/About/Attorneys/Practice Areas/Case Studies/Blog/
Contact + gold "Free Consultation" button; white headline "Attorneys
Fighting For Your Freedom." with a thin gold underline (the live DOM shows
this as the gold blinking cursor on the rotating word — the parsed
stylesheet is authoritative: Poppins 48px/700, NOT serif as the vision model
guessed); gold "Get Legal Advice" button; "Why Select Us?" section with an
olive-gold strip behind three white cards (scales-of-justice, document,
gavel icons — flaticon → lucide). The live preview DOM + parsed stylesheet
are the authoritative reference; the screenshot confirms palette + layout.

### Design tokens (from `css/style.css`)

| Token          | Value                                       | Use                                                                                     |
| -------------- | ------------------------------------------- | --------------------------------------------------------------------------------------- |
| Brand gold     | `#afa939`                                   | buttons, icons, nav hover/active, subheadings, strips, overlays, badges, footer accents |
| Dark gold      | `#89842c`                                   | newsletter "Subscribe" submit bg                                                        |
| Ink black      | `#000000`                                   | hero overlay (opacity .5), mobile nav bg, blog headings, tab text                       |
| Footer navy    | `#222831`                                   | footer bg                                                                               |
| Footer brown   | `#3c312e`                                   | `.ftco-bg-dark` bg (footer bg wins in practice)                                         |
| Dark slate     | `#343a40`                                   | "Send message" submit (btn-dark)                                                        |
| Light gray     | `#f8f9fa`                                   | blog + newsletter section bg                                                            |
| Heading ink    | `rgba(0,0,0,0.8)`                           | base h1–h4 color                                                                        |
| Hero overlay   | `rgba(0,0,0,0.5)`                           | over hero photo                                                                         |
| Icon circle bg | `rgba(0,0,0,0.05)`                          | 100px service icon circles                                                              |
| Card shadows   | `rgba(0,0,0,0.09)` / `0.14` / `0.4` / `0.1` | service cards / case cards / attorney back / scrolled nav                               |
| White alphas   | `rgba(255,255,255,0.3/0.5/0.7/0.9)`         | form borders / white subheading / hero p / captions                                     |
| Font           | `"Poppins", sans-serif`                     | everywhere                                                                              |

Button shapes: radius 3px (`.btn`); gold `.btn-primary` (hover → transparent
bg + gold text); `.btn-dark` `#343a40`; nav CTA radius 2px; newsletter split
radii (input `5px 0 0 5px`, submit `0 5px 5px 0`). Inputs (consultation):
52px, radius 5px, transparent bg, white text, border `rgba(255,255,255,0.3)`.
Headings: hero h1 48px/700 (40px mobile), hero subheading 15px/800 uppercase
gold, section subheading 16px/700 gold, section h2 30px/700 (28px mobile),
white variant 40px, service h3 18px/600, case title 22px, attorney name
20px/600 + role 12px, blog heading 18px/500, footer logo 34px/800 uppercase,
widget h2 20px/400, hours h4 16px gold.

## Implementation checklist

1. Scaffold `apps/jurist` (copy the simplest existing app; package
   `@free-react-templates/jurist`; CNAME `jurist.free.componentdock.com`;
   homepage `https://jurist.free.componentdock.com`).
2. `@theme` tokens: `gold #afa939`, `gold-dark #89842c`, `ink #000`,
   `footer-navy #222831`, `footer-brown #3c312e`, `slate #343a40`,
   `light-gray #f8f9fa`, white; overlay helpers for `rgba(0,0,0,0.5)`,
   `rgba(0,0,0,0.05)`, `rgba(255,255,255,0.3)`, `rgba(255,255,255,0.5)`,
   `rgba(255,255,255,0.7)`, `rgba(255,255,255,0.9)`.
3. Poppins via Google Fonts `<link>` in index.html (weights 300–800).
4. Sections (order matters — match the preview 1:1):
   1. Navbar: transparent absolute over hero (top 20px) → fixed white +
      shadow on scroll; wordmark "Jurist" + gold tagline "A Law Firm
      Agency"; links Home (active)/About/Attorneys/Practice Areas/Case
      Studies/Blog/Contact (white 15px, gold hover/active); gold "Free
      Consultation" CTA (radius 2px); black mobile menu (hamburger "Menu").
   2. Hero (full-height): photo + `rgba(0,0,0,0.5)` overlay; gold uppercase
      "Welcome To Jurist"; h1 white 48px/700 "Attorneys Fighting For Your "
      - rotating gold word (Freedom/Rights/Case/Custody, 2000ms) with
        blinking gold cursor bar; p 18px `rgba(255,255,255,0.7)`; gold "Get
        Legal Advice" (radius 3px, hover → outline). Rotating word via a
        React interval + `aria-live`.
   3. Why Select Us: left col — gold "Services" subheading, h2 "Why Select
      Us?" 30px/700, p, gold "Free Consultation" button; right — 140px gold
      strip behind 3 white cards (radius 4, shadow `0 15px 34px -10px
rgba(0,0,0,0.09)`): 100px circle icon bg `rgba(0,0,0,0.05)` + gold
      lucide icon, 18px/600 titles (Fight for Justice, Best Case Strategy,
      Experienced Attorney), distinct blurbs, 50px gold circle arrow
      revealed on hover (slides up).
   4. About: left photo + 80px gold pulsing play circle (CSS pulse
      animation, non-navigating); right — gold subheading, h2 "We Always
      Fight For Your Justice to Win", p, Our Mission/Our Vision/Our Value
      pill tabs (white pills radius 4, active gold fill; keyboard
      accessible), gold "40 Years of Experienced" badge (count-up 40).
   5. Case studies: centered gold "Explore Case Studies" + h2 "1000+
      Completed Cases Successfully"; 4 × 300px cards, hidden caption
      (title 22px white + category) revealed on hover over gold `#afa939`
      overlay opacity .5 inset 10px; distinct paraphrased case names;
      gold "See All Successful Cases" button.
   6. Attorneys: centered gold "Our Attorney" + h2 "Our Legal Attorneys";
      4 × 400px flip cards (preserve-3d, backface-hidden, 0.6s): front
      photo + bottom gradient + name 20px/600 white + role 12px white;
      hover → gold back (quote 16px + 40px round avatar + name + role).
      CSS-only flip; provide `focus-within` flip for keyboard users.
   7. Consultation: bg photo; gold overlay right half (opacity .8, full
      width mobile); subheading `rgba(255,255,255,0.5)` "Booking an
      Appointment", h2 white 40px "Free Consultation"; form name/email/
      subject/message — 52px transparent inputs (white text, border
      `rgba(255,255,255,0.3)`, radius 5px); dark "Send message" submit
      `#343a40`; client-side validation only.
   8. Testimonials: centered gold "Testimonial" + h2 "Happy Clients";
      carousel of ≥3 distinct paraphrased quotes with avatar + name +
      position.
   9. Blog (bg `#f8f9fa`): centered gold "Blog" + h2 "Recent Blog"; 3
      cards — distinct titles (18px/500), 270px photos, gold date badges
      overlapping top (day + month/year + triangle tail), excerpts, gold
      "Read more".
   10. Newsletter (bg `#f8f9fa`): gold strip (`bg-primary`): white 24px
       "Subscribe to our Newsletter" (fix "Subcribe" typo) + white input +
       `#89842c` "Subscribe" submit (split radii); client-side email check.
   11. Footer (`#222831`): wordmark 34px uppercase 800 white + gold
       tagline; description; 3 × 50px circular social icons; "Practice
       Areas" 8 links with gold arrows (hover gold); "Have a Questions?"
       contact lines (paraphrased address/phone/email); "Business Hours"
       with gold "Opening Days:"/"Vacations:" subheadings; copyright bar
       crediting Component Dock (https://www.componentdock.com/).
5. TDD: write tests first (navbar/scroll, hero + rotating word, why-select
   cards + hover arrow, tabs + years badge, case cards + hover overlay,
   attorney flip, consultation form validation, testimonials, blog, newsletter
   validation, footer, composition), 100% coverage. Remember the MemoryStorage
   polyfill for jsdom if the app uses localStorage (copy from
   apps/cura/src/test/setup.ts). RTL fake timers need `act()`.
6. Verify: `npm run verify:app -- jurist`; full gate runs in CI on merge.
7. PR: `feat: Jurist — law firm template (ColorLib Legalcare)`, include
   source URL, preview URL, token list, and what differs (renames, picsum
   placeholders `jurist-<n>`, Poppins Google Font link, lucide icons,
   paraphrased copy, rotating-word via React interval, fixed "Subscribe"
   typo).
8. Bookkeeping after merge: mark both TEMPLATES.md Legalcare rows (lines
   437, 2128) `[x]` + `jurist` URL + `npm run readme:status`.
