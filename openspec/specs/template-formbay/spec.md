# Template: Formbay (Contact Form)
<!-- prep-status: shipped-as=formreach -->
> **SHIPPED-UNDER** — the ColorLib `contact-form-11` design this prep describes already
> ships as `apps/formreach` (<https://formreach.free.componentdock.com>).
> Do not scaffold `apps/formbay`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-formreach/spec.md`.

## Purpose

Recreation of ColorLib "Contact Form 11" — a clean, minimalist two-column
contact page with a large bold heading, underline-style form on the left, and
a text block with a "Read more" link on the right. Features a coral/pink accent.

- **Source slug:** `contact-form-11`
- **Source URL:** https://colorlib.com/wp/template/contact-form-11/
- **Preview URL:** https://preview.colorlib.com/theme/contact-form-11/ (404 at
  time of prep — design tokens extracted from screenshot)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens

> Tokens extracted from the screenshot (preview unreachable). Approximate hex
> values; adjust to match closest Tailwind defaults.

| Token             | Value                   | Notes                                      |
| ----------------- | ----------------------- | ------------------------------------------ |
| Brand coral       | `#eb4d55`              | Button bg, "Read more" link                |
| Background        | `#FFFFFF`              | White page background                      |
| Text primary      | `#222222`              | Headings (bold black)                      |
| Text body         | `#666666`              | Paragraph text                             |
| Text secondary    | `#999999`              | Input placeholders, labels                 |
| Input border      | `#E0E0E0`              | Underline bottom borders                   |
| Font — headings   | Poppins (sans-serif, bold)| "Fill the form. It's easy.", "Let's talk about everything." |
| Font — body       | Poppins (sans-serif)   | Paragraph text, placeholders, button       |
| Button radius     | 4px                     | Slight rounding                            |
| Button bg         | Brand coral             | —                                          |
| Button text       | White                   | —                                          |
| Input style       | Underline (no border)   | Bottom border only                         |

## Visual design (from screenshot)

The page has a clean white background with a centered two-column layout.

Left column (~50%):
- Large bold heading: "Fill the form. It's easy." (black, ~40px, sans-serif)
- Form with underline-style inputs:
  - Row 1: First name + Last name (side by side, light bottom borders)
  - Email (full width)
  - "Write your message" label + Message textarea (tall, underline style)
- "Send Message" button (coral bg, white text)

Right column (~50%):
- Bold heading: "Let's talk about everything." (~28px)
- Paragraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
  deleniti itaque similique magni. Magni, laboriosam perferendis maxime!"
- "Read more" link in coral color

Key differences: no card, no background image, very clean/minimal, large bold
heading, coral accent, text content on the right side.

<!-- live-token-reverify:2026-10-22 -->

### Live reference restored (2026-10-22)

The prep-time note above records the preview 404. **Re-probed 2026-10-22**
the reference answers **HTTP 200**, so the live DOM and CSS are
authoritative again — CSS values are canonical over the screenshot
(`docs/replication.md`).

| artefact | URL | reading |
| --- | --- | --- |
| live page | `https://preview.colorlib.com/theme/bootstrap/contact-form-11/` | HTTP 200 · 2,969 B · title `Contact Form #1` |
| stylesheet | `https://preview.colorlib.com/theme/bootstrap/contact-form-11/css/style.css?v=383c0873` | HTTP 200 · 14,659 B · sha256 `86cb1b267770` |

> ⚠️ the demo's own `<title>` reads `Contact Form #1` though the path is
> `contact-form-11` — the host's titles are not reliable labels; the
> readings above are for the URL as fetched.

**Live palette** (hex × occurrences in that sheet): `#ffffff`×9,
`#eb4d55`×5, `#6c757d`×4, `#212529`×3, `#495057`×3, `#000000`×3,
`#e61f29`×2, `#d41821`×1, `#fcf8e3`×1, `#ced4da`×1.

**Token deltas** — the sheet, not the screenshot, decides:

- `#e8636f` → **`#eb4d55`** — the sheet paints `a{color}` with it

**Low-chroma values the sheet actually uses** — `#6c757d`, `#212529`,
`#495057`, `#ced4da`; any sampled Tailwind grey above is an approximation of
these.

## Requirements

### Page layout

#### Scenario: Page renders a centered two-column layout

- **GIVEN** I visit the Formbay page
- **THEN** I see a centered two-column layout on a white background

#### Scenario: Left column contains heading and form

- **GIVEN** I visit the Formbay page
- **THEN** the left column has a large heading "Fill the form. It's easy."
- **AND** it contains a contact form

#### Scenario: Right column contains text content

- **GIVEN** I visit the Formbay page
- **THEN** the right column has a heading "Let's talk about everything."
- **AND** it contains a paragraph of text
- **AND** it contains a "Read more" link

### Contact form

#### Scenario: Form displays all fields

- **GIVEN** I visit the Formbay page
- **THEN** I see a First name input field
- **AND** I see a Last name input field
- **AND** I see an Email input field
- **AND** I see a Message textarea
- **AND** I see a Send Message button

#### Scenario: First name and Last name are side by side

- **GIVEN** I visit the Formbay page
- **THEN** the First name and Last name inputs are in the same row

#### Scenario: Inputs have underline style

- **GIVEN** I visit the Formbay page
- **THEN** all form inputs have a bottom border only (underline style)

#### Scenario: Message field has label

- **GIVEN** I visit the Formbay page
- **THEN** the Message textarea has a "Write your message" label above it

#### Scenario: Send Message button is styled

- **GIVEN** I visit the Formbay page
- **THEN** the Send Message button has a coral background and white text

### Text content

#### Scenario: Right column displays heading

- **GIVEN** I visit the Formbay page
- **THEN** I see "Let's talk about everything." in the right column

#### Scenario: Right column displays paragraph

- **GIVEN** I visit the Formbay page
- **THEN** I see a paragraph of text below the heading in the right column

#### Scenario: Right column displays Read more link

- **GIVEN** I visit the Formbay page
- **THEN** I see a "Read more" link in coral color

### Responsive behavior

#### Scenario: Columns stack on mobile

- **GIVEN** I visit the Formbay page on a mobile viewport
- **THEN** the two columns stack vertically
- **AND** the form appears above the text content

### Footer

#### Scenario: Footer links to Component Dock

- **GIVEN** I visit the Formbay page
- **THEN** the footer contains a link to https://www.componentdock.com/
- **AND** the link text references Component Dock

## Verification checklist

- [ ] Two-column layout on white background
- [ ] Left: "Fill the form. It's easy." large bold heading
- [ ] Left: First name + Last name side by side
- [ ] Left: Email full width
- [ ] Left: "Write your message" label + Message textarea
- [ ] Left: Send Message button (coral bg, white text)
- [ ] Right: "Let's talk about everything." heading
- [ ] Right: Paragraph text
- [ ] Right: "Read more" coral link
- [ ] Inputs: underline style with light bottom borders
- [ ] Fonts: Poppins bold for headings, Poppins for body
- [ ] Responsive: columns stack on mobile
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
- [ ] Typecheck + lint + build pass
