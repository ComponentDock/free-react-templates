# Appy — Design Notes

Reference: **Appy** — `https://colorlib.com/wp/template/appy/`  
Live preview: `https://preview.colorlib.com/theme/appy/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/appy-free-template.jpg  
Shipped: https://appy.free.componentdock.com

Appy is a single-page app landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Appy" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@400;500;600;700;800**

## Design tokens (`apps/appy/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#eef2ff` | primary 50 |
| `--color-primary-100` | `#dfe7fe` | primary 100 |
| `--color-primary-200` | `#c3d2fd` | primary 200 |
| `--color-primary-300` | `#9ab3fb` | primary 300 |
| `--color-primary-400` | `#7a99fa` | primary 400 |
| `--color-primary-500` | `#6a8af9` | primary 500 |
| `--color-primary-600` | `#5e88fc` | primary 600 |
| `--color-primary-700` | `#4a6de8` | primary 700 |
| `--color-primary-800` | `#3d58c4` | primary 800 |
| `--color-primary-900` | `#354b9e` | primary 900 |
| `--color-azure` | `#768ede` | Supporting blue accent #768ede. |
| `--color-ink` | `#434345` | Dark text #434345, dark footer #2b2b3d. |
| `--color-night` | `#2b2b3d` | night |
| `--color-paper` | `#f5f6ff` | paper |
| `--color-mist` | `#f2f3fc` | mist |
| `--color-muted` | `#8790af` | muted |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | Original font: "Open Sans" (Google Fonts, loaded in index.html). |
| `--font-display` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `About` | About section | see fidelity note below |
| 4 | `SplitOne` | Split sections | see fidelity note below |
| 5 | `SplitTwo` | — | no dedicated spec block |
| 6 | `Features` | Features section | see fidelity note below |
| 7 | `Testimonials` | Testimonials section | see fidelity note below |
| 8 | `Screenshots` | Screenshots section | see fidelity note below |
| 9 | `OurFeatures` | — | no dedicated spec block |
| 10 | `Download` | Download section | see fidelity note below |
| 11 | `Pricing` | Pricing section | see fidelity note below |
| 12 | `Faq` | FAQ section | see fidelity note below |
| 13 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a top navigation bar with the site name "Appy", anchor links to the page's sections, a "Sign Up" button, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero with a headline, a blurb, a phone mockup illustration, and a download button.

### `About`
The system SHALL render an about section with the heading "About Appy", a blurb, and progress indicators.

### `SplitOne`
The system SHALL render two split sections with the heading "Great Application Ever", each with a blurb and a "Learn More" button.

### `SplitTwo`
*anchors only* — Play the Appy video · Great Application Ever · Learn More

### `Features`
The system SHALL render a features section with a heading and six feature tiles, each with an icon, a title, and a blurb.

### `Testimonials`
The system SHALL render a testimonials section with a heading, a quote, and a reviewer.

### `Screenshots`
The system SHALL render a screenshots section with a heading and a row of screenshot placeholder images.

### `OurFeatures`
*anchors only* — Our Features · Our Approach to Design is Pretty Simple and Clear

### `Download`
The system SHALL render a download section with a heading, a blurb, and two store buttons.

### `Pricing`
The system SHALL render a pricing section with three plans, each with a name, a price, a feature list, and a purchase button.

### `Faq`
The system SHALL render an FAQ section with a heading and at least three questions.

### `Footer`
The system SHALL render a footer with link columns, social links, and a copyright line.

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
- **Provenance ban.** No file under `apps/appy/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/appy/public/CNAME` = `appy.free.componentdock.com`
  and the package `homepage` = `https://appy.free.componentdock.com`.
