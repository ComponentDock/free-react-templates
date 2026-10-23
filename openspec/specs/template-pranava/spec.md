# Template: Pranava (Yoga Studio)
<!-- prep-status: shipped-as=zen -->
> **SHIPPED-UNDER** — the ColorLib `namaste` design this prep describes already
> ships as `apps/zen` (<https://zen.free.componentdock.com>).
> Do not scaffold `apps/pranava`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-zen/spec.md`.

## Purpose

Pranava is a single-page yoga studio landing page in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Namaste" free
template (source: https://colorlib.com/wp/template/namaste/,
preview: https://preview.colorlib.com/theme/namaste/), built under a DIFFERENT
name (**Pranava**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4
+ TypeScript.

The original is a Bootstrap 4 + jQuery yoga template with Montserrat font,
deep purple headings, a pale lime CTA button, purple-to-pink gradient accents,
and a sectioned single-page layout: Header → Hero → Courses → Meditation →
Timetable → Testimonial → Contact (map) → Gallery → Footer.

**WHAT MAKES PRANAVA DISTINCT (signature behaviors):**

1. **Full-width hero with background image + figure.** The hero section has a
   full-width background image (`data-setbg`), a centered content block with
   a decorative icon image, the heading "Find your inner CHI" (CHI in
   accent color), descriptive paragraph, and a lime "discover" CTA button.
   A floating figure image sits at the bottom-right of the hero.

2. **Three-column courses grid with flaticon icons.** Three course cards
   (Yoga, Hatha, Pilates) each with a large flaticon icon, "Beginner &
   Advanced" subtitle, course name heading, and description paragraph.
   Cards have no visible border or shadow — clean text-based layout.

3. **Meditation section with parallax background + floating image.** A
   full-width section with background image, left-aligned text content
   (7 cols) with heading + paragraph + CTA, and a floating illustration
   image (`meditation-img.png`) positioned at the bottom-right.

4. **Timetable section with schedule + progress bars.** Split layout:
   left column (5 cols) shows a 7-day weekly schedule list (Monday–Sunday
   with times), right column (7 cols) shows descriptive text plus three
   animated progress bars (Breathing 60%, Meditation 87%, Flexibility 70%).
   Section has `.spad` padding (99px top/bottom).

5. **Testimonial section with parallax background + decorative figures.**
   Full-width background image, centered quote icon image, heading,
   a centered testimonial paragraph with author name ("Maria Smith",
   "Customer" subtitle), and two floating decorative figure images
   (left and right) for visual depth.

6. **Contact section with split map + info.** Left half: embedded Google
   Maps iframe. Right half: "Meditation Sessions" heading, description
   paragraph, "Information" subheading, and contact details list
   (address, phone, email).

7. **Gallery carousel.** An owl-carousel slider of 5 gallery images in
   a horizontal scroll, each a yoga/meditation photo.

8. **Gradient purple-to-pink footer.** Footer background uses
   `linear-gradient(to right, #7364b0 0%, #ffb8e7 100%)` with centered
   text, a decorative footer icon, and attribution. In the recreation,
   this links to Component Dock.

## Design Tokens

| Token              | Value                                         | Source                          |
|--------------------|-----------------------------------------------|---------------------------------|
| Font family        | Montserrat, sans-serif                        | Google Fonts, body + headings   |
| Heading color      | `#493365` (deep purple)                       | `h1-h6` CSS                     |
| Text/paragraph     | `#938e99` (muted mauve)                       | `p` CSS, `span` CSS            |
| CTA button bg      | `#f7ffa0` (pale lime/yellow)                  | `.site-btn` CSS                 |
| CTA button text    | `#493365` (deep purple)                       | `.site-btn` CSS                 |
| CTA button radius  | `9px`                                         | `.site-btn` `border-radius`     |
| CTA button style   | uppercase, bold, 2px letter-spacing, 14px     | `.site-btn` CSS                 |
| Gradient start     | `#7364b0` (medium purple)                     | `.site-btn.sb-gradient`         |
| Gradient end       | `#ffb8e7` (soft pink)                         | `.site-btn.sb-gradient`         |
| Button dark variant| `#5a496a` bg, white text                      | `.site-btn.sb-dark`             |
| Accordion active bg| `#7364b0` (medium purple)                     | `.accordion-area .panel-link`   |
| Progress bar bg    | Gradient (purple-to-pink via `.sb-gradient`)   | `.progress-bar` default         |
| Section padding    | `99px` top + bottom (`.spad` class)           | Global helper                   |
| Footer bg          | `linear-gradient(to right, #7364b0, #ffb8e7)` | `.footer-section`               |
| Subtitle/label     | 12px, uppercase, 1px letter-spacing, `#938e99`| `.sp-title span`                |
| Section heading    | 24px, bold, uppercase, 2px letter-spacing     | `.sp-title h4`                  |

## Requirements

### Hero Section

#### Scenario: Hero displays background image with centered content

- **GIVEN** the user opens the landing page
- **THEN** the hero section shows a full-width background image
- **AND** a heading "Find your inner CHI" with "CHI" in accent color
- **AND** a descriptive paragraph below the heading
- **AND** a lime CTA button labeled "discover"
- **AND** a decorative hero figure image is visible

#### Scenario: Hero CTA button has correct styling

- **GIVEN** the user views the hero section
- **THEN** the "discover" button has a pale lime background
- **AND** the button text is uppercase with deep purple color
- **AND** the button has rounded corners (9px radius)

### Courses Section

#### Scenario: Three course cards are displayed

- **GIVEN** the user scrolls to the courses section
- **THEN** 3 course cards are visible in a row
- **AND** each card has a decorative icon
- **AND** each card shows "Beginner & Advanced" subtitle
- **AND** each card has a course title (Yoga, Hatha, Pilates)
- **AND** each card has a description paragraph

#### Scenario: Courses section has correct layout

- **GIVEN** the user views the courses section
- **THEN** the three cards are arranged in a 3-column grid
- **AND** the section has standard padding

### Meditation Section

#### Scenario: Meditation section shows content with background

- **GIVEN** the user scrolls to the meditation section
- **THEN** the section has a full-width background image
- **AND** a "Meditation Sessions" heading is displayed
- **AND** a description paragraph is shown
- **AND** a lime "discover" CTA button is present
- **AND** a decorative meditation figure image is visible

### Timetable Section

#### Scenario: Timetable shows schedule and progress bars

- **GIVEN** the user scrolls to the timetable section
- **THEN** a weekly schedule is displayed with 7 days
- **AND** each day shows its time range
- **AND** Sunday shows "Closed"
- **AND** three progress bars are visible (Breathing, Meditation, Flexibility)
- **AND** each progress bar shows its percentage label

#### Scenario: Progress bars have correct values

- **GIVEN** the user views the timetable section
- **THEN** Breaching progress bar is at 60%
- **AND** Meditation progress bar is at 87%
- **AND** Flexibility progress bar is at 70%

### Testimonial Section

#### Scenario: Testimonial displays a quote with attribution

- **GIVEN** the user scrolls to the testimonial section
- **THEN** the section has a full-width background image
- **AND** a decorative quote icon is displayed
- **AND** a testimonial paragraph is shown
- **AND** "Maria Smith" author name is displayed
- **AND** "Customer" subtitle is shown below the name

### Contact Section

#### Scenario: Contact section shows map and info

- **GIVEN** the user scrolls to the contact section
- **THEN** a Google Maps embed is displayed on the left
- **AND** contact information is shown on the right
- **AND** the info includes an address, phone number, and email

### Gallery Section

#### Scenario: Gallery displays a carousel of images

- **GIVEN** the user scrolls to the gallery section
- **THEN** a horizontal carousel/slider is visible
- **AND** at least 5 gallery images are displayed

### Footer Section

#### Scenario: Footer has gradient background and attribution

- **GIVEN** the user views the footer
- **THEN** the footer background is a purple-to-pink gradient
- **AND** a decorative footer icon is displayed
- **AND** the text includes a "Component Dock" link

### Navigation

#### Scenario: Header shows logo and navigation menu

- **GIVEN** the user opens the landing page
- **THEN** a logo image is displayed
- **AND** social media icon links are shown (Pinterest, Facebook, Twitter, Dribbble, Behance)
- **AND** a navigation menu with 5 items is visible (Home, About Us, Classes, Blog, Contact)

## Verification checklist

- [ ] Hero section renders with background image and centered content
- [ ] Hero heading "Find your inner CHI" displays correctly
- [ ] Hero CTA button styled with lime bg + purple text + 9px radius
- [ ] Courses section shows 3 cards in a 3-column grid
- [ ] Each course card has icon, subtitle, title, and description
- [ ] Meditation section has parallax background and floating image
- [ ] Timetable section shows weekly schedule on the left
- [ ] Timetable section shows 3 progress bars on the right
- [ ] Progress bars animate to correct percentages
- [ ] Testimonial section shows quote, author, and decorative figures
- [ ] Contact section has map embed and contact details
- [ ] Gallery section renders a carousel of 5 images
- [ ] Footer has gradient purple-to-pink background
- [ ] Footer links to Component Dock
- [ ] Header has logo, social icons, and 5-item nav menu
- [ ] All text uses Montserrat font
- [ ] Design tokens match: headings #493365, text #938e99, CTA #f7ffa0
- [ ] No ColorLib references in app source code
- [ ] No shared files modified (only apps/pranava/ and openspec/docs)
