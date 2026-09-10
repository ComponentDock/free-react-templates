# Template: Buildwell (Construction / Architecture)

## Purpose

Recreation of ColorLib **Balay** template as a modern architecture / interior
design studio portfolio site.

- **Source slug:** `balay`
- **Source URL:** https://colorlib.com/wp/template/balay/
- **Preview URL:** https://preview.colorlib.com/theme/balay/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/balay-free-template.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript
- **Deploy target:** `buildwell.free.componentdock.com`

## Design tokens (extracted from preview CSS + screenshot analysis)

### Colors

| Token             | Value                  | Usage                                       |
| ----------------- | ---------------------- | ------------------------------------------- |
| brand-yellow      | `#ffc300`              | Primary accent: hero overlay box, active nav underline, heading accents |
| brand-yellow-light| `#ffc91a`              | Hover accent                                |
| bg-dark           | `#000000`              | Sidebar background, text on light bg        |
| bg-light          | `#ffffff`              | Main content background                     |
| bg-offwhite       | `#fafafa`              | Alternate section bg                        |
| bg-lightgray      | `#f0f0f0`              | Light section bg                            |
| text-primary      | `#000000`              | Body text, headings                         |
| text-white        | `#ffffff`              | Text on dark bg / overlay                   |
| text-muted        | `#999999`              | Secondary text                              |
| text-dark-muted   | `#2c2c2c`              | Dark muted text                             |
| border-light      | `#e6e6e6`              | Divider lines                               |
| overlay-dark      | `rgba(0,0,0,0.4)`      | Parallax section overlay (counters)         |
| footer-text       | `rgba(255,255,255,0.3)`| Footer copyright text                       |

### Typography

| Element   | Family              | Weight      | Size / Transform                            |
| --------- | ------------------- | ----------- | ------------------------------------------- |
| Body      | Quicksand, Arial, sans-serif | 400 | 15px base                                   |
| Heading   | Quicksand           | 400–700     | h1 36px, h2 30px, h3 22px (uppercase used)  |
| Nav links | Quicksand           | 400         | uppercase, letter-spacing: 2px, 12px        |
| Buttons   | Quicksand           | 400         | uppercase, letter-spacing: 2px, 12–13px     |
| Blog meta | Quicksand           | 300         | 12px, uppercase, letter-spacing: 1px        |

### Shapes & spacing

| Element         | Value                               |
| --------------- | ----------------------------------- |
| Button radius   | 30px (pill shape)                   |
| Button padding  | 15px 30px (learn/CTA)              |
| Section padding | 4em–5em vertical                    |
| Counter padding | 3em vertical                        |
| Card radius     | 0 (sharp edges on portfolio cards)  |

### Background treatments

- **Sidebar:** Solid `#000000`, fixed left, ~20% width
- **Hero slider:** Full-width background images with overlay text boxes (yellow accent box)
- **About / Services / Blog:** Solid white `#ffffff`
- **Counters:** Parallax background image (`cover`, `fixed`) with `rgba(0,0,0,0.4)` dark overlay
- **Contact:** Solid white with form
- **Footer:** Positioned absolutely at bottom, centered, muted white text

## Section order (fidelity spec)

1. **Sidebar** (fixed left, dark)
   - Logo: "Buildwell" (bold uppercase)
   - Navigation: Home, Project, About, Services, Blog, Contact
   - Social icons: Facebook, Twitter, Instagram, LinkedIn
   - Copyright text
2. **Hero Slider** (full-width, right of sidebar)
   - 3 slides with interior/architecture background images
   - Each slide: heading + subtitle + "View Project" pill button
   - Slider dots indicator
3. **About Section** ("Who We Are")
   - Left: full-width interior photo
   - Right: "Welcome" subheading, "Who we are" heading, body text, 3 value props (Passionate, Honest Dependable, Always Improving)
4. **Services Section** ("Here are some of my expertise")
   - 4 service cards with icons + titles + descriptions:
     - General Constructing
     - Pre-Construction Design
     - Building & Modeling
     - Construction Management
5. **Services Image Grid**
   - 5 masonry-style background images
6. **Counter Section** (parallax background)
   - 4 counters: Projects, Employees, Constructors, Partners
   - Dark overlay on parallax image
7. **Work / Portfolio** ("My Work / Recent Work")
   - 6 project cards in grid
   - Each: background image, project name, category tags, dimensions
8. **Blog Section** ("Recent Blog")
   - 3 blog entry cards
   - Each: date, category, comment count, title, excerpt
9. **Contact Section** ("Get in Touch!")
   - Body text + contact form
10. **Footer** (Component Dock link)

## Gherkin requirements

### Sidebar

```gherkin
Feature: Fixed dark sidebar navigation

  Scenario: Sidebar is visible and fixed on desktop
    Given the user opens the page on a desktop viewport
    Then a dark sidebar is visible on the left side of the screen
    And the sidebar remains fixed while scrolling

  Scenario: Navigation links are present
    Given the sidebar is rendered
    Then it contains links for Home, Project, About, Services, Blog, and Contact
    And each link has the text styled uppercase with letter-spacing

  Scenario: Logo displays brand name
    Given the sidebar is rendered
    Then the logo text "Buildwell" is displayed at the top
    And the logo is bold and uppercase

  Scenario: Social media icons are present
    Given the sidebar is rendered
    Then social media icons for Facebook, Twitter, Instagram, and LinkedIn are shown
    And each icon links to "#" (placeholder)

  Scenario: Active nav link has yellow underline
    Given the sidebar is rendered
    When the user is on the home section
    Then the "Home" link has a yellow underline indicator
```

### Hero Slider

```gherkin
Feature: Full-width hero image slider

  Scenario: Slider displays background images
    Given the hero section is rendered
    Then 3 slides are present
    And each slide has a full-width background image

  Scenario: Each slide has overlay text
    Given the hero section is rendered
    Then each slide shows a heading, a subtitle, and a "View Project" button
    And the heading text is "An Inspiring Built Space", "Interior Design Studio", or "The National Gallery"

  Scenario: View Project button is pill-shaped
    Given the hero section is rendered
    Then the "View Project" button has a 30px border-radius (pill shape)
    And the button text is uppercase with letter-spacing
    And the button has a white background with black text

  Scenario: Slider dots indicator is present
    Given the hero section is rendered
    Then slider navigation dots are visible at the bottom of the hero area
    And the active dot is yellow, inactive dots are white/gray

  Scenario: Hero section respects sidebar offset
    Given the sidebar is rendered on the left
    Then the hero section occupies the remaining width to the right of the sidebar
```

### About Section

```gherkin
Feature: About section with image and text

  Scenario: About section renders with heading
    Given the about section is rendered
    Then a "Welcome" subheading is displayed
    And a "Who we are" main heading is shown
    And a body paragraph describes the studio

  Scenario: About section displays value propositions
    Given the about section is rendered
    Then 3 value props are displayed: "Passionate", "Honest Dependable", "Always Improving"
    And each value prop has a heading and short description

  Scenario: About section has an accompanying image
    Given the about section is rendered
    Then a full-width interior/architecture image is displayed alongside the text
```

### Services Section

```gherkin
Feature: Services section with icon cards

  Scenario: Services section renders with heading
    Given the services section is rendered
    Then a heading "Here are some of my expertise" is displayed

  Scenario: Four service cards are displayed
    Given the services section is rendered
    Then 4 service cards are shown in a grid
    And each card has an icon, a title, and a description

  Scenario: Service cards contain correct titles
    Given the services section is rendered
    Then the service titles are "General Constructing", "Pre-Construction Design", "Building & Modeling", and "Construction Management"

  Scenario: Service cards have hover animation
    Given the services section is rendered
    When the user hovers over a service card
    Then a fadeInLeft animation effect is triggered
```

### Services Image Grid

```gherkin
Feature: Services image grid

  Scenario: Five background images are displayed
    Given the services image grid is rendered
    Then 5 images are shown in a masonry-style layout
    And each image fills its grid cell as a background
```

### Counter Section

```gherkin
Feature: Parallax counter section

  Scenario: Counter section has parallax background
    Given the counter section is rendered
    Then a background image is displayed with a parallax scroll effect
    And a dark overlay (rgba(0,0,0,0.4)) covers the background

  Scenario: Four counters are displayed
    Given the counter section is rendered
    Then 4 stat counters are shown: Projects, Employees, Constructors, Partners
    And each counter has a numeric value and a label
```

### Work / Portfolio Section

```gherkin
Feature: Portfolio grid

  Scenario: Work section renders with heading
    Given the work section is rendered
    Then a "My Work" / "Recent Work" heading is displayed

  Scenario: Six project cards are shown
    Given the work section is rendered
    Then 6 project cards are displayed in a grid
    And each card has a background image, project name, and category tags

  Scenario: Project cards have correct names
    Given the work section is rendered
    Then the projects are named "Work 01" through "Work 06"
```

### Blog Section

```gherkin
Feature: Blog listing

  Scenario: Blog section renders with heading
    Given the blog section is rendered
    Then a "Recent Blog" heading is displayed

  Scenario: Three blog entries are shown
    Given the blog section is rendered
    Then 3 blog entry cards are displayed
    And each card has a date, category, comment count, title, and excerpt

  Scenario: Blog entry metadata is formatted
    Given a blog entry is rendered
    Then the date is displayed in "Month Day, Year" format
    And the category is shown after a pipe separator
    And the comment count follows another pipe separator
```

### Contact Section

```gherkin
Feature: Contact form

  Scenario: Contact section renders with heading
    Given the contact section is rendered
    Then a "Get in Touch!" heading is displayed
    And body text introduces the contact form

  Scenario: Contact form is present
    Given the contact section is rendered
    Then a "Contact me!" button or form is displayed
```

### Footer

```gherkin
Feature: Footer with Component Dock link

  Scenario: Footer displays Component Dock attribution
    Given the footer is rendered
    Then a link to "https://www.componentdock.com/" is present
    And the link text references "Component Dock"
```

### Responsive behavior

```gherkin
Feature: Mobile responsive layout

  Scenario: Sidebar collapses on mobile
    Given the user opens the page on a mobile viewport (< 768px)
    Then the sidebar collapses or becomes a hamburger menu
    And the main content fills the full width

  Scenario: Services grid stacks on mobile
    Given the services section is rendered on mobile
    Then service cards stack vertically in a single column

  Scenario: Portfolio grid adjusts on mobile
    Given the work section is rendered on mobile
    Then project cards adjust to fewer columns (1-2 per row)
```

## Verification checklist

- [ ] Sidebar: fixed, dark bg, nav links, logo, social icons, copyright
- [ ] Hero: 3-slide carousel with bg images, overlay text, pill buttons, dots
- [ ] About: heading, body text, 3 value props, accompanying image
- [ ] Services: 4 icon cards with titles + descriptions
- [ ] Image grid: 5 masonry-style background images
- [ ] Counters: parallax bg with dark overlay, 4 stat counters
- [ ] Portfolio: 6 project cards with bg images, names, categories
- [ ] Blog: 3 entries with date, category, comments, title, excerpt
- [ ] Contact: heading, body, form/button
- [ ] Footer: Component Dock link
- [ ] Design tokens: `#ffc300` brand yellow, Quicksand font, 30px pill buttons
- [ ] Responsive: sidebar collapses, grids stack on mobile
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
- [ ] `public/CNAME` set to `buildwell.free.componentdock.com`
- [ ] `homepage` in package.json set correctly
- [ ] 100% test coverage
