# Template: Likeness (Personal/VCard)
<!-- prep-status: shipped-as=selfcraft -->
> **SHIPPED-UNDER** — the ColorLib `personify` design this prep describes already
> ships as `apps/selfcraft` (<https://selfcraft.free.componentdock.com>).
> Do not scaffold `apps/likeness`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-selfcraft/spec.md`.

## Purpose

Recreation of ColorLib **Personify** — a personal/vCard website template.

- **Source:** https://colorlib.com/wp/template/personify/
- **Preview:** https://preview.colorlib.com/theme/personify/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/personify-free-template.jpg
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript
- **Adaptation:** The original is a multi-page template (Bio, Portfolio, Resume, Contact).
  This recreation consolidates into a single-page React app with tab navigation,
  preserving the split-screen layout and all four sections as tab panels.

## Design tokens

Extracted from `https://preview.colorlib.com/theme/personify/css/style.css`:

| Token              | Value                          | Usage                                     |
| ------------------ | ------------------------------ | ----------------------------------------- |
| Brand color        | `#F73859` (pinkish-red)        | Active nav, portfolio hover overlay, service icons, home button |
| Brand hover        | `#f96982` (lighter pink)       | Button hover state                        |
| Accent (navy)      | `#283149` (dark navy blue)     | Off-canvas menu background                |
| Body text          | `#b3b3b3` (light gray)         | Paragraph text                            |
| Headings           | `#000` (black)                 | h1, h2, h3                                |
| Background         | `#fff` (white)                 | Page background                           |
| Body font          | `Open Sans`, sans-serif         | Body text, 15px, weight 400, line-height 1.8 |
| Heading font       | `Playfair Display`, serif       | h1, h2, h3                                |
| Button radius      | `0` (square)                   | All buttons                               |
| Button style       | uppercase, letter-spacing 0.2em, border-width 2px | CTA buttons |
| Portfolio border   | `1px solid #e6e6e6`            | Portfolio item borders                    |
| Portfolio hover shadow | `0 4px 10px 0 rgba(0,0,0,0.1)` | Portfolio item hover                    |
| Loader accent      | `#f4b214` (gold)               | Loading spinner stroke                    |

## Layout characteristics

- **Split layout:** Left half = scrollable main content, right half = fixed profile photo (50/50 on desktop, stacked on mobile <576px).
- **Off-canvas navigation:** Slide-in menu from right side (240px wide), dark navy background (#283149), white text, brand-color active state.
- **Mobile-first:** On small screens, profile image sits above content as a banner (height 400px), menu button fixed top-right.
- **Minimalist aesthetic:** Clean white background, serif/sans-serif font pairing, generous whitespace, no heavy graphics.

## Requirements

### Feature: Likeness — Personal/VCard Website

  As a visitor,
  I want to view a personal portfolio with bio, portfolio, resume, and contact sections,
  So I can learn about the person and get in touch.

  Background:
- **GIVEN** the Likeness template is loaded
- **AND** the split layout is displayed with content on the left and profile photo on the right (desktop)

**--- Section: Navbar / Off-Canvas Menu ---**

#### Scenario: Off-canvas menu toggle

- **GIVEN** the "Menu" button is visible (top-right on desktop, top-right on mobile)
- **WHEN** I click the "Menu" button
- **THEN** a slide-in menu appears from the right
- **AND** the menu shows links: Bio, Portfolio, Resume, Contact
- **AND** the menu shows social icons (Twitter, Facebook, Instagram)
- **AND** the menu background is dark navy (#283149)
- **WHEN** I click a menu link
- **THEN** the content switches to the corresponding section
- **AND** the menu closes

#### Scenario: Mobile menu has black background

- **GIVEN** the viewport is 767px or narrower
- **WHEN** the navbar is visible
- **THEN** the navbar background is black

**--- Section: Bio (default section) ---**

#### Scenario: Bio section displays personal info

- **GIVEN** the Bio section is active
- **THEN** I see a heading with the person's name
- **AND** I see a subtitle with the person's job title
- **AND** I see two paragraphs of bio text
- **AND** I see social link buttons (Twitter, Facebook, Instagram)

**--- Section: Portfolio ---**

#### Scenario: Portfolio section shows project list

- **GIVEN** the Portfolio section is active
- **THEN** I see a "Portfolio" heading
- **AND** I see a list of portfolio items, each with an image, project name, and "Visit Website" link
- **AND** each portfolio item has a bordered container

#### Scenario: Portfolio item hover overlay

- **GIVEN** the Portfolio section is active
- **WHEN** I hover over a portfolio item
- **THEN** a pink (#F73859) overlay appears over the image
- **AND** the project name and "Visit Website" text become visible in white
- **AND** a subtle shadow appears on the item

**--- Section: Resume ---**

#### Scenario: Resume section shows experience and education

- **GIVEN** the Resume section is active
- **THEN** I see an "Experience" heading
- **AND** I see a list of experience items, each with a job title, company, date range, and description
- **AND** I see an "Education" heading
- **AND** I see a list of education items, each with institution name, date range, and description

**--- Section: Contact ---**

#### Scenario: Contact section displays form

- **GIVEN** the Contact section is active
- **THEN** I see a "Contact Me" heading
- **AND** I see a form with fields: Full Name, Email Address, Phone, Message (textarea)
- **AND** I see a "Send Message" submit button
- **AND** the button has square corners (border-radius 0), uppercase text, and letter-spacing

#### Scenario: Contact form submission

- **GIVEN** the Contact section is active
- **AND** I have filled in all required fields
- **WHEN** I click "Send Message"
- **THEN** the form is submitted

**--- Layout / Responsive ---**

#### Scenario: Desktop split layout

- **GIVEN** the viewport is 576px or wider
- **THEN** the profile photo occupies the right 50% of the viewport
- **AND** the profile photo is fixed in position while content scrolls
- **AND** the main content occupies the left 50% with 7% padding

#### Scenario: Mobile stacked layout

- **GIVEN** the viewport is narrower than 576px
- **THEN** the profile photo is a 400px tall banner above the content
- **AND** the main content is full-width below the banner

#### Scenario: Home button on sub-sections

- **GIVEN** I am on any section other than Bio
- **THEN** a home button (house icon, brand color #F73859) is visible at the top-left
- **AND** clicking it navigates back to the Bio section

**--- Navigation ---**

#### Scenario: Tab navigation between sections

- **GIVEN** I am on the Bio section
- **WHEN** I click "Portfolio" in the menu
- **THEN** the Portfolio content is displayed
- **AND** the Bio content is hidden
- **WHEN** I click "Resume" in the menu
- **THEN** the Resume content is displayed

#### Scenario: Social links in menu

- **GIVEN** the off-canvas menu is open
- **THEN** social icons are displayed below the navigation links
- **AND** each icon links to the respective social platform

## Verification checklist

- [ ] Split layout: 50/50 on desktop, stacked on mobile
- [ ] Profile image: fixed on right (desktop), banner on mobile (400px)
- [ ] Off-canvas menu: slides from right, navy background (#283149)
- [ ] Menu links: Bio, Portfolio, Resume, Contact
- [ ] Social icons in menu and bio section
- [ ] Bio section: name, title, bio text, social links
- [ ] Portfolio section: project list with bordered items, pink hover overlay
- [ ] Resume section: experience and education lists with dates
- [ ] Contact section: form with name, email, phone, message, submit
- [ ] Brand color #F73859 used for active states and accents
- [ ] Fonts: Playfair Display for headings, Open Sans for body
- [ ] Buttons: square corners, uppercase, letter-spacing 0.2em
- [ ] Home button on sub-sections (brand color)
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] Placeholder images via picsum.photos
- [ ] Icons from lucide-react
- [ ] 100% test coverage
