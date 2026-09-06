# DropGate (ColorLib Dropdown V20) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-dropgate`. Recreation name: **DropGate** (NEW name —
> the ColorLib source keeps its name "Dropdown V20").

## Source mapping

- **ColorLib item:** "Dropdown 20" (TEMPLATES.md line 775; section "## Dropdown
  Components" or similar). The `wp/template/dropdown-20/` slug appears exactly
  ONCE in TEMPLATES.md (no dup rows).
- **Source URL:** https://colorlib.com/wp/template/dropdown-20/
- **Preview URL — REACHABLE (verified 2026-09-06 by curl):**
  **`https://preview.colorlib.com/theme/bootstrap/dropdown-20/`**
  (HTTP 200). The naive `https://preview.colorlib.com/theme/dropdown-20/`
  returns 404 — the actual path includes the `bootstrap/` segment.
  **Note:** the `<title>` inside the preview reads "Dropdown #8", not
  "Dropdown V20" — the heading text should be "Dropdown #8" per the
  actual rendered DOM.
- **Preview CSS:** `css/style.css` (hand-written, Bootstrap-influenced)
  + `css/bootstrap.min.css` (Bootstrap 4.x) + `fonts/icomoon/style.css`
  (icon font — REPLACE with lucide-react, do not ship icomoon).
  Scripts: jQuery 3.3.1 + Popper.js + Bootstrap JS + Owl Carousel
  (unused by dropdown) + `js/main.js`. Fonts loaded via Cloudflare:
  Roboto 300/400/700, Poppins 300/400/500, Source Serif Pro 400/600
  (only Roboto is visibly used in the rendered page).

## Reference research (done — do not redo)

### Screenshot (`dropdown-20.jpg`, 1200×972 JPEG)

Browsed via curl + DOM analysis 2026-09-06 (matches the live page).
The screenshot shows: solid light-grey `#efefef` full-page background,
centered "Dropdown #8" heading in dark text, a "Menu" trigger link with
a downward arrow, and an expanded dropdown panel below it. The dropdown
panel is white with sharp corners (no border-radius), a pronounced drop
shadow, and contains two sections separated by a thin grey divider:

- "Help & Feedback" section (muted grey heading):
  - Dashboard icon + "Getting started"
  - Mail icon + "Help center" + orange badge "3"
  - People icon + "Contact us"
- "About" section (muted grey heading):
  - Comment icon + "Blog"
  - Lock icon + "Privacy"
  - Shield icon + "Security"
  - Playlist icon + "Terms of service"

Aesthetic: clean, utilitarian, Bootstrap-influenced. No photos or
imagery — just text items with small icons. The orange badge provides
the only accent color. **No picsum placeholders needed** (solid-color
page, icon + text items only).

### Design tokens (live stylesheet + rendered DOM, verified 2026-09-06)

| Token         | Value                                       | Use                                                                   |
| ------------- | ------------------------------------------- | --------------------------------------------------------------------- |
| Page bg       | `#efefef` (light grey)                      | Solid full-page background; no gradient/photo                         |
| Font family   | 'Roboto' 300/400/700                        | Body + headings (Roboto only visibly used; Poppins + Source Serif Pro loaded but unused) |
| Font base     | 14px, weight 300                             | Body default                                                           |
| Text ink      | `#000`                                      | Menu trigger link, dropdown item text                                  |
| Text muted    | `#b3b3b3`                                   | Section headings ("Help & Feedback", "About"), `<p>` text              |
| Dropdown trigger | "Menu" text + `keyboard_arrow_down` icon | Centered, black text, arrow rotates -180deg on open                   |
| Dropdown menu | `#fff` bg, `border-radius: 0` (sharp corners) | Shadow `0 15px 30px 0 rgba(0,0,0,0.2)`, padding `20px 0`         |
| Menu items    | 14px, padding `8px 20px`, color `#000`     | Each item has a left icon (15px margin-right)                         |
| Item hover    | bg `#f8f9fa`                                | Subtle grey highlight on hover                                        |
| Badge         | bg `#fd7e14` (orange), radius 4px, white text | 11px font, `padding: 2px 6px`, absolute right 15px, vertically centered |
| Divider       | 1px solid `#e9ecef`                         | `<hr>` between sections                                               |
| Section heading | 14px, `#b3b3b3`, `padding-left: 20px`     | Group labels above each item cluster                                  |
| Trigger arrow | `icon-keyboard_arrow_down` (icomoon)        | Inline-block, rotates -180deg when `.show` (transition 0.3s ease)    |
| Animation     | opacity 0→1, margin-top -10px→0, visibility hidden→visible | 300ms ease transition on open/close                         |
| Layout        | Bootstrap grid: `col-md-5`, centered        | `row justify-content-center text-center`                              |
| Content area  | 7rem top/bottom padding                     | `.content` class                                                       |

### Icon mapping (lucide — replace icomoon, do not ship icon font)

| Source glyph (icomoon)               | Recreation            |
| ------------------------------------- | --------------------- |
| `icon-dashboard`                      | lucide `LayoutDashboard` |
| `icon-mail_outline`                   | lucide `Mail`         |
| `icon-people`                         | lucide `Users`        |
| `icon-comment`                        | lucide `MessageSquare` |
| `icon-lock_outline`                   | lucide `Lock`         |
| `icon-security`                       | lucide `Shield`       |
| `icon-featured_play_list`             | lucide `ListMusic`    |
| `icon-keyboard_arrow_down` (trigger)  | lucide `ChevronDown`  |

## Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/dropgate` from the simplest existing app
       (`cp -r apps/<simplest> apps/dropgate`), rename package to
       `@free-react-templates/dropgate`, add Roboto 300/400/700
       Google Fonts `<link>` in index.html, set `public/CNAME` =
       `dropgate.free.componentdock.com` + `"homepage"`. Register
       the workspace in package-lock.json via `npm install` at root.

2. [ ] Write the spec-traceable test suite FIRST (Vitest + Testing
       Library, 100% coverage): DropdownMenu (trigger click toggles
       open/close, arrow rotation, click-outside closes, Escape key
       closes), TriggerButton (shows "Menu" text + ChevronDown icon,
       aria-expanded toggles), DropdownPanel (white bg, shadow, sharp
       corners, opacity animation), SectionHeading ("Help & Feedback"
       and "About" displayed, muted color), MenuItem (icon + label
       rendered, hover highlight), Badge (orange bg, white text,
       notification count "3" displayed on Help center item),
       Divider (hr between sections), Footer (Component Dock link),
       App (landmarks, document title, centered layout).

3. [ ] Layout shell: solid `#efefef` page, 7rem vertical padding,
       centered content area (Bootstrap-like `col-md-5` max-width
       with `text-center` and `justify-content-center`). No sidebar,
       no nav — just the centered component.

4. [ ] Trigger button: "Menu" text in black (Roboto 14px/300), inline
       ChevronDown icon that rotates -180deg on open (CSS transition
       0.3s ease). `aria-expanded` toggled, `aria-haspopup="true"`.

5. [ ] Dropdown panel: white bg `#fff`, `border-radius: 0` (sharp
       corners), shadow `0 15px 30px 0 rgba(0,0,0,0.2)`, padding
       `20px 0`. Positioning: below trigger, centered. Animation:
       opacity 0→1, margin-top -10px→0, visibility hidden→visible,
       300ms ease. State managed via React state (open/closed).

6. [ ] Section groups: two groups with muted headings ("Help & Feedback"
       and "About") + items list + hr divider between groups. Each
       heading: 14px, `#b3b3b3`, `padding-left: 20px`.

7. [ ] Menu items: each is a link/button with icon (lucide, 15px
       margin-right) + label text (14px, `#000`, padding `8px 20px`).
       Hover state: bg `#f8f9fa`. Items should be keyboard-focusable.

8. [ ] Badge: for "Help center" item, an absolutely-positioned badge
       (bg `#fd7e14`, white text, 11px, radius 4px, `padding: 2px 6px`,
       `right: 15px`, vertically centered). Purely visual — no
       interactive behavior needed.

9. [ ] Click-outside handling: use `useRef` + `useEffect` with
       `mousedown`/`touchstart` listener on document to close dropdown
       when clicking outside. Also close on Escape key for
       accessibility.

10. [ ] Footer: minimal Component Dock credit linking
        https://www.componentdock.com/.

11. [ ] Run `npm run verify:app -- dropgate` (typecheck → lint → vitest
        100% → build) and fix until green.

12. [ ] Open PR `feat/template-dropgate` → merge immediately
        (`gh pr merge --squash --delete-branch`); PR description must
        include: source URL, preview URL (the `/bootstrap/` one), token
        list (grey `#efefef` bg, Roboto 300, sharp-cornered white
        dropdown, orange `#fd7e14` badge, 300ms animation), and what
        differs (renamed "DropGate", Roboto via Google Fonts, lucide
        icons — no icomoon font, NO picsum needed, click-outside
        + Escape for accessibility, aria-expanded on trigger, Component
        Dock footer).

13. [ ] Bookkeeping after merge: mark TEMPLATES.md line 775 `[x]` +
        surge URL (`https://dropgate.free.componentdock.com`),
        `npm run readme:status`, push.
