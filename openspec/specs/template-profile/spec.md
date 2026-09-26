# Template: Profile (Personal)

## Purpose

Recreation of ColorLib's **Schmidt** template — a personal portfolio/resume
single-page application with multi-page navigation.

- **Source:** https://colorlib.com/wp/template/schmidt/
- **Preview:** https://preview.colorlib.com/theme/schmidt/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/schmidt-free-template.jpg
- **New name:** `profile` (apps/profile, @free-react-templates/profile)
- **Category:** Personal
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design tokens (extracted from preview CSS)

| Token              | Value                                  | Usage                                      |
| ------------------ | -------------------------------------- | ------------------------------------------ |
| brand-color        | `#d5c455` (gold/olive-yellow)         | Primary CTA buttons, subheading text, hero overlay right half |
| dark               | `#222222`                              | Headings, text, navbar background on mobile |
| body-bg            | `#ffffff`                              | Page background                            |
| light-bg           | `#f8f9fa` / `#f0f0f0`                 | Section alternate backgrounds (`.bg-light`) |
| text-muted         | `#999999` / `#a2a2a2`                 | Secondary text, captions                   |
| border             | `#dee2e6` / `#e6e6e6`                 | Dividers, card borders                     |
| font-family        | Poppins, Arial, sans-serif            | All text (weights: 300, 400, 500, 600, 700) |
| btn-primary-bg     | `#d5c455`                             | `.btn.btn-primary` override                |
| btn-primary-border | `#d5c455`                             | 1px solid                                  |
| btn-primary-color  | `#ffffff`                             | White text on primary                      |
| btn-white-bg       | `#ffffff`                             | `.btn.btn-white` — white background        |
| btn-white-border   | `#ffffff`                             | 1px solid                                  |
| btn-white-color    | `#000000`                             | Black text                                 |
| btn-radius         | `4px` (Bootstrap default)             | Slightly rounded corners                   |
| hero-overlay       | `#d5c455` at 50% width, right side   | Gold accent overlay behind hero image       |
| hero-bg            | dark (left half)                      | Dark background behind hero text            |
| navbar-bg-mobile   | `#222222`                             | Dark bar on screens < 992px                 |
| section-padding    | `8em 0`                               | `.ftco-section` vertical rhythm             |
| subheading-style   | uppercase, bold, `#d5c455`, 16px, letter-spacing 1px | Section label above headings |

## Gherkin requirements

### Home / Hero

```gherkin
Feature: Hero section
  Scenario: Hero renders with split layout
    Given the user visits the home page
    Then a navbar with brand "Profile." and links (Home, About, Services, Experiences, Works, Blog, Contact) is visible
    And a hero section spans the full viewport height
    And the left half shows text with a gold subheading "UI/UX Designer & Developer"
    And a large heading "I'm John Schmidt" is displayed
    And two CTA buttons are present: "More About Me" (gold primary) and "Hire Me" (white)
    And the right half has a gold (#d5c455) overlay with a portrait image carousel

  Scenario: Navbar is transparent on hero, dark on scroll/mobile
    Given the user is on the home page
    Then the navbar background is transparent over the hero
    And on mobile (< 992px) the navbar background is dark (#222222)
```

### About

```gherkin
Feature: About section
  Scenario: About page shows stats and personal info
    Given the user navigates to About
    Then a breadcrumb hero banner shows "About Us"
    And four stat counters are displayed: Happy Clients (5000), Projects Done (1200), Cups of Coffee (500), Working Hours (587)
    And a subheading "About Me" appears above the heading
    And the heading reads "A UI/UX Designer & Web Developer Based in Philippines"
    And personal info fields are shown: Name, Date of birth, Address, Zip code, Email, Phone
    And a "Download CV" gold primary button is present

  Scenario: Skills progress bars
    Given the user scrolls to the Skills section on the About page
    Then skill progress bars are shown for: Adobe Photoshop (90%), Figma (95%), Adobe Illustrator (90%), Javascript (85%), HTML5 (95%), CSS3 (90%), WordPress (70%), Adobe XD (80%), SEO (80%)

  Scenario: Testimonials carousel
    Given the user scrolls to the Testimonials section
    Then a carousel of testimonial cards is displayed
    And each card has a quote icon, avatar image, name, position, and testimonial text
```

### Services

```gherkin
Feature: Services section
  Scenario: Services page shows service grid and pricing
    Given the user navigates to Services
    Then a breadcrumb hero banner shows "What I Do?"
    And an 8-item service grid is displayed: UI/UX Design, Web Development, Graphic Design, Branding, Marketing, Mobile App Design, Visual Editor, IT Consultancy
    And a pricing section shows 4 plans: Personal, Professional, Medium Business, Gigantic Business
    And each pricing plan lists features with checkmark icons
```

### Experience

```gherkin
Feature: Experience section
  Scenario: Experience page shows education and work history
    Given the user navigates to Experiences
    Then a breadcrumb hero banner shows "Experiences"
    And a two-column layout displays resume entries
    And education entries include: Master Degree of Design, Bachelor's Degree of C.A, Diploma in Computer
    And work entries include: Art & Creative Director, Wordpress Developer, UI/UX Designer
    And each entry has a date range, icon, title, and company name
```

### Works / Portfolio

```gherkin
Feature: Works section
  Scenario: Portfolio grid displays projects
    Given the user navigates to Works
    Then a breadcrumb hero banner shows "Portfolio"
    And a 3-column project grid is displayed
    And each project card has a background image with overlay
    And hovering reveals the project title and description
```

### Blog

```gherkin
Feature: Blog section
  Scenario: Blog page shows post cards
    Given the user navigates to Blog
    Then a breadcrumb hero banner shows "Blog Posts"
    And a 4-column grid of blog entry cards is displayed
    And each card has a featured image, meta info (author, date, comment count), title, and excerpt
```

### Contact

```gherkin
Feature: Contact section
  Scenario: Contact page shows form and info
    Given the user navigates to Contact
    Then a breadcrumb hero banner shows "Contact us"
    And a contact form with fields: Name, Email, Subject, Message is present
    And a "Send Message" submit button is available
    And contact info boxes display address, phone, and email
    And a Google Map embed is shown alongside the form
```

### Footer

```gherkin
Feature: Footer
  Scenario: Footer renders on every page
    Given the user is on any page
    Then a minimal footer is displayed
    And the footer contains a copyright line
    And the footer links to https://www.componentdock.com/ (branded "Component Dock")
```

## Verification checklist

- [ ] Navbar renders with correct links and transparent/dark behavior
- [ ] Hero section is full-viewport with split dark/gold layout
- [ ] Hero has portrait image carousel (use placeholder images)
- [ ] About page has stat counters, personal info, skill bars, testimonials
- [ ] Services page has 8-service grid + 4-tier pricing
- [ ] Experience page has two-column resume timeline
- [ ] Works page has 3-column portfolio grid with hover overlays
- [ ] Blog page has 4-column post card grid
- [ ] Contact page has form, info boxes, map placeholder
- [ ] Footer links to Component Dock on all pages
- [ ] All design tokens match: brand #d5c455, Poppins font, dark #222222
- [ ] No ColorLib references in app code
- [ ] Placeholder images use picsum.photos
- [ ] 100% test coverage
