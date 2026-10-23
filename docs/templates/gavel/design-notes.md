# Gavel — Design Notes

Reference: **Judge** — `https://colorlib.com/wp/template/judge/`  
Live preview: `https://preview.colorlib.com/theme/judge/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/judge-free-template.jpg  
Shipped: https://gavel.free.componentdock.com

Gavel is a single-page law-firm landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Judge" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/gavel/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#83b582` | brand |
| `--color-ink` | `#222831` | Deep slate used for the dark navbar + footer (#222831 in the source). |
| `--color-mist` | `#f8f9fa` | Light section background (#f8f9fa, the source's `bg-light`). |
| `--color-slate-body` | `#6c757d` | Body-copy gray from the source (#6c757d). |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Original font: "Poppins" via Google Fonts (loaded in index.html). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Services` | Services strip | see fidelity note below |
| 4 | `About` | About / Welcome section | see fidelity note below |
| 5 | `PracticeAreas` | Practice areas section | see fidelity note below |
| 6 | `Attorneys` | Attorneys section | see fidelity note below |
| 7 | `Consultation` | Consultation section | see fidelity note below |
| 8 | `CaseStudies` | Case studies section | see fidelity note below |
| 9 | `Testimonials` | Testimonials section | see fidelity note below |
| 10 | `Blog` | Blog section | see fidelity note below |
| 11 | `Gallery` | Gallery section | see fidelity note below |
| 12 | `Newsletter` | Newsletter section | see fidelity note below |
| 13 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a dark navbar with the site name "Gavel", a tagline, and anchor links to the page sections.

### `Hero`
The system SHALL render a full-height hero with a background image, dark overlay, an eyebrow subheading, a headline, and two text-style call-to-action links.

### `Services`
The system SHALL render a four-column numbered strip (01–04) directly below the hero with white headings on the dark background.

### `About`
The system SHALL render a split section with a video image on the left and a welcome heading, paragraphs, and an experience counter on the right.

### `PracticeAreas`
The system SHALL render a centered-heading section with a 4-column bordered grid of eight practice-area tiles, each with a green circular icon.

### `Attorneys`
The system SHALL render a centered-heading section with four attorney cards, each showing a photo, name, and role on the front and a quote on the back.

### `Consultation`
The system SHALL render a dark consultation section with a background image, a "Free Consultation" heading, and a contact form on the right half.

### `CaseStudies`
The system SHALL render a centered-heading section with a 3-column grid of six case-study image cards.

### `Testimonials`
The system SHALL render a centered-heading section with a testimonial slider of client quotes.

### `Blog`
The system SHALL render a light-background (#f8f9fa) section with a centered heading and three blog cards featuring a green date chip.

### `Gallery`
The system SHALL render a full-width strip of six square image tiles that reveal an Instagram icon on hover.

### `Newsletter`
The system SHALL render a sage-green (#83b582) band with a white headline and an email subscription form.

### `Footer`
The system SHALL render a dark (#222831) footer with four widgets and a copyright bar.

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
- **Provenance ban.** No file under `apps/gavel/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/gavel/public/CNAME` = `gavel.free.componentdock.com`
  and the package `homepage` = `https://gavel.free.componentdock.com`.
