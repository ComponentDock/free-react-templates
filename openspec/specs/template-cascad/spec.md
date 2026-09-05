# Template: Cascad (Bootstrap Dropdowns)

## Purpose

Recreation of ColorLib **Dropdown 05** — a cart dropdown menu snippet for
eCommerce sites.

- **Source:** [dropdown-05](https://colorlib.com/wp/template/dropdown-05/)
- **Preview:** [live](https://preview.colorlib.com/theme/bootstrap/dropdown-05/)
- **Category:** Bootstrap Dropdowns
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design tokens (extracted from preview CSS)

| Token              | Value                      | Notes                                     |
| ------------------ | -------------------------- | ----------------------------------------- |
| `--brand-primary`  | `#fa697c`                  | Pink/salmon — btn-group background, links |
| `--brand-dark`     | `#f83851`                  | Split button bg, hover accent             |
| `--brand-hover`    | `#f95066`                  | Split button hover                        |
| `--text-heading`   | `#000`                     | Headings, product names                   |
| `--text-body`      | `gray`                     | Body copy, section text                   |
| `--text-muted`     | `rgba(0,0,0,0.3)`         | Quantity labels                           |
| `--text-link`      | `#fa697c`                  | Price links, "View All"                   |
| `--surface-white`  | `#fff`                     | Dropdown menu background                  |
| `--bg-page`        | `#fafafa`                  | Page background                           |
| Font family        | `"Roboto", Arial, sans-serif` | Loaded via Google Fonts              |
| Font size          | 16–18px body               | Dropdown items 16px, headings 18px        |
| Line height        | 1.8                        | Body, 1.5 headings                        |
| Border radius      | 4px                        | btn-group, split button                   |
| Shadow (dropdown)  | `0 10px 34px -20px rgba(0,0,0,0.41)` | Cards float with soft shadow |
| Split button size  | 60×60 px                   | Cart icon button right side               |
| Section padding    | 7em 0                      | `.ftco-section`                           |
| Dropdown min-width | 25rem (desktop), 22rem (mobile) | Ensures consistent card width        |
| Arrow pseudo-el    | CSS border triangle        | `.dropdown-menu::after` pointing down     |

## Replication research

### Live preview DOM structure

```html
<section class="ftco-section">
  <div class="container">
    <div class="row">
      <div class="col-md-12 text-center">
        <h2 class="heading-section mb-5 pb-md-4">Dropdown #05</h2>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-12 d-flex justify-content-center">
        <div class="btn-group justify-content-between align-items-center">
          <p class="text-left mb-0 heading">Cart <span>[3]</span></p>
          <a class="split dropdown-toggle dropdown-toggle-split ..." data-toggle="dropdown">
            <span class="icon ion-ios-cart"></span>
          </a>
          <div class="dropdown-menu">
            <div class="dropdown-item d-flex align-items-start">
              <div class="img" style="background-image: url(product-1.jpg)"></div>
              <div class="text pl-3">
                <h4>Casual Shoes X340</h4>
                <p class="mb-0"><a href="#">$25.99</a> <span class="quantity ml-3">Quantity: 01</span></p>
              </div>
            </div>
            <!-- 2 more product items -->
            <div class="dropdown-item text-center btn-link">
              View All <span class="ion-ios-arrow-round-forward"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

### Visual design (from screenshot)

The template shows a **centered cart dropdown** widget on a white/light-gray
background. The trigger bar is a **salmon/pink (#fa697c) horizontal pill** with
white "Cart [3]" text on the left and a **darker red (#f83851) 60×60px square
button** (with cart icon) on the right, rounded on the right side only. Clicking
the cart button reveals a **white floating card** with soft shadow, containing
3 product rows (image thumbnail + name + price + quantity) separated by subtle
borders, and a "View All" CTA link at the bottom. The card has a CSS triangle
arrow pointing up toward the trigger button. Overall aesthetic: clean,
minimal, eCommerce-focused.

### Screenshot observation

The TEMPLATES.md preview image shows the same layout: centered section heading
"Dropdown #05", pink trigger bar, white dropdown card with 3 product items.
Font appears to be Roboto. No background images or gradients — solid white
dropdown, solid pink trigger, light gray page background.

## Gherkin requirements

### Feature: Cascad cart dropdown

**Scenario: Renders the section heading**
  Given the component is mounted
  Then a heading "Cart Dropdown" is visible
  And the heading is centered

**Scenario: Shows cart item count**
  Given the component is mounted
  Then the trigger bar displays "Cart" with an item count in brackets

**Scenario: Trigger bar is styled correctly**
  Given the component is mounted
  Then the trigger bar has a pink background
  And the trigger bar has white text
  And the trigger bar has rounded corners (4px radius)

**Scenario: Cart icon button is styled correctly**
  Given the component is mounted
  Then the cart icon button has a darker red background
  And the cart icon button is square (60×60 px)
  And the cart icon button is vertically aligned with the trigger bar

**Scenario: Dropdown opens on cart icon click**
  Given the component is mounted
  When the user clicks the cart icon button
  Then the dropdown menu becomes visible
  And the dropdown menu appears below the trigger bar
  And the dropdown menu has a white background with soft shadow

**Scenario: Dropdown shows product items**
  Given the dropdown is open
  Then 3 product items are visible
  And each product item shows a thumbnail image
  And each product item shows a product name
  And each product item shows a price
  And each product item shows a quantity

**Scenario: Dropdown shows View All link**
  Given the dropdown is open
  Then a "View All" link is visible at the bottom
  And the "View All" link is centered
  And the "View All" link has a forward arrow icon

**Scenario: Dropdown closes on outside click**
  Given the dropdown is open
  When the user clicks outside the dropdown
  Then the dropdown menu is not visible

**Scenario: Dropdown closes on item click**
  Given the dropdown is open
  When the user clicks a product item
  Then the dropdown menu is not visible

**Scenario: Responsive layout on mobile**
  Given the viewport width is less than 768px
  Then the trigger bar is still visible
  And the dropdown menu adjusts to a narrower width

**Scenario: Accessibility - keyboard navigation**
  Given the component is mounted
  When the user presses Tab to focus the cart icon
  And the user presses Enter
  Then the dropdown menu becomes visible

## Verification checklist

- [ ] Section heading centered and styled (font-weight 400, color #000)
- [ ] Trigger bar: pink (#fa697c) background, white text, 4px radius
- [ ] Cart icon button: darker red (#f83851), 60×60px, right-aligned
- [ ] Split button hover effect (#f95066)
- [ ] Dropdown menu: white background, soft shadow, centered below trigger
- [ ] Dropdown arrow (CSS triangle) pointing up from menu
- [ ] 3 product items with thumbnail, name, price, quantity
- [ ] Product item border-bottom separator (1px solid rgba(0,0,0,0.05))
- [ ] "View All" link centered with forward arrow icon
- [ ] Click outside closes dropdown
- [ ] Keyboard accessibility (Enter/Space to toggle, Escape to close)
- [ ] Responsive: dropdown width adjusts on mobile
- [ ] Font: Roboto loaded via Google Fonts
- [ ] No ColorLib references in app code
- [ ] Footer links to Component Dock
