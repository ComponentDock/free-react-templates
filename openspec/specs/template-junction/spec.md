# Template: Junction (Personal Resume / Portfolio)

## Purpose

Junction is a single-page personal resume / portfolio website, a recreation of
the ColorLib "Jackson" free template. Source:
https://colorlib.com/wp/template/jackson/; preview:
https://preview.colorlib.com/theme/jackson/.

**Stack:** Vite (latest) · React 19 · Tailwind CSS 4 · TypeScript (strict).
Tests: Vitest + Testing Library with 100% coverage.

**Layout:** Fixed left sidebar (desktop) with avatar, name, title, social links,
and navigation — scrollable main content area with parallax hero slider.
On mobile: offcanvas sidebar + stacked layout. Dark/light theme toggle.

## Design tokens

Extracted from the ColorLib preview stylesheet (`css/style.css`):

| Token                 | Light mode              | Dark mode               |
| --------------------- | ----------------------- | ----------------------- |
| `--color-bg`          | `#ffffff`               | `#121212`              |
| `--color-bg-secondary`| `#f8f9fa`               | `#1a1a1a`              |
| `--color-bg-tertiary` | `#f1f3f5`               | `#242424`              |
| `--color-primary`     | `#0066ff`               | `#4d9fff`              |
| `--color-primary-hover`| `#0052cc`              | `#6aadff`              |
| `--color-text`        | `#1a1a1a`               | `#f0f0f0`              |
| `--color-text-secondary`| `#555555`             | `#b0b0b0`              |
| `--color-text-muted`  | `#777777`               | `#888888`              |
| `--color-border`      | `#e5e7eb`               | `#333333`              |
| `--radius-sm`         | `6px`                   |                         |
| `--radius-md`         | `10px`                  |                         |
| `--radius-lg`         | `14px`                  |                         |
| `--radius-full`       | `9999px`                |                         |
| `--shadow-sm`         | `0 1px 3px rgba(0,0,0,0.06)` | dark: `0 1px 3px rgba(0,0,0,0.3)` |
| `--shadow-md`         | `0 4px 16px rgba(0,0,0,0.08)` | dark: `0 4px 16px rgba(0,0,0,0.4)` |
| `--shadow-lg`         | `0 8px 30px rgba(0,0,0,0.1)` | dark: `0 8px 30px rgba(0,0,0,0.5)` |
| `--transition-base`   | `250ms ease`            |                         |
| `--transition-fast`   | `150ms ease`            |                         |

**Font family:** `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
(loaded via Google Fonts link in index.html)

**Hero:** Full-viewport background image slider with dark gradient overlay
(`linear-gradient(135deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.55) 100%)`).
Centered text with large heading, tagline, and two CTA buttons.

**Sidebar (desktop):** Fixed left column (~280px), white/dark background,
circular avatar image, name, title, social icons, vertical nav links.
Border-right in light mode.

**Counters:** Parallax background image section with semi-transparent dark
overlay, 4 stat counters (Cups of coffee: 309, Projects: 356, Clients: 30,
Partners: 10).

## Section structure (order)

1. **Sidebar** (desktop left fixed; mobile offcanvas) — avatar, name, title,
   social links, nav menu
2. **Hero** (data-section="home") — background image slider with overlay,
   "Hi! I'm Jackson" heading, tagline, Download CV + View Portfolio buttons
3. **About** (data-section="about") — "Who Am I?" heading, intro text,
   4 expertise highlight cards (Graphic Design, Web Design, Software,
   Application) with icon + title
4. **Counter** — parallax background, 4 animated stat counters
5. **Services** (data-section="services") — "Here are some of my expertise"
   heading, 6 icon cards in 2x3 grid (Innovative Ideas, Software,
   Application, Graphic Design, Software, Application)
6. **Skills** (data-section="skills") — "My Skills" heading, 6 progress bars
   (Photoshop, JavaScript, HTML5, CSS3, WordPress, SEO)
7. **Education** (data-section="education") — "Education" heading, 5
   timeline items (Master Degree, Bachelor Degree, Diploma, Certificate,
   High School)
8. **Experience** (data-section="experience") — "Work Experience" heading,
   5 timeline items (Full Stack Developer, Front End Developer at Google,
   System Analyst, Creative Designer, UI/UX Designer at Envato)
9. **Work** (data-section="work") — "Recent Work" heading, 6-item image
   gallery grid with hover overlay
10. **Blog** (data-section="blog") — "From the Blog" heading, 3 blog cards
    with image, date, title, excerpt, Read More link
11. **Contact** (data-section="contact") — "Contact" heading, contact info
    (email, address, phone), contact form (name, email, subject, message,
    submit button)
12. **Footer** — "Made with Component Dock" link to
    https://www.componentdock.com/

## Gherkin requirements

### Sidebar

```gherkin
Feature: Sidebar navigation

  Scenario: Desktop sidebar is fixed on the left
    Given the viewport is desktop (>= 768px)
    When the page loads
    Then a fixed sidebar appears on the left side
    And it displays a circular avatar image
    And it displays the name "Jackson Ford"
    And it displays the title "UI/UX Designer in San Francisco"
    And it displays social media icon links
    And it displays a vertical navigation menu

  Scenario: Mobile sidebar is hidden and togglable
    Given the viewport is mobile (< 768px)
    When the page loads
    Then the sidebar is hidden
    And a hamburger menu button is visible
    When the hamburger button is clicked
    Then the sidebar slides in from the left as an offcanvas panel
    And clicking a nav link closes the sidebar

  Scenario: Nav links highlight active section on scroll
    Given the page is scrolled to the "About" section
    Then the "About" nav link is visually highlighted
```

### Hero

```gherkin
Feature: Hero section

  Scenario: Hero displays with background image and CTAs
    Given the page loads
    Then a full-viewport hero section is visible
    And it shows the heading "Hi! I'm Jackson"
    And it shows a tagline
    And it shows a "Download CV" button
    And it shows a "View Portfolio" button
    And the background has a dark gradient overlay

  Scenario: Hero has background image slider
    Given the page loads
    Then the hero displays a background image
    And the image transitions automatically on a timer
```

### About

```gherkin
Feature: About section

  Scenario: About section displays intro and expertise cards
    Given the page loads
    When I scroll to the About section
    Then the heading "Who Am I?" is visible
    And an introductory paragraph is displayed
    And 4 expertise cards are shown: Graphic Design, Web Design, Software, Application
    And each card has an icon and a title
```

### Counter

```gherkin
Feature: Counter / Stats section

  Scenario: Counter section displays animated stats
    Given the page loads
    When I scroll to the counter section
    Then a parallax background image is visible
    And 4 stat counters are displayed: Cups of coffee (309), Projects (356), Clients (30), Partners (10)
    And the numbers animate from 0 to their target values
```

### Services

```gherkin
Feature: Services section

  Scenario: Services section displays 6 expertise cards
    Given the page loads
    When I scroll to the Services section
    Then the heading "Here are some of my expertise" is visible
    And 6 cards are displayed in a 2-column or 3-column responsive grid
    And each card has an icon, title, and description text
```

### Skills

```gherkin
Feature: Skills section

  Scenario: Skills section displays progress bars
    Given the page loads
    When I scroll to the Skills section
    Then the heading "My Skills" is visible
    And 6 skill bars are displayed: Photoshop, JavaScript, HTML5, CSS3, WordPress, SEO
    And each bar shows a percentage fill with the skill name
```

### Education

```gherkin
Feature: Education section

  Scenario: Education section displays timeline
    Given the page loads
    When I scroll to the Education section
    Then the heading "Education" is visible
    And 5 education items are displayed in a vertical timeline
    And each item shows degree name and institution/period
```

### Experience

```gherkin
Feature: Experience section

  Scenario: Experience section displays work timeline
    Given the page loads
    When I scroll to the Experience section
    Then the heading "Work Experience" is visible
    And 5 experience items are displayed in a vertical timeline
    And each item shows job title, company, and date range
```

### Work Gallery

```gherkin
Feature: Recent Work gallery

  Scenario: Work section displays image grid
    Given the page loads
    When I scroll to the Work section
    Then the heading "Recent Work" is visible
    And 6 work items are displayed in a responsive grid
    And each item shows an image with a hover overlay

  Scenario: Work items are clickable
    Given the Work gallery is visible
    When I hover over a work item
    Then an overlay with project title appears
```

### Blog

```gherkin
Feature: Blog section

  Scenario: Blog section displays recent posts
    Given the page loads
    When I scroll to the Blog section
    Then the heading "From the Blog" is visible
    And 3 blog cards are displayed
    And each card shows an image, date, title, excerpt, and "Read More" link
```

### Contact

```gherkin
Feature: Contact section

  Scenario: Contact section displays info and form
    Given the page loads
    When I scroll to the Contact section
    Then the heading "Contact" is visible
    And contact information is displayed: email, address, phone
    And a contact form is visible with fields: name, email, subject, message
    And a submit button is present

  Scenario: Contact form validates required fields
    Given the contact form is visible
    When I click submit with empty fields
    Then validation errors appear for required fields
```

### Theme Toggle

```gherkin
Feature: Dark/Light theme toggle

  Scenario: Theme toggle switches between dark and light modes
    Given the page loads in light mode
    When I click the theme toggle button
    Then the page switches to dark mode
    And background, text, and border colors update
    When I click the theme toggle again
    Then the page returns to light mode
```

### Footer

```gherkin
Feature: Footer

  Scenario: Footer displays Component Dock link
    Given the page loads
    When I scroll to the footer
    Then a link to https://www.componentdock.com/ is visible
    And the link text reads "Component Dock"
```

## Verification checklist

- [ ] Sidebar fixed on left on desktop, offcanvas on mobile
- [ ] Sidebar avatar, name, title, social links, nav all rendered
- [ ] Nav highlights active section on scroll
- [ ] Hero full-viewport with background image, gradient overlay, heading, CTAs
- [ ] Hero background image slider transitions
- [ ] About section: heading, intro text, 4 expertise cards with icons
- [ ] Counter section: parallax background, 4 animated counters
- [ ] Services: heading, 6 cards in responsive grid
- [ ] Skills: heading, 6 progress bars with percentages
- [ ] Education: heading, 5 timeline items
- [ ] Experience: heading, 5 timeline items
- [ ] Work gallery: heading, 6-item responsive grid with hover overlays
- [ ] Blog: heading, 3 blog cards with image, date, title, excerpt, link
- [ ] Contact: heading, contact info, form with validation
- [ ] Dark/light theme toggle works, all tokens update
- [ ] Footer links to Component Dock
- [ ] Mobile responsive: sidebar collapses, grids adapt, typography scales
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
