# Upleap — Design Notes

Reference: **Upleap** — `https://colorlib.com/wp/template/gaas/`  
Live preview: `https://preview.colorlib.com/theme/gaas/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/gaas-free-template.jpg  
Shipped: https://upleap.free.componentdock.com

Upleap is a single-page software landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "GaaS" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Rajdhani**, **Rajdhani:wght@500;600;700**, **Roboto**

## Design tokens (`apps/upleap/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#f6f3ff` | primary 50 |
| `--color-primary-100` | `#ece4ff` | primary 100 |
| `--color-primary-200` | `#dccfff` | primary 200 |
| `--color-primary-300` | `#c3aaff` | primary 300 |
| `--color-primary-400` | `#a47dff` | primary 400 |
| `--color-primary-500` | `#8f5cff` | primary 500 |
| `--color-primary-600` | `#8252fa` | primary 600 |
| `--color-primary-700` | `#6a35e0` | primary 700 |
| `--color-primary-800` | `#562bb5` | primary 800 |
| `--color-primary-900` | `#45278c` | primary 900 |
| `--color-blossom` | `#eca2f1` | blossom |
| `--color-sun` | `#f8b600` | sun |
| `--color-aqua` | `#4cd3e3` | aqua |
| `--color-ink` | `#222222` | ink |
| `--color-paper` | `#f9f9ff` | paper |
| `--color-body` | `#777777` | body |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Rajdhani', 'Roboto', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Features` | Features section | see fidelity note below |
| 4 | `FeatureTiles` | Features specs | see fidelity note below |
| 5 | `Splits` | Split sections | see fidelity note below |
| 6 | `FeaturesSpecs` | Feature tiles | see fidelity note below |
| 7 | `Pricing` | Pricing plans | see fidelity note below |
| 8 | `Brands` | Client brands | see fidelity note below |
| 9 | `Impress` | Impress band | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Upleap", anchor links to the page's sections, a "free trial" button, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero with a headline, a blurb, and two buttons.

### `Features`
The system SHALL render a features section with a heading, a blurb, and a "Start Free Trial Now!" button.

### `FeatureTiles`
The system SHALL render a features-specs section with the heading "Amazing Features That make it Awesome!" and a blurb.

### `Splits`
The system SHALL render at least two split sections with the heading "We Believe that Inner beauty Lasts Long", each with a blurb and a "Learn More" button.

### `FeaturesSpecs`
The system SHALL render three feature tiles: "Design Trends", "Development", and "Delivery", each with a blurb.

### `Pricing`
The system SHALL render three pricing plans named "Real Basic", "Real Standard", and "Real Ultimate", each with a purchase button.

### `Brands`
The system SHALL render a brands strip with a "What Our Clients Say About Us" heading and brand logos.

### `Impress`
The system SHALL render a full-width call-to-action band with the heading "Got Impressed to our features?" and a call-to-action button.

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
- **Provenance ban.** No file under `apps/upleap/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/upleap/public/CNAME` = `upleap.free.componentdock.com`
  and the package `homepage` = `https://upleap.free.componentdock.com`.
