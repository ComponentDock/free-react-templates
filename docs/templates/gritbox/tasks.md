# Gritbox — Implementation Tasks

Source design: **Crossfits** (`https://colorlib.com/wp/template/crossfits/`) → recreation name **gritbox**. Shipped at https://gritbox.free.componentdock.com.

Scope: A crossfit/gym landing page with hero slider, program carousel, trainer spotlight, exercise grid, testimonials, and footer. Recreation of ColorLib **Crossfits**.

## Component breakdown

Render order as composed in `apps/gritbox/src/App.tsx`:

### 1. Navbar
- The template SHALL display a sticky white navigation bar with the brand "GritBox" on the left and desktop nav links on the right.
- Scenario — Desktop navigation:
  - **WHEN** the page loads on a desktop viewport
  - **THEN** a white navbar appears with "GritBox" brand logo and links: Program (dropdown), Our Trainers, News, About, Contact
- Scenario — Program dropdown:
  - **WHEN** the user hovers over the "Program" link
  - **THEN** a dropdown menu appears with: Body Building, Morning Energy, Stretching (with sub-menu: Swimming, Boxing, Running, Jogging)
- Scenario — Mobile hamburger:
  - **WHEN** the viewport is mobile
  - **THEN** a hamburger icon appears that opens a slide-in mobile menu with black overlay

### 2. HeroSlider
- The template SHALL display a full-viewport hero slider with two slides and auto-rotation.
- Scenario — First slide:
  - **WHEN** the page loads
  - **THEN** slide 1 shows heading "Welcome To GritBox" with caption "Find The Healthy Way" in white centered text
- Scenario — Second slide:
  - **WHEN** the slider advances to slide 2
  - **THEN** the heading reads "Optimize Your Health" with caption "Effective Program"
- Scenario — Auto-rotation:
  - **WHEN** 5 seconds elapse
  - **THEN** the slider advances to the next slide with a fade transition

### 3. PopularProgram
- The template SHALL display a section with 6 program cards in a grid layout.
- Scenario — Program cards:
  - **WHEN** the user scrolls to the programs section
  - **THEN** 6 cards appear: Body Building, Body Combat, Push Up, Weight Lifting, Cardio Blast, Core Strength
- Scenario — Card content:
  - **WHEN** each program card renders
  - **THEN** it shows a background image with gradient overlay, title, description, and orange "Learn More" pill button

### 4. TheClub
- The template SHALL display a split layout section with gym image and description.
- Scenario — Split layout:
  - **WHEN** the user scrolls to the club section
  - **THEN** a split layout appears: image on the left, text on the right with heading "The Club", two paragraphs, and "Join Our Club" outline button

### 5. FeaturedTrainer
- The template SHALL display a full-width parallax section with trainer spotlight.
- Scenario — Trainer content:
  - **WHEN** the user scrolls to the trainer section
  - **THEN** a circular trainer photo, name "Shane Green", blockquote, and "Make Me Your Trainer" button appear centered over a parallax background

### 6. CrossfitExercises
- The template SHALL display a 3x2 grid of exercise cards.
- Scenario — Exercise grid:
  - **WHEN** the user scrolls to the exercises section
  - **THEN** a 3x2 grid of bordered cards appears with icons, titles, descriptions, and "Learn More" links

### 7. Testimonies
- The template SHALL display testimonials on a light gray background.
- Scenario — Testimonial cards:
  - **WHEN** the user scrolls to the testimonials section
  - **THEN** 4 testimonial blocks appear with circular avatars, names, and quotes on a #f4f4f4 background

### 8. Footer
- The template SHALL display a dark footer with 3 columns and Component Dock attribution.
- Scenario — Footer layout:
  - **WHEN** the user scrolls to the footer
  - **THEN** a dark (#1e1e1c) footer appears with 3 columns: About, Quick Menu + Program, Social Icons
- Scenario — Copyright:
  - **WHEN** the copyright line renders
  - **THEN** it shows the current year and a "Component Dock" link (no ColorLib attribution)

### Cross-cutting requirements

- **Component Dock attribution** — The system SHALL credit Component Dock — the marketplace that publishes this template — with a visible link to `https://www.componentdock.com/` in the site footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT change the footer's own layout or copy beyond the credit line.
  - Scenario — Footer attribution: **GIVEN** any page of the template is rendered; **WHEN** the footer is displayed; **THEN** it SHALL contain an anchor whose `href` is; **AND** the anchor's text SHALL name Component Dock
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/gritbox/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/gritbox/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [x] Navbar renders with brand, dropdown, and mobile hamburger; [x] Hero slider auto-rotates between 2 slides with fade transition; [x] Popular Program shows 6 program cards with image overlays; [x] The Club section renders split layout (image + text + CTA); [x] Featured Trainer shows parallax bg, circular photo, quote, CTA; [x] Exercises grid shows 3x2 bordered icon cards; [x] Testimonials shows 4 items with circular avatars; [x] Footer has 3 columns, social icons, copyright with Component Dock link; [x] All sections use orange #fd7e14 brand color consistently; [x] Buttons are pill-shaped (border-radius: 30px); [x] Section headings have orange underline bar decoration; [x] Parallax backgrounds render with dark overlays; [x] No ColorLib references in app code; [x] public/CNAME contains gritbox.free.componentdock.com; [x] homepage in package.json set correctly; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR; [ ] Footer credits Component Dock with a link to https://www.componentdock.com/

## Verification

- [x] `apps/gritbox` ships on https://gritbox.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/gritbox/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/gritbox/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/gritbox/public/CNAME` = `gritbox.free.componentdock.com`
  and the package `homepage` = `https://gritbox.free.componentdock.com`.
