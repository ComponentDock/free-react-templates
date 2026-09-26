# Template: Lenscraft (Photography Portfolio)

## Purpose

Recreation of ColorLib's "Proshoot" photography portfolio template.

- **Source slug:** `proshoot`
- **ColorLib URL:** https://colorlib.com/wp/template/proshoot/
- **Preview URL:** https://preview.colorlib.com/theme/proshoot/
- **Stack:** React 19 + Vite + Tailwind CSS 4 + TypeScript
- **App folder:** `apps/lenscraft`
- **Package:** `@free-react-templates/lenscraft`

## Design tokens (from preview stylesheet)

| Token                  | Value                                                   | Notes                                                         |
| ---------------------- | ------------------------------------------------------- | ------------------------------------------------------------- |
| Brand color            | `#fc6060`                                               | Coral/red, used on buttons, hover states, accents             |
| Background (light)     | `#f7f7f7`                                               | Section backgrounds                                           |
| Background (white)     | `#ffffff`                                               | Default page background                                       |
| Text primary           | `#252525`                                               | Dark charcoal                                                 |
| Text secondary         | `#636363`                                               | Medium gray                                                   |
| Border / subtle        | `#ebebeb`                                               | Dividers, subtle borders                                      |
| Font family (headings) | `"Oswald", sans-serif`                                  | Google Fonts, loaded via `<link>`                             |
| Font family (body)     | `"Roboto", sans-serif`                                  | Google Fonts, loaded via `<link>`                             |
| Button shape           | `border-radius: 60px`                                   | Pill/rounded buttons                                          |
| Button style           | `border: 2px solid #fc6060`, transparent bg, white text | Ghost/outline style; on hover fills `#fc6060` with white text |
| Button size            | `min-width: 160px`, `height: 46px`, `padding: 0 30px`   | Medium height                                                 |
| Overlay                | `background-color: rgba(0, 0, 0, 0.4)`                  | Dark overlay on hero images                                   |

## Sections (in order)

1. **Navbar** — Fixed top, logo left, nav links center (Home, About, Projects, Pages dropdown, Blog dropdown). Mobile hamburger menu.
2. **Hero / Banner** — Full-width, left-aligned headline "Images matter", subtitle paragraph, "Explore More" pill button, hero image on right side, social icons sidebar (facebook, twitter, instagram).
3. **About** — Image left, text right: "Let's Introduce About Myself", description text, "Read More" pill button.
4. **Services** — "Our Services" / "What We Offer" title. 3-column grid, 6 service cards with icon + title + description (Fashion Photography, Nature Photography, Event Coverage, Property Tours, Multimedia Services, Wedding Photography).
5. **Portfolio** — "Our Portfolio" / "Check Our Work" title. Asymmetric masonry grid: 2 large (col-8) + 3 small (col-4) items + "View More" button. Hover overlay with title + category.
6. **Pricing** — "Pricing Plan" / "Choose Your Package" title. 3 pricing cards (Wedding $46, Studio $76, Fashion $96) with feature list, check/close icons, "Book Now" button.
7. **Blog** — "Our Blog" / "Latest Good Story" title. 1 large featured post (left) + 3 smaller posts (right) with image, title, meta (author, date), excerpt.
8. **Footer** — 3-column: About Us text, Newsletter signup form, Follow Us social icons. Copyright with Component Dock attribution.

## Gherkin Requirements

### Scenario: Navbar renders with navigation links

```
Given the user visits the Lenscraft homepage
Then the navbar displays "Lenscraft" logo
And navigation links: Home, About, Projects, Pages, Blog
```

### Scenario: Hero banner displays with headline and image

```
Given the user visits the homepage
Then a hero section displays with headline "Images matter"
And a subtitle paragraph about photography is visible
And an "Explore More" pill button is visible
And a hero image is displayed on the right
And social media icons are visible on the side
```

### Scenario: About section renders with image and text

```
Given the user scrolls to the about section
Then a section title "Let's Introduce About Myself" is visible
And a portrait/photography image is displayed
And descriptive text about the photographer is visible
And a "Read More" button is visible
```

### Scenario: Services section displays 6 service cards

```
Given the user scrolls to the services section
Then a "What We Offer" heading is visible
And 6 service cards display in a 3-column grid
And each card has an icon, title, and description
And the services are: Fashion Photography, Nature Photography, Event Coverage, Property Tours, Multimedia Services, Wedding Photography
```

### Scenario: Portfolio gallery shows work items

```
Given the user scrolls to the portfolio section
Then a "Check Our Work" heading is visible
And portfolio items display in an asymmetric masonry grid
And hovering an item reveals a title and category overlay
And a "View More" button is visible
```

### Scenario: Pricing section shows 3 packages

```
Given the user scrolls to the pricing section
Then a "Choose Your Package" heading is visible
And 3 pricing cards display: Wedding ($46), Studio ($76), Fashion ($96)
And each card shows included/excluded features
And a "Book Now" button is on each card
```

### Scenario: Blog section shows recent posts

```
Given the user scrolls to the blog section
Then a "Latest Good Story" heading is visible
And 1 large featured blog post is displayed
And 3 smaller blog posts are displayed
And each post shows an image, title, author, date, and excerpt
```

### Scenario: Footer renders with Component Dock link

```
Given the user scrolls to the footer
Then an "About Us" section is visible
And a newsletter signup form is visible
And social media follow icons are visible
And copyright text with "Component Dock" attribution link is present
```

### Scenario: Mobile responsive layout

```
Given the user views on a mobile viewport (< 768px)
Then the navbar collapses to a hamburger menu
And the hero section stacks vertically
And the services grid switches to 1 column
And the portfolio grid switches to 1 column
```

## Verification checklist

- [ ] Brand color `#fc6060` applied to buttons and accents
- [ ] Oswald font for headings, Roboto for body (Google Fonts)
- [ ] Pill-shaped buttons with 60px border-radius
- [ ] Hero section with full-width layout and social sidebar
- [ ] About section with image + text side-by-side
- [ ] Services grid with 6 cards in 3 columns
- [ ] Portfolio masonry grid with hover overlays
- [ ] Pricing cards with feature lists
- [ ] Blog section with featured + smaller posts
- [ ] Footer with Component Dock link
- [ ] Responsive: hamburger nav, stacked layouts on mobile
- [ ] Placeholder images via `picsum.photos/seed/lenscraft-<n>/...`
- [ ] No ColorLib references in app code
- [ ] `npm run test:coverage` passes at 100%
