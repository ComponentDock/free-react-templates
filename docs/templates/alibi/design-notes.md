# Alibi — Design Notes

Reference: **Marco 2** — `https://colorlib.com/wp/template/marco-2/`  
Live preview: `https://preview.colorlib.com/theme/marco-2/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/marco2-free-template.jpg  
Shipped: https://alibi.free.componentdock.com

Alibi is a single-page lawyer landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Marco 2" design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Work Sans**, **Work Sans:wght@400;500;600;700**

## Design tokens (`apps/alibi/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#3c312e` | brand |
| `--color-brand-light` | `#a09595` | brand light |
| `--color-brand-dark` | `#2c2320` | brand dark |
| `--color-section-bg` | `#f3f1ef` | section bg |
| `--color-ink` | `#212529` | ink |
| `--color-mist` | `#666666` | mist |
| `--font-sans` | `'Work Sans', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `ConsultationForm` | Consultation form | see fidelity note below |
| 4 | `Services` | Services section | see fidelity note below |
| 5 | `Counter` | Counter section | see fidelity note below |
| 6 | `PracticeAreas` | Practice areas section | see fidelity note below |
| 7 | `Testimonials` | Testimonials section | see fidelity note below |
| 8 | `ContactCta` | Contact CTA section | see fidelity note below |
| 9 | `Blog` | Blog section | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a sticky dark navigation bar with the site name "Alibi", navigation links (Home, About Me, Practice Areas, Legal Team, Blog, Contact), a "Contact Me" CTA button, and a mobile hamburger toggle.

### `Hero`
The system SHALL render a split hero section with text on the left ("Hello, I'm Marco Sebastián", "A Corporate Lawyer", Contact Me button) and a background image with a play button overlay on the right.

### `ConsultationForm`
The system SHALL render an inline consultation form with Name, Email, and Categories fields and a Contact submit button.

### `Services`
The system SHALL render a services section with three service cards: Legal Consultation, Trial Representation, and Case Review.

### `Counter`
The system SHALL render a counter/stats section with four stat blocks: 18 Years Experience, 450 Case Won, 56 Practice Areas, 1,000+ Happy Clients.

### `PracticeAreas`
The system SHALL render a practice areas section with three image cards: Family Law, Drug Offense, and Assault.

### `Testimonials`
The system SHALL render a testimonials section with a carousel of three testimonials, each showing a quote, star rating, avatar, name, and role.

### `ContactCta`
The system SHALL render a contact CTA section with four social media links: Twitter, Facebook, Google, and Instagram.

### `Blog`
The system SHALL render a blog section with three blog entry cards, each showing an image, date, title, excerpt, and a Read More link.

### `Footer`
The system SHALL render a dark four-column footer with About Me, Useful Links, Quick Links, and Have a Questions? sections. The footer SHALL link to Component Dock (https://www.componentdock.com/) and show a copyright line with the current year.

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
- **Provenance ban.** No file under `apps/alibi/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/alibi/public/CNAME` = `alibi.free.componentdock.com`
  and the package `homepage` = `https://alibi.free.componentdock.com`.
