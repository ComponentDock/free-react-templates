# Template: BuildMark (Construction Company)

## Purpose

Recreation of ColorLib's **Topbuilder** template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page application.

- **Source template:** [Topbuilder](https://colorlib.com/wp/template/topbuilder/)
- **Live preview:** https://preview.colorlib.com/theme/topbuilder/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/topbuilder-construction-company-website-template.jpg
- **Stack:** Vite (latest), React 19, Tailwind CSS 4, TypeScript (strict)
- **Deploy target:** `https://buildmark.free.componentdock.com`

## Design Tokens

Extracted from the live preview CSS (`css/style.css`):

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| Brand/Theme | `#f6b60b` | Primary buttons, active states, hover accents, icon highlights |
| Brand Alternate | `#f8b81d` | Alternate brand shade for button fills, accent backgrounds |
| Dark Navy | `#111f29` | Top header bar, dark section backgrounds, footer dark bg |
| Dark Footer | `#090909` | Footer background |
| Dark Body | `#222222` | Body text, dark card backgrounds |
| Medium Dark | `#2e3841` | Alternate dark backgrounds |
| Gray BG | `#f5f5f5` | Light section backgrounds |
| Light BG | `#f7f7f7` | Alternate light backgrounds |
| Near White | `#fefefe` | Card backgrounds |
| White | `#ffffff` | Text on dark, button backgrounds, main body bg |
| Text Gray | `#555555` | Secondary text, paragraphs |
| Overlay Dark | `rgba(0, 0, 0, 0.8)` | Gallery hover overlay |
| Overlay Light | `rgba(0, 0, 0, 0.9)` | Featured works overlay |
| Brand Overlay | `rgba(248, 184, 29, 0.7)` | Achievement counter overlay |

### Typography

| Token | Value | Usage |
|-------|-------|-------|
| Font Family | `"Roboto"` (Google Fonts) | All text: headings, body, navigation |
| Section Title | H2 default weight | Section headings |
| Body Text | Default Roboto | Paragraphs, links, navigation items |

### Buttons

| Style | Radius | Padding | Notes |
|-------|--------|---------|-------|
| `.button_all` (primary) | 0 | 12px 30px | Yellow fill (#f6b60b), dark text (#222222), hover sweeps to dark bg + white text |
| `.button_all:before` (hover sweep) | 0 | — | Animated overlay: `#222222` background slides in from left |
| `.book_now` CTA | 0 | 14px 35px | Yellow button with white text |

### Decorative

- **Hero slider:** Full-width background images with Camera Slider plugin. Text overlay: welcome headline, descriptive paragraph, "Read More" CTA button. Two slides.
- **Stellar parallax:** Achievements section and featured works use `data-stellar-background-ratio` for parallax scroll effects.
- **Gallery hover:** Dark overlay with link/search icons on portfolio items.
- **Counter animation:** jQuery Counter-Up plugin on achievements section.
- **Team social links:** Facebook/Twitter/LinkedIn icons appear on team member hover.

## Section Structure

Order from the live preview HTML (single page):

1. **Top Header Bar** — Dark navy (#111f29) strip with phone, email, hours on left; social icons (Facebook, Twitter, Google+, Instagram, Pinterest, LinkedIn) on right. Icons in yellow (#f6b60b).

2. **Navbar** — White background, logo left, horizontal nav: Home (dropdown), About Us (dropdown), Services (dropdown), Gallery, Blog (dropdown), Contact, search icon. Bootstrap navbar with hamburger on mobile.

3. **Hero Slider** — Full-width image slider (Camera Slider). Two slides with text overlay: "Welcome to our" subtitle, "CLEAN, MODERN, MULTIPURPOSE THEME" headline, descriptive paragraph, "Read More" CTA button.

4. **Professional Builder (Feature Strip)** — 4-column row on white background. Each: icon (FA), title, short description. Items: Professional Builder, We Deliver Quality, Always On Time, We Are Passionate.

5. **About Us** — Section title "ABOUT US" with subtitle. Split layout: left side "WHO WE ARE" heading + description paragraph + "Contact Now" CTA button; right side team/client image.

6. **What We Offer** — 3-column cards with image + icon + title + description. Items: Building Construction, Project Planning, House Renovation. Light background.

7. **Our Features** — Split layout: left side feature image; right side "WHY CHOOSE US" heading with 3 feature items (icon + title + description): 30+ Years of Experience, Qualified Experts, Best Customer Services.

8. **Our Services (Portfolio)** — Filterable gallery (All, Architecture, Building, Construction, Design, Painting) using Isotope. 6 gallery items in 3-column grid with hover overlay.

9. **Our Team** — 4-column team member cards. Each: photo, social icons overlay, name, role. Members: Prodip Ghosh (Founder & CEO), Emran Khan (Web Developer), Prodip Ghosh (Founder & CEO), Jakaria Khan (Founder & CEO).

10. **Our Achievements** — Full-width parallax background image with dark overlay. 4-column counter stats: 800 Projects Completed, 230 House Renovations, 1390 Workers Employed, 125 Awards Won.

11. **Our Testimonials** — Carousel of testimonial cards. Each: avatar image, name, role, quote text with quote icons. Uses OwlCarousel.

12. **Our Featured Works** — Full-width parallax background. 2x4 gallery grid. Each item: project image, hover overlay with project name + "VIEW PROJECT" link.

13. **Our Latest Blog** — 3-column blog cards. Each: featured image, heading, author name + date, excerpt, "Read More" link.

14. **Our Partners** — Client logo carousel (5 logos). Below: booking CTA strip with headline + "Book Now" yellow button.

15. **Footer** — Dark background (#090909). 4-column layout: About company (logo + description + social icons), Quick Links (6 service links), Twitter Feed (2 tweets), Contact Us (email, phone, address). Bottom copyright bar with Colorlib attribution.

## Gherkin Requirements

### Scenario: Top Header Bar renders correctly

```gherkin
Feature: Top Header Bar
  As a visitor, I want to see contact info and social links so I can reach the company.

  Scenario: Top header displays contact information
    Given I am on the BuildMark homepage
    Then I see a dark navy top header bar
    And it displays a phone number
    And it displays an email address
    And it displays office hours
    And it shows social media icons on the right side

  Scenario: Top header social icons are interactive
    Given I am on the BuildMark homepage
    When I hover over a social icon in the top header
    Then the icon highlights in the brand yellow color
```

### Scenario: Navbar renders correctly

```gherkin
Feature: Navigation Bar
  As a visitor, I want to navigate the site through a clear menu.

  Scenario: Navbar displays all navigation links
    Given I am on the BuildMark homepage
    Then I see a white navigation bar with the logo
    And I see links for Home, About Us, Services, Gallery, Blog, and Contact
    And I see a search icon

  Scenario: Navbar is responsive
    Given I am on the BuildMark homepage
    When I resize the viewport to mobile width
    Then the navigation collapses into a hamburger menu
    And I can expand the menu by tapping the hamburger icon
```

### Scenario: Hero Slider renders correctly

```gherkin
Feature: Hero Slider
  As a visitor, I want to see a compelling hero section with a call to action.

  Scenario: Hero slider displays slides with text overlay
    Given I am on the BuildMark homepage
    Then I see a full-width hero slider
    And it displays a welcome headline
    And it displays a descriptive paragraph
    And it shows a "Read More" call-to-action button

  Scenario: Hero slider transitions between slides
    Given I am on the BuildMark homepage
    When I wait for the slider to auto-advance
    Then the slide transitions smoothly to the next slide
```

### Scenario: Professional Builder Strip renders correctly

```gherkin
Feature: Professional Builder Strip
  As a visitor, I want to see key value propositions at a glance.

  Scenario: Builder strip shows 4 feature items
    Given I am on the BuildMark homepage
    Then I see a 4-column row of feature items
    And each item has an icon, title, and short description
    And the items are: Professional Builder, We Deliver Quality, Always On Time, We Are Passionate
```

### Scenario: About Us section renders correctly

```gherkin
Feature: About Us
  As a visitor, I want to learn about the company.

  Scenario: About section displays company info
    Given I am on the BuildMark homepage
    When I scroll to the About Us section
    Then I see the section title "ABOUT US"
    And I see a "WHO WE ARE" sub-heading
    And I see a descriptive paragraph
    And I see a "Contact Now" call-to-action button
    And I see a team/client image on the right
```

### Scenario: What We Offer section renders correctly

```gherkin
Feature: What We Offer
  As a visitor, I want to understand the services offered.

  Scenario: Offerings display 3 service cards
    Given I am on the BuildMark homepage
    When I scroll to the What We Offer section
    Then I see 3 service cards in a row
    And each card has an image, icon, title, and description
    And the services are: Building Construction, Project Planning, House Renovation
```

### Scenario: Our Features section renders correctly

```gherkin
Feature: Our Features
  As a visitor, I want to see why this company stands out.

  Scenario: Features section shows why choose us
    Given I am on the BuildMark homepage
    When I scroll to the Our Features section
    Then I see a feature image on the left
    And I see "WHY CHOOSE US" heading on the right
    And I see 3 feature items with icons: 30+ Years of Experience, Qualified Experts, Best Customer Services
```

### Scenario: Portfolio Gallery renders correctly

```gherkin
Feature: Portfolio Gallery
  As a visitor, I want to browse the company's work through a filterable gallery.

  Scenario: Gallery displays filterable items
    Given I am on the BuildMark homepage
    When I scroll to the Our Services portfolio section
    Then I see filter tabs: All, Architecture, Building, Construction, Design, Painting
    And I see 6 gallery items in a grid
    And hovering over an item shows a dark overlay with link/search icons

  Scenario: Gallery filters work
    Given I am on the BuildMark homepage
    When I click the "Architecture" filter tab
    Then only architecture-related gallery items are visible
    And the "All" tab shows all items again when clicked
```

### Scenario: Team section renders correctly

```gherkin
Feature: Team Section
  As a visitor, I want to meet the team members.

  Scenario: Team section displays 4 members
    Given I am on the BuildMark homepage
    When I scroll to the Our Team section
    Then I see 4 team member cards
    And each card has a photo, name, and role
    And hovering over a card reveals social media icons
```

### Scenario: Achievements section renders correctly

```gherkin
Feature: Achievements Section
  As a visitor, I want to see the company's track record.

  Scenario: Achievements show counter stats
    Given I am on the BuildMark homepage
    When I scroll to the Achievements section
    Then I see a parallax background with dark overlay
    And I see 4 counter stats: 800 Projects, 230 Renovations, 1390 Workers, 125 Awards
    And the numbers animate when scrolled into view
```

### Scenario: Testimonials section renders correctly

```gherkin
Feature: Testimonials
  As a visitor, I want to read testimonials from past clients.

  Scenario: Testimonials carousel displays cards
    Given I am on the BuildMark homepage
    When I scroll to the Testimonials section
    Then I see a carousel of testimonial cards
    And each card has an avatar, name, role, and quoted text
    And the carousel auto-rotates through testimonials
```

### Scenario: Featured Works section renders correctly

```gherkin
Feature: Featured Works
  As a visitor, I want to see highlighted projects.

  Scenario: Featured works gallery renders
    Given I am on the BuildMark homepage
    When I scroll to the Featured Works section
    Then I see a parallax background section
    And I see 8 project cards in a 2x4 grid
    And hovering over a card shows a dark overlay with project name and "VIEW PROJECT" link
```

### Scenario: Blog section renders correctly

```gherkin
Feature: Latest Blog
  As a visitor, I want to read recent blog posts.

  Scenario: Blog section displays 3 posts
    Given I am on the BuildMark homepage
    When I scroll to the Latest Blog section
    Then I see 3 blog post cards
    And each card has a featured image, heading, author, date, excerpt, and "Read More" link
```

### Scenario: Partners and CTA section renders correctly

```gherkin
Feature: Partners & CTA
  As a visitor, I want to see partner logos and a booking CTA.

  Scenario: Partners section shows logos and CTA
    Given I am on the BuildMark homepage
    When I scroll to the Partners section
    Then I see a carousel of partner/client logos
    And I see a yellow "Book Now" call-to-action strip below
```

### Scenario: Footer renders correctly

```gherkin
Feature: Footer
  As a visitor, I want comprehensive footer with links and contact info.

  Scenario: Footer displays all sections
    Given I am on the BuildMark homepage
    When I scroll to the footer
    Then I see 4 columns: About, Quick Links, Twitter Feed, Contact Us
    And the About column has logo, description, and social icons
    And the Quick Links column has 6 service links
    And the Contact column shows email, phone, and address
    And I see a copyright bar at the bottom with a link to Component Dock
```

## Verification Checklist

- [ ] Top header bar renders with phone, email, hours, social icons
- [ ] Navbar is sticky, responsive, with dropdown menus
- [ ] Hero slider auto-plays with text overlay and CTA button
- [ ] Professional Builder strip shows 4 feature items with icons
- [ ] About Us section has split layout with CTA button
- [ ] What We Offer shows 3 service cards with images
- [ ] Our Features has split layout with feature list
- [ ] Portfolio gallery has filterable tabs and hover overlays
- [ ] Team section shows 4 members with hover social icons
- [ ] Achievements section has parallax bg + animated counters
- [ ] Testimonials carousel auto-rotates
- [ ] Featured Works has parallax bg + 8 project cards with hover
- [ ] Blog section shows 3 post cards
- [ ] Partners section has logo carousel + CTA strip
- [ ] Footer has 4 columns + copyright bar linking Component Dock
- [ ] All sections use the brand yellow (#f6b60b) for accents
- [ ] Font family is Roboto (Google Fonts)
- [ ] Images use picsum.photos placeholders
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Footer links to https://www.componentdock.com/
