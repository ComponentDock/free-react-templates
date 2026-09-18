# Template: Shuttervibe (Photography Portfolio)

## Purpose

Recreation of ColorLib's "Thumber" template as a React 19 + Vite + Tailwind 4 + TypeScript photography portfolio site with full-screen image gallery.

- **Source**: ColorLib "Thumber" — https://colorlib.com/wp/template/thumber/
- **Preview**: https://preview.colorlib.com/theme/thumber/
- **Stack**: Vite (latest) · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **Category**: Photography / Portfolio

## Design tokens

Extracted from the live preview's stylesheets (`css/style.css`).

### Fonts

| Role         | Font family                      | Weights        |
| ------------ | -------------------------------- | -------------- |
| Headings     | Quicksand, sans-serif            | 300, 400, 500, 700, 900 |
| Body         | system default (Bootstrap)       | 400            |

Use Google Fonts `<link>` for Quicksand (weights 300–900).

### Colors

| Token               | Hex / Value           | Usage                                        |
| ------------------- | --------------------- | -------------------------------------------- |
| brand / accent      | `#e44985` (pink)      | Active nav link, thumbnail border, mobile menu active link |
| background          | `#000` (black)        | Body background, header bar                  |
| header text         | `#fff` (white)        | Logo, nav links, social icons                |
| body text           | `gray`                | Default body text                            |
| muted text          | `#b3b3b3`             | Zoom icon color                              |
| info panel bg       | `#fff` (white)        | Image info expandable panel, zoom button     |
| info panel text     | `#000` (black)        | Image title in info panel                    |
| photo overlay       | `rgba(0,0,0,0.6)`    | Dark overlay on photo grid items on hover    |
| photo meta text     | `#cccccc`             | Photo category label in grid                 |
| form control border | `gray` → `#fff` on focus | Form input underlines                     |
| selection bg        | `#000`, text `#fff`   | Text selection color                         |

### Buttons

- **Pill buttons** (`.btn`): `border-radius: 30px`. `.btn-md`: padding `15px 30px`, font-size `12px`, uppercase, `letter-spacing: 0.1em`.
- **Zoom button** (`.zoom`): 60×60px white square, positioned bottom-right of slide, icon centered. Color `#b3b3b3`.
- **Info expand toggle** (`.btn-toggle-expand`): 60×60px, positioned top-right of info panel, arrow icon that rotates 180° when active.

### Layout

- **Header bar**: Fixed top, full width, 70px height, black background, logo left (uppercase, bold, white), hamburger "Menu" toggle right (hidden on desktop by default).
- **Swiper gallery**: Main view = 80% viewport height, cover images. Thumbnails = 20% viewport height, 80px slides, opacity 0.4 (1.0 on active/hover), 4px solid pink border on active.
- **Image info panel**: Bottom-left of each slide, white background, 60×60px collapsed (only arrow visible), expands to max-width 400px with title + description. Smooth transition.
- **Photo grid** (photos page): Responsive grid of photos, 300px height images (200px mobile), dark overlay on hover with centered icon + category label. Hover transitions smoothly.
- **Mobile menu**: Off-canvas right slide-out (300px width), white background, nav links with pink active state.

### Section backgrounds

| Section          | Background            |
| ---------------- | --------------------- |
| Body             | `#000` (black)        |
| Header bar       | `#000` (black)        |
| Image info panel | `#FFFFFF` (white)     |
| Zoom button      | `#FFFFFF` (white)     |
| Mobile menu      | `#FFFFFF` (white)     |
| Photo grid       | `#000` (black)        |

## Gherkin requirements

```gherkin
Feature: Shuttervibe photography portfolio

  Background:
    Given the user loads the Shuttervibe page

  Scenario: Header bar displays logo and menu toggle
    Then a fixed black header bar is visible at the top
    And the logo "Shuttervibe" is shown in white, uppercase, bold
    And a hamburger "Menu" toggle is shown on the right

  Scenario: Full-screen image gallery displays
    Then a full-screen Swiper gallery fills 80% of the viewport
    And a thumbnail strip fills the bottom 20%
    And the gallery shows navigation arrows on hover

  Scenario: Thumbnail strip interaction
    Then thumbnails are shown at 80px height with 0.4 opacity
    And the active thumbnail has a pink (#e44985) border
    And hovering a thumbnail sets opacity to 1.0
    And clicking a thumbnail navigates the main gallery to that slide

  Scenario: Image info panel on each slide
    Then each slide has a white info panel at the bottom-left
    And the panel starts collapsed at 60×60px showing only an arrow
    And clicking the arrow expands the panel to show title + description
    And clicking again collapses it back

  Scenario: Zoom button on each slide
    Then each slide has a white 60×60px zoom button at the bottom-right
    And the zoom icon is gray (#b3b3b3)

  Scenario: Mobile menu opens off-canvas
    When the user clicks the "Menu" toggle
    Then a 300px off-canvas menu slides in from the right
    And the menu background is white
    And the menu contains nav links: Home, Photos, About Me, Contact
    And the active link is pink (#e44985)

  Scenario: Photo grid page (Photos)
    When the user navigates to the Photos page
    Then a responsive grid of photo items is displayed
    And each photo shows an image at 300px height
    And hovering a photo shows a dark overlay with centered icon + category
    And the overlay transitions smoothly

  Scenario: Responsive behavior
    When the viewport is below 576px
    Then photo grid images reduce to 200px height
    And the gallery adjusts to fill available space
```

## Verification checklist

- [ ] Fixed black header bar with logo + hamburger toggle
- [ ] Full-screen Swiper gallery (80% main + 20% thumbnails)
- [ ] Thumbnail strip with pink active border and opacity transitions
- [ ] Expandable image info panel (bottom-left, white, 60px→400px)
- [ ] Zoom button (bottom-right, white 60px square)
- [ ] Navigation arrows appear on gallery hover
- [ ] Off-canvas mobile menu (300px, white, slide-in from right)
- [ ] Photos page with responsive photo grid + hover overlays
- [ ] Brand pink #e44985 used for active states and borders
- [ ] Quicksand font loaded from Google Fonts
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
