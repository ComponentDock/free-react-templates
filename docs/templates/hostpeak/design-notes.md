# Hostpeak — Design Notes

Reference: **Lorahost** — `https://colorlib.com/wp/template/lorahost/`  
Live preview: `https://preview.colorlib.com/theme/lorahost/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/lorahost-free-template.jpg  
Shipped: https://hostpeak.free.componentdock.com

Hostpeak is a web hosting landing template. It recreates the ColorLib **Lorahost** design (https://colorlib.com/wp/template/lorahost/, preview: https://preview.colorlib.com/theme/lorahost/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Lato**, **Lato:wght@400;700;900**, **Roboto**

## Design tokens (`apps/hostpeak/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#eef2ff` | primary 50 |
| `--color-primary-100` | `#e0e7ff` | primary 100 |
| `--color-primary-200` | `#c7d2fe` | primary 200 |
| `--color-primary-300` | `#a5b4fc` | primary 300 |
| `--color-primary-400` | `#818cf8` | primary 400 |
| `--color-primary-500` | `#6366f1` | primary 500 |
| `--color-primary-600` | `#4f46e5` | primary 600 |
| `--color-primary-700` | `#4338ca` | primary 700 |
| `--color-primary-800` | `#3730a3` | primary 800 |
| `--color-primary-900` | `#312e81` | primary 900 |
| `--color-primary-950` | `#1e1b4b` | primary 950 |
| `--color-brand-start` | `#2926ac` | brand start |
| `--color-brand-end` | `#6128be` | brand end |
| `--color-heading` | `#1e1859` | heading |
| `--color-body` | `#888888` | body |
| `--color-surface` | `#f9f9ff` | surface |
| `--color-border` | `#dbd9e6` | border |
| `--color-footer` | `#0c112a` | footer |
| `--font-heading` | `'Lato', sans-serif` | font heading |
| `--font-body` | `'Roboto', sans-serif` | font body |

> The spec has no section-level requirements; the order below is read from `apps/hostpeak/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `DomainSearch` | — | no dedicated spec block |
| 4 | `BrandLogos` | — | no dedicated spec block |
| 5 | `Features` | — | no dedicated spec block |
| 6 | `Pricing` | — | no dedicated spec block |
| 7 | `Services` | — | no dedicated spec block |
| 8 | `Newsletter` | — | no dedicated spec block |
| 9 | `DedicatedServer` | — | no dedicated spec block |
| 10 | `Testimonials` | — | no dedicated spec block |
| 11 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Toggle navigation · Hostpeak · Live Chat · Login

### `Hero`
*anchors only* — Smart Company With Perfect Space · Powerful Web Hosting · Get Started

### `DomainSearch`
*anchors only* — Search Your Domain Now! · Search

### `BrandLogos`
*anchors only* — Trusted by 12,000+ Happy Customers Worldwide

### `Features`
*anchors only* — Choose Your Own Virtual Space

### `Pricing`
*anchors only* — Popular Pricing Package · Select Plan

### `Services`
*anchors only* — High Quality Service

### `Newsletter`
*anchors only* — Subscribe To Get Our Newsletter · Subscribe

### `DedicatedServer`
*anchors only* — Dedicated

### `Testimonials`
*anchors only* — Happy Customer Says

### `Footer`
*anchors only* — Subscribe · Facebook · Twitter · LinkedIn

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
- **Provenance ban.** No file under `apps/hostpeak/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/hostpeak/public/CNAME` = `hostpeak.free.componentdock.com`
  and the package `homepage` = `https://hostpeak.free.componentdock.com`.
