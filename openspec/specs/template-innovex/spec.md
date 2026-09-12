# Spec: Innovex

Recreation of ColorLib "Eroo" (https://colorlib.com/wp/template/eroo/) — a digital innovation/design agency landing page.

## Design tokens (extracted from preview)

- **Primary dark:** #1a1a2e (deep navy)
- **Accent orange:** #f5a623 (warm gold/orange)
- **White text on dark overlays**
- **Body font:** Roboto (sans-serif, weights 300–700)
- **Script font:** Great Vibes (Google Fonts, decorative subheadings)
- **Section backgrounds:** white, #f8f9fa light gray, dark image overlays with rgba(0,0,0,0.5)
- **Button shapes:** rounded (btn-primary orange, btn-outline white border)

## Sections (in order)

1. **TopBar** — phone number + email left-aligned, social icons (FB/Twitter/Instagram/Dribbble) right-aligned, dark background
2. **Navbar** — dark bg, brand "Innovex" (script font), links: Home, About, Pricing, Portfolio, Blog, Contact, sticky on scroll
3. **Hero** — full-height slider with background image + dark overlay, heading "Digital Innovation Company that Creates Solution", subheading "Welcome to Innovex", two CTA buttons (Get Started primary, View Portfolio outline)
4. **Services** — "We Shape The Perfect Solutions" heading, 6 service cards (Digital Products, Online Marketing, Graphic Design, App Development, Web Development, UX/UI Design), each with icon + title + arrow link
5. **About** — split layout: left image, right text "Highest Creative Standards" + description + "42 Years Experience" counter with lightbulb icon
6. **Counter** — dark overlay bg, 4 stat blocks: 4800 Projects, 1000 Staff, 350 Services, 7650 Happy Customers
7. **FAQ & Skills** — split: left has progress bars (Creative Design 95%, Product Engineering 85%, Marketing Strategy 95%, Support Tips 90%), right has accordion FAQ (4 items)
8. **Team** — "Professional Creative Team Members", 4 member cards with name/position/social links on hover
9. **Footer** — dark bg, 4 columns: brand+description, Company links, Services links, Contact info + newsletter form, copyright with Component Dock link

## Gherkin scenarios

```gherkin
Feature: Innovex Template

  Scenario: TopBar renders contact info and social links
    Given the Innovex page is loaded
    Then the top bar shows phone number and email
    And the top bar shows 4 social media icon links

  Scenario: Navbar displays brand and navigation links
    Given the Innovex page is loaded
    Then the navbar shows "Innovex" brand text
    And the navbar has 6 navigation links: Home, About, Pricing, Portfolio, Blog, Contact

  Scenario: Hero section shows main heading and CTAs
    Given the Innovex page is loaded
    Then the hero shows "Digital Innovation Company" heading
    And the hero has "Get Started" and "View Portfolio" buttons

  Scenario: Services section shows 6 service cards
    Given the Innovex page is loaded
    Then the services section shows 6 service items
    And each service has a title and icon

  Scenario: About section shows experience info
    Given the Innovex page is loaded
    Then the about section shows "42" years of experience
    And the about section has a description paragraph

  Scenario: Counter section shows 4 statistics
    Given the Innovex page is loaded
    Then the counter section shows 4 stat blocks
    And each stat has a number and label

  Scenario: FAQ section shows accordion items
    Given the Innovex page is loaded
    Then the FAQ section shows 4 questions
    And clicking a question toggles its answer visibility

  Scenario: Progress bars display skill percentages
    Given the Innovex page is loaded
    Then the skills section shows 4 progress bars
    And each progress bar has a label and percentage

  Scenario: Team section shows 4 members
    Given the Innovex page is loaded
    Then the team section shows 4 team member cards
    And each card has a name and position

  Scenario: Footer has Component Dock link
    Given the Innovex page is loaded
    Then the footer contains a link to componentdock.com
    And the footer has company information columns

  Scenario: App sets document title
    Given the Innovex page is loaded
    Then the document title is "Innovex — Digital Agency Template"
```
