# Tasks & Design Notes: Cruiseo (ColorLib Car Rentals)

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-cruiseo`. Recreation name: **Cruiseo** (NEW name —
> the ColorLib source keeps its name "Car Rentals").

## Source Mapping

- **ColorLib item:** "Car Rental" (TEMPLATES.md line 924; section "## Business (365)").
- **Source URL:** https://colorlib.com/wp/template/car-rental/
- **Preview URL — REACHABLE:** https://preview.colorlib.com/theme/carrentals/
  (HTTP 200). Full Bootstrap + jQuery site; CSS: `css/style.css` (23,650 bytes).
  Fonts: Roboto (400, 700, 900) via Google Fonts. Icons: icomoon + flaticon
  font → replace with `lucide-react`.

## Reference Research (done — do not redo)

### Screenshot Analysis (`carrental-free-template.jpg`)

Premium luxury car rental site. macOS browser frame. Dark hero with luxury
Mercedes-Benz background image, golden yellow accent (#F9A826), large bold
headline "THE ROYAL ESSENCE OF JOURNEY", booking form on right side (car
type dropdown, pickup/dropoff dates, confirm button). Below hero: white
services section with 3 feature cards.

**IMPORTANT color discrepancy:** The screenshot shows golden yellow `#F9A826`
as primary accent (buttons, logo). The live preview CSS uses Bootstrap blue
`#0779e4` instead. The screenshot represents the ORIGINAL design intent.
Use `#F9A826` for the recreation to match the screenshot fidelity.

### Live Preview DOM Structure

**Navbar:** `<header class="site-navbar">` — dark, fixed. Logo left
(`<strong>CarRental</strong>`), nav links right (Home, About, Cars, Services,
Team, Blog, Contact, Pages).

**Hero:** `<div class="hero" style="background-image: url('images/hero_1_a.jpg')">`
— `height: 100vh; min-height: 570px; background-size: cover`.
Left side: `<h1><strong>Rent a car</strong> is within your finger tips.</h1>`.
Form: `<form class="trip-form">` with car type `<select>`, pickup/dropoff
date inputs with calendar icons, "Search Now" submit button.

**How It Works:** `<div class="site-section">` with 3 `.col-lg-4` steps.
Each: numbered circle + heading + description. Below: "Video how it works"
play button link.

**About/Promo:** Split layout — left image (`.col-lg-7`), right text
(`.col-lg-4.ml-auto`): heading + paragraph + "Meet them now" button.

**Car Listings:** `<div class="site-section bg-light">` — 3×2 grid
(`.col-md-6.col-lg-4`). Each `.listing` card: image (`.listing-img`),
name, price (`$389.00/day`), specs row (Luggage: 8, Doors: 4, Passengers: 4),
description, "Rent Now" `.btn-primary.btn-sm`.

**Features:** `<div class="site-section">` — 3×2 grid. Each `.service-1.dark`
card: icon span + heading + description + "Learn more" link.

**Testimonials:** `<div class="site-section bg-light">` — 3 `.col-lg-4` cards.
Each: `<blockquote>` + author avatar + name + role.

**CTA Banner:** `<div class="site-section bg-primary py-5">` — full-width
primary bg, white heading "What are you waiting for?", white "Rent a car now"
`.btn-white` button.

**Footer:** `<footer class="site-footer">` — dark bg. About Us + social
icons. 4 link columns (Quick Links, Resources, Support, Company).
Copyright + Component Dock link.

### Design Tokens Summary

| Token | Screenshot | Live Preview |
|---|---|---|
| Primary button | `#F9A826` (golden yellow) | `#0779e4` (blue) |
| Header bg | `#1A1A1A` | dark |
| Hero overlay | `#121212` ~70% opacity | overlay |
| Font (headings) | Montserrat Bold | Roboto 700 |
| Font (body) | Open Sans/Inter | Roboto 400 |
| Body text | `#222222` | `#000` / `#364d59` |
| Card bg | `#F7F7F7` | `#f8f9fa` |
| Page bg | `#FFFFFF` | `#fff` |
| CTA bg | primary color | `.bg-primary` |
| Buttons | flat, rounded, uppercase | `.btn-primary` |

**Recreation choice:** Use screenshot colors (golden yellow `#F9A826` primary)
since the preview appears to have been recolored with default Bootstrap blue.
Roboto font (Google Fonts, 400, 500, 700).

## Implementation Plan

1. **Component structure:**
   - `src/App.tsx` — page composition
   - `src/components/Navbar.tsx` — fixed dark nav with logo + links + hamburger
   - `src/components/Hero.tsx` — full-viewport hero with headline + booking form
   - `src/components/HowItWorks.tsx` — 3 numbered steps + video link
   - `src/components/AboutPromo.tsx` — split image + text + CTA
   - `src/components/CarListings.tsx` — 3×2 car card grid
   - `src/components/CarCard.tsx` — single car listing card
   - `src/components/Features.tsx` — 3×2 feature cards grid
   - `src/components/FeatureCard.tsx` — single feature card
   - `src/components/Testimonials.tsx` — 3 testimonial cards
   - `src/components/TestimonialCard.tsx` — single testimonial card
   - `src/components/CtaBanner.tsx` — full-width CTA section
   - `src/components/Footer.tsx` — multi-column footer

2. **Data:** Hard-code car listings as a typed array of `{ name, price, image, luggage, doors, passengers, description }`. Feature and testimonial data similarly.

3. **Icons:** Replace icomoon/flaticon with `lucide-react`:
   - Calendar → `Calendar` (date picker icon)
   - Home, Settings, Clock, Shield, Video, Key → `Home`, `Settings`, `Clock`, `Shield`, `Video`, `Key`
   - Play → `Play`
   - Social: `Facebook`, `Instagram`, `Twitter`, `Linkedin`
   - Hamburger: `Menu`

4. **Assets:** Car images: `https://picsum.photos/seed/cruiseo-car-{n}/600/400` (deterministic). Author avatars: `https://picsum.photos/seed/cruiseo-person-{n}/100/100`. Hero background: `https://picsum.photos/seed/cruiseo-hero/1920/1080`.

5. **Responsive:** Desktop 12-col grid → mobile single column. Navbar collapses to hamburger below 992px. Hero form stacks vertically on mobile. Car listing grid: 1 col mobile, 2 col tablet, 3 col desktop.

6. **Footer:** Replace Colorlib attribution with "Made with Component Dock" linking to `https://www.componentdock.com/`.
