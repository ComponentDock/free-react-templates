# Filmvault — Design Notes

Reference: **Rettro** — `https://colorlib.com/wp/template/rettro/`  
Live preview: `https://preview.colorlib.com/theme/rettro/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/rettro-free-template.jpg  
Shipped: https://filmvault.free.componentdock.com

A photography portfolio template with hero, about, services, gallery, pricing and instagram feed sections. Recreation of ColorLib "Rettro" photography template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Playfair Display**, **Playfair Display:ital,wght@0,400;0,500;0,600;0,700;1,400**

## Design tokens (`apps/filmvault/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-navy-50` | `#f0f0fa` | Brand palette — dark navy from Rettro design (#1f2b7b, #071112) |
| `--color-navy-100` | `#d8d9ef` | navy 100 |
| `--color-navy-200` | `#b1b3df` | navy 200 |
| `--color-navy-300` | `#8a8dcf` | navy 300 |
| `--color-navy-400` | `#6365bf` | navy 400 |
| `--color-navy-500` | `#1f2b7b` | navy 500 |
| `--color-navy-600` | `#1a2468` | navy 600 |
| `--color-navy-700` | `#141c52` | navy 700 |
| `--color-navy-800` | `#0f153d` | navy 800 |
| `--color-navy-900` | `#071112` | navy 900 |
| `--color-cyan-50` | `#e8f9fb` | Accent — cyan from Rettro (#4cd3e3) |
| `--color-cyan-100` | `#d1f3f7` | cyan 100 |
| `--color-cyan-200` | `#a3e7ef` | cyan 200 |
| `--color-cyan-300` | `#75dbe7` | cyan 300 |
| `--color-cyan-400` | `#4cd3e3` | cyan 400 |
| `--color-cyan-500` | `#22b8cc` | cyan 500 |
| `--color-cyan-600` | `#1b93a3` | cyan 600 |
| `--color-cyan-700` | `#146e7a` | cyan 700 |
| `--color-cyan-800` | `#0d4a52` | cyan 800 |
| `--color-cyan-900` | `#072529` | cyan 900 |
| `--font-heading` | `'Playfair Display', ui-serif, Georgia, serif` | font heading |
| `--font-sans` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `Gallery` | — | no dedicated spec block |
| 4 | `About` | — | no dedicated spec block |
| 5 | `Services` | — | no dedicated spec block |
| 6 | `Testimonials` | — | no dedicated spec block |
| 7 | `Pricing` | — | no dedicated spec block |
| 8 | `InstagramFeed` | — | no dedicated spec block |
| 9 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — FilmVault

### `Hero`
*anchors only* — Photography · Capturing moments · Travel Pro · Etiam tristique, metus pretium rutrum elementum, risus tortor.

### `Gallery`
*anchors only* — With my camera, I capture daily life · More Portfolio

### `About`
*anchors only* — I'm Ready to Exceed Expectations · About Me

### `Services`
*anchors only* — Life is about Creating Experiences

### `Testimonials`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Pricing`
*anchors only* — Choose a plan · Most Popular · Only · Get Started

### `InstagramFeed`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

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
- **Provenance ban.** No file under `apps/filmvault/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/filmvault/public/CNAME` = `filmvault.free.componentdock.com`
  and the package `homepage` = `https://filmvault.free.componentdock.com`.
