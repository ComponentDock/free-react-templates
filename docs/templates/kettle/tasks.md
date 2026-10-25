# Kettle — Tasks

Recreation of ColorLib **"Everhot"** (https://colorlib.com/wp/template/everhot/) as a React 19 +
Vite + Tailwind 4 + TypeScript app under the name **Kettle** (`apps/kettle`).

> **No `TEMPLATES.md` row exists for this design yet.** The catalogue is incomplete (see
> `docs/catalog-coverage.md`): `everhot` is one of the 42 standalone designs on
> https://colorlib.com/wp/templates/ that the checklist never listed. Add the row under `## Business`
> *before* opening the PR — the exact line is in the spec, §Purpose — **between `Ecoland` and
> `Eiser`** (the section is sorted by the ColorLib source name). On `origin/main` `b62ea3b6d` the
> heading reads `## Business (368)` over 368 rows, so the honest value after adding Everhot is
> **`(369)`** — or `(370)` if Aquifer's row lands first. Re-count the rows, do not copy the number.

## Pre-flight (done by the prep stream, 2026-10-25)

- [x] Replication: live preview read (`curl -4`, HTTP 200, 85,846 B, `<title>` *Water heater replacement
      in Richmond, sized on what runs at once | Everhot Water Heaters*, sha256 `a8e188ba…`)
- [x] Token sheet measured (`_astro/Base.JYuhjam6.css`, 56,390 B, sha256 `1b7b8eb3…`, Tailwind
      **v4.3.3**) — brand **`#ae6211`** on an eight-step burnt-orange `primary` ramp
      (`#fff8ec` → `#8d4e12`; **no `primary-800/900`** in the sheet), a ten-step warm-grey `ink` ramp
      (`#f7f7f7` → `#161616`; **`ink-300` is used but undefined**), stock `gray` 50–900 for the
      footer/testimonial/FAQ chrome, `amber-400` star in the licence strip, **`primary-400` `#e99c31`**
      stars in the testimonials *and* the selected chips, radii 8/16 px, `shadow-soft`
      `0 4px 16px -4px #0000001a`
- [x] Live-render verification (Playwright, 1440 / 390 px): hero ground `rgb(247,247,247)`, `h1`
      **60 px / 66 px / −1.5 px** (`rgb(36,36,36)`) with its span `rgb(174,98,17)`; `h2` 36 / 40 / −0.9;
      hero quote card **469×510** (32 px pad) at 1440 and **358×510** (24 px pad) at 390, 16 px radius,
      `shadow-md`; `#size` `rgb(22,22,22)` 1073 px tall, form 689 px / panel 479 px, verdict box 413×86
      at 8 px radius; `#emergency` `rgb(174,98,17)` 164 px; `#options` grid 3 × 404 px cells over
      `rgb(237,237,237)`; `#contact` `rgb(141,78,18)` 440 px; footer `rgb(17,24,39)` 567 px with 96 px
      top pad; header **81 / 65 px**; sticky call bar **97 px** at 390; `.section` **112 px** at 1440
      (80 px below `lg`); mobile document height **11,735 px**
- [x] **The sizing tool decoded** (page-local inline script, 3,554 B): `targetTemp 120`, fixture
      `data-gpm`/`data-gallons`, climate `data-incoming` (default 55), `people` default 4,
      `peakHour = round(gallons + people × 3)`, tank `≤70/≤85/≤105/else → 40/50/65/80`, verdict branches
      `rise ≥ 70 && gpm ≥ 5` → `gpm ≤ 3.5` → else. Defaults measured on the live page:
      **`4.0 gpm` / `68 degree rise` / `40 gallon` / `52 gallons` / "reasonable fit"**
- [x] Behaviour read from the kit script (`Base.…BLoalVWc.js`, 16,233 B, sha256 `e26cc055…` —
      **byte-identical to the Aquifer / Plantroom / Veranda / Stoke / Closeknit reads**) plus the
      page-local inline scripts: reveal (14 elements, 12 delays), header shadow at 50 px, mobile
      disclosure, dark toggle, scroll-spy (**one** live band id `size` + five route paths), carousel
      (3/2/1, 5 s, hover pause, arrows `hidden lg:flex`), exclusive FAQ, cookie strip, back-to-top,
      progress, smooth-scroll offset, **ping** dot. No typewriter / counter / parallax / video /
      lightbox / billing / blog-filter branch is used.
- [x] **Both forms are inert in the reference** — `data-form` and `data-newsletter-form` bind to no
      handler (`grep -c data-validate` = 0). The recreation wires them locally (spec Requirement 5)
- [x] Link census: **44 anchors** over **15** distinct hrefs — 3 dead `#` (social tiles),
      **2 × broken `#service-areas`** (the band id is `areas`), 1 malformed `tel:(555) 090-0900`;
      **all 7 inner routes live** (`/services` 49,299 B, `/tank-vs-tankless` 47,974 B, `/about`
      42,369 B, `/privacy` 42,820 B, `/terms` 41,629 B, `/contact` 40,722 B, `/service-areas`
      39,810 B — the bare path `308`s, the trailing slash `200`s), `/elements` **404**
- [x] No archive twin: `css/style.css`, `js/snippet.js`, `downloads/free/everhot.zip` and the
      OG image the page advertises (`og:image=/og-image.jpg`) all **404**
- [x] Reference defect noted: the JSON-LD block is **corrupt** (`"@context":"https://***@type"`) — do not
      copy it
- [x] Screenshot read (`everhot-template.jpg`, **JPEG** 318,790 B, 2400×1892, macOS frame — licence
      strip, header, whole hero, quote card, top half of the sizing band with the two checked chips and
      the `4.0 gpm` / `40 gallon` outputs). ⚠️ `everhot.jpg` is a **404** — the `-template` suffix is the
      file that exists
- [x] Class census: **354** distinct tokens in 461 `class` attributes, all compile; the one apparent miss
      (`2xl:block`) is the leading-digit escape `.\32 xl\:block` — **no phantom-class delta**
- [x] Fonts identified: **Manrope 400/500/600/700/800** + **JetBrains Mono 500/700**, delivered from the
      preview's `/cf-fonts/v/…` inside an 11,620 B inline `<style>` (so grepping the sheet for
      `@font-face` finds nothing); both Google Fonts `css2` URLs verified **200**
- [x] Name check: `kettle` free in `apps/`, `openspec/specs/`, `docs/templates/`;
      `git grep -il kettle origin/main` hits only body copy / asset names inside other apps (no
      workspace or spec identifier); `wp/template/kettle/`, `theme/kettle/`,
      `theme/bootstrap/kettle/` → **404**
- [x] Spec: `openspec/specs/template-kettle/spec.md`
- [x] Design notes: `docs/templates/kettle/design-notes.md`

## Scaffold

- [ ] Copy the single-app scaffold (`package.json`, `vite.config.ts` with `injectUiSource()`,
      `vitest.config.ts`, `tsconfig.json`, `index.html`, `src/main.tsx`, `src/test/setup.ts`,
      `public/CNAME`)
- [ ] `npm install` at the repo root so `package-lock.json` registers the workspace
- [ ] `homepage` = `https://kettle.free.componentdock.com`, `public/CNAME` = same host
- [ ] `index.html`: `<title>Kettle — water heaters sized on what runs at once</title>`, meta description,
      OG tags (no dangling `og-image.jpg` — generate one or omit the tag), the two Google Fonts
      `<link>`s, inline SVG favicon
- [ ] `src/index.css`: the `@theme` block from `design-notes.md` (burnt-orange `primary` 50–700, `ink`
      50–900 **plus a decided `ink-300`**, `--font-sans`, `--font-mono`, `--shadow-soft`), `.section`,
      `.btn`, `.btn-primary`, `.nav-active`, `.chip`
- [ ] Draw the wordmark inline (an orange mark beside `Kettle` in Manrope 700 with a letterspaced
      `WATER HEATERS` in JetBrains Mono) — do not copy `logo.svg`

## Sections (tests first, reference order)

1. [ ] **Licence strip** — `#242424`, 36 px, `Licence VA DPOR #0000000000` · `Gas fitting certified` ·
       `Serving Greater Richmond` · `4.9` `410+ reviews on Google (sample)`; middle facts hidden below `sm`
2. [ ] **Header** — sticky `white/90` + blur, 64/80 px, six links from **`xl`**, phone pill `md`, location
       pill `2xl`, CTA `xl`, hamburger below `xl`, `shadow-lg` past 50 px; mobile panel with the same
       links + pills + CTA
3. [ ] **Hero** — `#f7f7f7`, 12-col 7/5 split, eyebrow `Richmond · Licensed and gas certified`, 60 px
       `h1` with `is the wrong question.` in `#ae6211`, 18/28 lede, five amber stars + `4.9` + sample
       line, 2×2 checklist (4 items, `#ae6211` ticks at 20 px)
4. [ ] **Quote card** — `rounded-2xl` 16 px, white, `1px #ededed`, 32 px padding, `shadow-md`,
       `Prefer to just ask?` + `Three fields. We reply within the hour on weekdays.`, fields
       `Your name` / `Phone` / `What is going on?` (6 options + placeholder), full-width `Get my answer`,
       footnote
5. [ ] **Sizing tool** — `#161616`, three fieldsets (6 fixture chips / 3 climate radios / 6 people chips),
       the two outputs with `aria-live="polite"`, the verdict box, `Get a fixed quote`, sample footnote;
       **arithmetic, defaults and copy exactly per spec Requirement 6** (defaults checksum:
       `4.0 gpm` / `68` / `40 gallon` / `52`)
6. [ ] **Emergency band** — `#ae6211`, `py-6 lg:py-8`, pinging 8 px dot, uppercase eyebrow, bold
       `lg:text-xl` headline, `text-sm opacity-90` paragraph, white `rounded-full` pill `px-6 py-3`
7. [ ] **Mobile call bar** — `lg:hidden`, fixed `z-40`, white, `p-3`, 97 px tall, full-width orange pill
       `No hot water, or a leaking tank? · (555) 090-0900`
8. [ ] **Options grid** — 6 cells, `gap-px` over `#ededed`, `rounded-2xl border`, `p-6 lg:p-8`,
       `flex-1` bodies, prices `$1,450` / `$1,750` / `$2,900` / `$3,600` / `$2,200` / `$180`,
       sample footnote
9. [ ] **Why-us** — `#f7f7f7`, `lg:grid-cols-2`, figure `order-last lg:order-first` with the **redrawn**
       flow-panel SVG + caption, four `border-l-2 border-primary-600 pl-5` `<dl>` rows
10. [ ] **Three steps** — `<ol>` `sm:grid-cols-3` `gap-6`, three `<li>` with mono `01`–`03` + `h-px`
        rule, `h3`, body, 14 px 600 `#8d4e12` duration (`Two minutes` / `Same day` /
        `Half a day to one day`)
11. [ ] **Areas** — 12-col 5/7, `grid-cols-2 sm:grid-cols-3` town list with `border-b` rows, 12 towns
        in order, replace-me footnote
12. [ ] **Testimonials** — `#f9fafb`, centred pill/`h2`/lede, kit carousel with 3 slides, 5
        `primary-400` stars, 48 px initials disc, name + town; 3-up at `lg`, **arrows `hidden lg:flex`**,
        dots + swipe below
13. [ ] **FAQ** — centred `max-w-3xl`, `divide-y #e5e7eb`, five rows, exclusive toggle, 32 px `#f3f4f6`
        disc rotating 45°, `max-height` panel
14. [ ] **Closing band** — flat `#8d4e12`, `py-28`, white 36 px `h2`, `#ffedd0` lede, white solid CTA +
        `border-2 border-white/40` ghost with phone glyph
15. [ ] **Footer** — `#111827`, brand `col-span-4` (logo, blurb, 3 × 40 px `#1f2937` social tiles,
        address/phone/mail), `Services`/`Company`/`Support` in a nested `sm:grid-cols-3` `col-span-5`,
        `Stay Updated` `col-span-3` with a working newsletter field + `Subscribe`, legal bar with the
        `Component Dock` link to `https://www.componentdock.com/`
16. [ ] **Chrome** — skip link, 2 px progress bar, 48 px back-to-top past 300 px, cookie strip
        (`role="dialog"`, `z-50`, over the call bar on mobile), no preloader overlay

## Wiring and verification

- [ ] Band ids: `#quote`, `#size`, `#emergency`, `#options`, `#why-us`, `#process`, `#areas`,
      `#testimonials`, `#faq`, `#contact` — nav mapping per spec Requirement 16
      (`Services` → three steps, `Tank vs tankless` → options, `About` → why-us)
- [ ] Quote form + newsletter: required/format validation on submit and blur, inline errors with
      `aria-invalid`/`aria-describedby`, reset + toast on success, **no network**
- [ ] Sizing tool: unit tests for the defaults checksum, the three verdict branches, the four tank
      thresholds and the empty-fixture branch (spec Requirement 6 lists every expected string)
- [ ] Carousel: 3/2/1 per view, 5 s, hover pause, dots `w-8`/`w-2.5`, **arrows hidden below `lg`**, no
      autoplay under `prefers-reduced-motion`
- [ ] FAQ exclusive, `aria-expanded`/`aria-controls`, icon rotation, `max-height` transition
- [ ] All decorative SVGs `aria-hidden`; the flow panel `role="img"` + name; visible focus rings on
      `#ae6211`, `#8d4e12`, `#161616`, `#111827`; the `sr-only` chip inputs stay keyboard-operable with a
      `peer-focus-visible` ring on the styled sibling
- [ ] No `colorlib`, no `Everhot` string, no `office@everhotwater.example`, no copied SVG/stylesheet, no
      copied JSON-LD under `apps/kettle`
- [ ] Row added for Everhot under `## Business` between `Ecoland` and `Eiser`, heading re-counted,
      marker `[x]` with the bookkeeping commit
- [ ] `npm run spec:validate`, `scripts/verify-app.sh kettle`, CI gate green; then the surge deploy
      (`gh workflow run deploy-surge.yml -f app="kettle"`) and the R2 zip/catalog wiring by the owning
      streams
