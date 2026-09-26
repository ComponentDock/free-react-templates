# Template: Lenscraft (Photography Portfolio)

## Purpose

Recreation of ColorLib's "Alime" photography portfolio template.

- **Source slug:** `alime`
- **ColorLib URL:** https://colorlib.com/wp/template/alime/
- **Preview URL:** https://preview.colorlib.com/theme/alime/
- **Stack:** React 19 + Vite + Tailwind CSS 4 + TypeScript
- **App folder:** `apps/lenscraft`
- **Package:** `@free-react-templates/lenscraft`

## Design tokens (from preview stylesheet)

| Token              | Value                                                   | Notes                                                         |
| ------------------ | ------------------------------------------------------- | ------------------------------------------------------------- |
| Brand color        | `#fc6060`                                               | Coral/red, used on buttons, hover states, accents             |
| Background (light) | `#f7f7f7`                                               | Section backgrounds                                           |
| Background (white) | `#ffffff`                                               | Default page background                                       |
| Text primary       | `#252525`                                               | Dark charcoal                                                 |
| Text secondary     | `#636363`                                               | Medium gray                                                   |
| Border / subtle    | `#ebebeb`                                               | Dividers, subtle borders                                      |
| Font family        | `"Poppins", sans-serif`                                 | Google Fonts, loaded via `<link>`                             |
| Button shape       | `border-radius: 60px`                                   | Pill/rounded buttons                                          |
| Button style       | `border: 2px solid #fc6060`, transparent bg, white text | Ghost/outline style; on hover fills `#fc6060` with white text |
| Button size        | `min-width: 160px`, `height: 46px`, `padding: 0 30px`   | Medium height                                                 |
| Icon font          | Font Awesome 5 (ti-close, ti-search, ti-facebook, etc.) | Use `lucide-react` instead                                    |
| Overlay            | `background-color: rgba(0, 0, 0, 0.4)`                  | Dark overlay on hero images                                   |

## Sections (in order)

1. **Navbar** — Fixed top, logo left, nav links center (Home, Pages dropdown, Portfolio dropdown, Blog dropdown, Contact), search icon right. Mobile hamburger menu.
2. **Hero / Welcome Carousel** — Full-width slider with background images + dark overlay. Each slide: headline ("Hello World"), subtitle paragraph (photography quote), "Get a Quote" CTA button (pill, outline coral), email link. Two slides in original.
3. **Portfolio Gallery** — Filter menu (All, Nature, People, Animals, Travel) centered. 4-column grid of portfolio items with hover overlay showing a "+" icon. 8 portfolio items with category tags for filtering.
4. **Instagram Feed** — "Follow Instagram" heading + "@lenscraft" handle. Row of 5-6 Instagram-style images with hover overlay showing Instagram icon.
5. **Footer** — Copyright text left, logo center, social icons right (Facebook, Twitter, Instagram, LinkedIn).

## Gherkin Requirements

### Scenario: Navbar renders with navigation links

```
Given the user visits the Lenscraft homepage
Then the navbar displays "Lenscraft" logo
And navigation links: Home, Pages, Portfolio, Blog, Contact
And a search icon is visible
```

### Scenario: Hero carousel displays welcome slides

```
Given the user visits the homepage
Then a hero section displays a full-width background image with dark overlay
And the heading "Hello World" is visible
And a subtitle quote about photography is visible
And a "Get a Quote" button is visible with pill shape and coral outline
And an email contact link is visible
```

### Scenario: Hero carousel auto-advances slides

```
Given the hero carousel is visible
When 5 seconds pass without interaction
Then the carousel transitions to the next slide
And the heading animation changes direction
```

### Scenario: Portfolio gallery shows filterable items

```
Given the user scrolls to the portfolio section
Then a filter menu displays: All, Nature, People, Animals, Travel
And 8 portfolio items display in a 4-column grid
And each item shows a background image
And hovering an item reveals a "+" icon overlay
```

### Scenario: Portfolio filter narrows visible items

```
Given the portfolio gallery is visible
When the user clicks "Nature" filter
Then only nature-tagged items remain visible
And other items are hidden
```

### Scenario: Instagram feed section renders

```
Given the user scrolls to the Instagram section
Then a "Follow Instagram" heading is visible
And a handle like "@lenscraft" is visible below
And 5-6 Instagram-style images display in a row
And hovering an image shows an Instagram icon overlay
```

### Scenario: Footer renders with social links

```
Given the user scrolls to the footer
Then copyright text is visible
And a logo is centered
And social media icon links are visible (Facebook, Twitter, Instagram, LinkedIn)
And a "Component Dock" attribution link is present
```

### Scenario: Mobile responsive layout

```
Given the user views on a mobile viewport (< 768px)
Then the navbar collapses to a hamburger menu
And the portfolio grid switches to 1-2 columns
And the Instagram feed scrolls horizontally
```

## Verification checklist

- [ ] Brand color `#fc6060` applied to buttons and accents
- [ ] Poppins font loaded from Google Fonts
- [ ] Pill-shaped buttons with 60px border-radius
- [ ] Hero section with dark overlay on background images
- [ ] Portfolio grid with 4 columns on desktop
- [ ] Filter menu with category buttons
- [ ] Hover effects on portfolio items (overlay + icon)
- [ ] Instagram feed row with hover overlay
- [ ] Footer with Component Dock link
- [ ] Responsive: hamburger nav, 1-2 col grid on mobile
- [ ] Placeholder images via `picsum.photos/seed/lenscraft-<n>/...`
- [ ] No ColorLib references in app code
- [ ] `npm run test:coverage` passes at 100%
