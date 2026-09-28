# Template: FlameGrill (Restaurant / Food)

## Purpose

Recreation of ColorLib's **Burger** template as a React 19 + Vite + Tailwind 4 + TypeScript site.
- **Source slug:** `burger`
- **Preview URL:** https://preview.colorlib.com/theme/burger/
- **Screenshot:** ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/burger-free-template.jpg)
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **Category:** Restaurant / Food — single-page burger restaurant site with carousel hero, menu grid, about, video CTA, testimonials, Instagram gallery, and footer with locations + newsletter.

## Design Tokens (extracted from preview stylesheet)

### Colors
| Token | Hex | Usage |
|-------|-----|-------|
| Brand Orange | `#F0542C` | Primary accent (buttons, highlights, hover states) |
| Brand Gold | `#F2C64D` | Secondary accent (outlines, star ratings) |
| Dark Navy | `#040E27` | Header/hero overlay background, dark sections |
| White | `#FFFFFF` | Page background, text on dark backgrounds |
| Off-white | `#F9F9FF` | Light section backgrounds |
| Muted Gray | `#6E6E6E` / `#999999` | Body text, descriptions |

### Fonts
| Role | Family | Fallback |
|------|--------|----------|
| Body | Raleway | sans-serif |
| Headings | Montserrat | sans-serif |
| Accent / Signature | Pacifico | cursive |
| Slider / Display | Paytone One | sans-serif |

### Buttons & Shapes
- **Pill buttons:** border-radius 30px–50px, solid Brand Orange background
- **Outlined buttons:** border-radius 30px, 1px solid Brand Gold, transparent bg
- **Circular avatars:** border-radius 50%
- **Video play button:** circular with white outline on dark background

### Section Backgrounds
- **Hero/Slider:** Full-width banner images with dark semi-transparent overlay (`rgba(0,0,0,0.4)` approx)
- **Best Burgers (Menu):** White background
- **About:** White background
- **Video CTA:** Background image (burger) with dark overlay
- **Testimonials:** White background
- **Instagram Gallery:** White background
- **Footer:** Dark background image (`footer_bg.png`)

## Gherkin Requirements

### Feature: FlameGrill — Burger Restaurant Template

#### Scenario: Navbar displays correctly
- **Given** the user loads the page
- **Then** a sticky navbar is visible with a centered logo
- **And** navigation links include: Home, Menu, About, Blog, Contact
- **And** social media icons (Instagram, Twitter, Facebook, Google+) are shown on the right
- **And** a phone number CTA button is visible on desktop

#### Scenario: Hero carousel shows slides
- **Given** the user views the hero section
- **Then** a full-width image carousel is displayed with auto-rotation
- **And** each slide shows a "Big Deal" badge, a heading ("Burger Bachelor"), and a subtitle ("Maxican")
- **And** the slide has a dark overlay on the background image
- **And** navigation dots/arrows allow manual slide control

#### Scenario: Best Burgers menu grid displays items
- **Given** the user scrolls to the menu section
- **Then** a "Burger Menu" section label and "Best Ever Burgers" heading are shown
- **And** 8 burger items are displayed in a 2-column responsive grid
- **And** each item shows a thumbnail image, burger name, short description, and price
- **And** items are: Beefy Burgers, Burger Boys, Burger Bizz, Crackles Burger, Bull Burgers, Rocket Burgers, Smokin Burger, and one more

#### Scenario: About section shows restaurant info
- **Given** the user scrolls to the about section
- **Then** a split layout is shown: images on the left, text on the right
- **And** the heading reads "Best Burger in your City" with "About Us" label
- **And** a descriptive paragraph is displayed
- **And** a signature image is shown below the text

#### Scenario: Video CTA section displays
- **Given** the user scrolls to the video section
- **Then** a dark background with burger imagery is shown
- **And** the heading "Burger Bachelor" and subtitle "How we make delicious Burger" are visible
- **And** a circular play button links to a video (YouTube)

#### Scenario: Testimonials carousel works
- **Given** the user scrolls to the testimonials section
- **Then** "Testimonials" label and "Happy Customers" heading are shown
- **And** testimonials are displayed in a carousel
- **And** each testimonial shows a quote, author avatar, author name, and star rating

#### Scenario: Instagram gallery shows images
- **Given** the user scrolls to the Instagram section
- **Then** a 4-column grid of images is displayed
- **And** each image has an Instagram icon overlay on hover

#### Scenario: Footer displays locations and newsletter
- **Given** the user scrolls to the footer
- **Then** a 3-column footer shows two location cards (address + phone) and a newsletter signup
- **And** social media icons are displayed below the columns
- **And** a copyright bar with "Made with ❤ by Component Dock" is shown at the bottom

#### Scenario: Responsive behavior on mobile
- **Given** the user views the page on a mobile viewport (≤768px)
- **Then** the navbar collapses to a hamburger menu
- **And** the hero carousel text is centered and scaled down
- **And** the menu grid stacks to a single column
- **And** the about section stacks images above text
- **And** the footer columns stack vertically

#### Scenario: Dark mode styling
- **Given** the user enables dark mode
- **Then** the page background becomes dark navy (#040E27)
- **And** text colors adjust to white/light
- **And** card backgrounds use dark tones
- **And** brand orange and gold accents remain visible

## Verification Checklist

- [ ] Spec validated (`npm run spec:validate` passes)
- [ ] All Gherkin scenarios are implementable
- [ ] Design tokens extracted and documented
- [ ] Preview DOM structure analyzed
- [ ] Screenshot reviewed for visual fidelity
- [ ] Section order matches original: Header → Hero Carousel → Menu Grid → About → Video CTA → Testimonials → Instagram Gallery → Footer
