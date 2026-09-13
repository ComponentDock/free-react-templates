# Netcraft — Implementation Tasks & Design Notes

Source: ColorLib Portech (https://colorlib.com/wp/template/portech/)
Preview: https://preview.colorlib.com/theme/portech/
New name: netcraft

## Section Order (12 sections, top-to-bottom)

1. TopBar — phone + email links, social icons (Facebook, Twitter, Instagram, Dribbble), dark bg
2. Navbar — brand "Netcraft" (Arizonia font), nav links (Home, About, Services, Portfolio, Blog, Contact), dark bg, hamburger on mobile
3. Hero — full-viewport slider (2 slides), dark overlay on bg images, video play button, subheading + heading + description + 2 CTA buttons (primary + white/outline)
4. Services — light bg (#f8f9fa), 4-column grid: UX/UI Design, Development, Branding, Search Optimization. Each card: icon (flaticon → lucide-react), heading, description, circular arrow button
5. About — split layout: left = background image with "42 Years Experienced" counter overlay + smaller inset image; right = subheading + heading + description + 2 feature items (Expert Team, Solution For Business) with icons
6. Counter — dark parallax bg (#141b25 overlay), 4 stats with flaticon icons + animated numbers: Project Completed (4800), Our Staff (1000), Services Provide (350), Happy Customers (7650)
7. Portfolio — light bg, heading "Recent Portfolio" / "Our Exceptional Quality Work", 3-column grid of 6 project cards. Each: bg image, category label, title, arrow link
8. FAQ — split: left = image + 2 feature items (Creative Ideas, Better Strategy); right = accordion with FAQ questions + expand/collapse answers
9. Testimony — light bg, carousel of 5 testimonial items. Each: circular avatar, quote, name, role
10. Blog — light bg, 3 blog entry cards. Each: date badge (day + month), image, title, description
11. Newsletter — parallax bg image, heading "Subscribe to our Newsletter", description, email input + Subscribe button
12. Footer — dark bg, brand "Netcraft", description, social icons, 4-column nav, Component Dock link

## Key Design Decisions

- **Fonts**: Google Fonts "Roboto" (body/headings) + "Arizonia" (brand logo). Load via `<link>` in index.html
- **Icons**: Replace flaticon spans with lucide-react equivalents
- **Colors in @theme**:
  - `--color-brand`: #4986fc (primary blue)
  - `--color-brand-dark`: #207ce5 (darker blue)
  - `--color-accent-purple`: #6f4be8
  - `--color-accent-teal`: #28df99
  - `--color-navy`: #141b25
  - `--color-light`: #f8f9fa
- **Buttons**: Square corners (radius 0), Bootstrap-style. Primary = blue fill, White = white fill with dark text on hero. Arrow buttons = circular with icon.
- **Counter animation**: Use IntersectionObserver + requestAnimationFrame for number count-up
- **Hero slider**: Implement as a React carousel (manual state management, no external lib needed) or simple crossfade
- **FAQ accordion**: Controlled expand/collapse with React state
- **Testimonial carousel**: Auto-rotating with dot indicators

## Component Structure

```
src/
  main.tsx
  App.tsx
  index.css            (Tailwind entry + @theme tokens)
  components/
    TopBar.tsx
    Navbar.tsx
    Hero.tsx
    Services.tsx
    About.tsx
    Counter.tsx
    Portfolio.tsx
    FAQ.tsx
    Testimonial.tsx
    Blog.tsx
    Newsletter.tsx
    Footer.tsx
  test/
    setup.ts
```

## Fidelity Notes

- Match the exact section order from the ColorLib source (verified via preview DOM)
- Hero has 2 slides — implement both with different copy and bg images (picsum placeholder)
- About section year counter: animated number "42" counting up on scroll
- Counter stats: animated numbers counting up when in viewport
- Portfolio cards: hover state reveals title overlay on bg image
- FAQ: first item expanded by default, others collapsed
- Testimony: 5 items in auto-rotating carousel
- Footer MUST link componentdock.com
- No ColorLib references in any app file
