# Boostly — Implementation Tasks

Source design: **Thestartup** (`https://colorlib.com/wp/template/thestartup/`) → recreation name **boostly**. Shipped at https://boostly.free.componentdock.com.

Scope: Boostly is a startup & SaaS landing page template (peach split hero, bordered service cards, philosophy split, pricing cards on an orange band, feature accordion, dark plum testimonial slider, blog cards, black 4-column footer) in the free-react-templates monorepo.

## Component breakdown

Render order as composed in `apps/boostly/src/App.tsx`:

### 1. Navbar
- The page SHALL render a sticky navbar with the Josefin Sans wordmark "Boostly" and a star glyph on the left, a right-aligned bold menu (Home marked active, About, Services, Blog with an orange dropdown, Contact) and the gradient "Join Us" button; after scrolling past 40px the navbar SHALL gain a white background, a drop shadow and tighter padding, and SHALL release them when scrolled back to the top.

### 2. Hero
- The hero SHALL render a peach `#FFDDB5` band with the caption column on the left 42% (orange uppercase tagline, 60px Josefin Sans headline, black 20px paragraph, orange "Explore Us" button with the black wipe-on-hover treatment) and the full-height photo column on the right 50%, which SHALL be hidden on viewports below `lg`.

### 3. Services
- The services section SHALL render the 46px heading "Services we provide" with the descriptive blurb opposite it, and exactly 3 bordered white cards, each with an orange line icon, a 24px bold title, a blurb and a "Let's Talk" uppercase link with a black underline bar that turns orange on hover; the links SHALL point at the contact section.

### 4. About
- The about section SHALL render a split band with the photo on the left (a peach `#FFE0BB` strip behind its left edge) and the text panel on the right: the two-line heading "Our Philosophy", two body paragraphs, and the founder attribution with "CEO, Consulto" above the 45px light-weight name "Capcilena Hanry".

### 5. Pricing
- The pricing section SHALL render an orange `#FF9100` band behind the top 53% of the section, a centered white heading "Affordable pricing plan" with a white blurb on the band, and exactly 3 white cards, each with a bordered pill plan name ("Basic Plan"), the orange price `$700` with a superscript dollar sign, a divider, a 4-item lilac feature list and an orange "Get Started Now" button; the middle card SHALL carry the highlighted shadow.

### 6. FeaturesAccordion
- The features section SHALL render the heading "Some more features that seal the deal and convert the customer" over 4 accordion rows on the left 70% with a photo on the right 30%; the open row's title SHALL turn orange `#FF9100` with a minus glyph, closed rows SHALL show `#010A44` titles with a plus glyph, exactly one row SHALL be expanded at a time (second row open by default), and clicking the open row SHALL collapse it.

### 7. Testimonials
- The testimonials section SHALL render the deep plum `#2D0A31` band with a fixed cover-photo overlay and a white card pushed to the right containing the active slide: a 30px quote heading, a `#5E5E5E` body paragraph, and the founder name in black with a small gray role; three dot indicators SHALL navigate between the three slides and mark the active slide with aria-current.

### 8. Blog
- The page SHALL render a sticky navbar with the Josefin Sans wordmark "Boostly" and a star glyph on the left, a right-aligned bold menu (Home marked active, About, Services, Blog with an orange dropdown, Contact) and the gradient "Join Us" button; after scrolling past 40px the navbar SHALL gain a white background, a drop shadow and tighter padding, and SHALL release them when scrolled back to the top.

### 9. Footer
- The footer SHALL render a black band with four columns (white "Boostly" wordmark + blurb + four social icon links; "Navigation" list; "Services" list; "Contact Us" with the address and a tel: phone link) and a bottom bar with an orange heart, the copyright line, and an attribution link to https://www.componentdock.com/ branded "Component Dock".

### 10. ScrollToTop
- The page SHALL render a fixed orange circular button (bottom-right, arrow-up glyph, aria-label "Back to top") that scrolls the window to the top when activated.

### Cross-cutting requirements

- **Blog renders three cards with category badges** — The blog section SHALL render the centered heading "Our latest blog" and exactly 3 cards, each with a photo carrying an "Urban" category badge (orange fill on the first card, white outline on the rest), a 24px title "Starts the automated process." that underlines on hover, and the excerpt "The automated process starts as soon as your clothes go into the machine."
- **Mobile navigation is fully operability-tested** — On mobile viewports the page SHALL hide the inline menu behind a hamburger toggle (aria-expanded) that opens an off-canvas panel with the "Boostly" wordmark, a close button, stacked links (Home, About, Services, Contact), a collapsible Blog group and a Join Us button; activating any link inside the menu SHALL close the menu.
- **Global fidelity and provenance rules** — The app SHALL apply the design tokens above via Tailwind `@theme` tokens, SHALL use picsum.photos seeded placeholders for all photos, Google Fonts (Josefin Sans + Roboto) via `index.html`, lucide-react icons plus inline SVG brand icons, and SHALL NOT contain any reference to the design source in app files (comments included). The footer SHALL link https://www.componentdock.com/.
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/boostly/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/boostly/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [x] Navbar: sticky shadow on scroll, star wordmark, links, Blog dropdown, Join Us button, mobile off-canvas menu; [x] Hero: peach split, orange tagline, 60px headline, paragraph, Explore Us CTA, right photo (hidden below lg); [x] Services: 3 bordered cards, orange icons, titles, blurbs, Let's Talk links; [x] About: split with peach strip, "Our Philosophy" two-line heading, paragraphs, CEO attribution; [x] Pricing: orange band, white heading, 3 cards, pill name, $700, features, CTA, middle card highlighted; [x] Features: 4-row exclusive accordion (second open by default), orange open titles, photo right; [x] Testimonials: plum band + fixed photo overlay, white card slider, 3 dots, founder attribution; [x] Blog: 3 cards, Urban badge (first orange), titles, excerpts; [x] Footer: black, 4 columns, social icons, contact info, Component Dock attribution; [x] Scroll-to-top: fixed orange circle, scrolls to top; [x] No design-source references in app code; [x] Footer links to https://www.componentdock.com/; [x] Uses picsum.photos for placeholder images; [x] Uses Google Fonts (Josefin Sans + Roboto) via index.html link; [x] Uses lucide-react + inline SVG brand icons; [x] 100% test coverage (51 tests); [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/boostly` ships on https://boostly.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/boostly/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/boostly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/boostly/public/CNAME` = `boostly.free.componentdock.com`
  and the package `homepage` = `https://boostly.free.componentdock.com`.
