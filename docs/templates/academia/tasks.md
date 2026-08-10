# Academia (ColorLib Edumark) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-academia`.

## Design notes (replication findings)

- **Original:** ColorLib "Edumark" — education / online-courses landing
  template (source: https://colorlib.com/wp/template/edumark/).
  TEMPLATES.md has THREE copies (lines 382, 1632, 2042 — mark ALL `[x]`
  when done). SCSS source label "Edu mark / 207 Education".
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/edumark/
  (HTTP 200, 134 KB, title "Edumark"). Stylesheet `css/style.css`
  (177 KB, SCSS-compiled, Poppins + Crimson Text via Google Fonts
  @import at top) + Bootstrap 4 + plugin libs (owl.carousel for the
  testimonial, slicknav for the mobile menu, flaticon icon font).
- **Screenshot:** `edumark-free-template.jpg` — verified live in a
  browser (vision, 1200×946): purple→violet gradient hero with soft
  circles + flat illustration (laptop video player, 3 graduation-capped
  students, speech bubbles) left, white 3-line headline + teal pill CTA
  right; transparent header over it (teal book logo "Edumark", centered
  nav with Home active teal underline + dropdowns, Log in link + orange
  pill phone button); below fold "Over 7000 Tutorials from 20 Courses"
  with floating peach/blue stat circles. Flat, friendly, SaaS-style
  education aesthetic.
- **Visual design:** purple-gradient hero (100vh), white body, teal
  `#04D2C8` primary (logo, CTAs, active underline, stat circle, price,
  newsletter bg), peach `#FD8E5E` (stat circle, Sign Up button), light
  blue `#5DB2FF` (stat circle), orange `#FDAE5C` (phone pill, footer
  hover), purple `#D465EF` (speciality icon), ink `#1F1F1F` headings,
  grey `#919191` body text, `#BABABA` footer links; 46px Poppins 400
  section titles, Crimson Text 17px paragraphs, pill buttons (radius
  30px, padding 17px 50px, 16px Poppins).

## Design tokens (from css/style.css)

| Token            | Value                                                                                                                                                                                | Where                                                                                                                                                                                       |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Primary teal     | `#04D2C8`                                                                                                                                                                            | `.boxed_btn` bg (hero CTA, Enroll a Course) + `.boxed_btn_rev` hover; `.subscribe_newsletter` bg; `.courses-sky` circle; tab active underline; `.active_prise`; `.icon.blue`; logo wordmark |
| Peach            | `#FD8E5E`                                                                                                                                                                            | `.courses` stat circle (opacity .7); newsletter Sign Up button bg                                                                                                                           |
| Light blue       | `#5DB2FF`                                                                                                                                                                            | `.courses-blue` stat circle (opacity .7)                                                                                                                                                    |
| Orange           | `#FDAE5C`                                                                                                                                                                            | `.boxed_btn_orange` header phone pill; footer link hover                                                                                                                                    |
| Purple           | `#D465EF`                                                                                                                                                                            | `.icon.gradient` speciality glyphs                                                                                                                                                          |
| Ink              | `#1F1F1F`                                                                                                                                                                            | `.section_title h3`, active tab link, speciality card h3, headings                                                                                                                          |
| Greys            | `#919191` (inactive tabs, body) · `#999999` (meta) · `#BABABA` (footer links, hover `#FDAE5C`)                                                                                       | text + meta + footer                                                                                                                                                                        |
| Overlay          | `#000` opacity .5                                                                                                                                                                    | `.overlay::before` testimonial bg overlay                                                                                                                                                   |
| Fonts            | **"Poppins", sans-serif** (nav/buttons/titles/cards/tabs, 200–800) + **"Crimson Text", serif** (body + paragraphs, 17px `#919191`)                                                   | body, `.section_title p`, `.boxed_btn*`, nav, card titles                                                                                                                                   |
| Section titles   | 46px (mobile 23px), weight 400, `#1F1F1F`, mb 23px                                                                                                                                   | `.section_title h3` (Popular Courses, Our Course Speciality, Our Latest Blog)                                                                                                               |
| Buttons          | pill **radius 30px**, padding **17px 50px**, 16px Poppins; `.boxed_btn` teal fill / `.boxed_btn_rev` teal outline, hover inverts; `.boxed_btn_orange` padding 12px 30px bg `#FDAE5C` | Browse Our Courses, Enroll a Course, More Courses, phone pills (×3)                                                                                                                         |
| Stat circles     | 270px / 310px circles, `::before` bg opacity .7, centered white span 60px + p 18px                                                                                                   | `20+` / `7638` / `230+` Courses                                                                                                                                                             |
| Newsletter form  | input 60px white 70% (radius 3px left) + button 60px `#FD8E5E` 30% (radius 3px right)                                                                                                | `.subscribe_newsletter .newsletter_form`                                                                                                                                                    |
| Hero             | **100vh** bg image (purple gradient + soft circles) cover; two 6-col halves — illustration left, h1 white 3 lines + CTA right                                                        | `.single_slider.slider_bg_1`, `.illastrator_png`, `.slider_info`                                                                                                                            |
| Footer           | bg image cover; `footer_top` 145/129px; widget titles 22px white mb 40px; links 16px `#BABABA` line-height 42px hover `#FDAE5C`                                                      | `.footer_bg_1`, `.footer_title`, `.footer_widget ul li a`                                                                                                                                   |
| Icons (flaticon) | → lucide: user (Log in), phone, star, chevron-down, play, graduation-cap/book-open, art/design, briefcase, award, crown, calendar, tag; socials inline SVG                           | header, cards, speciality, blog meta, footer                                                                                                                                                |

## Tasks (implementation order)

1. Scaffold `apps/academia` (copy simplest existing app; package
   `@free-react-templates/academia`; `vite.config.ts` with
   `injectUiSource()`).
2. `npm install` at repo root (registers workspace in package-lock.json;
   verify `grep -c "free-react-templates/academia" package-lock.json`).
3. `index.css` `@theme` tokens: `--color-primary: #04D2C8`,
   `--color-peach: #FD8E5E`, `--color-sky: #5DB2FF`,
   `--color-orange: #FDAE5C`, `--color-violet: #D465EF`,
   `--color-ink: #1F1F1F`, `--color-muted: #919191`,
   `--color-meta: #999999`, `--color-foot: #BABABA`,
   `--font-sans: 'Poppins', sans-serif`, `--font-serif: 'Crimson
Text', serif`. Add Poppins + Crimson Text Google Fonts `<link>` to
   `index.html`.
4. `Header.tsx` — absolute over hero (white text), container: wordmark
   "Academia" (teal, book icon — lucide `BookOpen`) left; centered nav
   Home (active, teal underline via `border-b-2 border-primary`),
   Courses / Pages / About / Blog / Contact (dropdown chevrons);
   right: "Log in" (lucide `User`) + orange pill phone button
   (lucide `Phone`); sticky variant flips to white bg (state on
   scroll); mobile: hamburger (lucide `Menu`) + collapsible stacked
   list (aria-expanded).
5. `Hero.tsx` — `min-h-screen` purple gradient bg (`bg-gradient-to-br
from-[#7C4DFF]-ish` — pick a purple ramp close to the screenshot,
   add soft radial circles via decorative absolutely-positioned blurred
   divs); 2-col grid: left illustration (flat composition — lucide
   `MonitorPlay`/`Laptop` + `GraduationCap` + `Play` in a circle, or a
   seeded picsum illustration), right: h1 white 3 lines "Learn your /
   Favorite Course / From Online" + `<Button>`-style teal pill
   "Browse Our Courses" (radius-full, px-12 py-4).
6. `About.tsx` — heading "Over 7000 Tutorials from 20 Courses"
   (46px ink), Crimson Text paragraph (17px muted), teal pill "Enroll a
   Course"; right: three stat circles (absolute, `rounded-full` 270/310px
   with `bg-peach/70` `bg-sky/70` `bg-primary/70`, centered white
   "20+"/"7638"/"230+" + "Courses"); mobile stacks.
7. `PopularCourses.tsx` — section title + blurb; tab bar (9 categories,
   active = ink + `border-b-2 border-primary`); course data array
   (title, category, rating, offer, price, seed) — grid of cards
   (thumb picsum `seed/academia-<n>/300/200`, category span, 2-line
   title, star icon + "(4.5)", offer strikethrough + teal price);
   clicking a tab filters the grid; "More Courses" teal outline pill
   (`border-primary text-primary hover:bg-primary hover:text-white`).
8. `Testimonial.tsx` — bg image + `bg-black/50` overlay (or a dark
   purple gradient + overlay), centered white quote, "- Jquileen" +
   round avatar (picsum 60×60); simple two-slide carousel (state +
   prev/next buttons, aria-labels) or static single slide.
9. `Speciality.tsx` — section title "Our Course Speciality" + blurb; 4
   cards: circular icon badge (lucide `Palette`, `Briefcase`, `Award`,
   `Crown` — teal/purple), h3 "Premium Quality", paragraph.
10. `Newsletter.tsx` — `bg-primary` section, left heading + description,
    right form (h4 label, 60px white input + peach "Sign Up" button,
    rounded-l/r-3px), zod email validation, success message on valid
    submit.
11. `LatestBlog.tsx` — section title "Our Latest Blog"; 3 cards (thumb
    picsum 350×250, meta "12 Jun, 2019" + "in Design tips" with
    calendar/tag icons, bold title "Commitment to dedicated Support",
    paragraph).
12. `Footer.tsx` — dark gradient bg; col 1 white wordmark + blurb +
    social icons; col 2 Courses links (Wordpress, Photoshop,
    Illustrator, Adobe XD, UI/UX); col 3 Resources (Free Adobe XD
    Tutorials, About, Contact); col 4 About (Address "200, D-block,
    Green lane USA", Phone "+10 367 467 8934", Email); `border-t
border-white/20` bottom bar with copyright + Colorlib credit (CC BY
    3.0).
13. `App.tsx` — compose Header + Hero + About + PopularCourses +
    Testimonial + Speciality + Newsletter + LatestBlog + Footer;
    document title "Academia — Education Template".
14. Tests: one describe per component, Gherkin-mirroring scenarios from
    spec.md; 100% coverage lines/functions/branches/statements.
15. Run `scripts/verify-app.sh academia` (typecheck + lint + coverage
    tests + build) until green.
16. Update TEMPLATES.md lines 382 AND 1632 AND 2042 `[ ]` → `[x]` (ALL
    THREE copies) with surge URL + homepage after deploy;
    `npm run readme:status`; commit `feat: Academia — education
template (ColorLib Edumark)`; PR → main → merge immediately.

## Fidelity gotchas

- **Three TEMPLATES.md copies** (382, 1632, 2042): ALL must be marked
  `[x]` — the item repeats across the Bootstrap / Education / Business
  categories.
- Primary teal `#04D2C8` does double duty: hero CTA fill AND newsletter
  section background — both are solid teal blocks, not tints.
- Buttons are PILL (radius 30px, generous padding 17px 50px) — NOT the
  repo-default small radius; `.boxed_btn_rev` (More Courses) is outline
  teal that inverts on hover.
- Section titles are 46px Poppins weight 400 (NOT bold) in `#1F1F1F`;
  paragraphs are Crimson Text 17px `#919191` — serif body vs sans
  headings is the template's signature type pairing.
- Stat circles are overlapping absolute circles (peach 270px left, blue
  310px right-top, teal 270px middle) with `::before` bg at opacity .7 —
  keep the translucent layered look; stack statically on mobile.
- The header is transparent over the purple hero (white text); the
  sticky/scroll state turns the header white — implement both states.
- The phone pill repeats three times (header + footer contact) with
  `boxed_btn_orange` styling — `#FDAE5C` bg, smaller padding (12px
  30px).
- Testimonial uses a black overlay at opacity .5 over a bg image; the
  hero "purple gradient" is a background IMAGE in the source (banner.png)
  — recreate with a CSS gradient + soft radial circles, never copy the
  asset.
- flaticon is an icon font in the source — swap to lucide-react (user,
  phone, star, chevron-down, play, book-open, graduation-cap, palette,
  briefcase, award, crown, calendar, tag); brand socials must be inline
  SVG (lucide-react removed brand glyphs).
- Header logo is a PNG (teal book + wordmark; white variant in footer) —
  recreate as text wordmarks; do NOT copy the image assets.
- Tab filtering: All Courses shows the first pane's 6 cards; each other
  tab shows only its category's cards from the shared data array.
