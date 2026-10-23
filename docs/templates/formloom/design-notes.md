# Formloom — Design Notes

Reference: **Colorlib Regform 15** — `https://colorlib.com/wp/template/colorlib-regform-15/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-regform-15/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-15.jpg  
Shipped: https://formloom.free.componentdock.com

Formloom is a student registration form template recreating the Colorlib Reg Form V15 design (colorlib-regform-15) under a new, original name. The template features a split-layout design with a hero image on the left and a comprehensive student registration form on the right, set against a dark charcoal background.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inter**, **Inter:wght@400;500;600;700**

## Design tokens (`apps/formloom/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#2d2d2d` | Formloom brand palette — charcoal background (#2d2d2d). |
| `--color-accent` | `#e67e22` | Orange submit button (#e67e22). |
| `--font-sans` | `'Inter', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar with site name and dark mode toggle | see fidelity note below |
| 2 | `RegistrationForm` | Student Registration Form with all fields | see fidelity note below |
| 3 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL display a navbar with the site name "Formloom", a Home link, and a dark mode toggle button.

### `RegistrationForm`
The template SHALL render a student registration form with the following fields: Name (required text input), Father Name (text input), Address (text input), Gender (radio buttons: Male/Female), State (dropdown), City (dropdown), DOB (date input), Pincode (text input), Course (dropdown), and Email ID (email input).

### `Footer`
The template SHALL display a footer with a link to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/formloom/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/formloom/public/CNAME` = `formloom.free.componentdock.com`
  and the package `homepage` = `https://formloom.free.componentdock.com`.
