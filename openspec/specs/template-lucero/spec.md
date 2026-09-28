# Template: Lucero (Personal Portfolio)

## Purpose

Recreation of ColorLib's **Calvin** personal portfolio template.
- **Source:** https://colorlib.com/wp/template/calvin/
- **Preview:** https://preview.colorlib.com/theme/calvin/
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **New name:** `lucero` (apps/lucero, @free-react-templates/lucero)
- **Deploy:** https://lucero.free.componentdock.com

A single-page personal portfolio for a digital product designer, featuring a
split hero with portrait, about info bar, services grid, portfolio gallery,
skill bars, brand carousel, testimonials, blog, dark CTA, and footer.

## Design tokens

Extracted from Calvin's live preview CSS (`assets/css/style.css`):

| Token | Value | Notes |
|-------|-------|-------|
| Brand primary | `#FF8553` | Orange-coral, used for buttons, links, accents |
| Brand hover | `#ec703f` | Darker orange for button gradient |
| Button gradient | `linear-gradient(to left, #FF8553, #ec703f, #FF8553)` | `.btn` background-image |
| CTA dark bg | `#010a27` | Near-black, used for footer CTA section |
| Heading font | Roboto Condensed (300, 400, 700) | All h1–h6 |
| Body font | DM Sans (500, 700) | Body text, paragraphs |
| Body text color | `#000000` | Headings and paragraphs |
| Link color | `#635c5c` | Default anchor color |
| Button radius | `25px` | `.btn` border-radius |
| Border-btn radius | `30px` | `.border-btn` border-radius (outline buttons) |
| Section padding | `120px` top/bottom (`.section-padding`) | Standard section spacing |
| White bg | `#fff` / `#FFFBF9` | Page background |
| Light bg | `#F8F8F8` / `#f7f7f7` | Alternate section backgrounds |

### Visual design (from preview + screenshot)

- Clean, modern personal portfolio with large portrait image in hero
- Split hero layout: image left (4 cols), text right (8 cols)
- Transparent sticky header with logo, nav, and outline "Let's Talk" button
- About info bar below hero: 3 items (Design For, Phone, Email) in a row
- Services section: 2×2 grid with icon + title + description + link
- Portfolio gallery: 2×2 grid with overlay hover effect
- About Me: text left, animated skill bars right (60%, 89%, 95%)
- Brand logo carousel (horizontal scroll)
- Testimonial carousel with avatar, name, role, and quote
- Blog section: 2-column carousel of blog posts with category badges
- Dark CTA section: logo, description, social icons, "Let's Talk" + "Download CV"
- Footer: copyright line + inline nav links
- Orange (#FF8553) is the dominant accent color throughout

## Gherkin requirements

### Feature: Lucero personal portfolio template

#### Scenario: Hero section renders correctly
  Given the user visits the Lucero template
  Then a split hero section is visible
  And a portrait/person image is displayed on the left
  And the heading reads "My name is Lucero. Digital Product Designer"
  And a subtitle text is shown below the heading
  And the header contains a transparent sticky navbar with logo, nav links, and a "Let's Talk" outline button

#### Scenario: About info bar displays contact details
  Given the user scrolls past the hero
  Then an about info bar is visible below the hero
  And it contains three info items: specialization, phone number, and email
  And each item has a label and a value

#### Scenario: Services section shows 4 service cards
  Given the user scrolls to the services section
  Then a section heading "My Expertise" is visible
  And 4 service cards are displayed in a 2×2 grid
  And each card has an icon, a title, a description, and a link

#### Scenario: Gallery section shows portfolio items
  Given the user scrolls to the gallery section
  Then a section heading "My Works" is visible
  And 4 portfolio images are displayed in a 2×2 grid
  And each image has an overlay with a title on hover
  And a "More Work" button is shown below the grid

#### Scenario: About Me section with skill bars
  Given the user scrolls to the about section
  Then a heading "About Me" is visible
  And descriptive text is shown on the left
  And 3 animated skill bars are displayed on the right
  And each skill bar has a label and a percentage value

#### Scenario: Brand carousel displays logos
  Given the user scrolls below the about section
  Then a brand carousel is visible
  And multiple brand logos are displayed in a horizontal scrolling row

#### Scenario: Testimonials section
  Given the user scrolls to the testimonials section
  Then a heading "Client Testimonial" is visible
  And a testimonial quote is displayed
  And the testimonial includes an avatar image, name, and role

#### Scenario: Blog section shows posts
  Given the user scrolls to the blog section
  Then a heading "Latest News" is visible
  And blog post cards are displayed in a carousel
  And each card has an image, category badge, date, author, and title

#### Scenario: CTA section with dark background
  Given the user scrolls to the CTA section
  Then a dark background section is visible
  And it contains a logo, description text, and social media icons
  And a "Let's Talk" gradient button is displayed
  And a "Download CV" outline button is displayed

#### Scenario: Footer with navigation
  Given the user scrolls to the footer
  Then a copyright line is visible
  And footer navigation links are displayed
  And a link to Component Dock is included

#### Scenario: Responsive layout
  Given the user views the template on a mobile device
  Then the header collapses to a hamburger menu
  And sections stack vertically
  And the service grid becomes single-column
  And the gallery grid becomes single-column

#### Scenario: Navigation links
  Given the user clicks a nav link in the header
  Then the page scrolls to the corresponding section

## Verification checklist

- [ ] Hero: split layout with portrait image + heading + subtitle
- [ ] Header: transparent sticky with logo, nav links (Home, Work, Service, Blog, Contact), outline "Let's Talk" button
- [ ] About info bar: 3 items (specialization, phone, email) below hero
- [ ] Services: 2×2 grid, 4 cards with icon/title/description/link
- [ ] Gallery: 2×2 grid, 4 images with hover overlay, "More Work" button
- [ ] About Me: text left, 3 skill bars right with percentages
- [ ] Brand carousel: horizontal scrolling brand logos
- [ ] Testimonials: carousel with quote, avatar, name, role
- [ ] Blog: carousel of blog cards with image/category/date/author/title
- [ ] CTA: dark section with logo, description, social icons, two buttons
- [ ] Footer: copyright + nav links + Component Dock link
- [ ] Colors: primary #FF8553, gradient buttons, dark CTA bg #010a27
- [ ] Fonts: Roboto Condensed headings, DM Sans body
- [ ] Button styles: gradient fill (25px radius), outline (30px radius)
- [ ] Responsive: hamburger menu, stacked layouts on mobile
- [ ] No ColorLib references in app code
- [ ] Placeholder images via picsum.photos
- [ ] Footer links to componentdock.com
