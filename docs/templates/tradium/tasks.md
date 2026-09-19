# Tradium (ColorLib Selling) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-tradium`. Recreation name: **Tradium** (NEW name —
> the ColorLib source keeps its name "Selling").

## Source mapping

- **ColorLib item:** "Selling" (TEMPLATES.md line 1599).
- **Source URL:** https://colorlib.com/wp/template/selling/
- **Preview URL — REACHABLE (verified 2026-09-19):**
  **https://preview.colorlib.com/theme/selling/**
  (HTML fetched: 37,305 bytes; CSS: `css/style.css` 23,289 bytes).
- **Preview CSS:** `css/style.css` (all custom styles) + Bootstrap 4
  (`css/bootstrap.min.css`). Scripts: jQuery 3.3.1, Owl Carousel, AOS,
  Stellar (parallax), Fancybox, countdown, datepicker.
- **Google Fonts:** Muli (300, 400, 700, 900).

## Reference research (done — do not redo)

### Live preview DOM analysis (2026-09-19)

Fetched `https://preview.colorlib.com/theme/selling/` — 37KB HTML, fully
rendered. Section order (confirmed from DOM):

1. **Top Bar** — `.top-bar.py-3.bg-light`: social icons left (Facebook, Twitter, Instagram, LinkedIn via icomoon), phone + email right
2. **Navbar** — `.site-navbar.py-4.bg-white.js-sticky-header`: logo "Selling." with `<span class="text-primary">.</span>` (orange dot), 7 nav links (Home, Products, About Us, Special, Testimonials, Blog, Contact)
3. **Hero** — `.site-blocks-cover.overlay` with `background-image: url(images/hero_2.jpg)`, AOS fade: "Shop With Us" h1, lead paragraph, two white buttons (outline "Shop Now", solid "Club Membership")
4. **Popular Products** — `.site-section#products-section`: "Popular Products" sub-title, "Our Products" title, 6 `.product-item` cards in 3-col grid (col-lg-4), each with image, "Wild West Hoodie" title, star 5.0 + heart 29, description, "Cart" btn-black + "View" btn-black btn-outline-black
5. **Newsletter** — `.site-blocks-cover.inner-page-cover.get-notification` parallax bg: "Get notified on each updates." heading, email input + "Subscribe" btn-white btn-outline-white
6. **Featured Products** — `.site-section.bg-light`: "Awesome Products" sub-title, "Featured Products" title, 2 `.product-item-2` white cards with alternating layout (image left/text right, then reversed), numbered 01./02., strikethrough $269.00 → $69.00, "View Details" + "Add To Cart" buttons
7. **About Us** — `.site-section#about-section`: image left with `.experience` badge (bg #46ddb0, "Trusted Merchant" / "for 50 years"), right: "Merchant Company" sub-title, "About Us" title, text, "Learn More" btn-black btn-black--hover
8. **Team** — `.site-section.border-bottom#team-section`: "Team" sub-title, "Leadership" title, 3 `.person` cards (John Rooster, Tom Sharp, Winston Hodson) with photo, name, position, bio, `.ul-social-circle` icons
9. **Special/Sale** — `.site-blocks-cover.overlay#get-notification#special-section` parallax: "Special Promo" sub-title, "Summer Sale" title (white), countdown timer div, "Shop Now" btn-white btn-outline-white
10. **Services** — `.site-section.bg-light#services-section`: "Our Services" sub-title, "We Offer Services" title, 6 `.unit-4` cards (col-lg-4) with icon + title + text + "Learn More" link
11. **Testimonials** — `.site-section.testimonial-wrap#testimonials-section`: "People Says" sub-title, "Testimonials" title, Owl Carousel `.home-slider` with 4 slides (large photo, blockquote, bold name)
12. **Blog** — `.site-section#blog-section`: "Blog" sub-title, "Blog Posts" title, 3 `.h-entry` cards with image, title, meta (author + date + category), excerpt, "Continue Reading..."
13. **Contact** — `.site-section.bg-light#contact-section`: "Contact Form" sub-title, "Get In Touch" title, centered white `.p-5.bg-white` form with First Name, Last Name, Email, Subject, Message textarea, "Send Message" btn-black
14. **Footer** — `footer.site-footer.bg-white`: 3-col layout (About Us text, Quick Links list, Follow Us icons) + Featured Product sidebar (image, "Leather Brown Shoe", $60.00, "Add to Cart"), copyright line

### CSS tokens extracted (2026-09-19)

From `css/style.css` (23,289 bytes):

| Property | Value | Source selector |
|----------|-------|----------------|
| Brand primary | `#f16821` | `.text-primary`, `.site-navbar .site-menu .active`, `.form-control:focus` border |
| Accent teal | `#46ddb0` | `.experience` background |
| Body color | `gray` | `body` |
| Body font | `"Muli"` | headings, form controls |
| Font weights | 300, 400, 700, 900 | Google Fonts link |
| Button font | 12px, weight 900, uppercase | `.btn` |
| Button radius | 0 (square) | `rounded-0` class throughout |
| Section padding | 2.5em mobile, 5em desktop | `.site-section` |
| Footer bg | `#333333` | `.site-footer` |
| Footer text | `#737373` | `.site-footer p` |
| Footer links | `#999999` | `.site-footer a` |
| Light bg | `#f8f9fa` | Bootstrap `.bg-light` |
| Section subtitle | `#adb5bd`, 13px | `.section-sub-title` |
| Section title | `#000`, 40px (30px mobile) | `.section-title` |
| Star rating | `text-warning` (Bootstrap #ffc107) | `.icon-star` |
| Selection bg | `#000`, color `#fff` | `::selection` |
| Border light | `#edf0f5` | `.border-top` |

### Screenshot analysis

The ColorLib preview screenshot shows: clean white e-commerce landing page
with a dark parallax hero banner ("Shop With Us"), black square-corner
buttons, orange accent dots/highlights, product cards with star ratings,
alternating featured product spotlights on white cards over a light grey
background, a teal "Trusted Merchant" badge overlapping the about image,
dark footer. The aesthetic is professional/corporate e-commerce with strong
black/white contrast and orange accent.

## Tasks for implementer

### Component structure

```
src/
  App.tsx                    — Composes all sections in order
  components/
    TopBar.tsx               — Social icons + contact info bar
    Navbar.tsx               — Sticky nav with logo + links + mobile hamburger
    Hero.tsx                 — Full-width parallax hero with overlay
    PopularProducts.tsx      — 6-item product grid
    Newsletter.tsx           — Parallax email subscription section
    FeaturedProducts.tsx     — 2 alternating product spotlight cards
    AboutUs.tsx              — Image + trust badge + text
    Team.tsx                 — 3 team member cards
    SpecialSale.tsx          — Parallax promo with countdown
    Services.tsx             — 6 service cards with icons
    Testimonials.tsx         — Carousel of customer quotes
    Blog.tsx                 — 3 blog post cards
    Contact.tsx              — Contact form
    Footer.tsx               — Multi-column footer
```

### Implementation order (suggested)

1. Scaffold app (copy simplest existing app, rename package, update CNAME/homepage)
2. `TopBar` — simple flex row, social icons from lucide-react
3. `Navbar` — sticky, logo with orange dot accent, nav links, mobile menu
4. `Hero` — parallax background (CSS `background-attachment: fixed`), overlay, two buttons
5. `PopularProducts` — 3-col grid, product cards with star/heart icons
6. `Newsletter` — parallax bg, email input + subscribe
7. `FeaturedProducts` — alternating layout, price strikethrough, white cards on light bg
8. `AboutUs` — image with absolute-positioned teal badge, text + button
9. `Team` — 3-col, circular photos, social circle icons
10. `SpecialSale` — parallax bg, countdown timer component
11. `Services` — 3-col grid, icon + text cards on light bg
12. `Testimonials` — carousel (use a simple React carousel or CSS snap)
13. `Blog` — 3-col grid, post cards with meta
14. `Contact` — centered form in white card on light bg
15. `Footer` — 3-col + sidebar, copyright with Component Dock link

### Fidelity notes

- All buttons square (`rounded-0`), uppercase, 12px, weight 900
- Brand orange `#f16821` goes in `@theme` as primary color
- Accent teal `#46ddb0` for the experience badge
- Footer bg `#333333` with grey text
- Parallax: use `background-attachment: fixed` on hero, newsletter, and special sections
- Product cards: center-aligned, image on top, text/buttons below
- Featured products: alternating image/text layout (odd: image left, even: image right)
- Testimonials: implement as a simple carousel (CSS scroll-snap or state-based)
- Mobile: hamburger menu, stacked single-column layouts
- Replace all ColorLib image paths with `https://picsum.photos/seed/tradium-<n>/<w>/<h>`
- Icons: use lucide-react (replace icomoon/flaticon icon fonts)
- Font: load Muli from Google Fonts in index.html
- No parallax JS library needed — CSS `background-attachment: fixed` suffices
- Countdown timer: implement with React state + setInterval (no jQuery dependency)
