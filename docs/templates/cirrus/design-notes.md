# Cirrus — Design Notes

Reference: **Cloudtemplate** — `https://colorlib.com/wp/template/cloudtemplate/`  
Live preview: `https://preview.colorlib.com/theme/cloudtemplate/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/saas-free-template.jpg — the ROW's slug `saas`, not the spec's `cloudtemplate`  
Shipped: https://cirrus.free.componentdock.com

Row note: `TEMPLATES.md` links the slug `saas` for this app while the spec records `cloudtemplate`. This brief follows the SPEC — the disagreement is recorded, not resolved (ROW-MULTIPLICITY class, see the SPEC-REFERENCE audit, main `4820f472b`).

Cirrus is a single-page business / tech-company template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Work Sans**, **Work Sans:wght@300;400;500;600;700**

## Design tokens (`apps/cirrus/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#3f52e3` | brand |
| `--color-brand-dark` | `#2d3db5` | brand dark |
| `--color-brand-green` | `#21bf73` | brand green |
| `--color-brand-green-dark` | `#1da966` | brand green dark |
| `--color-brand-pink` | `#ff8ba7` | brand pink |
| `--color-footer` | `#421b9b` | Footer deep purple. |
| `--color-heading` | `#203d67` | Heading navy. |
| `--color-muted` | `#72789a` | Muted body text. |
| `--color-panel` | `#fafafa` | Light section background. |
| `--color-primary-50` | `#eef1fd` | primary 50 |
| `--color-primary-100` | `#d5dafb` | primary 100 |
| `--color-primary-200` | `#aeb5f7` | primary 200 |
| `--color-primary-300` | `#8490f0` | primary 300 |
| `--color-primary-400` | `#5a6be9` | primary 400 |
| `--color-primary-500` | `#3f52e3` | primary 500 |
| `--color-primary-600` | `#2d3db5` | primary 600 |
| `--color-primary-700` | `#1f2d87` | primary 700 |
| `--color-primary-800` | `#121e59` | primary 800 |
| `--color-primary-900` | `#08102d` | primary 900 |
| `--font-sans` | `'Work Sans', ui-sans-serif, system-ui, sans-serif` | Font: Work Sans (everything). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar | see fidelity note below |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `Partners` | Partner logos | see fidelity note below |
| 4 | `Services` | Cloud Services grid | see fidelity note below |
| 5 | `Capabilities` | Software capabilities split | see fidelity note below |
| 6 | `Stats` | Stats counters | see fidelity note below |
| 7 | `IntroStrip` | Intro strip | see fidelity note below |
| 8 | `FaqSection` | — | no dedicated spec block |
| 9 | `Pricing` | Pricing grid | see fidelity note below |
| 10 | `Testimonials` | Testimonials carousel | see fidelity note below |
| 11 | `Blog` | Recent Blog | see fidelity note below |
| 12 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a transparent navbar over the hero with the brand, section links and a CTA button.

### `Hero`
The system SHALL render a full-height blue split hero with a stacked headline, copy, and a call-to-action button.

### `Partners`
The system SHALL render a strip of five partner logos.

### `Services`
The system SHALL render a light section with a 6-card services grid.

### `Capabilities`
The system SHALL render a split section listing software capabilities with pink icons.

### `Stats`
The system SHALL render a solid blue band with four animated counters.

### `IntroStrip`
The system SHALL render a light strip asking for questions with a pink CTA.

### `FaqSection`
*anchors only* — FAQs · Frequently Asked Questions

### `Pricing`
The system SHALL render a pricing section with four white plan cards.

### `Testimonials`
The system SHALL render a testimonials section with a carousel of review cards.

### `Blog`
The system SHALL render a blog grid with three photo cards.

### `Footer`
The system SHALL render a purple four-column footer with contact details and a copyright bar.

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
- **Provenance ban.** No file under `apps/cirrus/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/cirrus/public/CNAME` = `cirrus.free.componentdock.com`
  and the package `homepage` = `https://cirrus.free.componentdock.com`.
