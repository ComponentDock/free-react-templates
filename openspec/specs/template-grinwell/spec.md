# Grinwell — Dental Clinic Landing Template

Recreation of ColorLib **Dentures** (https://colorlib.com/wp/template/dentures/).

## Purpose

Grinwell is a free dental clinic landing page template that recreates the ColorLib Dentures design under a new name. It provides a clean, professional dental clinic website with sections for hero, service features, free quote form, testimonials, why-choose-us, team, and footer — built with React 19, Tailwind CSS 4, and TypeScript.

## Design Tokens

| Token           | Value                                                             | Source                                            |
| --------------- | ----------------------------------------------------------------- | ------------------------------------------------- |
| Brand primary   | `#12cad6` (teal/cyan)                                             | `.btn.btn-primary`, `.free-quote .form-wrap` bg   |
| Body font       | Raleway (Google Fonts, 300/400/600)                               | `@font-face` declarations in style.css            |
| Body text       | `#4d4d4d`                                                        | `body` color                                      |
| Button shape    | Square (border-radius: 0) — both fill and outline variants       | `.btn { border-radius: 0; }`                      |
| White button    | `#fff` bg, `#12cad6` color                                       | `.btn.btn-white`                                  |
| Outline-white   | transparent bg, `#fff` border+color                               | `.btn.btn-outline-white`                          |
| Hero overlay    | `rgba(0, 0, 0, 0.6)`                                             | `.site-blocks-cover.overlay:before`               |
| Dark section bg | `#333333`                                                        | `.site-section` (stats/team area), `.site-footer`  |
| Muted text      | `#737373` / `#999999`                                            | Footer text, links, copyright                     |
| Card border     | `#efefef`                                                        | `.team` card border                               |
| Team photo      | 90px circle (`border-radius: 50%`)                               | `.team img`                                       |
| Client photo    | Circular avatar (top-right aligned)                               | `.client .name-photo img`                         |
| Feature icons   | Teal `#12cad6` tinted circular background                        | `.site-block-feature .wrap-icon`                  |
| Dark mode       | None (light-only template)                                       | —                                                 |

## Requirements

### Requirement: Navbar displays navigation and branding

The template navbar SHALL display the site logo "Grinwell", navigation links for Home (with dropdown), About, Services, Testimonials, and Contact, with a sticky dark background.

#### Scenario: Navbar renders all elements

- **WHEN** the page loads
- **THEN** I see the "Grinwell" logo link
- **AND** I see navigation links for Home, About, Services, Testimonials, Contact
- **AND** the Home link has a dropdown submenu

#### Scenario: Navbar is sticky on scroll

- **WHEN** I scroll down the page
- **THEN** the navbar remains fixed at the top of the viewport

### Requirement: Hero section displays heading, video button, and CTAs

The hero section SHALL display a full-width background image with a dark overlay, a centered video play button, the heading "Dental Clinic for Everyone", a subtitle, and two call-to-action buttons ("Check Out Our Services" white fill, "About Us" white outline).

#### Scenario: Hero renders heading and buttons

- **WHEN** the hero section is visible
- **THEN** I see the heading "Dental Clinic for Everyone"
- **AND** I see a video play button (circle with play icon)
- **AND** I see "Check Out Our Services" button with white background
- **AND** I see "About Us" button with white outline border

#### Scenario: Hero has parallax background

- **WHEN** I scroll through the hero section
- **THEN** the background image scrolls at a different rate than the content (parallax effect)

### Requirement: Features grid displays six service cards

The features section SHALL display a 3-column, 2-row grid of six service cards, each with an icon, title, and short description. The services are: Periodontology, Tooth Whitening, Preventative Care, Stethoscope, First Aid Kit, Tooth Brace.

#### Scenario: Features grid shows all six services

- **WHEN** the features section is visible
- **THEN** I see six service cards arranged in a 3-column grid
- **AND** each card has an icon, a title, and a description

#### Scenario: Feature cards have icon badges

- **WHEN** I look at a feature card
- **THEN** the icon is displayed in a circular teal-tinted background

### Requirement: Free quote form collects contact information

The free quote section SHALL display a split layout with a form on the left (on a teal `#12cad6` background card) and an image on the right. The form has fields for name, email, and message, plus a "Get a quote now" submit button.

#### Scenario: Free quote form has all fields

- **WHEN** the free quote section is visible
- **THEN** I see a name input field
- **AND** I see an email input field
- **AND** I see a message textarea
- **AND** I see a "Get a quote now" submit button

#### Scenario: Free quote form card has teal background

- **WHEN** I look at the form card
- **THEN** the form wrapper has a `#12cad6` teal background
- **AND** the form text is white

### Requirement: Testimonials section displays client quotes

The testimonials section SHALL display four client testimonial cards in a row, each with a photo (circular avatar, top-right aligned), name, "Customer" role label, and a quote paragraph.

#### Scenario: Testimonials shows four clients

- **WHEN** the testimonials section is visible
- **THEN** I see four testimonial cards
- **AND** each card has a client name, "Customer" role, and a quote

#### Scenario: Client photos are circular

- **WHEN** I look at a testimonial card
- **THEN** the client photo is displayed as a circle

### Requirement: Why Choose Us section displays features and image

The why-choose-us section SHALL display a split layout with a heading "Why Choose Us", description text, and three feature items with icons (Fast Support, Happy Customers, 24/7 Support) on the left, and an image with stats overlay on the right.

#### Scenario: Why Choose Us shows all feature items

- **WHEN** the why-choose-us section is visible
- **THEN** I see the heading "Why Choose Us"
- **AND** I see three feature items with icons: Fast Support, Happy Customers, 24/7 Support

#### Scenario: Why Choose Us has split layout

- **WHEN** I look at the why-choose-us section
- **THEN** the left half contains text and features
- **AND** the right half contains an image

### Requirement: Team section shows team member cards

The team section SHALL display three team member cards, each with a circular photo (90px), name, role, social media icons (Facebook, Twitter, Instagram, LinkedIn), and a short bio paragraph.

#### Scenario: Team shows three members

- **WHEN** the team section is visible
- **THEN** I see three team member cards
- **AND** each card has a photo, name, role, social links, and bio

#### Scenario: Team photos are circular

- **WHEN** I look at a team card
- **THEN** the photo is displayed as a 90px circle

### Requirement: Footer has navigation, news, newsletter, and social links

The footer SHALL display three columns: navigation links (Home, Services, News, Team, About Us, Privacy Policy, Contact Us, Membership), recent news items with thumbnails, a newsletter subscription form, social media icons, and a Component Dock attribution link.

#### Scenario: Footer has all columns

- **WHEN** the footer is visible
- **THEN** I see navigation links in the first column
- **AND** I see recent news items with thumbnails in the second column
- **AND** I see a newsletter subscription form in the third column
- **AND** I see social media icons (Facebook, Twitter, Instagram, LinkedIn)
- **AND** I see a link to componentdock.com

#### Scenario: Footer has dark background

- **WHEN** I look at the footer
- **THEN** the footer background is `#333333` (dark gray)
- **AND** footer headings are white
- **AND** footer text is muted gray
