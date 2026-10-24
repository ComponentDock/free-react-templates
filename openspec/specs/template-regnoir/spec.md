# Template: RegNoir (Event Registration Form)
<!-- prep-status: shipped-as=regpad -->
> **SHIPPED-UNDER** — the ColorLib `colorlib-regform-3` design this prep describes already
> ships as `apps/regpad` (<https://regpad.free.componentdock.com>).
> Do not scaffold `apps/regnoir`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-regpad/spec.md`.

## Purpose

RegNoir is a single-page event registration form in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Colorlib
Regform 3" free template (source:
https://colorlib.com/wp/template/colorlib-regform-3/), built under a
DIFFERENT name (**RegNoir**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a split-screen card centered on a purple/lavender gradient
full-page background. The left half is a dramatic photograph (woman in hat
surrounded by pink smoke). The right half is a dark (near-black) form panel
with a "Registration Info" heading in white serif font, underline-style form
fields (Name, Birthdate, Gender dropdown, Email, Phone), and a green pill-
shaped "Submit" button. The aesthetic is bold, moody, fashion/event-
themed — suitable for music festivals, nightlife, or creative events.

**Preview URL:** https://preview.colorlib.com/theme/colorlib-regform-3/
(returns 404 at time of prep — fell back to screenshot analysis) — **re-probed 2026-10-23: the demo serves** (measured record below)

<!-- unreachable-reprobe:start -->
> **Re-probe 2026-10-23** (`scripts/verify-unreachable-claims.py`): the reference DOES serve at `https://colorlib.com/etc/regform/colorlib-regform-3/` — HTTP 200, 3,635 B, title `Au Register Forms by Colorlib`.
>
> Sheet: `https://colorlib.com/etc/regform/colorlib-regform-3/css/style.css?v=c4e3545f` (10,694 B).
> Faces it actually declares: `Poppins`, `Helvetica Neue`.
>
> Recorded by the PREP audit; the app delta (if any) is a separate fidelity follow-up — this block is evidence, not a re-value.
<!-- unreachable-reprobe:end -->

**Screenshot URL:** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-3.jpg

## Design tokens (from screenshot analysis) — **re-probed 2026-10-23: the demo serves** (measured record below)

| Token          | Value                              | Use                                                        |
| -------------- | ---------------------------------- | ---------------------------------------------------------- |
| Page bg        | Purple/lavender gradient           | Top ~#9b59b6, bottom ~#d4a5d4 (vertical gradient)         |
| Card           | Split-screen, centered, shadow     | Left 50% image, right 50% dark form panel                  |
| Form panel bg  | Near-black `~#1a1a2e`              | Dark right side of card                                    |
| Heading        | White, serif/display font          | "Registration Info" — decorative serif, centered           |
| Field labels   | White, sans-serif, ~14px           | "Name", "Birthdate", "Gender", "Email", "Phone"           |
| Field borders  | Gray underline `~#444`             | Bottom border only on each input                           |
| Input text     | White                              | Text color on dark background                              |
| Button bg      | Green/olive `~#7cb342`             | "Submit" button, pill-shaped (high radius)                 |
| Button text    | White                              | Submit button label                                        |
| Button shape   | Pill (high border-radius ~25px)    | Rounded green button                                       |
| Image          | Dramatic photo (pink smoke/hat)    | Left half of card — fashion/music festival aesthetic       |
| Card shadow    | Subtle drop shadow                 | Elevates card above gradient background                    |
| Card radius    | ~8-12px                            | Rounded corners on the card                                |

**Note:** Preview URL returned 404. Tokens extracted from screenshot
(1200x972 AVIF converted to PNG, analyzed visually). Exact hex values are
approximate — implementer should match visual appearance closely.

## Requirements

### Feature: RegNoir Event Registration Form

#### Scenario: Page renders with split-screen card layout

- **GIVEN** the user navigates to the RegNoir page
- **THEN** a purple/lavender gradient full-page background is visible
- **AND** a centered card is displayed
- **AND** the card is split into a left image section and a right form section

#### Scenario: Left side displays a dramatic photograph

- **GIVEN** the page has loaded
- **THEN** the left half of the card displays a photograph
- **AND** the photograph fills the entire left half of the card

#### Scenario: Registration form heading is visible

- **GIVEN** the page has loaded
- **THEN** the heading "Registration Info" is visible on the dark form panel
- **AND** the heading is white and styled with a serif/display font

#### Scenario: Form fields are present and functional

- **GIVEN** the page has loaded
- **THEN** a "Name" text input is visible
- **AND** a "Birthdate" date picker input is visible
- **AND** a "Gender" dropdown select is visible
- **AND** an "Email" text input is visible
- **AND** a "Phone" text input is visible
- **AND** all inputs have underline-style borders (bottom border only)

#### Scenario: Submit button is visible and styled

- **GIVEN** the page has loaded
- **THEN** a "Submit" button is visible
- **AND** the button has a green/olive background (~#7cb342)
- **AND** the button has a pill shape (high border-radius)
- **AND** the button text is white

#### Scenario: Submit button triggers form submission

- **GIVEN** the user fills in all form fields
- **WHEN** the user clicks the "Submit" button
- **THEN** the form submission is triggered

#### Scenario: Responsive layout

- **GIVEN** the user views the page on a mobile device (viewport < 768px)
- **THEN** the card stacks vertically (image above form)
- **AND** all form fields remain accessible

#### Scenario: Footer section

- **GIVEN** the page has loaded
- **THEN** a Component Dock credit link is present

## Verification checklist

- [ ] Page background matches purple/lavender gradient
- [ ] Card is centered with subtle shadow and rounded corners
- [ ] Left half displays a dramatic placeholder photograph
- [ ] Right half has dark (near-black) background
- [ ] "Registration Info" heading in white serif font
- [ ] All 5 form fields present (name, birthdate, gender, email, phone)
- [ ] Form fields use underline-style borders (bottom border only)
- [ ] "Submit" button is green pill-shaped with white text
- [ ] Responsive: card stacks on mobile
- [ ] Footer includes Component Dock credit link
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] `public/CNAME` = `regnoir.free.componentdock.com`
- [ ] `"homepage"` = `https://regnoir.free.componentdock.com`
- [ ] Package name = `@free-react-templates/regnoir`

<!-- live-palette-unverified:start -->
**TOKEN-UNVERIFIED (2026-10-23)** — the demo `https://colorlib.com/etc/regform/colorlib-regform-3/` paints no counterpart within 12 RGB units of these claims (the re-value threshold). Each line names the nearest painted colour and its RGB distance: the claim is a screenshot sample, **not** a measured value — build from the sheet, not this list:
- `#9b59b6` — nearest `#a18cd1` (d=58)
- `#d4a5d4` — nearest `#fbc2eb` (d=54)
- `#7cb342` — nearest `#57b846` (d=38)
<!-- live-palette-unverified:end -->
