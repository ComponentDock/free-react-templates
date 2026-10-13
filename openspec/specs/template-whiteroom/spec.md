# Template: WhiteRoom (Cleaning / Residential Services)

## Purpose
Recreation of ColorLib **Cleaning Company** template.
- Source slug: `cleaning-company`
- Preview URL: `https://preview.colorlib.com/#cleaning-company` (iframe-based, no standalone page)
- Screenshot: `https://colorlib.com/wp/wp-content/uploads/sites/2/cleaningcompany.jpg`
- Stack: React 19 · Vite · Tailwind CSS 4 · TypeScript
- Design category: Cleaning / Residential Services

## Design Tokens

Extracted from ColorLib template listing page custom CSS and screenshot analysis.
**Note**: Live preview returned 404 as standalone page; tokens derived from
screenshot visual analysis + ColorLib listing page embedded `<style>` blocks.

### Colors
| Token | Hex | Usage |
|-------|-----|-------|
| Brand Primary (Blue) | `#1976D2` | Utility bar background, CTA buttons, appointment bar button |
| Accent Yellow | `#FFC107` | Logo "COMPANY" text, active nav underline, Business Hours heading |
| Dark Text | `#212121` | Headings, body text |
| White | `#FFFFFF` | Navbar background, booking bar background, hero text |
| Light Gray | `#F5F5F5` | Section alternating backgrounds |
| Medium Gray | `#666666` | Body copy, secondary text |
| Icon Green | `#77CC6D` | Builder/intro section icons (from ColorLib listing page CSS) |

### Typography
| Property | Value |
|----------|-------|
| Font Family | `"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif` |
| Note | Clean geometric sans-serif; Poppins matches screenshot weight/shape |
| Body Size | 16px, weight 400, line-height 1.7 |
| Headings | Bold (600–700), dark `#212121` |
| Uppercase captions | 13px, letter-spacing 0.15em, weight 600, blue `#1976D2` |
| Logo text | Bold, "CLEANING" in dark, "COMPANY" in yellow `#FFC107` |

### Buttons
| Property | Value |
|----------|-------|
| Primary `.btn` | padding 14px 30px, border-radius 4px, font-size 13px, uppercase, letter-spacing 0.05em |
| Primary color | `#1976D2` (blue) |
| Text color | `#FFFFFF` |
| Hover | Slight darken to `#1565C0`, transition 0.3s ease |
| Appointment bar button | Full-height blue, white uppercase text |

### Layout
| Element | Style |
|---------|-------|
| Container | Max-width 1200px, centered |
| Utility Bar | Full-width, solid blue `#1976D2`, white text, phone + email left, social icons right |
| Navbar | Full-width, white bg, sticky, logo left, nav links center/right, hamburger on mobile |
| Hero | Full-viewport height, background photo (cleaner in kitchen), left-aligned text overlay, no dark overlay |
| Booking Bar | Full-width, white bg, 4 input fields + blue CTA button, flexbox row |
| Welcome/About | Two-column: photo left, text right, floating "Business Hours" blue box overlapping |
| Services | (not visible in screenshot — infer from description: cleaning services with icons) |
| Gallery | (likely portfolio grid — infer from nav link "Portfolio") |
| Testimonials | (likely section with customer quotes — standard for this template type) |
| Contact/Map | (Google Maps integration mentioned in description) |
| Footer | Dark background, multi-column links |

## Requirements

### Feature: WhiteRoom — Cleaning / Residential Services Website Template

#### Scenario: Top utility bar displays contact information

- **GIVEN** the user loads the WhiteRoom homepage
- **THEN** a utility bar at the top shows a phone number and email address on the left
- **AND** social media icons (Facebook, Twitter, Instagram, Pinterest) appear on the right in white
- **AND** the bar has a solid blue background (`#1976D2`)

#### Scenario: Navbar displays brand and navigation

- **GIVEN** the user loads the WhiteRoom homepage
- **THEN** the navbar shows the logo "CLEANING COMPANY" (dark + yellow text) on the left
- **AND** navigation links include: Home, About, Services, Portfolio, Pricing, Blog, Contact
- **AND** the active link (Home) shows a yellow underline accent (`#FFC107`)
- **AND** the navbar is sticky on scroll with white background

#### Scenario: Hero section displays headline and CTA

- **GIVEN** the user views the hero section
- **THEN** a full-viewport background photo fills the area (cleaner with supplies)
- **AND** a subtitle "Leave the house cleaning chores to us" appears in white
- **AND** a headline "Let us do the dirty work, so you don't have to." appears in white bold
- **AND** a "LEARN MORE" button appears in blue with white text

#### Scenario: Appointment booking bar

- **GIVEN** the user scrolls past the hero
- **THEN** a full-width white booking bar appears
- **AND** four fields are shown: Name (text), Phone Number (text), Select Services (dropdown), Select Cleaners (dropdown)
- **AND** a blue "MAKE AN APPOINTMENT" button appears at the right end
- **AND** the bar is visually distinct with a subtle border or shadow

#### Scenario: Welcome / About section

- **GIVEN** the user scrolls to the welcome section
- **THEN** a two-column layout appears: photo of a cleaner on the left, text on the right
- **AND** a blue uppercase caption "WELCOME TO CLEANING COMPANY" appears
- **AND** a heading "Let's make you fresher than ever" appears in bold dark text
- **AND** a body paragraph describes the cleaning service
- **AND** a floating blue "Business Hours" box overlaps the left column with yellow heading text

#### Scenario: Services section displays cleaning services

- **GIVEN** the user scrolls to the services section
- **THEN** a section heading appears (e.g., "Our Services" or "What We Offer")
- **AND** service cards display with icons and descriptions
- **AND** each card has an icon, title, and brief description
- **AND** the section has a light background

#### Scenario: Gallery / Portfolio section

- **GIVEN** the user scrolls to the gallery section
- **THEN** a grid of work samples or before/after images appears
- **AND** images are responsive and arranged in a masonry or grid layout

#### Scenario: Testimonials section

- **GIVEN** the user scrolls to the testimonials section
- **THEN** customer testimonials appear with quotes, names, and roles
- **AND** the section has a distinct background treatment

#### Scenario: Contact section with form or map

- **GIVEN** the user scrolls to the contact section
- **THEN** a contact form or Google Maps embed appears
- **AND** contact details (address, phone, email) are displayed

#### Scenario: Footer displays brand and navigation

- **GIVEN** the user scrolls to the footer
- **THEN** the footer has a dark background
- **AND** multiple columns appear with navigation links
- **AND** a copyright line appears at the bottom center
- **AND** the footer links to Component Dock (replacing Colorlib attribution)

## Verification Checklist

- [ ] Top utility bar with blue bg, phone + email, social icons
- [ ] Sticky white navbar with logo (dark+yellow), nav links, yellow active underline
- [ ] Hero section: full-viewport bg photo, white subtitle + headline, blue CTA button
- [ ] Booking bar: 4 form fields + blue "MAKE AN APPOINTMENT" button
- [ ] Welcome/About: two-column layout, blue caption, heading, body, floating Business Hours box
- [ ] Services section with icon cards
- [ ] Gallery/portfolio grid section
- [ ] Testimonials section
- [ ] Contact section (form or map)
- [ ] Footer: dark bg, multi-column layout, copyright, Component Dock link
- [ ] Responsive layout (mobile hamburger menu, stacked columns)
- [ ] Poppins (Google Font) loaded via `<link>` in `index.html`
- [ ] Brand tokens applied via Tailwind `@theme` (`--color-brand: #1976D2`, `--color-accent: #FFC107`)
- [ ] All placeholder images from `https://picsum.photos/seed/whiteroom-<n>/...`
- [ ] No ColorLib references in `apps/whiteroom/` source code
