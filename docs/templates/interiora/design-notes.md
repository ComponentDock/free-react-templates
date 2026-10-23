# Interiora — Design Notes

Reference: **Franclin** — `https://colorlib.com/wp/template/franclin/`  
Live preview: `https://preview.colorlib.com/theme/franclin/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/franclin-free-template.jpg  
Shipped: https://interiora.free.componentdock.com

Interiora is an interior-design studio business landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Jost**, **Jost:wght@300;400;500;600;700;800**

## Design tokens (`apps/interiora/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#e67118` | brand |
| `--color-ink` | `#2a2a2a` | ink |
| `--color-body` | `#545454` | body |
| `--color-subtext` | `#656565` | subtext |
| `--color-night` | `#1a1a1a` | night |
| `--color-peach` | `#f1c4a3` | peach |
| `--color-harvest` | `#ffcc00` | harvest |
| `--color-foottext` | `#5e5e5e` | foottext |
| `--color-soft` | `#f9f9ff` | soft |
| `--color-paper` | `#fff` | paper |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar | see fidelity note below |
| 2 | `HeroSlider` | Hero slider | see fidelity note below |
| 3 | `StatsBand` | Stats band | see fidelity note below |
| 4 | `AboutSplit` | About split | see fidelity note below |
| 5 | `QuoteBand` | Client quote band | see fidelity note below |
| 6 | `ProfileBlock` | Design profile block | see fidelity note below |
| 7 | `Services` | Services row | see fidelity note below |
| 8 | `Testimonials` | Testimonials slider | see fidelity note below |
| 9 | `VendorsBand` | Vendors + video band | see fidelity note below |
| 10 | `CtaBand` | CTA band | see fidelity note below |
| 11 | `Footer` | Footer | see fidelity note below |
| 12 | `BackToTop` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a three-part sticky header with a left menu, centered brand, right links, an orange CTA pill, and a mobile hamburger menu.

### `HeroSlider`
The system SHALL render a full-bleed photo hero slider with three slides, a white headline with an underlined phrase, and a dark pill CTA.

### `StatsBand`
The system SHALL render an intro split with a section heading, a paragraph, an orange CTA, and two orange counters.

### `AboutSplit`
The system SHALL render an image/text split with an outline-pill CTA.

### `QuoteBand`
The system SHALL render a centered client quote with attribution above a row of brand logos.

### `ProfileBlock`
The system SHALL render a "Personalized design solutions" block with a 5-star rating, budget/style facts, and a View Gallery CTA.

### `Services`
The system SHALL render three service cards with icons and titles.

### `Testimonials`
The system SHALL render a testimonial slider on the peach band with quotes, authors, ratings, and prev/next controls.

### `VendorsBand`
The system SHALL render a split with a "200 vendors" heading, a CTA, and a video play button.

### `CtaBand`
The system SHALL render a near-black CTA band with a white headline and an orange pill button.

### `Footer`
The system SHALL render a white footer with brand/social, Navigation, Services, a newsletter form, and the Component Dock attribution.

### `BackToTop`
*anchors only* — Back to top

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
- **Provenance ban.** No file under `apps/interiora/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/interiora/public/CNAME` = `interiora.free.componentdock.com`
  and the package `homepage` = `https://interiora.free.componentdock.com`.
