# Jotline — Implementation Todo & Design Notes

## Source
- **ColorLib:** Jackson
- **Preview:** https://preview.colorlib.com/theme/jackson/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/jackson-free-personal-resume-website-template.jpg

## Structure Order (section-by-section)

1. **Sidebar** — fixed left 280px panel; profile image (circular 120px), name, position, 9 nav links, dark mode toggle, footer with social icons
2. **Hero** — full-viewport slider (FlexSlider replacement); two slides with bg images + dark overlay + centered text + CTA buttons
3. **About** — "Who Am I?" heading + bio text + 4-column service badges (icon + label) + hire CTA banner (primary bg, white text)
4. **Services** — "Here are some of my expertise" heading + 6 service cards (3-col grid): icon + title + description
5. **Skills** — "My Skills" heading + intro text + 6 progress bars (2-col): label + animated bar + percentage
6. **Education** — "Education" heading + 3-item accordion (Bootstrap 5 style): title button + expandable body
7. **Experience** — "Work Experience" heading + centered timeline with 4 alternating entries: icon + title + date + description
8. **Work** — "Recent Work" heading + category filter bar + 6 portfolio items (2-col grid): bg image + overlay + title + category + stats
9. **Blog** — "From the Blog" heading + 1 featured card + 2 horizontal cards: image + category + date + title + read link
10. **Contact** — "Contact" heading + left col (3 info items: email, address, phone with icons) + right col (form: name, email, subject, message, send button)

## Key Design Decisions

- **Sidebar pattern:** Use a fixed sidebar component that switches to offcanvas on mobile (<768px). Desktop: always visible, 280px wide, `bg-secondary` background.
- **Dark mode:** Use `data-bs-theme` attribute toggle on `<html>`. Store preference in localStorage. CSS custom properties swap automatically via `[data-bs-theme="dark"]` selector.
- **Timeline:** Custom CSS centered timeline with alternating left/right entries. Use a vertical line (`::before`/`::after`) with circular icons at each entry point.
- **Accordion:** Use Bootstrap 5 accordion pattern (or replicate with React state + ARIA attributes).
- **Portfolio filter:** Category-based filtering with `data-category` attributes. Use React state to toggle visibility.
- **Progress bars:** Animated on scroll using Intersection Observer. Animate width from 0 to target percentage.
- **Slider:** Replace FlexSlider with a simple React-based carousel or CSS-only approach. Two slides with auto-rotation.

## Component Architecture

```
src/
  App.tsx              — Main layout: Sidebar + Content wrapper
  components/
    Sidebar.tsx        — Fixed sidebar (profile, nav, dark toggle, footer)
    MobileSidebar.tsx  — Offcanvas mobile version
    Hero.tsx           — Full-height slider with slides
    About.tsx          — Bio + service badges + hire CTA
    Services.tsx       — Expertise cards grid
    Skills.tsx         — Progress bars
    Education.tsx      — Accordion
    Experience.tsx     — Centered timeline
    Work.tsx           — Portfolio grid with filter
    Blog.tsx           — Blog cards (featured + horizontal)
    Contact.tsx        — Info column + form
    DarkModeToggle.tsx — Sun/moon toggle button
  index.css            — Tailwind + @theme tokens
```

## Fidelity Notes

- The original uses Bootstrap 5 grid system. In React/Tailwind, replicate the column layout with Tailwind grid/flex utilities.
- Original uses icomoon icon font. Replace with lucide-react icons.
- Original uses animate.css for scroll animations. Consider framer-motion or CSS-only animations.
- The "hire" CTA banner uses primary blue bg with white text and semi-transparent white border button.
- All service/skill/timeline icons use a single accent color (#0066ff), not per-item colors.
- Blog section has a specific layout: one large featured card on left, two smaller horizontal cards stacked on right.
- Footer in sidebar: copyright text + 4 social icon links. Replace ColorLib attribution with Component Dock link.

## Placeholder Images

- Hero backgrounds: `https://picsum.photos/seed/jotline-hero-1/1920/1080` and `https://picsum.photos/seed/jotline-hero-2/1920/1080`
- Profile image: `https://picsum.photos/seed/jotline-profile/240/240`
- Portfolio items: `https://picsum.photos/seed/jotline-work-1/600/400` through `jotline-work-6`
- Blog images: `https://picsum.photos/seed/jotline-blog-1/800/500` through `jotline-blog-3`
