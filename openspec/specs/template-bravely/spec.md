# Template: Bravely (Small Company Website)
<!-- prep-status: shipped-as=crux -->
> **SHIPPED-UNDER** — the ColorLib `bbs` design this prep describes already
> ships as `apps/crux` (<https://crux.free.componentdock.com>).
> Do not scaffold `apps/bravely`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-crux/spec.md`.

## Purpose

Recreation of ColorLib's "Bbs" template — a small company / creative agency
website with a purple-themed hero, feature grid, about section with tabs,
video callout, blog cards, story highlight, newsletter subscription, and footer.

- **Source:** https://colorlib.com/wp/template/bbs/
- **Preview:** https://preview.colorlib.com/theme/bbs/
- **New name:** `bravely` (apps/bravely, @free-react-templates/bravely)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design Tokens

Extracted from the live preview CSS (`css/main.css`) and screenshot analysis.

| Token              | Value                                     | Notes                                                |
| ------------------ | ----------------------------------------- | ---------------------------------------------------- |
| Font family        | `"Poppins", sans-serif`                   | Loaded via Google Fonts (weights 300, 500, 600, 900) |
| Body text color    | `#777777`                                 | Light gray                                           |
| Heading color      | `#222222`                                 | Dark gray / near-black                               |
| Primary purple     | `#7539dd` / `#7034db`                     | Banner radial gradient, story bg, video overlay      |
| Banner text purple | `#793ae9`                                 | Large heading in hero                                |
| Banner text shadow | `rgba(94, 36, 198, 0.75)`                 | Purple glow behind hero text                         |
| Accent pink        | `#f58e9a`                                 | Button gradient start, active tabs, footer hover     |
| Accent yellow      | `#fbe44c`                                 | Button gradient end                                  |
| Tab active color   | `#3c408f`                                 | Tab icon/text accent                                 |
| Section bg light   | `#f9f9ff`                                 | About, subscription, input backgrounds               |
| Section bg white   | `#ffffff`                                 | Featured, blog sections                              |
| Story bg           | `#7034db`                                 | Purple story section                                 |
| Footer bg          | `#333333`                                 | Dark footer                                          |
| Footer text        | `#ffffff`                                 | White footer text                                    |
| Button radius      | `20px`                                    | Pill / capsule shape                                 |
| Button border      | `1px solid #fff` (hero ghost)             | Transparent bg, white border                         |
| Button gradient    | `linear-gradient(0deg, #f58e9a, #fbe44c)` | Pink-to-yellow fill on hover / subscription          |
| Tab radius         | `25px`                                    | Rounded pill tabs                                    |
| Border radius (sm) | `3px`                                     | About thumbnail, small elements                      |

## Visual Design (from screenshot)

- **Hero:** Full-width purple radial-gradient background. Large uppercase
  heading "WE'RE CREATIVE" in semi-transparent purple (#793ae9) with text
  shadow glow. Ghost "Get Started" button (white border, pill shape).
  Hamburger menu icon top-right. "BAS" logo text top-left in orange/yellow.
- **Features:** White card overlapping the hero bottom. 2×2 grid of feature
  items, each with a colored icon (orange/red tones) and title + description.
- **About:** Light background (#f9f9ff). Left-aligned heading "About Our Company"
  with subtitle. Center image. Right tabbed content (History / Mission & Vision).
  Active tab has pink-to-yellow gradient underline.
- **Video:** Purple overlay section with centered heading "New Features that
  open the door of future", play button, and description text.
- **Blog:** White background. Three equal columns with thumbnail images (215px
  height, cover), centered titles, and lorem text.
- **Story:** Purple background (#7034db). Left-aligned white heading "Crafting
  Our Experiences" with white body text. Right half is a background image.
- **Subscription:** Light background. Centered "Subscribe Newsletter" heading.
  Rounded email input (pill shape) with gradient "Get Started" button inside.
- **Footer:** Dark gray (#333333) background. Centered nav links, social media
  icons (Facebook, Twitter, Dribbble, Behance), copyright text. All white text
  with pink hover accent.

## Requirements

### Feature: Bravely — Small Company Website Template

#### Scenario: Page renders all sections in order

- **GIVEN** a user visits the Bravely homepage
- **THEN** the page should display sections in this order: 1. Navbar (logo + hamburger menu) 2. Hero banner ("WE'RE CREATIVE") 3. Features (2×2 grid) 4. About (title + image + tabs) 5. Video callout 6. Blog (3-column cards) 7. Story highlight 8. Newsletter subscription 9. Footer

#### Scenario: Navbar displays logo and hamburger menu

- **GIVEN** the page loads
- **THEN** the navbar should show a logo/text on the left
- **AND** a hamburger menu icon on the right
- **AND** the hamburger should be clickable (toggle mobile nav)

#### Scenario: Hero section renders correctly

- **GIVEN** the hero section is visible
- **THEN** it should display the heading "WE'RE CREATIVE" in large uppercase text
- **AND** a "Get Started" ghost button with pill shape (border-radius 20px)
- **AND** the background should be a purple radial gradient

#### Scenario: Hero button has pill shape

- **GIVEN** the hero section renders
- **THEN** the "Get Started" button should have border-radius of 20px
- **AND** a white border on transparent background
- **AND** on hover the gradient overlay (pink-to-yellow) should appear

#### Scenario: Features section shows 4 items in 2-column grid

- **GIVEN** the features section is visible
- **THEN** it should display 4 feature cards
- **AND** they should be laid out in a 2-column grid on desktop
- **AND** each card should have an icon, title, and description paragraph
- **AND** the background should be white (#ffffff)

#### Scenario: Feature items have correct content

- **GIVEN** the features section renders
- **THEN** the four features should be: - "Unlimited Colors" - "Smart Security" (first instance) - "Endless Support" - "Smart Security" (second instance)

#### Scenario: About section has tabs for History and Mission

- **GIVEN** the about section is visible
- **THEN** it should display an "About Our Company" heading
- **AND** a description paragraph
- **AND** an image
- **AND** two tabs: "History" and "Mission & Vision"
- **AND** "History" tab should be active by default
- **AND** the active tab should have a gradient underline (pink-to-yellow)

#### Scenario: About tabs switch content

- **GIVEN** the about section is visible with the History tab active
- **WHEN** a user clicks the "Mission & Vision" tab
- **THEN** the tab content should switch to show Mission & Vision text
- **AND** the Mission & Vision tab should become visually active

#### Scenario: Video section has purple overlay

- **GIVEN** the video section is visible
- **THEN** it should have a purple gradient overlay background
- **AND** display the heading "New Features that open the door of future"
- **AND** show a play button (centered)
- **AND** show descriptive white text below the play button

#### Scenario: Blog section shows 3 cards in equal columns

- **GIVEN** the blog section is visible
- **THEN** it should display 3 blog cards
- **AND** each card should have a thumbnail image (215px height, cover fit)
- **AND** a centered title and description paragraph
- **AND** the background should be white

#### Scenario: Story section has purple background with image

- **GIVEN** the story section is visible
- **THEN** it should have a purple background (#7034db)
- **AND** display the heading "Crafting Our Experiences" in white
- **AND** show white body text
- **AND** the right half should have a background image (desktop only)

#### Scenario: Newsletter subscription has pill-shaped input

- **GIVEN** the subscription section is visible
- **THEN** it should display "Subscribe Newsletter" heading
- **AND** a centered email input with pill shape (border-radius 25px)
- **AND** a gradient "Get Started" button (pink-to-yellow)
- **AND** the section background should be light (#f9f9ff)

#### Scenario: Subscription button is inside the input field

- **GIVEN** the subscription section renders
- **THEN** the "Get Started" button should be positioned absolutely inside the input
- **AND** it should use the pink-to-yellow gradient background

#### Scenario: Footer displays nav links, social icons, and copyright

- **GIVEN** the footer is visible
- **THEN** it should have a dark gray background (#333333)
- **AND** display centered navigation links (Home, Generic, Elements → replaced with site pages)
- **AND** show social media icons (Facebook, Twitter, Dribbble, Behance)
- **AND** show copyright text with a link to Component Dock
- **AND** all footer text should be white
- **AND** footer links should have pink hover color (#f58e9a)

#### Scenario: Footer links to Component Dock

- **GIVEN** the footer renders
- **THEN** the copyright area should link to https://www.componentdock.com/
- **AND** the link text should reference "Component Dock"

#### Scenario: Mobile responsive layout

- **GIVEN** a user views the page on a mobile viewport (≤767px)
- **THEN** the hero heading should reduce to 60px font size
- **AND** the features should stack into a single column
- **AND** the hamburger menu should be visible (nav hidden)
- **AND** the subscription input should adjust padding
- **AND** the story section background image should be hidden

#### Scenario: Typography uses Poppins font

- **GIVEN** any text is rendered on the page
- **THEN** the font family should be "Poppins", sans-serif
- **AND** body text should use font-weight 300
- **AND** headings should use font-weight 500
- **AND** the hero heading should use font-weight 900

## Verification checklist

- [ ] All 9 sections render in correct order
- [ ] Navbar: logo left, hamburger right, toggle works
- [ ] Hero: purple gradient bg, large heading, ghost pill button
- [ ] Features: 2×2 grid, 4 items with icons/titles/descriptions
- [ ] About: heading + image + 2 tabs with content switching
- [ ] Video: purple overlay, heading, play button, white text
- [ ] Blog: 3 equal cards with thumbnails, titles, descriptions
- [ ] Story: purple bg, white text, background image right half
- [ ] Subscription: pill input, gradient button, centered layout
- [ ] Footer: dark bg, nav links, social icons, Component Dock link
- [ ] Font: Poppins throughout
- [ ] Colors match design tokens (purple #7539dd/#7034db, pink #f58e9a, yellow #fbe44c)
- [ ] Button shapes: pill (20px radius) hero, pill (25px radius) subscription
- [ ] Mobile responsive: stacked columns, hidden nav, adjusted sizes
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Footer links to https://www.componentdock.com/
- [ ] Placeholder images via picsum.photos with deterministic seeds
- [ ] Icons from lucide-react (replacing Font Awesome / Linearicons)
