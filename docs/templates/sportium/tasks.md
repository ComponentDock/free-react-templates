# Sportium — Implementation Tasks

Source design: **Sportsfit** (`https://colorlib.com/wp/template/sportsfit/`) → recreation name **sportium**. Shipped at https://sportium.free.componentdock.com.

Scope: Recreation of ColorLib Sportsfit (https://colorlib.com/wp/template/sportsfit/) — a fitness/gym landing page. The new name is "Sportium".

## Component breakdown

Render order as composed in `apps/sportium/src/App.tsx`:

### 1. Navbar
- The page SHALL render a sticky header with the Sportium logo (Dumbbell icon + brand name), desktop navigation links (Home, About Us, Classes & Services, Blog, Contact), and a phone number.
- Scenario — Logo links to home:
  - **WHEN** the page loads
  - **THEN** the logo link points to #home
- Scenario — Navigation links are present:
  - **WHEN** the page loads
  - **THEN** links for Home, About Us, Classes & Services, Blog, and Contact are visible

### 2. Hero
- The page SHALL render a full-width hero section with a background image overlay, "Get fit with us" headline, subtitle about classes, and a "Join Now" CTA button.
- Scenario — Hero renders headline and CTA:
  - **WHEN** the page loads
  - **THEN** the h1 heading says "Get fit with us" and a "Join Now" link is present
- Scenario — Video link present:
  - **WHEN** the page loads
  - **THEN** a "See Workout Video" link is visible

### 3. Features
- The page SHALL render 3 feature boxes (Pilates with trainer, Swimming Pool, Healthy diet plan) each with an icon, title, description, and learn-more link.
- Scenario — Three features shown:
  - **WHEN** the page loads
  - **THEN** feature titles "Pilates with trainer", "Swimming Pool", and "Healthy diet plan" are visible

### 4. About
- The page SHALL render a split about section with subtitle, title, description text, CTA button, and an image.
- Scenario — About section renders:
  - **WHEN** the page loads
  - **THEN** the heading "About Sportium" and a "Join Now" button are present

### 5. Testimonials
- The page SHALL render 3 testimonial cards with avatar images, names, roles, text, and star ratings on a parallax background.
- Scenario — Three testimonials shown:
  - **WHEN** the page loads
  - **THEN** testimonial names "Diane Smith", "Mark Johnson", and "Sarah Williams" are visible with star ratings

### 6. Gallery
- The page SHALL render a horizontally scrollable gallery of 5 images.
- Scenario — Five gallery images:
  - **WHEN** the page loads
  - **THEN** 5 images are rendered in the gallery

### 7. Courses
- The page SHALL render 6 course cards (Weight Loss Class, Yoga Classes, Spinning Class, Private Fit Class, Nutrition Classes, Pilates Class) in a grid layout.
- Scenario — Six courses shown:
  - **WHEN** the page loads
  - **THEN** all 6 course titles are visible

### 8. Blog
- The page SHALL render 3 blog post cards with images, titles, dates, descriptions, and "Read More" links on a parallax background.
- Scenario — Three blog posts shown:
  - **WHEN** the page loads
  - **THEN** 3 articles with "Read More" links are visible

### 9. Footer
- The page SHALL render a footer with logo, navigation links, newsletter email form, and a "Made with Component Dock" copyright link to https://www.componentdock.com/.
- Scenario — Footer renders logo and nav:
  - **WHEN** the page loads
  - **THEN** the footer logo and navigation links are present
- Scenario — Newsletter form submits:
  - **WHEN** a user enters an email and clicks "go"
  - **THEN** the form submits and the input is cleared
- Scenario — Component Dock link present:
  - **WHEN** the page loads
  - **THEN** a link to https://www.componentdock.com/ labeled "Component Dock" is in the footer

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/sportium/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/sportium/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/sportium` ships on https://sportium.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/sportium/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/sportium/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/sportium/public/CNAME` = `sportium.free.componentdock.com`
  and the package `homepage` = `https://sportium.free.componentdock.com`.
