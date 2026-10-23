# Tagbox — Implementation Tasks
<!-- prep-status: shipped-as=picktag -->
> **SHIPPED-UNDER** — the ColorLib `multiselect-11` design this prep describes shipped
> as `apps/picktag` (<https://picktag.free.componentdock.com>).
> The unchecked items below are prep history, not outstanding work.

## Pre-Implementation
- [x] Spec written (`openspec/specs/template-tagbox/spec.md`)
- [x] Design notes documented (`docs/templates/tagbox/design-notes.md`)
- [x] Preview DOM fetched and analyzed
- [x] CSS tokens extracted (colors, fonts, spacing)

## Implementation (for implementer stream)
- [x] Copy simplest existing app to `apps/tagbox/` — superseded: shipped as `apps/picktag`
- [ ] Update package.json: `@free-react-templates/tagbox`
- [ ] Update `public/CNAME` → `tagbox.free.componentdock.com`
- [ ] Update `vite.config.ts` with `injectUiSource()`
- [ ] Set up Tailwind theme tokens in `src/index.css`
- [ ] Build `MultiSelect.tsx` component (dropdown, tags, search)
- [ ] Build `Tagbox.tsx` page wrapper
- [ ] Build `App.tsx` composing sections
- [ ] Add Google Fonts link for Roboto in `index.html`
- [ ] Add Component Dock footer link
- [ ] Write tests (100% coverage)
- [ ] Run `scripts/verify-app.sh tagbox`
- [ ] Update TEMPLATES.md: `[~]` → `[x]` + surge URL
- [ ] Commit as `feat: tagbox (ColorLib multiselect-11)`
- [ ] Open PR, merge, deploy
