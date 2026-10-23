# Erudit — Implementation Tasks

Source design: **Knowledge** (`https://colorlib.com/wp/template/knowledge/`) → recreation name **erudit**. Shipped at https://erudit.free.componentdock.com.

Scope: Erudit is a free React online learning and education template that recreates the ColorLib "Knowledge" design under a new, original name. It provides a complete landing page for an online learning platform with courses, instructors, events, testimonials, and newsletter subscription.

## Component breakdown

Render order as composed in `apps/erudit/src/App.tsx`:

### 1. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: The ideal platform for your online learning center · Our Vision · Our Missions · Sign Up · Erudit · Get started

### 2. HeroSlider
- The template SHALL display a hero slider with 4 rotating slides.
- Scenario — Hero slider shows slides:
  - **GIVEN** the user loads the page
  - **THEN** 4 hero slides are rendered
  - **AND** each slide has a heading, subtitle, and CTA button

### 3. SearchBar
- The template SHALL provide a search bar for filtering courses.
- Scenario — Search bar allows filtering:
  - **GIVEN** the user loads the page
  - **THEN** a keyword search input is visible
  - **AND** a category dropdown with options is visible
  - **AND** a difficulty dropdown is visible
  - **AND** a "Search course" button is visible

### 4. Services
- The template SHALL display 6 service categories with icons.
- Scenario — Services section displays categories:
  - **GIVEN** the user loads the page
  - **THEN** 6 service items are displayed with icons and labels
  - **AND** a "Discover Courses" button is visible

### 5. PopularCourses
- The template SHALL display popular courses in a horizontal layout.
- Scenario — Popular courses shows course cards:
  - **GIVEN** the user loads the page
  - **THEN** 5 popular course cards are displayed
  - **AND** each card shows teacher name, course title, and price

### 6. About
- The template SHALL display an about section with animated counters.
- Scenario — About section shows counters:
  - **GIVEN** the user loads the page
  - **THEN** the "Who Are We" section is displayed
  - **AND** 4 counters are visible (Courses, Students, Teachers online, Countries)

### 7. Testimonials
- The template SHALL display student testimonials with quotes.
- Scenario — Testimonials section shows quotes:
  - **GIVEN** the user loads the page
  - **THEN** 5 testimonial cards are displayed
  - **AND** each card shows a quote, avatar, and name

### 8. Instructors
- The template SHALL display instructor profiles.
- Scenario — Instructors section shows instructor cards:
  - **GIVEN** the user loads the page
  - **THEN** 4 instructor cards are displayed
  - **AND** each card shows a photo, name, and role

### 9. OurCourses
- The template SHALL display courses in a 3-column grid.
- Scenario — Our courses grid shows course cards:
  - **GIVEN** the user loads the page
  - **THEN** 6 course cards are displayed in a grid
  - **AND** each card shows teacher name, course title, and price

### 10. EventsBlog
- The template SHALL display upcoming events and recent blog posts.
- Scenario — Events and blog section shows entries:
  - **GIVEN** the user loads the page
  - **THEN** 4 upcoming event entries are displayed
  - **AND** 4 blog post entries are displayed

### 11. Newsletter
- The template SHALL provide a newsletter subscription form.
- Scenario — Newsletter section allows subscription:
  - **GIVEN** the user loads the page
  - **THEN** an email input is visible
  - **AND** a "Subscribe Now" button is visible

### 12. Footer
- The template SHALL display a footer with contact info and Component Dock link.
- Scenario — Footer contains contact info and Component Dock link:
  - **GIVEN** the user loads the page
  - **THEN** the footer shows contact information
  - **AND** the footer links to https://www.componentdock.com/

### Cross-cutting requirements

- **Navigation** — The template SHALL display a sticky navbar with logo, navigation links, and a CTA button.
  - Scenario — Navbar displays logo and navigation links: **GIVEN** the user loads the page; **THEN** the navbar shows "Erudit" as the logo; **AND** navigation links include Home, Courses, Teachers, About, Events, News, Contact; **AND** a "Get started" CTA button is visible
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/erudit/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/erudit/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; ColorLib template: Knowledge; URL: https://colorlib.com/wp/template/knowledge/; Preview: https://preview.colorlib.com/theme/knowledge/; Font family: Rubik (Google Fonts, weights 300–900); Primary brand color: #4586FF (blue); Accent/highlight: #F7AF1D (golden); Dark text: #333333; Secondary text: #555555, #999999; Light backgrounds: #f0f0f0 (alternating sections); White backgrounds: #fff; Button: blue primary (#4586FF), rounded, with hover darkening; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/erudit` ships on https://erudit.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/erudit/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/erudit/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/erudit/public/CNAME` = `erudit.free.componentdock.com`
  and the package `homepage` = `https://erudit.free.componentdock.com`.
