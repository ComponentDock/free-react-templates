# Template: PortfolioCove (Portfolio)

## Purpose

Recreation of ColorLib "Po Portfolio"
(source: https://colorlib.com/wp/template/po-portfolio/).
Preview: https://preview.colorlib.com/theme/po-portfolio/ (unreachable at
prep time — design derived from screenshot only).

Stack: React 19 · Vite · Tailwind CSS 4 · TypeScript.

## Design tokens

| Token          | Value                        | Notes                                    |
| -------------- | ---------------------------- | ---------------------------------------- |
| Brand color    | `#ffffff` (white)            | Page background                          |
| Secondary bg   | `#f5f5f5` (light gray)      | Image card backgrounds, sidebar area     |
| Text primary   | `#333333` (dark gray)        | Headings, logo                           |
| Text secondary | `#999999` (mid gray)         | Breadcrumb text                          |
| Font family    | System sans-serif             | Clean, minimal; fallback to `Inter`      |
| Grid gap       | ~24px                        | Between portfolio items                  |
| Border radius  | 0 (square)                   | No visible rounding on cards             |
| Card shadow    | none                         | Clean flat design                        |
| Sidebar width  | ~80px                        | Left sidebar, fixed                      |

## Layout structure

The template uses a **fixed left sidebar + main content area** layout:

1. **Left Sidebar** (fixed, ~80px wide, white background):
   - Brand logo "Po." at top (bold, dark, large sans-serif)
   - Hamburger menu icon below (≡, thin lines, dark gray)
2. **Breadcrumb** (top of main content area):
   - "Home / Portfolio" — light gray, small text
3. **Portfolio Grid** (main area):
   - 4-column masonry-style grid of square/rectangular image cards
   - Each card: light gray background, centered product/photography image
   - Images vary in content (plants, typography, objects, abstract)
   - No hover effects visible in screenshot
4. **No visible footer** in the screenshot

## Gherkin scenarios

### Sidebar

```gherkin
Scenario: Sidebar displays brand logo
  Given the page loads
  Then the sidebar shows "Po." as the brand text
  And the brand text is bold and dark colored

Scenario: Sidebar displays hamburger menu
  Given the page loads
  Then the sidebar shows a hamburger menu icon
  And clicking the hamburger toggles mobile navigation
```

### Breadcrumb

```gherkin
Scenario: Breadcrumb shows current location
  Given the page loads
  Then a breadcrumb shows "Home / Portfolio"
  And "Home" is a clickable link
  And "Portfolio" is plain text (current page)
```

### Portfolio Grid

```gherkin
Scenario: Portfolio grid displays items
  Given the page loads
  Then a 4-column grid of portfolio items is visible
  And each item shows an image on a light gray background

Scenario: Portfolio items are responsive
  Given the viewport is tablet-width
  Then the grid shows 2 columns
  Given the viewport is mobile-width
  Then the grid shows 1 column

Scenario: Portfolio items are clickable
  Given the page loads
  When a user clicks a portfolio item
  Then a detail view or lightbox opens (or navigates to detail page)
```

### Layout

```gherkin
Scenario: Fixed sidebar layout
  Given the page loads
  Then the sidebar is fixed to the left
  And scrolling does not move the sidebar
  And the main content area fills the remaining width
```

## Verification checklist

- [ ] Sidebar is fixed left, ~80px wide
- [ ] "Po." brand text is bold and dark
- [ ] Hamburger menu is visible and functional
- [ ] Breadcrumb shows "Home / Portfolio"
- [ ] Portfolio grid is 4 columns on desktop
- [ ] Grid is responsive (2 cols tablet, 1 col mobile)
- [ ] Images have light gray card backgrounds
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
- [ ] 100% test coverage
