# Statecraft — Design Notes

Reference: **Consul** — `https://colorlib.com/wp/template/consul/`  
Live preview: `https://preview.colorlib.com/theme/consul/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/consul-colorlib-template.jpg  
Shipped: https://statecraft.free.componentdock.com

Statecraft is a single-page consulting firm template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Consul" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Hind**, **Hind:wght@300;400;500;600;700**, **Shippori Mincho**

## Design tokens (`apps/statecraft/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f3d955` | brand |
| `--color-brand-soft` | `#f7e47c` | brand soft |
| `--color-accent` | `#f15b43` | accent |
| `--color-ink` | `#1a1a1a` | ink |
| `--color-olive` | `#36402b` | olive |
| `--color-cream` | `#ebe5d0` | cream |
| `--color-sage` | `#dadfd4` | sage |
| `--color-forest` | `#51643d` | forest |
| `--color-overlay` | `#2e2200` | overlay |
| `--font-sans` | `'Hind', ui-sans-serif, system-ui, sans-serif` | Hind for body/nav, Shippori Mincho for serif labels + watermark |
| `--font-serif` | `'Shippori Mincho', ui-serif, Georgia, serif` | font serif |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar | see fidelity note below |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `About` | — | no dedicated spec block |
| 4 | `Services` | Services | see fidelity note below |
| 5 | `WhyChoose` | Why Choose Us | see fidelity note below |
| 6 | `Cases` | Top Stories (cases) | see fidelity note below |
| 7 | `Testimonials` | Testimonials | see fidelity note below |
| 8 | `Blog` | Blog | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |
| 10 | `BackToTop` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a dark navbar with the site wordmark, section links, and a yellow "Make an Appointment" call-to-action button.

### `Hero`
The system SHALL render a full-height static hero on the olive-green surface with a dark overlay, a split layout (caption left, photo right), and a headline highlighting one word in brand yellow.

### `About`
*anchors only* — Who We Are

### `Services`
The system SHALL render a brand-yellow services band with three image cards, each with a title, blurb, and a Learn More link.

### `WhyChoose`
The system SHALL render a light about block with a "Why Choose Us?" label, headline text, and an image.

### `Cases`
The system SHALL render a cases section titled "Top Stories" with a "More Cases" link and three image cards.

### `Testimonials`
The system SHALL render a cream testimonial carousel with centered quote slides showing a quote, a name, and a role.

### `Blog`
The system SHALL render a blog section titled "Latest Blog" with the subtitle "Tips & Tricks" and at least two blog cards.

### `Footer`
The system SHALL render a three-column footer with quick links, service links, a newsletter form, and a copyright bar linking to Component Dock.

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
- **Provenance ban.** No file under `apps/statecraft/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/statecraft/public/CNAME` = `statecraft.free.componentdock.com`
  and the package `homepage` = `https://statecraft.free.componentdock.com`.
