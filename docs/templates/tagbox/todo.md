# Tagbox — Implementation Tasks

## Pre-Implementation
- [x] Spec written (`openspec/specs/template-tagbox/spec.md`)
- [x] Design notes documented (`docs/templates/tagbox/design-notes.md`)
- [x] Preview DOM fetched and analyzed
- [x] CSS tokens extracted (colors, fonts, spacing)

## Implementation (for implementer stream)
- [ ] Copy simplest existing app to `apps/tagbox/`
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
