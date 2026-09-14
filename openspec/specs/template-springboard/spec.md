# Template: Springboard (Business / Startup)

## Purpose

Recreation of ColorLib **Startupbusiness** template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page business website.

- **ColorLib source:** https://colorlib.com/wp/template/startupbusiness/
- **Preview URL:** https://preview.colorlib.com/theme/startupbusiness/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/startupbusiness-free-template.jpg
- **New name:** `springboard`
- **Deploy target:** https://springboard.free.componentdock.com
- **Package:** `@free-react-templates/springboard`

## Design tokens

Extracted from the live preview CSS (`assets/css/style.css`):

### Colors

| Token | Hex | Usage |
|-------|-----|-------|
| Brand primary | `#04dbec` | CTA buttons, links, accents, preloader, slider arrow |
| Brand secondary | `#1f2b7b` | Generic button primary, list markers, switches |
| Dark navy | `#0b1c39` | Headings, dark button background (`btn-black`) |
| Body text | `#506172` | Paragraph text |
| Muted text | `#999999` | Secondary text, form placeholders |
| Light muted | `#828bb2` | Secondary headings, muted accents |
| Lighter muted | `#415094` | Generic buttons default, table headers |
| Background white | `#fff` | Main section backgrounds |
| Background off-white | `#f9f9ff` | Alternate section backgrounds |
| Background card | `#fbf9ff` | Blog sidebar, author card |
| Border light | `#f0e9ff` | Form borders, dividers |
| Slider dark | `#010E21` | Sticky header background |
| Accent lighter | `#4cd3e3` | Success button, confirm-switch |

### Typography

| Element | Font | Weight | Size |
|---------|------|--------|------|
| Headings (h1-h6) | Josefin Sans | 500 | 60px (hero), 35px (section) |
| Body text | Muli | 400 | 16px, line-height 30px |
| Hero title | Josefin Sans | 700 | 60px, color #fff |
| Hero subtitle | Muli | 400 | 16px, color #a6b3c6 |
| Button text | Josefin Sans | 400 | 14px, letter-spacing 3px, uppercase |

- Google Fonts import: `Josefin Sans:wght@200-700` + `Muli:wght@200-900`

### Button styles

- Primary CTA (`.btn`): background `#04dbec`, color `#fff`, padding `27px 44px`, border-radius **0px** (square), no border, hover uses scaleX animation with `#07cad8`
- Square outline (`.boxed-btn`): background `#fff`, border `1px solid #04dbec`, color `#04dbec`, border-radius 0, letter-spacing 3px, uppercase, hover fills with `#04dbec`
- Dark button (`.btn-black`): background `#0b1416`, color `#fff`, padding `30px 36px`, with box-shadow

### Section backgrounds

- Hero: dark background image (`assets/img/hero/h1_hero.jpg`), overlay text
- Services: white (`#fff`) background
- WantToWork CTA: light/off-white with dark background image variant
- Portfolio: white with image grid overlay
- Testimonials: off-white (`#f9f9ff`) or white
- Blog: white background with card shadows
- Footer: dark (`#0b1c39` or similar dark navy)

## Section structure (in order)

1. **Navbar** — transparent/absolute header over hero, logo left, nav links center, "Contact Now" CTA button right. Becomes sticky on scroll with dark background.
2. **Hero Slider** — full-width background image, split layout: left side text (title + subtitle + arrow CTA), right side hero image. Slick carousel with 2+ slides.
3. **Services** — 3-column card grid, each card has icon + heading + description. White background.
4. **WantToWork / CTA** — split layout: left text "All startups need to make their business work" + subtitle, right side: dark "Contact Us Now" button.
5. **Portfolio Gallery** — image grid (1 large + 3 small), each with overlay title on hover. White background.
6. **Testimonials** — carousel with testimonial text + founder name/photo. Off-white background.
7. **Blog** — 3-column card grid, each with image, date tag, title, description. White background.
8. **Contact / Message** — "Send us a message" section with form (name, email, subject, message textarea) + submit button.
9. **Footer** — 4-column layout: about text + logo, quick links, services list, newsletter signup + social icons. Dark background. "Component Dock" attribution.

## Gherkin scenarios

### Navbar
```gherkin
Scenario: Navbar displays logo and navigation links
  Given the user loads the page
  Then the navbar shows a logo on the left
  And navigation links are centered
  And a "Contact Now" button appears on the right

Scenario: Navbar becomes sticky on scroll
  Given the user scrolls past the hero section
  Then the navbar becomes fixed at the top
  And the background changes to dark navy (#010E21)
```

### Hero
```gherkin
Scenario: Hero section displays headline and CTA
  Given the user views the hero section
  Then a large white headline is visible
  And a light gray subtitle appears below the headline
  And an arrow CTA icon links to the services section
  And the background shows a full-width image

Scenario: Hero has carousel navigation
  Given the hero carousel has multiple slides
  Then previous/next arrows are visible at the bottom-right
  And the next arrow has a cyan (#04dbec) background
```

### Services
```gherkin
Scenario: Services section shows three service cards
  Given the user scrolls to the services section
  Then 3 service cards are displayed in a row
  And each card has an icon, heading, and description
  And the section background is white

Scenario: Service cards are responsive
  Given the user views on a mobile viewport
  Then the service cards stack vertically
```

### WantToWork / CTA
```gherkin
Scenario: CTA section displays heading and button
  Given the user scrolls to the CTA section
  Then a heading "All startups need to make their business work" is visible
  And a paragraph with supporting text appears
  And a dark "Contact Us Now" button is positioned to the right

Scenario: CTA section has a dark background variant
  Given the user views the second CTA section
  Then a dark background image is displayed
  And the heading text is white
```

### Portfolio Gallery
```gherkin
Scenario: Portfolio shows image grid
  Given the user scrolls to the portfolio section
  Then one large image and three small images are displayed
  And each image has a hover overlay with the project title

Scenario: Portfolio images have hover effect
  Given the user hovers over a portfolio image
  Then an overlay appears with the project name
```

### Testimonials
```gherkin
Scenario: Testimonials carousel shows quotes
  Given the user scrolls to the testimonials section
  Then testimonial text is displayed in a carousel
  And each slide shows the founder name and photo
  And navigation dots or arrows are present
```

### Blog
```gherkin
Scenario: Blog section shows three post cards
  Given the user scrolls to the blog section
  Then 3 blog cards are displayed in a row
  And each card has an image, date, title, and description

Scenario: Blog cards respond to hover
  Given the user hovers over a blog card
  Then a shadow appears on the card
```

### Contact
```gherkin
Scenario: Contact section has a form
  Given the user scrolls to the contact section
  Then a form with name, email, subject, and message fields is visible
  And a submit button is present
  And form fields have light borders (#f0e9ff)

Scenario: Contact section displays contact info
  Given the user views the contact section
  Then contact details (phone, email) are shown alongside the form
```

### Footer
```gherkin
Scenario: Footer has four columns
  Given the user scrolls to the footer
  Then four columns are displayed: about, quick links, services, newsletter
  And social media icons are visible
  And a "Component Dock" attribution link is present at the bottom

Scenario: Footer is dark themed
  Given the user views the footer
  Then the background is dark navy
  And text color is light/white
```

## Verification checklist

- [ ] Section order matches original: Navbar → Hero → Services → CTA → Portfolio → Testimonials → Blog → Contact → Footer
- [ ] Brand color `#04dbec` used for CTAs, links, accents
- [ ] Font: Josefin Sans for headings, Muli for body (loaded via Google Fonts link in index.html)
- [ ] Buttons are square (no border-radius), matching original `.btn` style
- [ ] Hero has split layout with text left, image right
- [ ] Services section has 3 cards with icons
- [ ] Portfolio grid: 1 large + 3 small images with hover overlay
- [ ] Testimonials in carousel format
- [ ] Blog section with 3 cards
- [ ] Contact form with 4 fields
- [ ] Footer has 4 columns with Component Dock attribution
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] Placeholder images from picsum.photos with deterministic seeds
