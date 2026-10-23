# Persona — Design Notes

Reference: **Personal Wordpress Themes** — `https://colorlib.com/wp/template/personal-wordpress-themes/`  
Live preview: `https://preview.colorlib.com/theme/personal-wordpress-themes/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/personal-website-templates.jpg  
Shipped: https://persona.free.componentdock.com

Persona is a single-page personal branding website template in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Personal Wordpress Themes" category design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design tokens (`apps/persona/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-accent` | `#1a73e8` | accent |
| `--color-accent-dark` | `#1557b0` | accent dark |
| `--color-navy` | `#1c1e26` | navy |
| `--color-ink` | `#111827` | ink |
| `--color-body` | `#374151` | body |
| `--color-meta` | `#4b5563` | meta |
| `--color-mist` | `#f8fafc` | mist |
| `--color-frost` | `#f0f4ff` | frost |
| `--color-primary` | `#1a73e8` | primary |
| `--color-primary-50` | `#eaf2fd` | primary 50 |
| `--color-primary-100` | `#d3e4fb` | primary 100 |
| `--color-primary-200` | `#a7c9f6` | primary 200 |
| `--color-primary-300` | `#7baef1` | primary 300 |
| `--color-primary-400` | `#4f93ec` | primary 400 |
| `--color-primary-500` | `#2378e8` | primary 500 |
| `--color-primary-600` | `#1a73e8` | primary 600 |
| `--color-primary-700` | `#1557b0` | primary 700 |
| `--color-primary-800` | `#10408a` | primary 800 |
| `--color-primary-900` | `#0c2f66` | primary 900 |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Fixed transparent header | see fidelity note below |
| 2 | `Hero` | Blurred hero with stacked headline | see fidelity note below |
| 3 | `Services` | Services section | see fidelity note below |
| 4 | `Projects` | Projects showcase | see fidelity note below |
| 5 | `Clients` | Clients strip | see fidelity note below |
| 6 | `Experience` | Experience timeline | see fidelity note below |
| 7 | `Contact` | Contact section | see fidelity note below |
| 8 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render a fixed header over the hero: brand name on the left and an uppercase dot-separated menu on the right, which gains a translucent dark background after scrolling.

### `Hero`
The system SHALL render a full-bleed hero with a blurred background photo, a centered three-line bold white headline, and a white pill CTA.

### `Services`
The system SHALL render a services section with three cards describing the personal-branding offer.

### `Projects`
The system SHALL render a numbered showcase grid of six project cards, each with a number, name, description, and an accent CTA button.

### `Clients`
The system SHALL render a client logo strip.

### `Experience`
The system SHALL render a vertical experience timeline.

### `Contact`
The system SHALL render a contact section with a validated form and contact details.

### `Footer`
The system SHALL render a dark footer with a copyright line and a Component Dock credit link.

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
- **Provenance ban.** No file under `apps/persona/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/persona/public/CNAME` = `persona.free.componentdock.com`
  and the package `homepage` = `https://persona.free.componentdock.com`.
