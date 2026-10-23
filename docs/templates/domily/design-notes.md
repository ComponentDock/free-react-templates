# Domily — Design Notes

Reference: **Homofy** — `https://colorlib.com/wp/template/homofy/`  
Live preview: `https://preview.colorlib.com/theme/homofy/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/homofy-colorlib-template.jpg  
Shipped: https://domily.free.componentdock.com

Domily is a real-estate / modular-homes marketplace one-page template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@300;400;500;700;900**, **Shippori Mincho**

## Design tokens (`apps/domily/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-gold` | `#fec82f` | gold |
| `--color-navy-ink` | `#040f2e` | navy ink |
| `--color-navy` | `#122c77` | navy |
| `--color-slate` | `#071112` | slate |
| `--color-cardborder` | `#beccd6` | cardborder |
| `--color-serviceline` | `#c9d6cb` | serviceline |
| `--color-footbar` | `#f9fafb` | footbar |
| `--color-phototint` | `#fff6ee` | phototint |
| `--color-teambg` | `#004274` | teambg |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Shippori Mincho', ui-serif, Georgia, serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `Properties` | Featured properties | see fidelity note below |
| 4 | `About` | About | see fidelity note below |
| 5 | `WhyChooseUs` | Why Choose Us | see fidelity note below |
| 6 | `Testimonials` | Testimonials | see fidelity note below |
| 7 | `Agents` | Our Agents | see fidelity note below |
| 8 | `Newsletter` | Newsletter | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Domily home · Main navigation · Open search · Toggle mobile menu · Mobile navigation · dialog

### `Hero`
The system SHALL render the split hero: a navy caption panel over a modern-home photo, with a white serif headline carrying a gold span, a subtext paragraph, a gold-outline CTA, and a vertical gold promo-video tab.

### `Properties`
The system SHALL render the "Display Latest & Featured Properties" carousel of property cards with photo, navy price, type title, blurb, and a spec row.

### `About`
The system SHALL render the split About section with a photo on the left and the "About Us" copy with a navy-outline Learn More button on the right.

### `WhyChooseUs`
The system SHALL render the 4-column "Why Choose Us" grid with icon cards separated by `#C9D6CB` borders and a solid navy "Browse Propertise" button below.

### `Testimonials`
The system SHALL render the split testimonial section: a serif quote carousel with founder avatars on the left and a tall house photo on the right.

### `Agents`
The system SHALL render the "Our Agents" carousel of headshot cards with circular social buttons and name/role captions.

### `Newsletter`
The system SHALL render the dark navy `#040F2E` split newsletter band with a photo, heading, email input, and gold Subscribe button.

### `Footer`
The system SHALL render the light footer with a brand column, three link columns, a contact column, and a copyright bar linking to Component Dock.

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
- **Provenance ban.** No file under `apps/domily/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/domily/public/CNAME` = `domily.free.componentdock.com`
  and the package `homepage` = `https://domily.free.componentdock.com`.
