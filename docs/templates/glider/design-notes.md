# Glider — Design Notes

Reference: **Bobsled** — `https://colorlib.com/wp/template/bobsled/`  
Live preview: `https://preview.colorlib.com/theme/bobsled/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/bobsled-creative-website-template.jpg  
Shipped: https://glider.free.componentdock.com

Glider is a single-page CREATIVE AGENCY / PORTFOLIO template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/glider/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--font-poppins` | `'Poppins', sans-serif` | font poppins |
| `--color-gradient-blue` | `#3e69fe` | gradient blue |
| `--color-gradient-cyan` | `#4cd4e3` | gradient cyan |
| `--color-ink` | `#222222` | ink |
| `--color-body` | `#777777` | body |
| `--color-light-bg` | `#f9f9ff` | light bg |
| `--color-white` | `#ffffff` | white |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar displays logo and navigation links | see fidelity note below |
| 2 | `Hero` | Hero banner shows headline and CTA | see fidelity note below |
| 3 | `WorkingProcess` | Working process shows 4 steps with arrows | see fidelity note below |
| 4 | `Features` | Features section shows 3 feature cards | see fidelity note below |
| 5 | `RemarkableWorks` | Remarkable works shows alternating layout | see fidelity note below |
| 6 | `Story` | Story section shows floating card | see fidelity note below |
| 7 | `Subscription` | Subscription area accepts email | see fidelity note below |
| 8 | `Contact` | Contact form collects user messages | see fidelity note below |
| 9 | `Footer` | Footer shows contact info and social links | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The navbar SHALL show a logo, desktop navigation links, and a hamburger menu on mobile.

### `Hero`
The hero section SHALL display an uppercase headline, subtitle, pill CTA button, and decorative illustration.

### `WorkingProcess`
The working process section SHALL display 4 steps connected by arrow connectors.

### `Features`
The features section SHALL display 3 cards with images, titles, descriptions, and buttons.

### `RemarkableWorks`
The remarkable works section SHALL display 3 portfolio rows with alternating image/text layout.

### `Story`
The story section SHALL display a white card offset from the left with content.

### `Subscription`
The subscription section SHALL display a newsletter heading, email input, and button.

### `Contact`
The contact section SHALL display a form with name, email, textarea, and send button.

### `Footer`
The footer SHALL display 3-column contact info, social icons, copyright, and Component Dock link.

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
- **Provenance ban.** No file under `apps/glider/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/glider/public/CNAME` = `glider.free.componentdock.com`
  and the package `homepage` = `https://glider.free.componentdock.com`.
