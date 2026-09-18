# AgentHub — Prep Notes

Source: ColorLib "Youragent" — https://colorlib.com/wp/template/youragent/
Preview: https://preview.colorlib.com/theme/youragent/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/youragent-free-template.jpg

## Implementation Task Outline

### 1. Project Setup
- Copy simplest existing app (e.g. `apps/aurora` or similar one-page template)
- Rename package to `@free-react-templates/agenthub`
- Update `public/CNAME` to `agenthub.free.componentdock.com`
- Update `homepage` in `package.json` to `https://agenthub.free.componentdock.com`
- Run `npm install` at repo root to register workspace

### 2. Component Architecture

```
src/
  App.tsx              — composes all sections
  components/
    Navbar.tsx         — absolute top nav, hamburger toggle, full-screen overlay
    Hero.tsx           — full-viewport hero with overlay, heading, CTAs
    PopularProperties.tsx — 4-col grid of 8 property cards
    Testimonials.tsx   — 3 testimonial blocks with quotes + author images
    AboutMe.tsx        — agent bio + 3 stat cards with icons
    RecentBlog.tsx     — 3 blog post cards
    Footer.tsx         — blue 3-column footer with newsletter + social
  index.css            — Tailwind entry + @theme tokens
  main.tsx             — entry (excluded from coverage)
```

### 3. Design Token Migration to Tailwind

In `index.css` `@theme` block:
```
--color-brand: #007bff;
--color-brand-dark: #0069d9;
--font-heading: "Playfair Display", times, serif;
--font-body: "Mukta Mahee", arial, sans-serif;
```

### 4. Section-by-Section Fidelity Notes

#### Navbar
- Absolute positioned, transparent over hero
- Logo left, hamburger right (3 animated spans)
- Full-screen overlay: split layout — nav links left (col-md-6), contact info + social right (col-md-6)
- Links: Home, About, Blog, Contact
- Contact: address, phone, email
- Social: Twitter, Facebook, Instagram

#### Hero
- Full viewport: 100vh, min-height 700px
- Background image with `rgba(0,0,0,0.15)` overlay (via ::before pseudo)
- Right-aligned content (col-md-7, ml-auto)
- h1: Playfair Display, 80px desktop / 40px mobile
- Sub-heading: 30px weight-200 / 18px mobile
- Two pill buttons: primary (#007bff) + outline-light (white border)
- Scroll-down smooth anchor link

#### Popular Properties
- Section heading: uppercase, 15px, centered
- Grid: 2 rows × 4 columns (col-lg-3 col-md-6)
- 8 property cards, each with:
  - Rounded image with box-shadow `0 2px 3px 0 rgba(0,0,0,0.2)`
  - Price overlay on image
  - h3 title (20px)
  - Location link
  - Star rating row (ionicons, primary blue)
- AOS fade-up with staggered delays (0, 100, 200, 300ms)

#### Testimonials
- 3 columns (col-md-4)
- Each: blockquote (Playfair Display), circular author image (50%), author name
- Padding 60px around each block
- AOS fade-up with delays

#### About Me
- Left column (col-md-6): h2 heading, lead paragraph
- Right side: 3 stat cards in a row (col-md-4 each)
  - Each: ionicon (calendar/edit/hangout) in primary blue (display-3 size)
  - Title + description text
- Cards: no background, just icon + text

#### Recent Blog Posts
- Section heading "Recent Blog Post" centered
- Lead subtitle paragraph
- 3 cards (col-lg-4 col-md-6): image, meta-post date, h2 title, excerpt link
- AOS fade-up

#### Footer
- Solid #007bff background, white text
- 3 columns:
  - "About Us": links list (Terms, Privacy, Help, Rooms)
  - "Our Location": links (Hosts, About, Contact) + address/phone/email block
  - Newsletter: email input + submit button, social icons (LinkedIn, Twitter, Facebook)
- Copyright line at bottom
- Must include Component Dock link

### 5. Assets to Use
- Hero image: `https://picsum.photos/seed/agenthub-hero/1920/1080`
- Property images: `https://picsum.photos/seed/agenthub-prop-{1-8}/400/300`
- Author images: `https://picsum.photos/seed/agenthub-author-{1-3}/80/80`
- Blog images: `https://picsum.photos/seed/agenthub-blog-{1-3}/600/400`
- Icons: lucide-react (replace ionicons: calendar → Calendar, edit → PenLine, hangout → Headphones)
- Font Awesome icons for social: replace with lucide-react (Linkedin, Twitter, Facebook)

### 6. Key Fidelity Pitfalls
- Hero overlay is a CSS ::before pseudo-element, not a separate div
- Property cards appear twice (2 rows of 4, same 4 properties repeated) — match this
- Testimonial blockquotes use Playfair Display (serif), not body font
- Stat card icons use `display-3 text-primary` sizing (very large, primary blue)
- Blog meta-post uses `<span class="meta-post">` for date
- Footer newsletter form is inline (input + button in same row)
- AOS delays are staggered: 0, 100, 200, 300ms per row position
