# Template: SchoolYard (Education)

## Purpose

Recreation of the ColorLib **Kindergarten** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page site for a children's education / kindergarten school.

- **Source:** https://colorlib.com/wp/template/kindergarten/
- **Preview:** https://preview.colorlib.com/theme/kindergarten/
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **Package:** `@free-react-templates/schoolyard`
- **Deploy:** `schoolyard.free.componentdock.com`

## Design tokens (extracted from live preview CSS)

| Token | Value | Usage |
|-------|-------|-------|
| `--color-brand` | `#ED078B` | Primary brand — hot pink/magenta. Buttons, header top bar, section title accents, hover underlines, back-to-top, preloader spinner |
| `--color-accent-cyan` | `#12D9DF` | CTA header button ("Enroll Now"), footer links |
| `--color-accent-yellow` | `#FBCE0F` | Hero caption span text ("For Every Child") |
| `--color-heading` | `#423F8D` | All h1–h6, section title paragraphs, footer background |
| `--color-body-text` | `#5E5E5E` | Paragraph body text |
| `--color-nav-text` | `#423F8D` | Navigation links (Concert One font) |
| `--color-footer-bg` | `#4255A4` | Footer section background |
| `--color-header-top-bg` | `#ED078B` | Top info bar background |
| `--color-feature-blue` | `#1F97D4` | Feature icon caption color (color-font1) |
| `--color-feature-yellow` | `#FBCE0F` | Feature icon caption color (color-font2) |
| `--color-feature-teal` | `#12D9DF` | Feature icon caption color (color-font3) |
| `--color-feature-pink` | `#ED078B` | Feature icon caption color (color-font4) |
| `--color-dark-navy` | `#1D2547` | Dropdown menu links |
| `--color-cta-hover` | `#da047d` | Button hover state |

**Fonts (Google Fonts):**
- `"Fredoka One"` — headings (h1–h6), section title spans, border buttons
- `"DM Sans"` — body text (400, 500, 700)
- `"Concert One"` — navigation links, primary CTA buttons

**Button shapes:**
- Primary CTA (`.btn`): `border-radius: 30px`, bg `#ED078B`, white text, font "Concert One", letter-spacing 1px
- Header CTA (`.header-btn`): `border-radius: 30px`, bg `#12D9DF`, white text, font "Concert One"
- Border button (`.border-btn`): `border-radius: 30px`, 1px solid `#ED078B`, transparent bg, text `#ED078B`, font "Fredoka One"

**Section backgrounds:**
- Hero slider: background image (children/school imagery), white rounded caption bubble (`border-radius: 90px`)
- About: white
- Class Offers: background image (`section-bg2` — education imagery with overlay)
- Date Events: background image (`section-bg2`)
- Team: white
- Testimonials: background image (`section-bg2`)
- Instagram: image grid (no overlay)
- Footer: solid `#4255A4`

## Design notes (from visual reference)

The template has a playful, colorful kindergarten aesthetic:
- Bright magenta/pink as the dominant brand color with cyan and yellow accents
- Rounded, bubbly shapes (hero caption at 90px radius, buttons at 30px)
- Background images on alternate sections with dark overlays for text readability
- White rounded caption bubble on the hero creates a card-in-hero effect
- Sticky header with a colored top info bar
- Countdown timer on the events section
- Team member cards with image overlay on hover
- Instagram image grid at the bottom before the footer

## Gherkin requirements

### Feature: SchoolYard Homepage

#### Scenario: Header renders with info bar and navigation
- **Given** the user loads the homepage
- **Then** a top info bar is visible with address and phone number on the left, social icons on the right, background color `#ED078B`
- **And** a sticky navigation bar shows logo, menu items (Home, Class, About, Blog, Contact), and an "Enroll Now" CTA button
- **And** the CTA button has background `#12D9DF`, white text, `border-radius: 30px`
- **And** nav links use font "Concert One", color `#423F8D`

#### Scenario: Hero section displays headline and CTA
- **Given** the user views the hero area
- **Then** a white rounded caption bubble (border-radius ~90px on desktop) is overlaid on a hero background image
- **And** the caption displays "Quality Learning" as the main heading in "Fredoka One" font, color `#423F8D`
- **And** a span "For Every Child" is shown in yellow (`#FBCE0F`)
- **And** an "Explore Classes" CTA button is present with magenta (`#ED078B`) background and `border-radius: 30px`

#### Scenario: About section shows welcome text and feature highlights
- **Given** the user scrolls to the about section
- **Then** the section title reads "Welcome to our Kindergarten"
- **And** three feature cards are shown in a row: "Inter School Sports", "Friendly Environment", "Multimedia Class"
- **And** each feature card has an icon, a heading in "Concert One" font, and description text in blue (`#4255A4`)
- **And** feature icon colors cycle through blue (`#1F97D4`), yellow (`#FBCE0F`), teal (`#12D9DF`)

#### Scenario: Classes We Offer section displays class cards
- **Given** the user scrolls to the classes section
- **Then** a section title "Classes We Offer" is centered
- **And** class cards show: class name, age group range (e.g. "3-5"), number of classes, and price per hour
- **And** the section has a background image with overlay

#### Scenario: Upcoming Events section with countdown timer
- **Given** the user scrolls to the events section
- **Then** an event card displays an event date, title "Drawing Event", description text, and a "View Event" link
- **And** a countdown timer shows remaining Days, Hours, Minutes, Seconds
- **And** the section has a background image with overlay

#### Scenario: Team section displays teacher profiles
- **Given** the user scrolls to the team section
- **Then** the section title reads "Expert Teachers"
- **And** teacher cards show name and role (e.g. "Sports Instructor")
- **And** team member images have `border-radius: 50px` with a hover overlay effect

#### Scenario: Testimonials section shows client quotes
- **Given** the user scrolls to the testimonials section
- **Then** testimonial cards display a quote, author name, and role
- **And** the section has a background image with overlay
- **And** quotes are displayed in a carousel/slider

#### Scenario: Instagram section shows image grid
- **Given** the user scrolls to the instagram section
- **Then** a grid of Instagram-style images is displayed

#### Scenario: Footer renders with links and branding
- **Given** the user scrolls to the footer
- **Then** the footer has background color `#4255A4`
- **And** it contains: description text, Quick Links column, About Us column
- **And** social media icon links are shown
- **And** a copyright line at the bottom with "Component Dock" link
- **And** the copyright line links to `https://www.componentdock.com/`

#### Scenario: Responsive layout adapts to mobile
- **Given** the user views the page on a viewport ≤ 575px
- **Then** the header collapses to a mobile hamburger menu
- **And** hero caption border-radius reduces to ~19px
- **And** section padding reduces to 60px top/bottom
- **And** multi-column grids stack to single column

#### Scenario: No ColorLib references in app code
- **Given** any source file under `apps/schoolyard/`
- **Then** no file contains the strings "colorlib", "ColorLib", or "preview.colorlib.com"
- **And** provenance is only in the spec and TEMPLATES.md

## Verification checklist

- [ ] Header: top info bar with address/phone + social icons, sticky nav with logo + menu + CTA
- [ ] Hero: background image, white rounded caption bubble, heading + span + CTA button
- [ ] About: section title, paragraph text, 3 feature cards with icons
- [ ] Classes: section title, class offer cards with stats (age, count, price)
- [ ] Events: event card with date, title, description, countdown timer
- [ ] Team: section title, teacher profile cards with image + name + role
- [ ] Testimonials: carousel of quote cards with author info
- [ ] Instagram: image grid
- [ ] Footer: 3-column layout with description, quick links, about us, social icons, copyright + Component Dock link
- [ ] Design tokens: brand `#ED078B`, fonts Fredoka One / DM Sans / Concert One, buttons border-radius 30px
- [ ] Responsive: mobile hamburger menu, stacked layouts, reduced padding
- [ ] No ColorLib references in `apps/schoolyard/`
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] `public/CNAME` contains `schoolyard.free.componentdock.com`
- [ ] Package name: `@free-react-templates/schoolyard`
