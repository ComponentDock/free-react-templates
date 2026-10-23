# Cruiser — Design Notes

Reference: **Skater** — `https://colorlib.com/wp/template/skater/`  
Live preview: `https://preview.colorlib.com/theme/skater/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/skater-free-template.jpg  
Shipped: https://cruiser.free.componentdock.com

A dark-themed skateboarding personal/portfolio site with hero carousel, services grid, performance showcase, team section, pricing tiers, FAQ, testimonials, blog, and contact form.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Oswald:wght@400;500;600;700**

## Design tokens (`apps/cruiser/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ff8b00` | brand |
| `--color-brand-light` | `#ffa940` | brand light |
| `--color-brand-dark` | `#cc6f00` | brand dark |
| `--color-surface` | `#333333` | surface |
| `--color-surface-light` | `#3a3a3a` | surface light |
| `--color-surface-dark` | `#2a2a2a` | surface dark |
| `--color-muted` | `#939393` | muted |
| `--color-bg-dark` | `#222222` | bg dark |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar provides navigation | see fidelity note below |
| 2 | `Hero` | Hero carousel displays slides | see fidelity note below |
| 3 | `Services` | Services grid shows 6 service cards | see fidelity note below |
| 4 | `Performance` | — | no dedicated spec block |
| 5 | `Mentor` | — | no dedicated spec block |
| 6 | `About` | — | no dedicated spec block |
| 7 | `Team` | — | no dedicated spec block |
| 8 | `Pricing` | Pricing section shows 3 tiers | see fidelity note below |
| 9 | `Faq` | — | no dedicated spec block |
| 10 | `Testimonials` | Page sections render in correct order | see fidelity note below |
| 11 | `Blog` | — | no dedicated spec block |
| 12 | `Contact` | Contact form is interactive | see fidelity note below |
| 13 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The navbar SHALL display the brand "Cruiser" and links to Home, Services, About, Testimonials, Blog, and Contact.

### `Hero`
The hero section SHALL display at least one slide with a heading, description, and CTA button.

### `Services`
The services section SHALL display 6 cards in a 3-column grid, each with an icon, title, and description.

### `Performance`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Mentor`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `About`
*anchors only* — Play video · About Cruiser

### `Team`
*anchors only* — Meet Our Team

### `Pricing`
The pricing section SHALL display Basic ($47/year), Premium ($200/year), and Professional ($750/year) tiers with feature lists.

### `Faq`
*anchors only* — Frequently Asked

### `Testimonials`
The template SHALL render 13 sections in order: Navbar, Hero, Services, Performance, Mentor, About, Team, Pricing, FAQ, Testimonials, Blog, Contact, Footer.

### `Blog`
*anchors only* — Latest News · Read More

### `Contact`
The contact form SHALL have first name, last name, email, and message fields.

### `Footer`
The footer SHALL include a link to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/cruiser/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/cruiser/public/CNAME` = `cruiser.free.componentdock.com`
  and the package `homepage` = `https://cruiser.free.componentdock.com`.
