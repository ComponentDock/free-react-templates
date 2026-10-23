# Reglink — Design Notes

Reference: **Colorlib Regform 27** — `https://colorlib.com/wp/template/colorlib-regform-27/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-regform-27/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-27.jpg  
Shipped: https://reglink.free.componentdock.com

Recreation of **Colorlib Regform 27** — a 3-step wizard registration form with personal info, bank account connection, and financial goals selection. Features a dark sidebar with step indicators and a gradient background.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@400;600;700**

## Design tokens (`apps/reglink/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-start` | `#74ebd5` | Brand palette: teal-to-purple gradient from the original design. |
| `--color-brand-end` | `#3f2b96` | brand end |
| `--color-sidebar-bg` | `#3e4061` | sidebar bg |
| `--color-step-active` | `#4fab40` | step active |
| `--color-step-inactive` | `#cccccc` | step inactive |
| `--color-step-hover` | `#36782c` | step hover |
| `--color-heading` | `#333333` | Text colors. |
| `--color-body` | `#666666` | body |
| `--color-muted` | `#999999` | muted |
| `--color-card-bg` | `#ffffff` | Form card. |
| `--color-border` | `#e5e5e5` | border |
| `--color-plan-inactive` | `#999999` | plan inactive |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | Fonts: Open Sans from the original. |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `StepSidebar` | Step sidebar displays three steps | see fidelity note below |
| 2 | `PersonalInfo` | Step 1 personal info fields | see fidelity note below |
| 3 | `BankAccount` | — | no dedicated spec block |
| 4 | `FinancialGoals` | — | no dedicated spec block |
| 5 | `NavigationBar` | Step transition animation | see fidelity note below |
| 6 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `StepSidebar`
Users SHALL see three step indicators in a dark navy sidebar.

### `PersonalInfo`
Users SHALL see personal information fields in step 1.

### `BankAccount`
*anchors only* — Find Your Bank · bank · Connect Bank Account · Find and connect your bank account to start managing your finances.

### `FinancialGoals`
*anchors only* — plan · Set Financial Goals · Choose a plan that aligns with your financial objectives.

### `NavigationBar`
Users SHALL see a fade animation when transitioning between steps.

### `Footer`
Users SHALL see a footer link to Component Dock.

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
- **Provenance ban.** No file under `apps/reglink/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/reglink/public/CNAME` = `reglink.free.componentdock.com`
  and the package `homepage` = `https://reglink.free.componentdock.com`.
