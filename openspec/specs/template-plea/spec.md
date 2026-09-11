# Template: Plea (Counseling / Legal Services)

## Purpose

Recreation of ColorLib's **Counselor** template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page application.

- **Source:** https://colorlib.com/wp/template/counselor/
- **Preview:** https://preview.colorlib.com/theme/counselor/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/counselor-free-template.jpg
- **New name:** `plea` (app: `apps/plea`, package: `@free-react-templates/plea`)
- **Surge target:** `https://plea.free.componentdock.com`

### Design tokens (extracted from live preview CSS `css/style.css`)

| Token | Value | Usage |
|-------|-------|-------|
| Brand color | `#589167` (green) | Primary buttons, accent highlights, icon backgrounds |
| Text primary | `#1a1a1a` | Headings, body text |
| Text secondary | `#6c757d` | Subtitles, muted copy |
| Background white | `#ffffff` | Main content sections |
| Background warm | `#f5f4f0` | Alternating section backgrounds (warm off-white) |
| Background light gray | `#f7f7f7` | Light sections (pricing) |
| Footer background | `#1a1a1a` (dark) | Footer area |
| Top bar background | `#589167` (green) | Phone/email bar |
| Navbar background | `#1a1a1a` (dark) | Sticky navigation |
| Font family | `"Roboto", Arial, sans-serif` | All text (weights 300, 400, 500, 700) |
| Button border-radius | `0px` (sharp/square) | Primary and white buttons |
| Button primary bg | `#589167` | CTA buttons |
| Button primary hover | `#4a7d59` (darker green) | Hover state |
| Icon font | Font Awesome 4.7 | Social icons, feature icons, arrows |

## Design tokens (visual analysis from screenshot)

- Professional counseling/therapy aesthetic — calming green palette
- Clean, corporate layout with ample whitespace
- Dark navbar and footer contrast with light content sections
- Hero has a full-width background image with dark overlay and parallax
- Feature boxes use colored icon backgrounds with green brand color
- Testimonials in an owl carousel with circular avatars
- Pricing cards on a light gray background
- Contact form overlaid on a background image with dark overlay
- Blog section with card-style entries

## Gherkin requirements

### Scenario: Top bar renders contact info and social links

```gherkin
Feature: Top bar
  Scenario: Displays phone, email, and social icons
    Given the user loads the page
    Then a top bar shows phone number "+00 1234 567"
    And it shows email "youremail@email.com"
    And it displays social media icons for Facebook, Twitter, Instagram, Dribbble
```

### Scenario: Navbar navigation

```gherkin
Feature: Navbar
  Scenario: Sticky dark navbar with brand and links
    Given the user loads the page
    Then a dark navbar shows the brand name "Plea"
    And it contains navigation links: Home, About, Practice Areas, Attorney, Blog, Contact
    And the navbar becomes sticky on scroll
```

### Scenario: Hero section

```gherkin
Feature: Hero
  Scenario: Full-width hero with background image, heading, and CTA
    Given the user loads the page
    Then a hero section displays with a background image and dark overlay
    And the heading reads "Counseling For Your Better Life"
    And a subtitle describes counseling services
    And a CTA button links to the appointment section
```

### Scenario: Intro feature boxes

```gherkin
Feature: Intro features
  Scenario: Three feature boxes with icons and labels
    Given the user scrolls to the intro section
    Then three feature boxes are displayed in a row
    And they show "100% Confidential", "Qualified Team", "Individual Approach"
    And each has an icon with a colored background
```

### Scenario: How It Works steps

```gherkin
Feature: How It Works
  Scenario: Three-step process displayed
    Given the user scrolls to the "How It Works" section
    Then three steps are shown: "Make Schedule", "Start Discussion", "Enjoy Plan"
    And each step has an icon and brief description
    And steps are connected visually (arrows or numbering)
```

### Scenario: About section

```gherkin
Feature: About section
  Scenario: Split layout with image and text
    Given the user scrolls to the about section
    Then a split layout shows an image on the left and text on the right
    And the heading reads "Best Counseling Funding Network Worldwide"
    And the text block has a light background
```

### Scenario: Services section

```gherkin
Feature: Services
  Scenario: Three-column service cards
    Given the user scrolls to the services section
    Then three service cards are displayed in a row
    And each card has an icon, title, and description
    And cards use the brand green color for icon accents
```

### Scenario: Testimonials carousel

```gherkin
Feature: Testimonials
  Scenario: Carousel with client quotes
    Given the user scrolls to the testimonials section
    Then a carousel shows client testimonials
    And each testimonial has a quote, client name, and avatar
    And the section has a dark overlay background
```

### Scenario: Pricing section

```gherkin
Feature: Pricing
  Scenario: Three pricing tiers on light background
    Given the user scrolls to the pricing section
    Then three pricing cards are displayed
    And the section has a light gray background
    And each card shows a plan name, price, features list, and CTA button
```

### Scenario: Appointment contact form

```gherkin
Feature: Appointment form
  Scenario: Contact form with background image
    Given the user scrolls to the appointment section
    Then a form displays with fields: Name, Email, Phone, Date, Subject, Message
    And the section has a background image with dark overlay
    And a submit button uses the brand green color
```

### Scenario: Blog section

```gherkin
Feature: Blog
  Scenario: Recent blog posts displayed
    Given the user scrolls to the blog section
    Then three blog post cards are shown
    And each has an image, date, title, and excerpt
```

### Scenario: Footer

```gherkin
Feature: Footer
  Scenario: Multi-column footer with links and contact
    Given the user scrolls to the footer
    Then the footer shows the brand name "Plea" with social icons
    And it has columns: Explore, Legal, Company, Have a Questions
    And contact info shows address, phone, and email
    And a "Made with Component Dock" attribution links to https://www.componentdock.com/
```

## Verification checklist

- [ ] App builds without errors (`npm run build` in `apps/plea`)
- [ ] All sections match the original section order: top bar → navbar → hero → intro → how it works → about → services → testimonials → pricing → appointment → blog → footer
- [ ] Brand color `#589167` is used consistently for buttons and accents
- [ ] Font is Roboto (weights 300, 400, 500, 700)
- [ ] Buttons are square (no border-radius)
- [ ] Dark navbar and footer contrast with light content sections
- [ ] Hero has a background image with overlay and parallax effect
- [ ] Testimonials section uses a carousel/slider
- [ ] Contact form has name, email, phone, date, subject, message fields
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] No references to ColorLib anywhere in app code
- [ ] Placeholder images use `https://picsum.photos/seed/plea-<n>/<w>/<h>`
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] `public/CNAME` contains `plea.free.componentdock.com`
- [ ] `package.json` homepage is `https://plea.free.componentdock.com`
- [ ] Package name is `@free-react-templates/plea`
