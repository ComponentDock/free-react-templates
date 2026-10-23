# Listhub — Implementation Tasks

Source design: **Listio** (`https://colorlib.com/wp/template/listio/`) → recreation name **listhub**. Shipped at https://listhub.free.componentdock.com.

Scope: Listhub is a directory listing template that helps users discover and connect with local businesses. It features a search-driven hero, category browsing, featured listing cards, a how-it-works section, testimonials, newsletter signup, and blog posts.

## Component breakdown

Render order as composed in `apps/listhub/src/App.tsx`:

### 1. Navbar
- The navbar SHALL provide navigation links, a search input, and a mobile menu toggle.
- Scenario — Mobile menu toggles:
  - **WHEN** the user clicks the mobile menu toggle button
  - **THEN** the mobile navigation menu is displayed
  - **AND** the toggle button changes to "Close menu"
- Scenario — Pages dropdown toggles:
  - **WHEN** the user clicks the "Pages" dropdown button
  - **THEN** the dropdown shows sub-links (Blog, Blog Details, Elements, Contact, Details)
  - **AND** when clicked again, the dropdown closes

### 2. Hero
- The hero section SHALL provide a search form with text input, category dropdown, city dropdown, and submit button.
- Scenario — Search form accepts input:
  - **WHEN** the user types in the search input
  - **THEN** the input reflects the typed text
- Scenario — Category and city dropdowns have options:
  - **WHEN** the user views the search form
  - **THEN** the category dropdown has options (Hotel, Restaurant, Cafe, Shopping Mall, Beauty & Spa)
  - **AND** the city dropdown has options (New York, Los Angeles, Chicago, Houston, Miami)

### 3. Categories
- No dedicated spec block — hold this band to the design notes.
- Anchors: We help you to find · Explore Categories

### 4. FeatureBlock
- The featured listings section SHALL display 6 listing cards in a 3-column grid.
- Scenario — Listing cards show all required elements:
  - **WHEN** the featured listings section renders
  - **THEN** there are 6 listing cards
  - **AND** each card has an image, title, and description
  - **AND** each card has price and status badges (Open Now or Closed)
  - **AND** each card has a category label and heart icon

### 5. FeaturedListings
- No dedicated spec block — hold this band to the design notes.
- Anchors: Featured Listing · Explore Categories · Explore More

### 6. HowItWorks
- No dedicated spec block — hold this band to the design notes.
- Anchors: How Listhub Works · Explore Our Process

### 7. Testimonials
- The template SHALL render a complete directory listing page with navbar, hero, categories, feature block, featured listings, how-it-works, testimonials, newsletter, blog posts, and footer.
- Scenario — All sections are present on page load:
  - **WHEN** the user visits the Listhub template
  - **THEN** the navbar is visible with search, logo, and navigation links
  - **AND** the hero section shows "Find your Destination" heading
  - **AND** the categories section shows category cards (Hotel, Restaurant, Cafe, Shopping Mall, Beauty & Spa, Fitness)
  - **AND** the feature block shows "Best Café & Bars"
  - **AND** the featured listings grid shows 6 listing cards
  - **AND** the how-it-works section shows 3 numbered steps
  - **AND** the testimonials section shows 3 testimonials
  - **AND** the newsletter section has an email input and subscribe button
  - **AND** the blog posts section shows 2 blog cards
  - **AND** the footer links to componentdock.com

### 8. Newsletter
- The newsletter section SHALL accept email input and have a working form.
- Scenario — Newsletter form accepts email:
  - **WHEN** the user types an email address in the newsletter input
  - **THEN** the email input reflects the typed text
  - **AND** the form can be submitted without navigation

### 9. BlogPosts
- No dedicated spec block — hold this band to the design notes.
- Anchors: Latest News · Explore Blog Post

### 10. Footer
- The footer SHALL include a link to https://www.componentdock.com/ branded as "Component Dock".
- Scenario — Component Dock link is present:
  - **WHEN** the footer renders
  - **THEN** there is a link to componentdock.com
  - **AND** the link text mentions "Component Dock"
  - **AND** the link opens in a new tab

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/listhub/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/listhub/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/listhub` ships on https://listhub.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/listhub/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/listhub/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/listhub/public/CNAME` = `listhub.free.componentdock.com`
  and the package `homepage` = `https://listhub.free.componentdock.com`.
