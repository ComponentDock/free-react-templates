# Template: MsgDrop (Contact Form)

## Purpose

Recreation of ColorLib **Contact Form V13** as a React 19 + Vite + Tailwind 4 + TypeScript template.

- **Source**: https://colorlib.com/wp/template/contact-form-v13/
- **Preview URL**: https://preview.colorlib.com/theme/contact-form-v13/ (returned 404 at time of research — screenshot used as sole reference)
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/ContactFrom_v13.jpg
- **Description**: A split-screen contact form with a dark map background on the left and a clean white form panel on the right. Features a green phone number badge overlay on the map, validated form fields with colored underlines, and a gradient coral-to-pink Send button.

## Design Tokens

Extracted from the screenshot analysis (preview unavailable):

| Token | Value | Notes |
|---|---|---|
| Background (left panel) | Dark map image | Satellite/streets map of NYC area, dark theme — use a placeholder map image (`https://picsum.photos/seed/msgdrop-map/960/939`) |
| Phone badge background | `#4CAF50` (green) | Pill-shaped, white text, phone icon |
| Form background | `#FFFFFF` (white) | Right panel |
| Heading color | `#222222` | "Contact Us" — large, bold |
| Label color | `#333333` | Field labels ("Name", "Email", etc.) |
| Input text color | `#333333` | Filled field text |
| Placeholder color | `#999999` | "Phone Number...", "Questions/Comments..." |
| Focus/active underline | `#FF6B6B` (coral red) | Bottom border on form fields |
| Send button gradient | `#FF6B6B` → `#FF3CAC` (coral to pink) | Linear gradient left-to-right |
| Send button text | `#FFFFFF` | White |
| Send button shape | Pill / fully rounded | `border-radius: 50px` |
| Validated checkmark | `#4CAF50` (green) | Appears on validated fields |
| Font family | System sans-serif (Roboto-like) | Clean, modern sans-serif |

## Gherkin Requirements

### Section: Split-Screen Layout

```gherkin
Feature: Split-screen contact form layout

  Scenario: Full-page split layout
    Given the user loads the MsgDrop page
    Then the viewport is split into two equal columns
    And the left column displays a dark map background image
    And the right column displays a white form panel

  Scenario: Responsive layout on mobile
    Given the user views on a viewport width less than 768px
    Then the two columns stack vertically
    And the map section appears above the form
```

### Section: Map Panel (Left)

```gherkin
Feature: Map panel with phone badge

  Scenario: Phone badge display
    Given the user views the map panel
    Then a green pill-shaped badge is visible on the map
    And the badge displays a phone number "(+00) 345 6389"
    And the badge includes a phone icon to the left of the number

  Scenario: Phone badge hover
    Given the user hovers over the phone badge
    Then the badge shows a subtle hover effect (opacity or scale change)
```

### Section: Contact Form (Right)

```gherkin
Feature: Contact form fields

  Scenario: Form heading
    Given the user views the form panel
    Then a heading "Contact Us" is displayed at the top
    And the heading is large, bold, and dark colored

  Scenario: Name field
    Given the user views the Name field
    Then a "Name" label is displayed above the input
    And the input has a bottom border line
    And the input shows placeholder or filled text

  Scenario: Email field
    Given the user views the Email field
    Then an "Email" label is displayed above the input
    And the input has a bottom border line
    And the input shows placeholder or filled text

  Scenario: Phone field
    Given the user views the Phone field
    Then a "Phone" label is displayed above the input
    And the input shows placeholder "Phone Number..."
    And the input has a bottom border line

  Scenario: Message field
    Given the user views the Message field
    Then a "Message" label is displayed above the textarea
    And the textarea shows placeholder "Questions/Comments..."
    And the textarea has a bottom border line

  Scenario: Field focus underline
    Given the user clicks into any form field
    Then the bottom border turns coral/red (#FF6B6B)
    And the border remains coral/red while the field is focused

  Scenario: Field validation checkmark
    Given the user fills in a valid Name or Email value
    Then a green checkmark icon appears to the right of the field
```

### Section: Send Button

```gherkin
Feature: Send button

  Scenario: Button display
    Given the user views the form
    Then a "Send" button is displayed at the bottom of the form
    And the button has a coral-to-pink gradient background
    And the button text is white
    And the button is fully rounded (pill shape)

  Scenario: Button hover
    Given the user hovers over the Send button
    Then the button shows a hover effect (brightness change or scale)

  Scenario: Button click
    Given the user fills all required fields
    When the user clicks the Send button
    Then the form submission is handled (prevent default, show confirmation)
```

### Section: Footer

```gherkin
Feature: Footer attribution

  Scenario: Component Dock link
    Given the user scrolls to the bottom of the page
    Then a footer or attribution line is visible
    And it links to https://www.componentdock.com/
    And the link text reads "Component Dock"
```

## Verification Checklist

- [ ] Split-screen layout renders correctly (50/50 columns)
- [ ] Left panel shows dark map background image
- [ ] Green phone badge renders on the map with phone icon and number
- [ ] Right panel shows white form with "Contact Us" heading
- [ ] All four fields render: Name, Email, Phone, Message
- [ ] Field labels match the original ("Name", "Email", "Phone", "Message")
- [ ] Placeholder text matches ("Phone Number...", "Questions/Comments...")
- [ ] Focus state shows coral/red underline
- [ ] Validation shows green checkmark on valid fields
- [ ] Send button has coral-to-pink gradient
- [ ] Send button is pill-shaped (fully rounded)
- [ ] Responsive: stacks vertically on mobile (<768px)
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] `public/CNAME` contains `msgdrop.free.componentdock.com`
- [ ] `homepage` in package.json is `https://msgdrop.free.componentdock.com`
- [ ] `vite.config.ts` registers `injectUiSource()`
- [ ] Footer credits Component Dock (not ColorLib)
