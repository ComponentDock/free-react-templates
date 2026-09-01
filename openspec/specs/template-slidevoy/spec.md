# Template: SlideVoy (Tabbed Carousel Slider)

## Purpose

Recreation of ColorLib "Carousel V18" — a Bootstrap tabbed carousel slider template.

- **Source slug:** `carousel-18`
- **Source URL:** https://colorlib.com/wp/template/carousel-18/
- **Live preview:** https://preview.colorlib.com/theme/bootstrap/carousel-18/
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **New name:** `slidevoy` (app folder `apps/slidevoy`, package `@free-react-templates/slidevoy`)

## Design tokens (extracted from live preview CSS)

| Token                         | Value                                                       |
| ----------------------------- | ----------------------------------------------------------- |
| Body font                     | `"Roboto", sans-serif` — weights 300 (body), 400 (headings) |
| Heading font (h2 in cards)    | `"Playfair Display", serif` — weight 400                    |
| Paragraph text color          | `#999999` (gray-400)                                        |
| Category label color          | `#adb5bd` (gray-500)                                        |
| Category label style          | Uppercase, 12px, bold, letter-spacing 0.2rem                |
| Card heading color            | `#000000` (black)                                           |
| Tab nav link color (inactive) | `#999999`                                                   |
| Tab nav link color (active)   | `#000000`                                                   |
| Tab nav border-bottom         | `1px solid #ccc`                                            |
| Active tab indicator          | `border-bottom: 1px solid #000` (via ::before pseudo)       |
| Dot indicators                | `width: 7px, height: 7px, border-radius: 50%`               |
| Dot active color              | `white`                                                     |
| Dot inactive color            | `rgba(255, 255, 255, 0.5)`                                  |
| Carousel nav arrows           | Left/right positioned, `font-size: 40px`, white color       |
| Section padding               | `7rem 0` (content area)                                     |
| Card image width              | 50% (flex-based split layout)                               |
| Card text padding             | `50px` (20px on mobile)                                     |
| Link transition               | `0.3s all ease`                                             |
| Background                    | White (no explicit background-color in style.css)           |

## Structure

The template is a single-page layout:

1. **Carousel heading** — centered `<h2>` "Carousel #8" with top margin
2. **Tab navigation** — horizontal row of tab links (First Tab, Second Tab, Third Tab) with bottom border line; active tab has a black bottom indicator
3. **Carousel content** — Owl Carousel slider with 3 slides, each slide is a 50/50 flex row:
   - Left: full-height image (`img-fluid`)
   - Right: category label (uppercase, gray), heading (Playfair Display, black), paragraph (gray, light weight)
4. **Dot indicators** — centered at bottom of carousel
5. **Prev/Next arrows** — positioned at left/right edges, centered vertically

## Gherkin requirements

### Scenario: Page renders with heading

- **Given** the user visits the SlideVoy page
- **Then** the heading "Carousel #8" (or equivalent slidevoy-branded heading) is visible centered at the top

### Scenario: Tab navigation shows three tabs

- **Given** the user sees the tab navigation
- **When** there are 3 tab links visible
- **Then** the first tab is styled as active (black bottom border indicator)

### Scenario: Tab switching

- **Given** the user clicks the second tab
- **Then** the second tab becomes active (black border indicator)
- **And** the carousel advances to show the second slide content
- **And** the first tab loses the active indicator

### Scenario: Carousel shows split-layout slide

- **Given** a slide is displayed
- **Then** the layout is a 50/50 horizontal split
- **And** the left half shows a full-width image
- **And** the right half shows a category label, heading, and paragraph

### Scenario: Category label styling

- **Given** the category label is visible in a slide
- **Then** the label is uppercase with wide letter-spacing
- **And** the label text color is a muted gray (#adb5bd)

### Scenario: Heading in slide uses serif font

- **Given** the slide heading is visible
- **Then** the heading uses "Playfair Display" serif font
- **And** the heading color is black
- **And** the heading has generous line-height (1.3)

### Scenario: Prev/Next navigation arrows

- **Given** the carousel is displayed
- **Then** a left arrow and right arrow are visible at the slide edges
- **And** the arrows are vertically centered on the slide

### Scenario: Dot indicators

- **Given** the carousel shows dot indicators
- **Then** there are 3 circular dots centered below the carousel
- **And** the active dot is white, inactive dots are semi-transparent white

### Scenario: Responsive mobile layout

- **Given** the viewport is below 992px
- **Then** the 50/50 split stacks vertically
- **And** the text padding is reduced

### Scenario: Link transitions

- **Given** the user hovers over a heading link or tab link
- **Then** the color transition occurs smoothly (0.3s ease)

## Verification checklist

- [ ] Fonts loaded: Roboto (300, 400) + Playfair Display (400)
- [ ] 50/50 split layout on desktop, stacked on mobile
- [ ] Tab nav with bottom border line and active indicator
- [ ] Three carousel slides with image + text content
- [ ] Category labels are uppercase, gray, spaced
- [ ] Headings use Playfair Display serif
- [ ] Prev/Next arrow navigation
- [ ] Dot indicators (3 dots, active = white)
- [ ] Footer links to Component Dock
- [ ] 100% test coverage
- [ ] No ColorLib references in app code
