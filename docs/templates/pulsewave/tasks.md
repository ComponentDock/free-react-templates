# Pulsewave — Implementation Tasks

Source design: **Unbrew** (`https://colorlib.com/wp/template/unbrew/`) → recreation name **pulsewave**. Shipped at https://pulsewave.free.componentdock.com.

Scope: Pulsewave is a digital agency / business landing template with a purple gradient hero, services grid, team showcase, testimonials carousel, features section, portfolio gallery, pricing plans, blog cards, newsletter signup, and a dark footer with Component Dock branding.

## Component breakdown

Render order as composed in `apps/pulsewave/src/App.tsx`:

### 1. Navbar
- Users SHALL see a fixed-top navigation bar with the "Pulsewave." brand, 7 navigation links (Home, About Us, Services, Pricing, Work, Blog, Contact Us), and a mobile hamburger menu.
- Scenario — Desktop navigation renders all links:
  - **WHEN** the page loads on desktop
  - **THEN** the navbar shows "Pulsewave." and all 7 navigation links
- Scenario — Mobile menu toggle:
  - **WHEN** the user is on a mobile viewport
  - **AND** taps the hamburger button
  - **THEN** the mobile menu opens with all navigation links
  - **AND** the button label changes to "Close menu"
- Scenario — Mobile menu closes on link click:
  - **WHEN** the mobile menu is open
  - **AND** the user taps a navigation link
  - **THEN** the mobile menu closes

### 2. Hero
- Users SHALL see a hero section with a purple gradient background, the heading "Boost Personal Productivity", a CTA button, phone number, and social media icons.
- Scenario — Hero content renders:
  - **WHEN** the page loads
  - **THEN** the hero displays "Boost Personal Productivity" as the main heading
  - **AND** shows "Start A Project" CTA button
  - **AND** shows phone number "+01 2345 5678 910"
  - **AND** shows Facebook, Twitter, Instagram, LinkedIn social icons

### 3. Services
- Users SHALL see a services section with 6 service cards (Marketing, SEO, UI/UX Design, Creative, Optimization, Business Strategy) that highlight on hover.
- Scenario — All service cards render:
  - **WHEN** the user scrolls to the services section
  - **THEN** all 6 service cards are visible with titles and descriptions

### 4. About
- Users SHALL see an about section with a heading, descriptive text, an image, and a "More About us" CTA button.
- Scenario — About section renders:
  - **WHEN** the user scrolls to the about section
  - **THEN** the heading "Pulsewave A Digital Agency Company" is visible
  - **AND** the "More About us" button is present

### 5. Team
- Users SHALL see a team section with 4 team member cards, each showing a photo, name, role, and 4 social media icons.
- Scenario — All team members render:
  - **WHEN** the user scrolls to the team section
  - **THEN** all 4 team members are visible with names and social links

### 6. Testimonials
- Users SHALL see a testimonials section with a carousel showing customer quotes and pagination dots.
- Scenario — Testimonials carousel works:
  - **WHEN** the user scrolls to the testimonials section
  - **THEN** the first testimonial is displayed
  - **AND** clicking pagination dot 2 switches to the second testimonial

### 7. Features
- Users SHALL see a features section on a gradient background with 4 feature cards (Easy Management, Protect Your Profile, Private Community, 24/7 Help Support).
- Scenario — Feature cards render:
  - **WHEN** the user scrolls to the features section
  - **THEN** all 4 feature cards are visible on a gradient background

### 8. Portfolio
- Users SHALL see a portfolio section with 4 work items that show a hover overlay with the title.
- Scenario — Portfolio items render:
  - **WHEN** the user scrolls to the portfolio section
  - **THEN** all 4 portfolio items are visible
  - **AND** a "VIEW MORE PORTFOLIO" button is present

### 9. Pricing
- Users SHALL see a pricing section with 3 tiers (Basic $49, Standard $99, Premium $199), with the Standard tier visually highlighted.
- Scenario — Pricing tiers render:
  - **WHEN** the user scrolls to the pricing section
  - **THEN** all 3 pricing tiers are visible with prices
  - **AND** the Standard tier has a highlighted ring

### 10. Blog
- Users SHALL see a blog section with 4 blog post cards showing images, dates, and author names.
- Scenario — Blog posts render:
  - **WHEN** the user scrolls to the blog section
  - **THEN** all 4 blog posts are visible with titles and author names

### 11. Newsletter
- Users SHALL see a newsletter section with an email input and subscribe button on a gradient background.
- Scenario — Newsletter form works:
  - **WHEN** the user types an email and clicks subscribe
  - **THEN** the email field is cleared

### 12. Footer
- Users SHALL see a dark footer with brand column, Explore links, Quick Links, Recent Posts, contact info, a contact form, and a Component Dock attribution link.
- Scenario — Footer renders all sections:
  - **WHEN** the user scrolls to the footer
  - **THEN** brand, explore, quick links, and recent posts columns are visible
  - **AND** the Component Dock link points to https://www.componentdock.com/
- Scenario — Footer contact form works:
  - **WHEN** the user submits the contact form
  - **THEN** the email field is cleared

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/pulsewave/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/pulsewave/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/pulsewave` ships on https://pulsewave.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/pulsewave/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/pulsewave/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/pulsewave/public/CNAME` = `pulsewave.free.componentdock.com`
  and the package `homepage` = `https://pulsewave.free.componentdock.com`.
