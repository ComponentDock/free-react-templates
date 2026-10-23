# Talkwell — Design Notes

Reference: **Contact Form 20** — `https://colorlib.com/wp/template/contact-form-20/`  
Live preview: `https://preview.colorlib.com/theme/contact-form-20/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/contact-form-20.jpg  
Shipped: https://talkwell.free.componentdock.com

Recreation of ColorLib "Contact Form 20" (https://colorlib.com/wp/template/contact-form-20/) as a React + Tailwind CSS template. A centered white card contact form on light gray background with "Let's Talk" heading, two-column Name/Email row, Subject, Message textarea, and blue pill submit button.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/talkwell/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#5c6bc0` | brand |
| `--color-primary-50` | `#e8eaf6` | primary 50 |
| `--color-primary-100` | `#c5cae9` | primary 100 |
| `--color-primary-200` | `#9fa8da` | primary 200 |
| `--color-primary-300` | `#7986cb` | primary 300 |
| `--color-primary-400` | `#5c6bc0` | primary 400 |
| `--color-primary-500` | `#5c6bc0` | primary 500 |
| `--color-primary-600` | `#515aa6` | primary 600 |
| `--color-primary-700` | `#464d8c` | primary 700 |
| `--color-primary-800` | `#3b4072` | primary 800 |
| `--color-primary-900` | `#303358` | primary 900 |
| `--color-primary-950` | `#1a1b30` | primary 950 |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Poppins font via Google Fonts (loaded in index.html). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `ContactForm` | — | no dedicated spec block |
| 2 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `ContactForm`
*anchors only* — Your message was sent, thank you! · Let&apos;s Talk · Name · Email · Subject · Message

### `Footer`
The footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/talkwell/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/talkwell/public/CNAME` = `talkwell.free.componentdock.com`
  and the package `homepage` = `https://talkwell.free.componentdock.com`.
