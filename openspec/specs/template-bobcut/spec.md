# Template: Bobcut (Hair Salon)

## Purpose

Recreation of ColorLib **Akame** hair salon template as a React 19 + Vite + Tailwind CSS 4 + TypeScript app.

- **ColorLib source:** <https://colorlib.com/wp/template/akame/>
- **Live preview:** <https://preview.colorlib.com/theme/akame/>
- **New name:** `bobcut` (app folder: `apps/bobcut`, package: `@free-react-templates/bobcut`)
- **Category:** Hair Salon / Beauty

## Design Tokens

Extracted from `https://preview.colorlib.com/theme/akame/style.css`.

| Token | Value | Usage |
|---|---|---|
| Brand gold | `#bca858` | Primary accent — buttons, active states, hover highlights, CTA |
| Dark | `#252525` | Top header bar, button hover, dark backgrounds |
| Body text | `#6e6e6e` | Paragraphs, secondary text |
| Light gray bg | `#f6f9f9` / `#ebebeb` | Section alternating backgrounds (`.bg-gray`) |
| White | `#ffffff` | Main background, text on dark |
| Border | `#e5e5e5` | Separators, borders |
| Red accent | `#cb242e` | Minor accent |
| Blue accent | `#4b62b3` | Minor accent |
| Heading font | `Playfair Display`, serif | H1–H6, buttons |
| Body font | `Open Sans`, sans-serif | Paragraphs, nav, UI text |
| Button | min-width 150px, height 42px, 1px border, Playfair Display serif, gold `#bca858` fill + white text | `.akame-btn` |
| Section padding | `80px 0` / `80px` | Consistent vertical rhythm |
| Preloader | CSS spinner animation | Loading screen |

## Sections (top to bottom)

1. **Top Header Bar** — dark `#252525` background, white text: "Welcome to hair salon!" left; hours "Mon-Sat: 8.00 to 17.00" + phone right.
2. **Navigation** — white background, logo left, nav links: Home, Pages (dropdown), Portfolio, Services, About Us, Blog, Contact. Cart icon. Sticky on scroll.
3. **Hero / Welcome Carousel** — full-width background image carousel with overlay text: "We Care About Your Hair" heading + "About Us" button. Two slides (duplicated for carousel effect).
4. **About Us** — split layout: left = image (salon interior), right = heading "The House of Hair Salon & Spa" + paragraph text + blockquote about salon trends + "Read More" button. Left-aligned heading.
5. **Our Services** — centered heading "Our Services" + subtitle. 4-column grid: Coloring, Haircut, Hairstyle, Coloring — each with icon, title, description. Clean cards with icon above text.
6. **Why Choose Us** — gray `#ebebeb` bg. Split: left = background image with content overlay (heading "Why Choose Us" + paragraph + features/checkmarks), right = large image.
7. **Our Portfolio** — filter tabs (All, Hairstyle, etc.) centered. 4-column masonry-style grid of portfolio images with hover overlay. Items tagged: haircuts, dye, hairstyle, shave.
8. **Our Experts** — centered heading + description paragraph. 4-column grid: team member cards with photo, name, role (Hairdresser, Stylist, Hairstylist, Barber). Names: Mila Hartley, Teigan Duran, Tanya Ramsay, Donna Carr.
9. **Latest News / Blog** — centered heading + subtitle. 3-column grid: blog cards with image, title, date, comment count. Hair/beauty article titles.
10. **CTA / Book Appointment** — gray bg. Split: left = heading "Make Stilo Your Number One Choice" + paragraph + two buttons ("Book An Appointment", "Contact Us"), right = background image.
11. **Footer** — dark background. Columns: about text + social icons, opening times, contact info (phone, email, address), copyright line with "Colorlib" credit.

## Gherkin Requirements

### Feature: Bobcut Hair Salon Template

#### Scenario: Top Header Bar renders contact info
Given a user visits the page
Then a dark top bar displays "Welcome to hair salon!" on the left
And displays "Mon-Sat: 8.00 to 17.00" and phone number on the right

#### Scenario: Navigation displays all links
Given a user views the navigation
Then links for Home, Portfolio, Services, About Us, Blog, Contact are visible
And a logo is displayed on the left
And the navigation is sticky on scroll

#### Scenario: Hero section displays headline and CTA
Given a user sees the hero area
Then "We Care About Your Hair" heading is displayed
And an "About Us" button is visible below the heading
And the background is a full-width image carousel

#### Scenario: About Us section shows salon info
Given a user scrolls to the About section
Then a split layout shows an image on the left and text on the right
And the heading reads "The House of Hair Salon & Spa"
And a blockquote about salon trends is displayed
And a "Read More" button is visible

#### Scenario: Services section lists four services
Given a user views the Services section
Then "Our Services" heading is centered at the top
And four service cards are displayed: Coloring, Haircut, Hairstyle, Coloring
And each card has an icon, title, and description

#### Scenario: Why Choose Us section has split layout
Given a user sees the Why Choose Us section
Then the section has a light gray background
And a large image is shown alongside text content
And the heading reads "Why Choose Us"

#### Scenario: Portfolio section has filterable grid
Given a user views the Portfolio section
Then filter tabs are displayed centered above the grid
And a 4-column image grid is shown
And portfolio items have hover overlays

#### Scenario: Experts section shows team members
Given a user scrolls to the Experts section
Then the heading reads "Our Experts"
And four team member cards are displayed in a grid
And each card shows a photo, name, and role

#### Scenario: Blog section shows recent posts
Given a user views the Blog section
Then the heading reads "Latest News"
And three blog post cards are displayed
And each card has an image, title, date, and comment count

#### Scenario: CTA section prompts appointment booking
Given a user sees the CTA section
Then the heading reads "Make Stilo Your Number One Choice"
And a "Book An Appointment" button is visible
And a "Contact Us" button is visible

#### Scenario: Footer displays contact and hours
Given a user scrolls to the footer
Then opening hours are displayed
And contact info includes phone, email, and address
And a copyright line with "Component Dock" link is shown

## Verification Checklist

- [ ] All sections render in the correct order (11 sections)
- [ ] Design tokens applied: gold `#bca858`, dark `#252525`, Playfair Display + Open Sans
- [ ] Hero carousel (or static hero) with background image and overlay text
- [ ] About section: split layout with image + text + blockquote
- [ ] Services: 4-column grid with icons
- [ ] Why Choose Us: gray background split layout
- [ ] Portfolio: filter tabs + masonry grid with hover overlays
- [ ] Experts: 4 team member cards
- [ ] Blog: 3-column card grid
- [ ] CTA: split layout with two buttons
- [ ] Footer: columns with hours, contact, Component Dock link
- [ ] No ColorLib references in app code
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] `public/CNAME` = `bobcut.free.componentdock.com`
- [ ] `homepage` = `https://bobcut.free.componentdock.com`
- [ ] Uses placeholder images via `https://picsum.photos/seed/bobcut-<n>/<w>/<h>`
- [ ] Uses `lucide-react` for icons
- [ ] Uses Google Fonts link in `index.html` for Playfair Display + Open Sans
- [ ] All tests pass with 100% coverage
