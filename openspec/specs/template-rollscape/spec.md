# Template: Rollscape (Real Estate)

## Purpose

Recreation of ColorLib **Rolast** — a real estate property listing template.

- **Source**: https://colorlib.com/wp/template/rolast/
- **Preview**: https://preview.colorlib.com/theme/rolast/
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/rolast-free-template.jpg
- **Stack**: React 19 · Vite · Tailwind CSS 4 · TypeScript
- **New name**: `rollscape` (apps/rollscape, @free-react-templates/rollscape)

## Design Tokens

Extracted from the live preview CSS (`assets/css/style.css`):

| Token              | Value                  | Usage                                  |
| ------------------ | ---------------------- | -------------------------------------- |
| Brand green        | `#0FB45F`              | Buttons, accents, completed-cases bg   |
| Dark navy          | `#140C40`              | Footer background, headings           |
| Font family        | `"Prompt", sans-serif` | Global body + heading font             |
| Button radius      | `25px`                 | Pill-shaped buttons (.btn)             |
| Text gray          | `#646D77`              | Body text, descriptions                |
| Text dark          | `#140C40`              | Headings, strong text                  |
| Light gray bg      | `#f7f7f7`              | Section backgrounds, loading spinner   |
| Footer text        | `#C2C5DB`              | Footer paragraph and link text         |
| Footer link hover  | `#0FB45F`              | Footer link hover state                |
| Gold accent        | `#dca73a`              | Loading spinner accent                 |
| Section padding    | `40px` top/bottom      | `.section-padding40` for content areas |

## Section Structure (top to bottom)

1. **Navbar** — Sticky header with logo (left), nav links (Home, Property, About, Blog dropdown, Contact), phone number CTA (right). White background.
2. **Hero / Slider** — Full-width hero with background image, dark overlay. Headline "Find Your Dream Home", subtext "We Have Over Million Properties For You". Tab toggle (Buy Property / Rent Property) with search form (Location input, Property type select, Bedroom select, Search button).
3. **Property Cards** — Section heading "Searching for the Best Places?". 6 property cards in 3-column grid. Each card: image, title, location with pin icon, beds/baths count, price. Light background.
4. **Completed Cases** — Green (#0FB45F) full-width section. Left side: heading "Just browse away. It's all here.", description text, "Browse Property" button. Right side: image carousel (2 images).
5. **How It Works** — 4-step process with numbered circle icons. Steps: Choose a category, Find real estate, Take the keys, Live happy. Centered layout, light background.
6. **Team Agents** — "Meet Our Agents" heading. Carousel of agent cards with photo, social overlay (Facebook, Twitter, Globe), name, title. 4-5 agents.
7. **Location Gallery** — Full-width image carousel with location overlay labels (London, Texas, New York, Tokyo, Sidney) and property counts.
8. **Footer** — Dark navy (#140C40) background. 4-column: Logo + description + social icons (Twitter, Facebook, Pinterest), About links, Services links, Newsletter signup (email input + Subscribe button).
9. **Footer Bottom** — Copyright line, dark background.

## Gherkin Requirements

### Scenario: Navbar displays logo and navigation links
- Given the user visits the homepage
- Then the navbar shows a logo on the left
- And navigation links: Home, Property, About, Blog, Contact
- And a phone number CTA on the right
- And the navbar is sticky on scroll

### Scenario: Hero section shows property search
- Given the user views the hero section
- Then the headline reads "Find Your Dream Home"
- And subtext reads "We Have Over Million Properties For You"
- And there are two tabs: "Buy Property" (active) and "Rent Property"
- And the search form has Location input, Property type dropdown, Bedroom dropdown, Search button
- And switching tabs shows an identical search form

### Scenario: Property cards display listing information
- Given the user scrolls to the property section
- Then the heading reads "Searching for the Best Places?"
- And 6 property cards are shown in a 3-column grid
- And each card has an image, title, location with pin icon, beds/baths info, and price
- And placeholder images are used (picsum.photos)

### Scenario: Completed cases section has green background
- Given the user views the completed cases section
- Then the background is brand green (#0FB45F)
- And the left side shows heading "Just browse away. It's all here."
- And description text about browsing properties
- And a "Browse Property" pill button
- And the right side shows an image carousel

### Scenario: How it works steps are displayed
- Given the user views the how-it-works section
- Then 4 numbered steps are shown: Choose a category, Find real estate, Take the keys, Live happy
- And each step has a circular numbered icon above
- And each step has a short description below

### Scenario: Team agents carousel shows agent profiles
- Given the user views the team section
- Then the heading reads "Meet Our Agents"
- And agent cards are shown in a horizontal carousel
- And each agent card has a photo, social media overlay, name, and title
- And social links include Facebook, Twitter, and Globe icons

### Scenario: Location gallery shows property locations
- Given the user views the location section
- Then a horizontal carousel of location images is displayed
- And each image has a location label overlay (e.g. London, Texas, New York)
- And each label shows a property count (e.g. "London (20)")

### Scenario: Footer has four columns with newsletter
- Given the user views the footer
- Then the background is dark navy (#140C40)
- And column 1 shows logo, description, and social icons
- And column 2 shows "About" links
- And column 3 shows "Services" links
- And column 4 shows "Newsletter" with email input and Subscribe button
- And the footer bottom shows copyright with "Component Dock" link

### Scenario: Footer links to Component Dock
- Given the user views the footer bottom
- Then there is a link to https://www.componentdock.com/
- And it reads "Component Dock"

## Verification Checklist

- [ ] Navbar: sticky, logo, 5 nav links, phone CTA, mobile hamburger
- [ ] Hero: background image, headline, subtext, Buy/Rent tabs, search form with 3 fields + button
- [ ] Property cards: 6 cards, 3-column grid, image + title + location + beds + price
- [ ] Completed cases: green bg, left text + button, right image carousel
- [ ] How it works: 4 numbered steps, centered, icons + text
- [ ] Team agents: carousel, agent cards with photo + social overlay + name + title
- [ ] Location gallery: image carousel with location labels + counts
- [ ] Footer: 4-column, dark bg, logo, About, Services, Newsletter signup
- [ ] Footer bottom: copyright with Component Dock link
- [ ] Responsive: all sections adapt to mobile/tablet
- [ ] No ColorLib references in app code (only in spec and TEMPLATES.md)
- [ ] All placeholder images via picsum.photos with deterministic seeds
- [ ] Font loaded via Google Fonts link (Prompt)
- [ ] 100% test coverage
