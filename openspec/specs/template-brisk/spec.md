# Template: Brisk (Photography Portfolio)

## Purpose

Brisk is a single-page photography portfolio website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Bato" free template (source:
https://colorlib.com/wp/template/bato/), built under a DIFFERENT name
(**Brisk**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4
+ TypeScript.

**Preview URL:** https://preview.colorlib.com/theme/bato/ (LIVE, HTTP 200)
**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/bato-free-template.jpg (AVIF format)

The original is a photography portfolio template featuring a full-screen
hero carousel with split layout (large image 3/4 + text panel 1/4),
sidebar hamburger navigation with gallery thumbnails, about section with
scrolled images, work/portfolio entries, blog entries, newsletter
subscribe, and footer. It uses a clean, elegant aesthetic with golden
yellow accent color and serif headings.

## Design Tokens

Extracted from the live preview DOM and `css/style.css` (1,058 lines):

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| Primary brand | `#F9CE00` (golden yellow) | Active nav text, nav search button background, links on hover |
| Body background | `#FFFFFF` (white) | Page background |
| Body text | `gray` (default) | Paragraph and span text |
| Navigation panel background | `#FFFFFF` (white) | Sidebar slide-out nav panel |
| Nav link text | `#000000` (black) | Default nav links |
| Nav active link | `#F9CE00` (golden yellow) | Active/current nav link |
| Nav toggle hover | `#000000` (black) | Hamburger icon hover background |
| Hero headline | `rgba(0, 0, 0, 0.8)` (80% black) | Hero heading text |
| Hero tag text | `gray` | Tag labels above hero headline |
| Hero button border | `#000000` (black) | "View Galleries" CTA border |
| Hero button text | `#000000` (black) | "View Galleries" CTA text |
| Hero slide number | `#000000` | Large 220px slide counter (01/03) |
| Section title | `rgba(0, 0, 0, 0.8)` (80% black) | Section headings (About, Work, Blog, Contact) |
| Section title bold | `#000000` (black) | `.bold` headings in Work/Blog/Contact |
| Footer text | `#000000` (black) | Footer paragraphs and links |
| Social icon | `#000000` (black) | Footer social icons |
| Footer heading | `#000000` (black) | Footer column headings |
| Subscribe background | `#FFFFFF` (white) | Newsletter section |
| Contact input border | `#CCCCCC` (light gray) | Form input borders |
| Contact submit button | `#F9CE00` (golden yellow) | Submit button background |

### Typography

| Token | Value |
|-------|-------|
| Body font family | `"Karla", Arial, sans-serif` |
| Headings font family | `"Playfair Display", Georgia, serif` |
| Body font size | 16px |
| Body font weight | 400 |
| Body line height | 1.8 |
| Heading color | `rgba(0, 0, 0, 0.8)` |
| Heading line height | 1.3 |
| Hero slide number | 220px (massive decorative counter) |
| Hero tag | 13px, uppercase, letter-spacing 7px |
| Hero headline | "Playfair Display" |
| Hero button | 13px, uppercase, letter-spacing 7px |
| Logo | 24px, uppercase, Playfair Display, black |
| Nav link | 14px, uppercase, weight 400 |

### Spacing & Shapes

| Token | Value |
|-------|-------|
| Hero layout | Split: 75% image / 25% text panel |
| Hero height | Full viewport (js-fullheight) |
| Button border-radius | 0px (sharp rectangle) |
| Button border | 1px solid #000 |
| Button padding | 15px 30px |
| Button letter-spacing | 7px |
| Nav toggle border-radius | 2px |
| Nav panel width | 360px (300px on mobile) |
| Section padding | 10em 0 (5em on mobile) |
| Subscribe padding | 5em 0 |
| Footer padding | 8em 0 |
| About layout | 50/50 split (image + text) |
| Work entry layout | 55% image / 45% text (flex) |
| Nav gallery thumbnail | 50% width, 150px height |

## Section Order (from preview DOM, single-page adaptation)

1. **Navbar** — Fixed top bar with "Brisk" logo (24px, uppercase, Playfair Display, black) left-aligned + hamburger toggle right. Hamburger opens a full-height sidebar panel (360px, white bg) with: search input + button, nav links (Home, Work, Blog, About, Contact), and gallery thumbnails grid.

2. **Hero Carousel** — Full-viewport carousel (Owl Carousel in original; React carousel in recreation) with 3 slides. Each slide is a split layout: left 75% is a full-height background image, right 25% is a text panel with: slide number (220px decorative "01/03"), tag label (uppercase, letter-spacing 7px), headline (Playfair Display), description paragraph, and "View Galleries" bordered CTA button. Arrows at bottom-left for navigation.

3. **About** — Two-column layout (50/50): left column is a scrollable image panel, right column contains three stacked content blocks each with: tag label ("About Us", "My Story", "Career"), heading (Playfair Display), and description paragraphs. Contact info block with Office address, email, and social links.

4. **Works** — Portfolio grid with work-entry-flex entries: each entry is a flex layout with image (55%) and text panel (45%) containing: headline link (Playfair Display) and description. Entries animate on scroll.

5. **Blog** — Blog post grid with entries: each has a background image, tag label, date, and headline link. Two-column layout on desktop.

6. **Subscribe** — Newsletter section with heading "Subscribe Newsletter", description text, and inline form with email input + "Subscribe Now" button (golden yellow).

7. **Footer** — Three-column layout: Office address, Get in Touch (email + social icons), Social links (social media icons). Light background, clean typography.

## Gherkin Requirements

### Feature: Brisk Photography Portfolio Template

#### Scenario: Navbar renders with logo and hamburger toggle
  Given the page loads
  Then the navbar displays "Brisk" logo text (uppercase, Playfair Display)
  And a hamburger toggle button is visible on the right
  And clicking the hamburger opens a sidebar panel (360px width, white bg)

#### Scenario: Sidebar navigation panel
  Given the hamburger is clicked
  Then the sidebar panel slides in from the right
  And it contains a search input with golden yellow submit button
  And navigation links: Home, Work, Blog, About, Contact
  And four gallery thumbnail images in a 2x2 grid
  And clicking outside or the toggle closes the panel

#### Scenario: Hero carousel displays 3 slides
  Given the hero section is visible
  Then 3 carousel slides are rendered
  And each slide shows a full-height background image on the left (75%)
  And a text panel on the right (25%) with slide number, tag, headline, description, and CTA

#### Scenario: Hero slide content
  Given slide 1 is active
  Then the slide number shows "01/03"
  And the tag reads "Welcome"
  And the headline reads "Photography is on it's way."
  And a "View Galleries" button with black border is visible

#### Scenario: Hero carousel navigation
  Given the hero carousel is displayed
  Then previous/next arrows are available at the bottom
  And clicking next advances to the next slide
  And the slide number updates accordingly

#### Scenario: About section layout
  Given the About section scrolls into view
  Then a two-column layout displays (50/50 split)
  And the left column shows an image
  And the right column shows three content blocks: "About Us", "My Story", "Career"
  And each block has a tag label, Playfair Display heading, and description

#### Scenario: Works section displays portfolio entries
  Given the Works section is visible
  Then work entries display in a flex layout (55% image / 45% text)
  And each entry has a headline link and description text
  And entries animate on scroll

#### Scenario: Blog section displays posts
  Given the Blog section is visible
  Then blog entries display with background images
  And each entry shows a tag label, date, and headline link

#### Scenario: Subscribe newsletter section
  Given the Subscribe section is visible
  Then the heading reads "Subscribe Newsletter"
  And an email input field is present
  And a "Subscribe Now" button with golden yellow background is visible

#### Scenario: Footer renders contact information
  Given the Footer is visible
  Then three columns display: Office, Get in Touch, Social
  And the Office column shows an address
  And the Get in Touch column shows an email link
  And the Social column shows social media icon links
  And a Component Dock link is present in the footer

#### Scenario: Responsive design
  Given the viewport is below 768px
  Then the navbar hamburger is visible
  And hero text panel stacks below the image
  And about columns stack vertically
  And work entries stack vertically
  And footer columns stack vertically

#### Scenario: No ColorLib references in app code
  Given the apps/brisk directory is searched
  Then no file contains "colorlib" or "ColorLib" or "preview.colorlib.com"

## Verification checklist

- [ ] Navbar: "Brisk" logo (24px, uppercase, Playfair Display, black) + hamburger toggle
- [ ] Sidebar panel: 360px width, white bg, search input + golden yellow button, 5 nav links, 4 gallery thumbnails
- [ ] Hero carousel: 3 slides, each 75/25 split (image/text), slide numbers (01/03–03/03)
- [ ] Hero text: tag (13px, uppercase, letter-spacing 7px), headline (Playfair Display), description, "View Galleries" bordered CTA
- [ ] Hero arrows: previous/next navigation, slide counter updates
- [ ] About section: 50/50 split, scrollable image left, 3 content blocks right (About Us, My Story, Career)
- [ ] Works section: flex entries (55% image / 45% text), headline links, descriptions, scroll animations
- [ ] Blog section: background images, tag labels, dates, headline links
- [ ] Subscribe: "Subscribe Newsletter" heading, email input, golden yellow "Subscribe Now" button
- [ ] Footer: Office / Get in Touch / Social columns, Component Dock link
- [ ] Typography: Karla body + Playfair Display headings (Google Fonts)
- [ ] Brand color: #F9CE00 (golden yellow) on active nav, search button, subscribe button
- [ ] Responsive: stacked layout below 768px, hamburger visible, all sections responsive
- [ ] No ColorLib references anywhere in apps/brisk
- [ ] `npm run verify:app brisk` passes; 100% test coverage
