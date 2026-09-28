# Template: SketchCraft (Personal Portfolio)

## Purpose

Recreation of ColorLib's **Calvin** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page application. A personal portfolio / digital product designer landing page with hero, about bar, services, portfolio gallery, about-me with skill bars, brand logos, testimonials, blog, and a CTA footer.

- Source: https://colorlib.com/wp/template/calvin/
- Live preview: https://preview.colorlib.com/theme/calvin/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/calvin-free-template.jpg

## Design tokens (extracted from preview CSS)

| Token | Value |
|---|---|
| Primary / accent | `#FF8553` (warm orange) |
| Secondary accent | `#ec703f` (darker orange, gradient stops) |
| Body background | `#FFFFFF` (white) |
| Text / headings | `#000000` (black) |
| Link / muted text | `#635c5c` (warm gray) |
| Section background alt | `#f7f7f7` (light gray) |
| Alert / warning bg | `#FFEFAE` (light yellow) |
| Alert text | `#670000` (dark red) |
| Body font | `"DM Sans", sans-serif` |
| Heading font | `"Roboto Condensed", sans-serif` |
| Button radius | `25px` (pill / rounded) |
| Card shadow | `0 10px 15px rgba(25,25,25,0.1)` |
| Progress bar | orange gradient `linear-gradient(to left, #FF8553, #ec703f, #FF8553)` |
| Avatar / brand circle | `border-radius: 50%` |

## Section order (from preview HTML)

1. **Header** — transparent sticky navbar, logo left, nav links (Home / Work / Service / Blog / Contact), "Let's Talk" CTA button right.
2. **Hero** — full-width slider area. Left: portrait image of the designer. Right: large heading "My name is Calvin, Digital Product Designer" + subtitle.
3. **About Info Bar** — horizontal info strip below hero. "Design For: Web & Mobile" | Phone | Email icon + address.
4. **Services** — "My Experties" heading, 2×2 grid of service cards. Each: icon + title + description + link text.
5. **Gallery** — "My Works" heading, 2×2 portfolio image grid with hover overlay labels. "More Work" button centered below.
6. **About Me + Skills** — left: "About Me" heading + two paragraphs + quote. Right: 3 animated progress bars (UI Design 60%, UX 89%, Illustration 95%).
7. **Brand logos** — horizontal auto-scrolling brand logo carousel (6 logos).
8. **Testimonials** — "Client Testimonial" heading, centered testimonial card carousel. Each: quote + author image + name + role.
9. **Blog** — "Latest News" heading, horizontal blog card carousel. Each: image + category badge + date/author + title link.
10. **Footer** — top CTA area: logo + blurb + social icons + "Let's Talk" button + "Download CV" button. Bottom: copyright + footer nav links (Home / Work / Service / Blog / Contact).

## Gherkin requirements

### Header
```gherkin
Scenario: Sticky transparent header renders navigation links
  Given the user loads the page
  When the header is visible
  Then it shows links for Home, Work, Service, Blog, and Contact
  And a "Let's Talk" button is visible on the right

Scenario: Header becomes solid on scroll
  Given the user has scrolled past the hero
  When the header is sticky
  Then the background transitions to opaque
```

### Hero
```gherkin
Scenario: Hero displays portrait and headline
  Given the user is on the homepage
  When the hero section is rendered
  Then a portrait image is displayed on the left
  And a heading with the designer name and role is displayed on the right
  And a subtitle line is shown below the heading
```

### About Info Bar
```gherkin
Scenario: Info bar shows contact details
  Given the user views the hero area
  When the about-info bar is visible
  Then it shows "Design For: Web & Mobile"
  And a phone number is displayed
  And an email address with icon is displayed
```

### Services
```gherkin
Scenario: Services section renders four service cards
  Given the user scrolls to the services section
  When the section renders
  Then the heading "My Experties" is displayed
  And four service cards are shown in a 2-column grid
  And each card has an icon, title, description, and link

Scenario: Service cards have consistent styling
  Given four service cards are rendered
  Then each card has a heading, paragraph, and link
  And icons are rendered from lucide-react
```

### Gallery
```gherkin
Scenario: Gallery shows four portfolio items
  Given the user scrolls to the gallery
  When "My Works" section renders
  Then four image cards are displayed in a 2-column grid
  And each card has a hover overlay with a category label

Scenario: More Work button is centered
  Given the gallery section is rendered
  When the user views the bottom of the gallery
  Then a "More Work" button is centered below the grid
```

### About Me + Skills
```gherkin
Scenario: About section shows text and progress bars
  Given the user scrolls to the about-me section
  When the section renders
  Then the heading "About Me" appears on the left
  And two paragraphs of bio text are shown
  And a quote block is displayed
  And three skill bars are shown on the right

Scenario: Skill bars animate to their target percentages
  Given the skill bars are in view
  When the section scrolls into the viewport
  Then each progress bar fills to its defined percentage
  And the skill name and percentage are labeled
```

### Brand Logos
```gherkin
Scenario: Brand logos carousel is rendered
  Given the user scrolls to the brand area
  When the carousel renders
  Then at least 6 brand logos are displayed
  And logos auto-scroll horizontally
```

### Testimonials
```gherkin
Scenario: Testimonial carousel displays quote cards
  Given the user scrolls to testimonials
  When the section renders
  Then the heading "Client Testimonial" is shown
  And a testimonial card is centered with a quote
  And an author photo, name, and role are displayed

Scenario: Testimonials rotate via carousel
  Given multiple testimonials exist
  When the carousel is active
  Then testimonials cycle through with a smooth transition
```

### Blog
```gherkin
Scenario: Blog section shows article cards
  Given the user scrolls to the blog section
  When the section renders
  Then the heading "Latest News" is shown
  And blog cards are displayed in a horizontal scroll
  And each card has an image, category badge, date, and title link
```

### Footer
```gherkin
Scenario: Footer renders CTA area and bottom bar
  Given the user scrolls to the footer
  When the footer renders
  Then a logo and blurb paragraph are shown
  And social media icon links are displayed
  And a "Let's Talk" button and "Download CV" button are shown
  And a bottom bar shows copyright and navigation links

Scenario: Footer contains Component Dock attribution
  Given the footer is rendered
  When the user looks at the footer
  Then it links to https://www.componentdock.com/ with the text "Component Dock"
```

## Verification checklist

- [ ] Header: transparent sticky, nav links, CTA button, solid-on-scroll
- [ ] Hero: portrait image left, heading right, subtitle
- [ ] About info bar: design-for, phone, email with icon
- [ ] Services: heading, 2x2 grid, 4 cards with icon/title/desc/link
- [ ] Gallery: heading, 2x2 grid, hover overlays, "More Work" button
- [ ] About Me: heading, paragraphs, quote, 3 skill progress bars
- [ ] Brand logos: carousel with 6+ logos, auto-scroll
- [ ] Testimonials: heading, centered card, quote + author, carousel
- [ ] Blog: heading, horizontal card scroll, image + badge + meta + title
- [ ] Footer: CTA area (logo, blurb, social, buttons), bottom bar (copyright, nav)
- [ ] Footer: links to componentdock.com
- [ ] Design tokens: #FF8553 accent, DM Sans body, Roboto Condensed headings, pill buttons
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
- [ ] Vite config includes `injectUiSource()`
