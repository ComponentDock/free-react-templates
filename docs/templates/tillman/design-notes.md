# Tillman — Design Notes

Reference: **Agrica** — `https://colorlib.com/wp/template/agrica/`  
Live preview: `https://preview.colorlib.com/theme/agrica/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/agrica-free-template.jpg  
Shipped: https://tillman.free.componentdock.com

Tillman is an agriculture/farm landing page template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Agrica" agriculture website template (see TEMPLATES.md, line 883), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Josefin Sans**, **Josefin Sans:wght@300;400;500;600;700**

## Design tokens (`apps/tillman/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-leaf-50` | `#f3fff2` | leaf 50 |
| `--color-leaf-100` | `#e6fce4` | leaf 100 |
| `--color-leaf-200` | `#b8f5b0` | leaf 200 |
| `--color-leaf-300` | `#73fbaf` | leaf 300 |
| `--color-leaf-400` | `#329d23` | leaf 400 |
| `--color-leaf-500` | `#285d25` | leaf 500 |
| `--color-leaf-600` | `#25771b` | leaf 600 |
| `--color-leaf-700` | `#1e5c16` | leaf 700 |
| `--color-leaf-800` | `#1a4d13` | leaf 800 |
| `--color-leaf-900` | `#143d0f` | leaf 900 |
| `--font-sans` | `'Josefin Sans', ui-sans-serif, system-ui, sans-serif` | Josefin Sans — the original template's typeface (Google Fonts via index.html) |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `About` | — | no dedicated spec block |
| 4 | `Services` | — | no dedicated spec block |
| 5 | `Stats` | — | no dedicated spec block |
| 6 | `WhyChooseUs` | — | no dedicated spec block |
| 7 | `Video` | — | no dedicated spec block |
| 8 | `Tips` | — | no dedicated spec block |
| 9 | `Contact` | — | no dedicated spec block |
| 10 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Open menu · Tillman

### `Hero`
*anchors only* — Agricultural solution · Explore Our Services

### `About`
*anchors only* — More About Us

### `Services`
*anchors only* — Services we provide · Get the Service

### `Stats`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `WhyChooseUs`
*anchors only* — Why you should · Best Plants · Award Winning

### `Video`
*anchors only* — Play video

### `Tips`
*anchors only* — Tips from experts · Read More · More Tips

### `Contact`
*anchors only* — Need any help? · Drop Your Message

### `Footer`
*anchors only* — Twitter · Facebook · Pinterest

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
- **Provenance ban.** No file under `apps/tillman/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/tillman/public/CNAME` = `tillman.free.componentdock.com`
  and the package `homepage` = `https://tillman.free.componentdock.com`.
