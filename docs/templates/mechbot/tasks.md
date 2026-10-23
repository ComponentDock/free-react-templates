# Mechbot — Implementation Tasks

Source design: **Robotics** (`https://colorlib.com/wp/template/robotics/`) → recreation name **mechbot**. Shipped at https://mechbot.free.componentdock.com.

Scope: Mechbot is a single-page robotics company landing page in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Robotics" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Component breakdown

Render order as composed in `apps/mechbot/src/App.tsx`:

### 1. Navbar
- The system SHALL render a sticky white navbar with the site wordmark, section links, and a call-to-action.
- Scenario — Navbar content:
  - **GIVEN** the Mechbot page is rendered
  - **WHEN** the page loads
  - **THEN** the navbar SHALL show the site name "Mechbot" as the brand
  - **AND** the navbar SHALL show links HOME, ABOUT, PRODUCTS, FEATURES, BLOG, CONTACT
  - **AND** the navbar SHALL show a CTA button styled as a brand blue-purple pill
- Scenario — Navbar link colors:
  - **GIVEN** the navbar is rendered
  - **WHEN** the user hovers over a nav link
  - **THEN** the link color SHALL change to brand `#8a90ff`
- Scenario — Mobile menu:
  - **GIVEN** the navbar is rendered at a mobile viewport
  - **WHEN** the user taps the hamburger toggle
  - **THEN** the navigation links SHALL expand into a stacked vertical menu

### 2. Hero
- The system SHALL render a split hero section with text on the left and a robot image on the right, on a light background.
- Scenario — Hero content:
  - **GIVEN** the page is rendered
  - **WHEN** the hero section is displayed
  - **THEN** it SHALL show the headline "Improved Production level with Robotics"
  - **AND** it SHALL show the subtitle "Everyone wants the innovation through robotics"
  - **AND** it SHALL show a "View Details" CTA button styled as a brand blue-purple pill
- Scenario — Hero image:
  - **GIVEN** the hero section is displayed
  - **WHEN** the user inspects the right side of the hero
  - **THEN** there SHALL be a placeholder image (picsum.photos) representing a robot or industrial arm
- Scenario — Hero layout:
  - **GIVEN** the hero section is displayed
  - **WHEN** the viewport is wide (desktop)
  - **THEN** the hero SHALL use a split layout with text on the left and the image on the right

### 3. Products
- The system SHALL render a light-background section with a centered heading and four product cards.
- Scenario — Products section heading:
  - **GIVEN** the page is rendered
  - **WHEN** the products section is displayed
  - **THEN** it SHALL show the heading "Featured Robotics Products to Show"
- Scenario — Product cards:
  - **GIVEN** the products section is displayed
  - **WHEN** the user inspects the cards
  - **THEN** there SHALL be exactly 4 product cards
  - **AND** each card SHALL have a product image, a product name, a short blurb, and a "View Details" link
- Scenario — Product names:
  - **GIVEN** the products section is displayed
  - **WHEN** the user reads the card titles
  - **THEN** the four products SHALL be named "The Upper Eye", "The Crab Wheel", "The Plug Ninja", and "The Controller"

### 4. HomeAbout
- The system SHALL render a split about section with an image on the left and text on the right, on a light background.
- Scenario — HomeAbout content:
  - **GIVEN** the page is rendered
  - **WHEN** the home about section is displayed
  - **THEN** it SHALL show the heading "Globally Connected by Large Network"
  - **AND** it SHALL show a paragraph describing the company's global robotics network
- Scenario — HomeAbout image:
  - **GIVEN** the home about section is displayed
  - **WHEN** the user inspects the left side
  - **THEN** there SHALL be a placeholder image (picsum.photos)
- Scenario — HomeAbout layout:
  - **GIVEN** the home about section is displayed
  - **WHEN** the viewport is wide (desktop)
  - **THEN** the section SHALL use a split layout with the image on the left and text on the right

### 5. Features
- The system SHALL render a dark-background section with a centered heading and six feature cards in a 3×2 grid.
- Scenario — Features section heading:
  - **GIVEN** the page is rendered
  - **WHEN** the features section is displayed
  - **THEN** it SHALL show the heading "Some Features that Made us Unique"
- Scenario — Feature cards:
  - **GIVEN** the features section is displayed
  - **WHEN** the user inspects the feature cards
  - **THEN** there SHALL be exactly 6 feature cards
  - **AND** each card SHALL have a lucide-react icon on a circular brand-blue background, a title, and a short blurb
- Scenario — Feature names:
  - **GIVEN** the features section is displayed
  - **WHEN** the user reads the card titles
  - **THEN** the six features SHALL be titled "Expert Technicians", "Professional Service", "Great Support", "Technical Skills", "Highly Recommended", and "Positive Reviews"
- Scenario — Features background:
  - **GIVEN** the features section is displayed
  - **WHEN** the user inspects the background
  - **THEN** the section background SHALL be dark (`#222222` or similar dark shade)
  - **AND** the heading and card text SHALL be white or light-colored for contrast

### 6. BrandLogos
- The system SHALL render a strip of five brand / partner logos.
- Scenario — Brand logos strip:
  - **GIVEN** the page is rendered
  - **WHEN** the brand logos section is displayed
  - **THEN** it SHALL show exactly 5 logo images in a responsive row
  - **AND** the logos SHALL be placeholder images (picsum.photos) rendered in grayscale or muted tones

### 7. AboutVideo
- The system SHALL render a split section with text on the left and a video overlay (thumbnail + play button) on the right.
- Scenario — AboutVideo content:
  - **GIVEN** the page is rendered
  - **WHEN** the about-video section is displayed
  - **THEN** it SHALL show the heading "Brand new app to blow your mind"
  - **AND** it SHALL show the subtext "We've made a life that will change you"
  - **AND** it SHALL show a brand blue-purple CTA button
- Scenario — AboutVideo overlay:
  - **GIVEN** the about-video section is displayed
  - **WHEN** the user inspects the right side
  - **THEN** there SHALL be a thumbnail image (picsum.photos) with a play-button overlay (lucide-react Play icon)
- Scenario — AboutVideo layout:
  - **GIVEN** the about-video section is displayed
  - **WHEN** the viewport is wide (desktop)
  - **THEN** the section SHALL use a split layout with text on the left and the video overlay on the right

### 8. Blog
- The system SHALL render a light-background blog section with a centered heading and two blog cards.
- Scenario — Blog section heading:
  - **GIVEN** the page is rendered
  - **WHEN** the blog section is displayed
  - **THEN** it SHALL show the heading "Latest News from our Blog"
- Scenario — Blog cards:
  - **GIVEN** the blog section is displayed
  - **WHEN** the user inspects the cards
  - **THEN** there SHALL be exactly 2 blog cards
  - **AND** each card SHALL have an image, a date meta line, a title, an excerpt, and a "Read More" link
- Scenario — Blog card content:
  - **GIVEN** a blog card is displayed
  - **WHEN** the user reads its content
  - **THEN** the card SHALL have a placeholder image (picsum.photos)
  - **AND** a date formatted as a short string (e.g. "Sep 14, 2026")
  - **AND** a title and excerpt paragraph
  - **AND** a "Read More" link styled with the brand color

### 9. Footer
- The system SHALL render a dark four-column footer with brand info, product links, a newsletter form, and additional links, plus a bottom copyright bar. The footer MUST include a link to `https://www.componentdock.com/` branded as "Component Dock".
- Scenario — Footer columns:
  - **GIVEN** the page is rendered
  - **WHEN** the footer is displayed
  - **THEN** it SHALL show 4 columns
  - **AND** column 1 SHALL contain the brand "Robotics", an about paragraph, and social media icons (Facebook, Twitter, Instagram)
  - **AND** column 2 SHALL contain "Top Products" links
  - **AND** column 3 SHALL contain a newsletter form (email input + submit button)
  - **AND** column 4 SHALL contain additional navigation or contact links
- Scenario — Newsletter form:
  - **GIVEN** the footer is displayed
  - **WHEN** the user inspects column 3
  - **THEN** there SHALL be an email input field with a placeholder (e.g. "Enter email")
  - **AND** a submit button (lucide-react Send icon or text) styled as a brand pill
- Scenario — Component Dock link:
  - **GIVEN** the footer is rendered
  - **WHEN** the user inspects the footer links
  - **THEN** there SHALL be a link to `https://www.componentdock.com/` with the display text "Component Dock"
  - **AND** the link SHALL open in a new tab (`target="_blank"`, `rel="noopener noreferrer"`)
- Scenario — Footer styling:
  - **GIVEN** the footer is displayed
  - **WHEN** the user inspects the background
  - **THEN** the footer background SHALL be dark (`#222222` or similar)
  - **AND** headings SHALL be white
  - **AND** body links SHALL be `rgba(255,255,255,0.7)` transitioning to white on hover
- Scenario — Copyright bar:
  - **GIVEN** the footer is displayed
  - **WHEN** the user inspects the bottom of the footer
  - **THEN** there SHALL be a centered copyright bar with a template credit (monorepo credit, not ColorLib)

### Cross-cutting requirements

- **Page composition** — The system SHALL compose all sections in a single page with a main landmark and a document title.
  - Scenario — Full page render: **GIVEN** the Mechbot app is rendered; **WHEN** the page loads; **THEN** the page SHALL compose the navbar, hero, products, home-about, about-video, features, brand-logos, blog, and footer in order; **AND** the document title SHALL be "Mechbot — Robotics Landing Page"
- **Design tokens** — The system SHALL use the following design tokens consistently across all components.
  - Scenario — Typography: **GIVEN** any component is rendered; **WHEN** text is displayed; **THEN** the font family SHALL be "Poppins" (Google Fonts, sans-serif fallback); **AND** headings SHALL use color `#222222`; **AND** body text SHALL use color `#777777`
  - Scenario — Brand color: **GIVEN** any interactive element is rendered; **WHEN** a button, link, or accent uses the brand color; **THEN** the color SHALL be `#8a90ff` (blue-purple); **AND** primary CTA buttons SHALL have `rounded-full` (pill shape)
  - Scenario — Background colors: **GIVEN** the page is rendered; **WHEN** sections are displayed; **THEN** the hero, products, home-about, about-video, and blog sections SHALL use light bg `#f9f9ff`; **AND** the features and footer sections SHALL use dark bg `#222222`
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/mechbot/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/mechbot/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] `openspec/specs/template-mechbot/spec.md` present with the full; [ ] Design tokens above (blue-purple `#8a90ff`, body `#777777`,; [ ] Footer requirement includes the mandatory `https://www.componentdock.com/`; [ ] `npm run spec:validate` passes for this spec.; [ ] Implementer: TDD at 100% coverage, `bash scripts/verify-app.sh mechbot`,; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/mechbot` ships on https://mechbot.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/mechbot/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/mechbot/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/mechbot/public/CNAME` = `mechbot.free.componentdock.com`
  and the package `homepage` = `https://mechbot.free.componentdock.com`.
