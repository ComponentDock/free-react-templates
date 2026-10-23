# Kael — Implementation Tasks

Source design: **Satner** (`https://colorlib.com/wp/template/satner/`) → recreation name **kael**. Shipped at https://kael.free.componentdock.com.

Scope: Recreate the ColorLib "Satner" portfolio template (https://colorlib.com/wp/template/satner/) as a React 19 + Tailwind CSS 4 + TypeScript single-page portfolio site.

## Component breakdown

Render order as composed in `apps/kael/src/App.tsx`:

### 1. Navbar
- The page SHALL render a navbar with desktop nav links and a hamburger toggle on mobile. Clicking the hamburger SHALL open a mobile menu. Clicking a link in the mobile menu SHALL close the menu.
- Scenario — Mobile menu toggles:
  - **WHEN** the user clicks the hamburger button
  - **THEN** the mobile menu opens with all nav links visible
- Scenario — Mobile menu closes on link click:
  - **WHEN** the mobile menu is open and a nav link is clicked
  - **THEN** the mobile menu closes

### 2. Hero
- The page SHALL render a hero section with gradient background, greeting text ("Hello"), developer name ("I am Kael"), role subtitle ("Senior Developer"), two CTA buttons (Hire Me, Get CV), and a portrait image on the right.
- Scenario — Hero renders all elements:
  - **WHEN** the page loads
  - **THEN** the hero section displays the greeting, name, role, both CTA buttons, and the portrait image
- Scenario — CTA buttons are interactive:
  - **WHEN** the user views the hero
  - **THEN** the "Hire Me" button and "Get CV" link are both visible and clickable

### 3. About
- The page SHALL render an about section with an image on the left, a heading ("Let's Introduce About Myself"), two bio paragraphs, and a "Download CV" button.
- Scenario — About section renders:
  - **WHEN** the page loads
  - **THEN** the about section displays the heading, bio text, image, and CV download button

### 4. Brands
- The page SHALL render a brand logos grid (6 logos) alongside a "10 Years Experience" counter and a phone number CTA.
- Scenario — Brands section renders:
  - **WHEN** the page loads
  - **THEN** brand logos, experience counter, and phone number are all visible

### 5. Services
- The page SHALL render a services section with a heading ("Service Offers") and four service cards (Web Development, UI/UX Design, Web Design, SEO Optimization), each with an icon, title, and description.
- Scenario — All services render:
  - **WHEN** the page loads
  - **THEN** all four service cards display their titles and descriptions

### 6. Portfolio
- The page SHALL render a portfolio section with filter tabs (All, Popular, Latest, Following, Upcoming) and a 3-column image grid. Clicking a tab SHALL filter the grid to show only items in that category.
- Scenario — All items shown by default:
  - **WHEN** the page loads
  - **THEN** all six portfolio items are visible
- Scenario — Filtering works:
  - **WHEN** the user clicks the "Popular" filter tab
  - **THEN** only "Popular" category items are shown

### 7. Testimonials
- The page SHALL render a testimonials section with a heading ("Client Say About Me") and three testimonial cards, each with a client photo, name, star rating, and quote.
- Scenario — All testimonials render:
  - **WHEN** the page loads
  - **THEN** three testimonial cards with names, ratings, and quotes are visible

### 8. Newsletter
- The page SHALL render a newsletter section with gradient background, heading, email input, and subscribe button. Submitting with a valid email SHALL show a thank-you message. Submitting with an empty email SHALL not submit.
- Scenario — Newsletter form works:
  - **WHEN** the user enters a valid email and clicks "Get Started"
  - **THEN** a "Thank you for subscribing!" message appears
- Scenario — Empty email does not submit:
  - **WHEN** the user submits the form with an empty email
  - **THEN** the form remains visible and no thank-you message appears

### 9. Footer
- The page SHALL render a footer with the brand name, "Follow Me" heading, social links (Facebook, Twitter, Dribbble, Behance), and a copyright line that links to https://www.componentdock.com/ ("Component Dock").
- Scenario — Footer links to Component Dock:
  - **WHEN** the footer renders
  - **THEN** a link to https://www.componentdock.com/ is present with text "Component Dock" opening in a new tab

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/kael/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/kael/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/kael` ships on https://kael.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/kael/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/kael/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/kael/public/CNAME` = `kael.free.componentdock.com`
  and the package `homepage` = `https://kael.free.componentdock.com`.
