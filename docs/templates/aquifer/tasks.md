# Aquifer — Tasks

Recreation of ColorLib **"Dowser"** (https://colorlib.com/wp/template/dowser/) as a React 19 +
Vite + Tailwind 4 + TypeScript app under the name **Aquifer** (`apps/aquifer`).

> **No `TEMPLATES.md` row exists for this design yet.** The catalogue is incomplete (see
> `docs/catalog-coverage.md`): `dowser` is one of the 42 standalone designs on
> https://colorlib.com/wp/templates/ that the checklist never listed. Add the row under
> `## Business` *before* opening the PR — the exact line is in the spec, §Purpose — **in
> source-name alphabetical order** (the section is sorted by the ColorLib source name, so `Dowser`
> sits among the `D…` rows). Note the heading is already off by one on `main`
> (`## Business (366)` over **367** rows, because Thermly's row landed without a bump): the honest
> value after adding Dowser is **`(368)`** — or `(369)` if Plantroom's row has landed first.
> Re-count the rows, do not copy the number.

## Pre-flight (done by the prep stream, 2026-10-25)

- [x] Replication: live preview read (`curl -4`, HTTP 200, 70,377 B,
      `<title>` *Leak detection in Louisville, located before anything is opened | Dowser Leak
      Detection*, sha256 `14320426…`)
- [x] Token sheet measured (`_astro/Base.DWnf_ikV.css`, 54,751 B, sha256 `0c734ab6…`, Tailwind
      **v4.3.3**) — brand **`#0886b2`** on a nine-step cyan `primary` ramp
      (`#ecfdff` → `#164a63`; `primary-300/800/900` exist **only** in `dark:`), a ten-step blue-grey
      `ink` ramp (`#f5f6fa` → `#141726`), stock `gray` 50–900 for the footer/testimonial/FAQ chrome,
      `amber-400` stars in the hero + licence strip, **`primary-400` `#22c8ee`** stars in the
      testimonials, radii 8/12/16 px, `shadow-soft` `0 4px 16px -4px #0000001a`
- [x] Live-render verification (Playwright, 1440 / 900 / 390 px): hero ground `rgb(245,246,250)`,
      `h1` **60 px / 66 px / −1.5 px** (36 / 39.6 / −0.9 at 390), `h1` span `rgb(8,134,178)`, lede
      `rgb(89,98,138)` 18/28, booking card **469×509** at 16 px radius `1px rgb(233,235,243)`,
      inputs **50 px** tall at 8 px radius, `#emergency` `rgb(8,134,178)` 164 px tall,
      `.section` **112 px** at 1440 / 80 px at 900, `#contact` `rgb(14,107,144)` at 112 px,
      footer `rgb(17,24,39)` 96 px pad, header **81 / 65 px**
- [x] Carousel measured: **3 slides**, 1440 px → **0 dots, arrows `display:none`** (one page), 900 px
      → 2 dots + arrows, 390 px → 3 dots + arrows
- [x] Class census: **327** distinct class tokens, **all compile**; the six apparent misses
      (`divide-y`, `divide-gray-200`, `space-y-2/3/4/6`) are child-combinator utilities
      (`:where(& > :not(:last-child))`) — **no phantom-class delta**
- [x] Fonts identified: **Space Grotesk 400–700** + **JetBrains Mono 500/700**, delivered from the
      preview's `/cf-fonts/v/…` inside a 7,444 B inline `<style>` (so grepping the sheet for
      `@font-face` finds nothing); both Google Fonts `css2` URLs verified **200**
- [x] Structure extracted from the DOM: preloader + skip link + progress bar + licence strip + sticky
      header (and mobile panel) + **hero (7/5 split with the booking card)** + `#emergency` + mobile
      call bar + `#process` + `#why-us` + `#services` + `#areas` + `#testimonials` + `#faq` +
      `#contact` + footer + cookie strip + back-to-top; 6 signs, 4 instruments, 6 services, 12 towns,
      3 testimonials, 5 FAQs, 7 symptom options
- [x] Behaviour read from the kit script (`Base.…BLoalVWc.js`, 16,233 B, sha256 `e26cc055…` —
      **byte-identical to the Plantroom / Veranda / Stoke / Closeknit reads**) plus the page-local
      inline scripts: reveal (14 elements, 12 delays), header shadow at 50 px, mobile disclosure, dark
      toggle, scroll-spy (all six `data-nav-link` values are route paths → **no live target**),
      carousel (3/2/1, 5 s, hover pause), exclusive FAQ, cookie strip, back-to-top, progress,
      smooth-scroll offset, **ping** dot. No typewriter / counter / parallax / video / lightbox /
      billing / blog-filter branch is used.
- [x] **Both forms are inert in the reference** — `data-form` and `data-newsletter-form` bind to no
      handler (`grep -c data-validate` = 0). The recreation wires them locally (spec Requirement 5 /
      Deviation 5)
- [x] Link census: **43** anchors over **15** distinct hrefs — 3 dead `#` (social tiles),
      **2 × broken `#service-areas`** (the band id is `areas`), 1 malformed `tel:(555) 130-1300`;
      **all 8 inner routes live** (`/how-we-find-it` 41,968 B, `/insurance` 42,675 B, `/services`
      43,814 B, `/service-areas` 35,424 B, `/about` 38,163 B, `/contact` 36,683 B, `/privacy`
      38,611 B, `/terms` 37,420 B — the bare path `308`s, the trailing slash `200`s), `/elements`
      **404**
- [x] No archive twin: `css/style.css`, `js/snippet.js`, `downloads/free/dowser.zip` and the
      OG image the page advertises (`og:image=/og-image.jpg`) all **404**
- [x] Reference defect noted: the JSON-LD block is **corrupt** (`"@context":"https://***@type"`, a
      slider that rewrote `schema.org`) — do not copy it
- [x] Screenshot read (`dowser-template.jpg`, real **AVIF** 118,083 B, 2400×1892, macOS frame —
      licence strip, header, whole hero, teal emergency band, first row of six signs)
- [x] Name check: `aquifer` free in `apps/`, `openspec/specs/`, `docs/templates/`,
      `git grep -il aquifer origin/main` → empty; `wp/template/aquifer/`, `theme/aquifer/`,
      `theme/bootstrap/aquifer/` → **404**
- [x] Spec: `openspec/specs/template-aquifer/spec.md`
- [x] Design notes: `docs/templates/aquifer/design-notes.md`

## Scaffold

- [ ] Copy the single-app scaffold (`package.json`, `vite.config.ts` with `injectUiSource()`,
      `vitest.config.ts`, `tsconfig.json`, `index.html`, `src/main.tsx`, `src/test/setup.ts`,
      `public/CNAME`)
- [ ] `npm install` at the repo root so `package-lock.json` registers the workspace
- [ ] `homepage` = `https://aquifer.free.componentdock.com`, `public/CNAME` = same host
- [ ] `index.html`: `<title>Aquifer — leak detection, located before anything is opened</title>`,
      meta description, OG tags (no dangling `og-image.jpg` — generate one or omit the tag), the two
      Google Fonts `<link>`s, inline SVG favicon
- [ ] `src/index.css`: the `@theme` block from `design-notes.md` (cyan `primary` 50–900, `ink`
      50–900, `--font-sans`, `--font-mono`, `--shadow-soft`), `.section`, `.btn`, `.btn-primary`,
      `.nav-active`
- [ ] Draw the wordmark inline (teal droplet disc + `Aquifer` in Space Grotesk 700 + letterspaced
      `LEAK DETECTION` in JetBrains Mono) — do not copy `logo.svg`

## Sections (tests first, reference order)

1. [ ] **Licence strip** — `#20243a`, 36 px, `Licence KY MP #00000` · `Acoustic and thermal
       certified` · `Serving Jefferson County` · `4.9` `220+ reviews on Google (sample)`; middle facts
       hidden below `sm`
2. [ ] **Header** — sticky `white/90` + blur, 64/80 px, six links from `xl`, phone pill `md`, location
       pill `2xl`, CTA `xl`, hamburger below `xl`, `shadow-lg` past 50 px; mobile panel with the same
       links + pills + CTA
3. [ ] **Hero** — `#f5f6fa`, 12-col 7/5 split, eyebrow `Louisville · Licensed master plumber`,
       60 px `h1` with the second sentence in `#0886b2`, 18/28 lede, five amber stars + `4.9` +
       sample line, 2×2 checklist (4 items, `#0886b2` ticks at 20 px)
4. [ ] **Booking card** — `rounded-2xl` 16 px, white, `1px #e9ebf3`, 32 px padding, `shadow-md`,
       `Book a leak location` + `Three fields. We reply within the hour on weekdays.`, fields
       `Your name` / `Phone` / `What have you noticed?` (7 options + placeholder), full-width
       `Book the location`, footnote
5. [ ] **Emergency band** — `#0886b2`, `py-6 lg:py-8`, pinging 8 px dot, uppercase eyebrow, bold
       `lg:text-xl` headline, `text-sm opacity-90` paragraph, white `rounded-full` pill `px-6 py-3`
6. [ ] **Mobile call bar** — `lg:hidden`, fixed `z-40`, white, `p-3`, full-width teal pill
       `Water running with everything off? · (555) 130-1300`
7. [ ] **Six signs** — `<ol>` `sm:grid-cols-3` `gap-6`, six `<li>` with mono `01`–`06` + `h-px`
       rule, `h3`, body, 14 px 600 `#0e6b90` label; order and labels exactly as the spec lists them
8. [ ] **Why-us** — `#f5f6fa`, `lg:grid-cols-2`, figure `order-last lg:order-first` with the
       **redrawn** located-slab SVG + caption, four `border-l-2 border-primary-600 pl-5` `<dl>` rows
9. [ ] **Services grid** — 6 cells, `gap-px` over `#e9ebf3`, `rounded-2xl border`, `p-6 lg:p-8`,
       prices `From $395` / `From $445` / `From $345` / `From $395` / `Quoted after location` /
       `Included with location`, sample footnote
10. [ ] **Areas** — 12-col 5/7, `grid-cols-2 sm:grid-cols-3` town list with `border-b` rows, 12 towns
        in order, replace-me footnote
11. [ ] **Testimonials** — `#f9fafb`, centred pill/`h2`/lede, kit carousel with 3 slides, 5
        `primary-400` stars, 48 px initials disc, name + town; static 3-up at `lg`, dots + arrows below
12. [ ] **FAQ** — centred `max-w-3xl`, `divide-y #e5e7eb`, five rows, exclusive toggle, 32 px
        `#f3f4f6` disc rotating 45°, `max-height` panel
13. [ ] **Closing band** — flat `#0e6b90`, `py-28`, white 36 px `h2`, `#cff8fe` lede, white solid CTA
        + `border-2 border-white/40` ghost with phone glyph
14. [ ] **Footer** — `#111827`, brand `col-span-4` (logo, blurb, 3 × 40 px `#1f2937` social tiles,
        address/phone/mail), `Services`/`Company`/`Support` in a nested `sm:grid-cols-3` `col-span-5`,
        `Stay Updated` `col-span-3` with a working newsletter field + `Subscribe`, legal bar with the
        `Component Dock` link to `https://www.componentdock.com/`
15. [ ] **Chrome** — skip link, 2 px progress bar, 48 px back-to-top past 300 px, cookie strip
        (`role="dialog"`, `z-50`, over the call bar on mobile), no preloader overlay

## Wiring and verification

- [ ] Band ids: `#emergency`, `#process`, `#why-us`, `#services`, `#areas`, `#testimonials`, `#faq`,
      `#contact` — nav mapping per spec Requirement 15 (`Insurance` → the FAQ band)
- [ ] Booking form + newsletter: required/format validation on submit and blur, inline errors with
      `aria-invalid`/`aria-describedby`, reset + toast on success, **no network**
- [ ] Carousel: 3/2/1 per view, 5 s, hover pause, dots as `w-8`/`w-2.5`, arrows inside the viewport
      below `sm`, no autoplay under `prefers-reduced-motion`
- [ ] FAQ exclusive, `aria-expanded`/`aria-controls`, icon rotation, `max-height` transition
- [ ] All decorative SVGs `aria-hidden`; the located-slab panel `role="img"` + name; visible focus
      rings on `#0886b2`, `#0e6b90`, `#111827`
- [ ] No `colorlib`, no `Dowser` string, no `office@dowserleak.example`, no copied SVG/stylesheet, no
      copied JSON-LD under `apps/aquifer`
- [ ] Row added for Dowser under `## Business` in source-name order, heading re-counted, marker `[x]`
      with the bookkeeping commit
- [x] `npm run spec:validate` (3,255 items, 0 failed), `scripts/verify-app.sh aquifer` green
      (typecheck, oxlint, 76 tests at 100% coverage, build), CI merge gate green — see *Deploy* below;
      the R2 zip/catalog wiring stays with the owning streams

## Deploy

- [x] PR #1877 squash-merged to `main` as `f31c0c68c`; bookkeeping `42b3ffed8`
      (`TEMPLATES.md` row `[x]`, README status 1651/1651)
- [x] deploy-on-merge fired (run `40162450524`, `Verify + deploy changed templates: success`,
      including its own "Verify the deployments are live" step)
- [x] Surge origin serves the build: `curl -H 'Host: aquifer.free.componentdock.com'
      https://na-west1.surge.sh/` → **200**, `<title>Aquifer — leak detection in Louisville, located
      before anything is opened</title>`, no source-brand string in the markup
- [x] The branded edge `https://aquifer.free.componentdock.com/` still answers with the fleet-wide
      Cloudflare Universal-SSL gap for second-level wildcards (`sslv3 alert handshake failure`),
      recorded in `docs/deployment.md` and seen on the four previous catalogue-gap ships — not
      app-specific, no redeploy required
- [ ] R2 zip + `catalog.downloadUrl` wiring for `aquifer` (owning stream)
