# CoursePlex — Implementation Todo

**Source:** ColorLib Edusite (https://preview.colorlib.com/theme/edusite/)
**Name:** courseplex
**Category:** Education

## Section Order & Fidelity Notes

1. **Navbar** (`Navbar.tsx`)
   - Transparent background over hero, dark bg on scroll (use IntersectionObserver or scroll listener)
   - Logo left, nav links right (Home, About, Courses, Blog, Contact)
   - Mobile: hamburger toggle with slide-down menu
   - Fidelity: match transparent-to-solid transition; nav links are simple `<a>` tags

2. **Hero** (`Hero.tsx`)
   - Full-width section with parallax background image (use `picsum.photos/seed/courseplex-hero/1920/1080`)
   - Gradient overlay: `linear-gradient(to bottom, #374050, #798696)`
   - Left-aligned content (col-md-8): h1 heading + lead paragraph + pill CTA button
   - Fidelity: keep left-aligned layout, don't center the content

3. **About** (`About.tsx`)
   - Two-column: left = section header + 3 feature items; right = about image
   - Features: icon (lucide-react: Flask/Beaker, Users, MessageCircle) + h4 title + paragraph
   - Section header: h2 "Welcome to CoursePlex" + lead paragraph
   - Fidelity: features stacked vertically in left column, image right

4. **Courses** (`Courses.tsx`)
   - Section header centered + 4-column responsive grid of 8 course cards
   - Each card: image thumbnail (link overlay icon), title link, category label, price badge
   - Price badges: "Free" (bg #FF6700) and "Premium" (subtle style)
   - "More Courses" centered button below grid
   - Fidelity: 8 cards total, 2 rows of 4 on desktop

5. **CallToAction** (`CallToAction.tsx`)
   - Parallax bg with gradient overlay, left-aligned content
   - Heading + lead paragraph + pill "Get Started!" button
   - Fidelity: same overlay pattern as hero, left-aligned

6. **WhyUs** (`WhyUs.tsx`)
   - Section header centered + 3-column feature grid
   - Same feature pattern as About (icon + h4 + paragraph)
   - Features: Online Courses, Expert Teachers, Community
   - Fidelity: 3 equal columns on desktop

7. **ContactCta** (`ContactCta.tsx`)
   - Parallax bg with gradient overlay, centered content (col-md-8 centered)
   - "Contact Us" heading + lead + pill "Contact Us Now" button
   - Fidelity: this one is centered (unlike hero/CTA which are left-aligned)

8. **Footer** (`Footer.tsx`)
   - Dark bg (#374050)
   - Top row: logo left, nav links right
   - Bottom row: copyright left, social icon circles right
   - Social icons: lucide-react (Facebook, Twitter, Instagram, Youtube, Linkedin)
   - MUST include "Component Dock" link (not ColorLib)
   - Fidelity: match the two-row layout with social circles

## Design Token Reference (for index.css @theme)

```
--color-primary: #FF6700;      /* orange accent */
--color-dark: #374050;         /* headers, footer bg */
--color-body: #798696;         /* body text */
--color-border: #EBEBEB;       /* card borders, dividers */
--font-heading: 'Montserrat', sans-serif;
--font-body: 'Lato', sans-serif;
--radius-button: 40px;         /* pill shape */
--radius-card: 4px;            /* course cards */
```

## Component Dependencies

- Uses `packages/ui` components where possible (Button, ButtonLink, SectionHeader, Card patterns)
- Icons from `lucide-react` (replacing FontAwesome)
- Images from `picsum.photos` with deterministic seeds
- Google Fonts loaded via `<link>` in index.html

## Notes

- Original uses Bootstrap grid → convert to Tailwind grid/flex
- Parallax backgrounds: use `background-attachment: fixed` or Tailwind's `bg-fixed`
- Course card hover: icon overlay slides in on hover (CSS transition)
- Footer social icons: circle style with border, hover fills with icon color
