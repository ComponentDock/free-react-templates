# Template: Foamly (Car Wash / Detailing Service Landing)

## Purpose

Foamly is a single-page car wash & detailing service landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Carwash" free template (source slug: `carwash`,
preview: https://preview.colorlib.com/theme/carwash/), built under a DIFFERENT
name (**Foamly**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a Bootstrap 4 + jQuery single-page site for a car wash business:
a sticky white header with a blue-gradient CTA phone button, a full-bleed hero
slider with dark overlay and white headline + CTA, an about/environments section
with a light-blue background, a pricing-card section (3 tiers), a testimonial
carousel, a "why us" feature grid, a video-CTA area, a contact/maps area, and a
dark-footer with social links.

**WHAT MAKES FOAMLY DISTINCT (signature behaviors):**

1. **Hero slider with dark overlay and bold headline.** Full-viewport slider
   (`slider-bg1`) with a semi-transparent dark overlay (`hero-overly`), white
   headline (`hero__caption`), and a gradient-blue CTA button (`borders-btn`).
   The hero is the dominant visual element — 100vh with centered text.
2. **Three-tier pricing cards.** Cards with colored header bars, price display,
   feature lists with check icons, and a "Get Started" CTA button. The cards
   are for: Car Wash ($50), Detailing ($100), Wash & Detailing ($200).
3. **Testimonial carousel with founder photos.** Dot-style carousel with
   circular founder images, names, and quote text. White background section.
4. **Video-CTA area.** A full-width section with a background image, a centered
   play button icon, and overlay text — used to showcase the service in action.
5. **Blue gradient CTA buttons.** The primary CTA uses a linear gradient from
   `#0d43b6` to `#0f66f8` (dark blue → bright blue) with 30px border-radius
   (pill shape), white text, uppercase.

## Design tokens (extracted from preview CSS)

| Token | Value | Usage |
|-------|-------|-------|
| Primary blue | `#007AFF` | Borders, accents, links |
| Primary dark | `#1f2b7b` | Button backgrounds, footer |
| Gradient start | `#0d43b6` | CTA button gradient start |
| Gradient end | `#0f66f8` | CTA button gradient end |
| Success teal | `#4cd3e3` | Alternate button color |
| Section bg light | `#EEF6FF` | Light sections |
| Section bg pale | `#fbf9ff` | Very light purple-white sections |
| Text dark | `#25262a` | Body text |
| Footer bg | `#1f2b7b` (dark navy) | Footer wrapper |
| White | `#fff` | Cards, header, hero text |
| Font primary | Poppins | Headlines, UI |
| Font secondary | Work Sans | Body text |
| Button radius | 30px (pill) | All CTA buttons |
| Button gradient | `linear-gradient(0deg, #0d43b6, #0f66f8)` | Primary CTA |

## Section structure (in order)

1. **Navbar** — Sticky white header with logo ("Car Wash" with icon), nav links
   (Home, About, Services, Blog, Contact), and a blue-gradient phone CTA button
   ("10 (87) 256-2903").
2. **Hero Slider** — Full-viewport slider with dark overlay on background image,
   centered white text: headline "Car Wash & Detailing", subtitle text, and a
   "Our Services" CTA button (gradient blue, pill).
3. **Office Environments / About** — Light blue background section with a photo
   on the left and white content card on the right. Headline, body text, and an
   "About Us" CTA button.
4. **Pricing Cards** — Three service tiers displayed as cards: Car Wash ($50),
   Detailing ($100), Wash & Detailing ($200). Each has a feature list and
   "Get Started" button.
5. **Testimonials** — Dot-style carousel with circular founder images, names,
   roles, and quote text. White background.
6. **Why Us / Features** — Section with 4 feature items (Car wash 100% without
   detergents, Efficient surface drying machines, We have an application, Safe
   lacquer protection), each with an icon and description.
7. **Video CTA** — Full-width background image section with centered play
   button icon and overlay text ("Your car will look as your new one").
8. **Contact / Maps** — Contact info section with phone, email, opening hours,
   and navigation links.
9. **Footer** — Dark navy background (`#1f2b7b`) with logo, about text, social
   links (Facebook, Pinterest, Twitter), contact info, opening hours, navigation
   links, and copyright.

## Gherkin requirements

### Feature: Foamly — Car Wash & Detailing Landing Page

  Scenario: Navbar displays logo, nav links, and contact CTA
    Given the user visits the Foamly landing page
    Then the navbar shows a logo with "Car Wash" branding
    And nav links include Home, About, Services, Blog, Contact
    And a phone number CTA button is visible on the right

  Scenario: Hero section shows headline and CTA
    Given the user views the hero section
    Then a headline "Car Wash & Detailing" is displayed in white text
    And a subtitle paragraph is shown below the headline
    And a "Our Services" CTA button with gradient blue styling is visible

  Scenario: About section displays service info
    Given the user scrolls to the about section
    Then a heading "We offer best services to our customer" is shown
    And a descriptive paragraph is displayed
    And an "About Us" CTA button is visible

  Scenario: Pricing cards show three service tiers
    Given the user views the pricing section
    Then three pricing cards are displayed in a row
    And card 1 shows "Car Wash" at "$50.00"
    And card 2 shows "Detailing" at "$100.00"
    And card 3 shows "Wash & Detailing" at "$200.00"
    And each card has a "Get Started" button

  Scenario: Testimonials carousel displays quotes
    Given the user views the testimonials section
    Then testimonial slides are shown in a carousel
    And each slide shows a circular founder image
    And each slide has a name, role, and quote text

  Scenario: Why Us section shows features
    Given the user views the why-us section
    Then 4 feature items are displayed
    And each feature has an icon, title, and description

  Scenario: Video CTA section prompts engagement
    Given the user scrolls to the video CTA section
    Then a background image section is displayed
    And a centered play button icon is visible
    And heading text "Your car will look as your new one" is shown

  Scenario: Contact section shows business info
    Given the user views the contact section
    Then phone number "(80) 783 367-3904" is displayed
    And email "contact@carwash.com" is shown
    And opening hours are listed (Mon-Fri, Sat, Sun)

  Scenario: Footer displays branding and links
    Given the user scrolls to the footer
    Then the footer has a dark navy background
    And it shows the logo, about text, and social links
    And a "Component Dock" attribution link is present
    And a copyright notice is shown

  Scenario: Navbar is sticky on scroll
    Given the user scrolls down the page
    Then the navbar sticks to the top of the viewport
    And it remains visible while scrolling

  Scenario: All CTA buttons have consistent gradient styling
    Given any CTA button is rendered
    Then it has a blue gradient background (#0d43b6 to #0f66f8)
    And it has pill-shaped border-radius (30px)
    And text is white and uppercase

## Verification checklist

- [ ] Navbar: logo, nav links, phone CTA button, sticky on scroll
- [ ] Hero: full-viewport slider, dark overlay, white headline, subtitle, gradient CTA
- [ ] About: light blue background, image + text card, CTA button
- [ ] Pricing: 3 cards with prices ($50, $100, $200), feature lists, CTA buttons
- [ ] Testimonials: carousel with dots, circular images, quotes, names
- [ ] Why Us: 4 feature items with icons, titles, descriptions
- [ ] Video CTA: background image, play icon, heading text
- [ ] Contact: phone, email, hours, navigation
- [ ] Footer: dark navy bg, logo, social links, Component Dock link, copyright
- [ ] Design tokens: Poppins/Work Sans fonts, blue gradient (#0d43b6→#0f66f8), pill buttons
- [ ] Responsive: works on mobile, tablet, desktop
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
