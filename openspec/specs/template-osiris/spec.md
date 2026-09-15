# Template: Osiris (Agency / Creative Portfolio)

## Purpose

Recreation of ColorLib "Zeta" — a modern agency/creative portfolio template
with bold orange accents, parallax sections, and a full-width hero slider.

- **Source:** https://colorlib.com/wp/template/zeta/
- **Preview:** https://preview.colorlib.com/theme/zeta/
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript
- **New name:** `osiris` (apps/osiris, @free-react-templates/osiris)

## Design tokens

| Token | Value | Usage |
| --- | --- | --- |
| Brand orange | `#ff4200` | Buttons, section title accent "z", active nav highlight |
| Dark background | `#171717` | Services section, about skill bars |
| Footer dark | `#111111` | Footer background |
| White | `#FFFFFF` | Hero text, section titles on parallax |
| Light pink | `#fde0db` | Skill bar track, subtle backgrounds |
| Salmon | `#ffa07f` | Secondary accent |
| Font heading | Montserrat, sans-serif | H1, H2, section titles |
| Font body | Open Sans, sans-serif | Paragraphs, nav links |
| Button | 187×66px, #ff4200 bg, white text, uppercase, arrow icon | CTA buttons |
| Section title | Uppercase, letter-spacing 0.2em, font-weight 600 | H2 section headings |
| Decorative letter | Positioned "z" overlay on section titles | Brand accent |

## Section order and Gherkin scenarios

### 1. Navbar

- Sticky/fixed header with logo and nav links
- Logo: bold lowercase letter + bold wordmark (e.g. "osiris.")
- Nav items: Home, Services, About, Testimonials, Contact
- Active item highlighted with brand orange background
- Mobile: hamburger menu overlay with full-screen nav

**Scenario: Desktop navbar**
- Given the viewport width is ≥ 768px
- When the page loads
- Then the logo is visible on the left
- And nav links are aligned to the right
- And the active link has an orange background highlight

**Scenario: Mobile hamburger**
- Given the viewport width is < 768px
- When the hamburger icon is clicked
- Then a full-screen overlay menu appears
- And nav items are listed vertically
- And the overlay has social media links at the bottom

### 2. Hero Slider

- Full-width parallax hero section (height ~840px on desktop)
- 3 slides with background image
- Headline: "Do you need a modern website?" (second line italic accent)
- Subtext: lorem ipsum paragraph
- CTA button: "discover →" (orange, uppercase, with arrow icon)
- Slide navigation dots (01. 02. 03.) and left/right arrows
- Geometric wireframe decorative overlay

**Scenario: Hero content**
- Given the page loads
- When the hero section renders
- Then the headline "Do you need a modern website?" is displayed
- And the word "modern" has italic styling
- And a "discover" CTA button is visible with an arrow icon

**Scenario: Hero navigation**
- Given the hero slider is active
- When the right arrow is clicked
- Then the next slide is shown
- And the active dot indicator updates

### 3. Social Sidebar

- Fixed right-side social media links (Pinterest, Facebook, Twitter, Dribbble, Behance, LinkedIn)
- Displayed as small icons stacked vertically
- Appears over the hero section

**Scenario: Social sidebar**
- Given the page loads
- When the social sidebar renders
- Then 6 social media icon links are displayed vertically on the right

### 4. Features

- 3-column grid section (white background)
- Each feature: icon image (SVG) + title (uppercase, letter-spaced) + description paragraph
- Features: "modern design", "easy to use", "well documented"

**Scenario: Features display**
- Given the features section is in view
- When the section renders
- Then 3 feature cards are displayed in a row
- And each card has an icon, an uppercase title, and a description paragraph

### 5. About

- Parallax background image section
- Decorative shape overlay
- Two-column layout: left = text + signature image, right = skill progress bars
- Section title: "about our project" with decorative "z" letter
- Skills: management (85%), design (100%), projects (75%), inspiration (95%)
- Skill bars animated on scroll

**Scenario: About section content**
- Given the about section is in view
- When the section renders
- Then the title "about our project" is displayed with a decorative accent
- And a paragraph of text is shown on the left
- And 4 skill progress bars are shown on the right
- And each skill bar has a label and percentage

**Scenario: Skill bar animation**
- Given the about section scrolls into view
- When the progress bars animate
- Then each bar fills to its target percentage
- And the labels show: management, design, projects, inspiration

### 6. Testimonials

- White background section
- Carousel of testimonial cards
- Each card: circular user photo, name, title, quote mark, paragraph text
- Left/right navigation arrows

**Scenario: Testimonials carousel**
- Given the testimonials section is in view
- When the section renders
- Then a testimonial carousel is displayed
- And the first testimonial shows a user photo, name, title, and quote
- And left/right arrows are available for navigation

### 7. Services

- Parallax background image section with decorative shape overlay
- 3×2 grid of service items (6 total)
- Each: icon (SVG) + title + short description
- Services: "modern design", "easy to use", "well documented", "smart structure", "elements", "bold colors"
- CTA button: "discover →" at the bottom

**Scenario: Services grid**
- Given the services section is in view
- When the section renders
- Then 6 service items are displayed in a 3-column grid
- And each item has an icon, title, and description

**Scenario: Services CTA**
- Given the services section is displayed
- When the user scrolls past the grid
- Then a "discover" button is visible at the bottom center

### 8. Clients

- White background section
- Section title: "our clients" with decorative accent
- Two columns of text (client description)
- Logo carousel below (5 client logos)

**Scenario: Clients section**
- Given the clients section is in view
- When the section renders
- Then the title "our clients" is displayed
- And two columns of descriptive text are shown
- And a logo carousel with client logos is displayed

### 9. Contact

- Parallax background image section with decorative shape overlay
- Section title: "let's work together" with decorative accent
- Description paragraph centered
- CTA button: "contact →"

**Scenario: Contact section**
- Given the contact section is in view
- When the section renders
- Then the title "let's work together" is displayed
- And a description paragraph is centered below the title
- And a "contact" CTA button is visible

### 10. Footer

- Dark background (#111111)
- Copyright text on the left
- Social media icon links on the right (Pinterest, Facebook, Twitter, Dribbble, Behance, LinkedIn)
- Footer must link to https://www.componentdock.com/

**Scenario: Footer content**
- Given the page footer is in view
- When the footer renders
- Then copyright text is displayed on the left
- And social media links are on the right
- And a link to ComponentDock is present

## Verification checklist

- [ ] Navbar renders with correct links and active state
- [ ] Hero slider shows headline, subtext, CTA, dots, and arrows
- [ ] Social sidebar displays 6 icons vertically
- [ ] Features section shows 3 cards with icons and text
- [ ] About section has parallax bg, text, signature, and 4 skill bars
- [ ] Testimonials carousel works with navigation arrows
- [ ] Services section shows 6 items in grid + CTA button
- [ ] Clients section has title, text, and logo carousel
- [ ] Contact section has title, text, and CTA button
- [ ] Footer has copyright, social links, and ComponentDock link
- [ ] All section titles use uppercase letter-spaced style with decorative accent
- [ ] Orange brand color (#ff4200) used consistently on CTAs and accents
- [ ] Parallax effects on About, Services, Contact sections
- [ ] Responsive: mobile hamburger menu, stacked columns
- [ ] Placeholder images via picsum.photos/seed/osiris-*
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
