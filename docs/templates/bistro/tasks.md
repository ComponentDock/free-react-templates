# Bistro — Implementation Tasks

Source design: ColorLib **Allfood** (`https://colorlib.com/wp/template/allfood/`, preview
`https://preview.colorlib.com/theme/allfood/`) → recreation name **bistro**. Shipped at
https://bistro.free.componentdock.com.

Row note: `TEMPLATES.md` lists this design twice — row **2666** under `## Restaurant (41)`
and row **330** under `## Bootstrap (216)` — and both rows link `bistro`. One app, one design
listed twice (`ROW-MULTI`); there is no row pointer to move.

Provenance note (2026-10-24): this brief and `openspec/specs/template-bistro/spec.md` were
rewritten. The earlier pair recorded ColorLib "Accordion 02" (warm-cream `#fcf8f2` / amber
`#d4a373`, an "Our Specialties" accordion) — a design `apps/bistro` never rendered. The
`SPEC-STALE` verdict in `docs/spec-row-mismatch.md` settled it by matching the app's own copy
(`About Our Restaurant`, `Delicious Food`, `Best Chef`, `Quality Food`) against both live
previews. The tokens below are re-measured from the Allfood sheet
(`assets/css/style.css`, 58,090 B, sha256 `8e1b11a8…`).

Scope: a one-page restaurant site — transparent header over a light food photograph, 87px
display hero, about block with three icon captions, menu mosaic under a dark hover overlay,
mirrored second about block, "Book A Table" card on a photo band, three service cards,
pill-shaped subscribe row, three blog cards with overhanging caption boxes, photo-backed
footer. React 19 · Vite · Tailwind CSS 4 · TypeScript.

> Section-level requirements live in the spec (`## Requirements`, one `### Requirement:` per
> band). The spec is the contract; this brief tracks the work and records where the shipped
> app and the reference disagree.

## Component breakdown (order in `apps/bistro/src/App.tsx`)

### 1. `Header` — spec: Requirement: Header and primary navigation
- [x] Wordmark left, nav `Home · About · Menu · Blog · Contact`, outlined orange CTA right
- [x] Blog submenu (`Blog Details`, `Element`) on a white shadowed panel
- [x] Mobile toggle with `aria-label` + expanded state
- [x] Absolute over the hero, white shadowed bar once scrolled (`#091a23` links, hover `#ff5600`)

### 2. `HeroSlider` — spec: Requirement: Hero band
- [x] Orange eyebrow, `h1` at the 87px → 60/50/35/27 scale, paragraph, solid orange CTA
- [x] Next / previous controls and slide indicators with accessible names
- [x] Two slides, CTA targets the booking band
- [ ] Reference's `padding-right: 257px` paragraph inset is approximated as a max-width —
      re-check against `theme/allfood/` at 1440px if fidelity is questioned

### 3. `About` — spec: Requirement: About band with icon captions
- [x] Photograph + eyebrow "About Our Restaurant" + 49px heading + paragraph
- [x] Three icon captions (leaf / chef / users, 45px reference scale)

### 4. `Gallery` — spec: Requirement: Menu mosaic band
- [x] Photo band with eyebrow "Our Offered Menu" + white 49px heading
- [x] Ten-tile mosaic, tall tiles spanning two rows (reference big 730px / small 365px)
- [x] Dark hover overlay (`rgba(11,14,13,0.702)` → `bg-black/70`) revealing the orange eyebrow
      "Delicious Food" + white title, also on keyboard focus
- [ ] **Divergence, documented not fixed:** the reference carries a three-tab row
      (`Special Lunch · Brakefirst · Dinner`) above the mosaic; the app renders every tile
      unfiltered and ships no tab row. Fixing it is an app change, not a prep change — the
      spec keeps tabs as a requirement so the debt stays visible.

### 5. `AboutSecond` — spec: Requirement: Second about band
- [x] Mirrored photograph + caption inset, 16px / 500 lead + 16px / 300 close

### 6. `BookingForm` — spec: Requirement: Booking band
- [x] Photo band, eyebrow "About Our Restaurant" + "Book A Table" heading
- [x] White card at the reference treatment (10px radius, deep soft shadow)
- [x] Name / email / date / time / persons fields, per-field errors via `aria-describedby`
- [x] Submit produces an in-page confirmation (no network call)

### 7. `Services` — spec: Requirement: Services band
- [x] Eyebrow "Servicees We Offer" + "Our Best Services", three cards
- [x] Best Chef / Quality Food / Perfect Cook copy
- [x] Hover lift (reference is a violet-tinted shadow; app keeps a neutral one)

### 8. `Subscribe` — spec: Requirement: Subscribe band
- [x] Photo band, eyebrow + 49px heading + paragraph
- [x] Pill row (50px radius): borderless 60px input + orange 60px button
- [x] Email validation + confirmation message

### 9. `BlogSection` — spec: Requirement: Blog band
- [x] Three cards with the caption box overhanging the image (`#f7f9f8`, 5px radius, 94% wide)
- [x] Uppercase `#828fa3` date + 20px / 500 title
- [x] Hover flips the box to `#ff5600` with white text

### 10. `Footer` — spec: Requirement: Footer
- [x] Wordmark + blurb, Navigation and Useful Links columns, six-image Instagram grid
- [x] `#012f5f` links with the orange hover and 5px nudge
- [x] Copyright row + social links, Component Dock credit
      (`https://www.componentdock.com/`) in place of the reference's credit line

## Token and provenance gates

- [x] `@theme` carries brand `#ff5600`, hover `#e74d00`, ink `#212025`, navy `#10285d`,
      meta `#828fa3`, mist `#f7f9f8`, foot `#848493`
- [x] Josefin Sans (display) + Poppins (body) loaded via the app's `index.html`
- [x] No ColorLib name, domain or URL under `apps/bistro/`
- [x] Deterministic `picsum.photos` placeholders, no reference asset copied
- [ ] `python3 scripts/verify-app-live-tokens.py --app bistro` — run before any future
      fidelity claim; this prep run measured the reference, it did not re-grade the app

## Verification

- `scripts/verify-app.sh bistro` (typecheck + lint + knip + fallow + 100% coverage + build)
- `npm run spec:validate` at the repo root (needs `node_modules`; the `-p2` clone has none,
  so this run checked the spec structurally: `## Purpose`, `## Requirements`, one
  `#### Scenario:` per requirement, unchanged heading shape)
