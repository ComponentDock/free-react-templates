# Shoplane — Implementation Tasks

Source design: **Coloshop** (`https://colorlib.com/wp/template/coloshop/`) → recreation name **shoplane**. Shipped at https://shoplane.free.componentdock.com.

Scope: A Bootstrap 4 e-commerce template with product listings, category banners, deal countdown, and blog section. Recreation of ColorLib **Coloshop**.

## Component breakdown

Render order as composed in `apps/shoplane/src/App.tsx`:

### 1. TopNav
- Users SHALL see a thin top bar with a free shipping message on the left and currency/language/account selectors on the right.
- Scenario — Top nav displays shipping banner and selectors:
  - **WHEN** the page loads
  - **THEN** a top navigation bar is visible at the top
  - **AND** "free shipping on all u.s orders over $50" text is displayed on the left
  - **AND** a currency selector showing "usd" is present on the right
  - **AND** a language selector showing "English" is present on the right

### 2. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Main · menubar · none · menuitem · Search · Account

### 3. Hero
- No dedicated spec block — hold this band to the design notes.
- Anchors: Spring / Summer Collection 2025 · Get up to 30% Off · New Arrivals · Shop Now

### 4. CategoryBanners
- Users SHALL see three category banner cards in a row with background images and category labels.
- Scenario — Three category banners are displayed:
  - **WHEN** the page loads
  - **THEN** three category banner cards are shown in a row
  - **AND** each banner has a background image and a category label link
  - **AND** the categories are "women's", "accessories", and "men's"

### 5. NewArrivals
- Users SHALL see a product grid with filter tabs to filter by category.
- Scenario — New arrivals section shows product grid with filters:
  - **WHEN** the page loads
  - **THEN** the heading "New Arrivals" is displayed
  - **AND** filter tabs are shown: all, women's, accessories, men's
  - **AND** "all" tab is active by default
  - **AND** a product grid is displayed with product cards
- Scenario — Product cards display correctly:
  - **WHEN** the new arrivals section is visible
  - **THEN** each product card shows an image, name, and price
  - **AND** some products have a "sale" badge in green
  - **AND** some products have a "new" badge in red
- Scenario — Filter tabs change visible products:
  - **WHEN** the user clicks the "women's" filter tab
  - **THEN** only women's products are shown in the grid
  - **AND** the "women's" tab becomes active

### 6. DealOfWeek
- No dedicated spec block — hold this band to the design notes.
- Anchors: Deal Of The Week · Shop Now

### 7. BestSellers
- Users SHALL see a best sellers section with a product carousel and navigation arrows.
- Scenario — Best sellers section displays product carousel:
  - **WHEN** the page loads
  - **THEN** the heading "Best Sellers" is displayed
  - **AND** a product carousel/grid is shown with navigation arrows

### 8. Benefits
- Users SHALL see a row of four benefit items with icons and descriptions.
- Scenario — Benefits row displays four benefit icons:
  - **WHEN** the page loads
  - **THEN** four benefit items are shown in a row
  - **AND** the benefits are: Free Shipping, Cash on Delivery, 45 Days Return, Opening All Week
  - **AND** each benefit has a red icon and uppercase title

### 9. LatestBlogs
- Users SHALL see three blog post cards with background images.
- Scenario — Blog section displays three blog posts:
  - **WHEN** the page loads
  - **THEN** the heading "Latest Blogs" is displayed
  - **AND** three blog post cards are shown in a row
  - **AND** each card has a background image, date badge, and title

### 10. Newsletter
- Users SHALL see a newsletter section with an email input and subscribe button.
- Scenario — Newsletter section displays subscription form:
  - **WHEN** the page loads
  - **THEN** the heading "Newsletter" is displayed
  - **AND** a subtitle about 20% off first purchase is shown
  - **AND** an email input field is present
  - **AND** a "subscribe" button is displayed
- Scenario — Newsletter form submits successfully:
  - **WHEN** the user enters a valid email and clicks subscribe
  - **THEN** a thank you message is displayed

### 11. Footer
- Users SHALL see a footer with navigation links, social icons, and a Component Dock attribution link.
- Scenario — Footer displays nav links, social icons, and copyright:
  - **WHEN** the page loads
  - **THEN** footer navigation links "Blog", "FAQs", "Contact us" are present
  - **AND** social icon links are shown for Facebook, Twitter, Instagram, Skype, and Pinterest
  - **AND** copyright text is displayed
  - **AND** a "Component Dock" link pointing to https://www.componentdock.com/ is present in the footer

### Cross-cutting requirements

- **Main navigation with logo and links** — Users SHALL see a main navigation bar with the logo "shoplane" (accent on "lane"), navigation links, and user action icons.
  - Scenario — Main nav displays logo and navigation links: **WHEN** the page loads; **THEN** the logo "shoplane" is displayed with accent styling on "lane"; **AND** navigation links "home", "shop", "promotion", "pages", "blog", "contact" are present; **AND** search, user, and cart icons are displayed; **AND** the cart icon shows a badge with item count "2"
  - Scenario — Main nav shows hamburger on mobile: **WHEN** the viewport width is less than 992px; **THEN** a hamburger menu icon is visible; **AND** the navigation links are collapsed
- **Deal of the week countdown** — Users SHALL see a deal section with a countdown timer and product image.
  - Scenario — Deal section displays countdown and product: **WHEN** the page loads; **THEN** the heading "Deal Of The Week" is displayed; **AND** a countdown timer shows days, hours, minutes, and seconds; **AND** a product image is displayed on the left; **AND** a "Shop Now" button is visible
- **Accessibility** — Users SHALL experience accessible landmarks and semantic HTML.
  - Scenario — Page has accessible landmarks: **WHEN** the page loads; **THEN** the page has a navigation landmark for the header; **AND** the main content area is wrapped in a semantic element; **AND** the footer has a footer landmark; **AND** all form inputs have associated labels or placeholders
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/shoplane/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/shoplane/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/shoplane` ships on https://shoplane.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/shoplane/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/shoplane/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/shoplane/public/CNAME` = `shoplane.free.componentdock.com`
  and the package `homepage` = `https://shoplane.free.componentdock.com`.
