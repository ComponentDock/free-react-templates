# Template: Melodia (Music Landing Page)

## Purpose

Melodia is a single-page music landing page in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "One Music"
free template (source: https://colorlib.com/wp/template/onemusic/), built
under a DIFFERENT name (**Melodia**), with the monorepo stack: Vite +
React 19 + Tailwind CSS 4 + TypeScript.

The original is a full-width music showcase site with a dark-on-light
aesthetic: transparent navbar over hero, parallax background sections with
dark overlays, album carousels, a "Buy What's New" product grid, featured
artist spotlight with audio, three-column miscellaneous tracks lists, and
a contact form. The design language is stark black-and-white with strong
typographic hierarchy.

**Preview URL:** https://preview.colorlib.com/theme/onemusic/
**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/one-music-free-template.jpg

## Design Tokens (extracted from preview CSS)

| Token | Value | Notes |
|---|---|---|
| Font family | `"Archivo Narrow", sans-serif` | Google Fonts; used for body, headings, links |
| Brand color (primary) | `#000000` | Black — buttons, nav, sticky header, scroll-to-top |
| Body text color | `#5f5f5f` | Paragraphs, secondary text |
| Heading color | `#000000` | All h1–h6, bold 700 |
| Link color | `#000000` | Bold 700, 16px |
| Section background (gray) | `#f5f9fa` | `.bg-gray` — Buy Now section |
| Overlay | `rgba(0, 0, 0, 0.65)` | Parallax section overlays (Featured Artist, Contact) |
| Button radius | `0` | Square corners, sharp edges |
| Button min-width | `212px` | `.oneMusic-btn` |
| Button height | `49px` | `.oneMusic-btn` |
| Button bg (default) | `#fff` | White with 1px solid #000 border |
| Button text (default) | `#000` | Black |
| Button bg (hover) | `#000000` | Inverts on hover |
| Button text (hover) | `#fff` | White on hover |
| Button alt (`.btn-2`) | bg `#000` / text `#fff` | Inverted variant, hover flips |
| Section heading style | Uppercase, letter-spacing 10px, 18px default; `.style-2` = 30px | Subtitle above: 14–16px normal case |
| Sticky header | bg `#000`, shadow `0 5px 50px 15px rgba(0,0,0,0.2)` | Fixed top on scroll |
| Navbar links | White on transparent/black, hover 70% opacity | Desktop: transparent bg over hero |
| Cart badge | 15×15px circle, bg `#232323`, border 1px solid `#fff` | 9px text |
| Scroll-to-top | bg `#000`, no radius, 40×40px, white icon | Hover: white bg, dark text |

## Section Structure (order from preview DOM)

1. **Navbar** — transparent over hero, logo left, nav links center, login/register + cart right; sticky black on scroll
2. **Hero** — full-width carousel (Owl Carousel), bg image with dark overlay, subtitle "Latest album", h2 album name, "Discover" CTA button
3. **Latest Albums** — white section, centered heading ("See what's new" / "Latest Albums"), album artwork carousel (7 items with artist name + song title overlay)
4. **Buy What's New** — `bg-gray` (#f5f9fa), fluid 6-column grid of album cards: thumb, price tag, play icon overlay, artist name + album title
5. **Featured Artist** — parallax bg image, dark overlay, 40/60 two-column: artist image left, heading + description + audio player right
6. **Miscellaneous** — 3 equal columns: "This Week's Top" (thumbnail + artist/song list), "New Hits" (thumbnail + artist/song + audio player), "Popular Artists" (thumbnail + name list)
7. **Contact** — parallax bg image, dark overlay, centered "Get In Touch" heading, form: name, email, subject (3 cols), message textarea, "Send" button
8. **Footer** — logo + copyright left, nav links right (Home, Albums, Events, News, Contact)

## Gherkin Requirements

### Feature: Melodia — Music Landing Page Recreation

#### Scenario: Navbar renders correctly
- GIVEN the user loads the page
- THEN a navbar is visible with a logo on the left
- AND nav links are present: Home, Albums, Events, News, Contact
- AND a "Login / Register" link and a cart icon with quantity badge are visible on the right
- AND the navbar background is transparent when at the top of the page

#### Scenario: Navbar becomes sticky on scroll
- GIVEN the user scrolls past the hero area
- THEN the navbar becomes fixed at the top with a black background
- AND a subtle box shadow appears

#### Scenario: Hero section displays with carousel
- GIVEN the user loads the page
- THEN a full-width hero area is visible
- AND a background image is displayed
- AND a subtitle "Latest album" is shown
- AND an album title (h2) is displayed
- AND a "Discover" button is visible below the title

#### Scenario: Hero carousel navigates between slides
- GIVEN the hero carousel is displayed
- WHEN the user waits for auto-advance or clicks navigation dots
- THEN a different slide with a new background image and title appears
- AND the transition is smooth

#### Scenario: Latest Albums section shows album carousel
- GIVEN the user scrolls to the Latest Albums section
- THEN a section heading "Latest Albums" is displayed with subtitle "See what's new"
- AND a paragraph description is shown below the heading
- AND a carousel of album covers is displayed
- AND each album shows an artist name and song title overlay

#### Scenario: Buy What's New section displays album grid
- GIVEN the user scrolls to the Buy What's New section
- THEN a section heading "Buy What's New" is displayed
- AND a grid of album cards is shown on a light gray (#f5f9fa) background
- AND each card has a thumbnail image
- AND each card shows a price tag
- AND each card has a play icon overlay
- AND each card shows the artist name and album title

#### Scenario: Featured Artist section with audio player
- GIVEN the user scrolls to the Featured Artist section
- THEN a parallax background image with dark overlay is displayed
- AND a section heading is shown
- AND an artist image appears on the left column
- AND descriptive text appears on the right
- AND an audio player with a song name ("01. Main Hit Song") is displayed

#### Scenario: Miscellaneous section displays three columns
- GIVEN the user scrolls to the Miscellaneous section
- THEN three columns are displayed side by side
- AND the first column shows "This Week's Top" with a list of 6 artists
- AND the second column shows "New Hits" with 6 tracks each having an audio player
- AND the third column shows "Popular Artists" with 7 artist entries
- AND each entry has a thumbnail image and name/song text

#### Scenario: Contact form section
- GIVEN the user scrolls to the Contact section
- THEN a parallax background with dark overlay is displayed
- AND a "Get In Touch" heading is shown
- AND a form with fields for Name, Email, Subject, and Message is displayed
- AND a "Send" button is visible at the bottom of the form

#### Scenario: Footer displays correctly
- GIVEN the user scrolls to the footer
- THEN a logo is displayed on the left
- AND copyright text is shown
- AND navigation links (Home, Albums, Events, News, Contact) are on the right
- AND a "Made with Component Dock" attribution link to https://www.componentdock.com/ is present

#### Scenario: Responsive layout
- GIVEN the user views the page on a mobile device (viewport < 768px)
- THEN the navbar collapses to a hamburger menu
- AND the hero content is centered and scaled down
- AND the album grid stacks vertically
- AND the miscellaneous three-column layout stacks vertically
- AND the contact form fields stack vertically

#### Scenario: Color scheme and typography
- GIVEN the user views the page
- THEN the font family is "Archivo Narrow" (Google Fonts)
- AND primary color is black (#000000)
- AND body text color is #5f5f5f
- AND buttons have square corners (border-radius: 0)
- AND buttons invert colors on hover (white text on black background)
- AND section headings are uppercase with wide letter-spacing

## Verification Checklist

- [ ] Navbar: transparent on hero, white links, sticky black on scroll, login/register + cart
- [ ] Hero: full-width, bg image, carousel slides, "Latest album" subtitle, h2 title, "Discover" CTA
- [ ] Latest Albums: section heading, description paragraph, album carousel with overlays
- [ ] Buy What's New: bg-gray, 6-column grid, price tags, play icons, artist/album info
- [ ] Featured Artist: parallax bg, dark overlay, two-column layout, artist image, audio player
- [ ] Miscellaneous: three columns (This Week's Top, New Hits with audio, Popular Artists)
- [ ] Contact: parallax bg, "Get In Touch", form (name/email/subject/message), Send button
- [ ] Footer: logo, copyright, nav links, Component Dock attribution link
- [ ] Typography: Archivo Narrow font loaded, correct weights
- [ ] Colors: black primary, #5f5f5f body, #f5f9fa gray sections
- [ ] Buttons: square radius, 212px min-width, 49px height, hover inversion
- [ ] Responsive: hamburger nav, stacked grids on mobile
- [ ] No ColorLib references in app code (provenance only in spec/TEMPLATES.md)
- [ ] Footer links to https://www.componentdock.com/
