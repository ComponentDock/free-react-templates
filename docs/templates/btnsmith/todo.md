# Btnsmith — Implementation Outline & Design Notes

- **Source Template**: ColorLib Bootstrap Buttons 02 (Button #07)
- **Preview URL**: `https://preview.colorlib.com/theme/bb/bootstrap-buttons-02/`
- **Design Category**: UI Components / Interactive Buttons Showcase

## Section-by-Section Structure

1. **Navbar / Header**: Page title `#07` with subtitle and quick anchor links.
2. **Standard Buttons Grid**: Solid, rounded, and outline variants for Primary, Secondary, Tertiary, and Quaternary colors.
3. **Icon Buttons Grid**: Buttons with embedded Lucide icons (Heart, Trash, Send, Download, etc.).
4. **Dropdown Buttons Section**: Interactive dropdown toggles with popover menus.
5. **Button Groups & Toolbars**: Combined button groups with unified borders.
6. **Checkbox & Radio Toggle Buttons**: Button-style toggle selectors.
7. **Slide & Hover Effect Buttons**: Animated hover buttons.
8. **Social Brand Buttons**: Facebook, Twitter, LinkedIn, Pinterest, and Dribbble branded buttons and outline variants.
9. **Footer**: Component Dock attribution (`https://www.componentdock.com/`).

## Design Tokens & Fidelity Notes

- Brand color scale mapped to Tailwind v4 inline theme (`--color-primary: #007bff`, `--color-secondary: #6c757d`, `--color-tertiary: #e2c275`, `--color-quaternary: #b96b9f`).
- Typography: Poppins font loaded via Google Fonts link in `index.html`.
- Layout: Bootstrap 4 `.container` / `.row` / `.col-md-*` replicated via modern Tailwind CSS flexbox and grid utilities.
