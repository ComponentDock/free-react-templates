# Template: Wellbridge (Medical / Healthcare)

## Purpose

Recreation of ColorLib **CareMed** — a medical / healthcare center website template.

- **Source slug:** `caremed`
- **Preview URL:** https://preview.colorlib.com/theme/caremed/
- **Original page:** https://colorlib.com/wp/template/caremed/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/caremed-free-template.jpg
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript
- **App folder:** `apps/wellbridge`
- **Package:** `@free-react-templates/wellbridge`

## Design Tokens (extracted from preview CSS)

| Token | Value | Usage |
|---|---|---|
| Brand primary | `#283290` | Navy blue — top bar, boxes, buttons, logo text |
| Brand accent | `#20d34a` | Bright green — logo span, button underline, section title accent line, logo "+" box, slider progress bar, box bottom border |
| Emergency red | `#ff0030` | Red — emergencies bar in top bar |
| Body text | `#696969` | Gray — paragraphs, body copy |
| Heading text | `#232323` | Dark — section titles |
| Nav text | `#323232` | Navigation links |
| Subtitle text | `#8f8e8e` | Logo subtitle, secondary labels |
| Body bg | `#FFFFFF` | White page background |
| Font family | `'Roboto', sans-serif` | Google Fonts — weights 300, 400, 500, 700, 900 |
| Button | bg `#283290`, height `51px`, uppercase, letter-spacing `0.05em`, green bottom-border animates to fill on hover | CTA buttons |
| Section title accent | `#20d34a`, 54px wide, 3px height | Top line above section titles |
| Box | bg `#283290`, green 4px bottom border, shadow on hover | Info cards |
| Logo box | `#20d34a` bg, 23×23px, white "+" | Brand mark beside logo |
| Border radius | 0 (square) | Boxes, buttons — sharp corners |
| Transitions | 200ms ease default | All interactive elements |

## Visual Design Notes

- Clean, professional medical aesthetic. Dark navy + bright green accent palette.
- Floating logo box overlapping the header with box-shadow.
- Top bar is full-width navy with white text; emergency phone highlighted in red.
- Hero is a full-height image slider with dark text overlay and green-accented CTA.
- Three navy info boxes overlap the hero's bottom edge (-59px negative margin).
- About section is two-column: text left, illustration/image right.
- Departments section uses parallax background with white department cards.
- Services grid is 3×2 with centered cards and icon+title+text.
- CTA section is full-width parallax with centered white text and green button.
- Footer has 3 columns: about/logo, links, recent news; social icons in copyright bar.

## Requirements

### Header

Feature: Wellbridge Header

#### Scenario: Top bar displays contact info and emergency number

- **GIVEN** the page is loaded
- **THEN** the top bar shows "FAQ", "Request an Appointment" links
- **AND** the emergency phone "+563 47558 623" is visible in a red highlight

#### Scenario: Navigation links are present

- **GIVEN** the page is loaded
- **THEN** the nav contains links: "Home", "About us", "Services", "News", "Contact"

#### Scenario: Logo displays brand name with accent

- **GIVEN** the page is loaded
- **THEN** the logo shows "Well" followed by "bridge" in green accent
- **AND** a green "+" box appears beside the logo
- **AND** the subtitle "Health Care Center" is below the logo

### Hero Slider

Feature: Wellbridge Hero Slider

#### Scenario: Hero displays headline and CTA

- **GIVEN** the page is loaded
- **THEN** the hero headline reads "Medicine made with care"
- **AND** a "read more" button is visible below the headline
- **AND** descriptive paragraph text is shown

#### Scenario: Slider has multiple slides

- **GIVEN** the page is loaded
- **THEN** there are 3 slides with background images
- **AND** a green progress bar animates at the bottom

### Info Boxes

Feature: Wellbridge Info Boxes

#### Scenario: Three info boxes are displayed below hero

- **GIVEN** the page is loaded
- **THEN** "Working Hours" box shows Mon–Fri 8.00–19.00, Sat 9.30–17.00, Sun 9.30–15.00
- **AND** "Appointments" box shows appointment text
- **AND** "Emergency Cases" box shows phone "+56 273 45678 235"
- **AND** all boxes have navy background with green bottom border

### About Section

Feature: Wellbridge About Section

#### Scenario: About section shows text and image

- **GIVEN** the page is loaded
- **THEN** the section title reads "A great medical team to help your needs"
- **AND** descriptive paragraph text is shown on the left
- **AND** a "read more" button is present
- **AND** an image/illustration is on the right

### Departments Section

Feature: Wellbridge Departments Section

#### Scenario: Departments displayed on parallax background

- **GIVEN** the page is loaded
- **THEN** the section title reads "Our Medical Departments"
- **AND** 4 department cards are shown: "plastic surgery", "gastroenterology", "dentistry"
- **AND** each card has an image, title, and doctor name subtitle
- **AND** the 4th card has descriptive text with a "read more" button

### Services Section

Feature: Wellbridge Services Section

#### Scenario: Services grid displays 6 services

- **GIVEN** the page is loaded
- **THEN** the section title reads "Our Featured Services"
- **AND** 6 service cards are shown in a 3×2 grid
- **AND** services are: "Free Checkups", "Screening Exams", "RMI Services", "Dentistry", "Neonatology", "Biochemistry"
- **AND** each card has an icon, title, and description text

### CTA Section

Feature: Wellbridge Call-to-Action

#### Scenario: CTA section with parallax background

- **GIVEN** the page is loaded
- **THEN** the CTA heading reads "Need a personal health plan?"
- **AND** descriptive text is shown below the heading
- **AND** a "request a plan" button is present with green hover effect

### Footer

Feature: Wellbridge Footer

#### Scenario: Footer has three columns

- **GIVEN** the page is loaded
- **THEN** the footer shows logo with "Health Care Center" subtitle
- **AND** contact info: phone, email, address
- **AND** a "Useful Links" column with navigation links
- **AND** a "Recent News" column with dated news items

#### Scenario: Copyright bar with social links

- **GIVEN** the page is loaded
- **THEN** a copyright line is shown at the bottom
- **AND** social media icons are displayed (Pinterest, Facebook, Twitter, Dribbble, Behance, LinkedIn)
- **AND** a "Component Dock" attribution link is present

## Verification Checklist

- [ ] Header: top bar with FAQ + Appointment links + emergency phone
- [ ] Header: nav with 5 links (Home, About us, Services, News, Contact)
- [ ] Header: floating logo box with "Wellbridge" brand + green accent + subtitle
- [ ] Hero: image slider with headline, text, read more CTA, green progress bar
- [ ] Info Boxes: 3 navy cards (Working Hours, Appointments, Emergency) overlapping hero
- [ ] About: 2-column layout — text left, image right, section title with green accent line
- [ ] Departments: parallax background, 4 department cards with images + titles
- [ ] Services: 3×2 grid of 6 service cards with icons + titles + text
- [ ] CTA: parallax section with heading, text, green-accented button
- [ ] Footer: 3-column layout (about, links, news), copyright bar, social icons, Component Dock link
- [ ] Design tokens: brand #283290, accent #20d34a, Roboto font, sharp corners
- [ ] No ColorLib references in app code
- [ ] Placeholder images via picsum.photos
- [ ] Footer links to componentdock.com
