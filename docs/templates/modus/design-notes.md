# Modus — Design Notes

Reference: **Interd** — `https://colorlib.com/wp/template/interd/`  
Live preview: `https://preview.colorlib.com/theme/interd/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/interd-free-template.jpg  
Shipped: https://modus.free.componentdock.com

Modus is an interior design company landing page template that recreates the ColorLib "Interd" design with React, Tailwind CSS 4, and TypeScript. It features a hero, services, about, testimonials, gallery, accordion, CTA, and footer sections using a warm peach/salmon gradient brand palette with Heebo and Mulish fonts.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Heebo**, **Heebo:wght@200;300;400;500;600;700;800**, **Mulish**

## Design tokens (`apps/modus/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ff8a7a` | brand |
| `--color-brand-dark` | `#e07060` | brand dark |
| `--color-salmon` | `#ffc99e` | salmon |
| `--color-salmon-light` | `#ffd4b0` | salmon light |
| `--color-ink` | `#232f55` | Ink — navy headings (#232F55 from the original). |
| `--color-ink-dark` | `#1a2240` | ink dark |
| `--color-paper` | `#f9f9ff` | Soapstone — light section background (#f9f9ff from the original). |
| `--color-lavender` | `#f0e9ff` | Lavender — secondary light section background (#f0e9ff). |
| `--color-mist` | `#999999` | Mist — muted body text (#999999 from the original). |
| `--color-primary-50` | `#fff5f0` | primary 50 |
| `--color-primary-100` | `#ffe8de` | primary 100 |
| `--color-primary-200` | `#ffc8b4` | primary 200 |
| `--color-primary-300` | `#ffa58a` | primary 300 |
| `--color-primary-400` | `#ff8a7a` | primary 400 |
| `--color-primary-500` | `#ff7060` | primary 500 |
| `--color-primary-600` | `#e05a4a` | primary 600 |
| `--color-primary-700` | `#c04a3a` | primary 700 |
| `--color-primary-800` | `#a03a2a` | primary 800 |
| `--color-primary-900` | `#802a1a` | primary 900 |
| `--font-sans` | `'Mulish', ui-sans-serif, system-ui, sans-serif` | Fonts — Heebo for headings, Mulish for body. |
| `--font-display` | `'Heebo', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `Services` | Services section shows three service cards | see fidelity note below |
| 4 | `About` | — | no dedicated spec block |
| 5 | `Testimonials` | Page renders all sections in correct order | see fidelity note below |
| 6 | `Gallery` | — | no dedicated spec block |
| 7 | `AccordionSection` | Accordion toggles expand and collapse | see fidelity note below |
| 8 | `CtaBanner` | — | no dedicated spec block |
| 9 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Open menu · Modus

### `Hero`
*anchors only* — Let's Make your Interior Better · Explore Our Services

### `Services`
The services section SHALL display three service cards with images, titles, and descriptions.

### `About`
*anchors only* — We design with · Learn More

### `Testimonials`
The template SHALL render all nine sections (Navbar, Hero, Services, About, Testimonials, Gallery, Accordion, CTA Banner, Footer) in the correct visual order.

### `Gallery`
*anchors only* — Our Work · More Work

### `AccordionSection`
The accordion section SHALL allow users to expand and collapse individual items.

### `CtaBanner`
*anchors only* — Let's discuss about your interior · Contact Us

### `Footer`
The footer SHALL include a link to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/modus/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/modus/public/CNAME` = `modus.free.componentdock.com`
  and the package `homepage` = `https://modus.free.componentdock.com`.
