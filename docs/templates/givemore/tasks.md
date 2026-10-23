# Givemore — Implementation Tasks

Source design: **Bcharity** (`https://colorlib.com/wp/template/bcharity/`) → recreation name **givemore**. Shipped at https://givemore.free.componentdock.com.

Scope: Recreation of ColorLib [Bcharity](https://colorlib.com/wp/template/bcharity/) as a free React template. GiveMore is a charity and donation landing page with hero banner, feature highlights, cause cards with progress bars, volunteer profiles, blog, partner logos, and newsletter signup.

## Component breakdown

Render order as composed in `apps/givemore/src/App.tsx`:

### 1. Navbar
- The page SHALL display a sticky navbar with brand name, navigation links (Home, About, Causes, Volunteers, Blog, Contact), and a "Learn More" CTA button.
- Scenario — Desktop navbar renders all links:
  - **WHEN** the page loads on desktop viewport
  - **THEN** the navbar shows the brand "GiveMore", all navigation links, and the "Learn More" button
- Scenario — Mobile navbar toggle:
  - **WHEN** the user is on mobile viewport
  - **THEN** a hamburger button is visible that toggles the mobile menu
  - **WHEN** the user taps the hamburger button
  - **THEN** the mobile menu opens with all navigation links and the "Learn More" link
  - **WHEN** the user taps a navigation link
  - **THEN** the mobile menu closes

### 2. Hero
- The page SHALL display a full-width hero banner with background image, headline "Bless others with your gift", description text, and a "Start Donation" CTA button.
- Scenario — Hero renders heading and CTA:
  - **WHEN** the page loads
  - **THEN** the hero section shows the heading "Bless others with your gift"
  - **AND** a "Start Donation" button links to the causes section

### 3. Features
- The page SHALL display a features section with 4 feature cards: Give Donation, Become A Volunteer, Child Education, and Quick Fundraise.
- Scenario — All feature cards render:
  - **WHEN** the features section is visible
  - **THEN** 4 feature cards are displayed with icons, titles, and descriptions

### 4. BePart
- The page SHALL display a "Be Part" split section with heading, description, image, and "Learn More" CTA.
- Scenario — Be Part renders content:
  - **WHEN** the be-part section is visible
  - **THEN** the heading "Be a part of the breakthrough" is displayed
  - **AND** a "Learn More" button links to causes

### 5. Counter
- The page SHALL display 4 statistic items: Total Collection, Helped People, Total Volunteers, and Successful Missions.
- Scenario — Stats render with values:
  - **WHEN** the counter section is visible
  - **THEN** all 4 stat labels and values are displayed

### 6. Causes
- The page SHALL display 3 cause cards, each with an image, title, progress bar, goal/raised amounts, and a "Read More" link.
- Scenario — Cause cards render:
  - **WHEN** the causes section is visible
  - **THEN** 3 cause cards are displayed
  - **AND** each card shows goal and raised amounts
  - **AND** each card has a "Read More" link

### 7. CtaBanner
- The page SHALL display a dark CTA banner with the quote "Forget what you can get and see what you can give" and a "Become a Volunteer" button.
- Scenario — CTA banner renders:
  - **WHEN** the CTA section is visible
  - **THEN** the motivational quote is displayed
  - **AND** a "Become a Volunteer" button links to volunteers section

### 8. Volunteers
- The page SHALL display 4 volunteer profile cards, each with a photo, name, role, and social icon links.
- Scenario — Volunteer cards render:
  - **WHEN** the volunteers section is visible
  - **THEN** 4 volunteer cards are displayed
  - **AND** each card shows name, role, and social icons

### 9. Blog
- The page SHALL display a blog section with 1 featured post and 3 smaller posts.
- Scenario — Blog posts render:
  - **WHEN** the blog section is visible
  - **THEN** 1 featured post and 3 smaller posts are displayed

### 10. Partners
- The page SHALL display 5 partner logos in a row.
- Scenario — Partner logos render:
  - **WHEN** the partners section is visible
  - **THEN** 5 partner logos are displayed

### 11. Footer
- The page SHALL display a footer with brand name, newsletter signup form, contact information, quick links, and copyright with a "Component Dock" link.
- Scenario — Footer renders all sections:
  - **WHEN** the footer is visible
  - **THEN** the newsletter form, contact info, quick links, and copyright are displayed
  - **AND** the copyright includes a link to https://www.componentdock.com/
- Scenario — Newsletter form handles submission:
  - **WHEN** the user enters an email and clicks subscribe
  - **THEN** the form prevents default submission (no navigation)

### Cross-cutting requirements

- **Accessibility** — The page SHALL be accessible with semantic HTML, aria labels, and keyboard navigation.
  - Scenario — Interactive elements are accessible: **WHEN** the page loads; **THEN** all images have alt text; **AND** the mobile menu toggle has an aria-label; **AND** form inputs have aria-labels
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/givemore/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/givemore/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/givemore` ships on https://givemore.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/givemore/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/givemore/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/givemore/public/CNAME` = `givemore.free.componentdock.com`
  and the package `homepage` = `https://givemore.free.componentdock.com`.
