# Template: Fitly (Gym / Fitness Landing Page)

## Purpose

Fitly is a single-page gym/fitness landing page in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Gutim" free
template (source: https://colorlib.com/wp/template/gutim/), preview at
https://preview.colorlib.com/theme/gutim/. Built under a DIFFERENT name
(**Fitly**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a Bootstrap 4 + jQuery gym/fitness template with a hero
section featuring a background image and BMI calculator CTA, an about section
with video popup, a services grid (4 cards in 2×2 with a large image),
a classes carousel (Owl Carousel), a trainer grid (3 cards), a testimonial
carousel, a CTA banner with parallax background, a membership pricing grid
(3 tiers), a registration form section, a latest blog grid (3 posts), a
footer banner pair (2 columns with background images), and a full footer
with contact info, mailchimp subscribe, and social links.

**Design tokens extracted from live preview CSS (style.css):**

| Token | Value | Usage |
|-------|-------|-------|
| Font family | `"Poppins", sans-serif` | All text (body, headings, buttons) |
| Primary gradient | `#eb3c5a` → `#f67831` (left→right) | Buttons (primary-btn), membership cards, footer links |
| Brand accent | `#f15d44` | Header bg, hero accent text, section highlights, link hover, footer-brand |
| Heading color | `#111111` | All h1–h6 |
| Body text | `#6b6b6b` | Paragraphs |
| Services dark bg | `#141414` / `#1e1e1e` | Services section card backgrounds |
| Trainer section bg | `#f5f5f5` | Trainer section page background |
| Light gray bg | `#ebebeb` | Testimonial dots, borders |
| Button dimensions | 160×46px, 16px 600wt, 2px gradient borders | primary-btn |
| Section padding | `100px 0` (spad class) | All padded sections |
| Preloader bg | `#000` | Page preloader overlay |
| Heading sizes | h1=70px, h2=36px, section-title h2=40px, h4=24px | Hierarchy |
| CTA accent | `#e85d39` | Classes card icon accents |

**Visual design notes from screenshot (colorlib.com/wp/wp-content/uploads/sites/2/gutim-free-template.jpg):**

- Dark, athletic aesthetic with a high-contrast hero (dark photo overlay + bold
  white type). Orange-red accent palette (#f15d44 / gradient buttons) pops
  against dark backgrounds.
- Clean grid layouts: 2×2 services, 3-col trainers, 3-col membership cards
  with gradient top-border accent.
- Parallax-style background images for hero, banner, and footer-banner sections.
- Registration form section has a white card with 4 fields in a 2×2 grid.
- Membership cards are white with gradient bottom border, large price display.
- Footer is dark with a mailchimp subscribe bar using a full-width background
  image.

## Design Tokens (for Tailwind @theme)

```
--color-brand: #f15d44;
--color-brand-dark: #eb3c5a;
--color-brand-light: #f67831;
--color-heading: #111111;
--color-body: #6b6b6b;
--color-dark-bg: #141414;
--color-dark-bg-alt: #1e1e1e;
--color-light-bg: #f5f5f5;
--color-border: #ebebeb;
--color-white: #ffffff;
--font-family-base: "Poppins", sans-serif;
```

## Gherkin Requirements

### Header / Navbar
```gherkin
Feature: Fitly Navbar

  Scenario: Sticky header with logo and navigation
    Given the user is on the Fitly homepage
    Then the header displays the Fitly logo on the left
    And the navigation links are: Home, About, Classes, Blog, Gallery, Contacts
    And a "Sign Up Today" call-to-action button is visible on the right
    And the header background is the brand accent color #f15d44

  Scenario: Navigation links are clickable
    Given the user is on the Fitly homepage
    When the user clicks a navigation link
    Then the page scrolls to the corresponding section
```

### Hero Section
```gherkin
Feature: Fitly Hero

  Scenario: Hero displays with background image and BMI CTA
    Given the user is on the Fitly homepage
    Then the hero section shows a full-width background image
    And the label "FITNESS ELEMENTS" is displayed
    And the heading "BMI CALCULATOR" is displayed
    And descriptive text about the BMI calculator is shown
    And a "Read More" primary button is visible

  Scenario: Hero text is left-aligned within container
    Given the user is on the Fitly homepage
    Then the hero content occupies the left 8 columns of a 12-column grid
```

### About Section
```gherkin
Feature: Fitly About

  Scenario: About section shows story with image and play button
    Given the user scrolls to the About section
    Then a two-column layout is displayed
    And the left column shows an image with a play button overlay (video popup)
    And the right column shows heading "Story About Us"
    And two paragraphs of descriptive text are displayed
    And a "Read More" primary button is visible

  Scenario: Play button triggers video popup
    Given the user is on the About section
    When the user clicks the play button overlay
    Then a video popup opens
```

### Services Section
```gherkin
Feature: Fitly Services

  Scenario: Services section displays 2×2 grid with large image
    Given the user scrolls to the Services section
    Then a split layout is shown: large image on left, 4 service cards on right
    And the 4 cards are arranged in a 2×2 grid
    And each card has an icon, title, and description
    And the service titles are: Strategies, Yoga, Workout, Weight Loss
    And the left column background is dark (#141414 / #1e1e1e)
```

### Classes Section
```gherkin
Feature: Fitly Classes

  Scenario: Classes section shows carousel of class cards
    Given the user scrolls to the Classes section
    Then the heading "UNLIMITED CLASSES" is displayed
    And a carousel of class cards is shown
    And each card has a background image, class name, and trainer name with icon
    And the classes include: Yoga, Running, Personal Training, Karate, Dance, Weight Loss

  Scenario: Class cards have dark overlay with white text
    Given a class card is visible
    Then the card title and trainer info appear in white text over a dark overlay
```

### Trainer Section
```gherkin
Feature: Fitly Trainers

  Scenario: Trainer section shows 3 trainer cards
    Given the user scrolls to the Trainer section
    Then the heading "EXPERT TRAINERS" is displayed
    And 3 trainer cards are shown in a row
    And each card has a photo, name, role, description, and social media icons
    And the social icons include Facebook, Instagram, Twitter, Pinterest

  Scenario: Trainer section has light gray background
    Given the user is on the Trainer section
    Then the section background is #f5f5f5
```

### Testimonial Section
```gherkin
Feature: Fitly Testimonials

  Scenario: Testimonials carousel shows quotes
    Given the user scrolls to the Testimonial section
    Then the heading "success stories" is displayed
    And a carousel of testimonial items is shown
    And each item has a quote text, avatar image, author name, and role
    And navigation dots are displayed below the carousel
```

### Banner Section
```gherkin
Feature: Fitly CTA Banner

  Scenario: Banner shows CTA with parallax background
    Given the user scrolls to the Banner section
    Then a full-width section with a background image is displayed
    And heading "Get training today" is shown
    And descriptive text is displayed
    And a "Contact Now" primary button is visible
    And a person image is shown on the right side
```

### Membership Section
```gherkin
Feature: Fitly Membership Plans

  Scenario: Membership section shows 3 pricing tiers
    Given the user scrolls to the Membership section
    Then the heading "MEMBERSHIP PLANS" is displayed
    And 3 pricing cards are shown: Basic ($17/mo), Standard ($57/mo), Premium ($98/mo)
    And each card has a plan name, price, feature list, and "Start Now" button
    And each card has a gradient top border accent (red→orange)
    And the feature rows show: Duration, Personal trainer, Amount of people, Number of visits

  Scenario: Membership buttons use primary gradient style
    Given a membership card is visible
    Then the "Start Now" button has the red→orange gradient
```

### Register Section
```gherkin
Feature: Fitly Registration Form

  Scenario: Registration form with 4 fields
    Given the user scrolls to the Register section
    Then the heading "Register Now" is displayed
    And subheading "The First 7 Day Trial Is Completely Free With The Teacher" is shown
    And a form with 4 fields is displayed: First Name, Email, Last Name, Mobile No
    And the fields are arranged in a 2×2 grid
    And a "Get Started" submit button is visible
    And an image is shown on the right column

  Scenario: Form fields have labels above inputs
    Given the registration form is visible
    Then each input has a label above it
    And inputs have a light border (#ebebeb)
```

### Latest Blog Section
```gherkin
Feature: Fitly Blog

  Scenario: Blog section shows 3 post cards
    Given the user scrolls to the Latest Blog section
    Then the heading "Latest Blog" is displayed
    And 3 blog post cards are shown in a row
    And each card has a featured image, date tag, category tag, and post title
    And the category tags are: #Gym, #Sport, #Body
```

### Footer Banner Section
```gherkin
Feature: Fitly Footer Banners

  Scenario: Two-column footer banners with background images
    Given the user scrolls to the Footer Banner section
    Then two side-by-side banner cards are displayed
    And the left card says "New member" / "7 days for free" with description and CTA
    And the right card says "contact us" / "09 746 204" with description and CTA
    And both have background images with dark overlays
```

### Footer
```gherkin
Feature: Fitly Footer

  Scenario: Footer displays contact info and social links
    Given the user scrolls to the Footer
    Then three contact columns are shown: Phone, Address, Email
    And a mailchimp subscribe section with background image is displayed
    And the subscribe section has heading, description, email input, and send button
    And footer social links (Facebook, Twitter, Instagram, Dribbble) are shown
    And a copyright line is displayed

  Scenario: Footer links to Component Dock
    Given the user scrolls to the Footer
    Then a link to https://www.componentdock.com/ is present
    And the link text references "Component Dock"
```

## Verification Checklist

- [ ] All sections from original template are present in correct order
- [ ] Header: sticky, brand accent bg (#f15d44), logo + nav + CTA button
- [ ] Hero: full-width bg image, "FITNESS ELEMENTS" + "BMI CALCULATOR" headings
- [ ] About: 2-col layout, video play button overlay, "Story About Us"
- [ ] Services: dark bg, 4 cards (Strategies, Yoga, Workout, Weight Loss) + large image
- [ ] Classes: "UNLIMITED CLASSES" heading, carousel of cards with trainer info
- [ ] Trainers: "EXPERT TRAINERS", 3 cards with photos, social icons, light bg
- [ ] Testimonials: carousel with quotes, avatars, navigation dots
- [ ] Banner: parallax bg image, "Get training today" CTA, person image
- [ ] Membership: 3 pricing tiers (Basic/Standard/Premium), gradient accents
- [ ] Register: form with 4 fields (2×2 grid), image on right
- [ ] Blog: 3 post cards with images, dates, categories
- [ ] Footer banners: 2-column layout with bg images
- [ ] Footer: contact info, subscribe form, social links, Component Dock link
- [ ] Colors match extracted tokens (brand #f15d44, gradient #eb3c5a→#f67831)
- [ ] Font: Poppins loaded via Google Fonts
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
