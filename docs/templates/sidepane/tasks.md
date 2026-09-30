# SidePane (ColorLib Sidebar V06) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-sidepane`. Recreation name: **SidePane** (NEW name —
> the ColorLib source keeps its name "Colorlib Sidebar V06").

## Source mapping

- **ColorLib item:** "Colorlib Sidebar V06" (TEMPLATES.md line 2807; section
  "## Sidebars" area). The
  `wp/template/colorlib-sidebar-v06/` slug appears exactly ONCE in
  TEMPLATES.md.
- **Source URL:** https://colorlib.com/wp/template/colorlib-sidebar-v06/
- **Preview URL — UNREACHABLE (verified 2026-09-30):** returns 404.
  Spec is based on the TEMPLATES.md screenshot only.
- **Screenshot:** `colorlib-sidebar-v06.jpg` — shows a fixed white left sidebar
  with a green "C" logo circle, "Colorlib" text, search input, and 6 nav items
  (Home bold/active, Videos, Books, Store, Analytics, Settings). Main content
  area has light gray bg with a two-column grid of article cards, each with a
  circular avatar, bold title, and gray date text.

## Reference research (done — do not redo)

### Screenshot analysis

The template is a sidebar + content layout:
- **Sidebar (left, fixed):** White background, full height. Contains:
  1. Logo row: green (#25D366) circle with white "C" + "Colorlib" text
  2. Search input: rounded, light gray border, magnifying glass icon, placeholder "Search..."
  3. Nav list: 6 items with icons (Home=house, Videos=play-circle, Books=book, Store=shopping-bag, Analytics=pie-chart, Settings=gear). Home is bold/active.
  4. Close (X) button at top right of content area (for mobile toggle)
- **Main content (right):** Light gray (#f5f5f5) background. Two-column grid of article cards. Each card:
  - Circular avatar image (~50px)
  - Bold dark title text ("How the gut microbes you're born with affect your lifelong health")
  - Gray date text ("Posted: Dec 17, 2019")
  - Cards are repeated 8 times in the screenshot (same content)
- **Color palette:** Green accent (#25D366), white sidebar, light gray content, dark text
- **Font:** Sans-serif, likely Poppins (consistent with other sidebar templates)

### Design tokens (inferred from screenshot — no live CSS available)

| Token         | Value               | Use                                               |
| ------------- | ------------------- | ------------------------------------------------- |
| Sidebar bg    | `#fff`              | White left sidebar                                |
| Content bg    | `#f5f5f5`           | Main content area                                 |
| Brand accent  | `#25D366`           | Logo circle, active nav indicator                 |
| Ink primary   | `#212529`           | Headings, nav text                                |
| Ink secondary | `#6c757d`           | Dates, muted text                                 |
| Font family   | 'Poppins' 400/500/700 | Google Fonts link                               |
| Logo circle   | ~40px, radius 50%  | Green bg with white initial                       |
| Card avatar   | ~50px, radius 50%  | Circular article thumbnails                       |
| Nav icons     | ~20px               | lucide-react equivalents                          |
| Card title    | 16px bold           | Dark text                                         |
| Card date     | 13px normal         | Gray text                                         |

## Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/sidepane` from the simplest existing app
       (`cp -r apps/<simplest> apps/sidepane`), rename package to
       `@free-react-templates/sidepane`, add Poppins 400/500/700
       Google Fonts `<link>` in index.html, set `public/CNAME` =
       `sidepane.free.componentdock.com` + `"homepage"`. Register the
       workspace in package-lock.json.
2. [ ] Write the spec-traceable test suite FIRST (Vitest + Testing
       Library, 100% coverage): Sidebar (logo, search input, 6 nav
       items, active state on Home), ContentGrid (post cards with
       avatar + title + date, responsive 2-col → 1-col), MobileToggle
       (hamburger opens sidebar, X closes, overlay closes), Footer
       (Component Dock link), App (landmarks, document title).
3. [ ] Sidebar component: white bg, full height, fixed position on
       desktop. Logo row with green circle + "Colorlib" text. Search
       input with magnifying glass icon (lucide Search). Nav list with
       6 items, each with an icon and label. Home bold/active by
       default; clicking a nav item changes active state.
4. [ ] Content grid: light gray bg, two-column grid of article cards.
       Each card: circular avatar (picsum), bold title, gray date.
       Responsive: single column on mobile (<=768px).
5. [ ] Mobile sidebar toggle: sidebar hidden on mobile by default.
       Hamburger button visible on mobile. Clicking hamburger slides
       sidebar in. X button and overlay backdrop slide it out.
6. [ ] Footer: minimal Component Dock credit linking
       https://www.componentdock.com/.
7. [ ] Run `npm run verify:app -- sidepane` (typecheck → lint → vitest
       100% → build) and fix until green.
8. [ ] Open PR `feat/template-sidepane` → merge immediately
       (`gh pr merge --squash --delete-branch`); PR description must
       include: source URL, preview URL (unreachable), token list
       (green #25D366, white sidebar, gray content, Poppins), and
       what differs (renamed "SidePane", picsum placeholders,
       lucide icons, Component Dock footer).
9. [ ] Bookkeeping after merge: mark TEMPLATES.md line 2807 `[x]` +
       surge URL (`https://sidepane.free.componentdock.com`),
       `npm run readme:status`, push.
