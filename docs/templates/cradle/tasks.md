# Cradle — Design Notes & Implementation Tasks

> Shipped 2026-10-24k as `apps/cradle` (rename of `apps/nurture`). The previous
> contents of this file described a different design (a charity landing page
> prepped under this folder by mistake) and did not match the shipped app; it
> has been replaced with the record of what actually ships. Full token and
> section detail lives in [`design-notes.md`](./design-notes.md).

## Source Mapping

| Aspect      | Value                                                                             |
| ----------- | --------------------------------------------------------------------------------- |
| ColorLib    | Nurture                                                                           |
| Source URL  | https://colorlib.com/wp/template/nurture/                                         |
| Preview URL | https://preview.colorlib.com/theme/nurture/                                       |
| New name    | cradle                                                                            |
| App path    | apps/cradle                                                                       |
| Deploy URL  | https://cradle.free.componentdock.com                                             |
| Screenshot  | https://colorlib.com/wp/wp-content/uploads/sites/2/nurture-free-template.jpg      |

## Design Research Notes

The source is a **kids learning center / kindergarten landing page**. Verified
against the live preview DOM (`200`, title *Nurture | Kindergarten and Childcare
Center*) and its stylesheet (`css/main.css`):

1. **Green primary, playful secondaries** — brand green `#0fb78d` for buttons and
   accents, sky blue `#4fb0dc` and lime `#5cb100` for icons, orange tangerine
   `#ec661f` for CTA/pricing highlights.
2. **Poppins throughout** — one family, weights 300–700, loaded from Google Fonts.
3. **Pill buttons** — fully rounded, solid brand green primary and orange CTA.
4. **Full-bleed photo hero** — dark overlay, single H1 "Learning Center for Your
   Kids" plus an Enroll CTA.
5. **Alternating white / `#f7f9fc` bands** with centered, rule-underlined section
   headings (`line-bottom`).
6. **Nine bands, in source order** — nav, hero, "What We Offer" feature icons,
   "Education for Tomorrow's Leaders" parallax CTA, "About Us", "School News"
   cards, summer-enrolment CTA, "Pricing" plans, dark footer (`#2b2b2b`).

## Implementation Tasks

### Phase 1: Scaffold

- [x] Create `apps/cradle/` from an existing app skeleton
- [x] Package `@free-react-templates/cradle`; `public/CNAME` = `cradle.free.componentdock.com`
- [x] `homepage` in `package.json` = `https://cradle.free.componentdock.com`
- [x] Keep `injectUiSource()` in `vite.config.ts` (`plugins: [react(), injectUiSource(), tailwindcss()]`)
- [x] Register the workspace in `package-lock.json` via root `npm install`

### Phase 2: Tokens

- [x] `@theme` block in `src/index.css` — brand/sky/lime/tangerine/ink/mist/paper/cloud/dark
- [x] `--font-sans: 'Poppins', …` with the Google Fonts `<link>` in `index.html`

### Phase 3: Sections

- [x] `Navbar.tsx` — sticky top nav, brand "Cradle", mobile hamburger
- [x] `Hero.tsx` — photo hero with overlay, H1, Enroll CTA
- [x] `Features.tsx` — "What We Offer" icon cards
- [x] `EducationCta.tsx` — parallax education band
- [x] `About.tsx` — "About Us" with imagery
- [x] `News.tsx` — school news cards
- [x] `EnrollCta.tsx` — summer enrolment band
- [x] `Pricing.tsx` — three plans
- [x] `Footer.tsx` — dark footer, newsletter, links, Component Dock credit

### Phase 4: Verification

- [x] Vitest + Testing Library suites per component; 100% lines/functions/branches/statements
- [x] `bash scripts/verify-app.sh cradle` — typecheck + lint + coverage + build
- [x] `npm run spec:validate`
- [x] No `colorlib` / source-name strings under `apps/cradle/`
- [x] Footer links https://www.componentdock.com/ ("Component Dock")
- [x] `node scripts/audit-naming.mjs` no longer lists this app as a rule-5 violation

## Delivery contract

- Footer link to Component Dock is the only attribution line the page carries.
- Placeholders are `picsum.photos/seed/cradle-*`; icons from `lucide-react`;
  no source asset is copied.
