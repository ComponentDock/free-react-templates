# Hammerly — Prep Notes

**Source:** ColorLib Webuilder
**Preview:** https://preview.colorlib.com/theme/webuilder/
**New name:** hammerly

## Implementation Order

1. Scaffold apps/hammerly/ (copy simplest existing app, rename package)
2. src/index.css — Tailwind entry + @theme tokens (brand: #ffcd00, dark: #1e2126, counter: #31353d)
3. src/components/TopBar.tsx — dark bar with phone/address/hours + social icons
4. src/components/Navbar.tsx — white nav, logo with hard hat icon, links, cart icon
5. src/components/Hero.tsx — full-width bg image, dark overlay, yellow headline + subtext
6. src/components/GetQuote.tsx — dark CTA bar with quote question + yellow button
7. src/components/WhoWeAre.tsx — two-column image + text layout
8. src/components/OurServices.tsx — dark bg, 3 service categories with icons
9. src/components/OurProjects.tsx — project cards gallery
10. src/components/WorkWithUs.tsx — bg image CTA with "Get Offer" button
11. src/components/OurTeam.tsx — team member grid cards
12. src/components/Counter.tsx — dark gray bg, animated stat counters
13. src/components/Testimonials.tsx — client quotes on light bg
14. src/components/LatestNews.tsx — blog post cards grid
15. src/components/Clients.tsx — partner logo carousel on light bg
16. src/components/Address.tsx — yellow bg contact bar
17. src/components/Footer.tsx — dark footer with Component Dock link
18. src/App.tsx — compose all sections in order
19. Tests (Vitest + RTL, 100% coverage)
20. Build, verify, commit

## Fidelity Notes

- Hero: picsum.photos/seed/hammerly-hero/1920/1080 for bg; dark overlay bg-black/50
- Work CTA: picsum.photos/seed/hammerly-work/1920/600 for bg; dark overlay
- Team photos: picsum.photos/seed/hammerly-team-N/300/378 (N=1..4)
- Project images: picsum.photos/seed/hammerly-project-N/600/400 (N=1..6)
- Blog thumbnails: picsum.photos/seed/hammerly-blog-N/400/250 (N=1..3)
- Partner logos: text placeholders or simple SVG
- Icons: lucide-react (HardHat, Hammer, Wrench, Building2, etc.)
- Hard hat icon in logo: lucide-react HardHat icon
- Yellow decorative lines in hero: use Tailwind border utilities
- Counter: animate numbers on scroll using IntersectionObserver
- Address bar: full-width yellow #ffcd00 with contact info centered
