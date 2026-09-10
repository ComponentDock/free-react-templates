# Template: Clarion (Consulting / Coaching Landing)

## Purpose

Recreation of the ColorLib **CellOn** template as a single-page React site.
Source: https://colorlib.com/wp/template/cellon/
Preview: https://preview.colorlib.com/theme/cellon/
Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript (strict).

### Design tokens (extracted from preview CSS)

| Token           | Value                                          | Usage                                                        |
| --------------- | ---------------------------------------------- | ------------------------------------------------------------ |
| Brand color     | `#6cbb23` (lime green)                         | Buttons, accents, overlay tint, counter numbers, link hovers |
| Body text       | `#777`                                         | Paragraphs, footer links                                     |
| Heading color   | `#222`                                         | h1–h6                                                        |
| Overlay tint    | `rgba(108, 187, 35, 0.85)`                     | Video, features, contact sections                            |
| Form border     | `#a6d477`                                      | Input/textarea borders on dark sections                      |
| Feature icon bg | `#f0f8e9`                                      | Icon card background (light green tint)                      |
| Body bg         | `#f6f6fc`                                      | Page-level background                                        |
| Card bg         | `#fff`                                         | Feature cards, banner, about, FAQ, footer                    |
| Font            | Poppins (weights 100, 300, 500, 600)           | All text                                                     |
| Button shape    | `border-radius: 20px` (circle class)           | CTA buttons                                                  |
| Wrapper shadow  | `box-shadow: 0px 0px 50px 0px rgba(0,0,0,0.2)` | `.oz-body-wrap` — outer frame effect                         |
| Wrapper margin  | `50px` (30px tablet, 10px mobile)              | Outer page spacing                                           |

## Section structure (order from preview)

1. **Navbar** — logo (battery icon) + nav links (Home, Generic, Elements) + hamburger toggle. Transparent header over the hero.
2. **Hero / Banner** — full-height split: left = hero image, right = heading "Behind Every Success There is a Cactus" with green accent word, subtitle "From the for User interface", CTA "Get Started" button (primary green, circle).
3. **Video promo** — dark image background with green overlay, centered play button icon, heading "Being unique is the preference", subtext "Youtube video will appear in popover".
4. **About** — two-column: left text "Brief Information About CellOn" (heading "About" + highlighted word, paragraph, "View More" outlined button), right = about image.
5. **Features** — 7 cards in a 3-column grid over green-overlay background image. Each card: icon (on light green bg), heading, short description. White card backgrounds.
6. **Stats + FAQ** — left column: 4 animated counters (Projects Completed, New Projects, Tickets Submitted, Cup of Coffee). Right column: 3 FAQ accordion items with expandable answers.
7. **Contact** — green overlay background image, centered heading "Send Us Message", form with name + email inputs, message textarea, "Send Message" button (white background variant).
8. **Footer** — white background, 4-column layout: Top Product links, Navigation links, Compare links, Quick About (text + phone + email + social icons). Copyright bar at bottom.

## Gherkin scenarios

### Scenario: Navbar renders with logo and navigation links

```gherkin
Given the user visits the Clarion page
Then a navigation bar is visible at the top
And a logo image is displayed on the left
And links "Home", "Generic", "Elements" are shown
And a hamburger menu icon is present for mobile
```

### Scenario: Hero section displays correctly

```gherkin
Given the user visits the Clarion page
Then a full-height hero section is displayed
And a hero image is shown on the left side
And a heading reads "Behind Every Success There is a Cactus"
And the word "Success" appears in bold black
And the word "Cactus" appears in green (#6cbb23)
And a "Get Started" CTA button is visible with a right arrow icon
```

### Scenario: Video promo section renders

```gherkin
Given the user visits the Clarion page
When the user scrolls to the video section
Then a dark background with green overlay is shown
And a play button icon is centered
And a heading "Being unique is the preference" is displayed
And subtext reads "Youtube video will appear in popover"
```

### Scenario: About section renders with text and image

```gherkin
Given the user visits the Clarion page
When the user scrolls to the about section
Then a two-column layout is displayed
And the left column contains heading "Brief Information About CellOn"
And a paragraph description is shown
And a "View More" outlined green button is present
And the right column shows an about image
```

### Scenario: Features section displays cards

```gherkin
Given the user visits the Clarion page
When the user scrolls to the features section
Then a green-overlay background is displayed
And 7 feature cards are shown in a grid layout
And each card has an icon on a light green background
And each card has a heading and description
```

### Scenario: Stats counters display numbers

```gherkin
Given the user visits the Clarion page
When the user scrolls to the stats section
Then 4 stat items are shown: Projects Completed (5962), New Projects (2394), Tickets Submitted (1439), Cup of Coffee (933)
And the counter numbers are displayed in green (#6cbb23)
```

### Scenario: FAQ section renders questions

```gherkin
Given the user visits the Clarion page
When the user scrolls to the FAQ section
Then 3 FAQ items are displayed
And questions include "Are your Templates responsive?", "Does it have all the plugin as mentioned?", "Can i use the these theme for my client?"
And each question can be toggled to show/hide the answer
```

### Scenario: Contact form renders and validates

```gherkin
Given the user visits the Clarion page
When the user scrolls to the contact section
Then a green-overlay background is displayed
And a heading "Send Us Message" is shown
And input fields for name and email are present
And a textarea for message is present
And a "Send Message" button is displayed
And submitting empty fields shows validation errors
```

### Scenario: Footer renders with columns and social links

```gherkin
Given the user visits the Clarion page
When the user scrolls to the footer
Then a 4-column footer layout is displayed
And columns are: Top Product, Navigation, Compare, Quick About
And social icons (Facebook, Twitter, Dribbble, Behance) are visible
And a copyright bar is shown at the bottom
And the copyright bar links to Component Dock
```

### Scenario: Responsive behavior

```gherkin
Given the user visits the Clarion page on a mobile viewport
Then the hamburger menu is visible and nav links are hidden
And the hero section stacks vertically
And the features grid collapses to fewer columns
And the footer columns stack vertically
```

## Verification checklist

- [ ] All 8 sections render in correct order (navbar → hero → video → about → features → stats/faq → contact → footer)
- [ ] Brand color #6cbb23 is used consistently for accents, buttons, overlays
- [ ] Poppins font loaded via Google Fonts
- [ ] All interactive elements (FAQ toggles, hamburger, form) work
- [ ] Form validation prevents empty submissions
- [ ] Responsive layout works on mobile/tablet/desktop
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] Placeholder images via picsum.photos
- [ ] Footer copyright includes Component Dock link
