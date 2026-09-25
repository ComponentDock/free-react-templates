# Lens — Design Notes

## Source Template

- ColorLib "Elit": https://colorlib.com/wp/template/elit/
- Preview: https://preview.colorlib.com/theme/elit/

## Layout

- Fixed left sidebar (250px) with black background
- Main content floats right: calc(100% - 250px)
- On mobile (<992px): sidebar becomes a fixed top bar (70px) with hamburger
- Full-screen hero section with parallax background image
- Photo grid: 3 columns, images are 300px tall with object-fit cover
- Dark sections (#1a1a1a) alternate with default dark (#000)

## Colors

- Primary/accent: #df0e62 (pink/magenta) — buttons, active nav, checkmarks
- Body bg: #000 (black)
- Dark section bg: #1a1a1a
- Body text: gray (#808080)
- Heading text: white (#fff)
- Link hover: #df0e62
- Checkmark icon: #8bc34a (green)
- Pagination hover: #df0e62

## Typography

- Headings: "Oswald" — bold, uppercase, 4rem desktop / 2.5rem mobile
- Body: "Quicksand" — 300-900 weights
- Nav links: uppercase, 0.8rem, white
- Blog title: 24px

## Components

- Button: rounded (30px), padding 15px 30px, uppercase, letter-spacing 0.1em
- Photo item: hover overlay (rgba(0,0,0,0.6)), centered search icon
- Testimonial: circular avatar (25% width), blockquote, name
- Blog entry: flex layout (250px image + text content)
- Contact form: bottom-border inputs (2px solid gray), white labels
- Pagination: circle buttons (40px), hover fills with #df0e62

## Responsive Breakpoints

- Desktop: >992px — sidebar 250px fixed
- Tablet: 768-992px — sidebar collapses, section padding reduced
- Mobile: <576px — smaller photo images (200px)
