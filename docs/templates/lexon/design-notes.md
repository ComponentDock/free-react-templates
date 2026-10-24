# Justlaw — Design Notes

Reference: **Justlaw** — `https://colorlib.com/wp/template/justlaw/`  
Live preview: `https://preview.colorlib.com/theme/justlaw/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/justlaw-free-template.jpg  
Shipped: https://justlaw.free.componentdock.com

Justlaw is a lawyer and legal-firm landing page with a consultation hero, practice areas, tabbed case studies, testimonials, team members and stats. It recreates the ColorLib **Justlaw** design (https://colorlib.com/wp/template/justlaw/).

## Typography

Fonts loaded by `index.html` (Google Fonts): **Playfair Display**, **Playfair Display:wght@400;500;600;700;800;900**, **Roboto**

## Design tokens (`apps/justlaw/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#fee2e2` | primary 50 |
| `--color-primary-100` | `#fecaca` | primary 100 |
| `--color-primary-200` | `#fca5a5` | primary 200 |
| `--color-primary-300` | `#f87171` | primary 300 |
| `--color-primary-400` | `#ef4444` | primary 400 |
| `--color-primary-500` | `#da0000` | primary 500 |
| `--color-primary-600` | `#bf0100` | primary 600 |
| `--color-primary-700` | `#991b1b` | primary 700 |
| `--color-primary-800` | `#7f1d1d` | primary 800 |
| `--color-primary-900` | `#450a0a` | primary 900 |
| `--color-navy` | `#0b1c39` | navy |
| `--color-navy-dark` | `#1b1c29` | navy dark |
| `--color-header-bg` | `#1c1b23` | header bg |
| `--color-ink` | `#1a1a1a` | ink |
| `--color-smoke` | `#64676c` | smoke |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Playfair Display', Georgia, 'Times New Roman', serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar with sticky header and mobile menu | see fidelity note below |
| 2 | `Hero` | Hero section with headline and consultation bar | see fidelity note below |
| 3 | `LegalPractice` | Legal Practice Area section | see fidelity note below |
| 4 | `About` | About section with stats | see fidelity note below |
| 5 | `ConsultationForm` | Free Consultation form | see fidelity note below |
| 6 | `CaseStudies` | Recent Case Studies with tabs | see fidelity note below |
| 7 | `Testimonials` | Testimonials section | see fidelity note below |
| 8 | `Team` | Team Members section | see fidelity note below |
| 9 | `CtaBanner` | CTA Banner | see fidelity note below |
| 10 | `Footer` | Footer with Component Dock attribution | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL display a sticky dark navbar with logo, navigation links (Home, Services, About, Case Studies, Blog), and a "Free Consultation" CTA button. A mobile hamburger menu SHALL toggle navigation on small screens.

### `Hero`
The template SHALL display a full-width hero with a background image, headline "We will fight for you like a friend", subtitle "Professional lawyers", and a red bottom bar with phone number and video play button.

### `LegalPractice`
The template SHALL display three practice area cards (Vehicle Accident, Health Law, Insurance Law) in a grid layout, each with an image, icon, title, and description.

### `About`
The template SHALL display an "About Just Law" section with description text, counter stats (250+ Happy Clients, 920+ Winning Cases), and overlapping images.

### `ConsultationForm`
The template SHALL display a contact form with Name, Phone, Practice Area select, Email, Message textarea, and Submit button over a dark background image.

### `CaseStudies`
The template SHALL display tabbed case studies (Vehicle Accident, Health Law, Insurance Law, Bankruptcy) with three case cards per tab showing image, tag, title, description, and read more link.

### `Testimonials`
The template SHALL display client testimonials with quotes, names, roles, and avatar images.

### `Team`
The template SHALL display three team members with circular photos, names, and titles.

### `CtaBanner`
The template SHALL display a red banner with "Get Your Answer In Just 5 Minutes" heading and a "Get Started" button.

### `Footer`
The template SHALL display a 4-column footer (logo + description + social, Company links, Services links, Newsletter form) with a bottom bar linking to Component Dock.

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
- **Provenance ban.** No file under `apps/justlaw/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/justlaw/public/CNAME` = `justlaw.free.componentdock.com`
  and the package `homepage` = `https://justlaw.free.componentdock.com`.
