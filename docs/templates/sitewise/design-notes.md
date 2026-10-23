# Sitewise — Design Notes

Reference: **Hostza** — `https://colorlib.com/wp/template/hostza/`  
Live preview: `https://preview.colorlib.com/theme/hostza/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/hostza-free-template.jpg  
Shipped: https://sitewise.free.componentdock.com

Sitewise is a web-hosting landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Hostza" design (https://colorlib.com/wp/template/hostza/), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@300;400;500;700**

## Design tokens (`apps/sitewise/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#f7f2fb` | primary 50 |
| `--color-primary-100` | `#efe4f7` | primary 100 |
| `--color-primary-200` | `#dfc9ef` | primary 200 |
| `--color-primary-300` | `#c8a3e2` | primary 300 |
| `--color-primary-400` | `#a96fd0` | primary 400 |
| `--color-primary-500` | `#8a46b8` | primary 500 |
| `--color-primary-600` | `#6d2a99` | primary 600 |
| `--color-primary-700` | `#5a1f82` | primary 700 |
| `--color-primary-800` | `#461966` | primary 800 |
| `--color-primary-900` | `#3a1157` | primary 900 |
| `--color-primary-950` | `#2e004b` | primary 950 |
| `--color-accent-100` | `#d9ffee` | Accent green scale (pill buttons, eyebrow, phone numbers) |
| `--color-accent-200` | `#b3ffdd` | accent 200 |
| `--color-accent-300` | `#66f5b4` | accent 300 |
| `--color-accent-400` | `#33e68e` | accent 400 |
| `--color-accent-500` | `#00d363` | accent 500 |
| `--color-accent-600` | `#00b855` | accent 600 |
| `--color-accent-700` | `#009247` | accent 700 |
| `--color-ember-500` | `#ff5e13` | Secondary orange (hover accents) |
| `--color-ember-600` | `#e04e0a` | ember 600 |
| `--color-ico-blue` | `#0181f5` | Feature/pricing icon colors from the reference |
| `--color-ico-purple` | `#886cfe` | ico purple |
| `--color-ico-pink` | `#ff87a3` | ico pink |
| `--color-ico-yellow` | `#f3c306` | ico yellow |
| `--color-ice-50` | `#f9f9ff` | Light backgrounds + borders + muted text |
| `--color-ice-100` | `#f0e9ff` | ice 100 |
| `--color-line` | `#e0cce6` | line |
| `--color-mute-600` | `#888888` | mute 600 |
| `--color-mute-500` | `#919191` | mute 500 |
| `--color-mute-400` | `#999999` | mute 400 |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | Roboto everywhere — Google Fonts via index.html |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header | see fidelity note below |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `Pricing` | Pricing | see fidelity note below |
| 4 | `CoreFeatures` | Core features | see fidelity note below |
| 5 | `DedicatedSupport` | Dedicated support | see fidelity note below |
| 6 | `DataCentres` | Data centres | see fidelity note below |
| 7 | `Faq` | FAQ | see fidelity note below |
| 8 | `LatestNews` | Latest news | see fidelity note below |
| 9 | `CallToAction` | Call to action | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render a transparent navigation header over the hero with a logo, white links, a Log In link, and a green Live Chat button.

### `Hero`
The system SHALL render a full-viewport hero with a purple gradient background, eyebrow, headline, and a domain search form.

### `Pricing`
The system SHALL render a pricing section with four hosting plan cards.

### `CoreFeatures`
The system SHALL render a tabbed core-features section.

### `DedicatedSupport`
The system SHALL render a support band over a photo background with a headline, a green CTA, and a phone number.

### `DataCentres`
The system SHALL render a data-centres section with a map graphic and four location cards.

### `Faq`
The system SHALL render an FAQ accordion with five questions.

### `LatestNews`
The system SHALL render a news section with three blog cards.

### `CallToAction`
The system SHALL render a "Let's Launch your Website Now" CTA band over a photo background.

### `Footer`
The system SHALL render a dark-purple footer with a blurb, link columns, a newsletter form, and the standard credit.

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
- **Provenance ban.** No file under `apps/sitewise/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/sitewise/public/CNAME` = `sitewise.free.componentdock.com`
  and the package `homepage` = `https://sitewise.free.componentdock.com`.
