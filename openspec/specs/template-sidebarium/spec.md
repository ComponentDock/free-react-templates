# Template: Sidebarium (Portfolio Sidebar Navigation)

## Purpose

Sidebarium is a single-page portfolio sidebar navigation template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Bootstrap Sidebar 05" free template (source:
https://colorlib.com/wp/template/bootstrap-sidebar-05/), built under a
DIFFERENT name (**Sidebarium**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a two-panel layout: a fixed left sidebar (royal blue
background, ~250px wide, full viewport height) containing the logo,
vertical navigation with icon prefixes, a newsletter email subscription
form, and a copyright footer; plus a main content area (white background)
with a heading and body text. A hamburger toggle icon is present near the
top-right of the sidebar for mobile/responsive collapse.

**WHAT MAKES SIDEBARIUM DISTINCT (signature behaviors):**

1. **Fixed full-height left sidebar on royal blue.** The sidebar occupies
   the full viewport height with a solid royal-blue background (estimated
   ~#4361ee from the screenshot — the original CSS was not extractable
   due to preview 404). It is NOT a floating panel or collapsible drawer
   by default — it is always visible at desktop widths.
2. **Logo + brand subtitle at sidebar top.** A large white "Portfolic"
   logo wordmark sits at the top, with a lighter-blue "Portfolio Agency"
   subtitle below it. The recreation should use a similar portfolio
   branding (the name "Portfolic" is a ColorLib artifact).
3. **Vertical navigation with icon prefixes.** Seven nav items (Home,
   About, Works, Blog, Gallery, Services, Contacts) each prefixed with
   a lucide-react icon. Items are white text on the blue background with
   vertical spacing. Active/hover state should brighten or underline.
4. **Newsletter subscription at sidebar bottom.** A "Subscribe for
   newsletter" heading in white, with an email input field (darker
   background within the blue sidebar, placeholder "Enter Email Address").
5. **Hamburger toggle for responsive sidebar.** A hamburger icon near the
   top-right of the sidebar toggles sidebar visibility on mobile viewports.
6. **Main content area with clean white background.** The main content
   sits to the right of the sidebar, with a large heading ("Sidebar #05"
   is the ColorLib artifact) and lorem ipsum body text. The content area
   has generous padding and a clean white background.

## Naming

The ColorLib source name "Bootstrap Sidebar 05" is FORBIDDEN as the app
name (and "bootstrap" must not be reused). **Sidebarium** is the new,
original name — single lowercase word, kebab-case `sidebarium`, no
collision with `apps/`, `openspec/specs/`, `docs/templates/`, or any
TEMPLATES.md name (verified: zero hits for `sidebarium` in ls apps/ or
ls openspec/specs/). Source slug: `bootstrap-sidebar-05`. Preview URL:
https://preview.colorlib.com/theme/bootstrap-sidebar-05/ (returns 404 at
time of prep — 2026-09-29 — reference is the TEMPLATES.md screenshot).

## Design reference (replication findings)

- **Original:** ColorLib "Bootstrap Sidebar 05" (page title: "Sidebar
  #05"). Listed in TEMPLATES.md under **Bootstrap Sidebars** (section
  header line ~2790; the row at line 2796 —
  `wp/template/bootstrap-sidebar-05/`). Sibling templates in the family:
  Bootstrap Sidebar 01–10 + Colorlib Sidebar V01–V10.
- **Live preview — UNREACHABLE (404, verified 2026-09-29):** The naive
  `https://preview.colorlib.com/theme/bootstrap-sidebar-05/` returns HTTP
  404 (9 bytes, "Not Found"). Fallback: TEMPLATES.md screenshot
  (`bootstrap-sidebar-170635.jpg`). No CSS tokens could be extracted from
  the live preview; all tokens are derived from the screenshot analysis.
- **Screenshot analysis (viewed 2026-09-29 via vision):**
  - Two-panel layout: fixed left sidebar + scrollable main content.
  - Sidebar: solid royal-blue background (~#4361ee), full viewport height,
    ~250px wide.
  - Logo area: "Portfolic" in large white bold sans-serif text at top,
    "Portfolio Agency" in lighter blue (~#7eb8ff) below.
  - Navigation: 7 items vertically stacked — Home (house icon), About
    (user icon), Works (briefcase icon), Blog (pen icon), Gallery
    (image icon), Services (settings icon), Contacts (mail icon). White
    text, icon prefix, ~16px font, generous vertical spacing.
  - Newsletter: "Subscribe for newsletter" in white bold ~16px, below nav.
    Email input with darker-blue background (~#3451c7), placeholder text
    "Enter Email Address", ~12px padding.
  - Footer in sidebar: "Copyright ©2019 All rights reserved | This template
    is made with by" in white ~12px at the very bottom.
  - Main content: white background, "Sidebar #05" as h1 in dark text
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
| `--color-sidebar`    | `#4361ee`                       | Royal blue sidebar background (estimated from screenshot; source CSS 404)  |
| `--color-sidebar-dark` | `#3451c7`                     | Darker blue for input backgrounds within sidebar                            |
| `--color-brand-sub`  | `#7eb8ff`                       | Lighter blue for "Portfolio Agency" subtitle                                |
| `--color-page`       | `#ffffff`                       | White main content background                                              |
| `--color-text`       | `#222`                          | Main heading text (h1 "Sidebar #05")                                       |
| `--color-text-body`  | `#666`                          | Body/paragraph text in main content                                        |
| `--color-nav-text`   | `#ffffff`                       | White navigation link text                                                 |
| `--color-footer-text`| `#ffffff` (opacity ~0.8)        | White copyright text at sidebar bottom                                     |
| `--font-body`        | 'Poppins', sans-serif           | Clean sans-serif; Google Fonts — Poppins weights 400/500/600/700           |
| `--sidebar-w`        | `250px`                         | Fixed sidebar width; full viewport height                                  |
| `--sidebar-radius`   | `0`                             | No rounded corners — flat edges                                            |
| `--nav-icon-size`    | `16px`                          | Icon size prefixing each nav item                                          |
| `--input-bg`         | `#3451c7`                       | Darker blue input field background                                         |
| `--input-radius`     | `4px`                           | Subtle rounded corners on email input                                      |
| `--input-padding`    | `12px 16px`                     | Internal padding of email input                                            |
| `--section-gap`      | `24px`                          | Vertical spacing between sidebar sections                                  |

## Requirements

### Requirement: Page shell

The system SHALL render a two-panel layout with a fixed left sidebar and a
scrollable main content area.

#### Scenario: Two-panel layout

- **GIVEN** the Sidebarium app is rendered on a desktop viewport (≥1024px)
- **THEN** a fixed left sidebar SHALL occupy 250px width with full
  viewport height and a solid royal-blue (`#4361ee`) background
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

- **GIVEN** the Sidebarium app is rendered
- **THEN** the sidebar top SHALL display a logo wordmark in large white
  bold text (~24px) reading "Portfolic" (or an appropriate portfolio
  brand name — the source uses "Portfolic" as its brand)
- **AND** below the logo, a subtitle "Portfolio Agency" SHALL render in
  lighter blue (`#7eb8ff`) at ~14px

### Requirement: Vertical navigation

The sidebar SHALL contain a vertical navigation menu with icon-prefixed items.

#### Scenario: Navigation items

- **GIVEN** the Sidebarium app is rendered
- **THEN** the sidebar SHALL contain seven navigation links in order:
  Home, About, Works, Blog, Gallery, Services, Contacts
- **AND** each link SHALL be prefixed with a lucide-react icon:
  Home → House, About → User, Works → Briefcase, Blog → PenTool,
  Gallery → Image, Services → Settings, Contacts → Mail
- **AND** all links SHALL be white text on the blue background with
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

- **GIVEN** the Sidebarium app is rendered
- **THEN** below the navigation, a "Subscribe for newsletter" heading
  SHALL render in white bold text (~16px)
- **AND** an email input field SHALL render with a darker-blue background
  (`#3451c7`), placeholder text "Enter Email Address", and subtle rounded
  corners (`border-radius: 4px`)
- **AND** the input SHALL be functional (accepts email input; submission
  is mock — no real backend required)

### Requirement: Copyright footer

The sidebar bottom SHALL display a copyright notice.

#### Scenario: Copyright text

- **GIVEN** the Sidebarium app is rendered
- **THEN** at the sidebar bottom, a copyright notice SHALL render in
  white text at reduced opacity (~0.8), ~12px, reading
  "Copyright ©2019 All rights reserved" (or similar attribution)

### Requirement: Main content area

The main content area SHALL display a heading and body text on a white
background.

#### Scenario: Content rendering

- **GIVEN** the Sidebarium app is rendered on desktop
- **THEN** the main content area SHALL display a large heading (~32px,
  bold, dark text `#222`) — the source heading "Sidebar #05" is a
  ColorLib artifact; use an appropriate heading for the portfolio context
- **AND** below the heading, body text paragraphs SHALL render in grey
  (`#666`) with comfortable line-height (~1.6)
- **AND** the content area SHALL have generous padding (~40px all sides)

### Requirement: Accessibility and semantics

The system SHALL expose accessible semantics for the navigation and form.

#### Scenario: Semantics

- **GIVEN** the Sidebarium app is rendered
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

- **GIVEN** the Sidebarium app is rendered
- **THEN** the footer (or sidebar bottom area) SHALL link to
  https://www.componentdock.com/ branded as "Component Dock"

## Verification checklist

- [ ] `npm run verify:app -- sidebarium` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] Visual diff vs the TEMPLATES.md screenshot: royal-blue fixed sidebar
      (250px, full height), white logo "Portfolic" + "Portfolio Agency"
      subtitle, 7 icon-prefixed nav items, newsletter form with darker-blue
      input, copyright footer, white main content area with heading + text.
- [ ] Behavior check: hamburger toggle opens/closes sidebar on mobile;
      nav links are interactive; newsletter form accepts input;
      focus-visible rings on all interactive elements.
- [ ] Responsive check at 768px (sidebar collapses, content fills viewport,
      hamburger visible).
- [ ] No ColorLib references in app code (provenance only in spec +
      TEMPLATES.md).
