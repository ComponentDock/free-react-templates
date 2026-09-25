# Template: Workfolio (Personal / Portfolio)

## Purpose

Recreation of ColorLib "Gilb" — a personal resume/portfolio template with a dark
navy background, coral accent, masonry portfolio grid, services cards, and
client review carousel.

- **ColorLib source:** https://colorlib.com/wp/template/gilb/
- **Preview URL:** https://preview.colorlib.com/theme/gilb/
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens (from live preview CSS)

| Token               | Value                          | Usage                                           |
| ------------------- | ------------------------------ | ----------------------------------------------- |
| Brand primary       | `#ea5267` (coral/pink)         | Section title accents, buttons, about headings  |
| Banner bg           | `#0d0f5b` (dark navy)          | Hero banner background color                    |
| About bg            | `#0a0b4d` (dark navy)          | About section background                        |
| Review bg           | `#0d0f5b` (dark navy)          | Client reviews section background               |
| Footer bg           | `#0a0b4d` (dark navy)          | Footer background                               |
| Heading color       | `#0a0b4d` (dark navy)          | h1–h6 on light backgrounds                      |
| Body text (dark bg) | `#fff`                         | Paragraphs on dark backgrounds                  |
| Body text (light)   | `#5b5b5b`                      | General body copy on light sections             |
| Muted text          | `#999` / `#777`                | Secondary text, client roles                    |
| Service card bg     | `#fff`                         | Service card backgrounds                        |
| Service icon bg     | `#f3f3f7`                      | Circular icon containers in services            |
| Review card border  | `#f0e9ff`                      | Client review card borders                      |
| Review card bg      | `#fbf9ff`                      | Client review card backgrounds                  |
| Portfolio hover     | `#ea5267` (coral)              | Hover overlay icon color on portfolio items     |
| Font family         | Montserrat (300–700)           | Body and headings (Google Fonts)                |
| Button (primary)    | `#ea5267` bg, `#fff` text      | `.btn_1`: 13.5px 45px padding, no border-radius |
| Button (secondary)  | `#ea5267` text, transparent bg | `.btn_2`: outlined style                        |
| Button hover        | `#0d0f5b` bg, `#fff` text      | Primary button hover state                      |
| Section padding     | 140px top/bottom               | Between major sections                          |

## Section structure (from live DOM)

1. **Navbar** — centered logo + nav links (Home, Blog dropdown, Pages dropdown,
   Contact) + social icons (Facebook, Instagram, Behance, Globe) on the right.
   Light/transparent background over the hero.

2. **Banner / Hero** — full-width dark navy `#0d0f5b` background with a
   decorative background image on the right. Left-aligned text: small heading
   "Hi there, This is Alex", large heading "Digital product designer", and a
   coral "Contact me" button.

3. **About section** — dark navy `#0a0b4d` background. Two-column layout:
   left: "about me" heading + paragraph + large "07" years of experience
   counter; right: "Experiences" heading + list of 6 experience entries
   (job title + company + date range).

4. **Portfolio section** — light/white background. Section heading "My portfolio"
   - "Take a look around some of my awesome works" + "More works" button.
     Masonry grid of 5 portfolio images with coral hover overlay (+ icon).

5. **Services section** — white background. Centered section heading + 3 service
   cards in a row: "User experience design", "Digital art", "Social media
   marketing". Each card has a circular icon, title, description paragraph,
   and "learn more" link.

6. **Client Reviews** — dark navy `#0d0f5b` background. "Word from my clients"
   heading + owl-carousel of 6 review items. Each review: quoted text,
   client photo, client name, and role title.

7. **Footer** — dark navy `#0a0b4d` background. "Discuss your project now" +
   email address + "Download CV" button (coral). Bottom row: navigation
   links (About, Work, Contact) + social icons. Copyright line with
   Component Dock link.

## Requirements

### Requirement: Navbar displays navigation links and social icons

The navbar SHALL contain links for Home, Blog, Pages, and Contact, with social media icons (Facebook, Instagram, Behance, Globe) visible. The navbar SHALL be positioned above the hero banner section with a transparent background.

#### Scenario: Navbar displays navigation links

- **WHEN** the page is loaded
- **THEN** a navigation bar is visible at the top
- **AND** the navbar contains links for Home, Blog, Pages, and Contact
- **AND** social media icons (Facebook, Instagram, Behance, Globe) are visible

### Requirement: Hero displays greeting and CTA

The hero section SHALL display "Hi there, This is Alex" greeting, "Digital product designer" as the main heading, and a "Contact me" button on a dark navy (#0d0f5b) background.

#### Scenario: Hero displays greeting and title

- **WHEN** the page is loaded
- **THEN** the hero section shows "Hi there, This is Alex"
- **AND** the hero shows "Digital product designer" as the main heading
- **AND** a "Contact me" button is visible

### Requirement: About section displays experience info

The about section SHALL show "about me" heading, a descriptive paragraph, "07" years of experience, and an experiences list with 6 entries on a dark navy (#0a0b4d) background.

#### Scenario: About section displays experience info

- **WHEN** the page is loaded
- **THEN** the about section shows "about me" heading
- **AND** a paragraph describing the person is visible
- **AND** "07" years of experience is displayed
- **AND** an experiences list with 6 entries is visible

### Requirement: Portfolio section displays masonry grid

The portfolio section SHALL display "My portfolio" heading, "Take a look around some of my awesome works" subheading, a "More works" button, and 5 portfolio items in a masonry grid with coral hover overlay.

#### Scenario: Portfolio section displays masonry grid

- **WHEN** the page is loaded
- **THEN** the portfolio section shows "My portfolio" heading
- **AND** "Take a look around some of my awesome works" subheading
- **AND** a "More works" button is visible
- **AND** 5 portfolio items are displayed in a masonry grid

### Requirement: Services section displays 3 service cards

The services section SHALL display 3 cards for "User experience design", "Digital art", and "Social media marketing", each with an icon, title, description, and "learn more" link on white background.

#### Scenario: Services section displays 3 service cards

- **WHEN** the page is loaded
- **THEN** the services section shows 3 cards
- **AND** the cards are "User experience design", "Digital art", "Social media marketing"
- **AND** each card has an icon, title, description, and "learn more" link

### Requirement: Reviews section displays client testimonials

The reviews section SHALL display "Word from my clients" heading, 6 client review items in a carousel with quoted text, client photo, name, and role on a dark navy background.

#### Scenario: Reviews section displays client testimonials

- **WHEN** the page is loaded
- **THEN** the reviews section shows "Word from my clients" heading
- **AND** 6 client review items are displayed in a carousel
- **AND** each review shows a quoted text, client photo, name, and role

### Requirement: Footer displays contact info and Component Dock link

The footer SHALL display "Discuss your project now", an email address, "Download CV" button, navigation links (About, Work, Contact), social media icons, and a copyright line with a Component Dock link on a dark navy (#0a0b4d) background.

#### Scenario: Footer displays contact info and links

- **WHEN** the page is loaded
- **THEN** the footer shows "Discuss your project now"
- **AND** an email address is displayed
- **AND** a "Download CV" button is visible
- **AND** navigation links (About, Work, Contact) are present
- **AND** social media icons are visible
- **AND** a copyright line with Component Dock link is present

## Verification checklist

- [ ] All 7 sections present in correct order
- [ ] Montserrat font loaded via Google Fonts
- [ ] Dark navy backgrounds (#0d0f5b / #0a0b4d) on hero, about, reviews, footer
- [ ] Coral (#ea5267) accent on buttons, section titles, portfolio hover
- [ ] Masonry portfolio grid with 5 items and hover overlay
- [ ] 3 service cards with icons and "learn more" links
- [ ] Client review carousel with 6 items
- [ ] Footer links to Component Dock
- [ ] Responsive layout (mobile-friendly)
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
- [ ] Build passes without errors
