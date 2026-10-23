# Locate — Implementation Tasks

Source design: **Browse** (`https://colorlib.com/wp/template/browse/`) → recreation name **locate**. Shipped at https://locate.free.componentdock.com.

Scope: Recreation of ColorLib "Browse" (https://colorlib.com/wp/template/browse/). A directory listing / "find nearby" landing page for discovering local places, attractions, restaurants, and services.

## Component breakdown

Render order as composed in `apps/locate/src/App.tsx`:

### 1. Navbar
- The template SHALL display a navigation bar with the "Scout" logo and links to Home, Directory, About, Blog, and Contact.
- Scenario — Navbar displays all links:
  - **WHEN** the page loads
  - **THEN** the navbar shows "Scout" as the logo text
  - **AND** navigation links "Home", "Directory", "About", "Blog", "Contact" are visible
- Scenario — Mobile menu toggle:
  - **WHEN** the mobile menu toggle button is clicked
  - **THEN** the mobile navigation menu expands

### 2. Hero
- The template SHALL display a hero section with a background image, "Find Nearby" heading with animated typed text, and a search form with keyword, location, category, and search button.
- Scenario — Hero renders heading and search form:
  - **WHEN** the page loads
  - **THEN** the hero heading contains "Find Nearby"
  - **AND** a search keyword input, location input, category dropdown, and search button are visible
- Scenario — Form prevents default submission:
  - **WHEN** the search form is submitted
  - **THEN** the default form submission is prevented

### 3. MostVisited
- The template SHALL display a 3-column grid of 6 listing cards with images, bookmark buttons, category badges, names, and addresses.
- Scenario — Listing cards render with all elements:
  - **WHEN** the page loads
  - **THEN** 6 listing cards are displayed
  - **AND** each card has a bookmark button, category badge, name, and address

### 4. PopularCategories
- The template SHALL display 6 category tiles with icons, names, and listing counts, plus a "View All Categories" button.
- Scenario — Category tiles render correctly:
  - **WHEN** the page loads
  - **THEN** 6 category tiles are shown (Hotels, Events, Spa, Stores, Restaurants, Other)
  - **AND** listing counts are displayed for each category

### 5. WhyUs
- The template SHALL display an image alongside a 4-item accordion FAQ that expands/collapses on click.
- Scenario — Accordion expands on click:
  - **WHEN** a FAQ question is clicked
  - **THEN** the answer becomes visible
- Scenario — Accordion collapses on second click:
  - **WHEN** an expanded FAQ question is clicked again
  - **THEN** the answer is hidden

### 6. HowItWorks
- The template SHALL display 3 numbered step cards with icons, titles, and descriptions.
- Scenario — Step cards render correctly:
  - **WHEN** the page loads
  - **THEN** 3 step cards are shown with numbers 1, 2, 3

### 7. Testimonials
- The template SHALL display a carousel of customer testimonials with previous/next navigation and dot indicators.
- Scenario — Testimonial navigation:
  - **WHEN** the next button is clicked
  - **THEN** the next testimonial is displayed
- Scenario — Testimonial dot navigation:
  - **WHEN** a dot indicator is clicked
  - **THEN** the corresponding testimonial is shown

### 8. BlogTips
- The template SHALL display 3 blog post preview cards with images, titles, authors, dates, and excerpts.
- Scenario — Blog cards render correctly:
  - **WHEN** the page loads
  - **THEN** 3 blog articles are shown with title, author, date, and excerpt

### 9. CTA
- The template SHALL display a full-width primary-colored call-to-action banner with heading, subtitle, and Sign Up button.
- Scenario — CTA renders correctly:
  - **WHEN** the page loads
  - **THEN** the CTA banner shows "Let's get started" heading and "Sign Up" button

### 10. Footer
- The template SHALL display a footer with link columns, social icons, newsletter signup, and a copyright line linking to Component Dock.
- Scenario — Footer renders all elements:
  - **WHEN** the page loads
  - **THEN** Quick Links, Products, and Features columns are visible
  - **AND** social media icons (Facebook, Twitter, Instagram, LinkedIn) are present
  - **AND** newsletter email input and Send button are visible
  - **AND** a "Component Dock" link points to https://www.componentdock.com/
- Scenario — Newsletter form prevents default:
  - **WHEN** the newsletter form is submitted
  - **THEN** the default form submission is prevented

### Cross-cutting requirements

- **Typed text animation** — The template SHALL animate the hero heading text through a cycle of words: Attractions, Events, Hotels, Restaurants.
  - Scenario — Typing animation cycles through words: **WHEN** the page loads; **THEN** characters are typed one by one with a delay; **AND** after a word is fully typed, it pauses then deletes; **AND** the next word in the cycle begins typing
- **Design tokens** — The template SHALL use teal #00918e as primary color, Rubik font, and match the original Browse template's visual style.
  - Scenario — Brand colors are applied: **WHEN** the page renders; **THEN** teal primary color is used for buttons, links, and accents; **AND** Rubik font family is applied to all text
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/locate/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/locate/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/locate` ships on https://locate.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/locate/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/locate/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/locate/public/CNAME` = `locate.free.componentdock.com`
  and the package `homepage` = `https://locate.free.componentdock.com`.
