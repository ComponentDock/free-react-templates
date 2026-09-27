# Template: Stephen (Portfolio)

## Purpose

Stephen is a single-page personal portfolio template in the
free-react-templates monorepo. It is a faithful React recreation of the
ColorLib "Steve" free template (source:
https://colorlib.com/wp/template/steve/), built under a DIFFERENT name
(**Stephen**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a Bootstrap 4 portfolio template with an Owl Carousel hero,
Masonry/Isotope project gallery with filter tabs, an About section,
testimonials carousel, newsletter signup, and a golden-yellow footer. The
page uses two Google Fonts (Poppins for headings, Roboto for body text) and
a red/coral (`#e45447`) brand accent with golden-yellow (`#ffd200`)
highlights.

## Source mapping

- **ColorLib item:** "Steve" (TEMPLATES.md line 2568; section "## Portfolio
  (89)" at line 2527). The `wp/template/steve/` slug appears TWICE in
  TEMPLATES.md (lines 2568 and 2728 — duplicate rows).
- **Source URL:** https://colorlib.com/wp/template/steve/
- **Preview URL:** https://preview.colorlib.com/theme/steve/ (REACHABLE —
  HTTP 200, verified 2026-09-27 by direct curl fetch of full HTML + CSS).
- **Preview CSS:** `css/style.css` (all styles — hand-written, Bootstrap 4
  base + custom). Google Fonts: `Poppins:700` + `Roboto:400,500,500i`
  loaded via `@import url("https://fonts.googleapis.com/css?family=Poppins:700|Roboto:400,500,500i")`.

## Design tokens (extracted from live preview CSS)

| Token | Value | Usage |
|-------|-------|-------|
| Brand primary | `#e45447` | Red/coral — primary buttons, h1 underline accent, dropdown hover, banner CTA |
| Brand accent | `#ffd200` | Golden-yellow — dropdown background, sticky nav bg, footer background |
| Body text | `#777777` | Paragraph text, subtitle text |
| Heading text | `#222222` | h1–h6 headings, nav links (on transparent header) |
| Gray bg | `#f9f9ff` | About section background, section_gap gray-bg |
| Border blue | `#90acd1` | Primary button border (non-banner) |
| Newsletter input bg | `#fff` | Newsletter form input background |
| Footer bg | `#ffd200` | Full golden-yellow footer |
| Heading font | Poppins 700 | All headings (h1–h6) |
| Body font | Roboto 400/500/500i | Body text, nav links, buttons |
| Button radius | `50px` (pill) | Primary buttons — fully rounded pill shape |
| Button border | `2px solid #90acd1` | Primary button default state |
| Button hover | bg `#e45447`, text `#fff`, border `transparent` | Banner primary-btn hover |
| Section padding | `120px 0` (80px mobile) | `.section_gap` vertical spacing |
| Newsletter form | `border-radius: 50px`, white bg, `#e45447` subscribe btn | Pill-shaped form |
| Testimonial bg | background image (`testi-bg.jpg`) | Full-width photo bg behind testimonials + brand logos |
| Portfolio overlay | White text on dark overlay on hover | `.projects_text` hover reveal |
| Sticky nav | `#ffd200` background with box-shadow | `.navbar_fixed` class |

## Section order (from live preview DOM)

1. **Header/Navbar** — transparent overlay on hero, logo left, nav links
   right (Home, About, Portfolio dropdown, Pages dropdown, Blog dropdown,
   Contact). Dropdown background: `#ffd200`. Sticky: `#ffd200` bg.
2. **Hero Banner** — Owl Carousel with 3 slides, each a full-viewport
   background image with centered text: "Steve Henriques" (h1, 60px,
   black) + "Personal portfolio Website" (h3, Roboto 30px, black) + red
   "Hire Me" pill button. Text on white bg on mobile.
3. **Portfolio (Latest Works)** — Section title "Latest Works" with red
   underline accent + description text. Filter tabs (All Categories,
   Branding, Creative Work, Web Design) — active tab is black text.
   Masonry grid of 8 project items: images with dark overlay + white text
   on hover ("2D Vinyl Design" / "Client Project").
4. **About** — Gray bg (`#f9f9ff`). Left: illustration image. Right: h1
   "about myselt" [sic — preserve original typo in copy parity] +
   two paragraphs + "More Info" pill button. Text is left-aligned.
5. **Testimonials** — Background image (full-width photo). Left column:
   Owl Carousel of testimonials — each has a quote icon image, name
   "Fanny Spencer", 5 gold stars, and quote text. Right column: white
   card with brand logos (5 logos in top/mid/bottom layout). On mobile,
   logos section is hidden.
6. **Newsletter** — Background image (full-width). Centered: "Join Our
   Newsletter" heading (white) + description (white) + pill-shaped
   white form input + red "Subscribe" button. Form has `border-radius: 50px`.
7. **Footer** — Full golden-yellow (`#ffd200`) background. Centered: logo
   image + "Follow Me" heading + social icons (Facebook, Twitter,
   Dribbble, Behance) + copyright line. Footer links to Component Dock.

## Gherkin scenarios

### Scenario: Header renders with transparent overlay on hero

```gherkin
Given the user visits the page
When the header renders
Then it is transparent and overlays the hero banner
And it contains a logo and navigation links
And the navigation links include Home, About, Portfolio, Pages, Blog, Contact
And dropdown menus have a golden-yellow (#ffd200) background
```

### Scenario: Hero banner displays carousel with three slides

```gherkin
Given the user visits the page
When the hero banner renders
Then it shows a full-viewport carousel with 3 slides
And each slide has a background image
And each slide displays a name heading and "Personal portfolio Website" subtitle
And each slide has a red "Hire Me" pill button
And the carousel auto-rotates between slides
```

### Scenario: Portfolio grid displays filterable projects

```gherkin
Given the user visits the page
When the portfolio section renders
Then it shows "Latest Works" heading with red underline accent
And it shows 4 filter tabs: All Categories, Branding, Creative Work, Web Design
And the "All Categories" tab is active by default
And 8 project items display in a masonry grid layout
And each project item shows an image with a hover overlay
And the hover overlay displays the project title and "Client Project" label
```

### Scenario: Portfolio filter tabs filter projects

```gherkin
Given the portfolio section is displayed
When the user clicks the "Branding" filter tab
Then only projects tagged as "brand" are visible
And the "Branding" tab becomes active
When the user clicks the "All Categories" filter tab
Then all 8 project items are visible again
```

### Scenario: About section displays with gray background

```gherkin
Given the user visits the page
When the about section renders
Then it has a light gray (#f9f9ff) background
And it shows an illustration image on the left
And it shows an "about myselt" heading on the right (preserving original text)
And it shows descriptive paragraphs
And it shows a "More Info" pill button
```

### Scenario: Testimonials carousel displays with brand logos

```gherkin
Given the user visits the page
When the testimonials section renders
Then it has a background photo
And it shows a carousel of testimonial cards
And each testimonial has a quote icon, author name, 5-star rating, and quote text
And the right column shows a white card with brand logos
And the brand logo card is hidden on mobile viewports
```

### Scenario: Newsletter signup form renders with pill shape

```gherkin
Given the user visits the page
When the newsletter section renders
Then it has a background photo
And the heading "Join Our Newsletter" is white
And the description text is white
And the form has a white pill-shaped input (border-radius: 50px)
And the "Subscribe" button is styled as a generic button
```

### Scenario: Footer displays with golden-yellow background

```gherkin
Given the user visits the page
When the footer renders
Then it has a golden-yellow (#ffd200) background
And it shows a logo image
And it shows a "Follow Me" heading
And it shows social icon links (Facebook, Twitter, Dribbble, Behance)
And it shows a copyright line
And the footer contains a "Component Dock" link
```

### Scenario: Sticky header activates on scroll

```gherkin
Given the user has scrolled past the hero banner
When the sticky header activates
Then the nav background becomes golden-yellow (#ffd200)
And a box-shadow appears
And the nav height adjusts to 70px
```

### Scenario: Primary button hover states

```gherkin
Given a primary button is displayed
When the user hovers over it
Then the background changes to #e45447 (red)
And the text color changes to white
And the border becomes transparent
```

## Verification checklist

- [ ] Header renders with transparent overlay on hero
- [ ] Navigation links match original section order
- [ ] Dropdown menus have golden-yellow background
- [ ] Hero carousel renders 3 slides with background images
- [ ] Hero text: name heading + subtitle + "Hire Me" button
- [ ] Hero button is red pill shape on desktop, white bg on mobile
- [ ] Portfolio section title has red underline accent
- [ ] 4 filter tabs render (All Categories active by default)
- [ ] 8 project items in masonry grid
- [ ] Hover overlay on project items shows title + subtitle
- [ ] About section has #f9f9ff gray background
- [ ] About section has illustration + text + "More Info" button
- [ ] Testimonials carousel with quote icon, name, stars, text
- [ ] Brand logos card on right side of testimonials
- [ ] Newsletter section with background image
- [ ] Newsletter form is pill-shaped (50px radius)
- [ ] Footer has #ffd200 golden-yellow background
- [ ] Footer has logo, "Follow Me", social icons, copyright
- [ ] Footer includes Component Dock link
- [ ] Sticky header activates on scroll with #ffd200 bg
- [ ] Fonts: Poppins 700 for headings, Roboto 400/500 for body
- [ ] All placeholder images use picsum.photos with deterministic seeds
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
