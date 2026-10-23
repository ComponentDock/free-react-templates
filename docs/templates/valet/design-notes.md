# Valet — Design Notes

Reference: **Virtualassistant** — `https://colorlib.com/wp/template/virtualassistant/`  
Live preview: `https://preview.colorlib.com/theme/virtualassistant/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/virtualassistant-free-template.jpg  
Shipped: https://valet.free.componentdock.com

A Virtual Assistant / Business Services template with hero, why choose us, services, how it works, pricing and blog sections. Recreation of ColorLib's **Virtualassistant** template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page app.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@300;400;500;700**

## Design tokens (`apps/valet/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#21bf73` | Brand accent — from original stylesheet: price numbers, testimony overlay, animated dot |
| `--color-primary` | `#007bff` | Primary button — Bootstrap blue, all CTA buttons |
| `--color-primary-hover` | `#0069d9` | primary hover |
| `--color-footer` | `#1a1a1a` | Footer background |
| `--color-ink` | `#212529` | Body text |
| `--color-light-bg` | `#f8f9fa` | Light section background |
| `--color-card-shadow` | `0 24px 48px -13px rgba(0, 0, 0, 0.05)` | Card shadow |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | Font: Roboto via Google Fonts |

> The spec has no section-level requirements; the order below is read from `apps/valet/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `WhyChooseUs` | — | no dedicated spec block |
| 4 | `Services` | — | no dedicated spec block |
| 5 | `Comparison` | — | no dedicated spec block |
| 6 | `Testimonials` | — | no dedicated spec block |
| 7 | `HowItWorks` | — | no dedicated spec block |
| 8 | `Pricing` | — | no dedicated spec block |
| 9 | `Blog` | — | no dedicated spec block |
| 10 | `ContactForm` | — | no dedicated spec block |
| 11 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Toggle navigation · Virtual Assistant

### `Hero`
*anchors only* — Save Your Precious Time &amp; Outsource Daily Tasks · Request Our Assistant

### `WhyChooseUs`
*anchors only* — Top Reason Why We Need to Get Virtual Assistant

### `Services`
*anchors only* — Services · Our Services &amp; Offers

### `Comparison`
*anchors only* — Get Your Own Highly Skilled Virtual Assistant. · Regular Office Employee · Virtual Assistant Employee

### `Testimonials`
*anchors only* — Testimonial · Happy Clients

### `HowItWorks`
*anchors only* — Procedure · How It Works

### `Pricing`
*anchors only* — Price &amp; Plans · Get Started

### `Blog`
*anchors only* — Blog · Recent Blog

### `ContactForm`
*anchors only* — Your Name · Email · Message

### `Footer`
*anchors only* — Twitter · Facebook · Instagram

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
- **Provenance ban.** No file under `apps/valet/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/valet/public/CNAME` = `valet.free.componentdock.com`
  and the package `homepage` = `https://valet.free.componentdock.com`.
