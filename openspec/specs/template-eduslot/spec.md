# Template: EduSlot (Registration Form)
<!-- prep-status: shipped-as=regwell -->
> **SHIPPED-UNDER** — the ColorLib `colorlib-regform-12` design this prep describes already
> ships as `apps/regwell` (<https://regwell.free.componentdock.com>).
> Do not scaffold `apps/eduslot`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-regwell/spec.md`.

## Purpose

Recreation of ColorLib template **Reg Form V12** (`colorlib-regform-12`).
- Preview: https://preview.colorlib.com/theme/colorlib-regform-12/ (404 — fallback to screenshot only) — **re-probed 2026-10-23: the demo serves** (measured record below)
- Source page: https://colorlib.com/wp/template/colorlib-regform-12/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-12.jpg
- Category: Registration / Appointment Form — Education appointment scheduling
- Stack: React 19 + Vite + Tailwind CSS 4 + TypeScript

<!-- unreachable-reprobe:start -->
> **Re-probe 2026-10-23** (`scripts/verify-unreachable-claims.py`): the reference DOES serve at `https://colorlib.com/etc/regform/colorlib-regform-12/` — HTTP 200, 3,301 B, title `Sign Up Form by Colorlib`.
>
> Sheet: `https://colorlib.com/etc/regform/colorlib-regform-12/css/style.css?v=cee4ba2b` (9,913 B).
> Faces it actually declares: `Roboto Slab`.
>
> Recorded by the PREP audit; the app delta (if any) is a separate fidelity follow-up — this block is evidence, not a re-value.
<!-- unreachable-reprobe:end -->
- **Source design:** ColorLib "Colorlib Regform 12" — https://colorlib.com/wp/template/colorlib-regform-12/

## Design Tokens

| Token             | Value                          | Notes                                    |
|-------------------|--------------------------------|------------------------------------------|
| Background image  | Full-bleed education scene     | Students in classroom; dark overlay      |
| Overlay           | rgba(0,0,0,0.45)              | Semi-transparent dark over background    |
| Card background   | #ffffff                        | White, left-aligned panel                |
| Card width        | ~55% of viewport               | Left side, no border-radius              |
| Card padding      | 40–48px                        | Generous internal spacing                |
| Card shadow       | none (flat)                    | No visible drop shadow                   |
| Heading font      | sans-serif, uppercase, bold    | "EDUCATION APPOINTMENT FORM"             |
| Heading color     | #333333                        | Dark charcoal                            |
| Body font         | Clean sans-serif (Roboto-like) | System/Google font                       |
| Text color        | #333333                        | Dark for labels/headings                 |
| Label color       | #999999                        | Light gray placeholder-style labels      |
| Field border      | 1px solid #e0e0e0             | Bottom border only, clean horizontal     |
| Field padding     | 12–16px vertical               | Comfortable input height                 |
| Select dropdown   | Custom styled, right-aligned   | Chevron icon on right                    |
| Checkbox          | Standard, small                | Inline with Terms text                   |
| Link color        | #1a73e8                        | Blue for "Terms and Conditions"          |
| Button background | #6c63ff                        | Purple/periwinkle accent                 |
| Button text       | #ffffff                        | White                                    |
| Button padding    | 14px 28px                      | Rounded corners (border-radius ~4px)     |
| Button font       | 14px, bold, uppercase          | "REQUEST AN APPOINTMENT"                 |
| Button hover      | Slightly darker shade          | ~#5a52d5                                 |
| Section spacing   | 16–24px between fields         | Vertical rhythm                          |
| Bottom area       | White/light                     | Below the form, extends to viewport edge |

## Layout Structure

1. **Full-bleed background** — education image covering entire viewport
2. **Dark overlay** — semi-transparent over background image
3. **Left-aligned card** (~55% width) — white, contains entire form
4. **Form title** — uppercase, bold, dark, top of card
5. **Text inputs** — Title, Your Name, Email, Phone number (all bottom-bordered)
6. **Select dropdown** — Course Type (styled select)
7. **Secondary heading** — "How would you like to be located?" bold
8. **Select dropdowns** — Contact method ("By phone") + Hours ("Hours: 8am 10pm")
9. **Checkbox + label** — "I agree to the Terms and Conditions" (link on "Terms and Conditions")
10. **Submit button** — "Request an appointment", purple, left-aligned
11. **White space below** — extends to viewport bottom

## Requirements

### Feature: EduSlot template behaviour

#### Scenario: Full-viewport layout

- **GIVEN** the page loads
- **THEN** the background image covers the full viewport
- **AND** a dark overlay covers the background
- **AND** a white card panel appears on the left ~55% of the viewport

#### Scenario: Form title visible

- **GIVEN** the form card is visible
- **THEN** the title "EDUCATION APPOINTMENT FORM" is displayed
- **AND** the title is uppercase, bold, and dark colored
- **AND** the title is positioned at the top of the card with padding

#### Scenario: Personal information fields

- **GIVEN** the form card is visible
- **THEN** there are four text input fields in order:
| Field        | Placeholder    |
| Title        | Title          |
| Your Name    | Your Name      |
| Email        | Email          |
| Phone number | Phone number   |
- **AND** each field has a light gray bottom border only
- **AND** each field has placeholder text in light gray

#### Scenario: Course Type dropdown

- **GIVEN** the form card is visible
- **THEN** a "Course Type" dropdown select is displayed below the text inputs
- **AND** it shows a dropdown chevron on the right

#### Scenario: Contact preference section

- **GIVEN** the form card is visible
- **THEN** a bold heading "How would you like to be located?" is displayed
- **AND** a dropdown for contact method is shown (default: "By phone")
- **AND** a dropdown for hours is shown (default: "Hours : 8am 10pm")

#### Scenario: Terms and conditions checkbox

- **GIVEN** the form card is visible
- **THEN** a checkbox is displayed with label "I agree to the"
- **AND** "Terms and Conditions" is a clickable link styled in blue

#### Scenario: Submit button

- **GIVEN** the form card is visible
- **THEN** a purple button labeled "Request an appointment" is displayed
- **AND** the button has white text on a purple (#6c63ff) background
- **AND** the button is left-aligned below the checkbox
- **AND** hovering the button darkens the background slightly

#### Scenario: Right side of viewport

- **GIVEN** the page loads
- **THEN** the right side of the viewport shows only the background image
- **AND** no card or form elements appear on the right side

#### Scenario: Responsive behavior

- **GIVEN** the viewport is narrow (mobile)
- **THEN** the card should expand to near-full width
- **AND** the background image remains visible above/below the card

## Verification checklist

- [ ] Full-viewport background image with dark overlay
- [ ] Left-aligned white card (~55% width, no border-radius)
- [ ] Uppercase bold heading "EDUCATION APPOINTMENT FORM"
- [ ] Four text inputs: Title, Your Name, Email, Phone number
- [ ] Bottom-border-only input styling with light gray placeholders
- [ ] Course Type styled select dropdown
- [ ] Bold sub-heading "How would you like to be located?"
- [ ] Contact method dropdown (default: "By phone")
- [ ] Hours dropdown (default: "Hours : 8am 10pm")
- [ ] Checkbox with "I agree to the Terms and Conditions" link
- [ ] Purple submit button "Request an appointment"
- [ ] Responsive: card expands on mobile
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/

<!-- live-palette-unverified:start -->
**TOKEN-UNVERIFIED (2026-10-23)** — the demo `https://colorlib.com/etc/regform/colorlib-regform-12/` paints no counterpart within 12 RGB units of these claims (the re-value threshold). Each line names the nearest painted colour and its RGB distance: the claim is a screenshot sample, **not** a measured value — build from the sheet, not this list:
- `#1a73e8` — nearest `#4966b1` (d=74)
- `#6c63ff` — nearest `#4966b1` (d=86)
- `#5a52d5` — nearest `#4966b1` (d=45)
<!-- live-palette-unverified:end -->
