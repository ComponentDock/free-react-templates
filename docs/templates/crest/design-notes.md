# Crest — Design Notes

Reference: **Victor** — `https://colorlib.com/wp/template/victor/`  
Live preview: `https://preview.colorlib.com/theme/victor/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/victor-free-template.jpg  
Shipped: https://crest.free.componentdock.com

Recreation of ColorLib **Victor** (`https://colorlib.com/wp/template/victor/`, preview: `https://preview.colorlib.com/theme/victor/`). A business consulting and agency website template built with Vite, React 19, Tailwind CSS 4, and TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **DM Sans**, **DM Sans:wght@300;400;500;600;700**

## Design tokens (`apps/crest/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--font-sans` | `'DM Sans', sans-serif` | font sans |
| `--color-brand` | `#ff6d21` | brand |
| `--color-navy` | `#232f55` | navy |
| `--color-navy-gray` | `#454e6d` | navy gray |
| `--color-light-gray` | `#f8fafc` | light gray |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | Hero Section | see fidelity note below |
| 3 | `ClientHighlights` | Client Highlights | see fidelity note below |
| 4 | `About` | About / Project Section (Accordion FAQ) | see fidelity note below |
| 5 | `Services` | Services Area | see fidelity note below |
| 6 | `Testimonial` | Emergency / Testimonial | see fidelity note below |
| 7 | `FeaturedProjects` | Featured Projects | see fidelity note below |
| 8 | `Support` | Support Company / About | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Crest · Get Free Consultant

### `Hero`
#### Scenario: Hero Section - Full-width hero with background image on the left, hero shape image on the right. Headline "Get the help you need, every step of the way", subtitle "Design better websites and spend less with Essentials.", and "Get Started" CTA button. - Scenarios: - Scenario: User views hero with headline and CTA. - Scenario: User clicks "Get Started" button.

### `ClientHighlights`
#### Scenario: Client Highlights - Three-column card grid with client images and descriptions: "Happier customers", "Faster growth", "Connected workflow". Each card has an image and short description text. - Scenarios: - Scenario: User views the three client benefit cards.

### `About`
#### Scenario: About / Project Section (Accordion FAQ) - Section title "Flexible support to suit your business needs" with description paragraph. Left side: image. Right side: accordion with 4 expandable items (FAQ-style). First item collapsed, second expanded by default. - Scenarios: - Scenario: User reads the section title and description. - Scenario: User clicks accordion items to expand/collapse content.

### `Services`
#### Scenario: Services Area - Gray background section with title "Improved Digital Experience" and description. Two service cards with SVG icons, titles "Design & Development", bullet lists, and "Learn More" links. Right side: services banner image. - Scenarios: - Scenario: User views the services section with cards. - Scenario: User clicks "Learn More" on a service card.

### `Testimonial`
#### Scenario: Emergency / Testimonial - Full-width parallax background image section with a quote card: quote text from "Barb Dwyer, CEO of Victor". Dark overlay on background. - Scenarios: - Scenario: User reads the testimonial quote.

### `FeaturedProjects`
#### Scenario: Featured Projects - Title "Handpicked by Victor" with description. Carousel/slider of project cards, each with a split layout: image on left, logo + heading + description + "View Project" link on right. - Scenarios: - Scenario: User browses featured project cards. - Scenario: User clicks "View Project" link.

### `Support`
#### Scenario: Support Company / About - Title "Professional who works to help with your business." with description paragraph and "Get Started" CTA button. Right side: illustration/image. - Scenarios: - Scenario: User reads the support section and clicks CTA.

### `Footer`
#### Scenario: Footer - Dark gradient background (`#454e6d` → `#232f55`). Columns: logo + description + social links (Facebook, Instagram, LinkedIn, YouTube), Services links, Navigation links, Contact info (email, address, phone). Copyright bar at bottom with mandatory link to `https://www.componentdock.com/` ("Component Dock"). - Scenarios: - Scenario: User checks footer links and finds Component Dock attribution. ---

## Deltas from the reference

- Photographs are deterministic placeholders (`picsum.photos/seed/…`); no source asset is copied.
- Icon glyphs come from `lucide-react`, not the source's icon font.
- Copy is paraphrased to the same kind of content (headline + subtext + CTA, card title + blurb + link).
- The source's credit bar is replaced by the Component Dock credit (see delivery contract).

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/crest/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/crest/public/CNAME` = `crest.free.componentdock.com`
  and the package `homepage` = `https://crest.free.componentdock.com`.
