# Template: Snapview (Photography)

## Purpose

Recreation of the ColorLib **Bato** template as a React 19 + Vite + Tailwind 4 + TypeScript site.

- **Source:** https://colorlib.com/wp/template/bato/
- **Preview analyzed:** https://preview.colorlib.com/theme/bato/
- **New name:** `snapview` (apps/snapview, `@free-react-templates/snapview`)
- **Deploy target:** https://snapview.free.componentdock.com
- **Stack:** Vite latest, React 19, Tailwind CSS 4, TypeScript strict
- **Analysis date:** 2026-09-10

## Replication reference

### Preview DOM analysis

Sections extracted from `https://preview.colorlib.com/theme/bato/` (top to bottom):

1. **Side navigation panel** — Full-height left panel with search input, nav links (Home, Work, Blog, About, Contact), and a gallery thumbnail grid (4 images). Toggled by hamburger icon.
2. **Header/branding** — Top bar with logo "Bato" (Playfair Display, uppercase, wide letter-spacing) and hamburger toggle icon.
3. **Hero carousel** — Full-height hero split into 3/4 image area + 1/4 text panel. Three slides:
   - Slide 1: "Welcome" tag, "Photography is on it's way." headline, description, "View Galleries" CTA
   - Slide 2: "Photography" tag, "Capture interesting things." headline, description, "View Galleries" CTA
   - Slide 3: "Discover" tag, "Discover New Things" headline, description, "View Galleries" CTA
   - Each slide has a large slide number (01/03, 02/03, 03/03) at the bottom
4. **Footer** — (Not present in the single-page index; gallery, blog, about, contact are separate pages)

### Design tokens (extracted from style.css)

| Token                 | Value                                                                                 | Usage                                            |
| --------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------ |
| Font family (body)    | `"Karla", Arial, sans-serif`                                                          | Body text, navigation, descriptions              |
| Font family (display) | `"Playfair Display", Georgia, serif`                                                  | Logo, headings                                   |
| Primary accent        | `#F9CE00` (bright yellow)                                                             | Active states, hover accents, button backgrounds |
| Body text             | `#000` (black)                                                                        | All body text, nav links, headings               |
| Body background       | `#fff` (white)                                                                        | Page background                                  |
| Overlay color         | `rgba(0, 0, 0, 0.4)`                                                                  | Hero image dark overlay                          |
| Card/section bg       | `#fafafa`                                                                             | Light section backgrounds                        |
| Border/divider        | `#e6e6e6`                                                                             | Subtle separators                                |
| Muted text            | `#b7c2c2`                                                                             | Secondary text                                   |
| Button style          | `border: 1px solid #000; color: #000; letter-spacing: 7px; text-transform: uppercase` | CTA buttons ("View Galleries")                   |
| Button radius         | `0` (square/sharp)                                                                    | All buttons have no border-radius                |
| Logo styling          | `text-transform: uppercase; letter-spacing: 10px; font-weight: 700`                   | Brand logo                                       |
| Tag styling           | `letter-spacing: 7px; text-transform: uppercase; font-size: 13px`                     | Hero slide tags                                  |
| Slide number          | `font-size: 220px`                                                                    | Large hero slide counter                         |

### Visual design notes (from screenshot)

- Clean, minimal photography portfolio aesthetic.
- Black and white palette with yellow (#F9CE00) accent.
- Full-height hero with split layout: large image (3/4) + text panel (1/4).
- Large typography with wide letter-spacing on headings and tags.
- Sharp/square button design (no border-radius).
- Side navigation panel slides in from the left.
- Large slide numbers (01/03, 02/03, 03/03) as decorative element.
- Playfair Display serif font for the logo gives a premium/editorial feel.
- Karla sans-serif for body text — clean and readable.

## Gherkin requirements

### Feature: Snapview — Photography Template

#### Scenario: Header renders with logo and hamburger toggle

Given the page loads
Then a header is displayed at the top
And the header contains the logo "Snapview"
And a hamburger menu toggle icon is visible
And the logo uses Playfair Display font with wide letter-spacing

#### Scenario: Side navigation panel opens and closes

Given the user clicks the hamburger toggle
Then the side navigation panel slides open from the left
And the panel displays a search input field
And navigation links are shown: Home, Work, Blog, About, Contact
And a gallery thumbnail grid with 4 images is displayed
When the user clicks the toggle again
Then the side navigation panel closes

#### Scenario: Hero carousel displays three slides

Given the page loads
Then a full-height hero carousel is visible
And the first slide shows the tag "Welcome"
And the first slide shows the headline "Photography is on it's way."
And a description paragraph is displayed
And a "View Galleries" CTA button with arrow icon is shown
And the slide number "01/03" is displayed

#### Scenario: Hero carousel slides have distinct content

Given the hero carousel is visible
Then slide 2 shows the tag "Photography" and headline "Capture interesting things."
And slide 3 shows the tag "Discover" and headline "Discover New Things"
And each slide has a unique background image
And each slide shows its corresponding slide number

#### Scenario: Hero carousel navigates between slides

Given the hero carousel is visible
When the user navigates to the next slide
Then the next slide transitions into view
And the slide number updates accordingly

#### Scenario: View Galleries CTA links to gallery page

Given the hero section is visible
When the user clicks "View Galleries"
Then the user is navigated to the gallery/work page

#### Scenario: Responsive design adapts to mobile

Given the page is viewed on a mobile viewport
Then the side navigation collapses into a hamburger toggle
And the hero text panel becomes full-width below the image
And slide numbers are hidden on small screens
And all content remains readable and accessible

## Verification checklist

- [ ] Header: logo "Snapview" with Playfair Display, wide letter-spacing, hamburger toggle
- [ ] Side nav: slide-in panel with search, nav links, gallery thumbnails
- [ ] Hero carousel: 3 slides with split image/text layout
- [ ] Hero tags: "Welcome", "Photography", "Discover" with uppercase + letter-spacing
- [ ] Hero headlines: large serif headings per slide
- [ ] Hero CTA: "View Galleries" button with arrow, square/no-radius, black border
- [ ] Slide numbers: large decorative 01/03, 02/03, 03/03
- [ ] Carousel navigation: transitions between slides
- [ ] Responsive: mobile hamburger, stacked layout, hidden slide numbers
- [ ] Design tokens: Karla + Playfair Display fonts, #F9CE00 yellow accent, #000 black
- [ ] No ColorLib references in app code
- [ ] Placeholder images via picsum.photos
- [ ] Package name: @free-react-templates/snapview
- [ ] CNAME: snapview.free.componentdock.com
