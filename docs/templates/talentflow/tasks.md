# Talentflow — Implementation Tasks

Source design: **Humanresources** (`https://colorlib.com/wp/template/humanresources/`) → recreation name **talentflow**. Shipped at https://talentflow.free.componentdock.com.

Scope: Talentflow is a professional HR consulting landing page template, recreating the ColorLib "Humanresources" design under a new name. It provides a complete single-page marketing site with navbar, hero, features, about/accordion, stats counters, team, testimonials, blog, and footer sections.

## Component breakdown

Render order as composed in `apps/talentflow/src/App.tsx`:

### 1. Navbar
- Users SHALL see a sticky navbar with the "Talentflow" logo and navigation links (Home, About, Services, Team, Blog, Contact). On mobile, a hamburger button SHALL toggle the navigation menu.
- Scenario — Desktop navbar renders all links:
  - **WHEN** the page loads on a desktop viewport
  - **THEN** the navbar displays "Talentflow" logo and links for Home, About, Services, Team, Blog, Contact
- Scenario — Mobile hamburger toggles menu:
  - **WHEN** the user clicks the hamburger button on mobile
  - **THEN** the mobile navigation menu expands and the button label changes to "Close menu"

### 2. Hero
- Users SHALL see a full-width hero section with a background image, headline "We Are Your Partners in Human Resource", a subtext paragraph, a "Get Started" button, and a "Learn More" text link.
- Scenario — Hero renders headline and buttons:
  - **WHEN** the hero section is visible
  - **THEN** the headline reads "We Are Your Partners in Human Resource" and a "Get Started" button is present

### 3. Features
- Users SHALL see three feature cards (Corporate Collaboration, Strategic Partners, Infinite Posibilities) each with an icon, title, description, and "Learn More" link.
- Scenario — Three feature cards are displayed:
  - **WHEN** the features section is visible
  - **THEN** three cards are rendered with titles "Corporate Collaboration", "Strategic Partners", and "Infinite Posibilities"

### 4. About
- Users SHALL see a two-column about section with an image carousel on the left and a "Why Us?" accordion on the right with four expandable items.
- Scenario — Accordion expands and collapses:
  - **WHEN** the user clicks an accordion item title
  - **THEN** the item content expands and clicking it again collapses it

### 5. Stats
- Users SHALL see three statistics: Number of Clients (99,399), Number of Personnel (199), and Years of Experience (24).
- Scenario — Three stat counters are displayed:
  - **WHEN** the stats section is visible
  - **THEN** values "99,399", "199", and "24" are displayed with their labels

### 6. Team
- Users SHALL see "The Leadership" heading and three team member cards (Bob Miller, Jean Smith, David Wilson) with name, role, and bio that reveals on hover.
- Scenario — Three team members are rendered:
  - **WHEN** the team section is visible
  - **THEN** three cards show names "Bob Miller", "Jean Smith", and "David Wilson" with role "CEO and Co-Founder"

### 7. Testimonials
- Users SHALL see a "Happy Customers" heading with a centered blockquote testimonial.
- Scenario — Testimonial quote is displayed:
  - **WHEN** the testimonials section is visible
  - **THEN** a blockquote with the text "Far far away, behind the word mountains" is displayed

### 8. Blog
- Users SHALL see "Our Blog" heading and four blog post cards in a 2x2 asymmetric layout with title, date, and author.
- Scenario — Four blog posts are rendered:
  - **WHEN** the blog section is visible
  - **THEN** four cards show titles "When she reached the first", "Duden flows by their place", "Italic Mountains", and "Behind the word mountains"

### 9. Footer
- Users SHALL see a footer with About text, Learn More links, Support links, About Us links, social icons (Facebook, Twitter, GitHub), and a copyright line linking to https://www.componentdock.com/ branded as "Component Dock".
- Scenario — Footer links to Component Dock:
  - **WHEN** the footer is visible
  - **THEN** a link to "https://www.componentdock.com/" is present with text "Component Dock"

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/talentflow/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/talentflow/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/talentflow` ships on https://talentflow.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/talentflow/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/talentflow/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/talentflow/public/CNAME` = `talentflow.free.componentdock.com`
  and the package `homepage` = `https://talentflow.free.componentdock.com`.
