# Counsely — Design Notes

Reference: **Legalcare** — `https://colorlib.com/wp/template/legalcare/`  
Live preview: `https://preview.colorlib.com/theme/legalcare/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/legalcare-free-template.jpg  
Shipped: https://counsely.free.componentdock.com

Counsely is a law-firm landing page template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700;800**

## Design tokens (`apps/counsely/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#afa939` | brand |
| `--color-gold-dark` | `#89842c` | Darker gold for the newsletter subscribe button (#89842c in the source). |
| `--color-ink` | `#222831` | Deep navy-slate used for the footer (#222831 in the source). |
| `--color-mist` | `#f8f9fa` | Light section background (#f8f9fa, the source's `bg-light`). |
| `--color-slate-body` | `#6c757d` | Body-copy gray from the source (#6c757d). |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Original font: "Poppins" via Google Fonts (loaded in index.html). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header / Navigation | see fidelity note below |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `Services` | — | no dedicated spec block |
| 4 | `Justice` | Justice / Mission | see fidelity note below |
| 5 | `CaseStudies` | Case studies | see fidelity note below |
| 6 | `Attorneys` | Attorneys | see fidelity note below |
| 7 | `Consultation` | Free Consultation | see fidelity note below |
| 8 | `Testimonials` | Testimonials | see fidelity note below |
| 9 | `Blog` | Recent Blog | see fidelity note below |
| 10 | `Newsletter` | Newsletter | see fidelity note below |
| 11 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Header`
The system SHALL render a transparent-over-hero navbar with a text brand, seven nav links (Home active), a gold-outline CTA pill, and a mobile menu.

### `Hero`
The system SHALL render a full-viewport hero over a photo with a dark overlay, a gold uppercase subheading, a headline with a rotating gold last word, a paragraph, and a gold CTA.

### `Services`
*anchors only* — Services

### `Justice`
The system SHALL render the two-column justice section: a photo with a pulsing play button and a right column with heading, three tabs, tab content, and an animated years counter.

### `CaseStudies`
The system SHALL render the "1000+ Completed Cases Successfully" section with a carousel of four photo case cards and a "See All Successful Cases" button.

### `Attorneys`
The system SHALL render four attorney flip cards that rotate on hover to reveal a gold back with a quote, author, and socials.

### `Consultation`
The system SHALL render the consultation band over a photo with a gold overlay, a white heading, and a four-field form.

### `Testimonials`
The system SHALL render the "Happy Clients" carousel with three translucent testimonial cards.

### `Blog`
The system SHALL render the "Recent Blog" section with three post cards, each with an image, a gold date topper, a title, a snippet, and a Read more button.

### `Newsletter`
The system SHALL render a full-width brand-gold newsletter band with a white heading and an email input plus Subscribe button.

### `Footer`
The system SHALL render the dark footer with four columns and a copyright bar.

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
- **Provenance ban.** No file under `apps/counsely/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/counsely/public/CNAME` = `counsely.free.componentdock.com`
  and the package `homepage` = `https://counsely.free.componentdock.com`.
