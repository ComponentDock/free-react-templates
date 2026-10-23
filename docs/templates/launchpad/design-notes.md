# Launchpad — Design Notes

Reference: **Startup** — `https://colorlib.com/wp/template/startup/`  
Live preview: `https://preview.colorlib.com/theme/startup/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/startup-free-template.jpg  
Shipped: https://launchpad.free.componentdock.com

Launchpad is a business landing page with a navbar, hero banner, services, about video, about support, portfolio, call to action and pricing.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/launchpad/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-50` | `#fef2f4` | brand 50 |
| `--color-brand-100` | `#fde3e8` | brand 100 |
| `--color-brand-200` | `#fbc1cb` | brand 200 |
| `--color-brand-300` | `#f78fa2` | brand 300 |
| `--color-brand-400` | `#f14d6e` | brand 400 |
| `--color-brand-500` | `#e8254f` | brand 500 |
| `--color-brand-600` | `#d41440` | brand 600 |
| `--color-brand-700` | `#b20e36` | brand 700 |
| `--color-brand-800` | `#950f32` | brand 800 |
| `--color-brand-900` | `#7f102f` | brand 900 |
| `--color-teal-400` | `#4cd3e3` | teal 400 |
| `--color-blue-400` | `#38a4ff` | blue 400 |
| `--color-surface` | `#f9f9ff` | surface |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `Services` | — | no dedicated spec block |
| 4 | `AboutVideo` | — | no dedicated spec block |
| 5 | `AboutSupport` | — | no dedicated spec block |
| 6 | `Portfolio` | — | no dedicated spec block |
| 7 | `CallToAction` | — | no dedicated spec block |
| 8 | `Pricing` | — | no dedicated spec block |
| 9 | `Testimonials` | — | no dedicated spec block |
| 10 | `Blog` | — | no dedicated spec block |
| 11 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — banner · Main · Mobile

### `Hero`
*anchors only* — All you want is here · Explore Services · Learn More

### `Services`
*anchors only* — Our Offered Services · Who are in extremely love with eco friendly system.

### `AboutVideo`
*anchors only* — Play tutorial video · Tutorial for beginner · Watch tutorial video of SaaS to start · We are here to listen from you deliver excellence

### `AboutSupport`
*anchors only* — A handy support system for the software · We are here to listen from you deliver excellence

### `Portfolio`
*anchors only* — Our Latest Projects · Who are in extremely love with eco friendly system.

### `CallToAction`
*anchors only* — Got impressed by our features · Request Free Demo

### `Pricing`
*anchors only* — Choose the Perfect Plan for you · Who are in extremely love with eco friendly system. · Purchase Plan

### `Testimonials`
*anchors only* — Testimonials from our Clients · Who are in extremely love with eco friendly system.

### `Blog`
*anchors only* — Latest News from our Blog · Who are in extremely love with eco friendly system.

### `Footer`
*anchors only* — contentinfo · Newsletter signup · Email address

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
- **Provenance ban.** No file under `apps/launchpad/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/launchpad/public/CNAME` = `launchpad.free.componentdock.com`
  and the package `homepage` = `https://launchpad.free.componentdock.com`.
