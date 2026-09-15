# Template: Warehaus (E-Commerce Shop)

## Purpose

Warehaus is a single-page e-commerce shop landing page in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Winkel" free template (source:
https://colorlib.com/wp/template/winkel/), built under a
DIFFERENT name (**Warehaus**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

**Source mapping:**

- **ColorLib item:** "Winkel" (TEMPLATES.md line 1232)
- **Source URL:** https://colorlib.com/wp/template/winkel/
- **Preview URL:** https://preview.colorlib.com/theme/winkel/

## Requirements

### Requirement: Page renders all sections

The template MUST display all major sections in order: TopBar, Navbar, Hero, Services, BestSellers, NewCollections, Products, Counter, Testimonials, Newsletter, Footer.

#### Scenario: All sections are visible

- **WHEN** the user opens the template
- **THEN** the top bar shows phone and email info
- **AND** the navbar shows brand name and navigation links
- **AND** the hero section displays a headline and CTA
- **AND** the services section shows 3 service cards
- **AND** the best sellers section shows 4 product cards
- **AND** the new collections section shows 2 collection cards
- **AND** the products section shows 4 product cards with category filters
- **AND** the counter section shows 4 stat items
- **AND** the testimonials section shows a review
- **AND** the newsletter section shows an email input
- **AND** the footer shows menu and contact info

### Requirement: Navigation works

The navbar MUST display links for Home, Shop, About, Blog, Contact and a cart icon with badge.

#### Scenario: Nav links are present

- **WHEN** the navbar is visible
- **THEN** it contains links for Home, Shop, About, Blog, Contact
- **AND** a cart icon with item count badge

### Requirement: Hero carousel advances

The hero section MUST auto-advance between slides and support manual navigation.

#### Scenario: Carousel auto-advances

- **WHEN** the hero section is displayed
- **AND** 5 seconds elapse
- **THEN** the slide content changes

### Requirement: Products filter by category

The products section MUST allow filtering by category tabs (All, Men, Women, Kids).

#### Scenario: Category filter works

- **WHEN** the user clicks the "Women" category button
- **THEN** only women's products are displayed

### Requirement: Footer links to Component Dock

The footer MUST link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Component Dock link present

- **WHEN** the footer is visible
- **THEN** it contains a link to componentdock.com
