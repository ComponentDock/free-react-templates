# Helm — Implementation Tasks

Source design: **Cruise** (`https://colorlib.com/wp/template/cruise/`) → recreation name **helm**. Shipped at https://helm.free.componentdock.com.

Scope: Helm is a free technology company landing page template built with React 19, Tailwind CSS 4, and TypeScript.

## Component breakdown

Render order as composed in `apps/helm/src/App.tsx`:

### 1. Navbar
- The navbar SHALL render a centered "Helm" logo with left navigation (Home, Technology, Careers) and right navigation (About, Blog, Contact).
- Scenario — Left navigation links:
  - **GIVEN** I am on the Helm page
  - **WHEN** I look at the left navigation
  - **THEN** I see "Home", "Technology", and "Careers" links
- Scenario — Right navigation links:
  - **GIVEN** I am on the Helm page
  - **WHEN** I look at the right navigation
  - **THEN** I see "About", "Blog", and "Contact" links
- Scenario — Logo:
  - **GIVEN** I am on the Helm page
  - **WHEN** I look at the center of the navbar
  - **THEN** I see the "Helm" logo text

### 2. Hero
- The hero section SHALL display a full-width background image with a centered heading and subtitle.
- Scenario — Hero heading:
  - **GIVEN** I am on the Helm page
  - **WHEN** I look at the hero section
  - **THEN** I see the heading "We can make it together"
- Scenario — Hero subtitle:
  - **GIVEN** I am on the Helm page
  - **WHEN** I look below the hero heading
  - **THEN** I see a subtitle paragraph

### 3. WhatWeDo
- The What We Do section SHALL display a section label, heading, subtitle, and three feature cards with images, titles, descriptions, and "Learn More" links.
- Scenario — Section label and heading:
  - **GIVEN** I scroll to the What We Do section
  - **WHEN** I look at the section
  - **THEN** I see "What We do" label and a heading
- Scenario — Three feature cards:
  - **GIVEN** I scroll to the What We Do section
  - **WHEN** I count the feature cards
  - **THEN** I see three cards each with an image, title, and "Learn More" link

### 4. Features
- The Our Features section SHALL display two alternating rows, each with a large image and a numbered text sidebar.
- Scenario — Numbered captions:
  - **GIVEN** I scroll to the Our Features section
  - **WHEN** I look at the captions
  - **THEN** I see "01." and "02."
- Scenario — Feature images:
  - **GIVEN** I scroll to the Our Features section
  - **WHEN** I count the images
  - **THEN** I see two large images

### 5. FutureDesign
- The Design for the Future section SHALL display four feature boxes in a 2x2 grid with titles and descriptions.
- Scenario — Feature titles:
  - **GIVEN** I scroll to the Design for the future section
  - **WHEN** I look at the feature titles
  - **THEN** I see "Creative Technology", "World-class Quality" (twice), and "Deep Resources"

### 6. Testimonial
- The testimonial section SHALL display a blockquote with a quote icon, testimonial text, and attribution.
- Scenario — Testimonial quote:
  - **GIVEN** I scroll to the testimonial section
  - **WHEN** I look at the blockquote
  - **THEN** I see the quote text and attribution "Mike Dorney — CEO and Co-Founder"

### 7. BlogPosts
- The blog section SHALL display four blog post cards with images, dates, titles, and "Read More" links.
- Scenario — Four blog cards:
  - **GIVEN** I scroll to the blog section
  - **WHEN** I count the blog cards
  - **THEN** I see four cards each with an image, date, title, and "Read More" link

### 8. Footer
- The footer SHALL display About Us, Features, Newsletter, and social links with a copyright line linking to Component Dock.
- Scenario — Footer headings:
  - **GIVEN** I scroll to the footer
  - **WHEN** I look at the headings
  - **THEN** I see "About Us", "Features", and "Subscribe to Newsletter"
- Scenario — Newsletter form:
  - **GIVEN** I scroll to the footer
  - **WHEN** I enter an email and click Subscribe
  - **THEN** the input clears
- Scenario — Component Dock link:
  - **GIVEN** I scroll to the footer
  - **WHEN** I look at the copyright line
  - **THEN** I see a link to "Component Dock" at https://www.componentdock.com/

### Cross-cutting requirements

- **Footer links to Component Dock** — Every template's footer MUST link https://www.componentdock.com/ branded as "Component Dock".
  - Scenario — Component Dock attribution: **GIVEN** I am on the Helm page; **WHEN** I scroll to the footer; **THEN** I see a link labeled "Component Dock" pointing to https://www.componentdock.com/
- **Design tokens match the ColorLib Cruise source** — The template SHALL use DM Sans font, coral-orange primary (#ff5533), dark teal-gray body text (#364d59), light section backgrounds (#f8f9fa), and a black footer.
  - Scenario — Primary color: **GIVEN** I inspect the rendered page; **WHEN** I look at accent elements; **THEN** they use coral-orange (#ff5533) primary color
  - Scenario — Font family: **GIVEN** I inspect the rendered page; **WHEN** I check the font; **THEN** it uses DM Sans via Google Fonts
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/helm/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/helm/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/helm` ships on https://helm.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/helm/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/helm/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/helm/public/CNAME` = `helm.free.componentdock.com`
  and the package `homepage` = `https://helm.free.componentdock.com`.
