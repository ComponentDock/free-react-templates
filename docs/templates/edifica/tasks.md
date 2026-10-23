# Edifica — Implementation Tasks

Source design: **Homebuilder** (`https://colorlib.com/wp/template/homebuilder/`) → recreation name **edifica**. Shipped at https://edifica.free.componentdock.com.

Scope: Edifica is a construction and home builder landing page template. It showcases services, company expertise, project portfolio, client testimonials, and a blog, with a newsletter signup and quote request form.

## Component breakdown

Render order as composed in `apps/edifica/src/App.tsx`:

### 1. Navbar
- The template SHALL display a dark navy navigation bar with the brand name "Edifica." and navigation links for Home, About, Services, Projects, Blog, and Contact, plus a search icon.
- Scenario — Renders brand and nav links:
  - **WHEN** the page loads
  - **THEN** the navbar displays the brand "Edifica." with a golden accent dot
  - **AND** all six navigation links are visible (Home, About, Services, Projects, Blog, Contact)
  - **AND** a search icon button is present

### 2. Hero
- The template SHALL display a fullscreen hero section with a background image, dark overlay, and centered white text including a subheading and main heading.
- Scenario — Renders hero content:
  - **WHEN** the page loads
  - **THEN** the hero section displays the subheading "We're here to help you"
  - **AND** the main heading "Home Builder" is visible

### 3. Services
- The template SHALL display a 4-column services grid with icons, headings, and descriptions for Construction, House Renovation, Painting, and Architecture Design.
- Scenario — Renders all four services:
  - **WHEN** the page loads
  - **THEN** four service cards are displayed with titles: Construction, House Renovation, Painting, Architecture Design
  - **AND** each card has a descriptive paragraph

### 4. Services2
- No dedicated spec block — hold this band to the design notes.
- Anchors: Why Choose Us

### 5. AboutSplit
- The template SHALL display a split about section with a video thumbnail on the left and tabbed content (Our Mission, Our Vision, Our Value) on the right.
- Scenario — Renders about content with tabs:
  - **WHEN** the page loads
  - **THEN** the heading "We create and turn into reality" is visible
  - **AND** three tab buttons are present: Our Mission, Our Vision, Our Value
  - **AND** the Mission tab is active by default showing its content
- Scenario — Tab switching:
  - **WHEN** the user clicks the "Our Vision" tab
  - **THEN** the vision content is displayed
  - **AND** the vision tab is marked as selected
- Scenario — Value tab switching:
  - **WHEN** the user clicks the "Our Value" tab
  - **THEN** the value content is displayed

### 6. Counter
- The template SHALL display a statistics bar with four metrics: 50 Years Experienced, 8,500 Projects Done, 378 Professional Experts, 1,200 Machineries Equipments.
- Scenario — Renders all statistics:
  - **WHEN** the page loads
  - **THEN** the numbers 50, 8,500, 378, and 1,200 are displayed
  - **AND** corresponding labels are visible

### 7. WorkGallery
- The template SHALL display a 3x2 grid of project images with hover overlay showing category and title.
- Scenario — Renders project cards:
  - **WHEN** the page loads
  - **THEN** six project images are displayed
  - **AND** project titles are visible

### 8. Testimonials
- The template SHALL display a blue-background testimonials section with heading "Happy Clients" and three testimonial cards.
- Scenario — Renders testimonials:
  - **WHEN** the page loads
  - **THEN** the heading "Happy Clients" is visible
  - **AND** three testimonial quotes are displayed with author names

### 9. Blog
- The template SHALL display a 3-column blog section with image cards showing date, author, comment count, and article title.
- Scenario — Renders blog posts:
  - **WHEN** the page loads
  - **THEN** three blog cards are displayed with titles and metadata

### 10. Newsletter
- The template SHALL display a golden-background newsletter section with heading "Subscribe to our Newsletter", an email input, and a subscribe button.
- Scenario — Renders newsletter form:
  - **WHEN** the page loads
  - **THEN** the newsletter heading is visible
  - **AND** an email input field and subscribe button are present
- Scenario — Form interaction:
  - **WHEN** the user types an email address and clicks Subscribe
  - **THEN** the email field is cleared

### 11. Footer
- The template SHALL display a dark-background footer with About Us section, social links, Services/About/Resources link columns, a Request A Quote form, and a copyright line linking to Component Dock.
- Scenario — Renders footer content:
  - **WHEN** the page loads
  - **THEN** the footer displays the About Us section
  - **AND** social media links (Facebook, Twitter, Instagram) are present
  - **AND** Services, About, and Resources link columns are visible
  - **AND** the Request A Quote form has Name, Email, Subject, Message fields and a Send button
- Scenario — Footer copyright:
  - **WHEN** the page loads
  - **THEN** the copyright line includes a link to https://www.componentdock.com/ labeled "Component Dock"
- Scenario — Quote form submission:
  - **WHEN** the user fills in the quote form fields and clicks Send
  - **THEN** all form fields are cleared

### Cross-cutting requirements

- **Features row** — The template SHALL display a 3-column features row highlighting Expert & Professional, High Quality Work, and 24/7 Help Support.
  - Scenario — Renders all three features: **WHEN** the page loads; **THEN** three feature cards are displayed with titles: Expert & Professional, High Quality Work, 24/7 Help Support
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/edifica/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/edifica/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/edifica` ships on https://edifica.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/edifica/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/edifica/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/edifica/public/CNAME` = `edifica.free.componentdock.com`
  and the package `homepage` = `https://edifica.free.componentdock.com`.
