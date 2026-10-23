# Litigator — Implementation Tasks

Source design: **Justice** (`https://colorlib.com/wp/template/justice/`) → recreation name **litigator**. Shipped at https://litigator.free.componentdock.com.

Scope: Litigator is a free law firm landing page template that recreates the ColorLib "Justice" design under a different name. It provides a dark-themed, professional legal services website with a hero section, practice areas, statistics, client testimonials, expertise cards, a call-to-action, and a footer.

## Component breakdown

Render order as composed in `apps/litigator/src/App.tsx`:

### 1. Navbar
- The navbar SHALL display the logo "Litigator" with a primary-colored dot, desktop navigation links, and a mobile hamburger toggle.
- Scenario — Desktop navigation renders all links:
  - **WHEN** I view the navbar
  - **THEN** I see a link "Home" pointing to "#home"
  - **AND** I see a link "Practice Areas" pointing to "#practice-areas"
  - **AND** I see a link "Services" pointing to "#expertise"
  - **AND** I see a link "Attorneys" pointing to "#attorneys"
  - **AND** I see a link "About" pointing to "#about"
  - **AND** I see a link "Contact Us" pointing to "#contact"
- Scenario — Mobile menu opens and closes:
  - **WHEN** I click the mobile menu button labeled "Open menu"
  - **THEN** a mobile navigation appears with aria-label "Mobile navigation"
  - **AND** the button label changes to "Close menu"
  - **WHEN** I click a link in the mobile navigation
  - **THEN** the mobile navigation closes

### 2. Hero
- The hero section SHALL display a background image with overlay, the headline "We Fight For Your Right", a description, and a "Free Consultation" CTA button linking to the contact section.
- Scenario — Hero renders correctly:
  - **WHEN** I view the hero section
  - **THEN** I see a heading level 1 containing "We Fight"
  - **AND** I see a description about dedicated legal professionals
  - **AND** I see a "Free Consultation" link pointing to "#contact"

### 3. PracticeAreas
- The practice areas section SHALL display a heading, description, four practice area items with icons, and navigation links.
- Scenario — Practice areas render correctly:
  - **WHEN** I view the practice areas section
  - **THEN** I see a heading "Our Practice Areas"
  - **AND** I see items for "Banking and Finance Law", "Commercial Law", "Corporate Law", and "Criminal Law"
  - **AND** I see a "Learn More" link
  - **AND** I see a "More Practice Areas" link

### 4. Stats
- The stats section SHALL display a heading "50 Years" and four stat cards with values and labels.
- Scenario — Stats render correctly:
  - **WHEN** I view the stats section
  - **THEN** I see values "90+", "3K+", "2K+", and "200+"
  - **AND** I see labels "Awards", "Cases Won", "Clients", and "Attorneys"

### 5. Testimonials
- The testimonials section SHALL display a heading "Happy Clients", a quote, author info, and prev/next navigation buttons.
- Scenario — Testimonials render with initial quote:
  - **WHEN** I view the testimonials section
  - **THEN** I see a heading "Happy Clients"
  - **AND** I see a testimonial quote from "Sarah Mitchell"
- Scenario — Testimonials navigate forward:
  - **WHEN** I click the "Next testimonial" button
  - **THEN** the next testimonial is displayed
  - **WHEN** I click the "Next testimonial" button to reach the last item
  - **AND** I click it again
  - **THEN** the first testimonial wraps around and is displayed
- Scenario — Testimonials navigate backward:
  - **WHEN** I click the "Previous testimonial" button from the first item
  - **THEN** the last testimonial wraps around and is displayed
  - **WHEN** I click the "Previous testimonial" button again
  - **THEN** the previous testimonial is displayed

### 6. Expertise
- The expertise section SHALL display a heading and four service cards with icons, titles, descriptions, and "Learn More" links.
- Scenario — Expertise cards render correctly:
  - **WHEN** I view the expertise section
  - **THEN** I see a heading "More Expertise"
  - **AND** I see cards for "Labor and Employment", "Corporate & Civil Litigation", "Intellectual Property Law", and "Criminal Prosecution and Defense"
  - **AND** each card has a "Learn More" link

### 7. CTA
- The hero section SHALL display a background image with overlay, the headline "We Fight For Your Right", a description, and a "Free Consultation" CTA button linking to the contact section.
- Scenario — Hero renders correctly:
  - **WHEN** I view the hero section
  - **THEN** I see a heading level 1 containing "We Fight"
  - **AND** I see a description about dedicated legal professionals
  - **AND** I see a "Free Consultation" link pointing to "#contact"

### 8. Footer
- The footer SHALL display four columns of links, contact information, and a copyright line with a Component Dock link.
- Scenario — Footer renders sections and contact info:
  - **WHEN** I view the footer
  - **THEN** I see headings for "Home", "Practice Area", "Services", and "Contact"
  - **AND** I see an address "43 Raymouth Rd"
  - **AND** I see a phone link "+1(123)-456-7890"
  - **AND** I see an email link "info@litigator.com"
- Scenario — Footer links to Component Dock:
  - **WHEN** I view the footer
  - **THEN** I see a link "Component Dock" pointing to "https://www.componentdock.com/" with target="_blank"

### Cross-cutting requirements

- **Page renders all sections with correct landmarks and title** — The template SHALL display a navigation bar, hero, practice areas, statistics, testimonials, expertise cards, a call-to-action banner, and a footer.
  - Scenario — Page loads with all sections: **WHEN** I open the Litigator template; **THEN** the document title is "Litigator — Law Firm Landing Template"; **AND** I see a banner landmark; **AND** I see a navigation landmark named "Main navigation"; **AND** I see a main landmark; **AND** I see a heading level 1 containing "We Fight"; **AND** I see headings level 2 for "Our Practice Areas", "50 Years", "Happy Clients", and "More Expertise"; **AND** I see a contentinfo landmark
- **CTA section displays consultation prompt** — The CTA section SHALL display a heading and a "Call Us Now" button linking to the contact section.
  - Scenario — CTA renders correctly: **WHEN** I view the CTA section; **THEN** I see a heading containing "Let's get started"; **AND** I see a "Call Us Now" link pointing to "#contact"
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/litigator/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/litigator/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/litigator` ships on https://litigator.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/litigator/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/litigator/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/litigator/public/CNAME` = `litigator.free.componentdock.com`
  and the package `homepage` = `https://litigator.free.componentdock.com`.
