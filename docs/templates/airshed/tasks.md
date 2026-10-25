# Airshed — implementation tasks

Source: ColorLib **Zephyr** (https://colorlib.com/wp/template/zephyr/) ·
preview https://preview.colorlib.com/theme/zephyr/ (200, 65,449 B, Astro build) ·
spec `openspec/specs/template-airshed/spec.md` ·
notes `docs/templates/airshed/design-notes.md`.

Boxes are ticked only when the code has shipped and `scripts/verify-app.sh airshed` is green.

## 0. Claim

- [ ] Append the row at the **end of `## Business`** (after *Zeta*, count 385 → 386) and mark it
      `- [~]` in the same commit
- [ ] Create `apps/airshed` from the simplest existing app; rename the package to
      `@free-react-templates/airshed`; `homepage` = `https://airshed.free.componentdock.com`;
      `public/CNAME` = `airshed.free.componentdock.com`
- [ ] `npm install` at the repo root so `package-lock.json` registers the workspace

## 1. Tokens and shell

- [ ] `src/index.css`: `@theme` with the `primary` ramp (`#f5f3ff`, `#ede8ff`, `#dcd4fe`, `#a288f7`,
      `#8663ee`, `#7247dc`, `#6138bc`), the `ink` ramp (`#f8f8fa`, `#efeff3`, `#dedee6`, `#b9b9c8`,
      `#8b8ba0`, `#696980`, `#4f4f63`, `#3c3c4c`, `#272733`, `#171720`), `--shadow-soft`, radii
      8 / 12 / 16
- [ ] One Google Fonts `<link>`: DM Sans 400 / 500 / 600 / 700 — **no mono face** (the reference
      declares JetBrains Mono and never uses it)
- [ ] `index.html`: title, meta description, favicon; no ColorLib strings anywhere
- [ ] Shell: skip link → `#main-content`, 2 px scroll-progress bar, preloader with a
      timeout-guarded removal, back-to-top disc, reveal engine honouring `prefers-reduced-motion`
- [ ] Dark mode: `html.dark`, `localStorage.theme`, class applied before first paint

## 2. Chrome

- [ ] Licence strip: 36 px, `#272733`, four statements + amber star + `4.9` + *150+ reviews*
- [ ] Header: sticky, 64 / 80 px, wordmark, six-link nav at `xl`, phone pill, moon toggle, violet CTA
- [ ] Mobile panel with `aria-expanded`, phone number inside it, closes on navigation
- [ ] Cookie dialog: `role="dialog"`, 1.5 s delay, `localStorage["cookie-consent"]`

## 3. Bands (source order)

- [ ] **Hero** — `ink-50`, 12-col split 7/5 at `lg`, gap 64; eyebrow, `h1` with violet second
      sentence, lede, 5 amber stars + `4.9`, 2×2 checklist of four items
- [ ] **Booking form card** — white, 16 px radius, 32 px padding, `shadow-md`; name / phone / problem
      select (six options + placeholder); full-width violet submit; footnote; in-place validation and
      a success state (the reference has **no** handler)
- [ ] **What we measure** — `py-20 lg:py-28`, `max-w-2xl` header block, `ol` of five items in three
      columns at `sm` (gap 24); each item `01`–`05` + 1 px `#efeff3` rule + `h3` + copy + violet label
- [ ] **Why us** — `ink-50`, two 50 % columns at gap 64; 576 × 432 (4:3) placeholder at 16 px radius +
      caption; four `dl` principles with `border-l-2` `#7247dc` and `pl-5`
- [ ] **Services** — hairline grid (`gap: 1px` on `#efeff3`, 16 px shell), six cards, three columns at
      `lg` / two at `sm`; each card keeps `h3` / copy / *From $* on one baseline
- [ ] **Areas** — 12-col split 5/7; twelve towns with bottom rules, two columns at base, three at `sm`
- [ ] **Testimonials** — `gray-50`, centred `max-w-3xl` header with the *Reviews* pill, three quote
      cards (five violet stars, 18 / 28 medium quote, initial disc, name, town)
- [ ] **Testimonials carousel** — works at 390 (3 dots), 768 (2 dots) and 1440 (3 visible, **no**
      arrows); autoplay 5 s, pause on hover, arrows and dots both real controls
- [ ] **FAQ** — `max-w-3xl`, five `divide-y` rows, `+` disc rotating 45°, `aria-expanded` +
      `aria-controls`, one open at a time, panel height animated to `scrollHeight`
- [ ] **Closing band** — `#6138bc`, white `h2`, `#ede8ff` lede, white fill CTA + `2px white/40`
      outlined phone CTA
- [ ] **Footer** — `#111827`, brand column (blurb, address, phone, email, three social tiles), three
      link columns, newsletter with validation, bottom bar, **Component Dock** link

## 4. Fidelity gates

- [ ] Section order and copy match `design-notes.md` §3 (all five metric labels, six prices, twelve
      towns, three quotes, five FAQs)
- [ ] Band heights within ~5 % of the reference at 1440 (711 / 840 / 940 / 915 / 468 / 768 / 820 / 440
      / 568 + 37 + 81)
- [ ] No horizontal overflow at 1440 / 1024 / 768 / 390; nothing clipped at 320
- [ ] All 15 reference defects addressed or deliberately fixed (spec §"Known defects")
- [ ] `scripts/verify-app.sh airshed` green: typecheck, lint, 100 % coverage, build
- [ ] Deploy: `gh workflow run deploy-surge.yml -f app="airshed"`, then
      `scripts/audit-deployments.sh` shows HTTPS 200 with `ssl_verify_result=0`
- [ ] Bookkeeping: row `[~]` → `[x]` + surge URL, `npm run readme:status`, push

## Done when

The row is `[x]`, the app is live at `https://airshed.free.componentdock.com`, and the nightly gate
is green.
