# Vantix — Design Notes

Reference: **Itkol** — `https://colorlib.com/wp/template/itkol/`  
Live preview: `https://preview.colorlib.com/theme/itkol/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/itkol-free-template.jpg  
Shipped: https://vantix.free.componentdock.com

Vantix is a single-page IT-services landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Itkol" (marketing title "IT-Solution") website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Josefin Sans**, **Josefin Sans:wght@500;600;700**, **Mulish**

## Design tokens (`apps/vantix/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#fff0f7` | primary 50 |
| `--color-primary-100` | `#ffe0ef` | primary 100 |
| `--color-primary-200` | `#ffc2de` | primary 200 |
| `--color-primary-300` | `#ff94c5` | primary 300 |
| `--color-primary-400` | `#ff55a7` | primary 400 |
| `--color-primary-500` | `#ff4495` | primary 500 |
| `--color-primary-600` | `#f01f7c` | primary 600 |
| `--color-primary-700` | `#d11264` | primary 700 |
| `--color-primary-800` | `#a1124f` | primary 800 |
| `--color-primary-900` | `#861344` | primary 900 |
| `--color-navy` | `#232f55` | navy |
| `--color-violet` | `#140c40` | violet |
| `--color-aqua` | `#4cd3e3` | aqua |
| `--color-paper` | `#f9f9ff` | paper |
| `--color-mist` | `#f0e9ff` | mist |
| `--color-body` | `#999999` | body |
| `--font-sans` | `'Mulish', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Josefin Sans', 'Mulish', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Services` | Services section | see fidelity note below |
| 4 | `Features` | Features section | see fidelity note below |
| 5 | `Industries` | Industries section | see fidelity note below |
| 6 | `Cta` | CTA band | see fidelity note below |
| 7 | `About` | About section | see fidelity note below |
| 8 | `CaseStudies` | Case studies | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Vantix", anchor links to the page's sections, a "Get Free Quote" button, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero with a headline and a blurb.

### `Services`
The system SHALL render a services section with a heading and three service cards: "Managed IT services", "Backup and recovery", and "Cyber security".

### `Features`
The system SHALL render a features section with a heading and two feature tiles: "Engage Teammates" and "Level Up Productivity", each with a "Learn More" link.

### `Industries`
The system SHALL render an industries section with a heading and four industry cards.

### `Cta`
The system SHALL render a full-width call-to-action band with the heading "Innovative IT Solution for your Business & Startup" and a "Get Started Now" button.

### `About`
The system SHALL render an about section with a heading, a "Request a Quote" button, and stats.

### `CaseStudies`
The system SHALL render a case-studies section with the heading "Some of Our Great Stuffs" and three case-study cards.

### `Footer`
The system SHALL render a footer with link columns, social links, and a copyright line.

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
- **Provenance ban.** No file under `apps/vantix/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/vantix/public/CNAME` = `vantix.free.componentdock.com`
  and the package `homepage` = `https://vantix.free.componentdock.com`.
