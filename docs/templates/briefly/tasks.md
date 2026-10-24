# Briefly — Implementation Tasks

> **Reference identity (measured 2026-10-24).** The token backfill measured
> `theme/lawyer/`, which is **Lawyer's** page (2026 rebuild v3.0.0, `#f2c64d` gold,
> Poppins) — not Lawful's. Two catalogue keys share that URL (`lawyer`, and
> `catalog-199854` whose `details` is `/wp/template/lawful/`): a catalogue data
> bug. Lawful's own demo is `theme/lawful/` (200, 25,104 B, `LAWFUL LAWFIRM`, h1
> "We Combine Business with Finance", `css/style.css` 80,241 B, Raleway body +
> Playfair Display headings, `.primary-btn` gradient `#f13d80 -> #f48464`,
> `.genric-btn.primary` `#f8b600`). The spec's table has been re-measured there;
> `apps/briefly` already ships this palette, so only the prep was wrong.
> Authority: `openspec/specs/template-briefly/spec.md`.

Source design: **Lawful** (`https://colorlib.com/wp/template/lawful/`) → recreation name **briefly**. Shipped at https://briefly.free.componentdock.com.

Scope: Briefly is a law-firm landing page template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Lawful" template design, built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Component breakdown

Render order as composed in `apps/briefly/src/App.tsx`:

### 1. Navbar
- The template SHALL render a sticky top navbar with the "Briefly" brand logo, navigation links (Home, About, Services, Team, Blog, Contact), a "Get Free Quote" CTA button, and a dark-mode toggle button.
- Scenario — Renders brand and nav links:
  - **WHEN** the app is rendered
  - **THEN** I should see the "Briefly" logo
  - **AND** I should see nav links: Home, About, Services, Team, Blog, Contact
  - **AND** I should see a "Get Free Quote" CTA button
- Scenario — Dark mode toggle works:
  - **WHEN** I click the dark mode toggle button
  - **THEN** the document should have the "dark" class
  - **AND** when I click the toggle again
  - **THEN** the document should not have the "dark" class

### 2. Hero
- The template SHALL render a full-width hero section with a background image, dark overlay, heading "We Combine Business with Finance", subtext, and a gradient CTA button.
- Scenario — Renders hero content:
  - **WHEN** the app is rendered
  - **THEN** I should see the heading "We Combine Business with Finance"
  - **AND** I should see a "Get Free Quote" CTA button

### 3. Stats
- The template SHALL render a four-column stats section with icons and counters for Qualified Lawyers (596+), Solved Cases (20,650+), Trusted Clients (2.5k), and Achievements (50+).
- Scenario — Renders all stat counters:
  - **WHEN** the app is rendered
  - **THEN** I should see 596+ Qualified Lawyers
  - **AND** I should see 20,650+ Solved Cases
  - **AND** I should see 2.5k Trusted Clients
  - **AND** I should see 50+ Achievements

### 4. AboutVideo
- The template SHALL render a two-column about section with a video/image placeholder on the left, heading, description, "Learn More" CTA, and author attribution on the right.
- Scenario — Renders about section with video and author:
  - **WHEN** the app is rendered
  - **THEN** I should see the heading "Get to Know Project Estimate?"
  - **AND** I should see a "Learn More" button
  - **AND** I should see the play video button
  - **AND** I should see author attribution "Marvel Maison"

### 5. AboutSuccess
- The template SHALL render four "Road to Success" feature cards in a grid layout, each with an icon, title, and description.
- Scenario — Renders four success cards:
  - **WHEN** the app is rendered
  - **THEN** I should see four "Road to Success" cards

### 6. Services
- The template SHALL render a services section with heading "Services Offered By Us" and three service cards, each with an image, title, and description.
- Scenario — Renders service cards:
  - **WHEN** the app is rendered
  - **THEN** I should see the heading "Services Offered By Us"
  - **AND** I should see three service cards

### 7. ServiceDetail
- The template SHALL render a two-column service detail section with heading, description, and author quote on the left, and a 2x2 image grid on the right.
- Scenario — Renders service detail section:
  - **WHEN** the app is rendered
  - **THEN** I should see the heading and description
  - **AND** I should see the author attribution

### 8. Team
- The template SHALL render a team section with heading "Meet Our Experienced Team" and three team member cards with photos, names, and roles.
- Scenario — Renders team members:
  - **WHEN** the app is rendered
  - **THEN** I should see the heading "Meet Our Experienced Team"
  - **AND** I should see three team members

### 9. CTA
- The template SHALL render a full-width hero section with a background image, dark overlay, heading "We Combine Business with Finance", subtext, and a gradient CTA button.
- Scenario — Renders hero content:
  - **WHEN** the app is rendered
  - **THEN** I should see the heading "We Combine Business with Finance"
  - **AND** I should see a "Get Free Quote" CTA button

### 10. Blog
- The template SHALL render a blog section with heading "Latest From Our Blog Posts" and three blog post cards with images, dates, authors, titles, and descriptions.
- Scenario — Renders blog posts:
  - **WHEN** the app is rendered
  - **THEN** I should see the heading "Latest From Our Blog Posts"
  - **AND** I should see three blog post cards

### 11. Footer
- The template SHALL render a four-column footer with About, Navigation Links, Newsletter form, and Instagram Feed. The copyright bar SHALL link to https://www.componentdock.com/ (branded "Component Dock").
- Scenario — Renders footer with Component Dock link:
  - **WHEN** the app is rendered
  - **THEN** I should see the "Briefly" brand
  - **AND** I should see a link to https://www.componentdock.com/
  - **AND** I should see social links
  - **AND** I should see a newsletter form
  - **AND** I should see an Instagram feed grid

### Cross-cutting requirements

- **CTA banner section** — The template SHALL render a full-width dark-overlay CTA banner with heading, description, and "Get Free Estimate" gradient button.
  - Scenario — Renders call-to-action section: **WHEN** the app is rendered; **THEN** I should see the heading "Get to Know Project Estimate?"; **AND** I should see a "Get Free Estimate" button
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/briefly/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/briefly/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/briefly` ships on https://briefly.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/briefly/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/briefly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/briefly/public/CNAME` = `briefly.free.componentdock.com`
  and the package `homepage` = `https://briefly.free.componentdock.com`.
