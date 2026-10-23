# Haulage — Design Notes

Reference: **Cargo** — `https://colorlib.com/wp/template/cargo/`  
Live preview: `https://preview.colorlib.com/theme/cargo/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/cargo-free-template.jpg  
Shipped: https://haulage.free.componentdock.com

Haulage is a single-page logistics / cargo-shipping website template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Oswald**, **Oswald:wght@400;500;600;700**, **Rubik**

## Design tokens (`apps/haulage/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ff8b00` | brand |
| `--color-brand-dark` | `#e07d00` | brand dark |
| `--color-ink` | `#212529` | ink |
| `--color-smoke` | `#939393` | smoke |
| `--color-meta` | `#999999` | meta |
| `--color-faint` | `#b8b8b8` | faint |
| `--color-cc` | `#cccccc` | cc |
| `--color-light` | `#f6f5f5` | light |
| `--color-footer` | `#333333` | footer |
| `--font-display` | `'Oswald', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | Top bar | see fidelity note below |
| 2 | `Navbar` | Sticky navbar | see fidelity note below |
| 3 | `Hero` | Hero with tracking form | see fidelity note below |
| 4 | `ServiceCards` | Service image cards | see fidelity note below |
| 5 | `OfferCards` | What We Offer | see fidelity note below |
| 6 | `About` | About Us | see fidelity note below |
| 7 | `Team` | Team carousel | see fidelity note below |
| 8 | `Pricing` | Pricing | see fidelity note below |
| 9 | `Faq` | FAQ grid | see fidelity note below |
| 10 | `WhyUs` | Why Us | see fidelity note below |
| 11 | `Testimonials` | Happy Clients testimonials | see fidelity note below |
| 12 | `Articles` | Articles | see fidelity note below |
| 13 | `Contact` | Contact section | see fidelity note below |
| 14 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `TopBar`
The system SHALL render a thin top bar with contact details and social icons above the navbar.

### `Navbar`
The system SHALL render a sticky navbar with the brand logo and the full menu.

### `Hero`
The system SHALL render a full-viewport hero with a gradient overlay, a headline, and a cargo-tracking form.

### `ServiceCards`
The system SHALL render three photo service cards that overlap the hero bottom.

### `OfferCards`
The system SHALL render a light-grey section with an icon-card grid of six services.

### `About`
The system SHALL render an About section with an intro paragraph, a video-image block, and an animated counters row.

### `Team`
The system SHALL render a team section with six member cards.

### `Pricing`
The system SHALL render a three-tier pricing row with orange prices and "Buy Now" buttons.

### `Faq`
The system SHALL render a two-column FAQ grid of question/answer pairs.

### `WhyUs`
The system SHALL render a bordered section with an orange checklist and an image block.

### `Testimonials`
The system SHALL render a light-grey testimonials carousel.

### `Articles`
The system SHALL render a blog carousel with two article entries.

### `Contact`
The system SHALL render contact info and a contact form.

### `Footer`
The system SHALL render a dark four-column footer.

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
- **Provenance ban.** No file under `apps/haulage/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/haulage/public/CNAME` = `haulage.free.componentdock.com`
  and the package `homepage` = `https://haulage.free.componentdock.com`.
