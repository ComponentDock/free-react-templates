# Template: Goldmark (Contact Form)

## Purpose

Recreation of ColorLib's **Contact Form 09** (`contact-form-09`), a dark-background
contact form template with gold accent. Preview URL:
`https://preview.colorlib.com/theme/bootstrap/contact-form-09/`
Source: `https://colorlib.com/wp/template/contact-form-09/`

Stack: React 19 · Vite · Tailwind CSS 4 · TypeScript.
Deployed to `goldmark.free.componentdock.com`.

## Design tokens

Extracted from the preview CSS (`css/style.css`) at
`https://preview.colorlib.com/theme/bootstrap/contact-form-09/css/style.css`:

| Token | Value | Notes |
|-------|-------|-------|
| `--brand-primary` | `#bc9864` | Warm gold/tan — buttons, icons, labels, focus |
| `--bg-body` | `#0c0c0c` | Near-black page background |
| `--text-body` | `#666666` | Medium-gray body text |
| `--text-white` | `#ffffff` | Section headings, form labels |
| `--text-muted` | `rgba(255,255,255,0.8)` | Input text and links |
| `--placeholder-color` | `rgba(255,255,255,0.3)` | Form placeholder text |
| `--input-bg` | `rgba(255,255,255,0.03)` | Dark, near-transparent input background |
| `--input-focus-bg` | `rgba(255,255,255,0.1)` | Slightly brighter on focus |
| `--btn-hover` | `#a57f48` | Darker gold on hover |
| `--error-color` | `#f65c78` | Form validation errors |
| `--success-color` | `#28a745` | Success message |

Font family: `"Poppins", Arial, sans-serif` (load Poppins from Google Fonts).
Font weights used: 400 (body), 500 (spans), 600 (labels, button text), 700 (success).

### Button tokens
- Background: `#bc9864`, border-color: `#bc9864`, text: `#000`
- Radius: `5px`
- Box-shadow: `0px 10px 20px -6px rgba(0,0,0,0.12)` (hover: `0.22` alpha)
- Padding: `12px 16px`, uppercase, font-weight 600, font-size 14px

### Icon circle tokens
- Size: `60px × 60px`
- Border-radius: `50%`
- Background: `#bc9864`
- Icon: `20px` font-size, color `#000`

### Form input tokens
- Height: `50px`, border-radius: `5px`
- Background: `rgba(255,255,255,0.03)`, no border
- Focus: background `rgba(255,255,255,0.1)`, border-color `#bc9864`
- Font-size: `16px`, padding: `0 20px`

## Requirements (Gherkin)

```gherkin
Feature: Goldmark Contact Form

  Background:
    Given the page is loaded on a dark background (#0c0c0c)

  Scenario: Page heading
    Then the heading "Contact Form" is visible in white text
    And the heading uses Poppins font

  Scenario: Contact info boxes
    Given three contact info boxes are shown in a row
    Then each box has a circular gold icon (60px, #bc9864 background)
    And box 1 shows an address with map-marker icon
    And box 2 shows a phone number with phone icon
    And box 3 shows an email with paper-plane icon
    And each box label is gold (#bc9864) and uppercase
    And each box value is white/muted text

  Scenario: Contact form
    Given the contact form is displayed
    Then the form heading reads "Get in touch with us" in white
    And there are four fields: Name, Email, Subject, Message
    And each input has a dark transparent background with light placeholder text
    And the textarea for Message is resizable vertically
    And a "Send Message" button spans the full width
    And the button has gold background with dark text and rounded corners

  Scenario: Form validation
    Given the user clicks "Send Message" without filling any field
    Then validation errors appear in pink (#f65c78)
    When the user fills all required fields and submits
    Then a success message "Your message was sent, thank you!" appears in green

  Scenario: Hover interactions
    When the user hovers over a contact info icon
    Then the icon circle should remain gold
    When the user hovers over the Send Message button
    Then the button background darkens to #a57f48
```

## Verification checklist

- [ ] Poppins font loaded via Google Fonts link in `index.html`
- [ ] Dark background (#0c0c0c) applied to body/root
- [ ] Gold accent (#bc9864) used for icons, labels, button, focus states
- [ ] Three contact info boxes with circular gold icons
- [ ] Form with Name, Email, Subject, Message fields
- [ ] Full-width "Send Message" button with gold styling
- [ ] Button hover darkens to #a57f48
- [ ] Form validation with error messages in pink
- [ ] Success message in green
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
- [ ] `npm run spec:validate` passes
- [ ] Deployed to goldmark.free.componentdock.com
