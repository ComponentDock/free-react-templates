# Template: Atolite (Business)

## Purpose

Recreation of ColorLib "Atomic" as a React 19 + Vite + Tailwind 4 + TypeScript single-page template.

- **Source slug:** `atomic`
- **ColorLib page:** https://colorlib.com/wp/template/atomic/
- **Live preview:** https://preview.colorlib.com/theme/atomic/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/atomic-free-template.jpg
- **New name:** `atolite` (app folder: `apps/atolite`, package: `@free-react-templates/atolite`)
- **Deploy target:** https://atolite.free.componentdock.com

## Design tokens

Extracted from `css/style.css` of the live preview.

| Token                 | Value                                                                           | Notes                                                             |
| --------------------- | ------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| Font family           | `"Work Sans", sans-serif`                                                       | Google Font, weights 300/400/700                                  |
| Primary color         | `#0389FF`                                                                       | Bright blue — buttons, navbar accent, counters, active pagination |
| Primary hover         | `#36a1ff` / `#0075dc`                                                           | Button hover states                                               |
| Body text             | `#999999`                                                                       | Light gray paragraphs                                             |
| Headings              | `#000000`                                                                       | Pure black                                                        |
| Links default         | `#000000`                                                                       | Black, transitions on hover                                       |
| Background (sections) | `#ffffff`                                                                       | White default                                                     |
| Background light      | `#f8f9fa`                                                                       | `bg-light` for features grid and footer                           |
| Background primary    | `#0389FF`                                                                       | Counter stats section                                             |
| Button shape          | `border-radius: 0px`                                                            | Square/rectangular buttons                                        |
| Button style          | `text-transform: uppercase; letter-spacing: 0.1em; font-size: 14px`             | Standard .btn                                                     |
| Button primary        | `background: #0389FF; color: #fff`                                              |                                                                   |
| Button black          | `background: #000; color: #fff`                                                 | Used for "More Features" CTA                                      |
| Section padding       | `7em 0`                                                                         | Large vertical spacing                                            |
| Overlap card          | `border-radius: 7px; box-shadow: 0 10px 20px -8px rgba(0,0,0,0.2)`              | White card overlapping hero                                       |
| Navbar (desktop)      | Transparent background, dark text, uppercase links (13px, letter-spacing 0.1em) | `.templateux-navbar.dark`                                         |
| Navbar (mobile)       | `#0389FF` background, white text                                                |                                                                   |
| Thumbnail cards       | `height: 500px`, dark overlay on hover (opacity 0.1 -> 0.5)                     | Two-row masonry-like grid                                         |
| Counter numbers       | `font-size: 50px; color: #fff`                                                  | On blue background                                                |

## Page sections (in order)

1. **Navbar** — Logo "Atolite" left, nav links right (Home, About, Services (dropdown), Gallery, Blog, Contact). Transparent on desktop, blue on mobile. Dark text on desktop, white on mobile.
2. **Hero/Cover** — Full-width background image. Two-column layout: left = headline + subtext + CTA button ("Free Download"); right = video play button (circle). Dark text on image.
3. **Overlap Features (3-column)** — White card overlapping hero bottom edge. Three icon+heading+text blocks in a row: "Intuitive Thinking", "Orange for Carrots", "Infinite Posibilities". Gray icons (ionicons-style).
4. **About Text** — Heading "Good Design is a Good Start". Two-column text: left = lead paragraph with link, right = two body paragraphs.
5. **Image Carousel** — Full-width owl-carousel slider with 3 images. No text overlay.
6. **Features Grid (6-column)** — Light gray background. Six icon+heading+text blocks (centered) in 2 rows x 3 cols: Regular Update, Infinite Posibilities, Good Security, Orange for Carrots, Intuitive Thinking, Play Video. "More Features" black button at bottom center.
7. **Portfolio Thumbnails** — Two rows of image cards. Row 1: one-third + two-third. Row 2: two-third + one-third. Each card has dark overlay, hover reveals title + category. Height 500px each.
8. **Counter Stats** — Blue background section. Three columns: Lines of Codes (99399), Number of Projects (99), Number of Clients (124). White large numbers + uppercase labels.
9. **Testimonial** — Centered quote marks (100px). Carousel of blockquotes. Clean white background.
10. **Footer** — Light background. Four-column layout: About (text), Learn More (links), Support (links), About Us (links) + Download button + social icons (Facebook, Twitter, GitHub). Bottom copyright line.

## Gherkin requirements

### Scenario: Navbar renders correctly

```gherkin
Given the user visits the homepage
Then the navbar displays the logo "Atolite" on the left
And the nav links are: Home, About, Services, Gallery, Blog, Contact
And the navbar is transparent on desktop viewport
And the navbar has a blue background on mobile viewport
```

### Scenario: Hero section displays

```gherkin
Given the user visits the homepage
Then the hero section shows a full-width background image
And the heading reads "Design a better website template."
And a subtext paragraph is present below the heading
And a "Free Download" primary button is visible
And a circular play button is displayed on the right side
```

### Scenario: Overlap features card

```gherkin
Given the user scrolls past the hero
Then a white overlapping card appears with rounded corners and shadow
And the card contains three feature blocks in a row
And each block has an icon, heading, and description text
And the features are: Intuitive Thinking, Orange for Carrots, Infinite Posibilities
```

### Scenario: About text section

```gherkin
Given the user views the about section
Then the heading reads "Good Design is a Good Start"
And two columns of text are displayed side by side
And the left column contains a lead paragraph with an inline link
And the right column contains two body paragraphs
```

### Scenario: Image carousel

```gherkin
Given the user reaches the carousel section
Then a full-width image slider is displayed
And the slider contains at least 3 images
And the slider occupies the full container width
```

### Scenario: Features grid section

```gherkin
Given the user views the features grid section
Then the section has a light gray background
And six feature blocks are displayed in a 2x3 grid
And each block has a centered icon, heading, and description
And a "More Features" black button is centered at the bottom
```

### Scenario: Portfolio thumbnails

```gherkin
Given the user scrolls to the portfolio section
Then a two-row grid of image cards is displayed
And row 1 has a one-third card and a two-third card
And row 2 has a two-third card and a one-third card
And each card shows a title and category on hover
And the cards have a dark overlay that intensifies on hover
```

### Scenario: Counter stats

```gherkin
Given the user reaches the stats section
Then the section has a blue background
And three counter columns are displayed: Lines of Codes, Number of Projects, Number of Clients
And each counter shows a large white number
And each counter has an uppercase label below the number
```

### Scenario: Testimonial section

```gherkin
Given the user views the testimonial section
Then a large quotation mark is centered at the top
And a testimonial quote is displayed in a centered blockquote
And the text is styled with increased line height and black color
```

### Scenario: Footer

```gherkin
Given the user reaches the footer
Then the footer has a light background
And an "About" column with descriptive text is on the left
And three link columns (Learn More, Support, About Us) are displayed
And a "Download for free" primary button is present
And social media icons (Facebook, Twitter, GitHub) are shown
And the copyright line reads "All rights reserved" with a Component Dock link
```

## Verification checklist

- [ ] Navbar renders with logo and all nav links
- [ ] Navbar switches from transparent to blue on mobile
- [ ] Hero displays background image, heading, subtext, CTA button, play button
- [ ] Overlap card renders with shadow, border-radius, and three feature blocks
- [ ] About section shows two-column text layout with lead paragraph
- [ ] Image carousel renders with multiple images
- [ ] Features grid shows 6 blocks on light background with black button
- [ ] Portfolio cards show hover overlay effect with title/category
- [ ] Counter section shows blue background with 3 stat columns
- [ ] Testimonial displays quote with large quotation mark
- [ ] Footer has 4-column layout, download button, social icons, copyright
- [ ] Footer links to `https://www.componentdock.com/` (branded "Component Dock")
- [ ] No ColorLib references anywhere in app source code
- [ ] `public/CNAME` contains `atolite.free.componentdock.com`
- [ ] `package.json` homepage is `https://atolite.free.componentdock.com`
