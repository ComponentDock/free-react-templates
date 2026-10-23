# Nexus — Design Notes

Reference: **Pageone** — `https://colorlib.com/wp/template/pageone/`  
Live preview: `https://preview.colorlib.com/theme/pageone/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/pageone-free-template-1.jpg  
Shipped: https://nexus.free.componentdock.com

Nexus is a multi-section web agency landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/nexus/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-pink` | `#ec1e64` | brand pink |
| `--color-text` | `#252837` | text |
| `--color-light-bg` | `#f9f9f9` | light bg |
| `--font-poppins` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Poppins (Google Fonts via index.html link). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Services` | Services section | see fidelity note below |
| 4 | `Process` | Process section | see fidelity note below |
| 5 | `Clients` | Clients section | see fidelity note below |
| 6 | `Features` | Features section | see fidelity note below |
| 7 | `Team` | Office and team section | see fidelity note below |
| 8 | `Contact` | Contact section | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a sticky top navigation bar with the logo "Nexus.", anchor links to page sections (Home, Services, Process, Clients, About, Contact), and a mobile hamburger menu.

### `Hero`
The system SHALL render a hero section with a large heading, primary category pills, and secondary pills.

### `Services`
The system SHALL render a services section with a heading, CTA button, and four service cards.

### `Process`
The system SHALL render a process section with a heading, CTA button, and six numbered steps.

### `Clients`
The system SHALL render a clients section with a heading and five client logo cards.

### `Features`
The system SHALL render a features section with a heading and six feature cards.

### `Team`
The system SHALL render a team section with office description and team member cards.

### `Contact`
The system SHALL render a contact section with a form and map embed.

### `Footer`
The system SHALL render a footer with about info, page links, resources, contact details, and Component Dock attribution.

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
- **Provenance ban.** No file under `apps/nexus/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/nexus/public/CNAME` = `nexus.free.componentdock.com`
  and the package `homepage` = `https://nexus.free.componentdock.com`.
