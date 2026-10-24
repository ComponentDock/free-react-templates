# Template: Formpeak (Contact Form)
<!-- prep-status: shipped-as=sendwave -->
> **SHIPPED-UNDER** — the ColorLib `contact-form-05` design this prep describes already
> ships as `apps/sendwave` (<https://sendwave.free.componentdock.com>).
> Do not scaffold `apps/formpeak`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-sendwave/spec.md`.

## Purpose

Recreation of ColorLib "Contact Form 05" — a two-column contact page with a
white form/info panel on the left and a full-height image on the right. Features
a gold/amber button, three-column contact info row, and social media links.

- **Source slug:** `contact-form-05`
- **Source URL:** https://colorlib.com/wp/template/contact-form-05/
- **Preview URL:** https://preview.colorlib.com/theme/contact-form-05/ (404 at
  time of prep — design tokens extracted from screenshot)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens

> Tokens extracted from the screenshot (preview unreachable). Approximate hex
> values; adjust to match closest Tailwind defaults.

| Token             | Value                   | Notes                                      |
| ----------------- | ----------------------- | ------------------------------------------ |
| Brand gold        | `#e3b04b`              | Button background                          |
| Social link color | `#55B68A`              | Social media links (teal/green)            |
| Background        | `#F5F5F5`              | Page background (light gray)               |
| Card surface      | `#FFFFFF`              | Left panel background                      |
| Text primary      | `#333333`              | Headings, body copy                        |
| Text secondary    | `#999999`              | Input placeholders, lighter text           |
| Label color       | `#555555`              | Uppercase contact info labels              |
| Font — headings   | Playfair Display (serif)| "Contact us", "Follow us here"             |
| Font — body       | Poppins (sans-serif)   | Labels, contact info, button               |
| Button radius     | 3px                     | Nearly rectangular, very slight rounding   |
| Button bg         | Brand gold              | —                                          |
| Button text       | White                   | —                                          |
| Input style       | Underline (no border)   | Bottom border only                         |
| Image placeholder | Room with plants        | Use picsum.photos seed for placeholder     |

## Visual design (from screenshot)

The page has a centered two-column card on a light gray background.
The page title "Contact Form #05" sits above the card, centered.

Left column (white, ~55% width):
- "Contact us" heading (serif, dark)
- Subtext: "We're open for any suggestion or just to have a chat"
- Three-column contact info row: ADDRESS, EMAIL, PHONE
- Form fields (underline style): Name, Email, Subject, Message ("Create a message here")
- "Send Message" button (gold/amber bg, white text)
- Social section: "Follow us here" heading + FACEBOOK | TWITTER | INSTAGRAM | DRIBBBLE links (teal)

Right column (image, ~45% width): full-height photo placeholder (room with plants).
Use `https://picsum.photos/seed/formpeak-1/600/800` as placeholder.

<!-- live-token-reverify:2026-10-22 -->

### Live reference restored (2026-10-22)

The prep-time note above records the preview 404. **Re-probed 2026-10-22**
the reference answers **HTTP 200**, so the live DOM and CSS are
authoritative again — CSS values are canonical over the screenshot
(`docs/replication.md`).

| artefact | URL | reading |
| --- | --- | --- |
| live page | `https://preview.colorlib.com/theme/bootstrap/contact-form-05/` | HTTP 200 · 4,180 B · title `Contact Form 05` |
| stylesheet | `https://preview.colorlib.com/theme/bootstrap/contact-form-05/css/style.css?v=ffe44641` | HTTP 200 · 16,879 B · sha256 `ad418c7891b5` |

**Live palette** (hex × occurrences in that sheet): `#ffffff`×10,
`#007bff`×5, `#6c757d`×4, `#e3b04b`×4, `#000000`×4, `#212529`×3,
`#495057`×3, `#0062cc`×2, `#d99c22`×2, `#0056b3`×1.

**Token deltas** — the sheet, not the screenshot, decides:

- `#d4a574` → **`#e3b04b`** — the sheet paints `a{color}` with it

**Low-chroma values the sheet actually uses** — `#6c757d`, `#212529`,
`#495057`, `#ced4da`; any sampled Tailwind grey above is an approximation of
these.

**TOKEN-UNVERIFIED** — screenshot samples with **no** counterpart in the
live sheet; do not build them from the screenshot, take the palette above:
`#55b68a`.

## Requirements

### Page layout

#### Scenario: Page renders a centered two-column card

- **GIVEN** I visit the Formpeak page
- **THEN** I see a centered card with two columns on a light gray background
- **AND** the page title "Contact Form #05" is displayed above the card

#### Scenario: Left column is white and contains form and info

- **GIVEN** I visit the Formpeak page
- **THEN** the left column has a white background
- **AND** it contains a "Contact us" heading

#### Scenario: Right column displays an image

- **GIVEN** I visit the Formpeak page
- **THEN** the right column displays a placeholder image
- **AND** the image fills the full height of the card

### Contact info

#### Scenario: Info row displays three items side by side

- **GIVEN** I visit the Formpeak page
- **THEN** I see ADDRESS, EMAIL, and PHONE in a horizontal row

#### Scenario: Info row displays address

- **GIVEN** I visit the Formpeak page
- **THEN** I see "ADDRESS:" followed by "198 West 21th Street, Suite 721 New York NY 10016"

#### Scenario: Info row displays email

- **GIVEN** I visit the Formpeak page
- **THEN** I see "EMAIL:" followed by "info@yoursite.com"

#### Scenario: Info row displays phone

- **GIVEN** I visit the Formpeak page
- **THEN** I see "PHONE:" followed by "+ 1235 2355 98"

### Contact form

#### Scenario: Form displays all fields

- **GIVEN** I visit the Formpeak page
- **THEN** I see a Name input field
- **AND** I see an Email input field
- **AND** I see a Subject input field
- **AND** I see a Message textarea
- **AND** I see a Send Message button

#### Scenario: Form fields are stacked vertically

- **GIVEN** I visit the Formpeak page
- **THEN** all form fields are displayed in a single vertical column

#### Scenario: Message textarea has custom placeholder

- **GIVEN** I visit the Formpeak page
- **THEN** the Message textarea placeholder reads "Create a message here"

#### Scenario: Send Message button is styled

- **GIVEN** I visit the Formpeak page
- **THEN** the Send Message button has a gold background and white text

### Social links

#### Scenario: Social section displays heading

- **GIVEN** I visit the Formpeak page
- **THEN** I see "Follow us here" heading below the button

#### Scenario: Social section displays platform links

- **GIVEN** I visit the Formpeak page
- **THEN** I see FACEBOOK, TWITTER, INSTAGRAM, and DRIBBBLE links
- **AND** the links are styled in teal/green color

### Responsive behavior

#### Scenario: Columns stack on mobile

- **GIVEN** I visit the Formpeak page on a mobile viewport
- **THEN** the two columns stack vertically
- **AND** the form appears above the image

#### Scenario: Contact info row wraps on mobile

- **GIVEN** I visit the Formpeak page on a mobile viewport
- **THEN** the three-column contact info wraps to multiple rows

### Footer

#### Scenario: Footer links to Component Dock

- **GIVEN** I visit the Formpeak page
- **THEN** the footer contains a link to https://www.componentdock.com/
- **AND** the link text references Component Dock

## Verification checklist

- [ ] Page title "Contact Form #05" centered above the card
- [ ] Two-column layout: form (white) left, image right
- [ ] "Contact us" heading with subtext
- [ ] Three-column contact info row (Address, Email, Phone)
- [ ] Form: Name, Email, Subject, Message fields stacked vertically
- [ ] Message placeholder: "Create a message here"
- [ ] Send Message button: gold bg, white text, slight radius
- [ ] Social links: "Follow us here" + 4 teal platform links
- [ ] Right column: full-height placeholder image
- [ ] Fonts: Playfair Display for headings, Poppins for body
- [ ] Responsive: columns stack, info row wraps on mobile
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
- [ ] Typecheck + lint + build pass
