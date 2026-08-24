# Template: Nurture (Kids Learning Center)

## Purpose

Recreation of ColorLib's **Nurture** kids learning center template as a React
single-page application. The original is a colorful, playful education/daycare
landing page with a hero, feature icons, class offerings, about section, school
news, pricing plans, and a footer.

- **Source:** https://colorlib.com/wp/template/nurture/
- **Preview:** https://preview.colorlib.com/theme/nurture/
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **New name:** `nurture` (no collision with existing apps/specs)

## Design Tokens

### Colors

| Token               | Hex       | Usage                                    |
| ------------------- | --------- | ---------------------------------------- |
| `--color-brand`     | `#0fb78d` | Primary green — buttons, accents         |
| `--color-sky`       | `#4fb0dc` | Secondary blue — icons, highlights       |
| `--color-lime`      | `#5cb100` | Tertiary green — additional accents      |
| `--color-tangerine` | `#ec661f` | Orange — CTA buttons, pricing highlights |
| `--color-ink`       | `#333333` | Primary text / headings                  |
| `--color-mist`      | `#666666` | Muted body text                          |
| `--color-paper`     | `#ffffff` | White section backgrounds                |
| `--color-cloud`     | `#f7f9fc` | Light gray section backgrounds           |

### Typography

| Role            | Font family | Notes                       |
| --------------- | ----------- | --------------------------- |
| Body / Headings | Poppins     | Sans-serif, used throughout |

### Buttons & Radii

| Element          | Style                                                                         |
| ---------------- | ----------------------------------------------------------------------------- |
| Primary button   | bg brand green (#0fb78d), white text, rounded pill, padding ~0.75rem vertical |
| Secondary button | Outline / transparent, border-radius pill                                     |
| CTA button       | bg orange (#ec661f), white text, rounded pill                                 |

### Section Backgrounds

| Section          | Background                          |
| ---------------- | ----------------------------------- |
| Hero             | Full-bleed image with dark overlay  |
| Features (icons) | White                               |
| What We Offer    | White                               |
| Education CTA    | Parallax bg image with dark overlay |
| About Us         | White                               |
| School News      | Light gray (#f7f9fc)                |
| Enroll CTA       | Parallax bg image with dark overlay |
| Pricing          | White                               |
| Footer           | Dark (#2b2b2b)                      |

## Requirements (Gherkin)

### Navbar

```gherkin
Scenario: Fixed top navigation bar
  Given the page loads
  Then a fixed navbar is visible at the top
  And it contains the brand name "Nurture"
  And it has navigation links: Home, About, Courses, Pricing, News, Contact
  And on mobile (< 768px) a hamburger toggles the menu

Scenario: Navbar links scroll to sections
  Given the navbar is visible
  When the user clicks "About"
  Then the page scrolls smoothly to the About section
```

### Hero Section

```gherkin
Scenario: Hero with headline and CTA
  Given the page loads
  Then the hero section spans the full viewport height
  And it displays a background image with a dark overlay
  And a heading reads "Learning Center for Your Kids"
  And there is an "Enroll Now" primary button

Scenario: Hero icon cards
  Given the hero is visible
  Then 3 icon cards are shown below the heading:
    | icon  | label |
    | book  | Learn |
    | play  | Play  |
    | food  | Meal  |
```

### Features / What We Offer

```gherkin
Scenario: Six class type cards
  Given the features section is in view
  Then the heading reads "What We Offer"
  And 6 class cards are displayed in a 3x2 grid:
    | title          | icon type |
    | Music Class    | music     |
    | Math Class     | calculator |
    | English Class  | book      |
    | Reading for Kids | book-open |
    | History Class  | clock     |
    | Active Class   | activity  |
  And each card has an icon, title, and short description
```

### Education CTA Section

```gherkin
Scenario: Parallax CTA banner
  Given the CTA section is in view
  Then it displays "Education for Tomorrow's Leaders"
  And has a "Learn More" button
  And the section has a parallax background image
```

### About Us Section

```gherkin
Scenario: About section with image and text
  Given the about section is in view
  Then the heading reads "About Us"
  And there is descriptive text about the learning center
  And there is an image alongside the text
  And a "Learn More" link or button is present
```

### School News Section

```gherkin
Scenario: News cards grid
  Given the news section is in view
  Then the heading reads "School News"
  And 3 news post cards are displayed
  And each card has an image, date, title, and excerpt
```

### Enroll CTA Section

```gherkin
Scenario: Enrollment call-to-action
  Given the enroll section is in view
  Then it displays "Enroll Your Kids This Summer to get 30% off"
  And has a "Get Started" button
  And the section has a parallax background image
```

### Pricing Section

```gherkin
Scenario: Three pricing plans
  Given the pricing section is in view
  Then the heading reads "Pricing"
  And 3 pricing cards are displayed:
    | plan    | features |
    | Infant  | basic    |
    | Toddler | standard |
    | Lad     | premium  |
  And each card has a plan name, price, feature list, and a "Get Started" button
```

### Footer

```gherkin
Scenario: Footer layout
  Given the footer is visible
  Then it has a dark background
  And it contains brand info, contact details, and quick links
  And a copyright line at the bottom
  And a link to https://www.componentdock.com/ ("Component Dock")

Scenario: Newsletter subscription
  Given the footer newsletter form is visible
  When the user enters an email and clicks Subscribe
  Then the form accepts input (frontend only)
```

### Accessibility

```gherkin
Scenario: Keyboard navigation
  Given the page loads
  Then all interactive elements are keyboard-focusable
  And focus-visible rings appear on buttons and links
  And skip-to-content link is present

Scenario: Screen reader support
  Given the page loads
  Then all images have descriptive alt text
  And form inputs have associated labels
  And heading hierarchy is sequential (h1 > h2 > h3)
```

### Responsive Design

```gherkin
Scenario: Mobile layout
  Given the viewport is 375px wide
  Then the navbar collapses to a hamburger menu
  And the hero text is readable (not overflowing)
  And feature cards stack vertically
  And pricing cards stack vertically
  And the footer columns stack vertically

Scenario: Tablet layout
  Given the viewport is 768px wide
  Then the layout adapts with 2-column grids where appropriate
```

## Verification Checklist

- [ ] All sections render in correct order matching the original
- [ ] Brand colors (#0fb78d green, #4fb0dc blue, #ec661f orange) used correctly
- [ ] Poppins font loaded and applied
- [ ] Hero has background image with overlay
- [ ] Feature cards in 3x2 grid
- [ ] Pricing cards show 3 plans
- [ ] Footer links to https://www.componentdock.com/
- [ ] Responsive: mobile (375px), tablet (768px), desktop (1200px+)
- [ ] No ColorLib references in app code
- [ ] public/CNAME = nurture.free.componentdock.com
- [ ] package.json homepage = https://nurture.free.componentdock.com
- [ ] Tests pass with 100% coverage
- [ ] `npm run verify:app` passes for nurture
