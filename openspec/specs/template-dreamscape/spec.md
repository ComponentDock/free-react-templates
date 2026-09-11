# Template: Dreamscape (Creative Agency)

## Purpose

Recreation of the ColorLib **Create** template
(preview: https://preview.colorlib.com/theme/create/),
source page: https://colorlib.com/wp/template/create/.

Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript.
Design category: creative / agency / one-page portfolio.

## Design tokens (extracted from live preview CSS)

| Token               | Value                                           |
|---------------------|------------------------------------------------|
| Brand / primary     | `#32dbc6` (teal-mint)                           |
| Body text           | `#4d4d4d`                                       |
| Heading text        | `#000000`                                       |
| Footer background   | `#333333`                                       |
| Footer text         | `#737373`                                       |
| Footer links        | `#999999`                                       |
| Border color        | `#edf0f5`                                       |
| Top-bar / feature strip bg | `#000000`                               |
| Light section bg    | `#f8f9fa` / `#f4f5f9` (dropdowns)              |
| Font family         | Quicksand (Google Fonts), fallback sans-serif   |
| Button radius       | 30px (pill)                                     |
| Form input radius   | 30px (pill)                                     |
| Form focus border   | `#32dbc6`                                       |
| Hero overlay        | `rgba(0, 0, 0, 0.2)`                           |
| Carousel nav circle | 50px, `rgba(0, 0, 0, 0.2)` bg, white text      |

## Section structure (top → bottom)

1. **TopBar** — dark `#000` background, phone + email on left, social icons (Facebook, Twitter, Instagram, LinkedIn) on right.
2. **Navbar** — white background, sticky. Logo "Dreamscape" with teal dot/period accent. Nav links: Home, Work, Services, About (dropdown: Specialties, Our Team), Blog, Contact. Mobile hamburger menu.
3. **Hero** — full-viewport background image with dark overlay, centered heading "We Love To Build [typed-animation]" cycling through "Web Apps", "WordPress", "Mobile Apps". Subtitle line. Teal pill button "Watch Video" (links to video/lightbox).
4. **Features (3-column)** — numbered cards 01/02/03 with headings Innovate / Create / Scale, each with check-mark list items. White background.
5. **Our Works (Portfolio Gallery)** — section heading, 6-item responsive grid (2×3), each with image + hover overlay showing title + category. Lightbox-capable.
6. **Dark Feature Strip** — black `#000` background spanning full width. Left side: large image. Right side: 2×2 grid of services with icons: Strategy, Web Development, Art Direction, Copywriting. White headings, grey body text, "Read More" links.
7. **Testimonials** — section heading, centered blockquote carousel with avatar images. Large italic text, author name below.
8. **Our Services (6 cards)** — section heading, 3×2 grid. Each card: icon (teal), heading, description, "Learn More" link. Items: Web Design, eCommerce, Web Applications, Branding, Copy Writing, Mobile Applications.
9. **About Us** — split layout: left text + 2 specialty cards (Web & Mobile Specialties, Intuitive Thinkers), right: large image. Section heading.
10. **Our Team** — section heading, 3-column layout. Each: circular avatar, name, position title, bio text, social icon links. Members: John Rooster (Co-Founder, President), Tom Sharp (Co-Founder, COO), Winston Hodson (Marketing).
11. **Blog** — section heading, 3-column post cards. Each: image, post title, meta (author, date, category), excerpt, "Continue Reading..." link.
12. **Contact Us** — light background `#ccc`. Two-column: left = contact form (First Name, Last Name, Email, Subject, Message, Send button), right = info card (Address, Phone, Email).
13. **CTA Banner** — teal `#32dbc6` background, "Let's Get Started" heading, full-width clickable area.
14. **Footer** — dark `#333333` background. Three-column: About Us text, Features links (About Us, Services, Testimonials, Contact Us), Follow Us social icons. Right: Subscribe Newsletter form (email input + Send button). Bottom: copyright line with "Component Dock" link.

## Gherkin scenarios

```gherkin
Feature: Dreamscape — Creative Agency One-Page Template

  Background:
    Given the Dreamscape template is loaded

  Scenario: TopBar displays contact info and social links
    Then the top bar shows a phone number and email address
    And social icons for Facebook, Twitter, Instagram, and LinkedIn are visible

  Scenario: Navbar sticky behavior and navigation
    Given the page is scrolled past the hero
    Then the navbar becomes sticky with a shadow
    And all nav links are clickable and scroll to their sections
    And the About dropdown shows Specialties and Our Team sub-items

  Scenario: Hero section with typed animation
    Then a full-viewport hero section is displayed
    And a heading with cycling text shows "Web Apps", "WordPress", "Mobile Apps"
    And a "Watch Video" teal pill button is visible

  Scenario: Features section shows three numbered items
    Then three feature cards are displayed in a row
    And each card shows a number (01, 02, 03), a heading, and a check-mark list

  Scenario: Portfolio gallery displays six work items
    Then six gallery items are shown in a responsive grid
    And each item shows an image with an overlay containing a title and category

  Scenario: Dark feature strip shows four services
    Then a black-background section is displayed
    And four service items are shown: Strategy, Web Development, Art Direction, Copywriting
    And each item has an icon, heading, description, and "Read More" link

  Scenario: Testimonials carousel
    Then a testimonials section displays a centered blockquote
    And navigation arrows allow cycling through testimonials
    And each testimonial shows an avatar, quote text, and author name

  Scenario: Services section shows six service cards
    Then six service cards are displayed in a 3-column grid
    And each card has a teal icon, heading, description, and "Learn More" link

  Scenario: About Us section with split layout
    Then the About section shows a heading and descriptive text on the left
    And two specialty cards are shown: Web & Mobile Specialties, Intuitive Thinkers
    And a large image is displayed on the right

  Scenario: Team section shows three members
    Then three team member cards are displayed
    And each shows a circular avatar, name, position, bio, and social icons

  Scenario: Blog section shows three posts
    Then three blog post cards are displayed in a row
    And each card has an image, title, meta info, excerpt, and "Continue Reading" link

  Scenario: Contact form and info
    Then a contact form with First Name, Last Name, Email, Subject, and Message fields is visible
    And a "Send Message" submit button is present
    And contact info shows address, phone, and email

  Scenario: CTA banner
    Then a teal-background banner with "Let's Get Started" is visible
    And the banner is clickable and links to the contact section

  Scenario: Footer layout
    Then the footer has a dark background
    And it shows About Us text, Features links, Follow Us social icons, and a Newsletter form
    And the copyright line links to "Component Dock" (https://www.componentdock.com/)
```

## Verification checklist

- [ ] All 14 sections present in correct order
- [ ] Brand color `#32dbc6` used consistently (buttons, links, icons, CTA)
- [ ] Quicksand font loaded via Google Fonts
- [ ] Pill-shaped buttons and form inputs (border-radius: 30px)
- [ ] Dark top bar and feature strip with `#000` background
- [ ] Dark footer with `#333333` background
- [ ] Hero is full-viewport with background image + overlay
- [ ] Typed animation cycles through three strings
- [ ] Portfolio gallery has 6 items with hover overlay
- [ ] Testimonials carousel with navigation
- [ ] Team section shows 3 members with circular avatars
- [ ] Contact form with all fields + validation
- [ ] CTA banner is teal and links to contact
- [ ] Footer links to https://www.componentdock.com/
- [ ] No references to ColorLib in app code
- [ ] Mobile responsive (hamburger menu, stacked layouts)
- [ ] 100% test coverage (lines, functions, branches, statements)
