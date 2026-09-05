# Spec: Cartwell — Cart Dropdown Menu

## Purpose

Provide a reusable cart dropdown menu component for eCommerce websites. When clicked, a cart icon reveals a dropdown panel with product items, quantity controls, pricing, and checkout actions.

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
