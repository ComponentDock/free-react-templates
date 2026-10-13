# Template: ZenWell (Counseling / Mental Health)

## Purpose

Recreation of ColorLib **Counselor** template as a React 19 + Vite + Tailwind 4 + TypeScript app.

- Source: https://colorlib.com/wp/template/counselor/
- Preview: https://preview.colorlib.com/theme/counselor/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/counselor-free-template.jpg
- New name: `zenwell` (apps/zenwell, @free-react-templates/zenwell)
- Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design tokens (extracted from live preview CSS)

| Token | Value | Usage |
|-------|-------|-------|
| Brand green | `#589167` | Top bar, intro section, testimonials overlay, appointment overlay, link hover, accent |
| Dark navbar bg | `#1a1a1a` (approx) | Sticky navbar background |
| Light bg | `#f7f7f7` / `#f8f9fa` | Pricing section background, alternating sections |
| Heading color | `#1a1a1a` | All headings, nav brand |
| Body text | `#4d4d4d` / `#6c757d` | Paragraphs, secondary text |
| White | `#fff` | Text on green, button text, navbar text |
| Font family | Roboto, Arial, sans-serif | Global font |
| Button radius | `0.25rem` (Bootstrap default) | Primary/outlined buttons |
| Button primary bg | `#007bff` → overridden to green `#589167` for CTAs | Primary CTA buttons |
| Button outlined | white border, transparent bg | Secondary CTA (Read more) |
| Section spacing | `ftco-section` default padding | Consistent vertical rhythm |

## Page structure (section order, from live preview DOM)

1. **Top utility bar** — green `#589167` background, phone + email left-aligned, social icons (Facebook, Twitter, Instagram, Dribbble) right-aligned, white text
2. **Navbar** — dark background, white text, sticky. Nav items: Home, About, Services, Pricing, Blog, Contact. Brand text "ZenWell"
3. **Hero** — full-width background image (counseling session photo), left-aligned content: headline "Counseling For Your Better Life", subtitle paragraph, two CTA buttons: solid green "Contact us" + outlined white "Read more". Circular play button overlay on image.
4. **Trust/Value props** — green `#589167` background, 3-column grid: "100% Confidential" (lock icon), "Qualified Team" (users icon), "Individual Approach" (user icon). Each has heading + description.
5. **How It Works** — white background, centered label "SERVICES", heading "How It Works", 3 numbered steps in a row: 01 Make Schedule, 02 Start Discussion, 03 Enjoy Plan. Each with icon, heading, description.
6. **About/Content section** — heading "Best Counseling Funding Network Worldwide." with two paragraphs of descriptive text, likely with an image or video element.
7. **Tabbed services** — heading "We Can Help You With This Situation". Left side: vertical tabs (Relation Problem, Couples Counseling, Depression Treatment, Family Problem, Personal Problem). Right side: content panel with heading, description, and icon/bullet list.
8. **Testimonials** — green overlay on background image, centered label "Testimonial", heading "Happy Clients". Carousel of testimonials with quote text and client name.
9. **Pricing** — light gray background, centered heading "Affordable Packages". 3 pricing cards: $49 Individual Counseling, $79 Couples Therapy, $109 Family Therapy. Each card has feature list (Individual Counseling, Couples Therapy, Family Therapy, Counseling for Children, Behavioral Management) and "Get Started" button.
10. **Contact/Appointment form** — green overlay on background image (bg_2.jpg), heading "Send a Message & Get in touch!". Form with inputs: name, email, subject, message, and submit button.
11. **Blog** — white background, centered heading "Recent Blog". 3 blog cards in a row, each with image, date, category tag, heading, and excerpt.
12. **Footer** — dark background. 4 columns: brand name "ZenWell" + description, Explore links, Legal links, Company links. "Have a Questions?" section with address/phone. Copyright bar at bottom.

## Requirements

### Feature: ZenWell Counseling Template

Feature: ZenWell — Counseling/Mental Health Website Template
As a user visiting the ZenWell website
I want to see a professional counseling service website
So that I can learn about services, pricing, and contact the provider

#### Scenario: Top utility bar displays contact info and social links

- **GIVEN** I am on the ZenWell homepage
- **THEN** I see a green top bar with phone number and email
- **AND** I see social media icons (Facebook, Twitter, Instagram, Dribbble)
- **AND** the top bar text is white on green background

#### Scenario: Navbar is sticky and responsive

- **GIVEN** I am on the ZenWell homepage
- **THEN** I see a dark sticky navbar with brand "ZenWell"
- **AND** I see navigation links: Home, About, Services, Pricing, Blog, Contact
- **AND** the navbar collapses to a hamburger menu on mobile

#### Scenario: Hero section shows headline and CTAs

- **GIVEN** I am on the ZenWell homepage
- **THEN** I see a hero section with a background image
- **AND** I see the heading "Counseling For Your Better Life"
- **AND** I see a "Contact us" primary button (green)
- **AND** I see a "Read more" outlined button (white border)
- **AND** I see a circular play button overlay on the image

#### Scenario: Trust/value proposition section displays 3 benefits

- **GIVEN** I scroll to the trust section
- **THEN** I see a green background section with 3 columns
- **AND** I see "100% Confidential" with a lock icon
- **AND** I see "Qualified Team" with a users icon
- **AND** I see "Individual Approach" with a user icon
- **AND** each column has a heading and description paragraph

#### Scenario: How It Works section shows 3 steps

- **GIVEN** I scroll to the How It Works section
- **THEN** I see the label "SERVICES" and heading "How It Works"
- **AND** I see 3 numbered steps: Make Schedule, Start Discussion, Enjoy Plan
- **AND** each step has a number circle, icon, heading, and description

#### Scenario: About section displays counseling description

- **GIVEN** I scroll to the about section
- **THEN** I see the heading "Best Counseling Funding Network Worldwide."
- **AND** I see descriptive paragraphs about the counseling service

#### Scenario: Tabbed services section allows switching between topics

- **GIVEN** I scroll to the services section
- **THEN** I see the heading "We Can Help You With This Situation"
- **AND** I see tabs: Relation Problem, Couples Counseling, Depression Treatment, Family Problem, Personal Problem
- **AND** clicking a tab shows its content panel with heading and description
- **AND** the active tab is visually highlighted

#### Scenario: Testimonials section shows client quotes

- **GIVEN** I scroll to the testimonials section
- **THEN** I see a green overlay background
- **AND** I see the label "Testimonial" and heading "Happy Clients"
- **AND** I see testimonial cards with quote text and client name
- **AND** testimonials cycle in a carousel

#### Scenario: Pricing section displays 3 tiers

- **GIVEN** I scroll to the pricing section
- **THEN** I see a light gray background with heading "Affordable Packages"
- **AND** I see 3 pricing cards: $49, $79, $109
- **AND** each card has a feature list and "Get Started" button
- **AND** the feature list includes: Individual Counseling, Couples Therapy, Family Therapy, Counseling for Children, Behavioral Management

#### Scenario: Contact form collects user messages

- **GIVEN** I scroll to the contact section
- **THEN** I see a green overlay background with heading "Send a Message & Get in touch!"
- **AND** I see form inputs: name, email, subject, message
- **AND** I see a submit button
- **AND** the form validates required fields before submission

#### Scenario: Blog section shows recent posts

- **GIVEN** I scroll to the blog section
- **THEN** I see heading "Recent Blog"
- **AND** I see 3 blog cards in a row
- **AND** each card has an image, date, category, heading, and excerpt

#### Scenario: Footer displays site information

- **GIVEN** I scroll to the footer
- **THEN** I see a dark footer with brand "ZenWell" and description
- **AND** I see column links: Explore, Legal, Company
- **AND** I see a "Have a Questions?" section with contact details
- **AND** I see a copyright bar with "Component Dock" link

#### Scenario: All sections maintain consistent spacing

- **GIVEN** I scroll through the entire page
- **THEN** each section has consistent vertical padding
- **AND** sections alternate between white, light gray, and green backgrounds
- **AND** headings use consistent sizing and weight

#### Scenario: Page is responsive on mobile

- **GIVEN** I view the page on a 375px viewport
- **THEN** the navbar collapses to a hamburger menu
- **AND** columns stack vertically
- **AND** the hero text remains readable
- **AND** the contact form is full-width

## Verification checklist

- [ ] All 12 sections present in correct order
- [ ] Brand color #589167 used consistently (top bar, intro, testimonials, contact overlay)
- [ ] Roboto font family applied globally
- [ ] Navbar is sticky with dark background
- [ ] Hero has background image with overlay and two CTA buttons
- [ ] Trust section has green background with 3 icon columns
- [ ] How It Works has 3 numbered steps
- [ ] Tabbed services section switches content on click
- [ ] Testimonials carousel cycles through quotes
- [ ] Pricing has 3 tiers ($49, $79, $109) with feature lists
- [ ] Contact form validates required fields
- [ ] Blog shows 3 cards with images
- [ ] Footer has 4 columns + copyright with Component Dock link
- [ ] Responsive layout works on mobile (375px)
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] public/CNAME contains zenwell.free.componentdock.com
- [ ] package.json homepage set to https://zenwell.free.componentdock.com
