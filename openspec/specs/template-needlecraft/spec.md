# Template: Needlecraft (Health & Wellness)

## Purpose

Recreation of ColorLib's **Acupuncture** free website template.

- Source: https://colorlib.com/wp/template/acupuncture/
- Preview: https://preview.colorlib.com/theme/acupuncture/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/acupuncture-free-template.jpg
- Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design Tokens

Extracted from `css/style.css` of the live preview:

| Token                 | Value                                 | Notes                                                              |
| --------------------- | ------------------------------------- | ------------------------------------------------------------------ |
| Brand / primary color | `#2fc4b2`                             | Teal-green, used on `.text-primary`, `.bg-primary`, `.btn-primary` |
| Body background       | `#ffffff`                             |                                                                    |
| Dark text             | `#364d59`                             | Main body text color                                               |
| Light section bg      | `#f8f9fa`                             | `.bg-light` — testimonials section                                 |
| CTA section bg        | `#2fc4b2`                             | Full-width primary banner                                          |
| Button border-radius  | `7px`                                 | `.btn` default                                                     |
| Icon border-radius    | `50%`                                 | Circular icon containers                                           |
| Heading font          | `"Playfair Display", serif`           | Google Fonts                                                       |
| Body font             | `"Roboto", sans-serif`                | Google Fonts                                                       |
| Section padding       | `py-5` (Bootstrap) → Tailwind `py-20` | Generous vertical spacing                                          |

## Requirements

### Requirement: Navbar

The template SHALL display a sticky navbar with the brand name and navigation links.

#### Scenario: Navbar renders with brand and links

- **WHEN** the page is loaded
- **THEN** the navbar displays "Needlecraft." as brand text (teal dot after name)
- **AND** links "Home", "Services", "Testimonials", "Blog", "About", "Contact" are visible
- **AND** on mobile the hamburger menu toggles the nav drawer

### Requirement: Hero

The template SHALL display a hero section with a background image, headline, and play button.

#### Scenario: Hero section shows headline and play button

- **WHEN** the page is loaded
- **THEN** the hero has a full-width background image
- **AND** the headline reads "Improve your overall health." with "health." in teal
- **AND** a subheading text is shown below
- **AND** a circular play-video button labeled "Watch intro video" is centered

### Requirement: Services Row

The template SHALL display five service icons in equal columns.

#### Scenario: Five service icons displayed in equal columns

- **WHEN** the page is loaded
- **THEN** 5 service items are shown in a full-width row (equal columns)
- **AND** each has a circular icon and a label: "Acupuncture", "Therapy", "Foot", "Natural", "Healing"

### Requirement: About / Why Choose Us

The template SHALL display an about section with text on the left and an image on the right.

#### Scenario: About section with image and text

- **WHEN** the page is loaded
- **THEN** the "Why Choose Us" section has an image on the right and heading + text on the left
- **AND** a "Contact us now" button (primary) is shown below the text

### Requirement: Service Cards

The template SHALL display four service detail cards in a 2x2 grid.

#### Scenario: Four service detail cards in a 2x2 grid

- **WHEN** the page is loaded
- **THEN** 4 service detail cards are shown in 2 columns
- **AND** each has a circular icon, heading, and description paragraph

### Requirement: Testimonials

The template SHALL display a testimonials section on a light background with three quote cards.

#### Scenario: Testimonials section on light background

- **WHEN** the page is loaded
- **THEN** the testimonials section has a light gray background (#f8f9fa)
- **AND** "Happy Customers" heading is shown with "Testimonials" label in teal above
- **AND** 3 testimonial cards each with a blockquote and author (avatar, name, role)

### Requirement: Blog

The template SHALL display a blog section with three post cards.

#### Scenario: Blog posts section

- **WHEN** the page is loaded
- **THEN** "News & Tips" heading is shown with "Blog" label in teal above
- **AND** 3 blog post cards are shown in 3 columns
- **AND** each has an image, meta date/author, heading, and description

### Requirement: CTA Banner

The template SHALL display a full-width teal call-to-action banner.

#### Scenario: Full-width call-to-action banner

- **WHEN** the page is loaded
- **THEN** a teal (#2fc4b2) full-width banner is shown
- **AND** heading "What are you waiting for?" in white
- **AND** subtext below, plus a "Contact us now" white button

### Requirement: Footer

The template SHALL display a footer with contact information and a Component Dock link.

#### Scenario: Footer with contact info and copyright

- **WHEN** the page is loaded
- **THEN** 3 columns show phone, address, and email contact info
- **AND** copyright line with "Component Dock" link replaces original attribution
- **AND** "Terms" and "Privacy" links are in the bottom-right
