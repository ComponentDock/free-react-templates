# Benefact (ColorLib Fundraiser) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-benefact`.

## Design notes (replication findings)

- **Original:** ColorLib "Fundraiser" — free responsive Bootstrap 4 charity /
  fundraising website template (source:
  https://colorlib.com/wp/template/fundraiser/). TEMPLATES.md has TWO copies
  (line 404 — Bootstrap category, line 1267 — Charity category; mark BOTH
  `[x]` when done). Both rows use the CORRECT screenshot
  `fundraiser-free-template.jpg`.
- **Demo DOM analyzed:** REACHABLE — `https://preview.colorlib.com/theme/fundraiser/`
  returns HTTP 200 (curl, 2026-08-11). Title: "Fundraiser — Website Template
  by Colorlib". This is a FULL-fidelity reference: section order, copy,
  buttons, forms all taken from the live DOM. Token source is TWO
  stylesheets: `css/bootstrap.min.css` (custom-compiled — real
  `--primary:#00a651`, `--secondary:#21323b`) and `css/style.css`
  (components).
- **Visual design:** warm charity aesthetic — bright green `#00a651` top bar
  and CTAs, dark slate `#21323b` navbar, white page, light-gray `#f6f5f5`
  CTA strip, gray `#c9ccd4` footer. Headlines in the handwritten **Mansalva**
  script over Roboto body. Hero = static centered caption over 3 rotating
  children-photography slides; three tinted cause cards (red/yellow/green
  screen-blend overlays). Demo brands itself "Fundraiser" → recreation:
  **Benefact**.

## Design tokens (from the live stylesheets)

| Token             | Value                                                                                                                      | Where                                                                                                                                        |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Brand green       | `#00a651` (`--primary`)                                                                                                    | top bar, btn-primary bg/border, text-primary, badges, date badge, progress fill, hero button, footer link hover, focus border, carousel dots |
| Dark slate        | `#21323b` (`--secondary`)                                                                                                  | navbar bg, badge-warning text color                                                                                                          |
| Body/heading text | `#364d59` (weight 300)                                                                                                     | body + h1–h5 (headings Roboto)                                                                                                               |
| Danger red        | `#dc3545`                                                                                                                  | badge-danger, cause card 1 progress, Livelihood card tint                                                                                    |
| Warning yellow    | `#ffc107`                                                                                                                  | badge-warning, cause card 3 progress, Natural Remedies card tint                                                                             |
| Light gray        | `#f6f5f5`                                                                                                                  | `bg-light` override (CTA strip)                                                                                                              |
| Footer bg         | `#c9ccd4`                                                                                                                  | footer (despite the `bg-white` class in the DOM!)                                                                                            |
| Fonts             | Roboto + Mansalva (cursive)                                                                                                | Google Fonts `<link>`s in index.html; `text-cursive` → Mansalva                                                                              |
| Hero              | 100vh / min-600px, black overlay opacity .3, caption box centered (max-width 700px), h1 Mansalva 5rem weight 900           | `.ftco-cover-1.overlay` + `.box-92819`                                                                                                       |
| Buttons           | green bg, white text; hero button `py-3 px-4 rounded-0` (square); standard radius 4px (BS default); no pills               | `.btn.btn-primary`                                                                                                                           |
| Cause strip       | 3 cards 33.33% × 300px, overlay `mix-blend-mode: screen` opacity .9, text bottom-left (20px/20px)                          | `.feature-29192`                                                                                                                             |
| Progress bar      | 7px, track `#ccc`, fill 4px right radius, caption 12px white bottom-right                                                  | `.custom-progress-*`                                                                                                                         |
| Number circles    | 80px, 2px white border, 1.5rem numeral                                                                                     | `.feature-29012 .number`                                                                                                                     |
| Event date badge  | 100px flex block, `bg-primary`, rounded, white h3 day + white small month                                                  | `.event-29191 .date`                                                                                                                         |
| Section rhythm    | `.site-section` 2.5em mobile / 5em desktop; `heading-20219` blocks; `bg-image` sections use `background-attachment: fixed` | —                                                                                                                                            |

## Tasks (implementation order)

1. Scaffold `apps/benefact` (copy the simplest existing app; package
   `@free-react-templates/benefact`; `vite.config.ts` with
   `injectUiSource()`).
2. `npm install` at repo root (registers workspace in package-lock.json;
   verify `grep -c "free-react-templates/benefact" package-lock.json`).
3. `index.css` `@theme` tokens: `--color-primary: #00a651`,
   `--color-secondary: #21323b`, `--color-ink: #364d59`,
   `--color-danger: #dc3545`, `--color-warning: #ffc107`,
   `--color-mist: #f6f5f5`, `--color-footer: #c9ccd4`,
   `--font-sans: 'Roboto', sans-serif`, `--font-script: 'Mansalva',
cursive`; Google Fonts Roboto + Mansalva `<link>`s in `index.html`.
4. `TopBar.tsx` — green `#00a651` strip: links Home / Events / Become A
   Volunteer (white, spaced) left; Twitter + Facebook icon links right;
   `hidden md:flex` (reference uses `d-none d-md-block`).
5. `Navbar.tsx` — dark slate `#21323b` bar: white wordmark "Benefact" left;
   links Home (active) / About Us / Our Causes / Blog / Contact right;
   mobile hamburger (lucide Menu, aria-expanded) opening the same five
   links.
6. `Hero.tsx` — full-viewport hero: static centered caption box
   (Mansalva h1 "Join The Movement To end Child Poverty" + square green
   "Donate Now" ButtonLink) over a rotating background photo carousel —
   3 slides (`picsum.photos/seed/benefact-1..3/<1600x900>`), dark overlay
   (`bg-black/30`); crossfade/rotate optional, caption must stay visible;
   min-height 600px, `h-screen`-class on desktop.
7. `CauseStrip.tsx` — 3 cards (grid-cols-1 md:grid-cols-3, 300px tall,
   `-mt-5 relative z-10` overlap over the hero bottom):
   - Livelihood → red tint `#dc3545`
   - Natural Remedies (meta "Health") → yellow tint `#ffc107`
   - New Class Rooms (meta "School") → green tint `#00a651`
     Tint via a full-cover colored overlay at ~90% with `mix-blend-screen`
     over the photo; white meta label + white Mansalva title bottom-left.
8. `LatestCauses.tsx` — heading row: left Mansalva "Latest Causes" + right
   lorem copy (col-span 4/8); 3 cause cards (grid-cols-1 md:grid-cols-3,
   `shadow-sm`):
   - photo with bottom progress overlay: caption "80% complete" (white 12px
     bottom-right) + 7px track `#ccc` with 80% fill (card 1 red, card 2
     green, card 3 yellow)
   - bordered content box: small rounded badge (School / Health /
     Livelihood), h3 title link (26px black), Donated row ("Donated" +
     green "$32,919"), organizer row (50px circular picsum avatar +
     "James Smith")
9. `WhyChooseUs.tsx` — photo bg section (fixed attachment) with dark
   overlay: white Mansalva h2 "Why Choose Us" + white copy; 2×2 grid of
   feature rows: 80px white-bordered number circle (1–4) + h3 + p — Odit
   Reiciendis, Nisi Sint Explicabo, Accusamus Labore Necessitatibus,
   Consectetur Dolor Elit.
10. `LatestEvent.tsx` — Mansalva "Latest Event" heading; 2 cards
    (grid-cols-1 md:grid-cols-2): rounded photo; row: green date badge
    (day "22" + "Oct 2019") + meta (Clock icon "9:30 AM — 11:30 AM",
    MapPin icon "Ghana Africa") + h3 title link.
11. `DonateForm.tsx` — section over a green-tinted photo
    (`overlay-primary`): LEFT photo (`shadow`), RIGHT white card
    (`bg-white p-4 shadow`): Mansalva h3 "Donate Now" + form (Name, Email,
    Amount in dollar) + green "Donate Now" submit; zod validation,
    per-field errors, no submit until valid.
12. `CtaStrip.tsx` — `bg-mist` p-5 flex row: Mansalva h2 "Helping the
    Homeless, Hungry, and Hurtings Children" + right-aligned green "Donate
    Now" button.
13. `Footer.tsx` — `#c9ccd4` bg, 4 widget blocks:
    - About Us — lorem paragraph (col-span 7)
    - Features — link list: About Us, Testimonials, Terms of Service,
      Privacy, Contact Us (col-span 4)
    - Subscribe to Newsletter — email input (rounded-none, secondary
      border) + green Subscribe button (validation + success message)
    - Follow Us — Facebook / Twitter / Instagram / LinkedIn inline-SVG
      icon row
      Black 16px widget headings; links `rgba(0,0,0,0.5)` hover green;
      copyright bar (white/10 top border): "Copyright © <year> All rights
      reserved | made with ♥ by Colorlib".
14. `App.tsx` — compose TopBar + Navbar + main (Hero, CauseStrip,
    LatestCauses, WhyChooseUs, LatestEvent, DonateForm, CtaStrip) +
    Footer; document title "Benefact — Charity Template".
15. Tests: one describe per component, Gherkin-mirroring scenarios from
    spec.md; 100% coverage lines/functions/branches/statements. Watch the
    duplicate-link trap (top bar + navbar + mobile menu + CTAs all render
    links — `getAllByRole('link')` + index); decorative images `alt=""`
    have no `img` role — query with `container.querySelectorAll('img')`;
    `getByText` matches every element whose direct text contains the token
    — anchor with `/^...$/`.
16. Run `scripts/verify-app.sh benefact` (typecheck + lint + coverage tests
    - build) until green.
17. Update TEMPLATES.md lines 404 AND 1267: `[ ]` → `[x]` (BOTH copies)
    with surge URL + homepage after deploy; `npm run readme:status`;
    commit `feat: Benefact — charity template (ColorLib Fundraiser)`;
    PR → main → merge immediately.

## Fidelity gotchas

- **Preview is LIVE** — use it as the ground truth. The section order and
  copy above were read from the actual rendered DOM
  (`https://preview.colorlib.com/theme/fundraiser/`); do not improvise
  section order.
- **Brand green is `#00a651`** (from the custom-compiled bootstrap
  `--primary`), NOT a bootstrap blue. The old `#007bff` bootstrap-blue
  rules are unused overrides — the template's accent is green.
- **Tint colors are SWAPPED vs class names** on the cause strip: the
  `overlay-danger` card renders RED `#dc3545`, `overlay-success` renders
  YELLOW `#ffc107`, `overlay-warning` renders GREEN `#00a651`. Use the
  rendered colors: Livelihood=red, Natural Remedies=yellow, New Class
  Rooms=green.
- **Footer bg is `#c9ccd4`** (from `.site-footer` in style.css) even though
  the DOM element carries `bg-white` — the CSS wins; don't render a white
  footer.
- **Hero caption is STATIC** — the `box-92819` div sits OUTSIDE the
  `owl-carousel` in the DOM, so the Mansalva headline + Donate button stay
  fixed while the 3 background slides rotate behind them.
- **Mansalva is the display font** (`text-cursive`): hero h1 (5rem, weight
  900), section titles (Latest Causes / Latest Event / Donate Now h3 / CTA
  h2), and the three cause-strip titles. Everything else is Roboto 300.
- **Two `site-section`-style paddings**: 2.5em mobile, 5em desktop. `bg-image`
  sections (Why Choose Us, Donate Now) use `background-attachment: fixed`.
- **Screenshot text drift:** the screenshot shows "Lifesaving" on the left
  cause card while the live DOM says "Livelihood" — follow the DOM.
- **Dup rows:** TWO TEMPLATES.md copies (404 Bootstrap, 1267 Charity) —
  BOTH must be marked `[x]`; both already point at the correct screenshot.
- Roboto + Mansalva via Google Fonts; icons from lucide-react (brand glyphs
  like the icomoon twitter/facebook icons are recreated with inline SVG).
