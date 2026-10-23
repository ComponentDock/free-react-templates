# Mintly — Design Notes

Reference: **Wordpress Dentist Themes** — `https://colorlib.com/wp/template/wordpress-dentist-themes/`  
Live preview: `https://preview.colorlib.com/theme/wordpress-dentist-themes/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/dentist-wordpress-themes-1.jpg  
Shipped: https://mintly.free.componentdock.com

Mintly is a single-page dentist-clinic website template in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Wordpress Dentist Themes" entry in TEMPLATES.md (Dentist category), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@400;500;600;700**

## Design tokens (`apps/mintly/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-mint` | `#3be2ae` | mint |
| `--color-mint-dark` | `#2bca99` | mint dark |
| `--color-mint-band` | `#b9f7f8` | mint band |
| `--color-charcoal` | `#373737` | charcoal |
| `--color-ink` | `#151515` | ink |
| `--color-soft` | `#f0f5f9` | soft |
| `--font-sans` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | Montserrat (geometric sans) via Google Fonts. |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar | see fidelity note below |
| 2 | `MobileMenu` | — | no dedicated spec block |
| 3 | `Hero` | Hero | see fidelity note below |
| 4 | `InfoCards` | Info cards | see fidelity note below |
| 5 | `Departments` | Departments | see fidelity note below |
| 6 | `About` | About | see fidelity note below |
| 7 | `Faq` | FAQ | see fidelity note below |
| 8 | `Contact` | Contact | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a white top navigation bar with the brand wordmark, the reference link set, and utility icons.

### `MobileMenu`
*anchors only* — Close menu · Mobile navigation · Mintly

### `Hero`
The system SHALL render the split dentist hero exactly as captured: white background, left text block with an icon trio, right portrait photo.

### `InfoCards`
The system SHALL render the three-card mint band below the hero (Emergency Service, Appointment, Opening Hours).

### `Departments`
The system SHALL render a departments/services grid (reconstructed below the fold per dental-clinic conventions).

### `About`
The system SHALL render an about section (reconstructed).

### `Faq`
The system SHALL render an FAQ accordion (reconstructed).

### `Contact`
The system SHALL render a contact section (reconstructed).

### `Footer`
The system SHALL render the footer (reconstructed, repo standard).

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
- **Provenance ban.** No file under `apps/mintly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/mintly/public/CNAME` = `mintly.free.componentdock.com`
  and the package `homepage` = `https://mintly.free.componentdock.com`.
