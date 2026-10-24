# Template: Outreach (Contact Form)
<!-- prep-status: shipped-as=sendwave -->
> **SHIPPED-UNDER** — the ColorLib `contact-form-05` design this prep describes already
> ships as `apps/sendwave` (<https://sendwave.free.componentdock.com>).
> Do not scaffold `apps/outreach`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-sendwave/spec.md`.

## Purpose

Recreation of ColorLib "Contact Form 05" — a centered two-column card contact
page with a white form panel on the left and a full-height background image on
the right, featuring underline-style inputs, a golden accent button, and social
media links.

- **Source slug:** `contact-form-05`
- **Source URL:** https://colorlib.com/wp/template/contact-form-05/
- **Preview URL:** https://preview.colorlib.com/theme/contact-form-05/ (404 at
  time of prep — Bootstrap version reached at
  https://preview.colorlib.com/theme/bootstrap/contact-form-05/) — **re-probed 2026-10-23: the demo serves** (measured record below)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

<!-- unreachable-reprobe:start -->
> **Re-probe 2026-10-23** (`scripts/verify-unreachable-claims.py`): the reference DOES serve at `https://preview.colorlib.com/theme/bootstrap/contact-form-05/` — HTTP 200, 4,180 B, title `Contact Form 05`.
>
> Sheet: `https://preview.colorlib.com/theme/bootstrap/contact-form-05/css/style.css?v=ffe44641` (16,879 B).
> Faces it actually declares: `Roboto`, `Poppins`, `Segoe UI`, `Helvetica Neue`.
>
> Recorded by the PREP audit; the app delta (if any) is a separate fidelity follow-up — this block is evidence, not a re-value.
<!-- unreachable-reprobe:end -->

## Design tokens

Extracted from the Bootstrap preview CSS (`style.css`) and screenshot analysis.

| Token                | Value                                        |
| -------------------- | -------------------------------------------- |
| Font family          | `"Poppins", Arial, sans-serif`               |
| Body font size       | 14px                                         |
| Body line-height     | 1.8                                          |
| Body color           | `#666666`                                    |
| Page background      | `#f4f4f4` (light warm gray)                 |
| Heading color        | `#000000`                                    |
| Brand / accent color | `#e3b04b` (golden amber)                    |
| Button hover         | `#d99c22` (darker amber)                    |
| Button border-radius | 5px                                          |
| Button shadow        | `0px 10px 20px -6px rgba(0,0,0,0.12)`       |
| Wrapper border-radius| 10px                                         |
| Wrapper shadow       | `0px 21px 41px -13px rgba(0,0,0,0.18)`      |
| Card background      | `#ffffff`                                    |
| Input style          | Underline only (`border-bottom: 1px solid rgba(0,0,0,0.1)`, no other borders) |
| Input font size      | 16px                                         |
| Placeholder color    | `rgba(0,0,0,0.5)`                           |
| Input focus border   | `rgba(0,0,0,0.3)`                           |
| Social links color   | `rgba(0,0,0,0.2)`, uppercase, 13px, font-weight 500 |
| Social links hover   | `#000000`                                    |
| Contact label color  | `rgba(0,0,0,0.2)`, uppercase, 13px, font-weight 600 |
| Contact value color  | `rgba(0,0,0,0.7)`                           |
| Success message      | `#28a745`, 18px, font-weight 500            |
| Error message        | `red`, 12px                                  |

## Visual design (from screenshot)

- Light warm-gray page background (`#f4f4f4`).
- A page title ("Contact Form #05") centered above the card — we replace with
  the template name or omit (no navbar needed).
- A centered card (`.wrapper`) with `border-radius: 10px` and a large drop
  shadow. The card is a two-column layout:
  - **Left column** (white background): "Contact us" heading, subtitle
    ("We're open for any suggestion or just to have a chat"), a row of three
    contact-info blocks (Address / Email / Phone with uppercase labels), a
    form with 4 underline-style fields (Name, Email, Subject, Message textarea),
    a golden "Send Message" button, and a "Follow us here" section with four
    social links (Facebook, Twitter, Instagram, Dribbble) in muted uppercase.
  - **Right column** (full height): a background cover image showing a cozy
    interior scene with plants and a window (replace with a placeholder).
- Minimal, clean aesthetic — no navbar, no footer beyond the social links.
- Inputs have no visible border except a subtle bottom line; they expand on
  focus with a slightly darker bottom border.

## Requirements

### Requirement: Page layout

The page renders a centered card on a light gray background with a centered page
title above it.

#### Scenario: Full-page background

- **GIVEN** the user loads the page
- **THEN** the page background color is "#f4f4f4"
- **AND** the content is vertically and horizontally centered

#### Scenario: Card container

- **GIVEN** the user loads the page
- **THEN** a card container is visible with rounded corners and a drop shadow
- **AND** the card contains two side-by-side columns

### Requirement: Left column — contact info header

The left column displays a "Contact us" heading, a subtitle, and three
contact-info blocks in a row.

#### Scenario: Heading and subtitle

- **GIVEN** the user views the left column
- **THEN** a "Contact us" heading is visible
- **AND** a subtitle "We're open for any suggestion or just to have a chat" is visible below it

#### Scenario: Contact info blocks

- **GIVEN** the user views the contact info row
- **THEN** three info blocks are displayed side by side: Address, Email, Phone
- **AND** each block has an uppercase label and a value below it
- **AND** the Address shows "198 West 21th Street, Suite 721 New York NY 10016"
- **AND** the Email shows "info@yoursite.com"
- **AND** the Phone shows "+ 1235 2355 98"

### Requirement: Left column — contact form

The form has four underline-style fields and a submit button.

#### Scenario: Form fields present

- **GIVEN** the user views the contact form
- **THEN** there is a text input with placeholder "Name"
- **AND** there is an email input with placeholder "Email"
- **AND** there is a text input with placeholder "Subject"
- **AND** there is a textarea with placeholder "Create a message here"

#### Scenario: Input styling

- **GIVEN** the user views any form input
- **THEN** the input has no visible border except a bottom border
- **AND** the bottom border is a subtle light color
- **AND** the input font size is 16px

#### Scenario: Submit button

- **GIVEN** the user views the form
- **THEN** a "Send Message" button is visible below the textarea
- **AND** the button has a golden amber background (#e3b04b)
- **AND** the button has white text
- **AND** the button has rounded corners (border-radius ~5px)

### Requirement: Left column — social media links

Below the form, a "Follow us here" section with social links.

#### Scenario: Social links section

- **GIVEN** the user views below the form
- **THEN** a "Follow us here" heading is visible
- **AND** four social links are displayed: Facebook, Twitter, Instagram, Dribbble
- **AND** the links are styled in uppercase with muted color

#### Scenario: Social link hover

- **GIVEN** the user hovers over a social link
- **THEN** the link text color changes to dark (#000)

### Requirement: Right column — background image

The right column shows a full-height cover image.

#### Scenario: Background image

- **GIVEN** the user views the right column
- **THEN** a background image fills the entire column height
- **AND** the image uses cover sizing and center positioning

### Feature: Responsive behavior

#### Scenario: Mobile layout

- **GIVEN** the user views the page on a viewport narrower than 768px
- **THEN** the two columns stack vertically
- **AND** the form column appears above the image column

## Verification checklist

- [ ] Card renders centered on light gray background
- [ ] Two-column layout: form left, image right
- [ ] "Contact us" heading + subtitle present
- [ ] Three contact info blocks (Address, Email, Phone) with uppercase labels
- [ ] Four form fields with underline-only styling
- [ ] Golden amber "Send Message" button with correct radius and shadow
- [ ] "Follow us here" section with 4 social links
- [ ] Right column has full-height cover background image
- [ ] Responsive: stacks vertically on mobile (< 768px)
- [ ] Font: Poppins loaded via Google Fonts
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] public/CNAME contains `outreach.free.componentdock.com`
- [ ] package.json homepage is `https://outreach.free.componentdock.com`
