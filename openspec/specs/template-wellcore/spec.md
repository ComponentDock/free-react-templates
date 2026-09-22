# Template: Wellcore (Health & Fitness Coach)

## Purpose

Wellcore is a single-page HEALTH & FITNESS COACH landing page in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Healthcoach" free template (source:
https://colorlib.com/wp/template/healthcoach/), built under a DIFFERENT
name (**Wellcore**), with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

The original is a Bootstrap 4 + jQuery single-page site with:
- Owl Carousel slider (3 slides with parallax background images)
- Sticky navbar with 8 navigation links
- Services section (3 cards: Exercise Program, Nutrition Plans, Diet Program)
- About section (split layout: image left + text right with quote)
- Services grid (3 items: Healthcare Services, Free Consultation, Find A Health Expert)
- Testimonial carousel (client feedback slider)
- How It Works section (4 steps with icons)
- Success Stories section (carousel of testimonials)
- CTA banner (full-width blue overlay with consultation offer)
- How It Works repeat (4 numbered steps with green circle badges)
- Pricing section (4 tiered plans: Starter $49, Standard $79, Premium $109, Platinum $159)
- Blog section (3 blog cards with image + excerpt)
- Newsletter subscription section
- Footer (4-column: Services, About, Resources, Social links)

**Live preview:** https://preview.colorlib.com/theme/healthcoach/
**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/healthcoach-free-template.jpg

## Design Tokens

Extracted from the ColorLib preview CSS (`css/style.css`):

| Token | Value | Notes |
|-------|-------|-------|
| Primary brand color | `#1089ff` | Bright blue — buttons, overlays, accents |
| Secondary brand color | `#a3cb4c` | Lime green — "How It Works" badges, secondary accents |
| Dark background | `#000000` / `rgba(0,0,0,0.6)` | Hero overlay, CTA overlay |
| Light background | `#e6e6e6` | Alternate section backgrounds (`bg-light`) |
| Body text | `#333333` | Default paragraph text |
| Muted text | `#999999` | Secondary/tertiary text |
| White | `#ffffff` | Card backgrounds, light text on dark |
| Font family | `"Poppins", Arial, sans-serif` | Primary typeface |
| Border radius | `0.25rem` (4px) | Bootstrap default for buttons/cards |
| Button primary | `#1089ff` bg, white text | Rounded corners, padding 10px 28px |
| Button outline | `#1089ff` border, transparent bg | On dark backgrounds |
| Section padding | `100px 0` | Consistent vertical rhythm |
| Hero height | `100vh` | Full-viewport slider with overlay |

## Visual Design Notes (from screenshot)

- Clean, modern health/fitness aesthetic
- Blue brand color dominant with green accents
- Full-width hero slider with dark overlay and centered text
- Alternating white/light-gray section backgrounds
- Card-based layouts for services and pricing
- Pricing cards with colored top border (blue for active plan)
- Circular numbered steps in "How It Works" with green background
- Testimonial section with client photos and quotes
- Dark footer with light text

## Requirements (Gherkin)

### Hero Section

```gherkin
Feature: Hero slider
  Scenario: Displays full-viewport slider with 3 slides
    Given I am on the Wellcore page
    Then I should see a full-height hero slider
    And slide 1 should show "Welcome to Wellcore" heading
    And slide 1 should show "Get in shape faster, live your happy life" subheading
    And slide 2 should show "A Fresh approach to healthy life" heading
    And slide 3 should show "Welcome Wellcore" heading
    And each slide should have a dark overlay background
    And navigation dots/arrows should be visible

  Scenario: Hero auto-advances slides
    Given I am on the Wellcore page
    When I wait for the auto-slide interval
    Then the active slide should advance to the next slide
```

### Navigation

```gherkin
Feature: Sticky navigation bar
  Scenario: Displays all navigation links
    Given I am on the Wellcore page
    Then I should see a navigation bar with links:
      | Home |
      | About |
      | Coach |
      | Pricing |
      | Services |
      | Stories |
      | Blog |
      | Contact |

  Scenario: Navigation becomes sticky on scroll
    Given I am on the Wellcore page
    When I scroll down past the hero
    Then the navigation bar should become sticky at the top
    And the background should become solid (not transparent)

  Scenario: Smooth scroll to section on nav click
    Given I am on the Wellcore page
    When I click the "About" navigation link
    Then the page should scroll smoothly to the About section
```

### Services Section

```gherkin
Feature: Services cards
  Scenario: Displays three service cards
    Given I am on the Wellcore page
    Then I should see 3 service cards with headings:
      | Exercise Program |
      | Nutrition Plans |
      | Diet Program |
    And each card should have an icon and description text
    And cards should be displayed in a horizontal row

  Scenario: Service cards have hover effect
    Given I am on the Wellcore page
    When I hover over a service card
    Then the card should show a visual hover effect
```

### About Section

```gherkin
Feature: About section with quote
  Scenario: Displays about content with image
    Given I am on the Wellcore page
    Then I should see the About section
    And it should contain the heading "Hello! Health Care is a natural way of improving your health"
    And it should show a testimonial quote from "Cythia Hunter"
    And there should be an image on the left side

  Scenario: About section has call-to-action button
    Given I am on the Wellcore page
    Then the About section should have a "Learn More" button
```

### Services Grid

```gherkin
Feature: Services grid
  Scenario: Displays three service items
    Given I am on the Wellcore page
    Then I should see 3 service grid items:
      | Healthcare Services |
      | Free Consultation |
      | Find A Health Expert |
    And each item should have an icon, heading, and description
```

### Testimonials

```gherkin
Feature: Client testimonials carousel
  Scenario: Displays testimonial slider
    Given I am on the Wellcore page
    Then I should see a testimonials section with heading "Happy Clients & Feedbacks"
    And testimonials should be displayed in a carousel
    And each testimonial should have a client name and quote

  Scenario: Testimonials carousel is navigable
    Given I am on the Wellcore page
    When I click the next arrow on the testimonials carousel
    Then the next testimonial should be displayed
```

### How It Works

```gherkin
Feature: How It Works steps
  Scenario: Displays four process steps
    Given I am on the Wellcore page
    Then I should see a "How it works?" section
    And there should be 4 steps with headings:
      | Follow the program |
      | Work for result |
      | Eat healthy food |
      | Enjoy your life |
    And each step should have a numbered icon/badge
    And step badges should use the green accent color (#a3cb4c)

  Scenario: Steps display in horizontal layout
    Given I am on the Wellcore page
    Then the 4 steps should be displayed in a horizontal row
```

### Success Stories

```gherkin
Feature: Success stories carousel
  Scenario: Displays success stories
    Given I am on the Wellcore page
    Then I should see a "Successfull Stories" section
    And stories should be displayed in a carousel format
```

### CTA Banner

```gherkin
Feature: Call-to-action banner
  Scenario: Displays consultation offer
    Given I am on the Wellcore page
    Then I should see a CTA section
    And it should show "We Provide Free Health Care Consultation" heading
    And it should have a dark overlay background
    And there should be a call-to-action button
```

### How It Works (Numbered)

```gherkin
Feature: Numbered How It Works
  Scenario: Displays four numbered steps
    Given I am on the Wellcore page
    Then I should see a "How it works" section with 4 numbered steps
    And steps should have green circle badges with numbers
    And step headings should be:
      | Follow the program |
      | Work for result |
      | Eat healthy Food |
      | Enjoy your life |
```

### Pricing Section

```gherkin
Feature: Pricing plans
  Scenario: Displays four pricing tiers
    Given I am on the Wellcore page
    Then I should see a "Choose Your Perfect Plans" section
    And there should be 4 pricing cards:
      | Plan | Price |
      | Starter | $49 |
      | Standard | $79 |
      | Premium | $109 |
      | Platinum | $159 |
    And each plan should have feature list items
    And each plan should have a "Get Started" button

  Scenario: Pricing cards have consistent layout
    Given I am on the Wellcore page
    Then each pricing card should display the plan name, price, and features
    And the cards should be in a horizontal row
```

### Blog Section

```gherkin
Feature: Blog posts
  Scenario: Displays recent blog posts
    Given I am on the Wellcore page
    Then I should see a "Latest news from our blog" section
    And there should be 3 blog post cards
    And each card should have an image, date, title, and excerpt
```

### Newsletter Section

```gherkin
Feature: Newsletter subscription
  Scenario: Displays newsletter signup
    Given I am on the Wellcore page
    Then I should see a newsletter subscription section
    And it should have a text input for email
    And it should have a "Subscribe" button
```

### Footer

```gherkin
Feature: Site footer
  Scenario: Displays footer with link columns
    Given I am on the Wellcore page
    Then I should see a footer with 4 columns:
      | Services |
      | About |
      | Resources |
      | Social |
    And each column should have relevant links
    And the footer should link to https://www.componentdock.com/

  Scenario: Footer has copyright text
    Given I am on the Wellcore page
    Then the footer should display copyright information
```

## Verification Checklist

- [ ] Hero slider renders with 3 slides, dark overlay, auto-advance
- [ ] Sticky navbar with 8 links, transparent-to-solid transition on scroll
- [ ] Services section with 3 cards (icon + heading + description)
- [ ] About section with image + quote + CTA button
- [ ] Services grid with 3 items (icon + heading + description)
- [ ] Testimonials carousel with client feedback
- [ ] How It Works section with 4 steps + green numbered badges
- [ ] Success Stories carousel section
- [ ] CTA banner with dark overlay + consultation offer
- [ ] Numbered How It Works with green circle badges
- [ ] Pricing section with 4 tiered plans ($49/$79/$109/$159)
- [ ] Blog section with 3 post cards
- [ ] Newsletter subscription form with email input
- [ ] Footer with 4 link columns + ComponentDock link
- [ ] All sections use Poppins font
- [ ] Brand colors match: primary #1089ff, secondary #a3cb4c
- [ ] Responsive design works on mobile/tablet/desktop
- [ ] Smooth scroll navigation works
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Footer links to https://www.componentdock.com/
- [ ] Tests pass with 100% coverage
