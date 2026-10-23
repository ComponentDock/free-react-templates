# Eminence — Implementation Tasks

Source design: **Meetme** (`https://colorlib.com/wp/template/meetme/`) → recreation name **eminence**. Shipped at https://eminence.free.componentdock.com.

Scope: Eminence is a single-page personal portfolio/resume website in the free-react-templates monorepo.

## Component breakdown

Render order as composed in `apps/eminence/src/App.tsx`:

### 1. Navbar
- The template SHALL display a fixed navigation bar with the "Eminence" logo text and links to Home, About, Services, Gallery, Testimonials, and Contact. On mobile, a hamburger menu toggles a dropdown of nav links.
- Scenario — Desktop navigation renders all links:
  - **GIVEN** the page loads on a desktop viewport
  - **WHEN** the user views the navbar
  - **THEN** the logo "Eminence" and links for Home, About, Services, Gallery, Testimonials, and Contact are visible
- Scenario — Mobile menu toggles on button click:
  - **GIVEN** the page loads on a mobile viewport
  - **WHEN** the user clicks the hamburger menu button
  - **THEN** a dropdown menu with all nav links appears
  - **AND** clicking a link closes the menu

### 2. Hero
- The template SHALL display a hero section with a profile photo, name ("Donald McKinney"), title ("Junior UI/UX Developer"), a bio paragraph, contact information (date, phone, email, address), and social media links (Facebook, Twitter, LinkedIn).
- Scenario — Hero renders profile details:
  - **GIVEN** the page loads
  - **WHEN** the hero section is visible
  - **THEN** the profile photo, name, title, and bio text are displayed
  - **AND** contact info items (date, phone, email, address) are shown
  - **AND** social links for Facebook, Twitter, and LinkedIn are present

### 3. About
- The template SHALL display an "About Myself" section with a bio paragraph, three stat boxes (Total Donation $2.5M, Total Projects 1465, Total Volunteers 3965), and five skill progress bars (After Effects 85%, Photoshop 90%, Illustrator 70%, Sublime 95%, Sketch 75%).
- Scenario — Stats are displayed:
  - **GIVEN** the about section is visible
  - **WHEN** the user views the stats
  - **THEN** three stat boxes show Total Donation $2.5M, Total Projects 1465, and Total Volunteers 3965
- Scenario — Skill bars show correct percentages:
  - **GIVEN** the about section is visible
  - **WHEN** the user views the skill bars
  - **THEN** five progress bars are displayed with correct percentage labels and ARIA attributes

### 4. ExperienceTabs
- The template SHALL display a tabbed section with "My Experiences" and "My Education" tabs. The experiences tab is active by default. Each tab shows a timeline of entries with period, company/school, role/degree, and location.
- Scenario — Experiences tab is active by default:
  - **GIVEN** the tabs section loads
  - **WHEN** the user views the tabs
  - **THEN** the "My Experiences" tab is selected and experience entries are shown
- Scenario — Clicking education tab switches content:
  - **GIVEN** the tabs section is visible
  - **WHEN** the user clicks "My Education"
  - **THEN** education entries are displayed and the experiences tab is deselected

### 5. Services
- The template SHALL display three service cards: Architecture, Interior Design, and Concept Design, each with an icon, title, and description.
- Scenario — All three services are displayed:
  - **GIVEN** the services section is visible
  - **WHEN** the user views the section
  - **THEN** cards for Architecture, Interior Design, and Concept Design are shown with descriptions

### 6. Gallery
- The template SHALL display a filterable project gallery with filter tabs (All, Vector, Raster, UI/UX, Printing) and six project cards with images, titles, and "Client Project" labels. A "Load More Items" button is shown below.
- Scenario — All projects shown by default:
  - **GIVEN** the gallery section loads
  - **WHEN** the "All" filter is active
  - **THEN** six project cards are displayed
- Scenario — Filtering by category:
  - **GIVEN** the gallery section is visible
  - **WHEN** the user clicks the "Raster" filter
  - **THEN** only projects tagged with "raster" category are shown

### 7. Testimonials
- The template SHALL display three testimonial cards with quote text, author name, and star ratings (4.5 or 5 stars).
- Scenario — Testimonials render correctly:
  - **GIVEN** the testimonials section is visible
  - **WHEN** the user views the section
  - **THEN** three testimonial cards are shown with quotes, author names, and star ratings

### 8. Footer
- The template SHALL display a footer with three columns: About Me with Component Dock copyright link, Newsletter signup form with email input and submit button, and Follow Me social links (Facebook, Twitter, Dribbble, Behance).
- Scenario — Footer renders all sections:
  - **GIVEN** the footer is visible
  - **WHEN** the user views the footer
  - **THEN** About Me text, Newsletter form, and social links are displayed
  - **AND** the copyright links to Component Dock (https://www.componentdock.com/)
- Scenario — Newsletter form submission:
  - **GIVEN** the newsletter form is visible
  - **WHEN** the user types an email and clicks Subscribe
  - **THEN** the email input is cleared

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/eminence/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/eminence/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/eminence` ships on https://eminence.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/eminence/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/eminence/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/eminence/public/CNAME` = `eminence.free.componentdock.com`
  and the package `homepage` = `https://eminence.free.componentdock.com`.
