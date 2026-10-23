# Uplink — Design Notes

Reference: **Hosthub** — `https://colorlib.com/wp/template/hosthub/`  
Live preview: `https://preview.colorlib.com/theme/hosthub/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/hosthub-free-template.jpg  
Shipped: https://uplink.free.componentdock.com

Uplink is a single-page web hosting website template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Hosthub" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@400;600**, **Roboto**

## Design tokens (`apps/uplink/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#f0edfd` | primary 50 |
| `--color-primary-100` | `#e5e1fb` | primary 100 |
| `--color-primary-200` | `#c9c0f6` | primary 200 |
| `--color-primary-300` | `#a99bf0` | primary 300 |
| `--color-primary-400` | `#8a76ea` | primary 400 |
| `--color-primary-500` | `#6247ea` | primary 500 |
| `--color-primary-600` | `#4f35d4` | primary 600 |
| `--color-primary-700` | `#4129ae` | primary 700 |
| `--color-primary-800` | `#352388` | primary 800 |
| `--color-primary-900` | `#2a1d6b` | primary 900 |
| `--color-accent-50` | `#fdf3ea` | Accent orange scale |
| `--color-accent-100` | `#fbe6d4` | accent 100 |
| `--color-accent-200` | `#f7cfad` | accent 200 |
| `--color-accent-300` | `#f2b481` | accent 300 |
| `--color-accent-400` | `#efa35f` | accent 400 |
| `--color-accent-500` | `#ec9d5f` | accent 500 |
| `--color-accent-600` | `#d97f3d` | accent 600 |
| `--color-accent-700` | `#b5632c` | accent 700 |
| `--color-accent-800` | `#914d22` | accent 800 |
| `--color-accent-900` | `#6e3a1a` | accent 900 |
| `--color-band-50` | `#fafcff` | Neutral surfaces + text from the reference |
| `--color-ink-900` | `#222222` | ink 900 |
| `--color-mute-500` | `#777777` | mute 500 |
| `--color-mute-400` | `#aaaaaa` | mute 400 |
| `--color-line-200` | `#eeeeee` | line 200 |
| `--color-line-300` | `#dddddd` | line 300 |
| `--color-night-900` | `#04091e` | night 900 |
| `--color-purple-line` | `#9381eb` | purple line |
| `--color-form-border` | `#333333` | form border |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-open-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | font open sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | — | no dedicated spec block |
| 2 | `Navbar` | — | no dedicated spec block |
| 3 | `Hero` | Hero | see fidelity note below |
| 4 | `Features` | Features | see fidelity note below |
| 5 | `Pricing` | Pricing | see fidelity note below |
| 6 | `Solution` | Custom Solution | see fidelity note below |
| 7 | `Testimonials` | Testimonials | see fidelity note below |
| 8 | `Services` | Services | see fidelity note below |
| 9 | `Blog` | Latest Blog | see fidelity note below |
| 10 | `ClientLogos` | Client Logos | see fidelity note below |
| 11 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `TopBar`
*anchors only* — Purchase Hosting

### `Navbar`
*anchors only* — Main · Uplink home · menu · menuitem · Search · Open menu

### `Hero`
The system SHALL render a full-width purple hero with a split layout: headline + CTA on the left, an illustration area on the right.

### `Features`
The system SHALL render a grid of feature cards with icon, title, and description.

### `Pricing`
The system SHALL render a four-column pricing table with plan name, audience, price, feature list, and CTA.

### `Solution`
The system SHALL render an orange band with a headline and CTA.

### `Testimonials`
The system SHALL render a left column heading plus two testimonial cards.

### `Services`
The system SHALL render a purple section with a map-pattern background and a grid of six service cards.

### `Blog`
The system SHALL render a three-column grid of blog post cards.

### `ClientLogos`
The system SHALL render a row of client logo placeholders.

### `Footer`
The system SHALL render a dark footer with link columns, a newsletter signup, an image grid, social icons, and a copyright bar.

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
- **Provenance ban.** No file under `apps/uplink/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/uplink/public/CNAME` = `uplink.free.componentdock.com`
  and the package `homepage` = `https://uplink.free.componentdock.com`.
