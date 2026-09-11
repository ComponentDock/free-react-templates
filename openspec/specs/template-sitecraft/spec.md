---
name: template-sitecraft
description: >
  Recreation of ColorLib "Complex" (https://colorlib.com/wp/template/complex/)
  as a construction company landing page template named "Sitecraft".
  Golden-amber brand accents, Poppins typography, parallax sections,
  services tabs, project gallery, team accordion, testimonials, and newsletter.
design_tokens:
  brand_color: '#F7B633'
  ink: '#111827'
  surface: '#f5f5f5'
  font_family: 'Poppins (Google Fonts)'
  button_radius: '0.375rem'
  dark_mode: 'class-based (dark variant)'
---

# Sitecraft — Construction Company Landing Page

## Overview

A free React template recreating the ColorLib "Complex" construction company
landing page under the name "Sitecraft". The design features a golden-amber
brand accent on clean white/whitesmoke backgrounds with Poppins typography.
Sections include a hero slider, services tabs and grid, animated counters,
a project gallery, team section with accordion, client testimonials,
a newsletter subscription form, and a multi-column footer.

## Source

- ColorLib slug: `complex`
- Preview URL: https://preview.colorlib.com/theme/complex/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/complex-free-template.jpg

## Design Tokens

| Token       | Value     | Usage                              |
| ----------- | --------- | ---------------------------------- |
| brand       | `#F7B633` | Nav active/hover, buttons, accents |
| ink         | `#111827` | Headings, dark text                |
| surface     | `#f5f5f5` | Body background                    |
| font-family | Poppins   | All text (weights 300–700)         |

## Sections (in order)

### 1. Navbar

- Logo: "Sitecraft" (bold, uppercase, brand color)
- Nav links: Home, Projects, Services, About, Contact
- Sticky top, white background, dark text, brand-color hover

### 2. Hero

- Full-width section with parallax-style background image
- Dark overlay for contrast
- Heading: "Our Obsession Is Distinctive Interiors"
- Subheading: "Providing All Kinds of Construction Services"
- White text, centered

### 3. Services Tabs (What We Offer)

- Three tabbed panels: Interior Design, Architecture, Building Modeling
- Each panel: split layout with image (left) + description + bullet list (right)
- Active tab highlighted with brand color

### 4. Services Grid

- 6 service cards in a 3-column grid
- Each: icon (lucide-react), title, short description
- Services: General Constructing, Building Modeling, Design Build,
  Construction Services, Pre-Construction Design, Construction Management

### 5. Counters

- Parallax background with dark overlay
- 4 stat counters: Projects (1,539), Employees (3,653),
  Constructors (5,987), Partners (3,999)
- Icon + number + label per stat

### 6. Projects Gallery

- Heading: "Our Projects"
- 6 project cards in an asymmetric grid (4+8, 6+6, 8+4 layout)
- Each: image with hover overlay + title
- Projects: Apartment Interior, Office Space, Condo Building,
  Kitchen Interior, Commercial Building, Hotel Building

### 7. Team Section

- Parallax background with dark overlay
- Heading: "Our Team"
- Split layout: 4 team member cards (left) + accordion (right)
- Members: Ian Moore (Electrician), Jack Clark (Engineer),
  Kiven Lewis (Architect), Charles Scott (Assistant Engineer)
- Accordion: "Who We Are", "What We Do", "Why Choose Us"

### 8. Testimonials

- Heading: "Client Says"
- 3 testimonial slides with avatar, name, and quote
- Clients: Andrew Field, Mark Bubble, Adam Smith

### 9. Newsletter

- Heading: "Subscribe Newsletter"
- Email input + "Subscribe Now" button (brand color)

### 10. Footer

- Contact info bar (address, email/website, phone)
- 4-column grid: About + social icons, Information links, Instagram grid, Contact Info
- Bottom bar: copyright + "More templates at Component Dock" link

## Scenarios

### Navbar renders all sections

- GIVEN the page loads
- THEN the navbar displays "Sitecraft" logo
- AND nav links: Home, Projects, Services, About, Contact are visible

### Hero section displays correctly

- GIVEN the page loads
- THEN the hero heading "Our Obsession Is Distinctive Interiors" is visible
- AND the subheading "Providing All Kinds of Construction Services" is visible

### Services tabs switch content

- GIVEN the services tabs section is visible
- WHEN the user clicks the "Architecture" tab
- THEN the Architecture panel content is displayed
- AND the Interior Design panel is hidden

### Services grid shows 6 items

- GIVEN the page loads
- THEN 6 service cards are rendered with icons and titles

### Counter section displays stats

- GIVEN the page loads
- THEN 4 counter items are visible with their labels

### Projects gallery shows 6 items

- GIVEN the page loads
- THEN 6 project cards are rendered with images and titles

### Team section shows members and accordion

- GIVEN the page loads
- THEN 4 team member cards are visible
- AND the accordion has 3 sections
- WHEN the user clicks "What We Do?"
- THEN the "What We Do?" panel content is visible

### Testimonials render

- GIVEN the page loads
- THEN 3 testimonial items are rendered with names and quotes

### Newsletter form works

- GIVEN the newsletter section is visible
- WHEN the user types an email and clicks "Subscribe Now"
- THEN the form resets

### Footer contains Component Dock link

- GIVEN the page loads
- THEN the footer contains a link to https://www.componentdock.com/
- AND the link text mentions "Component Dock"
