# Template: Redawn (Creative Portfolio / Blog)

## Purpose

Recreation of the ColorLib "Rea" template — a creative portfolio and blog grid layout with animated headline, masonry-style image grid, hover overlays, and a full-screen navigation overlay.

- **Source:** ColorLib "Rea" — https://colorlib.com/wp/template/rea/
- **Preview:** https://preview.colorlib.com/theme/rea/
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript
- **Package:** `@free-react-templates/redawn`
- **Deploy target:** `redawn.free.componentdock.com`
- **Original author:** Dry Themes

## Design Tokens

| Token | Value | Notes |
|-------|-------|-------|
| Font family | `Lato`, sans-serif | Google Font, weights 300, 400, 700 |
| Brand color (primary) | `#f271ab` | Pink — used for buttons, links hover, selection bg, active nav |
| Body text color | `#2f2f2f` | Dark gray |
| Body background | `#ffffff` | White |
| Link default | `#2f2f2f` | Same as body text |
| Link hover | `#f271ab` | Brand pink |
| Text selection bg | `#f271ab` | Brand pink, white text |
| Button border | `2px solid #f271ab` | Pink outline button |
| Button text | `#f271ab` | Pink |
| Button hover bg | `#f271ab` | Fills pink |
| Button hover text | `#ffffff` | White on hover |
| Heading weight | 700 | For bold heading text in grid items |
| Nav menu font | 35px, weight 700, color `#222222` | Full-screen overlay nav |
| Grid item border | 15px transparent | Card spacing via transparent border |
| Grid image border radius | 2px 2px 0 0 | Top corners slightly rounded |
| Social icon color | `#CACACA` | In overlay menu |
| Footer link color | `#2f2f2f` | Same as body |

## Section Structure (in order)

1. **Hamburger toggle** — 4-line animated menu toggle (top-right), fixed position
2. **Full-screen nav overlay** — centered menu: Home, About, Contact, Features + social icons (Twitter, Behance, Dribbble, Facebook, RSS) + search field
3. **Header** — logo image + animated typing headline ("pixel precise web resources/psd files/mockups to suit all your needs")
4. **Blog grid** — masonry-style portfolio grid with cards:
   - Image with hover image overlay (swap on hover)
   - Preview count + download count overlay (top-right)
   - Category tag (e.g. "Mockup", "Branding", "Icons")
   - Title link
   - Heart/like button + count
5. **Load more** — arrow button to load more items
6. **Footer** — 3-column: Categories list, Page menu (About/Features/Contact), Social icons + copyright

## Gherkin Scenarios

### Scenario: Page loads with header and animated headline
- Given the user visits the Redawn homepage
- Then a logo and animated headline should be visible in the header
- And the headline cycles through "web resources", "psd files", "mockups"

### Scenario: Hamburger menu toggle
- Given the user is on the homepage
- When the user clicks the hamburger menu icon (4 horizontal lines)
- Then a full-screen navigation overlay should appear
- And the overlay should display: Home, About, Contact, Features links
- And social media icons should be visible below the nav links
- And a search input should be available

### Scenario: Overlay menu navigation
- Given the full-screen overlay is open
- When the user clicks "About"
- Then the overlay should close and navigate to the About page (or section)
- And the current link should be highlighted in brand pink (#f271ab)

### Scenario: Blog grid displays portfolio items
- Given the user is on the homepage
- Then a grid of portfolio cards should be displayed
- And each card should show: image, category tag, title, like count
- And cards should have varying widths (some 1x, some 2x)

### Scenario: Grid card hover effect
- Given a portfolio card is visible in the grid
- When the user hovers over the card image
- Then the image should swap to show the hover/alternate image

### Scenario: Grid card metadata overlay
- Given a portfolio card is visible
- Then a preview count and download count should be displayed on the image (top-right corner)

### Scenario: Like button interaction
- Given a portfolio card is visible
- When the user clicks the heart/like button
- Then the like count should increment by 1
- And the heart icon should indicate a liked state

### Scenario: Load more items
- Given the user is on the homepage
- When the user clicks the "load more" arrow
- Then additional portfolio cards should be loaded into the grid

### Scenario: Footer content
- Given the user scrolls to the bottom of the page
- Then a footer should be visible with three columns:
  - Categories list (Branding, Fonts, Icons, Misc, Mockup, Play, Vectors, Video)
  - Page links (About, Features, Contact)
  - Social icons (Twitter, Behance, Dribbble, Facebook, RSS)
- And a copyright line with "Component Dock" link should be present

### Scenario: Mobile responsiveness
- Given the user views the page on a mobile device
- Then the grid should stack items in a single column
- And the hamburger menu should remain accessible

## Verification Checklist

- [ ] Font `Lato` loaded via Google Fonts
- [ ] Brand color `#f271ab` used for CTAs, hover states, selection
- [ ] Animated headline types through 3 phrases
- [ ] 4-line hamburger toggle animates to X when open
- [ ] Full-screen overlay nav with search and social icons
- [ ] Masonry-style grid with mixed card widths (1/4 and 1/2)
- [ ] Image hover swap effect on grid cards
- [ ] Preview/download count overlay on cards
- [ ] Heart/like button with count
- [ ] Category tags on each card
- [ ] Load more arrow
- [ ] 3-column footer with categories, links, social
- [ ] Footer links to componentdock.com
- [ ] No ColorLib references in app code
- [ ] CNAME: `redawn.free.componentdock.com`
- [ ] homepage in package.json: `https://redawn.free.componentdock.com`
