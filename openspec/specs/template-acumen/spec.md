# Template: Acumen (Business)

## Purpose

Recreation of the ColorLib **Classic** business template as a React 19 + Vite +
Tailwind CSS 4 + TypeScript single-page application.

- **Source:** https://colorlib.com/wp/template/classic/
- **Preview:** https://preview.colorlib.com/theme/classic/
- **New name:** `acumen` (apps/acumen, @free-react-templates/acumen)
- **Deploy target:** https://acumen.free.componentdock.com
- **Category:** Business
- **Screenshot reference:** https://colorlib.com/wp/wp-content/uploads/sites/2/classic-free-template.jpg

## Design Tokens

Extracted from the live preview stylesheet (style.css at preview.colorlib.com/theme/classic/):

### Colors

| Token                   | Value             | Usage                       |
| ----------------------- | ----------------- | --------------------------- |
| `--color-primary`       | `#a1c4fd`         | Brand blue (gradient start) |
| `--color-primary-light` | `#c2e9fb`         | Brand blue (gradient end)   |
| `--color-text`          | `#4f4f4f`         | Body text                   |
| `--color-text-muted`    | `#898989`         | Secondary text, labels      |
| `--color-text-dark`     | `#6b6d6f`         | Alternate text              |
| `--color-bg`            | `#ffffff`         | White background            |
| `--color-bg-light`      | `#f9f9f9`         | Gray section background     |
| `--color-bg-section`    | `#f5f5f5`         | Alternate section bg        |
| `--color-border`        | `#e8e8e8`         | Borders, dividers           |
| `--color-overlay`       | `rgba(0,0,0,0.4)` | Header dark overlay         |

**Button gradient:** `linear-gradient(to right, #a1c4fd 0%, #c2e9fb 100%)`

### Fonts

| Font     | Family                     | Usage                  |
| -------- | -------------------------- | ---------------------- |
| Headings | `'Montserrat', sans-serif` | Section titles, nav    |
| Body     | `'Roboto', sans-serif`     | Paragraphs, body text  |
| Accent   | `'Satisfy', cursive`       | Decorative accent text |

### Button Shape

- **Border-radius:** `100px` (pill-shaped / full-round)
- **Default bg:** gradient `#a1c4fd → #c2e9fb`
- **Hover:** transparent bg with outline/border
- **Size variants:** `.bttn-lg` (hero CTA), default

### Section Backgrounds

- **Header:** Background image (`header-bg.jpg`) with dark overlay `rgba(0,0,0,0.4)`
- **About, Skills, Portfolio, Team, Blog, Contact, Footer:** white (`#ffffff`)
- **Services, Pricing, Counter:** light gray (`#f9f9f9` / `.gray-bg`)
- **Dot accent:** Circular `#a1c4fd → #c2e9fb` gradient dot

## Section Structure (DOM order)

1. **Navbar** — Sticky top navbar with logo "Acumen", search toggle, language dropdown, user icon, primary nav links (Home, Services, Portfolio, Team, Price, Blog, Contact). Dark/transparent background over hero.

2. **Hero / Header** — Full-width section with background image + dark overlay. Centered text: headline "We Are Provide Creative Business", subtitle about business solutions, CTA button "Contact Now". Blue gradient dot accent beside headline.

3. **About** — Split layout: left side has section title + tabbed content (Our Mission / Our Vision / Our Support), each tab shows an image + descriptive text + "View More" button. Right side has complementary content. Description about quick and powerful business solutions.

4. **Services** — Grid of 6 service cards, each with icon, title, and short description. Cards: Unique Design, Clean Layout, Well Responsive, Pro Developing, Well Documented, Quick Marketing. "Read More" links.

5. **Skills / Counter Bars** — Progress bars with percentage counters: Web Design (95%), Coding (85%), Developing (90%), Java Script (95%), Apps Design (85%), Graphics (90%). Gray background section.

6. **Portfolio** — Filterable gallery grid. Filter tabs: All, Graphics, UI/UX, Web Design, Coding, Developing, Photography, Print Template, Graphics Template, Web Template. Image grid with hover overlay.

7. **Team** — Grid of 4 team member cards: Roberto Peo (SEO Expert), Jhon Doe (Web Developer), Jakia Khan (UI/UX Designer), Jack Kalis (Programmer). Each card: circular photo, name, role, social icons on hover overlay.

8. **Pricing** — Monthly/Yearly toggle tabs. 4 pricing tiers in a row: Basic ($10/mo), Premium ($50/mo), Business ($80/mo), Ultimate ($100/mo). Each: tier name, price, feature list (4 items), "Purchase Now" CTA button. Center card highlighted with gradient border.

9. **Blog** — "Latest Blog" heading. 1 featured post (large card with image, date, excerpt) + 3 smaller side posts (image, date, title, excerpt). Each post has "Read More" link.

10. **Counter Stats** — Dark background band with 4 animated counters: Project Complete (1172), Happy Clients (1000), Total Clients (1200), Winning Awards (1172). Each with an icon above.

11. **Contact** — Split layout: left side has contact form (Name, Email, Subject, Message fields + "Send Now" button). Right side has address info (160 Link Road, Dhaka-1216), phone, email, and embedded Google Map placeholder.

12. **Footer** — Dark background. Left column: logo, description, subscription email input. Center columns: link groups (Company, Resources, Solutions). Bottom: copyright with Component Dock credit.

## Gherkin Requirements

### Feature: Acumen Business Template

```gherkin
Feature: Acumen business template
  As a visitor
  I want to browse a professional business website
  So that I can learn about the company and its services

  Scenario: Hero section displays with background and CTA
    Given I load the page
    Then the hero section is visible
    And it shows the headline "We Are Provide Creative Business"
    And it shows a "Contact Now" CTA button
    And the hero has a dark overlay over a background image

  Scenario: Navigation links scroll to sections
    Given I load the page
    When I click "Services" in the navbar
    Then the page scrolls to the services section
    When I click "Portfolio" in the navbar
    Then the page scrolls to the portfolio section
    When I click "Contact" in the navbar
    Then the page scrolls to the contact section

  Scenario: About section tabs switch content
    Given I am viewing the about section
    When I click "Our Vision" tab
    Then the vision content is displayed
    And the mission content is hidden
    When I click "Our Support" tab
    Then the support content is displayed

  Scenario: Services section shows 6 cards
    Given I am viewing the services section
    Then I see 6 service cards
    And each card has an icon, title, and description
    And each card has a "Read More" link

  Scenario: Skills section shows progress bars
    Given I am viewing the skills section
    Then I see 6 skill bars with percentages
    And "Web Design" shows 95%
    And "Coding" shows 85%

  Scenario: Portfolio filter works
    Given I am viewing the portfolio section
    And the "All" filter is active
    Then all portfolio items are visible
    When I click the "Graphics" filter
    Then only graphics items are visible
    When I click the "UI/UX" filter
    Then only UI/UX items are visible

  Scenario: Team section shows 4 members
    Given I am viewing the team section
    Then I see 4 team member cards
    And each card shows a name, role, and photo
    And each card shows social links on hover

  Scenario: Pricing toggle switches between monthly and yearly
    Given I am viewing the pricing section
    And the "Monthly" tab is active
    Then prices show "/ Month"
    When I click "Yearly" tab
    Then prices show "/ Year"
    And 4 pricing tiers are displayed

  Scenario: Blog section shows posts
    Given I am viewing the blog section
    Then I see 1 featured blog post
    And I see 3 smaller blog posts
    And each post has a date, title, and excerpt

  Scenario: Counter stats animate on scroll
    Given I am viewing the counter section
    Then I see 4 stat counters
    And "Project Complete" shows 1172
    And "Happy Clients" shows 1000

  Scenario: Contact form has required fields
    Given I am viewing the contact section
    Then I see fields for Name, Email, Subject, and Message
    And I see a "Send Now" submit button
    And the address shows "160 Link Road, Dhaka-1216"

  Scenario: Footer shows navigation links
    Given I scroll to the footer
    Then I see the logo and description
    And I see a subscription email input
    And I see link columns: Company, Resources, Solutions
    And the copyright links to Component Dock
```

## Verification Checklist

- [ ] Hero: background image with dark overlay, headline, CTA button, gradient dot
- [ ] Navbar: sticky, transparent over hero, links scroll to sections
- [ ] About: tabbed content (Mission/Vision/Support), images, View More button
- [ ] Services: 6 cards in grid, icons, titles, descriptions, Read More links
- [ ] Skills: 6 animated progress bars with correct percentages
- [ ] Portfolio: filterable grid, filter tabs work, hover overlay
- [ ] Team: 4 member cards, photos, names, roles, social hover
- [ ] Pricing: Monthly/Yearly toggle, 4 tiers, correct prices, feature lists
- [ ] Blog: 1 featured + 3 side posts, dates, excerpts
- [ ] Counter: 4 animated stat counters with correct numbers
- [ ] Contact: form with 4 fields + submit, address, map placeholder
- [ ] Footer: logo, description, subscription input, link columns, Component Dock credit
- [ ] Design tokens match: gradient `#a1c4fd → #c2e9fb`, pill buttons, Montserrat/Roboto/Satisfy fonts
- [ ] All sections use Tailwind classes mapped from original design tokens
- [ ] Responsive: mobile-friendly layout for all sections
- [ ] Accessibility: semantic HTML, ARIA labels, keyboard navigation
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] Footer links to componentdock.com
