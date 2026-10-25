# Brassworks — Tasks

Recreation of ColorLib **"Fixtura"** (https://colorlib.com/wp/template/fixtura/) as a React 19 + Vite +
Tailwind 4 + TypeScript app under the name **Brassworks** (`apps/brassworks`).

> **No `TEMPLATES.md` row exists for this design yet.** The catalogue is incomplete (see
> `docs/catalog-coverage.md`): `fixtura` is one of the 42 standalone designs on
> https://colorlib.com/wp/templates/ that the checklist never listed. Add the row under
> **`## Business`** *before* the PR claims a row — the exact line is in the spec, §Purpose — between
> **`Fitzone 2`** and **`Flatter`** (the section is sorted by the ColorLib source name). On
> `origin/main` `bda408d26` the heading reads `## Business (371)` over 371 rows, so the honest value
> after adding Fixtura is **`(372)`**. Re-count the rows, do not copy the number.

**Scope:** the source is a **twelve-page** shop site (landing + catalogue + four category pages +
brands + trade accounts + showroom + contact + privacy + terms). Build the **landing page only**; the
other eleven are inventoried in the spec (§Reference readings) and are out of scope (Deviation 1).

**Dark mode is in scope.** Unlike most of the Astro siblings, this theme ships a real class-based dark
theme with a `prefers-color-scheme` default (Requirement 10). Do not stub it.

## Pre-flight (done by the prep stream, 2026-10-25)

- [x] Replication: live preview read (`curl -4`, HTTP 200, **41,456 B**, sha256 `2e6b8461…a226`,
      `<title>` *Plumbing supply and fixture showroom in Sacramento | Fixtura Supply*); stylesheet
      `_astro/Base.Cf1ozeHK.css` (54,868 B, sha256 `50837b00…14e5`) and behaviour bundle
      `_astro/Base.…BLoalVWc.js` (16,233 B, sha256 `e26cc055…92f2`) recorded; all twelve pages probed
      (`-L`, 200)
- [x] Token sheet measured: **primary** 50 `#fbf3ee` · 100 `#f6e5d9` · 200 `#ebc8b0` · 300 `#dea481` ·
      400 `#cc7e51` · 500 `#be6b38` · **600 `#b5652f`** · **700 `#925026`** (no 800/900); **ink** 50
      `#fafaf9` · 100 `#f0f0ee` · 200 `#dededb` · 300 `#b5b5b0` · 400 `#7c7c76` · 500 `#57574f` · 600
      `#3a3a34` · 700 `#2a2a26` · **800 `#1f2328`** · 900 `#14171a`; greys `#9ca3af` / `#6b7280` /
      `#374151` / `#1f2937` / `#111827` / `#030712`; body text `#1f2328` on `#fafaf9`; radii 8 / 12 /
      16 px + 50 %; **only two shadows** (scrolled header, back-to-top)
- [x] The **one un-emitted class** recorded: `bg-sand-50` has no rule, so the featured band renders on
      the body ground `#fafaf9` (measured `rgba(0,0,0,0)`) — do not "fix" it into a warmer sand
- [x] Live-render verification (Playwright, 1440 / 1280 / 1024 / 992 / 768 / 576 / 390 / 360):
      `h1` **48 / 60 / −1.2** at ≥640 and **36 / 45 / −0.9** at 576/390; band `h2` 36 → 30; brands `h2`
      24/700; header **130 px** at ≥1024 (80 row + 49 rail + 1 border) and **65 px** below; hero cards
      **286 × 4** (1440/1280) → 222 × 4 (1024) → 360 × 2 (992/768) → 171 × 2 (390); products 286 × 4 →
      222 × 4 → 356 × 2 → 358 × 1; brands mosaic 303 × 4 → 239 × 4 → 367 × 2 → 358 × 1; document height
      **4,831 @1440** / 4,907 @1024 / 6,641 @992–768 / 9,130 @390
- [x] Behaviour read from the 16,233 B bundle — **seven** live behaviours: theme (inline
      `applyTheme()` + toggle + `localStorage.theme`), mobile panel, header `shadow-lg` past 50 px,
      scroll-progress width, cookie panel after **1,500 ms**, back-to-top past **300 px**, preloader
      fade + remove after 300 ms. **No** count-ups, FAQ, lightbox, carousel or reveals on this page
- [x] Link/destination census: **53 anchors**, 21 distinct, **3 dead** (`href="#"` × 3 — the social
      discs); 7 → trade-accounts, 7 → contact, 3 each → catalogue / brands / showroom / the four
      category pages; 3 `tel:`, 1 `mailto:`, 1 `#main-content`
- [x] Inner-page inventory recorded (catalogue + four category listings, brands "What we carry, and how
      deep", trade-accounts "Three account types", showroom "What is on display", contact "Request a
      quote / The counter", privacy 6 numbered sections, terms 6 numbered sections) — reference only
- [x] Screenshot analysed (`fixtura-template.jpg`, 375,189 B, 2400×1892 JPEG): a **macOS browser window**
      framing the top of the live page (utility bar → header → hero → first row of category cards); the
      live DOM is the authority below that. **`…/fixtura.jpg` is 404** — use `fixtura-template.jpg`
- [x] Name `brassworks` cleared: no `apps/brassworks`, no `template-brassworks` spec, no
      `docs/templates/brassworks`, `git grep -il brassworks origin/main` empty, and
      `wp/template/brassworks/`, `preview.colorlib.com/theme/brassworks/`,
      `…/theme/bootstrap/brassworks/` all **404**
- [x] Spec written: `openspec/specs/template-brassworks/spec.md` (15 requirements, 25 scenarios); notes
      in `docs/templates/brassworks/design-notes.md`

## Build

- [ ] `npm install` at the repo root **first** (the workspace must be registered), then scaffold
      `apps/brassworks` by copying the simplest existing app; rename the package to
      `@free-react-templates/brassworks`
- [ ] `vite.config.ts` registers `injectUiSource()`; `react`/`react-dom` are `latest`; `public/CNAME` =
      `brassworks.free.componentdock.com`; `package.json#homepage` =
      `https://brassworks.free.componentdock.com`
- [ ] `src/index.css`: paste the `@theme` block from `docs/templates/brassworks/design-notes.md` verbatim
      (primary 50–700, ink 50–900, sand-50, gray 400–950, the serif stack) + `@custom-variant dark`
      (class-based) + `html { scroll-behavior: smooth }` + the `prefers-reduced-motion` override
- [ ] `index.html`: `<link>` Google Fonts **Poppins** (`wght@400;500;600;700`) and **Gelasio**
      (`ital,wght@0,400..700;1,400..700`) with `display=swap`; the inline `applyTheme()` script in
      `<head>` so dark mode never flashes; one `<title>`, one meta description

### Sections, in reference order

- [ ] `ScrollProgress` — 2 px (`h-0.5`) `primary-600` bar, `fixed top-0`, `z-60`, width from
      `scrollY / (scrollHeight - innerHeight)`, updated on `scroll` (passive) and on mount
- [ ] `Preloader` — `fixed inset-0 z-[100]` white (dark `gray-950`), 40 px spinner
      (`border-4 border-gray-200 border-t-primary-600`, `animate-spin`); fade to `opacity-0` then unmount
      **300 ms** after `load` — derive `hidden = loaded || document.readyState === 'complete'` so a
      already-complete document still hides it
- [ ] `UtilityBar` — 40 px `#1f2328`, 12 px `ink-100`: truncated hours + `Next-day collection on stocked
      lines` (`ink-300`, hidden <640) | `Trade accounts` (hidden <640) + `tel:` phone
- [ ] `Navbar` — sticky `top-0 z-50`, `bg-white/95` + `backdrop-blur`, 1 px `ink-200` bottom border;
      row 1 `h-16 lg:h-20`: wordmark (36 px tall at ≥1024, light variant in dark), search `flex-1`
      (hidden <768, 8 px radius, `ink-50` ground, magnifier glyph, ring on focus), dark toggle
      (`sm:block`), `Request a quote` solid CTA (**≥1280 only**), hamburger (<1280); row 2 `h-12` rail
      (≥1024) with five 14 px/600 links, 32 px gaps; `shadow-lg` past `scrollY > 50`
- [ ] `MobilePanel` — drops under row 1 (<1280): its own search, five `py-3` 16 px/600 links, full-width
      solid CTA; `aria-expanded`, `Escape` closes and returns focus (added behaviour)
- [ ] `Hero` — eyebrow `#925026`, `h1` 36 → 48 px (no `max-w` beyond 672), lede 18 px `ink-500`, solid CTA
      (`px-6 py-3`, 8 px radius), then **four category cards** (`<ul>` 2-up → 4-up at ≥1024, `gap-4` →
      `gap-6`): whole-card link, `rounded-xl`, 1 px `ink-200`, `ink-50` ground, `aspect-[4/3]` photo,
      `p-4` caption (name 16/600, count 14 `ink-400`), hover border `primary-500`
- [ ] `Featured` — `.section` band (112 px / 80 px), eyebrow `This month`, **serif** `h2` 36 px, lede,
      four cards (`rounded-2xl`, 1 px `ink-100`, white, `aspect-square` photo, `p-5` body): serif `h3`
      18/600, blurb 14, `<dl>` with 3 hairline-topped rows (`dt` `ink-400`, `dd` 500 `ink-700`), price
      line 14/600 `primary-700`, **full-width outlined CTA**, then the sample notice
- [ ] `Brands` — hairline band (`border-y`, 48 px pad), eyebrow 14/700 `primary-600`, `h2` 24/700, then
      the **mosaic**: `<ul class="grid gap-px overflow-hidden rounded-lg bg-ink-200">` with white `p-5`
      tiles (4-up → 2-up → 1-up), name 16/700 `tracking-tight`, range 14 `ink-400`, notice line
- [ ] `Trade` — `bg-ink-800`, `py-16 lg:py-20`, 12-col grid (5 + 7): eyebrow **`primary-400`**, white
      `h2` 36/600, lede `ink-200`, solid CTA (`px-6 py-3.5`), notice `ink-300`; right = `<dl>` 3 columns
      of terms (`dt` 16/600 white, `dd` `ink-200`)
- [ ] `Showroom` — `.section` white, 12-col (5 + 7): eyebrow, `h2`, lede, `address` (not italic,
      `ink-600`), hours `<dl>` (`max-w-sm`, 3 hairline rows `py-2.5`), notice, solid CTA; right = `2:1`
      photo `rounded-xl`
- [ ] `ClosingCta` — `bg-primary-700`, `py-20 lg:py-28`, centred 768 px: `h2` 36/700 white, lede
      `primary-100` (`max-w-xl`), then a white CTA (`px-8 py-4`, 16/700 `primary-700`) + an outlined CTA
      (`border-2 border-white/40`, white label, 20 px phone glyph)
- [ ] `Footer` — `bg-gray-900` (`#111827`), `pt-16 lg:pt-24`, 12-col (4 · 5 · 3): brand + blurb +
      3 social discs + address / phone / email | three link columns (Catalogue / Company / Support) |
      trade block with CTA; bottom bar `mt-16 border-t border-gray-800 py-8` with the copyright, the two
      policy links **and the Component Dock link**
- [ ] `CookieConsent` — `role="dialog" aria-label="Cookie consent"`, fixed bottom, slides in after
      **1,500 ms** unless `localStorage['cookie-consent']`, `Decline` + `Accept All` store the key and
      remove the panel
- [ ] `BackToTop` — 48 px `primary-600` disc, `bottom-6 right-6`, hidden until `scrollY > 300`,
      `shadow-lg shadow-primary-600/25`, ring on focus

### Behaviour

- [ ] Theme: `applyTheme()` reads `localStorage.theme` else `prefers-color-scheme`; toggle flips
      `.dark` and stores `dark`/`light`; icons and the wordmark swap — **no flash on load**
- [ ] Scroll: progress bar, header shadow past 50 px, back-to-top past 300 px
- [ ] Mobile panel: `aria-expanded`, `Escape` + focus return, closes on link click
- [ ] Reduced motion: smooth scroll → instant, transitions dropped, spinner/progress still functional

### Tests (TDD — write them red first)

- [ ] `Hero.test.tsx` — one `h1`, the eyebrow, both CTAs' labels, four category cards with their counts
- [ ] `Featured.test.tsx` — four product titles, the `<dl>` pairs, the hire price on card 4
- [ ] `Brands.test.tsx` — eight tiles, each name + range, the mosaic wrapper classes
- [ ] `Trade.test.tsx` — three term pairs, the CTA label
- [ ] `Showroom.test.tsx` — `address` lines, three hours rows (Mon–Fri / Sat / Sun "Closed")
- [ ] `ClosingCta.test.tsx` — headline, white CTA and the `tel:` CTA
- [ ] `Footer.test.tsx` — Component Dock link present + `https://www.componentdock.com/`, three column
      heads, policy links
- [ ] `Navbar.test.tsx` — panel `aria-expanded` flips, `Escape` closes, `scrollY > 50` adds the shadow
- [ ] `theme.test.tsx` — toggle writes `localStorage.theme`, `.dark` follows, stored `light` beats a dark
      OS preference
- [ ] `CookieConsent.test.tsx` — appears after the timer, both buttons store + unmount, absent when the
      key exists
- [ ] `BackToTop.test.tsx` — hidden at 0, visible past 300
- [ ] `scripts/verify-app.sh brassworks` green (typecheck + lint + **100 % coverage** + build)

### Hand-off

- [ ] Row added to `TEMPLATES.md` under `## Business`, alphabetical (between `Fitzone 2` and `Flatter`),
      heading count re-measured (371 → 372)
- [ ] `npm install` at the root again after the workspace rename; `grep -c
      "free-react-templates/brassworks" package-lock.json` ≥ 1
- [ ] `grep -ri 'colorlib\|fixtura' apps/brassworks` prints nothing
- [ ] PR description: source design, preview URL, tokens used, and the deviations list (single page,
      re-voiced demo identity, placeholder photography, Google-Fonts delivery, Escape + focus rings +
      reduced-motion added, Component Dock attribution)
- [ ] Merge, then `gh workflow run deploy-surge.yml -f app="brassworks"`; verify
      `curl -4 -sI https://brassworks.free.componentdock.com` → 200 and
      `curl -4 -sI https://na-west1.surge.sh -H 'Host: brassworks.free.componentdock.com'` → 200
- [ ] Bookkeeping: `[x]` marker + surge URL in the row, `npm run readme:status`
