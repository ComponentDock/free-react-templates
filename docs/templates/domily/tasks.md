# Domily — Implementation Tasks

Source design: **Homofy** (`https://colorlib.com/wp/template/homofy/`) → recreation name **domily**. Shipped at https://domily.free.componentdock.com.

Scope: Domily is a real-estate / modular-homes marketplace one-page template in the free-react-templates monorepo.

## Component breakdown

Render order as composed in `apps/domily/src/App.tsx`:

### 1. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Domily home · Main navigation · Open search · Toggle mobile menu · Mobile navigation · dialog

### 2. Hero
- The system SHALL render the split hero: a navy caption panel over a modern-home photo, with a white serif headline carrying a gold span, a subtext paragraph, a gold-outline CTA, and a vertical gold promo-video tab.
- Scenario — Hero content:
  - **GIVEN** the hero is rendered
  - **WHEN** the page loads
  - **THEN** the hero SHALL be at least 800px tall with a cover photo of a
  - **AND** a navy `#040F2E` panel SHALL sit behind the caption on the left
  - **AND** the 54px/600 white Shippori Mincho headline SHALL read "Browse
  - **AND** the subtext SHALL read "Domily is a modular home marketplace that
- Scenario — Hero CTAs:
  - **GIVEN** the hero buttons are rendered
  - **WHEN** the page loads
  - **THEN** a square "Browse Home Now" button SHALL render with a 1px
  - **AND** a vertical gold `#FEC82F` tab SHALL render on the photo edge

### 3. Properties
- The system SHALL render the "Display Latest & Featured Properties" carousel of property cards with photo, navy price, type title, blurb, and a spec row.
- Scenario — Property cards:
  - **GIVEN** the properties section is rendered
  - **WHEN** the page loads
  - **THEN** the centered section header SHALL show the label "Properties"
  - **AND** at least four property cards SHALL render in a carousel (three
  - **AND** each card SHALL show a photo, a `#122C77` price (e.g. "$ 6728"),
  - **AND** the card body SHALL have a 1px `#BECCD6` border and a soft shadow
- Scenario — Carousel navigation:
  - **GIVEN** the properties carousel is rendered
  - **WHEN** the next/prev arrows are activated
  - **THEN** the carousel SHALL advance/go back one card

### 4. About
- The system SHALL render the split About section with a photo on the left and the "About Us" copy with a navy-outline Learn More button on the right.
- Scenario — About layout:
  - **GIVEN** the About section is rendered
  - **WHEN** the page loads
  - **THEN** a tall photo SHALL render on the left (~52% width, 728px, on
  - **AND** the right column SHALL show the `#122C77` label "About Us" above
  - **AND** two paraphrased paragraphs SHALL render below
  - **AND** a square "Learn More" button SHALL render with a 1px `#122C77`

### 5. WhyChooseUs
- The system SHALL render the 4-column "Why Choose Us" grid with icon cards separated by `#C9D6CB` borders and a solid navy "Browse Propertise" button below.
- Scenario — Service grid:
  - **GIVEN** the Why Choose Us section is rendered
  - **WHEN** the page loads
  - **THEN** the centered header SHALL show the label "Why Choose Us" above
  - **AND** four equal columns SHALL render (1px `#C9D6CB` borders, padding
- Scenario — Browse CTA:
  - **GIVEN** the services grid is rendered
  - **WHEN** the page loads
  - **THEN** a centered solid navy `#122C77` square button SHALL render

### 6. Testimonials
- The system SHALL render the split testimonial section: a serif quote carousel with founder avatars on the left and a tall house photo on the right.
- Scenario — Testimonial slide:
  - **GIVEN** the testimonials section is rendered
  - **WHEN** the page loads
  - **THEN** the heading SHALL read "Customer say about us" (22px/500
  - **AND** at least two slides SHALL render, each with a 31px/600 Shippori
  - **AND** a tall photo (50% × 766px) SHALL render on the right
- Scenario — Carousel navigation:
  - **GIVEN** the testimonial carousel is rendered
  - **WHEN** the arrows are activated
  - **THEN** the carousel SHALL advance/go back one slide

### 7. Agents
- The system SHALL render the "Our Agents" carousel of headshot cards with circular social buttons and name/role captions.
- Scenario — Agent cards:
  - **GIVEN** the agents section is rendered
  - **WHEN** the page loads
  - **THEN** the centered heading SHALL read "Our Agents" with a short
  - **AND** at least five agent cards SHALL render, each with a headshot

### 8. Newsletter
- The system SHALL render the dark navy `#040F2E` split newsletter band with a photo, heading, email input, and gold Subscribe button.
- Scenario — Newsletter form:
  - **GIVEN** the newsletter section is rendered
  - **WHEN** the page loads
  - **THEN** the band SHALL render on `#040F2E` with a photo on the left
  - **AND** the right side SHALL show the white heading "Subscribe
- Scenario — Form feedback:
  - **GIVEN** the newsletter form is rendered
  - **WHEN** a valid email is submitted
  - **THEN** the form SHALL show a confirmation state (client-side only — no

### 9. Footer
- The system SHALL render the light footer with a brand column, three link columns, a contact column, and a copyright bar linking to Component Dock.
- Scenario — Footer columns:
  - **GIVEN** the footer is rendered
  - **WHEN** the page loads
  - **THEN** the brand column SHALL show the Domily wordmark, a paraphrased
  - **AND** the "Navigation" column SHALL list Home, About, Services, Blog,
  - **AND** the "Services" and "Support" columns SHALL list Drone Mapping,
  - **AND** the "Contact Us" column SHALL list a paraphrased address
- Scenario — Copyright bar:
  - **GIVEN** the footer bottom bar is rendered (`#F9FAFB`)
  - **WHEN** the page loads
  - **THEN** the copyright line SHALL read "Copyright © 2026 All rights
  - **AND** a link to https://www.componentdock.com/ SHALL render (required

### Cross-cutting requirements

- **Header / Navigation** — The system SHALL render a white sticky header with a thin gold top line, a wordmark logo, five nav links with a Blog dropdown, a search toggle, and a gold "Call Us" button.
  - Scenario — Brand and nav links: **GIVEN** the Domily app is rendered; **WHEN** the page loads; **THEN** the header SHALL render on a white background with a 6px; **AND** the logo SHALL read "DOMILY" (wordmark with a gold house icon); **AND** the nav SHALL list Home, About, Properties, Blog, and Contact in; **AND** a gold "Call Us: 10 (23) 252 3583" button SHALL render on the; **AND** a search toggle SHALL open an overlay input ("Search Here") when
  - Scenario — Blog dropdown: **GIVEN** the header is rendered; **WHEN** the Blog item is activated; **THEN** a dropdown SHALL list Blog, Blog Details, and Elements
  - Scenario — Sticky scroll state: **GIVEN** the page is scrolled down; **WHEN** the header passes the top of the viewport; **THEN** the header SHALL stick to the top with a soft shadow
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/domily/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/domily/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] `npm run verify:app -- domily` (or `scripts/verify-app.sh domily`):; [ ] No ColorLib / homofy reference in ANY app file (comments included);; [ ] Footer links https://www.componentdock.com/; [ ] `apps/domily/public/CNAME` = `domily.free.componentdock.com` and; [ ] Google Fonts: Shippori Mincho (400-800) + Roboto (300-900) via; [ ] Images: `https://picsum.photos/seed/domily-<n>/<w>/<h>` (or verified; [ ] Icons: lucide-react for UI glyphs (bed/bath/building → verify exports; [ ] Section order matches the live DOM 1:1 (header → hero → properties →; [ ] Design tokens in `@theme`: gold `#FEC82F`, navy-ink `#040F2E`, navy; [ ] Buttons radius 0 (square) throughout; carousels (properties,; [ ] README status + TEMPLATES.md bookkeeping (`[x]` + surge URL on both; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/domily` ships on https://domily.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/domily/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/domily/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/domily/public/CNAME` = `domily.free.componentdock.com`
  and the package `homepage` = `https://domily.free.componentdock.com`.
