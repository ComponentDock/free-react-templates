# Linnet — Design Notes

Reference: **Classic** — `https://colorlib.com/wp/template/classic/`  
Live preview: `https://preview.colorlib.com/theme/classic/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/classic-free-template.jpg  
Shipped: https://linnet.free.componentdock.com

A business/agency one-page template with dark overlay hero, tabbed content, filterable portfolio, team cards, monthly/yearly pricing. It also includes blog, animated stats, and contact form. Recreation of ColorLib "Classic" (https://colorlib.com/wp/template/classic/).

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@300;400;500;600;700**, **Roboto**

## Design tokens (`apps/linnet/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#eef6fc` | primary 50 |
| `--color-primary-100` | `#d5e9f7` | primary 100 |
| `--color-primary-200` | `#aed3ef` | primary 200 |
| `--color-primary-300` | `#7ab8e3` | primary 300 |
| `--color-primary-400` | `#3498db` | primary 400 |
| `--color-primary-500` | `#2980b9` | primary 500 |
| `--color-primary-600` | `#1f6fa3` | primary 600 |
| `--color-primary-700` | `#1a5f8a` | primary 700 |
| `--color-primary-800` | `#164e71` | primary 800 |
| `--color-primary-900` | `#113d58` | primary 900 |
| `--color-navy-50` | `#eef1f3` | navy 50 |
| `--color-navy-100` | `#d5dce1` | navy 100 |
| `--color-navy-200` | `#abb9c3` | navy 200 |
| `--color-navy-300` | `#8196a5` | navy 300 |
| `--color-navy-400` | `#577387` | navy 400 |
| `--color-navy-500` | `#2c3e50` | navy 500 |
| `--color-navy-600` | `#243343` | navy 600 |
| `--color-navy-700` | `#1c2836` | navy 700 |
| `--color-navy-800` | `#141d29` | navy 800 |
| `--color-navy-900` | `#0c121c` | navy 900 |
| `--font-heading` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font heading |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `About` | — | no dedicated spec block |
| 4 | `WhyChooseUs` | Why Choose Us tabs switch content | see fidelity note below |
| 5 | `Services` | — | no dedicated spec block |
| 6 | `Skills` | — | no dedicated spec block |
| 7 | `Portfolio` | Portfolio filter tabs | see fidelity note below |
| 8 | `Team` | — | no dedicated spec block |
| 9 | `Pricing` | Pricing tabs switch between monthly and yearly | see fidelity note below |
| 10 | `Blog` | — | no dedicated spec block |
| 11 | `Stats` | — | no dedicated spec block |
| 12 | `Contact` | Contact form submission | see fidelity note below |
| 13 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Search · Account · Linnet

### `Hero`
*anchors only* — We Provide Creative Business Solutions · Contact Now

### `About`
*anchors only* — We Offer Quick &amp; Powerful Business Solution · Learn More

### `WhyChooseUs`
Users SHALL be able to switch between Mission, Vision, and Support tab content.

### `Services`
*anchors only* — Read More

### `Skills`
*anchors only* — Our Professional Skill

### `Portfolio`
Users SHALL be able to filter portfolio items by category.

### `Team`
*anchors only* — Our Expert Team · Meet the talented professionals behind our success.

### `Pricing`
Users SHALL be able to toggle between monthly and yearly pricing views.

### `Blog`
*anchors only* — Latest Blog · Stay updated with our latest insights and articles.

### `Stats`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Contact`
Users SHALL be able to submit the contact form.

### `Footer`
Every page footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/linnet/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/linnet/public/CNAME` = `linnet.free.componentdock.com`
  and the package `homepage` = `https://linnet.free.componentdock.com`.
