# HealthPlus (ColorLib Health) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-healthplus`. Recreation name: **HealthPlus** (NEW
> name — the ColorLib source keeps its name "Health").

## Source mapping

- **ColorLib item:** "Health" (TEMPLATES.md line 2236).
- **Source URL:** https://colorlib.com/wp/template/health/
- **Preview URL — REACHABLE (verified 2026-09-24):**
  `https://preview.colorlib.com/theme/health/` (HTTP 200, 598 lines,
  `<title>Health</title>`)
- **Preview CSS:** `styles/main_styles.css` (1,697 lines — ALL custom
  styling) + `styles/bootstrap4/bootstrap.min.css` (Bootstrap 4) +
  `plugins/font-awesome-4.7.0/css/font-awesome.min.css` (Font Awesome
  4 — REPLACE with lucide-react, do NOT ship) +
  `plugins/OwlCarousel2-2.2.1/owl.carousel.css` + `owl.theme.default.css`
  + `animate.css` (OwlCarousel2 — replace with React carousel or CSS
  slider). Scripts: jQuery 3.3.1, Bootstrap 4 JS, OwlCarousel2, easing.js,
  parallax.js, custom.js. Fonts: Google Fonts **Montserrat** (300–900
  imported; only 400/500/600/700 used).

## Reference research (done — do not redo)

### Screenshot (health-free-template.jpg)

Browsed visually in the browser 2026-09-24. White top bar with bold
"HEALTH+" logo (dark text, green "+"), utility links and phone number.
Green `#32c69a` navigation bar with white uppercase links and a white
search box. Large hero section with a blurred hospital/medical background
photo and a female doctor with stethoscope. White heading "Medical
Services that you can trust" left-aligned, white subtitle, green "READ
MORE" button. Below: three info cards (two with images, one grey form
card). Clean, professional medical aesthetic with teal/green + white
palette. Montserrat font throughout.

### Design tokens (live stylesheet + rendered page, verified 2026-09-24)

| Token              | Value                                  | Use                                                                     |
| ------------------ | -------------------------------------- | ----------------------------------------------------------------------- |
| Brand              | `#32c69a` (green/teal)                 | Nav bar bg, buttons, active accordion, hover states, phone icon, logo "+" |
| Brand alt          | `#329fec` (blue)                       | Hamburger hover only                                                    |
| Ink                | `#404040`                              | Headings, logo, phone number, accordion text, dept titles               |
| Ink dim            | `#838383`                              | Nav utility, descriptions, service text, news meta                      |
| Ink body           | `#929191`                              | Paragraph body text                                                     |
| Bg                 | `#FFFFFF`                              | Page bg, header, info section, departments, accordion items             |
| Bg light           | `#f4f8fb`                              | Info boxes, services, FAQ & news section                                |
| Bg form            | `#e5ecf1`                              | Appointment form container                                              |
| Bg footer-input    | `#6a6d72`                              | Footer contact form input bg                                            |
| Footer hours       | `rgba(22,22,23,0.61)`                 | Opening hours dark overlay                                              |
| Footer bar         | `rgba(18,17,17,0.66)`                 | Bottom footer bar dark overlay                                          |
| Error              | `#db5246`                              | Form-control error text                                                 |
| Accent             | `#ffa07f`                              | Link hover underline (salmon)                                           |
| Active link        | `rgba(255,255,255,0.75)`             | Active nav link (dimmed white)                                          |
| Font               | 'Montserrat' 400/500/600/700          | Google Fonts `<link>` (source imports 300–900)                          |
| Button             | `#32c69a` bg, white text              | 137×54px, uppercase, 11px 500, 0.2em letter-spacing                     |
| Submit button      | `#32c69a` bg, white text              | Full-width, 54px height, uppercase 11px                                 |
| Section padding    | 99–100px top/bottom                    | Consistent vertical rhythm                                              |
| Header top height  | 91px                                   | Top utility bar                                                         |
| Header nav height  | 78px                                   | Green navigation bar                                                    |
| Hero height        | 874px                                  | Full hero section                                                       |
| Dept hover         | shadow + bg + overlay + border         | `0px 20px 46px rgba(0,0,0,0.1)`, `#f4f8fb`, `rgba(0,0,0,0.49)` overlay, green 4px bottom |
| FAQ active         | `#32c69a` bg + white text             | Active accordion; 50px left bar with +/- icon                           |

### Icon mapping (lucide-react)

| Source glyph (Font Awesome 4)  | Recreation                   |
| ------------------------------ | ---------------------------- |
| `fa-phone`                     | lucide `Phone`               |
| `fa-search`                    | lucide `Search`              |
| `fa-bars`                      | lucide `Menu`                |
| `fa-chevron-right`             | lucide `ChevronRight`        |
| `fa-pinterest` / `fa-facebook` / `fa-twitter` / `fa-dribbble` / `fa-behance` / `fa-linkedin` | lucide `Github` / `Facebook` / `Twitter` / `Dribbble` / `Linkedin` (probe availability) |

### Picsum placeholder plan

- Hero bg: `https://picsum.photos/seed/healthplus-hero/1920/874`
- Info card images (2): `https://picsum.photos/seed/healthplus-info-1/400/250`, `https://picsum.photos/seed/healthplus-info-2/400/250`
- CTA bg: `https://picsum.photos/seed/healthplus-cta/1920/400`
- Dept images (4): `https://picsum.photos/seed/healthplus-dept-1/400/300` through `-4`
- News thumbnails (3): `https://picsum.photos/seed/healthplus-news-1/73/73` through `-3`
- Footer bg: `https://picsum.photos/seed/healthplus-footer/1920/600`

## Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/healthplus` from the simplest existing app, rename
       package to `@free-react-templates/healthplus`, add Montserrat
       400/500/600/700 Google Fonts `<link>` in index.html, set
       `public/CNAME` = `healthplus.free.componentdock.com` + `"homepage"`.
       Register the workspace in package-lock.json.
2. [ ] Write the spec-traceable test suite FIRST (Vitest + Testing Library,
       100% coverage): Navbar (two-tier, logo, utility links, phone,
       nav links, search), Hero (heading, subtitle, button, bg image),
       InfoBoxes (2 cards + 1 form with selects/inputs/button),
       CTA (heading, subtitle, button, parallax bg), ServiceGrid (6
       icon boxes), DepartmentCarousel (slider with nav), FAQAccordion
       (expand/collapse, active state), LatestNews (3 blog posts),
       Footer (3 columns: about/social, contact form, hours, bottom
       bar), App (landmarks, document title).
3. [ ] Header component: top utility bar (white, 91px, logo + links +
       phone) + green nav bar (78px, 5 links + search). Responsive
       hamburger menu for ≤991px.
4. [ ] Hero section: full-width with background image (picsum),
       left-aligned content (60px heading, 16px subtitle, green button).
5. [ ] Info boxes: 3-column layout (2 service cards with image/title/
       text/button on `#f4f8fb`, 1 appointment form on `#e5ecf1` with
       selects + inputs + submit button).
6. [ ] CTA parallax section: background image, white heading + subtitle,
       green button.
7. [ ] Services grid: 3×2 grid of icon boxes (lucide icons + titles +
       descriptions), centered green button. `#f4f8fb` bg.
8. [ ] Department carousel: horizontal slider with image cards, hover
       effects (shadow + overlay + green border), green nav button.
9. [ ] FAQ accordion + Latest News split: left column with 3 accordion
       items (green active), right column with 3 blog post cards.
10. [ ] Footer: parallax bg, 3 columns (about + social, contact form,
       hours), bottom bar (nav + utility + phone).
11. [ ] Run `npm run verify:app -- healthplus` (typecheck → lint → vitest
       100% → build) and fix until green.
12. [ ] Open PR `feat/template-healthplus` → merge immediately; PR
       description must include: source URL, preview URL, token list
       (green `#32c69a`, Montserrat, two-tier header, parallax sections,
       accordion), and what differs (renamed "HealthPlus", lucide icons,
       React carousel instead of OwlCarousel2, picsum placeholders,
       Component Dock footer).
13. [ ] Bookkeeping after merge: mark TEMPLATES.md line 2236 `[x]` +
       surge URL (`https://healthplus.free.componentdock.com`),
       `npm run readme:status`, push.
