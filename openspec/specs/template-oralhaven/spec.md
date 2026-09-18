# Template: OralHaven (Dental Clinic)

## Purpose

OralHaven is a multi-section dental clinic landing page in the
free-react-templates monorepo. It is a React recreation of the ColorLib
"Dentist" free template (source: https://colorlib.com/wp/template/dentist/),
built under a DIFFERENT name (**OralHaven**), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a Bootstrap 4 single-page site with a dark hero banner,
overlapping opening-hours card, 4-column services, dark split about section,
testimonial carousel, team grid, feature list, appointment form, blog
previews, and a dark footer with newsletter. Font is Poppins throughout.
The dominant brand color is a vivid green (#67bc00) used on buttons, icons,
highlights, and gradients.

**Preview URL**: https://preview.colorlib.com/theme/dentist/

## Design tokens

Extracted from the live preview's stylesheets (`css/main.css`).

### Fonts

| Role      | Font family        | Weights                 |
| --------- | ------------------ | ----------------------- |
| Body / UI | Poppins, sans-serif | 300, 400, 500, 600, 700 |

Use Google Fonts `<link>` for Poppins.

### Colors

| Token              | Hex / Value                       | Usage                                           |
| ------------------ | --------------------------------- | ----------------------------------------------- |
| brand green        | `#67bc00`                         | Primary buttons, icons, highlights, hover states |
| gradient start     | `#ade600`                         | Button gradient, main-menu background            |
| gradient end       | `#62b900`                         | Button gradient end                              |
| dark navy          | `#04091e`                         | About section bg, appointment bg, footer bg      |
| light off-white    | `#f9f9ff`                         | Section backgrounds, inputs, open-hour bg        |
| heading text       | `#222`                            | h1–h6                                            |
| body text          | `#777`                            | Paragraph text, muted text                       |
| white              | `#fff`                            | Nav text, banner text, footer text               |
| social icon green  | `#8acd33`                         | Navbar social icons                              |
| selection green    | `#67bc00`                         | `::selection` background                         |

### Layout & Components

- **Header**: Fixed top bar with logo left, nav links center, social icons right. Background: white, scrolls with shadow. Nav links: white (on dark banner) → uppercase, Poppins 500, 12px.
- **Banner (Hero)**: Full-width, background-image with dark overlay `rgba(4,9,30,0.85)`. Centered: subtitle h6 uppercase (letter-spacing 2px), h1 48px bold white, paragraph, green CTA button `.primary-btn` (border-radius 25px, green gradient bg).
- **Opening Hours**: White card overlapping banner by -100px margin-top, z-index 2. Rounded card (border-radius 10px), shadow. Heading, "We are open Now" with green dot, 3-row schedule (Mon-Fri, Sat, Sun).
- **Services**: 4-column grid. Image + h4 title + paragraph. Hover: h4 turns green. White bg.
- **About**: Dark navy split layout (left 48% image, right text). h1 white, two sub-cards (Expert Services, Great Support) with green Linearicons.
- **Testimonials**: Carousel of cards with border, radius 10px, avatar + quote + name + role. Dots: grey default, green active.
- **Team**: 4-column grid on `#f9f9ff` bg. Image cards with gradient overlay on hover (green gradient, name + role).
- **Features**: 6 items, 2-column layout. Green Linearicons + h4 title + paragraph. Uppercase titles.
- **Appointment**: Dark navy split layout (left image, right form). Form inputs: transparent bg, border `#505362`, white text. Submit button: green gradient, border-radius 0 in this context.
- **Blog**: 3-column grid. Image + date badge (black bg) + h4 title. Hover: h4 green, image scale 1.1.
- **Footer**: Dark navy (`#04091e`) bg, 100px top padding. 3 columns: Top Products links, Contact info (address + phone), Newsletter (email input + green subscribe button). Bottom bar: copyright left, social icons right.
- **Buttons**: `.primary-btn` — green gradient bg (`linear-gradient(0deg, #ade600, #62b900)`), white text, border-radius 25px, padding 0 30px, height 42px line-height. Hover: white bg, green border. `.header-btn` variant in banner: solid green `#67bc00`, border-radius 0.

## Gherkin requirements

### Scenario: Header navigation

```gherkin
Feature: OralHaven Header

  Background:
    Given the OralHaven page is loaded

  Scenario: Logo is visible
    Then a logo image should be visible in the header

  Scenario: Navigation links are present
    Then the header should contain links for Home, About, Services, Blog, and Contact

  Scenario: Header is fixed on scroll
    When the user scrolls down
    Then the header should remain fixed at the top of the viewport

  Scenario: Header gains shadow on scroll
    When the user scrolls past the banner
    Then the header should display a shadow
```

### Scenario: Banner / Hero section

```gherkin
Feature: OralHaven Banner

  Background:
    Given the OralHaven page is loaded

  Scenario: Hero heading is visible
    Then the banner should display a main heading about dental service

  Scenario: Hero subtitle is visible
    Then the banner should display a subtitle above the heading

  Scenario: Hero paragraph is visible
    Then the banner should display descriptive paragraph text

  Scenario: CTA button is present
    Then a "Get Started" button should be visible in the banner

  Scenario: Banner has dark overlay
    Then the banner background should have a dark overlay
```

### Scenario: Opening Hours section

```gherkin
Feature: OralHaven Opening Hours

  Background:
    Given the OralHaven page is loaded

  Scenario: Opening hours heading is visible
    Then the opening hours section should display "Opening Hours"

  Scenario: Open status indicator is shown
    Then a green dot with "We are open Now" should be visible

  Scenario: Schedule is displayed
    Then a 3-row schedule should show Monday–Friday, Saturday, and Sunday hours
```

### Scenario: Services section

```gherkin
Feature: OralHaven Services

  Background:
    Given the OralHaven page is loaded

  Scenario: Four services are displayed
    Then 4 service cards should be visible in a row

  Scenario: Each service has an image
    Then each service card should display an image

  Scenario: Each service has a title
    Then each service card should display a heading

  Scenario: Each service has a description
    Then each service card should display a paragraph
```

### Scenario: About section

```gherkin
Feature: OralHaven About

  Background:
    Given the OralHaven page is loaded

  Scenario: About section has dark background
    Then the about section should have a dark navy background

  Scenario: About heading is visible
    Then the about section should display a heading about who they are

  Scenario: About has two feature sub-cards
    Then two sub-cards should be visible in the about section
    And each sub-card should have an icon, heading, and paragraph
```

### Scenario: Testimonials section

```gherkin
Feature: OralHaven Testimonials

  Background:
    Given the OralHaven page is loaded

  Scenario: Testimonials heading is visible
    Then the testimonials section should display a heading about client feedback

  Scenario: Testimonial cards are rendered
    Then at least 3 testimonial cards should be visible

  Scenario: Each testimonial has avatar, quote, name, and role
    Then each testimonial card should show an avatar image, a quote paragraph, a name heading, and a role paragraph

  Scenario: Carousel dots are present
    Then carousel navigation dots should be visible below the testimonials
```

### Scenario: Team section

```gherkin
Feature: OralHaven Team

  Background:
    Given the OralHaven page is loaded

  Scenario: Team section has light background
    Then the team section should have a light off-white background

  Scenario: Team member cards are displayed
    Then 4 team member cards should be visible

  Scenario: Hover reveals gradient overlay
    When the user hovers over a team member card
    Then a green gradient overlay should appear with the member name and role
```

### Scenario: Features section

```gherkin
Feature: OralHaven Features

  Background:
    Given the OralHaven page is loaded

  Scenario: Six features are displayed
    Then 6 feature items should be visible

  Scenario: Each feature has an icon
    Then each feature should display a green Linearicon icon

  Scenario: Each feature has a title and description
    Then each feature should display an uppercase heading and a paragraph
```

### Scenario: Appointment section

```gherkin
Feature: OralHaven Appointment

  Background:
    Given the OralHaven page is loaded

  Scenario: Appointment section has dark background
    Then the appointment section should have a dark navy background

  Scenario: Appointment form is visible
    Then a form with name, email, phone, and message fields should be visible

  Scenario: Submit button is present
    Then a submit button should be visible in the appointment form
```

### Scenario: Blog section

```gherkin
Feature: OralHaven Blog

  Background:
    Given the OralHaven page is loaded

  Scenario: Blog posts are displayed
    Then 3 blog post cards should be visible

  Scenario: Each blog post has image, date badge, and title
    Then each blog card should show an image, a date badge, and a heading
```

### Scenario: Footer

```gherkin
Feature: OralHaven Footer

  Background:
    Given the OralHaven page is loaded

  Scenario: Footer has dark background
    Then the footer should have a dark navy background

  Scenario: Footer has three columns
    Then the footer should display three columns: links, contact info, and newsletter

  Scenario: Newsletter form is present
    Then a newsletter email input and subscribe button should be visible

  Scenario: Copyright line links Component Dock
    Then the footer bottom should contain a link to componentdock.com

  Scenario: Social icons are present
    Then 4 social media icons should be visible in the footer bottom
```

## Verification checklist

- [ ] Poppins font loaded via Google Fonts link in index.html
- [ ] Brand green #67bc00 used for buttons, icons, highlights
- [ ] Dark navy #04091e used for about, appointment, and footer sections
- [ ] Green gradient (linear-gradient 0deg #ade600 → #62b900) on primary buttons
- [ ] Header: fixed, white bg, shadow on scroll, logo + nav + social
- [ ] Banner: full-width, dark overlay, centered heading + CTA
- [ ] Opening hours: overlapping white card with schedule
- [ ] Services: 4-column grid with images + titles + descriptions
- [ ] About: dark split layout (image left, text right, sub-cards)
- [ ] Testimonials: card carousel with avatars + quotes
- [ ] Team: 4-column grid with hover gradient overlay
- [ ] Features: 6 items with green Linearicons
- [ ] Appointment: dark split layout with form
- [ ] Blog: 3-column grid with date badges
- [ ] Footer: 3-column dark section, newsletter, copyright links Component Dock
- [ ] All placeholder images use picsum.photos
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] CNAME: oralhaven.free.componentdock.com
- [ ] Package name: @free-react-templates/oralhaven
