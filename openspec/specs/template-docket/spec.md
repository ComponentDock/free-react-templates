# Template: Docket (Law Firm)

## Purpose

Docket is a law firm landing page template. It recreates the ColorLib Lawfirm design (https://colorlib.com/wp/template/lawfirm/) with a dark professional aesthetic, Roboto font, and Bootstrap blue accent (#007bff). Sections: top bar, navbar, hero, intro cards, trust features, statistics counters, practice areas, case studies, testimonials carousel, CTA banner, blog, and footer.

- **Source**: https://colorlib.com/wp/template/lawfirm/
- **Preview**: https://preview.colorlib.com/theme/lawfirm/
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/lawfirm-free-fullscreen-lawyer-website-template.jpg
- **Category**: Lawyer
- **Stack**: React 19 + Vite + Tailwind CSS 4 + TypeScript

### Design tokens (extracted from preview CSS)

| Token               | Value                              | Usage                                  |
| ------------------- | ---------------------------------- | -------------------------------------- |
| font-family         | Roboto (300, 400, 500, 700)        | Global body + headings                 |
| brand-primary       | #007bff                            | Buttons, links, accents                |
| brand-primary-hover | #0069d9                            | Button hover state                     |
| body-bg             | #ffffff                            | Page background                        |
| body-text           | #212529                            | Body text                              |
| heading-text        | #ffffff                            | Hero heading, section headings on dark |
| dark-section-bg     | #1d2227, #161a1e, #121518, #0e1013 | Intro card backgrounds (gradient dark) |
| navbar-bg           | #212529                            | Dark navbar background                 |
| button-radius       | 4px                                | Standard Bootstrap buttons             |
| hero-overlay        | rgba(0,0,0,0.5)                    | Hero dark overlay                      |

## Requirements

### Requirement: Top bar

The template SHALL display a top bar with phone number and email on the left, and social media icons (Facebook, Twitter, Instagram, Dribbble) on the right.

#### Scenario: Top bar renders

- **WHEN** the page loads
- **THEN** the phone number, email, and social icons are visible

### Requirement: Navigation bar

The template SHALL display a dark navigation bar with brand name "Docket", section links (Home, About, Practice Areas, Cases, Attorneys, Blog, Contact), and a mobile menu toggle.

#### Scenario: Desktop navigation

- **WHEN** the page loads on a desktop viewport
- **THEN** the brand link and all section links are visible in the navbar

#### Scenario: Mobile menu toggle

- **WHEN** the user clicks the mobile hamburger menu button
- **THEN** the mobile menu slides open with the same nav links

### Requirement: Hero section

The template SHALL display a full-width hero with a dark background image overlay, heading "Don't Feel Helpless We Fight for Justice", description text, and two CTA buttons ("Contact us" primary, "Read more" white).

#### Scenario: Hero renders

- **WHEN** the page loads
- **THEN** the hero heading, description, and both CTA buttons are visible over the background image

### Requirement: Intro cards section

The template SHALL display 4 dark-background intro cards in a row: Expert Attorneys, Case Dismissed, Court Performance, Court Performance — each with an icon, title, and short description.

#### Scenario: Intro cards render

- **WHEN** the page loads
- **THEN** all four intro cards with icons, titles, and descriptions are visible

### Requirement: Trust features section

The template SHALL display a section with heading "Why to Put Trust in Law Firm" and 4 feature items (Expert Attorneys, Great Discount, Legal Advisory, Quick Charges) each with an icon, title, and description.

#### Scenario: Trust features render

- **WHEN** the page loads
- **THEN** the heading and all four feature items are visible

### Requirement: Statistics section

The template SHALL display a statistics section with a background image and 4 counter items: 90+ Happy Clients, 45+ Court Won, 19+ Awards, 26+ Practice Years — each with a number and label.

#### Scenario: Statistics render

- **WHEN** the page loads
- **THEN** all four statistics with numbers and labels are visible

### Requirement: Practice areas section

The template SHALL display a section with heading "What We Cover" and 6 practice area cards: Business Law, Family Law, Criminal Law, Real Estate Law, Personal Injury, Judicial Law — each with an icon, title, and description.

#### Scenario: Practice areas render

- **WHEN** the page loads
- **THEN** the heading and all six practice area cards are visible

### Requirement: Case studies section

The template SHALL display a section with heading "Recent Case Studies" and 7 case study items in a 2-column grid, each with an image, category tag, title, and short description.

#### Scenario: Case studies render

- **WHEN** the page loads
- **THEN** the heading and all seven case study items are visible

### Requirement: Testimonials section

The template SHALL display a dark-background carousel section with heading "Happy Clients" and 5 testimonial cards, each with a quote, author photo, name, and title. Navigation arrows allow cycling through testimonials.

#### Scenario: Testimonials render

- **WHEN** the page loads
- **THEN** the heading and at least the first testimonial card are visible

#### Scenario: Testimonial navigation

- **WHEN** the user clicks the next arrow
- **THEN** the carousel advances to the next testimonial

### Requirement: CTA banner

The template SHALL display a full-width call-to-action banner with a background image overlay, heading "We Have Great Results", 3 stat items (Award Winning, 60 Years of Experience, Best Attorneys team), and a "Free Case Consultation" button.

#### Scenario: CTA renders

- **WHEN** the page loads
- **THEN** the CTA heading, stats, and button are visible over the background

### Requirement: Blog section

The template SHALL display a section with heading "Recent Blog" and 3 blog post cards, each with an image, date, author, title, and short description.

#### Scenario: Blog renders

- **WHEN** the page loads
- **THEN** the heading and all three blog post cards are visible

### Requirement: Footer

The template SHALL display a dark footer with 4 columns: Company info (about text, social icons), Practice Areas links, Services links, and Contact info (address, phone, email). Footer copyright line with Component Dock link.

#### Scenario: Footer renders

- **WHEN** the page loads
- **THEN** all four footer columns and the copyright line with Component Dock link are visible

## Verification checklist

- [ ] Top bar with phone, email, social icons
- [ ] Navbar with brand, links, mobile toggle
- [ ] Hero background image with overlay, heading, two CTA buttons
- [ ] Intro cards: 4 dark cards with icons
- [ ] Trust features: 4 items with icons
- [ ] Statistics: 4 counters with numbers and labels
- [ ] Practice areas: 6 cards in grid
- [ ] Case studies: 7 items in 2-column grid
- [ ] Testimonials: carousel with 5 cards, navigation arrows
- [ ] CTA banner: background image, heading, stats, button
- [ ] Blog: 3 post cards
- [ ] Footer: 4 columns, social icons, Component Dock link
- [ ] Design tokens: Roboto font, #007bff accent, dark section backgrounds
- [ ] All sections match original section order
- [ ] Responsive layout (mobile + desktop)
- [ ] No ColorLib references in app code
