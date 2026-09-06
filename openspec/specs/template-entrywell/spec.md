# Template: Entrywell (Sign-In/Sign-Up Modal)

## Purpose

Entrywell is a single-page sign-in/sign-up MODAL in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Modal 09" free
template (source: https://colorlib.com/wp/template/modal-09/), built under a
DIFFERENT name (**Entrywell**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a Bootstrap 4.3 modal template: a centered page with a
"Launch Modal 09" button that opens a wide, centered modal dialog. The modal
has a split layout — a background image on the left half and a dark form
panel on the right half with Sign In / Sign Up tab navigation. The form
includes username/email and password inputs, a "Remember Me" checkbox, a
"Forgot Password" link, and a Terms of Service agreement checkbox on the
Sign Up tab.

**WHAT MAKES ENTRYWELL DISTINCT (signature behaviors):**

1. **Full-page centered layout with launch button.** A white `.ftco-section`
   fills the viewport with a centered heading ("Modal 09") and a Bootstrap
   primary button ("Launch Modal 09") that triggers the modal via
   `data-toggle="modal" data-target="#exampleModalCenter"`. The recreation
   uses React state to toggle the modal open/closed.

2. **Wide split-layout modal dialog.** `.modal-dialog` is `max-width: 900px`,
   vertically centered (`.modal-dialog-centered`). `.modal-content` has no
   border (`border: none`), `border-radius: 0`, white background, and a
   prominent box-shadow `0px 10px 34px -15px rgba(0, 0, 0, 0.24)`.

3. **Left half: background image with overlay.** The left `.modal-body` has
   class `.img` with a `background-image: url(images/bg-1.jpg)` covering the
   full area. On mobile (`max-width: 767.98px`) it collapses to 300px height.

4. **Right half: dark form panel with tabs.** The right `.modal-body` has
   class `.color-2` with background `#2b2b28`. It contains:
   - A tab navigation (`.nav-tabs border-0`) with two links: "Sign In"
     (active by default) and "Sign Up". Active tab text is `#e3b04b`
     (golden/amber brand color); inactive tabs are `rgba(255, 255, 255, 0.1)`.
   - **Sign In tab**: heading "Sign In", username input, password input,
     submit button ("Sign In"), "Remember Me" checkbox with custom
     `.fill-checkbox` styling (brand color check), "Forgot Password" link,
     and "Not a member? Sign Up" text link.
   - **Sign Up tab**: heading "Sign Up", full name input, email input,
     password input, "I agree all statements in terms of service" checkbox,
     submit button ("Sign Up"), and "I'm already a member! Sign In" link.

5. **Form styling.** Inputs are transparent background with bottom border
   only (`border-bottom: 1px solid rgba(255, 255, 255, 0.1)`), white text
   at 70% opacity, height 30px. Labels are uppercase, 12px, letter-spacing
   1px. Submit buttons are `#e3b04b` background, height 52px, border-radius
   4px. On hover the button becomes transparent with brand color text.

6. **Close button.** A white (×) close button positioned absolute in the
   top-right corner of the modal (`width: 40px, height: 40px`,
   `background: rgba(0, 0, 0, 0.1)`, `color: #fff`).

## Naming

The ColorLib source name "Modal 09" is FORBIDDEN as the app name. **Entrywell**
is the new, original name — single lowercase word, kebab-case, no collision
with `apps/`, `openspec/specs/`, `docs/templates/`, or any TEMPLATES.md name
(verified 2026-09-06: zero hits for `entrywell` in TEMPLATES.md, `ls apps/`,
`openspec/specs/`, `docs/templates/`).

## Design reference (replication findings)

- **Original:** ColorLib "Modal 09" (page title: "Modal 09"). Listed in
  TEMPLATES.md under **Bootstrap Modal Templates** (category header around
  line 800; the unchecked row at line 810 — `wp/template/modal-09/`).
  Source slug: `modal-09`.
- **Live preview — REACHABLE (verified 2026-09-06 by direct fetch):** The
  naive `https://preview.colorlib.com/theme/modal-09/` returns 404; the
  REAL preview is the bootstrap path
  **`https://preview.colorlib.com/theme/bootstrap/modal-09/`** (HTTP 200,
  HTML body). The page has `<title>Modal 09</title>`, loads Roboto font
  (weights 300, 400, 700) and three stylesheets: `css/ionicons.min.css`
  (icon font), `css/flaticon.css` (Flaticon icons), and `css/style.css`
  (Bootstrap 4.3.1 + custom styles).
- **Screenshot:** `https://colorlib.com/wp/wp-content/uploads/sites/2/modal-09.jpg`
  (AVIF format). Shows a white page with a centered "Modal 09" heading and
  a button; the modal is open showing the split layout with background image
  on the left and dark form panel on the right.

### Design tokens extracted from preview CSS

| Token                   | Value                                        |
| ----------------------- | -------------------------------------------- |
| Brand color (primary)   | `#e3b04b` (golden/amber)                     |
| Font family             | `"Roboto", Arial, sans-serif` (Google Fonts) |
| Font weights            | 300, 400, 700                                |
| Body font size          | 14px                                         |
| Body line height        | 1.8                                          |
| Modal max-width         | 900px                                        |
| Modal border-radius     | 0                                            |
| Modal box-shadow        | `0px 10px 34px -15px rgba(0, 0, 0, 0.24)`    |
| Modal background        | `#fff` (content), `#2b2b28` (form panel)     |
| Button border-radius    | 4px                                          |
| Button background       | `#e3b04b`                                    |
| Button hover            | transparent, color `#e3b04b`                 |
| Input border-bottom     | `1px solid rgba(255, 255, 255, 0.1)`         |
| Input background        | transparent                                  |
| Input text color        | `rgba(255, 255, 255, 0.7)`                   |
| Input placeholder color | `rgba(255, 255, 255, 0.2)`                   |
| Label style             | uppercase, 12px, letter-spacing 1px          |
| Close button background | `rgba(0, 0, 0, 0.1)`                         |
| Close button color      | `#fff`                                       |
| Tab active color        | `#e3b04b`                                    |
| Tab inactive color      | `rgba(255, 255, 255, 0.1)`                   |
| Checkbox custom color   | `#e3b04b` (via `--color` CSS variable)       |

## Gherkin requirements

### Background: Modal lifecycle

Given the page has loaded
When the user views the page
Then a "Modal 09" heading and a "Launch Modal 09" button are visible

### Scenario: Launch modal

Given the modal is closed
When the user clicks the "Launch Modal 09" button
Then the modal dialog appears centered on screen
And the modal has a split layout (image left, form right)
And a close button (×) is visible in the top-right corner

### Scenario: Close modal via close button

Given the modal is open
When the user clicks the close button (×)
Then the modal dialog closes
And the page returns to the initial state

### Scenario: Close modal via backdrop click

Given the modal is open
When the user clicks outside the modal dialog (on the backdrop)
Then the modal dialog closes

### Scenario: Sign In tab is active by default

Given the modal is open
Then the "Sign In" tab is active
And the Sign In form is visible
And the Sign Up form is hidden

### Scenario: Sign In form fields

Given the Sign In tab is active
Then a "Sign In" heading is visible
And a "Username" input field is visible with placeholder "Username"
And a "Password" input field is visible with placeholder "Password"
And a "Sign In" submit button is visible
And a "Remember Me" checkbox is visible
And a "Forgot Password" link is visible
And "Not a member? Sign Up" text link is visible

### Scenario: Switch to Sign Up tab

Given the modal is open
When the user clicks the "Sign Up" tab
Then the "Sign Up" tab becomes active
And the Sign Up form is visible
And the Sign In form is hidden

### Scenario: Sign Up form fields

Given the Sign Up tab is active
Then a "Sign Up" heading is visible
And a "Full Name" input field is visible with placeholder "John Doe"
And an "Email Address" input field is visible with placeholder "johndoe@gmail.com"
And a "Password" input field is visible with placeholder "Password"
And a "Sign Up" submit button is visible
And an "I agree all statements in terms of service" checkbox is visible
And "I'm already a member! Sign In" text link is visible

### Scenario: Switch back to Sign In from Sign Up

Given the Sign Up tab is active
When the user clicks the "Sign In" link at the bottom of the Sign Up form
Then the "Sign In" tab becomes active
And the Sign In form is visible

### Scenario: Responsive layout

Given the modal is open
When the viewport width is less than 768px
Then the left image panel collapses to 300px height
And the modal remains scrollable

### Scenario: Tab navigation accessibility

Given the modal is open
When the user navigates with keyboard
Then the tab links receive focus
And the active tab has visible focus indicator

## Verification checklist

- [ ] Modal opens on button click and closes on close button / backdrop
- [ ] Sign In tab is active by default with correct form fields
- [ ] Sign Up tab switch works with all form fields
- [ ] Tab links toggle active state correctly
- [ ] Brand color `#e3b04b` is used for buttons, active tab, and checkboxes
- [ ] Dark panel background `#2b2b28` on right half
- [ ] Background image on left half
- [ ] Modal max-width is 900px, no border-radius, no border
- [ ] Box-shadow applied: `0px 10px 34px -15px rgba(0, 0, 0, 0.24)`
- [ ] Form inputs have transparent background with bottom border only
- [ ] Labels are uppercase, 12px, letter-spacing 1px
- [ ] Button hover transitions to transparent with brand color text
- [ ] Close button has dark overlay background with white text
- [ ] Responsive: image panel collapses on small viewports
- [ ] Roboto font family via Google Fonts
- [ ] Footer links to https://www.componentdock.com/
- [ ] No references to ColorLib in app code
- [ ] 100% test coverage (Vitest + Testing Library)
- [ ] Public/CNAME: entrywell.free.componentdock.com
- [ ] Homepage: https://entrywell.free.componentdock.com
