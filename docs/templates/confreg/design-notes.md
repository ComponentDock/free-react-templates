# Confreg — Design Notes

Reference: **Colorlib Regform 16** — `https://colorlib.com/wp/template/colorlib-regform-16/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-regform-16/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-16.jpg  
Shipped: https://confreg.free.componentdock.com

Conference registration form template with a split-panel layout: a hero image with green overlay on the left, and a two-column registration form on the right featuring personal info, meal preference, payment mode, donation slider, and submit/reset buttons.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/confreg/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#3a7d44` | Confreg brand palette — dark green (#3a7d44). |
| `--color-accent` | `#2e7d32` | Darker green for hover states (#2e7d32). |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `HeroPanel` | Hero panel content | see fidelity note below |
| 2 | `RegistrationForm` | Registration form fields | see fidelity note below |
| 3 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `HeroPanel`
The hero panel SHALL display a background image with a dark green semi-transparent overlay, the heading "Register Now" in white uppercase text, and the subtitle "while seats are available !" below it.

### `RegistrationForm`
The form SHALL contain the following fields arranged in two columns: First Name (required), Last Name (required), Company (required), Email (required), Phone Number (required) in the left column; Meal Preference (dropdown), Payment Mode (radio buttons), DD/Cheque No., Drawn On (Bank Name), Payable At in the right column.

### `Footer`
The template SHALL display a footer with a "Made with Component Dock" link pointing to https://www.componentdock.com/.

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
- **Provenance ban.** No file under `apps/confreg/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/confreg/public/CNAME` = `confreg.free.componentdock.com`
  and the package `homepage` = `https://confreg.free.componentdock.com`.
