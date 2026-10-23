# Techwise — Design Notes

Reference: **Portech** — `https://colorlib.com/wp/template/portech/`  
Live preview: `https://preview.colorlib.com/theme/portech/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/portech-colorlib-template.jpg  
Shipped: https://techwise.free.componentdock.com

A Creative Agency template with hero, services, about, team, counter and portfolio sections. Recreation of the ColorLib "Portech" template as a React 19 + Vite + Tailwind 4 + TypeScript single-page application.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Arizonia**, **Roboto**

## Design tokens (`apps/techwise/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f96d00` | brand |
| `--color-blue` | `#007bff` | blue |
| `--color-dark-bg` | `#1a1a1a` | Dark section backgrounds. |
| `--color-darker-bg` | `#141b25` | darker bg |
| `--color-light-bg` | `#f7f7f7` | Light section background. |
| `--color-mist` | `#999999` | Mist — muted body text (#999999 from the original). |
| `--color-primary-50` | `#fff7ed` | primary 50 |
| `--color-primary-100` | `#ffedd5` | primary 100 |
| `--color-primary-200` | `#fed7aa` | primary 200 |
| `--color-primary-300` | `#fdba74` | primary 300 |
| `--color-primary-400` | `#fb923c` | primary 400 |
| `--color-primary-500` | `#f96d00` | primary 500 |
| `--color-primary-600` | `#ea580c` | primary 600 |
| `--color-primary-700` | `#c2410c` | primary 700 |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | Fonts: Roboto (body) + Arizonia (display/logo). |
| `--font-display` | `'Arizonia', cursive` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | — | no dedicated spec block |
| 2 | `Navbar` | — | no dedicated spec block |
| 3 | `Hero` | — | no dedicated spec block |
| 4 | `Services` | — | no dedicated spec block |
| 5 | `About` | — | no dedicated spec block |
| 6 | `Team` | — | no dedicated spec block |
| 7 | `Counter` | — | no dedicated spec block |
| 8 | `Portfolio` | — | no dedicated spec block |
| 9 | `WhyChooseUs` | — | no dedicated spec block |
| 10 | `FAQ` | — | no dedicated spec block |
| 11 | `Testimonials` | — | no dedicated spec block |
| 12 | `Blog` | — | no dedicated spec block |
| 13 | `Newsletter` | — | no dedicated spec block |
| 14 | `Footer` | — | no dedicated spec block |
| 15 | `FooterBottom` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `TopBar`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Navbar`
*anchors only* — Primary · Mobile · Techwise · Get a Quote

### `Hero`
*anchors only* — Hero slider · Play video · Learn More · View Portfolio

### `Services`
*anchors only* — Our Services · We Provide Effective for Business Solutions

### `About`
*anchors only* — About Us · We Are Techwise Creative Studio Agency · Expert Team · Solution For Business · Get in touch with us

### `Team`
*anchors only* — Our Team · View All Staff

### `Counter`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Portfolio`
*anchors only* — Our Portfolio · Our Exceptional Quality Work

### `WhyChooseUs`
*anchors only* — Why Us · Why Choose Us for Your Next Project?

### `FAQ`
*anchors only* — Frequently Ask Question

### `Testimonials`
*anchors only* — Previous testimonial · Next testimonial · Testimonials · What Are Clients Says

### `Blog`
*anchors only* — Blog · Recent Post · Read more

### `Newsletter`
*anchors only* — Subscribe to our Newsletter · Stay updated with our latest news, offers, and insights delivered straight to your inbox. · Thank you for subscribing! We&apos;ll be in touch. · Email address · Subscribe

### `Footer`
*anchors only* — Techwise · Explore · Company · Have a Questions?

### `FooterBottom`
*anchors only* — love · Component Dock

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
- **Provenance ban.** No file under `apps/techwise/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/techwise/public/CNAME` = `techwise.free.componentdock.com`
  and the package `homepage` = `https://techwise.free.componentdock.com`.
