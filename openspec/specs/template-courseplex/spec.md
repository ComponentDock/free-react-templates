# Template: CoursePlex (Education)

## Purpose

Recreation of the ColorLib "Edusite" education template as a React 19 + Vite + Tailwind 4 + TypeScript application.

- **Source:** [ColorLib Edusite](https://colorlib.com/wp/template/edusite/)
- **Preview:** https://preview.colorlib.com/theme/edusite/
- **New name:** courseplex (apps/courseplex, @free-react-templates/courseplex)
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)

## Design Tokens (extracted from preview CSS)

| Token | Value | Notes |
|-------|-------|-------|
| Body text | `#798696` | Muted blue-grey, default text color |
| Headers | `#374050` | Dark navy-slate, used for h1–h4 and nav |
| Primary / accent | `#FF6700` | Vivid orange — buttons, links, active states, price badges |
| Grey / border | `#EBEBEB` | Light grey — borders, dividers |
| Overlay gradient | `linear-gradient(to bottom, #374050, #798696)` | Parallax overlay on hero, CTA, contact sections |
| Footer background | `#374050` | Same dark navy-slate |
| Button shape | `border-radius: 40px` | Pill-shaped buttons |
| Button style | bg `#FF6700`, text `#FFF`; hover: bg `#FFF`, border `2px solid #FF6700`, text `#FF6700` | Reversible pill button |
| Font — headings / nav | Montserrat | Weights: 400, 600 |
| Font — body / content | Lato | Weight: 700 |
| Card border | `1px solid #EBEBEB`, `border-radius: 4px` | Course cards have subtle border + radius |
| Social icons | FontAwesome style circles (`border-radius: 50%`, border `#EBEBEB`) | Footer social row |

## Section Structure (from preview DOM, in order)

1. **Navbar** — transparent overlay nav; logo (left) + nav links (right): Home, About, Courses, Blog, Contact; mobile toggle hamburger.
2. **Hero** — full-width parallax background image with gradient overlay; left-aligned heading "Edusite Free Online Training Courses" + lead paragraph + pill "Get Started!" CTA button.
3. **About** — two-column layout: left column has section header + 3 feature items (Online Courses, Expert Teachers, Community — each with icon + title + blurb); right column has about image.
4. **Courses** — centered section header + 8 course cards in a 4-column responsive grid (2 rows of 4). Each card: image thumbnail with link overlay icon, title, details row (category label + price badge: "Free" or "Premium"). "More Courses" center button below.
5. **Call to Action** — full-width parallax background with gradient overlay; left-aligned heading + lead paragraph + pill "Get Started!" CTA button.
6. **Why Us** — centered section header + 3 feature items in a 3-column grid (Online Courses, Expert Teachers, Community — same icon/title/blurb pattern as About).
7. **Contact CTA** — full-width parallax background with gradient overlay; centered heading "Contact Us" + lead paragraph + pill "Contact Us Now" CTA button.
8. **Footer** — dark background (#374050); top row: logo (left) + nav links (right); bottom row: copyright text (left) + social media icon circles (right: Facebook, Twitter, Google+, Instagram, YouTube, LinkedIn).

## Gherkin Requirements

### Feature: Navbar

```gherkin
Scenario: Desktop navbar renders all links
  Given the page loads on a desktop viewport
  Then the navbar displays the logo
  And the navbar shows links: Home, About, Courses, Blog, Contact

Scenario: Navbar is transparent over hero
  Given the hero section is in view
  Then the navbar background is transparent

Scenario: Mobile hamburger toggle
  Given the page loads on a mobile viewport
  Then a hamburger toggle button is visible
  When the user taps the toggle
  Then the mobile nav menu expands
```

### Feature: Hero Section

```gherkin
Scenario: Hero displays heading and CTA
  Given the hero section is visible
  Then the heading reads "Edusite Free Online Training Courses" (or equivalent)
  And a lead paragraph is displayed below the heading
  And a pill-shaped "Get Started!" button is visible

Scenario: Hero has parallax background with overlay
  Given the hero section is visible
  Then a background image is displayed with a gradient overlay (dark-to-light)
```

### Feature: About Section

```gherkin
Scenario: About section shows 3 features
  Given the about section is visible
  Then 3 feature items are displayed: Online Courses, Expert Teachers, Community
  And each feature has an icon, title, and description paragraph

Scenario: About section has image on the right
  Given the about section is visible
  Then a decorative image is displayed in the right column
```

### Feature: Courses Section

```gherkin
Scenario: Courses grid shows 8 course cards
  Given the courses section is visible
  Then 8 course cards are displayed in a 4-column grid
  And each card shows: image thumbnail, title, category label, price badge

Scenario: Course price badge variants
  Given a course card is rendered
  Then the price badge shows "Free" or "Premium"
  And "Free" badges use the primary accent color

Scenario: More Courses button
  Given the courses section is visible
  Then a centered "More Courses" button is displayed below the grid
```

### Feature: Call to Action Section

```gherkin
Scenario: CTA section displays heading and button
  Given the CTA section is visible
  Then a heading and lead paragraph are displayed
  And a pill-shaped "Get Started!" button is visible
  And the section has a parallax background with gradient overlay
```

### Feature: Why Us Section

```gherkin
Scenario: Why Us shows 3 feature cards
  Given the Why Us section is visible
  Then 3 feature items are displayed in a 3-column grid
  And each feature has an icon, title, and description
```

### Feature: Contact CTA Section

```gherkin
Scenario: Contact CTA displays centered content
  Given the Contact CTA section is visible
  Then "Contact Us" heading is displayed centered
  And a lead paragraph is shown
  And a pill-shaped "Contact Us Now" button is visible
  And the section has a parallax background with gradient overlay
```

### Feature: Footer

```gherkin
Scenario: Footer displays logo and nav
  Given the footer is visible
  Then the logo is displayed on the left
  And nav links (Home, About, Courses, Blog, Contact) are on the right

Scenario: Footer has social icons and copyright
  Given the footer is visible
  Then social media icon circles are displayed (Facebook, Twitter, Instagram, YouTube, LinkedIn)
  And a copyright notice is shown
  And the footer links to https://www.componentdock.com/ ("Component Dock")
```

### Feature: Responsive Design

```gherkin
Scenario: Mobile layout stacks columns
  Given the page loads on a mobile viewport (< 768px)
  Then the navbar collapses to a hamburger menu
  And the about section stacks the features above the image
  And the courses grid becomes 1-column
  And the Why Us features stack vertically
```

## Verification Checklist

- [ ] All 8 sections rendered in correct order
- [ ] Navbar transparent over hero, links functional
- [ ] Hero parallax background with gradient overlay
- [ ] About: 3 features with icons + image
- [ ] Courses: 8 cards, 4-col grid, Free/Premium badges
- [ ] CTA: parallax background + pill button
- [ ] Why Us: 3 features in 3-col grid
- [ | Contact CTA: centered content + parallax
- [ ] Footer: logo, nav, social icons, copyright, Component Dock link
- [ ] Responsive: hamburger, stacked columns on mobile
- [ ] Design tokens match: #FF6700 primary, #374050 dark, #798696 body, Montserrat + Lato fonts, pill buttons
- [ ] No ColorLib references in app code
- [ ] Tests at 100% coverage
- [ ] CNAME + homepage configured
