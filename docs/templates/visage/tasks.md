# Visage — Template Tasks

## Implementation Checklist

- [x] Spec written (`openspec/specs/template-visage/spec.md`)
- [x] App scaffold created (`apps/visage/`)
- [x] Design tokens extracted (Montserrat, #8583e1, #100f3a)
- [ ] Tests written (TDD red phase)
- [ ] Components implemented (TDD green phase)
- [ ] Per-app gate passes (`scripts/verify-app.sh visage`)
- [ ] PR opened and merged
- [ ] Bookkeeping (TEMPLATES.md `[x]`, surge URL, homepage, readme:status)

## Design Notes

- Single-page SPA consolidating 8 original pages into tab panels
- Sidebar layout: fixed left sidebar + scrollable right content
- Color palette: indigo/purple primary (#8583e1), dark navy (#100f3a)
- Font: Montserrat via Google Fonts
- Profile photo: picsum.photos placeholder
- Social icons: lucide-react
- Skill loaders: animated circular progress indicators
- Footer: "Made with Component Dock" branded link
