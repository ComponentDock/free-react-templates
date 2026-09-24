# Template: Techpulse (Magazine / News Blog)

## Purpose

Techpulse is a magazine/news blog template in the free-react-templates monorepo.
It is a React recreation of the ColorLib "Techmag" free template (source:
https://colorlib.com/wp/template/techmag/; preview:
https://preview.colorlib.com/theme/techmag/), built under a DIFFERENT name
(**Techpulse**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

## Naming

- Source slug: `techmag`
- Source URL: https://colorlib.com/wp/template/techmag/
- Preview URL: https://preview.colorlib.com/theme/techmag/
- New name: `techpulse`
- Package: `@free-react-templates/techpulse`
- Deploy target: `techpulse.free.componentdock.com`

## Design Tokens (from live preview CSS)

### Colors

| Token               | Hex/Value               | Usage                                      |
|---------------------|-------------------------|--------------------------------------------|
| Brand Purple        | `#624693`               | Header bar accents, subscribe dots, category badges, logo highlight, footer logo span |
| Accent Green/Mint   | `#61e49b`               | Read more buttons, world category badges, link hover, accent highlights |
| Accent Pink         | `#ff4b75`               | Video category badges, footer social hover |
| Accent Orange       | `#f8a64f`               | Party category badges                     |
| Dark Background     | `#0d0d0d`               | Subscribe button, navigation active state  |
| Footer Social BG    | `#191231`               | Footer social icons bar background         |
| Header Bar BG       | `#f7f9f9`               | Top header bar background                  |
| Body Background     | `#FFFFFF`               | Page background                            |
| Section Bar         | `#ebeded`               | Section divider bars                       |
| Heading Text        | `#000000`               | Post titles, section titles                |
| Body Text           | `#878787`               | Paragraph text, post dates                 |
| Subtitle Text       | `#838282`               | Section subtitles                          |
| Footer Logo Sub     | `#aeaeae`               | Footer subtitle text                       |
| Copyright Text      | `#9e9e9e`               | Copyright line                             |
| Selection BG        | `rgba(97,228,155,0.7)`  | Text selection highlight (mint)            |

### Typography

| Element        | Font                          | Weight    | Size   | Notes                          |
|----------------|-------------------------------|-----------|--------|--------------------------------|
| Body           | HelveticaNeueLTPro (fallback sans-serif) | normal | 14px   | Custom font-face from local files |
| Paragraphs     | Open Sans                     | 400       | 14px   | Line-height 2.14               |
| Headings       | Open Sans                     | —         | 48/36/24/18/14/14 | h1–h6 respectively |
| Section Title  | — (inherited)                 | bold      | 36px   | Line-height 0.75               |
| Subtitle       | — (inherited)                 | bold      | 16px   | Color #838282                  |

- Google Fonts import: `Open+Sans:300,400,600,700,800`
- Replace HelveticaNeueLTPro with a system/sans-serif stack (e.g. Inter or sans-serif)

### Button Styles

- **Subscribe button** (header bar): `#0d0d0d` background, white text, square/rectangular, no border-radius
- **Read more button** (hero): `#61e49b` (mint/green) background, white text, rectangular, no visible border-radius in original
- **Load more button**: appears to be a filled button (same mint accent)
- **Newsletter subscribe**: filled button in sidebar

### Section Backgrounds

- Header bar: `#f7f9f9` (light gray)
- Header content / nav: white `#FFFFFF`
- Hero slider: background image with purple overlay (brand purple #624693 tinted)
- Intro cards: images with hover overlay effect
- Content area: white background
- Sidebar: white background
- Footer social bar: `#191231` (very dark purple)
- Footer content: parallax background image

## Layout Structure (from live DOM, section order)

1. **Header Bar** — Top bar with "subscribe" button (black bg, white text, mint + pink + green dots) + social icons (right-aligned)
2. **Header Content** — Logo ("Tech" highlighted + "mag") + "Innovation & Technology Magazine" subtitle + promo card image ("SAVE 50%")
3. **Sticky Navigation** — Logo + nav links (Home, Tech, Innovation, Videos, World, Contact) + search icon (right)
4. **Mobile Menu Overlay** — Full-screen slide-in menu with search, nav links, subscribe, social
5. **Hero Slider** — Full-width carousel (Owl Carousel), purple-tinted background image, centered content: category badge ("TECHNOLOGY"), headline ("Building the Future"), description, "READ MORE" button (mint), left/right arrows
6. **Intro Section** — 3 equal-width category cards (Technology, Videos, Featured) with image + hover overlay text
7. **Featured Posts Section** — Section title ("Featured Posts" / "Handpicked articles") + bar divider; main content 9-column: 1 large post (8-col) + 2 small posts sidebar (4-col)
8. **Technology Section** — Section title ("Technology" / "Handpicked articles"); 3 horizontal posts (image left 5-col + content right 7-col each)
9. **From the World Section** — Section title ("From the World" / "Handpicked articles"); 2 medium vertical posts (6-col each)
10. **Load More Button** — Centered "load more" fill button
11. **Sidebar** (right 3-col) — Newsletter form, Advertisement cards (2), Latest Posts (4 items with thumbnail), Most Viewed (3 numbered items), Tags cloud
12. **Footer** — Social icons bar (dark purple bg, circular icon buttons with pink hover) + Footer content (parallax bg, centered logo, nav links, copyright)

## Post Card Patterns

- **Post V Large** (featured area): full-width image, category badge, title, author info (image + name), date, comments count, excerpt paragraph
- **Post V Small** (featured sidebar): image, category badge, title, author info, date
- **Post H Large** (technology section): horizontal layout, image left (5/12 cols), content right (7/12 cols): category, title, author, date, comments, excerpt
- **Post V Medium** (world section): image, category, title, author, date, comments, excerpt
- **Category badge colors**: technology=#624693, world=#61e49b, video=#ff4b75, party=#f8a64f
- **Post info**: author image (30px round), author name link, date link, comments link (right-aligned)

## Gherkin Requirements

### Requirement: Full magazine layout on page load

The template SHALL render a complete magazine layout with all sections.

#### Scenario: Page loads with full layout

- **WHEN** the user visits the Techpulse homepage
- **THEN** they see a header bar, header content, sticky navigation, hero slider, intro cards, featured posts, technology posts, world posts, sidebar, and footer
- **AND** the page background is white (#FFFFFF)
- **AND** the body text color is gray (#878787)

### Requirement: Header bar with subscribe and social

The header bar SHALL display a subscribe button and social media icons.

#### Scenario: Header bar elements

- **WHEN** the page loads
- **THEN** a top bar with light gray background (#f7f9f9) is visible
- **AND** a "subscribe" button (black #0d0d0d background, white text) appears on the left
- **AND** social icons (Pinterest, Facebook, Twitter, Dribbble, Behance, LinkedIn) appear right-aligned
- **AND** the subscribe button has 3 colored dots (purple, pink, green) as decorative elements

### Requirement: Header content with logo and promo

The header content area SHALL display the site logo and a promotional card.

#### Scenario: Logo and subtitle

- **WHEN** the header content area is displayed
- **THEN** the logo reads "Tech" (highlighted with purple #624693 background) + "mag" (white/transparent)
- **AND** the subtitle "Innovation & Technology Magazine" appears below the logo
- **AND** a promotional card with background image and "SAVE 50%" text appears to the right

### Requirement: Sticky navigation bar

The navigation bar SHALL be sticky with logo, nav links, and search.

#### Scenario: Navigation display

- **WHEN** the user scrolls past the header content
- **THEN** the navigation bar sticks to the top
- **AND** nav links are: Home, Tech, Innovation, Videos, World, Contact
- **AND** a search icon button appears on the right
- **AND** a hamburger menu icon is visible for mobile

#### Scenario: Mobile menu

- **WHEN** the user taps the hamburger menu
- **THEN** a full-screen slide-in menu appears from the right
- **AND** the menu contains: search input, nav links (same as desktop), "Subscribe" link, social icons (Pinterest, Facebook, Instagram, Twitter)
- **AND** a close button dismisses the menu

### Requirement: Hero slider

The hero section SHALL display a full-width carousel with article content.

#### Scenario: Hero slider content

- **WHEN** the hero section is visible
- **THEN** a full-width carousel displays with background images
- **AND** a category badge (e.g. "TECHNOLOGY") appears in purple (#624693) pill shape
- **AND** a large headline (e.g. "Building the Future") is centered
- **AND** a description paragraph is displayed below the headline
- **AND** a "READ MORE" button with mint green (#61e49b) background is centered

#### Scenario: Hero slider navigation

- **WHEN** the hero slider is displayed
- **THEN** left and right arrow navigation controls are visible
- **AND** clicking an arrow advances/rewinds the carousel

### Requirement: Intro category cards

The intro section SHALL display 3 category cards in a row.

#### Scenario: Intro cards layout

- **WHEN** the intro section is visible
- **THEN** 3 equal-width cards are displayed in a row
- **AND** each card has a background image
- **AND** each card shows a category label ("technology", "videos", "featured") centered on hover
- **AND** the cards have a transition hover effect (200ms)

### Requirement: Featured posts section

The featured posts section SHALL display a section title and a mixed post layout.

#### Scenario: Featured section header

- **WHEN** the featured posts section is visible
- **THEN** a "Featured Posts" title (bold, 36px, black) is displayed
- **AND** a "Handpicked articles" subtitle appears below
- **AND** a gray (#ebeded) section bar spans the width below the title

#### Scenario: Featured post layout

- **WHEN** the featured posts section content is displayed
- **THEN** a large post occupies the left 8 columns with: image, category badge, title, author info, date, comments, excerpt
- **AND** 2 smaller posts occupy the right 4 columns stacked vertically, each with: image, category badge, title, author info, date

### Requirement: Technology posts section

The technology section SHALL display 3 horizontal posts.

#### Scenario: Technology section layout

- **WHEN** the technology section is visible
- **THEN** a "Technology" title with "Handpicked articles" subtitle is displayed
- **AND** 3 horizontal posts are stacked vertically
- **AND** each post has image on the left (5/12 width) and content on the right (7/12 width)
- **AND** each post content includes: category badge, title, author info, date, comments, excerpt paragraph

### Requirement: World posts section

The world section SHALL display 2 medium posts in a 2-column grid.

#### Scenario: World section layout

- **WHEN** the world section is visible
- **THEN** a "From the World" title with "Handpicked articles" subtitle is displayed
- **AND** 2 medium vertical posts are displayed side by side (6 columns each)
- **AND** each post has: image, category badge, title, author info, date, comments, excerpt

### Requirement: Load more button

A load more button SHALL be displayed below the world posts.

#### Scenario: Load more button

- **WHEN** the user scrolls past the world posts
- **THEN** a centered "load more" button is visible
- **AND** the button has a filled background style

### Requirement: Sidebar content

The sidebar SHALL display newsletter, ads, latest posts, most viewed, and tags.

#### Scenario: Newsletter widget

- **WHEN** the sidebar is displayed
- **THEN** a "Subscribe to our newsletter" title appears
- **AND** an email input field with placeholder "Your e-mail here" is shown
- **AND** a "subscribe" button is displayed below the input

#### Scenario: Advertisement widgets

- **WHEN** the sidebar is displayed
- **THEN** 2 advertisement cards are shown at different positions
- **AND** each card has a background image with overlay text ("30% off", "Buy online now")

#### Scenario: Latest posts widget

- **WHEN** the sidebar is displayed
- **THEN** a "Latest Posts" title appears
- **AND** 4 latest posts are listed, each with: thumbnail image (103x103px), category badge, title, date

#### Scenario: Most viewed widget

- **WHEN** the sidebar is displayed
- **THEN** a "Most Viewed" title appears
- **AND** 3 most viewed items are listed, each with: large number (01., 02., 03.), category badge, title, date

#### Scenario: Tags widget

- **WHEN** the sidebar is displayed
- **THEN** a "Tags" title appears
- **AND** tag pills are displayed in a flex-wrap layout
- **AND** tags include: technology, design, travel, video, party, music, world, adventure
- **AND** some tags are color-coded (technology=purple, video=pink, party=orange, world=green)

### Requirement: Footer

The footer SHALL display social icons, logo, navigation, and copyright.

#### Scenario: Footer social bar

- **WHEN** the footer is visible
- **THEN** a dark purple (#191231) social icons bar is displayed
- **AND** 6 circular social icon buttons (58x58px, white icons) are centered
- **AND** hovering an icon shows a pink (#ff4b75) background transition

#### Scenario: Footer content

- **WHEN** the footer content area is visible
- **THEN** a parallax background image is displayed
- **AND** the "Tech" + "mag" logo is centered (white text, purple highlight on "Tech")
- **AND** "Innovation & Technology Magazine" subtitle appears below
- **AND** nav links (Home, Tech, Innovation, Videos, World, Contact) are centered
- **AND** a copyright line appears at the bottom
- **AND** the footer links to Component Dock ("More templates at Component Dock")

### Requirement: Accessibility

All interactive elements SHALL be accessible.

#### Scenario: Keyboard navigation

- **WHEN** the user navigates with keyboard
- **THEN** all nav links, buttons, and form inputs are focusable
- **AND** focus-visible rings are shown on interactive elements
- **AND** aria-labels are present on icon-only buttons (search, hamburger, social)

#### Scenario: Semantic HTML

- **WHEN** the page is rendered
- **THEN** semantic elements are used: `<header>`, `<nav>`, `<main>`, `<footer>`, `<button>`, `<label>`
- **AND** form inputs have associated labels or aria-labels

## Verification Checklist

- [ ] All 12 sections render correctly matching original structure order
- [ ] Design tokens (colors, fonts) match the extracted CSS values
- [ ] Hero slider works with navigation arrows
- [ ] Mobile menu opens/closes with hamburger
- [ ] Category badge colors match (purple, green, pink, orange)
- [ ] Post card layouts (v-large, v-small, h-large, v-med) are correct
- [ ] Sidebar widgets render: newsletter, ads, latest, most viewed, tags
- [ ] Footer has social bar + parallax content + Component Dock link
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
- [ ] 100% test coverage (Vitest + Testing Library)
- [ ] TypeCheck passes (strict TypeScript)
- [ ] Build succeeds (Vite)
- [ ] Placeholder images use picsum.photos
