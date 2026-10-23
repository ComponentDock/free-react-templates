# Joplin — Design Notes

Reference: **Jonson** — `https://colorlib.com/wp/template/jonson/`  
Live preview: `https://preview.colorlib.com/theme/jonson/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/jonson-free-template.jpg  
Shipped: https://joplin.free.componentdock.com

Joplin is a personal portfolio/resume website template in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Jonson" free template (source: https://colorlib.com/wp/template/jonson/), built under a DIFFERENT name (**Joplin**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/joplin/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--font-poppins` | `'Poppins', sans-serif` | font poppins |
| `--color-maroon` | `#670000` | maroon |
| `--color-maroon-dark` | `#880707` | maroon dark |
| `--color-cream` | `#ffefae` | cream |
| `--color-secondary` | `#635c5c` | secondary |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header navigation | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `About` | About section | see fidelity note below |
| 4 | `Experience` | Experience section | see fidelity note below |
| 5 | `Education` | Education section | see fidelity note below |
| 6 | `Expertise` | Expertise section | see fidelity note below |
| 7 | `Gallery` | Gallery section | see fidelity note below |
| 8 | `CtaBanner` | CTA banner | see fidelity note below |
| 9 | `Contact` | Contact form | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The header SHALL display navigation links (Home, About, Portfolio, Blog, Contact) and a "Let's Talk" CTA button, with a mobile hamburger menu on small screens.

### `Hero`
The hero section SHALL display the name "Joplin." in large bold text, the subtitle "Digital Product Designer", and an animated rotating text element on a cream background.

### `About`
The About section SHALL display a heading, bio text, portrait image, and 3 stat cards.

### `Experience`
The Experience section SHALL display at least 2 job entries with title, date range, and company name.

### `Education`
The Education section SHALL display at least 2 education entries with title, date range, and institution.

### `Expertise`
The Expertise section SHALL display 3 service cards on a cream background.

### `Gallery`
The Gallery section SHALL display at least 4 portfolio images with a hover overlay.

### `CtaBanner`
The CTA section SHALL display a heading and a "Download CV" button.

### `Contact`
The Contact section SHALL display a form with name, email, subject inputs, a message textarea, and a "Send Message" button.

### `Footer`
The footer SHALL display social media icons, a copyright notice, and a link to componentdock.com.

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
- **Provenance ban.** No file under `apps/joplin/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/joplin/public/CNAME` = `joplin.free.componentdock.com`
  and the package `homepage` = `https://joplin.free.componentdock.com`.
