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

## Gherkin requirements

### Feature: ZenWell Counseling Template

```gherkin
Feature: ZenWell — Counseling/Mental Health Website Template
  As a user visiting the ZenWell website
  I want to see a professional counseling service website
  So that I can learn about services, pricing, and contact the provider

  Scenario: Top utility bar displays contact info and social links
    Given I am on the ZenWell homepage
    Then I see a green top bar with phone number and email
    And I see social media icons (Facebook, Twitter, Instagram, Dribbble)
    And the top bar text is white on green background

  Scenario: Navbar is sticky and responsive
    Given I am on the ZenWell homepage
    Then I see a dark sticky navbar with brand "ZenWell"
    And I see navigation links: Home, About, Services, Pricing, Blog, Contact
    And the navbar collapses to a hamburger menu on mobile

  Scenario: Hero section shows headline and CTAs
    Given I am on the ZenWell homepage
    Then I see a hero section with a background image
    And I see the heading "Counseling For Your Better Life"
    And I see a "Contact us" primary button (green)
    And I see a "Read more" outlined button (white border)
    And I see a circular play button overlay on the image

  Scenario: Trust/value proposition section displays 3 benefits
    Given I scroll to the trust section
    Then I see a green background section with 3 columns
    And I see "100% Confidential" with a lock icon
    And I see "Qualified Team" with a users icon
    And I see "Individual Approach" with a user icon
    And each column has a heading and description paragraph

  Scenario: How It Works section shows 3 steps
    Given I scroll to the How It Works section
    Then I see the label "SERVICES" and heading "How It Works"
    And I see 3 numbered steps: Make Schedule, Start Discussion, Enjoy Plan
    And each step has a number circle, icon, heading, and description

  Scenario: About section displays counseling description
    Given I scroll to the about section
    Then I see the heading "Best Counseling Funding Network Worldwide."
    And I see descriptive paragraphs about the counseling service

  Scenario: Tabbed services section allows switching between topics
    Given I scroll to the services section
    Then I see the heading "We Can Help You With This Situation"
    And I see tabs: Relation Problem, Couples Counseling, Depression Treatment, Family Problem, Personal Problem
    And clicking a tab shows its content panel with heading and description
    And the active tab is visually highlighted

  Scenario: Testimonials section shows client quotes
    Given I scroll to the testimonials section
    Then I see a green overlay background
    And I see the label "Testimonial" and heading "Happy Clients"
    And I see testimonial cards with quote text and client name
    And testimonials cycle in a carousel

  Scenario: Pricing section displays 3 tiers
    Given I scroll to the pricing section
    Then I see a light gray background with heading "Affordable Packages"
    And I see 3 pricing cards: $49, $79, $109
    And each card has a feature list and "Get Started" button
    And the feature list includes: Individual Counseling, Couples Therapy, Family Therapy, Counseling for Children, Behavioral Management

  Scenario: Contact form collects user messages
    Given I scroll to the contact section
    Then I see a green overlay background with heading "Send a Message & Get in touch!"
    And I see form inputs: name, email, subject, message
    And I see a submit button
    And the form validates required fields before submission

  Scenario: Blog section shows recent posts
    Given I scroll to the blog section
    Then I see heading "Recent Blog"
    And I see 3 blog cards in a row
    And each card has an image, date, category, heading, and excerpt

  Scenario: Footer displays site information
    Given I scroll to the footer
    Then I see a dark footer with brand "ZenWell" and description
    And I see column links: Explore, Legal, Company
    And I see a "Have a Questions?" section with contact details
    And I see a copyright bar with "Component Dock" link

  Scenario: All sections maintain consistent spacing
    Given I scroll through the entire page
    Then each section has consistent vertical padding
    And sections alternate between white, light gray, and green backgrounds
    And headings use consistent sizing and weight

  Scenario: Page is responsive on mobile
    Given I view the page on a 375px viewport
    Then the navbar collapses to a hamburger menu
    And columns stack vertically
    And the hero text remains readable
    And the contact form is full-width
```

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
