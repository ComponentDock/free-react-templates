# Nimbus — Design Notes

Reference: **Saas** — `https://colorlib.com/wp/template/saas/`  
Live preview: `https://preview.colorlib.com/theme/saas/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/saas-free-template.jpg  
Shipped: https://nimbus.free.componentdock.com

Nimbus is a single-page SaaS landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Saas" design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/nimbus/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#e8f6fd` | primary 50 |
| `--color-primary-100` | `#c5e8fa` | primary 100 |
| `--color-primary-200` | `#9edaf6` | primary 200 |
| `--color-primary-300` | `#6ec8f1` | primary 300 |
| `--color-primary-400` | `#3bacf0` | primary 400 |
| `--color-primary-500` | `#1e9be6` | primary 500 |
| `--color-primary-600` | `#0f82c7` | primary 600 |
| `--color-primary-700` | `#0c689e` | primary 700 |
| `--color-primary-800` | `#0a5580` | primary 800 |
| `--color-primary-900` | `#084568` | primary 900 |
| `--color-accent-300` | `#a8e84d` | Accent green (ColorLib .primary-btn / .ticker-btn #88d200). |
| `--color-accent-400` | `#88d200` | accent 400 |
| `--color-accent-500` | `#6db300` | accent 500 |
| `--color-mist` | `#f9f9ff` | Light section background (#f9f9ff). |
| `--color-navy` | `#04091e` | Dark footer (#04091e). |
| `--color-smoke` | `#777777` | Body text (#777). |
| `--color-ink` | `#222222` | Headings (#222). |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar with navigation and CTA | see fidelity note below |
| 2 | `Hero` | Hero section with overlay | see fidelity note below |
| 3 | `Features` | Features section with cards | see fidelity note below |
| 4 | `About` | About section with split layout | see fidelity note below |
| 5 | `Services` | Services section with numbered items | see fidelity note below |
| 6 | `CTA` | Navbar with navigation and CTA | see fidelity note below |
| 7 | `Video` | Video section with play button | see fidelity note below |
| 8 | `Support` | Support section with image and text | see fidelity note below |
| 9 | `Pricing` | Pricing section with 3 plans | see fidelity note below |
| 10 | `Testimonials` | Testimonials section | see fidelity note below |
| 11 | `Blog` | Blog section | see fidelity note below |
| 12 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
Nimbus SHALL display a fixed top navbar with the brand name "Nimbus" and navigation links (Home, Services, Features, Price, Testimonials) plus a "Get Started" CTA button. The navbar SHALL become opaque on scroll.

### `Hero`
Nimbus SHALL display a full-height hero section with a blue overlay, the headline "Organize all with Nimbus", and a descriptive subtitle.

### `Features`
Nimbus SHALL display a features section with a centered heading, a platform mockup image, and three feature cards (Stunning Visuals, Clean Code, Punctuality) with icons.

### `About`
Nimbus SHALL display an about section with a subtitle, heading, description text, a CTA button, and a placeholder image in a two-column layout.

### `Services`
Nimbus SHALL display a services section with a centered heading and a 2-column grid of 6 numbered service items.

### `CTA`
Nimbus SHALL display a fixed top navbar with the brand name "Nimbus" and navigation links (Home, Services, Features, Price, Testimonials) plus a "Get Started" CTA button. The navbar SHALL become opaque on scroll.

### `Video`
Nimbus SHALL display a video section with tutorial text on the left and a video placeholder with a play button on the right.

### `Support`
Nimbus SHALL display a support section with an image on the left and support text on the right including "24/7 Support system" label.

### `Pricing`
Nimbus SHALL display a pricing section with three plan cards (Basic $39, Standard $69, Ultimate $99), each with a feature list and a "Get Started" button.

### `Testimonials`
Nimbus SHALL display a testimonials section with cards containing an avatar image, quote, name, and star rating.

### `Blog`
Nimbus SHALL display a blog section with two post cards containing an image, tags, title, description, and date.

### `Footer`
Nimbus SHALL display a dark footer with three columns (About Us, Newsletter, Follow Us) and a copyright line linking to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/nimbus/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/nimbus/public/CNAME` = `nimbus.free.componentdock.com`
  and the package `homepage` = `https://nimbus.free.componentdock.com`.
