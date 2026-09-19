# Blossom (ColorLib Florist) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-blossom`.

## Source mapping

- **ColorLib item:** "Florist" (TEMPLATES.md line 1580, first unchecked item)
- **Source URL:** https://colorlib.com/wp/template/florist/
- **Preview URL:** https://preview.colorlib.com/theme/florist/
- **Preview CSS:** https://preview.colorlib.com/theme/florist/css/style.css
  (~3338 lines, unminified). Also imports css/bootstrap.min.css,
  css/font-awesome.min.css, css/elegant-icons.css, css/magnific-popup.css,
  css/nice-select.css, css/owl.carousel.min.css, css/slicknav.min.css.
  jQuery + owl.carousel + mixitup + nice-select + nicescroll + slicknav
  + magnific-popup — NOT Tailwind.

## Reference research (done — do not redo)

### Screenshot (florist-free-template.jpg)

White-background flower shop template. Pink accent (#f45d96). Two-column
header (logo left, nav+icons right). Full-width hero slider with dark
overlay, left-aligned white headline, pink CTA pill. 4-column benefits
strip. 4-column category cards with background images and overlay text.
Two-column about section (title+text left, video+feature right). Filterable
5-column product grid (10 items). 3-column blog cards. Testimonial carousel
on lavender bg. 5-column Instagram strip. Multi-column footer.

### Section order (from live DOM)

1. Header — logo (left) + nav (Home, About, Services, Shop, Pages dropdown, Blog, Contact) + search/heart/bag icons (right)
2. Hero — owl-carousel slider, 600px height, two slides with background images, left-aligned text block (subtitle + heading + pink CTA button)
3. Benefits — 4-column row with icon + title + blurb
4. Categories — 4-column grid of background-image cards with centered overlay text (title + item count)
5. About — section-title left (span "About us", h2) + paragraph; right: video thumbnail with play button + feature text block with CTA
6. New Arrivals — section-title (span "Our flower", h2 "New Arrivals"), filter controls (All, Bouquet, Flower box, Flower shelf, Basket of flower, Gift combos), 10-product grid (5-column, mixitup filterable), each card: bg image + hover icon bar + name + price + "Add to cart"
7. Latest Posts — section-title (span "Latest posts", h2 "Florist tricks") + "View all posts" border button, 3 blog cards (image + label pill + title + excerpt + date)
8. Testimonial — lavender (#f7f5fa) bg, owl-carousel, centered quote mark image + serif italic quote + author name + role
9. Instagram — 5-column photo strip, white hover overlay with pink Instagram icon + "Follow us @blossom"
10. Footer — logo + blurb + social icons row; 4-column widget area (Company links, Account links, Newsletter form, Contact info); copyright bar

### Design tokens (from css/style.css — captured, do not re-fetch)

| Token            | Value                              | Notes                                            |
| ---------------- | ---------------------------------- | ------------------------------------------------ |
| Primary pink     | `#f45d96`                          | Primary accent for buttons, links, hover states   |
| Near-black       | `#111111`                          | Headings, nav text, product labels, copyright     |
| Body text        | `#444444`                          | Paragraphs, footer widget list text               |
| Muted gray       | `#888888`                          | Testimonial role, blog date, form placeholders    |
| Lavender tint    | `#f7f5fa`                          | Testimonial section background                    |
| Border light     | `#eaeaea`                          | Footer top/bottom border                          |
| Border form      | `#e1e1e1`                          | Contact form input/textarea border                |
| Body font        | `"Quicksand", sans-serif`          | Body, paragraphs, nav, filter controls            |
| Heading font     | `"Libre Baskerville", serif`       | h1-h6 headings                                   |
| Decorative font  | `"Hello Santtiny"` (custom)        | Section-title spans — replace with a cursive GF  |
| Primary button   | bg #f45d96, white, radius 50px     | Pill-shaped CTA buttons                           |
| Border button    | transparent, 2px solid #f45d96     | Outlined variant (e.g. "View all posts")          |
| Site button      | bg #111111, white, radius 0        | Shop/cart buttons                                 |
| Card shadow      | 0px 10px 21px rgba(99,133,136,0.16)| Blog cards                                       |
| Hero dot         | 15px white circle, radius 50%      | Owl-carousel slider dots                          |
| Instagram hover  | white bg, #f45d96 icon, scale(1)   | Overlay revealed on hover                         |

## Implementation tasks

- [ ] Scaffold `apps/blossom/` from simplest existing app; rename package to `@free-react-templates/blossom`
- [ ] Add Google Fonts link in index.html for Quicksand + Libre Baskerville
- [ ] Add `@theme` block in index.css with primary pink #f45d96, near-black #111111, body text #444444, muted #888888, lavender #f7f5fa
- [ ] Create Navbar component: logo left, nav links right, search/heart/bag icons
- [ ] Create Hero component: full-width slider, dark overlay, left-aligned text, pink CTA pill, dot navigation
- [ ] Create Benefits component: 4-column row with icon cards (use lucide-react icons)
- [ ] Create Categories component: 4-column grid, background images with overlay text
- [ ] Create About component: two-column layout, section title + paragraph left, video thumbnail + feature text right
- [ ] Create ProductGrid component: filter tabs + 5-column product card grid with hover interactions
- [ ] Create LatestPosts component: section title + 3 blog cards with label pills
- [ ] Create Testimonial component: lavender bg, carousel, serif italic quote, author info
- [ ] Create InstagramStrip component: 5-column photo grid with hover overlay
- [ ] Create Footer component: logo+social row, 4-column widgets, newsletter form, copyright with Component Dock link
- [ ] Compose all sections in App.tsx in correct order
- [ ] Write tests for each component (Vitest + Testing Library, 100% coverage)
- [ ] Run per-app gate: typecheck + lint + test:coverage + build
- [ ] Commit as feat(template-blossom): initial implementation
- [ ] Open PR, merge, deploy to blossom.free.componentdock.com
