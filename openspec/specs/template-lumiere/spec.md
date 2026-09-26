# Lumiere — Photography Portfolio Template

Recreation of ColorLib **Mostudio** (https://colorlib.com/wp/template/mostudio/).

## Design Tokens

| Token           | Value                                      |
| --------------- | ------------------------------------------ |
| Brand accent    | `#F96D00` (vibrant orange)                 |
| Sidebar bg      | `#000000` (black) with subtle texture      |
| Body font       | Poppins (Google Fonts)                     |
| Display font    | Abril Fatface (Google Fonts)               |
| Body text color | `#212529`                                  |
| Muted text      | `#6c757d`                                  |
| White           | `#ffffff`                                  |
| Section bg      | `#ffffff` (white)                          |
| Button style    | Outlined, uppercase, 12px, border on hover |

## Preview URL

https://preview.colorlib.com/theme/mostudio/

## Fallback

Preview is reachable; screenshot used for additional visual confirmation.

## Layout

- **Sidebar** (fixed left, ~280px, dark bg): logo with background image, nav links (Home, Gallery, About, Pricing, Contact), newsletter subscription form, copyright footer
- **Main content** (right of sidebar): full-width portfolio grid
  - 9 portfolio items in alternating zigzag layout (image left / text right, then image right / text left)
  - Each item: large image, category subheading, title, description paragraph, "View Portfolio" button
  - "Load more" button at bottom
- **Mobile**: sidebar collapses to top nav; portfolio items stack vertically

## Sections (in order)

1. **Sidebar** — fixed left panel with brand logo (text), nav links, newsletter form, copyright
2. **PortfolioGrid** — 9 alternating image+text rows with "Load more" CTA
3. **Footer** — Component Dock branding (mandatory)

## Content

### Sidebar

- Brand: "Lumiere" (text logo)
- Nav: Home, Gallery, About, Pricing, Contact
- Newsletter: "Subscribe for newsletter" heading, email input, submit
- Copyright: "Made with Component Dock" + year

### Portfolio Items

| #   | Category | Title             | Image seed         |
| --- | -------- | ----------------- | ------------------ |
| 1   | Portrait | Black & Gold Face | lumiere-portrait-1 |
| 2   | Nature   | Green Leaves      | lumiere-nature-1   |
| 3   | Nature   | Coal              | lumiere-nature-2   |
| 4   | Nature   | Top Leaf          | lumiere-nature-3   |
| 5   | Portrait | Building          | lumiere-portrait-2 |
| 6   | Fashion  | Black Girl Model  | lumiere-fashion-1  |
| 7   | Animals  | Pug Puppy         | lumiere-animals-1  |
| 8   | Nature   | White Flower      | lumiere-nature-4   |
| 9   | Animals  | Turtle            | lumiere-animals-2  |

All descriptions use placeholder text ("Far far away, behind the word mountains...").

## Scenarios

### Sidebar renders correctly

- Given the page loads, when the sidebar is visible, then it shows the brand name "Lumiere", all 5 nav links, and the newsletter form.

### Portfolio items render

- Given the page loads, when the portfolio grid is visible, then it shows 9 portfolio items each with an image, category, title, description, and "View Portfolio" button.

### Alternating layout

- Given the portfolio grid, when items are rendered, then odd items show image on the left and text on the right, and even items show text on the left and image on the right.

### Mobile sidebar collapses

- Given the viewport is less than 1024px, when the page loads, then the sidebar is hidden and a mobile nav toggle is shown.

### Load more button

- Given the portfolio grid, when the "Load more" button is visible, then it has an accessible label and icon.

### Newsletter form

- Given the sidebar newsletter, when the user types an email and submits, then the form prevents default submission.
