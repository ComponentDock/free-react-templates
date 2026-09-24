# Vitalink (ColorLib Medilife) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-vitalink`.

## Design notes (replication findings)

- **Original:** ColorLib "Medilife" — health / medical landing template
  (source: https://colorlib.com/wp/template/medilife/).
  TEMPLATES.md line 2253.
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/medilife/
  (HTTP 200, 39 KB, title "Medilife - Health & Medical Template | Home").
  Stylesheet `style.css` (47 KB, compiled from SCSS). Bootstrap 4 grid
  + custom medical icon font (themify-style: `icon-doctor`,
  `icon-blood-donation-1`, `icon-flask-2`, `icon-emergency-call-1`,
  `icon-blood-transfusion-2`, `icon-microscope`, `icon-doctor-1`,
  `icon-smartphone`, `icon-atoms`). jQuery + Owl Carousel for hero
  slider + gallery carousel. Single font: Roboto.
- **Screenshot:** `medilife-free-template.jpg` (TEMPLATES.md line 2253) —
  medical/health landing: white top header, white navbar + red emergency
  CTA, hero carousel with bg image + dark navy text, dark navy appointment
  form, blue contact sidebar, white about section with service icons,
  blue counter stats, image gallery carousel, features split, 3-column
  blog, blue emergency section, dark 4-column footer.
- **Visual design:** professional medical aesthetic — clean white sections
  alternating with blue `#006cff` accent areas, dark navy `#081f3e` for
  the appointment form panel and hero text, Roboto font throughout,
  rectangular buttons with small square arrow spans, icon-heavy service
  cards and counters, 4-column footer on dark bg.

## Design tokens (from style.css)

| Token            | Value                   | Where                                                              |
| ---------------- | ----------------------- | ------------------------------------------------------------------ |
| Primary blue     | `#006cff`               | Buttons, contact sidebar, emergency area, counter icons, hero nav  |
| Dark navy        | `#081f3e`               | Appointment form bg, hero headings, button hover, footer bg area   |
| White            | `#ffffff`               | Body bg, hero overlay, button text, counter text                   |
| Light grey       | `#f5f7f9`               | Subtle section backgrounds                                         |
| Grey text        | `#57595c`               | Body paragraphs, muted text                                        |
| Grey secondary   | `#536174`               | Select borders in appointment form                                 |
| Red emergency    | `#ff0000`               | Nav emergency CTA button                                           |
| Font family      | `"Roboto", sans-serif`  | All text                                                           |
| Hero heading     | 60px, `#081f3e`         | `.hero-slides-content h2` (responsive: 40px md, 24px sm)          |
| Buttons          | rectangular, blue fill  | `.medilife-btn` with arrow span (small dark navy square)           |
| Emergency btn    | red fill, white text    | `.medilife-appoint-btn` with bold "emergencies" span               |
| Counter icons    | 100px, `#006cff`        | `.single-cool-fact-area i`                                         |
| Section padding  | 100px top/bottom        | `section-padding-100` and variants                                 |
| Footer           | dark bg, 4-col widgets  | `.footer-area` with logo, news, contact form, newsletter           |

## Section structure (order)

1. Top Header — welcome text + contact info, light border
2. Navbar — sticky, logo, nav links, red emergency CTA
3. Hero Carousel — 3 slides, bg image + overlay + headline + CTA
4. Appointment Form — dark navy panel, form fields + blue contact sidebar
5. About Us — heading + paragraph + CTA + 4 service cards (2×2)
6. Cool Facts / Counters — 4 stat cards with icons and numbers
7. Gallery — Owl Carousel, 4 images with hover overlay
8. Features — split: text left + image right
9. Blog — 3-column card grid with thumbnails, dates, excerpts
10. Emergency — blue bg, large phone number + 4 location helplines
11. Footer — 4 widget columns + copyright bottom bar

## Tasks (implementation order)

1. Scaffold `apps/vitalink` (copy simplest existing app; package
   `@free-react-templates/vitalink`; `vite.config.ts` with
   `injectUiSource()`).
2. `npm install` at repo root (registers workspace in package-lock.json;
   verify `grep -c "free-react-templates/vitalink" package-lock.json`).
3. `index.css` `@theme` tokens: `--color-primary: #006cff`,
   `--color-navy: #081f3e`, `--color-light: #f5f7f9`, `--color-muted:
   #57595c`, `--color-grey: #536174`, `--color-emergency: #ff0000`,
   `--font-sans: 'Roboto', sans-serif`. Add Roboto Google Font `<link>`
   to `index.html`.
4. `TopHeader.tsx` — thin white bar, flex between left "Welcome to
   Vitalink" and right "Opening Hours" + phone. Light bottom border.
5. `Navbar.tsx` — white sticky navbar, logo left, nav links (Home active,
   About Us, Services, News, Contact) via `ml-auto`, red emergency CTA
   button "For emergencies Click here" (lucide `Phone` + bold
   "emergencies" span). Mobile: hamburger (lucide `Menu`) + collapsible
   list (aria-expanded). Sticky: add shadow on scroll.
6. `Hero.tsx` — full-width carousel (state-based slide rotation, 5s
   interval), each slide: bg image (`picsum.photos/seed/vitalink-hero-<n>/
   1920/800`) + white/60 overlay, centered content: h2 "Medical Services
   that You can Trust 100%" (dark navy, 60px) + h6 subtitle + blue
   `<Button>` "Discover Vitalink +" (radius-none, px-8 py-3, arrow span
   with dark navy bg). Prev/next arrows as white circles, blue on hover.
7. `AppointmentForm.tsx` — dark navy (`bg-navy`) panel with
   `mt-[-65px]` overlap. 9-col form: dropdowns (Speciality, Doctors),
   text inputs (Date, Time, Name, Phone, Email), textarea (Message),
   submit button "Make an Appointment +" (blue `.medilife-btn`). All
   fields bottom-border only (`border-0 border-b border-white/30`). 3-col
   blue (`bg-primary`) contact sidebar: icon + text blocks for hours,
   phone/email, address.
8. `AboutUs.tsx` — white section. Left (4 cols): heading "We always put
   our patients first" + paragraph + blue "View the services +" button.
   Right (8 cols): 2×2 grid of service cards — each card has a lucide
   icon (`Stethoscope`, `Baby`, `FlaskConical`, `Siren`), h5 title, and
   paragraph. Cards: "The Best Doctors", "Baby Nursery", "Laboratory",
   "Emergency Room".
9. `CoolFacts.tsx` — light bg (`bg-light`). 4-column grid, each card:
   centered lucide icon (blue, 80px), counter number (large heading),
   h6 subtitle, paragraph. Data: "5632 Blood donations", "23k Patients",
   "25 Specialities", "723 Doctors". Use `animate-count-up` or simple
   static display.
10. `Gallery.tsx` — horizontal scrollable carousel (CSS scroll-snap or
    simple state-based). 4 images from `picsum.photos/seed/vitalink-
    gallery-<n>/400/300`. Each image has a "See More +" overlay button
    visible on hover (absolute, semi-transparent bg, white text).
11. `Features.tsx` — white section, two-column layout. Left: heading
    "A new way to treat patients in a revolutionary facility" + paragraph
    + blue "View the services +" button. Right: medical illustration
    (`picsum.photos/seed/vitalink-features/600/400`).
12. `Blog.tsx` — white section, 3-column grid of blog cards. Each card:
    thumbnail (`picsum.photos/seed/vitalink-blog-<n>/400/250`) with date
    badge overlay (absolute, bottom-left), circular author avatar
    (`picsum.photos/seed/vitalink-author-<n>/60/60`), headline title
    link, paragraph excerpt, "3 Comments" link. Cards: "New drug release
    soon", "Free dental care", "Good news for the patients".
13. `Emergency.tsx` — blue (`bg-primary`) section. Left: smartphone icon
    (lucide `Smartphone`, white, 80px) + "For Emergency calls" heading +
    phone number "+12-823-611-8721" (large white). Right: 2×2 grid of
    helpline cards — each with h5 city name + contact details. Cities:
    London, New Castle, Manchester, Bristol.
14. `Footer.tsx` — dark navy (`bg-navy`) footer, 4-column widget grid:
    - Col 1: Logo + paragraph + social icons (lucide `Globe`, `Facebook`,
      `Twitter`, `Instagram`).
    - Col 2: "Latest News" — 3 mini blog posts (small thumb + title +
      date).
    - Col 3: "Contact Form" — name, email, message inputs + "Contact Us +"
      blue button.
    - Col 4: "News Letter" — email input + "Subscribe" button + paragraph.
    - Bottom bar: copyright + heart icon + "More templates at Component
      Dock" linking to `https://www.componentdock.com/`.
15. `App.tsx` — compose TopHeader + Navbar + Hero + AppointmentForm +
    AboutUs + CoolFacts + Gallery + Features + Blog + Emergency +
    Footer. Document title "Vitalink — Health & Medical Template".
16. Tests: one describe per component, Gherkin-mirroring scenarios from
    spec.md; 100% coverage lines/functions/branches/statements.
17. Run `scripts/verify-app.sh vitalink` (typecheck + lint + coverage
    tests + build) until green.
18. Update TEMPLATES.md line 2253 `[ ]` → `[x]` with surge URL +
    homepage after deploy; `npm run readme:status`; commit `feat: Vitalink
    — health/medical template`.
