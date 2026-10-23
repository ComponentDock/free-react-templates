# Treklore — Implementation Tasks

Source design: **Travello** (`https://colorlib.com/wp/template/travello/`) → recreation name **treklore**. Shipped at https://treklore.free.componentdock.com.

Scope: A Travel & Tourism template with hero slider, search form, intro / features, popular destinations, why choose us and featured tours sections. Recreation of the ColorLib "Travello" template as a modern React 19 + Vite + Tailwind 4 + TypeScript single-page travel agency site.

## Component breakdown

Render order as composed in `apps/treklore/src/App.tsx`:

### 1. Header
- No dedicated spec block — hold this band to the design notes.
- Anchors: navigation · Main navigation · menubar · none · menuitem

### 2. HeroSlider
- No dedicated spec block — hold this band to the design notes.
- Anchors: Hero slider · group · slide

### 3. SearchForm
- No dedicated spec block — hold this band to the design notes.
- Anchors: Search form · search · Search for your trip · City · Departure · Arrival

### 4. IntroFeatures
- No dedicated spec block — hold this band to the design notes.
- Anchors: Features

### 5. PopularDestinations
- No dedicated spec block — hold this band to the design notes.
- Anchors: Popular destinations · Special Offer

### 6. WhyChooseUs
- No dedicated spec block — hold this band to the design notes.
- Anchors: Why choose us · Why Choose Us?

### 7. FeaturedTours
- No dedicated spec block — hold this band to the design notes.
- Anchors: Featured tours · View Details

### 8. Testimonials
- No dedicated spec block — hold this band to the design notes.
- Anchors: Testimonials

### 9. InstagramFeed
- No dedicated spec block — hold this band to the design notes.
- Anchors: Instagram feed

### 10. LatestNews
- No dedicated spec block — hold this band to the design notes.
- Anchors: Latest news · Limited Time · Get a 20% Discount · Book your dream vacation online today and save big. · Buy Your Vacation Online Now

### 11. Footer
- No dedicated spec block — hold this band to the design notes.
- Anchors: contentinfo · Newsletter · Contact information

### Cross-cutting requirements

- **Component Dock attribution** — The system SHALL credit Component Dock — the marketplace that publishes this template — with a visible link to `https://www.componentdock.com/` in the site footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT change the footer's own layout or copy beyond the credit line.
  - Scenario — Footer attribution: **GIVEN** any page of the template is rendered; **WHEN** the footer is displayed; **THEN** it SHALL contain an anchor whose `href` is; **AND** the anchor's text SHALL name Component Dock
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/treklore/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/treklore/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Header: logo, nav links, phone, social icons, hamburger; [ ] Hero slider: 3 slides with headlines, vertical nav dots; [ ] Search form: 4 inputs + dark search button; [ ] Intro: 3 feature cards with icons; [ ] Destinations: 6 cards in grid with images, names, prices; [ ] Why Choose Us: parallax bg, 3 feature cards; [ Featured Tours: tour card slider with badges, prices, CTA; [ ] Testimonials: background image, slider with quotes; [ ] Instagram: 6 images with hover overlay; [ ] News: 3 posts + promotional sidebar; [ ] Footer: newsletter form, 3 contact columns, copyright + Component Dock; [ ] Responsive design (mobile hamburger, stacked columns); [ ] No ColorLib references in app code; [ ] Placeholder images via `picsum.photos/seed/treklore-<n>/`; [ ] Open Sans + Oswald loaded via Google Fonts; [ ] Brand tokens in `@theme` / `index.css`; [ ] `public/CNAME` set to `treklore.free.componentdock.com`; [ ] `homepage` set to `https://treklore.free.componentdock.com`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR; [ ] Footer credits Component Dock with a link to https://www.componentdock.com/

## Verification

- [x] `apps/treklore` ships on https://treklore.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/treklore/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/treklore/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/treklore/public/CNAME` = `treklore.free.componentdock.com`
  and the package `homepage` = `https://treklore.free.componentdock.com`.
