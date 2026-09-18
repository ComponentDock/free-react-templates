# Template: Formify (Contact Form)

## Purpose

Formify is a single-page contact form template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Contact Form v3"
free template design, built under a DIFFERENT name (**Formify**), with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

- **Source slug:** `contact-form-v3`
- **Source URL:** https://colorlib.com/wp/template/contact-form-v3/
- **Preview URL:** https://preview.colorlib.com/theme/contact-form-v3/ (404 at
  time of prep — design tokens extracted from TEMPLATES.md screenshot via
  vision analysis)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript
- **Description:** "A powerful bundle of two variations of free contact form
  templates blended into one beautiful solution for your business website."

## Design reference (replication findings)

- **Demo DOM:** Preview URL returned HTTP 404. All design analysis is based on
  the TEMPLATES.md screenshot (`ContactFrom_v3.jpg`, 1920×939).
- **Screenshot analysis (vision):**
  - Two side-by-side contact form cards displayed on a faded scenic
    mountain/forest background image (green-tinted overlay).
  - Left card: simpler "Say Hi" form — Name, Email, Message + Submit.
  - Right card: "Get a Quote" form — Name, Email, Needed Services (dropdown),
    Budget (dropdown), Message + Submit.
  - Both cards share the same heading ("CONTACT US"), radio toggle
    ("Say Hi" / "Get a Quote"), and green gradient background.
  - Green gradient: darker forest green at top (~#3d8b37) → lighter
    lime/yellow-green at bottom (~#b8d930 / #c5e14a).
  - White text throughout; underline-only input fields (no box borders,
    just bottom rule lines in semi-transparent white).
  - Submit button: white/transparent with dark or green text, rectangular
    with slight border-radius, pill-ish appearance.
  - Cards have rounded corners (small border-radius ~8-12px).
  - Overall aesthetic: clean, modern, flat design; two-form layout side
    by side; nature photography background.

### Design tokens extracted from screenshot

| Token              | Value                                        |
| ------------------ | -------------------------------------------- |
| Primary gradient   | `linear-gradient(180deg, #3d8b37 0%, #b8d930 100%)` |
| Card background    | Green gradient (see above)                   |
| Text color         | `#ffffff` (white)                            |
| Input underline    | `rgba(255,255,255,0.4)` (semi-transparent white) |
| Button background  | `#ffffff` (white) or `rgba(255,255,255,0.2)` |
| Button text        | Dark green or white                          |
| Button border-radius | ~4px (slightly rounded)                   |
| Card border-radius | ~8-12px                                      |
| Font family        | Sans-serif (likely Open Sans or similar — no Google Fonts link found on preview) |
| Background image   | Scenic mountain/forest landscape (faded, green-tinted) |

## Recreation decisions

- Photos → seeded picsum placeholders (`picsum.photos/seed/formify-<n>/<w>/<h>`)
- Icons → lucide-react
- Forms prevent default (no backend)
- No ColorLib assets copied
- Background image → use a nature-themed picsum seed or solid gradient fallback
- Two form variations rendered side by side on desktop, stacked on mobile

## Requirements

### Requirement: Page layout

The system SHALL render a full-viewport page with a scenic background and two
contact form cards displayed side by side (stacked on mobile).

#### Scenario: Page renders with background

- **GIVEN** the Formify page is rendered
- **WHEN** the page loads
- **THEN** the page SHALL display a full-viewport layout with a background image
- **AND** two form cards SHALL be displayed side by side (or stacked on mobile)

#### Scenario: Responsive layout

- **GIVEN** the viewport width is less than 768px
- **WHEN** the Formify page is rendered
- **THEN** the two form cards SHALL stack vertically

### Requirement: Form card heading

Each form card SHALL display a "CONTACT US" heading in white uppercase bold
text centered at the top of the card.

#### Scenario: Heading content

- **GIVEN** a form card is rendered
- **WHEN** the card is visible
- **THEN** the heading text SHALL be "CONTACT US"
- **AND** the heading SHALL be uppercase, bold, white, and centered

### Requirement: Form type toggle

Each form card SHALL have a radio toggle to switch between "Say Hi" and
"Get a Quote" modes. Selecting "Get a Quote" reveals additional fields
(Needed Services, Budget).

#### Scenario: Default to Say Hi

- **GIVEN** the form card is rendered
- **WHEN** the page loads
- **THEN** the "Say Hi" radio SHALL be selected by default
- **AND** only Name, Email, and Message fields SHALL be visible

#### Scenario: Switch to Get a Quote

- **GIVEN** the form card is rendered with "Say Hi" selected
- **WHEN** the user selects the "Get a Quote" radio
- **THEN** the Needed Services dropdown SHALL appear
- **AND** the Budget dropdown SHALL appear
- **AND** the Message field SHALL remain visible

#### Scenario: Switch back to Say Hi

- **GIVEN** the form card is in "Get a Quote" mode
- **WHEN** the user selects the "Say Hi" radio
- **THEN** the Needed Services dropdown SHALL be hidden
- **AND** the Budget dropdown SHALL be hidden

### Requirement: Say Hi form fields

The "Say Hi" form variant SHALL contain three underline-style input fields:
Your Name (text), Your Email (email), and Your Message (textarea).

#### Scenario: Say Hi field rendering

- **GIVEN** the form is in "Say Hi" mode
- **WHEN** the card is rendered
- **THEN** fields SHALL be rendered: Name (text input), Email (email input),
  Message (textarea)
- **AND** all fields SHALL use underline-only styling (bottom border, no box)

#### Scenario: Field placeholders

- **GIVEN** the form is in "Say Hi" mode
- **WHEN** no values are entered
- **THEN** placeholder text SHALL be: "Your Name", "Your Email", "Your Message"

### Requirement: Get a Quote form fields

The "Get a Quote" form variant SHALL contain five fields: Your Name (text),
Your Email (email), Needed Services (select/dropdown), Budget
(select/dropdown), and Your Message (textarea).

#### Scenario: Get a Quote field rendering

- **GIVEN** the form is in "Get a Quote" mode
- **WHEN** the card is rendered
- **THEN** fields SHALL be rendered: Name, Email, Needed Services (dropdown),
  Budget (dropdown), Message
- **AND** all fields SHALL use underline-only styling

#### Scenario: Dropdown options

- **GIVEN** the form is in "Get a Quote" mode
- **WHEN** the user opens the Needed Services dropdown
- **THEN** it SHALL show sample service options (e.g., Web Design, Development,
  Marketing)
- **AND** the Budget dropdown SHALL show sample budget ranges

### Requirement: Submit button

Each form card SHALL have a white-background "SUBMIT" button at the bottom.

#### Scenario: Button rendering

- **GIVEN** a form card is rendered
- **WHEN** the card is visible
- **THEN** a "SUBMIT" button SHALL be rendered at the bottom of the form
- **AND** the button SHALL have a white background with slight border-radius
- **AND** the button text SHALL be uppercase

#### Scenario: Form submission prevention

- **GIVEN** the form is filled out
- **WHEN** the user clicks the Submit button
- **THEN** the default form submission SHALL be prevented (no backend)

### Requirement: Card styling

Both form cards SHALL have a green gradient background, rounded corners, and
white text.

#### Scenario: Card gradient

- **GIVEN** a form card is rendered
- **WHEN** the card is visible
- **THEN** the card background SHALL be a vertical gradient from dark green
  to light lime green

#### Scenario: Card corners

- **GIVEN** a form card is rendered
- **WHEN** the card is visible
- **THEN** the card SHALL have rounded corners (approximately 8-12px radius)

### Requirement: Dark mode

The page SHALL support dark mode toggling via the `.dark` class on the root
element, following the monorepo dark-mode convention.

#### Scenario: Dark mode toggle

- **GIVEN** the Formify page is rendered
- **WHEN** the dark-mode toggle is activated
- **THEN** the `.dark` class SHALL be toggled on `document.documentElement`
- **AND** the page background and card styles SHALL adapt accordingly

### Requirement: Footer with Component Dock link

The page footer SHALL include a link to https://www.componentdock.com/
branded as "Component Dock", per the monorepo conventions.

#### Scenario: Footer link

- **GIVEN** the Formify page is rendered
- **WHEN** the footer is visible
- **THEN** it SHALL contain a link to https://www.componentdock.com/
- **AND** the link text SHALL reference "Component Dock"

## Verification checklist

- [ ] Two form cards rendered side by side (stacked on mobile)
- [ ] "CONTACT US" heading in white uppercase bold on each card
- [ ] Radio toggle "Say Hi" / "Get a Quote" on each card
- [ ] "Say Hi" mode shows Name, Email, Message fields
- [ ] "Get a Quote" mode shows Name, Email, Needed Services, Budget, Message
- [ ] Underline-only input styling (no box borders)
- [ ] Green gradient background on cards
- [ ] White "SUBMIT" button with slight border-radius
- [ ] Form submission prevented (no backend)
- [ ] Background scenic image or gradient
- [ ] Dark mode support
- [ ] Footer with Component Dock link
- [ ] 100% test coverage
- [ ] No ColorLib references in app code
- [ ] `npm run spec:validate` passes
