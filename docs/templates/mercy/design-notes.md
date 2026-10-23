# Mercy — Design Notes

Reference: **Unicare** — `https://colorlib.com/wp/template/unicare/`  
Live preview: `https://preview.colorlib.com/theme/unicare/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/unicare-free-template.jpg  
Shipped: https://mercy.free.componentdock.com

Mercy is a charity & nonprofit landing page with a top bar, navbar, hero, about donation, services, causes, testimonials, blog and volunteers.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@300;400;500;600;700;800**

## Design tokens (`apps/mercy/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#fd645b` | brand |
| `--color-brand-dark` | `#e5554c` | brand dark |
| `--color-blue` | `#4c7bcb` | blue |
| `--color-gold` | `#eec857` | gold |
| `--color-ink` | `#333333` | Ink — dark headings (#333). |
| `--color-ink-dark` | `#222222` | ink dark |
| `--color-footer` | `#3b3b3b` | Footer dark gray (#3b3b3b). |
| `--color-mist` | `#999999` | Mist — muted body text. |
| `--color-mist-dark` | `#666666` | mist dark |
| `--color-primary-50` | `#fff5f4` | primary 50 |
| `--color-primary-100` | `#ffe8e6` | primary 100 |
| `--color-primary-200` | `#ffd0cc` | primary 200 |
| `--color-primary-300` | `#ffb0ab` | primary 300 |
| `--color-primary-400` | `#fd7f79` | primary 400 |
| `--color-primary-500` | `#fd645b` | primary 500 |
| `--color-primary-600` | `#e5554c` | primary 600 |
| `--color-primary-700` | `#c44039` | primary 700 |
| `--color-primary-800` | `#a33530` | primary 800 |
| `--color-primary-900` | `#882e29` | primary 900 |
| `--font-sans` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font sans |

> The spec has no section-level requirements; the order below is read from `apps/mercy/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | — | no dedicated spec block |
| 2 | `Navbar` | — | no dedicated spec block |
| 3 | `Hero` | — | no dedicated spec block |
| 4 | `AboutDonation` | — | no dedicated spec block |
| 5 | `Services` | — | no dedicated spec block |
| 6 | `Causes` | — | no dedicated spec block |
| 7 | `Testimonials` | — | no dedicated spec block |
| 8 | `Blog` | — | no dedicated spec block |
| 9 | `Volunteers` | — | no dedicated spec block |
| 10 | `CTABanner` | — | no dedicated spec block |
| 11 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `TopBar`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Navbar`
*anchors only* — Primary · Mobile · Mercy · Donate

### `Hero`
*anchors only* — Watch our video · Help the poor in need · Lend the helping hand get involved · Become A Volunteer

### `AboutDonation`
*anchors only* — payment · Donate Now · Make a Donation · Thank you for your donation! · We truly appreciate your generosity. · Full Name

### `Services`
*anchors only* — Our Services · What We Do

### `Causes`
*anchors only* — Our Causes · Popular Causes · Progress · Donate Now

### `Testimonials`
*anchors only* — Testimonials · What People Say About Us

### `Blog`
*anchors only* — Latest News · From Our Blog · Read More

### `Volunteers`
*anchors only* — Our Volunteers · Meet Our Team

### `CTABanner`
*anchors only* — Best Way to Make a Difference in the World · Become A Volunteer

### `Footer`
*anchors only* — Mercy · Bringing hope and essential resources to communities in need around the world. · Donate Now · Latest News · Quick Links · Contact Info

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
- **Provenance ban.** No file under `apps/mercy/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/mercy/public/CNAME` = `mercy.free.componentdock.com`
  and the package `homepage` = `https://mercy.free.componentdock.com`.
