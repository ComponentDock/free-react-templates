# Junction — Implementation Guide

Recreation of ColorLib "Jackson" personal resume template.

## Source

- ColorLib slug: `jackson`
- Preview: https://preview.colorlib.com/theme/jackson/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/jackson-free-personal-resume-website-template.jpg

## Design notes

### Layout

- **Desktop:** Fixed left sidebar (~280px wide) + scrollable main content area
- **Mobile:** Full-width stacked layout with offcanvas sidebar (hamburger trigger)
- Main content sections each use `colorlib-narrow-content` wrapper (max-width container)

### Color palette

- Brand primary: `#0066ff` (light) / `#4d9fff` (dark)
- Background: white/light gray (light) / near-black (dark)
- Dark gradient overlay on hero: `linear-gradient(135deg, rgba(0,0,0,0.75), rgba(0,0,0,0.55))`
- Counter section: parallax background image with dark overlay

### Typography

- Font: Inter (Google Fonts), fallback to system sans-serif
- Section headings: `colorlib-heading` class — bold, uppercase, centered
- Body text: regular weight, muted color

### Component order (build in this order)

1. **Sidebar** (`Sidebar.tsx`)
   - Fixed left panel, avatar circle, name, title, social icons, nav links
   - Highlights active section based on scroll position
   - Mobile: offcanvas overlay with hamburger trigger

2. **Hero** (`Hero.tsx`)
   - Full-viewport height section
   - Background image with gradient overlay
   - Centered text: name heading + tagline
   - Two CTA buttons (Download CV, View Portfolio)
   - Optional: simple image fade transition

3. **About** (`About.tsx`)
   - Heading "Who Am I?"
   - Intro paragraph
   - 4-column grid of expertise cards (icon + title)

4. **Counter** (`Counter.tsx`)
   - Parallax background image section
   - 4 stat counters in a row
   - Animated count-up on scroll into view

5. **Services** (`Services.tsx`)
   - Heading "Here are some of my expertise"
   - 2x3 responsive grid of icon + title + description cards

6. **Skills** (`Skills.tsx`)
   - Heading "My Skills"
   - 6 horizontal progress bars with labels and percentages

7. **Education** (`Education.tsx`)
   - Heading "Education"
   - 5 timeline items (degree, institution, date)
   - Vertical timeline with dots/connectors

8. **Experience** (`Experience.tsx`)
   - Heading "Work Experience"
   - 5 timeline items (role, company, date)
   - Same timeline pattern as Education

9. **Work** (`Work.tsx`)
   - Heading "Recent Work"
   - 6-item responsive grid (2 or 3 columns)
   - Hover overlay with project title

10. **Blog** (`Blog.tsx`)
    - Heading "From the Blog"
    - 3 blog cards in a row
    - Each: image, date, title, excerpt, "Read More" link

11. **Contact** (`Contact.tsx`)
    - Heading "Contact"
    - Contact info (email, address, phone)
    - Contact form (name, email, subject, message, submit)
    - Validate with zod + react-hook-form

12. **Footer** (`Footer.tsx`)
    - Simple footer with Component Dock link

### Key implementation details

- Use `packages/ui` components where possible: `Button`, `ButtonLink`, `cn()`
- Avatar image: `https://picsum.photos/seed/junction-avatar/200/200`
- Work gallery images: `https://picsum.photos/seed/junction-work-<n>/600/400`
- Blog images: `https://picsum.photos/seed/junction-blog-<n>/600/400`
- Counter animation: use `useInView` hook + `useEffect` for count-up
- Scroll spy for active nav: `IntersectionObserver` on each section
- Theme toggle: `dark` class on `document.documentElement`, persist to localStorage
- Icons: `lucide-react` (Monitor, Code, Palette, Lightbulb, etc.)
- Timeline: custom component with dots, vertical line, and alternating layout

### Tailwind theme tokens (index.css)

```css
@theme {
  --color-brand: #0066ff;
  --color-brand-light: rgba(0, 102, 255, 0.08);
  --color-brand-hover: #0052cc;
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 14px;
  --radius-full: 9999px;
}
```

Dark mode overrides via `.dark` class:
```css
.dark {
  --color-brand: #4d9fff;
  --color-brand-light: rgba(77, 159, 255, 0.12);
  --color-brand-hover: #6aadff;
}
```

## Tasks / TODO

- [ ] Create app scaffold (copy from simplest existing app, rename)
- [ ] Set up Tailwind theme tokens in `index.css`
- [ ] Implement `Sidebar` component (fixed left panel, nav, avatar)
- [ ] Implement `Hero` component (full-viewport, gradient overlay, CTAs)
- [ ] Implement `About` component (intro + 4 expertise cards)
- [ ] Implement `Counter` component (parallax bg, 4 animated counters)
- [ ] Implement `Services` component (6 icon cards in grid)
- [ ] Implement `Skills` component (6 progress bars)
- [ ] Implement `Education` component (5-item timeline)
- [ ] Implement `Experience` component (5-item timeline)
- [ ] Implement `Work` component (6-item gallery grid with hover)
- [ ] Implement `Blog` component (3 blog cards)
- [ ] Implement `Contact` component (info + form with validation)
- [ ] Implement `Footer` component (Component Dock link)
- [ ] Implement theme toggle (dark/light)
- [ ] Implement scroll spy (active nav highlight)
- [ ] Add Google Fonts link for Inter in index.html
- [ ] Write tests (100% coverage)
- [ ] Run `scripts/verify-app.sh junction`
- [ ] Update TEMPLATES.md, commit, push
