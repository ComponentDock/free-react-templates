# CodeLens — Design Notes & Task Outline

## Source

- ColorLib template: Martin
- Preview URL: https://preview.colorlib.com/theme/martin/
- Source URL: https://colorlib.com/wp/template/martin/

## Design Tokens (from live preview CSS)

- Font: Poppins (300/400/500/600/700/800)
- Brand accent: #ffdd00 (bright yellow)
- Body bg: #f7f7f7 (light gray)
- Text: #1a1a1a
- Headings: rgba(0,0,0,0.8)
- Buttons: bg #ffdd00, text #000, border 2px solid #ffdd00, border-radius 1px (nearly square)
- Nav overlay: rgba(0,43,220,0.9) (blue)
- Subscribe: dark overlay on background image
- Footer: white bg
- Logo: white text "C." with 4px white underline

## Section Order (replicated 1:1)

1. **Header** — Fixed top bar, "C." logo with underline, hamburger toggle
2. **Hero** — Full-height carousel, 3/4 image + 1/4 text split, social links
3. **Services** — "What I Do", 3-column cards (Explore, Create, Learn)
4. **Work** — Case studies carousel, 50/50 image + description
5. **Subscribe** — Dark overlay, bio text, newsletter form
6. **Footer** — Two columns: "Lets Talk" CTA + Info (contact, social)
7. **Copyright** — Centered bar with year

## Implementation Notes

- Hero: Use CSS grid or flexbox for the 3/4 + 1/4 split layout. Carousel can use a React carousel library or CSS scroll-snap for simplicity.
- Services: 3-column grid with icons (lucide-react). Each card has icon + title + sub-services list.
- Work carousel: Similar split layout to hero but horizontal. Tags, title, description, CTA.
- Subscribe: Position relative with dark overlay pseudo-element (or Tailwind overlay utilities). Form with email validation.
- Footer: Two-column grid. Left: CTA paragraph. Right: contact info + social icons (lucide-react).
- Copyright: Simple centered text with dynamic year via `new Date().getFullYear()`.

## Fidelity Notes

- The original uses Owl Carousel for hero and work sections. For React, use CSS scroll-snap or a lightweight React carousel.
- Social media icons in the hero are plain text links ("Twitter", "Facebook", etc.). Use lucide-react icons instead for a modern look.
- The original nav overlay is full-screen blue with centered links. Match this pattern.
- Button style is nearly square (1px border-radius). Keep this distinct look.
- The subscribe section has a dark overlay on a background image. Use a picsum.photos placeholder.
