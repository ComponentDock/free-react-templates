# Calio Template Design Notes & Tasks

## Source Details

- **ColorLib Source**: calendar-12
- **Preview URL**: `https://colorlib.com/wp/theme/calendar-12/`
- **New App Name**: `calio`
- **Component Dock CNAME**: `calio.free.componentdock.com`

## Section Breakdown & Structure

1. **Header & Navigation**: Month & Year title with chevron navigation buttons (`<`, `>`).
2. **Day Headers**: Mon, Tue, Wed, Thu, Fri, Sat, Sun row.
3. **Date Grid**: 35 or 42 grid cells supporting active month, adjacent month days (muted), selected day, and today indicator.
4. **Schedule / Event Panel**: Side or bottom panel showing selected date details, scheduled meetings or reminders, and an "Add Event" form.
5. **Footer**: Clean attribution linking to `https://www.componentdock.com/`.

## Implementation Checklist for Implementers

1. Scaffold `apps/calio` from reference app (e.g. `apps/calvoy` or `apps/datepix`).
2. Update `package.json` name to `@free-react-templates/calio`.
3. Configure `public/CNAME` with `calio.free.componentdock.com`.
4. Implement components in `src/components/` following design tokens.
5. Write Vitest component tests ensuring 100% test coverage (`npm run test:coverage`).
6. Verify build, typecheck, and linting.
