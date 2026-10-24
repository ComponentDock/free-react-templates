# Dockyard (ColorLib Depot) — Tasks & Design Notes

> Prep artifacts written on `main` by the prep stream. Implementation ships
> later on `feat/template-dockyard`. This folder + the spec are the claim
> marker: the implementer starts from here, no research needed.
> Full measured evidence: `openspec/specs/template-dockyard/spec.md` and
> `docs/templates/dockyard/design-notes.md`.

## Identity

| Thing | Value |
|---|---|
| New name | **Dockyard** (one word: "dock" + "yard"; `git grep -il dockyard origin/main` = 0 hits, absent from `TEMPLATES.md`, not a ColorLib slug — `template/dockyard/`, `theme/dockyard/` and `theme/bootstrap/dockyard/` all 404) |
| App / package | `apps/dockyard` · `@free-react-templates/dockyard` |
| Deploy target | `dockyard.free.componentdock.com` |
| Source | ColorLib **Depot** — https://colorlib.com/wp/template/depot/ |
| Preview | https://preview.colorlib.com/theme/depot/ (HTTP 200, **37,790 B** HTML, sha256 `ec896bf7…`; `css/style.css` **27,785 B**, sha256 `645001bd…`; `js/main.js` **7,339 B**, sha256 `c877e05b…`; Bootstrap 4 grid + jQuery 3.3.1 + Owl Carousel + Fancybox + jquery.sticky + waypoints + animateNumber + AOS; `<title>` = "Depot —Website Template by Colorlib"; `/downloads/free/depot.zip` **404** — no archive exists) |
| Screenshot | https://colorlib.com/wp/wp-content/uploads/sites/2/depot-free-template.jpg (AVIF 1200×946, 158,853 B — top fold only) |
| Category | Business — transportation & logistics (single page) |
| TEMPLATES.md rows | lines **974**, **2312**, **2959** (`grep -c 'wp/template/depot/'` = 3) — all `[x]`, wrongly credited to the `depot` app |
| Why no app exists | `docs/row-multiplicity.md` §2 APP-WRONG-DESIGN: the `depot` app's spec names a different ColorLib design (`row-excl / spec-excl` = 0 / 37) |

## Structure (1:1, DOM order from the live preview, 1440×1000, doc ≈11,010px)

1. `div.top-bar` — **44px**, `#eee`, `1px #e9ecef` bottom rule: e-mail + phone
   left (16px `#666666`), Twitter + Facebook right; labels hidden ≤767px.
2. `header.site-navbar` — **67px** white (`container` 1,140px); wordmark
   **32px/900 uppercase**; seven 16px items (`padding: 20px 0`,
   `margin: 0 15px`, active/hover `#007bff`); on scroll → **fixed**,
   `4px 0 20px -5px rgba(0,0,0,.2)` shadow, wordmark blue, height 99 → 67.
3. `div.ftco-cover-1.overlay` — **1,000px** (`100vh`, min 600) photo band with a
   `linear-gradient(45deg, #377aff, #00d9ff)` wash at **opacity .15**; 6-of-12
   centred column: `h1` **40px/500 uppercase white**, 16px subline, tracking
   form (**400×55** input + **130×55** `#007bff` "Track Now", both 4px radius).
4. `div.site-section.ftco-service-image-1.pb-5` — **581px**, three 350×381 photo
   cards (image + 22.4px uppercase `#000` title + 16px `#999999` blurb; image
   lifts 5px on hover).
5. `#services-section` (`bg-light`) — **1,042px**, `#f6f5f5`; 48px `#007bff`
   heading (`text-transform: none`); **six** 350×282 cards in two rows of three,
   transparent → `#fff` + `#007bff` border on hover, 3rem blue glyph each.
6. `#about-section` (heading) — **408px** white, centred `h2` + blurb.
7. `#about-section` (`bg-light`, DUPLICATE id — defect) — **1,018px**; video
   figure **1,110×724** pulled `-10rem` (`-6rem` ≤991) with an 80px→90px white
   play disc; four counters (**19+ / 2,332+ / 231+ / 827+**), number **64px
   `#007bff`**, 50×3 `rgba(52,58,64,.3)` underline, caption 14px.
8. `#team-section` — **824px** own band (it also *wraps* pricing + FAQ, which is
   why its box measures 5,298px): three 350×439 white staff cards, `1px
   #e9ecef`, 130px circular avatars, 20px names, 12px uppercase `#b8b8b8`
   roles, three 30×30 `#007bff` social buttons.
9. `#pricing-section` — **1,017px** `#f6f5f5`; three 350×561 white cards;
   **$47 / $200 / $750** at 48px `#007bff` + `#cccccc` " / year"; 2 green ticks
   + 3 `.remove` rows (no CSS rule in the source); CTA 111×42, middle
   `#007bff`, outer `#6c757d`.
10. `#faq-section` — **939px**; eight Q&A in two `col-lg-6` columns, `h3` 20px
    `#000` `text-transform: none`.
11. `#why-us-section` (`block__73694`) — **743px**, no gutters: photo right
    (6-of-12, covers to the edge), text left (5-of-12, `padding: 3rem`), `h2`
    32px uppercase `#000`, five `#007bff` ticks, 1px top border.
12. `#testimonials-section` (`block-13`) — **867px** `#f6f5f5`; four quotes,
    three visible ≥1200; white 30px quote panels, 18px italic **Georgia**,
    60px circular avatars, 18px uppercase names, 7px dots.
13. `#blog-section` — **797px**; two article cards (520×325 image radius 4,
    date, `h3` 24px uppercase `#939393`, excerpt, `#007bff` "Read More").
14. `#contact-section` — **872px** `#f6f5f5`; 8-of-12 form, fields 55px with
    `1px #e6e6e6` and a 4px radius, 10-row textarea, full-width `#007bff`
    "Send Message".
15. `footer.site-footer` — **679px** `#333333`, `padding: 128px 0`, four
    columns, 16px uppercase white headings, `rgba(255,255,255,.1)` rule,
    centred copyright.

## Documented source defects (do not copy)

| # | Defect | Recreation |
|---|---|---|
| 1 | Raleway is declared everywhere but **no webfont is delivered** (`document.fonts` → six `Raleway: unloaded`); the live page renders Helvetica/Arial | load Raleway 400/500/700/900 from Google Fonts |
| 2 | two sections share `id="about-section"` | one `#about` target containing heading, video and counters |
| 3 | contact form has **two "First name"** inputs | First name / Last name / Email / Message |
| 4 | `.ul-check.remove` has **no CSS rule** — excluded features get the same green tick as included ones | 2 green ticks + 3 muted, struck-through rows |
| 5 | two FAQ headings are truncated lorem ("Lorem ipsum dolor sit", "consequuntur incidunt?") | eight complete questions |
| 6 | the off-canvas drawer inflates the document: `scrollWidth` **436** vs `clientWidth` **390** | keep `scrollWidth === clientWidth` at 390px |
| 7 | `person_1.jpg` is the portrait of two different testimonial people; `loop: true` clones all four slides | four distinct people and portraits |
| 8 | both article cards share image, date, title and excerpt | two distinct posts |
| 9 | the services carousel renders as a static 3×2 grid plus dead dots | a real 3-column responsive grid, no dots |
| 10 | hero form is inert (`action="#"`, no names, no labels) | controlled, validated form with `aria-live` |
| 11 | post titles are `<h2>` inside an `h2` band | `h3` titles |
| 12 | copyright year via `document.write`, plus a ColorLib credit | year as a value + Component Dock link |
| 13 | `h1` has no mobile size step (still 40px at 390) | 30–32px step at ≤575 |

## Task outline

- [ ] **Spec + repo wiring**: `openspec/specs/template-dockyard/spec.md` present (`npm run spec:validate` green); branch `feat/template-dockyard`; re-open rows **974 / 2312 / 2959** `[x]` → `[ ]` in the first commit on the branch.
- [ ] **App scaffold**: copy the simplest existing app → `apps/dockyard`; `package.json` name `@free-react-templates/dockyard`, `react`/`react-dom` `latest`; `public/CNAME` = `dockyard.free.componentdock.com`; `homepage` = `https://dockyard.free.componentdock.com`; `vite.config.ts` registers `injectUiSource()`.
- [ ] **Theme**: `@theme` block per `design-notes.md` (`--color-brand #007bff`, `--color-surface #f6f5f5`, `--color-footer #333333`, `--color-success #71bc42`, wash endpoints); Raleway `<link>` in `index.html`.
- [ ] **Utility bar + navbar** (67px, sticky/fixed behaviour, drawer ≤992): tests for the 44px bar, the 67px bar, the active item, and the stuck state.
- [ ] **Hero**: 1,000px band, gradient wash, 40px uppercase `h1`, 400×55 + 130×55 form; tests for composition, validation, and the "no shipment found" result.
- [ ] **Photo trio** (3 cards, hover lift) — tests for 3-up, stacking, hover/focus parity.
- [ ] **Services** (six icon cards, 3-col grid, white hover + blue border) — tests for 6 cards, grid columns, hover.
- [ ] **About**: one `#about` target, 1,110×724 video figure with dialog, four counters (count-up once, comma separator, reduced motion).
- [ ] **Staff** (three bordered cards, circular avatars, accessible social links).
- [ ] **Pricing** (three tiers, blue middle CTA, included vs excluded features, `aria-hidden` ticks).
- [ ] **FAQ** (eight complete questions, two columns).
- [ ] **Why band** (gutters-free split, photo right, five blue ticks).
- [ ] **Testimonials** (four people, 3-up ≥1200, dots, autoplay pause, reduced motion).
- [ ] **Articles** (two distinct posts, `h3` titles).
- [ ] **Contact** (First/Last/Email/Message, 55px fields, full-width blue submit, client-side validation, no network).
- [ ] **Footer** (`#333333`, four columns, newsletter, year as a value, **Component Dock** link, no mention of the source brand or slug).
- [ ] **Responsive + a11y pass**: no overflow at 320 / 390 / 768 / 1440; keyboard order; visible focus; one `h1`; `<html lang="en">`; reduced motion.
- [ ] **Placeholders**: `picsum.photos/seed/dockyard-<n>` for every image (hero, 3 service photos, video poster, why photo, 3 staff, 4 testimonial portraits, 2 articles); `lucide-react` for every icon.
- [ ] **Verification**: `scripts/verify-app.sh dockyard` green (typecheck, lint, 100% coverage, build); `npm install` at root registers the workspace in `package-lock.json`.
- [ ] **PR**: title `feat: Dockyard — Transportation & Logistics template (ColorLib Depot)`; body lists source, preview URL, tokens used, deltas, and the three rows; squash-merge immediately.
- [ ] **Bookkeeping** (implementer, after merge): rows **974 / 2312 / 2959** `[x]` with `https://dockyard.free.componentdock.com`, `npm run readme:status`, design census decrement.
