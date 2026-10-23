# Petcare — Design Notes

Reference: **Petcare** — `https://colorlib.com/wp/template/petcare/`  
Live preview: `https://preview.colorlib.com/theme/petcare/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/petcare-free-template.jpg  
Shipped: https://petcare.free.componentdock.com

Petcare is a multi-section pet-care services website template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Petcare" design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Muli**, **Muli:wght@300;400;600;700;800**

## Design tokens (`apps/petcare/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ff2121` | brand |
| `--color-navy` | `#1f2b7b` | navy |
| `--color-heading` | `#415094` | Alt heading tone `#415094` (section titles, genric-btn.default). |
| `--color-paper` | `#f9f9ff` | Light section backgrounds `#f9f9ff` / `#f0e9ff`. |
| `--color-lavender` | `#f0e9ff` | lavender |
| `--color-muted` | `#999999` | Muted body text `#999999` / `#a3a3a3`. |
| `--font-sans` | `'Muli', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Services` | Services section | see fidelity note below |
| 4 | `Counters` | Counters section | see fidelity note below |
| 5 | `Commitment` | Commitment section | see fidelity note below |
| 6 | `Gallery` | Gallery section | see fidelity note below |
| 7 | `CallCta` | Call CTA section | see fidelity note below |
| 8 | `Team` | Team section | see fidelity note below |
| 9 | `Blog` | Blog section | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a navigation bar with the site name "Petcare", links to the main sections, a phone number, and a dark-mode toggle button.

### `Hero`
The system SHALL render a hero section with the headline "We Care Your Pets." and a call-to-action button.

### `Services`
The system SHALL render a services section titled "Best Pet Care Services" with three cards: Pet Boarding, Pet Treatment, and Vaccinations.

### `Counters`
The system SHALL render a stat counters strip with at least two counters.

### `Commitment`
The system SHALL render a commitment section titled "We are commited for better service" with an image and descriptive copy.

### `Gallery`
The system SHALL render a "Pets Photo Gallery" section with a grid of at least six images.

### `CallCta`
The system SHALL render a call-to-action band with "Any time you can call us!", a phone number, and a "Contact Us" button.

### `Team`
The system SHALL render a team section titled "Our Team Mambers" with at least three member cards, each with a photo, name, and role.

### `Blog`
The system SHALL render a blog section titled "Our Recent Blog" with at least three posts, each with a title and an excerpt.

### `Footer`
The system SHALL render a footer with an about blurb, link columns (Company, Services, Get in Touch), and social links.

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
- **Provenance ban.** No file under `apps/petcare/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/petcare/public/CNAME` = `petcare.free.componentdock.com`
  and the package `homepage` = `https://petcare.free.componentdock.com`.
