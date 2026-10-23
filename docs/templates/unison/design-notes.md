# Unison — Design Notes

Reference: **Oneder** — `https://colorlib.com/wp/template/oneder/`  
Live preview: `https://preview.colorlib.com/theme/oneder/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/oneder-free-template.jpg  
Shipped: https://unison.free.componentdock.com

Unison is a single-page business/creative-agency website template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Work Sans**, **Work Sans:wght@300;400;500;700;900**

## Design tokens (`apps/unison/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#007bff` | brand |
| `--color-check` | `#71bc42` | check |
| `--color-excluded` | `#dee2e6` | excluded |
| `--color-suffix` | `#cccccc` | suffix |
| `--color-soft` | `#f8f9fa` | soft |
| `--color-footer` | `#333333` | footer |
| `--color-footertext` | `#737373` | footertext |
| `--color-footerlink` | `#999999` | footerlink |
| `--color-chiptext` | `#343a40` | chiptext |
| `--color-ink` | `#212529` | ink |
| `--color-heading` | `#000000` | heading |
| `--color-primary-50` | `#e6f2ff` | primary 50 |
| `--color-primary-100` | `#cce5ff` | primary 100 |
| `--color-primary-200` | `#99cbff` | primary 200 |
| `--color-primary-300` | `#66b0ff` | primary 300 |
| `--color-primary-400` | `#3396ff` | primary 400 |
| `--color-primary-500` | `#007bff` | primary 500 |
| `--color-primary-600` | `#007bff` | primary 600 |
| `--color-primary-700` | `#000000` | primary 700 |
| `--color-primary-800` | `#000000` | primary 800 |
| `--color-primary-900` | `#000000` | primary 900 |
| `--font-sans` | `'Work Sans', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Sticky navbar with dropdown and mobile toggle | see fidelity note below |
| 2 | `Hero` | Hero with overlay, headline and CTA | see fidelity note below |
| 3 | `AboutSection` | About section with checklist | see fidelity note below |
| 4 | `TeamSection` | Testimonial slider | see fidelity note below |
| 5 | `PortfolioSection` | Filterable portfolio grid | see fidelity note below |
| 6 | `ServicesSection` | Services row with icons | see fidelity note below |
| 7 | `Testimonials` | Team grid with hover socials | see fidelity note below |
| 8 | `PricingSection` | Pricing table | see fidelity note below |
| 9 | `FaqSection` | Second about split | see fidelity note below |
| 10 | `FeatureSplit` | — | no dedicated spec block |
| 11 | `BlogSection` | — | no dedicated spec block |
| 12 | `ContactSection` | Contact info and form | see fidelity note below |
| 13 | `Footer` | Dark footer with newsletter | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a transparent navbar over the hero (white wordmark - white links) that turns solid white with a blue logo on scroll, with an About Us dropdown and a mobile hamburger toggle.

### `Hero`
The system SHALL render a full-viewport photo hero with a dark overlay, an uppercase headline and a pill CTA button.

### `AboutSection`
The system SHALL render an "About" split section: circular-framed photo left, heading + paragraph + green-check list + CTA right.

### `TeamSection`
The system SHALL render a testimonial section with quotes and author names, switchable between slides.

### `PortfolioSection`
The system SHALL render a portfolio grid with filter buttons (All, Web, Design, Brand) that filter the items client-side.

### `ServicesSection`
The system SHALL render 6 service cards (3-column grid, 2 rows), each with an icon, title, lorem text and "Learn More" link.

### `Testimonials`
The system SHALL render 8 team member cards in a 4×2 grid, each with photo, name, role, and social icons revealed on hover/focus.

### `PricingSection`
The system SHALL render 3 pricing cards with plan name, price, feature list (included/excluded) and a buy button.

### `FaqSection`
The system SHALL render a second split section: two icon feature boxes left, rounded photo right.

### `FeatureSplit`
*anchors only* — Learn More

### `BlogSection`
*anchors only* — Our Blog · Continue Reading...

### `ContactSection`
The system SHALL render 3 contact info columns and a contact form with First Name, Last Name, Email, Subject, Message and a send button.

### `Footer`
The system SHALL render a dark footer with About Us, Quick Links, Follow Us and a Subscribe Newsletter form plus a copyright bar.

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
- **Provenance ban.** No file under `apps/unison/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/unison/public/CNAME` = `unison.free.componentdock.com`
  and the package `homepage` = `https://unison.free.componentdock.com`.
