# Abode — Design Notes

Reference: **Belara** — `https://colorlib.com/wp/template/belara/`  
Live preview: `https://preview.colorlib.com/theme/belara/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/belara-colorlib-template.jpg  
Shipped: https://abode.free.componentdock.com

Abode is a single-page architecture landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Belara" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Cabin**, **Questrial**

## Design tokens (`apps/abode/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#d6a04c` | brand |
| `--color-brand-dark` | `#b98a3c` | Deeper gold for hover states. |
| `--color-royal` | `#415094` | Royal — deep purple-blue secondary (#415094 from the original). |
| `--color-ink` | `#222222` | Ink — headings and dark text. |
| `--color-mist` | `#999999` | Mist — muted body text (#999999 from the original). |
| `--color-paper` | `#f9f9ff` | Paper — light section backgrounds (#f9f9ff from the original). |
| `--color-lavender` | `#f0e9ff` | Lavender — alternate light background (#f0e9ff from the original). |
| `--color-cream` | `#e9e3d9` | Cream — section background (#E9E3D9 from the original). |
| `--color-coal` | `#10142a` | Coal — footer background (deep navy derived from the original). |
| `--color-primary-50` | `#fdf8ef` | primary 50 |
| `--color-primary-100` | `#f9edcf` | primary 100 |
| `--color-primary-200` | `#f2d896` | primary 200 |
| `--color-primary-300` | `#e8bf5f` | primary 300 |
| `--color-primary-400` | `#d6a04c` | primary 400 |
| `--color-primary-500` | `#c08a38` | primary 500 |
| `--color-primary-600` | `#a06f2c` | primary 600 |
| `--color-primary-700` | `#825726` | primary 700 |
| `--color-primary-800` | `#6b4723` | primary 800 |
| `--color-primary-900` | `#5a3d20` | primary 900 |
| `--font-sans` | `'Cabin', ui-sans-serif, system-ui, sans-serif` | Original fonts: "Questrial" (display) + "Cabin" (body). |
| `--font-display` | `'Questrial', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `About` | About section | see fidelity note below |
| 4 | `Services` | Services section | see fidelity note below |
| 5 | `Projects` | Projects section | see fidelity note below |
| 6 | `WhyUs` | Why Us section | see fidelity note below |
| 7 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Abode", anchor links to the page's sections, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero with a headline and a "Play Reel" video link.

### `About`
The system SHALL render an about section with a heading and a "Learn More" button.

### `Services`
The system SHALL render a services section with a heading and at least three service cards.

### `Projects`
The system SHALL render a projects section with a heading and a featured project.

### `WhyUs`
The system SHALL render a "Why Us" section with a heading and reasons.

### `Footer`
The system SHALL render a footer with link columns, a newsletter form, social links, and a copyright line.

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
- **Provenance ban.** No file under `apps/abode/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/abode/public/CNAME` = `abode.free.componentdock.com`
  and the package `homepage` = `https://abode.free.componentdock.com`.
