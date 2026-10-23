# Template: Ringdesk (Call Center / IT Services)

## Purpose

Recreation of the ColorLib "Callcenter" template as a React component.
A modern call center / IT support services landing page with a dark hero,
feature cards, testimonial slider, offered services grid, facts/stats section,
service cards on a dark background, about/info section with play button,
brand logos, contact form, and dark footer.

**Source:** `https://colorlib.com/wp/template/callcenter/`
**Preview:** `https://preview.colorlib.com/theme/callcenter/` (live, analyzed)
**Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design Tokens (from CSS + preview DOM)

| Token | Value | Notes |
|---|---|---|
| Primary accent | `#8490FF` | Soft purple-blue — buttons, links, highlights |
| Gradient | `linear-gradient(0deg, #62bdfc, #8490ff)` | Hero CTA, testimonial overlay, accent elements |
| Text primary | `#222222` | Headings |
| Text body | `#777777` | Body text |
| Background light | `#f9f9ff` | Very light blue-gray — brand area, inputs, feature bg |
| Background dark | `#222222` | Footer, hero overlay |
| Background white | `#FFFFFF` | Facts area, form area, testimonial cards |
| Success color | `#4cd3e3` | Teal accent (secondary) |
| Warning color | `#f09359` | Orange accent (secondary) |
| Font family | `Poppins`, sans-serif | Weights: 300, 400, 500, 600, 700 |
| Button radius | `25px` (primary-btn) | Pill-shaped CTA buttons |
| Button gradient | `#62bdfc → #8490ff` | Top-to-bottom blue gradient |
| Section spacing | `120px` vertical padding | `.section-gap` |
| Nav | Fixed top, white bg | Logo left, menu right, purple active |
| Feature images | Square with icons | 3-column grid, centered |
| Testimonial | White card, overlay bg | Slider with prev/next controls |
| Offered services | 3x2 grid of white cards | Icon + title per card, subtle shadow |
| Stats/facts | Large gradient numbers | Counter-style section |
| Services | Dark overlay on bg image | 6 cards with gradient hover |
| Info/about | Split: image left, text right | Play button overlay |
| Brand logos | Grayscale → color on hover | Row of partner logos |
| Contact | Form with inputs + textarea | Left form, right address |
| Footer | Dark (#222), 3 columns | About, contact info, newsletter |

## Section Structure (top-to-bottom)

1. **Navbar** — Fixed, white background, logo left, nav links right (Home, About, Services, Features, Gallery, Pricing, Blog, Contact)
2. **Hero/Banner** — Full-screen dark overlay on bg image, heading "Efficiency Booster", subtext "Discover the Colorful World", CTA button "Discover Now"
3. **Features** — 3-column grid on white/light bg: "Online Support", "24/7 Round the Clock", "Handling All Issues" with icon images
4. **Testimonials** — Dark overlay bg image, slider with white cards, client avatars, quotes, prev/next arrows
5. **Offered Services** — Heading "Our Offered Services", 3x2 grid of white service cards with icons (Content Synchronization + 5 more)
6. **Facts/Stats** — Light bg, large gradient numbers: 2536 Projects Completed, 6784 Happy Clients, 1059 Tasks Completed, 2239 Cups of Coffee, 435 In House Professionals
7. **Services** — Dark overlay bg, 6 service cards: Expert Technicians, Professional Service, Great Support, Technical Skills, Highly Recommended, Positive Reviews
8. **Info/About** — Split layout: left text "We Believe that Interior beautifies the Total Architecture", right side with play button overlay
9. **Brand Logos** — Light bg, row of grayscale partner logos (color on hover)
10. **Contact** — Heading "If you need, Just drop us a line", form (name, email, subject, message) + address info
11. **Footer** — Dark bg, 3 columns (About, Contact Info, Newsletter signup), social links, copyright

## Requirements

### Feature: Ringdesk call center landing page

#### Scenario: Page renders with navbar

- **GIVEN** the user loads the Ringdesk page
- **THEN** a fixed white navbar is visible at top
- **AND** the logo "Ringdesk" is displayed on the left
- **AND** nav links include: Home, About, Services, Features, Gallery, Pricing, Blog, Contact

#### Scenario: Hero section displays

- **GIVEN** the user loads the Ringdesk page
- **THEN** the hero has a dark overlay on a background image
- **AND** the heading reads "Efficiency Booster"
- **AND** a "Discover Now" CTA button is visible

#### Scenario: Features section shows 3 feature cards

- **GIVEN** the user scrolls to the features section
- **THEN** 3 feature cards are displayed in a row
- **AND** each card has an icon image, title, and description

#### Scenario: Testimonials section has slider

- **GIVEN** the user scrolls to the testimonials section
- **THEN** a testimonial card is visible with client avatar, name, and quote
- **AND** prev/next navigation arrows are present

#### Scenario: Offered services grid displays

- **GIVEN** the user scrolls to the offered services section
- **THEN** a 3x2 grid of service cards is displayed
- **AND** each card has an icon and service title

#### Scenario: Stats section shows numbers

- **GIVEN** the user scrolls to the facts section
- **THEN** large gradient numbers are visible: 2536, 6784, 1059, 2239, 435
- **AND** each number has a label below it

#### Scenario: Services section on dark background

- **GIVEN** the user scrolls to the services section
- **THEN** a dark overlay background is displayed
- **AND** 6 service cards are shown in a grid

#### Scenario: About section with split layout

- **GIVEN** the user scrolls to the about section
- **THEN** text appears on the left and a play button overlay on the right
- **AND** the heading mentions "Interior beautifies the Total Architecture"

#### Scenario: Brand logos section

- **GIVEN** the user scrolls to the brand section
- **THEN** partner logos are displayed in grayscale
- **AND** logos transition to full color on hover

#### Scenario: Contact form section

- **GIVEN** the user scrolls to the contact section
- **THEN** a form with name, email, subject, and message fields is visible
- **AND** contact address information is displayed alongside

#### Scenario: Footer with newsletter

- **GIVEN** the user scrolls to the footer
- **THEN** a dark footer is visible with 3 columns
- **AND** a newsletter signup form is present
- **AND** social media links are displayed
- **AND** a Component Dock link is in the footer

#### Scenario: Responsive layout on mobile

- **GIVEN** the user views Ringdesk on a viewport width < 768px
- **THEN** the navbar collapses to a hamburger menu
- **AND** sections stack vertically
- **AND** feature/service cards stack to single column

## Verification checklist

- [ ] Fixed white navbar with logo and nav links
- [ ] Full-screen hero with dark overlay, heading, and CTA
- [ ] 3 feature cards with icons
- [ ] Testimonial slider with client cards
- [ ] 3x2 offered services grid
- [ ] Stats section with 5 gradient numbers + labels
- [ ] Services section with dark bg and 6 cards
- [ ] About section with split layout and play button
- [ ] Brand logos in grayscale with hover color
- [ ] Contact form + address info
- [ ] Dark footer with 3 columns, newsletter, social links
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] Primary accent #8490FF used consistently
- [ ] Pill-shaped CTA buttons with gradient
- [ ] Poppins font family
- [ ] 100% test coverage
- [ ] Specs validated with `npm run spec:validate`
