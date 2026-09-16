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

## Gherkin requirements

### Feature: Flockwell Church Template

#### Scenario: Top bar displays location and social links
  Given the user loads the page
  Then a top bar is visible with a location address and social media icon links (Facebook, Twitter, Instagram, Dribbble)

#### Scenario: Navbar navigation
  Given the user loads the page
  Then a dark navbar is visible with the brand "Flockwell"
  And nav links are present: Home, About, Ministries, Sermons, Events, Blog, Contact
  And a "Donate" CTA button is present

#### Scenario: Hero section
  Given the user loads the page
  Then a full-viewport hero section is visible with a background image and dark overlay
  And a heading "Transforming Lives" is displayed
  And a large heading "Total Surrender to God" is displayed
  And a description paragraph is displayed
  And a "Become A Volunteer" button is displayed

#### Scenario: About section
  Given the user scrolls to the about section
  Then a heading "Welcome to Flockwell Church" is displayed
  And a subheading "Perfect Church For Imperfect People" is displayed
  And a descriptive paragraph is shown

#### Scenario: Feature cards
  Given the user scrolls to the features section
  Then three feature cards are displayed: Worship, Connect, God's Love
  And each card has an icon, title, and description text

#### Scenario: Quote section
  Given the user scrolls to the quote section
  Then an inspirational quote is displayed centered on the page

#### Scenario: Call-to-action section
  Given the user scrolls to the CTA section
  Then a heading "Connect, Grow and Serve with Us" is displayed

#### Scenario: Mission banner
  Given the user scrolls to the mission section
  Then a dark-background banner is displayed
  And white text "We're on a mission to help all your problems" is shown
  And a donate CTA button is present

#### Scenario: Counter stats section
  Given the user scrolls to the counter section
  Then a blue primary-background section is visible
  And numeric stat counters are displayed

#### Scenario: Sermons section
  Given the user scrolls to the sermons section
  Then a heading "Watch and Listen to our Sermons" is displayed
  And sermon cards are displayed in alternating image+text rows
  And each sermon card has an image, title, metadata, and description

#### Scenario: Testimony section
  Given the user scrolls to the testimony section
  Then a dark-background section is displayed
  And a heading "Transform Lives" is shown
  And testimonial content is displayed

#### Scenario: Blog section
  Given the user scrolls to the blog section
  Then a heading "Latest news from our blog" is displayed
  And three blog entry cards are shown in a grid

#### Scenario: Events section
  Given the user scrolls to the events section
  Then a heading "Latest Events" is displayed
  And event cards are shown with images and text panels

#### Scenario: Gallery section
  Given the user scrolls to the gallery section
  Then a heading "Galleries" is displayed
  And a grid of gallery images is shown with hover overlays

#### Scenario: Footer
  Given the user scrolls to the footer
  Then a dark-background footer is displayed
  And the brand "Flockwell" heading is shown
  And columns for Latest News, Quick Links, and contact info are present
  And footer links use accent red color
  And a "Made with Component Dock" attribution link is present

#### Scenario: Donate modal
  Given the user clicks the "Donate" button in the navbar
  Then a Bootstrap modal opens with the title "Make a Difference Today"
  And a donation form is displayed inside the modal

#### Scenario: Responsive design
  Given the user views the page on a mobile viewport
  Then the navbar collapses into a hamburger menu
  And all sections stack vertically
  And the hero text remains readable

#### Scenario: Accessibility
  Given the user loads the page
  Then all images have alt text
  And all interactive elements are keyboard-focusable
  And ARIA labels are present on icon-only links

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
