# Template: Incept (Portfolio / Agency)

## Purpose

Recreation of ColorLib's **Create** template — a portfolio/agency onepage site
with hero, services, portfolio grid, features, testimonials, team, blog, and
contact sections.

- **Source slug:** `create`
- **ColorLib URL:** https://colorlib.com/wp/template/create/
- **Preview URL:** https://preview.colorlib.com/theme/create/
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design Tokens (extracted from preview CSS)

| Token              | Value                                                    |
| ------------------ | -------------------------------------------------------- |
| **Brand primary**  | `#32dbc6` (teal/mint green)                              |
| **Dark bg**        | `#000` (black — top bar, features section, hero overlay) |
| **Footer bg**      | `#333333` (dark gray)                                    |
| **Light bg**       | `#f8f9fa` (Bootstrap bg-light)                           |
| **White bg**       | `#fff` (navbar, contact form card, content sections)     |
| **Text primary**   | `#000` (headings)                                         |
| **Text body**      | `#4d4d4d` (body text)                                    |
| **Text secondary** | `#737373`, `#999999` (footer text, links)                |
| **Font family**    | `"Quicksand", sans-serif` (weights 300, 400, 500, 700, 900) |
| **Button radius**  | `30px` (pill shape)                                      |
| **Form radius**    | `30px` (pill inputs)                                     |
| **Section padding**| `2.5em` mobile, `5em` desktop                            |
| **Section heading**| `2.5rem` mobile, `3rem` desktop                          |
| **Dropdown border**| `2px solid #32dbc6` (teal top border on dropdown)        |
| **Cover overlay**  | semi-transparent dark overlay on hero image              |

## Visual Design Notes (from screenshot)

- **Clean, bright, modern** aesthetic with teal (#32dbc6) as the sole accent
  color against white/black backgrounds.
- Dark top bar with phone, email, and social media icons (Facebook, Twitter,
  Instagram, LinkedIn).
- White sticky navbar with logo "Incept." (period in teal) and nav links:
  Home, Work, Services, About (dropdown: Specialties, Our Team), Blog, Contact.
- Hero: full-width parallax background image with dark overlay, centered
  headline "We Love To Build [typed words]" (Web Apps, WordPress, Mobile Apps),
  subtitle, and "Watch Video" pill button in teal.
- Services overview: 3 numbered columns (01. Innovate, 02. Create, 03. Scale),
  each with teal heading, description, and teal checkmark list items.
- Portfolio/Works: 3-column, 2-row grid (6 items) with images that have a
  hover overlay showing title + category.
- Features/About: full-width black background section with image on left and
  4 feature blocks (Strategy, Web Development, Art Direction, Copywriting)
  with Material Design icons.
- Testimonials: carousel with avatar, name, and quote blockquote.
- Our Services: 3-column grid of service cards.
- About Us: side-by-side image + text block with heading and paragraphs.
- Our Team: 3 team member cards (photo, name, role, social icons).
- Blog: 3-column article cards with image, title, date, category, excerpt.
- Contact Us: light gray background, form (First Name, Last Name, Email,
  Subject, Message, Send Message button) + contact info card.
- CTA Banner: full-width teal (#32dbc6) background with "Let's Get Started".
- Footer: dark gray (#333333), 3 columns (About Us text, Features links,
  Follow Us social icons) + newsletter signup form + copyright.

## Gherkin Requirements

### Top Bar
Scenario: Dark top bar with contact info and social links
  Given the user loads the page
  When the top bar renders
  Then it should show a dark background (#000)
  And it should display phone number and email address
  And it should display social media icons (Facebook, Twitter, Instagram, LinkedIn)

### Navigation
Scenario: Sticky white navbar with logo and nav links
  Given the user loads the page
  When the navbar renders
  Then it should have a white background
  And it should show the brand "Incept." with a teal period
  And it should show nav links: Home, Work, Services, About, Blog, Contact
  And it should be sticky (stays fixed on scroll)

Scenario: About dropdown menu
  Given the navbar is visible
  When the user hovers over or clicks "About"
  Then a dropdown should appear with items: Specialties, Our Team
  And the dropdown should have a teal (#32dbc6) top border

### Hero Section
Scenario: Parallax hero with typed text and CTA
  Given the user loads the page
  When the hero section renders
  Then it should display a background image with dark overlay
  And it should show the headline "We Love To Build" followed by typed rotating words
  And the rotating words should include "Web Apps", "WordPress", "Mobile Apps"
  And it should show a "Watch Video" pill button in teal (#32dbc6)

### Services Overview
Scenario: Three numbered service columns
  Given the user scrolls to the services overview section
  When the section renders
  Then it should show 3 columns: Innovate (01.), Create (02.), Scale (03.)
  And each column should have a teal heading, description paragraph, and checklist
  And the checklist items should have teal (#32dbc6) checkmarks

### Portfolio / Works
Scenario: 6-item portfolio grid with hover overlay
  Given the user scrolls to the works section
  When the section renders
  Then it should display "Our Works" heading with subtitle
  And it should show a 3-column grid of 6 portfolio items
  And each item should have an image
  And hovering an item should show a dark overlay with title and category

### Features Section
Scenario: Black background features with image and 4 blocks
  Given the user scrolls to the features section
  When the section renders
  Then it should have a full-width black (#000) background
  And it should show an image on the left
  And it should show 4 feature blocks: Strategy, Web Development, Art Direction, Copywriting
  And each block should have an icon, heading, description, and "Read More" link

### Testimonials
Scenario: Testimonial carousel
  Given the user scrolls to the testimonials section
  When the section renders
  Then it should display "Testimonials" heading
  And it should show a carousel of testimonials
  And each testimonial should have an avatar image, name, and blockquote text

### Our Services
Scenario: Service detail cards
  Given the user scrolls to the our-services section
  When the section renders
  Then it should display "Our Services" heading
  And it should show service cards in a grid layout

### About Us
Scenario: About section with image and text
  Given the user scrolls to the about section
  When the section renders
  Then it should display "About Us" heading
  And it should show an image alongside descriptive text

### Our Team
Scenario: Team member cards
  Given the user scrolls to the team section
  When the section renders
  Then it should display "Our Team" heading
  And it should show team member cards with photo, name, and role
  And each card should have social media icon links

### Blog
Scenario: Blog article cards
  Given the user scrolls to the blog section
  When the section renders
  Then it should display "Blog" heading
  And it should show 3 article cards in a row
  And each card should have an image, title, date, category tag, and excerpt
  And each card should have a "Continue Reading..." link

### Contact Us
Scenario: Contact form and info card
  Given the user scrolls to the contact section
  When the section renders
  Then it should have a light gray background
  And it should display "Contact Us" heading
  And it should show a form with fields: First Name, Last Name, Email, Subject, Message
  And the form should have a "Send Message" teal pill button
  And it should show contact info card with Address, Phone, Email

### CTA Banner
Scenario: Teal call-to-action banner
  Given the user scrolls past the contact section
  When the CTA banner renders
  Then it should have a full-width teal (#32dbc6) background
  And it should display "Let's Get Started" heading in white

### Footer
Scenario: Dark footer with columns and newsletter
  Given the user scrolls to the footer
  When the footer renders
  Then it should have a dark gray (#333333) background
  And it should show About Us text column
  And it should show Features links column (About Us, Services, Testimonials, Contact Us)
  And it should show Follow Us social icons column
  And it should show a newsletter signup form with email input and Send button
  And it should show a copyright line
  And it should include a link to Component Dock

## Verification Checklist

- [ ] All sections render in correct order: Top Bar → Navbar → Hero → Services Overview → Works → Features → Testimonials → Our Services → About Us → Our Team → Blog → Contact Us → CTA Banner → Footer
- [ ] Brand color #32dbc6 used consistently for buttons, headings, checkmarks, dropdown border, CTA banner
- [ ] Quicksand font loaded from Google Fonts with correct weights
- [ ] Pill-shaped buttons and form inputs (border-radius: 30px)
- [ ] Sticky navbar with white background
- [ ] Typed text animation in hero rotating "Web Apps", "WordPress", "Mobile Apps"
- [ ] Portfolio grid hover overlay effect
- [ ] Features section has black (#000) background
- [ ] Footer has dark gray (#333333) background with newsletter form
- [ ] Footer links to Component Dock
- [ ] All placeholder images use picsum.photos
- [ ] No ColorLib references in app code
- [ ] App builds and passes typecheck
