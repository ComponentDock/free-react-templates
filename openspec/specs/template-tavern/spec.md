# Template: Tavern (Restaurant)

## Purpose

Recreation of ColorLib's "Pato" template — a modern Italian restaurant website.

- **Source slug:** `pato`
- **Preview URL:** https://preview.colorlib.com/theme/pato/
- **Source screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/pato-free-modern-restuarant-website-template.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **New name:** `tavern` (apps/tavern, package @free-react-templates/tavern)

## Design Tokens

Extracted from `css/main.css`, `css/util.css`, and preview HTML on 2026-08-24.

### Colors

| Token        | Hex     | Usage                                         |
| ------------ | ------- | --------------------------------------------- |
| brand        | #ec1d25 | Primary red — buttons, hovers, stars, accents |
| brand-dark   | #d41b22 | Darker red hover state                        |
| bg-dark-1    | #222222 | Footer bg, dark sections                      |
| bg-dark-2    | #111111 | Darkest sections, video parallax              |
| text-body    | #333333 | Body text                                     |
| text-muted   | #666666 | Secondary text                                |
| text-light   | #999999 | Light captions                                |
| text-muted-2 | #aaaaaa | Tertiary text                                 |
| border-light | #cccccc | Borders, dividers                             |
| warm-gray    | #958e88 | Accent gray                                   |
| white        | #ffffff | Button backgrounds, light sections            |

### Typography

| Role              | Font       | Fallback   |
| ----------------- | ---------- | ---------- |
| Body              | Poppins    | sans-serif |
| Headings          | Montserrat | sans-serif |
| Script/decorative | Courgette  | cursive    |

### Buttons

- **btn1** (hero CTA): white bg, 10px radius → red (#ec1d25) on hover, white text
- **btn2** (menu overlay): white bg, 10px radius, 0.9 opacity → red on hover
- **btn3** (dark): #111111 bg, 10px radius → red on hover

### Backgrounds

- `bg1` = #222222 (footer, dark sections)
- `bg2` = #111111 (darkest)
- `bg1-pattern` = repeating warm-gray pattern image on light bg
- `bg2-pattern` = repeating pattern on lighter bg
- Header gradient: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0))` overlay
- Video section: parallax background image with dark overlay

## Section Structure (from preview DOM)

1. **Header/Nav** — sticky, gradient-overlay header with logo, menu links (Home, Menu, Reservation, Gallery, About, Blog), and "Book Now" button
2. **Hero Carousel** — full-width Swiper with 3 background-image slides, centered "Welcome to" + "Pato Place" headline + "Look Menu" CTA
3. **Welcome** — two-column: text (subtitle "Italian Restaurant", heading "Welcome", body copy, "Our Story" link) + image with rounded corners
4. **About/Intro** — brief restaurant intro section
5. **Our Menu** — 8-card grid (2-col left + 1-col right) with category overlay buttons: Lunch, Dinner, Happy Hour, Drink, Starters, Desserts. Rounded image cards with hover zoom
6. **Events** — Swiper carousel with event cards: background image + date overlay + title + description + social share icons. "Upcoming Events" heading
7. **Booking/Reservation** — form with date picker, time select, people count, name, phone, email inputs + "Book" submit button. Two-column layout (form left, map/image right)
8. **Reviews** — Swiper carousel of customer testimonials: circular avatar, quote text, 5-star rating, customer name + location
9. **Video** — parallax section with centered play button modal trigger, "Discover" + "Our Video" heading
10. **Blog** — 3-column grid of blog posts: rounded image + date badge + title + excerpt + "Continue Reading" link
11. **Footer** — three columns: Contact Us (address, phone, email) + Opening Times, Latest Posts (Twitter feed), Gallery (Instagram grid). Social icons row. Copyright line

## Gherkin Requirements

### Feature: Tavern Restaurant Template

#### Scenario: Header navigation renders correctly

- **Given** the page loads
- **When** I view the header
- **Then** I see the logo, navigation links (Home, Menu, Reservation, Gallery, About, Blog), and a "Book Now" CTA button
- **And** the header has a gradient overlay (dark to transparent)

#### Scenario: Hero carousel displays slides

- **Given** the page loads
- **When** I view the hero section
- **Then** I see a full-width carousel with background images
- **And** each slide shows "Welcome to" subtitle, "Tavern Place" headline, and a "View Menu" button

#### Scenario: Welcome section shows restaurant intro

- **Given** the page loads
- **When** I scroll to the Welcome section
- **Then** I see a two-column layout with text on the left and image on the right
- **And** the text includes "Italian Restaurant" subtitle, "Welcome" heading, body paragraph, and "Our Story" link

#### Scenario: Menu section displays food categories

- **Given** the page loads
- **When** I scroll to the Our Menu section
- **Then** I see 6 menu category cards with images and overlay buttons
- **And** the categories are: Lunch, Dinner, Happy Hour, Drink, Starters, Desserts
- **And** the layout is 2 columns left + 1 column right (8 cards total)

#### Scenario: Events section shows upcoming events

- **Given** the page loads
- **When** I scroll to the Events section
- **Then** I see a carousel of event cards
- **And** each card has a background image, date/time, title, description, and social icons

#### Scenario: Booking form is interactive

- **Given** the page loads
- **When** I scroll to the Reservation section
- **Then** I see a form with date input, time dropdown, people count, name, phone, and email fields
- **And** the form has a "Book" submit button
- **And** the right side shows a map or image

#### Scenario: Reviews carousel displays testimonials

- **Given** the page loads
- **When** I scroll to the Reviews section
- **Then** I see a carousel of customer testimonials
- **And** each testimonial has a circular avatar, quote, 5-star rating, and customer name/location

#### Scenario: Video section has parallax background

- **Given** the page loads
- **When** I scroll to the Video section
- **Then** I see a parallax background image
- **And** a centered play button that triggers a video modal

#### Scenario: Blog section shows latest posts

- **Given** the page loads
- **When** I scroll to the Blog section
- **Then** I see 3 blog post cards in a row
- **And** each card has an image, date badge, title, excerpt, and "Continue Reading" link

#### Scenario: Footer contains contact and social info

- **Given** the page loads
- **When** I scroll to the footer
- **Then** I see Contact Us (address, phone, email), Opening Times, Latest Posts, and Gallery columns
- **And** social media icons are present
- **And** the footer links to https://www.componentdock.com/

## Verification Checklist

- [ ] All 11 sections rendered in correct order
- [ ] Brand color #ec1d25 applied to buttons and accents
- [ ] Fonts: Poppins (body), Montserrat (headings), Courgette (decorative)
- [ ] All images use picsum.photos placeholders with deterministic seeds
- [ ] Buttons have 10px border-radius
- [ ] Hero carousel has 3 slides with background images
- [ ] Menu grid has correct 2+1 column layout with 6 category cards
- [ ] Events section uses carousel
- [ ] Booking form has all fields (date, time, people, name, phone, email)
- [ ] Reviews carousel with avatars, quotes, and star ratings
- [ ] Video section has parallax effect
- [ ] Blog section has 3 post cards
- [ ] Footer has 3-column layout with Component Dock link
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] 100% test coverage on all components
