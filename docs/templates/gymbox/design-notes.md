# Gymbox — Design Notes

Reference: **Gym2** — `https://colorlib.com/wp/template/gym2/`  
Live preview: `https://preview.colorlib.com/theme/gym2/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/gym2-free-template.jpg  
Shipped: https://gymbox.free.componentdock.com

GymBox is a free React fitness and gym landing page template. It recreates the ColorLib "Gym2" design with a sticky header, hero banner, category cards, feature highlights, a promotional offer section, pricing plans, a photo gallery, team/trainer profiles, a call-to-action section, and a footer with newsletter signup.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Paytone One**, **Teko**

## Design tokens (`apps/gymbox/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#fff1f1` | GymBox brand palette: red #FF1414 primary, navy #001D38 dark. |
| `--color-primary-100` | `#ffe0e0` | primary 100 |
| `--color-primary-200` | `#ffc7c7` | primary 200 |
| `--color-primary-300` | `#ff9e9e` | primary 300 |
| `--color-primary-400` | `#ff1414` | primary 400 |
| `--color-primary-500` | `#e60000` | primary 500 |
| `--color-primary-600` | `#c40000` | primary 600 |
| `--color-primary-700` | `#a30000` | primary 700 |
| `--color-primary-800` | `#800000` | primary 800 |
| `--color-primary-900` | `#5c0000` | primary 900 |
| `--color-ink` | `#001d38` | Dark / ink color |
| `--color-smoke` | `#7a838b` | Muted copy |
| `--color-mist` | `#f4f4f4` | Light section background |
| `--font-sans` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | Fonts |
| `--font-display` | `'Paytone One', ui-sans-serif, system-ui, sans-serif` | font display |
| `--font-button` | `'Teko', ui-sans-serif, system-ui, sans-serif` | font button |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header navigation | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Categories` | Categories section | see fidelity note below |
| 4 | `Features` | Features section | see fidelity note below |
| 5 | `Offer` | Offer section with 50% off promotion | see fidelity note below |
| 6 | `Pricing` | Pricing section | see fidelity note below |
| 7 | `Gallery` | Gallery section | see fidelity note below |
| 8 | `Team` | Team section | see fidelity note below |
| 9 | `Cta` | CTA section | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The header SHALL be sticky with a logo, horizontal navigation links, and a "Join Us" call-to-action button.

### `Hero`
The hero section SHALL display a headline, subtitle, and primary call-to-action button.

### `Categories`
The categories section SHALL display two category cards: "For Girls" and "For Boys".

### `Features`
The features section SHALL display exactly 4 feature cards.

### `Offer`
The offer section SHALL display a promotional banner advertising a 50% discount.

### `Pricing`
The pricing section SHALL display exactly 3 pricing plan cards.

### `Gallery`
The gallery section SHALL display exactly 6 images in a grid layout.

### `Team`
The team section SHALL display exactly 3 trainer profile cards.

### `Cta`
The call-to-action section SHALL display a prominent CTA block to encourage sign-up.

### `Footer`
The footer SHALL contain a Component Dock link, a newsletter subscription form, and social media links.

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
- **Provenance ban.** No file under `apps/gymbox/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/gymbox/public/CNAME` = `gymbox.free.componentdock.com`
  and the package `homepage` = `https://gymbox.free.componentdock.com`.
