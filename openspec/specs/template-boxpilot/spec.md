# Template: Boxpilot (Creative Digital Agency)

## Purpose

Recreation of ColorLib **Boxus** — a one-page creative digital agency template.

- **Source slug:** `boxus`
- **Preview URL:** https://preview.colorlib.com/theme/boxus/
- **Original:** https://colorlib.com/wp/template/boxus/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/boxus-creative-digital-agency-free-website-template.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design Tokens (from preview DOM + CSS)

| Token             | Value                         | Notes                                         |
| ----------------- | ----------------------------- | --------------------------------------------- |
| Font family       | `'Roboto', sans-serif`        | Google Font, body + headings                  |
| Primary accent    | `#E74C78` (pink-rose)        | CTAs, hover states, active nav                |
| Secondary green   | `#32DB8A`                    | Skill bars, accent highlights                 |
| Secondary blue    | `#4C9EE7`                    | Alternate accent, section backgrounds         |
| Secondary yellow  | `#FFBB42`                    | Tags, badge highlights                        |
| Body text         | `#727190` (muted purple-gray)| Paragraph copy, secondary text                |
| Heading text      | Dark gray/black              | Section headings                              |
| Section BG alt    | Light gray `#f9f9f9`         | Alternating section backgrounds               |
| Button radius     | Rounded (border-radius ~4px) | Small rounded corners on buttons              |
| Button padding    | ~12px 30px                   | Comfortable padding, medium size              |

### Color palette (inline style accents from preview)
- Service card dots: `#32DB8A` (green), `#FFBB42` (yellow), `#E74C78` (pink), `#4C9EE7` (blue)

## Section Order (from preview DOM)

1. **Navbar** — Fixed top, logo "BOXUS", links: Home, Services, Portfolio, About, News, Video, Skills, Contact. Mobile hamburger menu.
2. **Hero** — Full-width intro area. Heading: "We Craft Awesome Web And Graphic Design Solutions". Subtext about supporting students. CTA button. Clean white background.
3. **Services** — Alternating left/right layout with numbered sections (01–04): Branding, Mobile Apps, Graphic Design, and fourth service. Each has a colored dot indicator, title, and description. Image slider area on opposite side.
4. **Portfolio** — Grid layout with filter tabs (All, HTML, PSD Mockup). Card items with hover overlay. "Load More" button at bottom. 2-column grid.
5. **Crafters (Team)** — Timeline section with team member profiles. Bio timeline (2001–2016 career path), member photos, role titles (Lead Designer, SEO Master, PSD Guru). Cards in a row.
6. **Stories (Blog)** — 3-column blog card grid. Each card has image, title excerpt, author name, and category tag. "GO TO BLOG" link at bottom.
7. **Quotes/Testimonials** — Rotating quote cards with author attribution and name (Scott Hanselman, Tom Bissel, Steven Heller). Clean layout with quotation marks.
8. **Offer** — 2×4 icon grid showcasing capabilities: Video Editing, Premium Clear, For All Displays, Right On Time, Innovative Ideas, Perfect Sound, 3D Solution, plus one more. Each with icon, title, and short description.
9. **Expertise (Skills)** — Horizontal skill/progress bars with labels and percentage values. Design-related skills.
10. **Contact** — Contact form section with input fields and submit button.
11. **Footer** — Copyright notice, "© 2018 All rights reserved. | Boxus Template by Colorlib" replaced with Component Dock attribution.

## Gherkin Requirements

### Navbar

```gherkin
Feature: Navigation Bar

  Scenario: Desktop navbar displays all section links
    Given the user is on a desktop viewport
    When the page loads
    Then the navbar shows the logo and links for Home, Services, Portfolio, About, News, Video, Skills, Contact

  Scenario: Navbar becomes sticky on scroll
    Given the user scrolls past the hero section
    When the scroll position exceeds the navbar height
    Then the navbar should be fixed at the top of the viewport

  Scenario: Mobile hamburger menu toggles navigation
    Given the user is on a mobile viewport
    When they click the hamburger menu icon
    Then the navigation links should slide in or appear
    And clicking a link should close the menu and scroll to the section
```

### Hero Section

```gherkin
Feature: Hero / Intro Section

  Scenario: Hero displays headline and CTA
    Given the user views the page
    When the hero section is visible
    Then it shows the heading "We Craft Awesome Web And Graphic Design Solutions"
    And a subtext description below the heading
    And a call-to-action button

  Scenario: Hero has clean white background
    Given the user views the hero section
    Then the background is white
    And the heading text is dark
```

### Services Section

```gherkin
Feature: Services Section

  Scenario: Four services are displayed with numbered markers
    Given the user scrolls to the services section
    When the section renders
    Then four service items appear in alternating left-right layout
    And each service has a number (01, 02, 03, 04), title, and description
    And each has a colored dot indicator matching the palette

  Scenario: Services alternate layout direction
    Given the services section renders
    Then odd-numbered services show text on the left and image on the right
    And even-numbered services show image on the left and text on the right
```

### Portfolio Section

```gherkin
Feature: Portfolio Section

  Scenario: Portfolio grid with filter tabs
    Given the user scrolls to the portfolio section
    When the section renders
    Then filter tabs for "All", "HTML", and "PSD Mockup" are visible
    And portfolio items display in a grid

  Scenario: Clicking a filter tab filters items
    Given the portfolio section is visible
    When the user clicks a filter tab
    Then only items matching that category should be visible

  Scenario: Load More button at bottom
    Given the portfolio section renders
    Then a "LOAD MORE" button is visible below the grid
```

### Crafters (Team) Section

```gherkin
Feature: Team / Crafters Section

  Scenario: Team members displayed with timeline
    Given the user scrolls to the crafters section
    When the section renders
    Then team member cards appear with photos and role titles
    And a career timeline is visible (2001-2016 range)
    And members include Lead Designer, SEO Master, PSD Guru roles
```

### Stories (Blog) Section

```gherkin
Feature: Blog / Stories Section

  Scenario: Three blog cards in a row
    Given the user scrolls to the stories section
    When the section renders
    Then three blog post cards appear in a 3-column grid
    And each card has an image, title, excerpt, author name, and category
    And a "GO TO BLOG" link appears below the cards
```

### Quotes Section

```gherkin
Feature: Testimonials / Quotes Section

  Scenario: Quote cards with author attribution
    Given the user scrolls to the quotes section
    When the section renders
    Then quote cards appear with quotation text and author name
    And quotes are from attributed sources
```

### Offer Section

```gherkin
Feature: Offer / Capabilities Section

  Scenario: 8-item icon grid
    Given the user scrolls to the offer section
    When the section renders
    Then a 2×4 grid of capability items appears
    And each item has an icon, title, and short description
    And items include: Video Editing, Premium Clear, For All Displays, Right On Time, Innovative Ideas, Perfect Sound, 3D Solution
```

### Expertise (Skills) Section

```gherkin
Feature: Skills / Expertise Section

  Scenario: Skill bars with progress indicators
    Given the user scrolls to the expertise section
    When the section renders
    Then skill bars display with labels and percentage values
    And bars are filled to their respective percentages
    And the section has a light background
```

### Contact Section

```gherkin
Feature: Contact Section

  Scenario: Contact form with input fields
    Given the user scrolls to the contact section
    When the section renders
    Then a form with input fields (name, email, subject, message) is visible
    And a submit button is present

  Scenario: Form validation on empty submit
    Given the contact form is visible
    When the user clicks submit without filling fields
    Then validation errors should appear
```

### Footer

```gherkin
Feature: Footer

  Scenario: Footer shows Component Dock attribution
    Given the user scrolls to the bottom of the page
    When the footer renders
    Then it displays copyright text
    And a link to https://www.componentdock.com/ labeled "Component Dock"
```

## Verification Checklist

- [ ] All 11 sections render in correct order
- [ ] Navbar is sticky and responsive (mobile hamburger)
- [ ] Hero section has correct headline text and CTA button
- [ ] Services section has 4 items in alternating layout with numbered markers
- [ ] Portfolio section has filter tabs and grid
- [ ] Team/Crafters section shows member cards with timeline
- [ ] Blog/Stories section shows 3 cards in a row with "GO TO BLOG" link
- [ ] Quotes section shows testimonial cards
- [ ] Offer section shows 8-item icon grid in 2×4 layout
- [ ] Expertise section shows skill bars with percentages
- [ ] Contact section has a working form with validation
- [ ] Footer links to Component Dock
- [ ] Roboto font loaded from Google Fonts
- [ ] Brand colors match token values (#E74C78, #32DB8A, #4C9EE7, #FFBB42)
- [ ] No ColorLib references in app code (only in spec and TEMPLATES.md)
- [ ] Responsive layout works on mobile/tablet/desktop
