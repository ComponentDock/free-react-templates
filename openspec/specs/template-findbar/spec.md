# FindBar — Search Form Bar Template

Recreation of ColorLib **Search Form/Bar 01**
(https://colorlib.com/wp/template/search-form-bar-01/)

## Design Tokens (from CSS analysis)

- **Font**: Poppins, sans-serif (Google Fonts)
- **Body font size**: 16px, line-height 1.8
- **Heading font size**: 28px, weight 400, color #000
- **Background**: #fafafa (light gray)
- **Text color**: gray (body), #000 (heading)
- **Search bar**: white (#fff), border-radius 40px (pill), box-shadow 0px 5px 20px -12px rgba(0,0,0,0.34)
- **Search icon**: magnifying glass, 50x50px area, positioned absolute left
- **Input**: height 50px, no border, no shadow, placeholder color rgba(0,0,0,0.7)
- **Section padding**: 7em vertical
- **Layout**: centered, max-width ~33% on large screens (col-lg-4), 50% on medium

## Screenshot Analysis

The template shows a minimalist search bar centered on a light gray background:

- Title "Search Form/Bar #01" centered above the search bar
- Pill-shaped (rounded) white search bar with subtle shadow
- Search magnifying glass icon on the left inside the bar
- "Search..." placeholder text
- Clean, modern, minimal design

## Structure

Single section with:

1. Centered heading
2. Search form with icon + input (pill-shaped)
3. Footer with Component Dock branding

## Scenarios

### SearchBar component

- Renders a search input with placeholder "Search..."
- Displays a magnifying glass icon on the left
- Has pill-shaped (rounded-full) styling
- Has white background with shadow
- Accepts keyboard input
- Prevents default form submission on Enter

### App

- Renders the heading "FindBar"
- Renders the SearchBar component
- Uses Poppins font from Google Fonts
- Has light gray (#fafafa) background

### Footer

- Links to https://www.componentdock.com/
- Shows "Component Dock" branding
- Shows copyright text
