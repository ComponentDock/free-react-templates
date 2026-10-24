# Template: Formrelay (Contact Form)
<!-- prep-status: shipped-as=formlink -->
> **SHIPPED-UNDER** — the ColorLib `contact-form-06` design this prep describes already
> ships as `apps/formlink` (<https://formlink.free.componentdock.com>).
> Do not scaffold `apps/formrelay`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-formlink/spec.md`.

## Purpose

Recreation of ColorLib **Contact Form 06** — a two-column contact page with a
form on the left and a map on the right, plus a row of contact info items with
large circular navy icons below the card.

- **Source slug:** `contact-form-06`
- **Source URL:** https://colorlib.com/wp/template/contact-form-06/
- **Preview URL:** https://preview.colorlib.com/theme/contact-form-06/ (404 at
  time of prep — design tokens extracted from screenshot)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens

> Tokens extracted from the screenshot (preview unreachable). Approximate hex
> values; adjust to match closest Tailwind defaults.

| Token             | Value                   | Notes                                      |
| ----------------- | ----------------------- | ------------------------------------------ |
| Brand navy        | `#2553b8`              | Button bg, icon circles                    |
| Link teal         | `#55B68A`              | Email/website link text                    |
| Background        | `#F5F5F5`              | Page background (light gray)               |
| Card surface      | `#FFFFFF`              | Form panel background                      |
| Text primary      | `#333333`              | Headings, body copy                        |
| Text secondary    | `#999999`              | Input placeholders, lighter text           |
| Label color       | `#333333`              | Uppercase field labels (dark, bold)        |
| Input border      | `#E0E0E0`              | Bordered input boxes                       |
| Font — headings   | Playfair Display (serif)| "Contact Us" heading                       |
| Font — body       | Poppins (sans-serif)   | Labels, contact info, button               |
| Button radius     | 3px                     | Nearly rectangular, very slight rounding   |
| Button bg         | Brand navy              | —                                          |
| Button text       | White                   | —                                          |
| Input style       | Bordered box            | Full border around inputs (not underline)  |
| Icon circles      | Navy bg (~60px)         | Large circular icon containers below card  |
| Map placeholder   | Map image               | Use static map or picsum seed              |

## Visual design (from screenshot)

The page has three sections on a light gray background:

1. **Title** — "Contact Form #06" centered, serif font, dark text.

2. **Two-column card** — centered below the title:
   - Left (~50%): white background, "Contact Us" heading (serif), form with
     bordered-box inputs and uppercase labels: FULL NAME + EMAIL ADDRESS side
     by side, SUBJECT full width, MESSAGE tall textarea. "Send Message" button
     (navy bg, white text).
   - Right (~50%): full-height map image (Google Maps view of New York area).
     Use a static map placeholder or `picsum.photos/seed/formrelay-map/600/600`.

3. **Contact info row** — below the card, four items centered in a row:
   - Each has a large circular navy icon container (~60px) with white icon
   - Below each: label (bold) + value text
   - Items: Address, Phone, Email (teal link), Website (teal link)

<!-- live-token-reverify:2026-10-22 -->

### Live reference restored (2026-10-22)

The prep-time note above records the preview 404. **Re-probed 2026-10-22**
the reference answers **HTTP 200**, so the live DOM and CSS are
authoritative again — CSS values are canonical over the screenshot
(`docs/replication.md`).

| artefact | URL | reading |
| --- | --- | --- |
| live page | `https://preview.colorlib.com/theme/bootstrap/contact-form-06/` | HTTP 200 · 14,322 B · title `Contact Form 06` |
| stylesheet | `https://preview.colorlib.com/theme/bootstrap/contact-form-06/css/style.css?v=9eb9465a` | HTTP 200 · 16,597 B · sha256 `4c27542db9df` |

**Live palette** (hex × occurrences in that sheet): `#ffffff`×11,
`#2553b8`×7, `#007bff`×5, `#6c757d`×4, `#000000`×4, `#212529`×3,
`#495057`×3, `#0062cc`×2, `#1c408e`×2, `#0056b3`×1.

**Token deltas** — the sheet, not the screenshot, decides:

- `#2c3e7b` → **`#2553b8`** — the sheet paints `a{color}` with it

**Low-chroma values the sheet actually uses** — `#6c757d`, `#212529`,
`#495057`, `#ced4da`; any sampled Tailwind grey above is an approximation of
these.

**TOKEN-UNVERIFIED** — screenshot samples with **no** counterpart in the
live sheet; do not build them from the screenshot, take the palette above:
`#55b68a`.

## Requirements

### Page layout

#### Scenario: Page renders the title

- **GIVEN** I visit the Formrelay page
- **THEN** I see "Contact Form #06" centered at the top

#### Scenario: Page renders a centered two-column card

- **GIVEN** I visit the Formrelay page
- **THEN** I see a centered card with a form on the left and a map on the right

#### Scenario: Page renders contact info below the card

- **GIVEN** I visit the Formrelay page
- **THEN** I see four contact items in a row below the card

### Contact form

#### Scenario: Form displays all fields

- **GIVEN** I visit the Formrelay page
- **THEN** I see a Full Name input field
- **AND** I see an Email Address input field
- **AND** I see a Subject input field
- **AND** I see a Message textarea
- **AND** I see a Send Message button

#### Scenario: Full Name and Email Address are side by side

- **GIVEN** I visit the Formrelay page
- **THEN** the Full Name and Email Address inputs are in the same row

#### Scenario: Inputs have bordered box style

- **GIVEN** I visit the Formrelay page
- **THEN** all form inputs have a full border (box style)
- **AND** the input borders are light gray

#### Scenario: Field labels are uppercase

- **GIVEN** I visit the Formrelay page
- **THEN** all form field labels are displayed in uppercase

#### Scenario: Send Message button is styled

- **GIVEN** I visit the Formrelay page
- **THEN** the Send Message button has a navy blue background and white text

### Map panel

#### Scenario: Right column displays a map

- **GIVEN** I visit the Formrelay page
- **THEN** the right column of the card displays a map placeholder image
- **AND** the image fills the full height of the card

### Contact info row

#### Scenario: Info row displays address

- **GIVEN** I visit the Formrelay page
- **THEN** I see a navy circular icon and text "Address: 198 West 21th Street, Suite 721 New York NY 10016"

#### Scenario: Info row displays phone

- **GIVEN** I visit the Formrelay page
- **THEN** I see a navy circular icon and text "Phone: + 1235 2355 98"

#### Scenario: Info row displays email

- **GIVEN** I visit the Formrelay page
- **THEN** I see a navy circular icon and text "Email: info@yoursite.com"

#### Scenario: Info row displays website

- **GIVEN** I visit the Formrelay page
- **THEN** I see a navy circular icon and text "Website: yoursite.com"

#### Scenario: Info row items have large circular navy icon containers

- **GIVEN** I visit the Formrelay page
- **THEN** each contact info item has a large circular navy icon container

### Responsive behavior

#### Scenario: Card columns stack on mobile

- **GIVEN** I visit the Formrelay page on a mobile viewport
- **THEN** the form and map columns stack vertically

#### Scenario: Contact info wraps on mobile

- **GIVEN** I visit the Formrelay page on a mobile viewport
- **THEN** the contact info row wraps to multiple rows

### Footer

#### Scenario: Footer links to Component Dock

- **GIVEN** I visit the Formrelay page
- **THEN** the footer contains a link to https://www.componentdock.com/
- **AND** the link text references Component Dock

## Verification checklist

- [ ] Page title "Contact Form #06" centered at top
- [ ] Two-column card: form (white) left, map right
- [ ] Form: "Contact Us" heading with bordered-box inputs
- [ ] Full Name + Email Address in a two-column row
- [ ] Subject input full width
- [ ] Message textarea tall
- [ ] Uppercase labels above inputs
- [ ] Send Message button: navy bg, white text, slight radius
- [ ] Right column: map placeholder image filling card height
- [ ] Below card: 4 contact items with large circular navy icons
- [ ] Fonts: Playfair Display for headings, Poppins for body
- [ ] Responsive: card stacks, info wraps on mobile
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
- [ ] Typecheck + lint + build pass
