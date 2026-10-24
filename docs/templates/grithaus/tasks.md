# Grithaus (ColorLib Fitnessgym) — Tasks & Design Notes

> Prep artifacts written on `main` by the prep stream. Implementation ships
> later on `feat/template-grithaus`. This folder + the spec are the claim
> marker: the implementer starts from here, no research needed.

## Identity

| Thing | Value |
|---|---|
| New name | **Grithaus** (grit + haus; single lowercase word, no collision anywhere) |
| App / package | `apps/grithaus` · `@free-react-templates/grithaus` |
| Deploy target | `grithaus.free.componentdock.com` |
| Source | ColorLib **Fitnessgym** — https://colorlib.com/wp/template/fitnessgym/ |
| Preview | https://preview.colorlib.com/theme/fitnessgym/ (HTTP 200, 38 KB HTML + 41 KB `style.css`, fetched 2026-10-24) |
| Screenshot | https://colorlib.com/wp/wp-content/uploads/sites/2/fitnessgym-free-template.jpg (AVIF → decoded, top fold only) |
| TEMPLATES.md rows | lines **397** and **1846** (`grep -c 'wp/template/fitnessgym/'` = 2) — both currently `[x]` and wrongly credited to `vigor` |
| Why no app exists | `docs/row-multiplicity.md` §2 APP-WRONG-DESIGN: `vigor`'s spec names **Endurance** (`row-excl / spec-excl` = 0 / 33) |
| Category | Health & Fitness / Gym |

## Structure (1:1, DOM order from the live preview)

1. `header-area` — 85px transparent bar over the hero; logo pill left;
   UPPERCASE 13px/700 white links (Home, Pages ▾, Mega Menu ▾, About Us,
   News, Contact); gradient `Call: +34 586 778 8892` button (`ml-30`).
   Nav gains `#101214` background on scroll; burger panel below the
   breakpoint.
2. `hero-area` — owl-carousel of **3** `single-hero-slide`
   (`bg-1/2/3.jpg`), height 880px (650/600/550px responsive), overlay
   `rgba(0,0,0,.3)`, content in a `col-lg-9`: h2 100px weight 400 white +
   p 14px/600 white (mb 40px) + outline button. Slides: "Get fit &
   healthy." / "Long life Fitness." / "Fitness wonder."; buttons
   "Get a membership" then "Read More" ×2. Numeric pagination 01/02/03.
3. `fitness-adds-area` — two `single-add-area` banners
   (`col-6` each, `mt-100`): blue "25% Discount" card, brick photo with a
   green "Fitness Class" band. (Source ships these as flat GIF/PNG
   creatives — rebuild as styled cards, keep the two headlines.)
4. `about-us-area` — label "Fitness Gym" + h2 "Why choose Fitness Gym?"
   (full-width heading row); then `col-lg-8` = two paragraphs
   (2 × `col-lg-6`) + button group (`Get a membership` outline,
   `Find out more` `btn-2` filled) and `col-lg-4` = portrait
   (`man.png`, `margin-top: -50px`).
5. `meet-the-experts-area` — dark band (`bg-6.jpg` + `rgba(5,11,37,.85)`);
   white heading "Ask the experts"; `col-lg-3` italic white paragraph;
   `col-lg-9` collage: 4 `single-team-members` absolutely positioned
   (w 40/30/30/30%, left 0/30/55/auto, bottom −50/−60/−100/−100px,
   container 500px `overflow: hidden`, each name plate
   `top: 40%` and the last three `scale(0.6)`). Names: Julia Smith,
   Mick Hamilton, Jack Black, Criss James (roles: Personal trainer ×3,
   Fitness trainer).
6. `fitness-services-area` — 6 × `single-service-area` in
   `col-12 col-sm-6 col-lg-4`: 77px green circle icon + 20px `h4` on one
   row, paragraph below. Titles: Business School, Fitness Pro, Yoga
   Courses, Diet Specialists, Swimming Pool, Spinning Class. Hover →
   gradient icon + green title.
7. `fitness-pricing-table-area` — `bg-7.jpg`, `bg-overlay`, `bg-fixed`
   (parallax); 3 white cards (`col-12 col-md-6 col-lg-4`): photo,
   `$50 / Month · Woman Fitness Class`, `$70 / Month · Spinning Class +
   BONUS`, `$90 / Month · All Inclusive Gym`; each 3 `price-data` bullets
   (green 8px dots) + outline `Enroll Now`.
8. `fitness-working-hours-area` — 2 columns: (a) label + "Working Hours"
   + 7 rows (Mon 16:00-20:00, Tue/Wed/Thu 12:00-20:00, Fri 15:00-21:00,
   Sat 10:00-20:00, Sun Closed), 16px/600 `#838383`, hover green;
   (b) label + "Our Newsletter": name input, email input, italic helper
   note, white `Subscribe` button.
9. `footer-area` — `bg-11.jpg` + `rgba(5,11,37,.85)`; 4 widgets
   (`col-lg-3`): brand + blurb + 6 social icons; "testimonials" slider
   (italic 13px `#bebebe` quote, 13px green author); "Classes" list
   (Bodybuilding, Fitness, Yoga Courses, Dumbell, Spinning, Kangoo Jump);
   "Contact" (address 481 Creekside Lane Avila Beach CA 93424, phone
   +53 345 7953 32453, yourmail@gmail.com). Bottom bar 40px, centred 12px
   `#5c6077` copyright → **Component Dock** link.

## Fidelity notes (non-obvious)

- **One font, one accent.** Open Sans everywhere (`p` 14px/2 weight 400
  `#838383`); the whole identity is the green `#38b143` + lime `#b6e358`
  pair, used as a left-to-right gradient in three places only: section
  labels (gradient text), header CTA, and the "btn-3" variant. Keep the
  gradient off the plain outline buttons.
- **Buttons are 10px-radius, 3px-bordered, UPPERCASE, 200px min-width,
  45px tall** — the outline green default is the most common button on the
  page (hero, pricing, about). Do not turn them into pills.
- **Hero type is light, not bold.** `h1..h6 { font-weight: 700 }` globally
  but `.single-hero-slide h2 { font-weight: 400; font-size: 100px }` — the
  contrast between the huge thin headline and the 14px/600 sub-paragraph is
  the signature of the hero. Keep 48/36/30px steps on smaller screens.
- **Section rhythm is `padding-top: 100px; padding-bottom: 0`** with a
  `mb-100` on each inner block. Reproduce with `pt-25 pb-0`-style utilities
  (100px) rather than symmetric `py-25`, or the stacked bands drift.
- **Section heading block**: 14px UPPERCASE gradient `h6` directly above a
  36px/600 `h2`, block margin-bottom 60px; `.white` variant on dark bands.
- **Experts collage** is absolute-positioned, not a grid: percentages and
  the negative bottom offsets make the photos bleed past the 500px
  container, and the three smaller plates are scaled to 0.6. A grid
  approximation loses the look.
- **Pricing band is fixed-attachment** (`background-attachment: fixed`) —
  keep it (Tailwind `bg-fixed`) with the dark overlay on top.
- **Promo banners are images in the source.** Recreate them as two cards
  (blue offer / photo + green label) rather than shipping stock GIFs.
- **Copy is all lorem ipsum** — write real gym copy (memberships, coaches,
  class schedule) in the same shapes: short hero claim, 2-line support
  text, 2-paragraph about, 3-line service blurbs, 3 bullet features per
  plan.
- **Two rows, one app.** Before building, re-open rows 397 and 1846
  `[x]` → `[ ]`; after merge mark both `[x]` with the surge URL. `vigor`
  keeps its own (Endurance) identity — do not edit it.

## Tasks (implementation outline)

- [ ] Branch `feat/template-grithaus`; re-open TEMPLATES.md rows 397 + 1846
      (`[x]` → `[ ]`) in one docs commit.
- [ ] Scaffold `apps/grithaus` from the simplest current app: `package.json`
      (`react`/`react-dom` = `latest`), `index.html` with the Open Sans
      `<link>`, `vite.config.ts` **with `injectUiSource()`**, `tsconfig*`,
      `vitest.config.ts`, `src/test/setup.ts`, `public/CNAME`.
- [ ] `src/index.css` → `@theme` tokens (`--color-brand`, `--color-lime`,
      `--color-ink`, `--color-body`) + the button recipe in `packages/ui`
      variants/classes.
- [ ] Data modules: `nav`, `slides`, `promos`, `about`, `trainers`,
      `services`, `plans`, `hours`, `testimonials`, `footerClasses`,
      `contact` (typed `const` arrays, copy paraphrased).
- [ ] Components (each with a colocated `.test.tsx`, written first):
      `Navbar` (dropdown + burger + scroll state), `Hero` (slice index +
      numeric pagination), `Promos`, `About`, `Experts`, `Services`,
      `Pricing`, `HoursNewsletter` (validation + success), `Testimonials`
      slider, `Footer`.
- [ ] `App.tsx` composes in the order above; footer links
      https://www.componentdock.com/.
- [ ] Images: `https://picsum.photos/seed/grithaus-<n>/<w>/<h>`; icons from
      `lucide-react`; social glyphs as inline SVG (lucide has no brand
      icons).
- [ ] Gates: `scripts/verify-app.sh grithaus` (typecheck + lint + knip +
      fallow + 100% coverage tests + build); `npm install` at the root so
      the lockfile registers the workspace.
- [ ] PR → squash merge → deploy (`gh workflow run deploy-surge.yml -f
      app="grithaus"`) → verify
      `https://grithaus.free.componentdock.com` returns 200 with
      `ssl_verify_result=0`.
- [ ] Flip rows 397 + 1846 to `[x]` with the URL, `npm run readme:status`,
      push.
