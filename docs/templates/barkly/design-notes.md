# Barkly — Design Notes

Reference: **Dogger** — `https://colorlib.com/wp/template/dogger/`  
Live preview: `https://preview.colorlib.com/theme/dogger/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/dogger-free-template.jpg  
Shipped: https://barkly.free.componentdock.com

Barkly is a single-page dog-care landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Dogger" website template design (see TEMPLATES.md), shipped under a different name (AGENTS.md rule 5 — the app was first built as `dogger`, i.e. the source name, and is renamed to `barkly`) with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@300;400;600;700;800**, **Vollkorn**

## Design tokens (`apps/barkly/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#a2c0be` | brand |
| `--color-brand-muted` | `#567876` | On-brand text tones: body text and headings on the brand background. |
| `--color-brand-strong` | `#405a58` | brand strong |
| `--color-paper` | `#f8f9fa` | Light section background — bg-light (#f8f9fa, bootstrap !important). |
| `--color-night` | `#333333` | Footer background (#333333). |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-serif` | `'Vollkorn', ui-serif, Georgia, serif` | font serif |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Welcome` | Welcome and feature rows | see fidelity note below |
| 4 | `About` | About section | see fidelity note below |
| 5 | `Trainers` | Trainers section | see fidelity note below |
| 6 | `Pricing` | Pricing section | see fidelity note below |
| 7 | `Faq` | FAQ accordion | see fidelity note below |
| 8 | `Testimonials` | Testimonials section | see fidelity note below |
| 9 | `Gallery` | Gallery section | see fidelity note below |
| 10 | `Blog` | Blog section | see fidelity note below |
| 11 | `Services` | Services section | see fidelity note below |
| 12 | `Contact` | Contact section | see fidelity note below |
| 13 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "barkly", links to the page's sections, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-height hero with a level-1 heading, a subtitle, and a dog illustration image.

### `Welcome`
The system SHALL render a welcome block with a heading and three alternating image/text feature rows, each with a heading, paragraph, and a "Read More" button.

### `About`
The system SHALL render an about section with a heading, lead paragraph, muted paragraph, and a video thumbnail image.

### `Trainers`
The system SHALL render a trainers section on the brand background with a heading and three trainer cards, each with a photo and a name.

### `Pricing`
The system SHALL render a pricing section with a heading and three pricing cards, each with a plan name, price, feature list, and a "Buy Now" button.

### `Faq`
The system SHALL render an FAQ section with a heading and an accordion of questions; opening one question reveals its answer.

### `Testimonials`
The system SHALL render a testimonials section with a heading and four quote cards, each with a quote and an author name.

### `Gallery`
The system SHALL render a gallery section with a heading and six photos.

### `Blog`
The system SHALL render a blog section with a heading and four post cards, each with a date, title, excerpt, and a "Read more" button.

### `Services`
The system SHALL render a services section with a heading and six service cards, each with an icon, a title, and a short description.

### `Contact`
The system SHALL render a contact section with a heading, a working form (first name, last name, email, subject, message, submit), and contact details.

### `Footer`
The system SHALL render a footer with an about blurb, quick links, social icons, a newsletter subscribe input with a Send button, and a copyright line.

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
- **Provenance ban.** No file under `apps/barkly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/barkly/public/CNAME` = `barkly.free.componentdock.com`
  and the package `homepage` = `https://barkly.free.componentdock.com`.
