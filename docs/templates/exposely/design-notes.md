# Exposely — Design Notes

## Replication Source

- ColorLib Sonar: https://preview.colorlib.com/theme/sonar/
- Fallback: screenshot from TEMPLATES.md (free-photography-site-templates.jpg)

## Design Tokens (extracted from style.css)

| Token          | Value   | CSS Source                           |
| -------------- | ------- | ------------------------------------ |
| font-family    | Roboto  | `font-family: "Roboto", sans-serif`  |
| primary-dark   | #232323 | `.mainMenu`, `.sonar-btn`, header bg |
| secondary-dark | #2f2f2f | Body text, borders, button borders   |
| light-bg       | #f8f5f5 | `.bg-overlay`, gallery background    |
| white          | #ffffff | Text on dark backgrounds             |
| accent-blue    | #192a56 | Hover states on dark buttons         |

## Section Analysis

### Navbar

- Fixed position, full width, transparent over hero
- Logo text "Sonar" → renamed "Exposely"
- Social icons: Pinterest, LinkedIn, Instagram, Facebook, Twitter
- Hamburger icon triggers side menu
- Side menu: slides from right, dark bg (#232323), nav links

### Hero

- Full-screen carousel (we use single static hero)
- Background images with dark gradient overlay at bottom 60%
- Content anchored at bottom: decorative line + h2 + paragraph
- White text

### Portfolio Gallery

- White section with generous padding (100px)
- Quote at top with highlighted "real" word
- 7 portfolio items in asymmetric grid
- Items have: thumbnail, date, title
- Some have decorative large background text ("Reality", "Photography", "Hope", "Future")
- Dots decorative element on some items (we skip the dots image, use background text only)

### Call to Action

- Light bg (#f8f5f5)
- Large background text "Dream" (absolute, oversized, low opacity)
- Centered content: h2 + h5 + button
- Button: bordered, fills on hover

### Footer

- Dark bg (#232323)
- Copyright text → replaced with Component Dock branding

## Differences from Original

- No owl-carousel (single static hero instead)
- No preloader animation
- No dots.png decorative images (using background text only)
- No Font Awesome (using inline SVGs for social icons, lucide-react for UI icons)
- Component Dock branding in footer instead of Colorlib attribution
- Placeholder images via picsum.photos instead of original assets
