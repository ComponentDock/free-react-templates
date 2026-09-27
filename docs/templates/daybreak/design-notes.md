# Daybreak — Design Notes

## Source

ColorLib "Sun" — https://colorlib.com/wp/template/sun/

## Layout Structure

1. **Navbar**: Logo "Daybreak" left, nav links right, search toggle icon
2. **Portfolio Filter**: Horizontal button group (All, Post, Image, Video, Extern)
3. **Portfolio Grid**: 3-column masonry-style grid, 6 items with overlay labels
4. **Content Split**: Two equal columns (The Story + Dreamers)
5. **Footer**: Copyright + logo + social links + Component Dock

## Tokens Extracted

- Montserrat 400/500/600/700 for headings and nav
- PT Serif 400/700 for body text
- Brand accent: #e8491d (warm orange-red)
- Background: white (#ffffff)
- Text: #333333 (primary), #777777 (muted)
- Max content width: 1330px

## Differences from Original

- Portfolio items use picsum.photos seeded placeholders instead of ColorLib demo images
- No JavaScript libraries (isotope, prettyPhoto) — React state for filter
- Google Fonts via <link> instead of local font files
- Component Dock footer attribution replaces DryThemes/Colorlib credits
