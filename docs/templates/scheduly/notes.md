# Scheduly — Replication Task Outline & Design Notes
<!-- prep-status: shipped-as=timely -->
> **SHIPPED-UNDER** — the ColorLib `calendar-09` design this prep describes already
> ships as `apps/timely` (<https://timely.free.componentdock.com>).
> Do not scaffold `apps/scheduly`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-timely/spec.md`.

<!-- ref-reverify:2026-10-22 -->

> **Reference re-verified live 2026-10-22** —
> `https://preview.colorlib.com/theme/bootstrap/calendar-09/` answers HTTP
> 200 (8,117 B; `style.css` 23,693 B, sha256 `48dbc60cd528`). Any "preview
> 404 / design from screenshot" note further down is **superseded**: take
> CSS values from the live sheet (`docs/replication.md`); the screenshot
> stays the layout target.

## Overview

- **Source Template**: ColorLib Calendar 09 (`https://colorlib.com/wp/template/calendar-09/`)
- **New App Name**: `scheduly` (`@free-react-templates/scheduly`)
- **Reference**: Screenshot analysis (live preview 404). Clean modern enterprise calendar layout with month grid, sidebar event list, and scheduling controls.

## Section Structure (Top to Bottom)

1. **Header / Navigation**: App brand ("Scheduly"), Month/Year display, view switch (Month / Week / Day), Add Event button, User profile avatar.
2. **Main Layout**:
   - Left / Main Area: Interactive Month Calendar Grid (Days Sun-Sat, date cells with event pills).
   - Right Sidebar: Mini calendar widget, Upcoming Events list with time badges, Category filters.
3. **Footer**: Copyright, quick links, and mandatory attribution link to `https://www.componentdock.com/` ("Component Dock").

## Design Notes & Token mapping

- Tailwind CSS 4 utility classes matching indigo accent (`indigo-600`), neutral gray borders (`gray-200`), and clean surface styling.
- Lucide React icons for navigation chevrons, calendar, plus, clock, and filter icons.
- Fully interactive state for month navigation, event adding, and view toggling.
