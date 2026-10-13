# Template: Flockwell (Church / Faith)

## Purpose

Recreation of the ColorLib **Salvation** church website template as a React 19 + Vite + Tailwind 4 + TypeScript single-page application.

- **Source slug:** `salvation`
- **ColorLib page:** https://colorlib.com/wp/template/salvation/
- **Preview URL:** https://preview.colorlib.com/theme/salvation/
- **Source screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/salvation-free-template.jpg
- **New name:** `flockwell` (apps/flockwell, @free-react-templates/flockwell)
- **Deploy target:** https://flockwell.free.componentdock.com

## Design tokens (extracted from live preview CSS)

| Token | Value | Usage |
|-------|-------|-------|
| `--primary` | `#007bff` | Buttons, links, counter section bg, navbar accents |
| `--accent` | `#ce0f3d` | Sermon title links, hero dashed-border accents, footer links |
| `--footer-bg` | `#1a1a1a` | Footer background |
| `--event-text-bg` | `#f7e8f0` | Event card text panel background |
| `--hero-overlay` | `rgba(0,0,0,0.4)` | Hero image overlay |
| Font family | `"Poppins", Arial, sans-serif` | All headings and body text |
| Button radius | `0.25rem` (Bootstrap default) | CTA buttons |
| Gallery overlay | `#000000` | Gallery item hover overlay |
| Testimony bg | Dark (near-black) | Testimony section background |
| Counter bg | `#007bff` | Stats counter section |

## Visual design notes (from preview DOM + CSS)

- **Hero:** Full-viewport height slider with dark semi-transparent overlay. Centered white text: small heading "Transforming Lives" + large heading "Total Surrender to God" + paragraph + "Become A Volunteer" primary button.
- **Navbar:** Dark background (`bg-dark`), brand text "Flockwell", horizontal nav links, "Donate" CTA button.
- **About section:** White bg, centered heading "Welcome to Flockwell Church" + subheading "Perfect Church For Imperfect People" + description text.
- **Feature cards:** Three icon+title+text cards (Worship, Connect, God's Love) on white bg.
- **Quote/CTA:** Centered inspirational quote.
- **Call-to-action:** "Connect, Grow and Serve with Us" section.
- **Mission banner:** Dark background with white text "We're on a mission to help all your problems" + donate CTA.
- **Counter stats:** Blue primary-bg section with numeric counters.
- **Sermons:** Alternating image+text rows (sermon cards) on light bg.
- **Testimony:** Dark bg section with testimonials.
- **Blog:** Three-column blog card grid.
- **Events:** Event cards with image + text panel (pink-tinted bg).
- **Gallery:** Image grid with hover overlay.
- **Footer:** Dark bg (#1a1a1a), four columns: brand + description, Latest News links, Quick Links, Contact form. Links use accent red (#ce0f3d).
- **Donate Modal:** Bootstrap modal with form.

## Requirements

### Feature: Flockwell Church Template

#### Scenario: Top bar displays location and social links

- **GIVEN** the user loads the page
- **THEN** a top bar is visible with a location address and social media icon links (Facebook, Twitter, Instagram, Dribbble)

#### Scenario: Navbar navigation

- **GIVEN** the user loads the page
- **THEN** a dark navbar is visible with the brand "Flockwell"
- **AND** nav links are present: Home, About, Ministries, Sermons, Events, Blog, Contact
- **AND** a "Donate" CTA button is present

#### Scenario: Hero section

- **GIVEN** the user loads the page
- **THEN** a full-viewport hero section is visible with a background image and dark overlay
- **AND** a heading "Transforming Lives" is displayed
- **AND** a large heading "Total Surrender to God" is displayed
- **AND** a description paragraph is displayed
- **AND** a "Become A Volunteer" button is displayed

#### Scenario: About section

- **GIVEN** the user scrolls to the about section
- **THEN** a heading "Welcome to Flockwell Church" is displayed
- **AND** a subheading "Perfect Church For Imperfect People" is displayed
- **AND** a descriptive paragraph is shown

#### Scenario: Feature cards

- **GIVEN** the user scrolls to the features section
- **THEN** three feature cards are displayed: Worship, Connect, God's Love
- **AND** each card has an icon, title, and description text

#### Scenario: Quote section

- **GIVEN** the user scrolls to the quote section
- **THEN** an inspirational quote is displayed centered on the page

#### Scenario: Call-to-action section

- **GIVEN** the user scrolls to the CTA section
- **THEN** a heading "Connect, Grow and Serve with Us" is displayed

#### Scenario: Mission banner

- **GIVEN** the user scrolls to the mission section
- **THEN** a dark-background banner is displayed
- **AND** white text "We're on a mission to help all your problems" is shown
- **AND** a donate CTA button is present

#### Scenario: Counter stats section

- **GIVEN** the user scrolls to the counter section
- **THEN** a blue primary-background section is visible
- **AND** numeric stat counters are displayed

#### Scenario: Sermons section

- **GIVEN** the user scrolls to the sermons section
- **THEN** a heading "Watch and Listen to our Sermons" is displayed
- **AND** sermon cards are displayed in alternating image+text rows
- **AND** each sermon card has an image, title, metadata, and description

#### Scenario: Testimony section

- **GIVEN** the user scrolls to the testimony section
- **THEN** a dark-background section is displayed
- **AND** a heading "Transform Lives" is shown
- **AND** testimonial content is displayed

#### Scenario: Blog section

- **GIVEN** the user scrolls to the blog section
- **THEN** a heading "Latest news from our blog" is displayed
- **AND** three blog entry cards are shown in a grid

#### Scenario: Events section

- **GIVEN** the user scrolls to the events section
- **THEN** a heading "Latest Events" is displayed
- **AND** event cards are shown with images and text panels

#### Scenario: Gallery section

- **GIVEN** the user scrolls to the gallery section
- **THEN** a heading "Galleries" is displayed
- **AND** a grid of gallery images is shown with hover overlays

#### Scenario: Footer

- **GIVEN** the user scrolls to the footer
- **THEN** a dark-background footer is displayed
- **AND** the brand "Flockwell" heading is shown
- **AND** columns for Latest News, Quick Links, and contact info are present
- **AND** footer links use accent red color
- **AND** a "Made with Component Dock" attribution link is present

#### Scenario: Donate modal

- **GIVEN** the user clicks the "Donate" button in the navbar
- **THEN** a Bootstrap modal opens with the title "Make a Difference Today"
- **AND** a donation form is displayed inside the modal

#### Scenario: Responsive design

- **GIVEN** the user views the page on a mobile viewport
- **THEN** the navbar collapses into a hamburger menu
- **AND** all sections stack vertically
- **AND** the hero text remains readable

#### Scenario: Accessibility

- **GIVEN** the user loads the page
- **THEN** all images have alt text
- **AND** all interactive elements are keyboard-focusable
- **AND** ARIA labels are present on icon-only links

## Verification checklist

- [ ] All sections match the original section order
- [ ] Design tokens match: primary #007bff, accent #ce0f3d, Poppins font
- [ ] Hero is full-viewport with overlay and centered text
- [ ] Navbar is dark with brand + nav + donate CTA
- [ ] Counter section uses primary blue background
- [ ] Testimony section uses dark background
- [ ] Footer uses #1a1a1a background with accent red links
- [ ] Gallery has hover overlays
- [ ] Events have pink-tinted text panels (#f7e8f0)
- [ ] Donate modal opens on CTA click
- [ ] Responsive: navbar collapses, sections stack
- [ ] Footer links to componentdock.com
- [ ] No ColorLib references in app code
- [ ] Placeholder images use picsum.photos
- [ ] 100% test coverage
