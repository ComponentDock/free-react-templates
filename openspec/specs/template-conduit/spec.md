# Template: Conduit (Contact Form Template)

## Purpose

Conduit is a single-page contact-form template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free
"Contact Form V16" website template (see TEMPLATES.md, line 1431), built
under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The reference is a modern, animated contact form overlay: a full-viewport
blurred workspace background with a purple/violet color overlay; a top
utility bar ("Co." logo left, "CONTACT US" button right); a centered
modal-style form card with a banner header image ("CONTACT US" text
overlay on an office/building photo), a close (X) button, four form
fields with left-aligned icons (name, email, phone, message), animated
field focus transitions, and a purple rounded "SEND Now" submit button.
The design emphasizes field animations on focus, autocomplete support,
and client-side validation with clear error states.

## Design reference (replication findings)

- **Original:** ColorLib "Contact Form V16" — contact form template
  (source: https://colorlib.com/wp/template/contact-form-v16/).
  Listed in TEMPLATES.md line 1431. Screenshot:
  `ContactFrom_v16.jpg` (1920×939, AVIF format, reviewed visually).
- **Live preview URL:** `https://preview.colorlib.com/theme/contact-form-v16/`
  — **UNREACHABLE (returns HTTP 404, only 9 bytes "Not Found").**
  Fallback to the ColorLib template page description + screenshot analysis.
  The template page (https://colorlib.com/wp/template/contact-form-v16/)
  confirms: "Contact Form v16 includes a cool field animation that you
  can experience first-hand by visiting the live demo preview. There's
  also a banner section at the top with a title and a background image.
  The free contact form template includes autocomplete and validation, too."
- **Screenshot analysis (browser-reviewed):** The 1920×939 screenshot shows:
  1. Full-page background: blurred photo of an office workspace (laptop,
     desk, chair) with a semi-transparent purple/violet overlay.
  2. Top bar: white "Co." logo text (left), purple "CONTACT US" button
     with rounded corners (right, uppercase).
  3. Centered modal card: white background, moderate shadow, rounded
     corners. Top section has a banner image (modern glass office
     building) with "CONTACT US" in bold white uppercase centered over it.
  4. Close button: purple X icon in the top-right corner of the card.
  5. Form fields (top to bottom):
     - Name field: person icon + "Matthew" placeholder text
     - Email field: envelope icon + "matthew@example.com" placeholder
     - Phone field: phone icon + "ex90" placeholder (focused state
       shown with red/pink border and X clear button)
     - Message textarea: chat bubble icon + "Your comments.." placeholder
  6. Submit button: "SEND NOW" in uppercase white text on a purple
     rounded-pill button, centered below the form.
  7. Aesthetic: clean, modern, minimalist. Purple brand color dominant.
     Fields have subtle borders, clean spacing, and icon-left layout.

## Section order (from screenshot analysis — preview unreachable)

1. **Background layer** — full-viewport blurred workspace photo with
   semi-transparent purple/violet color overlay (rgba). This is a
   fixed/absolute background behind all content.
2. **Top bar** — horizontal bar with "Co." brand text (white, sans-serif,
   left-aligned) and a "CONTACT US" button (purple bg, white text,
   rounded corners, right-aligned). Links to the contact form or
   scrolls to it.
3. **Modal form card** — centered, max-width ~500px, white bg, rounded
   corners, box-shadow. Contains:
   - **Banner header** — full-width image (office/architecture photo)
     with "CONTACT US" overlay text (white, bold, uppercase, centered).
     Height ~120–150px.
   - **Close button** — X icon, absolute-positioned top-right of card,
     purple color.
   - **Name field** — icon (User/person) on left, placeholder "Name",
     bottom border or full-border style.
   - **Email field** — icon (Mail/envelope) on left, placeholder
     "Email", email type with autocomplete.
   - **Phone field** — icon (Phone) on left, placeholder "Phone",
     optional field.
   - **Message field** — icon (MessageSquare/chat) on left, placeholder
     "Your comments..", textarea (multi-line).
   - **Submit button** — "SEND NOW" uppercase, purple bg (#8B5CF6 or
     similar), white text, rounded-pill shape, centered, full-width or
     auto-width.
4. **Footer** — Component Dock attribution link.

## Design tokens (from screenshot analysis)

| Token          | Value / Description                                    | Use                                                        |
| -------------- | ------------------------------------------------------ | ---------------------------------------------------------- |
| Page bg        | Blurred workspace photo + purple overlay               | Full-viewport fixed background                             |
| Overlay color  | ~`rgba(139, 92, 246, 0.75)` or `rgba(124, 58, 237, 0.7)` | Purple semi-transparent overlay over blurred photo      |
| Brand primary  | ~`#8B5CF6` (violet-500) or `#7C3AED` (violet-600)    | Buttons, close icon, focus accents, top bar button         |
| Card bg        | `#FFFFFF`                                              | Form card background                                       |
| Card shadow    | `0 4px 24px rgba(0,0,0,0.15)` (estimated)             | Modal card elevation                                       |
| Card radius    | ~8–12px                                                | Card corner rounding                                       |
| Input border   | `#E5E7EB` (gray-200)                                  | Default field border                                       |
| Input focus    | `#8B5CF6` (brand) or `#EF4444` (error red)            | Active/focused field border                                |
| Error state    | Red/pink border (visible in screenshot on phone field) | Validation error styling                                   |
| Text primary   | `#1F2937` (gray-800)                                  | Form labels / headings                                    |
| Text placeholder | `#9CA3AF` (gray-400)                                | Input placeholder text                                     |
| Button text    | `#FFFFFF`                                              | Submit button text                                         |
| Button radius  | ~24–30px (pill shape)                                  | Rounded-pill submit button                                 |
| Font family    | Sans-serif (system or Google Font like Poppins/Inter)  | All text                                                   |
| Banner text    | White, bold, uppercase, ~24–28px                      | "CONTACT US" header overlay                                |
| Icon color     | `#9CA3AF` (gray-400) or `#6B7280` (gray-500)         | Field left icons                                           |

## Gherkin requirements

```gherkin
Feature: Conduit — Contact Form Template
  As a visitor to a business website
  I want to submit a contact inquiry via a modern animated form
  So that I can reach the business owner

  Background:
    Given the Conduit page is loaded

  Scenario: Page loads with blurred purple background
    Then the full viewport has a blurred workspace photo background
    And a semi-transparent purple overlay covers the background

  Scenario: Top bar displays brand and CTA
    Then a top bar is visible
    And the left side shows a "Co." brand text in white
    And the right side shows a "CONTACT US" button in purple

  Scenario: Contact form card is centered on the page
    Then a white modal-style card is centered on the page
    And the card has rounded corners and a subtle shadow

  Scenario: Banner header shows "CONTACT US"
    Then the card top has a banner image section
    And the text "CONTACT US" is displayed over the banner in white bold uppercase

  Scenario: Close button is visible on the card
    Then a close (X) icon is visible in the top-right corner of the card
    And clicking the close button dismisses the form card

  Scenario: Name field renders with icon and placeholder
    Then the name field shows a person/user icon on the left
    And the name field has placeholder text "Name"
    And the name field is a text input

  Scenario: Email field renders with icon and placeholder
    Then the email field shows an envelope/mail icon on the left
    And the email field has placeholder text "Email"
    And the email field has type "email" for browser autocomplete

  Scenario: Phone field renders with icon and placeholder
    Then the phone field shows a phone icon on the left
    And the phone field has placeholder text "Phone"
    And the phone field is a text input

  Scenario: Message field renders with icon and placeholder
    Then the message field shows a chat/message icon on the left
    And the message field has placeholder text "Your comments.."
    And the message field is a textarea (multi-line)

  Scenario: Field focus animation
    When a user clicks or tabs into a form field
    Then the field border transitions to the brand purple color
    And the field label or icon animates (subtle transition)

  Scenario: Field validation error on submit
    Given the name field is empty
    And the email field is empty
    When the user clicks "SEND NOW"
    Then error styling appears on required fields (red border)
    And the form does not submit

  Scenario: Successful form submission
    Given valid name "Matthew" and email "matthew@example.com" are entered
    When the user clicks "SEND NOW"
    Then the form shows a success confirmation state
    And a success message is displayed

  Scenario: Submit button styling
    Then the "SEND NOW" button is purple with white uppercase text
    And the button has a rounded-pill shape
    And the button is centered below the form fields

  Scenario: Responsive layout
    When the viewport is narrow (mobile)
    Then the form card adjusts width to fit the viewport
    And all fields remain accessible and usable

  Scenario: Footer Component Dock link
    Then the page footer contains a link to https://www.componentdock.com/
    And the link text mentions "Component Dock"
```

## Verification checklist

- [ ] Spec created with full section order and design tokens
- [ ] Screenshot analyzed visually (1920×939, AVIF converted to PNG)
- [ ] Preview URL documented as unreachable (404) — fallback to screenshot
- [ ] All form fields identified with correct icons and placeholders
- [ ] Brand purple color captured from screenshot analysis
- [ ] Gherkin scenarios cover: layout, fields, validation, submission,
      responsiveness, close button, footer
- [ ] Design tokens table complete with hex estimates
- [ ] No ColorLib references in implementation code (only in spec)
- [ ] Name "conduit" verified no collision with apps/ or specs/
