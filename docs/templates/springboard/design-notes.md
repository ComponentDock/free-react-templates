# Springboard — Implementation Notes

## Source
- ColorLib: Startupbusiness (https://colorlib.com/wp/template/startupbusiness/)
- Preview: https://preview.colorlib.com/theme/startupbusiness/

## Section order & fidelity notes

### 1. Navbar
- Transparent/absolute positioning over hero background
- Logo left, nav center, CTA right
- On scroll: becomes sticky with dark background (#010E21)
- Mobile: hamburger menu
- Component: `Navbar.tsx`

### 2. Hero
- Full-width background image with dark overlay
- Split layout: left = text (title + subtitle + arrow), right = hero image
- Slick-style carousel (implement as React state, no Slick dependency)
- Arrow button at bottom-right corner of the slide
- Arrow: cyan (#04dbec) background, white arrow icon
- Component: `Hero.tsx`
- Images: use `https://picsum.photos/seed/springboard-hero/1920/900`

### 3. Services
- 3-column card grid on white background
- Each card: icon (use lucide-react), heading (Strategic Planning, Trades & Stocks, Audit & Assurance), short description
- Cards centered with text below icon
- Component: `Services.tsx`

### 4. WantToWork / CTA
- Two CTA sections in the original:
  1. Light background: heading + paragraph + dark button (right-aligned)
  2. Dark background image: white heading + dark button
- Simplify to one combined section for React version
- Component: `CtaSection.tsx`

### 5. Portfolio Gallery
- Grid: 1 large image + 3 small images in 2 rows
- Hover overlay with project title and cyan (#04dbec) accent
- Images: use picsum with portfolio seeds
- Component: `Portfolio.tsx`

### 6. Testimonials
- Carousel/slider with testimonial quote + founder name + photo
- Off-white background (#f9f9ff or white)
- Simple React carousel (no dependency)
- Component: `Testimonials.tsx`

### 7. Blog
- 3-column card grid
- Each card: thumbnail image, date tag (cyan background), title, short description
- Hover: subtle shadow
- Component: `Blog.tsx`

### 8. Contact
- Form section with: name, email, subject, message fields + submit button
- Light border (#f0e9ff) on inputs
- Contact info alongside (phone, email, address)
- Component: `Contact.tsx`

### 9. Footer
- 4-column layout on dark navy background
- Col 1: about text + logo
- Col 2: quick links
- Col 3: services list
- Col 4: newsletter signup + social icons
- Bottom bar: "Component Dock" attribution
- Component: `Footer.tsx`

## App structure
```
apps/springboard/
├── public/
│   └── CNAME              # springboard.free.componentdock.com
├── src/
│   ├── main.tsx
│   ├── App.tsx            # Compose all sections
│   ├── index.css           # Tailwind + @theme tokens
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── CtaSection.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Blog.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── test/
│       └── setup.ts
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Tailwind theme tokens (index.css)
```css
@theme {
  --color-brand: #04dbec;
  --color-brand-hover: #07cad8;
  --color-navy: #1f2b7b;
  --color-dark: #0b1c39;
  --color-dark-button: #0b1416;
  --color-body: #506172;
  --color-muted: #999999;
  --color-muted-light: #828bb2;
  --color-bg-alt: #f9f9ff;
  --color-bg-card: #fbf9ff;
  --color-border: #f0e9ff;
  --color-hero-text: #a6b3c6;
}
```

## Dependencies
- lucide-react (icons)
- cn from @free-react-templates/ui
- No additional UI libraries needed
