# Template: Cartwell (Cart Dropdown Menu)

Recreation of ColorLib "Dropdown V05" (https://colorlib.com/wp/template/dropdown-05/).

## Purpose

Provide a reusable cart dropdown menu component for eCommerce websites. When clicked, a cart icon reveals a dropdown panel with product items, quantity controls, pricing, and checkout actions.

## Design reference (replication findings)

- **Source:** ColorLib "Dropdown V05" — https://colorlib.com/wp/template/dropdown-05/
- **Source slug:** `dropdown-05`
- **Preview URL analyzed:** https://preview.colorlib.com/theme/bootstrap/dropdown-05/ — **HTTP 200**, 3,866 B, fetched 2026-10-23 (page `<title>`: "Dropdown 05"). The slug-only path `https://preview.colorlib.com/theme/dropdown-05/` answers **404**; the live demo is the catalog alias above, recorded so the next prep does not repeat the probe.
- **Design tokens read from the live stylesheet** (`https://preview.colorlib.com/theme/bootstrap/dropdown-05/css/style.css?v=618bad75`, fetched 2026-10-23): brand `#007bff`, `#fa697c`, `#0056b3`, `#f83851`; dominant neutrals `#212529`, `#6c757d`, `#16181b`; type Roboto, Segoe UI. Frequencies are the sheet's own literals, not a design guess.
- **Screenshot (visual reference):** https://colorlib.com/wp/wp-content/uploads/sites/2/dropdown-05.jpg
- **Provenance:** re-recorded 2026-10-23 by the SPEC-REFERENCE audit — this spec carried no ColorLib source URL before, so the shipped recreation in `apps/cartwell` had no recorded reference (docs/replication.md requires one).

## Requirements

### Requirement: Cart trigger button

Users SHALL see a cart icon button with an item count badge. Clicking the button opens the cart dropdown.

#### Scenario: Initial state

- **WHEN** the page loads
- **THEN** the cart trigger shows "Cart (N)" where N is the total quantity

#### Scenario: Toggle dropdown

- **WHEN** the user clicks the cart trigger
- **THEN** the cart dropdown opens
- **AND** the trigger shows `aria-expanded="true"`

### Requirement: Cart dropdown panel

The dropdown panel SHALL display cart items with product details, quantity controls, subtotals, and action buttons.

#### Scenario: View cart items

- **WHEN** the dropdown opens
- **THEN** each cart item shows a product image, name, unit price, quantity, and subtotal
- **AND** a total price is displayed in the footer

#### Scenario: Empty cart

- **WHEN** all items are removed
- **THEN** the dropdown shows "Your cart is empty"

### Requirement: Quantity controls

Users SHALL be able to increase and decrease item quantities via + and - buttons.

#### Scenario: Increase quantity

- **WHEN** the user clicks the + button on an item
- **THEN** the quantity increases by 1
- **AND** the subtotal and total update

#### Scenario: Decrease quantity

- **WHEN** the user clicks the - button on an item with quantity > 1
- **THEN** the quantity decreases by 1
- **AND** the subtotal and total update

### Requirement: Remove items

Users SHALL be able to remove items from the cart via a remove button.

#### Scenario: Remove an item

- **WHEN** the user clicks the remove button on an item
- **THEN** the item is removed from the cart
- **AND** the total updates

### Requirement: Close behavior

The dropdown SHALL close when the user clicks "Continue Shopping", clicks outside the dropdown, or presses Escape.

#### Scenario: Close via Continue Shopping

- **WHEN** the dropdown is open and the user clicks "Continue Shopping"
- **THEN** the dropdown closes

#### Scenario: Close via outside click

- **WHEN** the dropdown is open and the user clicks outside
- **THEN** the dropdown closes

#### Scenario: Close via Escape

- **WHEN** the dropdown is open and the user presses Escape
- **THEN** the dropdown closes

### Requirement: Accessibility

The cart trigger and dropdown SHALL be accessible via keyboard and screen readers.

#### Scenario: ARIA attributes

- **THEN** the trigger has `aria-haspopup="menu"` and `aria-expanded`
- **AND** the dropdown has `role="menu"`
- **AND** each cart item has `role="menuitem"`

### Requirement: Checkout

Users SHALL see a Checkout button in the dropdown footer.

#### Scenario: Checkout present

- **WHEN** the dropdown is open and cart has items
- **THEN** a "Checkout" button is visible

### Requirement: Component Dock attribution

The system SHALL credit Component Dock — the marketplace that publishes this
template — with a visible link to `https://www.componentdock.com/` in the site
footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT
change the footer's own layout or copy beyond the credit line.

#### Scenario: Footer attribution

- **GIVEN** any page of the template is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL contain an anchor whose `href` is
  `https://www.componentdock.com/`
- **AND** the anchor's text SHALL name Component Dock

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/cartwell/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/cartwell/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Design Tokens

| Token       | Value     | Notes                            |
| ----------- | --------- | -------------------------------- |
| Brand       | `#e74c3c` | Red accent (cart badge, buttons) |
| Brand hover | `#c0392b` | Darker red                       |
| Page bg     | `#f8f9fa` | Light gray                       |
| Card bg     | `#ffffff` | White dropdown panel             |
| Text body   | `#333333` | Dark gray                        |
| Text muted  | `#999999` | Secondary text                   |
| Border      | `#e9ecef` | Light divider                    |
| Font        | Poppins   | Google Font                      |

## Footer

- Template name: "Cartwell"
- Description: "Cart Dropdown Menu"
- Link: "Made with Component Dock" → https://www.componentdock.com/

## Verification checklist

- [ ] Footer credits Component Dock with a link to https://www.componentdock.com/
- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
