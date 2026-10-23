# Glamour — Design Notes

Reference: **Look** — `https://colorlib.com/wp/template/look/`  
Live preview: `https://preview.colorlib.com/theme/look/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/look-free-template.jpg  
Shipped: https://glamour.free.componentdock.com

Glamour is a single-page model-agency landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Look" design (see TEMPLATES.md, Bootstrap (216) category), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Josefin Sans**, **Josefin Sans:wght@300;400;700;900**, **Rubik**

## Design tokens (`apps/glamour/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f62a66` | brand |
| `--color-ink` | `#000000` | Pure black — fullscreen nav overlay + hero text accents (#000000). |
| `--color-footer-bg` | `#252525` | Footer background (#252525 in the source). |
| `--color-light` | `#f8f9fa` | light |
| `--color-body-grey` | `#666666` | Base body text (#666666 in the source). |
| `--color-footer-muted` | `rgba(255, 255, 255, 0.4)` | Muted footer link text rgba(255,255,255,0.4) over the dark footer. |
| `--color-footer-soft` | `rgba(255, 255, 255, 0.8)` | Footer heading / title links rgba(255,255,255,0.8). |
| `--font-heading` | `'Josefin Sans', ui-sans-serif, system-ui, sans-serif` | font heading |
| `--font-sans` | `'Rubik', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | Full-viewport hero slider | see fidelity note below |
| 3 | `About` | — | no dedicated spec block |
| 4 | `Models` | "Our Top Models" card grid | see fidelity note below |
| 5 | `Testimonials` | "Clients Says" testimonials | see fidelity note below |
| 6 | `Services` | "Our Services" split block | see fidelity note below |
| 7 | `QuoteStrip` | Quote strip overlapping the footer | see fidelity note below |
| 8 | `Blog` | Recent Blog band | see fidelity note below |
| 9 | `Footer` | Quote strip overlapping the footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Open menu · Menu · Close menu

### `Hero`
The system SHALL render a full-viewport (min 750px) hero slider of four model slides, each with a cover portrait background, a pink position label, a huge white uppercase model name, a stats row (Height/Bust/Waist/Hips/Shoe/Eyes/Hair), and "Read more" (solid pink) - "View Gallery" (pink outline) buttons, with pink slider dots to switch slides.

### `About`
*anchors only* — Play the video promo · dialog · Video promo · Close video · Glamour video promo

### `Models`
The system SHALL render a split block with a light-gray heading column ("Our Top Models" + blurb) and nine model cards, each a 430px-tall portrait with the model name at the bottom, that slides up a hot-pink panel with name + stats (Height/Bust/Waist/Hips/Shoe) on hover.

### `Testimonials`
The system SHALL render a photo-background section with a white overlay (92% opacity), the heading "Clients Says", and a carousel of centered testimonials: quote, 100px round avatar with a pink quote badge, pink name, and position.

### `Services`
The system SHALL render a two-column split block (photo left, text right) headed "Our services" with four service rows, each a 70px round `#f62a66` icon with a white icon glyph and a title + blurb: Fashion Shows · Corporate Events · Commercial Photo Shots · Exhibitions/Trade Shows.

### `QuoteStrip`
The system SHALL render a white quote strip that overlaps the footer by 60px (negative margin + shadow), with the uppercase heading "Wanna be a Model?" and a pink "Call us now to know how!" link.

### `Blog`
The system SHALL render a blog band with a heading column ("Recent Blog" + blurb + outlined "View more" link) and three blog cards, each a cover image, meta row (date · Admin · comment count), and a linked title (hover pink).

### `Footer`
The system SHALL render a white quote strip that overlaps the footer by 60px (negative margin + shadow), with the uppercase heading "Wanna be a Model?" and a pink "Call us now to know how!" link.

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
- **Provenance ban.** No file under `apps/glamour/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/glamour/public/CNAME` = `glamour.free.componentdock.com`
  and the package `homepage` = `https://glamour.free.componentdock.com`.
