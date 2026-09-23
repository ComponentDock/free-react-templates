# CraftCanvas — Prep Notes & Task Outline

Source: ColorLib "Design" → https://colorlib.com/wp/template/design/
Preview: https://preview.colorlib.com/theme/design/
New name: craftcanvas

## Section Order (from live DOM)

1. Navbar
2. Hero (split: left text+CTA+features, right image+quote overlay)
3. Achievements (4 stat cards)
4. How It Works (3 steps with curved arrow SVGs)
5. Services (split: left text+checklist+CTA, right image+dotted overlay)
6. Testimonials (carousel, 3 cards with circular avatars)
7. Blog Entries (5-column post cards)
8. Footer (about, social icons, 3-col nav links, copyright)

## Component Plan

| Component        | Notes                                                   |
| ---------------- | ------------------------------------------------------- |
| Navbar.tsx       | Logo text, nav links, right CTA pill, mobile hamburger  |
| Hero.tsx         | Split layout: left col (heading, p, btn, 2 feature cards), right col (image + dark quote overlay) |
| Achievements.tsx | 4-column grid, each: number, heading, description       |
| HowItWorks.tsx   | Centered heading, 3-column steps with circular icon bgs, decorative SVG arrows |
| Services.tsx     | Split: left (subtitle, heading, checklist, btn), right (image + dotted div) |
| Testimonials.tsx | Carousel (use simple CSS scroll-snap or state-based, no owl.carousel) with 3 cards |
| BlogEntries.tsx  | Centered heading, 5-column grid of post cards (date, title link, excerpt) |
| Footer.tsx       | About widget, social icons (lucide-react), 3-col nav, copyright with Component Dock link |

## Design Fidelity Notes

- **Colors**: Primary #1264fa, hover #2671fa, text #000839, section bg #f8f9fa
- **Typography**: Montserrat 300/400/700 via Google Fonts
- **Buttons**: Pill shape (border-radius 30px), padding 12px 30px, font-size 14px
- **Hero**: Left text side has heading (50px, bold), paragraph, CTA button, then 2 feature cards in a row. Right side has hero image with a dark navy (#000839) blockquote overlay positioned on the image
- **Achievements**: Simple 4-column stat row, no backgrounds, centered text
- **How It Works**: 3 columns with circular blue (#1264fa) icon backgrounds, numbered headings, decorative curved SVG arrows connecting steps. Use lucide-react icons instead of flaticon
- **Services**: Background #f8f9fa, split layout with text+checkmark list on left, image with dotted overlay on right
- **Testimonials**: Original uses owl.carousel. Replace with CSS scroll-snap carousel or simple state-based carousel. Circular avatar images, blockquote text, author name/role
- **Blog Entries**: 5-column grid of simple cards (date string, h3 title link, short paragraph)
- **Footer**: Dark footer with About widget, social media icons (lucide-react: Facebook, Twitter, Instagram, Dribbble, LinkedIn), 3 columns of navigation links, copyright with Component Dock attribution

## Image Strategy

- Hero image: `https://picsum.photos/seed/craftcanvas-hero/800/600`
- Services image: `https://picsum.photos/seed/craftcanvas-services/600/400`
- Testimonial avatars: `https://picsum.photos/seed/craftcanvas-person-1/100/100`, etc.
- No assets copied from ColorLib

## Icon Mapping

| Original (flaticon/icomoon) | Replacement (lucide-react)      |
| --------------------------- | ------------------------------- |
| flaticon-square             | Box                             |
| flaticon-blueprint          | PenTool                         |
| flaticon-technology         | Monitor                         |
| flaticon-illumination       | Lightbulb                       |
| flaticon-worker             | Wrench                          |
| icon-facebook               | Facebook                        |
| icon-twitter                | Twitter                         |
| icon-instagram              | Instagram                       |
| icon-dribbble               | Dribbble                        |
| icon-linkedin               | Linkedin                        |
| icon-heart (footer)         | Heart                           |

## Tasks

- [ ] Create apps/craftcanvas/ scaffold (copy simplest existing app)
- [ ] Set up index.css with @theme tokens (#1264fa brand, etc.)
- [ ] Load Montserrat from Google Fonts in index.html
- [ ] Implement Navbar component
- [ ] Implement Hero component (split layout + feature cards + quote overlay)
- [ ] Implement Achievements component (4 stat cards)
- [ ] Implement HowItWorks component (3 steps + SVG arrows)
- [ ] Implement Services component (split layout + checklist)
- [ ] Implement Testimonials component (scroll-snap carousel)
- [ ] Implement BlogEntries component (5-column card grid)
- [ ] Implement Footer component (about, social, nav, copyright)
- [ ] Compose App.tsx with all sections
- [ ] Write tests for each component (100% coverage)
- [ ] Run verify-app.sh craftcanvas
- [ ] Create public/CNAME with craftcanvas.free.componentdock.com
