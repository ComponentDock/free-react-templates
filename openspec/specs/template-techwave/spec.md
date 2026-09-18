# Template: TechWave (Technology / IT Agency)

## Purpose

Recreation of the ColorLib **Portech** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page application.

- **Source:** https://colorlib.com/wp/template/portech/
- **Preview:** https://preview.colorlib.com/theme/portech/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/portech-colorlib-template.jpg
- **New name:** `techwave` (apps/techwave, @free-react-templates/techwave)
- **Deploy target:** https://techwave.free.componentdock.com

### Visual design summary (from screenshot + preview)

Dark, modern IT agency aesthetic. Deep navy/dark blue backgrounds (#141b25) with blue accent (#007bff / #1765fb). Hero uses full-width image slider with overlay, video play icon on left half, headline + CTA on right half. Services section on light grey (#f8f9fa) background with white cards. About section with photo grid and stat callout (42 years experience). Dark team section. Parallax counter section. FAQ with accordion + feature list. Testimonials carousel. Portfolio grid. Newsletter CTA. Multi-column footer on dark navy.

## Design tokens

Extracted from https://preview.colorlib.com/theme/portech/css/style.css:

| Token | Value | Usage |
|-------|-------|-------|
| Primary blue | `#007bff` | `.btn-primary` background, links, accents |
| Primary hover | `#0069d9` | Button hover state |
| Dark background | `#141b25` | `.bg-darken`, footer, dark sections |
| Light background | `#f8f9fa` | `.bg-light` sections (services, portfolio) |
| Body font | `"Roboto", Arial, sans-serif` | All body text (weights 300, 400, 500, 700, 900) |
| Decorative font | `"Arizonia"` | Available but not heavily used in preview |
| White button | `background: #fff; border: 1px solid #fff; color: #000` | `.btn-white` outline-to-fill on hover |
| Overlay | `rgba(0,0,0,0.5)` approx | Hero overlay, counter overlay |
| Counter section bg | Image `bg_4.jpg` with `background-attachment: fixed` | Parallax effect |
| Intro/Newsletter bg | Same `bg_4.jpg` with overlay | Newsletter CTA section |
| Section radius | 0 (square) | Bootstrap 4 default, no rounded sections |
| Button radius | 0.25rem (Bootstrap 4 default) | `.btn` |
| Testimony card bg | White on light grey | `.testimony-wrap` on `.bg-light` |
| Footer background | `#141b25` | `.ftco-footer` |
| Footer text color | `rgba(255,255,255,0.9)` | Footer paragraphs |
| Project card | Full bg-image with bottom text overlay | `.project-wrap` |

## Gherkin requirements

### Feature: TechWave Template

  As a visitor to TechWave,
  I want a professional IT agency website,
  So that I can learn about services, view portfolio, and get in touch.

  Background:
    Given the browser loads "/" 
    Then the page renders without errors

  # --- Top Bar ---
  Scenario: Top contact bar displays phone and email
    Given the page is loaded
    When I view the top bar
    Then I see "Phone no:" followed by a phone number
    And I see "email us:" followed by an email address
    And I see social media icons (Facebook, Twitter, Instagram, Dribbble)

  # --- Navbar ---
  Scenario: Navigation bar is present and dark
    Given the page is loaded
    When I view the navigation bar
    Then it has a dark background
    And it shows the brand name "TechWave"
    And it has links: Home, About, Services, Portfolio, Blog, Contact

  Scenario: Navbar is responsive
    Given the viewport is mobile (< 768px)
    When I view the navigation bar
    Then a hamburger menu button is visible
    And clicking it expands the nav links

  # --- Hero ---
  Scenario: Hero slider shows welcome headline and CTAs
    Given the page is loaded
    When I view the hero section
    Then I see a subheading "Welcome to TechWave"
    And I see heading "We Create Website the Way You Want with TechWave"
    And I see a "Learn More" primary button
    And I see a "View Portfolio" white button
    And I see a video play icon on the left half

  Scenario: Hero has background image with overlay
    Given the page is loaded
    When I view the hero section
    Then a dark overlay covers the background image
    And the text is white/light

  # --- Services ---
  Scenario: Services section shows 4 service cards
    Given the page is loaded
    When I scroll to the services section
    Then I see 4 service cards in a row on desktop
    And each card has an icon, heading, description, and arrow link
    And the services are: UX/UI Design, Development, Branding, Search Optimization
    And the section background is light grey (#f8f9fa)
    And the cards have white background and float above the section

  # --- About ---
  Scenario: About section displays studio info with image and stats
    Given the page is loaded
    When I scroll to the about section
    Then I see a subheading "Welcome to TechWave"
    And I see heading "We Are TechWave Creative Studio Agency"
    And I see an image area with "42 Year Of Experienced" stat callout
    And I see "Expert Team" and "Solution For Business" feature highlights
    And I see a paragraph about the agency

  # --- Team ---
  Scenario: Team section shows staff cards on dark background
    Given the page is loaded
    When I scroll to the team section
    Then the section has a dark background (#141b25)
    And I see subheading "Team & Staff"
    And I see heading "Our Team"
    And I see 3 staff member cards
    And each card shows a photo, name, role, and social icons
    And I see a "View All Staff" primary button

  # --- Counter ---
  Scenario: Counter section displays stats with parallax background
    Given the page is loaded
    When I scroll to the counter section
    Then I see 4 stat counters in a row
    And the stats are: 4800 Project Completed, 1000 Our Staff, 350 Services Provide, 7650 Happy Customers
    And each counter has an icon
    And the background has a parallax image with overlay

  # --- FAQ ---
  Scenario: FAQ section shows features and accordion
    Given the page is loaded
    When I scroll to the FAQ section
    Then I see a left column with an image and feature list (Creative Ideas, Better Strategy)
    And I see a right column with "Frequently Ask Question" heading
    And I see an accordion with expandable questions
    And clicking a question reveals its answer

  # --- Testimonials ---
  Scenario: Testimonials section shows client reviews in carousel
    Given the page is loaded
    When I scroll to the testimonials section
    Then I see subheading "Testimonial"
    And I see heading "What Are Clients Says"
    And I see a carousel of testimonial cards
    And each card has 5 stars, a quote, a person image, name, and role

  # --- Portfolio ---
  Scenario: Portfolio section shows project grid
    Given the page is loaded
    When I scroll to the portfolio section
    Then I see subheading "Recent Portfolio"
    And I see heading "Our Exceptional Quality Work"
    And I see 6 project cards in a 3-column grid
    And each card has a background image, category label, title, and arrow icon

  # --- Newsletter / Intro ---
  Scenario: Newsletter section has email subscription form
    Given the page is loaded
    When I scroll to the newsletter section
    Then I see heading "Subscribe to our Newsletter"
    And I see an email input field and a "Subscribe" button
    And the section has a background image with overlay

  # --- Footer ---
  Scenario: Footer has multiple columns with links and contact info
    Given the page is loaded
    When I scroll to the footer
    Then I see the brand name "TechWave" with a short description
    And I see social media links (Twitter, Facebook, Instagram)
    And I see columns: Explore, Info, Company, Have a Questions?
    And I see address, phone, and email in the contact column
    And the footer background is dark navy (#141b25)
    And the footer includes a link to Component Dock

## Verification checklist

- [ ] Top bar: phone + email + social icons present
- [ ] Navbar: dark, brand "TechWave", 6 links, responsive hamburger
- [ ] Hero: slider with overlay, subheading, heading, 2 CTAs, video icon
- [ ] Services: 4 cards on light bg, icons, descriptions, arrow links
- [ ] About: image + "42 Years" stat, heading, features (Expert Team, Solution For Business)
- [ ] Team: dark bg, 3 staff cards with photos/names/roles/social icons
- [ ] Counter: 4 stats with icons on parallax bg
- [ ] FAQ: left image + features, right accordion with expand/collapse
- [ ] Testimonials: carousel with star ratings, quotes, avatars
- [ ] Portfolio: 6-item grid with bg images, category, title, arrow
- [ ] Newsletter: bg image, heading, email input + subscribe button
- [ ] Footer: 5+ columns, brand, social, nav links, contact info, Component Dock link
- [ ] All colors match design tokens (#007bff primary, #141b25 dark, #f8f9fa light)
- [ ] Font: Roboto (300/400/500/700)
- [ ] Responsive: mobile hamburger, stacked layouts on small screens
- [ ] No ColorLib references in app code (only in spec/TEMPLATES.md)
- [ ] Footer links to componentdock.com
