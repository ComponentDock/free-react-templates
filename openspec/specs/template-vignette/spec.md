# Template: Vignette (Photography Portfolio)

## Purpose

Vignette is a single-page photography portfolio site in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Bato" free template (source:
https://colorlib.com/wp/template/bato/), built under a DIFFERENT name
(**Vignette**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a Bootstrap 4 + Owl Carousel (jQuery) multi-page photography
portfolio: side navigation (hamburger), hero carousel with split layout
(3/4 image + 1/4 text panel), gallery grid, about section, blog section,
contact form, and footer. The index page is minimal (nav + carousel only);
Work, About, Blog, and Contact are separate HTML pages. The React
recreation combines all sections into a single scrollable page.

**Preview URL:** https://preview.colorlib.com/theme/bato/
(Colorlib listing: https://colorlib.com/wp/template/bato/)

**Design tokens extracted from preview CSS (css/style.css):**

| Token                  | Value                                                     |
| ---------------------- | --------------------------------------------------------- |
| Body font family       | `"Karla", Arial, sans-serif` (weights 400, 700)          |
| Heading font family    | `"Playfair Display", Georgia, serif` (weights 400, 700)  |
| Brand / accent color   | `#F9CE00` (warm yellow)                                   |
| Brand hover color      | `#ffd614` (lighter yellow)                                |
| Page background        | `#fff` (white)                                            |
| Heading color          | `rgba(0, 0, 0, 0.8)` (near-black)                        |
| Body text color        | `gray` (default)                                          |
| Link color             | `#F9CE00` (brand yellow)                                  |
| Selection background   | `#b7c2c2` (muted teal-gray)                               |
| Selection text         | `#fcfcfc` (near-white)                                    |
| Tag/label text color   | `rgba(114, 114, 114, 0.8)` (gray)                        |
| Button primary bg      | `#F9CE00` (brand yellow)                                  |
| Button primary text    | `#fff` (white)                                            |
| Button primary border  | `2px solid #F9CE00`                                       |
| Button primary hover   | `#ffd614` bg + border                                     |
| CTA button (btn-view)  | `font-size: 13px; letter-spacing: 7px; text-transform: uppercase; color: #000; border: 1px solid #000` |
| Body line-height       | `1.8`                                                     |
| Body font-size         | `16px`                                                    |
| Heading line-height    | `1.3`                                                     |
| Border-radius (inputs) | `2px`                                                     |
| Hero slide counter     | `#colorlib-hero .number` (slide numbers like "01/03")     |
| Section padding (hero) | Full viewport height (`js-fullheight`)                    |
| Transition             | `0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)`           |
| Nav menu background    | `rgba(0, 0, 0, 0.4)` overlay                             |
| Footer background      | `#b7c2c2` (muted teal-gray, from `::selection` + footer) |

**Visual design (from TEMPLATES.md screenshot):** Clean white photography
portfolio. The hero area is a split layout — large background photograph
on the left (~75% width) with a narrower right panel (~25%) containing a
slide number (e.g. "01/03"), a category tag ("Welcome"), a serif heading
("Photography is on it's way."), descriptive paragraph, and a CTA button
("View Galleries →") with black border. The owl carousel dots appear at
the bottom-left of the hero. The navigation is a simple centered logo
("Bato") with a hamburger toggle. The overall aesthetic is editorial and
minimal — lots of white space, Playfair Display serif headings, Karla
sans-serif body text, and a warm yellow accent (#F9CE00). The footer has
a muted teal-gray background.

## Design tokens (React / Tailwind mapping)

```css
/* @theme tokens for Tailwind CSS 4 */
--color-brand: #F9CE00;
--color-brand-hover: #ffd614;
--color-surface: #ffffff;
--color-heading: rgba(0, 0, 0, 0.8);
--color-body: gray;
--color-muted: rgba(114, 114, 114, 0.8);
--color-footer-bg: #b7c2c2;
--color-selection-bg: #b7c2c2;
--color-selection-text: #fcfcfc;
--font-body: "Karla", sans-serif;
--font-heading: "Playfair Display", Georgia, serif;
--radius-input: 2px;
--line-height-body: 1.8;
--line-height-heading: 1.3;
```

## Requirements (Gherkin)

### Scenario: Navbar displays logo and navigation links

```gherkin
Given the user loads the page
Then a navbar is visible at the top
And the navbar contains a logo link reading "Vignette"
And the navbar contains navigation links: Home, Work, Blog, About, Contact
```

### Scenario: Mobile hamburger menu toggles

```gherkin
Given the user is on a mobile viewport
When the user clicks the hamburger menu icon
Then a full-screen overlay navigation appears
And the overlay contains the same navigation links
And a gallery thumbnail grid is visible
When the user clicks the close button or an overlay link
Then the overlay closes
```

### Scenario: Hero carousel shows slides with split layout

```gherkin
Given the user loads the page
Then a hero carousel is visible
And the carousel displays the first slide
And the slide has a large background image on the left (~75% width)
And the slide has a text panel on the right (~25% width)
And the text panel contains a slide number (e.g. "01/03")
And the text panel contains a category tag
And the text panel contains a serif heading
And the text panel contains a descriptive paragraph
And the text panel contains a "View Galleries" CTA button
```

### Scenario: Hero carousel auto-advances or navigates

```gherkin
Given the hero carousel is visible
When the user waits or clicks the next/prev navigation
Then the carousel advances to the next slide
And the slide number updates (e.g. "02/03")
And the background image, tag, heading, and description update
```

### Scenario: Gallery/Work section shows portfolio grid

```gherkin
Given the user scrolls to the Work section
Then a grid of portfolio images is displayed
And each image has a hover overlay with a search icon
And the images are arranged in a responsive grid
```

### Scenario: About section displays description

```gherkin
Given the user scrolls to the About section
Then a split layout is shown with an image on one side
And descriptive text on the other side
And the heading uses Playfair Display serif font
```

### Scenario: Contact section shows form

```gherkin
Given the user scrolls to the Contact section
Then a contact form is displayed
And the form has fields for name, email, subject, and message
And the form has a submit button styled with brand yellow
```

### Scenario: Footer displays with Component Dock link

```gherkin
Given the user scrolls to the footer
Then the footer is visible with a muted teal-gray background
And the footer contains a link to https://www.componentdock.com/
And the footer is branded as "Component Dock"
```

### Scenario: Brand colors are applied consistently

```gherkin
Given any interactive element is hovered
Then the hover state uses the brand yellow (#F9CE00) or lighter (#ffd614)
And links are colored with the brand yellow
And the CTA buttons have yellow background with white text
```

### Scenario: Typography uses correct font families

```gherkin
Given the page is rendered
Then headings use "Playfair Display" serif font
And body text uses "Karla" sans-serif font
And body text has line-height 1.8
And headings have line-height 1.3
```

## Verification checklist

- [ ] Navbar with logo and nav links renders
- [ ] Hamburger menu toggle works on mobile viewport
- [ ] Hero carousel displays 3 slides with split layout
- [ ] Slide numbers update on navigation
- [ ] Gallery/Work grid shows portfolio images with hover effect
- [ ] About section renders with image + text split
- [ ] Contact form renders with all fields
- [ ] Footer links to Component Dock (https://www.componentdock.com/)
- [ ] Brand yellow (#F9CE00) used for buttons, links, accents
- [ ] Karla body font + Playfair Display heading font loaded
- [ ] Responsive layout works (mobile, tablet, desktop)
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Footer branded "Component Dock"
- [ ] CNAME file: `vignette.free.componentdock.com`
- [ ] homepage: `https://vignette.free.componentdock.com`
- [ ] package.json name: `@free-react-templates/vignette`
- [ ] All images use picsum.photos placeholders
- [ ] Icons from lucide-react (no icomoon)
- [ ] vitest + Testing Library, 100% coverage
- [ ] Tailwind CSS 4 with @theme tokens
- [ ] `npm run spec:validate` passes
