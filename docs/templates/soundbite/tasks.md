# SoundBite — Implementation Tasks & Design Notes

Source: ColorLib "The Hustle Hour" (slug: `hustlehour`)
Preview: https://preview.colorlib.com/theme/hustlehour/
New name: soundbite (apps/soundbite, @free-react-templates/soundbite)

## Task Outline

1. **Scaffold** — Copy simplest existing app, rename package to @free-react-templates/soundbite, update CNAME (soundbite.free.componentdock.com) + homepage
2. **index.html** — Add Google Fonts preconnect + link for Outfit (weights 300,400,500,600,700)
3. **index.css / @theme** — Define primary color palette (purple/violet from Tailwind default), accent color, ensure dark mode support
4. **App.tsx** — Compose all section components in order: Header, Hero, About, Sponsors, Reviews, Newsletter, FAQ, Contact, Footer, MobileCTA, BackToTop, ScrollProgress
5. **Header.tsx** — Sticky nav: logo + 5 anchor links + "Listen Now" CTA. Responsive: hamburger or hidden nav on mobile.
6. **Hero.tsx** — Badge "Latest Episodes", heading, subtitle. Featured episode card (image, play overlay, title, meta). Episode grid (3 cards).
7. **About.tsx** — 2-column grid: host photo (rounded-3xl, gradient overlay) + "About the Host" badge, heading, gradient-text name, bio, blockquote, social icons.
8. **Sponsors.tsx** — 4-column card grid with initial icons, names, descriptions, "Learn More" links. "Want to sponsor?" CTA.
9. **Reviews.tsx** — Horizontal carousel with star ratings, quotes, author avatars. Prev/next buttons, dot indicators.
10. **Newsletter.tsx** — Gradient banner (from-primary-600 to-accent-600), decorative blur circles, heading, email form (inline input + button), subscriber count.
11. **FAQ.tsx** — Accordion with +/- toggle. Smooth max-height transition. Multiple questions.
12. **Contact.tsx** — Form: Name+Email (2-col), Subject, Message textarea, "Send Message" button, email link.
13. **Footer.tsx** — 4-column grid: brand (logo, desc, social), Podcast, Follow, More, Listen Now. Bottom bar with copyright + legal links + Component Dock link.
14. **MobileCTA.tsx** — Fixed bottom bar (lg:hidden): Subscribe + Listen Now buttons.
15. **BackToTop.tsx** — Fixed bottom-right button, appears after scrolling, smooth scroll to top.
16. **ScrollProgress.tsx** — Fixed top progress bar (h-0.5, primary-600), width updates on scroll.
17. **Tests** — Vitest + RTL for each component, 100% line/function/branch/statement coverage
18. **Verify** — Run scripts/verify-app.sh soundbite, fix issues

## Design Notes

### Section Background Pattern
- Header: gray-950/80 (translucent dark, backdrop-blur)
- Hero: default (gray-950 page bg)
- About: gray-900
- Sponsors: gray-900
- Reviews: gray-900
- Newsletter: gradient (primary-600 → accent-600) with decorative blur circles
- FAQ: white / gray-950 (light/dark mode)
- Contact: default (gray-950)
- Footer: gray-950 with border-t

### Key Visual Patterns
- Gradient text on host name: bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent
- Decorative blur elements: absolute positioned rounded-full bg-white/10 blur-2xl
- Play button overlay on featured episode: absolute inset-0 with flex-center, primary-600 bg, rounded-full
- Star ratings: 5x yellow-400 star SVGs in a flex row
- Social icons: rounded-lg bg-gray-800 buttons with SVG icons
- Carousel: overflow-hidden container, flex row of slides, transition-transform
- FAQ: overflow-hidden div with max-height transition (0px → scrollHeight)

### Responsive Breakpoints
- Mobile-first design
- Nav: hidden lg:flex
- Grid columns: stack on mobile → 2-col sm → 3-col lg → 4-col lg
- Mobile CTA: visible below lg, hidden lg+
- Carousel arrows: hidden below lg, flex lg+

### Component Architecture
- Each section is a standalone component in src/components/
- No shared state between sections
- Forms use basic HTML form elements (no external form library needed for this template)
- Carousel state managed with useState for current index
- FAQ state managed with useState for open index (or Set for multiple)
- BackToTop and ScrollProgress use useEffect with scroll listener
