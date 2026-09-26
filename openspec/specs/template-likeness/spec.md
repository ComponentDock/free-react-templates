# Template: Likeness (Personal/VCard)

## Purpose

Recreation of ColorLib **Personify** — a personal/vCard website template.

- **Source:** https://colorlib.com/wp/template/personify/
- **Preview:** https://preview.colorlib.com/theme/personify/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/personify-free-template.jpg
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript
- **Adaptation:** The original is a multi-page template (Bio, Portfolio, Resume, Contact).
  This recreation consolidates into a single-page React app with tab navigation,
  preserving the split-screen layout and all four sections as tab panels.

## Design tokens

Extracted from `https://preview.colorlib.com/theme/personify/css/style.css`:

| Token              | Value                          | Usage                                     |
| ------------------ | ------------------------------ | ----------------------------------------- |
| Brand color        | `#F73859` (pinkish-red)        | Active nav, portfolio hover overlay, service icons, home button |
| Brand hover        | `#f96982` (lighter pink)       | Button hover state                        |
| Accent (navy)      | `#283149` (dark navy blue)     | Off-canvas menu background                |
| Body text          | `#b3b3b3` (light gray)         | Paragraph text                            |
| Headings           | `#000` (black)                 | h1, h2, h3                                |
| Background         | `#fff` (white)                 | Page background                           |
| Body font          | `Open Sans`, sans-serif         | Body text, 15px, weight 400, line-height 1.8 |
| Heading font       | `Playfair Display`, serif       | h1, h2, h3                                |
| Button radius      | `0` (square)                   | All buttons                               |
| Button style       | uppercase, letter-spacing 0.2em, border-width 2px | CTA buttons |
| Portfolio border   | `1px solid #e6e6e6`            | Portfolio item borders                    |
| Portfolio hover shadow | `0 4px 10px 0 rgba(0,0,0,0.1)` | Portfolio item hover                    |
| Loader accent      | `#f4b214` (gold)               | Loading spinner stroke                    |

## Layout characteristics

- **Split layout:** Left half = scrollable main content, right half = fixed profile photo (50/50 on desktop, stacked on mobile <576px).
- **Off-canvas navigation:** Slide-in menu from right side (240px wide), dark navy background (#283149), white text, brand-color active state.
- **Mobile-first:** On small screens, profile image sits above content as a banner (height 400px), menu button fixed top-right.
- **Minimalist aesthetic:** Clean white background, serif/sans-serif font pairing, generous whitespace, no heavy graphics.

## Gherkin requirements

### Feature: Likeness — Personal/VCard Website

  As a visitor,
  I want to view a personal portfolio with bio, portfolio, resume, and contact sections,
  So I can learn about the person and get in touch.

  Background:
    Given the Likeness template is loaded
    And the split layout is displayed with content on the left and profile photo on the right (desktop)

  # --- Section: Navbar / Off-Canvas Menu ---

  Scenario: Off-canvas menu toggle
    Given the "Menu" button is visible (top-right on desktop, top-right on mobile)
    When I click the "Menu" button
    Then a slide-in menu appears from the right
    And the menu shows links: Bio, Portfolio, Resume, Contact
    And the menu shows social icons (Twitter, Facebook, Instagram)
    And the menu background is dark navy (#283149)
    When I click a menu link
    Then the content switches to the corresponding section
    And the menu closes

  Scenario: Mobile menu has black background
    Given the viewport is 767px or narrower
    When the navbar is visible
    Then the navbar background is black

  # --- Section: Bio (default section) ---

  Scenario: Bio section displays personal info
    Given the Bio section is active
    Then I see a heading with the person's name
    And I see a subtitle with the person's job title
    And I see two paragraphs of bio text
    And I see social link buttons (Twitter, Facebook, Instagram)

  # --- Section: Portfolio ---

  Scenario: Portfolio section shows project list
    Given the Portfolio section is active
    Then I see a "Portfolio" heading
    And I see a list of portfolio items, each with an image, project name, and "Visit Website" link
    And each portfolio item has a bordered container

  Scenario: Portfolio item hover overlay
    Given the Portfolio section is active
    When I hover over a portfolio item
    Then a pink (#F73859) overlay appears over the image
    And the project name and "Visit Website" text become visible in white
    And a subtle shadow appears on the item

  # --- Section: Resume ---

  Scenario: Resume section shows experience and education
    Given the Resume section is active
    Then I see an "Experience" heading
    And I see a list of experience items, each with a job title, company, date range, and description
    And I see an "Education" heading
    And I see a list of education items, each with institution name, date range, and description

  # --- Section: Contact ---

  Scenario: Contact section displays form
    Given the Contact section is active
    Then I see a "Contact Me" heading
    And I see a form with fields: Full Name, Email Address, Phone, Message (textarea)
    And I see a "Send Message" submit button
    And the button has square corners (border-radius 0), uppercase text, and letter-spacing

  Scenario: Contact form submission
    Given the Contact section is active
    And I have filled in all required fields
    When I click "Send Message"
    Then the form is submitted

  # --- Layout / Responsive ---

  Scenario: Desktop split layout
    Given the viewport is 576px or wider
    Then the profile photo occupies the right 50% of the viewport
    And the profile photo is fixed in position while content scrolls
    And the main content occupies the left 50% with 7% padding

  Scenario: Mobile stacked layout
    Given the viewport is narrower than 576px
    Then the profile photo is a 400px tall banner above the content
    And the main content is full-width below the banner

  Scenario: Home button on sub-sections
    Given I am on any section other than Bio
    Then a home button (house icon, brand color #F73859) is visible at the top-left
    And clicking it navigates back to the Bio section

  # --- Navigation ---

  Scenario: Tab navigation between sections
    Given I am on the Bio section
    When I click "Portfolio" in the menu
    Then the Portfolio content is displayed
    And the Bio content is hidden
    When I click "Resume" in the menu
    Then the Resume content is displayed

  Scenario: Social links in menu
    Given the off-canvas menu is open
    Then social icons are displayed below the navigation links
    And each icon links to the respective social platform

## Verification checklist

- [ ] Split layout: 50/50 on desktop, stacked on mobile
- [ ] Profile image: fixed on right (desktop), banner on mobile (400px)
- [ ] Off-canvas menu: slides from right, navy background (#283149)
- [ ] Menu links: Bio, Portfolio, Resume, Contact
- [ ] Social icons in menu and bio section
- [ ] Bio section: name, title, bio text, social links
- [ ] Portfolio section: project list with bordered items, pink hover overlay
- [ ] Resume section: experience and education lists with dates
- [ ] Contact section: form with name, email, phone, message, submit
- [ ] Brand color #F73859 used for active states and accents
- [ ] Fonts: Playfair Display for headings, Open Sans for body
- [ ] Buttons: square corners, uppercase, letter-spacing 0.2em
- [ ] Home button on sub-sections (brand color)
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] Placeholder images via picsum.photos
- [ ] Icons from lucide-react
- [ ] 100% test coverage
