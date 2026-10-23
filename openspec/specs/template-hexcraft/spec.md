# Template: Hexcraft (Booking Wizard)

## Purpose

A multi-step online booking/reservation wizard template. Recreation of ColorLib's **Colorlib Wizard 2**.

- **Source:** https://colorlib.com/wp/template/colorlib-wizard-2/
- **Preview (original):** https://colorlib.com/etc/bwiz/colorlib-wizard-2/index.html
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-2.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **New name:** `hexcraft` (apps/hexcraft, @free-react-templates/hexcraft)
- **Deploy:** hexcraft.free.componentdock.com

## Design Tokens (extracted from preview CSS)

| Token                | Value                                                                      | Usage                                              |
| -------------------- | -------------------------------------------------------------------------- | -------------------------------------------------- |
| `--brand-gold`       | `#edc948`                                                                  | Active step indicator, CTA buttons, links, accents |
| `--brand-gold-hover` | `#d4b43f`                                                                  | Button hover state                                 |
| `--navy`             | `#012353`                                                                  | Button text color                                  |
| `--bg-warm`          | `#f9f6f1`                                                                  | Page background (fallback)                         |
| `--muted-blue`       | `#5d718e`                                                                  | Form input bottom borders, select controls         |
| `--dropdown-blue`    | `#81acee`                                                                  | Dropdown hover highlight                           |
| `--text-muted`       | `#999999`                                                                  | Placeholder / secondary text                       |
| `--white`            | `#ffffff`                                                                  | Primary text on dark bg, dropdown bg               |
| Font: Body           | Poppins (Regular 400)                                                      | All body text, inputs, buttons                     |
| Font: Medium         | Poppins (Medium 500)                                                       | Step labels, active step text                      |
| Font: Heading        | Bitter (Regular 400)                                                       | "Your reservation" heading                         |
| Button radius        | 21px (pill shape)                                                          | CTA buttons                                        |
| Button height        | 42px                                                                       | CTA buttons                                        |
| Button width         | 164px                                                                      | CTA buttons                                        |
| Button text          | uppercase, 14px, Poppins Medium                                            | CTA buttons                                        |
| Form inputs          | transparent bg, bottom-border only (1px solid #5d718e), no outline         | All form fields                                    |
| Step indicator       | 3px left-border, vertical line, active = gold fill                         | Wizard sidebar                                     |
| Section bg           | Background image (booking-themed photo) with semi-transparent card overlay | Full-page bg                                       |

## Visual Design Notes (from screenshot)

- Full-viewport centered layout with a large background image (warm-toned booking/hotel photo)
- Left side: image with overlay text "YOUR RESERVATION" in white uppercase with a thin white border
- Right side: dark semi-transparent card containing the wizard form
- Wizard has a left sidebar showing 4 step labels (Choose Date, Choose Room, Make a Reservation, Confirmation) connected by a vertical line; active step highlighted in gold
- Form fields are minimal: bottom-border only, no filled backgrounds
- Single gold pill-shaped "BOOK NOW" button centered at bottom of each step
- Overall aesthetic: elegant, hotel-booking vibe, dark overlay on warm photo background

## Sections (from source HTML)

The template is a **4-step wizard form** — not a scrolling landing page. Each step occupies the same viewport space; navigation moves between steps.

1. **Choose Date (Step 1)**
   - Check-in date picker
   - Check-out date picker
   - Duration dropdown (1–5 Nights)
   - Room count dropdown (1–5 Rooms)
   - "Book now" forward button

2. **Choose Room (Step 2)**
   - Boarding summary card (room names, adult/child counts)
   - Check-in date picker
   - Check-out date picker
   - Room 1: Adult count dropdown, Children count dropdown
   - Room 2: Adult count dropdown, Children count dropdown
   - Forward/backward navigation buttons

3. **Make a Reservation (Step 3)**
   - First name, Last name inputs
   - Email input
   - Phone input
   - Address, City, Country inputs
   - Zip code input
   - Special requests textarea
   - Terms checkbox ("I agree to the Terms & Conditions")
   - Forward/backward navigation buttons

4. **Confirmation (Step 4)**
   - Boarding summary (dates, rooms, adults, children)
   - Confirmation checkbox list (4 items, all pre-checked):
     - I have read and accept terms and conditions
     - I understand that my booking may be subject to availability
     - I agree with privacy policy
     - I agree with cancellation and refund policy
   - Forward/backward navigation buttons

## Requirements

### Feature: Hexcraft Booking Wizard

#### Scenario: Page loads with Step 1 visible

- **GIVEN** the user opens the Hexcraft booking page
- **THEN** the "Choose Date" step is visible
- **AND** the step indicator highlights "Choose Date" in gold
- **AND** the background image is displayed

#### Scenario: User fills Step 1 and advances

- **GIVEN** the user is on Step 1
- **WHEN** the user selects a check-in date
- **AND** the user selects a check-out date
- **AND** the user selects a duration
- **AND** the user selects a room count
- **AND** the user clicks "Book now"
- **THEN** Step 2 "Choose Room" becomes visible
- **AND** the step indicator highlights "Choose Room"

#### Scenario: User navigates backward from Step 2

- **GIVEN** the user is on Step 2
- **WHEN** the user clicks the backward button
- **THEN** Step 1 "Choose Date" becomes visible

#### Scenario: User fills Step 2 room details

- **GIVEN** the user is on Step 2
- **WHEN** the user selects adult count for Room 1
- **AND** the user selects children count for Room 1
- **AND** the user clicks forward
- **THEN** Step 3 "Make a Reservation" becomes visible

#### Scenario: User fills reservation details

- **GIVEN** the user is on Step 3
- **WHEN** the user enters first name "John"
- **AND** the user enters last name "Doe"
- **AND** the user enters email "john@example.com"
- **AND** the user enters phone "+1234567890"
- **AND** the user enters address "123 Main St"
- **AND** the user enters city "New York"
- **AND** the user enters country "USA"
- **AND** the user enters zip "10001"
- **AND** the user checks the terms checkbox
- **AND** the user clicks forward
- **THEN** Step 4 "Confirmation" becomes visible

#### Scenario: User confirms booking

- **GIVEN** the user is on Step 4
- **AND** the boarding summary shows the selected details
- **WHEN** the user clicks forward on the confirmation step
- **THEN** the booking is submitted

#### Scenario: Step indicator updates on navigation

- **GIVEN** the user is on Step 1
- **WHEN** the user advances to Step 2
- **THEN** Step 1 indicator shows completed
- **AND** Step 2 indicator shows active (gold)

#### Scenario: Responsive layout on mobile

- **GIVEN** the user opens the page on a mobile viewport (width < 768px)
- **THEN** the wizard stacks vertically (image on top, form below)
- **AND** the step sidebar moves above the form content

### Requirement: Component Dock attribution

The system SHALL credit Component Dock — the marketplace that publishes this
template — with a visible link to `https://www.componentdock.com/` in the site
footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT
change the footer's own layout or copy beyond the credit line.

#### Scenario: Footer attribution

- **GIVEN** any page of the template is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL contain an anchor whose `href` is
  `https://www.componentdock.com/`
- **AND** the anchor's text SHALL name Component Dock

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/hexcraft/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/hexcraft/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] 4-step wizard with smooth step transitions
- [ ] Step indicator sidebar with gold active state and vertical line
- [ ] Date picker inputs (check-in / check-out) in Steps 1 and 2
- [ ] Dropdown selects for duration, room count, adult/child counts
- [ ] Form inputs with bottom-border-only styling (transparent bg)
- [ ] Gold pill-shaped CTA buttons (border-radius 21px)
- [ ] Full-viewport background image with dark card overlay
- [ ] "Your Reservation" heading in Bitter font, white, uppercase, bordered
- [ ] Backward/forward navigation between steps
- [ ] Step 4 confirmation summary with checkbox list
- [ ] Responsive: stacks vertically on mobile (< 768px)
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Footer links to https://www.componentdock.com/
- [ ] Tests: 100% coverage (lines, functions, branches, statements)
- [ ] Typecheck passes, lint passes, build succeeds
- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Footer credits Component Dock with a link to https://www.componentdock.com/
