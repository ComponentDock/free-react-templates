# Arco — Implementation Notes

Source: ColorLib "Balay" — https://colorlib.com/wp/template/balay/
Preview: https://preview.colorlib.com/theme/balay/
Package: @free-react-templates/arco

## Structure order (top to bottom)

1. Sidebar (Navbar on mobile)
2. Hero Slider
3. About
4. Services
5. Counters (parallax)
6. Portfolio / Work
7. Blog
8. CTA "Get in Touch"
9. Footer (inside sidebar on desktop; standalone on mobile)

## Component breakdown

| Component       | Notes                                                               |
| --------------- | ------------------------------------------------------------------- |
| Sidebar.tsx     | Fixed left panel; logo, nav links with active state; social icons;  |
|                 | mobile hamburger toggle + overlay                                    |
| HeroSlider.tsx  | Auto-cycling image slides; full-height; yellow text box bottom-right;|
|                 | use picsum.photos with seeds like arco-hero-1, arco-hero-2, etc.    |
| About.tsx       | Two-col: bg image left + text right; 3 value cards below            |
| Services.tsx    | Two-col: 4 feature items (icon+title+desc) left + 5 service cards  |
|                 | (image+overlay) in 2-col grid right                                 |
| Counters.tsx    | Parallax bg with overlay; 4 stat columns with animated counters     |
|                 | Use IntersectionObserver to trigger count-up                        |
| Portfolio.tsx   | Asymmetric grid (6 cards); hover overlay with share/eye/heart       |
| Blog.tsx        | 3-col grid of blog cards; image + meta + title + excerpt            |
| CtaSection.tsx  | Yellow bg, heading, lead text, button                               |

## Design fidelity notes

### Sidebar
- Original: fixed left sidebar, 20% width desktop, slides in from left on
  mobile. Dark charcoal (#2C2C2C) background. Logo top-right aligned within
  sidebar. Nav links: uppercase, 12px, letter-spacing 1px, white 50% opacity
  default, brand yellow active with underline animation.
- Implementation: Use Tailwind `fixed left-0 top-0 h-full w-1/5` on desktop,
  `w-full -translate-x-full` on mobile with toggle. Use `cn()` for states.
- Social icons in footer area at bottom of sidebar.

### Hero Slider
- Original: Flexslider plugin, full-height, background images with dark
  overlay. Yellow text box positioned bottom-right with padding. Heading
  44px light weight (300), subheading 18px light. Button: uppercase, 12px,
  letter-spacing 2px, no border-radius.
- Implementation: Simple auto-cycling slider with CSS transitions. Use
  `picsum.photos/seed/arco-hero-{n}/1920/1080` for images.
- Text box: `bg-[#FFC300] p-8 absolute bottom-0 right-0`.

### About
- Original: Left column has a large background image. Right column has
  "Welcome" meta label (small uppercase), "Who we are" heading, two
  paragraphs, then 3 value cards in a row with checkmark icons and text.
- Value cards: icon in a circle/span, heading text, active state (first
  card has `active` class with brand color accent).
- Animations: fadeInLeft on scroll (use IntersectionObserver + Tailwind
  animate or framer-motion).

### Services
- Original: Left side has 4 feature items stacked vertically, each with
  a Flaticon icon + title + description. Right side has 5 image cards in
  a staggered 2-column grid (3 in left col, 2 in right col offset down).
- Feature icons: Use `lucide-react` equivalents (HardHat, PenTool,
  Box, Crane or similar).
- Service cards: background image with dark overlay + title at bottom.

### Counters
- Original: Parallax background image with dark overlay. 4 columns each
  with: icon, animated number (count from 0 to target), label.
- Numbers: Projects=1539, Employees=3653, Constructors=5987, Partners=3999.
- Use IntersectionObserver to trigger count-up animation. Implement with
  `requestAnimationFrame` for smooth animation.
- Counter icons: Use lucide-react (Building2, Users, HardHat, Handshake).

### Portfolio / Work
- Original: 6 project cards in asymmetric grid. First card is 2-col wide,
  next two are 1-col each, etc. Each card has bg image, dark overlay on
  hover showing title, category, and 3 icon links (share, eye count,
  heart count).
- Grid: `grid grid-cols-4 gap-4` with first/last items spanning 2 cols.
- Hover: opacity transition on overlay with title, category, stats.
- Images: `picsum.photos/seed/arco-work-{n}/800/600`.

### Blog
- Original: 3 cards in a row. Each has: image at top, small meta text
  (date | category | comment icon + count), title link, excerpt paragraph.
- Use `picsum.photos/seed/arco-blog-{n}/600/400` for blog images.
- Meta text: small, gray (#999999), separated by pipes.

### CTA ("Get in Touch")
- Original: Yellow (#FFC300) background. Heading "Get in Touch!", lead
  text paragraph, "Contact me!" button.
- Button: white bg, black text, uppercase, no border-radius.
- This section sits at the bottom of the main content area.

### Animations
- Original uses Animate.css `fadeInLeft` triggered by Waypoints.js on scroll.
- Implementation: Use IntersectionObserver to add a CSS class when sections
  enter viewport. Use Tailwind `animate-fade-in-left` or define custom keyframes.
- All sections with `animate-box` class should animate on scroll entry.

### Images (all via picsum.photos)
| Purpose       | Seed pattern              | Size       |
| ------------- | ------------------------- | ---------- |
| Hero slides   | arco-hero-1,2,3           | 1920×1080  |
| About image   | arco-about                | 800×600    |
| Service cards | arco-service-1..5         | 600×400    |
| Counter bg    | arco-counter-bg           | 1920×800   |
| Portfolio     | arco-work-1..6            | 800×600    |
| Blog          | arco-blog-1..3            | 600×400    |

## Implementation priority

1. Sidebar + responsive toggle (mobile nav)
2. Hero slider
3. About section
4. Services section
5. Counters with animation
6. Portfolio grid
7. Blog grid
8. CTA section
9. Animations + polish
10. Tests (100% coverage)
