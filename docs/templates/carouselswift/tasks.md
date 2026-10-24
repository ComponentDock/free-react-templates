# CarouselSwift — Development Tasks & Design Notes
<!-- prep-status: shipped-as=spinwheel -->
> **SHIPPED-UNDER** — the ColorLib `carousel-17` design this prep describes already
> ships as `apps/spinwheel` (<https://spinwheel.free.componentdock.com>).
> Do not scaffold `apps/carouselswift`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-spinwheel/spec.md`.

## Overview

Recreation of ColorLib Carousel 17 (`https://colorlib.com/wp/template/carousel-17/`) under the new name **CarouselSwift** (`apps/carouselswift`).

## Structure & Section Order

1. **Navbar**: Logo, navigation links, mobile menu toggle, CTA button.
2. **Hero**: Headline, descriptive subtitle, primary CTA button, featured illustration/carousel banner placeholder.
3. **CarouselSection**: Interactive card slider with prev/next controls.
4. **FeaturesSection**: Grid of feature cards with Lucide icons.
5. **TestimonialSection**: Customer quote cards/slider.
6. **NewsletterSection**: Email subscription input form.
7. **Footer**: Links, copyright, and mandatory Component Dock attribution (`https://www.componentdock.com/`).

## Fidelity & Design Notes

- Uses modern clean layout with Indigo primary accents and Slate neutrals.
- Fully responsive design using Tailwind CSS 4 utility classes.
- Placeholder images sourced deterministically via Picsum Photos.
