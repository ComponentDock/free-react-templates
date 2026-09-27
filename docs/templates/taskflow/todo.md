# TaskFlow — Implementation Notes

Source: ColorLib "Work" — https://colorlib.com/wp/template/work/
Preview: https://preview.colorlib.com/theme/work/
New name: taskflow

## Structure order (sections in App.tsx)

1. Sidebar (fixed left, toggleable on mobile)
2. HeroSlider (full-height, 3 slides with overlay)
3. About (images + description + accordion)
4. Services (6 expertise cards, 2-column)
5. Work (6 project cards, 2-column grid with overlays)
6. Blog (3 blog cards, 3-column)
7. CTA (Get in Touch section)

## Section-by-section fidelity notes

### Sidebar
- Fixed left, white background, 20% width (80% main content area)
- Logo: black box, white uppercase text "TaskFlow", letter-spacing 10px
- Nav: uppercase, 12px, letter-spacing 1px, right-aligned
- Active nav item: black text with underline
- Footer: copyright text + social icons (Facebook, Twitter, Instagram, LinkedIn)
- Mobile: slides off-screen, hamburger toggle (translateX(-270px) default)

### Hero Slider
- Full viewport height slider (use embla or similar for React)
- 3 slides, each with: background image (picsum), dark overlay (.overlay div), centered content
- Content: h1 headline + h2 subtitle + "Learn More" CTA button (outlined style)
- Slider navigation dots

### About
- Left column (col-md-6): Two overlapping images with slight offset (about-img + about-img-2)
- Right column (col-md-6): heading-meta "Welcome & Introduce", h3 name, paragraph
- Accordion below description: 3 panels expand/collapse (use native details/summary or custom)
  - "Why choose me?" — 2-column text layout
  - "What I do?" — paragraph + bullet list
  - "My Specialties" — paragraph

### Services
- Centered header: meta "What I do?", heading "Here are some of my expertise"
- 6 feature cards in 2x3 grid (col-md-6 each)
- Each card: icon (use lucide-react), h3 title, description paragraph
- Services: Branding, Web Design, SEO, Web Development, UI, Help & Support

### Work / Portfolio
- Centered header: meta "My Work", heading "Recent Work"
- 6 project cards in 2-column grid (col-md-6 each)
- Each card: background image (picsum), dark overlay, desc with con (title, category, metrics)
- Metrics: share icon, eye icon + count, heart icon + count
- Categories: Branding, Illustration, Logo, Web

### Blog
- Centered header: meta "Read", heading "Recent Blog"
- 3 blog cards in 3-column grid (col-md-4 each)
- Each card: image, metadata line (date | category | comment count), h3 title, excerpt, "Read More" link

### CTA
- Light gray background (#fafafa)
- Narrow content container
- Heading: "Get in Touch!"
- Description paragraph
- "Contact me!" button (primary style)

## Design tokens to apply in index.css @theme

```
--color-brand: #F75940;
--color-brand-hover: #f86e58;
--font-heading: "Quicksand", Arial, sans-serif;
--font-body: "Quicksand", Arial, sans-serif;
```

## Component list

- Sidebar.tsx
- HeroSlider.tsx
- About.tsx
- Accordion.tsx (reusable)
- Services.tsx
- ServiceCard.tsx
- Work.tsx
- ProjectCard.tsx
- Blog.tsx
- BlogCard.tsx
- CTA.tsx
