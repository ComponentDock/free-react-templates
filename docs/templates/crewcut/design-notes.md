# Crewcut — Design Notes

Reference: **Barber** — `https://colorlib.com/wp/template/barber/`  
Live preview: `https://preview.colorlib.com/theme/barber/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/barber-free-barber-website-template.jpg  
Shipped: https://crewcut.free.componentdock.com

Crewcut is a single-page barber-shop landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Barber" design (see TEMPLATES.md, Barber category), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@400;500;600;700;800;900**

## Design tokens (`apps/crewcut/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f61daf` | brand |
| `--color-brand-dark` | `#691cff` | brand dark |
| `--color-ink` | `#222222` | Ink — headings + footer background (#222222 from the original). |
| `--color-mist` | `#777777` | Mist — body text (#777777 from the original). |
| `--color-paper` | `#f9f9ff` | Paper — light section backgrounds (#f9f9ff from the original). |
| `--color-primary-50` | `#fdf0fa` | primary 50 |
| `--color-primary-100` | `#fbdff3` | primary 100 |
| `--color-primary-200` | `#f8bfe8` | primary 200 |
| `--color-primary-300` | `#f48fd6` | primary 300 |
| `--color-primary-400` | `#ee52bd` | primary 400 |
| `--color-primary-500` | `#e62ba8` | primary 500 |
| `--color-primary-600` | `#f61daf` | primary 600 |
| `--color-primary-700` | `#d31294` | primary 700 |
| `--color-primary-800` | `#b3127c` | primary 800 |
| `--color-primary-900` | `#94156a` | primary 900 |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Original font: "Poppins" (Google Fonts via index.html). |
| `--font-display` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Transparent navbar over gradient banner | see fidelity note below |
| 2 | `Banner` | Transparent navbar over gradient banner | see fidelity note below |
| 3 | `Services` | Services grid | see fidelity note below |
| 4 | `Gallery` | Photo gallery | see fidelity note below |
| 5 | `Features` | Features grid | see fidelity note below |
| 6 | `About` | About strip | see fidelity note below |
| 7 | `Team` | Team row | see fidelity note below |
| 8 | `Pricing` | Pricing plans | see fidelity note below |
| 9 | `Contact` | Contact section | see fidelity note below |
| 10 | `Footer` | Dark footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render an absolute transparent navbar at the top of the page (z-index above the banner) with the brand "Crewcut" on the left, right-aligned nav links (Home · Service · Team · Price · Contact), and a dark-mode toggle.

### `Banner`
The system SHALL render an absolute transparent navbar at the top of the page (z-index above the banner) with the brand "Crewcut" on the left, right-aligned nav links (Home · Service · Team · Price · Contact), and a dark-mode toggle.

### `Services`
The system SHALL render a "What We Can Do for You" section (centered heading + blurb) with four service cards, each with a colored icon, an h4 title, and a short blurb.

### `Gallery`
The system SHALL render a full-width photo strip of six images, each showing a "Upper Cutting" caption on hover over a dark overlay.

### `Features`
The system SHALL render a "Some Features that Made us Unique" section on a `#f9f9ff` background with six feature cards (icon + h4 title + blurb).

### `About`
The system SHALL render an about section with the heading "We Believe that Interior beautifies the Total Architecture", two paragraphs, a "See Details" gradient pill button, and a photo with a play button.

### `Team`
The system SHALL render an "Experienced Mentor Team" section with four member cards (photo, name, role).

### `Pricing`
The system SHALL render a "Choose the Perfect Plan for you" section with three pricing plans (name, price, five features, "Purchase Plan" button).

### `Contact`
The system SHALL render a "If you need, Just drop us a line" contact section with four info columns (Visit Our Office · Let's call us · Let's Email Us · Customer Support) and a client-side validated form (name, email, subject, message) with a "Send Message" button.

### `Footer`
The system SHALL render a `#222222` footer with three widgets — About Us (blurb), Newsletter (email input + submit), Follow Us (social icon links) — plus a centered bottom bar with the © line and a reworded credit (no Colorlib link-back requirement).

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
- **Provenance ban.** No file under `apps/crewcut/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/crewcut/public/CNAME` = `crewcut.free.componentdock.com`
  and the package `homepage` = `https://crewcut.free.componentdock.com`.
