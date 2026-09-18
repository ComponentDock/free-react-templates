# GiveCraft — Task Outline

## Prep status
- [x] Reference gathered (preview DOM + CSS + screenshot)
- [x] Spec written (`openspec/specs/template-givecraft/spec.md`)
- [x] Notes written (`docs/templates/givecraft/notes.md`)

## Implementation tasks (for implementers)

### Setup
- [ ] Copy simplest existing app (e.g. `abjure`) to `apps/givecraft`
- [ ] Rename package to `@free-react-templates/givecraft`
- [ ] Update `package.json` homepage to `https://givecraft.free.componentdock.com`
- [ ] Create `public/CNAME` with `givecraft.free.componentdock.com`
- [ ] Run `npm install` at repo root to register workspace

### Components (in order)
- [ ] `Navbar.tsx` — transparent overlay nav, logo + links
- [ ] `Hero.tsx` — full-width bg image, headline, two CTA buttons
- [ ] `Causes.tsx` — 3 image cards section
- [ ] `About.tsx` — 2-column split (image left, text right)
- [ ] `FeaturedCauses.tsx` — 3 cards with raised/goal/donate
- [ ] `Events.tsx` — 2x2 event cards with countdown timers
- [ ] `Team.tsx` — 4 volunteer cards with social icons
- [ ] `CtaBanner.tsx` — dark overlay CTA section
- [ ] `Story.tsx` — 3 blog cards
- [ ] `Subscribe.tsx` — newsletter form bar
- [ ] `Footer.tsx` — 4-column footer + copyright (ComponentDock link)

### Tokens & styling
- [ ] Set `@theme` in `index.css` with brand colors (#60bc0f, #fdbb00)
- [ ] Add Google Fonts link for Poppins + Roboto in `index.html`
- [ ] Style buttons: sharp corners, uppercase, Roboto 12px
- [ ] Match section padding (130px vertical)

### Tests
- [ ] Each component gets colocated `*.test.tsx`
- [ ] 100% coverage (lines, functions, branches, statements)

### Verification
- [ ] `scripts/verify-app.sh givecraft` passes
- [ ] No ColorLib references in `apps/givecraft/`
- [ ] Footer links to ComponentDock
- [ ] `npm run readme:status` updated
