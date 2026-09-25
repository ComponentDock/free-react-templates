# Template: Archcraft (Architecture / Interior Design)

## Purpose

Recreation of the ColorLib "Archs" template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page template.

- **Source slug:** `archs`
- **Source URL:** https://colorlib.com/wp/template/archs/
- **Preview URL:** https://preview.colorlib.com/theme/archs/
- **Stack:** React 19 · Vite (latest) · Tailwind CSS 4 · TypeScript (strict)
- **Package:** `@free-react-templates/archcraft`
- **Surge target:** `archcraft.free.componentdock.com`

## Design Tokens

Extracted from the live preview CSS (`css/style.css`) at https://preview.colorlib.com/theme/archs/

| Token | Value | Usage |
|-------|-------|-------|
| Brand primary | `#ff5733` | Buttons, form focus borders, accents |
| Dark text | `#000000` | All headings (h1–h6) |
| Body text | `gray` | Paragraph body copy |
| Muted text | `#999999` / `#737373` | Secondary text, dates, categories |
| Light text | `#cccccc` / `#b3b3b3` | Lighter muted text |
| White text | `#FFFFFF` | On dark backgrounds, button labels |
| Body bg | `#FFFFFF` | Default section background |
| Light bg | `#f8f9fa` | Contact section background (`bg-light`) |
| Border color | `#dee2e6` / `#ced4da` | Card borders, dividers |
| Heading font | Nunito Sans (Google Fonts, weights 200–900) | Headings, nav, buttons |
| Body font | System font stack (apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans) | Body copy |
| Button shape | Square (rounded-0, no border-radius) | All CTA buttons |
| Button border | 2px solid | Button outlines |
| Button primary bg | `#ff5733` | Primary CTA fill |
| Button primary text | `#FFFFFF` | White on brand |
| Button hover | Transparent bg + `#000000` text | Hover state swap |
| Form focus border | `#ff5733` | Input focus ring color |
| Selection bg | `#000000` | Text selection highlight |
| Selection text | `#FFFFFF` | Selected text color |

## Section Structure (in page order)

### 1. Top Bar
- Social icon links (Twitter, Facebook, LinkedIn, Instagram) — left-aligned
- Contact info (email + phone) — right-aligned
- Dark/transparent background, small font size (0.8rem)
- Separated from navbar by a thin white border-bottom (10% opacity)

### 2. Navbar
- Logo text "Archcraft" — left-aligned (col-2)
- Navigation links right-aligned (col-10): Home, About Us (with dropdown: Team, Pricing, FAQ, More Links), Services, News, Contact
- Dropdown menus with arrow-top indicator
- Sticky on scroll (js-sticky-header behavior)
- Mobile: hamburger toggle → slide-out mobile menu

### 3. Hero
- Full-width parallax background image with dark overlay
- Centered content: video play button (circle with play icon), "Interior Design" headline (uppercase), italic subtitle text
- AOS fade animation on load

### 4. Features Strip
- 3-column grid (col-lg-4 col-md-6)
- Each feature: flaticon icon (display-4 size) + heading + description
- Items: Innovative Structure, Architectural, Interior Design
- White background with bottom border

### 5. About Section
- Section ID: about-section
- "About Us" heading (h3, mb-4)
- Body text paragraph
- White background

### 6. Team Section
- Section ID: our-team-section
- Section subtitle "Meet Our Team" + heading "Our Team"
- Description paragraph
- 6 team members in 3-column grid (col-lg-4 col-md-6)
- Each member: photo (rounded), social icons overlay (Facebook, Twitter, Instagram), name (h2), role subtitle, description paragraph
- Members: Cloe Marena (Architect), John Rooster, Will Turner, Nicolas Stainer, George Brook, Emely Hopson

### 7. Pricing Section
- Section ID: pricing-section
- Section subtitle "Pricing" + heading "Choose Your Plan"
- 3 pricing cards in equal columns (col-lg-4 col-md-6)
- Each card: bordered rounded card with center-aligned content — plan name, price (sup currency + number + per period), billing note, feature list (checkmarks + strikethrough for excluded), "Buy Now" CTA button (primary, rounded-0, block)
- Plans: Starter ($30/year), Professional ($72/year), Enterprise ($149/year)

### 8. FAQ Section
- Section ID:faq-section
- Split layout: left column — image; right column — accordion
- Section subtitle "Ask Us, We Are Happy To Answer" + heading "Frequently Ask Questions"
- 5 accordion items with Bootstrap collapse (single-expand behavior)
- Questions: How much you charge for a building?, What is your process?, How long does it take?, Will you provide the plan?, How can I apply?

### 9. Testimonials
- Section subtitle "Happy Clients" + heading "Testimonials"
- OwlCarousel-style slider (replace with React carousel)
- 4 testimonial items: circular photo, name, role subtitle, quoted paragraph
- Clients: Cloe Marena, Nathalie Channie, Will Turner, Nicolas Stainer

### 10. Projects Gallery
- Section ID: projects-section
- Section subtitle "Awesome Projects" + heading "Our Projects"
- 6 project cards in 3-column grid (col-lg-4 col-md-6)
- Each card: image thumbnail (linked to lightbox via fancybox), project name (h3 link), category label (muted text)
- Projects: Butterfly House (Interior), Interior Bed Design (Design), Kitchen Sink Design (Interior), Lobby Interior Design (Design), Relaxation Room Design (Interior), Butterfly House (Interior)

### 11. News / Blog Section
- Section ID: news-section
- Section subtitle "News & Update" + heading "Our Blog Posts"
- 3 blog post cards in 3-column grid (col-lg-4 col-md-6)
- Each card: image thumbnail, date (muted), post title (h3 link)
- "View All Posts" CTA button (primary, rounded-0) centered below

### 12. Services Section
- Section ID: services-section
- Section subtitle "Services" + heading "Our Services"
- Description paragraph
- 6 service items in 3-column grid (col-lg-4 col-md-6)
- Each item: flaticon icon (display-4) + heading + description
- Services: Innovative Structure, Architectural Design, Interior Design, Modern Window Design, Experts Architect, (one more)

### 13. Contact Section
- Section ID: contact-section
- Light background (`bg-light` / `#f8f9fa`)
- Section subtitle "Get In Touch" + heading "Contact Us"
- Description paragraph
- Full-width white form card (p-5, bg-white) with:
  - Full Name input (text, bold label, placeholder)
  - Email input (email, bold label, placeholder)
  - Message textarea (5 rows, bold label, placeholder)
  - "Send Message" submit button (primary, rounded-0, lg)

### 14. Footer
- Dark/white background with top border
- 4-column layout:
  - Col 1: About Us text + Navigation links (2 sub-columns: Home/Services/News/Team + Interior Design/Architect/Privacy/Membership)
  - Col 2: Recent News (3 items with thumbnail + date + title)
  - Col 3: Subscribe Newsletter (email input + submit)
  - Col 4: Follow Us (social icon links)
- Component Dock attribution link (mandatory)

## Gherkin Requirements

```gherkin
Feature: Archcraft — Architecture / Interior Design Template

  Background:
    Given the template is loaded in a browser
    And the viewport is 1280×800

  Scenario: Top bar renders social links and contact info
    Then I should see social icon links for Twitter, Facebook, LinkedIn, and Instagram
    And I should see an email address and phone number

  Scenario: Navbar displays logo and navigation
    Then I should see the logo text "Archcraft"
    And I should see navigation links: Home, About Us, Services, News, Contact
    When I hover over "About Us"
    Then I should see a dropdown with Team, Pricing, FAQ

  Scenario: Hero section shows headline and subtitle
    Then I should see the heading "Interior Design"
    And I should see an italic subtitle paragraph
    And I should see a video play button

  Scenario: Features strip displays 3 items
    Then I should see 3 feature items in a row
    And each feature should have an icon, heading, and description

  Scenario: About section renders content
    Then I should see an "About Us" heading
    And I should see a description paragraph

  Scenario: Team section shows 6 members
    Then I should see the heading "Our Team"
    And I should see 6 team member cards
    And each card should show a photo, name, role, and social icons

  Scenario: Pricing section shows 3 plans
    Then I should see the heading "Choose Your Plan"
    And I should see 3 pricing cards
    And each card should show a plan name, price, features list, and buy button

  Scenario: FAQ section has accordion with 5 items
    Then I should see the heading "Frequently Ask Questions"
    And I should see an image on the left
    And I should see 5 accordion questions on the right
    When I click a question
    Then the answer should expand

  Scenario: Testimonials carousel displays client quotes
    Then I should see the heading "Testimonials"
    And I should see testimonial items with photo, name, role, and quote

  Scenario: Projects gallery shows 6 items
    Then I should see the heading "Our Projects"
    And I should see 6 project cards in a 3-column grid
    And each card should show an image, project name, and category

  Scenario: News section shows 3 blog posts
    Then I should see the heading "Our Blog Posts"
    And I should see 3 blog post cards with image, date, and title
    And I should see a "View All Posts" button

  Scenario: Services section shows 6 items
    Then I should see the heading "Our Services"
    And I should see 6 service items with icon, heading, and description

  Scenario: Contact section has a form
    Then I should see the heading "Contact Us"
    And I should see a form with Full Name, Email, and Message fields
    And I should see a "Send Message" button
    When I focus on an input
    Then the border should highlight with the brand color

  Scenario: Footer renders all columns
    Then I should see About Us text, Navigation links, Recent News, Subscribe Newsletter, and Follow Us sections
    And I should see a Component Dock attribution link

  Scenario: Responsive layout adapts to mobile
    When I resize to 375×667
    Then the navbar should collapse to a hamburger menu
    And grid sections should stack vertically
```

## Verification Checklist

- [ ] All 14 sections render in correct page order
- [ ] Top bar shows social icons + contact info
- [ ] Navbar is sticky on scroll with dropdown functionality
- [ ] Hero has parallax background, play button, headline, subtitle
- [ ] Features strip has 3 items with icons
- [ ] About section renders heading + text
- [ ] Team section shows 6 members with photos and social overlays
- [ ] Pricing shows 3 cards with correct prices ($30, $72, $149)
- [ ] FAQ accordion expands/collapses correctly (5 items)
- [ ] Testimonials carousel slides through 4 items
- [ ] Projects gallery has 6 items in 3-column grid
- [ ] News section has 3 blog cards + "View All Posts" button
- [ ] Services section shows 6 items with icons
- [ ] Contact form has Full Name, Email, Message fields + Send Message button
- [ ] Footer has all 5 columns with Component Dock link
- [ ] Brand color #ff5733 used for buttons and accents
- [ ] Nunito Sans font loaded for headings
- [ ] Square buttons (rounded-0) with 2px border
- [ ] Form focus borders use brand color
- [ ] Responsive: mobile hamburger, stacked grids
- [ ] No ColorLib references in app code
- [ ] CNAME set to archcraft.free.componentdock.com
- [ ] Coverage at 100% lines/functions/branches/statements
