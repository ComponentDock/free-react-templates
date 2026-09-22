# FitZone — Fitness & Gym Template

## Purpose

Recreate the ColorLib **Gutim** design (https://colorlib.com/wp/template/gutim/) as a React 19 + Tailwind CSS 4 + TypeScript single-page template under the name "FitZone". The template serves as a free, production-ready fitness and gym website with hero, about, services, classes, banner, membership pricing, registration, blog, and footer sections.

**Preview:** https://preview.colorlib.com/theme/gutim/
**Source slug:** gutim

## Design tokens

| Token | Value | Notes |
|-------|-------|-------|
| font-family | `"Poppins", sans-serif` | Google Fonts, weights 300–900 |
| heading-color | `#111111` | Near-black for all headings |
| body-text | `#6b6b6b` | Medium gray for paragraphs |
| light-text | `#bdbdbd` | Light gray for service descriptions |
| accent-coral | `#f15d44` | Hero subtitle, nav underline, membership price, accent highlights |
| accent-orange | `#e85d39` | Class card user icon |
| gradient-start | `#eb3c5a` | Button left / membership title left |
| gradient-end | `#f67831` | Button right / membership title right / active carousel dot |
| dark-bg | `#141414` | Services card alternate background |
| dark-bg-alt | `#1e1e1e` | Services card primary background |
| light-bg | `#f5f5f5` | Trainer section / register section background |
| white | `#ffffff` | Card backgrounds, body text on dark |
| btn-width | `160px` | Primary button fixed width |
| btn-height | `46px` | Primary button height |
| btn-border | Gradient left/right borders (#eb3c5a → #f67831), gradient fill on hover |
| section-padding | `100px` top & bottom (.spad) |
| card-shadow | `0px 15px 49px rgba(0, 0, 0, 0.15)` | Membership cards |
| carousel-dot | `9px` circle → `42px × 9px` pill when active |

## Requirements

### Requirement: Header navigation

The template SHALL display a transparent fixed header with logo, navigation links (Home, About Us, Classes, Blog, Gallery, Contacts), and a "Sign Up Today" CTA button.

#### Scenario: Desktop navigation

- **WHEN** the page loads on a desktop viewport
- **THEN** the logo, nav links (Home, About, Classes, Blog, Gallery, Contacts), and "Sign Up Today" button are visible
- **AND** the header overlays the hero section

#### Scenario: Active link indicator

- **WHEN** the page loads
- **THEN** the active nav link has a coral underline (#f15d44)

#### Scenario: Mobile menu

- **WHEN** the viewport is mobile
- **THEN** a hamburger menu icon appears
- **AND** tapping it opens a mobile navigation drawer

### Requirement: Hero section

The template SHALL display a full-height hero section with a background image, accent subtitle, large heading, description text, and a "Read More" CTA button.

#### Scenario: Hero content

- **WHEN** the page loads
- **THEN** the subtitle "FITNESS ELEMENTS" is visible in coral (#f15d44), uppercase, letter-spaced
- **AND** the heading "BMI CALCULATOR" is displayed in large white text
- **AND** a description paragraph is shown
- **AND** a "Read More" primary CTA button is present

#### Scenario: Hero background

- **WHEN** the page loads
- **THEN** a full-width background image covers the hero area
- **AND** the hero is at least 880px tall with top padding ~335px

### Requirement: About section

The template SHALL display a two-column about section with an image (with play button overlay) and text content.

#### Scenario: About content

- **WHEN** the page loads
- **THEN** the heading "Story About Us" is displayed in uppercase bold
- **AND** two paragraphs of text are shown
- **AND** a "Read More" primary CTA button is present

#### Scenario: About image with video play

- **WHEN** the page loads
- **THEN** a gym/fitness image is displayed on the left column
- **AND** a play button icon is centered over the image

### Requirement: Services section

The template SHALL display a full-width services section with a large image on the left and four service cards on a dark background on the right.

#### Scenario: Service cards

- **WHEN** the page loads
- **THEN** four service cards are visible in a 2×2 grid
- **AND** the cards are: Strategies, Yoga, Workout, Weight Loss
- **AND** each card has an icon, title, and description text
- **AND** cards alternate between dark (#141414) and slightly lighter (#1e1e1e) backgrounds
- **AND** text is white heading with light gray (#bdbdbd) description

#### Scenario: Services image

- **WHEN** the page loads
- **THEN** a tall fitness image fills the left column of the services section

### Requirement: Classes section

The template SHALL display a carousel of class cards with background images, class names, and instructor names.

#### Scenario: Classes carousel

- **WHEN** the page loads
- **THEN** the heading "UNLIMITED CLASSES" is displayed
- **AND** class cards are shown in a carousel with dot navigation
- **AND** each card has a background image, class name overlay, and instructor name with a user icon

#### Scenario: Class cards content

- **WHEN** the carousel is visible
- **THEN** classes include: Yoga (Ryan Knight), Running (Randy Rivera), Personal Training (Cole Robertson), Karate (Kevin McCormick), Dance (Russell Lane)
- **AND** each card has a semi-transparent dark overlay at the bottom with text
- **AND** carousel dots are 9px circles, active dot is 42px wide pill in orange (#f67831)

### Requirement: Banner section

The template SHALL display a full-width dark banner section with text content and a person image, plus a "Contact Now" CTA.

#### Scenario: Banner content

- **WHEN** the page loads
- **THEN** a banner section with dark background is visible
- **AND** heading text and a paragraph are shown
- **AND** a "Contact Now" primary CTA button is present
- **AND** an image of a person is displayed on the right side

### Requirement: Membership plans section

The template SHALL display three pricing cards (Basic, Standard, Premium) with gradient-topped titles, prices, feature lists, and CTAs.

#### Scenario: Pricing cards

- **WHEN** the page loads
- **THEN** the heading "MEMBERSHIP PLANS" is displayed
- **AND** three pricing cards are visible: Basic ($17/mo), Standard ($57/mo), Premium ($98/mo)
- **AND** each card has a gradient header (#eb3c5a → #f67831) with plan name in white
- **AND** each card shows price in coral (#f15d44) with "/01 mo" suffix in gray
- **AND** each card lists features: Duration (12 months), Personal trainer count, Amount of people, Number of visits (Unlimited)
- **AND** each card has a "Start Now" button

#### Scenario: Card styling

- **WHEN** pricing cards are rendered
- **THEN** each card has white background with drop shadow (0 15px 49px rgba(0,0,0,0.15))
- **AND** the gradient title has a triangular bottom border decoration

### Requirement: Register section

The template SHALL display a registration form section with a form on the left and an image on the right.

#### Scenario: Registration form

- **WHEN** the page loads
- **THEN** the heading "Register Now" is visible with subtitle "The First 7 Day Trial Is Completely Free With The Teacher"
- **AND** the form has fields: First Name, Email Address, Last Name, Mobile No
- **AND** a "Get Started" submit button with gradient background (#eb3c5a → #f67831) is present
- **AND** form inputs have light gray border (#ebebeb), 46px height

#### Scenario: Register section layout

- **WHEN** the page loads
- **THEN** the form sits on a white card on the left (with padding)
- **AND** an image occupies the right column
- **AND** the section background is light gray (#f5f4f4)

### Requirement: Latest blog section

The template SHALL display a three-column blog section with post cards containing images, dates, tags, and titles.

#### Scenario: Blog cards

- **WHEN** the page loads
- **THEN** the heading "Latest Blog" is displayed
- **AND** three blog post cards are visible
- **AND** each card has an image, a date badge, a category tag, and a post title link

### Requirement: Footer banner section

The template SHALL display a two-column footer banner section with background images and CTAs.

#### Scenario: Footer banner cards

- **WHEN** the page loads
- **THEN** two banner cards are displayed side by side
- **AND** the left card says "New member" / "7 days for free" with description and "Get Started" CTA
- **AND** the right card says "contact us" / "09 746 204" with description and "Get Started" CTA
- **AND** both cards have background images

### Requirement: Footer section

The template SHALL display a footer with contact information, a mailing list subscribe form, copyright text, and social links.

#### Scenario: Footer content

- **WHEN** the page loads
- **THEN** three contact columns are visible: Phone, Address, Email
- **AND** a subscribe section with background image has a heading "Subscribe To Our Mailing List", input field, and send button
- **AND** copyright text and social icons (Facebook, Twitter, Instagram, Dribbble) are displayed
- **AND** the footer links to Component Dock (https://www.componentdock.com/)

## Verification checklist

- [ ] All sections match the original section order: Header → Hero → About → Services → Classes → Banner → Membership → Register → Blog → Footer Banner → Footer
- [ ] Design tokens match: Poppins font, gradient buttons (#eb3c5a → #f67831), coral accent (#f15d44), dark service cards (#141414/#1e1e1e)
- [ ] Primary button style: 160px × 46px, gradient borders, gradient fill on hover
- [ ] Membership cards have gradient title bar with triangle decoration and shadow
- [ ] Register form has 4 fields (First Name, Email, Last Name, Mobile) with gradient submit button
- [ ] Blog cards show date, category tag, and title
- [ ] Footer banner has two side-by-side cards with background images and CTAs
- [ ] Footer includes Component Dock link (https://www.componentdock.com/)
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] Placeholder images use picsum.photos with deterministic seeds
- [ ] Google Fonts loaded via link tag (Poppins)
- [ ] Tests pass with 100% coverage
- [ ] Build succeeds (vite + react 19 + tailwind 4 + typescript)
