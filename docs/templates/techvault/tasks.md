# Techvault — Implementation Tasks

Source design: **Onetech** (`https://colorlib.com/wp/template/onetech/`) → recreation name **techvault**. Shipped at https://techvault.free.componentdock.com.

Scope: An E-Commerce Tech Store template with navigation and search, hero banner with product and newsletter signup sections. Recreation of ColorLib **Onetech** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page site for a tech/electronics e-commerce store.

## Component breakdown

Render order as composed in `apps/techvault/src/App.tsx`:

### 1. TopBar
- No dedicated spec block — hold this band to the design notes.
- Anchors: English · Register · Sign in

### 2. Header
- The template SHALL display a hero banner with a featured product, price, and call-to-action.
- Scenario — Banner shows product details:
  - **WHEN** the user views the banner
  - **THEN** a headline "New Era of Smartphones" is visible
  - AND a crossed-out original price ($530) and discounted price ($460) are shown
  - AND a "Shop Now" button is present

### 3. MainNav
- No dedicated spec block — hold this band to the design notes.
- Anchors: Main navigation · Categories

### 4. Banner
- The template SHALL display a hero banner with a featured product, price, and call-to-action.
- Scenario — Banner shows product details:
  - **WHEN** the user views the banner
  - **THEN** a headline "New Era of Smartphones" is visible
  - AND a crossed-out original price ($530) and discounted price ($460) are shown
  - AND a "Shop Now" button is present

### 5. Characteristics
- No dedicated spec block — hold this band to the design notes.

### 6. DealsOfTheWeek
- No dedicated spec block — hold this band to the design notes.
- Anchors: Deals of the Week · Hurry Up · Offer ends in: · Add to Cart

### 7. PopularCategories
- No dedicated spec block — hold this band to the design notes.
- Anchors: Popular Categories

### 8. Adverts
- No dedicated spec block — hold this band to the design notes.
- Anchors: Smartphone Deals · Up to 40% off on selected models · Gaming Accessories · Premium gear for gamers

### 9. BestSellers
- No dedicated spec block — hold this band to the design notes.
- Anchors: Best Sellers

### 10. HotNewArrivals
- No dedicated spec block — hold this band to the design notes.
- Anchors: Hot New Arrivals

### 11. Brands
- The template SHALL render a complete single-page e-commerce storefront with a header, hero banner, product sections, newsletter, and footer.
- Scenario — Page loads with all sections visible:
  - **WHEN** the user opens the page
  - **THEN** the TopBar with contact info is visible
  - AND the Header with logo "TechVault" and search bar is visible
  - AND the MainNav with categories and menu items is visible
  - AND the Hero Banner with product spotlight is visible
- Scenario — All product sections render:
  - **WHEN** the user scrolls through the page
  - **THEN** a "Characteristics" section with 4 feature tiles is visible
  - AND a "Deals of the Week" section with a countdown timer is visible
  - AND a "Popular Categories" section with category cards is visible
  - AND an "Adverts" section with 2 banner columns is visible
  - AND a "Best Sellers" section with a product grid is visible
  - AND a "Hot New Arrivals" section with tabbed listings is visible
  - AND a "Brands" section with brand logos is visible

### 12. Newsletter
- The template SHALL provide a newsletter email subscription form.
- Scenario — Newsletter form renders:
  - **WHEN** the user reaches the newsletter section
  - **THEN** the title "Sign up for Newsletter" is visible
  - AND an email input with placeholder "Enter your email address" is present
  - AND a "Subscribe" button is present
- Scenario — Newsletter form prevents default submit:
  - **WHEN** the user enters an email and clicks Subscribe
  - **THEN** the form does not navigate away (demo mode, preventDefault)

### 13. Footer
- The template SHALL display a footer with contact info, navigation links, and a link to Component Dock.
- Scenario — Footer sections are present:
  - **WHEN** the user views the footer
  - **THEN** a contact column with phone number is visible
  - AND a "Find it Fast" column with category links is visible
  - AND a "Customer Care" column with support links is visible
- Scenario — Copyright links to Component Dock:
  - **WHEN** the user views the copyright bar
  - **THEN** a link to https://www.componentdock.com/ is present
  - AND the text "Made with Component Dock" or similar branding is shown

### 14. Copyright
- No dedicated spec block — hold this band to the design notes.
- Anchors: Component Dock

### Cross-cutting requirements

- **Navigation and search** — The template SHALL provide a functional navigation bar with category and main menu items, plus a search form.
  - Scenario — Navigation items are accessible: **WHEN** the user views the navigation; **THEN** the categories menu shows product categories (Computers, Cameras, Hardware, Smartphones, etc.); AND the main nav shows links (Home, Super Deals, Featured Brands, Pages, Blog, Contact)
  - Scenario — Search form is present: **WHEN** the user views the header; **THEN** a search input with placeholder "Search for products..." is visible; AND a category dropdown ("All Categories") is adjacent to the search input
- **Deals of the Week with countdown** — The template SHALL show a deals section with a product card and countdown timer display.
  - Scenario — Deal card displays correctly: **WHEN** the user views the deals section; **THEN** the title "Deals of the Week" is visible; AND a product image, category, name, and prices (original/discounted) are shown; AND a countdown timer with hours, minutes, and seconds is displayed
- **Responsive design** — The template SHALL be responsive and adapt to mobile screen sizes.
  - Scenario — Mobile layout adapts: **WHEN** the user views the page on a mobile device (width < 768px); **THEN** the navigation collapses to a hamburger menu icon; AND product grids stack to fewer columns; AND the footer columns stack vertically
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/techvault/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/techvault/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/techvault` ships on https://techvault.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/techvault/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/techvault/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/techvault/public/CNAME` = `techvault.free.componentdock.com`
  and the package `homepage` = `https://techvault.free.componentdock.com`.
