# Template: CreativeWave (Small Company Website)

## Purpose

Recreation of ColorLib BBS — a small company website template with a purple gradient hero, features grid, about section with tabs, video area, blog cards, story section, newsletter, and footer.

- **Source:** https://colorlib.com/wp/template/bbs/
- **Preview:** https://preview.colorlib.com/theme/bbs/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/bbs-free-small-company-website-template.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Source mapping

| Field         | Value                                                                       |
| ------------- | --------------------------------------------------------------------------- |
| ColorLib slug | `bbs`                                                                       |
| Preview URL   | `https://preview.colorlib.com/theme/bbs/`                                   |
| Screenshot    | `https://colorlib.com/wp/wp-content/uploads/sites/2/bbs-free-small-company-website-template.jpg` |

## Design tokens (extracted from preview CSS)

### Fonts

- **Primary / body:** `"Poppins", sans-serif`
- Weights used: 300 (body text), 500 (headings, nav), 600 (about heading), 900 (banner headline)

### Colors

| Token               | Value             | Usage                                                        |
| ------------------- | ----------------- | ------------------------------------------------------------ |
| Body gradient       | `#8546f6 → #955bf9` | Full page background gradient (vertical, 0deg)              |
| Banner overlay      | `#7539dd → #7034db` | Radial gradient overlay on banner                           |
| Banner heading      | `#793ae9`         | Large "we're Creative" h1 with text-shadow                  |
| Primary button gradient | `#f58e9a → #fbe44c` | Button background gradient (pink to yellow)             |
| Body text           | `#777777`         | Default paragraph / body text                               |
| Headings            | `#222222`         | All heading colors (h1-h6)                                  |
| About area bg       | `#f9f9ff`         | Light lavender background for about section                 |
| Video overlay       | `#7539dd → #7034db` | Same as banner overlay, 80% opacity                       |
| Story area bg       | `#7034db`         | Solid purple background                                     |
| Subscription bg     | `#f9f9ff`         | Light lavender background                                   |
| Footer bg           | `#333333`         | Dark footer background                                      |
| Footer text         | `#fff`            | White text in footer                                        |
| Footer link hover   | `#f58e9a`         | Pink hover for footer links and social icons                |
| Tab active/hover    | `#f58e9a → #fbe44c` | Gradient background for active tab pill                   |
| Link color          | `#777777`         | Default link color                                          |

### Layout

- Main wrapper: `68.75%` width (75% on xl, 90% on lg, 97% on mobile)
- Banner height: `600px`
- Content centered with Bootstrap container
- Responsive breakpoints: 1200px, 1199px, 991px, 767px

### Button styling

- `.primary-btn`: transparent background, white border, `border-radius: 20px`, `line-height: 40px`, `padding: 0 30px`
- Hover: gradient background (`#f58e9a → #fbe44c`), white text becomes dark
- Font-weight: 500

### Tab styling

- `.ilene-tabs .nav-item`: pill shape (`border-radius: 25px`), uppercase, 12px font
- Active/hover: gradient background, white text

## Structure (section order)

1. **Navbar** — Logo + nav links (Home, Generic, Elements) + hamburger menu
2. **Banner / Hero** — Full-width purple gradient, large "we're Creative" heading (100px, 900 weight), "Get Started" button
3. **Features** — 2x2 grid of feature cards (icon + title + description): Unlimited Colors, Smart Security, Endless Support, Smart Security
4. **About** — 3-column: title "About Our Company" + image + tabbed content (History / Mission & Vision)
5. **Video Area** — Purple overlay on background image, "New Features that open the door of future" heading + play button
6. **Blog** — 3 blog cards with thumbnail images and text: Ultimate pet lover, Upcoming role model, Colors of Life
7. **Story** — Purple background with white text "Crafting Our Experiences" + description, background image on right
8. **Newsletter** — "Subscribe Newsletter" heading + email input with "Get Started" button
9. **Footer** — Dark background, nav links, social icons (Facebook, Twitter, Dribbble, Behance), copyright

## Requirements

### Feature: CreativeWave template behaviour

#### Scenario: Page renders with correct heading

- **GIVEN** the user loads the CreativeWave page
- **THEN** the hero heading "we're Creative" is visible
- **AND** the heading is styled with large bold text

#### Scenario: Navbar displays navigation links

- **GIVEN** the user loads the CreativeWave page
- **THEN** the navigation bar is visible at the top
- **AND** it contains links: Home, Generic, Elements

#### Scenario: Features section shows four feature cards

- **GIVEN** the user scrolls to the features section
- **THEN** four feature cards are displayed in a 2-column grid
- **AND** each card has an icon, title, and description

#### Scenario: About section has tabbed content

- **GIVEN** the user scrolls to the about section
- **THEN** the heading "About Our Company" is visible
- **AND** two tabs are shown: History and Mission & Vision
- **AND** the History tab is active by default

#### Scenario: Switching about tabs

- **GIVEN** the about section is visible with History tab active
- **WHEN** the user clicks the "Mission & Vision" tab
- **THEN** the Mission & Vision content is displayed
- **AND** the History content is hidden

#### Scenario: Video section displays correctly

- **GIVEN** the user scrolls to the video section
- **THEN** the heading "New Features that open the door of future" is visible
- **AND** a play button is displayed
- **AND** the section has a purple overlay background

#### Scenario: Blog section shows three cards

- **GIVEN** the user scrolls to the blog section
- **THEN** three blog cards are displayed
- **AND** each card has a thumbnail image, title, and description

#### Scenario: Newsletter subscription form

- **GIVEN** the user scrolls to the newsletter section
- **THEN** the heading "Subscribe Newsletter" is visible
- **AND** an email input field is present
- **AND** a "Get Started" button is present

#### Scenario: Footer displays correctly

- **GIVEN** the user scrolls to the footer
- **THEN** navigation links are displayed (Home, Generic, Elements)
- **AND** social media icons are shown (Facebook, Twitter, Dribbble, Behance)
- **AND** a copyright notice is visible
- **AND** a Component Dock link is present

#### Scenario: Responsive layout on mobile

- **GIVEN** the user loads the page on a mobile viewport (375px)
- **THEN** the navigation collapses to a hamburger menu
- **AND** the layout adjusts to single-column
- **AND** the banner heading reduces in size

#### Scenario: Banner button hover effect

- **GIVEN** the user hovers over the "Get Started" button in the banner
- **THEN** the button background changes to a pink-to-yellow gradient
- **AND** the text color changes to dark

## Verification checklist

- [ ] Hero heading "we're Creative" is visible and large/bold
- [ ] Navbar has Home, Generic, Elements links
- [ ] Purple gradient background covers the page
- [ ] Features section has 4 cards in 2x2 grid
- [ ] About section has tabbed content (History / Mission & Vision)
- [ ] Tabs switch content correctly
- [ ] Video section has purple overlay and play button
- [ ] Blog section shows 3 cards with thumbnails
- [ ] Newsletter section has email input and Get Started button
- [ ] Footer has nav links, social icons, and copyright
- [ ] Footer links to Component Dock
- [ ] Responsive on mobile viewports
- [ ] No ColorLib references in app code
