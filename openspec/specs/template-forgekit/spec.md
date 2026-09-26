# Spec: ForgeKit

> Recreation of ColorLib "Create" (https://colorlib.com/wp/template/create/)
> Preview: https://preview.colorlib.com/theme/create/

## Purpose

ForgeKit is a creative agency / digital studio one-page template. It recreates the ColorLib "Create" design with a teal/mint brand palette, Quicksand font family, rounded pill buttons, and a clean white layout. The template features a dark top bar, sticky white navbar, hero with background image and typed-text animation, three-column services overview, portfolio gallery grid, dark "feature strip" section, testimonial carousel, services grid with icons, about section with image + specialties, team member cards, blog cards, contact form with address sidebar, teal CTA banner, and a dark footer with newsletter signup. Footer links to Component Dock.

## Design Tokens

| Token              | Value                                                                 |
| ------------------ | --------------------------------------------------------------------- |
| Brand color        | `#32dbc6` (teal/mint — used as Bootstrap `primary`)                  |
| Primary light      | `#32dbc6` (same — all `text-primary` references)                     |
| Text color         | `#4d4d4d` (body text)                                                |
| Heading color      | `#000000` (black headings)                                           |
| Background         | `#ffffff` (white default sections)                                    |
| Light background   | `#f4f5f9` (dropdown hover, `.bg-light` sections)                     |
| Footer background  | `#333333` (dark charcoal)                                             |
| Top bar background | `#25262a` (dark `bg-dark`)                                            |
| Button radius      | `30px` (fully rounded pill buttons)                                   |
| Input radius       | `30px` (pill-shaped form inputs)                                      |
| Font family        | `Quicksand` (Google Fonts — 300,400,500,700,900) + system fallbacks  |
| Body line-height   | `1.7`                                                                 |
| Section padding    | `2.5em 0` mobile, `5em 0` desktop                                     |

## Section Order (from live preview DOM)

1. **Top Bar** — dark bar with phone, email, social icons (Facebook, Twitter, Instagram, LinkedIn)
2. **Navbar** — white sticky header with "Create." brand (period in teal), nav links: Home, Work, Services (dropdown: Specialties, Our Team), Blog, Contact
3. **Hero** — full-width background image overlay, centered headline "We Love To Build [typed text]", subtitle, "Watch Video" pill button
4. **Services Overview** — 3-column cards with large numbers (01, 02, 03), titles (Innovate, Create, Scale), descriptions, and checkmark lists
5. **Work / Portfolio** — centered heading "Our Works", 3×2 image grid with hover overlay (title + category) in lightbox
6. **Feature Strip** — full-width black background, image left, 2×2 grid of features (Strategy, Web Development, Art Direction, Copywriting) with icons and "Read More" links
7. **Testimonials** — carousel with quote blocks, author photo (circular), author name
8. **Our Services** — 3×2 grid of icon+text service cards (Web Design, eCommerce, Web Applications, Branding, Copy Writing, + 1 more) with "Learn More" links
9. **About Us** — two-column: right image, left heading + paragraph + 2 specialty cards (Web & Mobile Specialties, Intuitive Thinkers) with icons
10. **Our Team** — 3-column cards: circular portrait, name, position, bio, social icon row
11. **Blog** — 3-column cards: featured image, title, author + date + category meta, excerpt, "Continue Reading..." link
12. **Contact** — `bg-light` section: left form (First Name, Last Name, Email, Subject, Message, "Send Message" pill button), right sidebar with Address, Phone, Email
13. **CTA Banner** — teal `bg-primary` full-width strip with "Let's Get Started" heading
14. **Footer** — dark `#333333` background, 4-column: About Us blurb, Features links, Follow Us social icons, Subscribe Newsletter form, copyright with "Made with ❤ by Colorlib" → replaced with Component Dock link

## Requirements

### Requirement: Top Bar

The template SHALL render a dark top bar with phone number, email address, and social media icon links.

#### Scenario: Top bar content

- **WHEN** the page loads
- **THEN** the phone number "+1 234 5678 9101" is displayed
- **THEN** the email "info@yourdomain.com" is displayed
- **THEN** social media icons for Facebook, Twitter, Instagram, and LinkedIn are visible

### Requirement: Navbar

The template SHALL render a white sticky navbar with the "ForgeKit" brand and navigation links.

#### Scenario: Brand and navigation visible

- **WHEN** the page loads
- **THEN** the brand "ForgeKit" is displayed with a teal period accent
- **THEN** navigation links Home, Work, Services, About, Blog, Contact are visible
- **THEN** the navbar has a white background and is sticky on scroll

#### Scenario: Mobile menu toggle

- **WHEN** the user clicks the hamburger menu on mobile
- **THEN** a slide-in mobile menu appears
- **THEN** all navigation links are accessible in the menu

### Requirement: Hero Section

The template SHALL render a full-width hero with a background image overlay, centered headline with typed-text animation, subtitle, and a "Watch Video" pill button.

#### Scenario: Hero content

- **WHEN** the page loads
- **THEN** the headline "We Love To Build" is displayed with a typed-text effect
- **THEN** a subtitle is displayed below the headline
- **THEN** a "Watch Video" pill button is displayed

### Requirement: Services Overview

The template SHALL render a 3-column section with numbered service cards (01, 02, 03) featuring large faded background numbers, teal headings, descriptions, and checkmark lists.

#### Scenario: Services overview content

- **WHEN** the user scrolls to the services overview section
- **THEN** 3 cards are displayed in a row
- **THEN** each card shows a large faded number (01, 02, 03) behind the heading
- **THEN** each card has a teal heading, description paragraph, and checkmark list items

### Requirement: Portfolio Gallery

The template SHALL render a gallery section titled "Our Works" with a 3×2 grid of portfolio images with hover overlay showing title and category.

#### Scenario: Gallery grid

- **WHEN** the user scrolls to the portfolio section
- **THEN** the heading "Our Works" is centered above the grid
- **THEN** 6 portfolio items are displayed in a 3×2 grid
- **THEN** each item shows an image with overlay containing title and category on hover

### Requirement: Feature Strip

The template SHALL render a full-width dark (black) feature strip with an image on the left and a 2×2 grid of features (icon + title + description + "Read More" link) on the right.

#### Scenario: Feature strip content

- **WHEN** the user scrolls to the feature strip
- **THEN** a black background section spans full width
- **THEN** an image is displayed on the left half
- **THEN** 4 features are displayed in a 2×2 grid: Strategy, Web Development, Art Direction, Copywriting
- **THEN** each feature has an icon, title, description, and "Read More" link

### Requirement: Testimonials

The template SHALL render a testimonial carousel section titled "Testimonials" with quote blocks, author photos, and author names.

#### Scenario: Testimonial carousel

- **WHEN** the user scrolls to the testimonials section
- **THEN** the heading "Testimonials" is centered
- **THEN** testimonial cards display with a quote, author photo (circular), and author name
- **THEN** multiple testimonials can be cycled through (carousel)

### Requirement: Our Services

The template SHALL render a 3×2 grid of service cards, each with an icon, title, description, and "Learn More" link.

#### Scenario: Services grid

- **WHEN** the user scrolls to the Our Services section
- **THEN** the heading "Our Services" is centered
- **THEN** 6 service cards are displayed in a 3×2 grid
- **THEN** each card has an icon, title, description, and "Learn More" link

### Requirement: About Us

The template SHALL render a two-column About Us section with an image on the right and a heading, description paragraph, and 2 specialty cards on the left.

#### Scenario: About Us content

- **WHEN** the user scrolls to the About Us section
- **THEN** the heading "About Us" is displayed on the left
- **THEN** a description paragraph is displayed
- **THEN** 2 specialty cards (Web & Mobile Specialties, Intuitive Thinkers) with icons are displayed
- **THEN** a portrait image is displayed on the right

### Requirement: Our Team

The template SHALL render a team section titled "Our Team" with 3 member cards in a row, each containing a circular portrait, name, position, bio, and social icons.

#### Scenario: Team member cards

- **WHEN** the user scrolls to the Our Team section
- **THEN** the heading "Our Team" is centered
- **THEN** 3 team member cards are displayed
- **THEN** each card shows a circular portrait, name, position, bio text, and social icon row

### Requirement: Blog

The template SHALL render a blog section titled "Blog" with 3 blog cards in a row, each containing a featured image, title, meta (author, date, category), excerpt, and "Continue Reading..." link.

#### Scenario: Blog cards

- **WHEN** the user scrolls to the Blog section
- **THEN** the heading "Blog" is centered
- **THEN** 3 blog cards are displayed
- **THEN** each card shows a featured image, title, author + date + category meta, excerpt, and "Continue Reading..." link

### Requirement: Contact

The template SHALL render a contact section on a light background with a form on the left (First Name, Last Name, Email, Subject, Message, Send button) and an address sidebar on the right.

#### Scenario: Contact form

- **WHEN** the user scrolls to the Contact section
- **THEN** the heading "Contact Us" is centered
- **THEN** a contact form is displayed with First Name, Last Name, Email, Subject, Message fields
- **THEN** a "Send Message" pill button is displayed
- **THEN** the right sidebar shows Address, Phone, and Email information

### Requirement: CTA Banner

The template SHALL render a full-width teal CTA banner with "Let's Get Started" heading linking to the contact section.

#### Scenario: CTA banner

- **WHEN** the user scrolls past the contact section
- **THEN** a full-width teal banner is displayed with "Let's Get Started" heading in white

### Requirement: Footer

The template SHALL render a dark footer with About Us blurb, Features links, Follow Us social icons, newsletter subscription form, and copyright linking to Component Dock.

#### Scenario: Footer content

- **WHEN** the user scrolls to the footer
- **THEN** a dark background footer is displayed
- **THEN** an "About Us" blurb column is shown
- **THEN** a "Features" links column is shown
- **THEN** a "Follow Us" social icon column is shown
- **THEN** a "Subscribe Newsletter" form with input and Send button is shown
- **THEN** the copyright line links to Component Dock

#### Scenario: Footer component dock link

- **WHEN** the footer is rendered
- **THEN** the copyright links to `https://www.componentdock.com/`
- **THEN** the link text reads "Component Dock"

## Verification Checklist

- [ ] All sections render in correct order matching the ColorLib preview
- [ ] Brand color `#32dbc6` is used consistently for accents and CTAs
- [ ] Quicksand font is loaded and applied to headings
- [ ] Pill buttons (border-radius 30px) are used for CTAs and form buttons
- [ ] Hero section has background image with overlay and typed-text animation
- [ ] Feature strip uses black background with white text and icons
- [ ] Testimonial carousel cycles through multiple testimonials
- [ ] Contact form has all 5 fields (First Name, Last Name, Email, Subject, Message)
- [ ] Footer links to Component Dock (not Colorlib)
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] Placeholder images use picsum.photos/seed pattern
- [ ] Lucide-react icons used for social icons and feature icons
- [ ] Responsive layout: single column on mobile, multi-column on desktop
