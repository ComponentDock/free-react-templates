# Template: Alliance (Consulting Agency)

## Purpose

Recreation of ColorLib "Consula" — a consulting agency website template.

- **Source**: https://colorlib.com/wp/template/consula/
- **Preview**: https://preview.colorlib.com/theme/consula/
- **Stack**: Vite · React 19 · Tailwind CSS 4 · TypeScript
- **New name**: `alliance` (apps/alliance, `@free-react-templates/alliance`)
- **Deploy target**: https://alliance.free.componentdock.com

## Design tokens

Extracted from the live preview stylesheet (`css/style.css`):

| Token | Value | Notes |
|-------|-------|-------|
| Font (body) | `"Roboto", sans-serif` | Google Fonts, weights 300–700 |
| Font (icons) | `"icomoon"` | Icon font for inline icons |
| Primary color | `#46ddb0` | Teal/green — buttons, borders, accents, links |
| Secondary color | `#8bc34a` | Lime green — secondary accent |
| Dark text | `#25262a` / `#2b2b2b` / `#333333` | Headings, nav |
| Body text | `#737373` / `#666666` | Paragraphs, descriptions |
| Light background | `#f4f5f9` / `#f8f9fa` / `#edf0f5` | Section alternating bg |
| White | `#fff` | Cards, header, primary bg |
| Border | `#dee2e6` / `#f3f3f4` | Dividers, card borders |
| Button radius | `30px` | Pill-shaped buttons |
| Avatar radius | `50%` | Circular team photos |
| CTA button | bg `#46ddb0`, text `#fff`, hover inverts to bg `#fff`, text `#46ddb0` | |

## Section structure (in order)

1. **Navbar** — Sticky white header. Logo "Alliance" left. Nav links: Home, About Us, Team, Services, Testimonials, Blog, Contact. Phone number + email on the far right.
2. **Hero** — Full-width cover with background image + overlay. Large heading: "We Are The Best Consulting Agency". Subtitle paragraph. "Get Started" teal CTA button. "50 years of experience" counter badge.
3. **About Us** — Two-column: left = image, right = heading "Welcome To Alliance" + description paragraph + "Learn More" teal button. Section has bottom border.
4. **Team** — Light background (`#f8f9fa`). Heading "Our Team". Three team member cards in a row: circular avatar photo, name, role, description paragraph. Cards have no visible border, centered layout.
5. **How It Works** — White background. Heading "How It Works". Three numbered steps in columns: "Innovate", "Create", "Scale". Each step has icon, title, description, and two checklist items with teal checkmarks.
6. **Services** — White background. Heading "Our Services". Six service cards in a 2×3 grid: Business Consulting, Market Analysis, User Monitoring, Insurance Consulting, Financial Investment, Financial Management. Each card has icon, title, description, and "Learn More" teal link.
7. **Testimonials** — Light background. Heading "People Says" / "Testimonials". Slider/carousel of testimonial cards with quote text, author name, and avatar. Four testimonials (John Smith, Christine Aguilar, Robert Spears, Bruce Rogers).
8. **Features/Capabilities** — White background. Two-column feature blocks: "Web & Mobile Specialties" and "Intuitive Thinkers", each with icon, title, description, and "Learn More" link.
9. **Blog** — Light background. Heading "Our Blog Posts". Three blog post cards in a row: featured image, date badge, category tag, title, description, "Continue Reading..." link. Blog posts by Ham Brook and James Phelps.
10. **Contact** — White background. Two-column layout: left = contact form (First Name, Last Name, Email, Subject, Message, Submit button), right = address, phone, email address info blocks with icons. Heading "Our Services" (section label) + "Contact Form".
11. **Footer** — Dark background. Four columns: About text, Quick Links, Follow Us social icons, Subscribe Newsletter form. Copyright bar at bottom with "Made by Colorlib" (replaced with "Made with Component Dock").

## Gherkin requirements

### Navbar

```gherkin
Feature: Navbar

  Scenario: Sticky header with navigation
    Given the user is on the Alliance homepage
    When the page loads
    Then a sticky white navbar is displayed at the top
    And the logo "Alliance" is visible on the left
    And navigation links are visible: Home, About Us, Team, Services, Testimonials, Blog, Contact
    And a phone number and email are displayed on the right side

  Scenario: Navbar sticks on scroll
    Given the user scrolls down the page
    Then the navbar remains fixed at the top with a white background
```

### Hero Section

```gherkin
Feature: Hero Section

  Scenario: Hero displays with heading and CTA
    Given the user is on the Alliance homepage
    Then a full-width hero section is displayed with a background image
    And the heading "We Are The Best Consulting Agency" is visible
    And a description paragraph is visible below the heading
    And a "Get Started" teal button is displayed
    And a "50 years of experience" counter badge is visible

  Scenario: CTA button hover
    Given the user hovers over the "Get Started" button
    Then the button background changes to white
    And the button text color changes to teal
```

### About Us

```gherkin
Feature: About Us Section

  Scenario: About section displays correctly
    Given the user scrolls to the About Us section
    Then a two-column layout is displayed
    And an image is shown on the left
    And the heading "Welcome To Alliance" is displayed on the right
    And a description paragraph is below the heading
    And a "Learn More" teal button is visible
    And the section has a bottom border
```

### Team Section

```gherkin
Feature: Team Section

  Scenario: Team members are displayed
    Given the user scrolls to the Team section
    Then the section has a light background
    And the heading "Our Team" is displayed
    And three team member cards are shown in a row
    And each card has a circular avatar, name, role, and description

  Scenario: Team member card content
    Given the user views the Team section
    Then team member names are displayed (John Rooster, Tom Sharp, Winston Hodson)
    And their roles are displayed (Co-Founder President, Co-Founder COO, Marketing)
```

### How It Works

```gherkin
Feature: How It Works Section

  Scenario: Three-step process is displayed
    Given the user scrolls to the How It Works section
    Then the heading "How It Works" is displayed
    And three columns are shown: Innovate, Create, Scale
    And each column has an icon, title, description, and two checklist items
    And checklist items have teal checkmark icons
```

### Services

```gherkin
Feature: Services Section

  Scenario: Six service cards in grid
    Given the user scrolls to the Services section
    Then the heading "Our Services" is displayed
    And six service cards are shown in a 2x3 grid
    And each card has an icon, title, description, and "Learn More" link

  Scenario: Service cards content
    Given the user views the Services section
    Then the services are: Business Consulting, Market Analysis, User Monitoring, Insurance Consulting, Financial Investment, Financial Management
```

### Testimonials

```gherkin
Feature: Testimonials Section

  Scenario: Testimonial slider displays
    Given the user scrolls to the Testimonials section
    Then the section heading "People Says" and "Testimonials" is displayed
    And a carousel of testimonial cards is shown
    And each card has a quote, author name, and avatar

  Scenario: Testimonial content
    Given the user views the Testimonials section
    Then testimonials are from John Smith, Christine Aguilar, Robert Spears, and Bruce Rogers
```

### Features

```gherkin
Feature: Features Section

  Scenario: Feature blocks displayed
    Given the user scrolls to the Features section
    Then two feature blocks are shown
    And each block has an icon, title, description, and "Learn More" link
    And the features are "Web & Mobile Specialties" and "Intuitive Thinkers"
```

### Blog

```gherkin
Feature: Blog Section

  Scenario: Blog posts displayed
    Given the user scrolls to the Blog section
    Then the heading "Our Blog Posts" is displayed
    And three blog post cards are shown in a row
    And each card has an image, date badge, category, title, description, and "Continue Reading" link

  Scenario: Blog post authors
    Given the user views the Blog section
    Then blog posts are by Ham Brook and James Phelps
```

### Contact

```gherkin
Feature: Contact Section

  Scenario: Contact form and info displayed
    Given the user scrolls to the Contact section
    Then a contact form is displayed on the left with fields: First Name, Last Name, Email, Subject, Message
    And a submit button is visible
    And contact information is displayed on the right: address, phone, email
```

### Footer

```gherkin
Feature: Footer

  Scenario: Footer layout
    Given the user scrolls to the footer
    Then the footer has a dark background
    And four columns are displayed: About, Quick Links, Follow Us, Subscribe Newsletter
    And a newsletter subscription form is present
    And a copyright bar is at the bottom

  Scenario: Footer attribution
    Given the user views the footer
    Then the copyright text includes "Made with Component Dock"
    And a link to https://www.componentdock.com/ is present
```

## Verification checklist

- [ ] All sections match the original order (11 sections)
- [ ] Brand color #46ddb0 is used consistently for CTAs and accents
- [ ] Font is Roboto (via Google Fonts link in index.html)
- [ ] All buttons have border-radius 30px (pill shape)
- [ ] Button hover inverts teal/white colors
- [ ] Team member avatars are circular (50% radius)
- [ ] Section backgrounds alternate between white and light gray
- [ ] Navbar is sticky with white background
- [ ] Hero has background image with overlay
- [ ] Services grid is 2×3
- [ ] Footer has 4 columns + copyright bar
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code
- [ ] Placeholder images use picsum.photos
- [ ] Icons use lucide-react
