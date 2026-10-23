# Swipe — Implementation Tasks

Source design: **Carousel 08** (`https://colorlib.com/wp/template/carousel-08/`) → recreation name **swipe**. Shipped at https://swipe.free.componentdock.com.

Scope: Swipe is a single-section testimonials carousel page in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Carousel 08" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Component breakdown

Render order as composed in `apps/swipe/src/App.tsx`:

### 1. TestimonialCarousel
- The carousel SHALL display testimonial slides in a 50/50 split layout.
- Scenario — Testimonial cards are rendered:
  - **WHEN** the testimonials section is rendered
  - **THEN** there are at least 3 testimonial slides
  - **AND** each slide contains a 50/50 split layout (image left, text right)
  - **AND** each image uses a background-image covering its container
  - **AND** each text panel has a white background with centered content

### 2. Footer
- No dedicated spec block — hold this band to the design notes.
- Anchors: Component Dock

### Cross-cutting requirements

- **Section renders with heading** — The testimonials section SHALL display a centered heading and generous vertical padding.
  - Scenario — Heading is visible on page load: **WHEN** the page loads; **THEN** a centered heading "Testimonials" is visible; **AND** the section has generous vertical padding (~7em); **AND** the background is a very light gray
- **Testimonial card content structure** — Each testimonial card SHALL display a quote, author name in brand gold, and position label.
  - Scenario — Card displays quote and attribution: **WHEN** a testimonial card is displayed; **THEN** the quote text is rendered in a serif font (Playfair Display); **AND** the quote text is large (~39px) and bold; **AND** the author name is displayed below the quote in brand gold color (#dbcc8f); **AND** the author position/title is shown in muted gray text below the name
- **Carousel navigation dots** — The carousel SHALL display pagination dots for slide navigation.
  - Scenario — Dots are displayed and interactive: **WHEN** the carousel has multiple slides; **THEN** there is one dot per slide; **AND** dots are small circles (~10px) with a dark border; **AND** the active slide's dot is filled with the brand gold color; **AND** clicking a dot navigates to the corresponding slide
- **Carousel auto-advances** — The carousel SHALL auto-advance to the next slide after a timeout.
  - Scenario — Automatic slide advancement: **WHEN** the carousel is displayed; **AND** the user waits for the timeout period; **THEN** the carousel auto-advances to the next slide
- **Carousel arrow navigation** — The carousel SHALL provide arrow navigation with hover transitions.
  - Scenario — Arrow navigation works: **WHEN** the carousel is displayed; **AND** the user clicks the right arrow; **THEN** the carousel navigates to the next slide; **AND** the arrows transition to the brand gold color on hover
- **Responsive layout** — The carousel SHALL stack vertically on mobile devices.
  - Scenario — Mobile layout: **WHEN** the page is viewed on a mobile device (< 768px); **THEN** the testimonial card stacks vertically (image on top, text below); **AND** the image height reduces to ~450px; **AND** carousel controls remain accessible
- **Minimal page structure** — The page SHALL consist of the testimonials section plus a minimal footer with Component Dock link.
  - Scenario — Page structure: **WHEN** the page loads; **THEN** there is no navigation bar; **AND** the page consists of the testimonials carousel section plus a minimal footer; **AND** the footer links to https://www.componentdock.com/
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/swipe/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/swipe/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Heading is centered, 28px, Poppins, regular weight; [ ] Background is very light gray rgba(0, 0, 0, 0.05); [ ] Section padding matches ~7em vertical; [ ] Carousel displays 3 testimonial slides; [ ] Each slide: 50/50 split (image left, text right); [ ] Image panel: background-image, cover, 600px height (450px mobile); [ ] Text panel: white background, centered, soft box shadow; [ ] Quote text: Playfair Display, 39px, weight 700, black; [ ] Author name: 20px, weight 500, brand gold #dbcc8f; [ ] Position label: muted gray, smaller text; [ ] Dots: 10px circles, black border, active = gold fill; [ ] Arrow navigation: subtle black → gold on hover; [ ] Responsive: mobile stacks vertically, image 450px; [ ] No ColorLib references in app code; [ ] Footer links to https://www.componentdock.com/; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/swipe` ships on https://swipe.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/swipe/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/swipe/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/swipe/public/CNAME` = `swipe.free.componentdock.com`
  and the package `homepage` = `https://swipe.free.componentdock.com`.
