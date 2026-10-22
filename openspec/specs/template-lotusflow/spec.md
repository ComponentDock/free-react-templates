# Template: LotusFlow (Yoga Studio Landing)
<!-- prep-status: shipped-as=pranayama -->
> **SHIPPED-UNDER** — the ColorLib `yoga-studio` design this prep describes already
> ships as `apps/pranayama` (<https://pranayama.free.componentdock.com>).
> Do not scaffold `apps/lotusflow`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-pranayama/spec.md`.

## Purpose

LotusFlow is a single-page YOGA STUDIO LANDING page in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Yoga Studio" free template (source:
https://colorlib.com/wp/template/yoga-studio/), built under a DIFFERENT name
(**LotusFlow**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

**Preview URL:** https://preview.colorlib.com/theme/yoga-studio/ (UNREACHABLE
— returned HTTP 404 at prep time. Design notes derived from ColorLib page
description, screenshot, and common yoga template patterns.)

**Original description:** "Yoga Studio is a modern, vibrant and lively free
responsive yoga website template for all the passionate yogis out there, ready
to scale their businesses."

**Original features (from ColorLib page):** Hero slider, call-to-action
buttons, contact page with Google Maps, social media icons, testimonials
slider, modern pricing tables, news/blog section.

**Recreation name:** LotusFlow (NEW — the ColorLib source is "Yoga Studio").
App folder `apps/lotusflow`, package `@free-react-templates/lotusflow`.

## Design tokens

> **Note:** Preview DOM was unreachable (HTTP 404). Tokens below are inferred
> from the ColorLib page description ("modern, vibrant and lively"), the
> screenshot, and standard yoga-studio template conventions. Implementer should
> cross-check against the screenshot at:
> https://colorlib.com/wp/wp-content/uploads/sites/2/yogastudio-free-template.jpg

- **Primary brand color:** `#E8A87C` (warm terracotta/peach — yoga warmth)
- **Secondary color:** `#41B3A3` (sage/teal — calm, wellness)
- **Accent color:** `#C38D9E` (dusty rose — feminine, gentle)
- **Dark color:** `#202A44` (deep navy — text, headings, dark sections)
- **Light backgrounds:** `#FFFFFF` (white sections), `#F8F5F0` (warm off-white),
  `#FAFAFA` (light gray alternating)
- **Font family (headings):** `"Playfair Display", serif` (elegant, yoga-appropriate)
- **Font family (body):** `"Open Sans", sans-serif` (clean, readable)
- **Buttons:** Rounded corners (`border-radius: 30px` pill shape), solid primary
  background, white text, hover darkens 10%
- **Section padding:** generous vertical spacing (`py-20` / `128px`)
- **Hero:** Full-width with background image (yoga class photo), overlay
  gradient dark-to-transparent, centered white headline + CTA button
- **Testimonials:** Carousel/slider with card design, centered quote, author
  name + role
- **Pricing tables:** 3-column grid, middle column highlighted (primary color
  border or background), feature list with checkmarks
- **Footer:** Dark background (`#202A44`), light text, multi-column layout
  with links, newsletter form, social icons

## Requirements

### Section: Navbar

Feature: Navbar

#### Scenario: Navbar renders with logo and navigation links

- **GIVEN** the user visits the LotusFlow homepage
- **THEN** the navbar displays the "LotusFlow" logo text on the left
- **AND** the navbar contains navigation links: Home, About, Classes, Pricing, Testimonials, Contact
- **AND** the navbar is sticky (sticks to top on scroll)

#### Scenario: Navbar links scroll to sections

- **GIVEN** the user is on the LotusFlow homepage
- **WHEN** the user clicks "About" in the navbar
- **THEN** the page scrolls smoothly to the About section

### Section: Hero

Feature: Hero

#### Scenario: Hero section displays with background and CTA

- **GIVEN** the user visits the LotusFlow homepage
- **THEN** the hero section displays a full-width background image
- **AND** the hero contains the headline "Find Your Inner Peace"
- **AND** the hero contains a subheadline about yoga practice
- **AND** the hero contains a "Start Your Journey" call-to-action button

### Section: About

Feature: About

#### Scenario: About section displays studio information

- **GIVEN** the user scrolls to the About section
- **THEN** the section displays the heading "About Our Studio"
- **AND** the section contains a description of the yoga studio
- **AND** the section displays a studio image alongside the text

### Section: Classes

Feature: Classes

#### Scenario: Classes section displays available yoga classes

- **GIVEN** the user scrolls to the Classes section
- **THEN** the section displays the heading "Our Classes"
- **AND** the section shows at least 3 class cards
- **AND** each class card displays a class name, description, and image

### Section: Pricing

Feature: Pricing

#### Scenario: Pricing section displays plans

- **GIVEN** the user scrolls to the Pricing section
- **THEN** the section displays the heading "Pricing Plans"
- **AND** the section shows 3 pricing columns (e.g., Basic, Standard, Premium)
- **AND** each pricing column shows a plan name, price, feature list, and CTA button
- **AND** the middle column is visually highlighted

#### Scenario: Pricing plans show features

- **GIVEN** the user views the pricing section
- **THEN** each plan lists at least 4 features with checkmark icons

### Section: Testimonials

Feature: Testimonials

#### Scenario: Testimonials section displays client quotes

- **GIVEN** the user scrolls to the Testimonials section
- **THEN** the section displays the heading "What Our Students Say"
- **AND** the section shows testimonial cards with a quote, author name, and role
- **AND** testimonials are displayed in a carousel/slider format

### Section: Contact

Feature: Contact

#### Scenario: Contact section displays form and map

- **GIVEN** the user scrolls to the Contact section
- **THEN** the section displays the heading "Get In Touch"
- **AND** the section contains a contact form with fields: Name, Email, Subject, Message
- **AND** the section displays a Google Maps embed or placeholder
- **AND** the form has a "Send Message" submit button

### Section: Footer

Feature: Footer

#### Scenario: Footer renders with links and branding

- **GIVEN** the user scrolls to the footer
- **THEN** the footer displays the "LotusFlow" logo
- **AND** the footer contains navigation links
- **AND** the footer contains social media icon links
- **AND** the footer links to https://www.componentdock.com/
- **AND** the footer shows a copyright notice

## Verification checklist

- [ ] Navbar renders with logo + 6 nav links + sticky behavior
- [ ] Hero section has background image, headline, subheadline, CTA button
- [ ] About section has heading, description, image
- [ ] Classes section shows 3+ class cards with name/description/image
- [ ] Pricing section shows 3 columns, middle highlighted, features with checkmarks
- [ ] Testimonials section shows quotes in carousel format
- [ ] Contact section has form (4 fields + submit) and map placeholder
- [ ] Footer has logo, nav links, social icons, Component Dock link, copyright
- [ ] All sections use correct design tokens (terracotta primary, sage secondary)
- [ ] Responsive layout works on mobile/tablet/desktop
- [ ] Dark mode toggle works correctly
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Footer links to https://www.componentdock.com/
- [ ] `npm run spec:validate` passes
- [ ] App builds without errors
