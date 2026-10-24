# Template: Profile (Personal)
<!-- prep-status: shipped-as=clearpoint -->
> **SHIPPED-UNDER** — the ColorLib `schmidt` design this prep describes already
> ships as `apps/clearpoint` (<https://clearpoint.free.componentdock.com>).
> Do not scaffold `apps/profile`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-clearpoint/spec.md`.

## Purpose

Recreation of ColorLib's **Schmidt** template — a personal portfolio/resume
single-page application with multi-page navigation.

- **Source:** https://colorlib.com/wp/template/schmidt/
- **Preview:** https://preview.colorlib.com/theme/schmidt/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/schmidt-free-template.jpg
- **New name:** `profile` (apps/profile, @free-react-templates/profile)
- **Category:** Personal
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **Source design:** ColorLib "Schmidt" — https://colorlib.com/wp/template/schmidt/

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

## Requirements

### Home / Hero

Feature: Hero section

#### Scenario: Hero renders with split layout

- **GIVEN** the user visits the home page
- **THEN** a navbar with brand "Profile." and links (Home, About, Services, Experiences, Works, Blog, Contact) is visible
- **AND** a hero section spans the full viewport height
- **AND** the left half shows text with a gold subheading "UI/UX Designer & Developer"
- **AND** a large heading "I'm John Schmidt" is displayed
- **AND** two CTA buttons are present: "More About Me" (gold primary) and "Hire Me" (white)
- **AND** the right half has a gold (#d5c455) overlay with a portrait image carousel

#### Scenario: Navbar is transparent on hero, dark on scroll/mobile

- **GIVEN** the user is on the home page
- **THEN** the navbar background is transparent over the hero
- **AND** on mobile (< 992px) the navbar background is dark (#222222)

### About

Feature: About section

#### Scenario: About page shows stats and personal info

- **GIVEN** the user navigates to About
- **THEN** a breadcrumb hero banner shows "About Us"
- **AND** four stat counters are displayed: Happy Clients (5000), Projects Done (1200), Cups of Coffee (500), Working Hours (587)
- **AND** a subheading "About Me" appears above the heading
- **AND** the heading reads "A UI/UX Designer & Web Developer Based in Philippines"
- **AND** personal info fields are shown: Name, Date of birth, Address, Zip code, Email, Phone
- **AND** a "Download CV" gold primary button is present

#### Scenario: Skills progress bars

- **GIVEN** the user scrolls to the Skills section on the About page
- **THEN** skill progress bars are shown for: Adobe Photoshop (90%), Figma (95%), Adobe Illustrator (90%), Javascript (85%), HTML5 (95%), CSS3 (90%), WordPress (70%), Adobe XD (80%), SEO (80%)

#### Scenario: Testimonials carousel

- **GIVEN** the user scrolls to the Testimonials section
- **THEN** a carousel of testimonial cards is displayed
- **AND** each card has a quote icon, avatar image, name, position, and testimonial text

### Services

Feature: Services section

#### Scenario: Services page shows service grid and pricing

- **GIVEN** the user navigates to Services
- **THEN** a breadcrumb hero banner shows "What I Do?"
- **AND** an 8-item service grid is displayed: UI/UX Design, Web Development, Graphic Design, Branding, Marketing, Mobile App Design, Visual Editor, IT Consultancy
- **AND** a pricing section shows 4 plans: Personal, Professional, Medium Business, Gigantic Business
- **AND** each pricing plan lists features with checkmark icons

### Experience

Feature: Experience section

#### Scenario: Experience page shows education and work history

- **GIVEN** the user navigates to Experiences
- **THEN** a breadcrumb hero banner shows "Experiences"
- **AND** a two-column layout displays resume entries
- **AND** education entries include: Master Degree of Design, Bachelor's Degree of C.A, Diploma in Computer
- **AND** work entries include: Art & Creative Director, Wordpress Developer, UI/UX Designer
- **AND** each entry has a date range, icon, title, and company name

### Works / Portfolio

Feature: Works section

#### Scenario: Portfolio grid displays projects

- **GIVEN** the user navigates to Works
- **THEN** a breadcrumb hero banner shows "Portfolio"
- **AND** a 3-column project grid is displayed
- **AND** each project card has a background image with overlay
- **AND** hovering reveals the project title and description

### Blog

Feature: Blog section

#### Scenario: Blog page shows post cards

- **GIVEN** the user navigates to Blog
- **THEN** a breadcrumb hero banner shows "Blog Posts"
- **AND** a 4-column grid of blog entry cards is displayed
- **AND** each card has a featured image, meta info (author, date, comment count), title, and excerpt

### Contact

Feature: Contact section

#### Scenario: Contact page shows form and info

- **GIVEN** the user navigates to Contact
- **THEN** a breadcrumb hero banner shows "Contact us"
- **AND** a contact form with fields: Name, Email, Subject, Message is present
- **AND** a "Send Message" submit button is available
- **AND** contact info boxes display address, phone, and email
- **AND** a Google Map embed is shown alongside the form

### Footer

Feature: Footer

#### Scenario: Footer renders on every page

- **GIVEN** the user is on any page
- **THEN** a minimal footer is displayed
- **AND** the footer contains a copyright line
- **AND** the footer links to https://www.componentdock.com/ (branded "Component Dock")

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
