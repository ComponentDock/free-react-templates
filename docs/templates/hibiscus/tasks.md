# Hibiscus — Implementation Tasks

Source design: **Hiroto** (`https://colorlib.com/wp/template/hiroto/`) → recreation name **hibiscus**. Shipped at https://hibiscus.free.componentdock.com.

Scope: A hotel template with hero, services, rooms and gallery sections. Recreation of ColorLib "Hiroto" hotel template.

## Component breakdown

Render order as composed in `apps/hibiscus/src/App.tsx`:

### 1. Navbar
- The navbar SHALL display the brand logo and navigation links: Home, Rooms, About Us, Pages, Blog, Contact, plus a "Book Now" CTA button.
- Scenario — Navbar renders on desktop:
  - **WHEN** the page loads
  - **THEN** the navbar shows the brand logo/text
  - **AND** navigation links are visible: Home, Rooms, About Us, Pages, Blog, Contact
  - **AND** a "Book Now" button/link is visible on the right side
- Scenario — Navbar toggles mobile menu:
  - **WHEN** the user clicks the hamburger menu icon
  - **THEN** the offcanvas mobile menu opens from the right
  - **AND** the menu shows all navigation links plus login/register options
  - **AND** clicking a navigation link closes the menu
- Scenario — Navbar shows top bar with contact info:
  - **WHEN** the page loads
  - **THEN** a top bar shows the address "96 Ernser Vista Suite 437, NY, US"
  - **AND** the phone number "(123) 456-78-910" is visible

### 2. Hero
- The hero SHALL display a full-width background image with heading text and a booking search form with check-in, check-out, room type, and search button.
- Scenario — Hero renders heading:
  - **WHEN** the page loads
  - **THEN** the subheading "WELCOME HIROTO" is visible (gold, uppercase)
  - **AND** the heading "Experience the greatest for you holidays." is visible (white, large)
  - **AND** a "BOOK NOW" button is visible
- Scenario — Hero booking form renders fields:
  - **WHEN** the page loads
  - **THEN** a booking form is visible with check-in date, check-out date, room type select, and search button
  - **AND** the room type dropdown is interactive

### 3. About
- The about section SHALL display hotel description with an image and amenities highlights.
- Scenario — About renders hotel info:
  - **WHEN** the page loads
  - **THEN** the subheading "ABOUT US" is visible (gold, uppercase)
  - **AND** the heading "Welcome Hiroto Hotel In Street L'Abreuvoir" is visible
  - **AND** a descriptive paragraph is present
  - **AND** a hotel image is displayed on the right side

### 4. Services
- The services section SHALL display 6 service cards in a 3-column grid.
- Scenario — Services renders all cards:
  - **WHEN** the page loads
  - **THEN** 6 service items are visible: Free Wi-Fi, Premium Pool, Coffee Maker, Bar Wine, TV HD, Restaurant
  - **AND** each service card shows an icon and heading

### 5. Rooms
- The rooms section SHALL display 4 room cards in a row, each with a background image and name.
- Scenario — Rooms renders all cards:
  - **WHEN** the page loads
  - **THEN** 4 room cards are visible labeled "Deluxe Room"
  - **AND** each card has a background image and a "Booking Now" link

### 6. ChooseUs
- The Choose Us section SHALL display a dark parallax background with text about hotel features and a row of icon-based feature highlights.
- Scenario — Choose Us renders content:
  - **WHEN** the page loads
  - **THEN** a dark parallax background image is visible
  - **AND** descriptive text about the hotel is shown
  - **AND** 4-8 icon-based feature highlights are displayed

### 7. Testimonials
- The testimonial section SHALL display an owl-carousel slider with guest testimonial cards.
- Scenario — Testimonial renders review:
  - **WHEN** the page loads
  - **THEN** a testimonial slider is visible
  - **AND** each testimonial shows a profile photo, author name, title, and quote text
  - **AND** social media icon links are present below each testimonial

### 8. Gallery
- The gallery section SHALL display a grid/slider of hotel images.
- Scenario — Gallery renders images:
  - **WHEN** the page loads
  - **THEN** at least 4 gallery images are visible
  - **AND** the gallery uses an owl-carousel slider layout

### 9. Blog
- The latest blog section SHALL display 4 blog post cards in a row.
- Scenario — Blog renders posts:
  - **WHEN** the page loads
  - **THEN** 4 blog post cards are visible
  - **AND** each card shows a post image, a heading, and a "Read More" link

### 10. Footer
- The footer SHALL display contact information, quick links, a newsletter subscription form, and social media links on a dark background image.
- Scenario — Footer renders content:
  - **WHEN** the page loads
  - **THEN** the footer shows the phone number "(123) 456-78-91096"
  - **AND** Quick Links are visible: Home, Booking, About Us, Review, Contact
  - **AND** Services links: Our Room, Restaurants, Payments, Events
  - **AND** a newsletter subscription email input with "Subscribe" button is present
  - **AND** social media icon links are visible
  - **AND** copyright text with "Component Dock" link is present
- Scenario — Footer has dark background:
  - **WHEN** the page loads
  - **THEN** the footer has a dark background image overlay

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/hibiscus/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/hibiscus/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] All sections from the original template are present in order: Header/Nav → Hero (with booking form) → About → Services → Rooms → Choose Us → Testimonial → Gallery → Latest Blog → Footer; [ ] Design tokens match: brand gold `#E9AD28`, dark bg `#19191A`, fonts Barlow Condensed + DM Sans, flat buttons; [ ] Section backgrounds: hero (dark image), choose us (dark parallax image), rest (white/light), footer (dark image); [ ] All 6 service cards render with correct names; [ ] All 4 room cards render; [ ] Testimonial carousel slides; [ ] Gallery carousel slides; [ ] Blog post cards render with Read More links; [ ] Footer links and newsletter form functional; [ ] Mobile responsive: offcanvas menu, stacked layouts; [ ] No ColorLib references in app code (provenance only in spec); [ ] Footer links to Component Dock (`https://www.componentdock.com/`); [ ] `public/CNAME` contains `hibiscus.free.componentdock.com`; [ ] `homepage` in `package.json` set to `https://hibiscus.free.componentdock.com`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/hibiscus` ships on https://hibiscus.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/hibiscus/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/hibiscus/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/hibiscus/public/CNAME` = `hibiscus.free.componentdock.com`
  and the package `homepage` = `https://hibiscus.free.componentdock.com`.
