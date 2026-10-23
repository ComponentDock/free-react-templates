# Driven — Design Notes

Reference: **Sasu** — `https://colorlib.com/wp/template/sasu/`  
Live preview: `https://preview.colorlib.com/theme/sasu/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/sasu-free-template.jpg  
Shipped: https://driven.free.componentdock.com

Driven is a single-page app/digital-marketing landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Sasu" website template design (see TEMPLATES.md), built under a DIFFERENT name ("Driven") with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@400;500;600;700**, **Roboto**

## Design tokens (`apps/driven/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#e8f9ff` | primary 50 |
| `--color-primary-100` | `#c9f0ff` | primary 100 |
| `--color-primary-200` | `#9ce5ff` | primary 200 |
| `--color-primary-300` | `#5ed5ff` | primary 300 |
| `--color-primary-400` | `#0ab6ff` | primary 400 |
| `--color-primary-500` | `#00a3f0` | primary 500 |
| `--color-primary-600` | `#0081c4` | primary 600 |
| `--color-primary-700` | `#02689c` | primary 700 |
| `--color-primary-800` | `#0a577d` | primary 800 |
| `--color-primary-900` | `#0e4968` | primary 900 |
| `--color-accent-300` | `#7fe0ff` | Button gradient end (.btn_1 gradient #00b4ff -> #57ddff). |
| `--color-accent-400` | `#57ddff` | accent 400 |
| `--color-accent-500` | `#38c9f2` | accent 500 |
| `--color-mist` | `#f9f9ff` | Light section backgrounds (.feature_part / .cta_part). |
| `--color-lavender` | `#f0e9ff` | lavender |
| `--color-smoke` | `#7f7f7f` | Muted copy (#999999 / #7f7f7f). |
| `--color-ink` | `#1a1a1a` | ink |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Features` | Feature tiles section | see fidelity note below |
| 4 | `AboutSplit` | About split section | see fidelity note below |
| 5 | `WhoCanUse` | — | no dedicated spec block |
| 6 | `MobileSplit` | Mobile split section | see fidelity note below |
| 7 | `Pricing` | Pricing section | see fidelity note below |
| 8 | `CTA` | CTA section | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a top navigation bar with the site name "Driven", anchor links to the page's sections, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero with a headline, a blurb, and two buttons.

### `Features`
The system SHALL render a feature tiles section with three "A Volunteer" tiles, a featured split with two stats, and a "Learn More" link.

### `AboutSplit`
The system SHALL render a split section with the heading "Right people at the Right time." and two buttons.

### `WhoCanUse`
*anchors only* — Who can use · Who can use Driven?

### `MobileSplit`
The system SHALL render a split section with the heading "Easy to Use Mobile Application" and two buttons.

### `Pricing`
The system SHALL render a pricing section with a heading, a blurb, and three plans with prices and purchase buttons.

### `CTA`
The system SHALL render a call-to-action section with a heading, a blurb, and two buttons.

### `Footer`
The system SHALL render a footer with link columns, a newsletter form, social links, and a copyright line.

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
- **Provenance ban.** No file under `apps/driven/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/driven/public/CNAME` = `driven.free.componentdock.com`
  and the package `homepage` = `https://driven.free.componentdock.com`.
