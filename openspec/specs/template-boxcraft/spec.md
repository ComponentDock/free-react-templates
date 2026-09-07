# Template: BoxCraft (Creative Agency)

## Purpose

Recreation of ColorLib "Boxus" — a creative/digital agency website template with
full-width hero slider, services, portfolio grid, team, timeline stories, offer,
expertise progress bars, and contact form.

- **Source:** https://colorlib.com/wp/template/boxus/
- **Source slug:** boxus
- **Category:** Creative / Digital Agency
- **Preview:** https://preview.colorlib.com/theme/boxus/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/boxus-creative-digital-agency-free-website-template.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript (strict) · Vitest + Testing Library

### Section structure (in order)

1. **Navigation** — fixed top nav with logo, menu links, and hamburger on mobile
2. **Hero Slider** — full-width image carousel with slide text overlays, pagination dots
3. **Services** — two-column layout with image slider on one side, service descriptions on the other
4. **Portfolio** — masonry/grid of project items with category filters and load-more
5. **Crafters (Team)** — team member cards with image slider and name/role/details
6. **Stories (Timeline)** — vertical timeline with dates and descriptions, accent-colored year markers
7. **Offer** — services/features cards on colored background
8. **Expertise** — progress bar skill indicators with percentages
9. **Contact** — contact form (name, email, subject, message) + company info
10. **Footer** — copyright, social links (Twitter, Facebook, Dribbble, Behance, RSS)

## Design tokens

Extracted from `style.css` of the live preview at preview.colorlib.com:

| Token | Value | Usage |
|-------|-------|-------|
| `brand` | `#23214c` | Dark navy-purple — primary brand, headings, dark section backgrounds |
| `brand-dark` | `#221c5a` | Slightly darker variant of brand |
| `accent` | `#e54b76` | Pink/magenta — timeline year markers, hover states, highlights |
| `accent-alt` | `#ee87a4` | Lighter pink |
| `gold` | `#FFBA42` | Gold/amber — secondary accent in timeline |
| `green` | `#55B286` | Green — progress bars, accent |
| `text-body` | `#727190` | Gray-purple — body text, descriptions |
| `text-dark` | `#1c1c1c` | Near-black — some heading text |
| `surface-light` | `#f4f4f4` | Light gray — section backgrounds |
| `white` | `#fff` | Card backgrounds, text on dark |
| `font-heading` | `'Montserrat', sans-serif` | Headings, nav, UI elements |
| `font-body` | `'PT Serif', serif` | Body text, descriptions |
| `font-tertiary` | `'Roboto', sans-serif` | Some auxiliary text |
| `content-width` | `1170px` | Max content width (content-1170) |

### Visual description

- Dark navy-purple (#23214c) is the dominant brand color, used in dark section backgrounds and headings
- Pink accent (#e54b76) highlights key elements: timeline dates, interactive accents
- Gold (#FFBA42) appears in timeline year markers as secondary accent
- Clean, modern agency aesthetic with alternating dark and light sections
- Full-width hero with image carousel and text overlays
- Grid-based portfolio with hover effects
- Vertical timeline with colored date markers
- Progress bars for expertise/skills section

## Gherkin requirements

### Background

Given the user opens the BoxCraft page
And the browser has loaded the page successfully

### Scenario: Navigation renders correctly

Given the page has loaded
Then the navigation bar is visible at the top
And the logo is displayed on the left
And navigation links are displayed (Home, Services, Portfolio, Team, Stories, Contact)
And on mobile a hamburger menu icon is visible

### Scenario: Hero slider displays

Given the page has loaded
Then a full-width hero image carousel is visible
And slide text overlays appear on the current slide
And pagination dots indicate the current slide
And the slider auto-advances or allows manual navigation

### Scenario: Services section renders

Given the user scrolls to the Services section
Then the section heading "Services" is visible
And service items display with images and descriptions
And the layout uses a two-column grid (image + text)

### Scenario: Portfolio grid renders

Given the user scrolls to the Portfolio section
Then the section heading "Portfolio" is visible
And portfolio items display in a grid/masonry layout
And each item shows an image with hover overlay
And a "Load More" button is visible when more items exist

### Scenario: Team section renders

Given the user scrolls to the Crafters section
Then the section heading "Crafters" is visible
And team member cards display with photos, names, and roles
And social media icons are shown for each member

### Scenario: Timeline renders

Given the user scrolls to the Stories section
Then the section heading "Stories" is visible
And a vertical timeline displays with dates and descriptions
And year markers use the accent pink color (#e54b76)
And timeline entries alternate left/right on desktop

### Scenario: Offer section renders

Given the user scrolls to the Offer section
Then the section heading "Offer" is visible
And offer items display in a grid layout
And the section has a dark background (#23214c)

### Scenario: Expertise progress bars render

Given the user scrolls to the Expertise section
Then the section heading "Expertise" is visible
And progress bars display with skill names and percentages
And progress bars animate on scroll into view

### Scenario: Contact form renders

Given the user scrolls to the Contact section
Then the section heading "Contact" is visible
And a contact form displays with Name, Email, Subject, and Message fields
And a Submit button is present
And company contact information is shown alongside

### Scenario: Footer renders

Given the user scrolls to the bottom
Then the footer displays copyright text
And social media icons are present (Twitter, Facebook, Dribbble, Behance, RSS)
And the footer links to https://www.componentdock.com/

### Scenario: Responsive layout

Given the viewport width is less than 768px
Then the navigation collapses to a hamburger menu
And sections stack vertically in single column
And the portfolio grid adjusts to fewer columns

## Verification checklist

- [ ] Navigation renders with logo and menu links
- [ ] Hero slider displays with image carousel and text overlays
- [ ] Services section shows two-column layout with images and descriptions
- [ ] Portfolio grid renders project items with hover effects
- [ ] Load More button works in portfolio section
- [ ] Team/Crafters section shows member cards with photos and social links
- [ ] Timeline displays dates with colored year markers (#e54b76 pink)
- [ ] Offer section renders on dark background
- [ ] Expertise progress bars animate on scroll
- [ ] Contact form has all fields (Name, Email, Subject, Message)
- [ ] Contact form validates required fields
- [ ] Footer shows copyright and social icons
- [ ] Footer links to https://www.componentdock.com/
- [ ] Brand color #23214c used for dark backgrounds and headings
- [ ] Accent color #e54b76 used for highlights and timeline markers
- [ ] Font Montserrat used for headings and UI elements
- [ ] Font PT Serif used for body text
- [ ] Responsive: hamburger nav on mobile, single-column stacking
- [ ] No ColorLib references in app code
- [ ] CNAME file contains boxcraft.free.componentdock.com
- [ ] package.json homepage is https://boxcraft.free.componentdock.com
