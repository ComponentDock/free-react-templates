# Template: Breatha (Creative — Yoga Studio)
<!-- prep-status: shipped-as=soulflow -->
> **SHIPPED-UNDER** — the ColorLib `yogalife` design this prep describes already
> ships as `apps/soulflow` (<https://soulflow.free.componentdock.com>).
> Do not scaffold `apps/breatha`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-soulflow/spec.md`.

## Purpose

Recreation of ColorLib **Yogalife** WordPress theme as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page template.

- **Source:** https://colorlib.com/wp/template/yogalife/
- **Preview:** https://preview.colorlib.com/theme/yogalife/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/yogalife-free-template.jpg
- **Stack:** Vite, React 19, Tailwind CSS 4, TypeScript
- **New name:** `breatha` (app folder: `apps/breatha`, package: `@free-react-templates/breatha`)

## Design tokens (extracted from preview CSS)

| Token | Value | Usage |
|---|---|---|
| Brand primary | `#87e5da` (teal/cyan) | Primary buttons, links, accents, active states, section caption text |
| Brand secondary | `#96dae4` (lighter teal) | Subtle accent |
| Heading color | `#000000` | All h1–h5 |
| Body text | `rgba(0,0,0,0.5)` | Paragraph text |
| Body font | `"Work Sans", sans-serif` (300, 400, 700) | Body copy, nav items |
| Heading font | `"Playfair Display", serif` (400, 700) | h1, h2 in hero/sections, logo, section headings |
| Button shape | pill (`border-radius: 30px`) | All CTA buttons |
| Button primary bg | `#87e5da`, text white | Primary CTA buttons |
| Button outline-white | border white, text white → hover black bg | Used on hero image pricing card |
| Navbar | transparent (over hero) → white bg on scroll | Fixed position, white text → black text |
| Dropdown bg | `#000` | Nav dropdown background, active item `#87e5da` |
| Section heading underline | black bar, 100px wide, centered, `bottom: -10px` | Under section titles (Playfair Display) |
| Section bg light | `#f8f9fa` | "Our Programs" and "What People Say" sections |
| Pricing cards | 1px dashed `#ccc` border, white bg | First card uses bg-image with dark overlay |
| Footer bg | `rgba(0,0,0,0.8)` overlay on bg image | Dark footer with white headings |
| Footer links | `rgba(255,255,255,0.3)` → hover `#fff` | |
| Mobile menu | 300px slide-in from right, white bg | |
| Image overlay | `rgba(0,0,0,0.4)` | Hero, gallery hover |

## Section structure (from live preview DOM)

1. **Navbar** — fixed, transparent over hero → white on scroll. Logo "Breatha" (Playfair Display). Right-aligned nav: Home, Yoga Classes (dropdown), Events, About Studio, Contact.
2. **Hero Slider** — full-width owl-carousel, 2 slides. Background images with dark overlay. Center-aligned white text: caption (uppercase small) + large Playfair Display heading. Slide 1: "Yoga for everybody" / "Welcome To Breatha". Slide 2: "Enjoy With Us" / "Yoga & Meditation".
3. **Welcome / About Split** — two-column: left = large image, right = text with Playfair heading "Welcome To Breatha", teal caption "Hello there!", body text, pill primary CTA "See The Yoga Pricing".
4. **Our Programs** — light bg (`bg-light`). Centered section heading with underline. 3-col grid (6 cards on lg): each card has image thumbnail, program title, category + instructor, duration + level badges.
5. **Watch Video** — split layout: left has video thumbnail with play button overlay + small image below; right has section heading "Watch Video", body text, text link "Watch Video →".
6. **Yoga Pricing** — centered section heading. 4-col grid of pricing cards. First card has bg-image (dark overlay), white text, outline-white button. Remaining 3 have white bg, primary buttons. Each: plan name, price, feature list, CTA button. Dashed border.
7. **Yoga Features** — centered section heading. 4-col grid of icon features: each has a teal icon (lucide-react), title, short description.
8. **Our Gallery** — full-width, no-gutter 4-col image grid (2 rows of 4). Lightbox popup on click with opacity hover effect.
9. **Upcoming Events** — centered section heading. Carousel of event cards: image with play overlay, title, date + author, description.
10. **What People Say (Testimonials)** — light bg. Centered section heading. Carousel of testimonials: avatar image + name + blockquote.
11. **Footer** — dark bg with overlay. 3-column: About (text + CTA), Quick Menu + Ministries (link lists), Social Icons. Bottom: copyright + attribution.

## Requirements

### Feature: Navbar

#### Scenario: Navbar displays logo and navigation links

- **GIVEN** the user visits the Breatha homepage
- **THEN** the navbar shows "Breatha" as the logo
- **AND** the nav links include "Home", "Yoga Classes", "Events", "About Studio", "Contact"

#### Scenario: Navbar scrolls to white background

- **GIVEN** the user scrolls past the hero section
- **THEN** the navbar background becomes white
- **AND** the logo and nav text change to dark color

#### Scenario: Yoga Classes dropdown opens on hover/click

- **GIVEN** the user hovers over "Yoga Classes" in the navbar
- **THEN** a dropdown appears with sub-items

### Feature: Hero Slider

#### Scenario: Hero displays full-width image slider

- **GIVEN** the user is on the homepage
- **THEN** the hero section shows a full-width background image with dark overlay
- **AND** the heading text is displayed in large white serif font
- **AND** a smaller uppercase caption appears above the heading

#### Scenario: Hero auto-rotates between slides

- **GIVEN** the user stays on the homepage
- **THEN** the hero slider transitions between slides automatically

### Feature: Welcome Split Section

#### Scenario: Welcome section shows image-text split layout

- **GIVEN** the user scrolls past the hero
- **THEN** a split section appears with an image on the left and text on the right
- **AND** the heading reads "Welcome To Breatha" in serif font
- **AND** a teal accent caption says "Hello there!"
- **AND** a pill-shaped primary CTA button is visible

### Feature: Our Programs

#### Scenario: Programs section displays 6 program cards

- **GIVEN** the user scrolls to the Programs section
- **THEN** 6 program cards are displayed in a 3-column grid
- **AND** each card shows an image, title, instructor name, duration, and difficulty level

### Feature: Watch Video

#### Scenario: Video section shows thumbnail with play button

- **GIVEN** the user scrolls to the video section
- **THEN** a video thumbnail with a play button overlay is shown on the left
- **AND** descriptive text with a "Watch Video" link is on the right

### Feature: Yoga Pricing

#### Scenario: Pricing section shows 4 pricing tiers

- **GIVEN** the user scrolls to the pricing section
- **THEN** 4 pricing cards are displayed in a 4-column grid
- **AND** each card shows a plan name, price, feature list, and CTA button
- **AND** the first card has a background image with dark overlay
- **AND** the remaining cards have white backgrounds with primary-colored buttons

#### Scenario: Pricing cards have dashed borders

- **GIVEN** the pricing section is visible
- **THEN** each pricing card has a dashed border

### Feature: Yoga Features

#### Scenario: Features section displays 4 feature items

- **GIVEN** the user scrolls to the features section
- **THEN** 4 feature items are shown in a 4-column grid
- **AND** each has a teal icon, a title, and a short description

### Feature: Our Gallery

#### Scenario: Gallery shows image grid

- **GIVEN** the user scrolls to the gallery section
- **THEN** a grid of images is displayed in 4 columns
- **AND** hovering over an image shows a subtle opacity effect

### Feature: Upcoming Events

#### Scenario: Events section displays event cards

- **GIVEN** the user scrolls to the events section
- **THEN** event cards are shown in a carousel
- **AND** each card has an image, title, date, author, and description

### Feature: Testimonials

#### Scenario: Testimonials section displays reviews

- **GIVEN** the user scrolls to the testimonials section
- **THEN** testimonial cards are shown in a carousel on a light background
- **AND** each card has an avatar, name, and quoted testimonial text

### Feature: Footer

#### Scenario: Footer shows about, links, and social icons

- **GIVEN** the user scrolls to the footer
- **THEN** the footer has a dark background with overlay
- **AND** it contains an About section with description and CTA
- **AND** Quick Menu and Ministries link columns are shown
- **AND** social media icon links are displayed
- **AND** a copyright line with "Component Dock" attribution is at the bottom

### Feature: Responsive Design

#### Scenario: Mobile hamburger menu

- **GIVEN** the user views the site on a mobile viewport
- **THEN** a hamburger menu icon appears
- **AND** tapping it opens a slide-in mobile menu from the right

#### Scenario: Grid layouts stack on mobile

- **GIVEN** the user views the site on a mobile viewport
- **THEN** multi-column grids collapse to single-column layout

## Verification checklist

- [ ] All 11 sections match the order and content of the live preview
- [ ] Fonts loaded: Playfair Display (headings) and Work Sans (body) via Google Fonts
- [ ] Brand color `#87e5da` used for primary buttons, links, and accents
- [ ] Pill-shaped buttons (`rounded-full`) throughout
- [ ] Section headings use Playfair Display with centered underline bar
- [ ] Navbar is transparent over hero, white on scroll
- [ ] Hero slider with two slides and dark overlay
- [ ] Pricing cards: dashed border, first card has bg-image overlay
- [ ] Footer is dark with "Component Dock" attribution link
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Placeholder images use `picsum.photos` with seed
- [ ] Responsive: mobile hamburger menu, stacked grids
- [ ] All images use `loading="lazy"` where appropriate
