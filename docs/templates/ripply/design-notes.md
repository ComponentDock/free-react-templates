# Ripply — Design Notes

Reference: **Drimo** — `https://colorlib.com/wp/template/drimo/`  
Live preview: `https://preview.colorlib.com/theme/drimo/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/drimo-free-multi-purpose-template.jpg  
Shipped: https://ripply.free.componentdock.com

Ripply is a single-page app-landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Poppins**, **Poppins:wght@300;400;500;600**

## Design tokens (`apps/ripply/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-periwinkle` | `#eff1ff` | periwinkle |
| `--color-ink` | `#424242` | Ink — the #424242 text color of the nav links and plan-name pills. |
| `--color-body` | `#6b6d6f` | body |
| `--color-price-header` | `#d8cafc` | price header |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Header and navbar | see fidelity note below |
| 2 | `Hero` | Hero slider | see fidelity note below |
| 3 | `Features` | Features section | see fidelity note below |
| 4 | `ChooseUs` | Choose us band | see fidelity note below |
| 5 | `Satisfaction` | Client satisfaction | see fidelity note below |
| 6 | `Video` | Video section | see fidelity note below |
| 7 | `Install` | Install app band | see fidelity note below |
| 8 | `Screenshots` | Screenshots section | see fidelity note below |
| 9 | `Pricing` | Pricing table | see fidelity note below |
| 10 | `Team` | Team section | see fidelity note below |
| 11 | `Faq` | FAQ accordion | see fidelity note below |
| 12 | `Blog` | Latest blog posts | see fidelity note below |
| 13 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a transparent navbar with a logo wordmark, a right-aligned uppercase nav menu and a search icon.

### `Hero`
The system SHALL render a full-cover hero with a giant white wordmark, a subtitle and pill-shaped SIGN UP buttons.

### `Features`
The system SHALL render a white section with a title and five icon cards.

### `ChooseUs`
The system SHALL render four icon items on the light-periwinkle background.

### `Satisfaction`
The system SHALL render three bullet points and a testimonial quote.

### `Video`
The system SHALL render a video panel on the `#EFF1FF` background.

### `Install`
The system SHALL render an install band on the light gradient with two pill buttons.

### `Screenshots`
The system SHALL render a title and a grid/carousel of app screenshots.

### `Pricing`
The system SHALL render three pricing cards with the middle card featured.

### `Team`
The system SHALL render a title and a grid of team member cards.

### `Faq`
The system SHALL render four expandable question items on the `#EFF1FF` background.

### `Blog`
The system SHALL render a title and two blog post cards.

### `Footer`
The system SHALL render a subscription input-group, three widgets and a contact form on the `#EFF1FF` background.

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
- **Provenance ban.** No file under `apps/ripply/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/ripply/public/CNAME` = `ripply.free.componentdock.com`
  and the package `homepage` = `https://ripply.free.componentdock.com`.
