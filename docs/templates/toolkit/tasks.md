# Toolkit — Implementation Notes

Source: ColorLib Tools Ui Kit (https://colorlib.com/wp/template/tools-ui-kit/)
New name: toolkit
Note: Preview is 404. Design based on screenshot + ColorLib description.

## Section order (implement from top to bottom)

1. Navbar — Transparent over hero, white text. "Tools Kit." logo left. Right: COMPONENTS dropdown, DOWNLOAD link, social icons (Facebook, Twitter, Instagram). Becomes solid on scroll.
2. Hero — Full-width blue gradient (linear-gradient 135deg, #5B86E5 → #36D1DC). Centered: large light-weight heading, subtitle, white "DOWNLOAD TOOLS" button with download icon.
3. Basic Elements — White bg. "Basic Elements" heading. "Buttons" subsection with "Pick your style" subtitle. Row of blue buttons in various styles (solid, outline, rounded, sizes).
4. (Additional component sections — implement a representative set: inputs, cards, alerts, navbars, forms, typography)
5. Footer — Simple footer with copyright, Component Dock link.

## Design tokens to set in @theme (index.css)

- primary-blue: #5B86E5
- secondary-blue: #36D1DC
- hero-gradient: linear-gradient(135deg, #5B86E5, #36D1DC)
- dark-text: #212529
- muted-text: #6c757d
- light-bg: #f8f9fa
- border-color: #dee2e6

## Fonts

- System sans-serif stack (Bootstrap 4 default): -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
- No Google Fonts needed — use system font stack

## Key component notes

- This is a UI KIT template — it showcases individual UI components, not a single-page website.
- Navbar: transparent over hero, solid white on scroll. COMPONENTS is a dropdown.
- Hero: large heading with light font-weight (300), gradient bg, centered content.
- Buttons: showcase multiple variants — solid blue, outline, different sizes, rounded.
- Implement representative component sections (buttons, inputs, cards, alerts) rather than trying to replicate every Bootstrap component.
- All images: picsum.photos placeholders.
- No ColorLib references in app code.
- Footer MUST link https://www.componentdock.com/ branded as "Component Dock".

## Fidelity notes

- The hero gradient is the most distinctive visual element — must match the blue gradient.
- Heading "Tools UI Kit." uses very light font-weight (300) — distinctive thin elegant style.
- Navbar is transparent with white text over the gradient hero.
- Button showcase uses blue (#5B86E5) as the primary button color.
- Clean, minimalist UI kit aesthetic — lots of whitespace.
- As a UI Kit, the page is a component catalog, not a traditional website layout.
