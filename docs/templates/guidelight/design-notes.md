# GuideLight — Implementation Notes

Source: ColorLib LifeCoach (slug: `lifecoach`)
Preview: https://preview.colorlib.com/theme/lifecoach/

## Section Order (12 sections)

1. Navbar (sticky)
2. Hero (background image + overlay)
3. Special Offers (bg-primary)
4. About (two-column)
5. Training (bg-light, 2-col grid)
6. Team (4-col cards)
7. Carousel (image + text pairing)
8. Services (bg-light, 3-col)
9. Testimonials (carousel)
10. Blog (3-col cards)
11. Contact (form)
12. Footer (dark, 3-col)

## Design Notes

### Color System
- Primary: `#3a4971` (navy-slate blue) — buttons, accents, links
- Accent: `#bbcdde` (light blue) — special text on dark BG
- Body: `#333333` — paragraphs
- Muted: `#737373` — dates, category tags
- Footer BG: `#25262a`
- Light BG: `#f8f9fa` — alternating sections
- Black: `#000` — headings, hover states

### Typography
- Font: Roboto (Google Fonts), weights 300/400/700/900
- Section titles: `section-title` class, likely ~2rem
- Lead text: slightly larger, lighter weight
- Body: default ~1rem

### Layout
- Bootstrap-style 12-col grid (container > row > col-md-*)
- Max-width container ~1140px
- Section padding ~4rem vertical
- Alternating white/light backgrounds

### Component Details

**Navbar**
- Logo: "GuideLight" in bold, dot (.) in primary color
- Sticky: `js-sticky-header` — implement with `position: sticky` + IntersectionObserver
- Mobile: hamburger menu with slide-in drawer

**Hero**
- Full-width with dark overlay (`background: rgba(0,0,0,0.6)`)
- Content left-aligned, vertically centered
- Single CTA button: primary color, rounded

**Special Offers**
- `bg-primary` (#3a4971)
- 3-col: heading + 2 feature cards
- Icons: flaticon equivalents → use lucide-react icons
- Text on dark: white headings, #bbcdde body text

**About**
- Two-column: text left (6 cols), image right (5 cols)
- Signature image below text (w-25)
- Rounded image

**Training**
- `bg-light` background
- 2-col grid of 6 items
- Each: thumbnail (col with `mr-5`) + content (title + category tag + description)
- Category tag: muted text, block display

**Team**
- 4-col cards
- Figure with social overlay (absolute-positioned icons on hover)
- Card body: name + position
- Border-bottom on section

**Carousel**
- Split: image carousel left (6 cols) + text carousel right (5 cols)
- Prev/Next text links below image
- 3 slides: Social Life, Money & Finance, Motivation
- Each text slide: title + lead + description + CTA button

**Services**
- `bg-light` with border-bottom
- 3-col cards with icon + title + description

**Testimonials**
- Full-width carousel (no container constraint on slides)
- Each slide: centered blockquote + avatar (50% width) + name
- 4 testimonials

**Blog**
- 3-col cards
- Each: image + category tag + title (linked) + excerpt + "Read more"
- Border-bottom on section

**Contact**
- `bg-light`
- Form: first name, last name, email, subject, message (textarea), submit
- Bootstrap form styling

**Footer**
- Dark BG `#25262a`
- 3-column: About + Newsletter | Quick Links | Follow Us + sidebar
- Newsletter: email input + Send button
- Social: Facebook, Twitter, Instagram, LinkedIn icons
- Copyright line (replace Colorlib with Component Dock link)

## Component Map (suggested)

```
src/
  App.tsx
  components/
    Navbar.tsx
    Hero.tsx
    SpecialOffers.tsx
    About.tsx
    Training.tsx
    Team.tsx
    Carousel.tsx
    Services.tsx
    Testimonials.tsx
    Blog.tsx
    Contact.tsx
    Footer.tsx
```

## Assets (placeholders)

- Hero bg: `https://picsum.photos/seed/guidelight-hero/1920/1080`
- About image: `https://picsum.photos/seed/guidelight-about/800/600`
- Signature: can be SVG or styled text
- Training thumbnails: `https://picsum.photos/seed/guidelight-train-{1-6}/400/300`
- Team photos: `https://picsum.photos/seed/guidelight-team-{1-4}/400/500`
- Carousel images: `https://picsum.photos/seed/guidelight-slide-{1-3}/800/600`
- Service icons: lucide-react
- Blog images: `https://picsum.photos/seed/guidelight-blog-{1-3}/800/500`
- Testimonial avatars: `https://picsum.photos/seed/guidelight-avatar-{1-4}/200/200`
- Footer sidebar image: `https://picsum.photos/seed/guidelight-footer/400/300`
