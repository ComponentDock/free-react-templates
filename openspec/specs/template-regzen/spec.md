# Template: Regzen (Ticket Booking Form)

## Purpose

Regzen is a single-page ticket booking registration form in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Colorlib Regform 29" free template (source:
https://colorlib.com/wp/template/colorlib-regform-29/), built under a
DIFFERENT name (**Regzen**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a split-screen card centered on a muted teal/blue full-page
background. The left side is a white form card with a "Booking Tickets"
heading (dark navy left-border accent), description text, and a booking form
(full name, email, person count, date picker, ticket type dropdown). Below
the fields: a price display ("$20.00 / VIP Person"), a Terms of Service
checkbox, and a dark navy "BUY NOW" button. The right side is an image
carousel showing museum/gallery photos with left/right navigation arrows.
Below the card is a white section (footer area). The template targets
galleries, museums, and exhibition venues needing a clean ticket booking UI.

**Preview URL:** https://preview.colorlib.com/theme/colorlib-regform-29/
(returns 404 at time of prep — fell back to screenshot analysis)

**Screenshot URL:** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-29.jpg

## Design tokens (from screenshot analysis)

| Token          | Value                        | Use                                                        |
| -------------- | ---------------------------- | ---------------------------------------------------------- |
| Page bg        | Muted teal `~#a8c8d4`        | Solid full-viewport background, no gradient                |
| Card           | `#ffffff`, centered, shadow  | White form card, split-screen layout (form left, images right) |
| Heading text   | Dark navy `~#1a365d`         | "Booking Tickets" h2, bold, left-border accent             |
| Accent border  | Dark navy `~#1a365d`         | 3-4px left border on heading                               |
| Body text      | Gray `~#666666`              | Description paragraph, labels                              |
| Labels         | Uppercase, small (~12px)     | "FULL NAME:", "YOUR EMAIL:", "PERSON:", "DATE:", "TICKET TYPE:" |
| Input bg       | `#ffffff`                    | Form input backgrounds                                     |
| Input border   | Light gray `~#e0e0e0`        | Input field borders                                        |
| Price text     | Dark navy bold `~#1a365d`    | "$20.00" large bold, "/ VIP Person" gray                   |
| Button bg      | Dark navy `~#1a365d`         | "BUY NOW" button                                           |
| Button text    | `#ffffff`                    | Button label                                               |
| Button shape   | Rectangle, slight radius     | ~4px border-radius                                         |
| Link color     | Blue `~#2563eb`              | "Terms of Service" link                                    |
| Carousel nav   | Gray arrows `< >`            | Left/right navigation on image carousel                    |
| Font (heading) | Serif or display font        | "Booking Tickets" appears serif-weight                     |
| Font (body)    | Sans-serif                   | Form labels, inputs, description                           |
| Section below  | `#ffffff`                    | White background below the card                            |

**Note:** Preview URL returned 404. Tokens extracted from screenshot
(1200x972 AVIF converted to PNG, analyzed visually). Exact hex values are
approximate — implementer should match visual appearance closely.

## Gherkin requirements

### Feature: Regzen Ticket Booking Form

  Scenario: Page renders with split-screen card layout
    Given the user navigates to the Regzen page
    Then a muted teal full-page background is visible
    And a centered white card is displayed
    And the card is split into a left form section and a right image section

  Scenario: Heading and description are visible
    Given the page has loaded
    Then the heading "Booking Tickets" is visible
    And the heading has a dark navy left-border accent
    And a description paragraph is visible below the heading

  Scenario: Form fields are present and functional
    Given the page has loaded
    Then a "Full Name" text input is visible
    And an "Email" text input is visible
    And a "Person" number input is visible with default value 1
    And a "Date" date picker is visible
    And a "Ticket Type" dropdown is visible with options including "VIP"

  Scenario: Price display updates based on selection
    Given the page has loaded
    Then the price "$20.00 / VIP Person" is displayed
    When the user changes the ticket type
    Then the price display updates accordingly

  Scenario: Terms of Service checkbox
    Given the page has loaded
    Then a checkbox with "By booking, you agree to the Terms of Service" is visible
    And "Terms of Service" is a clickable link

  Scenario: Buy Now button
    Given the page has loaded
    Then a "BUY NOW" button is visible with dark navy background and white text
    When the user clicks the "BUY NOW" button
    Then the form submission is triggered

  Scenario: Image carousel on right side
    Given the page has loaded
    Then the right side of the card displays an image
    And left/right navigation arrows are visible on the carousel
    When the user clicks the right arrow
    Then the next image is displayed
    When the user clicks the left arrow
    Then the previous image is displayed

  Scenario: Responsive layout
    Given the user views the page on a mobile device (viewport < 768px)
    Then the card stacks vertically (form above images)
    And all form fields remain accessible

  Scenario: Footer section
    Given the page has loaded
    Then a white section is visible below the card
    And a Component Dock credit link is present

## Verification checklist

- [ ] Page background matches muted teal ~#a8c8d4
- [ ] White card is centered with subtle shadow
- [ ] "Booking Tickets" heading has dark navy left-border accent
- [ ] All 5 form fields present (name, email, person, date, ticket type)
- [ ] Price display shows "$20.00 / VIP Person" by default
- [ ] Terms of Service checkbox and link functional
- [ ] "BUY NOW" button styled dark navy with white text
- [ ] Image carousel displays museum/gallery photos
- [ ] Carousel left/right arrows navigate between images
- [ ] Responsive: card stacks on mobile
- [ ] Footer includes Component Dock credit link
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] `public/CNAME` = `regzen.free.componentdock.com`
- [ ] `"homepage"` = `https://regzen.free.componentdock.com`
- [ ] Package name = `@free-react-templates/regzen`
