# Chateau — Implementation Tasks & Design Notes

## Source Mapping

| Field         | Value                                                      |
| ------------- | ---------------------------------------------------------- |
| ColorLib slug | `luxuryhotel` (no hyphen in preview URL)                  |
| Source name   | Luxury Hotel                                               |
| Preview URL   | https://preview.colorlib.com/theme/luxuryhotel/            |
| Source page   | https://colorlib.com/wp/template/luxury-hotel/             |
| New name      | `chateau`                                                  |

## Section Order (from preview DOM)

1. **Navbar** — transparent overlay, brand "Chateau", 5 nav links + Rooms dropdown + Book Now CTA
2. **Hero** — full-viewport parallax, dark overlay (rgba 0,0,0,0.5), centered heading/subtitle/CTA
3. **Feature ("Stay and Enjoy")** — left text (4 cols) + right image (7 cols), white bg
4. **Featured Rooms** — light bg, centered heading, asymmetric grid: large card left (7 cols) + 2 small cards stacked right (5 cols)
5. **Cover/Parallax** — full-width parallax bg image, dark overlay, centered heading + play button
6. **Blog** — light bg, centered heading, 3 equal-width blog cards with image + category + CTA
7. **Footer** — dark bg, 3-col: Phone / Social / Newsletter, copyright line

## Design Token Reference

- Heading font: Playfair Display (Google Fonts, weights 400, 700)
- Body font: Rubik (Google Fonts, weight 300)
- Brand gold: #b99365
- Hover gold: #c9ac88
- Body text: #6c757d
- Headings: #000
- Light section bg: #f2f2f2 / #f7f7f7
- Border color: #e6e6e6
- Button style: sharp corners (radius 0), gold fill primary, gold outline secondary
- Play button: 50% radius circle, 2px white border
- Dropdown: 4px radius, white bg, subtle shadow

## Fidelity Notes

- Hero must use `background-size: cover` with a dark overlay (not a separate dark section)
- Feature section is NOT full-width — it's a standard container with a text+image row
- Featured Rooms uses asymmetric column widths: 7 cols (large card) + 5 cols (two stacked small cards)
- The two right-side room cards use background-image (not img tags) with overlap text
- Room specs show icons (people, crop/size) alongside text
- Blog cards use `.btn-outline-primary` style (border + text in gold, no fill)
- Cover section uses a play button (not a real video player) — circular, centered
- Newsletter submit button is an arrow icon (not text)
- Footer social icons use Font Awesome (→ use lucide-react equivalents)

## Implementation Outline

### Step 1: Scaffold
- Copy simplest existing app (e.g. abode) into apps/chateau
- Rename package to @free-react-templates/chateau
- Set up index.html with Google Fonts (Playfair Display + Rubik)
- Set up index.css with brand gold token in @theme

### Step 2: Components (in order)
1. Navbar — transparent, fixed position, mobile hamburger
2. Hero — full-viewport, parallax background, dark overlay, centered text+CTA
3. Feature — 2-column layout (text left, image right)
4. FeaturedRooms — asymmetric grid, large card + 2 stacked cards
5. CoverSection — parallax bg, dark overlay, play button
6. BlogSection — 3-column cards with category + outline CTA
7. Footer — 3-column, social icons, newsletter form, Component Dock link
8. LoadingSpinner — fullscreen overlay with gold circular SVG

### Step 3: Tests
- Test each component renders correctly
- Test navbar dropdown toggle
- Test newsletter form input
- Test responsive breakpoints (mobile menu, stacked columns)
- Achieve 100% coverage

### Step 4: Verification
- Run verify-app.sh chateau
- Check all design tokens match
- Verify no ColorLib references in app code
- Confirm footer links to componentdock.com
