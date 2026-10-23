# Wordwright — Design Notes

Reference: **Buckkinnear** — `https://colorlib.com/wp/template/buckkinnear/`  
Live preview: `https://preview.colorlib.com/theme/buckkinnear/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/buckkinnear-colorlib-template.jpg  
Shipped: https://wordwright.free.componentdock.com

Wordwright is a single-page copywriter portfolio website template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Buckkinnear" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Dancing Script**, **Montserrat**, **Montserrat:wght@500;600;700;800**, **Rubik**

## Design tokens (`apps/wordwright/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ffea01` | brand |
| `--color-accent` | `#05f` | accent |
| `--color-ink` | `#202020` | ink |
| `--color-sticky` | `#0a0a0a` | sticky |
| `--color-cream` | `#f3f3e8` | cream |
| `--color-peach` | `#fcf2eb` | peach |
| `--color-star` | `#0e1b50` | star |
| `--color-meta` | `#4c526e` | meta |
| `--font-display` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | Headings: Montserrat (bold, tight tracking). |
| `--font-sans` | `'Rubik', ui-sans-serif, system-ui, sans-serif` | Body: Rubik. |
| `--font-script` | `'Dancing Script', cursive` | Script wordmark (cursive signature look in the header + footer). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Dark sticky header with wordmark and navigation | see fidelity note below |
| 2 | `Hero` | Hero with yellow caption block | see fidelity note below |
| 3 | `Services` | Services grid | see fidelity note below |
| 4 | `QuoteBand` | Yellow quote band | see fidelity note below |
| 5 | `Testimonials` | Testimonials carousel | see fidelity note below |
| 6 | `Stories` | Dark stories band | see fidelity note below |
| 7 | `Footer` | Footer with CTA, socials, and links | see fidelity note below |
| 8 | `BackToTop` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Header`
The system SHALL render a near-black header bar with a white script wordmark on the left, white navigation links on the right (including a Blog dropdown), and a sticky fixed state on scroll.

### `Hero`
The system SHALL render a full-width hero with a background photo, a large yellow block behind the left content column, a bordered headline, a circular portrait with an intro line, and a large blue CTA button.

### `Services`
The system SHALL render a section titled "What I can write for you and your business" with an intro paragraph and a 2×2 grid of four service cards, each with a flat icon, an uppercase-free title link, and a blurb.

### `QuoteBand`
The system SHALL render a solid yellow split band with a background photo on one side carrying a blue "Learn More" button, and on the other side a quote heading, a paragraph, and a signature image.

### `Testimonials`
The system SHALL render a cream section titled "What Our Client Sayes" with a carousel of three testimonial slides, each with a quote, a founder image, a five-star rating, and the founder's name.

### `Stories`
The system SHALL render a near-black split band with a photo side carrying a centered yellow "25 Years of Experience" box, and a dark text side with a white heading and two story cards (image, white title link, blurb, meta).

### `Footer`
The system SHALL render a cream footer with a large headline, social icon links, a large blue "Let's Start Discuss" button, a navigation link row, and a copyright bar.

### `BackToTop`
*anchors only* — Back to top

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
- **Provenance ban.** No file under `apps/wordwright/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/wordwright/public/CNAME` = `wordwright.free.componentdock.com`
  and the package `homepage` = `https://wordwright.free.componentdock.com`.
