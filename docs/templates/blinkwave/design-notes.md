# Blinkwave — Design Notes

Reference: **Fastnet** — `https://colorlib.com/wp/template/fastnet/`  
Live preview: `https://preview.colorlib.com/theme/fastnet/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/fastnet-free-template.jpg  
Shipped: https://blinkwave.free.componentdock.com

Recreate the ColorLib "Fastnet" ISP landing page as a React 19 + Tailwind CSS 4 template under the name "Blinkwave". The template showcases an internet service provider with hero, about, services, pricing, zipcode availability check, testimonials, blog, and footer sections.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Mulish**, **Mulish:wght@300;400;500;600;700;800**

## Design tokens (`apps/blinkwave/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-signal-50` | `#fff1f1` | signal 50 |
| `--color-signal-100` | `#ffe1e1` | signal 100 |
| `--color-signal-200` | `#ffc8c8` | signal 200 |
| `--color-signal-300` | `#ffa1a1` | signal 300 |
| `--color-signal-400` | `#ff3e3f` | signal 400 |
| `--color-signal-500` | `#f82122` | signal 500 |
| `--color-signal-600` | `#e50708` | signal 600 |
| `--color-signal-700` | `#c10506` | signal 700 |
| `--color-signal-800` | `#a0090b` | signal 800 |
| `--color-signal-900` | `#840d10` | signal 900 |
| `--color-navy-50` | `#eef2ff` | navy 50 |
| `--color-navy-100` | `#dde5ff` | navy 100 |
| `--color-navy-200` | `#c3cfff` | navy 200 |
| `--color-navy-300` | `#97a8ff` | navy 300 |
| `--color-navy-400` | `#6475ff` | navy 400 |
| `--color-navy-500` | `#414dff` | navy 500 |
| `--color-navy-600` | `#2728f8` | navy 600 |
| `--color-navy-700` | `#1d1be5` | navy 700 |
| `--color-navy-800` | `#072366` | navy 800 |
| `--color-navy-900` | `#10285d` | navy 900 |
| `--color-purple-accent` | `#331391` | purple accent |
| `--color-blue-accent` | `#38a4ff` | blue accent |
| `--color-green-accent` | `#09cc7f` | green accent |
| `--font-sans` | `'Mulish', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `About` | — | no dedicated spec block |
| 4 | `Services` | — | no dedicated spec block |
| 5 | `Pricing` | Pricing cards display correct plans | see fidelity note below |
| 6 | `CtaZipcode` | — | no dedicated spec block |
| 7 | `Testimonials` | All sections render correctly | see fidelity note below |
| 8 | `Blog` | — | no dedicated spec block |
| 9 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Primary · Mobile · Call Us: (+84) 939 512 999 · Blinkwave · Get Started

### `Hero`
*anchors only* — View Packages · Learn More

### `About`
*anchors only* — About Us · We listen and work together for a great experience.

### `Services`
*anchors only* — Why Choose Us · Our mission is to bring all the power of every business online. · View Packages

### `Pricing`
The pricing section SHALL display three plans with names, prices, and features.

### `CtaZipcode`
*anchors only* — Zipcode · Check our super fast Broadband availability in your area. · Check Now

### `Testimonials`
The page SHALL display all 9 sections in order: Header, Hero, About, Services, Pricing, CTA/Zipcode, Testimonials, Blog, Footer.

### `Blog`
*anchors only* — Our Blog · Latest news and updates from Blinkwave. · Read More

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
- **Provenance ban.** No file under `apps/blinkwave/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/blinkwave/public/CNAME` = `blinkwave.free.componentdock.com`
  and the package `homepage` = `https://blinkwave.free.componentdock.com`.
