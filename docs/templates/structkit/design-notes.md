# Structkit — design notes (replication research)

Source: ColorLib **Structure Ui Kit** —
https://colorlib.com/wp/template/structure-ui-kit/ (theme preview slug
`structure`: `https://preview.colorlib.com/theme/structure/`, HTTP 200 —
`theme/structure-ui-kit/` is 404, same quirk as the Buildex kit).
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/structure-ui-kit.jpg
Reference artifacts: `/tmp/pv-structure.html` (76,479 B DOM),
`/tmp/struct-style.css` (117,970 B theme CSS). Research date: 2026-10-11.

## Visual summary (from screenshot)

A red-dominant Material-style UI kit. The hero is a night mountain /
milky-way photograph under a heavy red→near-black gradient wash; the white
wordmark "STRUCTURE" sits in a thin white OUTLINED BOX, with a subtitle and a
small round designer-avatar credit below. A red circular scroll-down button
straddles the hero's bottom edge. Everything below is white with generous
spacing, dark charcoal headings, gray body copy, and bright red pill buttons
— the "Pick your style" row (Default / Round / ♥ With Icon / ♥ FAB / Simple)
and "Pick your size" row are the first content. Overall aesthetic: clean,
component-catalog, flat fills (no heavy shadows), pill and circle shapes
carrying the personality.

## Structure order (1:1 with preview DOM)

1. Navbar (over hero)
2. Hero (`.hero-wrap`, 800px)
3. "Basic Elements" heading band
4. `#buttons` — Buttons (styles / sizes / colors / links / disabled /
   dropdowns / block)
5. `#inputs` — Inputs (floating labels)
6. `#checkRadios` — Checkboxes, Radio Buttons, Toggle Buttons
7. Sliders
8. Badges
9. Progress bars
10. Paginations
11. `#menus` — Menu, Menu with Icons
12. `#navigations` — Navigations (colored navbar variants)
13. `#navigationTabs` — Navigation Pills, Navigation Tabs
14. `#notifications` — Notifications (4 alerts)
15. `#typography` — Typography
16. `#images` — Images (rounded / circle / raised)
17. `#javascriptsComponents` — Modals, Datetimepickers, Popovers, Tooltip
18. `#carousel` — 3-slide carousel band
19. "Completed with examples" intro
20. `#cards` — Cards Styles / with Image Round / with image / Profile
21. Footer (white, centered)

## Section-by-section fidelity notes

- **Navbar** — `navbar-dark` over the photo: brand "Structure." 20px/400
  white (recreation: "Structkit."); right side in order: "Components"
  dropdown (ion-ios-apps icon + caret → "All Components", "Documentation"),
  "Download" (cloud icon), "Premium" white CTA chip (white bg / red text =
  `.btn-white` treatment), then facebook / twitter / instagram icon links
  (`rgba(255,255,255,0.6)` icons). Mobile: "Menu" toggler with
  `aria-expanded`. Scrolled: fixed, white, `0 0 10px rgba(0,0,0,0.1)`.
- **Hero** — `.hero-wrap` `background-size: cover`, 800px; `.overlay`
  `opacity: .6; linear-gradient(to bottom, red 0%, red 44%, #1f0000 100%)`.
  Centered col-md-8: `<h1><span>Structure</span></h1>` (the span is the
  boxed outline treatment seen in the screenshot — white text + thin white
  border box), `<h4>` subtitle "Free Bootstrap 4 UI Kit on Structure
  Design." (keep same kind; paraphrase ok), `.designed` row = 50×50 round
  avatar (`images/person.jpg` → picsum `structkit-avatar`) + "Designed by:
  Peter Mendelev" — do NOT copy the person credit; use a placeholder
  designer name. Bottom: `.mouse-icon.rounded-circle.bg-danger` scroll
  button with a light down arrow (`ion-ios-arrow-round-down` → lucide
  ArrowDown), scrolls to `#buttons`.
- **Basic Elements** — plain band, `<h1>Basic Elements</h1>` left-aligned in
  the container, `pb-0` on the section.
- **Buttons** — `<h2 class="heading-section">Buttons <br><small>Pick your
  style</small></h2>` pattern (small tag = sub-label). Style row:
  `btn-primary` "Default", `btn-primary btn-round` "Round",
  `btn-round` + heart icon "With Icon", `btn-fab btn-round` icon-only
  (aria-label), `btn-link` "Simple" (transparent, red text). Sizes:
  `btn-sm` / base / `btn-lg`. Colors row: Primary `#f44336`, Success
  `#64e291` (dark text), Danger `#e63333`, Warning `#f1bc31` (dark text),
  Info `#03A9F4`, Light `#f8f9fa`, Dark `#343a40` — solid row then outline
  row (`btn-outline-*`). Links row: `btn-link` per color. Disabled row:
  `disabled` attribute kept. Dropdowns: `dropdown-toggle` buttons opening
  "Action / Another action / Something else here". Block: `btn-lg btn-block`
  info + warning samples. All buttons flat — no material drop shadow in this
  kit.
- **Inputs** — single band, "With Floating Label": floating-label form
  groups (label rises on focus/filled), `.form-control` border `#dee2e6`,
  focus border `#f44336`.
- **Checkboxes / Radios / Toggles** — labels verbatim in DOM: Unchecked /
  Checked / Disabled / "Unchecked Disabled" (disabled row), radios "Radio os
  off" [sic] / "Radio is on" / disabled — paraphrase the typo to "Radio is
  off"; toggles "Toggle is on" (ON chip) / "Toggle is Off". All React-state
  controlled.
- **Sliders** — nouislider in source → styled native `<input type="range">`;
  red thumb/track.
- **Badges** — Primary / Info / Success / Warning / Danger / **Rose**
  (pink accent). `.badge { padding: .25em .4em; font-size: 75%; font-weight:
  700; border-radius: 0.25rem }`.
- **Progress bars** — 40% / 60% / 70% "Complete" then 35% (success), 20%
  (warning), 30% (danger); labeled, determinate.
- **Paginations** — « previous + pages 1–5 + next », active page red filled
  white text; radius `0.25rem`.
- **Menus** — column 1: "Menu" list (Menu / Discover (current) / Profile /
  Settings); column 2: "Menu with Icons" (icon-prefixed Menu / Discover /
  Profile / Setting) + a "Dropdown header" menu (Action / Another action /
  Something else here / Separated link / One more separated link).
- **Navigations** — several navbar demos in kit colors (Primary / Success /
  Info / Danger / Info), each "Discover / Profile / Settings" (+ current
  markers); some open dropdowns (Action / Another action / Something else
  here); one row adds facebook/twitter/instagram icons; one includes a
  "Dropdown header" with separated links.
- **Navigation Pills / Tabs** — pills: Home / Profile / Messages (active
  pill filled `#f44336`); tabs: same three tabs switching panes of
  "Far far away, behind the word mountains…" lorem (paraphrase ok).
- **Notifications** — four solid alerts, in order Info (blue) / Success
  (green) / Warning (yellow) / Error (red `#e63333`), quirky demo copy
  ("You've got some friends nearby…", "$11.99 album…", "copyright © 2015
  in your footer…", "You screwed up the server…") — paraphrase, keep the
  same kind; dismissible (× button).
- **Typography** — H1–H6 scale ("Thinking in textures" sample headline —
  paraphrase ok), "Small Tag Header with small subtitle" (small-tag
  pattern), paragraph samples ("I will be the leader of a company…" —
  paraphrase). Headings `#2c2c2c` weight 400 line-height 1.4; body
  `#777777` 16px/1.8.
- **Images** — three examples with captions: "Rounded Image", "Circle
  Image", "Circle Raised" (circle + raised shadow), caption person name
  "Clyde Ford" → placeholder name.
- **Javascripts Components** — Modals: "Launch demo modal" → dialog with
  "Modal title" + lorem body + Close / Save changes (focus trap, overlay
  close). Datetimepickers: "Datetime picker" (native `datetime-local`).
  Popovers: On top / On right / On bottom / On left triggers. Tooltip: same
  four directions. All React state — no jQuery/magnific-popup.
- **Carousel** — band with 3 slides, each a centered `<h2>` line ("This is
  Carousel Bootstrap Enjoy Free UI Kit." / "Structure Free UI Kit." /
  "Enjoy Free UI Kit made by Structure.") + white pill "See all components"
  button. Paraphrase headlines; replace the demo brand with Structkit. The
  source band background is a photo (`images/bg_…`) — use a picsum
  placeholder with an overlay for legibility. React-state carousel with
  autoplay + next/prev.
- **Completed with examples** — heading + intro paragraph ("The kit comes
  with three pre-built pages…") — paraphrase, same kind.
- **Cards** — in order: "Cards Styles" (plain text card), "Cards with Image
  Round" (round image + "Special title treatment" + supporting text + "Go
  somewhere" button), "Cards with image" (rectangular image + "Card title" +
  supporting text), "Cards Profile" (profile card: avatar/name/role +
  actions). Radius `0.25rem`, border `rgba(0,0,0,0.125)`.
- **Footer** — `ftco-section ftco-section-2` white band, single centered
  line: "Copyright © <year> All rights reserved | This template is made with
  ♥ by Colorlib" → recreation: same copyright line + "made with ♥ by
  [Component Dock](https://www.componentdock.com/)". No source link.

## Tokens cheat-sheet (verified)

| Token | Value |
| --- | --- |
| primary (red) | `#f44336` (hover `#ea1c0d`, pressed `#d2190b`) |
| success | `#64e291` (text `#212529`, hover `#39da73`) |
| info | `#03A9F4` (hover `#0286c2`) |
| warning | `#f1bc31` (text `#212529`, hover `#e0a60f`) |
| danger | `#e63333` (hover `#cd1919`) |
| dark / light / white | `#343a40` / `#f8f9fa` / `#fff` (text `#000`) |
| heading / body / muted | `#2c2c2c` / `#777777` / `#6c757d` |
| borders | `#dee2e6`, `#e9ecef`, cards `rgba(0,0,0,0.125)` |
| hero overlay | `linear-gradient(to bottom, red 0%, red 44%, #1f0000 100%)`, 0.6 |
| font | Montserrat 300–700 (body 16px/1.8/400) |
| radii | pill `40px` (`.btn-round`), `0.25rem` (badges/pagination/cards), circles `50%` |
| section rhythm | `4em 0` (`6em 0` for footer band) |

## Deviations (document in the PR)

- Source pins `body { min-width: 992px !important }` (desktop-only);
  recreation is responsive via Tailwind breakpoints.
- Placeholder images (`picsum.photos/seed/structkit-N`), lucide-react icons,
  Google-fonts Montserrat — no assets copied.
- Demo brand "Structure." and the designer/person credits are replaced
  (wordmark "Structkit."; placeholder designer credit).
- jQuery / Bootstrap JS / owl-carousel / nouislider / datetimepicker /
  magnific-popup replaced by React state + native inputs.
