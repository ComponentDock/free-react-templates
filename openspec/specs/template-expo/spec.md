# Template: Expo — SEO / Digital Marketing Landing Page

## Overview

Expo is a single-page SEO and digital marketing landing page template.
It features a sticky transparent navbar, hero with CTA, trusted-by brand logos,
about section, services/features grid, project showcase, pricing cards,
call-to-action banner, and a dark-purple footer.

## Gherkin Scenarios

### Navbar

```gherkin
Feature: Sticky transparent navbar

  Scenario: Navbar renders logo and navigation links
    Given the page is loaded
    Then the navbar contains the text "Expo"
    And the navbar contains links for "Home", "About", "Services", "Blog", "Contact"
    And the navbar contains a phone CTA button

  Scenario: Navbar is sticky
    Given the page is loaded
    Then the navbar element has role "banner"
```

### Hero

```gherkin
Feature: Hero section

  Scenario: Hero displays heading and CTA
    Given the page is loaded
    Then the hero section displays "Build audience and grow your brand"
    And the hero section displays an "Explore Us" button

  Scenario: Hero has background image
    Given the page is loaded
    Then the hero section contains an image from picsum.photos
```

### Brands

```gherkin
Feature: Trusted brands section

  Scenario: Brands heading and logos are shown
    Given the page is loaded
    Then the brands section displays "Trusted by over 3,000 world's leading companies"
    And the brands section shows 6 brand logo placeholders
```

### About

```gherkin
Feature: About section

  Scenario: About displays heading and description
    Given the page is loaded
    Then the about section displays "We take a steps to build a successful business"
    And the about section displays an "Explore Us" button
    And the about section displays an image from picsum.photos
```

### Features

```gherkin
Feature: Features / Services section

  Scenario: Features shows heading and 4 cards
    Given the page is loaded
    Then the features section displays "How we can help"
    And the features section displays cards for "Digital marketing", "Social media marketing", "Content create", "Web design"
    And each feature card has a check icon
```

### ProjectUs

```gherkin
Feature: Project Us section

  Scenario: ProjectUs displays heading and image
    Given the page is loaded
    Then the project-us section displays "We are here to help you for better solutions"
    And the project-us section displays an image from picsum.photos
```

### Pricing

```gherkin
Feature: Pricing section

  Scenario: Pricing displays 3 plans
    Given the page is loaded
    Then the pricing section displays "Affordable pricing plan"
    And the pricing section displays plans "Basic", "Standard", "Premium"
    And each plan has price "$700"
    And each plan has a "Get Started Now" button
```

### CallToAction

```gherkin
Feature: Call to Action section

  Scenario: CTA displays heading and button
    Given the page is loaded
    Then the cta section displays "Let's talk about your project"
    And the cta section displays a "Start Talking" button
```

### Footer

```gherkin
Feature: Footer

  Scenario: Footer has logo, columns, and copyright
    Given the page is loaded
    Then the footer contains the text "Expo"
    And the footer displays navigation links
    And the footer displays service links
    And the footer displays contact information
    And the footer contains a link to "Component Dock" pointing to "https://www.componentdock.com/"

  Scenario: No ColorLib references in the app
    Given the page is loaded
    Then no visible text contains "ColorLib"
    And no visible text contains "colorlib"
```
