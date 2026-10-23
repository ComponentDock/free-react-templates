# Upnode — Design Notes

Reference: **Hami** — `https://colorlib.com/wp/template/hami/`  
Live preview: `https://preview.colorlib.com/theme/hami/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/hami-free-template.jpg  
Shipped: https://upnode.free.componentdock.com

Upnode is a single-page web hosting company website template in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Hami" web hosting template (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Archivo**, **Archivo:wght@400;500;600;700**

## Design tokens (`apps/upnode/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary` | `#1c66de` | primary |
| `--color-primary-hover` | `#154fae` | primary hover |
| `--color-mist` | `#e8f1f8` | mist |
| `--color-ink` | `#303030` | ink |
| `--color-muted` | `#707070` | muted |
| `--color-faint` | `#b7b7b7` | faint |
| `--color-borderline` | `#ebebeb` | borderline |
| `--font-sans` | `'Archivo', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | Top utility bar | see fidelity note below |
| 2 | `Navbar` | — | no dedicated spec block |
| 3 | `Hero` | Hero slider | see fidelity note below |
| 4 | `DomainSearch` | Domain search | see fidelity note below |
| 5 | `Features` | Features grid | see fidelity note below |
| 6 | `Pricing` | Pricing plans | see fidelity note below |
| 7 | `DiscountCta` | Discount CTA | see fidelity note below |
| 8 | `SupportBand` | Support band | see fidelity note below |
| 9 | `StatsCta` | Stats CTA | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `TopBar`
The system SHALL render a blue utility bar above the nav with contact info on the left and account/language controls on the right.

### `Navbar`
*anchors only* — Main navigation · menu · menuitem · Mobile navigation

### `Hero`
The system SHALL render a blue hero section with a headline, price line, call-to-action buttons, an illustration, and a cloud-wave transition.

### `DomainSearch`
The system SHALL render a white section with a heading and a pill-shaped domain search form plus a domain price list.

### `Features`
The system SHALL render a light blue-grey section with six feature cards.

### `Pricing`
The system SHALL render three pricing cards with Save-% tags, price, feature checklist, and CTAs.

### `DiscountCta`
The system SHALL render a light blue-grey CTA band with a discount headline and six FREE mini-features.

### `SupportBand`
The system SHALL render a support band with a phone number and a Live Chat button.

### `StatsCta`
The system SHALL render a white CTA with a hosting-stat headline.

### `Footer`
The system SHALL render a white footer with link columns, a newsletter subscribe form, social circles, and a bottom bar.

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
- **Provenance ban.** No file under `apps/upnode/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/upnode/public/CNAME` = `upnode.free.componentdock.com`
  and the package `homepage` = `https://upnode.free.componentdock.com`.
