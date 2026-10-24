# Template: Regnet (Registration Form)
<!-- prep-status: shipped-as=formloom -->
> **SHIPPED-UNDER** — the ColorLib `colorlib-regform-15` design this prep describes already
> ships as `apps/formloom` (<https://formloom.free.componentdock.com>).
> Do not scaffold `apps/regnet`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-formloom/spec.md`.

## Purpose

Recreation of ColorLib **Reg Form V15** — a student registration form template
with a two-column split layout (hero image left, form right) on a dark body
background.

- **Source slug:** `colorlib-regform-15`
- **Preview URL:** `https://colorlib.com/etc/regform/colorlib-regform-15/`
- **ColorLib page:** `https://colorlib.com/wp/template/colorlib-regform-15/`
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **Source design:** ColorLib "Colorlib Regform 15" — https://colorlib.com/wp/template/colorlib-regform-15/

## Design tokens

Extracted from `css/style.css` of the ColorLib preview.

| Token               | Value         | Notes                                      |
| ------------------- | ------------- | ------------------------------------------ |
| brand/accent        | `#ff6801`     | Orange — submit button, radio focus, input focus border |
| accent-hover        | `#cd5300`     | Darker orange — submit hover               |
| body-bg             | `#282828`     | Dark charcoal — page background            |
| surface-bg          | `#ffffff`     | White — form container                     |
| text-primary        | `#222222`     | Near-black — headings, labels, body text   |
| text-muted          | `#999999`     | Gray — reset button text, select icon      |
| input-border        | `#ebebeb`     | Light gray — default input/select border   |
| reset-bg            | `#f8f8f8`     | Very light gray — reset button background  |
| font-heading        | Montserrat    | Weights 500, 700 — form title, labels      |
| font-body           | Montserrat    | Weight 400 — input text                    |
| font-button         | Poppins       | Weight 400 — submit/reset buttons          |
| button-radius       | `0`           | Sharp/square corners                       |
| container-max-width | `1400px`      | Centered via `margin: 0 auto`              |
| input-padding       | `11px 20px`   | Standard input height                      |
| input-font-size     | `13px`        |                                            |
| label-font-size     | `14px`        | Bold                                       |
| heading-font-size   | `20px`        | Uppercase, letter-spacing via text-transform|

## Layout (from preview + screenshot)

Two-column split layout:

```
┌──────────────────────────────────────────────────┐
│  body bg: #282828                                │
│  ┌────────────────────────────────────────────┐  │
│  │  White container (1400px, centered)        │  │
│  │  ┌──────────────┬────────────────────────┐ │  │
│  │  │  Hero Image  │  Form (white bg)       │ │  │
│  │  │  (50% width) │  (50% width)           │ │  │
│  │  │              │  padding: 50px 100px    │ │  │
│  │  │  Two people  │                        │ │  │
│  │  │  looking at  │  STUDENT REGISTRATION  │ │  │
│  │  │  a tablet    │  FORM  (h2, uppercase) │ │  │
│  │  │              │                        │ │  │
│  │  │              │  Name: | Father Name:  │ │  │
│  │  │              │  Address: (full width) │ │  │
│  │  │              │  Gender: Male ○ Female ○│ │  │
│  │  │              │  State: ▼ | City: ▼    │ │  │
│  │  │              │  DOB:                  │ │  │
│  │  │              │  Pincode:              │ │  │
│  │  │              │  Course: ▼             │ │  │
│  │  │              │  Email ID:             │ │  │
│  │  │              │                        │ │  │
│  │  │              │  [Reset All] [Submit]   │ │  │
│  │  └──────────────┴────────────────────────┘ │  │
│  └────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────┘
```

## Requirements

### Feature: Student Registration Form

#### Scenario: Page renders with two-column layout

- **GIVEN** the user loads the page
- **THEN** the body background is dark charcoal (#282828)
- **AND** a white container is centered with max-width 1400px
- **AND** the layout is two columns: image (left, 50%) and form (right, 50%)

#### Scenario: Hero image displays correctly

- **GIVEN** the user loads the page
- **THEN** a placeholder image (students with tablet) fills the left column
- **AND** the image is responsive (scales with container)

#### Scenario: Form heading displays

- **GIVEN** the user loads the page
- **THEN** the heading "STUDENT REGISTRATION FORM" is displayed
- **AND** it uses Montserrat font, weight 700, 20px, uppercase, color #222

#### Scenario: Name and Father Name fields are side by side

- **GIVEN** the user loads the page
- **THEN** the Name and Father Name inputs are in a two-column row
- **AND** each field has a bold Montserrat label ("Name :", "Father Name :")
- **AND** inputs have 1px #ebebeb border, Montserrat 13px font

#### Scenario: Address field spans full width

- **GIVEN** the user loads the page
- **THEN** the Address input spans the full form width

#### Scenario: Gender radio buttons

- **GIVEN** the user loads the page
- **THEN** "Gender :" label is displayed with Male and Female radio options
- **AND** Male is checked by default
- **AND** the selected radio shows an orange (#ff6801) filled circle

#### Scenario: State and City dropdowns are side by side

- **GIVEN** the user loads the page
- **THEN** State and City select dropdowns are in a two-column row
- **AND** each has a chevron-down icon on the right side

#### Scenario: DOB, Pincode, Course, and Email fields

- **GIVEN** the user loads the page
- **THEN** DOB and Pincode are text inputs spanning full width
- **AND** Course is a full-width select dropdown with chevron icon
- **AND** Email ID is a full-width email input

#### Scenario: Submit and Reset buttons

- **GIVEN** the user loads the page
- **THEN** a "Submit Form" button is displayed with #ff6801 background, white text
- **AND** a "Reset All" button is displayed with #f8f8f8 background, #999 text
- **AND** both buttons are 140px wide, 40px tall, square corners
- **AND** buttons are right-aligned at the bottom of the form
- **AND** on hover, Submit turns #cd5300 and Reset turns #ff6801 with white text

#### Scenario: Input focus state

- **GIVEN** the user focuses on any input or select
- **THEN** the border changes to #ff6801 (orange accent)

#### Scenario: Responsive behavior

- **GIVEN** the viewport width is ≤992px
- **THEN** the two columns stack vertically (image on top, form below)
- **AND** the container uses full width minus 40px padding
- **GIVEN** the viewport width is ≤575px
- **THEN** Name/Father Name and State/City rows stack into single columns
- **GIVEN** the viewport width is ≤480px
- **THEN** buttons span full width and stack vertically

## Verification checklist

- [ ] Two-column layout matches original (50/50 split, 1400px container)
- [ ] Dark body background (#282828) with white form container
- [ ] All form fields present: Name, Father Name, Address, Gender (radio), State, City, DOB, Pincode, Course, Email
- [ ] Side-by-side rows: Name + Father Name, State + City
- [ ] Gender radio with custom orange checked state
- [ ] Select dropdowns with chevron-down icon
- [ ] Submit (#ff6801) and Reset (#f8f8f8) buttons right-aligned, square corners
- [ ] Input focus border turns orange (#ff6801)
- [ ] Montserrat font for headings/labels/inputs, Poppins for buttons
- [ ] Responsive breakpoints: 992px (stack columns), 575px (stack rows), 480px (full-width buttons)
- [ ] Placeholder image via picsum.photos with deterministic seed
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
- [ ] CNAME: regnet.free.componentdock.com
