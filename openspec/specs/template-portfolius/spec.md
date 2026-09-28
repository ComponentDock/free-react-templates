# Template: Portfolius (Personal Portfolio / CV)

## Purpose

Recreation of the ColorLib "Clyde" personal portfolio/resume template.

- **Source:** [ColorLib Clyde](https://colorlib.com/wp/template/clyde/)
- **Preview:** https://preview.colorlib.com/theme/clyde/
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

A personal portfolio / CV template for creative professionals (UI/UX designers, developers).
Features a hero with portrait, stats counters, about section with personal details,
skill progress circles, service cards, project gallery, testimonial carousel, blog cards,
hire-me CTA, and contact form with info sidebar.

## Design tokens

Extracted from the live preview stylesheet (`css/style.css`) and screenshot analysis.

| Token            | Value                    | Notes                                         |
| ---------------- | ------------------------ | --------------------------------------------- |
| Brand / accent   | `#b1b493` (olive/sage)  | Hire-me section bg, nav active, accent color  |
| Primary          | `#007bff` (Bootstrap blue)| Progress bars, borders (secondary accent)    |
| Background       | `#ffffff` (white)        | Main sections                                 |
| Background alt   | `#f7f7f7` (light gray)  | `bg-light` alternating sections               |
| Text dark        | `#000000`               | Headings, strong text                         |
| Text body        | `#212529` / `#495057`   | Body text, secondary text                     |
| Text muted       | `#6c757d`               | Captions, meta info                           |
| Text light       | `#ffffff`               | Text on dark/brand backgrounds                |
| Font family      | `"Poppins", Arial, sans-serif` | Loaded from Google Fonts (or fallback)  |
| Button primary   | Olive `#b1b493` bg, white text, no radius (square/flat) | |
| Button outline   | Olive `#b1b493` border, transparent bg | "Download CV" CTA                |
| Button shape     | Flat / no border-radius  | Rounded-lg on cards only                      |
| Card shadows     | `shadow` utility         | Service cards, skill cards, project images    |
| Section padding  | Standard Tailwind py/py-lg | Alternating white/light gray backgrounds   |

## Visual design notes (from screenshot)

- Clean, professional white background with olive-green (#b1b493) accents.
- Dark navbar (bg-dark) with transparent-to-solid scroll behavior.
- Hero: full-width slider, portrait image on right (~60% width), text on left.
  "Clyde" name highlighted in olive green. Two CTA buttons: "Hire me" (solid) and "Download CV" (outline).
- Stats bar: 4-column grid with olive circular icons (flaticon) + count + label, on light gray bg.
- About: 2-column layout, portrait on left with overlay, personal info list on right.
  Below: interest icons row (Music, Travel, Movie, Sports).
- Skills: 3-column grid of white cards with circular progress bars (CSS-based), each showing percentage + weekly/monthly deltas.
- Services: 2 rows of 4 white cards each, olive circular icon at top, title + description.
- Hire Me: olive green (#b1b493) full-width banner with white text, portrait image on right, "Contact me" white button.
- Projects: 4-column image grid with dark overlay + hover text (project title + category).
- Testimonials: olive green (#b1b493 / bg-primary) full-width section, carousel of quote cards with avatar + name + position.
- Blog: 3-column cards, image top + meta (date, author, comments) + title + excerpt.
- Contact: 2-column, contact form (name, email, subject, message, "Send Message" button) on left, contact info icons on right.
- Footer: 4-column layout (about, links, services, contact info) + social icons (Twitter, Facebook, Instagram), dark bg.
- Copyright bar at very bottom.

## Gherkin requirements

### Navbar

```gherkin
Scenario: Navbar renders with brand and navigation links
  Given the page loads
  Then a dark navbar is visible at the top
  And the brand text "Portfolio" (renamed from "Clyde") is displayed on the left
  And navigation links are visible: Home, About, Skills, Services, Projects, Blog, Contact
  And the navbar becomes solid on scroll

Scenario: Navbar brand links to top of page
  Given the user scrolls down
  When the user clicks the brand text
  Then the page scrolls to the top
```

### Hero Section

```gherkin
Scenario: Hero displays headline and CTAs
  Given the page loads
  Then a hero section is visible with a background portrait image on the right
  And a subtitle text "We Design & Build Brands" is shown
  And a headline "Hi, I am Portfolius This is my favorite work." is displayed
  And two CTA buttons are visible: "Hire me" (solid) and "Download CV" (outline)

Scenario: Hero CTA buttons are interactive
  Given the hero section is visible
  When the user clicks "Hire me"
  Then the page scrolls to the contact section
  When the user clicks "Download CV"
  Then a download action is triggered
```

### Stats Counter

```gherkin
Scenario: Stats counter displays 4 metrics
  Given the page loads
  Then a stats bar section is visible on a light gray background
  And 4 stat items are displayed in a row:
    | Icon       | Number | Label            |
    | Suitcase   | 750    | Project Complete |
    | Loyalty    | 568    | Happy Clients    |
    | Coffee     | 478    | Cups of Coffee   |
    | Calendar   | 780    | Years Experienced|

Scenario: Stats animate on scroll into view
  Given the stats section is below the viewport
  When the user scrolls to the stats section
  Then the numbers count up from 0 to their target values
```

### About Section

```gherkin
Scenario: About section displays personal info
  Given the page loads
  Then an "About Me" section is visible
  And a portrait image is displayed on the left
  And personal info is listed on the right:
    | Field         | Value                          |
    | Name          | Portfolius Creative            |
    | Date of birth | January 01, 1990               |
    | Address       | San Francisco CA 97987 USA     |
    | Zip code      | 1000                           |
    | Email         | hello@portfolius.dev           |
    | Phone         | +1-2234-5678-9-0               |

Scenario: About section shows interests
  Given the about section is visible
  Then an interests row is displayed with icons:
    | Interest | Icon     |
    | Music    | Headphones |
    | Travel   | Suitcases  |
    | Movie    | Video      |
    | Sports   | Football   |
```

### Skills Section

```gherkin
Scenario: Skills section displays progress circles
  Given the page loads
  Then a "My Skills" section is visible on a light gray background
  And 3 skill cards are displayed in a row:
    | Skill  | Percentage |
    | CSS    | 95%        |
    | HTML   | 98%        |
    | jQuery | 68%        |

Scenario: Each skill card shows weekly and monthly comparison
  Given the skills section is visible
  Then each skill card has "Last week" and "Last month" sub-metrics
```

### Services Section

```gherkin
Scenario: Services section displays 8 service cards
  Given the page loads
  Then a services section is visible
  And 8 service cards are displayed in 2 rows of 4:
    | Service          |
    | Web Design       |
    | Web Application  |
    | Web Development  |
    | Banner Design    |
    | Branding         |
    | (4 more services)|

Scenario: Each service card has icon, title, and description
  Given the services section is visible
  Then each service card shows an olive circular icon, a title, and a short description
```

### Hire Me Section

```gherkin
Scenario: Hire me banner is displayed
  Given the page loads
  Then a full-width olive green (#b1b493) banner is visible
  And the text "Have a project on your mind." is displayed in white
  And a portrait image is shown on the right side
  And a "Contact me" white button is visible

Scenario: Contact me button scrolls to contact
  Given the hire-me section is visible
  When the user clicks "Contact me"
  Then the page scrolls to the contact section
```

### Projects Section

```gherkin
Scenario: Projects grid displays 8 project images
  Given the page loads
  Then a "Our Projects" section is visible
  And 8 project images are displayed in a 4-column grid
  And each project has a dark overlay with title and category on hover

Scenario: Projects respond to hover
  Given the projects section is visible
  When the user hovers over a project card
  Then a dark overlay appears with project title and "Web Design" category label
```

### Testimonials Section

```gherkin
Scenario: Testimonials carousel displays quotes
  Given the page loads
  Then an olive green (#b1b493) testimonials section is visible
  And a carousel of testimonial cards is displayed
  And each card shows a quote, avatar image, name, and position

Scenario: Testimonials carousel auto-scrolls
  Given the testimonials section is visible
  Then the carousel advances to the next testimonial automatically
```

### Blog Section

```gherkin
Scenario: Blog section displays 3 blog cards
  Given the page loads
  Then a "Our Blog" section is visible on a light gray background
  And 3 blog cards are displayed in a row
  And each card shows an image, date, author, comment count, title, and excerpt

Scenario: Blog cards are interactive
  Given the blog section is visible
  When the user clicks a blog card title
  Then the card link is followed
```

### Contact Section

```gherkin
Scenario: Contact section shows form and info
  Given the page loads
  Then a "Have a Project?" section is visible
  And a contact form with fields: Name, Email, Subject, Message is displayed
  And a "Send Message" button is visible
  And contact info is shown on the right:
    | Type    | Value                                       |
    | Address | 198 West 21th Street, Suite 721 New York   |
    | Phone   | +1235 2355 98                               |
    | Email   | info@yoursite.com                           |
    | Website | yoursite.com                                |

Scenario: Contact form validates inputs
  Given the contact form is visible
  When the user submits the form with empty fields
  Then validation errors are shown
```

### Footer

```gherkin
Scenario: Footer displays 4 columns
  Given the page loads
  Then a dark footer is visible
  And the footer contains 4 columns: About, Links, Services, Contact Info
  And social media icons (Twitter, Facebook, Instagram) are displayed
  And a copyright bar is shown at the bottom

Scenario: Footer contains Component Dock link
  Given the footer is visible
  Then a "Component Dock" link pointing to https://www.componentdock.com/ is present
```

## Section order (implementation sequence)

1. Navbar (dark, sticky, brand + 7 links)
2. Hero (full-width slider, portrait right, text left, 2 CTAs)
3. Stats Counter (4-column, animated count-up)
4. About (2-column: portrait left, info right + interests)
5. Skills (3-column circular progress cards)
6. Services (2x4 card grid with icons)
7. Hire Me (olive green banner, portrait, CTA)
8. Projects (4-column image grid with hover overlay)
9. Testimonials (olive green carousel section)
10. Blog (3-column cards on light bg)
11. Contact (form + info sidebar)
12. Footer (4-column dark, social icons, copyright)

## Verification checklist

- [ ] All 12 sections render in correct order
- [ ] Navbar scrolls to sections, becomes solid on scroll
- [ ] Hero slider shows 2 slides with different headlines
- [ ] Stats animate (count up) when scrolled into view
- [ ] About section shows personal info and interests
- [ ] Skills show circular progress bars at correct percentages
- [ ] Services show 8 cards in 2 rows of 4
- [ ] Hire-me banner has olive green background
- [ ] Projects show 8 images with hover overlays
- [ ] Testimonials carousel auto-plays
- [ ] Blog shows 3 cards with meta info
- [ ] Contact form validates and shows info sidebar
- [ ] Footer has 4 columns + Component Dock link
- [ ] All design tokens match: olive #b1b493 accent, Poppins font, flat buttons
- [ ] Responsive layout works (mobile, tablet, desktop)
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] `npm run test:coverage` passes at 100%
- [ ] `npm run build` succeeds
