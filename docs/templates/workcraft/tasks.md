# WorkCraft — Implementation Notes

Source: ColorLib Work → https://preview.colorlib.com/theme/work/
New name: workcraft
Category: Portfolio (TEMPLATES.md line 2579)

## Section Order (top → bottom)

1. Navbar (transparent overlay, hamburger mobile)
2. Hero Slider (3 slides, auto-cycle, pill CTA)
3. About / Welcome (persona intro + "Why choose me?")
4. What I Do (service overview)
5. Specialties (detail section)
6. Expertise Grid (6 items: Branding, Web Design, SEO, Web Dev, UI, Help)
7. Portfolio / Work (6 project thumbnails, hover overlay)
8. Blog (3 post cards)
9. Contact (CTA section)
10. Footer (dark, copyright, Component Dock link)

## Design Tokens (from live preview CSS)

- Brand accent: #F75940 (red-orange — CTAs, links, highlights)
- Brand accent light: #f86e58 (hover variant)
- Text dark: #333333
- Text medium: #666666
- Text light: #999999
- Background: #ffffff (white) / #fafafa (light gray sections)
- Border: #e6e6e6
- Font: "Quicksand", sans-serif (single font for everything)
- Button radius: 30px (pill shape)
- Card radius: 4px
- Footer: dark with rgba(0,0,0,0.6) overlay

## Component Outline

### App.tsx
- Compose all 10 section components in order

### components/Navbar.tsx
- Transparent/overlay navbar (absolute positioned over hero)
- Logo text "WorkCraft" with possible split-styling
- Desktop: horizontal nav links
- Mobile: hamburger toggle (lucide-react Menu/X)
- Becomes sticky/solid on scroll (optional enhancement)

### components/HeroSlider.tsx
- Full-width slider with 3 slides
- Each slide: background image (picsum placeholder), heading, subtext, "Learn More" pill CTA
- Use simple state-based carousel (prev/next + auto-advance)
- Slide 1: "Strategic Design for Brands"
- Slide 2: "Creators of Brands Template"
- Slide 3: "Design & develop functional sites"

### components/About.tsx
- "Welcome & Introduce" heading
- Persona intro paragraph ("Hola! my name is Louie Jie!")
- "Why choose me?" sub-section with descriptive text
- Optional: avatar/profile image (picsum)

### components/WhatIDo.tsx
- "What I do?" heading
- Brief intro text
- 2-3 key service points

### components/Specialties.tsx
- "My Specialties" heading
- Descriptive text about specialties
- Visual elements or icons

### components/ExpertiseGrid.tsx
- "Here are some of my expertise" heading
- 6 items in 2×3 grid: Branding, Web Design, SEO, Web Development, UI, Help & Support
- Each: lucide icon + title + description paragraph

### components/Portfolio.tsx
- "My Work" / "Recent Work" heading
- 6 project thumbnails in 3×2 grid
- Each: image (picsum), category labels, stats
- Hover overlay with project details

### components/BlogPosts.tsx
- "Recent Blog" heading
- 3 blog post cards in a row
- Each: image, date, category tag, comment count, title, excerpt, "Read More" link

### components/Contact.tsx
- "Get in Touch!" heading
- Brief descriptive text
- "Contact me!" CTA button (pill, red-orange)

### components/Footer.tsx
- Dark footer with copyright text
- "Made with Component Dock" link → https://www.componentdock.com/

## Fidelity Notes

- Clean, minimalist personal portfolio — heavy on whitespace
- Single font (Quicksand) throughout — no font mixing
- Red-orange (#F75940) is the only accent color — use sparingly
- Hero slider uses FlexSlider in original — implement with simple state carousel
- Portfolio thumbnails have hover overlays with details
- Blog cards have date + category + comment count metadata
- The overall aesthetic is light/airy with generous spacing
- Contact section is minimal — just heading + CTA button

## Files to Create

- `apps/workcraft/` — full Vite + React app
- `apps/workcraft/public/CNAME` — `workcraft.free.componentdock.com`
- `apps/workcraft/package.json` — `@free-react-templates/workcraft`
- `apps/workcraft/vite.config.ts` — with injectUiSource()
- `apps/workcraft/src/App.tsx` — compose all sections
- `apps/workcraft/src/components/` — all 10 section components
- `apps/workcraft/src/index.css` — Tailwind entry + theme tokens
- `apps/workcraft/src/main.tsx` — entry point
- `apps/workcraft/src/test/setup.ts` — jest-dom import
- `apps/workcraft/src/**/*.test.tsx` — Vitest + RTL tests (100% coverage)
