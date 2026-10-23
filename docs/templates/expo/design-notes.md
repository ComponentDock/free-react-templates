# Expo — Design Notes

Reference: **Expo** — `https://colorlib.com/wp/template/expo/`  
Live preview: `https://preview.colorlib.com/theme/expo/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/expo-free-template.jpg  
Shipped: https://expo.free.componentdock.com

Expo is an SEO / digital marketing landing page. It recreates the ColorLib **Expo** design (https://colorlib.com/wp/template/expo/, preview: https://preview.colorlib.com/theme/expo/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Josefin Sans**, **Josefin Sans:wght@300;400;500;600;700**, **Roboto**

## Design tokens (`apps/expo/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary` | `#ff5700` | primary |
| `--color-primary-dark` | `#e64e00` | primary dark |
| `--color-secondary` | `#423f8d` | secondary |
| `--color-secondary-dark` | `#343270` | secondary dark |
| `--color-text-dark` | `#071112` | text dark |
| `--color-text-gray` | `#7977a2` | text gray |
| `--color-text-gray-dark` | `#5e5e5e` | text gray dark |
| `--color-bg-light` | `#f9fafb` | bg light |
| `--color-footer-bg` | `#423f8d` | footer bg |
| `--font-heading` | `'Josefin Sans', ui-sans-serif, system-ui, sans-serif` | font heading |
| `--font-body` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font body |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |

> The spec has no section-level requirements; the order below is read from `apps/expo/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `Brands` | — | no dedicated spec block |
| 4 | `About` | — | no dedicated spec block |
| 5 | `Features` | — | no dedicated spec block |
| 6 | `ProjectUs` | — | no dedicated spec block |
| 7 | `Pricing` | — | no dedicated spec block |
| 8 | `CallToAction` | — | no dedicated spec block |
| 9 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — banner · Expo

### `Hero`
*anchors only* — Build audience and grow your brand · Explore Us

### `Brands`
*anchors only* — Trusted by over 3,000 world&apos;s leading companies

### `About`
*anchors only* — We take a steps to build a successful business · Explore Us

### `Features`
*anchors only* — How we can help

### `ProjectUs`
*anchors only* — We are here to help you for better solutions

### `Pricing`
*anchors only* — Affordable pricing plan · Get Started Now

### `CallToAction`
*anchors only* — Let&apos;s talk about your project · Start Talking

### `Footer`
*anchors only* — contentinfo · Facebook · Twitter · LinkedIn

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
- **Provenance ban.** No file under `apps/expo/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/expo/public/CNAME` = `expo.free.componentdock.com`
  and the package `homepage` = `https://expo.free.componentdock.com`.
