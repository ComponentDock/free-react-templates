# Template: Formdock (Contact Form)
<!-- prep-status: shipped-as=touchback -->
> **SHIPPED-UNDER** — the ColorLib `contact-form-12` design this prep describes already
> ships as `apps/touchback` (<https://touchback.free.componentdock.com>).
> Do not scaffold `apps/formdock`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-touchback/spec.md`.

## Purpose

Recreation of ColorLib **Contact Form 12** — a clean two-column contact page
with a heading, paragraph, and contact info on the left, and a form with
labeled bordered inputs on the right. Features a blue button.

- **Source slug:** `contact-form-12`
- **Source URL:** https://colorlib.com/wp/template/contact-form-12/
- **Preview URL:** https://preview.colorlib.com/theme/contact-form-12/ (404 at
  time of prep — design tokens extracted from screenshot)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens

> Tokens extracted from the screenshot (preview unreachable). Approximate hex
> values; adjust to match closest Tailwind defaults.

| Token             | Value                   | Notes                                      |
| ----------------- | ----------------------- | ------------------------------------------ |
| Brand blue        | `#4285F4`              | Send Message button background             |
| Background        | `#FFFFFF`              | White page background                      |
| Text primary      | `#222222`              | Headings (bold black)                      |
| Text body         | `#666666`              | Paragraph text                             |
| Text secondary    | `#999999`              | Lighter text                               |
| Label color       | `#333333`              | Form field labels (dark)                   |
| Input border      | `#E0E0E0`              | Bordered input boxes                       |
| Icon color        | `#555555`              | Contact info icons (dark gray)             |
| Font — headings   | Poppins (sans-serif, bold)| "Contact Us" heading                    |
| Font — body       | Poppins (sans-serif)   | Paragraph, labels, contact info, button    |
| Button radius     | 4px                     | Slight rounding                            |
| Button bg         | Brand blue              | —                                          |
| Button text       | White                   | —                                          |
| Input style       | Bordered box            | Full border around inputs                  |

## Visual design (from screenshot)

The page has a clean white background with a centered two-column layout.

Left column (~50%):
- "Contact Us" heading: bold, black, sans-serif, ~36px
- Paragraph of lorem ipsum text in gray
- Contact info items (vertically stacked):
  - Building icon + "34 Street Name, City Name Here, United States"
  - Phone icon + "+1 (222) 345 6789"
  - Mail icon + "info@mywebsite.com"

Right column (~50%):
- Form with labels ABOVE inputs (not placeholders):
  - Name (label + bordered input)
  - Email (label + bordered input)
  - Message (label + bordered textarea, tall)
- "Send Message" button (blue bg, white text)

Key differences: labels above inputs (not placeholders), different address
format, very clean/simple layout, no serif fonts.

<!-- live-token-reverify:2026-10-22 -->

### Live reference restored (2026-10-22)

The prep-time note above records the preview 404. **Re-probed 2026-10-22**
the reference answers **HTTP 200**, so the live DOM and CSS are
authoritative again — CSS values are canonical over the screenshot
(`docs/replication.md`).

| artefact | URL | reading |
| --- | --- | --- |
| live page | `https://preview.colorlib.com/theme/bootstrap/contact-form-12/` | HTTP 200 · 8,275 B · title `Contact Form #2` |
| stylesheet | `https://preview.colorlib.com/theme/bootstrap/contact-form-12/css/style.css?v=42465dea` | HTTP 200 · 13,851 B · sha256 `3aebac3861b9` |

> ⚠️ the demo's own `<title>` reads `Contact Form #2` though the path is
> `contact-form-12` — the host's titles are not reliable labels; the
> readings above are for the URL as fetched.

**Live palette** (hex × occurrences in that sheet): `#ffffff`×9,
`#000000`×5, `#6c757d`×4, `#007bff`×4, `#212529`×3, `#495057`×3,
`#0062cc`×2, `#fcf8e3`×1, `#ced4da`×1, `#80bdff`×1.

**Low-chroma values the sheet actually uses** — `#6c757d`, `#212529`,
`#495057`, `#ced4da`; any sampled Tailwind grey above is an approximation of
these.

## Requirements

### Page layout

#### Scenario: Page renders a centered two-column layout

- **GIVEN** I visit the Formdock page
- **THEN** I see a centered two-column layout on a white background

#### Scenario: Left column contains heading, text, and contact info

- **GIVEN** I visit the Formdock page
- **THEN** the left column has a "Contact Us" heading
- **AND** it contains a paragraph of text
- **AND** it contains contact information items

#### Scenario: Right column contains the form

- **GIVEN** I visit the Formdock page
- **THEN** the right column contains a contact form

### Contact info

#### Scenario: Info displays address

- **GIVEN** I visit the Formdock page
- **THEN** I see a building icon and text "34 Street Name, City Name Here, United States"

#### Scenario: Info displays phone

- **GIVEN** I visit the Formdock page
- **THEN** I see a phone icon and text "+1 (222) 345 6789"

#### Scenario: Info displays email

- **GIVEN** I visit the Formdock page
- **THEN** I see a mail icon and text "info@mywebsite.com"

### Contact form

#### Scenario: Form displays all fields with labels

- **GIVEN** I visit the Formdock page
- **THEN** I see a "Name" label above an input field
- **AND** I see an "Email" label above an input field
- **AND** I see a "Message" label above a textarea
- **AND** I see a Send Message button

#### Scenario: Inputs have bordered box style

- **GIVEN** I visit the Formdock page
- **THEN** all form inputs have a full border (box style)
- **AND** the input borders are light gray

#### Scenario: Labels appear above inputs

- **GIVEN** I visit the Formdock page
- **THEN** each form field has a label displayed above the input

#### Scenario: Send Message button is styled

- **GIVEN** I visit the Formdock page
- **THEN** the Send Message button has a blue background and white text

### Responsive behavior

#### Scenario: Columns stack on mobile

- **GIVEN** I visit the Formdock page on a mobile viewport
- **THEN** the two columns stack vertically
- **AND** the left column appears above the form

### Footer

#### Scenario: Footer links to Component Dock

- **GIVEN** I visit the Formdock page
- **THEN** the footer contains a link to https://www.componentdock.com/
- **AND** the link text references Component Dock

## Verification checklist

- [ ] Two-column layout on white background
- [ ] Left: "Contact Us" bold heading
- [ ] Left: paragraph of text
- [ ] Left: contact info with icons (Address, Phone, Email)
- [ ] Right: form with labels ABOVE inputs
- [ ] Right: Name, Email, Message fields with bordered boxes
- [ ] Right: Send Message button (blue bg, white text)
- [ ] Labels: dark text above each input
- [ ] Fonts: Poppins bold for headings, Poppins for body
- [ ] Responsive: columns stack on mobile
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
- [ ] Typecheck + lint + build pass
