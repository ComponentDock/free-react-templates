# GymNova — Task Checklist
<!-- prep-status: shipped-as=gymbox -->
> **SHIPPED-UNDER** — the ColorLib `gym2` design this prep describes already
> ships as `apps/gymbox` (<https://gymbox.free.componentdock.com>).
> Do not scaffold `apps/gymnova`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-gymbox/spec.md`.

## Pre-implementation
- [x] Replication research (preview DOM, CSS tokens, screenshot)
- [x] Spec written (`openspec/specs/template-gymnova/spec.md`)
- [x] Design notes documented (`docs/templates/gymnova/notes.md`)

## Implementation (for implementer stream)
- [ ] Scaffold app from template
- [ ] Configure vite.config.ts with injectUiSource()
- [ ] Set up index.css with Tailwind + @theme tokens
- [ ] Add Google Fonts to index.html (Paytone One, Montserrat, Teko)
- [ ] Build Navbar component
- [ ] Build HeroSlider component
- [ ] Build CategorySplit component
- [ ] Build Features component
- [ ] Build OfferBanner component
- [ ] Build Pricing component
- [ ] Build Gallery component
- [ ] Build Team component
- [ ] Build BigOffer component
- [ ] Build Footer component
- [ ] Compose App.tsx with all sections
- [ ] Write tests (100% coverage)
- [ ] Run verify-app.sh
- [ ] Commit, push, open PR
