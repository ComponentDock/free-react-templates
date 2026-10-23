# Shiply — Design Notes

Reference: **Logistics** — `https://colorlib.com/wp/template/logistics/`  
Live preview: `https://preview.colorlib.com/theme/logistics/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/logistics-free-template.jpg  
Shipped: https://shiply.free.componentdock.com

Shiply is a logistics-and-transport landing page template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@200;300;400;700;900**

## Design tokens (`apps/shiply/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f89d13` | brand |
| `--color-orange-dark` | `#e18a07` | Darker orange variant for the third overlap card (#e18a07). |
| `--color-quote-dark` | `#343a40` | Dark quote-form card (#343a40, Bootstrap bg-dark in the source). |
| `--color-ink` | `#212529` | Ink for mobile menu + headings (#212529 in the source). |
| `--color-body-grey` | `#4d4d4d` | Base body text (#4d4d4d in the source). |
| `--color-muted` | `#b3b3b3` | Muted meta + link gray (#b3b3b3 in the source). |
| `--color-footer-grey` | `#999999` | Footer link gray (#999999 in the source, hover → white). |
| `--color-footer-text` | `#737373` | Footer paragraph / copyright gray (#737373 in the source). |
| `--color-footer-bg` | `#333333` | Footer background (#333333 in the source). |
| `--color-light` | `#f8f9fa` | Light section background (#f8f9fa, Bootstrap bg-light in the source). |
| `--color-border-light` | `#edf0f5` | Section divider lines (#edf0f5 in the source). |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Original font: "Poppins" via Google Fonts (loaded in index.html). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header / Navigation | see fidelity note below |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `OverlapStrip` | Overlap strip | see fidelity note below |
| 4 | `OfferSection` | — | no dedicated spec block |
| 5 | `ServicesCarousel` | Services carousel | see fidelity note below |
| 6 | `MoreServices` | More Services | see fidelity note below |
| 7 | `VideoBand` | Video band | see fidelity note below |
| 8 | `Testimonials` | Testimonials | see fidelity note below |
| 9 | `Blog` | Blog | see fidelity note below |
| 10 | `CtaStrip` | CTA strip | see fidelity note below |
| 11 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Header`
The system SHALL render a transparent absolute navbar over the hero with a white brand, six uppercase nav links (Home active), a Services dropdown, and an off-canvas mobile menu.

### `Hero`
The system SHALL render a full-viewport hero over a freight photo with a dark overlay, an uppercase headline, and a primary CTA.

### `OverlapStrip`
The system SHALL render the 3-column strip overlapping the hero bottom edge with two orange feature cards and a dark quote form.

### `OfferSection`
*anchors only* — What We Offer · Global freight solutions for every load, every route, every deadline. · Learn More

### `ServicesCarousel`
The system SHALL render the image services carousel with five slides and prev/next controls.

### `MoreServices`
The system SHALL render the light-grey "More Services" section with six service rows.

### `VideoBand`
The system SHALL render the parallax video CTA band with a circular play button and a call-to-action heading.

### `Testimonials`
The system SHALL render a testimonial carousel with four slides.

### `Blog`
The system SHALL render the "Our Blog" section with two post cards.

### `CtaStrip`
The system SHALL render the centered "Try Our Services" call-to-action.

### `Footer`
The system SHALL render the dark footer with three link widgets, social icons, a newsletter form, and a copyright bar.

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
- **Provenance ban.** No file under `apps/shiply/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/shiply/public/CNAME` = `shiply.free.componentdock.com`
  and the package `homepage` = `https://shiply.free.componentdock.com`.
