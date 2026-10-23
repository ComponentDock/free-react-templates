# Dine — Implementation Tasks

Source design: **Gourmet** (`https://colorlib.com/wp/template/gourmet/`) → recreation name **dine**. Shipped at https://dine.free.componentdock.com.

Scope: A restaurant/food landing page with dark navbar, hero slider, about section, gallery, special menu carousel, our menu grid, testimonials. It also includes blog, and footer. Recreation of ColorLib's **Gourmet**.

## Component breakdown

Render order as composed in `apps/dine/src/App.tsx`:

### 1. Navbar
- The application SHALL display a dark navbar with the brand name "Dine" and navigation links including a Services dropdown.
- Scenario — Brand and links render:
  - **WHEN** the page loads
  - **THEN** the brand text "Dine" is displayed in the header
  - **AND** navigation links for Home, Recipes, About, News, and Contact are visible
  - **AND** a Services button is present that toggles a dropdown
- Scenario — Services dropdown toggles:
  - **WHEN** the user clicks the Services button
  - **THEN** a dropdown menu appears with Catering, Private Events, and Reservations items
  - **AND** clicking a second time closes the dropdown

### 2. Hero
- The application SHALL display a hero section with slide headings and a call-to-action button.
- Scenario — Hero content renders:
  - **WHEN** the page loads
  - **THEN** two hero slide headings are present ("Eat, Drinks at Dine" and "Enjoy delicious food at Dine")
  - **AND** "Get Started" CTA buttons are visible on each slide

### 3. About
- The application SHALL display an about section with a heading, description text, and signature placeholder.
- Scenario — About content renders:
  - **WHEN** the page loads
  - **THEN** the heading "The Restaurant" is displayed
  - **AND** a description paragraph about the restaurant is visible
  - **AND** a signature placeholder image is shown

### 4. Gallery
- The application SHALL display a gallery section with three food images.
- Scenario — Gallery renders three images:
  - **WHEN** the page loads
  - **THEN** three food images are displayed in the gallery section

### 5. SpecialMenu
- The application SHALL display a special menu section with a carousel of dish cards showing names and prices.
- Scenario — Menu items render with prices:
  - **WHEN** the page loads
  - **THEN** four menu items are displayed with dish names and prices
  - **AND** each item shows a price in the range of $11.00 to $12.00

### 6. OurMenu
- The application SHALL display a 2-column menu grid with six items showing names, descriptions, and prices.
- Scenario — Menu grid renders all items:
  - **WHEN** the page loads
  - **THEN** six menu items are displayed in a grid layout
  - **AND** each item has a name, description, and price

### 7. Testimonials
- The application SHALL display a testimonials section with three quotes including author names and roles.
- Scenario — Testimonials render:
  - **WHEN** the page loads
  - **THEN** three testimonial quotes are displayed
  - **AND** each quote shows an author name and role

### 8. Blog
- The application SHALL display a blog section with two post cards showing titles and dates.
- Scenario — Blog posts render:
  - **WHEN** the page loads
  - **THEN** two blog post cards are displayed
  - **AND** each card shows a title and date

### 9. Footer
- The application SHALL display a footer with About Us, Opening Hours, Contact Info, Quick Links, and a copyright bar linking to Component Dock.
- Scenario — Footer sections render:
  - **WHEN** the page loads
  - **THEN** an About Us section with social icons is visible
  - **AND** Opening Hours and Contact Info sections are displayed
  - **AND** Quick Links for About, Terms, Disclaimers, and Contact are shown
  - **AND** a copyright bar with a link to https://www.componentdock.com/ branded as "Component Dock" is present

### Cross-cutting requirements

- **No ColorLib references** — The application SHALL NOT contain any references to ColorLib in source files.
  - Scenario — App code contains no ColorLib strings: **WHEN** any source file in apps/dine/ is inspected; **THEN** no file contains the string "colorlib" (case-insensitive); [ ] Navbar: dark bg, brand "Dine", all nav links, services dropdown; [ ] Hero: 2 slides, background images, headings, CTA button; [ ] About: image + text layout, "The Restaurant" heading; [ ] Gallery: 3 food images; [ ] Special Menu: carousel with 4 dish cards; [ ] Our Menu: 2-column grid with 6 items; [ ] Testimonials: 3 quotes with avatars; [ ] Blog: 2 post cards; [ ] Footer: About Us, Hours, Contact, Quick Links, Component Dock link; [ ] No ColorLib references in app code; [ ] All tests pass with 100% coverage

## Verification

- [x] `apps/dine` ships on https://dine.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/dine/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/dine/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/dine/public/CNAME` = `dine.free.componentdock.com`
  and the package `homepage` = `https://dine.free.componentdock.com`.
