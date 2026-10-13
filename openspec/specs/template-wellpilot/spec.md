# Template: WellPilot (Health & Fitness)

## Purpose

Recreation of ColorLib **Healthcoach** (https://colorlib.com/wp/template/healthcoach/).
Preview: https://preview.colorlib.com/theme/healthcoach/

Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript (strict).

## Source Structure (from live preview analysis)

Single-page index with these sections in order:

1. **Top Bar** — phone + email + social media icons (blue bg `#006fdc`)
2. **Navbar** — dark bg, brand "WellPilot" with leaf icon, nav links: Home, About, Coach, Pricing, Services, Stories, Blog, Contact
3. **Hero Slider** — full-height OwlCarousel with 3 slides, dark overlay, headline + subheadline + 2 CTA buttons (Learn more / Contact us)
4. **Services** — 3-column cards with images (Exercise Program, Nutrition Plans, Lifestyle Management), each with heading + description + "Read more" outline button
5. **About** — split layout: left image, right text with "Welcome to WellPilot" subheading, 2 paragraphs, founder card (photo + name + title)
6. **Free Consultation** — 3-column layout: left "Healthcare Services" CTA card (`#1089ff`), center form (name/email/service/date/message), right info panel (`#006fdc`)
7. **Testimonials** — OwlCarousel with 5 testimonials, each: user photo, quote icon, quote text, name, position
8. **Counter/Stats** — 4-column stats (e.g. number of clients, sessions, coaches, awards) with parallax background image
9. **Pricing** — 4 cards (Basic $49, Standard $79, Premium $109, + one more), each with heading, excerpt, price, feature list, "Get Started" CTA
10. **Blog** — 3-column blog cards with image, date/author/comments meta, title
11. **Footer** — newsletter subscribe form, 5-column layout (logo + description, Services, About, Resources, Social), dark bg `#131719`

## Design Tokens

| Token | Value | Notes |
|-------|-------|-------|
| brand-primary | `#1089ff` | Blue — consultation section, subheadings, links |
| brand-secondary | `#006fdc` | Darker blue — top bar, consultation form panel, hero overlay |
| brand-dark | `#131719` | Near-black — footer background |
| brand-accent | `#a3cb4c` | Green — footer logo accent span |
| brand-white | `#ffffff` | Hero text, CTA buttons |
| font-family | `Poppins` (weights 200–900) | Google Fonts, sans-serif |
| btn-primary-bg | `#007bff` | Bootstrap primary blue for buttons |
| btn-primary-hover | `#0069d9` | Hover state |
| hero-overlay | `rgba(0,0,0,0.5)` | Dark overlay on hero images |
| section-bg-light | `#f7f7f7` | Light gray alt sections (`bg-light`) |
| text-dark | `#212529` | Body text |
| text-muted | `#6c757d` | Secondary text |
| border-radius | `0.25rem` | Standard Bootstrap radius for cards/inputs |
| btn-radius | `0` | Buttons are sharp (no border-radius) |
| font-awesome | 4.7.0 | Icons (replace with lucide-react) |

## Requirements

### Top Bar

#### Scenario: Top bar displays contact info and social links

- **GIVEN** the page loads
- **THEN** I see "Phone no:" with a phone number
- **AND** I see "email us:" with an email address
- **AND** I see social media icons for Facebook, Twitter, Instagram, Dribbble
- **AND** the top bar has a blue background (#006fdc)

### Navbar

#### Scenario: Navbar is sticky with dark background

- **GIVEN** the page loads
- **THEN** I see a navbar with brand name "WellPilot" and a leaf icon
- **AND** the navbar has links: Home, About, Coach, Pricing, Services, Stories, Blog, Contact
- **AND** the navbar background is dark
- **AND** the brand text color is white with a green leaf icon

#### Scenario: Navbar is responsive on mobile

- **GIVEN** the viewport is less than 992px wide
- **WHEN** I tap the hamburger menu
- **THEN** the navigation links expand in a dropdown

### Hero Section

#### Scenario: Hero displays a full-height slider with 3 slides

- **GIVEN** the page loads
- **THEN** I see a full-height hero section with a background image
- **AND** there is a dark overlay on the image
- **AND** I see a headline and subheadline
- **AND** there are two CTA buttons: "Learn more" and "Contact us"
- **AND** the "Learn more" button is blue (primary)
- **AND** the "Contact us" button is white

#### Scenario: Hero slider cycles through 3 slides

- **GIVEN** the page loads
- **WHEN** I wait for the slider to auto-advance
- **THEN** the second slide appears with a different background image
- **AND** the headline and subheadline change

### Services Section

#### Scenario: Services section displays 3 service cards

- **GIVEN** I scroll to the Services section
- **THEN** I see 3 service cards in a row
- **AND** each card has an image, heading, description, and "Read more" button
- **AND** the headings are "Exercise Program", "Nutrition Plans", "Lifestyle Management"
- **AND** the "Read more" button has an outline style

### About Section

#### Scenario: About section has split layout with image and text

- **GIVEN** I scroll to the About section
- **THEN** I see an image on the left and text content on the right
- **AND** there is a "Welcome to WellPilot" subheading
- **AND** there are two descriptive paragraphs
- **AND** I see a founder card with photo, name, and position

### Free Consultation Section

#### Scenario: Consultation section has 3-column layout

- **GIVEN** I scroll to the Consultation section
- **THEN** I see a left card with "Healthcare Services" heading and "See Services" button
- **AND** a center form with fields: First Name, Last Name, Service dropdown, Date, Time, Message
- **AND** a right info panel
- **AND** the left card background is #1089ff
- **AND** the form panel background is #006fdc

#### Scenario: Consultation form accepts user input

- **GIVEN** I scroll to the Consultation section
- **WHEN** I fill in the First Name field
- **AND** I fill in the Last Name field
- **AND** I select a service from the dropdown
- **AND** I pick a date
- **AND** I type a message
- **THEN** the form fields contain my input

### Testimonials Section

#### Scenario: Testimonials carousel displays client quotes

- **GIVEN** I scroll to the Testimonials section
- **THEN** I see a heading "Happy Clients & Feedbacks"
- **AND** I see testimonial cards with user photo, quote icon, quote text, name, and position
- **AND** the section has a light gray background

### Counter Section

#### Scenario: Counter section displays statistics

- **GIVEN** I scroll to the Counter section
- **THEN** I see 4 statistic columns with numbers
- **AND** each column has a label below the number
- **AND** the section has a parallax background image

### Pricing Section

#### Scenario: Pricing section displays 3-4 pricing cards

- **GIVEN** I scroll to the Pricing section
- **THEN** I see pricing cards with plan name, excerpt, and price
- **AND** each card has a feature list with checkmark icons
- **AND** each card has a "Get Started" button
- **AND** the prices are $49, $79, $109

### Blog Section

#### Scenario: Blog section displays 3 blog post cards

- **GIVEN** I scroll to the Blog section
- **THEN** I see 3 blog cards in a row
- **AND** each card has an image, date, author, comment count, and title
- **AND** the cards link to individual blog posts

### Footer

#### Scenario: Footer displays newsletter form and links

- **GIVEN** I scroll to the footer
- **THEN** I see a newsletter subscribe form with email input and "Subscribe" button
- **AND** I see 5 columns: logo + description, Services, About, Resources, Social
- **AND** the footer background is dark (#131719)
- **AND** the logo accent color is green (#a3cb4c)
- **AND** there is a "Made with Component Dock" attribution link

## Verification Checklist

- [ ] Top bar: blue background, phone + email, social icons
- [ ] Navbar: dark bg, brand with leaf icon, 8 nav links, sticky on scroll
- [ ] Hero: full-height, 3-slide carousel, dark overlay, headline + 2 CTAs
- [ ] Services: 3 cards, images, headings, descriptions, outline buttons
- [ ] About: split layout, subheading, paragraphs, founder card
- [ ] Consultation: 3-column, blue/indigo panels, form with 5+ fields
- [ ] Testimonials: carousel, 5 cards with photos + quotes
- [ ] Counter: 4 stats, parallax bg
- [ ] Pricing: 3-4 cards, prices, feature lists, CTA buttons
- [ ] Blog: 3 cards, images, meta, titles
- [ ] Footer: subscribe form, 5 columns, dark bg, green accent
- [ ] Footer includes "Component Dock" attribution link
- [ ] No ColorLib references in app code
- [ ] Responsive on mobile (< 768px)
- [ ] All placeholder images use picsum.photos/seed/wellpilot-*
- [ ] Poppins font loaded from Google Fonts
- [ ] Brand colors in @theme: primary #1089ff, secondary #006fdc, dark #131719, accent #a3cb4c
