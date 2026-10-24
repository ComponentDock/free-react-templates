# Template: PropBox (Real Estate)
<!-- prep-status: shipped-as=propvale -->
> **SHIPPED-UNDER** — the ColorLib `real-estate-2` design this prep describes already
> ships as `apps/propvale` (<https://propvale.free.componentdock.com>).
> Do not scaffold `apps/propbox`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-propvale/spec.md`.

## Purpose

Recreation of ColorLib "Real Estate 2" — a real estate investor website template
with property search, listings, and agent features.
- Source: https://colorlib.com/wp/template/real-estate-2/
- Preview: https://preview.colorlib.com/#real-estate-2 (WordPress-only; no standalone HTML preview)
- Stack: React 19 · Vite · Tailwind CSS 4 · TypeScript

## Replication reference

- **Preview DOM**: Unreachable (404 at `/theme/real-estate-2/`). Template is WordPress-only.
- **Screenshot**: Analyzed from `https://colorlib.com/wp/wp-content/uploads/sites/2/realestate2-free-template.jpg` (1200x946).
- **ColorLib page description**: "Sticky navigation, drop-down menu, hover effect, accordions, and testimonials slider. Contact page with working form and Google Maps. Blog section."
- **Category**: Real Estate (property listing / investor template)

## Design tokens

Extracted from the ColorLib preview screenshot and page HTML/CSS:

| Token             | Value                     | Notes                                              |
| ----------------- | ------------------------- | -------------------------------------------------- |
| Primary           | `#F77F00`                 | Warm orange — CTA buttons, accents, price slider   |
| Dark navy         | `#1B2A4A`                 | Top bar background, hero overlay tint              |
| White             | `#FFFFFF`                 | Navbar background, text on dark, card backgrounds  |
| Body text         | `#333333`                 | Primary body text color                            |
| Light gray bg     | `#F8F9FA`                 | Alternating section backgrounds                    |
| Overlay           | `rgba(27,42,74,0.7)`     | Hero image dark navy overlay                       |
| Button radius     | `4px`                     | Slightly rounded rectangular CTA buttons            |
| Font family       | `"Poppins"`               | Sans-serif; headings + body (inferred from WP CSS)  |
| Nav link color    | `#1B2A4A`                 | Dark navy text on white navbar                     |
| Orange accent     | `#F77F00`                 | Also used on "Add Property" button, search icon     |
| Surface (measured) | `#001d38` | paints it ×22 — `background` on `.header-area .header-top_area`; style.css (183,542 B, sha256 c44673d7754f) · <https://preview.colorlib.com/theme/realestate2/> |

## Section structure (from screenshot analysis)

| #   | Section                       | Background                        | Key elements                                                    |
| --- | ----------------------------- | --------------------------------- | --------------------------------------------------------------- |
| 1   | Top bar                       | Dark navy (`#1B2A4A`)             | Welcome text, email, phone, social icons (LinkedIn, FB, G+)     |
| 2   | Navbar                        | White                             | "Real Estate." logo, nav links (Home, Pages▾, Property, Blog▾, Contact), search icon, "Add Property" orange CTA |
| 3   | Hero                          | Full-width house image + overlay  | Large white heading "Find Your Best Property", subtitle, search form with dropdowns (Location, Property type, Price slider, Bed Room, Bath Room), orange search button |
| 4   | Featured properties           | White                             | Property cards grid (image, price, address, beds/bath/area)      |
| 5   | About section                 | Light gray bg                     | Company info with image, text, counters or features              |
| 6   | Categories / property types   | White                             | Category cards with icons and counts                             |
| 7   | Latest properties             | Light gray bg                     | Property listing cards                                           |
| 8   | Testimonials                  | White or dark bg                  | Testimonial slider with photos, names, roles                     |
| 9   | Team / agents                 | White                             | Agent cards with photo, name, role, social links                 |
| 10  | Blog / news                   | Light gray bg                     | Blog post cards (image, date, title, excerpt)                    |
| 11  | Newsletter                    | Dark navy bg                      | Subscribe form with email input + CTA button                     |
| 12  | Footer                        | Dark navy (`#1B2A4A`)             | Company info, nav links, social icons, copyright                 |

## Requirements

### Top bar

Feature: Top information bar

#### Scenario: Displays contact information

- **GIVEN** the top bar is rendered
- **THEN** a welcome message is visible
- **AND** an email address is shown with an icon
- **AND** a phone number is shown with an icon
- **AND** social media icons are displayed (LinkedIn, Facebook, Google+)

#### Scenario: Top bar has dark navy background

- **GIVEN** the top bar is rendered
- **THEN** the background color is dark navy (#1B2A4A)
- **AND** text is white or light colored

### Navbar

Feature: Navigation bar

#### Scenario: Logo and navigation links are visible

- **GIVEN** the navbar is rendered
- **THEN** the logo text "Real Estate." is displayed on the left
- **AND** navigation links are visible: Home, Pages, Property, Blog, Contact
- **AND** a search icon is shown
- **AND** an "Add Property" button is visible

#### Scenario: Add Property button is orange

- **GIVEN** the navbar is rendered
- **THEN** the "Add Property" button has an orange background (#F77F00)
- **AND** the button text is white
- **AND** the button has rounded corners

#### Scenario: Navigation is sticky on scroll

- **GIVEN** the user scrolls down the page
- **THEN** the navbar remains fixed at the top of the viewport

### Hero section

Feature: Hero section with property search

#### Scenario: Hero displays heading and subtitle

- **GIVEN** the hero section is loaded
- **THEN** a large heading "Find Your Best Property" is visible in white
- **AND** a subtitle text is displayed below the heading

#### Scenario: Hero has background image with dark overlay

- **GIVEN** the hero section is loaded
- **THEN** a full-width background image of a house is shown
- **AND** a dark navy overlay is applied over the image

#### Scenario: Search form with filter dropdowns

- **GIVEN** the hero section is loaded
- **THEN** a search form is visible with fields:
| Field         | Type     |
| Location      | Dropdown |
| Property type | Dropdown |
| Price ($)     | Slider   |
| Bed Room      | Dropdown |
| Bath Room     | Dropdown |
- **AND** an orange search button is shown at the end of the form

### Featured properties

Feature: Featured property listings

#### Scenario: Property cards are displayed in a grid

- **GIVEN** the featured properties section is loaded
- **THEN** property cards are shown in a responsive grid
- **AND** each card has a property image
- **AND** each card shows the price
- **AND** each card shows the address/location
- **AND** each card shows bed, bath, and area counts

#### Scenario: Property cards have hover effect

- **GIVEN** a property card is displayed
- **WHEN** the user hovers over the card
- **THEN** a subtle hover effect is applied (shadow or scale)

### About section

Feature: About / company section

#### Scenario: Company information is displayed

- **GIVEN** the about section is loaded
- **THEN** a section heading is visible
- **AND** descriptive text about the company is shown
- **AND** an image or illustration accompanies the text

#### Scenario: Alternating background

- **GIVEN** the about section is loaded
- **THEN** the section has a light gray background (#F8F9FA)

### Categories

Feature: Property categories

#### Scenario: Category cards are shown

- **GIVEN** the categories section is loaded
- **THEN** category cards are displayed with icons
- **AND** each card shows the category name and property count
- **AND** categories include types like House, Apartment, Villa, Office

### Testimonials

Feature: Client testimonials

#### Scenario: Testimonial slider is displayed

- **GIVEN** the testimonials section is loaded
- **THEN** testimonial cards are shown in a slider/carousel
- **AND** each card has a client photo
- **AND** each card shows the client name and role
- **AND** each card has testimonial text

#### Scenario: Slider supports navigation

- **GIVEN** the testimonials slider is loaded
- **THEN** navigation arrows or dots are visible
- **AND** clicking arrows advances to the next/previous testimonial

### Team / agents

Feature: Agent team section

#### Scenario: Agent cards are displayed

- **GIVEN** the team section is loaded
- **THEN** agent cards are shown in a grid
- **AND** each card has an agent photo
- **AND** each card shows the agent name and role
- **AND** social media links are shown on each card

### Blog

Feature: Blog / news section

#### Scenario: Blog post cards are displayed

- **GIVEN** the blog section is loaded
- **THEN** blog post cards are shown in a grid
- **AND** each card has a post image
- **AND** each card shows the publication date
- **AND** each card shows the post title and excerpt
- **AND** a "Read More" link is shown on each card

### Newsletter

Feature: Newsletter subscription

#### Scenario: Newsletter form is visible

- **GIVEN** the newsletter section is loaded
- **THEN** a heading invites users to subscribe
- **AND** an email input field is shown
- **AND** a subscription button is displayed

#### Scenario: Newsletter has dark background

- **GIVEN** the newsletter section is loaded
- **THEN** the background is dark navy (#1B2A4A)
- **AND** text and form elements are light/white

### Footer

Feature: Site footer

#### Scenario: Footer displays company info and links

- **GIVEN** the footer is rendered
- **THEN** company information is shown
- **AND** navigation links are organized in columns
- **AND** social media icons are displayed
- **AND** a copyright notice is shown at the bottom

#### Scenario: Footer links to Component Dock

- **GIVEN** the footer is rendered
- **THEN** a link to "https://www.componentdock.com/" is present
- **AND** it is branded as "Component Dock"

## Verification checklist

- [ ] Top bar renders with dark navy background, contact info, social icons
- [ ] Navbar has white background, logo, nav links with dropdowns, search icon, orange CTA
- [ ] Hero has full-width background image with dark overlay
- [ ] Hero heading and subtitle are visible in white text
- [ ] Search form has all 5 filter fields (Location, Property type, Price, Bed, Bath)
- [ ] Search button is orange with search icon
- [ ] Featured properties grid shows property cards with all details
- [ ] Property cards have hover effects
- [ ] About section has alternating light background
- [ ] Categories section shows property type cards with icons and counts
- [ ] Testimonials slider works with navigation controls
- [ ] Team section shows agent cards with photos and social links
- [ ] Blog section shows post cards with images and excerpts
- [ ] Newsletter section has dark background with subscribe form
- [ ] Footer has dark background with company info, links, social icons
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] `public/CNAME` contains `propbox.free.componentdock.com`
- [ ] `package.json` homepage is `https://propbox.free.componentdock.com`

<!-- live-palette-unverified:start -->
**TOKEN-UNVERIFIED (2026-10-23)** — the demo `https://preview.colorlib.com/theme/realestate2/` paints no counterpart within 12 RGB units of these claims (the re-value threshold). Each line names the nearest painted colour and its RGB distance: the claim is a screenshot sample, **not** a measured value — build from the sheet, not this list:
- `#f77f00` — nearest `#fd7e14` (d=21)
- `#1b2a4a` — nearest `#122b40` (d=13)
<!-- live-palette-unverified:end -->
