# Research & Implementation Plan: Glide (Carousel 03)

- **Source Template**: ColorLib Carousel 03 (`https://colorlib.com/wp/template/carousel-03/`)
- **Live Preview URL**: `https://preview.colorlib.com/theme/bootstrap/carousel-03/`
- **Assigned App Name**: `glide` (`@free-react-templates/glide`)
- **Category**: Carousel / Showcase

## Design Tokens & Styling Notes

- **Colors**:
  - Primary Accent: `#b063c5` (Purple / Mauve)
  - Text Color: `#ffffff` on dark overlays, `#212529` general body text.
  - Background: Clean white container with styled card containers.
- **Typography**:
  - Headings: `Playfair Display`, serif.
  - Body / UI: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`.
- **Card Anatomy**:
  - Image height: `500px` (`h-[500px]`), border radius `15px` (`rounded-2xl`).
  - Gradient overlay: black gradient bottom overlay (`bg-gradient-to-t from-black via-black/40 to-transparent`).
  - Category pill: Uppercase text, `#b063c5` color on white bg (`bg-white/90 text-[#b063c5] text-xs font-semibold px-2 py-0.5 tracking-wider`).
  - Headline: 34px serif (`font-serif font-normal text-white`).

## Section Structure

1. **Header / Title Section**: Centered heading ("Carousel #03").
2. **Carousel Component**: Multi-item slider with prev/next controls and pagination dots.
3. **Footer**: Component Dock attribution (`https://www.componentdock.com/`).
