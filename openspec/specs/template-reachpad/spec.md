# Template: Reachpad (Contact Form)

## Purpose

Recreation of ColorLib **Contact Form 08** (slug: `contact-form-08`).

- **ColorLib source:** https://colorlib.com/wp/template/contact-form-08/
- **Preview URL:** https://preview.colorlib.com/theme/bootstrap/contact-form-08/
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **Description:** A single-page contact form template with a full-bleed background image, a white card overlay containing the form, and a centered page heading above. Clean, professional aesthetic with green accent color.

## Design tokens

Extracted from the live preview CSS (`css/style.css`) and `index.html`:

| Token | Value | Notes |
|-------|-------|-------|
| Font family | `"Poppins", Arial, sans-serif` | Used globally; headings and body |
| Brand color | `#71a95a` | Primary green — buttons, links, input focus |
| Brand hover | `#5a8947` | Darker green on hover |
| Body text color | `#666666` | Body paragraphs and secondary text |
| Heading color | `#000000` | h1–h5, form labels |
| Button radius | `5px` | Rounded corners on buttons |
| Input radius | `5px` | Rounded corners on form inputs |
| Wrapper radius | `5px` | Rounded corners on the image wrapper |
| Input height | `50px` | Standard input field height |
| Button shadow | `0px 10px 20px -6px rgba(0,0,0,0.12)` | Subtle elevation |
| Input shadow | `0px 8px 19px -13px rgba(0,0,0,0.09)` | Very subtle shadow on inputs |
| Label style | `uppercase, 12px, font-weight 600` | Small caps form labels |
| Button style | `background #71a95a, color #fff, border-radius 5px, padding 12px 16px` | Primary CTA |
| Section padding | `7em 0` | Main section vertical spacing |
| Page background | `#ffffff` | White page background |

## Visual design (from screenshot)

The ColorLib screenshot (`contact-form-08.jpg`) shows:
- Centered page heading "Contact Form #08" above the main content
- A wide wrapper/card with a full-bleed background photograph (nature/landscape image) covering the right side and top/bottom
- The form sits in a white semi-overlay card on the left side (roughly 60% width)
- White card contains: "Get in touch with us" heading, form fields stacked vertically, "Send Message" green button
- Form fields: Full Name and Email in a 2-column row, Subject full width, Message textarea full width
- Clean, airy layout with generous whitespace
- Professional, approachable feel

## Gherkin requirements

### Scenario: Page loads with heading and form
  **Given** the user navigates to the Reachpad page
  **When** the page renders
  **Then** the heading "Get in touch with us" is visible
  **And** the page heading text is visible above the form

### Scenario: Form fields are present
  **Given** the page has loaded
  **Then** the form contains a "Full Name" text input
  **And** the form contains an "Email Address" email input
  **And** the form contains a "Subject" text input
  **And** the form contains a "Message" textarea
  **And** the form contains a "Send Message" submit button

### Scenario: Full Name and Email are side by side
  **Given** the form is displayed on desktop viewport
  **Then** the "Full Name" field and "Email Address" field appear in a two-column row

### Scenario: Form labels are styled correctly
  **Given** the form is rendered
  **Then** all form labels are uppercase, small (12px), and bold (600 weight)
  **And** the heading text color is black

### Scenario: Brand color is applied
  **Given** the page is rendered
  **Then** the "Send Message" button background is green (#71a95a)
  **And** the button text is white
  **And** the button has rounded corners (border-radius 5px)

### Scenario: Background image wrapper
  **Given** the page is rendered
  **Then** the form card is displayed inside a wrapper with a background image
  **And** the wrapper has rounded corners
  **And** the wrapper is full width within its container

### Scenario: Responsive layout
  **Given** the user is on a mobile viewport (below 768px)
  **Then** the form fields stack vertically (single column)
  **And** the wrapper adapts to full width

### Scenario: Input focus states
  **Given** the user focuses on any form input
  **Then** the input border color changes to the brand green (#71a95a)

### Scenario: Button hover state
  **Given** the user hovers over the "Send Message" button
  **Then** the button background darkens to #5a8947
  **And** the button shadow deepens

## Verification checklist

- [ ] Font: Poppins loaded via Google Fonts in index.html
- [ ] Brand color #71a95a applied to button and link elements via @theme
- [ ] Form fields: Full Name, Email, Subject, Message, Send Message button
- [ ] Full Name + Email in two-column layout on desktop
- [ ] Labels: uppercase, 12px, font-weight 600
- [ ] Background image wrapper with rounded corners (use picsum.photos placeholder)
- [ ] Button: green bg, white text, 5px radius, shadow
- [ ] Input focus: green border
- [ ] Responsive: single column on mobile
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code (only in spec + TEMPLATES.md)
- [ ] App folder: apps/reachpad
- [ ] Package name: @free-react-templates/reachpad
