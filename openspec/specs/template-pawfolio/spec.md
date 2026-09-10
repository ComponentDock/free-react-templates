# Template: Pawfolio (Creative Portfolio)

## Purpose

Recreation of ColorLib "Breed2" — a creative portfolio/personal branding
single-page template with transparent sticky navbar, hero banner with
illustration, statistics counters, about section, services grid, testimonial
carousel, filterable portfolio grid, blog cards, brand logos carousel, and
dark footer.

- **ColorLib source:** https://colorlib.com/wp/template/breed2/
- **Preview URL:** https://preview.colorlib.com/theme/breed2/ (fetched
  successfully — full HTML + CSS analyzed)
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **New name:** `pawfolio` (apps/pawfolio, @free-react-templates/pawfolio)

## Design tokens

Extracted from live preview HTML and `style.css` fetched from
`https://preview.colorlib.com/theme/breed2/css/style.css`.

| Token                      | Value                                         | Usage                                                    |
| -------------------------- | --------------------------------------------- | -------------------------------------------------------- |
| Font family                | `Roboto` (weights 300, 400, 500, 700)         | All text — headings, body, nav, buttons                  |
| Primary / brand            | `#1345e6` (vibrant blue)                      | CTA buttons, links, statistics gradient, active filters  |
| Accent pink/magenta        | `#ed239f`                                     | Gradient endpoint, hover states, section title underline |
| Gradient primary           | `linear-gradient(90deg, #1345e6, #ed239f)`    | CTA buttons, statistics text, social icon hover          |
| Primary dark               | `#05364d` (dark teal/navy)                    | Headings (h1-h5), nav links, footer social bg            |
| Light purple bg            | `#f0e9ff`                                     | Borders, dividers, form borders, pagination              |
| Very light purple          | `#fbf9ff`                                     | Sidebar widget bg, pagination bg, blog author bg         |
| Light section bg           | `#f8faff`                                     | Statistics items, service cards, blog card details       |
| Body text gray             | `#797979`                                     | Body copy, paragraph text                               |
| Text muted                 | `#888888` / `#999999`                          | Secondary text, placeholders, meta info                  |
| White                      | `#fff` / `#ffffff`                             | Card surfaces, footer social buttons, text on dark       |
| Footer dark                | `#021017` (near-black)                         | Footer background                                       |
| Purple accent              | `#8034c3`                                     | Inner page sticky nav bg                                |
| Service hover              | `#5f30ff`                                     | Service card hover background                           |
| Star gold                  | `#ffd804`                                     | Testimonial star ratings                                |
| Button border-radius       | `5px`                                         | Primary CTA buttons, form controls                      |
| Section padding            | `140px 0` (desktop) / `80px 0` (tablet)       | Standard vertical rhythm via `.section_gap`             |
| Main title heading         | `42px` font-size, 52px line-height            | Section headings (h2)                                   |

### Visual design (from live preview HTML)

The preview rendered the full template — a creative portfolio for "jo Breed":

- **Header/Navbar:** Transparent over hero. Logo image left, nav links
  (Home, About, Portfolio, Pages dropdown, Blog dropdown, Contact) in
  uppercase Roboto 12px `#05364d`. Becomes fixed white with box-shadow on
  scroll.
- **Hero:** Full-width background image (illustration/artistic), two-column:
  left has "Hey There!" heading, "I am jo Breed" large text (60px),
  "Creative art director & designer" subtitle, social icons row (Twitter,
  Skype, Instagram, Dribbble, Vimeo), "See My Work" gradient CTA button.
  Right column: character illustration image.
- **Statistics:** Overlapping stats bar (margin-top: -121px over hero). 3 items
  in light purple `#f8faff` bg: "15k+ Happy Customer", "12k+ Ticket Solved",
  "9/10 Average Rating". Numbers use gradient text.
- **About Us:** Two-column. Left: illustration image. Right: "About me"
  label + "Creative Art Director And Designer" heading, paragraph, "Download
  CV" gradient CTA button.
- **Services:** 3-column grid on light bg `#f8faff`. Cards: icon image,
  title (Web Development, UX/UI Design, WP Developing), description, "Learn
  More" link with underline animation. Hover turns card purple `#5f30ff`.
- **Testimonials:** Owl carousel. Each slide: left photo, right side with
  name, role (Project Manager, Apple), quote text, 5-star rating (4 gold +
  1 gray). Background decorative element on desktop.
- **Portfolio:** Filterable grid with tabs (all, popular, latest, following,
  upcoming). 6 items in mixed 2-column and 3-column layout. Each: image with
  dark overlay on hover, title + category text. "Lens Mockup Design" /
  "Art, Illustration".
- **Blog:** 3 blog cards. Each: thumbnail image, meta (author + date),
  title, excerpt, "Learn More" link. Hover: shadow + scale image.
- **Brands:** Owl carousel of 6 brand logos, grayscale, centered.
- **Footer:** Dark `#021017` background. Centered logo, nav links (white),
  social icons (white circles with blue bg hover → gradient), copyright
  line.

Overall aesthetic: Modern creative portfolio with a bold blue-to-pink
gradient palette, Roboto typography throughout, illustration-style hero
imagery, light purple tinted sections, and smooth hover animations.

## Section structure (top to bottom)

1. **Navbar** — Transparent overlay on hero. Logo image left. Nav links:
   Home, About, Portfolio, Pages (dropdown: Services, Portfolio Details),
   Blog (dropdown: Blog, Blog Details), Contact. Becomes fixed white on
   scroll. Hamburger on mobile.

2. **Hero** — Full-width background image (`picsum.photos/seed/pawfolio-hero`).
   Two-column: Left: "Hey There!" in uppercase gray, "I Am Jo Breed" large
   white heading (60px), "Creative art director & designer" subtitle,
   5 social icons, "See My Work" gradient CTA button. Right: character
   illustration image (`picsum.photos/seed/pawfolio-illustration`).

3. **Statistics** — 3 stat items in light purple `#f8faff` background,
   overlapping hero by -121px. Each: large gradient number + label:
   "15k+" Happy Customer, "12k+" Ticket Solved, "9/10" Average Rating.

4. **About** — White background, `.section_gap` padding. Two-column:
   Left: illustration image. Right: "About me" small label with pink
   underline, "Creative Art Director And Designer" heading, paragraph text,
   "Download CV" gradient CTA button.

5. **Services** — White/light background. "Our Service" label, "What Service
   We Offer For You" heading. 3-column grid of service cards on `#f8faff`
   bg: Web Development, UX/UI Design, WP Developing. Each: icon image,
   title, description, "Learn More" link. Hover: card turns purple `#5f30ff`.

6. **Testimonials** — Carousel of testimonial items. Each: left photo,
   right: name (Roser Henrique), role (Project Manager, Apple), quote text,
   5-star rating (4 filled gold, 1 gray). Decorative background element.

7. **Portfolio** — "Our Portfolio" label, "Check Our Recent Client Work"
   heading. Filter tabs: all, popular, latest, following, upcoming.
   6 portfolio items in mixed grid (2x2 large + 2 small + 2 large).
   Each: image, hover overlay `rgba(19,69,230,0.9)`, title + category.

8. **Blog** — "Our blog" label, "Latest Story From Our Blog" heading.
   3 blog cards: thumbnail image, meta (author, date), title, excerpt,
   "Learn More" link. Hover: shadow + image scale.

9. **Brands** — Centered carousel of 6 brand logos, grayscale,
   auto-scrolling.

10. **Footer** — Dark `#021017` bg. Centered logo, nav links (white text),
    4 social icons (white circles), copyright with Component Dock link.

## Gherkin requirements

### Feature: Pawfolio creative portfolio template

Scenario: Navbar displays and becomes fixed on scroll
Given the user loads the page
Then the navbar is transparent and overlays the hero
And nav links (Home, About, Portfolio, Pages, Blog, Contact) are visible
When the user scrolls down
Then the navbar becomes fixed with white background and box-shadow

Scenario: Hero section shows headline and social icons
Given the user is on the homepage
Then the hero displays "Hey There!" text
And the heading "I Am Jo Breed" is visible
And "Creative art director & designer" subtitle is shown
And 5 social media icons are displayed
And a "See My Work" CTA button is visible

Scenario: Statistics section shows three metrics
Given the user views the page
Then 3 statistics items are visible
And "15k+" Happy Customer is displayed
And "12k+" Ticket Solved is displayed
And "9/10" Average Rating is displayed

Scenario: About section shows two-column layout
Given the user scrolls to the About section
Then "About me" label text is visible with pink underline
And the heading "Creative Art Director And Designer" is displayed
And a paragraph of description text is visible
And a "Download CV" CTA button is present

Scenario: Services section shows three service cards
Given the user scrolls to the Services section
Then 3 service cards are displayed: Web Development, UX/UI Design, WP Developing
And each card has an icon, title, description, and "Learn More" link
When the user hovers a service card
Then the card background turns purple

Scenario: Testimonial carousel displays client quotes
Given the user scrolls to the Testimonials section
Then a carousel of testimonial items is displayed
And each item shows a photo, name, role, quote, and star rating

Scenario: Portfolio grid loads with filter tabs
Given the user scrolls to the Portfolio section
Then filter tabs are visible: all, popular, latest, following, upcoming
And 6 portfolio items are displayed in a grid
And each item shows an image and title
When the user hovers a portfolio item
Then a blue overlay appears with the item title

Scenario: Blog section shows three blog cards
Given the user scrolls to the Blog section
Then 3 blog cards are displayed
And each card has a thumbnail, author, date, title, excerpt, and "Learn More" link

Scenario: Footer displays with social icons
Given the user scrolls to the bottom
Then the footer has a dark background
And a logo is centered
And nav links are visible
And 4 social media icons are displayed in white circles
And a Component Dock link is present

Scenario: Mobile responsive layout
Given the user views the page on a 375px wide viewport
Then the navbar collapses to a hamburger menu
And hero illustration image is hidden
And service cards stack vertically
And portfolio items stack vertically
And blog cards stack vertically

## Verification checklist

- [ ] Spec reviewed and matches original Breed2 layout from live preview HTML
- [ ] All 10 sections present in order (navbar through footer)
- [ ] Design tokens match: Roboto font, blue-to-pink gradient, `#1345e6` primary
- [ ] Hero with transparent overlay, two-column layout, CTA button
- [ ] Statistics bar with 3 gradient-text metrics
- [ ] About section with illustration and CV download button
- [ ] 3 service cards with hover-to-purple effect
- [ ] Testimonial carousel with star ratings
- [ ] Portfolio grid with filter tabs and hover overlay
- [ ] 3 blog cards with meta and Learn More links
- [ ] Brand logos carousel
- [ ] Dark footer with social icons and Component Dock link
- [ ] Mobile responsive: hamburger nav, stacked layouts
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] 100% test coverage
- [ ] Spec folder: openspec/specs/template-pawfolio/spec.md
- [ ] Docs folder: docs/templates/pawfolio/tasks.md
