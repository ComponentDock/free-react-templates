# Queryvane — Tasks

<!-- docs-drift:2026-10-22 -->
> **⚠ Reference re-read 2026-10-22 — this brief is stale below.**
> The spec (`openspec/specs/template-queryvane/spec.md`, section
> **Live reference restored**) is the contract and is canonical over this
> file: `docs/replication.md` — CSS values are canonical over screenshots.
>
> - **Reference is live:** `https://preview.colorlib.com/theme/bootstrap/search-form-bar-17/` answers **HTTP 200**
>   today; the 404 / "design from screenshot" wording below is the
>   prep-time state. Read section order and markup from the live page.
>
> **Spec caveat:** ⚠️ the demo's own `<title>` reads `Search #1` though the path is `search- form-bar-17` — the host's titles are not reliable labels; the readings above are for the URL as fetched.
>
> Where the live design differs materially from the notes below (a few
> designs were re-skinned), build what the spec describes.
<!-- /docs-drift -->

## Template Info

- **Name:** Queryvane
- **Source:** ColorLib "Search Form Bar 17" (https://colorlib.com/wp/template/search-form-bar-17/)
- **Preview:** unreachable (design from screenshot)
- **Type:** Search form bar toggle component

## Design Tokens

- Brand blue: #2563eb
- Overlay background: #f3f4f6
- Font: Inter (Google Fonts)

## Components

- [x] Navbar (brand + links + search toggle)
- [x] SearchOverlay (input + button + close)
- [x] Footer (Component Dock link)
- [x] App (composes all, manages toggle state)

## Tests

- [x] Navbar: brand, links, toggle button, click handler
- [x] SearchOverlay: open/close, input, submit, clear
- [x] Footer: Component Dock link
- [x] App: title, composition, toggle integration

## Verification

- [x] Typecheck pass
- [x] Lint pass
- [x] 100% coverage (18 tests, 4 files)
- [x] Build pass
- [x] Spec validate pass
