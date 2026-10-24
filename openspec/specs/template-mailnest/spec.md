# Template: Mailnest (Contact Form)
<!-- prep-status: shipped-as=reachout -->
> **SHIPPED-UNDER** — the ColorLib `contact-form-16` design this prep describes already
> ships as `apps/reachout` (<https://reachout.free.componentdock.com>).
> Do not scaffold `apps/mailnest`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-reachout/spec.md`.

## Purpose

Recreation of ColorLib **Contact Form 16** — a minimalist two-column contact
page with an illustration and heading on the left and a clean form with
rounded input fields on the right.

- **Source slug:** `contact-form-16`
- **Source URL:** https://colorlib.com/wp/template/contact-form-16/
- **Preview URL:** https://preview.colorlib.com/theme/contact-form-16/ (404 at
  time of prep — design tokens extracted from screenshot)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

<!-- ref-reverify:2026-10-22 -->

## Live reference restored (2026-10-22)

The prep recorded this ColorLib preview as unreachable, so its tokens were
read off the TEMPLATES.md screenshot and the docs brief says "screenshot
only". **Re-probed 2026-10-22** the reference answers **HTTP 200**, so the
live DOM and CSS are authoritative for token values — `docs/replication.md`:
*CSS values are canonical over screenshots*. The screenshot stays the layout
target.

| artefact | URL | reading |
| --- | --- | --- |
| live page | `https://preview.colorlib.com/theme/bootstrap/contact-form-16/` | HTTP 200 · 2,963 B · title `Contact Form #6` |
| stylesheet | `https://preview.colorlib.com/theme/bootstrap/contact-form-16/css/style.css?v=5d516f57` | HTTP 200 · 13,502 B · sha256 `b9ed59ff092b` |

**Live palette** (hex × occurrences across the sheets): `#ccda46`×4,
`#b7c628`×2.

**TOKEN-NOT-IN-SHEET** — chromatic values this prep's docs state that the
live sheets do not paint (a hover/state shade may be inline or JS-driven;
verify before building from it): `#5b4aff`.

## Requirements

### Requirement: Page layout

The page renders a centered two-column layout on a white background with no
visible navbar.

#### Scenario: Two-column layout rendered

- **WHEN** I visit the Mailnest page
- **THEN** I see a centered two-column layout with the left column containing
  an illustration and text, and the right column containing a contact form

#### Scenario: White background

- **WHEN** I visit the Mailnest page
- **THEN** the page background is white

### Requirement: Left column — illustration and heading

The left column contains a large bold heading, a short subtext paragraph,
and a decorative illustration.

#### Scenario: Heading text

- **WHEN** I visit the Mailnest page
- **THEN** I see the heading "Let's talk about everything!" in large bold
  sans-serif text

#### Scenario: Subtext below heading

- **WHEN** I visit the Mailnest page
- **THEN** I see a short paragraph below the heading (e.g. "Lorem ipsum dolor
  sit amet, consectetur adipisicing elit. Voluptas debitis, fugit natus?")

#### Scenario: Decorative illustration

- **WHEN** I visit the Mailnest page
- **THEN** I see an illustration below the subtext showing a person holding an
  envelope with decorative plant and geometric elements

#### Scenario: Accent color on illustration

- **WHEN** I visit the Mailnest page
- **THEN** the illustration uses blue/indigo accent elements (location pin,
  envelope details)

### Requirement: Contact form

The right column contains a form with rounded input fields and a dark submit
button.

#### Scenario: All form fields present

- **WHEN** I visit the Mailnest page
- **THEN** I see a "Your name" input, an "Email" input, a "Subject" input,
  a "Write your message" textarea, and a "Send Message" button

#### Scenario: Name field

- **WHEN** I visit the Mailnest page
- **THEN** the first input field has placeholder text "Your name"

#### Scenario: Email field

- **WHEN** I visit the Mailnest page
- **THEN** the second input field has placeholder text "Email"

#### Scenario: Subject field

- **WHEN** I visit the Mailnest page
- **THEN** the third input field has placeholder text "Subject"

#### Scenario: Message textarea

- **WHEN** I visit the Mailnest page
- **THEN** I see a textarea with placeholder text "Write your message"

#### Scenario: Send Message button

- **WHEN** I visit the Mailnest page
- **THEN** I see a "Send Message" button with a dark background and white text

#### Scenario: Rounded input style

- **WHEN** I visit the Mailnest page
- **THEN** all form inputs have a light gray background, no visible border,
  and rounded corners

### Requirement: Footer

The page footer links to Component Dock.

#### Scenario: Component Dock link

- **WHEN** I visit the Mailnest page
- **THEN** the footer contains a link to https://www.componentdock.com/
- **AND** the link text references Component Dock

## Verification checklist

- [ ] `npm run verify:app -- mailnest` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] All 14 scenarios above are covered by colocated tests
      (query by role/label; test names mirror the scenario names):
      - Page layout
      - Left column — illustration and heading
      - Contact form
      - Footer
- [ ] Sections render in the order listed in the requirements above,
      with no console errors on load.
- [ ] Responsive check at 375 / 768 / 1280px: no horizontal overflow,
      nav collapses to the mobile toggle, grids reflow.
- [ ] Design tokens from the reference are applied via the Tailwind
      theme (brand color, font, radii) — no hard-coded hex in sections.
- [ ] No ColorLib name, domain or URL in any app file or filename —
      provenance stays in this spec, TEMPLATES.md and the PR.
- [ ] Footer links https://www.componentdock.com/ ("Component Dock").
- [ ] Page layout — I see a centered two-column layout with the left column containing
- [ ] Left column — illustration and heading — I see the heading "Let's talk about everything!" in large bold
- [ ] Contact form — I see a "Your name" input, an "Email" input, a "Subject" input,

## Design tokens

| Token            | Value              | Notes                                      |
| ---------------- | ------------------ | ------------------------------------------ |
| Background       | `#FFFFFF`          | Page background (white)                    |
| Heading text     | `#1A1A2E`          | Large bold heading, dark/black             |
| Body text        | `#666666`          | Subtext paragraph, gray                    |
| Accent color     | `#5B4AFF`          | Blue/indigo on illustration elements       |
| Input bg         | `#F5F5F5`          | Light gray background for input fields     |
| Input radius     | 6px                | Rounded corners on input fields            |
| Input placeholder| `#AAAAAA`          | Light gray placeholder text                |
| Button bg        | `#1A1A2E`          | Dark/black background                      |
| Button text      | `#FFFFFF`          | White text on button                       |
| Button radius    | 6px                | Rounded corners matching inputs            |
| Font — headings  | Poppins (bold)     | Large sans-serif heading                   |
| Font — body      | Poppins (regular)  | Form fields, subtext, button               |
| Illustration     | SVG / placeholder  | Person with envelope + decorative elements |

<!-- live-palette-unverified:start -->
**TOKEN-UNVERIFIED (2026-10-23)** — the demo `https://preview.colorlib.com/theme/bootstrap/contact-form-16/` paints no counterpart within 12 RGB units of these claims (the re-value threshold). Each line names the nearest painted colour and its RGB distance: the claim is a screenshot sample, **not** a measured value — build from the sheet, not this list:
- `#5b4aff` — nearest `#55a44e` (d=199)
<!-- live-palette-unverified:end -->
