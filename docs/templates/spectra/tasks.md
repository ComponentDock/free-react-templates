# Spectra — Implementation Tasks

Source design: **Niko** (`https://colorlib.com/wp/template/niko/`) → recreation name **spectra**. Shipped at https://spectra.free.componentdock.com.

Scope: Spectra is a personal portfolio/freelance developer template, recreating the ColorLib Niko design. It provides a single-page portfolio with navbar, hero section, about section, skills with progress bars, project gallery, blog posts, contact form, and a branded footer.

## Component breakdown

Render order as composed in `apps/spectra/src/App.tsx`:

### 1. Navbar
- The template SHALL display a fixed dark navbar with brand logo "S", navigation links (Home, About, Skills, Projects, Blog, Contact), and a mobile hamburger toggle. The navbar SHALL apply a backdrop blur effect when the user scrolls past 50px.
- Scenario — Desktop navigation renders all links:
  - **WHEN** the page loads on a desktop viewport
  - **THEN** the navbar displays all six navigation links
- Scenario — Mobile menu toggles on button click:
  - **WHEN** the user clicks the hamburger toggle button
  - **THEN** the mobile menu expands showing all navigation links
  - **AND** the button aria-expanded attribute is true
- Scenario — Mobile menu closes when a link is clicked:
  - **WHEN** the mobile menu is open and the user clicks a navigation link
  - **THEN** the mobile menu closes
- Scenario — Navbar adds scroll effect:
  - **WHEN** the user scrolls past 50px
  - **THEN** the navbar applies a backdrop blur and shadow class

### 2. Hero
- The template SHALL display a full-width hero section with a background image, a "Hello" subheading, a main heading with the developer name, a subtitle, and a "Hire me" button linking to the contact section.
- Scenario — Hero displays greeting and name:
  - **WHEN** the page loads
  - **THEN** the hero section shows "Hello" subheading
  - **AND** shows "I'm Alex Morgan" heading
  - **AND** shows "A Freelance Web Developer" subtitle
- Scenario — Hero CTA links to contact:
  - **WHEN** the user clicks "Hire me"
  - **THEN** the page scrolls to the contact section

### 3. About
- The template SHALL display an about section with a photo, "Welcome" subheading, "About Me" heading, description paragraph, two service cards (Web Design, Web Application), and a counter showing "200 Finished Projects".
- Scenario — About displays services:
  - **WHEN** the about section renders
  - **THEN** service cards for "Web Design" and "Web Application" are visible
- Scenario — About displays project counter:
  - **WHEN** the about section renders
  - **THEN** the counter shows "200" and "Finished Projects"

### 4. Skills
- The template SHALL display a skills section on a light background with four progress bars: Photoshop (75%), jQuery (60%), HTML5 (85%), CSS3 (90%). Each progress bar SHALL have proper ARIA attributes.
- Scenario — Skills renders all progress bars:
  - **WHEN** the skills section renders
  - **THEN** four progress bars are visible with correct percentages
- Scenario — Progress bars have accessible attributes:
  - **WHEN** the skills section renders
  - **THEN** each progress bar has role="progressbar" with aria-valuenow, aria-valuemin, and aria-valuemax

### 5. Projects
- The template SHALL display a projects section with six project cards in a responsive grid. Each card SHALL show an image with a hover overlay containing the project title and an icon.
- Scenario — Projects displays all cards:
  - **WHEN** the projects section renders
  - **THEN** six project cards are visible with titles

### 6. Blog
- The template SHALL display a blog section with three blog post cards. Each card SHALL show an image, date, author, title, and a "Read more" link.
- Scenario — Blog displays all posts:
  - **WHEN** the blog section renders
  - **THEN** three blog posts are visible with dates and titles

### 7. Contact
- The template SHALL display a contact section with contact information (address, phone, email) and a form with name, email, subject, message fields, and a submit button. On submit, a success message SHALL replace the form.
- Scenario — Contact form submits successfully:
  - **WHEN** the user fills all form fields and clicks "Send Message"
  - **THEN** a "Thank you!" success message is displayed

### 8. Footer
- The template SHALL display a blue footer with brand name, description, social icons (Twitter, GitHub, LinkedIn), navigation links, latest projects, and a copyright line. The footer SHALL include a link to https://www.componentdock.com/ branded as "Component Dock".
- Scenario — Footer links to Component Dock:
  - **WHEN** the footer renders
  - **THEN** a link to https://www.componentdock.com/ is visible with text "Component Dock"
  - **AND** the link opens in a new tab
- Scenario — Footer has accessible social links:
  - **WHEN** the footer renders
  - **THEN** social links have aria-labels for Twitter, GitHub, and LinkedIn

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/spectra/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/spectra/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/spectra` ships on https://spectra.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/spectra/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/spectra/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/spectra/public/CNAME` = `spectra.free.componentdock.com`
  and the package `homepage` = `https://spectra.free.componentdock.com`.
