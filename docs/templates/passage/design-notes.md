# Passage — Design Notes

**Source:** ColorLib "Immigration"
**Slug:** `immigration`
**Preview:** https://preview.colorlib.com/theme/immigration/
**Categories:** Business (TEMPLATES.md line 1053), Consulting (line 1385)
**Recreation name:** Passage
**App folder:** `apps/passage`
**Package:** `@free-react-templates/passage`
**CNAME:** `passage.free.componentdock.com`
**Homepage:** `https://passage.free.componentdock.com`

## Design Tokens

| Token           | Value                         | Usage                                                  |
| --------------- | ----------------------------- | ------------------------------------------------------ |
| Brand / Primary | `#f6214b`                     | Banner bg, buttons, tags hover, links hover, selection |
| Body text       | `#777777`                     | Body copy, paragraph text                              |
| Heading color   | `#222222`                     | All h1–h6                                              |
| Light bg        | `#f9f9ff`                     | CallToTop, Testimonials sections                       |
| White           | `#ffffff`                     | Feature area, Booking form card, Blog                  |
| Dark overlay    | `rgba(0,0,0,0.8)`             | BookingForm and CTABottom overlays                     |
| Tag badge bg    | `#222222`                     | Service card tags (default)                            |
| Star filled     | `orange`                      | Testimonial star rating                                |
| Selection bg    | `#f6214b`                     | `::selection`                                          |
| Font family     | Poppins (300/400/500/600/700) | All text                                               |

## Structure Order (top to bottom)

1. **Navbar**
   - Top bar: three-column row
     - Left (col-lg-4): tagline "We believe we helps people for happier lives"
     - Center (col-lg-4): logo image (centered)
     - Right (col-lg-4): phone number + phone icon link
   - Horizontal rule separator
   - Nav menu: centered horizontal list
     - Home (active), About, Immigration, Course, Country, Blog
       (dropdown: Blog Home, Blog Single), Contact, Elements
   - Sticky on scroll via `jquery.sticky.js` (recreate with
     IntersectionObserver / `position: sticky`)

2. **Hero Banner** (`banner-area`)
   - Full-viewport height, `background-color: #f6214b`
   - `.container` → `.row.fullscreen`
   - Left content (col-lg-9):
     - `<h6>` "Process Visa without within hours" (light, 14px)
     - `<h1 class="text-white">` "Immigrations & Visa Consultation"
       (36px, font-weight 600, white, line break after "&")
     - CTA: `<a class="genric-btn circle">` "Book Consultancy"
       (pill shape, white border + text on hover)
   - Right: header image (align-self-end, placeholder)

3. **CallToTop** (`calltotop-area pt-70 pb-70`)
   - Background: `#f9f9ff`
   - `.callto-section` → three-column row
     - Left (col-lg-4): `<p>` 30px weight-100 "Start **planning**
       your New **Dream**" — "planning" and "Dream" are `<span>`
       with font-weight 600. Text right-aligned.
     - Middle (col-lg-5): `<p>` lorem paragraph, text left
     - Right (col-lg-3): "Request Free Consultancy" button
       (`.call-btn`, bg `#f6214b`, white text, 10px 30px padding)
   - Responsive: all columns center-align and stack on mobile

4. **Service Cards** (`service-area section-gap`)
   - Centered header (col-md-7): `<h1>` "Requirements to be
     Immigrants" + subtitle paragraph
   - Four cards in `col-lg-3 col-md-6` grid:
     - Each `.single-service`:
       - `.thumb` → image (picsum.photos placeholder, overflow hidden,
         scale on hover)
       - `.tag` → dark `#222` badge, white text (turns `#f6214b` on hover)
       - `<h4>` title (turns `#f6214b` on hover)
       - `<p>` short description
     - Countries: United States, Canada, Germany, Australia
     - All cards share the same placeholder title + description
       (paraphrase per replication rules)

5. **Booking Form** (`booking-area section-gap relative`)
   - Background: image (`book-bg.jpg`) with `background-size: cover`
   - `.overlay.overlay-bg` → `rgba(0,0,0,0.8)`
   - Two-column layout:
     - Left (col-lg-5, col-md-6):
       - `<h1 class="text-white">` "Globally Connected by Large Network"
       - `<h4 class="text-white">` "We are here to listen from you
         deliver exellence" (weight 300, margin 20px 0)
       - `<p>` lorem paragraph
       - "View Details" `.primary-btn` (red bg, white text)
     - Right (col-lg-4, col-md-6):
       - White card, 30px padding
       - `<h4 class="mb-20">` "Book Free Consultancy!"
       - Form fields:
         - `<input type="text">` "Your name" (required)
         - `<input type="email">` "Email Address" (required)
         - `<input type="text">` "Phone Number"
         - `<select>` with placeholder "Select Visa" + 4 options
         - `<textarea>` "Messege" (sic — keep original or fix typo)
         - `<button class="btn btn-default btn-lg btn-block">`
           "Request Free Consultancy" (full-width)

6. **Features** (`feature-area section-gap`)
   - White background
   - Centered header (col-md-9): `<h1>` "Our Unique Features that can
     impress you" + subtitle
   - Six `.single-feature` cards in `col-lg-4 col-md-6` (3×2 grid):
     - Icon (use lucide-react equivalents):
       - Expert Technicians → `Users`
       - Professional Service → `Award` (or `Badge`)
       - Great Support → `Phone`
       - Technical Skills → `Rocket`
       - Highly Recommended → `Gem` (or `Star`)
       - Positive Reviews → `MessageCircle`
     - `<h4>` with icon span + title text
     - `<p>` description paragraph (all identical in original — paraphrase)
     - Hover: title turns `#f6214b`

7. **Testimonials** (`review-area section-gap`)
   - Background: `#f9f9ff`
   - Centered header (col-md-9): `<h1>` "How Our Customers Treat Us"
     - subtitle
   - `.active-review-carusel` → carousel of 4 `.single-review` items:
     - Avatar image (same image for all, placeholder)
     - `.title` row: `<h4>` name + star rating (`.star` with
       `.fa-star.checked` for filled, plain `.fa-star` for empty)
     - `<p>` review text (all identical — paraphrase)
   - Reviewer names cycle: Fannie Rowe, Hulda Sutton, Fannie Rowe,
     Hulda Sutton
   - Star rating: 3 filled, 2 empty (3/5)
   - Implement as horizontal scroll or simple carousel state

8. **Brand Logos** (`brand-area pt-100`)
   - White background
   - `.logo-wrap` → row of 5 `.single-img` columns
   - Each: `<img>` (placeholder logos, grayscale filter applied via CSS)
   - Hover: grayscale removed (full color)
   - Use `picsum.photos` or simple SVG placeholders

9. **Blog** (`latest-blog-area section-gap`)
   - Centered header (col-lg-8): `<h1>` "Latest News from our Blog"
     - subtitle
   - Two `.single-blog` cards in `col-lg-6`:
     - Featured image (rounded 5px)
     - `.tags` → `<ul>` with tag pills: "Travel", "Life style"
     - `<h4>` title "Portable latest Fashion for young women"
     - `<p>` description paragraph
     - `<p class="post-date">` "31st January, 2018" (use current year)
   - Both cards share identical content (paraphrase per rules)

10. **CTABottom** (`callto-area section-gap relative`)
    - Dark overlay background (same pattern as BookingForm)
    - Centered content:
      - `<h1 class="text-white">` "No Look Further. Try us today!"
      - `<p class="text-white pt-20 pb-20">` lorem paragraph
      - "Apply For Visa" `.primary-btn`

11. **Footer** (`footer-area section-gap`)
    - Four columns:
      - Col 1 (col-lg-3): "About Us" heading + description paragraph
      - Col 2 (col-lg-4): "Contact Us" heading + description + phone
        numbers ("012-6532-568-9746" / "012-6532-569-9748")
      - Col 3 (col-lg-5): "Newsletter" heading + "You can trust us…"
        - email subscribe form (input + arrow button)
      - (Col 4 is empty — only 3 content columns in original)
    - `.footer-bottom` row:
      - Left (col-lg-6): copyright text with Component Dock link
      - Right (col-lg-6): social icons (Facebook, Twitter, Dribbble,
        Behance) — use lucide-react
    - Footer bg: dark (determine from screenshot — likely `#222` or similar)
    - Text: light/muted

## Component Map

| #   | Component      | Source Section   | Key Details            |
| --- | -------------- | ---------------- | ---------------------- |
| 1   | `Navbar`       | Header           | Top bar + nav, sticky  |
| 2   | `HeroBanner`   | Banner area      | Red bg, h1, CTA, image |
| 3   | `CallToTop`    | Call-to-top area | 3-col, planning text   |
| 4   | `ServiceCards` | Service area     | 4 cards, tags, hover   |
| 5   | `BookingForm`  | Booking area     | Overlay bg, form card  |
| 6   | `Features`     | Feature area     | 6 items, icons, 3×2    |
| 7   | `Testimonials` | Review area      | Carousel, stars        |
| 8   | `BrandLogos`   | Brand area       | 5 grayscale logos      |
| 9   | `Blog`         | Latest blog area | 2 cards, tags          |
| 10  | `CTABottom`    | Callto area      | Dark overlay, CTA      |
| 11  | `Footer`       | Footer area      | 3 cols + copyright     |

## Icons (lucide-react)

- Navbar phone: `Phone`
- Features: `Users`, `Award`, `Phone`, `Rocket`, `Gem`, `MessageCircle`
- Footer social: `Facebook`, `Twitter`, `Dribbble` (or `Brush`),
  `Behance` (or `PenTool`)
- Newsletter arrow: `ArrowRight`

## Assets (do NOT copy from ColorLib)

- Hero image: `https://picsum.photos/seed/passage-hero/600/400`
- Service card images: `https://picsum.photos/seed/passage-service-<1-4>/300/200`
- Booking background: `https://picsum.photos/seed/passage-booking/1920/1080`
- Testimonial avatars: `https://picsum.photos/seed/passage-review/60/60`
- Brand logos: `https://picsum.photos/seed/passage-brand-<1-5>/120/40`
- Blog images: `https://picsum.photos/seed/passage-blog-<1-2>/600/400`
- CTABottom bg: `https://picsum.photos/seed/passage-cta/1920/400`

## Fidelity Traps

- **Brand color is `#f6214b`** (bright red), NOT the Colorlib page's
  blue `#1a73e8`. The ColorLib listing page uses its own blue branding;
  the actual Immigration template uses red.
- **Poppins only** — no other fonts. Body weight 300, headings weight 600.
- **Tag badges are dark `#222` by default**, turning `#f6214b` on card
  hover. Do not make them red by default.
- **Grayscale logos** — brand logos are grayscale with color on hover.
  This is a deliberate design choice, not an omission.
- **The booking form has a "Messege" typo** in the original — keep or
  fix to "Message" (either is acceptable).
- **Review carousel** has 4 items with 2 alternating names — NOT a
  random set of 4 different reviewers.
- **CallToTop left text** is 30px weight-100 with two bold words
  ("planning", "Dream") — the weight contrast is the key visual.
- **Service cards** all share identical placeholder copy in the original —
  paraphrase each differently per replication rules.
