# Template: GymVault (Fitness / Gym)

## Purpose

Recreation of the ColorLib "Sportify" template as a React 19 + Vite + Tailwind 4 + TypeScript single-page gym/fitness site.

- **Source template:** [Sportify](https://colorlib.com/wp/template/sportify/)
- **Live preview:** https://preview.colorlib.com/theme/sportify/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/sportify-free-template.jpg
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript
- **Naming:** "GymVault" — no overlap with ColorLib source name; `apps/gymvault`

## Design Tokens

Extracted from `styles/main_styles.css` on the live preview:

| Token | Value | Notes |
|-------|-------|-------|
| **Primary / Brand** | `#ff0e3b` | Vibrant red — buttons, borders, accents, hover fills |
| **Purple** | `#7800ff` | Active states, secondary accent, gradients |
| **Dark Navy** | `#0f0432` / `#190a49` | Header/menu overlay backgrounds |
| **Deep Purple** | `#3c098d` | Header fixed-bg, gradient stops |
| **Gold / Yellow** | `#ffc016` | Accent highlights |
| **Salmon / Coral** | `#ffa07f` | Link underline border, paragraph hover bg |
| **Tomato** | `#db5246` / `#FF6347` | Form-control color, link active |
| **Charcoal** | `#2c2c2c` | Headings (h1-h6) |
| **Body Gray** | `#a5a5a5` | Body text base |
| **Paragraph Gray** | `#909090` | Paragraph text |
| **Mid Gray** | `#838383` | Secondary text |
| **Light BG** | `#eef3f6` | Section alternate background |
| **White** | `#ffffff` | Page background, white-on-dark elements |
| **Font** | `Open Sans` (300, 400, 600, 700, 800) | Via Google Fonts |
| **Heading style** | Uppercase, `letter-spacing: 0.2em`, `font-weight: 700`, `line-height: 1.2` | All h1-h6 |
| **Button shape** | 186×65px, `border: solid 2px #ff0e3b`, transparent bg, red fill on hover (rotated rectangle pseudo-element) | Sharp corners (no border-radius) |
| **Alt Button** | `.button_2` — filled bg variant | Same dimensions, used on pricing/CTA |
| **Card border-radius** | `50%` (only on instructor images) | All other elements: sharp corners |
| **Gradient** | `linear-gradient(to right, rgba(120,0,255,0.34), rgba(255,14,59,0.34))` | Purple-to-red semi-transparent, used as overlay |
| **Parallax BG** | Dark image with parallax scroll | Used on pricing section |
| **Header** | Transparent initially, dark navy/purple fixed header on scroll | Logo + nav + social icons |
| **Social icons** | Pinterest, Facebook, Twitter, Dribbble, Behance | Font Awesome 4.7 |

## Section Structure (from live preview DOM)

1. **Header** — Transparent header with logo, main nav (home, about us, classes, blog, contact), social icons (pinterest, facebook, twitter, dribbble, behance). Fixed header appears on scroll with dark navy background.
2. **Hero / Slider** — Full-width background image with dark overlay, owl-carousel slider. Subtitle "go to the gym now!", title "never limit yourself" (split across two h1 lines, "never" in a span), CTA button "read more".
3. **Intro** — Three info boxes (flex row, equal width): each with icon (SVG), title (h3), description paragraph. Boxes: "aerobics program", "train hard", "basic program".
4. **About** — Two-column layout: left 8-col content (subtitle "aerobics program", title "about sportify", paragraph, "read more" button), right 4-col image.
5. **Quote** — Centered blockquote with quotation marks, author attribution "– Arnold Schwarzenegger". Light background.
6. **CTA** — Two-column split: left half is background image, right half has subtitle "aerobics program", title "join our gym", checklist (4 items with check icons), two CTA buttons ("read more" primary + "read more" alt).
7. **Classes** — Centered subtitle "our programs", title "classes", owl-carousel slider with class cards: each card has title (h3), description, instructor circular image. Cards: "aerobics", "pilates", "yoga".
8. **Pricing** — Parallax background image, centered subtitle "our programs", title "pricing", owl-carousel with 3 pricing cards: "beginner" (Free/1 day), "beginner" ($29.90/month), "beginner" ($59.90/month). Each card: name, price, period, feature list (5 items), info link, "order plan" button. Middle card uses alt button style.
9. **Footer** — Dark background. Logo centered. Three columns: "talk to us" (phone numbers), "e-mail" (email addresses), "location" (address). Copyright bar at bottom (will be replaced with Component Dock link).

## Gherkin Requirements

### Feature: GymVault — Gym/Fitness Landing Page

#### Scenario: Header renders with logo, nav, and social links
- **Given** the user visits the GymVault page
- **When** the page loads
- **Then** a header displays with the logo
- **And** navigation links for "home", "about us", "classes", "blog", "contact" are visible
- **And** social media icons (pinterest, facebook, twitter, dribbble, behance) are present
- **And** a hamburger menu button is visible for mobile

#### Scenario: Hero slider displays with call to action
- **Given** the user is on the home page
- **When** the hero section renders
- **Then** a full-width background image is shown with a dark overlay
- **And** the subtitle "go to the gym now!" is displayed
- **And** the headline "never limit yourself" is shown (with "never" emphasized)
- **And** a "read more" CTA button is visible

#### Scenario: Intro boxes show three program highlights
- **Given** the user scrolls to the intro section
- **When** the intro section renders
- **Then** three info boxes are displayed in a row
- **And** each box shows an icon, a title, and a description paragraph
- **And** the titles are "aerobics program", "train hard", and "basic program"

#### Scenario: About section shows split content and image
- **Given** the user scrolls to the about section
- **When** the about section renders
- **Then** a two-column layout is displayed
- **And** the left column shows subtitle "aerobics program", title "about sportify", and a paragraph
- **And** a "read more" button is below the text
- **And** the right column displays an image

#### Scenario: Quote section displays testimonial
- **Given** the user scrolls to the quote section
- **When** the quote section renders
- **Then** a centered blockquote is displayed
- **And** the quote text is visible
- **And** the author attribution "Arnold Schwarzenegger" is shown

#### Scenario: CTA section shows join information
- **Given** the user scrolls to the CTA section
- **When** the CTA section renders
- **Then** a split layout is displayed with an image on the left and content on the right
- **And** the title "join our gym" is shown
- **And** a checklist with 4 items is visible
- **And** two CTA buttons ("read more" primary and "read more" alt) are displayed

#### Scenario: Classes carousel shows fitness programs
- **Given** the user scrolls to the classes section
- **When** the classes section renders
- **Then** a centered title "classes" with subtitle "our programs" is displayed
- **And** a carousel shows class cards with title, description, and instructor image
- **And** cards include "aerobics", "pilates", and "yoga"

#### Scenario: Pricing section displays plans with parallax
- **Given** the user scrolls to the pricing section
- **When** the pricing section renders
- **Then** a parallax background image is shown
- **And** a centered title "pricing" with subtitle "our programs" is displayed
- **And** three pricing cards are shown (Free, $29.90/mo, $59.90/mo)
- **And** each card has a feature list of 5 items and an "order plan" button

#### Scenario: Footer shows contact info and branding
- **Given** the user scrolls to the footer
- **When** the footer renders
- **Then** the logo is displayed centered
- **And** three columns show "talk to us", "e-mail", and "location" contact info
- **And** a copyright bar with "Component Dock" link is present

## Verification Checklist

- [ ] Header renders with logo, nav links, social icons, hamburger toggle
- [ ] Hero slider displays background image with overlay, subtitle, headline, CTA button
- [ ] Intro section shows 3 info boxes with icon, title, description
- [ ] About section shows two-column layout (text + image)
- [ ] Quote section displays blockquote with author
- [ ] CTA section shows split layout with checklist and two buttons
- [ ] Classes carousel renders with card content and instructor images
- [ ] Pricing section shows parallax bg, 3 pricing cards with features and buttons
- [ ] Footer shows contact columns and Component Dock link
- [ ] Brand color `#ff0e3b` used for buttons and accents
- [ ] Font is Open Sans (Google Fonts)
- [ ] All headings are uppercase with letter-spacing 0.2em
- [ ] Responsive behavior matches original (hamburger on mobile)
- [ ] No ColorLib references in app code (only in spec and TEMPLATES.md)
- [ ] Footer links to https://www.componentdock.com/
