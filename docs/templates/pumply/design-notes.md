# Pumply — Design Notes

Reference: **Gymer** — `https://colorlib.com/wp/template/gymer/`  
Live preview: `https://preview.colorlib.com/theme/gymer/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/gymer-free-template.jpg  
Shipped: https://pumply.free.componentdock.com

Pumply is a single-page dark gym / fitness website template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Gymer" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Muli**, **Muli:wght@300;400;700;900**

## Design tokens (`apps/pumply/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary` | `#48d494` | primary |
| `--color-primary-500` | `#48d494` | primary 500 |
| `--color-primary-600` | `#48d494` | primary 600 |
| `--color-primary-700` | `#2fc781` | primary 700 |
| `--color-primary-hover` | `#2fc781` | primary hover |
| `--color-btn-text` | `#212529` | btn text |
| `--color-page` | `#000000` | page |
| `--color-contact` | `#121212` | contact |
| `--color-hero-bg` | `#222222` | hero bg |
| `--font-sans` | `'Muli', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Transparent navbar with wordmark, links, and outlined CTA | see fidelity note below |
| 2 | `Hero` | Full-viewport hero with dark background and headline | see fidelity note below |
| 3 | `About` | Footer with About, Links, Subscribe | see fidelity note below |
| 4 | `Classes` | Classes carousel | see fidelity note below |
| 5 | `Schedule` | Schedule with day tabs and class table | see fidelity note below |
| 6 | `Trainers` | Trainers section | see fidelity note below |
| 7 | `Services` | Our Featured Services carousel | see fidelity note below |
| 8 | `Contact` | Contact Us dark form section | see fidelity note below |
| 9 | `Footer` | Footer with About, Links, Subscribe | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render an absolute-positioned transparent navbar over the hero with a white wordmark, five white anchor links, a green-outlined uppercase CONTACT button, and a mobile hamburger toggle; on scroll it SHALL become a white sticky bar with black links.

### `Hero`
The system SHALL render a 100vh (min-height 900px) hero with a dark `#222` photo/video-style background and a single centered white headline.

### `About`
The system SHALL render a footer with About Pumply, a Links list, a Subscribe form, and a copyright bar that links to Component Dock.

### `Classes`
The system SHALL render a "Classes" heading and a carousel of five class cards, each a photo with a hover overlay showing a title and a category tag.

### `Schedule`
The system SHALL render a "Schedule" heading, six day tabs, and a bordered striped table with five class rows per day, each row ending in a green "Join Now" link.

### `Trainers`
The system SHALL render a "Trainers" heading and three trainer cards, each with a green-shadowed photo, name, role, and copy.

### `Services`
The system SHALL render an "Our Featured Services" heading and a carousel of six green service cards, each with a white icon, a white title, and copy.

### `Contact`
The system SHALL render a `#121212` section with a green "Contact Us" heading and a contact form with first/last name, subject, email, message, and a "Send Message" submit button.

### `Footer`
The system SHALL render a footer with About Pumply, a Links list, a Subscribe form, and a copyright bar that links to Component Dock.

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
- **Provenance ban.** No file under `apps/pumply/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/pumply/public/CNAME` = `pumply.free.componentdock.com`
  and the package `homepage` = `https://pumply.free.componentdock.com`.
