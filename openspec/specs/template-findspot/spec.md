# Findspot — Search Form Bar Template

Recreation of ColorLib **Search Form Bar 02**
(https://colorlib.com/wp/template/search-form-bar-02/)

## Design Tokens (from screenshot analysis)

- **Font**: Poppins, sans-serif (Google Fonts)
- **Body font size**: 16px, line-height 1.6
- **Heading font size**: 32px, weight 600, color #ffffff
- **Background**: #1a1a2e (dark navy)
- **Text color**: #ffffff (heading), #a0a0b0 (subtitle)
- **Search bar**: #16213e (dark blue), border-radius 8px (rounded rectangle), border 1px solid #0f3460
- **Search icon**: magnifying glass, 20px, color #e94560 (accent red)
- **Input**: height 56px, no border, placeholder color rgba(255,255,255,0.4)
- **Search button**: background #e94560, border-radius 8px, white text, padding 0 24px
- **Section padding**: 8em vertical
- **Layout**: centered, max-width 600px

## Screenshot Analysis

The template shows a dark-themed search bar centered on a dark background:

- Dark navy (#1a1a2e) full-page background
- Title "Search Form/Bar #02" centered above in white
- Subtitle "Find what you're looking for" in muted gray
- Rectangular (not pill) search bar with dark blue background
- Red accent search icon on the left inside the bar
- "Type to search..." placeholder text
- Red "Search" button on the right side of the bar
- Clean, modern, dark-themed design
- Footer with Component Dock branding

## Structure

Single section with:

1. Centered heading + subtitle
2. Search form with icon + input + submit button (rectangular)
3. Footer with Component Dock branding

## Scenarios

### SearchBar component

- Renders a search input with placeholder "Type to search..."
- Displays a magnifying glass icon on the left
- Has rectangular (rounded-lg) styling
- Has dark blue background with border
- Displays a red "Search" submit button on the right
- Accepts keyboard input
- Prevents default form submission on Enter
- Focuses input when icon is clicked

### App

- Renders the heading "Findspot"
- Renders the subtitle "Find what you're looking for"
- Renders the SearchBar component
- Uses Poppins font from Google Fonts
- Has dark navy (#1a1a2e) background

### Footer

- Links to https://www.componentdock.com/
- Shows "Component Dock" branding
- Shows copyright text
