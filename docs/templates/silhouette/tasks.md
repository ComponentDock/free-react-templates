# Silhouette — Implementation Tasks

## Token re-read (2026-10-24s) — superseded values below

This task list was written before the live sheet was re-measured. Where it names
design colours or fonts, use `openspec/specs/template-silhouette/spec.md`
§Design tokens and `design-notes.md` §Token re-read instead — the summary:

reference demo is `https://preview.colorlib.com/theme/fashion/`; lead **coral `#ff6363`** (30 decls), hover `#ff7777`, Lato + Playfair Display, hairlines `#efefef`. The green/lavender/charcoal palette below is invented.

Source design: **Fashion 2** (`https://colorlib.com/wp/template/fashion-2/`) → recreation name **silhouette**. Shipped at https://silhouette.free.componentdock.com.

Scope: A single-page apparel store landing template with hero, product grid, about section, testimonials, blog posts, newsletter signup, and footer. Minimalist fashion aesthetic with Lato + Playfair Display fonts, green (#6DAB3C) brand color, and dark charcoal (#1a1a2e) section backgrounds.

## Component breakdown

Render order as composed in `apps/silhouette/src/App.tsx`:

### 1. Navbar
- The template SHALL display a sticky top navigation bar with the brand logo "Silhouette" and links to Home, About, Collections, Blog, and Contact sections. On mobile, a hamburger button SHALL toggle the mobile menu.
- Scenario — Desktop navigation renders all links:
  - **WHEN** the page loads on a desktop viewport
  - **THEN** the navbar shows the logo "Silhouette" and links to Home, About, Collections, Blog, Contact
- Scenario — Mobile menu toggles on button click:
  - **WHEN** the user clicks the hamburger button on mobile
  - **THEN** the mobile menu opens showing all navigation links
  - **AND** the button label changes to "Close menu"
- Scenario — Mobile menu closes when link clicked:
  - **WHEN** the mobile menu is open and the user clicks a navigation link
  - **THEN** the mobile menu closes

### 2. Hero
- The template SHALL display a hero section with a headline "Define Your Own Style", descriptive subtext about fashion trends, and a "Shop Now" CTA button.
- Scenario — Hero renders headline and CTA:
  - **WHEN** the page loads
  - **THEN** the hero section displays the headline, descriptive text, and a "Shop Now" button
- Scenario — Hero displays fashion image:
  - **WHEN** the page loads
  - **THEN** the hero section shows a fashion model image

### 3. Products
- The template SHALL display a 4-column grid of 8 product cards, each with an image, product name, and price.
- Scenario — All 8 products render:
  - **WHEN** the page loads
  - **THEN** 8 product cards are displayed with names and prices
- Scenario — Product cards have images:
  - **WHEN** the page loads
  - **THEN** each product card shows an image with the product name as alt text

### 4. About
- The template SHALL display a split layout about section with an image on the left and a feature list on the right. The feature list SHALL include Free Shipping, Secure Payment, and Sustainable items with lucide-react icons.
- Scenario — About section renders heading and features:
  - **WHEN** the page loads
  - **THEN** the about section shows "Crafted with Intention" heading and 3 features
- Scenario — About section displays image:
  - **WHEN** the page loads
  - **THEN** the about section shows a design process image

### 5. Testimonials
- The template SHALL display 3 testimonials with quote text, author name, and role.
- Scenario — All 3 testimonials render:
  - **WHEN** the page loads
  - **THEN** 3 blockquotes are displayed with author names and roles
- Scenario — Section heading renders:
  - **WHEN** the page loads
  - **THEN** the section shows "What People Say" heading

### 6. Blog
- The template SHALL display a 3-column grid of blog post cards with image, date, title, and excerpt.
- Scenario — All 3 blog posts render:
  - **WHEN** the page loads
  - **THEN** 3 article cards are displayed with titles and dates
- Scenario — Blog posts have images:
  - **WHEN** the page loads
  - **THEN** each blog card shows an image with the post title as alt text

### 7. Newsletter
- The template SHALL display a newsletter section with an email input and subscribe button. The form SHALL prevent default submission.
- Scenario — Newsletter form renders:
  - **WHEN** the page loads
  - **THEN** an email input with placeholder "Enter your email" and a "Subscribe" button are shown
- Scenario — Form submission is prevented:
  - **WHEN** the user types an email and clicks Subscribe
  - **THEN** the page does not reload and the input retains its value

### 8. Footer
- The template SHALL display a 3-column footer with About text, Quick Links, and Contact information. The bottom bar SHALL show the copyright year and a link to Component Dock.
- Scenario — Footer renders with dynamic year:
  - **WHEN** the page loads
  - **THEN** the footer shows the current year in the copyright notice
- Scenario — Footer contains Component Dock link:
  - **WHEN** the page loads
  - **THEN** a link to https://www.componentdock.com/ labeled "Component Dock" is present
- Scenario — Footer shows 3-column layout:
  - **WHEN** the page loads
  - **THEN** the footer displays Quick Links and Contact sections

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/silhouette/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/silhouette/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; **Fonts:** Lato (sans-serif body), Playfair Display (serif headings); **Brand color:** #6DAB3C (green primary); **Accent color:** #B97EBB (lavender/purple); **Dark charcoal:** #1a1a2e (nav, footer backgrounds); **White:** #ffffff (card backgrounds, light sections); **Light gray:** #f7f7f7 (section alternating backgrounds); **Button style:** rounded, flat, green primary, hover darkens; **Section rhythm:** alternating light/dark backgrounds, generous padding; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/silhouette` ships on https://silhouette.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/silhouette/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/silhouette/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/silhouette/public/CNAME` = `silhouette.free.componentdock.com`
  and the package `homepage` = `https://silhouette.free.componentdock.com`.
