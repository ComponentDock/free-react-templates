# Veinly — Design Notes

Reference: **Miners** — `https://colorlib.com/wp/template/miners/`  
Live preview: `https://preview.colorlib.com/theme/miners/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/miners-free-template.jpg  
Shipped: https://veinly.free.componentdock.com

Veinly is a single-page mining-company landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Nunito**, **Nunito:wght@300;400;600;700;800;900**

## Design tokens (`apps/veinly/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#dd6b4d` | brand |
| `--color-light` | `#f8f9fa` | Light section background (testimonials, contact). |
| `--color-footer` | `#333333` | Dark footer background. |
| `--color-body` | `#939393` | Body copy and muted text from the reference. |
| `--color-muted` | `#b8b8b8` | muted |
| `--color-primary-50` | `#fdf3f0` | primary 50 |
| `--color-primary-100` | `#fbe3dc` | primary 100 |
| `--color-primary-200` | `#f5c5b8` | primary 200 |
| `--color-primary-300` | `#eea28d` | primary 300 |
| `--color-primary-400` | `#e5846a` | primary 400 |
| `--color-primary-500` | `#dd6b4d` | primary 500 |
| `--color-primary-600` | `#c95a3d` | primary 600 |
| `--color-primary-700` | `#a84a32` | primary 700 |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Sticky navbar with brand, anchor links, Get Quote button and mobile menu | see fidelity note below |
| 2 | `Hero` | Full-height hero slider with two photo slides | see fidelity note below |
| 3 | `Investors` | Investors section with image tiles and content | see fidelity note below |
| 4 | `Stats` | Coral stats band with video block and four counters | see fidelity note below |
| 5 | `Team` | Team section with three member cards | see fidelity note below |
| 6 | `Press` | Press section with three article items | see fidelity note below |
| 7 | `Testimonials` | Testimonials section with four quote cards | see fidelity note below |
| 8 | `Blog` | Blog section with two post cards | see fidelity note below |
| 9 | `Contact` | Contact section with form and call info | see fidelity note below |
| 10 | `Footer` | Dark footer with four widget columns | see fidelity note below |
| 11 | `QuoteModal` | Get A Quote modal | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a sticky top navbar with the brand "Veinly" on the left, seven anchor links (Home, Investors, About Us, Press, Testimonials, Blog, Contact), a solid coral "Get Quote" button on the right, and a hamburger toggler on mobile that opens an off-canvas menu with the same links. When the page is scrolled, the navbar SHALL switch to a solid white background with a subtle shadow and the brand SHALL turn coral `#dd6b4d`.

### `Hero`
The system SHALL render a hero slider with two slides; each slide SHALL show a full-viewport-height photo background darkened by a `rgba(0,0,0,0.7)` overlay, a left-aligned white headline "The Best Veinly Miners In The World" (or equivalent paraphrase keeping the "Best … In The World" pattern), a short paragraph, and a coral-outline "Get in touch" button. Prev/next arrows and pagination dots SHALL navigate the slides.

### `Investors`
The system SHALL render an Investors section with two background-photo tiles on the left and a right content column headed "Our Investors" with a paragraph and a coral-outline "Get in touch" button.

### `Stats`
The system SHALL render a stats band on the coral `#dd6b4d` background with a video block (photo + circular play button) pulled up to overlap the section above, and four counters: 15 Year of Experience, 392 Number of Engineers, 39332 Number of Employees, 53500 Number of Golds.

### `Team`
The system SHALL render a Team section headed "Our Leadership" with three bordered rounded cards, each with a photo, name, role, short blurb and a row of social icons.

### `Press`
The system SHALL render a Press section with an eyebrow "Press Releases" and heading "Press", followed by three article items, each with a title link, a date and an excerpt.

### `Testimonials`
The system SHALL render a light `#f8f9fa` testimonials section with the heading "Testimonial" and four quote cards, each with a white italic serif quote, an avatar photo and a name.

### `Blog`
The system SHALL render a Blog section headed "Our Blog" with two post cards, each with an image, a title link, a meta line and an excerpt.

### `Contact`
The system SHALL render a light `#f8f9fa` contact section headed "Contact Us" with a contact form (First name, Last name, Email address, message and a solid coral "Send Message" submit) and a right info column with a phone line "Need to know more on details? Call Us +1 392 3929 482" and a short paragraph.

### `Footer`
The system SHALL render a dark `#333333` footer with an "About Us" text column, a "Features" link list, a "Subscribe to Newsletter" form and a "Follow Us" social row, plus a bottom copyright bar.

### `QuoteModal`
The system SHALL render a "Get A Quote" modal, opened by the navbar "Get Quote" button, containing a quote-request form with the same fields as the contact form and a "Send Message" submit.

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
- **Provenance ban.** No file under `apps/veinly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/veinly/public/CNAME` = `veinly.free.componentdock.com`
  and the package `homepage` = `https://veinly.free.componentdock.com`.
