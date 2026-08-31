# Chronoboard — Implementation Tasks & Design Notes

## Source

- ColorLib: **Calendar 19** (`https://colorlib.com/wp/template/calendar-19/`)
- Preview: `https://preview.colorlib.com/theme/calendar-19/` (unreachable at prep)
- Screenshot: `https://colorlib.com/wp/wp-content/uploads/sites/2/calendar-19.jpg`

## New Name

**Chronoboard** (`apps/chronoboard`, package `@free-react-templates/chronoboard`)

## Section Structure (in order)

1. **Calendar Toolbar** (top)
   - Month title (left): "February 2020" — h2, 1.5rem, dark slate #2c3e50
   - Today button (right): light gray, flat, "today" text
   - Prev/Next buttons: dark gray, chevron icons (lucide-react: `ChevronLeft`, `ChevronRight`)

2. **Month Grid** (main area)
   - Day header row: Sun–Sat, medium gray text #495057, light gray bg #f8f9fa
   - 6 week rows, each 106px fixed height
   - Current month dates: dark #212529
   - Other-month dates: muted #adb5bd, cell bg #f8f9fa
   - Today cell: pale yellow highlight #fff3cd
   - Grid borders: #dee2e6

3. **Events** (rendered inside cells)
   - All-day: full-width pill, brand #e74c3c, white text, 4px radius
   - Multi-day: spans cells, same styling
   - Timed: shows time (e.g. "7a") + title, same pill
   - Repeating: separate pill per occurrence
   - Overflow: "+N more" link → popover with full list
   - External links: render as `<a target="_blank">`

4. **Footer**
   - "Made with Component Dock" → `https://www.componentdock.com/`

## Design Fidelity Notes

| Aspect          | Source                       | Recreation Notes                                                                                                                   |
| --------------- | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Font            | Roboto (Google Fonts)        | `<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">` in `index.html` |
| Brand color     | #e74c3c                      | Define in `index.css` @theme as `--color-brand`; use via `bg-brand`, `text-white`                                                  |
| Toolbar buttons | FullCalendar default         | Recreate with Tailwind; replace icon font with lucide-react                                                                        |
| Grid            | FullCalendar daygrid         | Use `@fullcalendar/daygrid`; customize via `slotEventOverlap`, `eventDisplay`, `dayCellContent`                                    |
| Events          | FullCalendar event rendering | Use `eventContent` for custom pill rendering (time + title)                                                                        |
| Overflow        | FullCalendar `.fc-more`      | Use `moreLinkClick: 'popover'` + custom popover content                                                                            |
| Responsive      | FullCalendar auto            | Toolbar: `fc-toolbar-chunk` flex-wrap on mobile; grid: `overflow-x-auto` on narrow                                                 |
| Icons           | FullCalendar icon font       | **Do not use** — replace with `lucide-react` ChevronLeft/Right                                                                     |

## Technical Approach

### Packages

- `@fullcalendar/react` — React wrapper
- `@fullcalendar/daygrid` — month view
- `@fullcalendar/interaction` — click/drag (for future)
- `@fullcalendar/timegrid` — timed event rendering (week/day views if added later)
- `@fullcalendar/list` — list view (optional mobile fallback)

### Components (apps/chronoboard/src/components/)

- `CalendarToolbar.tsx` — custom toolbar (replaces FullCalendar default for full styling control)
- `EventPill.tsx` — reusable event pill (all-day, timed, multi-day variants)
- `EventPopover.tsx` — "+N more" popover content
- `ChronoboardCalendar.tsx` — main composition, FullCalendar config

### FullCalendar Config

```ts
const calendarOptions = {
  initialView: 'dayGridMonth',
  headerToolbar: false, // we render custom toolbar
  height: 'auto',
  fixedWeekCount: true, // always 6 weeks
  eventDisplay: 'block', // custom via eventContent
  eventContent: renderEventContent, // our EventPill
  moreLinkClick: 'popover',
  eventClick: handleEventClick, // for external links
  datesSet: handleDatesSet, // update toolbar title
  // ... design token overrides via CSS variables
}
```

### State

- `currentDate` state synced with FullCalendar `navigate` calls
- Events: static demo data matching screenshot (can be props later)

## Tasks (TDD Order)

### Phase 1: Setup & Toolbar

- [ ] Create `apps/chronoboard` from template (copy simplest existing app)
- [ ] `npm install` at root to register workspace
- [ ] Add FullCalendar packages to `apps/chronoboard/package.json`
- [ ] Add Roboto Google Font link to `index.html`
- [ ] Define design tokens in `src/index.css` @theme
- [ ] Write `CalendarToolbar.test.tsx` (renders month title, buttons, clicks navigate)
- [ ] Implement `CalendarToolbar.tsx`

### Phase 2: Calendar Grid + Events

- [ ] Write `ChronoboardCalendar.test.tsx` (mounts FullCalendar, checks grid structure)
- [ ] Implement `ChronoboardCalendar.tsx` with FullCalendar config
- [ ] Write `EventPill.test.tsx` (renders all-day, timed, multi-day variants)
- [ ] Implement `EventPill.tsx`
- [ ] Add static demo events matching screenshot exactly

### Phase 3: Popover + Overflow

- [ ] Write `EventPopover.test.tsx`
- [ ] Implement `EventPopover.tsx` (FullCalendar popover integration)
- [ ] Verify "+N more" appears on Feb 12 (6+ events)

### Phase 4: Responsive + A11y

- [ ] Test mobile toolbar stacking (CSS flex-wrap)
- [ ] Test grid horizontal scroll on narrow
- [ ] Verify ARIA labels on toolbar buttons
- [ ] Verify keyboard navigation (FullCalendar built-in + custom toolbar)

### Phase 5: Footer + Polish

- [ ] Add footer with Component Dock link
- [ ] Verify no ColorLib strings in app code
- [ ] Verify placeholder images use picsum.photos (if any — calendar may not need images)
- [ ] Run full test suite, ensure 100% coverage
- [ ] Build + verify

## Verification Commands

```bash
# From repo root
cd /root/free-react-templates-p3
npm run verify:app chronoboard  # per-app gate (typecheck + lint + test:coverage + build + knip + fallow)
```

## Spec Location

`openspec/specs/template-chronoboard/spec.md`

## Next Template to Prep

After Chronoboard: **Calendar 20** (slug `calendar-20`) — next `- [ ]` in TEMPLATES.md
