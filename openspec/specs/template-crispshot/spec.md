# Template: Crispshot (Photography)

## Purpose

Recreation of ColorLib's **Alime** — a single-page photography portfolio template.

- **Source slug:** `alime`
- **Preview URL:** https://preview.colorlib.com/theme/alime/
- **Source page:** https://colorlib.com/wp/template/alime/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/alime-free-template.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens (extracted from preview CSS)

| Token             | Value                                              | Usage                                           |
| ----------------- | -------------------------------------------------- | ----------------------------------------------- |
| Brand primary     | `#fc6060`                                          | Buttons, links, Instagram hover overlay, accent |
| Text primary      | `#252525`                                          | Body text, headings, footer text                |
| Text secondary    | `#636363`                                          | Paragraphs, secondary copy                      |
| Background light  | `#f7f7f7`                                          | Light section backgrounds                       |
| White             | `#ffffff`                                          | Card backgrounds, text on dark                  |
| Black             | `#000000`                                          | Overlay backgrounds, dark accents               |
| Font family       | Poppins, sans-serif                                | All text                                        |
| Button radius     | `60px` (pill shape)                                | Primary CTA buttons                             |
| Button style      | Transparent with border → fills `#fc6060` on hover | `.alime-btn`                                    |
| Section padding   | `80px` vertical                                    | Between major sections                          |
| Instagram hover   | `rgba(252, 96, 96, 0.9)`                           | Overlay on Instagram images                     |
| Image hover scale | `1.1`                                              | Gallery and Instagram items                     |
| Header            | Fixed, transparent, white text, z-100              | Overlays hero                                   |
| Gallery grid      | 4 columns (lg), 2 columns (sm)                     | Portfolio items                                 |

## Section structure (from preview DOM, order preserved)

1. **Navbar** — Fixed transparent header, logo left, nav links (Home, About, Gallery, Blog, Contact), search icon right. Hamburger toggler for mobile.
2. **Hero / Welcome Area** — Full-width carousel, background image with dark overlay, left-aligned text: headline ("Hello I'm Jackson"), paragraph about photography, CTA button ("Get a Quote") + email link.
3. **Portfolio / Gallery** — Filterable grid (All, Human, Nature, Country, Video filter buttons). 4-column grid of images with hover overlay showing "+" icon. "View More" button at bottom.
4. **Follow Instagram** — Section heading "Follow Instagram" + handle. Grid of 6 Instagram-style images with hover overlay (coral) showing Instagram icon + handle.
5. **Footer** — Copyright text, logo, social icons (Facebook, Twitter, LinkedIn). Component Dock link.

## Requirements

### Requirement: Navbar displays correctly

Users SHALL see a fixed navbar at the top with transparent background, white text, logo left, nav links center, and search icon right.

#### Scenario: Navbar renders navigation links

- **WHEN** the page loads
- **THEN** navigation links are visible: Home, About, Gallery, Blog, Contact
- **AND** a search icon button is present
- **AND** a mobile hamburger toggler is visible on small viewports

#### Scenario: Mobile menu opens and closes

- **WHEN** the user clicks the hamburger toggler
- **THEN** a mobile navigation menu opens with all links
- **AND** clicking a link closes the menu

### Requirement: Hero section displays correctly

Users SHALL see a full-width hero with background image, dark overlay, headline, paragraph, CTA button, and email link.

#### Scenario: Hero renders content

- **WHEN** the page loads
- **THEN** a headline is visible (e.g. "Hello I'm Jackson")
- **AND** a paragraph about photography is shown
- **AND** a "Get a Quote" CTA button is visible
- **AND** an email contact link is visible

#### Scenario: CTA button styling

- **WHEN** the CTA button is rendered
- **THEN** it has pill shape (border-radius 60px)
- **AND** it is transparent with white text
- **AND** on hover it fills with brand color #fc6060

### Requirement: Gallery filter and grid

Users SHALL see a filterable gallery grid with category filter buttons.

#### Scenario: Gallery filter buttons

- **WHEN** the gallery section loads
- **THEN** filter buttons are displayed: All, Human, Nature, Country, Video
- **AND** the "All" button is active by default

#### Scenario: Gallery grid layout

- **WHEN** the gallery renders on desktop
- **THEN** a 4-column grid of portfolio images is shown
- **AND** each item shows an image with hover overlay

#### Scenario: Gallery filter interaction

- **WHEN** the user clicks the "Nature" filter
- **THEN** only nature-tagged items are visible
- **AND** clicking "All" restores all items

#### Scenario: Gallery hover effect

- **WHEN** the user hovers over a gallery item
- **THEN** a "+" overlay appears on the image
- **AND** the image scales up slightly (1.1x)

### Requirement: Instagram feed section

Users SHALL see an Instagram feed section with heading, handle, and image grid.

#### Scenario: Instagram section content

- **WHEN** the Instagram section loads
- **THEN** a heading "Follow Instagram" is visible
- **AND** a photographer handle is shown
- **AND** a grid of 6 Instagram-style images is displayed

#### Scenario: Instagram hover overlay

- **WHEN** the user hovers over an Instagram image
- **THEN** a coral overlay appears
- **AND** an Instagram icon is shown on the overlay
- **AND** the handle text is displayed

### Requirement: Footer with Component Dock link

Users SHALL see a footer with copyright, social icons, and a Component Dock link.

#### Scenario: Footer content

- **WHEN** the footer renders
- **THEN** copyright text is shown
- **AND** social media icons are present (Facebook, Twitter, LinkedIn)
- **AND** a link to Component Dock (https://www.componentdock.com/) is present

#### Scenario: Footer social icon hover

- **WHEN** the user hovers over a social icon
- **THEN** the icon color changes to brand color #fc6060

### Requirement: Responsive layout

Users SHALL see the layout adapt correctly on mobile viewports.

#### Scenario: Mobile layout

- **WHEN** the viewport is below 768px
- **THEN** the hero text is smaller
- **AND** the gallery switches to 2 columns
- **AND** the footer stacks vertically
- **AND** the navbar shows a hamburger toggler

## Verification checklist

- [ ] All 5 sections render in correct order: Navbar → Hero → Gallery → Instagram → Footer
- [ ] Navbar is fixed, transparent, with white text over hero
- [ ] Hero has background image with dark overlay, headline, paragraph, CTA button, email link
- [ ] CTA button is pill-shaped, transparent, fills #fc6060 on hover
- [ ] Gallery shows filter buttons (All/Human/Nature/Country/Video) with "All" active
- [ ] Gallery is a 4-column grid (desktop) / 2-column (mobile) of image cards
- [ ] Gallery items show "+" overlay and scale on hover
- [ ] "View More" button below gallery in pill style
- [ ] Instagram section shows heading + handle + grid of 6 images
- [ ] Instagram hover shows coral overlay with icon + handle text
- [ ] Footer has copyright, Component Dock link, social icons
- [ ] Social icons turn #fc6060 on hover
- [ ] Poppins font applied throughout
- [ ] No ColorLib references in app code
- [ ] `public/CNAME` = `crispshot.free.componentdock.com`
- [ ] `homepage` in package.json = `https://crispshot.free.componentdock.com`
