# Template: OliveBox (Contact Form)

## Purpose

Recreation of ColorLib **Contact Form 14** — a two-column professional contact
page with an olive green background, a text panel on the left ("Let's work
together"), and a white card with offset drop shadow on the right containing a
detailed project inquiry form (budget, target launch, etc.).

- **Source slug:** `contact-form-14`
- **Source URL:** https://colorlib.com/wp/template/contact-form-14/
- **Preview URL:** https://preview.colorlib.com/theme/bootstrap/contact-form-14/
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens

Extracted from the live preview CSS (`css/style.css`) and HTML DOM:

| Token              | Value / Notes                                                        |
| ------------------ | -------------------------------------------------------------------- |
| Page background    | `#697c37` (olive green)                                             |
| Body text color    | `rgba(255,255,255,0.5)` (semi-transparent white on green bg)        |
| Heading color (h3) | `#fff` (white, on green background)                                 |
| Body font          | "Roboto", system fallback                                            |
| Heading font       | "Poppins", sans-serif                                               |
| h3 size/weight     | `2rem`, `700`                                                        |
| Content padding    | `7rem 0`                                                             |
| Form card (`.box`) | White `#fff`, `padding: 40px`, `box-shadow: -30px 30px 0 0 rgba(0,0,0,0.08)` |
| Card sub-heading   | `#888`, `letter-spacing: .05rem`, `text-transform: uppercase`, `font-weight: 400`, `font-size: 14px` |
| Form control       | `border: 1px solid #ccc`, `border-radius: 4px`, height 50px         |
| Label color        | `#000`                                                               |
| Button (`.btn-primary`) | Bootstrap blue `#007bff`, `border-radius: 4px`, `box-shadow: 0 1px 5px 0 rgba(0,0,0,0.1)`, height 50px, white text |
| Button hover       | White text, no color change                                          |
| Select dropdown    | Height 50px, same border/focus as text inputs                       |
| Error text         | `color: red`, `font-size: 12px`                                      |
| Success message    | `#55A44E`, `font-weight: bold`, `font-size: 18px`                   |
| Warning message    | `#B90B0B`                                                            |
| Textarea           | `resize: vertical`                                                   |

**Screenshot visual notes** (from ColorLib preview image — 1200×972px):
The template is a single-section page (no header, no footer) with a full-bleed
olive green background. The left column has the large white heading "Let's work
together" followed by two paragraphs of body text in semi-transparent white, and
a linked email address at the bottom. The right column contains a white card
with a pronounced offset box shadow (shifted down-left), inside which sits the
form sub-heading "How Can We Help?" in uppercase gray, followed by a structured
form with side-by-side field rows and a full-width green submit button.

## Requirements

### Requirement: Page layout

The page is a single-section contact page (no navbar, no footer) with a full-bleed
olive green background and a two-column centered content area.

#### Scenario: Olive green background

- **WHEN** I visit the OliveBox page
- **THEN** the page background is olive green (`#697c37`)

#### Scenario: Two-column layout

- **WHEN** I visit the OliveBox page
- **THEN** I see a two-column layout centered on the page
- **AND** the left column occupies roughly 40% width and the right column 60%

### Requirement: Left column — text content

The left column displays a heading, descriptive paragraphs, and a contact email
link, all rendered in white/semi-transparent white on the green background.

#### Scenario: Heading displayed

- **WHEN** I visit the OliveBox page
- **THEN** the left column shows the heading "Let's work together"
- **AND** the heading uses the Poppins font at 2rem bold weight in white

#### Scenario: Descriptive text paragraphs

- **WHEN** I visit the OliveBox page
- **THEN** the left column shows two paragraphs of descriptive body text
- **AND** the text is rendered in semi-transparent white

#### Scenario: Email link

- **WHEN** I visit the OliveBox page
- **THEN** the left column contains a clickable email link (e.g. "info@mywebsite.com")

### Requirement: Right column — form card

The right column contains a white card with an offset drop shadow, housing the
project inquiry form.

#### Scenario: White card with shadow

- **WHEN** I visit the OliveBox page
- **THEN** the right column shows a white background card
- **AND** the card has a pronounced offset box shadow (shifted down and left)

#### Scenario: Form sub-heading

- **WHEN** I look at the form card
- **THEN** I see the uppercase gray sub-heading "How Can We Help?"
- **AND** the sub-heading is centered with letter-spacing and 14px font size

### Requirement: Form fields

The form contains six fields: Name, Organization, Email, Project Description,
Budget, and Target Launch.

#### Scenario: Name field (required)

- **WHEN** I view the form
- **THEN** I see a Name input field with label "Name *"
- **AND** it has placeholder text "Your name"

#### Scenario: Organization field (optional)

- **WHEN** I view the form
- **THEN** I see an Organization input field with label "Organization"
- **AND** it has placeholder text "Your organization"

#### Scenario: Name and Organization side by side

- **WHEN** I view the form
- **THEN** the Name and Organization fields are displayed in the same row

#### Scenario: Email field (required)

- **WHEN** I view the form
- **THEN** I see an Email input field with label "Email *"
- **AND** it has placeholder text "Your email address"

#### Scenario: Project Description field (required)

- **WHEN** I view the form
- **THEN** I see a Project Description textarea with label "Project Description *"
- **AND** the textarea is resizable vertically

#### Scenario: Budget field

- **WHEN** I view the form
- **THEN** I see a Budget select dropdown with label "Budget"
- **AND** the dropdown options include: "Choose...", "< $1,000", "$2,000 - $5,000", "$5,000 - $15,000", "$15,000 - $25,000", "$25,000 >"

#### Scenario: Target Launch field

- **WHEN** I view the form
- **THEN** I see a Target Launch input field with label "Target Lunch"
- **AND** it has placeholder text "Example: January 15th"

#### Scenario: Budget and Target Launch side by side

- **WHEN** I view the form
- **THEN** the Budget and Target Launch fields are displayed in the same row

### Requirement: Submit button

The form has a full-width submit button styled as Bootstrap primary button.

#### Scenario: Submit button rendered

- **WHEN** I view the form
- **THEN** I see a "Send Message" button
- **AND** the button spans the full width of the form
- **AND** the button has a blue Bootstrap primary color background with white text
- **AND** the button has a 4px border radius

### Requirement: Form submission feedback

The form provides success and warning messages after submission.

#### Scenario: Success message

- **WHEN** I submit the form successfully
- **THEN** I see the message "Your message was sent, thank you!"
- **AND** the success message is styled in green (`#55A44E`) with bold text

#### Scenario: Warning message

- **WHEN** form submission fails or validation triggers a warning
- **THEN** a warning message area is shown in red (`#B90B0B`)

### Requirement: Form validation

Required fields (Name, Email, Project Description) must be validated before
submission.

#### Scenario: Empty required fields blocked

- **WHEN** I click "Send Message" without filling required fields
- **THEN** the form does not submit
- **AND** error indicators appear on the missing required fields

#### Scenario: Error text styling

- **WHEN** a validation error is displayed
- **THEN** the error text is shown in red at 12px font size

## Verification checklist

- [ ] Page renders with olive green (`#697c37`) full-bleed background
- [ ] Two-column layout: left text panel + right form card
- [ ] Left column: "Let's work together" heading (Poppins, white), paragraphs, email link
- [ ] Right column: white card with offset drop shadow (`-30px 30px 0 0`)
- [ ] "How Can We Help?" sub-heading (uppercase, gray, centered)
- [ ] All six form fields present: Name*, Org, Email*, Description*, Budget, Launch
- [ ] Name + Org side by side; Budget + Launch side by side
- [ ] Submit button: full-width, blue primary, rounded corners, shadow
- [ ] Form validation blocks empty required fields
- [ ] Success message shows after valid submission
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] Font loading: Poppins (headings) + Roboto (body) via Google Fonts
- [ ] Tailwind theme tokens defined in `@theme` block in `index.css`
- [ ] Component file structure: `src/App.tsx`, `src/components/ContactPanel.tsx`, `src/components/ContactForm.tsx`
