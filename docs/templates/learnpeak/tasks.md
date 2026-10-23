# Learnpeak — Implementation Tasks

Source design: **Elearn** (`https://colorlib.com/wp/template/elearn/`) → recreation name **learnpeak**. Shipped at https://learnpeak.free.componentdock.com.

Scope: An Education / Online Courses template with header/nav, home slider, featured course, courses cards, milestones/counters and why choose us sections. Recreation of ColorLib's **Elearn** template as a React 19 + Vite + Tailwind 4 + TypeScript application.

## Component breakdown

Render order as composed in `apps/learnpeak/src/App.tsx`:

### 1. TopBar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Have any questions? · Register · Login

### 2. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Search · Toggle menu

### 3. HeroSlider
- The application SHALL display a full-width hero carousel with 3 slides, navigation arrows, and pagination dots.
- Scenario — Hero slider displays three slides:
  - **WHEN** the user visits the LearnPeak homepage
  - **THEN** a full-width image slider is visible
  - **AND** each slide has a heading, subtitle, and two CTA buttons
- Scenario — Slider navigation works:
  - **WHEN** the user clicks the next arrow
  - **THEN** the slider advances to the next slide
- Scenario — Slider previous navigation works:
  - **WHEN** the user clicks the previous arrow
  - **THEN** the slider goes to the previous slide
- Scenario — Pagination dots work:
  - **WHEN** the user clicks a pagination dot
  - **THEN** the slider navigates to the corresponding slide

### 4. FeaturedCourse
- The application SHALL display a featured course section with a split layout showing course details and an image.
- Scenario — Featured course section shows details:
  - **WHEN** the user scrolls past the hero
  - **THEN** a featured course section is visible
  - **AND** it displays a course tag, title, price, description, and author info

### 5. CourseCards
- The application SHALL display a course grid with 3 course cards, each showing an image, tag, title, author, and stats.
- Scenario — Course cards display correctly:
  - **WHEN** the user scrolls to the courses section
  - **THEN** a heading reads "Choose Your Course"
  - **AND** 3 course cards are visible
  - **AND** each card has an image, tag, title, and author

### 6. Milestones
- The application SHALL display 4 milestone counters in a dark background section with icons, numbers, and labels.
- Scenario — Four counters are displayed:
  - **WHEN** the user scrolls to the milestones section
  - **THEN** 4 milestone counters are shown
  - **AND** each has an icon, number, and label
  - **AND** the section has a dark background

### 7. WhyChooseUs
- The application SHALL display accordion FAQ items and upcoming events in a two-column layout.
- Scenario — Accordion toggles work:
  - **WHEN** the user clicks an accordion question
  - **THEN** the accordion panel toggles open/closed
  - **AND** the aria-expanded attribute reflects the current state
- Scenario — Events are displayed:
  - **WHEN** the user scrolls to the events section
  - **THEN** upcoming events with date badges and titles are visible

### 8. News
- The application SHALL display 3 blog post previews with date badges, images, titles, and authors.
- Scenario — Three blog posts are shown:
  - **WHEN** the user scrolls to the news section
  - **THEN** 3 blog post previews are displayed
  - **AND** each has a date badge, image, title, and author name

### 9. JoinCta
- The application SHALL display a call-to-action section prompting registration.
- Scenario — CTA section prompts registration:
  - **WHEN** the user scrolls to the join section
  - **THEN** a heading reads "Join Our Platform Today"
  - **AND** a "Register Now" button is visible

### 10. Footer
- The application SHALL display a 4-column footer with navigation, useful links, contact info, and a Component Dock attribution link.
- Scenario — Footer has four columns:
  - **WHEN** the user scrolls to the footer
  - **THEN** 4 columns are visible: About, Quick Menu, Useful Links, Contact Us
- Scenario — Footer links to Component Dock:
  - **WHEN** the user scrolls to the footer
  - **THEN** a link to "https://www.componentdock.com/" is present
  - **AND** it is branded as "Component Dock"
- Scenario — Footer shows contact info:
  - **WHEN** the user scrolls to the footer
  - **THEN** address, phone number, and email are displayed

### Cross-cutting requirements

- **Navigation** — The application SHALL display a top bar with Register/Login links and contact info, and a sticky navbar with logo, navigation links, and search.
  - Scenario — Top bar shows auth links: **WHEN** the user visits the LearnPeak homepage; **THEN** "Register" and "Login" links are visible in the top bar
  - Scenario — Main nav has correct links: **WHEN** the user visits the LearnPeak homepage; **THEN** the navbar contains: Home, About Us, Courses, News, Contact; **AND** the logo text reads "learn"
  - Scenario — Mobile menu toggle works: **WHEN** the user clicks the mobile menu toggle button; **THEN** the mobile navigation menu opens with all nav links visible
- **Accessibility** — The application SHALL use semantic HTML landmarks (header, main, footer, nav) and proper ARIA attributes.
  - Scenario — Landmarks are present: **WHEN** the user visits the LearnPeak homepage; **THEN** banner, main, and contentinfo landmarks are present
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/learnpeak/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/learnpeak/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/learnpeak` ships on https://learnpeak.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/learnpeak/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/learnpeak/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/learnpeak/public/CNAME` = `learnpeak.free.componentdock.com`
  and the package `homepage` = `https://learnpeak.free.componentdock.com`.
