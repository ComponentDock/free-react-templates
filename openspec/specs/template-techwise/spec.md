# Template: Techwise (Creative Agency)

## Purpose

Recreation of the ColorLib "Portech" template as a React 19 + Vite + Tailwind 4 + TypeScript single-page application.

- **Source:** [Portech](https://colorlib.com/wp/template/portech/) (ColorLib)
- **Preview:** https://preview.colorlib.com/theme/portech/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/portech-colorlib-template.jpg
- **New name:** `techwise` (apps/techwise, @free-react-templates/techwise)
- **Category:** Creative Agency / Studio
- **Description:** A creative studio agency template with a full-width slider hero, services grid, about section, team showcase, portfolio, FAQ accordion, testimonials carousel, blog cards, newsletter, and contact footer.

## Design Tokens

| Token | Value | Notes |
|-------|-------|-------|
| primary | `#F96D00` | Orange brand accent (loader spinner, interactive highlights) |
| blue | `#007bff` | Bootstrap primary button color |
| dark-bg | `#1a1a1a` | Navbar, dark sections |
| darker-bg | `#141b25` | Deepest dark sections |
| light-bg | `#f7f7f7` | Alternating section backgrounds |
| body-font | `"Roboto", Arial, sans-serif` | Weights: 300, 400, 500, 700, 900 |
| display-font | `"Arizonia"` | Decorative/script font for logo and accents |
| white | `#fff` | Text on dark backgrounds |
| muted | `#999` | Secondary text |
| border-radius | `0–5px` | Minimal, near-square buttons and cards |
| button-radius | `0.25rem` (4px) | Bootstrap default btn |

### Visual Style (from screenshot)

- Dark navbar with brand text "Portech" in white
- Full-width hero slider with background images, dark overlay, play-button icon on left, text on right
- Light-gray alternating sections
- Service cards: icon + heading + paragraph in 2x2 grid
- About section: image left, text right
- Counter/stats section: dark parallax background with large numbers
- Team section: horizontal card carousel with photos and social links
- FAQ section: accordion-style questions
- Testimonial section: carousel with star ratings, quote, author name + role
- Blog cards: 3-column grid with date, author, image, excerpt, "Read more" link
- Newsletter: centered input with subscribe button
- Dark footer: 3-column layout (brand + nav, service links, contact info)
- Copyright bar: very dark background, centered text

## Section Structure (from live preview DOM)

1. **TopBar** — Phone number, email, social media icons (Facebook, Twitter, Instagram, Dribbble)
2. **Navbar** — Dark background, brand "Techwise" (Arizonia font), nav links: Home, About, Services, Portfolio, Blog, Contact. Sticky on scroll.
3. **Hero** — Full-width slider (owl-carousel pattern), 2 slides with background images + dark overlay. Split layout: left = video play icon, right = heading + subtext + 2 CTA buttons ("Learn More" primary, "View Portfolio" white)
4. **Services** — Section title "We Provide Effective for Business Solutions", 2x2 grid of service cards (UX/UI Design, Development, Branding, Search Optimization). Each card: icon + heading + paragraph.
5. **About** — Split layout: image left, text right. Heading "We Are Techwise Creative Studio Agency". Description paragraph + 2 stats (Expert Team, Solution For Business) + CTA "Get in touch with us"
6. **Team** — Section title "Our Team". Horizontal carousel of team member cards (3+). Each card: photo, name, role, social links. "View All Staff" button.
7. **Counter** — Dark parallax background image. Counter stats: Year Of Experienced, etc. Animated number counters.
8. **Portfolio** — Section title "Our Exceptional Quality Work". Image grid/masonry with hover overlay.
9. **WhyChooseUs** — Section title "Why Choose Us for Your Next Project?". Feature cards: Creative Ideas, Better Strategy with High Quality Business.
10. **FAQ** — Section title "Frequently Ask Question". Accordion items (4 questions with expandable answers).
11. **Testimonials** — Light background. Section title "What Are Clients Says". Carousel of testimonial cards. Each: star rating, quote text, author name "Roger Scott", role "Marketing Manager".
12. **Blog** — Light background. Section title "Recent Post". 3-column card grid. Each: image, date, author, comment count, title, excerpt, "Read more" link.
13. **Newsletter** — "Subscribe to our Newsletter" heading. Email input + subscribe button.
14. **Footer** — Dark background. 3-column layout: brand description + newsletter signup, "Explore" nav links + service links, "Have a Questions?" contact info (address, phone, email).
15. **FooterBottom** — Very dark bar. Copyright text with heart icon + "Component Dock" link.

## Gherkin Requirements

### Navbar

```gherkin
Feature: Navbar

  Scenario: Renders brand and navigation links
    Given the page loads
    Then the navbar displays brand text "Techwise"
    And the navbar contains links: Home, About, Services, Portfolio, Blog, Contact

  Scenario: Navbar is sticky on scroll
    Given the page loads
    When the user scrolls down past the hero
    Then the navbar remains fixed at the top of the viewport

  Scenario: Mobile hamburger menu
    Given the viewport width is less than 768px
    When the user taps the hamburger menu button
    Then the navigation links are displayed in a dropdown
```

### Hero

```gherkin
Feature: Hero Section

  Scenario: Displays hero content with CTA buttons
    Given the page loads
    Then the hero section shows a heading "We Create Website the Way You Want with Techwise"
    And the hero shows a subtext paragraph
    And the hero shows two CTA buttons: "Learn More" and "View Portfolio"

  Scenario: Hero has background image with overlay
    Given the page loads
    Then the hero section has a background image with a dark overlay

  Scenario: Hero shows video play icon
    Given the page loads
    Then the hero section displays a play button icon on the left side
```

### Services

```gherkin
Feature: Services Section

  Scenario: Displays service cards
    Given the page loads
    Then the services section shows heading "We Provide Effective for Business Solutions"
    And the services section displays 4 service cards: UX/UI Design, Development, Branding, Search Optimization

  Scenario: Each service card has icon and description
    Given the page loads
    Then each service card has an icon, a heading, and a description paragraph
```

### About

```gherkin
Feature: About Section

  Scenario: Displays about content
    Given the page loads
    Then the about section shows heading "We Are Techwise Creative Studio Agency"
    And the about section has a description paragraph
    And the about section has an image on the left

  Scenario: Shows stats and CTA
    Given the page loads
    Then the about section displays stat badges (Expert Team, Solution For Business)
    And the about section has a "Get in touch with us" CTA link
```

### Team

```gherkin
Feature: Team Section

  Scenario: Displays team member cards
    Given the page loads
    Then the team section shows heading "Our Team"
    And the team section displays team member cards with photo, name, role, and social links

  Scenario: Shows "View All Staff" button
    Given the page loads
    Then the team section displays a "View All Staff" button
```

### Counter

```gherkin
Feature: Counter Section

  Scenario: Displays animated counter stats
    Given the page loads
    Then the counter section shows stats with animated numbers
    And the counter section has a dark parallax background image
```

### Portfolio

```gherkin
Feature: Portfolio Section

  Scenario: Displays portfolio grid
    Given the page loads
    Then the portfolio section shows heading "Our Exceptional Quality Work"
    And the portfolio section displays an image grid with hover effects
```

### FAQ

```gherkin
Feature: FAQ Section

  Scenario: Displays FAQ accordion
    Given the page loads
    Then the FAQ section shows heading "Frequently Ask Question"
    And the FAQ section displays 4 accordion items with questions and answers

  Scenario: FAQ items expand on click
    Given the page loads
    When the user clicks on a FAQ question
    Then the corresponding answer is revealed
```

### Testimonials

```gherkin
Feature: Testimonials Section

  Scenario: Displays testimonial carousel
    Given the page loads
    Then the testimonials section shows heading "What Are Clients Says"
    And the testimonials section displays carousel cards with star ratings, quotes, author name and role
```

### Blog

```gherkin
Feature: Blog Section

  Scenario: Displays blog post cards
    Given the page loads
    Then the blog section shows heading "Recent Post"
    And the blog section displays 3 post cards with date, author, comment count, title, excerpt, and "Read more" link
```

### Newsletter

```gherkin
Feature: Newsletter Section

  Scenario: Displays newsletter signup
    Given the page loads
    Then the newsletter section shows heading "Subscribe to our Newsletter"
    And the newsletter section has an email input field and a subscribe button
```

### Footer

```gherkin
Feature: Footer

  Scenario: Displays footer content
    Given the page loads
    Then the footer shows 3-column layout with brand info, navigation links, and contact details
    And the footer displays address, phone number, and email

  Scenario: Footer bottom has Component Dock link
    Given the page loads
    Then the footer bottom bar shows copyright text with a link to Component Dock
```

## Verification Checklist

- [ ] All sections render in correct order (15 sections)
- [ ] Navbar is sticky and has all nav links
- [ ] Hero has background image, overlay, play icon, heading, subtext, 2 CTA buttons
- [ ] Services: 4 cards in 2x2 grid with icons, headings, descriptions
- [ ] About: image left, text right, stats, CTA
- [ ] Team: horizontal card carousel with photos, names, roles, social links
- [ ] Counter: animated numbers on dark parallax background
- [ ] Portfolio: image grid with hover effects
- [ ] FAQ: accordion with 4 items, expandable
- [ ] Testimonials: carousel with ratings, quotes, author info
- [ ] Blog: 3-column card grid with all metadata
- [ ] Newsletter: email input + subscribe button
- [ ] Footer: 3-column, contact info, copyright with Component Dock link
- [ ] Mobile responsive (hamburger menu, stacked layouts)
- [ ] Color tokens match design (orange accent, dark backgrounds, light alternating sections)
- [ ] Fonts: Roboto body, Arizonia display/logo
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
- [ ] App builds successfully
