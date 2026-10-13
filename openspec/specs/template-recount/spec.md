# Template: Recount (Magazine / News Blog)

## Purpose

Recreation of the ColorLib "Megasis" magazine/news template as a modern React
SPA. The original is a Bootstrap-based magazine layout with a two-tier header,
featured article hero, category grids, video gallery, newsletter subscription
footer, and dark footer with four link columns.

- **Source:** https://colorlib.com/wp/template/megasis/
- **Preview:** https://preview.colorlib.com/theme/megasis/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/megasis-colorlib-template.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design Tokens

Extracted from the live preview stylesheet (`assets/css/style.css`).

| Token           | Value                     | Usage                                                |
| --------------- | ------------------------- | ---------------------------------------------------- |
| Brand Red       | `#C70D0D`                 | Primary CTA buttons, section accents, borders        |
| Near-Black      | `#131313`                 | Footer background, section top-borders, primary text |
| Light Grey BG   | `#F3F3F3`                 | Subscribe section background                         |
| Very Light Blue | `#f9f9ff`                 | Alternate section tint                               |
| Light Purple    | `#f0e9ff`                 | Alternate section tint                               |
| Body Text       | `#646464`                 | Secondary/body text                                  |
| Muted Text      | `#888`                    | Author bylines, meta text                            |
| Body Font       | `"Chivo"` sans-serif      | All body text, nav, buttons, form inputs             |
| Heading Font    | `"Shippori Mincho"` serif | Article headlines, section titles                    |
| Button Radius   | `0` (sharp)               | CTA buttons are rectangular, no border-radius        |
| Section Border  | `4px solid #131313`       | Top border on section titles (`.section-tittle`)     |

## Requirements

### Feature: Recount template behaviour

#### Scenario: Header — Top Bar

- **GIVEN** a visitor loads the page
- **THEN** the top bar displays the logo on the left
- **AND** a "Sign in" button is shown on the right
- **AND** social media icons (Facebook, Instagram, Twitter, YouTube, Vimeo, LinkedIn) appear in a row next to Sign in

#### Scenario: Header — Sticky Navigation

- **GIVEN** the visitor scrolls past the top bar
- **THEN** the navigation bar becomes sticky at the top
- **AND** it contains category links: Home, Page (with dropdown), Science, Technology, Beauty, Health, Arts & Culture, Opinion, Videos, Gallery
- **AND** a search input appears on the right side of the nav
- **AND** a mobile hamburger menu icon appears on small screens

#### Scenario: What's New Section

- **GIVEN** the visitor is on the homepage
- **THEN** a "What's New" section is displayed
- **AND** a large featured article occupies the left 7 columns with an image, category tag "Technology", headline, and author byline
- **AND** three smaller article cards occupy the right 5 columns, each with image, category tag, headline, and author

#### Scenario: Arts & Culture Section

- **GIVEN** the visitor scrolls to Arts & Culture
- **THEN** a section title "Arts & Culture" appears with a "See All" link, underlined by a 4px black top-border
- **AND** three article cards are displayed in a row
- **AND** each card has an image, category tag, headline, and author
- **AND** the third card (video) shows a circular play button overlay on its image

#### Scenario: Science Update Section

- **GIVEN** the visitor scrolls to Science Update
- **THEN** a section title "Science Update" appears with a "See All" link
- **AND** four article cards are displayed in a row
- **AND** each card has an image, category tag, headline, and author

#### Scenario: Video Gallery Section

- **GIVEN** the visitor scrolls to Video Gallery
- **THEN** a section title "Video Gallery" appears with a "See All" link
- **AND** a large featured video card occupies the left 7 columns with a play button overlay
- **AND** three smaller video cards occupy the right 5 columns, each showing a duration badge (e.g. "5:56") and a clock icon

#### Scenario: Science Update Carousel Section

- **GIVEN** the visitor scrolls to the second Science Update
- **THEN** a carousel/slider of article cards is displayed
- **AND** each card shows an image, category tag, headline, and author
- **AND** cards scroll horizontally or wrap in a grid

#### Scenario: Newsletter Subscription

- **GIVEN** the visitor scrolls to the subscription area
- **THEN** a heading "Subscribe to the newsletter" is displayed
- **AND** a subtitle describes the newsletter value proposition
- **AND** an email input field with placeholder "Enter your mail" is shown
- **AND** a "Send Now" button with brand red background appears next to it
- **AND** disclaimer text about privacy is shown below

#### Scenario: Footer

- **GIVEN** the visitor reaches the bottom
- **THEN** a dark footer (background #131313) is displayed
- **AND** four columns of links appear: About, Categories, Categories, Quick Links
- **AND** each column has a heading and a list of links
- **AND** a footer bottom bar shows copyright text
- **AND** the footer links to https://www.componentdock.com/

#### Scenario: Back to Top

- **GIVEN** the visitor scrolls down the page
- **THEN** a "back to top" button appears
- **AND** clicking it scrolls the page to the top

## Verification Checklist

- [ ] Two-tier header: logo + Sign in + social icons on top; sticky nav with category links + search below
- [ ] What's New: large featured article left + 3 smaller cards right
- [ ] Arts & Culture: 3-column grid with video play overlay on third card
- [ ] Science Update: 4-column card grid
- [ ] Video Gallery: large video left + 3 duration-badged videos right
- [ ] Science Update Carousel: horizontal card slider
- [ ] Newsletter: centered heading + email input + red "Send Now" button
- [ ] Footer: dark background, 4 link columns, copyright + Component Dock link
- [ ] Back to top button functional
- [ ] Mobile responsive: hamburger menu, stacked columns
- [ ] Design tokens match: #C70D0D red, #131313 dark, Chivo + Shippori Mincho fonts, sharp button corners, 4px section top-borders
