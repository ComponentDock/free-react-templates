# Airshed — implementation tasks

Source: ColorLib **Zephyr** (https://colorlib.com/wp/template/zephyr/) ·
preview https://preview.colorlib.com/theme/zephyr/ (200, 65,449 B, Astro build) ·
spec `openspec/specs/template-airshed/spec.md` ·
notes `docs/templates/airshed/design-notes.md`.

Boxes are ticked only when the code has shipped and `scripts/verify-app.sh airshed` is green
(106 tests, 100 % statements / branches / functions / lines, build 298 kB → 92 kB gzip).

## 0. Claim

- [x] Append the row at the **end of `## Business`** (after *Zeta*, count 386 → 387) and mark it
      `- [~]` in the same commit
- [x] Create `apps/airshed` from the simplest existing app; rename the package to
      `@free-react-templates/airshed`; `homepage` = `https://airshed.free.componentdock.com`;
      `public/CNAME` = `airshed.free.componentdock.com`
- [x] `npm install` at the repo root so `package-lock.json` registers the workspace

## 1. Tokens and shell

- [x] `src/index.css`: `@theme` with the `primary` ramp (`#f5f3ff`, `#ede8ff`, `#dcd4fe`, `#a288f7`,
      `#8663ee`, `#7247dc`, `#6138bc`), the `ink` ramp (`#f8f8fa`, `#efeff3`, `#dedee6`, `#b9b9c8`,
      `#8b8ba0`, `#696980`, `#4f4f63`, `#3c3c4c`, `#272733`, `#171720`), `--shadow-soft`, radii
      8 / 12 / 16
- [x] One Google Fonts `<link>`: DM Sans 400 / 500 / 600 / 700 — **no mono face** (the reference
      declares JetBrains Mono and never uses it outside its chart artwork, which is redrawn here in
      DM Sans `tabular-nums`)
- [x] `index.html`: title, meta description, favicon; no ColorLib strings anywhere
- [x] Shell: skip link → `#main-content`, 2 px scroll-progress bar, preloader with a
      timeout-guarded removal, back-to-top disc, reveal engine honouring `prefers-reduced-motion`
- [x] Dark mode: `html.dark`, `localStorage.theme`, class applied before first paint

## 2. Chrome

- [x] Licence strip: 36 px, `#272733`, four statements + amber star + `4.9` + *150+ reviews*
- [x] Header: sticky, 64 / 80 px, wordmark, six-link nav at `xl`, phone pill, moon toggle, violet CTA
- [x] Mobile panel with `aria-expanded`, phone number inside it, closes on navigation
- [x] Cookie dialog: `role="dialog"`, 1.5 s delay, `localStorage["cookie-consent"]`

## 3. Bands (source order)

- [x] **Hero** — `ink-50`, 12-col split 7/5 at `lg`, gap 64; eyebrow, `h1` with violet second
      sentence, lede, 5 amber stars + `4.9`, 2×2 checklist of four items
- [x] **Booking form card** — white, 16 px radius, 32 px padding, `shadow-md`; name / phone / problem
      select (six options + placeholder); full-width violet submit; footnote; in-place validation and
      a success state (the reference has **no** handler)
- [x] **What we measure** — `py-20 lg:py-28`, `max-w-2xl` header block, `ol` of five items in three
      columns at `sm` (gap 24); each item `01`–`05` + 1 px `#efeff3` rule + `h3` + copy + violet label
- [x] **Why us** — `ink-50`, two 50 % columns at gap 64; 4:3 panel at 16 px radius + caption; four
      `dl` principles with `border-l-2` `#7247dc` and `pl-5`
- [x] **Why us figure** — the panel is a local SVG component, not an image asset: `#171720` frame,
      `#272733` inset card (radius 24), title *Bedroom CO₂, one week*, dashed 1,200 ppm threshold,
      five overnight spikes in `#a288f7`, MON–FRI ticks, closing line *The fix here was a transfer
      grille, not a purifier.* — the reference's only image slot, redrawn with its own path data
- [x] **Services** — hairline grid (`gap: 1px` on `#efeff3`, 16 px shell), six cards, three columns at
      `lg` / two at `sm`; each card keeps `h3` / copy / *From $* on one baseline
- [x] **Areas** — 12-col split 5/7; twelve towns with bottom rules, two columns at base, three at `sm`
- [x] **Testimonials** — `gray-50`, centred `max-w-3xl` header with the *Reviews* pill, three quote
      cards (five violet stars, 18 / 28 medium quote, initial disc, name, town)
- [x] **Testimonials carousel** — works at 390 (3 dots), 768 (2 dots) and 1440 (3 visible, **no**
      arrows); autoplay 5 s, pause on hover, arrows and dots both real controls
- [x] **FAQ** — `max-w-3xl`, five `divide-y` rows, `+` disc rotating 45°, `aria-expanded` +
      `aria-controls`, one open at a time, panel height animated to `scrollHeight`
- [x] **Closing band** — `#6138bc`, white `h2`, `#ede8ff` lede, white fill CTA + `2px white/40`
      outlined phone CTA
- [x] **Footer** — `#111827`, brand column (blurb, address, phone, email, three social tiles), three
      link columns, newsletter with validation, bottom bar, **Component Dock** link

## 4. Fidelity gates

- [x] Section order and copy match `design-notes.md` §3 (all five metric labels, six prices, twelve
      towns, three quotes, five FAQs)
- [x] Band heights within ~5 % of the reference at 1440 — measured live on both pages:
      hero 686 / 711, measure 844 / 840, why-us 935 / 940, services 910 / 915, areas 416 / 468,
      testimonials 720 / 768, FAQ 880 / 820, closing 471 / 440, footer 531 / 568, header 81 / 81;
      page 6,509 vs 6,588 px (**−1.2 %**)
- [x] No horizontal overflow at 1440 / 1024 / 768 / 390 (`scrollWidth − innerWidth = 0`)
- [x] All 15 reference defects addressed or deliberately fixed (spec §"Known defects")
- [x] `scripts/verify-app.sh airshed` green: typecheck, lint, 100 % coverage, build
- [ ] Deploy: `gh workflow run deploy-surge.yml -f app="airshed"` runs on merge, then
      `scripts/audit-deployments.sh` shows HTTPS 200 with `ssl_verify_result=0`
- [ ] Bookkeeping: row `[~]` → `[x]` + surge URL, `npm run readme:status`, push

## Done when

The row is `[x]`, the app is live at `https://airshed.free.componentdock.com`, and the nightly gate
is green.
