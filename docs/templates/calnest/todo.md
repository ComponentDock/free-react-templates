# Calnest (ColorLib Calendar 12 Recreation) — Implementation Plan & Tasks

## Source & Mapping

- **ColorLib Source**: Calendar 12 (`https://colorlib.com/wp/template/calendar-12/`)
- **New Name**: `calnest`
- **Package**: `@free-react-templates/calnest`
- **Deploy Target**: `calnest.free.componentdock.com`
- **Preview Note**: Live preview URL returned 404; design built faithfully from official screenshot (`https://colorlib.com/wp/wp-content/uploads/sites/2/calendar-12.jpg`).

## Structure & Sections

1. **Navbar**: Logo, navigation items, CTA button.
2. **Hero**: Headline, CTA, calendar mockup preview.
3. **Calendar Section**: Interactive month grid, day selection, event list sidebar.
4. **Features**: Productivity & synchronization highlights with Lucide icons.
5. **Footer**: Copyright, navigation links, and mandatory link to `https://www.componentdock.com/`.

## Verification Checklist

- [ ] Spec validated (`npm run spec:validate`)
- [ ] Workspace setup (`package.json` + root lockfile registration)
- [ ] Tests written (100% coverage target)
- [ ] Implementation with Tailwind v4 + `injectUiSource()`
- [ ] Verification pass (`scripts/verify-app.sh calnest`)
