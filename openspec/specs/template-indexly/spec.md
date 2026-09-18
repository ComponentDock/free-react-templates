# Template: Indexly (Directory)

## Purpose

Recreation of ColorLib **Browse** — a directory/listing website template with
a hero search bar, visited-places cards, categories, how-it-works steps,
testimonials, blog articles, and a multi-column footer.

- **Source slug:** `browse`
- **Source URL:** https://colorlib.com/wp/template/browse/
- **Preview URL:** https://preview.colorlib.com/theme/browse/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/browse-free-template.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript
- **New name:** `indexly` (package `@free-react-templates/indexly`)

## Design tokens

Extracted from the live preview CSS (`css/style.css`) at
https://preview.colorlib.com/theme/browse/css/style.css:

| Token | Value | Usage |
|-------|-------|-------|
| Primary brand | `#00918e` (teal) | buttons, links, category text, hover, active nav |
| Primary dark | `#007875` | button hover |
| Text dark | `#25262a` | headings |
| Text body | `#737373` | paragraph text |
| Text muted | `#b3b3b3` | secondary text |
| Background | `#fff` | page, footer, search wrap |
| Section alt | `#f4f5f9` | alternating section backgrounds |
| Section alt 2 | `#f8f9fa` | light gray backgrounds |
| Border/divider | `#e9ecef` | borders |
| Danger/accent | `#f23a2e` | warning-style accents |
| Font family | `"Rubik", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif` | Global |
| Button radius | `30px` | Pill-shaped buttons (`.btn-md`) |
| Card radius | `7px` | Card borders |
| Image radius | `4px` | Subtle image rounding |
| Circle radius | `50%` | Avatar/testimonial images |
| Button padding | `18px 30px` | `.btn-md` |
| Search wrap shadow | `0 2px 30px -5px rgba(0,0,0,0.2)` | Floating search bar |
| Section padding | `5em 0` | `.site-section` |
| Footer padding | `4em 0` | `.site-footer` |

### Visual notes from screenshot

- **Navbar:** Dark/transparent over hero image, white text, "Home" pill-shaped
  teal highlight, standard nav links (Dropdown, Listings, About, Blog, Contact)
- **Hero:** Full-width background image (dark overlay), large white heading
  "Find Nearby [teal word]", subtitle text, and floating white search bar with
  3 inputs + Search button
- **Search bar:** White card with shadow, 3 fields: text input, location input
  with pin icon, category dropdown, and teal Search button
- **Most Visited Places:** Section heading in teal, 3-column grid of cards,
  each with image, title, location, and rating/meta
- **Popular Categories:** 4-column grid of category items with teal icons,
  category name, and count
- **Why Us:** 3-column feature cards with icons, titles, descriptions
- **How It Works:** 3 numbered steps (teal circle numbers), title + description
- **Satisfied Customers:** Centered testimonial carousel with avatar, quote,
  author name
- **Tips & Articles:** Blog cards with image, date, title
- **CTA:** Dark background, "Let's get started. Create your account" with
  Sign Up button
- **Footer:** White background, 4 columns: Quick Links, Products, Features,
  Follow Us + newsletter subscription

## Requirements (Gherkin)

### Navbar
```gherkin
Feature: Navigation bar

  Scenario: Desktop navbar displays brand and links
    Given the user is on a desktop viewport
    When the page loads
    Then the navbar shows the brand "Indexly" on the left
    And nav links "Home", "Listings", "About", "Blog", "Contact" are visible
    And "Home" link has a teal pill-shaped active indicator

  Scenario: Mobile hamburger menu
    Given the user is on a mobile viewport
    When the user taps the hamburger icon
    Then a slide-down mobile menu appears with all nav links
    And tapping a link closes the menu
```

### Hero section
```gherkin
Feature: Hero banner with search

  Scenario: Hero displays headline and search bar
    Given the user is on any viewport
    When the hero section is visible
    Then a background image with dark overlay is shown
    And the heading "Find Nearby" is displayed in white
    And a subtitle paragraph is displayed below the heading
    And a floating white search card is positioned at the bottom of the hero

  Scenario: Search bar has three fields and a button
    Given the hero search bar is visible
    Then there is a text input labeled "What are you looking for?"
    And there is a text input labeled "Location" with a pin icon
    And there is a category dropdown labeled "All Categories"
    And a teal "Search" button is displayed
```

### Most Visited Places
```gherkin
Feature: Visited places grid

  Scenario: Section heading and card grid
    Given the user scrolls to the Most Visited Places section
    Then a heading "Most Visited Places" is shown in teal
    And a subtitle paragraph appears below the heading
    And a 3-column responsive grid of 6 place cards is displayed

  Scenario: Each place card shows details
    Given a place card is rendered
    Then it displays a cover image with rounded corners
    And it shows a title
    And it shows a location string below the title
```

### Popular Categories
```gherkin
Feature: Category listing

  Scenario: Category grid displays items
    Given the user scrolls to the Popular Categories section
    Then a heading "Popular Categories" is shown
    And 4 category items are displayed in a grid
    And each item shows a teal icon, category name, and count
```

### Why Us
```gherkin
Feature: Why-us feature cards

  Scenario: Feature cards display
    Given the user scrolls to the Why Us section
    Then a heading "Why Us" is shown
    And 3 feature cards are displayed
    And each card has an icon, a title, and a description paragraph
```

### How It Works
```gherkin
Feature: How-it-works steps

  Scenario: Steps display with numbered circles
    Given the user scrolls to the How It Works section
    Then a heading "How It Works" is shown
    And 3 steps are displayed
    And each step has a teal numbered circle, a title, and a description
    And step titles are "Decide What To Do", "Find What You Want", "Explore Amazing Places"
```

### Testimonials
```gherkin
Feature: Satisfied customers

  Scenario: Testimonial cards render
    Given the user scrolls to the Satisfied Customers section
    Then a heading "Satisfied Customers" is shown
    And multiple testimonial cards are displayed
    And each card has a quote, an author name, and a circular avatar image
```

### Tips & Articles
```gherkin
Feature: Blog articles

  Scenario: Article cards display
    Given the user scrolls to the Tips & Articles section
    Then a heading "Tips & Articles" is shown
    And article cards are displayed in a grid
    And each card has a cover image, a date, and a title
```

### Call-to-Action
```gherkin
Feature: Signup CTA section

  Scenario: CTA displays with signup prompt
    Given the user scrolls to the CTA section
    Then a dark background section is shown
    And the text "Let's get started. Create your account" is displayed
    And a "Sign Up" button with white outline is shown
```

### Footer
```gherkin
Feature: Site footer

  Scenario: Footer columns and newsletter
    Given the user scrolls to the footer
    Then 4 footer columns are displayed: Quick Links, Products, Features, Follow Us
    And a newsletter subscription section with an email input and Send button is shown
    And a "Component Dock" attribution link is present
```

## Verification checklist

- [ ] Navbar renders with correct brand and nav links
- [ ] Hero section has background image, overlay, heading, subtitle, search bar
- [ ] Search bar has 3 inputs + dropdown + Search button
- [ ] Most Visited Places shows 6 cards in 3-column grid
- [ ] Popular Categories shows 4 items with icons and counts
- [ ] Why Us shows 3 feature cards
- [ ] How It Works shows 3 numbered steps
- [ ] Testimonials section with quotes and author names
- [ ] Tips & Articles shows blog cards
- [ ] CTA section with dark bg and Sign Up button
- [ ] Footer has 4 columns + newsletter + Component Dock link
- [ ] Responsive: mobile layout stacks properly
- [ ] No ColorLib references in app code
- [ ] All tests pass with 100% coverage
