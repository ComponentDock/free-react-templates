# Curelink (ColorLib Remedic) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-curelink`.

## Design notes (replication findings)

- **Original:** ColorLib "Remedic" — health / medical landing template
  (source: https://colorlib.com/wp/template/remedic/).
  TEMPLATES.md line 2258.
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/remedic/
  (HTTP 200, 48 KB, title "Remedic - Free Bootstrap 4 Template by
  Colorlib"). Stylesheets: `css/style.css` (78 KB, compiled from SCSS),
  `css/owl.carousel.min.css`, `css/animate.css`, `css/aos.css`,
  `css/flaticon.css`, `css/icomoon.css`, `css/ionicons.min.css`.
  Font: "Work Sans" (300–700) via Bootstrap `--font-family-sans-serif`.
  Bootstrap 4 grid. jQuery + Owl Carousel for hero/testimonial carousels.
  AOS for scroll animations, Magnific Popup for lightbox.
- **Screenshot:** `remedic-free-template.jpg` (TEMPLATES.md line 2258) —
  dark purple navbar, hero with blue overlay + white headline, vertical
  department tabs, bg-image services section, flip-card doctors, counter
  stats, testimonial carousel, blog grid, newsletter gradient, dark footer.
- **Visual design:** dark purple `#39345a` navbar/footer, blue `#167ce9`
  hero overlay + counter section, mint `#79efb4` newsletter gradient end,
  light blue `#78d5ef` buttons, Work Sans font. Key signatures: vertical
  pill department tabs, CSS 3D flip doctor cards, diagonal blue→teal
  newsletter gradient.

## Design tokens (from css/style.css)

| Token            | Value                    | Where                                            |
| ---------------- | ------------------------ | ------------------------------------------------ |
| Primary blue     | `#167ce9`                | Hero overlay, newsletter gradient start, counter  |
| Dark purple      | `#39345a`                | Navbar (mobile), footer overlay, dark sections    |
| Teal/mint        | `#79efb4`                | Newsletter gradient end                           |
| Light blue       | `#78d5ef`                | `.btn-primary` bg (Learn More, Subscribe)         |
| Grey             | `#6c757d`                | Bootstrap muted text                              |
| Dark ink         | `#212529`                | Body text, headings                               |
| Font family      | `"Work Sans", sans-serif`| All text                                          |
| Hero             | 650px, bg image + blue overlay (0.7) | `.hero-wrap`, `.overlay`               |
| Buttons          | `.btn-primary` light blue, dark text, Bootstrap radius | "Learn More" tabs |
| Department tabs  | Vertical pills, flaticon icons, 4-col left | `.nav-pills`, `.nav-link-wrap`       |
| Doctor cards     | 427px flip cards (CSS 3D transform) | `.block-2`, `.flipper`, `.front`, `.back` |
| Counter          | bg image, white text, 4 stats | `.ftco-counter`, `.block-18`                |
| Testimonials     | Owl Carousel, circular photos, quote icon | `.testimony-section`              |
| Blog             | 2-col grid, bg image + meta + title + excerpt | `.blog-entry`             |
| Newsletter       | Blue→teal diagonal gradient, centered form | `.parallax-img`             |
| Footer           | Dark purple (0.95 opacity), 4-col widgets | `.ftco-footer`                |

## Section structure (order)

1. Navbar — dark purple (mobile) / white (desktop), pharmacy icon + "Curelink", nav links + CTA
2. Hero — 650px, bg image + blue overlay, white headline + subtitle
3. Departments — vertical pill tabs (6 depts) left, tab content right
4. Services BG — bg image, 2×2 service cards right-aligned
5. Doctors — "Our Experienced Doctors", 4 flip cards (front: photo+info, back: quote)
6. Counter — bg image, "Some fun facts", 4 stats
7. Testimonials — Owl Carousel, circular user photos + quotes
8. Blog — light bg, "Recent from blog", 4 cards in 2-col grid
9. Newsletter — blue→teal gradient, email subscription form
10. Footer — dark purple, 4-col widgets + copyright bar

## Tasks (implementation order)

1. Scaffold `apps/curelink` (copy simplest existing app; package
   `@free-react-templates/curelink`; `vite.config.ts` with
   `injectUiSource()`).
2. `npm install` at repo root (registers workspace in package-lock.json;
   verify `grep -c "free-react-templates/curelink" package-lock.json`).
3. `index.css` `@theme` tokens: `--color-primary: #167ce9`,
   `--color-navy: #39345a`, `--color-teal: #79efb4`, `--color-sky:
   #78d5ef`, `--color-ink: #212529`, `--color-muted: #6c757d`,
   `--font-sans: 'Work Sans', sans-serif`. Add Work Sans Google Font
   `<link>` to `index.html`.
4. `Navbar.tsx` — dark purple on mobile (`.navbar-dark bg-[#39345a]`),
   white on desktop (`.bg-white text-dark`). Logo: lucide `Pill` icon
   + "Curelink" wordmark. Nav links (Home active, About, Departments,
   Doctors, Blog, Contact) right-aligned. CTA: "Make an Appointment"
   pill button (teal bg, white text). Mobile: hamburger + collapsible.
5. `Hero.tsx` — 650px (`h-[650px]`), bg image (`picsum.photos/seed/
   curelink-hero/1920/650`) + blue overlay (`bg-[#167ce9]/70`). Centered
   white content: h1 "The most valuable thing is your Health" (48px)
   + paragraph subtitle.
6. `Departments.tsx` — two-column layout. Left (4 cols): vertical pill
   tabs — Cardiology (active), Neurology, Diagnostic, Dental,
   Ophthalmology, Emergency. Each tab has a lucide icon + label. Right
   (8 cols): tab content panels, each with large icon, h2 dept name,
   paragraphs, light blue "Learn More" button (`bg-[#78d5ef] text-
   [#212529] rounded`). State-managed active tab.
7. `ServicesBG.tsx` — bg image (`picsum.photos/seed/curelink-services/
   1920/600`). Right-aligned (6 cols) 2×2 grid of service cards: each
   card has lucide icon, h2 title, paragraph. Cards: "Laboratory
   Services", "General Treatment", "Emergency Service", "24/7 Help &
   Support". Cards have hover arrow animation.
8. `Doctors.tsx` — heading "Our Experienced Doctors". 4-column grid of
   flip cards (h-[427px], CSS `perspective` + `transform-style: preserve-
   3d`). Front: bg image (`picsum.photos/seed/curelink-doctor-<n>/
   400/427`) + gradient overlay + name/specialty. Back: blockquote +
   author avatar. Cards: "Aldin Powell — Neurologist", "— Pediatrician",
   "— Ophthalmologist", "— Pulmonologist". Below: "We are well
   experienced doctors" heading + paragraph.
9. `Counter.tsx` — bg image (`picsum.photos/seed/curelink-counter/1920/
   400`). White text: "Some fun facts" heading + subheading. 4 counters:
   "60 Hospital", "200 Doctors", "100 Clinics", "200 Reviews". Use
   `data-number` static display or simple count-up animation.
10. `Testimonials.tsx` — Owl Carousel or CSS scroll-snap. 4 cards:
    circular user photo (`picsum.photos/seed/curelink-person-<n>/150/
    150`) with quote icon overlay, paragraph quote, name + position.
    Names: "Dennis Green — Patient" (×3), "Dennis Green — Doctor".
11. `Blog.tsx` — light bg (`bg-gray-50`), heading "Recent from blog".
    2-column grid, 4 cards: each card has bg image thumbnail (`picsum.
    photos/seed/curelink-blog-<n>/400/300`) + meta row (date, author,
    comments icon count) + h3 title + paragraph excerpt. All titled
    "New technology facilities".
12. `Newsletter.tsx` — blue→teal diagonal gradient (`bg-gradient-to-br
    from-[#167ce9] to-[#79efb4]`). Centered white text: h2 "Subscribe
    to our Newsletter" + paragraph. Email input + "Subscribe" button
    in a form row. Email validation with zod.
13. `Footer.tsx` — dark purple overlay (`bg-[#39345a]/95`) on bg image.
    4-column widget grid: Col 1 "Curelink" + paragraph + social icons
    (lucide `Twitter`, `Facebook`, `Instagram`); Col 2 "Information"
    links; Col 3 "Site Links"; Col 4 "Have a Questions?" with address,
    phone, email. Bottom bar: copyright + heart icon + "More templates
    at Component Dock" linking to `https://www.componentdock.com/`.
14. `App.tsx` — compose Navbar + Hero + Departments + ServicesBG +
    Doctors + Counter + Testimonials + Blog + Newsletter + Footer.
    Document title "Curelink — Health & Medical Template".
15. Tests: one describe per component, Gherkin-mirroring scenarios from
    spec.md; 100% coverage lines/functions/branches/statements.
16. Run `scripts/verify-app.sh curelink` (typecheck + lint + coverage
    tests + build) until green.
17. Update TEMPLATES.md line 2258 `[ ]` → `[x]` with surge URL +
    homepage after deploy; `npm run readme:status`; commit `feat: Curelink
    — health/medical template`.
