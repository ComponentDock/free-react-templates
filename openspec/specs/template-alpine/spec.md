# Template: Alpine (Business Website)

## Purpose

Alpine is a single-page business website template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Bobsled"
creative business website template design (source:
https://colorlib.com/wp/template/bobsled/), built under a DIFFERENT name
(Alpine — mountain/winter sport theme, tying to the bobsled concept) per the
monorepo naming mandate, with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Bobsled" — creative business website template
  (source: https://colorlib.com/wp/template/bobsled/).
- **Preview DOM analyzed:** `https://preview.colorlib.com/theme/bobsled/`
  (HTTP 200, ~18 KB HTML + `css/main.css` ~33 KB parsed for tokens).
- **TEMPLATES.md screenshot:** `bobsled-creative-website-template.jpg` — shows
  a blue-to-teal gradient hero with a laptop mockup image, bold uppercase
  headline, white CTA button, and a 4-step "Our Working Process" section
  with icon cards and dotted arrows on a white background.
- **Section order (1:1, from live preview DOM):**
  1. **Header** — Logo left, nav links (Home, Generic, Elements) right,
     hamburger menu icon for mobile.
  2. **Hero/Banner** — Full-width blue-to-teal gradient background, left-
     aligned content: H1 "Don't look anywhere, This is the best place on
     web" (white, uppercase), subtext paragraph (white), "Get Started" CTA
     button with right arrow icon. Height ~540px.
  3. **Working Process** — White background, centered section title
     "Our Working Process" with subtext, then 4 horizontal steps connected
     by arrows: (1) Researching — funnel icon, (2) Wireframing — layers
     icon, (3) Prototyping — paw icon, (4) Final Design — smiley icon.
  4. **Featured Area** — Blue-to-teal gradient background, centered title
     "Our Exclusive Features" (white text), 3 feature cards in a row
     (col-md-4): each has a thumbnail image, title ("Creative Design",
     "Appropriate UX", "Super Clean Code"), description text (white), and
     "Read More" button.
  5. **Remarkable Works** — White background, centered title
     "Remarkable Works", 3 portfolio items in alternating layout (left
     image / right text, then reversed). Each: thumbnail image + title
     ("Vector Illustration") + description + "View Project" button with
     border outline.
  6. **Story Area** — Blue-to-teal gradient background, asymmetric layout
     (left offset with col-lg-1 spacer), text content with uppercase
     heading "From the part of beginning", paragraph, "Get Started" CTA
     button with arrow.
  7. **Subscription Area** — White background, left side: title
     "Subscribe for our Newsletter" + subtitle; right side: email input +
     "Get Started" submit button with arrow.
  8. **Contact Form** — Blue-to-teal gradient background, centered title
     "Keep in Touch" (white), form with: name input, email input, message
     textarea, "Send Message" submit button (right-aligned). All inputs
     have white placeholder text on the gradient.
  9. **Footer Widget Area** — Transparent background, 3 columns: Address,
     Email Address (2 email links), Phone Number (2 phone links).
  10. **Footer** — Logo left, copyright text center ("Copyright © 2017 |
      All rights reserved"), social icons right (Facebook, Twitter,
      Dribbble, Behance).

- **Design tokens:**
  - Font: Poppins (weights 300, 500, 600)
  - Primary gradient: `linear-gradient(0deg, #3e69fe 0%, #4cd4e3 100%)`
    (applied to: banner, featured area, story area, contact form, primary
    button pseudo-element)
  - Primary blue: #3e69fe
  - Primary teal: #4cd3e3 / #4cd4e3
  - Brand accent colors (used in featured icon boxes): #6382e6, #a367e7,
    #e66686, #f09359, #73fbaf, #f44a40, #f4e700
  - Page background: #f9f9ff
  - White: #fff
  - Text dark: #222222
  - Text secondary: #777777 / #797979
  - Button: border-radius 20px, padding 0 30px, line-height 40px,
    white background, #3e69fe text, gradient pseudo-element on hover
  - Button hover: white text, gradient background (via ::after)
  - Remarkable Works "View Project" button: border 1px solid #eee
  - Section padding: ~100px vertical (varies 90–100px)

## Gherkin requirements

Feature: Alpine Business Website Template

  Background:
    Given the Alpine template is loaded in a browser
    Then all sections render without errors
    And all text is legible with proper contrast

  Scenario: Header navigation
    Given the page is loaded
    Then the header displays a logo on the left
    And the navigation links are visible on desktop (Home, Generic, Elements)
    And a hamburger menu icon is visible on mobile
    When the hamburger icon is clicked
    Then the mobile navigation menu opens

  Scenario: Hero section
    Given the hero section is visible
    Then the background is a blue-to-teal gradient
    And the heading reads "Don't look anywhere, This is the best place on web"
    And the heading text is white and uppercase
    And there is a "Get Started" CTA button with a right arrow icon
    When the "Get Started" button is hovered
    Then the button shows a gradient overlay effect

  Scenario: Working Process section
    Given the working process section is visible
    Then the section title reads "Our Working Process"
    And there are 4 process steps displayed horizontally
    And each step has an icon and a label
    And the steps are connected by arrow indicators
    And the steps are: Researching, Wireframing, Prototyping, Final Design

  Scenario: Featured Area section
    Given the featured area is visible
    Then the background is a blue-to-teal gradient
    And the section title reads "Our Exclusive Features"
    And there are 3 feature cards displayed in a row
    And each card has a thumbnail image, title, description, and "Read More" button
    And the feature titles are: Creative Design, Appropriate UX, Super Clean Code

  Scenario: Remarkable Works section
    Given the remarkable works section is visible
    Then the section title reads "Remarkable Works"
    And there are 3 portfolio items in alternating left-right layout
    And each item has a thumbnail, title, description, and "View Project" button
    And the "View Project" button has a border outline style

  Scenario: Story section
    Given the story section is visible
    Then the background is a blue-to-teal gradient
    And there is an uppercase subheading "From the part of beginning"
    And there is descriptive text content
    And there is a "Get Started" CTA button with a right arrow icon

  Scenario: Subscription section
    Given the subscription section is visible
    Then the section title reads "Subscribe for our Newsletter"
    And there is an email input field with a placeholder
    And there is a "Get Started" submit button with an arrow icon

  Scenario: Contact Form section
    Given the contact form section is visible
    Then the background is a blue-to-teal gradient
    And the section title reads "Keep in Touch"
    And the form has a name input, email input, and message textarea
    And there is a "Send Message" submit button aligned to the right
    And the input placeholder text is white

  Scenario: Footer Widget Area
    Given the footer widget area is visible
    Then there are 3 columns: Address, Email Address, Phone Number
    And the Address column shows a physical address
    And the Email column shows 2 email links
    And the Phone column shows 2 phone links

  Scenario: Footer
    Given the footer is visible
    Then the logo is displayed on the left
    And copyright text is centered
    And social media icons are on the right (Facebook, Twitter, Dribbble, Behance)
    And the footer links to https://www.componentdock.com/

  Scenario: Responsive layout
    Given the page is viewed on a mobile device
    Then the navigation collapses to a hamburger menu
    And the feature cards stack vertically
    And the remarkable works items stack vertically
    And the footer columns stack vertically
    And all text remains readable

  Scenario: Design token consistency
    Given any section with the gradient background
    Then the gradient is linear-gradient(0deg, #3e69fe, #4cd4e3)
    And all body text uses Poppins font family
    And all primary buttons have border-radius 20px

## Verification checklist

- [ ] All sections render without errors
- [ ] Header: logo + nav + hamburger menu
- [ ] Hero: gradient bg, headline, subtext, CTA button
- [ ] Working Process: 4 steps with icons and arrows
- [ ] Featured Area: gradient bg, 3 feature cards
- [ ] Remarkable Works: 3 alternating portfolio items
- [ ] Story Area: gradient bg, text, CTA
- [ ] Subscription: newsletter form
- [ ] Contact Form: gradient bg, form fields, send button
- [ ] Footer Widget: 3 columns (address, email, phone)
- [ ] Footer: logo, copyright, social icons, Component Dock link
- [ ] Responsive: mobile hamburger, stacked cards
- [ ] Design tokens: Poppins font, #3e69fe/#4cd4e3 gradient, 20px radius buttons
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] Tests: 100% coverage via `npm run verify:app alpine`
