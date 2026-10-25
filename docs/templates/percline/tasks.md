# Percline — Tasks

Recreation of ColorLib **"Fieldline"** (https://colorlib.com/wp/template/fieldline/) as a React 19 +
Vite + Tailwind 4 + TypeScript app under the name **Percline** (`apps/percline`).

> **No `TEMPLATES.md` row exists for this design yet.** The catalogue is incomplete (see
> `docs/catalog-coverage.md`): `fieldline` is one of the 42 standalone designs on
> https://colorlib.com/wp/templates/ that the checklist never listed. Add the row under `## Business`
> *before* opening the PR — the exact line is in the spec, §Purpose — **between `Feliciano` and
> `Finances`** (the section is sorted by the ColorLib source name). On `origin/main` `22a117b36` the
> heading reads `## Business (369)` over 369 rows, so the honest value after adding Fieldline is
> **`(370)`**. Re-count the rows, do not copy the number.

## Pre-flight (done by the prep stream, 2026-10-25)

- [x] Replication: live preview read (`curl -4`, HTTP 200, 70,376 B, `<title>` *Septic inspection and
      pumping around Wichita, turned around the same day | Fieldline Septic*, sha256 `a1e4bddf…`)
- [x] Token sheet measured (`_astro/Base.v6AZTsRx.css`, 56,139 B, sha256 `4437aeaa…`, Tailwind
      **v4.3.3**) — brand **`#41712f`** on a ten-step green `primary` ramp
      (`#f1f7ee` → `#283e21`, with `#2e4a24`/`#283e21` **dark-only**), a ten-step warm-stone `ink` ramp
      (`#f7f6f4` → `#191713`), stock `gray` 50–950 for the footer/testimonial/FAQ chrome, `amber-400`
      stars in **both** the licence strip and the hero, radii 8/12/16 px, `shadow-soft`
      `0 4px 16px -4px #0000001a`
- [x] Live-render verification (Playwright, 1440 / 390 px): hero ground `rgb(247,246,244)`, `h1`
      **60 px / 66 px / −1.5 px** (`rgb(40,37,32)`) with its span `rgb(65,113,47)`; `h2` 36 / 40 / −0.9;
      quote card **469×509** (32 px pad) at 1440 and **358×525** (24 px pad) at 390, 16 px radius,
      `shadow-md`; `#timeline` `rgb(25,23,19)` 1,334 px; `#emergency` `rgb(65,113,47)` 164 px;
      `#services` grid over `rgb(237,235,230)`; `#why-us` `rgb(247,246,244)` 840 px; `#areas` 468 px;
      `#testimonials` `rgb(249,250,251)` 796 px; `#contact` `rgb(54,90,40)` 452 px at 112 px padding;
      footer `rgb(17,24,39)` 592 px with 96 px top pad; header **81 / 65 px**; licence strip **37 px**;
      sticky call bar **73 px** at 390; document height **7,304 px** at 1440 and **11,469 px** at 390
- [x] Behaviour read from the kit script (`Base.…BLoalVWc.js`, 16,233 B, sha256 `e26cc055…` —
      **byte-identical to the Aquifer / Plantroom / Veranda / Stoke / Closeknit / Kettle / Smallpaw
      reads**) plus the page-local inline scripts: reveal (14 elements, 12 delays), header shadow at
      50 px, mobile disclosure, dark toggle, scroll-spy (**zero** live band ids — all six nav values are
      route paths), carousel (3/2/1, 5 s, hover pause, **arrows bounds-driven**), exclusive FAQ, cookie
      strip (1.5 s), back-to-top (300 px), progress bar, **ping** dot. **No page-local tool exists** — no
      counter / typewriter / parallax / video / lightbox / billing / blog-filter branch is used
- [x] **Both forms are inert in the reference** — `data-form` and `data-newsletter-form` bind to no
      handler (`grep -c data-validate` = 0). The recreation wires them locally (spec Requirement 5)
- [x] Link census: **44 anchors** over **15** distinct hrefs — 3 dead `#` (social tiles),
      **2 × broken `#service-areas`** (the band id is `areas`), 1 malformed `tel:(555) 110-1100`;
      **all 8 inner routes live** (`/services` 42,820 B, `/selling` 40,731 B, `/how-septic-works`
      40,262 B, `/about` 36,051 B, `/privacy` 36,645 B, `/contact` 34,664 B, `/terms` 35,429 B,
      `/service-areas` 33,591 B — the **bare** paths 200 here, no 308 redirect), `/elements` **404**
- [x] No archive twin: `css/style.css`, `js/snippet.js`, `downloads/free/fieldline.zip` and the OG image
      the page advertises (`og:image=/og-image.jpg`) all **404**
- [x] Reference defect noted: the JSON-LD block is **corrupt** (`"@context":"https://***@type"`) — do not
      copy it
- [x] Screenshot read (`fieldline-template.jpg`, **AVIF** 113,977 B, 2400×1892, macOS frame — licence
      strip, header, whole hero, quote card, first three timeline rows with the `Where deals slip.`
      callout). ⚠️ `fieldline.jpg` and `fieldline-septic.jpg` are **404** — the `-template` suffix is the
      file that exists
- [x] Class census: **346** distinct tokens in 418 `class` attributes, all compile; the one apparent miss
      (`2xl:block`) is the leading-digit escape `.\32 xl\:block` — **no phantom-class delta**
- [x] Fonts identified: **DM Sans 400/500/700** + **JetBrains Mono 500/700**, delivered from the
      preview's `/cf-fonts/v/…` inside a 5,408 B inline `<style>` (so grepping the sheet for `@font-face`
      finds nothing); both Google Fonts `css2` URLs verified **200**
- [x] Name check: `percline` free in `apps/`, `openspec/specs/`, `docs/templates/`;
      `git grep -il percline origin/main` → nothing; `wp/template/percline/`, `theme/percline/`,
      `theme/bootstrap/percline/` → **404**
- [x] Spec: `openspec/specs/template-percline/spec.md`
- [x] Design notes: `docs/templates/percline/design-notes.md`

## Scaffold

- [ ] Copy the single-app scaffold (`package.json`, `vite.config.ts` with `injectUiSource()`,
      `vitest.config.ts`, `tsconfig.json`, `index.html`, `src/main.tsx`, `src/test/setup.ts`,
      `public/CNAME`)
- [ ] `npm install` at the repo root so `package-lock.json` registers the workspace
- [ ] `homepage` = `https://percline.free.componentdock.com`, `public/CNAME` = same host
- [ ] `index.html`: `<title>Percline — septic inspections inside the ten-day clock</title>`, meta
      description, OG tags (no dangling `og-image.jpg` — generate one or omit the tag), the two Google
      Fonts `<link>`s, inline SVG favicon
- [ ] `src/index.css`: the `@theme` block from `design-notes.md` (green `primary` 50–900, `ink` 50–900,
      `--font-sans`, `--font-mono`, `--shadow-soft`), `.section`, `.btn`, `.btn-primary`, `.nav-active`
- [ ] Draw the wordmark inline (a dark rounded square with three short green strokes beside `Percline` in
      DM Sans 700 with a letterspaced `SEPTIC` in JetBrains Mono) — do not copy `logo.svg`

## Sections (tests first, reference order)

1. [ ] **Licence strip** — `#282520`, 37 px, `Licence #00000` · `Certified septic inspector` ·
       `Serving Sedgwick County` · star + `4.9` + `240+ reviews on Google (sample)`; middle facts hidden
       below `sm`; **replace `KDHE` with an invented licence body**
2. [ ] **Header** — sticky `white/90` + blur, 64/80 px, six links from **`xl`**, phone pill `md`, location
       pill `2xl`, CTA `xl`, hamburger below `xl`, `shadow-lg` past 50 px; mobile panel with the same
       links + pills + CTA
3. [ ] **Hero** — `#f7f6f4`, 12-col 7/5 split, eyebrow `Wichita · Licensed and inspected`, 60 px `h1`
       with `The clock has already started.` in `#41712f`, 18/28 lede, five amber stars + `4.9` + sample
       line, 2×2 checklist (4 items, `#41712f` ticks at 16 px)
4. [ ] **Quote card** — `rounded-2xl` 16 px, white, `1px #edebe6`, 32 px padding, `shadow-md`,
       `Book an inspection` + `Three fields. We reply within the hour on weekdays.`, fields
       `Your name` / `Phone` / `What do you need?` (6 options + `Choose the closest match`), full-width
       `Book the inspection`, footnote
5. [ ] **Timeline** — `#191713`, `max-w-2xl` header, seven `sm:grid-cols-12` rows (3 / 9) with mono day
       labels in `#95c47f`, actor lines in `white/40`, `01`–`07` indices, `white/65` bodies, **two**
       `Where deals slip.` callouts on rows 1 and 5, footnote + `Book the inspection` `.btn-primary`
6. [ ] **Emergency band** — `#41712f`, `py-6 lg:py-8`, pinging 8 px dot, uppercase eyebrow, bold
       `lg:text-xl` headline, `text-sm opacity-90` paragraph, white `rounded-full` pill `px-6 py-3`
7. [ ] **Mobile call bar** — `lg:hidden`, fixed `z-40`, white, `p-3`, 73 px tall, full-width green pill
       `Backing up into the house? · (555) 110-1100`
8. [ ] **Services grid** — 6 cells, `gap-px` over `#edebe6`, `rounded-2xl border`, `p-6 lg:p-8`,
       `flex-1` bodies, prices `$425` / `$375` / `$295` / `Quoted after evaluation` / `$240` / `$495`,
       sample footnote
9. [ ] **Why-us** — `#f7f6f4`, `lg:grid-cols-2`, figure `order-last lg:order-first` with the **redrawn**
       field panel + caption, four `border-l-2 border-primary-600 pl-5` `<dl>` rows under the reference's
       `Three things…` heading
10. [ ] **Areas** — 12-col 5/7, `grid-cols-2 sm:grid-cols-3` town list with `border-b` rows, 12 towns in
        order, replace-me footnote
11. [ ] **Testimonials** — `#f9fafb`, centred pill/`h2`/lede, kit carousel with 3 slides (3/2/1),
        5 `primary-400` stars, 48 px initials disc, name + town; **rewrite all three quotes** so none
        names the source brand; arrows bounds-driven, dots below
12. [ ] **FAQ** — centred `max-w-3xl`, `divide-y #e5e7eb`, five rows, exclusive toggle, 32 px `#f3f4f6`
        disc rotating 45°, `max-height` panel
13. [ ] **Closing band** — flat `#365a28`, `py-28`, white 36 px `h2`, `#deedd6` lede, white solid CTA +
        `border-2 border-white/40` ghost with phone glyph
14. [ ] **Footer** — `#111827`, brand `col-span-4` (logo, blurb, 3 × 40 px `#1f2937` social tiles,
        address/phone/mail — **invented sample values**), `Services`/`Company`/`Support` in a nested
        `sm:grid-cols-3` `col-span-5`, `Stay Updated` `col-span-3` with a working newsletter field +
        `Subscribe`, legal bar with the `Component Dock` link to `https://www.componentdock.com/`
15. [ ] **Chrome** — skip link, 2 px progress bar, 48 px back-to-top past 300 px, cookie strip
        (`role="dialog"`, `z-50`, over the call bar on mobile), no preloader overlay

## Wiring and verification

- [ ] Band ids: `#quote`, `#timeline`, `#emergency`, `#services`, `#why-us`, `#areas`, `#testimonials`,
      `#faq`, `#contact` — nav mapping per spec Requirement 15 (`Selling a house` → timeline,
      `Services` → services, `How septic works` → why-us, `Service areas` → areas, `About` → why-us,
      `Contact` → closing band)
- [ ] Quote form + newsletter: required/format validation on submit and blur, inline errors with
      `aria-invalid`/`aria-describedby`, reset + toast on success, **no network**
- [ ] Carousel: 3/2/1 per view, 5 s, hover pause, dots `w-8`/`w-2.5`, **arrows hidden at the ends**, no
      autoplay under `prefers-reduced-motion`
- [ ] FAQ exclusive, `aria-expanded`/`aria-controls`, icon rotation, `max-height` transition
- [ ] All decorative SVGs `aria-hidden`; the field panel `role="img"` + name; visible focus rings on
      `#548d3d`, `#41712f`, `#365a28`, `#111827`
- [ ] No `colorlib`, no `fieldline`, no `fieldlineseptic` string, no `KDHE`, no copied SVG/stylesheet, no
      copied JSON-LD under `apps/percline`
- [ ] Row added for Fieldline under `## Business` between `Feliciano` and `Finances`, heading re-counted,
      marker `[x]` with the bookkeeping commit
- [ ] `npm run spec:validate`, `scripts/verify-app.sh percline`, CI gate green; then the surge deploy
      (`gh workflow run deploy-surge.yml -f app="percline"`) and the R2 zip/catalog wiring by the owning
      streams
