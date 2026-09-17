# Formpost — Contact Form 09 (ColorLib Contact Form 09)

Recreation of ColorLib "Contact Form 09"  
https://colorlib.com/wp/template/contact-form-09/  
Preview (screenshot fallback — preview unavailable):  
https://colorlib.com/wp/wp-content/uploads/sites/2/contact-form-09.jpg

## Design tokens (from screenshot analysis)

| Token          | Value            | Notes                             |
| -------------- | ---------------- | --------------------------------- |
| brand          | `#c4a56e`        | Gold/tan accent (icons, button)   |
| brand-dark     | `#b89a62`        | Slightly darker for hover         |
| bg-page        | `#191919`        | Near-black full-page background   |
| text-primary   | `#ffffff`        | White headings and body text      |
| text-secondary | `#aaaaaa`        | Lighter text for placeholders     |
| card-surface   | `#2a2a2a`        | Slightly lighter dark for form bg |
| input-border   | `#444444`        | Subtle dark border on inputs      |
| font-heading   | Playfair Display | Serif heading font                |
| font-body      | Poppins          | Sans-serif body font              |

## Section structure (from screenshot)

1. **PageTitle** — "Contact Form #09" heading, white, serif font, centered.
2. **ContactInfo** — Three circular gold icon badges in a row (map pin, phone, paper-plane/send), each with a label and value below (Address, Phone, Email).
3. **ContactForm** — "Get in touch with us" heading (white, serif), then form with 4 fields (Name, Email, Subject, Message textarea) + full-width gold "SEND MESSAGE" button.
4. **Footer** — "More templates at Component Dock" link.

All wrapped in a dark full-page container with single-column centered layout (max-w-4xl).

## Scenarios

### PageTitle

```gherkin
Scenario: renders the page title
  Given I visit the formpost page
  Then I should see a heading "Contact Form #09"
```

### ContactInfo

```gherkin
Scenario: displays three contact items
  Given I visit the formpost page
  Then I should see "Address" with "198 West 21th Street, Suite 721 New York NY 10016"
  And I should see "Phone" with "+ 1235 2355 98"
  And I should see "Email" with "info@yoursite.com"

Scenario: renders accessible icons
  Given I visit the formpost page
  Then each contact icon should be hidden from screen readers
```

### ContactForm

```gherkin
Scenario: renders form fields
  Given I visit the formpost page
  Then I should see text inputs for "Name", "Email", and "Subject"
  And I should see a textarea for "Message"
  And I should see a "Send Message" button

Scenario: form accepts user input
  Given I visit the formpost page
  When I type "John" in the "Name" field
  Then the "Name" field should contain "John"

Scenario: form submission is prevented
  Given I visit the formpost page
  When I click the "Send Message" button
  Then the page should not navigate
```

### Footer

```gherkin
Scenario: renders Component Dock link
  Given I visit the formpost page
  Then I should see a link to "https://www.componentdock.com/" labeled "Component Dock"
  And the link should open in a new tab
```
