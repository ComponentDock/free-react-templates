# Designera — Design Notes

Source: ColorLib "Design" template
Preview: https://preview.colorlib.com/theme/design/
Spec: openspec/specs/template-designera/spec.md

## Section order (top to bottom)

1. Navbar
2. Hero (split: text left, image + quote right)
3. Achievements/Stats (4 columns)
4. How It Works (3 steps with dashed connectors)
5. Services (split: text + check list left, image right)
6. Testimonials (carousel)
7. Blog Entries (5-column card grid)
8. Footer (about + social, nav links, copyright)

## Design token summary

- Font: Montserrat (Google Fonts), weights 300/400/700
- Primary: #1264fa (blue) — buttons, active states, hover
- Heading color: #000839 (dark navy)
- Section backgrounds: #f8f9fa (light gray) for services + blog
- Buttons: pill shape (border-radius 30px)
- Social icons: rounded square (border-radius 10px, #f8f9fa bg)
- Section padding: 70px 0 vertical rhythm
- Subtitle: rgba(0,8,57,0.5) — muted uppercase label above headings

## Fidelity notes

- Hero uses a split layout (col-lg-5 + col-lg-6) with a decorative background element
- Quote box is positioned absolute at bottom of hero image, dark navy bg with white text
- How It Works steps use SVG dashed arrow connectors between them
- Services section uses decorative dotted pattern behind the image
- Blog cards have rounded corners (20px) with bottom-left radius removed (asymmetric)
- Testimonial uses owl carousel (replace with simple React carousel)
- Footer social icons are 50x50 rounded squares with centered icons
- No newsletter/form sections — this is a clean, minimal template
