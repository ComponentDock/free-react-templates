# Photon — Implementation Todo & Design Notes

## Source
- ColorLib "Atomic": https://colorlib.com/wp/template/atomic/
- Preview: https://preview.colorlib.com/theme/atomic/
- Screenshot: atomic-free-template.jpg

## Section order (1:1 fidelity)

1. **Navbar** — transparent bg (desktop), blue bg (mobile), logo "Photon",
   nav links: Home, About, Services, Gallery, Blog, Contact, dark-mode toggle.
   Hamburger on mobile.

2. **Hero/Cover** — full-width background image (seeded picsum), two-column
   layout: left = heading "Design a better website template." + lead para +
   "Free Download" btn (blue, uppercase, square corners); right = circular
   play-video button (80px, border, grows on hover).

3. **Feature Icons** — 3-column row, each: Ionicons-style icon (use lucide),
   h3 title, short paragraph. Titles: "Intuitive Thinking", "Orange for Carrots",
   "Infinite Posibilities".

4. **Image Gallery** — heading "Good Design is a Good Start" centered,
   6 image tiles in 2-col mobile / 3-col desktop grid. Each tile is 500px
   tall with cover-fit image, hover overlay darkens to 0.5 opacity, title
   text slides up on hover.

5. **Services Grid** — light bg (#f8f9fa), 2-col mobile / 3-col desktop,
   6 items: icon + h3 title + paragraph. Titles: "Regular Update",
   "Infinite Possibilities", "Good Security", "Orange for Carrots",
   "Intuitive Thinking", "Play Video".

6. **Counter Bar** — blue bg (#0389FF), 3 columns, each: large animated
   number (50px, white) + uppercase label (opacity 0.5). Counts:
   "Lines of Codes", "Number of Projects", "Number of Clients".

7. **Testimonials** — white bg, centered quotes in large italic text,
   3 testimonial paragraphs (can be a simple static list or carousel).

8. **Footer** — light bg (#f8f9fa), 4-column layout: About (blurb),
   Learn More (4 links), Support (4 links), About Us (4 links).
   Bottom row: copyright + "Connect With Us" social icons.
   Footer MUST link to Component Dock.

## Design tokens

| Token              | Value                                |
|--------------------|--------------------------------------|
| Brand blue         | #0389FF                              |
| Hover blue         | #36a1ff / #0075dc                   |
| Body text          | #999999                              |
| Headings           | #000                                 |
| Light bg           | #f8f9fa                              |
| Icon color         | #d6dadd                              |
| Footer widget hdr  | #cccccc                              |
| Font               | Work Sans (300, 400, 700)           |
| Button radius      | 0 (square)                           |
| Button style       | uppercase, 14px, letter-spacing 0.1em|
| Play button        | circular 80px, 2px border, 50% radius|
| Counter bg         | #0389FF, white text                  |
| Section padding    | 7em 0                                |

## Component notes

- Use `lucide-react` icons: Lightbulb, Leaf/Nutrition, Infinity for features;
  RotateCw/RefreshCw, Shield, Heart, Play for services; custom counter.
- Play button: inline-flex, w-20 h-20, rounded-full, border-2, centered play
  icon; hover: scale up slightly.
- Gallery tiles: relative container, overflow-hidden, img with object-cover,
  overlay div with transition (opacity 0→0.5 on hover, title slides up).
- Counter: use a simple counting animation hook (useEffect + setInterval).

## Implementation steps

1. Scaffold `apps/photon` (copy simplest app, rename package)
2. Write Navbar component
3. Write Hero component (with play button)
4. Write FeatureIcons component (3 cards)
5. Write Gallery component (6 tiles with hover)
6. Write Services component (6-item grid)
7. Write CounterBar component (animated numbers)
8. Write Testimonials component (quotes)
9. Write Footer component (4-column links)
10. Compose in App.tsx
11. Write tests (Vitest + RTL) for each component
12. Verify 100% coverage
13. Build and typecheck
