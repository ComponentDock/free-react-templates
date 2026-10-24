# Template: Bellows (Accordion & Profile Widget)

## Purpose

Recreation of ColorLib "Accordion 15" (`https://colorlib.com/wp/template/accordion-15/`), previewed at `https://preview.colorlib.com/theme/accordion-15/`.
Built with Vite, React 19, Tailwind CSS 4, and TypeScript.

## Design Tokens

- **Primary / Brand Colors**: Deep indigo/slate background (`#1f2937` / `#111827`), vibrant primary accent blue/violet (`#3b82f6` / `#6366f1`), active item highlight (`#2563eb`).
- **Font Family**: Inter, system-ui, sans-serif.
- **Card Shape & Elevation**: Rounded-xl containers with smooth accordion transitions, shadow-lg, clean padding, and crisp iconography.
- **Section Layout**: Centered widget card with vertical accordion panels (Profile, Messages, Settings, Logout), nested links, icons (User, Mail/Message, Settings, LogOut), and smooth expand/collapse states.

## Requirements

### Feature: Interactive Accordion Widget & Profile Navigation

As a user visiting the Bellows template, I want to explore collapsible profile sections, manage messages, adjust settings, and navigate tabs so I can interact with a polished dashboard widget.

#### Scenario: Expanding and collapsing accordion sections

- **GIVEN** the user is viewing the main accordion dashboard
- **WHEN** the user clicks on the "Profile" or "Messages" section header
- **THEN** the section expands smoothly to reveal its internal navigation links and content
- **AND** clicking another section collapses the previously expanded section

#### Scenario: Responsive layout and footer attribution

- **GIVEN** the user views the template on any screen size
- **THEN** the widget scales gracefully with proper centering and padding
- **AND** the footer links to `https://www.componentdock.com/` ("Component Dock")

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/bellows/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/bellows/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] Spec valid (`npm run spec:validate`)
- [ ] All sections rendered and interactive
- [ ] 100% test coverage (`npm run test:coverage`)
- [ ] Footer links to Component Dock
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

<!-- live-palette-unverified:start -->
**TOKEN-UNVERIFIED (2026-10-23)** — the demo `https://preview.colorlib.com/theme/bac/accordion-15/` paints no counterpart within 12 RGB units of these claims (the re-value threshold). Each line names the nearest painted colour and its RGB distance: the claim is a screenshot sample, **not** a measured value — build from the sheet, not this list:
- `#3b82f6` — nearest `#007bff` (d=60)
- `#6366f1` — nearest `#007bff` (d=102)
- `#2563eb` — nearest `#007bff` (d=48)
<!-- live-palette-unverified:end -->
