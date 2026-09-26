# Template: Framecast (Portfolio)

## Purpose

Recreation of ColorLib's "Portfolio 2" template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page portfolio website for creative agencies and freelancers.

- **Source template:** Portfolio 2 — https://colorlib.com/wp/template/portfolio-2/
- **Live preview:** https://preview.colorlib.com/theme/portfolio2/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/portfolio2-free-template.jpg
- **Category:** Personal / Portfolio Website Template
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript (strict)

## Design Tokens

Extracted from the live preview CSS (`css/style.css` at preview.colorlib.com/theme/portfolio2/):

| Token | Value | Usage |
|---|---|---|
| `--brand` | `#0181F5` | Primary blue — buttons, links, CTA accents, hero subtitle |
| `--dark` | `#040E27` | Very dark navy — hero/banner background, footer background |
| `--light-bg` | `#f9f9ff` | Off-white/light lavender — section alternating background |
| `--text` | `#26282b` | Body text color |
| `--text-muted` | `#596672` | Secondary text, copyright |
| `--white` | `#ffffff` | Card backgrounds, button text on hover |
| `--orange` | `#ff5e13` | Secondary accent (used sparingly) |
| `--teal` | `#4cd3e3` | Decorative accent |
| `--heading-font` | `"Poppins", sans-serif` | Headings |
| `--body-font` | `"Roboto", sans-serif` | Body text |
| `--btn-font` | `"Alata", sans-serif` | Button labels |
| Button radius | `3px` | Subtle rounded corners on buttons |
| Card radius | `0` | Sharp rectangular portfolio items |
| Hover radius | `0` | No border-radius on hover overlays |

### Button Style
- Outlined: white bg, `#0181F5` border, `#131313` text, padding `14px 44px`, font `Alata` 14px
- Hover: fill with `#0181F5`, white text
- CTA (discuss projects): white text on `#0181F5` bg, "Start Talking" label

## Page Structure (section order)

1. **Header/Nav** — fixed/sticky, dark bg `#040E27`, "PORTFOLIO" wordmark logo (left), nav links: Home, About, Blog, Pages, Contact (right)
2. **Hero/Banner** — full-width dark `#040E27` bg, centered text: "Hello Everyone" in blue `#0181F5`, large white heading "World class consumer and trends research capabilities we design for tomorrow customers in tomorrow's markets."
3. **Portfolio Grid** — full-width masonry-style grid, 9 project items across ~3 rows, each item shows image with hover overlay (category label + project name), items vary in width (some 1/3, some 2/3 of row). "More Works" link at bottom.
4. **Services** — light bg, "Services" heading, 3-column grid: 3D Modeling, UI/UX Design, Architectural Design — each with icon + description text
5. **Blog** — "Our Creative Articles" heading, owl-carousel of 4 blog post cards (image + date + title), "More Blogs" button
6. **Testimonials** — slider with quote text, author name, author designation, navigation dots
7. **Discuss Projects CTA** — full-width blue `#0181F5` bg, centered heading, "Start Talking" button
8. **Footer** — dark `#040E27` bg, 4-column layout: logo + description, Services links, Useful Links, Follow Us (social icons), copyright bar at bottom

## Gherkin Requirements

### Scenario: Header navigation renders all links
```
Given the user loads the page
Then the header shows "PORTFOLIO" logo text
And the nav contains links: Home, About, Blog, Pages, Contact
```

### Scenario: Hero section displays headline and subtitle
```
Given the user loads the page
Then the hero section has a dark navy background
And displays "Hello Everyone" as a subtitle in blue
And displays the main heading about research capabilities in white
```

### Scenario: Portfolio grid shows project items with hover effects
```
Given the user loads the page
Then the portfolio section displays 9 project image cards in a masonry grid
And each card has a hover overlay showing category and project name
And a "More Works" link is visible below the grid
```

### Scenario: Services section shows three service cards
```
Given the user loads the page
Then the services section displays 3 cards
And the cards are labeled "3D Modeling", "UI/UX Design", "Architectural Design"
And each card has an icon and description text
```

### Scenario: Blog section shows carousel of articles
```
Given the user loads the page
Then the blog section heading reads "Our Creative Articles"
And 4 blog post cards are visible in a carousel
And each card shows an image, date, and title
And a "More Blogs" button is present
```

### Scenario: Testimonials section displays quotes
```
Given the user loads the page
Then the testimonials section shows a quote with author name and designation
And navigation dots are present for the slider
```

### Scenario: CTA section encourages project discussion
```
Given the user loads the page
Then a blue full-width section displays a call-to-action
And a "Start Talking" button is visible
```

### Scenario: Footer shows site information
```
Given the user loads the page
Then the footer has a dark background
And it contains 4 columns: logo/description, Services, Useful Links, Follow Us
And a copyright bar appears at the bottom
And the footer links to https://www.componentdock.com/
```

### Scenario: Responsive layout adapts to mobile
```
Given the user loads the page on a 375px viewport
Then the nav collapses to a hamburger menu
And the portfolio grid stacks to single column
And services stack vertically
And the footer columns stack vertically
```

## Verification Checklist

- [ ] Header with logo and nav links renders
- [ ] Hero section with dark bg and centered text
- [ ] Portfolio grid with 9 masonry items and hover overlays
- [ ] Services section with 3 cards
- [ ] Blog carousel with 4 post cards
- [ ] Testimonials slider with quotes
- [ ] Blue CTA section with "Start Talking" button
- [ ] Footer with 4 columns and copyright
- [ ] Responsive: mobile hamburger, stacked grid, stacked footer
- [ ] Tailwind theme uses design tokens (brand #0181F5, dark #040E27)
- [ ] Google Fonts: Poppins, Roboto, Alata loaded in index.html
- [ ] Footer links to componentdock.com
- [ ] No ColorLib references in app code
- [ ] 100% test coverage (vitest + testing library)
