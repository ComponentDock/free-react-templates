---
name: Sartorial
description: Men's tailor shop landing page — recreation of ColorLib "Menztailor"
source: https://colorlib.com/wp/template/menztailor/
preview: https://preview.colorlib.com/theme/menztailor/
---

# Sartorial — Men's Tailor Shop Template

Recreation of ColorLib "Menztailor" (https://colorlib.com/wp/template/menztailor/).

## Purpose

Sartorial is a men's tailor shop template with a navbar, hero, clients, services, history, testimonials, visit us and footer. It recreates the ColorLib **Menztailor** design (https://colorlib.com/wp/template/menztailor/, preview: https://preview.colorlib.com/theme/menztailor/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Design Tokens (extracted from preview CSS)

- **Fonts:** "Josefin Sans" (headings), "Montserrat" (body), "Great Vibes" (accent/script)
- **Brand color:** #c6a16e (gold)
- **Dark:** #0b1416 (body-bg, navbar, footer)
- **Dark headings:** #0b1c39
- **Body text:** #96989a (muted gray)
- **Button:** gold bg, uppercase, letter-spacing: 3px, border: 1px solid #c6a16e
- **Section backgrounds:** dark (#0b1416) for most sections, white for some

## Sections (in order)

1. **Navbar** — Logo ("Sartorial"), nav links (Home, Services, History, Gallery, Blog, Contact), sticky
2. **Hero** — Full-width slider with 2 slides, large heading + CTA button
3. **Clients** — Partner/client logo strip
4. **Services** — "What We Offer" with 3 cards (measurements, cutting, restoration)
5. **History** — Split layout: video/image left, text + stats right
6. **Testimonials** — Client feedback carousel
7. **VisitUs** — "Visit Our Tailor" with address, hours, map area
8. **Footer** — Dark footer with about, links, newsletter, social, copyright

## Requirements

### Feature: Sartorial

#### Scenario: Renders navbar with logo and navigation links

- **Given** the page is rendered
- **When** the page is inspected
- **Then** it renders navbar with logo and navigation links

#### Scenario: Hero section displays headline and CTA button

- **Given** the page is rendered
- **When** the page is inspected
- **Then** Hero section displays headline and CTA button

#### Scenario: Services section shows 3 offering cards

- **Given** the page is rendered
- **When** the page is inspected
- **Then** Services section shows 3 offering cards

#### Scenario: History section shows stats

- **Given** the page is rendered
- **When** the page is inspected
- **Then** History section shows stats

#### Scenario: Testimonials section shows client quotes

- **Given** the page is rendered
- **When** the page is inspected
- **Then** Testimonials section shows client quotes

#### Scenario: Footer links to Component Dock

- **Given** the page is rendered
- **When** the page is inspected
- **Then** Footer links to Component Dock

#### Scenario: All sections render without errors

- **Given** the page is rendered
- **When** the page is inspected
- **Then** all sections render without errors
