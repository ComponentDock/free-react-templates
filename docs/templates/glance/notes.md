# Glance — Implementation Tasks & Design Notes
<!-- prep-status: shipped-as=slidesync -->
> **SHIPPED-UNDER** — the ColorLib `carousel-12` design this prep describes already
> ships as `apps/slidesync` (<https://slidesync.free.componentdock.com>).
> Do not scaffold `apps/glance`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-slidesync/spec.md`.

## Source Reference

- **ColorLib Template**: Carousel 12 (`carousel-12`)
- **Preview URL**: `https://preview.colorlib.com/theme/bootstrap/carousel-12/`
- **Design Category**: Carousel / Product Showcase

## Component Structure (`apps/glance/src/`)

1. `Navbar.tsx` — Clean top navigation bar with brand and links.
2. `Hero.tsx` — Header title ("Carousel #2").
3. `ProductCarousel.tsx` — Section with background left half effect (`bg-[#f8f9fa]`), "Our Products" heading in primary blue (`#007bff`), and carousel cards with picsum images and bold titles (`#6c757d`).
4. `Footer.tsx` — Standard footer linking `https://www.componentdock.com/`.

## Fidelity Notes

- **Background Treatment**: Left half background block `#f8f9fa` simulating `.bg-left-half:before`.
- **Typography**: Roboto font family with font-weight weights 300 and 900 for headings.
- **Images**: High quality picsum seed images (`https://picsum.photos/seed/glance-1/600/400`, etc.).
