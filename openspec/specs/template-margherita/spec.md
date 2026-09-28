# Template: Margherita (Restaurant / Pizza)

## Purpose

Recreation of ColorLib "Pizza" template.
Preview URL: https://preview.colorlib.com/theme/pizza/
Source: https://colorlib.com/wp/template/pizza/

Stack: React 19 · Vite · Tailwind CSS 4 · TypeScript.
Category: Restaurant / Food / Pizzeria single-page site.

## Design Tokens

Extracted from the ColorLib preview (`css/style.css`):

| Token | Value | Usage |
|---|---|---|
| Brand primary | `#78d5ef` | Buttons (`.btn-primary`), active nav link |
| Brand primary hover | `#56caeb` | Button hover state |
| Brand gold/accent | `#fac564` | Intro social bar background, menu nav links, services icon border, counter icon border |
| Dark background | `#000` / `#101315` | Intro info bar, overlay, footer background |
| Text on dark | `rgba(255,255,255,0.7)` | Footer text, links |
| Body text dark | `#5c3d03` | Services section body text |
| Heading color | `#000` | Services section headings |
| Font: body | `"Work Sans", sans-serif` | Body copy, nav, buttons |
| Font: script/display | `"Nothing You Could Do"` | Cursive subheading accents |
| Font: display | `"Josefin Sans"` | Accent headings |
| Font: heading | `"Poppins"` | Headings, h1–h3 |
| Button radius | `0` (sharp corners) | All primary and white outline buttons |
| Button style | Solid fill (primary) or white outline | Order Now, View Menu, Add to cart |
| Menu item image radius | `50%` (circular) | `.menu-img` in menu tab section |
| Overlay opacity | `0` for services pattern; black overlay for hero/footer/appointment | Background image overlays |
| Hero slider height | `750px` | Full-width owl-carousel slider |

### Color Palette Summary

- Primary: `#78d5ef` (sky blue) — CTAs, active states
- Accent: `#fac564` (warm gold) — social bar, menu links, decorative borders
- Dark: `#000` / `#101315` — intro bar, footer, overlays
- Body text: `#5c3d03` (dark brown) on services; white on dark sections
- White: `#fff` — button outlines, footer widget headings

## Section Order (from preview HTML)

1. **Navbar** — Dark background, logo "Pizza / Delicious" with pizza icon, nav links: Home, Menu, Services, Blog, About, Contact
2. **Hero Slider** — Full-width owl-carousel, 3 slides with background images, overlay, text ("Delicious / Italian Cuizine", "Crunchy / Italian Pizza", "Welcome / We cooked your desired Pizza Recipe"), primary + white-outline CTA buttons
3. **Intro Bar** — Two-part flex: left black bar (phone, address, hours with icons) + right gold social bar (Twitter, Facebook, Instagram icons)
4. **About** — Split 50/50: left half is background image, right half is heading + paragraph ("Welcome to Pizza A Restaurant")
5. **Services** — Dark pattern background (`food.png` repeat), 3 columns: icon circle (100px, gold border) + heading + description. Items: Healthy Foods, Fastest Delivery, Original Recipes
6. **Hot Pizza Meals** — White section, centered heading, 6 pizza items in 3-column grid with circular food images, name, description, price, Order button
7. **Gallery** — Full-width 4-column image grid with search icon overlay on hover
8. **Counter** — Dark background image section, 4 stat counters with gold-bordered icon circles: Years of Experience, Number of Orders, Happy Customers, Staff Members
9. **Menu** — Split layout: left image, right tabbed content (Pizza, Drinks, Burgers, Pasta tabs), each tab shows 3 items in a row with circular images, name, description, price, Add to cart button
10. **Blog** — White section, centered heading, 3 blog cards with image, title, date/author/comments metadata
11. **Appointment/Contact** — Split: left map placeholder, right form (First Name, Last Name, Message, Send button) on dark overlay
12. **Footer** — Dark background (`#101315`), 4-column: About Us + social icons, Recent Blog (2 posts), Services links, Contact info. Copyright bar at bottom

## Gherkin Requirements

### Navbar
- Scenario: Navbar displays logo and navigation links
  - Given the user visits the home page
  - Then the navbar shows the logo text "Margherita" with subtitle "Delicious"
  - And navigation links "Home", "Menu", "Services", "Blog", "About", "Contact" are visible
  - And the navbar has a dark background

### Hero Slider
- Scenario: Hero slider shows rotating slides with CTAs
  - Given the user views the hero section
  - Then a full-width image slider is displayed at 750px height
  - And each slide contains a subheading, headline, description, and two CTA buttons
  - And the primary button reads "Order Now"
  - And the secondary button reads "View Menu" with white outline style
  - And slide indicators allow manual navigation

### Intro Bar
- Scenario: Intro bar shows contact info and social links
  - Given the user scrolls below the hero
  - Then a two-part bar appears: left section with phone, address, and hours
  - And the left section has a black background with white text
  - And the right section has a gold (#fac564) background with social media icons

### About Section
- Scenario: About section displays split image and text
  - Given the user views the about area
  - Then a 50/50 split layout shows: left half is a background image, right half has heading and paragraph text
  - And the heading reads "Welcome to Margherita Restaurant"

### Services Section
- Scenario: Services section shows three service cards
  - Given the user views the services area
  - Then three service items are displayed in a row
  - And each item has a circular icon with gold border, a heading, and description
  - And the section has a patterned dark background with gold accent

### Hot Meals Section
- Scenario: Hot meals grid shows pizza items with pricing
  - Given the user views the featured items
  - Then a 3-column grid displays 6 pizza menu items
  - And each item shows a circular food image, name, description, price, and Order button
  - And the section heading reads "Hot Pizza Meals"

### Gallery Section
- Scenario: Gallery shows a 4-column image grid
  - Given the user views the gallery
  - Then 4 images are displayed in a full-width row
  - And hovering an image reveals a search icon overlay

### Counter Section
- Scenario: Counter section shows statistics
  - Given the user views the counter area
  - Then 4 statistic counters are displayed
  - And each counter has a circular gold-bordered icon and a number

### Menu Section
- Scenario: Menu section has tabbed content
  - Given the user views the menu area
  - Then a left image and right tabbed content area are shown
  - And tabs include "Pizza", "Drinks", "Burgers", "Pasta"
  - And each tab shows 3 menu items with circular images, name, description, price, and Add to cart button

### Blog Section
- Scenario: Blog section shows recent posts
  - Given the user views the blog area
  - Then 3 blog cards are displayed in a row
  - And each card shows an image, title, date, author, and comment count

### Contact Section
- Scenario: Contact form allows user messages
  - Given the user views the contact area
  - Then a map placeholder is on the left and a form on the right
  - And the form has First Name, Last Name, Message fields and a Send button
  - And the section has a dark overlay background

### Footer
- Scenario: Footer shows site info and links
  - Given the user scrolls to the bottom
  - Then a dark footer (#101315) with 4 columns is displayed
  - And columns include: About Us with social icons, Recent Blog, Services links, Contact info
  - And a copyright line appears at the bottom
  - And the footer links to "Component Dock" (https://www.componentdock.com/)

## Verification Checklist

- [ ] All 12 sections present in correct order
- [ ] Brand colors match: primary `#78d5ef`, accent `#fac564`, dark `#000`/`#101315`
- [ ] Font families: Work Sans (body), Poppins (headings), Josefin Sans (display), Nothing You Could Do (script accents)
- [ ] Buttons have sharp corners (radius 0)
- [ ] Menu item images are circular (50% radius)
- [ ] Hero slider is 750px tall with overlay
- [ ] Intro bar: black left + gold right layout
- [ ] Services: 3 columns with gold-bordered circular icons
- [ ] Gallery: 4-column grid with hover overlay
- [ ] Counter: dark background image section with 4 stats
- [ ] Menu: split layout with 4 tabs, each showing 3 items
- [ ] Blog: 3 cards with metadata
- [ ] Contact: map + form side by side
- [ ] Footer: dark, 4 columns, copyright, Component Dock link
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] Placeholder images use picsum.photos
- [ ] Icons from lucide-react
