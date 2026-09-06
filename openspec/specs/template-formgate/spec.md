# Template: FormGate (Modal Form)

## Purpose

Recreation of ColorLib "Modal 05" — a centered login/registration modal form with social media icons and a clean Bootstrap-style layout.

- **ColorLib source:** [modal-05](https://colorlib.com/wp/template/modal-05/)
- **Preview URL:** https://preview.colorlib.com/theme/bootstrap/modal-05/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/modal-05.jpg
- **New name:** `formgate` (apps/formgate, @free-react-templates/formgate)
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Replication Reference

### Source Analysis (fetched 2026-09-06)

**Preview page structure (from live DOM at preview.colorlib.com/theme/bootstrap/modal-05/):**
- Single full-height section with centered content
- Heading "Modal 05" + "Launch Modal 05" button
- Bootstrap modal (centered, fade animation)
- Modal header: close button (X) top-right
- Modal body: "Create Your Account" heading, 3 social icons, signup form (name, email, password, submit), "I'm already a member" link
- Dependencies: Bootstrap 4, jQuery, Popper.js, Ionicons, Poppins font

**Visual design (from screenshot):**
- White background section
- Centered vertically, full-height layout
- Clean, minimal modal with white background
- Subtle box shadow on modal
- Blue primary button (#007bff)
- Social icons as gray circular buttons
- Uppercase small labels for form fields

### Design Tokens

| Token | Value | Source |
|---|---|---|
| Brand primary | `#007bff` (Bootstrap blue) | CSS `:root` `--primary`, `.btn-primary` |
| Brand primary hover | `#0069d9` | `.btn-primary:hover` |
| Text color | `#212529` | `body` color |
| Background | `#fff` | `body` background, `.ftco-section` background |
| Label color | `rgba(0,0,0,0.3)` | `.modal-content .modal-body label` |
| Social icon bg | `rgba(0,0,0,0.05)` | `.ftco-footer-social li a` |
| Font family | `Poppins, Arial, sans-serif` | Global styles |
| Font weights used | 300, 400, 500, 600, 700, 800, 900 | @font-face declarations |
| Form input height | `52px` | `.form-control` |
| Form input border-radius | `5px` | `.form-control` |
| Modal max-width | `450px` | `.modal-dialog` |
| Modal box-shadow | `0px 10px 34px -15px rgba(0,0,0,0.24)` | `.modal-content` |
| Social icon size | `40x40px`, `border-radius: 50%` | `.ftco-footer-social li a` |
| Close button size | `40x40px` | `.modal-content button.close` |
| Section border-radius | `0` (none) | `.ftco-section` |

## Gherkin Requirements

### Feature: FormGate — Login/Registration Modal Form

#### Scenario: Page renders with heading and launch button
- **Given** the user navigates to the FormGate page
- **When** the page loads
- **Then** the heading "FormGate" (or equivalent) is visible
- **And** a "Launch Modal" button is visible below the heading
- **And** the page background is white (#fff)
- **And** the content is centered vertically on the page

#### Scenario: Modal opens on launch button click
- **Given** the user is on the FormGate page
- **When** the user clicks the "Launch Modal" button
- **Then** a centered modal appears with a fade-in animation
- **And** the modal has a white background with a subtle box shadow
- **And** a close button (X) is visible in the top-right corner of the modal
- **And** the background behind the modal is dimmed (backdrop)

#### Scenario: Modal displays registration form
- **Given** the modal is open
- **When** the user inspects the modal body
- **Then** a heading "Create Your Account" is visible
- **And** three social media icon buttons are visible (Twitter/X, Facebook, Instagram)
- **And** the social icons are circular (40x40px) with gray background
- **And** a "Full Name" text input is visible with placeholder "John Doe"
- **And** an "Email Address" text input is visible with placeholder "johndoe@gmail.com"
- **And** a "Password" input is visible with placeholder "Password"
- **And** a "Sign Up" submit button is visible (blue, primary color, rounded)
- **And** an "I'm already a member" link is visible below the form

#### Scenario: Form field labels are styled correctly
- **Given** the modal is open
- **When** the user views the form labels
- **Then** each label is uppercase, 12px font size, and light gray color (rgba(0,0,0,0.3))

#### Scenario: Modal closes on close button click
- **Given** the modal is open
- **When** the user clicks the close button (X)
- **Then** the modal fades out and closes
- **And** the background overlay disappears

#### Scenario: Modal closes on backdrop click
- **Given** the modal is open
- **When** the user clicks outside the modal (on the backdrop)
- **Then** the modal closes

#### Scenario: Modal is keyboard accessible
- **Given** the modal is open
- **When** the user presses the Escape key
- **Then** the modal closes

#### Scenario: Responsive layout
- **Given** the user views the page on a mobile device (width < 768px)
- **When** the page renders
- **Then** the content remains centered and readable
- **And** the modal is properly sized and scrollable if needed

#### Scenario: Accessibility basics
- **Given** the modal is rendered in the DOM
- **When** a screen reader inspects the modal
- **Then** the modal has `role="dialog"` and `aria-labelledby` pointing to the heading
- **And** the close button has `aria-label="Close"`
- **And** form inputs have associated `<label>` elements

## Verification Checklist

- [ ] `openspec/specs/template-formgate/spec.md` exists with Gherkin scenarios
- [ ] `docs/templates/formgate/tasks.md` exists with section breakdown
- [ ] Design tokens extracted and documented
- [ ] Preview DOM structure analyzed and recorded
- [ ] Screenshot visual design noted
- [ ] New name `formgate` does not collide with existing apps/ or specs
- [ ] No ColorLib references in planned app code (provenance only in spec/PR)
- [ ] Footer will link Component Dock (https://www.componentdock.com/)
