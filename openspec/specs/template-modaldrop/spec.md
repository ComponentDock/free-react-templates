# Template: ModalDrop (Modal)

## Purpose

Recreation of the ColorLib "Modal 17" template — a full-screen modal overlay
with a centered login form. The page shows a simple "Launch modal" button;
clicking it opens a full-screen modal with a top orange accent border, a
"Log In" heading, descriptive text, username/email + password fields, a
primary login button, and "Forgot password" / "Sign up here" links.

- **Source:** [ColorLib Modal 17](https://colorlib.com/wp/template/modal-17/)
- **Preview:** https://preview.colorlib.com/theme/bootstrap/modal-17/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/modal-17.jpg
  (unreachable at prep time — spec based on live preview DOM + CSS)
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Design category:** Modal (Bootstrap Modal Templates)
- **Description:** A Bootstrap-based login modal with a centered launch
  button, full-screen overlay, top orange accent bar, light-gray form
  background, and shadow depth.

## Design Tokens

Extracted from the live preview stylesheet (`css/style.css`) and HTML structure:

| Token | Value | Notes |
|-------|-------|-------|
| Brand color (accent) | `#ed5107` | Orange — top border of modal body (4px solid) |
| Background (modal body) | `#efefef` | Light gray |
| Text color (headings) | `#000000` | h3 inside modal |
| Text color (body) | `#777777` | Paragraphs inside modal |
| Text color (labels) | `#555555` | Form labels, links |
| Text color (placeholder/note) | `#999999` | `.custom-note` class |
| Button radius | `4px` | `.btn { border-radius: 4px }` |
| Button border | `none` | Flat buttons, no border |
| Form control border | `transparent` | No visible border on inputs |
| Form control shadow | `0 1px 3px 0 rgba(0,0,0,0.2)` | Subtle depth on inputs |
| Modal shadow | `0 10px 50px -10px rgba(0,0,0,0.9)` | Heavy drop shadow on modal body |
| Body font family | `"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif` | Primary typeface |
| Heading font family | Same as body | No separate heading font |
| Loaded fonts | Roboto (300, 400), Poppins (300, 400, 500), Source Serif Pro (400, 600) | Via Google Fonts CDN |
| Modal border-radius | `0px` | Sharp corners on modal |
| Modal body top border | `4px solid #ed5107` | Orange accent bar |
| Content height | `100vh` | Full viewport height for launch area |

## Gherkin Requirements

### Scenario: Page loads with launch button visible
- **Given** the user navigates to the page
- **Then** a "Launch modal" button should be visible in the center of the viewport
- **And** the modal should NOT be visible

### Scenario: Clicking launch button opens modal
- **Given** the page has loaded
- **When** the user clicks the "Launch modal" button
- **Then** a modal overlay should appear
- **And** the modal should contain a "Log In" heading
- **And** the modal should have a top orange accent border (#ed5107, 4px)

### Scenario: Modal contains login form fields
- **Given** the modal is open
- **Then** a "Username/Email" input field should be visible
- **And** a "Password" input field should be visible
- **And** a "Login" button should be visible
- **And** a "Forgot password" link should be visible

### Scenario: Modal contains signup link
- **Given** the modal is open
- **Then** text "If you don't have account yet" should be visible
- **And** a "Sign up here" link should be visible

### Scenario: Modal closes on backdrop click
- **Given** the modal is open
- **When** the user clicks outside the modal (on the backdrop)
- **Then** the modal should close
- **And** the launch button should be visible again

### Scenario: Modal closes on close button
- **Given** the modal is open
- **When** the user clicks the close button (×)
- **Then** the modal should close

### Scenario: Form fields have correct styling
- **Given** the modal is open
- **Then** input fields should have a subtle shadow (0 1px 3px 0 rgba(0,0,0,0.2))
- **And** input fields should have no visible border
- **And** the Login button should have rounded corners (4px radius)
- **And** the Login button should have no border

### Scenario: Modal has correct visual tokens
- **Given** the modal is open
- **Then** the modal body background should be light gray (#efefef)
- **And** the modal should have a heavy drop shadow
- **And** the heading text should be dark (#000)
- **And** paragraph text should be medium gray (#777)

## Verification Checklist

- [ ] Launch button renders centered on page
- [ ] Clicking launch button opens a full-screen modal overlay
- [ ] Modal has 4px solid #ed5107 top accent border
- [ ] Modal body background is #efefef
- [ ] Modal heading "Log In" renders in dark text
- [ ] Descriptive paragraph renders in medium gray
- [ ] Username/Email input field is present with placeholder
- [ ] Password input field is present with placeholder
- [ ] Login button styled with 4px border-radius, no border
- [ ] "Forgot password" link is present and clickable
- [ ] "Sign up here" link is present
- [ ] Modal closes on backdrop click
- [ ] Modal closes on close button (×)
- [ ] Form inputs have subtle box-shadow
- [ ] No references to ColorLib in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] Public/CNAME set to modaldrop.free.componentdock.com
- [ ] Homepage set to https://modaldrop.free.componentdock.com
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] Component Dock branding in footer
