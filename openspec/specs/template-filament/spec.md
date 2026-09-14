# Template: Filament (Feminine Landing Page)

## Purpose

Recreation of the ColorLib "Simples" template as a modern React 19 + Vite + Tailwind 4 + TypeScript single-page template.

- **Source:** ColorLib "Simples" — https://colorlib.com/wp/template/simples/
- **Preview:** https://preview.colorlib.com/theme/simples/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/simples-free-fullscreen-feminine-website-template.jpg
- **New name:** `filament` (apps/filament, package `@free-react-templates/filament`)
- **Deploy URL:** https://filament.free.componentdock.com

## Design Tokens (extracted from preview)

| Token | Value | Notes |
|-------|-------|-------|
| Font family | `"Poppins", sans-serif` | Google Fonts, weights 200/300/400/500/600 |
| Primary brand color | `#fcd2ff` | Lavender-pink, used on accents, links, icons, highlights |
| Gradient left | `#f6d0c5` | Salmon-peach |
| Gradient right | `#fbd2f6` | Soft pink |
| Gradient direction | 90deg (left to right) | Applied to banner, process area, service area triggers, button hover |
| Body text color | `#777` | Medium gray |
| Heading color | `#222` | Near-black |
| Body background | `#f9f9ff` | Very light lavender-white for alternating sections |
| White background | `#fff` | Contact area, white sections |
| Footer background | `#000` | Solid black |
| Footer text color | `#777` | Gray links, hover to `#fcd2ff` |
| Button border-radius | `20px` (circle variant) | Pill-shaped buttons |
| Button font | 500 weight, uppercase text | `genric-btn` system |
| Overlay (dark) | `rgba(0,0,0,0.8)` | Service area background overlay |
| Section padding | `120px 0` | Consistent section gap |
| Banner h1 | 84px, weight 200, letter-spacing 3px, text-shadow `13px 15px 8px #f2c4d0` | |
| Social icons | Font Awesome, `#777` default, hover `#fff` | Background: `#1e1e1e` circles |

## Visual Design Notes (from screenshot)

- Feminine aesthetic: soft pink/lavender palette, rounded pill buttons
- Full-screen hero with gradient overlay (salmon-to-pink)
- Clean white content sections with subtle shadow effects
- Feature icons in lavender-pink
- Dark service area with carousel
- Black footer with social media icons in dark circles

## Gherkin Requirements

### Scenario: Header renders with navigation

```gherkin
Feature: Filament Header

  Scenario: Logo and navigation links render
    Given the Filament page loads
    Then a header is visible with a logo
    And navigation links for "Home", "Generic", and "Elements" are present
    And the header is positioned absolutely over the banner
```

### Scenario: Hero banner with gradient overlay

```gherkin
Feature: Filament Hero Banner

  Scenario: Full-screen hero banner with gradient overlay renders
    Given the Filament page loads
    Then a full-screen banner section is visible
    And the banner has a gradient overlay from salmon-peach (#f6d0c5) to soft-pink (#fbd2f6)
    And the heading "Brand new Simples" is displayed in large white text
    And a subtitle paragraph is present below the heading
    And an "Explore Now" button with pill shape is visible

  Scenario: Hero banner is full viewport height
    Given the Filament page loads
    Then the banner area spans the full viewport width
    And the banner content is vertically centered
```

### Scenario: Features section

```gherkin
Feature: Filament Features

  Scenario: Four feature cards render
    Given the Filament page loads
    Then four feature cards are displayed in a row
    And each feature card has a lavender-pink icon
    And the features are: "Easy Installation", "Multiple Layouts", "Free Updates", "Fully Responsive"
    And each feature card has an uppercase heading
```

### Scenario: Core Feature section with carousel

```gherkin
Feature: Filament Core Feature

  Scenario: Core Feature section displays left content and right carousel
    Given the Filament page loads
    Then a "Core Feature" section with light background (#f9f9ff) is visible
    And the left side shows a subtitle "Core Feature" and a heading with highlighted spans
    And a paragraph of descriptive text is present
    And a "Learn More" button with arrow icon is visible
    And the right side shows a carousel with feature images
    And carousel navigation arrows (prev/next) are present on the left side
```

### Scenario: Core Feature Bottom section (image + text)

```gherkin
Feature: Filament Core Feature Bottom

  Scenario: Core Feature Bottom section with image on left and text on right
    Given the Filament page loads
    Then a second Core Feature section is visible
    And the left half shows a large image spanning full height
    And the right half shows the same "Core Feature" heading and text pattern
    And a "Learn More" button is present
```

### Scenario: Process area with six steps

```gherkin
Feature: Filament Process Steps

  Scenario: Six process steps render on gradient background
    Given the Filament page loads
    Then a process section with gradient background (#f6d0c5 → #fbd2f6) is visible
    And six process steps are displayed: "Brainstorm", "Discuss Ideas", "Projections", "Strategies", "Seo Target", "Awards"
    And each step has a white icon above it
    And each step has a white dot and uppercase label with a top border
```

### Scenario: Service area with carousel

```gherkin
Feature: Filament Service Carousel

  Scenario: Service carousel with image and text slides
    Given the Filament page loads
    Then a service section with dark overlay background is visible
    And a carousel displays service items with left image and right text
    And each service item has a title, paragraph, and "View Details" link
    And prev/next navigation triggers are positioned outside the carousel
```

### Scenario: Newsletter subscription section

```gherkin
Feature: Filament Newsletter

  Scenario: Newsletter section with email input
    Given the Filament page loads
    Then a newsletter section with light background (#f9f9ff) is visible
    And a heading "Subscribe for our Newsletter" with highlighted "Newsletter" span is shown
    And a "We won't send any kind of spam" subtext is displayed
    And an email input field with "Email address" placeholder is present
    And a "Get Started" button is positioned inside the input area
```

### Scenario: Contact section with form and map placeholder

```gherkin
Feature: Filament Contact

  Scenario: Contact section renders form and map area
    Given the Filament page loads
    Then a contact section is visible
    And the left side shows a map placeholder area
    And the right side shows a contact form
    And the form has fields: name, email, message (textarea)
    And a "Send Message" button is present
```

### Scenario: Footer with navigation columns and social links

```gherkin
Feature: Filament Footer

  Scenario: Footer renders with navigation columns and social links
    Given the Filament page loads
    Then a black footer is visible
    And four navigation columns render: "Top Products", "Company", "Support", "Projects"
    And each column has a list of links
    And a "Quick Contact" column shows phone number and email
    And social media icons (Facebook, Twitter, Dribbble, Behance) are displayed in dark circles
    And a footer-bottom bar contains copyright text
    And the copyright text links to "Component Dock" (https://www.componentdock.com/)
```

## Verification Checklist

- [ ] Header renders with logo and three nav links (Home, Generic, Elements)
- [ ] Hero banner fills viewport with gradient overlay (#f6d0c5 → #fbd2f6)
- [ ] Hero h1 is large white text with text-shadow
- [ ] "Explore Now" pill button renders with border-radius 20px
- [ ] Four feature cards in a row with lavender-pink icons
- [ ] Core Feature section has left text + right carousel
- [ ] Core Feature Bottom has left image + right text
- [ ] Process section shows 6 steps on gradient background
- [ ] Service carousel shows image + text slides with dark overlay
- [ ] Newsletter section with email input and "Get Started" pill button
- [ ] Contact form (name, email, textarea, send button) alongside map placeholder
- [ ] Black footer with 4 nav columns + Quick Contact + social icons
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Placeholder images use picsum.photos with deterministic seeds
- [ ] Fonts loaded via Google Fonts link in index.html (Poppins)
- [ ] Tailwind @theme tokens match the extracted design tokens
