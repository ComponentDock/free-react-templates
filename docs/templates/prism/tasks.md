# Prism — Implementation Tasks

Source design: **Dup** (`https://colorlib.com/wp/template/dup/`) → recreation name **prism**. Shipped at https://prism.free.componentdock.com.

Scope: Recreation of ColorLib "Dup" (https://preview.colorlib.com/theme/dup/) as a React + Tailwind CSS creative agency template named "Prism". The template showcases a creative agency with sections for studio introduction, achievements, video, skills, testimonials, and contact.

## Component breakdown

Render order as composed in `apps/prism/src/App.tsx`:

### 1. Navbar
- The template SHALL render a fixed header with the "Prism" logo and navigation links (Home, About, Services, Portfolio, Contact). On mobile, a hamburger menu toggles a mobile navigation panel.
- Scenario — Desktop navigation renders all links:
  - **WHEN** the page loads on a desktop viewport
  - **THEN** the navbar displays the "Prism" logo and all five navigation links
- Scenario — Mobile menu toggle works:
  - **WHEN** the user clicks the hamburger menu button on mobile
  - **THEN** the mobile navigation panel opens and the button changes to a close icon
- Scenario — Mobile menu closes on link click:
  - **WHEN** the mobile menu is open and the user clicks a navigation link
  - **THEN** the mobile menu closes

### 2. Hero
- The template SHALL render a hero section with the headline "Sleek and Clean with same perspective", a subtitle about metropolitan technology, and a "Get Started" CTA button.
- Scenario — Hero renders headline and CTA:
  - **WHEN** the page loads
  - **THEN** the hero section displays the headline, subtitle text, and a "Get Started" button linking to the studio section

### 3. Studio
- The template SHALL render a studio section with a red overlay background, a studio image, and a white content card about "Green Forest Studio".
- Scenario — Studio section renders content:
  - **WHEN** the user scrolls to the studio section
  - **THEN** the heading "Green Forest Studio" and descriptive text are visible alongside a studio image

### 4. Achievements
- The template SHALL render a grid of 6 achievement items with icons and labels (Portfolio Pieces, Design Shots, Video Subscribers, Code Commits, Awards Won, Revenue Generated).
- Scenario — All achievement items render:
  - **WHEN** the page loads
  - **THEN** all 6 achievement items are displayed with their labels and counts

### 5. Video
- The template SHALL render a video section with a dark red overlay, a play button, and the heading "Everyone wants to be unique".
- Scenario — Video section renders play button and heading:
  - **WHEN** the user scrolls to the video section
  - **THEN** a play button and the heading text are visible

### 6. Skills
- The template SHALL render progress bars for 4 design tools: Adobe Photoshop CC (70%), Adobe Illustrator CC (60%), Adobe InDesign CC (50%), Adobe After Effects CC (40%).
- Scenario — All progress bars render with correct values:
  - **WHEN** the page loads
  - **THEN** 4 progress bars are displayed with the correct aria-valuenow attributes

### 7. Testimonials
- The template SHALL render a testimonials section with 3 client quotes, each including a name and role.
- Scenario — Testimonial cards render:
  - **WHEN** the page loads
  - **THEN** 3 testimonial cards are visible with client names and roles

### 8. Contact
- The template SHALL render a contact section with 3 contact cards (Address, Phone, Email) each with relevant details.
- Scenario — Contact cards render:
  - **WHEN** the page loads
  - **THEN** the Address, Phone, and Email contact cards are displayed with their details

### 9. Footer
- The template SHALL render a footer with a newsletter subscription form, 4 columns (About Agency, Navigation Links x2, Instafeed), and a copyright line linking to Component Dock.
- Scenario — Footer renders all columns and subscription form:
  - **WHEN** the page loads
  - **THEN** the footer displays the subscription form, all 4 columns, and a link to Component Dock
- Scenario — Footer subscription form clears on submit:
  - **WHEN** the user enters an email and clicks "Subscribe now"
  - **THEN** the email input is cleared
- Scenario — Footer copyright includes Component Dock link:
  - **WHEN** the page loads
  - **THEN** the copyright line contains a link to https://www.componentdock.com/ labeled "Component Dock"

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/prism/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/prism/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/prism` ships on https://prism.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/prism/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/prism/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/prism/public/CNAME` = `prism.free.componentdock.com`
  and the package `homepage` = `https://prism.free.componentdock.com`.
