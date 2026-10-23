# Appco — Design Notes

Reference: **Appco** — `https://colorlib.com/wp/template/appco/`  
Live preview: `https://preview.colorlib.com/theme/appco/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/appco-free-template.jpg  
Shipped: https://appco.free.componentdock.com

Appco is a multi-section app landing page template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Appco" design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Nunito**, **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/appco/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#f7edfc` | primary 50 |
| `--color-primary-100` | `#eedaf8` | primary 100 |
| `--color-primary-200` | `#dcb5f1` | primary 200 |
| `--color-primary-300` | `#c68fe8` | primary 300 |
| `--color-primary-400` | `#a95edc` | primary 400 |
| `--color-primary-500` | `#9737d4` | primary 500 |
| `--color-primary-600` | `#8f1bdc` | primary 600 |
| `--color-primary-700` | `#7c16c0` | primary 700 |
| `--color-primary-800` | `#6812a1` | primary 800 |
| `--color-primary-900` | `#530e82` | primary 900 |
| `--color-accent` | `#f9218d` | Pink accent #f9218d (secondary highlights). |
| `--color-ink` | `#222222` | Headings (#222222, #415094) and muted text (#999999, #828bb2). |
| `--color-navy` | `#415094` | navy |
| `--color-muted` | `#999999` | muted |
| `--color-mist` | `#828bb2` | mist |
| `--color-paper` | `#f9f9ff` | Light section backgrounds — features/pricing areas (#f9f9ff, #f0e9ff). |
| `--color-lavender` | `#f0e9ff` | lavender |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Nunito', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Features` | Features section | see fidelity note below |
| 4 | `Services` | Services section | see fidelity note below |
| 5 | `VideoDemo` | Video/demo section | see fidelity note below |
| 6 | `Pricing` | Pricing section | see fidelity note below |
| 7 | `Testimonials` | Testimonials section | see fidelity note below |
| 8 | `Faq` | FAQ section | see fidelity note below |
| 9 | `DownloadCta` | Download CTA section | see fidelity note below |
| 10 | `Integrations` | — | no dedicated spec block |
| 11 | `Metrics` | Metrics section | see fidelity note below |
| 12 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a navigation bar with the site name "Appco", links to the main sections, a "Download" button, and a dark-mode toggle button.

### `Hero`
The system SHALL render a hero section with the headline "Get things done with Appco", supporting copy, and download CTA buttons.

### `Features`
The system SHALL render a features section titled "Some of the best features Of Our App!" with four cards: Easy to Costomize, Extreme Security, Customer Support, and Creative Design.

### `Services`
The system SHALL render a services section titled "How Can We Help Your with Appco!" with three blocks: Easily Manage, Get Payments Easily, and Quick Messaging.

### `VideoDemo`
The system SHALL render a video demo section titled "See Appco in Action" with a screenshot gallery.

### `Pricing`
The system SHALL render a pricing section titled "Choose Your Very Best Pricing Plan." with three plans at $9/month, $29/month, and $99/month.

### `Testimonials`
The system SHALL render a "What Our Customers Have to Say" section with at least two testimonial cards.

### `Faq`
The system SHALL render a "Frequently Asked Questions" section with at least three expandable question items.

### `DownloadCta`
The system SHALL render a download CTA section with the heading "Our App Available For Any Device Download now" and a download button.

### `Integrations`
*anchors only* — Integrations · Integrates With Your Favorite Tools

### `Metrics`
The system SHALL render a metrics section titled "Say Hello To The Collaboration Hub." with at least four stats.

### `Footer`
The system SHALL render a footer with an about blurb, link columns (Quick Links, Support), a Newsletter signup, and social links.

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
- **Provenance ban.** No file under `apps/appco/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/appco/public/CNAME` = `appco.free.componentdock.com`
  and the package `homepage` = `https://appco.free.componentdock.com`.
