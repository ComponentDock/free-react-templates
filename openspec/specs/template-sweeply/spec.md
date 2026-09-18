# Template: Sweeply (Cleaning Services)

## Purpose

Recreation of ColorLib's **Cleanex** template — a cleaning services website with a
top contact bar, dark navbar, full-width hero with diagonal edge, appointment booking
form, about section, animated stats counter, service cards, industries served section,
3-step flow section, testimonials carousel, pricing table, parallax CTA, blog cards,
and a 4-column footer.

- **Source slug:** `cleanex`
- **ColorLib page:** https://colorlib.com/wp/template/cleanex/
- **Preview URL:** https://preview.colorlib.com/theme/cleanex/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/cleanex-template.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design Tokens

Extracted from the live preview CSS (`css/style.css`) and HTML analysis:

### Colors

| Token              | Value     | Usage                                                                                      |
| ------------------ | --------- | ------------------------------------------------------------------------------------------ |
| `--color-primary`  | `#225ae1` | Primary blue — navbar accent, subheading lines, pricing headers, links, service icons      |
| `--color-accent`   | `#fedd32` | Yellow — pricing price text, highlight accent                                               |
| `--color-cta`      | `#007bff` | Bootstrap primary blue — form submit button, pricing "Sign Up" buttons                      |
| `--color-cta-hover`| `#0069d9` | Darker blue for button hover                                                                |
| `--color-secondary`| `#6c757d` | Gray — secondary buttons (hero "Request A Quote"), muted text                               |
| `--color-secondary-hover` | `#5a6268` | Darker gray for secondary button hover                                                 |
| `--color-dark`     | `#161655` | Dark navy — service card titles                                                            |
| `--color-heading`  | `#212529` | Headings, strong text                                                                       |
| `--color-body`     | `#6c757d` | Body copy, muted text                                                                       |
| `--color-white`    | `#ffffff` | Primary backgrounds, appointment form bg, pricing card content                              |
| `--color-light-bg` | `#f4f5f0` | Section backgrounds (about section, service custom buttons)                                |
| `--color-counter-bg` | `#225ae1` | Counter section overlay (blue tint)                                                         |
| `--color-footer-bg`  | `#225ae1` | Footer background with blue overlay                                                        |
| `--color-black`    | `#000000` | Hero overlay, about overlay                                                                |

### Typography

- **Primary font:** `'Roboto', Arial, sans-serif` (Google Fonts, weights 300–700)
- **Headings:** bold weight (600–700), regular case
- **Section subheadings:** uppercase, small (14px), blue `#225ae1`, with horizontal lines on each side
- **Body:** regular weight (400), line-height ~1.8
- **Nav:** Roboto, white on dark background

### Buttons / CTAs

- **Primary button:** solid blue `#007bff`, white text, `border-radius: 0.25rem`, padding `py-3 px-4`
- **Hover:** darker blue `#0069d9`
- **Secondary button:** solid gray `#6c757d`, white text, same border-radius
- **Hover:** darker gray `#5a6268`
- **Service custom button:** circular 44px round, light bg `#f4f5f0`, positioned top-right on card

### Section Backgrounds

- Hero: full-width background image with dark overlay, diagonal right edge
- About: white (with black overlay at 10% opacity on background image variant)
- Counter: background image (`bg_2.jpg`) with blue overlay
- Industries: white
- Services: white, 6 cards in 3x2 grid
- Flow: background image (`bg_2.jpg`) with overlay
- Testimonials: light gray `#f4f5f0` (`bg-light`)
- Pricing: white
- CTA: background image (`bg_4.jpg`) with blue overlay at 80% opacity
- Blog: light gray `#f4f5f0` (`bg-light`)
- Footer: background image with blue overlay

### Card Styling

- **Services cards:** `border-radius: 5px`, box-shadow `0px 1px 8px -6px rgba(0,0,0,0.26)`, image top (260px), text below, hover lifts -5px
- **Pricing cards:** box-shadow `0px 0px 37px -16px rgba(0,0,0,0.15)`, blue header (`#225ae1`), white body, yellow price text, alternating row bg `#fafafa`
- **Blog cards:** background-image cover for image area, text below with meta (date, author, comments)

## Section Order (from live preview DOM)

1. **Top Bar** — Light gray (`bg-light`) bar with email (paper-plane icon), phone (phone-square icon), business hours (clock-o icon), and social icons (Facebook, Twitter, Instagram, Dribbble).
2. **Navbar** — Dark (`bg-dark`) sticky navbar. Logo: "Sweeply." with a flaticon cleaning icon. Nav links: Home, About, Pricing, Services, Blog, Contact. Right: gray "Request A Quote" button. Mobile hamburger toggle.
3. **Hero** — Full-width background image with diagonal right edge (`degree-right`), dark overlay. Left-aligned white text: subheading "Introducing Sweeply", headline "A Clean Home is A Happy Home", description paragraph, gray "Request A Quote" CTA button.
4. **Appointment Form + About** — Two-column layout. Left: white card with "Book A Service" form (First Name, Last Name, Service dropdown, Phone, Date picker, Time picker, Submit button). Right: subheading "About Company", headline "Most Awarded Cleaning Company Since 2000", two description paragraphs.
5. **Stats Counter** — Background image with blue overlay. Four animated counters in a row: 4,800 Project Completed, 14,000 Employees, 200 Clients, 71,650 Awards. Each with flaticon icon and white text.
6. **Industries We Serve** — Centered heading "Industries We Serve" with description. Six industry cards in 3x2 grid: Residential Cleaning, Commercial Cleaning, Construction Cleaning, Windows Cleaning, Carpet Cleaning, Furniture Cleaning. Each with icon and name.
7. **Services Section** — Centered heading "Offering Best Cleaning Services". Six service cards in 3x2 grid with background images, titles, and descriptions.
8. **3-Step Flow** — Background image with overlay. Heading "Get Amazing Cleaning in 3 Simple Ways". Three steps: "Pick a suitable plan", "Set your schedule", "Get things done". Each with icon, number, heading, and description.
9. **Testimonials** — Light gray bg. Heading "What Are Clients Says". Owl carousel with review cards: avatar image, reviewer name, testimonial text. Five testimonials.
10. **Pricing** — White bg. Heading "Our Plans & Pricing". Four pricing cards: Basic ($29), Standard ($59), Premium ($79, highlighted/active), Ultimate ($89.50). Each with blue header, price, feature list, "Sign Up" button.
11. **Parallax CTA** — Background image with blue overlay (80% opacity). Heading "Need to clean your house? Just hire us!" with "Request A Quote" button.
12. **Blog** — Light gray bg. Heading "Recent Post". Three blog cards with background images, metadata (date, author, comments), title, and excerpt.
13. **Footer** — Background image with blue overlay. Four columns: Company logo + social icons, Recent Posts (2 blog previews with images), Explore links (About, Contact, Services, Blog), Have a Questions? (address, phone, email). Copyright bar at bottom.

## Requirements

### Requirement: Top Bar

The system SHALL render a top contact bar with email, phone, business hours, and social icons.

#### Scenario: Top bar content

- **GIVEN** the Sweeply page is rendered
- **WHEN** the top bar is displayed
- **THEN** it SHALL show an email address with paper-plane icon
- **AND** it SHALL show a phone number with phone-square icon
- **AND** it SHALL show business hours with clock-o icon
- **AND** it SHALL show social icons (Facebook, Twitter, Instagram, Dribbble)

### Requirement: Navbar

The system SHALL render a dark sticky navbar with logo, nav links, and CTA button.

#### Scenario: Navbar content

- **GIVEN** the Sweeply page is rendered
- **WHEN** the navbar is displayed
- **THEN** it SHALL show a logo with cleaning icon and "Sweeply." text
- **AND** it SHALL show nav links: Home, About, Pricing, Services, Blog, Contact
- **AND** it SHALL show a gray "Request A Quote" button
- **AND** it SHALL have a mobile hamburger toggle

### Requirement: Hero Section

The system SHALL render a full-width hero section with background image, overlay, and CTA.

#### Scenario: Hero content

- **GIVEN** the Sweeply page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show a background image with dark overlay
- **AND** it SHALL show subheading "Introducing Sweeply"
- **AND** it SHALL show headline "A Clean Home is A Happy Home"
- **AND** it SHALL show a description paragraph
- **AND** it SHALL show a gray "Request A Quote" CTA button

### Requirement: Appointment Form + About

The system SHALL render a two-column section with a booking form on the left and about text on the right.

#### Scenario: Appointment form

- **GIVEN** the Sweeply page is rendered
- **WHEN** the appointment section is displayed
- **THEN** it SHALL show a "Book A Service" heading
- **AND** it SHALL show form fields: First Name, Last Name, Service dropdown, Phone, Date, Time
- **AND** it SHALL show a blue "Submit Details" button

#### Scenario: About content

- **GIVEN** the Sweeply page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show subheading "About Company"
- **AND** it SHALL show headline "Most Awarded Cleaning Company Since 2000"
- **AND** it SHALL show two description paragraphs

### Requirement: Stats Counter

The system SHALL render an animated statistics counter section with four stats.

#### Scenario: Counter content

- **GIVEN** the Sweeply page is rendered
- **WHEN** the stats section scrolls into view
- **THEN** it SHALL animate four counters: 4,800 Project Completed, 14,000 Employees, 200 Clients, 71,650 Awards
- **AND** the numbers SHALL count up from zero to their target values

### Requirement: Industries Section

The system SHALL render an industries section with a heading and six industry cards.

#### Scenario: Industries content

- **GIVEN** the Sweeply page is rendered
- **WHEN** the industries section is displayed
- **THEN** it SHALL show a heading "Industries We Serve"
- **AND** it SHALL display six industry cards: Residential Cleaning, Commercial Cleaning, Construction Cleaning, Windows Cleaning, Carpet Cleaning, Furniture Cleaning
- **AND** each card SHALL have an icon and name

### Requirement: Services Section

The system SHALL render a services section with a heading and six service cards with images.

#### Scenario: Services content

- **GIVEN** the Sweeply page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show a heading "Offering Best Cleaning Services"
- **AND** it SHALL display six service cards with background images and text

### Requirement: 3-Step Flow

The system SHALL render a 3-step flow section with numbered steps.

#### Scenario: Flow content

- **GIVEN** the Sweeply page is rendered
- **WHEN** the flow section is displayed
- **THEN** it SHALL show a heading "Get Amazing Cleaning in 3 Simple Ways"
- **AND** it SHALL show three steps: "Pick a suitable plan", "Set your schedule", "Get things done"
- **AND** each step SHALL have an icon, number, heading, and description

### Requirement: Testimonials

The system SHALL render a testimonials section with a carousel of customer reviews.

#### Scenario: Testimonials content

- **GIVEN** the Sweeply page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show a heading "What Are Clients Says"
- **AND** it SHALL display a carousel with avatar images, reviewer names, and testimonial text
- **AND** it SHALL have five testimonial entries

### Requirement: Pricing Section

The system SHALL render a pricing section with four plan cards.

#### Scenario: Pricing content

- **GIVEN** the Sweeply page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL show four pricing plans: Basic ($29), Standard ($59), Premium ($79), Ultimate ($89.50)
- **AND** each plan SHALL have a blue header, price, feature list, and "Sign Up" button
- **AND** the Premium plan SHALL be highlighted as active

### Requirement: Parallax CTA

The system SHALL render a parallax background image section with a call-to-action.

#### Scenario: CTA content

- **GIVEN** the Sweeply page is rendered
- **WHEN** the CTA section is displayed
- **THEN** it SHALL show a background image with blue overlay
- **AND** it SHALL show heading "Need to clean your house? Just hire us!"
- **AND** it SHALL show a "Request A Quote" button

### Requirement: Blog Section

The system SHALL render a blog section with three post cards.

#### Scenario: Blog content

- **GIVEN** the Sweeply page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show a heading "Recent Post"
- **AND** it SHALL display three blog cards with background images, metadata, titles, and excerpts

### Requirement: Footer

The system SHALL render a footer with four columns and a copyright bar.

#### Scenario: Footer content

- **GIVEN** the Sweeply page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show four columns: company logo + social icons, Recent Posts, Explore links, Have a Questions? contact info
- **AND** it SHALL show a copyright bar at the bottom
- **AND** the copyright SHALL link to Component Dock

## Verification Checklist

- [ ] Top bar: light gray bg, email + phone + hours + social icons
- [ ] Navbar: dark bg, "Sweeply." logo with cleaning icon, 6 nav links, gray CTA, mobile hamburger
- [ ] Hero: background image, diagonal right edge, dark overlay, subheading + headline + CTA
- [ ] Appointment + About: form with 6 fields + submit, about text with headline + paragraphs
- [ ] Stats counter: 4 animated counters (4800, 14000, 200, 71650) with icons
- [ ] Industries: heading + 6 industry cards with icons
- [ ] Services: heading + 6 service cards with background images
- [ ] 3-Step Flow: heading + 3 numbered steps with icons
- [ ] Testimonials: heading, carousel with avatars + names + text
- [ ] Pricing: 4 plan cards, Premium highlighted, blue headers, yellow prices
- [ ] Parallax CTA: background image + blue overlay + heading + button
- [ ] Blog: 3 post cards with images, metadata, titles
- [ ] Footer: 4 columns + copyright with Component Dock link
- [ ] Responsive: all sections adapt to mobile viewports
- [ ] Accessibility: semantic HTML, aria labels, keyboard navigation
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
