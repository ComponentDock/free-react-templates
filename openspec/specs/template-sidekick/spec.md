# Template: Sidekick (Sidebar Navigation Layout)

## Purpose

Sidekick is a single-page sidebar navigation template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Bootstrap Sidebar 06" free template (source:
https://colorlib.com/wp/template/bootstrap-sidebar-06/), built under a
DIFFERENT name (**Sidekick**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a two-panel layout: a fixed left sidebar (dark navy
background, ~280px wide, full viewport height) containing the logo,
vertical navigation with icon prefixes, a newsletter email subscription
form, and a copyright footer; plus a main content area (white background)
with a heading and body text. A hamburger toggle icon is present for
mobile/responsive sidebar collapse.

**WHAT MAKES SIDEKICK DISTINCT (signature behaviors):**

1. **Fixed full-height left sidebar on dark navy.** The sidebar occupies
   the full viewport height with a solid dark-navy background (estimated
   ~#1a1f36 from the screenshot — the original CSS was not extractable
   due to preview 404). It is NOT a floating panel or collapsible drawer
   by default — it is always visible at desktop widths.
2. **Logo + brand subtitle at sidebar top.** A white "Sidekick" logo
   wordmark sits at the top, with a lighter subtitle below it. The
   recreation should use a similar branding (the source name is a
   ColorLib artifact).
3. **Vertical navigation with icon prefixes.** Six nav items (Home,
   About, Services, Portfolio, Blog, Contact) each prefixed with a
   lucide-react icon. Items are white text on the dark background with
   vertical spacing. Active/hover state should brighten or underline.
4. **Newsletter subscription at sidebar bottom.** A "Subscribe for
   newsletter" heading in white, with an email input field (darker
   background within the sidebar, placeholder "Enter Email Address").
5. **Hamburger toggle for responsive sidebar.** A hamburger icon near
   the top-right of the sidebar toggles sidebar visibility on mobile
   viewports.
6. **Main content area with clean white background.** The main content
   sits to the right of the sidebar, with a large heading ("Sidebar #06"
   is the ColorLib artifact) and lorem ipsum body text. The content area
   has generous padding and a clean white background.

## Naming

The ColorLib source name "Bootstrap Sidebar 06" is FORBIDDEN as the app
name (and "bootstrap" must not be reused). **Sidekick** is the new,
original name — single lowercase word, kebab-case `sidekick`, no
collision with `apps/`, `openspec/specs/`, `docs/templates/`, or any
TEMPLATES.md name (verified: zero hits for `sidekick` in ls apps/ or
ls openspec/specs/). Source slug: `bootstrap-sidebar-06`. Preview URL:
https://preview.colorlib.com/theme/bootstrap-sidebar-06/ (returns 404 at
time of prep — 2026-09-30 — reference is the TEMPLATES.md screenshot).

## Design reference (replication findings)

- **Original:** ColorLib "Bootstrap Sidebar 06" (page title: "Sidebar
  #06"). Listed in TEMPLATES.md under **Bootstrap Sidebars** (section
  header line ~2790; the row at line 2797 —
  `wp/template/bootstrap-sidebar-06/`). Sibling templates in the family:
  Bootstrap Sidebar 01–10 + Colorlib Sidebar V01–V10.
- **Live preview — UNREACHABLE (404, verified 2026-09-30):** The naive
  `https://preview.colorlib.com/theme/bootstrap-sidebar-06/` returns HTTP
  404 (9 bytes, "Not Found"). Fallback: TEMPLATES.md screenshot
  (`bootstrap-sidebar-170649.jpg`). No CSS tokens could be extracted from
  the live preview; all tokens are derived from the screenshot analysis.
- **Screenshot analysis (viewed 2026-09-30 via TEMPLATES.md):**
  - Two-panel layout: fixed left sidebar + scrollable main content.
  - Sidebar: solid dark-navy background (~#1a1f36), full viewport height,
    ~280px wide.
  - Logo area: "Sidebar #06" style branding in large white bold sans-serif
    text at top, with a lighter-blue subtitle below.
  - Navigation: 6 items vertically stacked — Home (house icon), About
    (user icon), Services (briefcase icon), Portfolio (image icon), Blog
    (pen icon), Contact (mail icon). White text, icon prefix, ~16px font,
    generous vertical spacing.
  - Newsletter: "Subscribe for newsletter" in white bold ~16px, below nav.
    Email input with darker background, placeholder text "Enter Email
    Address", ~12px padding.
  - Footer in sidebar: "Copyright ©2019 All rights reserved | This template
    is made with by" in white ~12px at the very bottom.
  - Main content: white background, "Sidebar #06" as h1 in dark text
    (~#222), two paragraphs of lorem ipsum in grey (~#666), ~40px padding.
  - Hamburger icon: three horizontal lines, white, positioned near the
    top-right of the sidebar, likely toggling responsive collapse.
  - Typography: clean sans-serif (likely Montserrat or similar system
    sans-serif from the ColorLib CSS variables).
  - No imagery/photos in the template — pure navigation + text layout.
  - No gradients, no shadows, no rounded corners — flat/clean aesthetic.

## Design tokens

| Token                | Value                           | Notes                                                                      |
| -------------------- | ------------------------------- | -------------------------------------------------------------------------- |
| `--color-sidebar`    | `#1a1f36`                       | Dark navy sidebar background (estimated from screenshot; source CSS 404)  |
| `--color-sidebar-dark` | `#141829`                     | Darker navy for input backgrounds within sidebar                            |
| `--color-brand-sub`  | `#7c8ab8`                       | Lighter muted blue for subtitle text                                        |
| `--color-page`       | `#ffffff`                       | White main content background                                              |
| `--color-text`       | `#222`                          | Main heading text (h1 "Sidebar #06")                                       |
| `--color-text-body`  | `#666`                          | Body/paragraph text in main content                                        |
| `--color-nav-text`   | `#ffffff`                       | White navigation link text                                                 |
| `--color-footer-text`| `#ffffff` (opacity ~0.8)        | White copyright text at sidebar bottom                                     |
| `--font-body`        | 'Poppins', sans-serif           | Clean sans-serif; Google Fonts — Poppins weights 400/500/600/700           |
| `--sidebar-w`        | `280px`                         | Fixed sidebar width; full viewport height                                  |
| `--sidebar-radius`   | `0`                             | No rounded corners — flat edges                                            |
| `--nav-icon-size`    | `16px`                          | Icon size prefixing each nav item                                          |
| `--input-bg`         | `#141829`                       | Darker navy input field background                                         |
| `--input-radius`     | `4px`                           | Subtle rounded corners on email input                                      |
| `--input-padding`    | `12px 16px`                     | Internal padding of email input                                            |
| `--section-gap`      | `24px`                          | Vertical spacing between sidebar sections                                  |

## Requirements

### Requirement: Page shell

The system SHALL render a two-panel layout with a fixed left sidebar and a
scrollable main content area.

#### Scenario: Two-panel layout

- **GIVEN** the Sidekick app is rendered on a desktop viewport (≥1024px)
- **THEN** a fixed left sidebar SHALL occupy 280px width with full
  viewport height and a solid dark-navy (`#1a1f36`) background
- **AND** a main content area SHALL render to the right of the sidebar
  with a white (`#ffffff`) background, filling the remaining viewport width
- **AND** the page font SHALL be Poppins (400/500/600/700 from Google
  Fonts), base 16px, `#222`

#### Scenario: Responsive sidebar collapse

- **GIVEN** a viewport at or below 768px
- **THEN** the sidebar SHALL collapse/hide off-screen (or overlay as a
  drawer) and a hamburger toggle icon SHALL be visible
- **WHEN** the user clicks the hamburger toggle
- **THEN** the sidebar SHALL slide in or overlay from the left

### Requirement: Sidebar logo and brand

The sidebar SHALL display a logo wordmark and brand subtitle at the top.

#### Scenario: Logo rendering

- **GIVEN** the Sidekick app is rendered
- **THEN** the sidebar top SHALL display a logo wordmark in large white
  bold text (~24px) reading "Sidekick" (or an appropriate brand name —
  the source uses a generic sidebar branding)
- **AND** below the logo, a subtitle "Sidebar Navigation" SHALL render in
  lighter muted blue (`#7c8ab8`) at ~14px

### Requirement: Vertical navigation

The sidebar SHALL contain a vertical navigation menu with icon-prefixed items.

#### Scenario: Navigation items

- **GIVEN** the Sidekick app is rendered
- **THEN** the sidebar SHALL contain six navigation links in order:
  Home, About, Services, Portfolio, Blog, Contact
- **AND** each link SHALL be prefixed with a lucide-react icon:
  Home → House, About → User, Services → Briefcase, Portfolio → Image,
  Blog → PenTool, Contact → Mail
- **AND** all links SHALL be white text on the dark-navy background with
  consistent vertical spacing (~16px between items)
- **AND** links SHALL be clickable (anchor or button behavior; the
  source is a static sidebar nav)

#### Scenario: Hover/active states

- **GIVEN** a navigation link is rendered
- **WHEN** the user hovers over the link
- **THEN** the link text SHALL brighten, underline, or show a background
  highlight to indicate interactivity

### Requirement: Newsletter subscription

The sidebar SHALL contain a newsletter subscription section below the
navigation.

#### Scenario: Newsletter form

- **GIVEN** the Sidekick app is rendered
- **THEN** below the navigation, a "Subscribe for newsletter" heading
  SHALL render in white bold text (~16px)
- **AND** an email input field SHALL render with a darker-navy background
  (`#141829`), placeholder text "Enter Email Address", and subtle rounded
  corners (`border-radius: 4px`)
- **AND** the input SHALL be functional (accepts email input; submission
  is mock — no real backend required)

### Requirement: Copyright footer

The sidebar bottom SHALL display a copyright notice.

#### Scenario: Copyright text

- **GIVEN** the Sidekick app is rendered
- **THEN** at the sidebar bottom, a copyright notice SHALL render in
  white text at reduced opacity (~0.8), ~12px, reading
  "Copyright ©2019 All rights reserved" (or similar attribution)

### Requirement: Main content area

The main content area SHALL display a heading and body text on a white
background.

#### Scenario: Content rendering

- **GIVEN** the Sidekick app is rendered on desktop
- **THEN** the main content area SHALL display a large heading (~32px,
  bold, dark text `#222`) — the source heading "Sidebar #06" is a
  ColorLib artifact; use an appropriate heading for the sidebar context
- **AND** below the heading, body text paragraphs SHALL render in grey
  (`#666`) with comfortable line-height (~1.6)
- **AND** the content area SHALL have generous padding (~40px all sides)

### Requirement: Accessibility and semantics

The system SHALL expose accessible semantics for the navigation and form.

#### Scenario: Semantics

- **GIVEN** the Sidekick app is rendered
- **THEN** the sidebar navigation SHALL use `<nav>` with `aria-label`
  (e.g. "Main navigation")
- **AND** each nav link SHALL be an `<a>` element with accessible text
  (icon links SHALL have `aria-label`)
- **AND** the newsletter form SHALL use a `<form>` with a labeled email
  input (`<label htmlFor>` or `aria-label`)
- **AND** the hamburger toggle SHALL have `aria-label` and `aria-expanded`
  attributes
- **AND** visible focus-visible rings SHALL appear on all interactive
  elements (links, inputs, button)

### Requirement: Footer

The system SHALL include the required attribution footer.

#### Scenario: Component Dock credit

- **GIVEN** the Sidekick app is rendered
- **THEN** the footer (or sidebar bottom area) SHALL link to
  https://www.componentdock.com/ branded as "Component Dock"

## Verification checklist

- [ ] `npm run verify:app -- sidekick` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] Visual diff vs the TEMPLATES.md screenshot: dark-navy fixed sidebar
      (280px, full height), white logo "Sidekick" + "Sidebar Navigation"
      subtitle, 6 icon-prefixed nav items, newsletter form with darker-navy
      input, copyright footer, white main content area with heading + text.
- [ ] Behavior check: hamburger toggle opens/closes sidebar on mobile;
      nav links are interactive; newsletter form accepts input;
      focus-visible rings on all interactive elements.
- [ ] Responsive check at 768px (sidebar collapses, content fills viewport,
      hamburger visible).
- [ ] No ColorLib references in app code (provenance only in spec +
      TEMPLATES.md).
