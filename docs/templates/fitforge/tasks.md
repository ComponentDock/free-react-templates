# Fitforge — Implementation Tasks

Source design: **Crossfit** (`https://colorlib.com/wp/template/crossfit/`) → recreation name **fitforge**. Shipped at https://fitforge.free.componentdock.com.

Scope: A crossfit/gym landing page with hero, features, subscription, portfolio, testimonials, pricing plans, CTA banner, and footer. Recreation of ColorLib **Crossfit**.

## Component breakdown

Render order as composed in `apps/fitforge/src/App.tsx`:

### 1. Navbar
- The page SHALL display a fixed navbar with the "FitForge" logo, navigation links (Home, About, Classes, News, Contact), a search icon, and a "Get in touch" CTA button. The navbar SHALL support a mobile hamburger menu toggle.
- Scenario — Desktop navbar renders all elements:
  - **WHEN** the page loads on desktop
  - **THEN** the navbar shows "FitForge" logo, all five nav links, search button, and "Get in touch" button
- Scenario — Mobile menu toggle:
  - **WHEN** the user clicks the hamburger menu button on mobile
  - **THEN** the mobile navigation menu opens with all nav links
  - **AND** clicking a nav link closes the menu

### 2. Hero
- The page SHALL display a full-width hero section with a background image, the headline "Don't stop when you're tired. Stop when you're done", and a "Get Started" CTA button.
- Scenario — Hero renders headline and CTA:
  - **WHEN** the hero section is visible
  - **THEN** the heading text contains "Don't stop when you're tired"
  - **AND** a "Get Started" link is present

### 3. Features
- The page SHALL display a features section with 4 feature cards, each containing an icon, title, and description. The features are: Award Winning Gym, Expert Coaches, Nutrition Plans, Community Events.
- Scenario — All 4 features render:
  - **WHEN** the features section is visible
  - **THEN** 4 feature cards are displayed with icons and text

### 4. Subscription
- The page SHALL display a split subscription section with a heading "Get your subscription", descriptive text, a checklist of 4 benefits, a CTA button, and an image on the right.
- Scenario — Subscription renders all elements:
  - **WHEN** the subscription section is visible
  - **THEN** the heading says "Get your subscription"
  - **AND** 4 benefit items are listed with check icons

### 5. Portfolio
- The page SHALL display a portfolio section with 4 images that show a "View More" overlay on hover.
- Scenario — Portfolio images and overlays:
  - **WHEN** the portfolio section is visible
  - **THEN** 4 portfolio images are displayed
  - **AND** each image has a "View More" overlay text

### 6. Testimonials
- The page SHALL display a testimonials section with a quote, author avatar, name, and role.
- Scenario — Testimonial content renders:
  - **WHEN** the testimonials section is visible
  - **THEN** a testimonial quote is displayed
  - **AND** the author name "James Smith" and role "Crossfit Coach" are shown

### 7. Pricing
- The page SHALL display a pricing section with 3 plan cards: Free Trial ($0), Basic ($30), and Unlimited ($55), each with feature lists and CTA buttons.
- Scenario — All 3 pricing plans render:
  - **WHEN** the pricing section is visible
  - **THEN** 3 plan cards are displayed with prices $0, $30, and $55
  - **AND** each plan has a "Get it now" button

### 8. CtaBanner
- The page SHALL display a call-to-action banner with the text "Get your subscription now!" where "subscription" is a link to the pricing section.
- Scenario — CTA banner content:
  - **WHEN** the CTA banner is visible
  - **THEN** the text "now!" is displayed
  - **AND** a "subscription" link points to the pricing section

### 9. Footer
- The page SHALL display a footer with the FitForge logo, description, social media icons (Facebook, Twitter, Instagram, YouTube), and a "More templates at Component Dock" link to https://www.componentdock.com/.
- Scenario — Footer renders all elements:
  - **WHEN** the footer is visible
  - **THEN** social media icon links are present (Facebook, Twitter, Instagram, YouTube)
  - **AND** a "Component Dock" link points to https://www.componentdock.com/

### Cross-cutting requirements

- **Page landmarks for accessibility** — The page SHALL include proper HTML landmarks: navigation, main content area, and footer.
  - Scenario — Accessibility landmarks: **WHEN** the page loads; **THEN** a navigation landmark is present; **AND** a main landmark is present; **AND** a contentinfo (footer) landmark is present
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/fitforge/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/fitforge/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/fitforge` ships on https://fitforge.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/fitforge/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/fitforge/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/fitforge/public/CNAME` = `fitforge.free.componentdock.com`
  and the package `homepage` = `https://fitforge.free.componentdock.com`.
