# Fitforge — Design Notes

Reference: **Crossfit** — `https://colorlib.com/wp/template/crossfit/`  
Live preview: `https://preview.colorlib.com/theme/crossfit/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/crossfit-free-template.jpg  
Shipped: https://fitforge.free.componentdock.com

A crossfit/gym landing page with hero, features, subscription, portfolio, testimonials, pricing plans, CTA banner, and footer. Recreation of ColorLib **Crossfit**.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inter**, **Oswald**, **Oswald:wght@300;400;500;600;700**

## Design tokens (`apps/fitforge/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#e63946` | FitForge brand palette — bold red primary. |
| `--color-brand-dark` | `#c1121f` | brand dark |
| `--color-accent` | `#f4a261` | Accent orange. |
| `--color-dark` | `#1a1a2e` | Dark backgrounds. |
| `--color-darker` | `#12121f` | darker |
| `--color-ink` | `#212529` | Body text. |
| `--color-mist` | `#6b7280` | Muted text. |
| `--color-paper` | `#ffffff` | Paper — white background. |
| `--color-primary-50` | `#fef2f2` | primary 50 |
| `--color-primary-100` | `#fee2e2` | primary 100 |
| `--color-primary-200` | `#fecaca` | primary 200 |
| `--color-primary-300` | `#fca5a5` | primary 300 |
| `--color-primary-400` | `#f87171` | primary 400 |
| `--color-primary-500` | `#e63946` | primary 500 |
| `--color-primary-600` | `#c1121f` | primary 600 |
| `--color-primary-700` | `#a4161a` | primary 700 |
| `--color-primary-800` | `#80100f` | primary 800 |
| `--color-primary-900` | `#6b0f0f` | primary 900 |
| `--font-heading` | `'Oswald', ui-sans-serif, system-ui, sans-serif` | Font: Oswald for headings, Inter for body. |
| `--font-sans` | `'Inter', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar with logo, navigation, and CTA | see fidelity note below |
| 2 | `Hero` | Hero section with headline and CTA | see fidelity note below |
| 3 | `Features` | Features section with 4 feature cards | see fidelity note below |
| 4 | `Subscription` | Subscription section with benefits list | see fidelity note below |
| 5 | `Portfolio` | Portfolio gallery with hover overlay | see fidelity note below |
| 6 | `Testimonials` | Testimonials section | see fidelity note below |
| 7 | `Pricing` | Pricing plans section | see fidelity note below |
| 8 | `CtaBanner` | CTA banner | see fidelity note below |
| 9 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The page SHALL display a fixed navbar with the "FitForge" logo, navigation links (Home, About, Classes, News, Contact), a search icon, and a "Get in touch" CTA button. The navbar SHALL support a mobile hamburger menu toggle.

### `Hero`
The page SHALL display a full-width hero section with a background image, the headline "Don't stop when you're tired. Stop when you're done", and a "Get Started" CTA button.

### `Features`
The page SHALL display a features section with 4 feature cards, each containing an icon, title, and description. The features are: Award Winning Gym, Expert Coaches, Nutrition Plans, Community Events.

### `Subscription`
The page SHALL display a split subscription section with a heading "Get your subscription", descriptive text, a checklist of 4 benefits, a CTA button, and an image on the right.

### `Portfolio`
The page SHALL display a portfolio section with 4 images that show a "View More" overlay on hover.

### `Testimonials`
The page SHALL display a testimonials section with a quote, author avatar, name, and role.

### `Pricing`
The page SHALL display a pricing section with 3 plan cards: Free Trial ($0), Basic ($30), and Unlimited ($55), each with feature lists and CTA buttons.

### `CtaBanner`
The page SHALL display a call-to-action banner with the text "Get your subscription now!" where "subscription" is a link to the pricing section.

### `Footer`
The page SHALL display a footer with the FitForge logo, description, social media icons (Facebook, Twitter, Instagram, YouTube), and a "More templates at Component Dock" link to https://www.componentdock.com/.

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
- **Provenance ban.** No file under `apps/fitforge/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/fitforge/public/CNAME` = `fitforge.free.componentdock.com`
  and the package `homepage` = `https://fitforge.free.componentdock.com`.
