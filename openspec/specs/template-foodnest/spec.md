# Template: Foodnest (Food & Restaurant)

## Purpose

Recreation of the ColorLib **Foody** template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page app.

- **Source slug:** `foody`
- **ColorLib page:** https://colorlib.com/wp/template/foody/
- **Live preview:** https://preview.colorlib.com/theme/foody/
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript, Vitest + Testing Library
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/foody-free-template.jpg

## Design Tokens

Extracted from the live preview stylesheet (`css/style.css`):

| Token | Value | Usage |
|---|---|---|
| Brand color (primary) | `#ff7404` (warm orange) | CTA buttons, active nav items, links, price text, hover states |
| Brand hover | `#ff9037` (lighter orange) | Button hover/active/focus states |
| Background | `#ffffff` (white) | Page base background |
| Background light | `#f7f7f7` / `#f8f9fa` | Service section (`.bg-light`) |
| Text dark | `#000000` (black) | Headings, footer labels |
| Text muted | `#868e96` (gray) | Body text |
| Text secondary | `#ced4da` (light gray) | Subtle text |
| Text danger | `#cf1d16` (red) | Heart icon in loader/footer |
| Font body | `"Open Sans", Arial, sans-serif` (Google Fonts) | All text (headings + body) |
| Button shape | `border-radius: 0px` (square corners) | All `.btn` and `.form-control` |
| Navbar | `background: black`, white text, orange active/hover | Dark header bar |
| Section slants | CSS clip-path `top-slant-white` / `bottom-slant-gray` | Diagonal section separators |
| Loader | Circular SVG spinner, `#cf1d16` stroke | Page loading animation |

## Sections (in order)

1. **Header/Navbar** — Dark (black) navbar, brand "Foody" left, nav links right: Home, Recipes, Services (dropdown: Food Catering, Drink & Beverages, Wedding & Birthday), About, News. "Contact Us" CTA button on far right. Mobile hamburger toggle.
2. **Hero Slider** — Owl-carousel with 2 slides. Each: full-width background image, centered text with heading, paragraph, white outline CTA "Get Started". AOS fade-up animations.
3. **Services** — 4-column icon grid on `bg-light` with bottom slant. Each: icon (flaticon), orange heading (e.g. "Enjoy Eating"), description paragraph. Icons: dinner, fish, coffee, meat.
4. **The Restaurant** — Centered heading "The Restaurant" + paragraph. 3 images in a row (dishes + about images). AOS fade animations.
5. **Special Menu** — Owl-carousel of dish cards. Each: dish image + overlaid text with price (orange) and dish name heading. Horizontal scrolling carousel.
6. **Our Menu** — `bg-light` with slant sections. 2-column layout, 4 items each. Each item: background image left, text right (dish name, description, price in orange). Alternating text/image order.
7. **Testimonial** — Carousel with blockquotes. Each: quote text, author image (round), author name, role. Clean centered layout.
8. **Blog** — `bg-light` with top slant. 2-column blog cards. Each: background image, date, title, excerpt, "Read More" orange button.
9. **Footer** — Newsletter subscribe section (email input + "Subscribe" button). Then 3 columns: About Us + social icons (Twitter, Facebook, LinkedIn, Instagram), Opening Hours + Contact Info, Quick Links. Copyright line with Component Dock attribution.

## Gherkin Requirements

### Scenario: Dark navbar renders navigation
```
Given the user visits the Foodnest page
Then a dark (black) navigation bar is visible at the top
And it displays the brand name "Foody" (or "Foodnest" in recreation)
And it contains links: Home, Recipes, Services, About, News
And a "Contact Us" button is on the right
```

### Scenario: Mobile hamburger opens navigation
```
Given the viewport width is less than 768px
When the user taps the hamburger toggle
Then a collapsible navigation menu appears
And all nav links are accessible
```

### Scenario: Hero slider displays slides
```
Given the user is on the homepage
Then a full-width image slider is visible
And each slide shows a heading, paragraph, and "Get Started" CTA button
And the CTA button has a white outline style
```

### Scenario: Services section shows four service blocks
```
Given the user scrolls to the Services section
Then four service blocks are displayed in a row
And each block has an icon, orange heading, and description text
And the section has a light background with a slanted bottom edge
```

### Scenario: Restaurant section displays heading and images
```
Given the user scrolls to the Restaurant section
Then a centered heading "The Restaurant" is shown with a paragraph
And three images are displayed in a row below
```

### Scenario: Special Menu carousel shows dish cards
```
Given the user scrolls to the Special Menu section
Then a horizontal carousel of dish cards is displayed
And each card shows a dish image with price and name overlaid
```

### Scenario: Our Menu shows two-column dish layout
```
Given the user scrolls to the Our Menu section
Then a two-column layout with dish items is displayed
And each item has a background image, dish name, description, and price
And prices are displayed in orange
And items alternate text/image ordering
```

### Scenario: Testimonials carousel displays quotes
```
Given the user scrolls to the Testimonial section
Then a carousel of testimonials is shown
And each testimonial contains a quote, author image, name, and role
```

### Scenario: Blog section shows two post cards
```
Given the user scrolls to the Blog section
Then two blog post cards are displayed
And each card has a background image, date, title, excerpt, and "Read More" button
```

### Scenario: Footer has newsletter and info columns
```
Given the user scrolls to the footer
Then a newsletter subscription section with email input and "Subscribe" button is visible
And three info columns are displayed: About Us, Opening Hours + Contact Info, Quick Links
And social icons (Twitter, Facebook, LinkedIn, Instagram) are shown
And the footer contains a "Made with ❤ by Component Dock" copyright line
```

### Scenario: Brand orange is used consistently
```
Given the user views any section of the page
Then CTA buttons use the orange brand color (#ff7404)
And price text uses the orange brand color
And active nav items use the orange brand color
And buttons have square corners (border-radius: 0)
```

## Verification Checklist

- [ ] Dark navbar with brand and nav links renders correctly
- [ ] Mobile hamburger menu toggles navigation
- [ ] Hero slider shows 2 slides with background images, headings, CTAs
- [ ] "Get Started" CTA has white outline style
- [ ] Services section: 4 blocks with icons, orange headings, descriptions
- [ ] Slanted section separators (CSS clip-path) render
- [ ] Restaurant section: heading + paragraph + 3 images
- [ ] Special Menu carousel with dish cards (price + name + image)
- [ ] Our Menu: 2-column layout with alternating text/image
- [ ] Testimonials: carousel with blockquotes and author info
- [ ] Blog: 2 post cards with image, date, title, excerpt, Read More
- [ ] Footer: newsletter form, 3 info columns, social icons
- [ ] Orange (#ff7404) used for CTAs, prices, active nav
- [ ] Square button corners (border-radius: 0)
- [ ] Open Sans font throughout
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code
- [ ] Tests pass with 100% coverage
