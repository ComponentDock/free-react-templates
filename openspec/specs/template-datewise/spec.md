# Template: Datewise (Calendar / Utility Widget — Vertical Calendar Layout)

## Purpose

Datewise is a single-page vertical calendar widget template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Calendar 02" free template (source:
https://colorlib.com/wp/template/calendar-02/), built under a DIFFERENT name
(**Datewise** — evoking the template's vertical date tracking feature; per
the monorepo naming mandate — never reuse the ColorLib source name), with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a **vertical calendar layout**: features the current day on
the side in a vertical/sidebar position, with the rest of the calendar on the
left. ColorLib's own description: "If you would like to go against the grain,
this free vertical calendar template is the right option for you. It features
the current day on the side, in a vertical position, with the rest on the left."

The page renders:

1. **Header / Title** — Clean header title **"Calendar #02"** / **"Datewise"**.
2. **Main Vertical Layout** — Left side calendar grid / month view, right side (or stacked on mobile) prominent vertical day display (Day of week, Large day number, Month, Year).
3. **Interactive Month Navigation** — Prev/Next month controls.
4. **Day Selection** — Clicking dates updates the vertical day display.
5. **Footer** — Component Dock attribution footer.

> NAMING NOTE: the ColorLib source name "Calendar 02" is FORBIDDEN as the
> app name. **Datewise** is the new, original name — single lowercase word,
> no collision with `apps/`, `openspec/specs/`, `docs/templates/` or the
> shipped-app names embedded in TEMPLATES.md. Source slug + preview URL are
> recorded below.

> PREVIEW UNREACHABLE (fallback: screenshot / description): the default preview URL
> `https://preview.colorlib.com/theme/calendar-02/` returns **HTTP 404**.
> Per docs/replication.md the TEMPLATES.md screenshot and description are
> the reference.

## Design reference (replication findings)

- **Original:** ColorLib "Calendar 02". Listed in TEMPLATES.md under
  **Bootstrap Calendars (20)**. Free Bootstrap vertical calendar template
  (author Colorlib; released 2025; license CC BY 3.0).
- **Live preview DOM — UNREACHABLE:** preview host returns 404.
- **Visual design & structure:** Vertical calendar layout featuring current day on the side in a prominent display box, and the month calendar grid on the left.
- **Design Tokens:**
  - Primary accent: Indigo / Blue (`#4f46e5` / `indigo-600`)
  - Background: Light slate (`#f8fafc` / `slate-50`)
  - Surface cards: Pure white (`#ffffff`) with subtle borders (`#e2e8f0`)
  - Typography: Sans-serif (Inter system font)

## Requirements & Gherkin Scenarios

### Requirement 1: Vertical Day Sidebar

- As a user, I want to see the currently selected day highlighted in a prominent vertical sidebar panel.
- Scenario: Initial load shows today's date in the vertical panel (Day name, large number, month, year).
- Scenario: Clicking any date on the calendar grid updates the vertical sidebar panel to reflect the selected date.

### Requirement 2: Monthly Calendar Grid & Navigation

- As a user, I want to navigate between months and view dates in a grid.
- Scenario: Clicking next/previous month chevrons changes the displayed month and year.
- Scenario: Days of the week header (Sun Mon Tue Wed Thu Fri Sat) aligns correctly with dates.

### Requirement 3: Component Dock Footer

- As a user, I want to see the Component Dock attribution footer.
- Scenario: Footer renders at the bottom linking to `https://www.componentdock.com/`.

## Verification Checklist

- [ ] App builds cleanly without warnings (`npm run build`).
- [ ] Tests pass with 100% coverage (`npm run test:coverage`).
- [ ] Vertical calendar layout matches the specified structure.
- [ ] Component Dock footer present and linked.
