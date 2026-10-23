# Trestle — Design Notes

Reference: **Arcade** — `https://colorlib.com/wp/template/arcade/`  
Live preview: `https://preview.colorlib.com/theme/arcade/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/arcade-free-template.jpg  
Shipped: https://trestle.free.componentdock.com

Trestle is a single-page architecture landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Arcade" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@400;500;700;900**

## Design tokens (`apps/trestle/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#baff00` | brand |
| `--color-brand-dark` | `#a8e600` | Slightly deeper lime for hover states. |
| `--color-ink` | `#222222` | Near-black ink: headings, dark sections. |
| `--color-coal` | `#121212` | Deep charcoal for the footer / dark bands. |
| `--color-paper` | `#ededed` | Light section band (hero background). |
| `--color-mist` | `#727272` | Muted secondary text. |
| `--color-line` | `#e6e6e6` | Borders / dividers. |
| `--color-primary-50` | `#fcffe9` | primary 50 |
| `--color-primary-100` | `#f6ffc7` | primary 100 |
| `--color-primary-200` | `#eeff94` | primary 200 |
| `--color-primary-300` | `#e4ff55` | primary 300 |
| `--color-primary-400` | `#d9ff26` | primary 400 |
| `--color-primary-500` | `#baff00` | primary 500 |
| `--color-primary-600` | `#93cc00` | primary 600 |
| `--color-primary-700` | `#709b02` | primary 700 |
| `--color-primary-800` | `#587a08` | primary 800 |
| `--color-primary-900` | `#4b670c` | primary 900 |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | Original font: "Roboto" (Google Fonts). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Studio` | Studio section | see fidelity note below |
| 4 | `Services` | Services section | see fidelity note below |
| 5 | `Cta` | CTA banner | see fidelity note below |
| 6 | `Milestones` | Milestones | see fidelity note below |
| 7 | `Projects` | Projects section | see fidelity note below |
| 8 | `Clients` | Clients strip | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top bar with a phone number and a navigation bar with the site name "Trestle", anchor links to the page's sections, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero with a headline and a "See Project" button.

### `Studio`
The system SHALL render a studio section with a heading "We are a creative Architecture Studio", a blurb, and a "See Project" button.

### `Services`
The system SHALL render a services section with a heading and six service cards, each with a "Read More" link.

### `Cta`
The system SHALL render a dark call-to-action banner with a heading and a blurb.

### `Milestones`
The system SHALL render four milestone statistics with numbers and labels.

### `Projects`
The system SHALL render a projects section with a heading, a category filter, and project cards each with a "See Project" link.

### `Clients`
The system SHALL render a client logo strip with five brand placeholders.

### `Footer`
The system SHALL render a footer with social links, link columns, a newsletter form, and a copyright line.

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
- **Provenance ban.** No file under `apps/trestle/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/trestle/public/CNAME` = `trestle.free.componentdock.com`
  and the package `homepage` = `https://trestle.free.componentdock.com`.
