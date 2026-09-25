# Byliner — Implementation Notes

Source: ColorLib Author (https://colorlib.com/wp/template/author/)
Preview: https://preview.colorlib.com/theme/author/
New name: byliner

## Task Checklist

1. [ ] Scaffold app: copy simplest existing app, rename to `byliner`
2. [ ] Configure `vite.config.ts` with `injectUiSource()`
3. [ ] Set up `index.css` Tailwind theme tokens (Open Sans, Raleway, brand green #17b978)
4. [ ] Build Navbar component
5. [ ] Build Hero section (split layout, overlay, SVG illustration placeholder)
6. [ ] Build Partners section (5 logo placeholders)
7. [ ] Build About section (split image/text, 3 feature items)
8. [ ] Build Counter section (dark bg, 4 animated stats)
9. [ ] Build Chapter navigator (sidebar nav + content switcher)
10. [ ] Build Services section (3 cards)
11. [ ] Build Testimonials section (carousel, parallax bg, green overlay)
12. [ ] Build Book Gallery section (grid of covers with hover overlay)
13. [ ] Build Author Bio section (split layout, info list)
14. [ ] Build Contact section (info cards + form + map placeholder)
15. [ ] Build Footer (black bg, social, links, Component Dock)
16. [ ] Write App.tsx composing all sections
17. [ ] Write tests (100% coverage)
18. [ ] Public/CNAME + homepage config
19. [ ] Verify: typecheck + lint + test:coverage + build

## Section-by-Section Fidelity Notes

### Navbar
- Transparent absolute navbar, collapses to hamburger
- Logo: "Author." with green dot `<span class="text-green">.</span>`
- 7 nav links, smooth scroll to section IDs
- Mobile: toggle button, vertical menu

### Hero
- Split: left text (40%), right SVG illustration (60%)
- Dark overlay at 50% opacity
- Height ~750px
- Subheading in small caps, green color
- CTA: green button (not Bootstrap blue — use brand #17b978)

### Partners
- Simple flex row of 5 partner logo placeholders
- Use grayscale placeholder images or SVG logo shapes

### About
- 50/50 split: left = bg image with overlay, right = text on light bg
- "About The Book" h2, description, 3 sub-sections each with h4 + p

### Counter
- Full-width dark background (#000000)
- 4 stat cards in a row: each has large number + label
- Numbers animate counting up when scrolled into view (use IntersectionObserver)

### Chapter Navigator
- Left sidebar (col-3): vertical nav list with 8 chapter links
- Right content area (col-9): light bg cards showing chapter text
- Clicking a sidebar link highlights it and shows the corresponding content
- Use React state to track active chapter

### Services
- Heading with subheading label
- 3 equal-width cards, each with: icon (lucide-react), h3 title, p description
- Light background cards

### Testimonials
- Parallax background image with semi-transparent green overlay (#17b978)
- Carousel of quote cards: quote icon (fa-quote-left), text, person image, name, position
- Can use a simple auto-rotating carousel or static card layout

### Book Gallery
- Heading "My Other Books" with subheading "Projects"
- 4-column grid of book cover cards
- Each card: background image, dark overlay, hover reveals title + genre
- Use picsum.photos for cover images

### Author Bio
- 50/50 split: left = author portrait bg image, right = text on light bg
- Name as h2, bio paragraph, ul with 6 info items (label: value pairs)
- "View All Books" button with number counter

### Contact
- Heading "Contact Me" with description
- 4 info cards in a row (col-md-6 col-lg-3): icon, title, detail
- Contact form: 4 fields (name, email, subject, message textarea) + submit
- Map placeholder (div with bg color) beside form

### Footer
- Solid black background
- 3 columns: About + social icons, Links list, Newsletter (optional)
- Bottom bar with copyright + Component Dock link
- Social icons: Twitter, Facebook, Instagram (use lucide-react)

## Design Token Mapping (Tailwind @theme)

```
--color-brand: #17b978
--color-brand-dark: #159e67
--color-surface-light: #f8f9fa
--color-surface-lavender: #f5f4fb
--color-text-body: #6a7695
--color-text-heading: #000000
--color-footer-bg: #000000
--color-footer-text: #ffffff
--color-footer-muted: rgba(255,255,255,0.6)
--font-family-heading: 'Raleway', sans-serif
--font-family-body: 'Open Sans', sans-serif
```
