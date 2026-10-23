# Journee — Design Notes

Reference: **Tourbi** — `https://colorlib.com/wp/template/tourbi/`  
Live preview: `https://preview.colorlib.com/theme/tourbi/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/tourbi-free-template.jpg  
Shipped: https://journee.free.componentdock.com

Journee is a single-page travel agency / tour booking template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Kaushan Script**, **Poppins**, **Roboto**

## Design tokens (`apps/journee/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ffcc00` | brand |
| `--color-sky` | `#00c0ff` | sky |
| `--color-ink` | `#14182d` | ink |
| `--color-muted` | `#7f7f7f` | muted |
| `--color-soft` | `#fafafa` | soft |
| `--color-fade` | `#888888` | fade |
| `--color-paper` | `#ffffff` | paper |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-heading` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font heading |
| `--font-script` | `'Kaushan Script', cursive` | font script |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header — transparent nav with hotline button | see fidelity note below |
| 2 | `Hero` | Hero banner | see fidelity note below |
| 3 | `SearchSection` | Search-your-country section | see fidelity note below |
| 4 | `Feature` | Amazing tour feature section | see fidelity note below |
| 5 | `PopularPlace` | Most Popular place section | see fidelity note below |
| 6 | `PlaceDetails` | Place details section | see fidelity note below |
| 7 | `TourPackage` | Tour package carousel | see fidelity note below |
| 8 | `CtaNewsletter` | Newsletter CTA | see fidelity note below |
| 9 | `BlogSection` | Blog section | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render an absolute transparent header over the hero with the brand logo on the left, a centered nav (Home / about / packages / Blog with a blog dropdown / pages with an Elements dropdown / Contact), and a yellow pill "Hot Line 052" button on the right (desktop only). On mobile a hamburger SHALL open the same nav links.

### `Hero`
The system SHALL render a full-width hero banner (1050px tall on desktop) with a blue-sky photo background, a white script subheading "Best way to tour", a large white headline, and a wavy overlay at its bottom edge.

### `SearchSection`
The system SHALL render a white section overlapping the banner bottom containing a yellow search panel with country and city selects and a blue Search button, plus three donation-style cards (icon, heading, paragraph, "read more" link).

### `Feature`
The system SHALL render a split feature section with a photo on the left and, on the right, a "Amazing tour" heading with copy and three small place-count cards (london 35 Places, Kashmir 75 Places, chaina 85 Places).

### `PopularPlace`
The system SHALL render a "Most Popular place" section with three cards, each showing an icon, a title, a paragraph, and a "book now" script link (Life of Egeft, Biking in Norway, Tour of iceland).

### `PlaceDetails`
The system SHALL render a place-details section with a centered text block ("Amazing tour" heading + copy), two photos, and a big yellow "view all" square button below.

### `TourPackage`
The system SHALL render a tour-package section with a carousel of four destination cards (photo, "Sawpalo, Brasil" title, paragraph, five yellow stars, "join now" link) plus a right-side blurb (heading "tour package", paragraph, yellow "join now" pill button).

### `CtaNewsletter`
The system SHALL render a blue-sky photo-background CTA section with the script heading "Join Our Newsletter", the heading "Subscribe to get Updated with new offers", an email input, and a yellow "subscribe now" button.

### `BlogSection`
The system SHALL render an "our blog" section with three white blog cards, each showing a photo, a "Luxerious Car Rental" title, a paragraph, and meta (date 13th Dec, likes 15, comments 10).

### `Footer`
The system SHALL render a white footer with four widget columns (About Agency, Navigation Links, Newsletter with a blue paper-plane submit, Instafeed image grid), a bottom bar with the copyright line, and four social icons. The credit SHALL read "This template is made with ♥ by **Component Dock**" linking https://www.componentdock.com/ (no ColorLib credit).

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
- **Provenance ban.** No file under `apps/journee/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/journee/public/CNAME` = `journee.free.componentdock.com`
  and the package `homepage` = `https://journee.free.componentdock.com`.
