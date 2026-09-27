# Laborline — Design Notes & Task Outline

Source: ColorLib "Work" — https://preview.colorlib.com/theme/work/
New name: laborline

## Section order (matches original 1:1)

1. Sidebar (fixed left, 20% width desktop, slide-in mobile)
2. Hero (full-height flexslider with dark overlay, 3 slides)
3. About (split: offset images left, text right)
4. Services (2-col grid, 6 items with icons)
5. Specialties (text section)
6. Work/Portfolio (2-col grid, 6 project cards with overlay)
7. Blog (3-col cards)
8. Contact / Get in Touch (CTA section)
9. Footer (copyright + Component Dock link)

## Fidelity notes

### Sidebar
- Black background, white text
- Logo: uppercase "LABORLINE" in black box with white text, letter-spacing
- Nav links: Home, Work, About, Services, Blog, Contact (scroll-to anchors)
- Social icons at bottom
- Desktop: fixed, 20% width, full height
- Mobile (≤768px): 270px, off-screen left, slides in via transform
- Hamburger toggle button (`.colorlib-nav-toggle`)

### Hero
- Full viewport height (`js-fullheight`)
- Dark semi-transparent overlay on background image
- Flexslider with 3 slides, each with:
  - Centered text: headline + subtext + CTA button
  - Slide 1: "Strategic Design for Brands"
  - Slide 2: "Creators of Brands Template"
  - Slide 3: "Design & develop functional sites"
- CTA: "Learn More" — transparent bg, black border, uppercase, letter-spacing 2px, pill shape

### About
- Split layout: left side has two offset/overlapping images
- Right side: "Welcome & Introduce" heading, bio paragraph
- Sub-section: "Why choose me?" with descriptive text
- Animate-in on scroll (fadeInLeft / fadeInRight)

### Services
- Heading: "What I do?" + "Here are some of my expertise"
- 2-column grid of 6 service items:
  1. Branding — icon + title + description
  2. Web Design
  3. Search Engine Optimization
  4. Web Development
  5. User Interface
  6. Help & Support
- Each item: icon (lucide-react), bold title, paragraph description

### Specialties
- Heading: "My Specialties"
- Descriptive text paragraphs
- Simple text section, no grid

### Work/Portfolio
- Heading: "My Work" + "Recent Work"
- 2-column grid of 6 project cards
- Each card: thumbnail image, overlay on hover with:
  - Project title (e.g. "Work 01")
  - Category tags (e.g. "Branding, Illustration")
  - Heart icon + count, comment icon + count
- Placeholder images via picsum.photos

### Blog
- Heading: "Recent Blog"
- 3-column grid of blog cards
- Each card: image, date, category, title, excerpt, "Read More" link
- Blog post data as static array

### Contact
- Heading: "Get in Touch!"
- Descriptive text
- "Contact me!" CTA button — pill shape, brand color bg

### Footer
- Copyright line with current year
- Component Dock link (https://www.componentdock.com/)
- No ColorLib attribution

## Design tokens (from CSS)

```
--brand: #F75940 (vivid red-orange)
--bg: #fff
--bg-alt: #fafafa
--text: #000
--text-secondary: rgba(0,0,0,0.7)
--text-muted: #999999
--sidebar-bg: #000
--sidebar-text: #fff
--font: "Quicksand", Arial, sans-serif
--btn-radius: 30px (pill)
--section-padding: 4em 0
```

## Component architecture (implementer reference)

```
apps/laborline/
  src/
    main.tsx              — entry point
    App.tsx               — composes all sections
    index.css             — Tailwind + theme tokens (@theme block)
    components/
      Sidebar.tsx         — fixed sidebar with nav + logo
      Hero.tsx            — full-height slider with overlay
      About.tsx           — split layout with images + bio
      Services.tsx        — 2-col grid of service items
      Specialties.tsx     — text section
      WorkGrid.tsx        — 2-col portfolio grid
      Blog.tsx            — 3-col blog cards
      Contact.tsx         — CTA section
      Footer.tsx          — copyright + Component Dock link
  public/
    CNAME                 — laborline.free.componentdock.com
  package.json            — @free-react-templates/laborline
  vite.config.ts          — with injectUiSource()
```

## Implementation tasks

1. Scaffold app from simplest existing template (copy + rename)
2. Set up theme tokens in `index.css` (@theme block with brand color)
3. Implement Sidebar component (desktop + mobile responsive)
4. Implement Hero section (static, single slide to start)
5. Implement About section (split layout)
6. Implement Services section (2-col grid, 6 items)
7. Implement Specialties section
8. Implement Work grid (2-col, 6 cards)
9. Implement Blog section (3-col, 3 cards)
10. Implement Contact section (CTA)
11. Implement Footer (Component Dock link)
12. Compose all in App.tsx
13. Write tests (100% coverage)
14. Run `scripts/verify-app.sh laborline`
