# Template: Jockford (Personal Resume / Portfolio)

## Purpose

Recreation of ColorLib **Jackson** — a personal resume/portfolio website template
with a fixed sidebar navigation, full-height hero slider, and single-page
scrollable sections.

- **Source:** [ColorLib Jackson](https://colorlib.com/wp/template/jackson/)
- **Preview:** https://preview.colorlib.com/theme/jackson/
- **New name:** jockford (apps/jockford)
- **Package:** @free-react-templates/jockford
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens

Extracted from the live preview's `css/style.css` CSS custom properties:

| Token                 | Value                                         |
| --------------------- | --------------------------------------------- |
| `--color-primary`     | `#0066ff`                                     |
| `--color-primary-hover` | `#0052cc`                                   |
| `--color-text`        | `#1a1a1a`                                     |
| `--color-text-secondary` | `#555555`                                   |
| `--color-text-muted`  | `#888888`                                     |
| `--color-bg`          | `#ffffff`                                     |
| `--color-bg-secondary` | `#f8f9fa`                                   |
| `--color-bg-tertiary` | `#f1f3f5`                                     |
| `--color-border`      | `#e5e7eb`                                     |
| `--radius-sm`         | `6px`                                         |
| `--radius-md`         | `10px`                                        |
| `--radius-lg`         | `14px`                                        |
| `--radius-full`       | `9999px`                                      |
| Font family           | `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` |
| Shadows               | `--shadow-sm: 0 1px 3px rgba(0,0,0,0.06)`, `--shadow-md: 0 4px 16px rgba(0,0,0,0.08)`, `--shadow-lg: 0 8px 30px rgba(0,0,0,0.1)` |
| Transitions           | `--transition-fast: 150ms ease`, `--transition-base: 250ms ease` |

**Visual notes from screenshot:**
- Light theme, white/light-gray backgrounds, blue accent color (#0066ff).
- Fixed left sidebar (~250px) with circular avatar, name, role, nav links,
  social icons, and footer. Scrollable right content area.
- Full-height hero with background image, overlaid text, and CTA buttons.
- Clean, modern, professional aesthetic. Icon cards, progress bars,
  accordion, timeline, and filterable portfolio grid.

## Layout structure

The template is a **split layout**:

1. **Sidebar** (fixed, left, ~250px):
   - Circular avatar image
   - Name ("Jockford" / "Ford Jock" or similar)
   - Role ("UI/UX Designer in San Francisco")
   - Navigation links (scroll to sections): Home, About, Services, Skills,
     Education, Experience, Work, Blog, Contact
   - Social icons (Facebook, Twitter, Instagram, LinkedIn)
   - Footer text
   - Dark mode toggle

2. **Main content** (scrollable, right):
   Full-height sections stacked vertically.

## Sections (order)

### 1. Hero
- Full-viewport-height slider/carousel
- Background image(s) with dark overlay gradient
- Headline: "Hi! I'm Ford" / "I am a Designer"
- Subtitle text
- CTA buttons: "Download CV" and "View Portfolio" (outlined, white border)
- Slide navigation dots

### 2. About
- Section heading: "Who Am I?"
- Bio paragraph
- 4 stat cards in a row:
  - Graphic Design, Web Design, Software, Application
  - Each with icon and project count
- "Hire me" button (primary color)

### 3. Services
- Section heading: "Here are some of my expertise"
- 6 service cards (3×2 grid):
  - Innovative Ideas, Software, Application, Graphic Design, Software, Application
  - Each with icon, title, and description paragraph
  - Color-coded icon backgrounds (4 color variants)

### 4. Skills
- Section heading: "My Skills"
- Description paragraph
- 6 skill items with animated progress bars:
  - Photoshop, JavaScript, HTML5, CSS3, WordPress, SEO
  - Percentage labels on each bar
  - Color-coded progress bars (3 color variants)

### 5. Education
- Section heading: "Education"
- 5 accordion items (collapsible):
  - Master Degree Graphic Design
  - Bachelor Degree of Computer Science
  - Diploma in Information Technology
  - Certificate in Web Development
  - High School Secondary Education
  - Each with description paragraph

### 6. Experience
- Section heading: "Work Experience"
- Description paragraph
- 5 timeline entries (centered timeline):
  - Full Stack Developer 2028-2030
  - Front End Developer at Google Company 2028-2030
  - System Analyst 2028-2030
  - Creative Designer 2028-2030
  - UI/UX Designer at Envato 2028-2030
  - Each with description, color-coded icon, alternating sides

### 7. Work / Portfolio
- Section heading: "Recent Work"
- Filter tabs: All, Graphic Design, Web Design, Software, Apps
- 6 portfolio items (2-column grid):
  - Work 01–06 with hover overlay showing icons (share, view, heart)
  - Background images with overlay on hover

### 8. Blog
- Section heading: "From the Blog"
- 3 blog cards (1 featured + 2 standard):
  - Featured: large image + title + excerpt
  - Standard: smaller cards with image, category, date, title, excerpt, link
  - Blog posts:
    - Renovating National Gallery: A Design Case Study
    - WordPress for Beginners: Getting Started Guide
    - Building Modern Websites from Scratch

### 9. Contact
- Section heading: "Contact"
- 3 contact info items with icons:
  - Globe icon: info@domain.com
  - Map icon: 198 West 21th Street, Suite 721 New York NY 10016
  - Phone icon: +123 456 7890
- Contact form (implied from structure, not visible in screenshot)

### 10. Footer
- Copyright text
- "Made with ❤ by Component Dock" (replaces original ColorLib attribution)
- Social media links

## Gherkin requirements

### Hero

```gherkin
Feature: Hero Section

  Scenario: Hero displays headline and CTA buttons
    Given the user is on the home page
    Then the hero section is visible with full viewport height
    And a headline "Hi! I'm Ford" is displayed
    And a subtitle "I am a Designer" is displayed
    And a "Download CV" button is visible
    And a "View Portfolio" button is visible

  Scenario: Hero slides transition
    Given the user is on the home page
    Then the hero section shows a slide with a background image
    And navigation dots are visible for slide switching
```

### Sidebar

```gherkin
Feature: Sidebar Navigation

  Scenario: Sidebar is fixed on the left
    Given the user is on the home page
    Then the sidebar is visible on the left side
    And the sidebar remains fixed while scrolling

  Scenario: Sidebar shows author info
    Given the sidebar is visible
    Then a circular avatar image is displayed
    And the author name is displayed
    And the role "UI/UX Designer" is displayed

  Scenario: Sidebar navigation scrolls to sections
    Given the sidebar is visible
    When the user clicks "About" in the sidebar
    Then the page scrolls to the About section
    When the user clicks "Skills" in the sidebar
    Then the page scrolls to the Skills section

  Scenario: Sidebar shows social links
    Given the sidebar is visible
    Then social media icon links are displayed (Facebook, Twitter, Instagram, LinkedIn)
```

### About

```gherkin
Feature: About Section

  Scenario: About section displays bio and stats
    Given the user scrolls to the About section
    Then the heading "Who Am I?" is displayed
    And a bio paragraph is shown
    And 4 stat cards are displayed: Graphic Design, Web Design, Software, Application
    And each stat card shows a project count
    And a "Hire me" button is visible
```

### Services

```gherkin
Feature: Services Section

  Scenario: Services section displays expertise cards
    Given the user scrolls to the Services section
    Then the heading "Here are some of my expertise" is displayed
    And 6 service cards are displayed in a grid
    And each service card has an icon, title, and description
```

### Skills

```gherkin
Feature: Skills Section

  Scenario: Skills section shows progress bars
    Given the user scrolls to the Skills section
    Then the heading "My Skills" is displayed
    And 6 skill progress bars are displayed
    And each skill bar shows the skill name and percentage
```

### Education

```gherkin
Feature: Education Section

  Scenario: Education section shows collapsible items
    Given the user scrolls to the Education section
    Then the heading "Education" is displayed
    And 5 education items are shown as accordion entries
    When the user clicks an education item
    Then the item expands to show a description
```

### Experience

```gherkin
Feature: Experience Section

  Scenario: Experience section shows timeline
    Given the user scrolls to the Experience section
    Then the heading "Work Experience" is displayed
    And a centered timeline with 5 entries is shown
    And each entry has a title with date range
    And entries alternate sides on the timeline
```

### Work / Portfolio

```gherkin
Feature: Work / Portfolio Section

  Scenario: Portfolio shows filterable work items
    Given the user scrolls to the Work section
    Then the heading "Recent Work" is displayed
    And filter tabs are shown: All, Graphic Design, Web Design, Software, Apps
    And 6 portfolio items are displayed in a 2-column grid

  Scenario: Portfolio items show hover overlay
    Given the portfolio items are displayed
    When the user hovers over a portfolio item
    Then an overlay with action icons is shown
```

### Blog

```gherkin
Feature: Blog Section

  Scenario: Blog section shows recent posts
    Given the user scrolls to the Blog section
    Then the heading "From the Blog" is displayed
    And 3 blog cards are shown
    And the first card is featured (larger)
    And each card has a title, excerpt, and category
```

### Contact

```gherkin
Feature: Contact Section

  Scenario: Contact section shows info and form
    Given the user scrolls to the Contact section
    Then the heading "Contact" is displayed
    And 3 contact info items are shown with icons: email, address, phone
    And a contact form is displayed
```

### Footer

```gherkin
Feature: Footer

  Scenario: Footer shows attribution
    Given the user scrolls to the footer
    Then copyright text is displayed
    And a "Made with ❤ by Component Dock" link is shown
    And social media links are present
```

### Dark mode

```gherkin
Feature: Dark Mode Toggle

  Scenario: User can toggle dark mode
    Given the user is on the home page
    When the user clicks the dark mode toggle
    Then the page theme switches to dark colors
    When the user clicks the toggle again
    Then the page theme switches back to light colors
```

## Verification checklist

- [ ] Sidebar is fixed left, ~250px wide, with avatar, name, role, nav
- [ ] Nav links smooth-scroll to corresponding sections
- [ ] Hero is full viewport height with background image and overlay
- [ ] Hero has "Download CV" and "View Portfolio" outlined buttons
- [ ] About section has "Who Am I?" heading, bio, 4 stat cards, "Hire me" button
- [ ] Services section has 6 icon cards in a grid
- [ ] Skills section has 6 animated progress bars with percentages
- [ ] Education section has 5 collapsible accordion items
- [ ] Experience section has centered timeline with 5 entries
- [ ] Work section has filter tabs and 6 portfolio grid items with hover overlay
- [ ] Blog section has 3 cards (1 featured, 2 standard)
- [ ] Contact section has 3 icon info items and a form
- [ ] Footer has copyright and "Made with ❤ by Component Dock"
- [ ] Dark mode toggle works and persists
- [ ] Color tokens match: primary #0066ff, text #1a1a1a, bg #ffffff
- [ ] Font: Inter (Google Fonts)
- [ ] Border radius: 6px (sm), 10px (md), 14px (lg)
- [ ] No ColorLib references in app code
- [ ] All images use placeholder URLs (picsum.photos)
