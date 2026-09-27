# Template: Regnet (Registration Form)

## Purpose

Recreation of ColorLib **Reg Form V15** — a student registration form template
with a two-column split layout (hero image left, form right) on a dark body
background.

- **Source slug:** `colorlib-regform-15`
- **Preview URL:** `https://colorlib.com/etc/regform/colorlib-regform-15/`
- **ColorLib page:** `https://colorlib.com/wp/template/colorlib-regform-15/`
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

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

## Gherkin requirements

### Feature: Student Registration Form

#### Scenario: Page renders with two-column layout
  - **Given** the user loads the page
  - **Then** the body background is dark charcoal (#282828)
  - **And** a white container is centered with max-width 1400px
  - **And** the layout is two columns: image (left, 50%) and form (right, 50%)

#### Scenario: Hero image displays correctly
  - **Given** the user loads the page
  - **Then** a placeholder image (students with tablet) fills the left column
  - **And** the image is responsive (scales with container)

#### Scenario: Form heading displays
  - **Given** the user loads the page
  - **Then** the heading "STUDENT REGISTRATION FORM" is displayed
  - **And** it uses Montserrat font, weight 700, 20px, uppercase, color #222

#### Scenario: Name and Father Name fields are side by side
  - **Given** the user loads the page
  - **Then** the Name and Father Name inputs are in a two-column row
  - **And** each field has a bold Montserrat label ("Name :", "Father Name :")
  - **And** inputs have 1px #ebebeb border, Montserrat 13px font

#### Scenario: Address field spans full width
  - **Given** the user loads the page
  - **Then** the Address input spans the full form width

#### Scenario: Gender radio buttons
  - **Given** the user loads the page
  - **Then** "Gender :" label is displayed with Male and Female radio options
  - **And** Male is checked by default
  - **And** the selected radio shows an orange (#ff6801) filled circle

#### Scenario: State and City dropdowns are side by side
  - **Given** the user loads the page
  - **Then** State and City select dropdowns are in a two-column row
  - **And** each has a chevron-down icon on the right side

#### Scenario: DOB, Pincode, Course, and Email fields
  - **Given** the user loads the page
  - **Then** DOB and Pincode are text inputs spanning full width
  - **And** Course is a full-width select dropdown with chevron icon
  - **And** Email ID is a full-width email input

#### Scenario: Submit and Reset buttons
  - **Given** the user loads the page
  - **Then** a "Submit Form" button is displayed with #ff6801 background, white text
  - **And** a "Reset All" button is displayed with #f8f8f8 background, #999 text
  - **And** both buttons are 140px wide, 40px tall, square corners
  - **And** buttons are right-aligned at the bottom of the form
  - **And** on hover, Submit turns #cd5300 and Reset turns #ff6801 with white text

#### Scenario: Input focus state
  - **Given** the user focuses on any input or select
  - **Then** the border changes to #ff6801 (orange accent)

#### Scenario: Responsive behavior
  - **Given** the viewport width is ≤992px
  - **Then** the two columns stack vertically (image on top, form below)
  - **And** the container uses full width minus 40px padding
  - **Given** the viewport width is ≤575px
  - **Then** Name/Father Name and State/City rows stack into single columns
  - **Given** the viewport width is ≤480px
  - **Then** buttons span full width and stack vertically

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
