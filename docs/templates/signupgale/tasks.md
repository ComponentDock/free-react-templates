# SignupGale — Implementation Task Outline

<!-- docs-drift:2026-10-22 -->
> **⚠ Reference re-read 2026-10-22 — this brief is stale below.**
> The spec (`openspec/specs/template-signupgale/spec.md`, section
> **Live reference restored**) is the contract and is canonical over this
> file: `docs/replication.md` — CSS values are canonical over screenshots.
>
> - **Reference is live:** `https://preview.colorlib.com/theme/bootstrap/signup-form-07/` answers **HTTP 200**
>   today; the 404 / "design from screenshot" wording below is the
>   prep-time state. Read section order and markup from the live page.
>
> - **Token corrections** (live stylesheet — applied below, except on
>   hover/role lines that keep their own shade):
>   - `#6a5ae0` → **`#483dff`**
>   - `#7c6bf5` → **`#6c63ff`**
>
> Where the live design differs materially from the notes below (a few
> designs were re-skinned), build what the spec describes.
<!-- /docs-drift -->

## Template Identity
- **New name:** signupgale
- **Source:** ColorLib Signup Form 07
- **Preview URL:** https://preview.colorlib.com/theme/signup-form-07/ (404 — tokens from screenshot)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/signup-form-07.jpg

## Section Order (top to bottom)

1. **Split-screen layout container** — flexbox row on desktop, stacked on mobile
2. **Left panel — Illustration** — flat vector workspace scene (SVG placeholder)
3. **Right panel — Form area** — centered content
   - 3a. "Sign Up" heading
   - 3b. Subtitle paragraph
   - 3c. Full name input
   - 3d. Email input
   - 3e. Password input
   - 3f. Re-type Password input
   - 3g. Terms checkbox + linked text
   - 3h. Register button (full-width, purple)
   - 3i. "— or register with —" divider
   - 3j. Social login buttons (Facebook, Twitter, Google — circular)
4. **Footer** — minimal, Component Dock link

## Design Notes

### Layout
- Split-screen: flexbox row, equal halves on desktop
- On mobile (<768px): stacks vertically, illustration on top
- Full viewport height (100vh) on desktop
- Light gray background (#f8f9fa) throughout

### Colors
- Primary brand: #6c63ff (purple/indigo) — button, checkbox, links
- Heading: #2d2d2d (dark charcoal)
- Subtext: #999999 (medium gray)
- Input borders: #e0e0e0 (light gray, bottom only)
- Page background: #f8f9fa
- Social: Facebook #3b5998, Twitter #1da1f2, Google #dd4b39

### Typography
- Font: Poppins (Google Fonts)
- Heading: 500 weight, ~28px
- Subtitle: 400 weight, ~15px
- Inputs: 400 weight, ~14px

### Illustration
- Flat vector style, person at desk with computer, plants, office furniture
- Muted purple/gray/blue color palette
- Use placeholder SVG or picsum image initially; ideally recreate as inline SVG

### Buttons
- Register: full-width, #6c63ff, white text, 6px radius, ~48px height
- Social: circular (40px), brand colors, white icons
- Hover: register darkens to #483dff

### Fidelity Notes
- Bottom-border-only inputs (no full box border) — match exactly
- Pre-checked terms checkbox
- "— or register with —" divider with gray lines on each side
- Circular social buttons (not rectangular like other signup templates)
- No card/shadow on the form — it floats directly on the gray background
