# Template: Pixelforge (Creative Agency)

## Purpose

Pixelforge is a creative agency portfolio template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Pixel" free
template (source: https://colorlib.com/wp/template/pixel/), built under a
DIFFERENT name (**Pixelforge**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is described as: "Pixel is a modern and sophisticated free
creative agency website template with many practical and valuable features
and assets for a striking web presence." Published September 18, 2022.

- **Source template:** [Pixel](https://colorlib.com/wp/template/pixel/)
- **Live preview:** https://preview.colorlib.com/theme/pixel/ (LIVE — tokens extracted from this)
- **Screenshot:** ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/pixel-free-template.jpg) (1200×946)

## Design Tokens (extracted from live preview CSS)

| Token                | Value        | Notes                                                    |
|----------------------|--------------|----------------------------------------------------------|
| Font family          | Poppins (300–900) | Google Fonts import; `font-family: "Poppins", sans-serif` |
| Brand orange (CTA)   | `#ff7902`    | `.pixel-btn` background, hover accent                    |
| Brand blue/indigo    | `#688bfe`    | Preloader bg, `.btn-2`, newsletter input, outline btn-3  |
| Heading color        | `#000000`    | h1–h6 color, font-weight 500                             |
| Body text            | `#969696`    | Paragraph text, font-size 15px, line-height 2            |
| Dark text            | `#212121`    | Nav links, footer text                                   |
| Light gray bg        | `#f8f8f8`    | Section alt background                                   |
| Button radius        | `0`          | Sharp/square corners (no border-radius)                  |
| Button hover transition | 500ms    | `transition-duration: 500ms`                             |
| Section padding      | `100px`      | `.section-padding-100` top and bottom                    |
| Preloader bg         | `#688bfe`    | Full-screen preloader with white dots                    |
| Link color           | `#000000`    | Links default to black, font-weight 500, font-size 16px  |

## Section Structure (from live preview DOM)

1. **Navbar** — `.header-area` → `.pixel-main-menu` (sticky on scroll via `#sticker`). Logo left, nav links right: Home, About, Services, Pages (dropdown with nested submenus), Contact. Hamburger menu on mobile with slide-in panel.
2. **Hero Slider** — `.hero-area` → Owl-carousel with 2 slides. Each slide: h2 headline ("Digital Agency of the year 2019" / "Creative Agency of the year 2019"), h4 subtext with client info, "View Project" pixel-btn. Background images with overlay.
3. **Top Category Area** — `.top-catagory-area` → flex-wrap row of category/service cards with images.
4. **Newsletter** — `.nl-area` → "Stay in touch with us" heading, email input with blue (`#688bfe`) background and `border-radius: 5px 0 0 5px`, orange (`#ff7902`) submit area with `border-radius: 0 5px 5px 0`.
5. **Portfolio** — `.pixel-portfolio-area` → section heading "Made by pixel", filter tab buttons (All Projects, Visual, Advertising, Web Development), masonry-style grid of portfolio items. Each item: background image with hover overlay showing "Branding Identity" text.
6. **Contact** — `.contact-area` → "Get In Touch" heading, contact form with name/email/subject inputs, textarea for message, "Send Message" pixel-btn.
7. **Footer** — `.footer-area` → 3-column layout: logo + description left, Address widget center, Support widget (phone) center-right, Social widget (Facebook, Dribbble, Flickr, Instagram, LinkedIn, Pinterest icons) right. Copyright line at bottom → replace with Component Dock link.

## Gherkin Requirements

### Navbar
```gherkin
Feature: Navbar
  Scenario: Navigation displays logo and menu links
    Given the page loads
    Then a navigation bar should be visible with a logo on the left
    And menu links should include Home, About, Services, Pages, Contact
    And the navbar should become sticky on scroll

  Scenario: Mobile hamburger menu
    Given the viewport is mobile width
    Then a hamburger menu icon should replace the nav links
    And tapping it should open a slide-in mobile menu
```

### Hero Slider
```gherkin
Feature: Hero Slider
  Scenario: Hero displays rotating slides
    Given the page loads
    Then a full-width hero slider should be visible
    And it should show a headline like "Digital Agency of the year 2019"
    And a subtext with client/credit info should appear below
    And a "View Project" button should be visible

  Scenario: Hero auto-rotates
    Given the hero slider is visible
    Then the slides should auto-advance after a few seconds
    And navigation dots or arrows should be present

  Scenario: Hero button styling
    Given the hero section is visible
    Then the "View Project" button should have orange (#ff7902) background
    And it should have 0 border-radius (sharp corners)
    And on hover it should transition to blue (#688bfe) over 500ms
```

### Top Category Area
```gherkin
Feature: Top Category Area
  Scenario: Category cards display
    Given the page loads
    Then a row of category/service cards should appear below the hero
    And each card should have a background image and label
    And cards should be laid out in a flex-wrap row
```

### Newsletter
```gherkin
Feature: Newsletter Signup
  Scenario: Newsletter form displays
    Given the page loads
    Then a "Stay in touch with us" section should appear
    And an email input with blue (#688bfe) background should be visible
    And the input should have left-rounded corners (border-radius: 5px 0 0 5px)

  Scenario: Newsletter form interaction
    Given the newsletter section is visible
    When the user enters an email and submits
    Then the form should accept the submission
```

### Portfolio
```gherkin
Feature: Portfolio Grid
  Scenario: Portfolio displays with filter tabs
    Given the page loads
    Then a "Made by pixel" section heading should appear
    And filter buttons should show: All Projects, Visual, Advertising, Web Development
    And "All Projects" should be active by default
    And a grid of portfolio items should be displayed

  Scenario: Portfolio items show hover overlay
    Given the portfolio section is visible
    When a user hovers over a portfolio item
    Then a centered overlay with "Branding Identity" text should appear
    And the overlay should have a semi-transparent dark background

  Scenario: Filter tabs filter portfolio items
    Given the portfolio section is visible
    When a user clicks "Visual" filter
    Then only visual-category items should be visible
    When a user clicks "All Projects"
    Then all items should be visible again
```

### Contact Form
```gherkin
Feature: Contact Form
  Scenario: Contact form displays
    Given the page loads
    Then a "Get In Touch" heading should appear
    And a contact form with name, email, subject fields should be present
    And a message textarea should be present
    And a "Send Message" orange button should be visible

  Scenario: Contact form validation
    Given the contact section is visible
    When the user submits without filling required fields
    Then validation messages should appear
```

### Footer
```gherkin
Feature: Footer
  Scenario: Footer displays widgets and social links
    Given the page loads
    Then a footer should be visible with 3 columns
    And a logo should appear in the first column
    And an Address widget should show location info
    And a Support widget should show a phone number
    And a Social widget should show icons for Facebook, Dribbble, Flickr, Instagram, LinkedIn, Pinterest

  Scenario: Footer links to Component Dock
    Given the footer is visible
    Then a link to https://www.componentdock.com/ should be present
    And it should display as "Component Dock"
```

## Verification Checklist

- [ ] All 7 sections rendered in correct order matching preview DOM
- [ ] Brand colors match: orange #ff7902, blue #688bfe, black #000000
- [ ] Font is Poppins with correct weights (300–900)
- [ ] Buttons have 0 border-radius (sharp corners), correct hover transition (500ms)
- [ ] Hero slider auto-rotates with 2 slides
- [ ] Portfolio grid has filter tabs that toggle item visibility
- [ ] Portfolio items show hover overlay with project title
- [ ] Newsletter input has blue background with left-rounded corners
- [ ] Contact form has all fields (name, email, subject, message, submit)
- [ ] Footer has Address, Support, and Social widgets
- [ ] Footer social icons include Facebook, Dribbble, Flickr, Instagram, LinkedIn, Pinterest
- [ ] Footer links to Component Dock (https://www.componentdock.com/)
- [ ] All placeholder images use picsum.photos
- [ ] No ColorLib references in app code
- [ ] Responsive: mobile hamburger menu, stacked layouts
- [ ] 100% test coverage for all components
