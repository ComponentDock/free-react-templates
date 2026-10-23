# Laurel — Design Notes

Reference: **Educrown** — `https://colorlib.com/wp/template/educrown/`  
Live preview: `https://preview.colorlib.com/theme/educrown/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/educrown-free-template.jpeg  
Shipped: https://laurel.free.componentdock.com

Laurel is an education landing page with a navbar, hero, feature cards, about trust, fun facts, courses, about video, testimonials, blog and faqs.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@400;500;600;700**

## Design tokens (`apps/laurel/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary` | `#31dc89` | primary |
| `--color-primary-light` | `#d3ffea` | primary light |
| `--color-accent` | `#0be27a` | accent |
| `--color-brand-dark` | `#171932` | brand dark |
| `--color-brand-body` | `#777777` | brand body |
| `--color-brand-heading` | `#222222` | brand heading |
| `--font-heading` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font heading |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, system-ui, sans-serif` | font sans |

> The spec has no section-level requirements; the order below is read from `apps/laurel/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `Features` | — | no dedicated spec block |
| 4 | `TrustBanner` | — | no dedicated spec block |
| 5 | `FunFacts` | — | no dedicated spec block |
| 6 | `Courses` | — | no dedicated spec block |
| 7 | `AboutVideo` | — | no dedicated spec block |
| 8 | `Testimonials` | — | no dedicated spec block |
| 9 | `Blog` | — | no dedicated spec block |
| 10 | `FAQs` | — | no dedicated spec block |
| 11 | `Contact` | — | no dedicated spec block |
| 12 | `Clients` | — | no dedicated spec block |
| 13 | `AdmissionCTA` | — | no dedicated spec block |
| 14 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Toggle menu · Laurel

### `Hero`
*anchors only* — Search · Develop a passion for learning new things. · Search courses

### `Features`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `TrustBanner`
*anchors only* — Laurel is trusted by 50,000+ students.

### `FunFacts`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Courses`
*anchors only* — Our Popular Courses · Explore our most sought-after courses designed to help you succeed. · Enroll

### `AboutVideo`
*anchors only* — Play video · Education is the foundation upon which we build our future.

### `Testimonials`
*anchors only* — What Our Customers Say

### `Blog`
*anchors only* — Latest From Our Blog

### `FAQs`
*anchors only* — Frequently Asked Questions

### `Contact`
*anchors only* — Get In Touch · Have questions? We would love to hear from you. · Map Placeholder · Name · Email · Subject

### `Clients`
*anchors only* — Our Trusted Clients

### `AdmissionCTA`
*anchors only* — Ready to start your journey? · Apply Now

### `Footer`
*anchors only* — Facebook · Twitter · LinkedIn · Instagram · Email for newsletter

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
- **Provenance ban.** No file under `apps/laurel/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/laurel/public/CNAME` = `laurel.free.componentdock.com`
  and the package `homepage` = `https://laurel.free.componentdock.com`.
