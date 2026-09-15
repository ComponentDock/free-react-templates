# Template: Benev (Charity / Non-profit)

## Purpose

Recreation of ColorLib "Charity Works" — a charity foundation website template
with a hero slider, service icons, about section, causes/cases grid, event cards,
team section, newsletter CTA, testimonials, and blog area.

- **Source**: [ColorLib Charity Works](https://colorlib.com/wp/template/charity-works/)
- **Preview**: https://preview.colorlib.com/theme/charityworks/
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/charityworks-free-template.jpg
- **Stack**: Vite · React 19 · Tailwind CSS 4 · TypeScript
- **New name**: `benev` (apps/benev, `@free-react-templates/benev`)

## Design tokens (extracted from preview CSS)

| Token            | Value                            | Source                          |
| ---------------- | -------------------------------- | ------------------------------- |
| Brand primary    | `#09cc7f` (green)                | `.btn` background, icons        |
| Brand hover      | `#24ac75` (darker green)         | `.btn::before` hover            |
| Brand dark       | `#1e9d78` (deep green)           | secondary accents               |
| Heading color    | `#072366` (dark navy)            | h2–h6                          |
| Hero heading     | `#002d5b` (navy)                 | `.hero__caption h1`             |
| Body text        | `#64676c` (medium gray)          | paragraphs, body copy           |
| Light bg         | `#f8fcff` (very light blue)      | `.service-area`, `.our-cases-area` |
| Section title    | `#09cc7f` (green accent)         | `.section-tittle span`          |
| White            | `#ffffff`                        | card backgrounds                |
| Font primary     | `'Muli', sans-serif`             | all text (headings + body)      |
| Button radius    | `0` (rectangular, no rounding)   | `.btn`                          |
| Button padding   | `27px 44px`                      | `.btn`                          |
| Button hover     | green sweep left→right via `::before` | pseudo-element transition   |
| Card border-radius | `6px`                          | `.single-cat`                   |
| Icon circle      | `90px` round, `#09cc7f` bg      | `.cat-icon span`                |
| Section bg parallax | `background-attachment: fixed` | `.section-bg`                   |
| Blue accent      | `#38a4ff`                        | secondary highlights            |

## Sections (in order, from preview DOM)

1. **Header** — Top info bar (phone, email, language selector) + sticky nav bar (logo, nav links: Home, About, Latest Causes, Social Events, Blog; hamburger for mobile)
2. **Hero Slider** — OwlCarousel slider, full-width bg images, h1 "Our Helping to the world." + paragraph + "Donate Now" CTA button (green)
3. **Services** — 3-column grid, each card: icon in green circle (90px) + heading (Clean Water, Education, Healthy Food) + paragraph. Light blue bg (`#f8fcff`)
4. **About** — Left: large image + smaller overlay image. Right: "We Are In A Mission To Help The Helpless" (h2) + mission paragraphs + "Learn More" CTA button
5. **Causes/Cases** — 3-column grid of cause cards with images, hover overlay, heading + short text. Cards: Education, Healthy Food, Drinking Water. Light blue bg
6. **Events** — 3-column grid of event cards (parallax background image, dark overlay). Each: date badge, icon, heading ("Donation is Hope", "A hand for Children", "Help for Children") + CTA
7. **Team/Volunteers** — 4-column grid of volunteer cards. Each: photo, name, role. Names: Bruce Roberts, Robart Rechard, Brendon Tailor, Walshr Hasgt
8. **Newsletter CTA** — Full-width parallax background. Centered heading "Lets Change The World With Humanity" + "Become A Volunteer" button
9. **Testimonials** — White bg, testimonial slider with user quotes
10. **Blog** — 3-column grid of blog post cards with images, date badge, title, excerpt
11. **Footer** — Dark bg, 3-column layout: Contact Info (phone, email, address), Important Links, Newsletter form. Bottom: copyright + Component Dock link

## Gherkin requirements

### Feature: Header Navigation

```gherkin
Scenario: Header displays top info bar and navigation
  Given the user loads the page
  Then the header shows phone number and email in the top bar
  And the navigation links are visible: "home", "about", "latest causes", "social events", "blog"
  And the logo is displayed on the left

Scenario: Header becomes sticky on scroll
  Given the user scrolls down the page
  Then the header bar sticks to the top of the viewport

Scenario: Mobile hamburger menu opens
  Given the viewport is narrow (mobile)
  When the user taps the hamburger icon
  Then a mobile menu opens with navigation links
```

### Feature: Hero Slider

```gherkin
Scenario: Hero displays heading and CTA
  Given the user is on the homepage
  Then the hero section shows a headline "Our Helping to the world."
  And a paragraph description is visible below the headline
  And a "Donate Now" green CTA button is visible

Scenario: Hero slider cycles through slides
  Given the hero slider is visible
  When the slider advances
  Then the next slide is shown with a different background image
```

### Feature: Services Section

```gherkin
Scenario: Services display 3 service cards
  Given the user scrolls to the services section
  Then 3 service cards are visible in a grid
  And each card has a green circular icon, a heading, and a description
  And the section background is light blue (#f8fcff)

Scenario: Service cards have hover effect
  Given a service card is visible
  When the user hovers over the card
  Then the card shows a green bottom border animation
```

### Feature: About Section

```gherkin
Scenario: About section displays mission statement
  Given the user scrolls to the about section
  Then the heading "We Are In A Mission To Help The Helpless" is visible
  And mission paragraph text is displayed
  And a "Learn More" CTA button is visible
  And images are displayed on the left side
```

### Feature: Causes/Cases Section

```gherkin
Scenario: Causes display 3 cause cards
  Given the user scrolls to the causes section
  Then 3 cause cards are visible in a grid
  And each card has an image, heading, and short description
  And the headings are: "Ensure Education For Every Poor Children", "Providing Healthy Food For The Children", "Supply Drinking Water For The People"

Scenario: Cause cards show hover overlay
  Given a cause card is visible
  When the user hovers over the card
  Then an overlay effect appears on the card image
```

### Feature: Events Section

```gherkin
Scenario: Events display 3 event cards on parallax background
  Given the user scrolls to the events section
  Then a parallax background image is visible
  And 3 event cards are displayed
  And each card has a date badge, icon, heading, and CTA
  And the headings are: "Donation is Hope", "A hand for Children", "Help for Children"
```

### Feature: Team/Volunteers Section

```gherkin
Scenario: Team displays 4 volunteer cards
  Given the user scrolls to the team section
  Then 4 volunteer cards are visible in a grid
  And each card shows a photo, name, and role
  And the names are: "Bruce Roberts", "Robart Rechard", "Brendon Tailor", "Walshr Hasgt"
```

### Feature: Newsletter CTA

```gherkin
Scenario: Newsletter CTA displays with parallax background
  Given the user scrolls to the newsletter section
  Then a parallax background image is visible
  And the heading "Lets Change The World With Humanity" is displayed
  And a "Become A Volunteer" button is visible
```

### Feature: Testimonials

```gherkin
Scenario: Testimonials slider shows user quotes
  Given the user scrolls to the testimonials section
  Then a testimonial slider is visible
  And each slide shows a user quote with attribution
```

### Feature: Blog Section

```gherkin
Scenario: Blog displays 3 post cards
  Given the user scrolls to the blog section
  Then 3 blog post cards are visible in a grid
  And each card has an image, date badge, title, and excerpt
```

### Feature: Footer

```gherkin
Scenario: Footer displays contact info, links, and newsletter
  Given the user scrolls to the footer
  Then contact information is visible (phone, email, address)
  And important links are displayed
  And a newsletter signup form is visible
  And the copyright line includes a link to Component Dock
```

## Verification checklist

- [ ] All sections render in the correct order (11 sections)
- [ ] Hero slider cycles through slides with background images
- [ ] Service cards display with green circular icons and hover animation
- [ ] About section shows mission text with images
- [ ] Causes grid shows 3 cards with hover overlay
- [ ] Events section has parallax background and 3 event cards
- [ ] Team section shows 4 volunteer cards
- [ ] Newsletter CTA has parallax background
- [ ] Testimonials slider works
- [ ] Blog grid shows 3 post cards
- [ ] Footer has 3-column layout with Component Dock link
- [ ] Mobile responsive: hamburger menu, single-column stacking
- [ ] Brand color `#09cc7f` used consistently for CTAs and accents
- [ ] Font: Muli (loaded via Google Fonts)
- [ ] No ColorLib references in app code
