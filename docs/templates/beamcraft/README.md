# BeamCraft — Prep Notes

**Source:** ColorLib Topbuilder
**Preview:** https://preview.colorlib.com/theme/topbuilder/
**New name:** beamcraft

## Implementation Order

1. Scaffold apps/beamcraft/ (copy simplest existing app, rename package)
2. src/index.css — Tailwind entry + @theme tokens (brand: #f6b60b, top-bar: #111f29, services: #2e3841)
3. src/components/TopBar.tsx — dark navy bar with contact info + social icons
4. src/components/Navbar.tsx — white nav bar, logo, links, yellow search icon
5. src/components/Hero.tsx — full-width bg image, dark overlay, centered text + yellow CTA
6. src/components/ProfessionalBuilder.tsx — 4 icon-cards on gray bg
7. src/components/AboutUs.tsx — two-column image + text layout
8. src/components/WhatWeOffer.tsx — yellow bg, tabbed services
9. src/components/OurFeatures.tsx — "Why Choose Us" + feature items
10. src/components/OurServices.tsx — dark bg, service cards with icons
11. src/components/OurTeam.tsx — team member grid cards
12. src/components/Achievements.tsx — parallax bg, counter stats
13. src/components/Testimonials.tsx — carousel with client quotes
14. src/components/FeaturedWorks.tsx — parallax bg, portfolio grid
15. src/components/LatestBlog.tsx — 3 blog post cards
16. src/components/OurPartners.tsx — logo carousel
17. src/components/Footer.tsx — dark bg image, multi-column, Component Dock link
18. src/App.tsx — compose all sections in order
19. Tests (Vitest + RTL, 100% coverage)
20. Build, verify, commit

## Fidelity Notes

- Hero: picsum.photos/seed/beamcraft-hero/1920/1080 for bg image; dark overlay via bg-black/60
- Achievements: picsum.photos/seed/beamcraft-achieve/1920/800 parallax bg; animate counters on scroll
- Featured Works: picsum.photos/seed/beamcraft-works/1920/800 parallax bg
- Team photos: picsum.photos/seed/beamcraft-team-N/300/378 (N=1..4)
- Blog thumbnails: picsum.photos/seed/beamcraft-blog-N/400/250 (N=1..3)
- Partner logos: text placeholders or simple SVG shapes
- Icons: lucide-react (Home, Building2, Clock, ThumbsUp, etc.)
- Parallax: CSS background-attachment: fixed (Tailwind bg-fixed) for achievements + portfolio + footer
- Search icon in nav: yellow circle #f6b60b with white magnifying glass icon
- Nav hover: link color transitions to #f6b60b yellow
