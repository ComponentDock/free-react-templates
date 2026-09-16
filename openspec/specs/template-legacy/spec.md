# Template: Legacy (Business One-Page)

## Purpose

Recreation of ColorLib's **Classic** one-page business template.

- **Source:** https://colorlib.com/wp/template/classic/
- **Preview:** https://preview.colorlib.com/theme/classic/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/classic-free-template.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Package:** `@free-react-templates/legacy`
- **Deploy:** `legacy.free.componentdock.com`

A corporate/business single-page template with a full-width hero, about section,
video + "Why Choose Us" tabs, circular skill charts, filterable portfolio grid,
team cards with skill bars, monthly/yearly pricing tables, blog layout, counters,
contact form, and a 5-column footer.

## Design Tokens

Extracted from the live preview stylesheet (`style.css`):

| Token              | Value                                        | Usage                             |
| ------------------ | -------------------------------------------- | --------------------------------- |
| primary-gradient   | `linear-gradient(to right, #a1c4fd, #c2e9fb)` | Buttons, price active, skill bars |
| accent             | `#f7c336`                                    | Decorative dot in hero            |
| text-dark          | `#4f4f4f`                                    | Body text                         |
| text-medium        | `#898989`                                    | Secondary text, placeholders      |
| bg-light           | `#f9f9f9`                                    | Gray section backgrounds          |
| white              | `#ffffff`                                    | Card backgrounds, text on dark    |
| dark               | `#000000`                                    | Hero overlay, footer bg           |
| border-light       | `#e2e2e2`                                    | Subtle dividers                   |
| font-heading       | `'Montserrat', sans-serif`                   | H2, H3, H4, nav primary          |
| font-body          | `'Roboto', sans-serif`                       | Body text, paragraphs             |
| font-decorative    | `'Satisfy', cursive`                         | Not used prominently — skip       |
| button-radius      | `100px` (pill)                               | All `.bttn` elements              |
| button-hover       | `translateY(-4px)` + blue shadow             | Hover lift on buttons             |
| button-shadow      | `0 5px 0 0 rgba(135,181,255,0.5)` (doubled) | Button hover effect               |

## Section Structure (order from live preview)

1. **Navbar** — Fixed top, logo left, help menu (user icon, search toggle,
   language selector dropdown), primary menu: Home, Services, Portfolio, Team,
   Price, Blog, Contact. Smooth-scroll anchors. Search box collapses below nav.

2. **Hero** — Full-width background image (`header-bg.jpg`) with dark overlay
   (`rgba(0,0,0,0.4)`). Vertically centered. Heading: "We Are Provide Creative
   Business" with decorative dot. Tagline in `<q>`: "We Make Sure Best Business
   Solution For Our Client". Large pill CTA: "Contact Now".

3. **About** — Two-column: left has heading "We Offer Quick & Powerful Business
   Solution", paragraph, "Learn More" pill button. Right has illustration image.
   Hidden on xs.

4. **Video + Why Choose Us** — Gray bg (`#f9f9f9`). Left: video thumbnail with
   play button (links to YouTube). Right: "Why Choose Us?" heading with tab
   pills (Our Mission / Our Vision / Our Support). Each tab shows "SINCE WE HAVE
   25 YEARS" subheading, "EXPERIENCE IN THIS PASSION" heading, paragraph, and
   "View More" button.

5. **Skills** — Gray bg. Heading "Our Professional Skill" with paragraph. 6
   circular progress charts in 3×2 grid: WebDesign (95%), Coding (85%),
   Developing (90%), JavaScript (95%), Apps Design (85%), UX Design (90%).
   Each shows percentage number and label.

6. **Portfolio** — Full-width. Heading "Portfolio Project" centered. Filter tabs:
   All, Graphics, UI/UX, Web Design, Coding, Developing, Photography. 3×2 grid
   of images with hover overlay showing title + lightbox link.

7. **Team** — Heading "Our expert team" centered. 4 cards in a row: photo,
   hover overlay with name, role, 3 skill bars (Photoshop, InDesign, Illustrator
   as %), social icons (Facebook, Twitter, LinkedIn, Pinterest).

8. **Pricing** — Gray bg. Heading "Pricing Plan" centered. Monthly/Yearly tab
   toggle. 4 pricing cards: Basic ($10), Premium ($50, active/highlighted),
   Business ($80), Ultimate ($100). Each: tier name, price, 4 feature items,
   "Purchase Now" button. Default button style (not primary gradient).

9. **Blog** — Heading "Latest Blog" centered. Two-column: left is featured post
   (large image, title with date, excerpt). Right is 3 sidebar posts (thumbnail,
   title, calendar date, excerpt).

10. **Counters** — Gray bg. 4 stat boxes in a row: Project Complete (1172),
    Happy Clients (1000), Awards Won (1200), Coffee Cups (1172). Each with
    icon, label, and animated count number.

11. **Contact** — Dark section. Heading "Contact Now" in blue gradient bar.
    Left: form with 2-column fields (Full Name + Phone, Email + Subject),
    textarea (Message), "Send Now" primary button. Right: contact info list
    (address, phone, email) with icons, social links (Twitter, Skype, Instagram).

12. **Map** — Embedded Google Maps placeholder div.

13. **Footer** — Dark background. 5 columns: brand "Legacy" + description +
    social icons, News links, Company links, Resources links, Solutions links.
    Copyright bar at bottom with "Component Dock" attribution.

## Gherkin Requirements

### Feature: Legacy Template

```gherkin
Feature: Legacy — one-page business template
  As a visitor
  I want to browse a professional business website
  So that I can learn about services, view work, and contact the company

  Background:
    Given the Legacy template is loaded in the browser

  # --- Navbar ---
  Scenario: Navbar displays all navigation links
    Then I should see links for Home, Services, Portfolio, Team, Price, Blog, Contact
    And the navbar should be fixed at the top of the viewport

  Scenario: Navbar smooth-scrolls to sections
    When I click "Services" in the navbar
    Then the page should scroll smoothly to the services section

  Scenario: Navbar has a search toggle
    When I click the search icon
    Then a search input should appear

  # --- Hero ---
  Scenario: Hero shows heading and CTA
    Then I should see the heading "We Are Provide Creative Business"
    And I should see a "Contact Now" button

  Scenario: Hero CTA scrolls to contact
    When I click "Contact Now"
    Then the page should scroll to the contact section

  # --- About ---
  Scenario: About section shows text and image
    Then I should see "We Offer Quick & Powerful Business Solution"
    And I should see a "Learn More" button

  # --- Video + Why Choose Us ---
  Scenario: Why Choose Us has switchable tabs
    Then I should see tabs for Our Mission, Our Vision, Our Support
    When I click "Our Vision"
    Then the vision content should be visible and mission content hidden

  # --- Skills ---
  Scenario: Skills section shows circular progress charts
    Then I should see 6 skill charts with labels and percentages

  # --- Portfolio ---
  Scenario: Portfolio has filterable categories
    Then I should see filter tabs for All, Graphics, UI/UX, Web Design, Coding, Developing, Photography

  Scenario: Portfolio filter shows matching items
    When I click "Graphics"
    Then only graphics-tagged items should be visible

  # --- Team ---
  Scenario: Team section shows member cards
    Then I should see 4 team member cards
    And each card should show a name, role, and social links

  # --- Pricing ---
  Scenario: Pricing shows monthly plans by default
    Then I should see 4 pricing tiers: Basic, Premium, Business, Ultimate
    And the prices should show monthly amounts

  Scenario: Pricing switches to yearly
    When I click "Yearly"
    Then the prices should update to yearly amounts

  # --- Blog ---
  Scenario: Blog shows featured post and sidebar
    Then I should see a featured blog post with a large image
    And I should see 3 sidebar blog posts

  # --- Counters ---
  Scenario: Counters show statistics
    Then I should see 4 counter boxes with labels and numbers

  # --- Contact ---
  Scenario: Contact form has all fields
    Then I should see fields for Full Name, Phone, Email, Subject, Message
    And a "Send Now" button

  Scenario: Contact form validates required fields
    When I click "Send Now" without filling the form
    Then validation errors should appear for required fields

  Scenario: Contact info displays company details
    Then I should see an address, phone number, and email

  # --- Footer ---
  Scenario: Footer shows brand and link columns
    Then I should see brand "Legacy" with description
    And I should see link columns for News, Company, Resources, Solutions

  Scenario: Footer links to Component Dock
    Then the footer should contain a link to componentdock.com
```

## Verification Checklist

- [ ] All 13 sections present in correct order
- [ ] Navbar fixed, smooth-scroll, search toggle works
- [ ] Hero: bg image, overlay, heading, tagline, CTA
- [ ] About: 2-col layout, image on right, "Learn More" button
- [ ] Video + Tabs: video thumbnail, 3 tabs switch content
- [ ] Skills: 6 circular charts with correct percentages
- [ ] Portfolio: filter tabs work, 3×2 grid, hover overlay
- [ ] Team: 4 cards, skill bars, social icons
- [ ] Pricing: Monthly/Yearly toggle, 4 tiers, active card highlight
- [ ] Blog: featured post + 3 sidebar posts
- [ ] Counters: 4 stat boxes with numbers
- [ ] Contact: form with validation, info list, social links
- [ ] Footer: 5 columns, Component Dock link, no ColorLib references
- [ ] Design tokens match: gradient buttons, Montserrat headings, Roboto body, pill radius
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] Footer links to componentdock.com
- [ ] Placeholder images via picsum.photos
- [ ] Google fonts loaded via index.html link tags
- [ ] Icons from lucide-react (not icofont)
