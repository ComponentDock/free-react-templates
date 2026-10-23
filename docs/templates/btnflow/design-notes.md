# Btnflow — Design Notes

Reference: **Bootstrap Buttons 17** — `https://colorlib.com/wp/template/bootstrap-buttons-17/`  
Live preview: `https://preview.colorlib.com/theme/bootstrap-buttons-17/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-buttons-17.jpg  
Shipped: https://btnflow.free.componentdock.com

BtnFlow is a comprehensive button showcase template featuring an extended collection of Bootstrap-style button variants — solid, outline, rounded, social, dropdown, grouped, checkbox, radio, and toggle-slide buttons. All buttons use a 3D box-shadow depth effect and are displayed in a single-page layout with section headings.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700;800**

## Design tokens (`apps/btnflow/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-blue` | `#4f81c7` | blue |
| `--color-blue-shadow` | `#3d73c0` | blue shadow |
| `--color-indigo` | `#667eea` | indigo |
| `--color-indigo-shadow` | `#5a6fd6` | indigo shadow |
| `--color-purple` | `#9b59b6` | purple |
| `--color-purple-shadow` | `#8e44ad` | purple shadow |
| `--color-pink` | `#ff78ae` | pink |
| `--color-pink-shadow` | `#ff5f9f` | pink shadow |
| `--color-red` | `#e74c3c` | red |
| `--color-red-shadow` | `#c0392b` | red shadow |
| `--color-orange` | `#f39c12` | orange |
| `--color-orange-shadow` | `#d68910` | orange shadow |
| `--color-yellow` | `#f1c40f` | yellow |
| `--color-yellow-shadow` | `#d4ac0d` | yellow shadow |
| `--color-green` | `#2ecc71` | green |
| `--color-green-shadow` | `#27ae60` | green shadow |
| `--color-teal` | `#1abc9c` | teal |
| `--color-teal-shadow` | `#16a085` | teal shadow |
| `--color-cyan` | `#3498db` | cyan |
| `--color-cyan-shadow` | `#2980b9` | cyan shadow |
| `--color-facebook` | `#3b5998` | facebook |
| `--color-twitter` | `#1da1f2` | twitter |
| `--color-google` | `#db4437` | google |
| `--color-github` | `#333333` | github |
| `--color-linkedin` | `#0077b5` | linkedin |
| `--color-instagram` | `#e4405f` | instagram |
| `--color-youtube` | `#ff0000` | youtube |
| `--color-dribbble` | `#ea4c89` | dribbble |
| `--color-dark` | `#343a40` | dark |
| `--color-body` | `#212529` | body |
| `--font-poppins` | `'Poppins', sans-serif` | font poppins |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `SolidButtons` | Solid Buttons with Icons (10 Colors) | see fidelity note below |
| 2 | `OutlineButtons` | Outline Buttons (10 Colors) | see fidelity note below |
| 3 | `RoundedSolidButtons` | — | no dedicated spec block |
| 4 | `RoundedOutlineButtons` | — | no dedicated spec block |
| 5 | `SocialBrandButtons` | — | no dedicated spec block |
| 6 | `DropdownButtons` | Dropdown Buttons (8 Colors) | see fidelity note below |
| 7 | `GroupButtons` | Rounded Solid Buttons (10 Colors) | see fidelity note below |
| 8 | `Checkboxes` | Custom Checkboxes (5 Variants) | see fidelity note below |
| 9 | `Radios` | Custom Radio Buttons (5 Variants) | see fidelity note below |
| 10 | `SlideToggle` | Slide Toggle Buttons (2 Toggles) | see fidelity note below |
| 11 | `SocialIconButtons` | — | no dedicated spec block |
| 12 | `ActionButtons` | Rounded Outline Buttons (10 Colors) | see fidelity note below |
| 13 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `SolidButtons`
The template SHALL display a row of 10 solid buttons (blue, indigo, purple, pink, red, orange, yellow, green, teal, cyan) each with an icon on the right side.

### `OutlineButtons`
The template SHALL display a row of 10 outline buttons labeled "Default" with colored borders and white backgrounds.

### `RoundedSolidButtons`
*anchors only* — Default

### `RoundedOutlineButtons`
*anchors only* — Default

### `SocialBrandButtons`
*anchors only* — Solid · Outline · Rounded Solid · Rounded Outline

### `DropdownButtons`
The template SHALL display a section with dropdown buttons in 8 colors (blue, indigo, purple, pink, red, orange, green, teal) each opening a dropdown menu with "Action", "Another action", "Something else here".

### `GroupButtons`
The template SHALL display a row of 10 rounded solid buttons labeled "Default" with 40px border-radius.

### `Checkboxes`
The template SHALL display custom-styled checkboxes in 5 variants (primary, secondary, tertiary, quarternary, disabled) each checked by default.

### `Radios`
The template SHALL display custom-styled radio buttons in 5 variants (primary, secondary, tertiary, quarternary, disabled) each selected by default.

### `SlideToggle`
The template SHALL display 2 toggle slide buttons with ON/OFF labels and smooth animation.

### `SocialIconButtons`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `ActionButtons`
The template SHALL display a row of 10 rounded outline buttons labeled "Default".

### `Footer`
The template SHALL display a footer linking to Component Dock.

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
- **Provenance ban.** No file under `apps/btnflow/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/btnflow/public/CNAME` = `btnflow.free.componentdock.com`
  and the package `homepage` = `https://btnflow.free.componentdock.com`.
