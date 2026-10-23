# Applab — Design Notes

Reference: **Applab** — `https://colorlib.com/wp/template/applab/`  
Live preview: `https://preview.colorlib.com/theme/applab/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/applab-free-template.jpg  
Shipped: https://applab.free.componentdock.com

Applab is a multi-section app/SaaS landing page template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Applab" design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700;800**, **Roboto**

## Design tokens (`apps/applab/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#fff4ec` | primary 50 |
| `--color-primary-100` | `#ffe6d5` | primary 100 |
| `--color-primary-200` | `#ffcba8` | primary 200 |
| `--color-primary-300` | `#ffa873` | primary 300 |
| `--color-primary-400` | `#ff8442` | primary 400 |
| `--color-primary-500` | `#ff6b24` | primary 500 |
| `--color-primary-600` | `#ff5e13` | primary 600 |
| `--color-primary-700` | `#e04e0a` | primary 700 |
| `--color-primary-800` | `#b63e08` | primary 800 |
| `--color-primary-900` | `#933206` | primary 900 |
| `--color-accent` | `#37ef8d` | Green accent #37ef8d (success highlights, star ratings). |
| `--color-sky` | `#0181f5` | Blue accent #0181f5 (secondary highlights). |
| `--color-navy` | `#415094` | Headings (#415094) and muted text (#999999). |
| `--color-muted` | `#999999` | muted |
| `--color-paper` | `#f9f9ff` | Light section backgrounds (#f9f9ff, #f0e9ff). |
| `--color-lavender` | `#f0e9ff` | lavender |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `FeatureBlocks` | Features strip | see fidelity note below |
| 4 | `HowItWorks` | How-it-works section | see fidelity note below |
| 5 | `Features` | Features strip | see fidelity note below |
| 6 | `Testimonials` | Testimonials section | see fidelity note below |
| 7 | `Pricing` | Pricing section | see fidelity note below |
| 8 | `Cta` | CTA section | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a navigation bar with the site name "Applab", links to the main sections, a "Download" button, and a dark-mode toggle button.

### `Hero`
The system SHALL render a hero section with the headline "Promote your app with Applab", supporting copy, and CTA buttons.

### `FeatureBlocks`
The system SHALL render a features strip with "Features that give you real feel" and "Easy setup and management".

### `HowItWorks`
The system SHALL render a three-step section: Sign Up for free, Make your profile, and Enjoy the app.

### `Features`
The system SHALL render a features strip with "Features that give you real feel" and "Easy setup and management".

### `Testimonials`
The system SHALL render a "Review from our regular users" section with at least two testimonial cards.

### `Pricing`
The system SHALL render a pricing section titled "Unlock full Power" with three plans: Basic, Team, and Business.

### `Cta`
The system SHALL render a CTA section with the heading "Get start from now and increase productivity" and download buttons.

### `Footer`
The system SHALL render a footer with an about blurb, link columns (Services, Useful Links, Downloads), and social links.

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
- **Provenance ban.** No file under `apps/applab/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/applab/public/CNAME` = `applab.free.componentdock.com`
  and the package `homepage` = `https://applab.free.componentdock.com`.
