# Template: Reachpoint (Contact Form)

## Purpose

Recreation of ColorLib "Contact Form V11" — a minimal, centered contact form template with two-column layout.

- **Source**: https://colorlib.com/wp/template/contact-form-11/
- **Preview**: https://preview.colorlib.com/theme/bootstrap/contact-form-11/
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/contact-form-11.jpg
- **Stack**: React 19, Vite, Tailwind CSS 4, TypeScript

## Design Tokens

Extracted from the live preview HTML/CSS and screenshot analysis.

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--brand` | `#e86b5a` | Button background, link color (coral/salmon) |
| `--brand-hover` | `#d45a4a` | Button hover state |
| `--text` | `#000000` | Headings |
| `--text-body` | `#333333` | Body paragraph text |
| `--text-muted` | `#999999` | Input placeholder text |
| `--border` | `#d9d9d9` | Input bottom border, form separator |
| `--bg` | `#ffffff` | Page background |
| `--success` | `#55A44E` | Form success message |
| `--error` | `#B90B0B` | Form validation error |

### Typography

| Element | Font | Weight | Size |
|---------|------|--------|------|
| Headings (h2, h3) | Poppins | 700 (bold) | h2: 3.5rem, h3: 2rem |
| Body text | Roboto | 400 (normal) | 1rem (16px) |
| Inputs | Roboto | 400 | 1rem |
| Button | Roboto | 400 | 1rem |

### Spacing & Layout

- Content padding: 7rem vertical (84px)
- Form right padding: 6rem (separating form from sidebar)
- Form has a visible right border (1px solid #d9d9d9) on desktop
- Two-column layout: ~60% left (form) / ~35% right (text sidebar)
- Centered container with max-width (Bootstrap col-md-10)

### Button

- Background: `#e86b5a` (coral/salmon)
- Text: white
- Border-radius: 0 (square corners)
- Padding: py-2 px-4 (Bootstrap)
- Height: 55px (matches input height)
- No border

### Inputs

- Border: none except bottom border (1px solid #d9d9d9)
- Border-radius: 0
- Height: 55px
- Padding-left/right: 0
- Focus state: border-color changes to #000, no shadow

## Gherkin Requirements

### Scenario: Page loads with contact form
- **Given** a user visits the reachpoint page
- **Then** the page title reads "Reachpoint"
- **And** a heading "Fill the form. It's easy." is visible
- **And** the contact form is displayed with first name, last name, email, and message fields
- **And** a "Send Message" button is visible

### Scenario: Form displays two-column layout
- **Given** a user visits the reachpoint page on a desktop viewport
- **Then** the form occupies the left column
- **And** a sidebar with heading "Let's talk about everything." occupies the right column
- **And** a vertical border separates the form from the sidebar
- **And** the "Read more" link is visible in the sidebar

### Scenario: Form fields have correct styling
- **Given** a user views the contact form
- **Then** first name and last name fields appear side by side
- **And** the email field spans full width below
- **And** the message textarea spans full width below email
- **And** all inputs show only a bottom border (no side/top borders)
- **And** all inputs have placeholder text

### Scenario: Form validates required fields
- **Given** a user clicks "Send Message" without filling any fields
- **Then** the form should not submit
- **And** validation feedback is shown for required fields

### Scenario: Form submits successfully
- **Given** a user fills in first name, last name, email, and message
- **And** clicks "Send Message"
- **Then** a success message "Your message was sent, thank you!" appears
- **And** the success message is displayed in green (#55A44E)

### Scenario: Responsive layout
- **Given** a user visits the reachpoint page on a mobile viewport (< 992px)
- **Then** the form and sidebar stack vertically
- **And** the right border on the form is removed
- **And** form fields remain full width

### Scenario: Footer links to Component Dock
- **Given** a user scrolls to the bottom of the page
- **Then** a footer link to "https://www.componentdock.com/" is visible
- **And** the link text reads "Component Dock"

## Verification Checklist

- [ ] Two-column layout renders correctly on desktop (form left, text right)
- [ ] Vertical border separates form from sidebar
- [ ] Heading font is Poppins bold
- [ ] Body font is Roboto
- [ ] Button is coral (#e86b5a) with square corners
- [ ] Inputs have bottom-only border (#d9d9d9)
- [ ] Input focus state shows black border
- [ ] First name and last name fields are side by side
- [ ] Form validates required fields
- [ ] Success message displays in green
- [ ] Mobile layout stacks columns vertically
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
- [ ] `npm run typecheck` passes
- [ ] `npm run lint` passes
