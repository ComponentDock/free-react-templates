# Template: Keynest (Real Estate Agent)

## Purpose

Keynest is a full-page real estate agent website in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Youragent" free
template (source: https://colorlib.com/wp/template/youragent/), built under a
DIFFERENT name (**Keynest**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a Bootstrap 4 real estate agent site with a full-viewport hero
(image overlay with agent tagline), a contact info sidebar, a property listings
carousel, a testimonial slider, an about-me section with feature icons, a blog
grid, and a dark footer with newsletter signup. Fonts: Mukta Mahee (body) +
Playfair Display (headings). Brand accent: blue `#007bff`. Footer bg:
`#1a1a1a`.

## Source mapping

- **ColorLib item:** "Youragent" (TEMPLATES.md line 1242).
- **Source URL:** https://colorlib.com/wp/template/youragent/
- **Preview URL — REACHABLE (verified 2026-09-15):**
  `https://preview.colorlib.com/theme/youragent/` (HTTP 200, 22,730 bytes).
- **Preview CSS:** `css/style.css` (13,847 bytes) — Bootstrap 4 base +
  custom styles. Fonts: Mukta Mahee + Playfair Display (Google Fonts).
  Icons: Font Awesome 4, Ionicons → REPLACE with lucide-react, do not ship.

## Design tokens (extracted from live preview CSS)

| Token | Value | Source |
|---|---|---|
| Accent / brand color | `#007bff` (blue) | `.btn-primary`, `.reviews-star span`, hover states |
| Footer background | `#1a1a1a` (near-black) | `.footer-section` |
| Footer text | `rgba(255,255,255,0.7)` | `.footer-section a` |
| Body font | `"Mukta Mahee", arial, sans-serif` | `--font-family-sans-serif` |
| Heading font | `"Playfair+Display", times, serif` | `.site-hero-inner .heading`, section headings |
| Hero heading size | `80px`, bold, white, line-height 1 | `.site-hero-inner .heading` |
| Hero heading (mobile) | `40px` | media query |
| Page background | `#fff` | body |
| Section light bg | `#f8f9fa` / light grey | `.bg-light` |
| Body text | `#212529` | body |
| Muted text | `#6c757d` / `#b3b3b3` | visit section heading |
| Button style | Pill (`border-radius: 50px`), 2px border, uppercase, letter-spacing 0.2em | `.btn`, `.btn.uppercase` |
| Hero overlay | `rgba(0,0,0,0.15)` | `.site-hero.overlay:before` |
| Property card shadow | `0 2px 3px 0 rgba(0,0,0,0.2)` | `.visit-section .visit img` |
| Footer newsletter button | Blue accent bg | `.footer-newsletter button` |

## Section structure (order from live DOM)

1. **Site header** — Logo left, nav links right (Home, About, Blog, Contact),
   hamburger toggle for mobile. Fixed/transparent over hero.
2. **Contact sidebar** — Left-column overlay on hero: address, phone, email,
   social links (Twitter, Facebook, Instagram). Visible on desktop.
3. **Hero** — Full-viewport image background with dark overlay, large white
   heading "I'm Your Realtor, Get Your Key", sub-heading text, "Get In Touch"
   + "Download" buttons (pill-shaped, white border), "Scroll Down" indicator.
4. **Visit/Properties section** — Heading "Popular Properties", carousel of
   property cards: image, price ($3,450 etc.), address. Owl-carousel style.
5. **Testimonials** — Heading "Happy Customers", carousel of quotes with
   author names. Owl-carousel style.
6. **About Me section** — Two-column: left has agent photo + bio text, right
   has 3 feature icons: "Deal On Time", "Good Reviews", "24/7 Support" with
   descriptions.
7. **Blog section** (bg-light) — Heading "Recent Blog Post", 3 blog cards
   in a row: image, date, title, excerpt.
8. **Footer** (bg-primary `#1a1a1a`) — 4 columns: About Us text, Terms &
   Conditions links, Our Location (address, phone, email), newsletter signup
   form. Bottom row: copyright with Colorlib attribution → REPLACE with
   Component Dock.

## Gherkin requirements

### Feature: Keynest Real Estate Agent Template

#### Scenario: Header renders with logo and navigation
  Given the page loads
  Then the site header displays the logo/brand on the left
  And navigation links "Home", "About", "Blog", "Contact" are visible
  And a hamburger menu toggle appears on mobile

#### Scenario: Contact sidebar displays agent info
  Given the page loads on desktop
  Then a contact sidebar is visible with address, phone, and email
  And social media links (Twitter, Facebook, Instagram) are present

#### Scenario: Hero section displays with agent tagline
  Given the page loads
  Then a full-viewport hero section is visible
  And the heading reads "I'm Your Realtor, Get Your Key"
  And "Get In Touch" and "Download" pill buttons are present
  And a "Scroll Down" indicator is visible

#### Scenario: Properties section shows listing carousel
  Given the page loads
  Then a "Popular Properties" heading is visible
  And property cards display with image, price, and address
  And cards are navigable via carousel controls

#### Scenario: Testimonials section displays customer quotes
  Given the page loads
  Then a "Happy Customers" heading is visible
  And testimonial cards show quotes with author names
  And cards are navigable via carousel controls

#### Scenario: About section displays agent bio and features
  Given the page loads
  Then an "About Me" heading is visible
  And agent bio text is displayed
  And 3 feature items are shown: "Deal On Time", "Good Reviews", "24/7 Support"

#### Scenario: Blog section shows recent posts
  Given the page loads on the main page
  Then a "Recent Blog Post" heading is visible
  And 3 blog post cards are displayed with image, date, title, excerpt

#### Scenario: Footer renders with newsletter and contact info
  Given the page loads
  Then the footer has a dark (#1a1a1a) background
  And an "About Us" column with description text is present
  And contact info (address, phone, email) is displayed
  And a newsletter signup form with email input and submit button is present
  And the footer links to "https://www.componentdock.com/"

#### Scenario: All sections use consistent design tokens
  Given the page loads
  Then headings use "Playfair Display" serif font
  And body text uses "Mukta Mahee" sans-serif font
  And buttons are pill-shaped with blue accent (#007bff)
  And the footer uses dark background with white text

## Verification checklist

- [ ] Accent color `#007bff` applied consistently via Tailwind theme
- [ ] Fonts "Mukta Mahee" + "Playfair Display" loaded via Google Fonts
- [ ] Header: logo, nav links, hamburger toggle for mobile
- [ ] Contact sidebar: address, phone, email, social links
- [ ] Hero: full-viewport bg, heading, pill buttons, scroll indicator
- [ ] Properties: carousel with property cards (image, price, address)
- [ ] Testimonials: carousel with quotes and author names
- [ ] About: agent photo, bio, 3 feature icons (lucide-react)
- [ ] Blog: 3 cards with images, dates, titles, excerpts
- [ ] Footer: dark bg, 4 columns, newsletter form, Component Dock link
- [ ] No ColorLib references in app code (provenance only in spec/PR)
- [ ] Placeholder images via `picsum.photos/seed/keynest-<n>/`
- [ ] Icons from lucide-react (no Font Awesome or Ionicons)
- [ ] Responsive: hamburger nav, stacked columns on small screens
- [ ] 100% test coverage on all components
- [ ] `npm run verify:app keynest` passes
