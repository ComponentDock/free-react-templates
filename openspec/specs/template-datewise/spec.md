# Template: Datewise (Calendar / Utility Widget — Vertical Calendar Layout)
<!-- prep-status: shipped-as=chronogrid -->
> **SHIPPED-UNDER** — the ColorLib `calendar-02` design this prep describes already
> ships as `apps/chronogrid` (<https://chronogrid.free.componentdock.com>).
> Do not scaffold `apps/datewise`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-chronogrid/spec.md`.

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

<!-- live-token-reverify:2026-10-22 -->

### Live reference restored (2026-10-22)

The prep-time note above records the preview 404. **Re-probed 2026-10-22**
the reference answers **HTTP 200**, so the live DOM and CSS are
authoritative again — CSS values are canonical over the screenshot
(`docs/replication.md`).

| artefact | URL | reading |
| --- | --- | --- |
| live page | `https://preview.colorlib.com/theme/bootstrap/calendar-02/` | HTTP 200 · 4,370 B · title `Calendar 02` |
| stylesheet | `https://preview.colorlib.com/theme/bootstrap/calendar-02/css/style.css?v=7d4a7424` | HTTP 200 · 10,994 B · sha256 `d5d1e3bf00aa` |

**Live palette** (hex × occurrences in that sheet): `#ffffff`×12,
`#000000`×4, `#212529`×3, `#dee2e6`×3, `#39cb75`×2, `#adb5bd`×1,
`#f8f9fd`×1, `#2a3246`×1, `#c9c9c9`×1.

**Low-chroma values the sheet actually uses** — `#212529`, `#dee2e6`,
`#adb5bd`, `#f8f9fd`; any sampled Tailwind grey above is an approximation of
these.

**TOKEN-UNVERIFIED** — screenshot samples with **no** counterpart in the
live sheet; do not build them from the screenshot, take the palette above:
`#4f46e5`.

## Requirements

### Requirement 1: Vertical Day Sidebar

#### Scenario: Vertical Day Sidebar

- As a user, I want to see the currently selected day highlighted in a prominent vertical sidebar panel.
- Scenario: Initial load shows today's date in the vertical panel (Day name, large number, month, year).
- Scenario: Clicking any date on the calendar grid updates the vertical sidebar panel to reflect the selected date.

### Requirement 2: Monthly Calendar Grid & Navigation

#### Scenario: Monthly Calendar Grid & Navigation

- As a user, I want to navigate between months and view dates in a grid.
- Scenario: Clicking next/previous month chevrons changes the displayed month and year.
- Scenario: Days of the week header (Sun Mon Tue Wed Thu Fri Sat) aligns correctly with dates.

### Requirement 3: Component Dock Footer

#### Scenario: Component Dock Footer

- As a user, I want to see the Component Dock attribution footer.
- Scenario: Footer renders at the bottom linking to `https://www.componentdock.com/`.

## Verification Checklist

- [ ] App builds cleanly without warnings (`npm run build`).
- [ ] Tests pass with 100% coverage (`npm run test:coverage`).
- [ ] Vertical calendar layout matches the specified structure.
- [ ] Component Dock footer present and linked.
