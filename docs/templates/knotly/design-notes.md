# Knotly — Design Notes

Reference: **Appli** — `https://colorlib.com/wp/template/appli/`  
Live preview: `https://preview.colorlib.com/theme/appli/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/appli-free-template.jpg  
Shipped: https://knotly.free.componentdock.com

Knotly is a single-page app landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Appli" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript (strict).

## Typography

Fonts loaded by `index.html` (Google Fonts): **Muli**, **Muli:wght@300;400;500;600;700;800**, **Raleway**

## Design tokens (`apps/knotly/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#eef0ff` | primary 50 |
| `--color-primary-100` | `#e0e3ff` | primary 100 |
| `--color-primary-200` | `#c7ccff` | primary 200 |
| `--color-primary-300` | `#a3abff` | primary 300 |
| `--color-primary-400` | `#7d88ff` | primary 400 |
| `--color-primary-500` | `#5c68ff` | primary 500 |
| `--color-primary-600` | `#404dff` | primary 600 |
| `--color-primary-700` | `#343fd6` | primary 700 |
| `--color-primary-800` | `#2b34ab` | primary 800 |
| `--color-primary-900` | `#273082` | primary 900 |
| `--color-grape` | `#c054ff` | Hero / band gradient #c054ff → #5274ff (purple → blue). |
| `--color-cobalt` | `#5274ff` | cobalt |
| `--color-blush` | `#f067ff` | CTA button #F067FF (wantToWork band) and icon badge #CC51FF. |
| `--color-orchid` | `#cc51ff` | orchid |
| `--color-navy` | `#1d2547` | Headings (#1D2547) and muted body text (#717b9b / #A5A7C5). |
| `--color-muted` | `#717b9b` | muted |
| `--color-muted-light` | `#a5a7c5` | muted light |
| `--color-paper` | `#f9f9ff` | Light section backgrounds (#f9f9ff, #f0e9ff). |
| `--color-lavender` | `#f0e9ff` | lavender |
| `--font-sans` | `'Muli', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Raleway', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `ProjectScreen` | — | no dedicated spec block |
| 4 | `Brands` | Brand strip | see fidelity note below |
| 5 | `Services` | Services | see fidelity note below |
| 6 | `AboutOne` | About sections | see fidelity note below |
| 7 | `AboutTwo` | — | no dedicated spec block |
| 8 | `Video` | Video band | see fidelity note below |
| 9 | `Testimonials` | Testimonials | see fidelity note below |
| 10 | `Cta` | CTA band | see fidelity note below |
| 11 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a navigation bar over the hero with the site name "Knotly", links to the main sections (Home, Features, About, FAQ, Blog, Contact), a "Log in" button, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width purple-to-blue gradient hero with a headline, supporting copy, and a "Get Started Now" call-to-action button, followed by an overlapping app-dashboard placeholder image.

### `ProjectScreen`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Brands`
The system SHALL render a bordered strip of client wordmarks below the hero.

### `Services`
The system SHALL render a "Finally focus on my marketing strategy and delegate" section with a 3×2 grid of six service cards, each with an icon, title, and description.

### `AboutOne`
The system SHALL render two alternating about sections, each with an icon badge, a heading, copy, a "See how it work" link, and an image.

### `AboutTwo`
*anchors only* — Personalized experiences are proven to increase conversions · See how it work

### `Video`
The system SHALL render a play-video band with a centered round gradient play button.

### `Testimonials`
The system SHALL render an "Amazing customer review" section with at least two customer quotes, each with a founder name and role.

### `Cta`
The system SHALL render a rounded gradient CTA band with the heading "Start finding your dream job", supporting copy, and a "Browse Job" button.

### `Footer`
The system SHALL render a dark footer with a brand blurb, social links (X, Facebook, Pinterest), three link columns ("Our solutions", "Company", "Support"), and a copyright bar.

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
- **Provenance ban.** No file under `apps/knotly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/knotly/public/CNAME` = `knotly.free.componentdock.com`
  and the package `homepage` = `https://knotly.free.componentdock.com`.
