# Template: Proplib (Real Estate)
<!-- prep-status: shipped-as=propwise -->
> **SHIPPED-UNDER** — the ColorLib `real-estate` design this prep describes already
> ships as `apps/propwise` (<https://propwise.free.componentdock.com>).
> Do not scaffold `apps/proplib`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-propwise/spec.md`.

## Purpose

Recreation of ColorLib's "Real Estate" template
(https://colorlib.com/wp/template/real-estate/) as a React 19 + Vite +
Tailwind CSS 4 + TypeScript single-page application.

- **Source slug:** `real-estate`
- **Preview URL:** https://preview.colorlib.com/theme/real-estate/ (404 — screenshot only)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/realestate-free-realstate-website-template.jpg
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript (strict), Vitest + Testing Library
- **Source design:** ColorLib "Real Estate" — https://colorlib.com/wp/template/real-estate/

## Design tokens

Extracted from screenshot (preview was unreachable — 404):

| Token | Value | Notes |
|-------|-------|-------|
| Primary accent | Orange → Yellow gradient | CTA button, "Sell" tab; approx `#f7a04b` → `#fcd34d` |
| Background | `#FFFFFF` (white) | Main body background |
| Hero background | Full-bleed cityscape photo | Sunset/golden lighting, dark overlay for text contrast |
| Heading text | Dark navy/black (`#1a1a2e` approx) | Section headings |
| Body text | Dark gray (`#4a4a4a` approx) | Paragraphs, descriptions |
| Subtitle text | Medium gray | "Who are in extremely love with eco friendly system" |
| Font family | Sans-serif (Poppins or similar geometric sans) | Clean, modern feel |
| CTA button | Rounded, orange-to-yellow gradient, white text | "Search Properties →" |
| Cards | White background, subtle shadow/border | Feature cards (Expert Technicians, Professional Service, Great Support) |
| Icons | Line icons, dark color | Feature card icons |
| Section backgrounds | Alternating white and very light gray | Clean separation between sections |

## Sections (page order from screenshot)

1. **Header / Navigation**
   - Top bar: phone number (+12312-3-1209), SELL/RENT PROPERTY link, LOGIN / REGISTER
   - Main nav: Logo ("M." in bold), links: HOME, SERVICE, PROPERTY, CONTACT, GENERIC, ELEMENTS
   - Sticky/fixed on scroll

2. **Hero Section**
   - Full-width background image (cityscape)
   - Large heading: "WE'RE REAL ESTATE KING" (white, centered)
   - Semi-transparent overlay for text readability

3. **Search Form**
   - Overlapping white card on hero bottom
   - Title: "Search Properties For"
   - Toggle tabs: "Sell" (active, orange) / "Rent"
   - Row of dropdowns: Choose locations, Property Type, Bedrooms, Bedrooms
   - Price Range slider ($1000 – $4000)
   - Area Range (sqm) slider (1000 – 4000)
   - "Search Properties →" gradient CTA button

4. **Features / "Why we are the best"**
   - Section title: "Why we are the best"
   - Subtitle: "Who are in extremely love with eco friendly system."
   - 3-column grid of feature cards:
     - Expert Technicians (person icon)
     - Professional Service (document icon)
     - Great Support (chat icon)
   - Each card: icon, title, description paragraph

5. **Footer**
   - Component Dock attribution link

## Requirements

### Feature: Proplib template behaviour

Feature: Proplib real estate homepage

Background:
- **GIVEN** the user visits the Proplib homepage

#### Scenario: Header displays navigation

- **THEN** the logo "M." is visible
- **AND** navigation links "Home", "Service", "Property", "Contact" are present
- **AND** a phone number is displayed
- **AND** "Sell / Rent Property" and "Login / Register" links are visible

#### Scenario: Hero section renders

- **THEN** a full-width background image is displayed
- **AND** the heading "WE'RE REAL ESTATE KING" is visible
- **AND** the heading text is white and centered

#### Scenario: Search form is functional

- **THEN** a "Search Properties For" title is displayed
- **AND** "Sell" and "Rent" toggle tabs are visible
- **AND** four dropdown selects are present (location, property type, bedrooms)
- **AND** a price range slider is present
- **AND** an area range slider is present
- **AND** a "Search Properties" button is visible
- **WHEN** the user clicks "Search Properties"
- **THEN** the form submits without error

#### Scenario: Sell/Rent toggle switches active state

- **GIVEN** the "Sell" tab is active
- **WHEN** the user clicks "Rent"
- **THEN** the "Rent" tab becomes active
- **AND** the "Sell" tab becomes inactive

#### Scenario: Features section displays three cards

- **THEN** three feature cards are visible
- **AND** each card has an icon, title, and description
- **AND** the cards are "Expert Technicians", "Professional Service", "Great Support"

#### Scenario: Footer contains Component Dock link

- **THEN** a "Component Dock" link is present in the footer
- **AND** the link points to "https://www.componentdock.com/"

## Verification checklist

- [ ] All sections from screenshot recreated in order
- [ ] Hero background image uses picsum.photos placeholder
- [ ] Search form with dropdowns, sliders, and CTA
- [ ] Sell/Rent toggle with active state
- [ ] Feature cards render with icons (lucide-react)
- [ ] Footer links to Component Dock
- [ ] Responsive layout (mobile-first)
- [ ] No ColorLib references in app code
- [ ] `npm run test:coverage` passes at 100%
- [ ] `npm run typecheck` passes
- [ ] `npm run lint` passes
- [ ] `npm run build` succeeds
