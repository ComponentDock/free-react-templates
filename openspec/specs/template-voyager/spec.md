# Template: Voyager (Travel & Tour Landing Page)

## Purpose

Recreation of ColorLib "Passport" (`https://colorlib.com/wp/template/passport/`), preview URL `https://preview.colorlib.com/theme/passport/`. Built with Vite, React 19, Tailwind CSS 4, and TypeScript.
New original name: **voyager** (app folder `apps/voyager`, package `@free-react-templates/voyager`).

## Design Tokens

- **Brand Colors**:
  - Primary / Accent: Warm Orange (`#fc8621` / `rgb(252, 134, 33)`), hover (`#fd9e4d`)
  - Neutral dark: `rgb(33, 37, 41)`
  - Neutral light / Backgrounds: `rgb(248, 249, 250)` (light gray), `rgb(239, 239, 239)` (footer bg)
  - Text: `rgb(108, 117, 125)` (muted), `rgb(33, 37, 41)` (headings)
- **Typography**:
  - Headings & Body: "Open Sans", sans-serif (with fallback "Playfair Display" for titles)
- **Buttons & Radii**:
  - Pill buttons (`rounded-full`, e.g. `30px`), padding `10px 30px`, primary orange background with white text.
- **Section Structure**:
  1. **Navbar**: Logo ("Voyager"), Navigation links (Home, About Us, Dropdown, Services, Blog), and Contact Us CTA button.
  2. **Hero**: Full-width overlay hero with title "It is Better to Travel Well Than to Arrive", subtitle, and "Watch Video" button.
  3. **About / Destination Explorer**: "Explore All Corners of The World With Us", descriptive text, read more link, dual-image collage (`https://picsum.photos/seed/voyager-about-1/790/1000`).
  4. **Top Destinations Carousel / Grid**: "We Provide Top Destinations" with cards featuring destination images (`https://picsum.photos/seed/voyager-dest-1/600/400`), title ("Enjoy the beauty of Maldives"), location subtitle.
  5. **Testimonials**: Carousel / cards featuring customer reviews (e.g., Rob Smith, Product Designer at Twitter) with quote text and avatars (`https://picsum.photos/seed/voyager-test-1/200/200`).
  6. **FAQ / Accordion**: "Frequently Asked Questions" with interactive accordion items (How to download and register?, How to create your paypal account?, How to link your paypal and bank account?, We are better than others?).
  7. **Recent Posts**: Blog grid with 4 items featuring thumbnail images (`https://picsum.photos/seed/voyager-post-1/600/400`), title ("Far far away, behind the word mountains"), and "Read More" links.
  8. **CTA Banner**: Orange background banner ("Begin your adventurous journey here.") with "Get started" button.
  9. **Footer**: 5-column layout (About Voyager, Connect with social icons, Links, Company, Contact info with address, phone, email) and required Component Dock branding link (`https://www.componentdock.com/`).

## Gherkin Requirements & Scenarios

### Feature: Voyager Landing Page Sections

#### Scenario: Navigation Bar Render & Interactions

- Given the user loads the Voyager template
- When the navbar is rendered
- Then it displays the "Voyager" logo, navigation links, and "Contact Us" CTA button
- And mobile menu toggle works correctly on smaller viewports.

#### Scenario: Hero Section Display

- Given the user views the hero section
- When the page loads
- Then it shows the prominent heading "It is Better to Travel Well Than to Arrive"
- And includes the "Watch Video" interactive button.

#### Scenario: Destination Explorer & About Section

- Given the user scrolls to the about section
- When the section renders
- Then it displays the "Explore All Corners of The World With Us" heading, descriptive paragraphs, and styled images.

#### Scenario: Top Destinations Showcase

- Given the user views the destinations section
- When the grid/carousel renders
- Then it displays top travel spots such as Maldives with high-quality images, titles, and locations.

#### Scenario: Testimonials Section

- Given the user views customer testimonials
- When the section renders
- Then it shows customer review quotes, names, roles, and avatars.

#### Scenario: FAQ Accordion Interaction

- Given the user clicks on an FAQ question item
- When the accordion item toggles
- Then the answer text expands smoothly and collapses when clicked again.

#### Scenario: Recent Posts / Blog Section

- Given the user views the blog section
- When the grid renders
- Then it shows recent travel articles with image thumbnails, headlines, and read-more links.

#### Scenario: CTA Banner and Footer

- Given the user scrolls to the bottom of the page
- When the CTA banner and footer render
- Then they display the adventure CTA, multi-column footer navigation, contact details, and the required Component Dock footer link.

## Verification Checklist

- [ ] App builds cleanly (`npm run build`)
- [ ] Typecheck passes (`npm run typecheck`)
- [ ] Lint passes (`npm run lint`)
- [ ] Vitest tests pass with 100% coverage (`npm run test:coverage`)
- [ ] Footer links https://www.componentdock.com/ ("Component Dock")
- [ ] `public/CNAME` contains `voyager.free.componentdock.com`
