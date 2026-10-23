# Bizplanner — Implementation Tasks

Source design: **Bizpro** (`https://colorlib.com/wp/template/bizpro/`) → recreation name **bizplanner**. Shipped at https://bizplanner.free.componentdock.com.

Scope: A Business / Corporate template with hero banner, about, services, parallax banner, team and skills sections. Recreation of ColorLib **BizPro** template as a business and corporate landing page.

## Component breakdown

Render order as composed in `apps/bizplanner/src/App.tsx`:

### 1. Navbar
- The page navbar SHALL display a logo on the left and 10 navigation links (HOME, ABOUT, SERVICES, PORTFOLIO, TEAM, SKILLS, CLIENTS, PRICING, BLOG, CONTACT) on the right, with smooth scroll to the corresponding section.
- Scenario — Desktop navbar renders all links:
  - **WHEN** the page is loaded
  - **THEN** I see a logo on the left
  - **AND** I see navigation links for HOME, ABOUT, SERVICES, PORTFOLIO, TEAM, SKILLS, CLIENTS, PRICING, BLOG, CONTACT
- Scenario — Mobile hamburger menu:
  - **WHEN** the page is loaded on a mobile viewport
  - **THEN** I see a hamburger menu toggle
  - **AND** clicking it reveals the navigation links

### 2. Hero
- The hero section SHALL display a full-width banner with a background image, dark overlay, headline text, subtitle, and a CTA button.
- Scenario — Hero displays content:
  - **WHEN** I view the hero banner
  - **THEN** I see a headline "Hello We're BizPlanner"
  - **AND** I see a subtitle "Sub Head, Motto or Mission subtitle"
  - **AND** I see a CTA button labeled "See Our Projects"
  - **AND** the banner has a background image with dark overlay

### 3. About
- The About section SHALL display a centered title, intro text, and 4 feature cards with icons, titles, descriptions, and "More Details" links.
- Scenario — About section content:
  - **WHEN** I scroll to the About section
  - **THEN** I see a centered section title
  - **AND** I see 4 feature cards
  - **AND** each card has an icon, title, description, and "More Details" link

### 4. Services
- The Services section SHALL display a centered title and 6 service items in a 3x2 grid.
- Scenario — Services grid:
  - **WHEN** I scroll to the Services section
  - **THEN** I see 6 service items in a 3x2 grid
  - **AND** each item has an icon, heading, and description paragraph

### 5. Projects
- The Projects section SHALL display filter tabs and a grid of project images with hover overlays.
- Scenario — Filter tabs work:
  - **WHEN** I click a filter tab
  - **THEN** the gallery shows only matching items

### 6. ParallaxBanner
- The parallax banner SHALL display a full-width image with dark overlay, heading, and CTA button.
- Scenario — Parallax banner content:
  - **WHEN** I scroll to the parallax banner
  - **THEN** I see a heading and CTA button

### 7. Team
- The Team section SHALL display 4 team member cards with photos, names, roles, and social links.
- Scenario — Team members:
  - **WHEN** I scroll to the Team section
  - **THEN** I see 4 team member cards
  - **AND** each card shows a photo, name, role, and social links

### 8. Skills
- The Skills section SHALL display a split layout with an image on the left and 5 skill progress bars on the right.
- Scenario — Skill bars:
  - **WHEN** I scroll to the Skills section
  - **THEN** I see 5 skill bars with correct labels and percentages

### 9. Clients
- The Clients section SHALL display a carousel of testimonial items with navigation controls.
- Scenario — Testimonial navigation:
  - **WHEN** I click the next/previous buttons
  - **THEN** the testimonial changes
  - **AND** clicking a dot navigates to a specific testimonial

### 10. Pricing
- The Pricing section SHALL display 3 pricing cards with plan names, prices, feature lists, and CTA buttons.
- Scenario — Pricing cards:
  - **WHEN** I scroll to the Pricing section
  - **THEN** I see 3 pricing cards with plan names, prices, and features

### 11. Blog
- The Blog section SHALL display 3 blog post cards with images, titles, authors, dates, excerpts, and "Read More" links.
- Scenario — Blog cards:
  - **WHEN** I scroll to the Blog section
  - **THEN** I see 3 blog cards with images, titles, and excerpts

### 12. Partners
- The Partners section SHALL display a row of partner logo images.
- Scenario — Partner logos:
  - **WHEN** I scroll to the Partners section
  - **THEN** I see partner logo images

### 13. Contact
- The Contact section SHALL display contact information with icons, a map placeholder, and a contact form with fields and submit button.
- Scenario — Contact form:
  - **WHEN** I fill out the contact form and submit
  - **THEN** I see a confirmation message

### 14. Footer
- The footer SHALL display the logo, social media icons, copyright text, and a link to Component Dock.
- Scenario — Footer content:
  - **WHEN** I view the footer
  - **THEN** I see the logo
  - **AND** I see social media icon links
  - **AND** I see a copyright line
  - **AND** the footer links to Component Dock

### Cross-cutting requirements

- **Brand color applied consistently** — The template SHALL use the brand color #d73e4d for accents, buttons, and highlights throughout.
  - Scenario — Brand color usage: **WHEN** I view any section; **THEN** the brand color is applied for CTAs, icons, and accents
- **Component Dock attribution** — The system SHALL credit Component Dock — the marketplace that publishes this template — with a visible link to `https://www.componentdock.com/` in the site footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT change the footer's own layout or copy beyond the credit line.
  - Scenario — Footer attribution: **GIVEN** any page of the template is rendered; **WHEN** the footer is displayed; **THEN** it SHALL contain an anchor whose `href` is; **AND** the anchor's text SHALL name Component Dock
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/bizplanner/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/bizplanner/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Footer credits Component Dock with a link to https://www.componentdock.com/; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/bizplanner` ships on https://bizplanner.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/bizplanner/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/bizplanner/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/bizplanner/public/CNAME` = `bizplanner.free.componentdock.com`
  and the package `homepage` = `https://bizplanner.free.componentdock.com`.
