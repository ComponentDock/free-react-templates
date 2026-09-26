# Elitaire — Implementation Notes

## Replication Reference

- **Source:** ColorLib "Elit" — https://colorlib.com/wp/template/elit/
- **Preview:** https://preview.colorlib.com/theme/elit/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/elit-free-template.jpg
- **Preview fetched:** Yes (24,702 bytes HTML, full CSS extracted)
- **CSS tokens extracted:** Yes — brand colors, fonts, button styles, backgrounds

## Section Order (top → bottom)

1. **Header (Sidebar)** — fixed left 250px sidebar, black bg, logo + nav + social
2. **Hero** — full-screen parallax bg, "Welcome" heading, subtitle, "Contact Me" button
3. **Photos** — 9 photo items in 3×3 grid, hover overlays, lightbox
4. **Testimonials** — carousel with 2 testimonials (photo, name, quote)
5. **Biography** — dark bg, photo + text + checklist, pink accent bar
6. **Blog** — 4 posts in list layout, pagination
7. **Contact** — dark bg, form with bottom-border inputs, pink button
8. **Footer** — centered copyright with Component Dock link

## Fidelity Notes

### Header (Fixed Sidebar)
- Fixed left sidebar (250px wide, full viewport height, black bg)
- Logo: "Elit Photo" text (white, uppercase, bold, Quicksand)
- Nav links: Home, Photos, Biography, Blog, Contact (white, uppercase, 0.8rem)
- Social icons below nav (Facebook, Twitter, Instagram)
- Active/hover link: pink accent (`#df0e62`)
- On mobile (<992px): sidebar becomes fixed top bar (70px height), hamburger toggle
- Offcanvas mobile menu: slides from right, white bg, nav + social + copyright

### Hero
- Full-screen parallax (`background-attachment: fixed`)
- Dark overlay: `rgba(0,0,0,0.4)`
- "Welcome" heading: Oswald, uppercase, 4rem (2.5rem mobile)
- Subtitle paragraph (white, lead)
- "Contact Me" button: pill (30px radius), primary pink, white text, uppercase, bold

### Photos (Gallery)
- Full-width container-fluid (no padding)
- 9 items in 3-column grid (col-lg-4, col-md-6, col-6)
- Each: image (300px height, object-fit cover) + dark overlay on hover + search icon
- Lightbox: use React modal/lightbox (no Fancybox dependency)
- AOS fade-up with staggered delays

### Testimonials
- Dark background (`#000`)
- "Testimonial" heading (Oswald, uppercase, white)
- Carousel with 2 items (use React carousel)
- Each: circular photo (25% width), name (bold white), blockquote (white)
- Prev/next navigation arrows

### Biography
- Dark background (`#1a1a1a`) with pink accent bar (top-left, 100px × 4px via `::before`)
- "Biography" heading (Oswald, uppercase, white)
- Two-column: photo (50% width, rounded) + text
- "Hi I'm Jed" heading, paragraphs with links, "Photographer for 10 years" subheading
- Two-column checklist with green checkmarks (`ul-check success`)

### Blog
- White background
- "Blog" heading (Oswald, uppercase)
- 4 posts in single-column list, each horizontal: image (250px fixed) + text
- Title, meta ("Posted by Ben Jones on Jan 18, 2019"), excerpt
- Pagination: 1, 2, 3, ..., 7 (pink hover, circle)

### Contact
- Dark background (`#1a1a1a`) with pink accent bar
- "Contact" heading (Oswald, uppercase, white)
- Form (col-md-8 centered): First Name, Last Name, Email, Subject, Message
- Inputs: bottom border only (2px gray), no bg, white text
- "Send Message" button: primary pink, pill shape

### Footer
- Centered copyright text
- "Component Dock" link (replacing Colorlib attribution)
- Footer MUST link `https://www.componentdock.com/`

## Component Breakdown

| Component | Source Section | Notes |
|-----------|---------------|-------|
| `Sidebar.tsx` | Header | Fixed left sidebar, logo, nav, social |
| `MobileMenu.tsx` | Offcanvas Menu | Slide-in menu for mobile |
| `Hero.tsx` | Hero | Parallax bg, heading, subtitle, CTA |
| `Photos.tsx` | Photos Gallery | 3×3 grid, hover overlays, lightbox |
| `Testimonials.tsx` | Testimonials | Carousel with 2 items |
| `Biography.tsx` | Biography | Photo + text + checklist |
| `Blog.tsx` | Blog | 4 posts + pagination |
| `Contact.tsx` | Contact | Form with bottom-border inputs |
| `Footer.tsx` | Footer | Copyright with Component Dock link |

## Placeholder Assets

- Hero background: `https://picsum.photos/seed/elitaire-hero/1920/1080`
- Gallery images: `https://picsum.photos/seed/elitaire-photo-<n>/600/300`
- Testimonial photos: `https://picsum.photos/seed/elitaire-testimonial-<n>/150/150`
- Biography photo: `https://picsum.photos/seed/elitaire-bio/600/400`
- Blog images: `https://picsum.photos/seed/elitaire-blog-<n>/250/250`

## Key Differences from Original

- No FontAwesome/icomoon/flaticon — use `lucide-react` for all icons
- No OwlCarousel — pure React carousel
- No Fancybox/MagnificPopup — React lightbox/modal
- No AOS library — CSS animations + intersection observer
- No jQuery/Stellar.js — CSS `background-attachment: fixed` for parallax
- Footer links to Component Dock instead of Colorlib
- All images are deterministic placeholders via picsum.photos
