# Template: Craftfolio (Portfolio / Personal)

## Purpose

Recreation of ColorLib's **Steve** template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page portfolio app.

- **Source slug:** `steve`
- **Preview URL:** https://preview.colorlib.com/theme/steve/
- **Source screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/steve-free-template.jpg
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **Package:** `@free-react-templates/craftfolio`
- **Deploy target:** `craftfolio.free.componentdock.com`

## Design tokens (from preview CSS)

| Token            | Value                        | Notes                                           |
| ---------------- | ---------------------------- | ----------------------------------------------- |
| Brand color      | `#e45447` (warm red)         | CTA buttons, hover states                       |
| Secondary accent | `#ffd200` (golden yellow)    | Footer background                               |
| Text primary     | `#222`                       | Body copy                                       |
| Text secondary   | `#777`                       | Muted / secondary text                          |
| Background white | `#fff`                       | Card / content areas                            |
| Background gray  | `#f9f9ff`                    | About section (`.gray-bg`)                      |
| Font heading     | `"Poppins", sans-serif`      | Headings                                        |
| Font body        | `"Roboto", sans-serif`       | Body text, buttons                              |
| Button radius    | `0` (square/rectangular)     | `.primary-btn` — no border-radius               |
| Button padding   | `12px 34px`                  | Standard CTA button                             |
| Section spacing  | `120px` vertical             | `.section_gap`                                  |
| Portfolio grid   | 4-column (`col-lg-3`)        | With 5px radius, black overlay on hover         |
| Footer bg        | `#ffd200`                    | Golden yellow                                   |

## Section structure (from preview DOM)

1. **Navbar** — Fixed top, logo left, links right (Home, About, Portfolio, Pages, Blog, Contact). Mobile hamburger toggle.
2. **Hero / Banner Carousel** — Fullscreen owl-carousel with 3 slides. Each slide: dark background image, centered h1 name + h3 subtitle + "Hire Me" CTA button (red `#e45447`).
3. **Portfolio / Work** — 4-column grid of 8 project cards. Each card: image with black overlay + text overlay (title + "Client Project"). Filter bar (All Categories). `border-radius: 5px` on cards.
4. **About** — Two-column: left image, right text block with h1 heading ("about myself"), two paragraphs, "More Info" CTA button. Gray background (`#f9f9ff`).
5. **Testimonials** — Two-column: left is owl-carousel of 4 testimonial cards (quote icon, name, 5 stars, paragraph), right is brand logos panel (white card with shadow, 5 logos).
6. **Newsletter** — Centered section with background image, white h1 ("Join Our Newsletter"), paragraph, email input + "Subscribe" button (dark).
7. **Footer** — Centered: logo, "Follow Me" heading, 4 social icons (Facebook, Twitter, Dribbble, Behance), copyright line. Golden yellow background (`#ffd200`).

## Gherkin scenarios

### Navbar
- **Scenario:** Navbar renders all navigation links
  - Given the page is loaded
  - Then the navbar displays links: Home, About, Portfolio, Contact
  - And the navbar has a logo on the left
  - And on mobile the hamburger button is visible

### Hero
- **Scenario:** Hero carousel displays name and CTA
  - Given the page is loaded
  - Then the hero section shows a heading with a name
  - And shows a subtitle describing the person
  - And shows a "Hire Me" CTA button

### Portfolio
- **Scenario:** Portfolio grid shows project cards
  - Given the page is loaded
  - Then 8 project cards are displayed in a grid
  - And each card shows an image, title, and "Client Project" label
  - And a filter bar shows "All Categories" as active
  - And hovering a card shows a dark overlay with text

### About
- **Scenario:** About section shows image and text
  - Given the page is loaded
  - Then the about section displays an image on the left
  - And text content on the right with a heading and paragraphs
  - And a "More Info" CTA button is present

### Testimonials
- **Scenario:** Testimonial carousel shows reviews
  - Given the page is loaded
  - Then testimonial cards are displayed with a quote icon, name, star rating, and text
  - And a brand logos panel is shown on the right

### Newsletter
- **Scenario:** Newsletter section has email signup
  - Given the page is loaded
  - Then a "Join Our Newsletter" heading is displayed
  - And an email input field is present
  - And a "Subscribe" button is present

### Footer
- **Scenario:** Footer shows social links and copyright
  - Given the page is loaded
  - Then the footer displays social media icon links
  - And a copyright notice is present
  - And the footer links to Component Dock

## Verification checklist

- [ ] All sections match the original section order 1:1
- [ ] Design tokens (colors, fonts, radii) match the extracted values
- [ ] Hero uses fullscreen carousel layout (3 slides)
- [ ] Portfolio grid is 4-column with black overlay hover effect
- [ ] About section has gray background (`#f9f9ff`)
- [ ] Testimonials split layout (carousel left, logos right)
- [ ] Newsletter has background image with white text
- [ ] Footer is golden yellow (`#ffd200`) with social icons
- [ ] Button style: square corners, red background, white text
- [ ] No references to ColorLib in app code
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] Placeholder images use `https://picsum.photos/seed/craftfolio-<n>/<w>/<h>`
- [ ] Google Fonts loaded: Poppins (headings) + Roboto (body)
- [ ] `npm run test:coverage` passes at 100%
- [ ] `npm run build` succeeds
