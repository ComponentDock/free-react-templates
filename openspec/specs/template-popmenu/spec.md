# Template: Popmenu (Profile Dropdown Demo)

## Purpose

Popmenu is a single-page UI-component demo template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Dropdown 02" demo design
(source: https://colorlib.com/wp/template/dropdown-02/), built under a
DIFFERENT name (Popmenu) per the monorepo naming mandate, with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript. The page showcases an
avatar-triggered user profile dropdown menu — a circular avatar button that
opens a floating card menu of six icon+label actions (Messages, Favorites,
Add People, Settings, Downloads, Log Out) — a minimal, functional
component-showcase page.

## Design reference (replication findings)

- **Original:** ColorLib "Dropdown 02" — second demo in the "Bootstrap
  Dropdowns (20)" series. TEMPLATES.md has ONE copy (line 755).
- **Preview DOM analyzed:** `https://preview.colorlib.com/theme/bootstrap/dropdown-02/`
  (HTTP 200, 9.4 KB HTML). NOTE: the naive
  `https://preview.colorlib.com/theme/dropdown-02/` 404s — the dropdown
  demos live under the `/theme/bootstrap/` subpath; the ColorLib template
  page (`colorlib.com/wp/template/dropdown-02/`) links the correct preview.
  Master stylesheet `css/style.css` (221 KB, ftco-style Bootstrap 4 theme,
  fully extracted for tokens); libs: jquery, popper, bootstrap.min.js,
  ionicons (4.5.6). Google Font **Poppins** (300/400/500 loaded via
  Cloudflare @font-face block). Cross-checked against the TEMPLATES.md
  screenshot (`dropdown-02.jpg`, 1200×972, viewed in browser) — all match.
  The demo brands itself "Dropdown #02"; the recreation uses the NEW name
  **Popmenu** (brand mint `#a3f7bf`).
- **Visual design (from DOM + CSS tokens + screenshot):** clean minimalist
  component-showcase page on a white (`#fff`) background. Centered black
  heading "Dropdown #02" (28px Poppins, `.heading-section`, generous bottom
  margin `mb-5 pb-md-4`); below it a single centered column holding a
  100×100px circular avatar (cover background photo, white ring, soft
  shadow) and, below the avatar, the open profile dropdown card: a 280px
  white, borderless card with a small white caret arrow on its top center,
  soft shadow `0 10px 34px -20px rgba(0,0,0,.41)`, and six rows, each a
  60×60px mint-green (`#a3f7bf`) icon square (white 24px icon) followed by a
  12px gap and a 16px dark-gray label. Item hover flips the whole row to
  mint with white text and deepens the icon square to `#74f39e`. Screenshot
  shows the menu OPEN (default reference state) — matches CSS exactly.
  Section padding is `7em 0`; container max-width 1140px. No header, no
  hero image — the page is purely the demo section.
- **Section order (1:1, from live demo DOM):**
  1. Section (`section.ftco-section`, padding 7em 0) → `div.container`.
  2. Header row (`div.row` → `div.col-md-12.text-center`): `h2.heading-section
mb-5 pb-md-4` "Dropdown #02" (28px, #000, centered).
  3. Demo row (`div.row.justify-content-center` → `div.col-md-6.d-flex
justify-content-center`): `.btn-group` containing:
     - Trigger: `a.btn-img.img.dropdown-toggle.rounded-circle` — circular
       avatar, 100×100px, `background-image: url(images/person_1.jpg)`
       (cover), `data-toggle="dropdown"`, `aria-haspopup="true"`,
       `aria-expanded="false"`.
     - `.dropdown-menu` (280px, centered under avatar via `left: 50%` +
       `translateX(-50%)`, `margin-top: 120px`, white caret `::after`
       triangle on top center): six `a.dropdown-item.d-flex.align-items-center`,
       each with `div.icon` (60×60px, bg `#a3f7bf`, `mr-3`) wrapping an
       ionicons span (24px, white) + label, in order:
       1. Messages (`ion-ios-mail`)
       2. Favorites (`ion-ios-heart`)
       3. Add People (`ion-ios-person-add`)
       4. Settings (`ion-ios-settings`)
       5. Downloads (`ion-ios-cloud-download`)
       6. Log Out (`ion-ios-power`)
  4. (Monorepo addition, source has none) minimal footer with the mandatory
     Component Dock credit link — see conventions.md.

## Design tokens (from the reference)

| Token                 | Value                                                                                                                                                                                                                                                      | Source                                                                 |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| Brand mint (primary)  | `#a3f7bf`                                                                                                                                                                                                                                                  | `.icon` bg, `.dropdown-item:hover` bg, `a` color                       |
| Brand mint hover/dark | `#74f39e`                                                                                                                                                                                                                                                  | `.dropdown-item:hover .icon` bg                                        |
| Icon color            | `#fff`, 24px                                                                                                                                                                                                                                               | `.icon span` (ionicons replaced by lucide)                             |
| Page background       | `#fff`                                                                                                                                                                                                                                                     | `body` background (screenshot's light-gray frame is ui-preview chrome) |
| Heading color         | `#000`                                                                                                                                                                                                                                                     | `.heading-section` (28px, Poppins)                                     |
| Item text             | `rgba(0,0,0,.7)`, 16px, weight 400, padding-right 30px                                                                                                                                                                                                     | `.dropdown-item` (scoped under `.btn-group .dropdown-menu`)            |
| Item hover/active     | bg `#a3f7bf`, text `#fff`                                                                                                                                                                                                                                  | `.dropdown-item:hover/:focus`                                          |
| Font family           | `"Poppins", Arial, sans-serif` (weights 300/400/500 loaded)                                                                                                                                                                                                | @font-face block + body                                                |
| Avatar                | 100×100px, `border-radius: 50%`, cover image, white ring, shadow `0 10px 34px -20px rgba(0,0,0,.41)`                                                                                                                                                       | `.btn-img`, `.rounded-circle`, `.img`, screenshot                      |
| Icon circle           | 60×60px, bg `#a3f7bf`, gap `mr-3` (12px) to label                                                                                                                                                                                                          | `.btn-group .dropdown-menu .dropdown-item .icon`                       |
| Menu card             | width 280px, bg `#fff`, border none, padding 0, shadow `0 10px 34px -20px rgba(0,0,0,.41)`, centered under avatar (`left: 50%` + `translateX(-50%)`), `margin-top: 120px`, white caret triangle on top center (`::after`, `border-width 0 .7em .8em .7em`) | `.btn-group .dropdown-menu` + `::before/::after`                       |
| Section rhythm        | `7em 0` padding; container max-width 1140px                                                                                                                                                                                                                | `.ftco-section`, `.container`                                          |

## Requirements

### Requirement: Page composition

The system SHALL render a single-page demo with the demo content in a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Popmenu app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL render the demo section inside the main landmark
- **AND** the document title SHALL be "Popmenu — Profile Dropdown Demo"

### Requirement: Section heading

The system SHALL render the page heading centered at the top of the section,
mirroring the reference heading "Dropdown #02".

#### Scenario: Page heading

- **GIVEN** the page is rendered
- **WHEN** the demo section loads
- **THEN** a level-2 heading SHALL be visible, centered, with the text
  "Dropdown #02"
- **AND** the heading SHALL use the brand font (Poppins), black color, and
  a generous bottom margin (mb-5 + pb-md-4 equivalent)

### Requirement: Avatar trigger

The system SHALL render the circular avatar that opens the dropdown, styled
like the reference (100px circle, cover photo, white ring, soft shadow).

#### Scenario: Avatar renders as the trigger

- **GIVEN** the demo section is rendered
- **WHEN** the avatar area loads
- **THEN** a circular avatar SHALL be visible, 100×100px, rounded-full, with
  a cover background image (picsum placeholder, seed per template), a white
  ring, and the reference soft shadow
- **AND** it SHALL be a button with `aria-haspopup="menu"` and dynamic
  `aria-expanded` (menu closed → `false`)

### Requirement: Dropdown menu behavior

The system SHALL open the profile menu on avatar click, close it on outside
click, Escape, or item selection, and keep only one menu open at a time.

#### Scenario: Open and close the menu

- **GIVEN** the avatar trigger with `aria-haspopup="menu"`
- **WHEN** the user clicks the avatar
- **THEN** the menu SHALL open, centered below the avatar (with the small
  white caret arrow on its top center, per the reference)
- **AND** `aria-expanded` SHALL become `true`
- **WHEN** the user clicks outside the menu or presses Escape
- **THEN** the menu SHALL close and `aria-expanded` SHALL return to `false`

#### Scenario: Selecting an item closes the menu

- **GIVEN** the menu is open
- **WHEN** the user activates any menu item
- **THEN** the menu SHALL close (the demo items are navigation placeholders —
  no destination required, but closing is required)

### Requirement: Menu items

The system SHALL render the six reference items in order, each as a
mint icon circle (60×60px, white lucide icon) plus a 16px dark-gray label,
mirroring the reference labels and icon kinds.

#### Scenario: Six items in order

- **GIVEN** the dropdown menu is open
- **THEN** it SHALL contain, in order: Messages, Favorites, Add People,
  Settings, Downloads, Log Out
- **AND** each item SHALL pair a 60×60px mint (`#a3f7bf`) icon circle with a
  white lucide icon (Mail, Heart, UserPlus, Settings, Download/CloudDownload,
  Power respectively) and the label text beside it

#### Scenario: Hover state matches reference

- **GIVEN** any menu item
- **WHEN** it is hovered or focused
- **THEN** the item row SHALL turn mint (`#a3f7bf`) with white text
- **AND** its icon circle SHALL deepen to `#74f39e`

### Requirement: Accessibility

The system SHALL expose dropdown semantics to assistive technology.

#### Scenario: ARIA attributes

- **GIVEN** the avatar trigger and menu
- **THEN** the trigger SHALL have `aria-haspopup="menu"` and a dynamic
  `aria-expanded` attribute
- **AND** the menu SHALL be `role="menu"` with `role="menuitem"` items
- **AND** items SHALL be reachable and operable by keyboard (focus-visible
  rings on hover/focus states)

### Requirement: Footer

The system SHALL include the mandatory monorepo footer crediting Component
Dock (the reference demo has no footer — this is a repo convention).

#### Scenario: Component Dock credit

- **GIVEN** the page is rendered
- **WHEN** the footer loads
- **THEN** a footer SHALL be present in the contentinfo landmark
- **AND** it SHALL link to `https://www.componentdock.com/` ("Component
  Dock") and never reference ColorLib

## Verification checklist

- [ ] `apps/popmenu` exists with package name `@free-react-templates/popmenu`
- [ ] `vite.config.ts` registers `injectUiSource()` (see docs/conventions.md)
- [ ] Brand mint `#a3f7bf` / hover `#74f39e` defined in `@theme`; Poppins
      Google Font `<link>` in index.html
- [ ] Section order matches the reference 1:1 (centered heading → avatar
      trigger + profile dropdown menu → footer)
- [ ] Menu opens centered below the avatar with the white caret arrow;
      closes on outside click / Escape / item select; one open at a time
- [ ] Six items in order with mint icon circles + white lucide icons; hover
      flips row to mint with `#74f39e` icon circles
- [ ] ARIA: `aria-haspopup`, dynamic `aria-expanded`, `role="menu"` /
      `menuitem`; 100% coverage on all interaction scenarios
- [ ] Per-app gate passes: `scripts/verify-app.sh popmenu` (typecheck +
      lint + 100% coverage tests + build)
- [ ] Full gate passes on merge (CI `npm run gate`), nightly sweep green
- [ ] TEMPLATES.md: mark line 755 (Dropdown 02) `[~]` → `[x]` + Surge URL +
      homepage after merge
- [ ] `npm run readme:status` regenerates README Templates status table after merge
- [ ] PR description states: source template (ColorLib Dropdown 02), preview
      URL, design tokens, what differs (rename, lucide icons, picsum avatar,
      added Component Dock footer)
