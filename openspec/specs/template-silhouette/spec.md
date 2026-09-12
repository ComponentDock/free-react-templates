# Spec: Silhouette — Apparel Store Landing Template

Recreation of ColorLib **Fashion 2** (https://colorlib.com/wp/template/fashion-2/).

**Preview unreachable** — design inferred from ColorLib description, screenshot URL,
and the related Fashion template structure (section-1 hero, section-4 products,
section-2 testimonials, section-3 blog, footer).

## Purpose

A single-page apparel store landing template with hero, product grid, about section,
testimonials, blog posts, newsletter signup, and footer. Minimalist fashion aesthetic
with Lato + Playfair Display fonts, green (#6DAB3C) brand color, and dark charcoal
(#1a1a2e) section backgrounds.

## Requirements

### Requirement: Navbar with mobile toggle

The template SHALL display a sticky top navigation bar with the brand logo "Silhouette"
and links to Home, About, Collections, Blog, and Contact sections. On mobile, a
hamburger button SHALL toggle the mobile menu.

#### Scenario: Desktop navigation renders all links

- **WHEN** the page loads on a desktop viewport
- **THEN** the navbar shows the logo "Silhouette" and links to Home, About, Collections, Blog, Contact

#### Scenario: Mobile menu toggles on button click

- **WHEN** the user clicks the hamburger button on mobile
- **THEN** the mobile menu opens showing all navigation links
- **AND** the button label changes to "Close menu"

#### Scenario: Mobile menu closes when link clicked

- **WHEN** the mobile menu is open and the user clicks a navigation link
- **THEN** the mobile menu closes

### Requirement: Hero section with CTA

The template SHALL display a hero section with a headline "Define Your Own Style",
descriptive subtext about fashion trends, and a "Shop Now" CTA button.

#### Scenario: Hero renders headline and CTA

- **WHEN** the page loads
- **THEN** the hero section displays the headline, descriptive text, and a "Shop Now" button

#### Scenario: Hero displays fashion image

- **WHEN** the page loads
- **THEN** the hero section shows a fashion model image

### Requirement: Products grid

The template SHALL display a 4-column grid of 8 product cards, each with an image,
product name, and price.

#### Scenario: All 8 products render

- **WHEN** the page loads
- **THEN** 8 product cards are displayed with names and prices

#### Scenario: Product cards have images

- **WHEN** the page loads
- **THEN** each product card shows an image with the product name as alt text

### Requirement: About section with features

The template SHALL display a split layout about section with an image on the left
and a feature list on the right. The feature list SHALL include Free Shipping,
Secure Payment, and Sustainable items with lucide-react icons.

#### Scenario: About section renders heading and features

- **WHEN** the page loads
- **THEN** the about section shows "Crafted with Intention" heading and 3 features

#### Scenario: About section displays image

- **WHEN** the page loads
- **THEN** the about section shows a design process image

### Requirement: Testimonials section

The template SHALL display 3 testimonials with quote text, author name, and role.

#### Scenario: All 3 testimonials render

- **WHEN** the page loads
- **THEN** 3 blockquotes are displayed with author names and roles

#### Scenario: Section heading renders

- **WHEN** the page loads
- **THEN** the section shows "What People Say" heading

### Requirement: Blog section

The template SHALL display a 3-column grid of blog post cards with image, date,
title, and excerpt.

#### Scenario: All 3 blog posts render

- **WHEN** the page loads
- **THEN** 3 article cards are displayed with titles and dates

#### Scenario: Blog posts have images

- **WHEN** the page loads
- **THEN** each blog card shows an image with the post title as alt text

### Requirement: Newsletter signup

The template SHALL display a newsletter section with an email input and subscribe
button. The form SHALL prevent default submission.

#### Scenario: Newsletter form renders

- **WHEN** the page loads
- **THEN** an email input with placeholder "Enter your email" and a "Subscribe" button are shown

#### Scenario: Form submission is prevented

- **WHEN** the user types an email and clicks Subscribe
- **THEN** the page does not reload and the input retains its value

### Requirement: Footer with Component Dock link

The template SHALL display a 3-column footer with About text, Quick Links, and
Contact information. The bottom bar SHALL show the copyright year and a link to
Component Dock.

#### Scenario: Footer renders with dynamic year

- **WHEN** the page loads
- **THEN** the footer shows the current year in the copyright notice

#### Scenario: Footer contains Component Dock link

- **WHEN** the page loads
- **THEN** a link to https://www.componentdock.com/ labeled "Component Dock" is present

#### Scenario: Footer shows 3-column layout

- **WHEN** the page loads
- **THEN** the footer displays Quick Links and Contact sections

## Design tokens

- **Fonts:** Lato (sans-serif body), Playfair Display (serif headings)
- **Brand color:** #6DAB3C (green primary)
- **Accent color:** #B97EBB (lavender/purple)
- **Dark charcoal:** #1a1a2e (nav, footer backgrounds)
- **White:** #ffffff (card backgrounds, light sections)
- **Light gray:** #f7f7f7 (section alternating backgrounds)
- **Button style:** rounded, flat, green primary, hover darkens
- **Section rhythm:** alternating light/dark backgrounds, generous padding

## Coverage target: 100% lines/functions/branches/statements
