# Netrise — Design Notes

Reference: **Webhost** — `https://colorlib.com/wp/template/webhost/`  
Live preview: `https://preview.colorlib.com/theme/webhost/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/webhost-free-template-1.jpg  
Shipped: https://netrise.free.componentdock.com

Netrise is a single-page web-hosting company website template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Work Sans**, **Work Sans:wght@300;400;500;600;700**

## Design tokens (`apps/netrise/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-teal` | `#12e6ca` | teal |
| `--color-green` | `#8be55d` | green |
| `--color-sky` | `#56c8fb` | sky |
| `--color-indigo` | `#627bed` | indigo |
| `--color-pink` | `#fb83b5` | pink |
| `--color-purple` | `#9a51ff` | purple |
| `--color-navy` | `#233142` | navy |
| `--color-light` | `#f8f9fa` | light |
| `--color-ink` | `#233142` | ink |
| `--font-sans` | `'Work Sans', ui-sans-serif, system-ui, sans-serif` | Work Sans (Google Font) — the original template's typeface. |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar | see fidelity note below |
| 2 | `Hero` | Hero slider | see fidelity note below |
| 3 | `DomainSearch` | Domain search | see fidelity note below |
| 4 | `Guarantee` | Guarantee services | see fidelity note below |
| 5 | `Counters` | Counter band | see fidelity note below |
| 6 | `Pricing` | Pricing plans | see fidelity note below |
| 7 | `WhyChooseUs` | Why Choose Us | see fidelity note below |
| 8 | `Testimonials` | Testimonials | see fidelity note below |
| 9 | `VpsTabs` | VPS hosting tabs | see fidelity note below |
| 10 | `Clients` | Client logos | see fidelity note below |
| 11 | `Blog` | Recent blog | see fidelity note below |
| 12 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a dark navbar with the brand on the left, site links on the right, and a pill "Get started" CTA.

### `Hero`
The system SHALL render a pink→purple gradient hero carousel with two slides, each with a headline, subtext, two CTA buttons, and a device mockup.

### `DomainSearch`
The system SHALL render a dark navy domain search band with an input, a TLD select, a search button, and a TLD price row.

### `Guarantee`
The system SHALL render a light-grey grid of six guarantee cards, each with a gradient icon square, a title, and a blurb.

### `Counters`
The system SHALL render a photo-background band with four animated statistics.

### `Pricing`
The system SHALL render a light-grey row of four pricing plan cards with feature lists and a "Choose Plan" button.

### `WhyChooseUs`
The system SHALL render a white section with six icon services.

### `Testimonials`
The system SHALL render a sky→indigo gradient testimonial carousel with five quotes.

### `VpsTabs`
The system SHALL render a "How it works" section with three tabs, each showing a heading, copy, and a dashboard screenshot.

### `Clients`
The system SHALL render a dark navy client logo strip.

### `Blog`
The system SHALL render a light-grey blog row with three entries carrying an image, meta line, and title.

### `Footer`
The system SHALL render a dark navy footer with four columns and a copyright bar.

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
- **Provenance ban.** No file under `apps/netrise/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/netrise/public/CNAME` = `netrise.free.componentdock.com`
  and the package `homepage` = `https://netrise.free.componentdock.com`.
