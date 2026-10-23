# Forgeit — Implementation Tasks

Source design: **Create** (`https://colorlib.com/wp/template/create/`) → recreation name **forgeit**. Shipped at https://forgeit.free.componentdock.com.

Scope: Forgeit is a creative agency / web studio onepage template. It recreates the ColorLib "Create" design under a different name with React 19, Tailwind CSS 4, and TypeScript. The template showcases a full creative agency landing page with sections for features, portfolio, services, about, team, blog, and contact.

## Component breakdown

Render order as composed in `apps/forgeit/src/App.tsx`:

### 1. TopBar
- The template SHALL render a dark top bar with phone number, email address, and social media icon links.
- Scenario — TopBar shows contact details:
  - **WHEN** the page loads
  - **THEN** the top bar displays a phone number and email address
- Scenario — TopBar shows social icons:
  - **WHEN** the page loads
  - **THEN** the top bar displays Facebook, Twitter, Instagram, and LinkedIn icon links

### 2. Navbar
- The template SHALL render a sticky white navbar with the logo "Forgeit." and navigation links.
- Scenario — Navbar shows logo:
  - **WHEN** the page loads
  - **THEN** the navbar displays "Forgeit" with a brand-colored period
- Scenario — Navbar shows navigation links:
  - **WHEN** the page loads
  - **THEN** the navbar displays links for Home, Work, Services, About, Blog, and Contact

### 3. Hero
- The template SHALL render a hero section with a background image, heading text, and a CTA button.
- Scenario — Hero shows heading:
  - **WHEN** the page loads
  - **THEN** the hero displays "We Love To Build" as the main heading
- Scenario — Hero shows CTA button:
  - **WHEN** the page loads
  - **THEN** the hero displays a "Watch Video" button

### 4. Features
- The template SHALL render a features section with three numbered feature cards.
- Scenario — Features shows three cards:
  - **WHEN** the page loads
  - **THEN** three feature cards are displayed with numbers 01, 02, 03
- Scenario — Feature cards have titles:
  - **WHEN** the page loads
  - **THEN** the feature cards show titles "Innovate", "Create", and "Scale"

### 5. Portfolio
- The template SHALL render a portfolio section with a grid of work items.
- Scenario — Portfolio shows heading:
  - **WHEN** the page loads
  - **THEN** the portfolio section displays "Our Works" as the heading
- Scenario — Portfolio shows work items:
  - **WHEN** the page loads
  - **THEN** six portfolio items are displayed with images, titles, and categories

### 6. DarkFeatureStrip
- The template SHALL render a dark background section with feature items and an image.
- Scenario — Dark strip shows four features:
  - **WHEN** the page loads
  - **THEN** four feature items are displayed: Strategy, Web Development, Art Direction, Copywriting
- Scenario — Dark strip shows image:
  - **WHEN** the page loads
  - **THEN** the dark section displays an image on the left side

### 7. Testimonials
- The template SHALL render a testimonials section with quoted text and person names.
- Scenario — Testimonials shows heading:
  - **WHEN** the page loads
  - **THEN** the testimonials section displays "Testimonials" as the heading
- Scenario — Testimonials shows quotes:
  - **WHEN** the page loads
  - **THEN** testimonial quotes with person names are displayed

### 8. Services
- The template SHALL render a services section with icon-based service cards.
- Scenario — Services shows heading:
  - **WHEN** the page loads
  - **THEN** the services section displays "Our Services" as the heading
- Scenario — Services shows six items:
  - **WHEN** the page loads
  - **THEN** six service items are displayed: Web Design, eCommerce, Web Applications, Branding, Copy Writing, Mobile Applications

### 9. About
- The template SHALL render an about section with a heading, description, and feature cards.
- Scenario — About shows heading and description:
  - **WHEN** the page loads
  - **THEN** the about section displays "About Us" heading with a description paragraph
- Scenario — About shows feature cards:
  - **WHEN** the page loads
  - **THEN** two feature cards are displayed: Web & Mobile Specialties and Intuitive Thinkers

### 10. Team
- The template SHALL render a team section with member profiles.
- Scenario — Team shows heading:
  - **WHEN** the page loads
  - **THEN** the team section displays "Our Team" as the heading
- Scenario — Team shows three members:
  - **WHEN** the page loads
  - **THEN** three team members are displayed with names, titles, descriptions, and social icons

### 11. Blog
- The template SHALL render a blog section with post cards.
- Scenario — Blog shows heading:
  - **WHEN** the page loads
  - **THEN** the blog section displays "Blog" as the heading
- Scenario — Blog shows three posts:
  - **WHEN** the page loads
  - **THEN** three blog post cards are displayed with titles, authors, dates, excerpts, and "Continue Reading" links

### 12. Contact
- The template SHALL render a dark top bar with phone number, email address, and social media icon links.
- Scenario — TopBar shows contact details:
  - **WHEN** the page loads
  - **THEN** the top bar displays a phone number and email address
- Scenario — TopBar shows social icons:
  - **WHEN** the page loads
  - **THEN** the top bar displays Facebook, Twitter, Instagram, and LinkedIn icon links

### 13. CtaBanner
- The template SHALL render a full-width brand-colored CTA banner.
- Scenario — CTA shows message:
  - **WHEN** the page loads
  - **THEN** a full-width banner displays "Let's Get Started"

### 14. Footer
- The template SHALL render a footer with navigation, social links, newsletter form, and a link to Component Dock.
- Scenario — Footer shows navigation sections:
  - **WHEN** the page loads
  - **THEN** the footer displays About Us, Features, Follow Us, and Subscribe Newsletter sections
- Scenario — Footer links to Component Dock:
  - **WHEN** the page loads
  - **THEN** the footer contains a link to https://www.componentdock.com/
- Scenario — Footer shows copyright:
  - **WHEN** the page loads
  - **THEN** the footer displays a copyright line

### Cross-cutting requirements

- **Contact section shows form and info** — The template SHALL render a contact section with a form and contact information sidebar.
  - Scenario — Contact shows heading: **WHEN** the page loads; **THEN** the contact section displays "Contact Us" as the heading
  - Scenario — Contact shows form fields: **WHEN** the page loads; **THEN** the contact form displays fields for First Name, Last Name, Email, Subject, Message, and a Submit button
  - Scenario — Contact shows info sidebar: **WHEN** the page loads; **THEN** the sidebar displays Address, Phone, and Email information
- **App renders all sections in order** — The template SHALL compose all sections in the correct order and set the document title.
  - Scenario — App renders all sections: **WHEN** the page loads; **THEN** all major sections are rendered in order: TopBar, Navbar, Hero, Features, Portfolio, Dark Feature Strip, Testimonials, Services, About, Team, Blog, Contact, CTA, Footer
  - Scenario — App sets document title: **WHEN** the page loads; **THEN** the document title is set to "Forgeit — Creative Agency Template"
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/forgeit/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/forgeit/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/forgeit` ships on https://forgeit.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/forgeit/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/forgeit/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/forgeit/public/CNAME` = `forgeit.free.componentdock.com`
  and the package `homepage` = `https://forgeit.free.componentdock.com`.
