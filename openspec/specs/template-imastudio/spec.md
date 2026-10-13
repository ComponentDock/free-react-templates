# Template: ImaStudio (Photography Portfolio)

## Purpose

Recreation of ColorLib **Imahe** (https://colorlib.com/wp/template/imahe/)
via live preview at https://preview.colorlib.com/theme/imahe/

Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript (strict).

This is a photography studio portfolio template featuring a video hero
section with dark overlay, services overview, about split layout, photo
gallery grid, blog section, Instagram feed, and a dark footer.

---

## Design Tokens (extracted from live preview CSS)

| Token                | Value / Notes                                                                 |
|----------------------|-------------------------------------------------------------------------------|
| Font family (body)   | `"Josefin Sans", Arial, sans-serif` — weights 300, 400, 700                  |
| Font family (accent) | `"Amatic SC", cursive` — used for decorative headings (e.g. "holder" label)  |
| Primary / accent     | `#FFDD00` (bright yellow) — used for active states, links, service icons     |
| Body background      | `#ffffff` (white)                                                            |
| Body text color      | `#666666` (dark gray)                                                        |
| Heading color        | `#000000` (black)                                                            |
| Dark background      | `#000000` (black) — nav, hero overlay, footer                                |
| Gray backgrounds     | `#252525`, `#262626`, `#323232` — various dark sections                      |
| Button radius        | `50%` (fully circular for primary CTA)                                       |
| Button style         | `.btn-custom` — white bg, black text, circular; yellow hover                 |
| Section padding      | `2em` mobile → `5em` desktop                                                 |
| Footer background    | `#ffffff` (white footer, dark copy bar below)                                |
| Copy bar background  | `#252525` (dark gray)                                                        |
| Instagram bar bg     | `#252525`                                                                    |
| Overlay (hero)       | `rgba(0,0,0,0.7)` — dark semi-transparent                                   |
| Border radius (misc) | `4px` (dropdown), `30px` (pill badges), `50%` (circular elements)           |
| Animation library    | Animate.css (animate-box reveal)                                             |
| Carousel             | Owl Carousel (gallery/blog implied), YTPlayer for hero video                 |

---

## Visual Design (from screenshot)

Photography studio template with a dark cinematic hero (video background
with deep black overlay), centered "Fashion Photoshoot" headline in Amatic SC
decorative font with a yellow "holder" label above, "View Gallery" circular
white CTA button. Below: 3 service cards (Photography, Image Processing,
Videography) with yellow camera/video icons on white background. Split
about section with image left and text right. Full-width gallery grid in
4 columns with hover overlays showing category tags. 3-column blog section
with article entries. Horizontal Instagram feed strip on dark background.
White footer with 4 columns (About, Information, Recent Blog, Contact Info)
and a dark copy bar at the bottom.

---

## Requirements

### Feature: Navbar

#### Scenario: Logo displays with camera icon

- **GIVEN** the page loads
- **THEN** the logo shows a camera icon and the text "ImaStudio"
- **AND** the logo is centered in the navbar

#### Scenario: Navigation links split left and right

- **GIVEN** the viewport is >= 992px wide
- **THEN** the left nav shows: Home, Gallery (with dropdown), Services
- **AND** the right nav shows: Blog, About, Contact

#### Scenario: Gallery dropdown appears on hover

- **GIVEN** the viewport is >= 992px wide
- **AND** the user hovers over "Gallery"
- **THEN** a dropdown with 4 gallery items is displayed

#### Scenario: Mobile hamburger menu

- **GIVEN** the viewport is < 992px wide
- **THEN** the nav links are hidden
- **AND** a hamburger menu toggle is visible

#### Scenario: Navbar has dark background

- **GIVEN** the page loads
- **THEN** the navbar background is dark (#000000 or transparent over hero)

### Feature: Hero Section

#### Scenario: Hero displays with background image/video

- **GIVEN** the page loads
- **THEN** a full-width hero section with a dark overlay is visible
- **AND** the hero height is 800px

#### Scenario: Hero headline shows decorative text

- **GIVEN** the page loads
- **THEN** a yellow "holder" label is displayed above the main headline
- **AND** the headline reads "Fashion Photoshoot" (or equivalent photography heading)

#### Scenario: Hero has date and CTA

- **GIVEN** the hero section is visible
- **THEN** a date line is shown below the headline
- **AND** a "View Gallery" button is displayed with circular white style

#### Scenario: View Gallery button is circular

- **GIVEN** the hero section loads
- **THEN** the CTA button has 50% border-radius (circle shape)
- **AND** the button has white background with black text

### Feature: Services

#### Scenario: Services section shows three cards

- **GIVEN** the page loads
- **THEN** 3 service cards are displayed in a row

#### Scenario: Service cards have icons and descriptions

- **GIVEN** the services section is visible
- **THEN** the services are: Photography, Image Processing, Videography
- **AND** each card has a yellow circular icon, a title, and a description paragraph

#### Scenario: Service icons use yellow accent color

- **GIVEN** the services section loads
- **THEN** the service icons are displayed with #FFDD00 yellow color

### Feature: About Section

#### Scenario: About section uses split layout

- **GIVEN** the page loads
- **THEN** a split layout is displayed with an image on the left and text on the right

#### Scenario: About section has heading and description

- **GIVEN** the about section is visible
- **THEN** the heading reads "We Are ImaStudio a Photography Studio" (or equivalent)
- **AND** two paragraphs of descriptive text are shown

#### Scenario: About section is full width

- **GIVEN** the about section loads
- **THEN** it spans the full viewport width with the image filling half

### Feature: Gallery

#### Scenario: Gallery heading displays

- **GIVEN** the page loads
- **THEN** a "Gallery" heading is visible centered in the section

#### Scenario: Gallery shows 8 items in a grid

- **GIVEN** the gallery section is in view
- **THEN** 8 gallery items are displayed in a 4-column grid

#### Scenario: Gallery items have hover overlay

- **GIVEN** the gallery section loads
- **THEN** each item shows a title and category tags on hover
- **AND** the overlay has a dark semi-transparent background

#### Scenario: Gallery items are responsive

- **GIVEN** the viewport is < 768px wide
- **THEN** the gallery items stack in a 1-column layout
- **GIVEN** the viewport is 768px–991px wide
- **THEN** the gallery items show in a 2-column layout

#### Scenario: Gallery items have category tags

- **GIVEN** the gallery section is visible
- **THEN** each item displays category tags (e.g. "Fashion", "Jacket", "Woman")

### Feature: Blog

#### Scenario: Blog section shows recent posts

- **GIVEN** the page loads
- **THEN** a "Recent Blog" heading is visible centered in the section

#### Scenario: Blog displays 3 article cards

- **GIVEN** the blog section is in view
- **THEN** 3 blog article cards are shown in a 3-column grid

#### Scenario: Blog cards have image, title, excerpt, and metadata

- **GIVEN** the blog section loads
- **THEN** each card has a background image, a title link, an excerpt paragraph
- **AND** metadata showing author name, date, and comment count

#### Scenario: Blog section is responsive

- **GIVEN** the viewport is < 768px wide
- **THEN** the blog cards stack vertically in a 1-column layout

### Feature: Instagram Feed

#### Scenario: Instagram section displays

- **GIVEN** the page loads
- **THEN** an Instagram section with a dark background is visible

#### Scenario: Instagram shows heading with icon

- **GIVEN** the instagram section is visible
- **THEN** an Instagram icon and "Instagram" heading are displayed centered

#### Scenario: Instagram feed shows 8 images

- **GIVEN** the instagram section loads
- **THEN** 8 square image thumbnails are displayed in a horizontal row

#### Scenario: Instagram section is full width

- **GIVEN** the instagram section loads
- **THEN** it spans the full viewport width

### Feature: Footer

#### Scenario: Footer has four columns

- **GIVEN** the page loads
- **THEN** the footer displays in 4 columns: About, Information, Recent Blog, Contact Info

#### Scenario: Footer about column

- **GIVEN** the footer is visible
- **THEN** an "About ImaStudio" heading is shown with a description paragraph
- **AND** social media icons (Twitter, Facebook, LinkedIn, Dribbble) are displayed

#### Scenario: Footer information column

- **GIVEN** the footer is visible
- **THEN** navigation links include: Home, Gallery, About, Blog, Contact, Privacy

#### Scenario: Footer recent blog column

- **GIVEN** the footer is visible
- **THEN** 3 recent blog entries are shown with thumbnail, title, and date

#### Scenario: Footer contact info column

- **GIVEN** the footer is visible
- **THEN** contact details include: address, phone, email, and website link

#### Scenario: Footer copyright bar

- **GIVEN** the footer is visible
- **THEN** a dark copy bar is shown at the bottom
- **AND** it contains a copyright notice with "Component Dock" link

#### Scenario: Footer uses white background

- **GIVEN** the footer renders
- **THEN** the main footer area has a white background
- **AND** the copy bar has a dark background (#252525)

### Feature: Responsive Behavior

#### Scenario: Mobile layout

- **GIVEN** the viewport is < 768px wide
- **THEN** all sections reduce padding
- **AND** the hero headline wraps appropriately
- **AND** the gallery and blog stack to 1 column
- **AND** the footer columns stack vertically

#### Scenario: Tablet layout

- **GIVEN** the viewport is 768px–991px wide
- **THEN** the gallery shows 2 columns
- **AND** the blog shows 2 columns
- **AND** the footer shows 2 columns

#### Scenario: Desktop layout

- **GIVEN** the viewport is >= 992px wide
- **THEN** the gallery shows 4 columns
- **AND** the blog shows 3 columns
- **AND** the footer shows 4 columns
- **AND** the about section shows split layout (image + text)

---

## Verification Checklist

- [ ] Logo with camera icon and "ImaStudio" text centered in navbar
- [ ] Nav links split left/right on desktop, hamburger on mobile
- [ ] Gallery dropdown on hover (desktop)
- [ ] Hero with dark overlay, decorative headline, circular CTA button
- [ ] Services: 3 cards with yellow icons (Photography, Image Processing, Videography)
- [ ] About: split layout with image left, text right
- [ ] Gallery: 8 items in 4-column grid with hover overlays and category tags
- [ ] Blog: 3 article cards in 3-column grid with image, title, excerpt, metadata
- [ ] Instagram: dark bg, 8 horizontal square thumbnails
- [ ] Footer: white bg, 4 columns, social icons, contact info, copyright with Component Dock link
- [ ] All design tokens match reference (#FFDD00 accent, #000 dark bg, Josefin Sans, Amatic SC)
- [ ] Responsive: 1-col mobile, 2-col tablet, appropriate desktop cols
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] No ColorLib references in app code
- [ ] CNAME and homepage set for imastudio.free.componentdock.com
- [ ] `npm install` run to register workspace in package-lock.json
