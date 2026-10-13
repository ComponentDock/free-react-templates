# Template: BlueVessel (Business / Technology Landing)

## Purpose

Recreation of the ColorLib **Blueline** template as a modern React 19 + Vite + Tailwind CSS 4 + TypeScript application.

- **Source:** https://colorlib.com/wp/template/blueline/
- **Preview:** https://preview.colorlib.com/theme/blueline/
- **New name:** `bluevessel` (app: `apps/bluevessel`, package: `@free-react-templates/bluevessel`)
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript, Vitest + Testing Library
- **Design category:** Business / Technology landing page — fullscreen hero with geometric gradient, feature cards, service showcase, portfolio gallery, newsletter subscription, and contact form.

## Design Tokens

Extracted from the live preview at https://preview.colorlib.com/theme/blueline/ and its `css/main.css`.

| Token | Value | Usage |
|---|---|---|
| Brand gradient (vertical) | `linear-gradient(0deg, #3c50ca 0%, #77d5f7 100%)` | Primary buttons, gradient text on headings, icon color, slider hover triggers |
| Brand gradient (horizontal) | `linear-gradient(90deg, #3c50ca 0%, #77d5f7 50%)` | Secondary gradient (service area sidebar, feature section) |
| Primary blue | `#2954c9` | Button fill, hover states, select option hover |
| Light blue accent | `#77d5f7` | Footer links, banner text shadow tint, nav hover |
| Dark background | `#1e1e1e` | Footer, contact area |
| Light background | `#f9f9ff` / `#f9fafc` | Page body, subscription input, default section bg |
| White | `#fff` | Cards, forms, button hover fills |
| Text dark | `#222` | Body text, default-border button text |
| Font family | `"Poppins", sans-serif` | All headings and body |
| Heading weight (light) | `font-weight: 200` / `300` | Large section headings (services, latest works, subscription) |
| Heading weight (bold) | `font-weight: 600` | Emphasized span inside light headings |
| Button radius (circle) | `border-radius: 20px` | `.genric-btn.circle` |
| Button radius (default) | `border-radius: 3px` | Default `.genric-btn` |
| Input radius | `border-radius: 25px` | Newsletter subscription input |
| Banner | Fullscreen background image with dark overlay, text shadow | Hero section, `background-size: cover` |
| Section padding | `padding: 100px 0` standard sections | Feature, service, latest-work, subscription, contact areas |

### Color palette summary

- Deep blue: `#3c50ca`
- Light cyan: `#77d5f7`
- Primary blue: `#2954c9`
- Dark: `#1e1e1e`
- Light bg: `#f9f9ff`
- Text: `#222`
- White: `#fff`

## Visual Design (from screenshot)

The screenshot shows a fullscreen hero with a deep-to-light blue gradient background and subtle geometric poly/angular overlays. The hero text is white, all-caps, ultra-wide letter-spacing: small "INTRODUCING" super-heading above a massive "BLUELINE" title. A hamburger menu icon sits top-right; the brand logo is top-left. The overall aesthetic is minimalist, modern, tech-forward — a SaaS/technology startup landing page with clean geometric lines and high-contrast white-on-blue typography.

## Requirements

### Hero / Banner Section

#### Scenario: Fullscreen hero renders on load

- **GIVEN** the user visits the BlueVessel page
- **THEN** a fullscreen hero section is visible
- **AND** the hero has a blue gradient background (deep blue to light cyan)
- **AND** the hero heading reads "INTRODUCING" in small uppercase text
- **AND** the hero main title reads "BLUEVESSEL" in large uppercase white text with wide letter-spacing
- **AND** a navigation bar is present at the top with the brand name on the left and a hamburger menu on the right
- **AND** the navigation links (Home, About, Services, Portfolio, Contact) are visible when the menu is opened
- **AND** a "Learn More" call-to-action button with rounded corners is visible in the hero

### Feature Cards Section

#### Scenario: Three feature cards display with numbered items

- **GIVEN** the user scrolls past the hero
- **THEN** a features section is visible with a gradient-text heading
- **AND** three feature cards are displayed in a row
- **AND** each card has a number (01, 02, 03), a title, and a description paragraph
- **AND** card 01 title is "Responsive View"
- **AND** card 02 title is "Multiple Layouts"
- **AND** card 03 title is "Flexible Design"
- **AND** each card description discusses usability and technology

### Video Section

#### Scenario: Video showcase area renders

- **GIVEN** the user scrolls past the features
- **THEN** a video section is visible
- **AND** the section has a "Great Modern Design" heading with gradient text
- **AND** a subtitle reads "Build with usability in mind"
- **AND** a play button overlay is visible (circular, centered)

### Services Section

#### Scenario: Services area displays with sidebar and cards

- **GIVEN** the user scrolls past the video section
- **THEN** a services section is visible with a left sidebar and right content area
- **AND** the left sidebar has a heading "Services We Offered" with a description paragraph
- **AND** the right side displays four service cards in a 2x2 grid
- **AND** each service card has an icon, a title ("Graphics Design"), and a description paragraph
- **AND** the service icons use the gradient color

### Latest Works / Portfolio Section

#### Scenario: Portfolio gallery shows recent work

- **GIVEN** the user scrolls past the services
- **THEN** a latest works section is visible with centered text
- **AND** the heading reads "Some Of our Latest Works"
- **AND** a carousel or grid of portfolio images is displayed
- **AND** carousel navigation arrows are present

### Newsletter / Subscription Section

#### Scenario: Newsletter subscription form renders

- **GIVEN** the user scrolls past the portfolio
- **THEN** a subscription section is visible with a white background
- **AND** the heading reads "Subscribe for our Newsletter"
- **AND** a subtext reads "We won't send any kind of spam"
- **AND** an email input field with rounded corners (25px radius) is present
- **AND** a "Get Started" button with gradient background is positioned to the right of the input
- **AND** submitting with a valid email shows a success message
- **AND** submitting with an invalid email shows an error message

### Contact Section

#### Scenario: Contact form displays with dark background

- **GIVEN** the user scrolls past the subscription section
- **THEN** a contact section is visible with a dark background
- **AND** the heading reads "Contact Us" (or similar) in white text with letter-spacing
- **AND** a subtext paragraph is visible below the heading
- **AND** a "Send Message" button is present
- **AND** a contact form with name, email, and message fields is displayed
- **AND** the form has a white background with padding
- **AND** submitting with empty required fields shows validation errors

### Footer

#### Scenario: Footer renders with copyright and links

- **GIVEN** the user reaches the bottom of the page
- **THEN** a footer is visible with a dark background (#1e1e1e)
- **AND** social media icon links are displayed (circular buttons with gradient hover)
- **AND** a copyright notice is shown
- **AND** a "Component Dock" link is present (mandatory: links to https://www.componentdock.com/)

### Responsive Behavior

#### Scenario: Layout adapts to mobile viewport

- **GIVEN** the user resizes the browser to 767px width
- **THEN** the navigation collapses to a hamburger menu
- **AND** feature cards stack vertically
- **AND** service cards stack vertically
- **AND** the subscription input takes full width
- **AND** the contact form takes full width

### Accessibility

#### Scenario: Interactive elements are keyboard accessible

- **GIVEN** the user navigates with keyboard only
- **THEN** all links and buttons are focusable with visible focus rings
- **AND** the hamburger menu can be toggled with Enter/Space
- **AND** form inputs have associated labels
- **AND** images have descriptive alt text

## Verification Checklist

- [ ] Hero renders fullscreen with gradient background
- [ ] Navigation bar with hamburger menu works on all viewports
- [ ] Feature cards display 01/02/03 with correct titles and descriptions
- [ ] Video section has gradient heading and play button
- [ ] Services section has sidebar description + 4 service cards
- [ ] Portfolio gallery with carousel navigation
- [ ] Subscription form with rounded input and gradient button
- [ ] Contact form with validation on dark background
- [ ] Footer with social icons, copyright, and ComponentDock link
- [ ] Responsive: mobile hamburger, stacked cards, full-width forms
- [ ] Accessibility: keyboard nav, focus rings, labels, alt text
- [ ] Design tokens match: Poppins font, #3c50ca/#77d5f7 gradient, #1e1e1e dark, #f9f9ff light bg
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] `npm run verify:app bluevessel` passes
