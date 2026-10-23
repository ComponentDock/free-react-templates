# Serverly — Design Notes

Reference: **Bhost** — `https://colorlib.com/wp/template/bhost/`  
Live preview: `https://preview.colorlib.com/theme/bhost/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/bhost-free-template.jpg  
Shipped: https://serverly.free.componentdock.com

Serverly is a single-page web-hosting landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Bhost" design (see TEMPLATES.md, Bootstrap category), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:300,400,500,600,700,800,900**

## Design tokens (`apps/serverly/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-400` | `#487fee` | Gradient start (ColorLib .phone / .domain_search_button / waves). |
| `--color-brand-500` | `#b632fa` | Gradient end (ColorLib gradient to right, #b632fa). |
| `--color-navy-900` | `#020c22` | Dark navy (ColorLib header scrolled / menu #020c22). |
| `--color-navy-800` | `#21263a` | Dark navy (ColorLib footer_content #21263a). |
| `--color-navy-950` | `#181d2e` | Dark navy (ColorLib copyright_bar #181d2e). |
| `--color-sun-400` | `#ffc016` | Accent yellow (ColorLib .pricing_button hover #ffc016). |
| `--color-mist-400` | `#92a4b8` | Secondary text (ColorLib #92a4b8 — pricing list, footer list). |
| `--color-royal-400` | `#416ecc` | Logo accent (ColorLib .logo a span #416ecc). |
| `--color-leaf-500` | `#03dd03` | Domain dot/extension green (ColorLib #03dd03). |
| `--font-sans` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header / navigation | see fidelity note below |
| 2 | `Hero` | Hero with domain search | see fidelity note below |
| 3 | `DomainPricing` | Domain pricing strip | see fidelity note below |
| 4 | `WhyChooseUs` | Why Choose Us | see fidelity note below |
| 5 | `Pricing` | Domain pricing strip | see fidelity note below |
| 6 | `SplitFeatures` | Split feature sections | see fidelity note below |
| 7 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render a header over the hero with a logo, primary navigation, utility links, a phone pill, and a hamburger menu.

### `Hero`
The system SHALL render a dark hero with an icon, a headline, and a domain-search form.

### `DomainPricing`
The system SHALL render an overlapping white strip listing domain extensions with prices.

### `WhyChooseUs`
The system SHALL render a "Why Choose us?" section with three feature cards.

### `Pricing`
The system SHALL render an overlapping white strip listing domain extensions with prices.

### `SplitFeatures`
The system SHALL render two alternating split sections: "Choose the best service" and "The best servers".

### `Footer`
The system SHALL render a dark footer with a phone bar, link columns, contact info, payment/social icons, and a copyright bar.

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
- **Provenance ban.** No file under `apps/serverly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/serverly/public/CNAME` = `serverly.free.componentdock.com`
  and the package `homepage` = `https://serverly.free.componentdock.com`.
