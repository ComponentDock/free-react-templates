# Resumeta — Design Notes

**Source:** ColorLib Civic (https://colorlib.com/wp/template/civic/)
**Preview:** https://preview.colorlib.com/theme/civic/

## Section structure (DOM order)

1. Header — sticky/fixed top bar, 2-column: logo+tagline left, 2 buttons right
2. Hero — 2-column: text+info left, portrait right; bg #f2f7f8
3. Social Links — full-width icon row, bg #f9f9f9
4. Work Experience — centered list, white bg, dot connectors between entries
5. Education — same list layout, parallax background image overlay
6. References — owl-carousel testimonial cards with large quote marks
7. Portfolio — title + button row, then 4-col image grid
8. Extra Skills — 2x2 grid: 2 transparent circle-progress + 2 dark fact boxes
9. Contact — centered form, 2-col name/email row, full-width subject/message
10. Footer — dark bg, centered copyright

## Fidelity notes

- **Font:** Josefin Sans via Google Fonts (weights 400, 600, 700)
- **Buttons:** `.site-btn` — white bg, 2px #40424a border, uppercase 12px 700, no border-radius, min-width 213px
- **Section title underline:** 2px solid #40424a via `::after` pseudo-element
- **Resume dot connector:** `::after` with border-radius 50px, bg #cacaca, positioned between list items
- **Circle progress:** CSS `border-radius: 150px`, inner bg #f2f7f8, canvas rotation 90deg
- **Fact boxes:** bg #40424a, white text/icons, 375px height, table-cell layout
- **Education bg:** parallax background image with cover sizing
- **Social section divider:** horizontal line via `::after`, bg #cbcbcb

## Component mapping

| Original class        | React component         | Notes                              |
| --------------------- | ----------------------- | ---------------------------------- |
| `.header-section`     | `Header.tsx`            | Logo + 2 CTA buttons               |
| `.hero-section`       | `Hero.tsx`              | 2-col: info + image                |
| `.social-section`     | `SocialLinks.tsx`       | Icon row with lucide-react icons   |
| `.resume-section`     | `WorkExperience.tsx`    | Timeline list                      |
| `.resume-section.with-bg` | `Education.tsx`     | Same layout, parallax bg           |
| `.review-section`     | `References.tsx`        | Carousel cards (CSS-only or simple state) |
| `.portfolio-section`  | `Portfolio.tsx`         | 4-item grid                        |
| `.extra-section`      | `ExtraSkills.tsx`       | Circle progress + fact boxes       |
| `.contact-section`    | `Contact.tsx`           | Form with validation               |
| `.footer-section`     | `Footer.tsx`            | Copyright + Component Dock link    |

## Key implementation decisions

- **No owl-carousel:** Replace with CSS-only or simple React state carousel for References
- **Circle progress:** Use SVG circles with stroke-dashoffset animation (no jQuery plugin)
- **Parallax bg on Education:** CSS `background-attachment: fixed` or Tailwind equivalent
- **Images:** picsum.photos with seed `resumeta-{n}` for deterministic placeholders
- **Icons:** lucide-react (Pinterest→PinIcon, LinkedIn, Instagram, Facebook, Twitter equivalents)
