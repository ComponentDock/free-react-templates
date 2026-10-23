# Lensa — Design Notes

Reference: **Nissa** — `https://colorlib.com/wp/template/nissa/`  
Live preview: `https://preview.colorlib.com/theme/nissa/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/nissa-free-template.jpg  
Shipped: https://lensa.free.componentdock.com

Lensa is a single-page photography studio / portfolio website template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@400;600;700**, **Playfair Display**

## Design tokens (`apps/lensa/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-ink` | `#242424` | ink |
| `--color-paper` | `#ffffff` | paper |
| `--color-line` | `#e1e1e1` | line |
| `--color-muted` | `#aaaaaa` | muted |
| `--color-dim` | `#828282` | dim |
| `--color-nav` | `#4e4e4e` | nav |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Playfair Display', ui-serif, Georgia, serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `OffCanvasMenu` | Slide-in off-canvas navigation menu | see fidelity note below |
| 2 | `Header` | Header bar with hamburger and social icons | see fidelity note below |
| 3 | `Sidebar` | Fixed sidebar intro (logo, about, contact, CTA) | see fidelity note below |
| 4 | `HeroSlider` | Hero photo slider | see fidelity note below |
| 5 | `CopyrightBar` | Copyright bar | see fidelity note below |

## Section-by-section fidelity

### `OffCanvasMenu`
The system SHALL render a black (`#242424`) off-canvas menu that slides in from the left when the hamburger is clicked, with a close "x" control, six nav links (Home active, About Me, Blog, Portfolio, Contact, Elements) in large white type with a short white underline on hover/active, and the five social brand icon links at the bottom.

### `Header`
The system SHALL render a white header bar across the top of the page with a hamburger toggle on the left (opening the off-canvas menu) and five social brand icon links (Pinterest, Facebook, Twitter, Dribbble, Behance) on the right.

### `Sidebar`
The system SHALL render a fixed white left sidebar (stacking above the hero on small screens) containing the brand wordmark "Lensa" with the subtitle "Photography Studio", a serif headline "My name is Michael Smith." with a supporting paragraph, the contact details (address, phone, email), and an outlined uppercase "see my portfolio" button with a right arrow.

### `HeroSlider`
The system SHALL render a horizontally scrolling hero track of full-height (750px) photo slides, each showing a background photo with a white caption box at its bottom-left containing a title, a category line, and an arrow link. The track SHALL contain at least the two distinct slides "Ice Cold Love / Nature Photography" and "Bold Architecture / Cityscape Photography" and SHALL expose prev/next controls on small screens.

### `CopyrightBar`
The system SHALL render a small fixed copyright line at the bottom-left (under the sidebar), reading "Copyright ©<current year> All rights reserved | made with ♥" plus the Lensa attribution, in a faint gray; on small screens it SHALL become a static centered block.

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
- **Provenance ban.** No file under `apps/lensa/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/lensa/public/CNAME` = `lensa.free.componentdock.com`
  and the package `homepage` = `https://lensa.free.componentdock.com`.
