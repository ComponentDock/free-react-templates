# Precedent — Design Notes

Reference: **Lawfirm 2** — `https://colorlib.com/wp/template/lawfirm-2/`  
Live preview: `https://preview.colorlib.com/theme/lawfirm/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/lawfirm-free-template.jpg  
Shipped: https://precedent.free.componentdock.com

> **Reference identity (measured 2026-10-24).** The demo directory
> `https://preview.colorlib.com/theme/lawfirm/` serves the **v3.0.2 rebuild** — this
> row's design, and the design this brief describes. The earlier note that the preview
> was unreachable is void: the page answers 200 with `css/style.min.css` (202,719 B,
> `?v=3.0.2`). Measured tokens: gold `#cbb88c` (CTA fill, text `#1d2227`), ink
> `#1d2227`, deep gold `#7e6939`, panel `#f5f4f0`, strip ramp
> `#161a1e`/`#121518`/`#0e1013`, **Roboto only — no serif face and no Inter anywhere**
> in the sheet. The invented `#c5a55a` / `#1a1a2e` / Georgia / Inter palette in the app
> table below is app debt (implementer repaint). Evidence:
> `openspec/specs/template-precedent/spec.md` §Reference identity.

Recreation of ColorLib **Lawfirm 2** (https://colorlib.com/wp/template/lawfirm-2/) as a professional law firm landing page. The live preview is `https://preview.colorlib.com/theme/lawfirm/` (HTTP 200, v3.0.2 rebuild, `css/style.min.css` 202,719 B at `?v=3.0.2`); design tokens are read from that stylesheet.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inter**, **Playfair Display**, **Playfair Display:wght@400;600;700**

## Design tokens (`apps/precedent/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--font-sans` | `'Inter', sans-serif` | font sans |
| `--font-heading` | `'Playfair Display', serif` | font heading |
| `--color-brand` | `#c5a55a` | brand |
| `--color-brand-hover` | `#b8963e` | brand hover |
| `--color-dark-bg` | `#333333` | dark bg |
| `--color-dark-card` | `#2a2a2a` | dark card |
| `--color-dark-card-2` | `#222222` | dark card 2 |
| `--color-dark-card-3` | `#1a1a1a` | dark card 3 |
| `--color-dark-card-4` | `#111111` | dark card 4 |
| `--color-body-text` | `#666666` | body text |
| `--color-heading` | `#1a1a2e` | heading |
| `--color-surface` | `#ffffff` | surface |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | TopBar | see fidelity note below |
| 2 | `Navbar` | Navbar | see fidelity note below |
| 3 | `Hero` | Hero | see fidelity note below |
| 4 | `FeatureStrip` | FeatureStrip | see fidelity note below |
| 5 | `TrustSection` | TrustSection | see fidelity note below |
| 6 | `PracticeAreas` | PracticeAreas | see fidelity note below |
| 7 | `Attorneys` | Attorneys | see fidelity note below |
| 8 | `Testimonials` | Testimonials | see fidelity note below |
| 9 | `CtaBanner` | CtaBanner | see fidelity note below |
| 10 | `ContactForm` | ContactForm | see fidelity note below |
| 11 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `TopBar`
The page SHALL display a dark top bar with phone number, email, and social media links.

### `Navbar`
The page SHALL display a sticky navigation bar with the brand name and navigation links.

### `Hero`
The page SHALL display a full-width hero section with a background image, heading, and CTA buttons.

### `FeatureStrip`
The page SHALL display a dark 4-column feature strip below the hero.

### `TrustSection`
The page SHALL display a trust/why-us section with a two-column layout.

### `PracticeAreas`
The page SHALL display practice area cards in a grid layout.

### `Attorneys`
The page SHALL display team member cards with photos, names, titles, and social links.

### `Testimonials`
The page SHALL display client testimonials in a carousel format.

### `CtaBanner`
The page SHALL display a dark CTA banner with stats and a consultation button.

### `ContactForm`
The page SHALL display a consultation form with validation.

### `Footer`
The page SHALL display a dark footer with three columns and Component Dock link.

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
- **Provenance ban.** No file under `apps/precedent/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/precedent/public/CNAME` = `precedent.free.componentdock.com`
  and the package `homepage` = `https://precedent.free.componentdock.com`.
