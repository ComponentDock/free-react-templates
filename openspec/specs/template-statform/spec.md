# Template: Statform (Political/Party Landing Page)

## Purpose

Recreation of ColorLib **Politics** template as a single-page React 19 + Vite + Tailwind 4 + TypeScript app.

- **Source:** ColorLib Politics
- **ColorLib URL:** https://colorlib.com/wp/template/politics/
- **Preview URL:** https://preview.colorlib.com/theme/politics/
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript (strict)
- **Description:** Political party / campaign landing page with countdown timer, services, about section, gallery, stats counters, FAQ accordion, brand carousel, blog grid, and newsletter footer.

## Design Tokens (extracted from preview CSS)

### Colors
- **Primary brand:** `#3898f8` (blue — buttons, accents, hover states, active states)
- **Body text:** `#777` (gray)
- **Headings:** `#222` (dark gray/near-black)
- **Header top bar background:** `#222222` (dark)
- **Light section background:** `#f9f9ff` (very light blue-gray — used on countdown, about, brands, accordion headings, testimonials)
- **Footer background:** `#04091e` (very dark navy)
- **Footer social icons bg:** `#111111`
- **Blog date badge background:** `#000` (black)
- **Counter area:** dark image overlay `rgba(0,0,0,0.7)`
- **Banner overlay:** `#000` at `opacity:.5`
- **Accordion open state:** `#3898f8` background with white text

### Typography
- **Font family:** `"Poppins", sans-serif`
- **Weights used:** 300 (body), 400 (nav, regular), 500 (buttons, emphasis), 600 (headings, footer widgets), 700 (banner h1, logo)
- **Base font size:** 14px
- **Line height:** 1.625em (body), 1.2em (headings)
- **Heading sizes:** h1=36px, h2=30px, h3=24px, h4=18px, h5=16px, h6=14px
- **Banner h1:** 48px (responsive: 45px → 40px)

### Buttons
- **Primary button (`.primary-btn`):** `#3898f8` bg, white text, `border-radius: 25px`, `line-height: 42px`, padding `0 30px`, font-weight 500, uppercase
- **Header CTA (`.header-btn`):** same as primary but `border-radius: 0`, border: transparent, hover: transparent bg + white border
- **Footer subscribe button:** same `#3898f8`, `border-radius: 25px`, uppercase with arrow icon

### Borders & Radii
- **Primary buttons:** `border-radius: 25px` (pill shape)
- **Header CTA:** `border-radius: 0` (square)
- **Counter circles:** `border-radius: 68px` (outer ring), inner circle 50px
- **Footer newsletter input:** `border-radius: 20px`
- **Blog date badge:** no radius (square, black bg)
- **Section spacing:** `.section-gap { padding: 120px 0 }`

### Section Backgrounds
- **Banner:** full-width background image with black overlay (50% opacity)
- **Countdown:** light `#f9f9ff` left half, primary blue `#3898f8` right half
- **Services:** white
- **About:** light `#f9f9ff` with left-side background image (pseudo-element `:after`)
- **Gallery:** white
- **Counter/Stats:** dark background image with 70% black overlay
- **FAQ/Feedback:** white with accordion + video play button area (dark overlay)
- **Brands:** light `#f9f9ff`
- **Blog:** white
- **Footer:** dark navy `#04091e`

## Gherkin Requirements

### Feature: Statform — Political Campaign Landing Page

#### Scenario: Header top bar displays social icons and contact info
- Given the page loads
- Then a dark top bar is visible with social media icons (Facebook, Twitter, Dribbble, Behance) on the left
- And a phone number and email address are displayed on the right

#### Scenario: Navigation menu renders all links
- Given the page loads
- Then a fixed white navigation bar shows with logo and menu links
- And the menu contains: Home, About, Service, Team, Blog (with dropdown: Blog Home, Blog Single), Elements, Contact
- And the active item "Home" is visually highlighted

#### Scenario: Hero banner displays with overlay and CTA
- Given the page loads
- Then a full-height hero banner with a dark overlay background image is visible
- And the text "Don't look further, This is our Leader" appears as a subtitle
- And the heading "Support Our Party" is displayed in large white text
- And a paragraph of supporting text is visible
- And a "Get Started" primary button is rendered

#### Scenario: Countdown timer section renders
- Given the page loads
- Then a countdown section appears below the banner
- And the left side shows "Election is knocking at door" heading and descriptive text
- And the right side shows a countdown timer on a primary blue background

#### Scenario: Services section shows three cards
- Given the page loads
- Then a services section with heading "What we Offer to our Supporters" is visible
- And three service cards are displayed in a row
- Each card has an image thumbnail, title, and description paragraph
- The services are: "Conduct Campaign", "Generate Member", "Energy Saving Policy"

#### Scenario: About section with split layout
- Given the page loads
- Then an about section appears with a background image on the left half
- And the right side shows "Who we are to Serve the nation" heading
- And a descriptive paragraph is displayed
- And two feature boxes appear below with icons: "Expert Services" and "Great Support"

#### Scenario: Gallery section shows 4 images in grid
- Given the page loads
- Then a gallery section with heading "Our Gallery Archive" is visible
- And four images are displayed in a responsive grid (1 large + 1 small on top, 2 medium on bottom)
- And images have hover opacity effect

#### Scenario: Counter/stats section displays four metrics
- Given the page loads
- Then a dark background counter section is visible
- And four stat counters are displayed: "2K+ Projects Completed", "5.5K Total Employees", "959 Happy Clients", "367 Tickets Submitted"
- And each counter has a circular primary-blue badge with the number

#### Scenario: FAQ accordion section
- Given the page loads
- Then a feedback section with heading "Goals to Achieve for the leadership" is visible
- And an accordion on the left shows four items: "Success", "Info", "danger", "Warning"
- And only one accordion item is open at a time, showing its content paragraph
- And the open item has a primary blue background
- And a video play button area appears on the right side with dark overlay

#### Scenario: Brand carousel section
- Given the page loads
- Then a brand carousel section is visible with a light background
- And five partner/client logos are displayed in a horizontal row
- And logos are grayscale by default, full color on hover

#### Scenario: Blog section shows four post cards
- Given the page loads
- Then a blog section with heading "Latest From Our Blog" is visible
- And four blog cards are displayed in a row
- Each card has: image thumbnail, date badge (black), title, excerpt, likes count, comments count
- And hovering a card scales the image and turns the title blue

#### Scenario: Footer with newsletter, links, and Instagram feed
- Given the page loads
- Then a dark navy footer is displayed
- And a "Top Products" links column is shown on the left
- And a newsletter signup form with email input and "Subscribe" button is in the center
- And an "Instagram Feed" grid of 9 thumbnail images is on the right
- And the bottom bar shows copyright text with "Component Dock" link
- And social media icon links (Facebook, Twitter, Dribbble, Behance) are shown on the right of the bottom bar

#### Scenario: Header becomes fixed with shadow on scroll
- Given the page loads and user scrolls down
- Then the header gets a box shadow and semi-transparent background

#### Scenario: Responsive behavior
- Given the page is viewed on mobile (viewport < 768px)
- Then the header top bar is hidden
- And a hamburger menu toggle appears
- And the mobile slide-in navigation panel opens from the left
- And grid layouts collapse to single column
- And section padding is reduced

## Verification Checklist

- [ ] All sections render in the correct order matching the original
- [ ] Design tokens (colors, fonts, radii) match the extracted values
- [ ] Poppins font loaded via Google Fonts
- [ ] Primary blue (#3898f8) used consistently for buttons, accents, hover states
- [ ] Dark header top bar with social icons and contact info
- [ ] Fixed navigation bar with logo and menu items
- [ ] Hero banner with dark overlay, heading, subtitle, and CTA button
- [ ] Countdown section with split layout (text left, timer right, blue bg)
- [ ] Three service cards with image, title, description
- [ ] About section with left background image and right content + 2 feature boxes
- [ ] Gallery with 4 images in responsive grid layout
- [ ] Counter section with dark bg, 4 stats in circular blue badges
- [ ] FAQ accordion with 4 items, open/close toggle, video play button area
- [ ] Brand carousel with 5 grayscale logos, color on hover
- [ ] Blog section with 4 cards: image, date, title, excerpt, likes, comments
- [ ] Footer: dark navy bg, 3 columns (links, newsletter, Instagram), bottom copyright + social icons
- [ ] Footer links to https://www.componentdock.com/ (Component Dock)
- [ ] Footer does NOT reference ColorLib
- [ ] No ColorLib references anywhere in app code (spec-only provenance)
- [ ] Responsive: mobile hamburger menu, stacked grids, reduced padding
- [ ] 100% test coverage
- [ ] Vite config has `injectUiSource()` helper
- [ ] CNAME: `statform.free.componentdock.com`
- [ ] Homepage: `https://statform.free.componentdock.com`
