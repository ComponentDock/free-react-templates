# Kinetic — Design Notes

**Original:** ColorLib "Bobsled" (https://colorlib.com/wp/template/bobsled/)

## Replication tokens

| Token            | Value                                            |
| ---------------- | ------------------------------------------------ |
| Font family      | Poppins (Google Fonts) — weights 300,500,600     |
| Primary gradient | linear-gradient(to right, #3e69fe, #4cd4e3)      |
| Primary blue     | #3e69fe                                          |
| Teal accent      | #4cd4e3                                          |
| Heading color    | #222222                                          |
| Body text        | #777777                                          |
| Light bg         | #f9f9ff                                          |
| White bg         | #ffffff                                          |
| Button radius    | 9999px (pill shape)                              |
| Button style     | transparent border white, gradient text on hover |

## Sections

1. **Navbar** — Logo "Kinetic" + 5 nav links + mobile hamburger
2. **Hero** — Blue→teal gradient, white heading, subtitle, pill CTA
3. **WorkingProcess** — White bg, 4 steps with icons + arrows
4. **Features** — Gradient bg, 3 image+text cards with "Read More"
5. **RemarkableWorks** — White bg, 3 alternating image/text rows
6. **Story** — Gradient bg, left-aligned heading + paragraph + CTA
7. **Newsletter** — Light bg, email input + button
8. **ContactForm** — Gradient bg, name/email/message fields + button
9. **Footer** — 3-col info + bottom bar with Component Dock link + social icons

## Asset strategy

- No original assets copied
- Images: picsum.photos seeded placeholders
- Fonts: Google Fonts Poppins via <link>
- Icons: lucide-react (Search, Layers, PenTool, Smile, ArrowRight, Menu, X)
- Social icons: inline SVG (Facebook, Twitter, Dribbble, Behance)
