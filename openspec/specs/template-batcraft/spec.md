# Template: Batcraft (Photography)

## Purpose

Recreation of ColorLib **Bato** (slug: `bato`).
Preview: https://preview.colorlib.com/theme/bato/
ColorLib page: https://colorlib.com/wp/template/bato/

**Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)

**Category:** Photography portfolio — a minimal, monochrome template with bold typography, a full-height hero carousel, and alternating portfolio entries.

---

## Replication Research

### Source: Live Preview DOM (https://preview.colorlib.com/theme/bato/)

Fetched 2026-09-10. Structure extracted from rendered HTML:

1. **Slide-out Navigation** — full-screen overlay triggered by hamburger icon. Contains search input, menu links (Home, Work, Blog, About, Contact), and a mini gallery strip (4 images).
2. **Header** — simple top bar with logo text "Bato" and hamburger toggle.
3. **Hero Carousel** — Owl Carousel with 3 slides. Each slide is a split layout: 3/4-width full-height background image + 1/4-width text panel. Text panel contains a large decorative slide number (01/03, 02/03, 03/03), a tag/label (Welcome, Photography, Discover), a large headline (Playfair Display), body copy, and a "View Galleries" CTA link. Owl nav arrows at bottom center.
4. **About Section** — 50/50 split: left half is an image carousel, right half is text (title label, heading, description, bullet list with check icons).
5. **Work/Portfolio Entries** — alternating flex layout entries (image on one side, text on the other). Each has a large heading and a "View Gallery" button. Entries alternate left/right image placement.
6. **Blog/Articles Section** — article cards with image (zoom + overlay on hover), a floating date meta badge (peach #FFE9E3 background), heading, and description.
7. **Subscribe/Newsletter Section** — heading + description + email input with black submit button.
8. **Footer** — multi-column with social icons and copyright. Social icons in #F9CE00 yellow.

### Design Tokens Extracted from CSS

| Token | Value | Notes |
|-------|-------|-------|
| Font family (body) | `"Karla", Arial, sans-serif` | Body text, nav links, buttons |
| Font family (display) | `"Playfair Display", Georgia, serif` | Headings, hero h2 |
| Brand color (accent) | `#F9CE00` | Bright yellow — social icons, active nav items, button backgrounds, carousel nav hover |
| Text color (primary) | `#000` | Headings, body text, nav links, borders |
| Text color (body) | `rgba(114, 114, 114, 0.8)` | Paragraphs in hero |
| Text color (muted) | `#bfbfbf` | Intro sublabels |
| Background (main) | `#fff` | Page background, text panels |
| Background (decorative) | `#f0f0f0` | Large "bold" decorative text watermark |
| Background (blog meta) | `#FFE9E3` | Light peach — floating date badge |
| Background (overlay) | `rgba(0, 0, 0, 0.6)` | Image hover overlay |
| Button radius | `1px` | Nearly sharp — matches overall minimal aesthetic |
| Nav toggle radius | `2px` | Hamburger icon background |
| Form control radius | `0px` | Sharp corners on inputs |
| Contact icon radius | `50%` | Circular icon badges |
| Hero heading | `58px, weight 700, letter-spacing 2px` | Large serif heading |
| Hero tag/label | `13px, uppercase, letter-spacing 7px` | Small label above heading |
| Hero slide number | `220px, weight 700` | Decorative number in text panel |
| Work entry heading | `40px, weight 700, letter-spacing 2px` | Portfolio entry titles |
| Button (.btn-view) | `13px, uppercase, letter-spacing 7px, 1px solid #000` | Outline button, black border |
| Button (.btn-primary) | `#F9CE00 background, #fff text` | Yellow filled button |
| Blog meta | `12px, uppercase, letter-spacing 4px` | Date badge text |
| Subscribe button | `#000 background, #fff text, uppercase` | Full-width black button |
| Footer heading | `18px, uppercase, letter-spacing 1px` | Footer section titles |

### Visual Design Notes

- **Aesthetic:** Minimal, monochrome (black + white) with a single bright yellow (#F9CE00) accent. Very clean, lots of white space. Photography-focused with large full-bleed images.
- **Typography contrast:** Serif (Playfair Display) for display headlines against sans-serif (Karla) for body — creates an editorial, magazine-like feel.
- **Layout rhythm:** Split layouts throughout — every section uses a two-column approach with alternating image/text placement.
- **Decorative elements:** Large oversized numbers (220px) and words (250px, #f0f0f0) used as watermarks/accents. Very editorial.
- **Interactions:** Image zoom on hover, overlay fade, nav slide-out with gallery thumbnails.

---

## Design Tokens (Tailwind Theme)

```css
@theme {
  --color-brand: #F9CE00;
  --color-brand-hover: #ffd614;
  --color-text-primary: #000000;
  --color-text-body: rgba(114, 114, 114, 0.8);
  --color-text-muted: #bfbfbf;
  --color-bg-main: #ffffff;
  --color-bg-decorative: #f0f0f0;
  --color-bg-meta: #FFE9E3;
  --font-family-body: "Karla", Arial, sans-serif;
  --font-family-display: "Playfair Display", Georgia, serif;
}
```

---

## Gherkin Requirements

### Feature: Hero Section

**Scenario: Hero displays a full-height carousel with 3 slides**
- Given the user is on the home page
- When the hero section loads
- Then a carousel with 3 slides should be visible
- And each slide should show a large background image on the left (75% width) and a text panel on the right (25% width)

**Scenario: Each slide displays numbered indicators, a tag, headline, and CTA**
- Given the hero carousel is visible
- When a slide is active
- Then it should show a large decorative number (e.g. "01/03") in the text panel
- And a tag label (uppercase, small text)
- And a headline in Playfair Display serif font
- And a paragraph description
- And a "View Galleries" outline button link

**Scenario: User can navigate between hero slides**
- Given the hero carousel is visible
- When the user clicks the next/previous arrow
- Then the carousel should transition to the next/previous slide

### Feature: Navigation

**Scenario: Navigation bar displays logo and hamburger toggle**
- Given the user is on any page
- Then a header bar should show the brand name "Batcraft" as the logo
- And a hamburger menu icon should be visible on the right

**Scenario: Clicking hamburger opens full-screen slide-out nav**
- Given the header is visible
- When the user clicks the hamburger icon
- Then a full-screen overlay should slide in from the left
- And it should contain a search input, menu links (Home, Work, Blog, About, Contact), and a gallery thumbnail strip

**Scenario: Clicking a nav link navigates to that section/page**
- Given the slide-out navigation is open
- When the user clicks a menu link
- Then the navigation should close
- And the user should be scrolled to or navigated to the target section

### Feature: About Section

**Scenario: About section displays 50/50 split layout**
- Given the user scrolls to the about section
- Then a left half should display an image
- And a right half should display text content

**Scenario: About text contains title, heading, description, and checklist**
- Given the about section text panel is visible
- Then it should show a small uppercase label ("About Me" or similar)
- And a large heading in serif font
- And a descriptive paragraph
- And a list of items with checkmark icons

### Feature: Work/Portfolio Entries

**Scenario: Portfolio entries alternate image and text sides**
- Given the user scrolls to the work section
- Then portfolio entries should be displayed
- And entries should alternate between image-left/text-right and image-right/text-left

**Scenario: Each portfolio entry shows heading and view button**
- Given a portfolio entry is visible
- Then it should display a heading with the project name
- And a "View Gallery" outline button link

### Feature: Blog Section

**Scenario: Blog articles display image with hover effects**
- Given the user scrolls to the blog section
- Then article cards should display a thumbnail image
- And on hover, the image should zoom slightly with a dark overlay fading in
- And a "Read" label should slide in from the right (rotated -90deg)

**Scenario: Blog articles show floating date badge**
- Given a blog article card is visible
- Then a floating date badge should overlap the top-left of the image
- And the badge should have a light peach (#FFE9E3) background
- And on hover the badge background should change to white

**Scenario: Blog articles display heading and description**
- Given a blog article card is visible
- Then it should show a heading link and a description paragraph below the image

### Feature: Subscribe/Newsletter Section

**Scenario: Subscribe section shows heading and email form**
- Given the user scrolls to the subscribe section
- Then a heading and description paragraph should be visible
- And an email input field with underline border should be present
- And a full-width black submit button should be below the input

### Feature: Footer

**Scenario: Footer displays multi-column layout**
- Given the user scrolls to the footer
- Then multiple columns should be visible with section headings (uppercase, 18px)
- And social media icons should be displayed in brand yellow (#F9CE00)
- And a copyright line should be present
- And the footer must link to Component Dock ("More templates at Component Dock")

---

## Verification Checklist

- [ ] All 7 sections present in correct order: Header → Hero → About → Work → Blog → Subscribe → Footer
- [ ] Hero: 3-slide carousel with split layout (image left 75%, text right 25%)
- [ ] Hero: each slide has numbered indicator, tag, headline, description, CTA button
- [ ] Hero: carousel navigation arrows functional
- [ ] Navigation: slide-out overlay with search, links, gallery strip
- [ ] About: 50/50 image + text split layout
- [ ] About: title label, heading, description, checklist items
- [ ] Work entries: alternating image/text layout
- [ ] Work entries: heading + outline button per entry
- [ ] Blog: article cards with image hover (zoom + overlay)
- [ ] Blog: floating date badge (#FFE9E3)
- [ ] Subscribe: heading + email form with black submit button
- [ ] Footer: multi-column with yellow social icons
- [ ] Footer: links to Component Dock
- [ ] Fonts: Karla (body) + Playfair Display (headings) loaded via Google Fonts
- [ ] Brand color: #F9CE00 used for accent elements (icons, active states, highlights)
- [ ] Buttons: sharp corners (border-radius 1px), uppercase, letter-spacing
- [ ] ColorLib name "Bato" does NOT appear anywhere in `apps/batcraft/`
- [ ] All images use placeholder URLs (picsum.photos)
- [ ] `npm run test:coverage` passes at 100%
- [ ] `scripts/verify-app.sh batcraft` passes (typecheck + lint + tests + build)
