# Template: Juresc (Law Firm)

## Purpose

Recreation of ColorLib **Lawfirm** template.
- Source slug: `lawfirm`
- Source URL: https://colorlib.com/wp/template/lawfirm/
- Preview URL: https://preview.colorlib.com/theme/lawfirm/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/lawfirm-free-fullscreen-lawyer-website-template.jpg
- Stack: React 19 + Vite + Tailwind CSS 4 + TypeScript

## Design tokens

| Token              | Value                                     | Notes                                                  |
| ------------------ | ----------------------------------------- | ------------------------------------------------------ |
| `font-family`      | `"Roboto", sans-serif`                    | Weights 300, 400, 500, 700                             |
| `--brand-dark`     | `#1d2227`                                 | Header bar, navbar, hero overlay, footer background    |
| `--brand-gold`     | `#cbb88c`                                 | Link color, active states, social icon hover, accents  |
| `--brand-white`    | `#ffffff`                                 | Body background, testimonial dots                      |
| `--brand-gray`     | `gray`                                    | Body text color                                        |
| `--heading-color`  | `rgba(0, 0, 0, 0.7)`                     | Headings (h1-h6)                                       |
| `--brand-light`    | `#f8f9fa`                                 | About section background, light card areas             |
| `--btn-primary`    | `#007bff`                                 | Primary button (Bootstrap blue), white text            |
| `--hero-overlay`   | `#1d2227` at 50% opacity                 | Hero section image overlay                             |
| `--btn-radius`     | `0.25rem`                                 | Bootstrap default button border-radius                 |
| `--hero-height`    | `600px`                                   | Hero section fixed height                              |

### Section-specific backgrounds

- Top bar (`.wrap`): `#1d2227` dark
- Navbar (`.ftco-navbar-light`): `#1d2227` dark, sticky on scroll → white
- Hero: background image + dark overlay at 50%
- Intro strip: 4 columns, each with a different accent color class
- About section: image left + light background right (`#f8f9fa`)
- Counter section: background image
- Practice Areas: white background, 6 icon cards
- Case Studies: no section background, cards use background images
- Testimonials: background image + dark overlay, carousel
- Appointment/CTA: background image + dark overlay, form
- Blog: white background, 3 blog card entries
- Footer: `#1d2227` dark, bottom bar is `#000000`

## Section structure (from live preview DOM)

1. **TopBar** — phone + email left, social icons right, dark background
2. **Navbar** — brand "Law Firm" left, nav links right (Home, About, Practice Areas, Cases, Attorneys, Blog, Contact), dark bg, sticky on scroll
3. **Hero** — fullscreen background image, dark overlay 50%, headline "Don't Feel Helpless We Fight for Justice", subtext, two CTA buttons (Contact us primary, Read more white), video play button
4. **IntroStrip** — 4 equal columns with icons + title + text (Expert Attorneys, Case Dismissed, Court Performance, Court Performance)
5. **AboutSection** — split: left half image with video play button overlay, right half light bg with subheading "Welcome to Law Firm", heading, paragraph, 4 service items (Expert Attorneys, Great Discount, Legal Advisory, Quick Charges)
6. **CounterSection** — 4 stat counters (3000 Trusted Clients, 1000 Honors & Awards, 2000 Expert Lawyers, 10540 Successful Cases) over background image
7. **PracticeAreas** — heading "What We Cover", 6 icon cards in 3-col grid (Business Law, Family Law, Criminal Law, Real Estate Law, Personal Injury, Judicial Law)
8. **CaseStudies** — heading "Recent Case Studies", mixed grid: 1 col left + 2 col center + 1 col right, 7 cards total with background images and overlay text
9. **Testimonials** — heading "Happy Clients", owl-carousel of testimonial cards with quote icon, text, person image, name, position, over dark bg image
10. **AppointmentCTA** — split: left "We Have Great Results" with 3 service items + right "Free Case Consultation" form (name, email, practice area select, message, submit button), bg image
11. **Blog** — heading "Recent Blog", 3 blog cards with image, date overlay, title, excerpt
12. **Footer** — 5 columns: logo + social, Explore links, Legal links, Company links, contact info (address, phone, email)
13. **FooterBottom** — copyright bar, dark black background

## Gherkin scenarios

### TopBar
```gherkin
Feature: TopBar

  Scenario: TopBar displays contact info and social links
    Given I visit the Juresc homepage
    Then I see a phone number "+00 1234 567" in the top bar
    And I see an email "youremail@email.com" in the top bar
    And I see social icons for Facebook, Twitter, Instagram, and Dribbble
```

### Navbar
```gherkin
Feature: Navbar

  Scenario: Navbar shows brand and navigation links
    Given I visit the Juresc homepage
    Then I see the brand "Juresc" in the navbar
    And I see navigation links: Home, About, Practice Areas, Cases, Attorneys, Blog, Contact

  Scenario: Navbar is dark themed
    Given I visit the Juresc homepage
    Then the navbar background is dark colored
```

### Hero
```gherkin
Feature: Hero section

  Scenario: Hero displays headline and CTAs
    Given I visit the Juresc homepage
    Then I see the headline "Don't Feel Helpless We Fight for Justice"
    And I see a "Contact us" primary button
    And I see a "Read more" white button
    And I see a video play button

  Scenario: Hero has background image with overlay
    Given I visit the Juresc homepage
    Then the hero section has a background image
    And the hero section has a dark overlay
```

### IntroStrip
```gherkin
Feature: Intro strip

  Scenario: Intro strip shows 4 feature cards
    Given I visit the Juresc homepage
    Then I see 4 intro cards in a row
    And the first card has title "Expert Attorneys"
    And the second card has title "Case Dismissed"
    And the third card has title "Court Performance"
    And the fourth card has title "Court Performance"
```

### AboutSection
```gherkin
Feature: About section

  Scenario: About section has split layout
    Given I visit the Juresc homepage
    Then I see an image with a video play button on the left
    And I see text content on the right with a light background
    And I see a subheading "Welcome to Juresc"
    And I see a heading about trust
    And I see 4 service items: Expert Attorneys, Great Discount, Legal Advisory, Quick Charges
```

### CounterSection
```gherkin
Feature: Counter section

  Scenario: Counter section shows statistics
    Given I visit the Juresc homepage
    Then I see a counter for "3000" Trusted Clients
    And I see a counter for "1000" Honors & Awards
    And I see a counter for "2000" Expert Lawyers
    And I see a counter for "10540" Successful Cases
```

### PracticeAreas
```gherkin
Feature: Practice areas

  Scenario: Practice areas displays 6 cards
    Given I visit the Juresc homepage
    Then I see a heading "What We Cover"
    And I see 6 practice area cards
    And the cards are: Business Law, Family Law, Criminal Law, Real Estate Law, Personal Injury, Judicial Law
```

### CaseStudies
```gherkin
Feature: Case studies

  Scenario: Case studies shows mixed grid of cases
    Given I visit the Juresc homepage
    Then I see a heading "Recent Case Studies"
    And I see case study cards with background images
    And each card has a title and short text
```

### Testimonials
```gherkin
Feature: Testimonials

  Scenario: Testimonials section with carousel
    Given I visit the Juresc homepage
    Then I see a heading "Happy Clients"
    And I see testimonial cards with a quote icon, text, person image, name, and position
    And the testimonials are in a carousel/slider
    And the section has a background image with dark overlay
```

### AppointmentCTA
```gherkin
Feature: Appointment CTA

  Scenario: CTA section shows results info and consultation form
    Given I visit the Juresc homepage
    Then I see a heading "We Have Great Results" on the left
    And I see 3 service items: Award Winning, 60 Years of Experience, Best Attorneys team
    And I see a heading "Free Case Consultation" on the right
    And I see a form with Name, Email, Practice Areas select, Message textarea, and Send message button
    And the section has a background image with dark overlay

  Scenario: Consultation form has practice area dropdown
    Given I visit the Juresc homepage
    When I look at the consultation form
    Then I see a dropdown with options: Business Law, Criminal Law, Family Law, Judicial Law, Personal Injury, Real Estate Law
```

### Blog
```gherkin
Feature: Blog section

  Scenario: Blog shows 3 entries
    Given I visit the Juresc homepage
    Then I see a heading "Recent Blog"
    And I see 3 blog cards
    And each card has an image, date (day/month/year), title, and excerpt
```

### Footer
```gherkin
Feature: Footer

  Scenario: Footer has 5 columns
    Given I visit the Juresc homepage
    Then I see a footer with brand name and social links
    And I see an "Explore" column with links: About, Contact, Practice Areas, Cases
    And I see a "Legal" column with links: Join us, Blog, Privacy & Policy, Term & Conditions
    And I see a "Company" column with links: About Us, Blog, Contact, Careers
    And I see a "Have a Questions?" column with address, phone, and email
    And I see a copyright bottom bar

  Scenario: Footer links to Component Dock
    Given I visit the Juresc homepage
    Then the footer contains a link to "https://www.componentdock.com/"
```

## Verification checklist

- [ ] All 13 sections present in correct order
- [ ] Design tokens match: Roboto font, #1d2227 dark, #cbb88c gold accent, white bg
- [ ] Hero is fullscreen with dark overlay at 50% opacity
- [ ] 4-column intro strip with different accent colors
- [ ] About section is split layout (image left, content right on light bg)
- [ ] Counter section with animated numbers over background image
- [ ] 6 practice area cards in 3-column grid
- [ ] Case studies in mixed grid layout (1+2+1 columns)
- [ ] Testimonials carousel with dark bg image overlay
- [ ] Appointment CTA split with form (name, email, select, textarea, submit)
- [ ] 3 blog cards with date overlays
- [ ] Footer with 5 columns + Component Dock link
- [ ] Top bar with phone/email and social icons
- [ ] Navbar dark themed, sticky on scroll
- [ ] No ColorLib references in app code
- [ ] All placeholder images via picsum.photos
