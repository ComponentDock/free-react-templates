# Template: InnerGlow (Yoga / Wellness)

## Purpose

Recreation of ColorLib **Ahana** — a yoga/wellness HTML template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page application.

- **Source template:** [Ahana](https://colorlib.com/wp/template/ahana/)
- **Live preview:** https://preview.colorlib.com/theme/ahana/
- **Screenshot reference:** https://colorlib.com/wp/wp-content/uploads/sites/2/ahana-free-template.jpg
- **New name:** `innerglow` (app folder `apps/innerglow`, package `@free-react-templates/innerglow`)

## Design tokens

Extracted from the preview stylesheet (`css/style.css`):

| Token | Value | Notes |
|-------|-------|-------|
| Font family (body) | `"Open Sans", sans-serif` | Google Fonts import |
| Font family (headings) | `"Playfair Display", serif` | h2, h3, section titles |
| Brand primary | `#f65d5d` | Coral/red — gradient start, header icons, hover states |
| Brand secondary | `#fdb07d` | Peach — gradient end |
| Gradient | `linear-gradient(145deg, #f65d5d 0%, #fdb07d 100%)` | Hero section, review overlay, accent elements |
| Reverse gradient | `linear-gradient(145deg, #fdb07d 0%, #f65d5d 100%)` | Buttons (gradient fill) |
| Text heading color | `#333333` | h1–h6 |
| Text body color | `#666666` | p elements |
| Button shape | `border-radius: 50px` | Pill-shaped |
| Button padding | `14px 30px` | |
| Button font | `16px, 600 weight, uppercase, letter-spacing: 1px` | |
| Section padding | `padding-top: 110px; padding-bottom: 105px` | `.spad` class |
| Section title size | `38px` | Playfair Display, uppercase |
| Container max-width | `1200px` | |
| Header background | `#fff` (top bar), transparent overlay (bottom nav on hero) | |

### Section backgrounds

- Hero: gradient overlay `linear-gradient(145deg, #f65d5d, #fdb07d)`
- About / Classes / Trainer / Events / Pricing / Sign-up: white `#fff`
- Review / Testimonial: background image with gradient overlay (same coral-to-peach)
- Gallery: image slider, no solid background
- Footer: dark (implied by `.text-white` styling and dark footer section)

## Gherkin requirements

### Navbar

```gherkin
Feature: Navigation Bar

  Scenario: Top info bar displays contact details
    Given the user visits the page
    Then the top bar shows address "184 Main Collins Street"
    And shows phone "(965) 436 3274"
    And shows hours "Mon - Fri: 6:30am - 07:45pm"

  Scenario: Navigation links are present
    Given the user visits the page
    Then the navbar contains links: Home, About, Classes, Trainers, Events, Blog, Contact

  Scenario: Logo is visible
    Given the user visits the page
    Then the logo "InnerGlow" is displayed in the header

  Scenario: Mobile hamburger menu toggles navigation
    Given the viewport is mobile-width
    When the user clicks the hamburger menu icon
    Then the navigation menu becomes visible
```

### Hero Section

```gherkin
Feature: Hero Section

  Scenario: Hero displays gradient background
    Given the user visits the page
    Then the hero section has a coral-to-peach gradient background

  Scenario: Hero shows headline text
    Given the user visits the page
    Then the hero displays a yoga-related headline

  Scenario: Hero has call-to-action button
    Given the user visits the page
    Then a "Register now" CTA button is visible in the hero

  Scenario: Hero social links are visible
    Given the user visits the page
    Then social media icons (Facebook, Instagram, Twitter, LinkedIn) appear in the hero sidebar
```

### About Section

```gherkin
Feature: About Section

  Scenario: About section has section title
    Given the user scrolls to the About section
    Then the section title reads "Welcome to InnerGlow"
    And a tagline about yoga practice is displayed

  Scenario: About section shows feature items
    Given the user scrolls to the About section
    Then three feature items are displayed: "Full Rejuvenation", "Extension of Spring", "Against Aging"
    And each feature has an icon and description

  Scenario: About section has explore CTA
    Given the user scrolls to the About section
    Then an "Explore More" button is visible
```

### Classes Section

```gherkin
Feature: Classes Section

  Scenario: Classes section displays class cards
    Given the user scrolls to the Classes section
    Then a carousel of class cards is displayed

  Scenario: Each class card shows details
    Given a class card is visible
    Then it shows the class name, schedule, time range, description, trainer name, and trainer role
    And a "Book Now" button is present

  Scenario: Section title reads "Popular Classes"
    Given the user scrolls to the Classes section
    Then the section title reads "Popular Classes"
```

### Trainers Section

```gherkin
Feature: Trainers Section

  Scenario: Trainers section displays trainer profiles
    Given the user scrolls to the Trainers section
    Then a carousel of trainer cards is shown

  Scenario: Each trainer card shows details
    Given a trainer card is visible
    Then it shows the trainer name, role, bio, and social links (Facebook, Instagram, Twitter, LinkedIn)

  Scenario: Section title reads "Our Trainers"
    Given the user scrolls to the Trainers section
    Then the section title reads "Our Trainers"
```

### Testimonial / Review Section

```gherkin
Feature: Testimonial Section

  Scenario: Testimonial section has gradient background
    Given the user scrolls to the Testimonials section
    Then the section has a coral-to-peach gradient overlay on a background image

  Scenario: Testimonials are displayed in a carousel
    Given the user scrolls to the Testimonials section
    Then a carousel of testimonials is shown

  Scenario: Each testimonial shows quote, name, and role
    Given a testimonial card is visible
    Then it shows a quoted text, person name, and role/title
```

### Events Section

```gherkin
Feature: Events Section

  Scenario: Events section shows upcoming events
    Given the user scrolls to the Events section
    Then the section title reads "Upcoming Events"

  Scenario: Events section has video feature
    Given the user scrolls to the Events section
    Then a video thumbnail with a play button is visible on the left

  Scenario: Event items show details
    Given an event item is visible
    Then it shows the event name, host, date, and location
```

### Pricing Section

```gherkin
Feature: Pricing Section

  Scenario: Pricing section displays four plans
    Given the user scrolls to the Pricing section
    Then four pricing cards are displayed

  Scenario: Pricing plans have names and prices
    Given the pricing cards are visible
    Then plan names are: "Beginner" ($59), "Intermediate" ($99), "Advanced" ($159), "Professional" ($199)
    And each shows "Per month"

  Scenario: Pricing plans list features
    Given a pricing card is visible
    Then it lists features: "Take Up To 7 Classes", "Available To Anyone", "Towels Included", "Never Expires"

  Scenario: Pricing plans have CTA buttons
    Given a pricing card is visible
    Then a "Get Started" button is present
```

### Sign-up / Contact Section

```gherkin
Feature: Sign-up Section

  Scenario: Sign-up section has map and form
    Given the user scrolls to the Sign-up section
    Then a Google Maps embed is shown on the left
    And a contact form is shown on the right

  Scenario: Contact form has fields
    Given the contact form is visible
    Then it contains: First Name, Last Name, Email, Phone Number, Message textarea
    And a "Get Started" submit button
```

### Gallery Section

```gherkin
Feature: Gallery Section

  Scenario: Gallery displays image carousel
    Given the user scrolls to the Gallery section
    Then an image carousel/slider is displayed

  Scenario: Gallery images have Instagram hover
    Given a gallery image is hovered
    Then an Instagram icon and handle are shown as overlay
```

### Footer

```gherkin
Feature: Footer

  Scenario: Footer has four columns
    Given the user scrolls to the footer
    Then four columns are displayed: About (logo + contact), Company links, About Us links, Open Times + newsletter

  Scenario: Footer shows social links
    Given the user scrolls to the footer
    Then social media icons (Facebook, Instagram, Twitter, LinkedIn) are displayed

  Scenario: Footer shows copyright
    Given the user scrolls to the footer bottom
    Then a copyright notice is displayed

  Scenario: Footer links to Component Dock
    Given the user scrolls to the footer
    Then a link to "https://www.componentdock.com/" is present (branded as "Component Dock")
```

## Verification checklist

- [ ] Spec matches section order from ColorLib preview: Navbar → Hero → About → Classes → Trainers → Testimonial → Events → Pricing → Sign-up → Gallery → Footer
- [ ] Design tokens extracted from live preview CSS match implementation
- [ ] Brand gradient (#f65d5d → #fdb07d) applied to hero, review overlay, and accent elements
- [ ] Playfair Display used for headings; Open Sans for body
- [ ] Pill-shaped buttons (border-radius: 50px) with gradient fill
- [ ] Section padding matches `.spad` (110px / 105px)
- [ ] Footer includes Component Dock link
- [ ] No ColorLib references in app code
- [ ] Placeholder images via `picsum.photos/seed/<template>-<n>/<w>/<h>`
- [ ] Social icons via `lucide-react`
- [ ] Google Fonts loaded via `<link>` in `index.html`
