# Recount — Design Notes & Task Outline

## Source

- ColorLib "Megasis": https://colorlib.com/wp/template/megasis/
- Preview: https://preview.colorlib.com/theme/megasis/
- Category: Magazine / News Blog

## Section Order (fidelity to original)

1. **Header — Top Bar**
   - Logo left, "Sign in" button + social icon row right
   - Social icons: Facebook, Instagram, Twitter, YouTube, Vimeo, LinkedIn
   - Background: white, horizontal padding ~88px on desktop

2. **Header — Sticky Nav**
   - Logo (hidden on scroll, shown as logo2), main category nav, search input
   - Categories: Home, Page (dropdown: Blog, Blog Details, Post Details, Category, Element, Contact), Science, Technology, Beauty, Health, Arts & Culture, Opinion, Videos, Gallery
   - Becomes sticky on scroll; mobile hamburger menu
   - Border-bottom on nav area

3. **What's New**
   - Two-column layout: left 7 cols (large featured article), right 5 cols (3 stacked smaller articles)
   - Each card: image, colored category tag (span), headline (h2/h4), author byline
   - Featured article has larger headline (h2), smaller ones h4

4. **Arts & Culture**
   - Section title with 4px solid black top-border + "See All" link
   - 3-column card grid (col-lg-4)
   - Third card: video overlay (circular play button on image)
   - Right sidebar ad slot (hidden on non-xl)

5. **Science Update**
   - Same section title pattern
   - 4-column card grid (col-lg-3)
   - Same card pattern: image, category tag, headline, author

6. **Video Gallery**
   - Same two-column layout as What's New but for videos
   - Left: large video with play button overlay
   - Right: 3 stacked video cards with duration badge (clock icon + "5:56")

7. **Science Update Carousel**
   - Horizontal scroll/slider of 4-column cards
   - Below: centered ad banner

8. **Newsletter Subscription**
   - Light grey background (#F3F3F3)
   - Centered: heading "Subscribe to the newsletter", subtitle, email input + red "Send Now" button, disclaimer

9. **Footer**
   - Dark background (#131313)
   - 4 columns: About, Categories (×2), Quick Links
   - Bottom bar: copyright + Component Dock link

10. **Back to Top**
    - Scroll-to-top button, appears on scroll

## Key Fidelity Notes

- **Fonts:** Chivo (body/nav/buttons) + Shippori Mincho (headings) — import from Google Fonts
- **Brand red:** #C70D0D — used on CTA buttons, category tags on hover, accent borders
- **Sharp buttons:** No border-radius on any CTA; rectangular
- **Section titles:** Always have 4px solid #131313 top-border + padding-top: 30px
- **Card pattern:** Image → category span → headline → author — consistent across all sections
- **Mobile:** Hamburger menu, stacked single-column layout, search hidden on xs

## Component Map (proposed)

- `src/components/Header.tsx` — top bar + sticky nav
- `src/components/WhatsNew.tsx` — featured article + side cards
- `src/components/CategoryGrid.tsx` — reusable 3/4-column article grid (used for Arts & Culture, Science Update)
- `src/components/VideoGallery.tsx` — video cards with duration badges
- `src/components/VideoCarousel.tsx` — horizontal slider section
- `src/components/Subscribe.tsx` — newsletter form
- `src/components/Footer.tsx` — dark footer with link columns
- `src/components/BackToTop.tsx` — scroll-to-top button

## Test Strategy

- Unit tests per component (Vitest + Testing Library)
- 100% coverage on all components except main.tsx
- Test: header renders, nav links present, sticky behavior, What's New layout, grid columns, video duration display, form submission, footer links, back-to-top scroll
