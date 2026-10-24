# SearchHive — Task Outline
<!-- prep-status: shipped-as=findbox -->
> **SHIPPED-UNDER** — the ColorLib `search-form-bar-11` design this prep describes already
> ships as `apps/findbox` (<https://findbox.free.componentdock.com>).
> Do not scaffold `apps/searchhive`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-findbox/spec.md`.

## Prep (this stream)
- [x] Replication research: screenshot analysis, design tokens extracted
- [x] Spec written: openspec/specs/template-searchhive/spec.md
- [x] Design notes: docs/templates/searchhive/design-notes.md

## Implementation (for implementer streams)
- [ ] Scaffold app: copy simplest search-form-bar app, rename to searchhive
- [ ] Create SearchBar component with toggle behavior
- [ ] Create Navbar component with brand text + search
- [ ] Create Footer component (Component Dock link)
- [ ] Compose App.tsx with Navbar + body note + Footer
- [ ] Add Tailwind @theme tokens for brand blue
- [ ] Write tests (100% coverage)
- [ ] Verify: typecheck + lint + test:coverage + build
- [ ] Update TEMPLATES.md: mark [x], add surge URL
