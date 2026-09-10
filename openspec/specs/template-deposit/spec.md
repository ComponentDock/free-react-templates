# Template: Deposit (Banking & Financial Services)

## Purpose

Recreation of ColorLib's **Banker** template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page app.

- **Source:** https://colorlib.com/wp/template/banker/
- **Preview:** https://preview.colorlib.com/theme/banker/
- **New name:** `deposit` (apps/deposit, @free-react-templates/deposit)
- **Design category:** Banking / Financial Services

## Design tokens (extracted from live preview CSS)

| Token | Value | Usage |
|-------|-------|-------|
| Brand primary | `#fd7e14` (orange) | Buttons, CTA accents, active states |
| Brand secondary | `#71bc42` (green) | Secondary accent text |
| Dark surface | `#343a40` | Navbar border, footer background |
| Light bg | `#f7f7f7` / `#f8f9fa` | Section alternating backgrounds |
| Neutral gray | `#ccc` / `#dee2e6` | Borders, subtle backgrounds |
| Text primary | `#212529` | Body text |
| Text muted | `#b3b3b3` | Secondary text |
| White | `#fff` | Card backgrounds, button text |
| Font family | `"Open Sans", sans-serif` | Body + headings |
| Button radius | `30px` (pill shape) | All primary buttons |
| Button padding | `10px 30px` | Primary CTA buttons |
| Button font size | `16px` | Button labels |
| Border radius (cards) | `4px` | Card corners |
| Section padding | `2.5em 0` (normal) / `8em 0` (hero cover) | Vertical rhythm |
| Navbar | Absolute overlay on hero, z-index 1999, bottom border rgba(255,255,255,0.7) | Transparent-over-hero pattern |

## Visual design (from preview DOM + screenshot context)

Banking/finance corporate template with:
- Full-width hero carousel with dark overlay on background image, centered white text
- Orange pill-shaped CTAs on dark/white sections
- Alternating white and light-gray section backgrounds
- Dark charcoal footer (#343a40) with white text
- Clean professional aesthetic, Open Sans typography throughout

## Section structure (in order, from preview DOM)

1. **Navbar** — Sticky/absolute, logo left, nav links right (Home, About Us, Team, Pricing, FAQ, Gallery, Services, Testimonials, Blog, Contact), mobile hamburger
2. **Hero Carousel** — Full-width bg-image with dark overlay, 3 slides: "Banking Solutions", "Financing Solutions", "Savings Accounts" each with subtext and "Learn More" CTA
3. **Features (3-col)** — 3 icon+heading+text cards: Money Savings, Online Shopping, Credit/Debit Cards
4. **About Us / CTA** — Left column: heading "We Solve Your Financial Problem" + description + "Learn More" button; Right column: newsletter/email capture form with "Subscribe" button
5. **Team** — 4 members in grid: Kaiara Spencer (Finance Manager), Dave Simpson (Marketing Manager), Ben Thompson (Accountant), Kyla Stewart (Accountant); each with photo, name, role, social icons
6. **Gallery** — Filter buttons (All, Web, Brand, Design) + grid of portfolio images with hover overlay
7. **How It Works** — 3 numbered steps with icon + title + description + "Learn More": 01 Online Applications, 02 Get an approval, 03 Card delivery
8. **Services** — 6 service cards (2 rows of 3): Business Consulting, Credit Card, Income Monitoring, Insurance Consulting, Financial Investment, Financial Management; each with icon, title, description, "Learn More"
9. **Testimonials** — Carousel of customer quotes with avatar, name, role
10. **Pricing** — 3 cards: Basic ($47/yr), Premium ($200/yr, popular), Professional ($750/yr); each with features list and "Buy Now" button
11. **FAQ** — Accordion with expandable questions/answers
12. **Blog** — 3 blog post cards with image, title, author, date, excerpt, "Continue Reading" link
13. **Contact** — Left: address, phone, email; Right: contact form (First Name, Last Name, Email, Subject, Message, Submit)
14. **Footer** — Dark bg (#343a40), 4 columns: About Us text, Quick Links, Follow Us (social icons), Subscribe Newsletter (email input); Copyright bar at bottom

## Gherkin requirements

### Feature: Navbar
```gherkin
Scenario: Desktop navbar displays all navigation links
  Given the user is on a desktop viewport
  When the page loads
  Then the navbar is visible with links: Home, About, Team, Pricing, FAQ, Gallery, Services, Testimonials, Blog, Contact

Scenario: Mobile hamburger menu toggles
  Given the user is on a mobile viewport
  When the hamburger icon is clicked
  Then the mobile menu slides open
  And all navigation links are visible
```

### Feature: Hero Carousel
```gherkin
Scenario: Hero displays first slide
  Given the page loads
  When the hero section renders
  Then slide "Banking Solutions" is visible
  And a "Learn More" CTA button is displayed

Scenario: Hero auto-advances slides
  Given the hero section is visible
  When 5 seconds elapse
  Then the carousel advances to the next slide

Scenario: Hero has dark overlay on background image
  Given the hero section renders
  Then a dark semi-transparent overlay covers the background
  And the text is white and legible
```

### Feature: Features Section
```gherkin
Scenario: Three feature cards display
  Given the features section is visible
  Then there are 3 feature cards in a row
  And each card has an icon, heading, and description text
```

### Feature: About Us / CTA
```gherkin
Scenario: About section shows heading and form
  Given the about section is visible
  Then the heading "We Solve Your Financial Problem" is displayed
  And an email subscription form is present on the right
```

### Feature: Team Section
```gherkin
Scenario: Team members display in grid
  Given the team section is visible
  Then 4 team member cards are shown
  And each card has a photo, name, role, and social icon links
```

### Feature: Gallery
```gherkin
Scenario: Gallery shows filterable portfolio
  Given the gallery section is visible
  Then filter buttons are displayed (All, Web, Brand, Design)
  And a grid of portfolio images is shown
  And clicking a filter button shows only matching items
```

### Feature: How It Works
```gherkin
Scenario: Three process steps display
  Given the how-it-works section is visible
  Then 3 numbered steps are shown
  And each step has a number, title, description, and "Learn More" link
```

### Feature: Services Section
```gherkin
Scenario: Six services display in grid
  Given the services section is visible
  Then 6 service cards are shown in a 3-column grid
  And each card has an icon, title, description, and "Learn More" link
```

### Feature: Testimonials
```gherkin
Scenario: Testimonials carousel shows customer quotes
  Given the testimonials section is visible
  Then a carousel of customer testimonials is displayed
  And each testimonial has a quote, avatar, name, and role
```

### Feature: Pricing
```gherkin
Scenario: Three pricing tiers display
  Given the pricing section is visible
  Then 3 pricing cards are shown: Basic ($47/yr), Premium ($200/yr), Professional ($750/yr)
  And each card has a features list and "Buy Now" button
  And the Premium card is visually highlighted as popular
```

### Feature: FAQ
```gherkin
Scenario: FAQ accordion is functional
  Given the FAQ section is visible
  When a question is clicked
  Then the answer expands below the question
  And clicking again collapses the answer
```

### Feature: Blog
```gherkin
Scenario: Blog posts display as cards
  Given the blog section is visible
  Then 3 blog post cards are shown
  And each card has an image, title, author, date, excerpt, and "Continue Reading" link
```

### Feature: Contact
```gherkin
Scenario: Contact form collects user input
  Given the contact section is visible
  Then a form with First Name, Last Name, Email, Subject, and Message fields is displayed
  And a Submit button is present

Scenario: Contact info displays address details
  Given the contact section is visible
  Then the address, phone number, and email are displayed
```

### Feature: Footer
```gherkin
Scenario: Footer displays 4-column layout
  Given the footer is visible
  Then 4 columns are shown: About Us, Quick Links, Follow Us, Subscribe Newsletter
  And a copyright bar is at the bottom
  And a link to componentdock.com is present

Scenario: Footer newsletter form works
  Given the footer is visible
  When an email is entered and Subscribe is clicked
  Then the form submits without errors
```

## Verification checklist

- [ ] Navbar: sticky/transparent over hero, all links present, mobile hamburger works
- [ ] Hero: carousel auto-advances, 3 slides with correct text, dark overlay, CTA buttons
- [ ] Features: 3 cards with icons, headings, descriptions
- [ ] About/CTA: heading, description, email form on right side
- [ ] Team: 4 members with photos, names, roles, social links
- [ ] Gallery: filter buttons work, image grid renders, hover effects
- [ ] How It Works: 3 numbered steps with descriptions and CTAs
- [ ] Services: 6 cards in 3-col grid with icons, titles, CTAs
- [ ] Testimonials: carousel with quotes, avatars, names
- [ ] Pricing: 3 tiers with correct prices, features, highlighted Premium
- [ ] FAQ: accordion expands/collapses on click
- [ ] Blog: 3 post cards with images, metadata, read-more links
- [ ] Contact: form fields (First Name, Last Name, Email, Subject, Message) + address info
- [ ] Footer: 4-column layout, newsletter form, copyright, Component Dock link
- [ ] Design tokens: orange (#fd7e14) buttons with pill radius (30px), Open Sans font, dark footer (#343a40)
- [ ] Responsive: all sections adapt to mobile/tablet viewports
- [ ] No ColorLib references in app code (provenance in spec + TEMPLATES.md only)
- [ ] Footer links to componentdock.com
