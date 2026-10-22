# CarouselSweep Tasks & Design Notes

<!-- docs-drift:2026-10-22 -->
> **⚠ Reference re-read 2026-10-22 — this brief is stale below.**
> The spec (`openspec/specs/template-carousel-sweep/spec.md`, section
> **Live reference restored**) is the contract and is canonical over this
> file: `docs/replication.md` — CSS values are canonical over screenshots.
>
> - **Reference is live:** `https://preview.colorlib.com/theme/bootstrap/carousel-12/` answers **HTTP 200**
>   today; the 404 / "design from screenshot" wording below is the
>   prep-time state. Read section order and markup from the live page.
>
> - **Do not build** these screenshot samples — the live sheet paints
>   no such colour; take the spec's live palette instead:
>   `#4f46e5`.
>
> **Spec caveat:** ⚠️ the demo's own `<title>` reads `Carousel #2` though the path is `carousel-12` — the host's titles are not reliable labels; the readings above are for the URL as fetched.
>
> Where the live design differs materially from the notes below (a few
> designs were re-skinned), build what the spec describes.
<!-- /docs-drift -->

## Overview

Recreation of ColorLib **Carousel 12** (`carousel-12`), named **CarouselSweep**.

## Section Structure & Order

1. **Navbar**: Brand logo, navigation links, mobile menu toggle, CTA button.
2. **Hero Carousel**: Primary full-width interactive slider with captions, buttons, and dot pagination.
3. **Featured Showcase**: Multi-column grid highlighting carousel use cases and components.
4. **Interactive Testimonial Carousel**: Customer quotes slider with avatars and rating stars.
5. **Newsletter Banner**: Email signup form for updates.
6. **Footer**: Links, copyright, and mandatory Component Dock link (`https://www.componentdock.com/`).

## Design & Fidelity Notes

- **Theme**: Indigo primary (`#4f46e5`) with slate neutrals.
- **Interactivity**: Accessible keyboard-navigable sliders with auto-play option.
- **Assets**: Picsum placeholder images (`https://picsum.photos/seed/carousel-sweep-...`).
