# Photosnap — Implementation Tasks

> Recreation of ColorLib "Louie" (https://colorlib.com/wp/template/louie/)
> Preview: https://preview.colorlib.com/theme/louie/

## Structure Order

1. Sidebar (left, fixed on desktop, slide-in on mobile)
2. Hero (full-width, background image, centered content)
3. Instagram Gallery (5-column photo grid)
4. Footer (3-column dark footer)

## Section-by-Section Fidelity Notes

### Sidebar

- Fixed left sidebar (22% width on desktop, 270px slide-in on mobile)
- Profile image (circular), brand name, navigation links
- Newsletter signup form at bottom of sidebar
- Social icons (Twitter, Facebook, Instagram)
- Dark background implied by layout

### Hero

- Full-width section with background image
- Large faded watermark text ("Photosnap") behind content
- Headline: "A Photographer. I Capture Life"
- Descriptive paragraph about the photographer
- Cursive signature element (use `Herr Von Muellerhoff` font via Google Fonts)
- Social media icon row below signature

### Instagram Gallery

- Section heading: "Follow me on Instagram"
- 5 equal-width photo thumbnails in a single row (no gutters)
- Each photo has Instagram icon overlay on hover
- Click opens lightbox modal (use `react-lightbox` or similar)

### Footer

- Dark background (`#242423`)
- 3 columns: Recent Photos (6 thumbnails), Archives (monthly list), Contact info
- Copyright line with Component Dock attribution

## Design Tokens to Use

- `--brand: #78d5ef` (cyan/teal)
- `--accent: #c4ac7d` (gold)
- `--dark: #242423` (footer)
- `--text: #212529`
- `--text-muted: #6c757d`
- Fonts: Poppins (body), Montserrat (display), Herr Von Muellerhoff (signature)

## Notes

- The sidebar layout is unique in this repo — most templates use top nav
- Use `lucide-react` icons for social links (Twitter, Facebook, Instagram)
- Use `picsum.photos` for placeholder images
- Footer must link `https://www.componentdock.com/`
