# Altruist — Design Notes

Reference: **Cause** — `https://colorlib.com/wp/template/cause/`  
Live preview: `https://preview.colorlib.com/theme/cause/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/cause-free-template-1.jpg  
Shipped: https://altruist.free.componentdock.com

Altruist is a single-page charity / nonprofit donation website template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Playfair Display**, **Playfair Display:wght@600;700**, **Roboto**

## Design tokens (`apps/altruist/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-accent` | `#61c524` | accent |
| `--color-accent-dark` | `#54ab1f` | accent dark |
| `--color-teal` | `#46dbb7` | teal |
| `--color-ink` | `#000000` | ink |
| `--color-body` | `#777777` | body |
| `--color-light` | `#f9f9ff` | light |
| `--color-footer` | `#04091e` | footer |
| `--color-footer-input` | `#14192c` | footer input |
| `--color-stat-orange` | `#f9a22b` | stat orange |
| `--color-stat-purple` | `#a978e0` | stat purple |
| `--font-display` | `'Playfair Display', ui-serif, Georgia, serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header | see fidelity note below |
| 2 | `Hero` | Hero with donation box | see fidelity note below |
| 3 | `CausesSection` | Major Causes cards | see fidelity note below |
| 4 | `CollectionSection` | — | no dedicated spec block |
| 5 | `ConditionSection` | Condition carousel | see fidelity note below |
| 6 | `DonationBanner` | Donation banner with form | see fidelity note below |
| 7 | `DonationFormSection` | — | no dedicated spec block |
| 8 | `BrandStrip` | Brand logo strip | see fidelity note below |
| 9 | `EventsSection` | Upcoming Events | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Header`
The system SHALL render a fixed header with a logo and the full navigation menu.

### `Hero`
The system SHALL render a white hero split between copy and a photo with an overlaid donation box.

### `CausesSection`
The system SHALL render a white section with three cause cards showing a progress bar and stats.

### `CollectionSection`
*anchors only* — Experience · How your Donation Reach Over Years

### `ConditionSection`
The system SHALL render a white section with a photo and "New way to give back" copy with a teal checklist.

### `DonationBanner`
The system SHALL render a photo-backed donation banner with an overlapping white donation form.

### `DonationFormSection`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `BrandStrip`
The system SHALL render a row of partner logos.

### `EventsSection`
The system SHALL render an events section with three date-and-title cards.

### `Footer`
The system SHALL render a dark navy three-column footer.

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
- **Provenance ban.** No file under `apps/altruist/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/altruist/public/CNAME` = `altruist.free.componentdock.com`
  and the package `homepage` = `https://altruist.free.componentdock.com`.
