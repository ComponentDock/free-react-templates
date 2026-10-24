# Template: Reachcraft (Contact Form)
<!-- prep-status: shipped-as=linewell -->
> **SHIPPED-UNDER** — the ColorLib `contact-form-v15` design this prep describes already
> ships as `apps/linewell` (<https://linewell.free.componentdock.com>).
> Do not scaffold `apps/reachcraft`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-linewell/spec.md`.

## Purpose

Recreation of ColorLib **Contact Form V15** — a minimal centered contact form card
overlaying a full-page Google Maps background, with a green-accented header banner,
underline-style inputs, and a rounded green submit button.

- **Source slug:** `contact-form-v15`
- **Source URL:** https://colorlib.com/wp/template/contact-form-v15/
- **Preview URL:** https://preview.colorlib.com/theme/contact-form-v15/ (404 at
  time of prep — design tokens extracted from screenshot) — **re-probed 2026-10-23: the demo serves** (measured record below)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

<!-- unreachable-reprobe:start -->
> **Re-probe 2026-10-23** (`scripts/verify-unreachable-claims.py`): the reference DOES serve at `https://colorlib.com/etc/cf/ContactFrom_v15/index.html` — HTTP 200, 2,897 B, title `Contact V15`.
>
> Sheet: `https://colorlib.com/etc/cf/ContactFrom_v15/css/style.css?v=9d1e75e5` (12,176 B).
> Faces it actually declares: `Poppins-Bold`, `Segoe UI`, `Roboto`, `Helvetica Neue`.
> The recorded brand `#4caf50` occurs nowhere in it: the values below are screenshot samples, not measurements — `docs/replication.md` makes the sheet canonical.
>
> Recorded by the PREP audit; the app delta (if any) is a separate fidelity follow-up — this block is evidence, not a re-value.
<!-- unreachable-reprobe:end -->

## Design tokens

| Token              | Value                         | Notes                                            |
| ------------------ | ----------------------------- | ------------------------------------------------ |
| Brand green        | `#4CAF50`                     | Submit button, banner overlay, accents            |
| Background         | Full-page map image           | Dark muted grayscale map (NYC area)               |
| Card surface       | `#FFFFFF`                     | Centered form card background                    |
| Card header bg     | Green overlay on photo        | Workspace/desk photo with green tint             |
| Text on banner     | `#FFFFFF`                     | "Contact Us" heading, subtitle                   |
| Text primary       | `#333333`                     | Form field labels                                |
| Text placeholder   | `#999999`                     | Input placeholder text                           |
| Button bg          | Brand green (`#4CAF50`)       | Rounded/pill shape                               |
| Button text        | `#FFFFFF`                     | White on green                                   |
| Button radius      | ~25px (pill)                  | Fully rounded corners                            |
| Input style        | Underline (bottom border only) | No box border, bottom line only                  |
| Card shadow        | Subtle drop shadow            | Floating card effect over map                    |
| Card border-radius | ~8px                          | Slight rounding on card corners                  |
| Font — headings    | Poppins (sans-serif)          | "Contact Us" and labels                          |
| Font — body        | Poppins (sans-serif)          | Placeholder text, button                        |

## Requirements

### Requirement: Page layout

The page renders a full-screen map background with a centered form card overlay.

#### Scenario: Map background

- **WHEN** I visit the Reachcraft page
- **THEN** the entire viewport is covered by a dark grayscale map background

#### Scenario: Centered form card

- **WHEN** I visit the Reachcraft page
- **THEN** a white card is centered vertically and horizontally over the map
- **AND** the card has a subtle drop shadow

### Requirement: Card header banner

The top of the card has a banner area with a photo and green overlay containing the heading.

#### Scenario: Banner background

- **WHEN** I visit the Reachcraft page
- **THEN** the card header displays a workspace/desk photo with a green-tinted overlay

#### Scenario: Contact Us heading

- **WHEN** I visit the Reachcraft page
- **THEN** I see "Contact Us" in large white bold text centered in the banner

#### Scenario: Subtitle text

- **WHEN** I visit the Reachcraft page
- **THEN** I see "Feel free to drop us a line below!" in smaller white text below the heading

### Requirement: Contact form

The form section below the banner has four fields with underline-style inputs and a submit button.

#### Scenario: Full Name field

- **WHEN** I visit the Reachcraft page
- **THEN** I see a "Full Name" label with an underline input field

#### Scenario: Email field

- **WHEN** I visit the Reachcraft page
- **THEN** I see an "Email" label with an underline input field

#### Scenario: Phone field

- **WHEN** I visit the Reachcraft page
- **THEN** I see a "Phone" label with an underline input field

#### Scenario: Message field

- **WHEN** I visit the Reachcraft page
- **THEN** I see a "Message" label with a textarea field

#### Scenario: Underline input style

- **WHEN** I view the form fields
- **THEN** all inputs have a bottom border only (underline style), no full box border

#### Scenario: Submit button

- **WHEN** I visit the Reachcraft page
- **THEN** I see a green rounded "Submit" button with white text and an arrow icon

#### Scenario: Form fields stacked vertically

- **WHEN** I visit the Reachcraft page
- **THEN** all four form fields are stacked vertically in a single column

### Requirement: Footer

The page footer links to Component Dock.

#### Scenario: Component Dock link

- **WHEN** I visit the Reachcraft page
- **THEN** the footer contains a link to https://www.componentdock.com/
- **AND** the link text references Component Dock

## Verification checklist

- [ ] `npm run verify:app -- reachcraft` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] All 13 scenarios above are covered by colocated tests
      (query by role/label; test names mirror the scenario names):
      - Page layout
      - Card header banner
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
- [ ] Page layout — the entire viewport is covered by a dark grayscale map background
- [ ] Card header banner — the card header displays a workspace/desk photo with a green-tinted overlay
- [ ] Contact form — I see a "Full Name" label with an underline input field

<!-- live-palette-unverified:start -->
**TOKEN-UNVERIFIED (2026-10-23)** — the demo `https://colorlib.com/etc/cf/ContactFrom_v15/index.html` paints no counterpart within 12 RGB units of these claims (the re-value threshold). Each line names the nearest painted colour and its RGB distance: the claim is a screenshot sample, **not** a measured value — build from the sheet, not this list:
- `#4caf50` — nearest `#57b846` (d=17)
<!-- live-palette-unverified:end -->
