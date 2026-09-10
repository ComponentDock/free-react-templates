# Template: Bricoleur (Creative Agency / One-Page Parallax)

## Purpose

Recreation of ColorLib **Create** template as a React 19 + Vite + Tailwind 4 + TypeScript app.

- **Source:** https://colorlib.com/wp/template/create/
- **Preview:** https://preview.colorlib.com/theme/create/
- **Category:** Business / Creative Agency
- **Description:** One-page parallax website template for agencies and freelancers. Features a hero with typed-text animation, portfolio gallery, services grid, about section, team showcase, blog cards, contact form, and newsletter footer.

## Design tokens

Extracted from the live preview at `https://preview.colorlib.com/theme/create/` and its stylesheets (`css/style.css`, `css/bootstrap.min.css`).

| Token              | Value                       | Notes                                                  |
| ------------------ | --------------------------- | ------------------------------------------------------ |
| Font family        | `Quicksand` (Google Fonts)  | Weights 300, 400, 500, 700, 900                       |
| Brand / primary    | `#32dbc6`                   | Teal/turquoise — used for buttons, accents, icons, links |
| Secondary accent   | `#8bc34a`                   | Light green — used for about-section feature icons     |
| Dark background    | `#333333` / `#2b2b2b`       | Top bar, footer                                        |
| Light background   | `#f4f5f9`                   | Alternating section backgrounds                        |
| White background   | `#ffffff`                   | Navbar, cards, form                                    |
| Body text          | `#212529`                   | Main text color                                        |
| Muted text         | `#737373` / `#999999`       | Secondary/muted paragraphs, meta                      |
| Link hover         | `#22c4b0`                   | Slightly darker teal for hover state                   |
| Button bg          | `#32dbc6`                   | Primary button background                              |
| Button text        | `#212529` (default) / `#fff` (hover) | Dark text default, white on hover         |
| Button radius      | `0.25rem` (Bootstrap default)| Rounded corners                                       |
| Section headings   | `#000000` (via `text-black`)| h1/h2 section headings                                |
| Border colors      | `#dee2e6`                   | Subtle borders between sections                        |

## Section structure (top to bottom)

1. **Top Bar** — Dark background, phone number + email on left, social icons (Facebook, Twitter, Instagram, LinkedIn) on right
2. **Navbar** — Sticky, white background, logo "Bricoleur." (with teal dot accent), nav links: Home, Work, Services, About (dropdown: Specialties, Our Team), Blog, Contact. Mobile hamburger menu.
3. **Hero** — Full-width background image with dark overlay, centered text: "We Love To Build [typed-words animation]", subtitle, CTA button "Watch Video"
4. **Features** — 3-column grid, each card has decorative number-behind (01., 02., 03.), heading (Innovate, Create, Scale), description paragraph, check-list of sub-items
5. **Our Works** — 3-column portfolio gallery, images with hover overlay showing project title + category tag
6. **Our Services** — 3×2 grid, each item has icon (left), title, description, "Learn More" link. Services: Web Design, eCommerce, Web Applications, Branding, Copy Writing, Mobile Applications
7. **About Us** — Split layout: image right (rounded), text left with heading + lead paragraph + 2 sub-feature items (Web & Mobile Specialties, Intuitive Thinkers) each with icon
8. **Our Team** — 3-column layout, each member: circular photo, name, position, description, social icon links (Facebook, Twitter, LinkedIn, Instagram)
9. **Blog** — 3-column cards, each: featured image, article title, meta (author · date · category), excerpt, "Continue Reading" link
10. **Contact** — Light background section. Left: contact form (First Name, Last Name, Email, Subject, Message, Send Message button). Right: address card (Address, Phone, Email)
11. **CTA Banner** — Full-width primary-color background, centered "Let's Get Started" heading in white
12. **Footer** — Dark background. Left columns: About Us text, Features links, Social icons. Right column: Newsletter subscribe form (email input + Send button). Bottom: copyright line

## Gherkin requirements

```gherkin
Feature: Bricoleur — Creative Agency One-Page Template

  Background:
    Given the app is loaded in a browser
    And the page scrolls to the top

  # ── Top Bar ──
  Scenario: Top bar displays contact info and social links
    Then I should see a phone number in the top bar
    And I should see an email address in the top bar
    And I should see social media icon links in the top bar

  # ── Navbar ──
  Scenario: Navbar is sticky and shows logo and navigation links
    Given I scroll down the page
    Then the navbar should remain fixed at the top
    And I should see the logo "Bricoleur."
    And I should see navigation links: Home, Work, Services, About, Blog, Contact

  Scenario: Navbar mobile toggle works
    Given the viewport is mobile-width
    When I click the hamburger menu icon
    Then the mobile navigation menu should be visible

  Scenario: About dropdown shows sub-items
    When I hover over or click "About" in the navbar
    Then I should see a dropdown with "Specialties" and "Our Team"

  # ── Hero ──
  Scenario: Hero section displays headline and CTA
    Then I should see a hero section with a background image
    And I should see the headline "We Love To Build"
    And I should see a typed-words animation element
    And I should see a "Watch Video" CTA button

  Scenario: Hero CTA button is styled as primary
    Then the "Watch Video" button should use the brand teal color

  # ── Features ──
  Scenario: Features section shows three numbered cards
    Then I should see three feature cards
    And the first card should show number "01." and title "Innovate"
    And the second card should show number "02." and title "Create"
    And the third card should show number "03." and title "Scale"
    And each card should have a check-list of sub-items

  # ── Portfolio / Works ──
  Scenario: Works section shows portfolio gallery
    Then I should see a section heading "Our Works"
    And I should see at least three portfolio items
    And each portfolio item should have an image and a title overlay

  # ── Services ──
  Scenario: Services section shows six service items
    Then I should see a section heading "Our Services"
    And I should see six service cards
    And each service card should have an icon, title, description, and "Learn More" link

  Scenario: Service items list expected services
    Then I should see services including "Web Design", "eCommerce", "Web Applications", "Branding", "Copy Writing", and "Mobile Applications"

  # ── About ──
  Scenario: About section shows image and description
    Then I should see a section heading "About Us"
    And I should see an about image
    And I should see a lead paragraph
    And I should see two sub-feature items: "Web & Mobile Specialties" and "Intuitive Thinkers"

  # ── Team ──
  Scenario: Team section shows three members
    Then I should see a section heading "Our Team"
    And I should see three team member cards
    And each card should show a circular photo, name, position, description, and social links

  # ── Blog ──
  Scenario: Blog section shows three article cards
    Then I should see a section heading "Blog"
    And I should see three blog cards
    And each card should have an image, title, meta (author, date, category), excerpt, and "Continue Reading" link

  # ── Contact ──
  Scenario: Contact section shows form and info
    Then I should see a section heading "Contact Us"
    And I should see a contact form with fields: First Name, Last Name, Email, Subject, Message
    And I should see a "Send Message" submit button
    And I should see address information on the right side

  # ── CTA Banner ──
  Scenario: CTA banner displays between contact and footer
    Then I should see a full-width banner with primary background color
    And I should see the text "Let's Get Started" in white

  # ── Footer ──
  Scenario: Footer shows about, links, social, and newsletter
    Then I should see a footer section with dark background
    And I should see "About Us" text in the footer
    And I should see "Features" link list in the footer
    And I should see social media icon links
    And I should see a newsletter subscribe form with email input and "Send" button
    And I should see a copyright line
    And the footer should include a link to "https://www.componentdock.com/" branded as "Component Dock"

  # ── Accessibility ──
  Scenario: Page has proper heading hierarchy
    Then the page should have a single h1 element
    And section headings should use h2 elements

  Scenario: Interactive elements are keyboard accessible
    When I navigate with keyboard Tab
    Then all interactive elements should be focusable
    And focus indicators should be visible
```

## Verification checklist

- [ ] All 12 sections present in correct order
- [ ] Top bar with contact info + social icons
- [ ] Sticky navbar with logo, nav links, mobile toggle, About dropdown
- [ ] Hero with background image, typed-words animation, CTA button
- [ ] Features section: 3 numbered cards (01–03) with check-lists
- [ ] Portfolio/Works gallery with image hover overlays
- [ ] Services grid: 6 items with icons and "Learn More" links
- [ ] About section: image + text + 2 sub-feature items
- [ ] Team section: 3 members with circular photos + social links
- [ ] Blog section: 3 cards with image, meta, excerpt
- [ ] Contact section: form (5 fields + submit) + address info
- [ ] CTA banner: primary bg, white text "Let's Get Started"
- [ ] Footer: about, features, social, newsletter form, copyright
- [ ] Footer links to Component Dock
- [ ] Design tokens: Quicksand font, #32dbc6 primary, #8bc34a secondary
- [ ] Mobile responsive (hamburger menu, stacked layout)
- [ ] Accessibility: heading hierarchy, focus indicators, semantic HTML
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Placeholder images via picsum.photos
- [ ] Icons from lucide-react (replacing icomoon/flaticon)
