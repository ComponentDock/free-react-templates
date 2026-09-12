# Silverleaf — Design Notes

Source: ColorLib "Elderly" (https://preview.colorlib.com/theme/elderly/)
New name: silverleaf

## Section Order (matches ColorLib 1:1)

1. Navbar
2. Hero (full viewport, bg image, overlay)
3. Feature Strip (3-column, SVG icons)
4. Services Grid (4-column image cards)
5. Statistics Counter (primary bg, 4 stats)
6. About / Why Us (split layout: text+checklist | media card)
7. Cover / Goals (full-width overlay, 3 circle-icon features)
8. Testimonials (3 cards, light bg)
9. Other Opportunities (2 media cards)
10. About CTA (primary bg, image + text + blockquote)
11. Blog / News (3 blog cards)
12. Footer (4-column, light bg)

## Component Breakdown

### Navbar.tsx
- Sticky on scroll (IntersectionObserver or scroll listener)
- Logo: "Silverleaf" + "." in brand color
- Nav items: Home, Services, Testimonials, Blog, About, Contact
- Social icon circles (fb, twitter, linkedin) — use lucide-react equivalents
- Mobile: hamburger menu with slide-in panel

### Hero.tsx
- Full viewport height (min-h-[760px])
- Background image from picsum.photos
- Dark overlay via `before:` pseudo-element or overlay div (rgba(0,0,0,0.2))
- Heading: "Expert Care for the Elderly" (Playfair Display, 50px, bold, white)
- Subtext paragraph
- "Get In Touch" primary pill button (border-radius-full)

### FeatureStrip.tsx
- 3-column flex row
- Each item: SVG icon (90px), subheading "Try Our Services", heading, "Learn More" link
- Active item: white bg, 3px blue top border
- Items: Independent Living, Senior Care, Patient Care
- Use lucide-react icons (Heart, Users, Stethoscope or similar)

### ServicesGrid.tsx
- 4-column grid (2 on mobile)
- Each card: square image (picsum), bordered bottom section, title + description
- Hover: lift -2px + shadow

### StatsCounter.tsx
- Full-width primary blue bg
- 4 columns: Rooms Available (5890), Nurse Staff (530), Senior Living (4029), Happy People (7020)
- Large numbers (60px, white), subtle labels (rgba white)
- Implement as static numbers (no animation needed for React)

### AboutSection.tsx
- Split layout: left 7/12, right 5/12
- Left: heading, paragraph, row with image + checklist (3 items, blue checkmarks via lucide Check)
- Right: media card — blue text panel ("You can live here with love") + background image

### CoverGoals.tsx
- Full-width bg image with dark overlay
- Centered heading
- 3-column features: white circle (80px, rounded-full) with icon inside, white heading text

### Testimonials.tsx
- Light gray bg (#f8f9fa)
- 3-column grid
- Each: avatar (80px circle, negative margin top -50px), italic quote (Playfair Display), author (Open Sans, gray)

### Opportunities.tsx
- 2-column grid
- Each card: flex row — text panel (blue bg, heading, description, outline-white button) + image panel

### AboutCTA.tsx
- Primary blue bg, 2-column: illustration image left, text right
- Heading, paragraphs, blockquote ("We care for elderly people"), white "Learn More" button

### BlogNews.tsx
- 3-column grid
- Each card: image, floating meta bar (date, author, comments with blue icons), title, excerpt
- Meta icons: Calendar, User, MessageCircle from lucide-react

### Footer.tsx
- Light bg, 4-column: About + social, Quick Links, Helpful Links, Resources
- Social: Facebook, Twitter, Instagram, LinkedIn (lucide-react)
- Copyright line with Component Dock link

## Design Token Mapping to Tailwind

```css
/* index.css @theme */
@theme {
  --color-brand: #3c90f7;
  --color-brand-light: #f8f9fa;
  --font-heading: "Playfair Display", serif;
  --font-body: "Open Sans", sans-serif;
}
```

- Use `font-heading` for h1–h5 via Tailwind theme
- Use `font-body` as default via Tailwind theme
- Brand color via `text-brand`, `bg-brand`, `border-brand`
- Pill buttons: `rounded-full px-8 py-2.5 text-xs uppercase tracking-wide`

## Image Placeholders

- Hero bg: `https://picsum.photos/seed/silverleaf-hero/1920/1080`
- Service 1-4: `https://picsum.photos/seed/silverleaf-svc1/400/400` (square)
- About image: `https://picsum.photos/seed/silverleaf-about/600/400`
- Media card backgrounds: `https://picsum.photos/seed/silverleaf-media1/600/250`
- Cover bg: `https://picsum.photos/seed/silverleaf-cover/1920/800`
- Avatar: `https://picsum.photos/seed/silverleaf-person/80/80`
- Blog images: `https://picsum.photos/seed/silverleaf-blog1/600/400`
- CTA illustration: `https://picsum.photos/seed/silverleaf-cta/500/400`

## Icon Mapping (lucide-react)

| ColorLib icon | lucide-react equivalent |
|---------------|------------------------|
| icon-facebook | Facebook |
| icon-twitter | Twitter |
| icon-linkedin | Linkedin |
| icon-instagram | Instagram |
| icon-calendar | Calendar |
| icon-user | User |
| icon-comment | MessageCircle |
| icon-heart | Heart |
| icon-close2 | X |
| icon-menu | Menu |
| SVG elderly illustrations | Heart, Users, Stethoscope (feature strip + cover) |
