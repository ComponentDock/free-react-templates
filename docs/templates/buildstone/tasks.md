# Buildstone (ColorLib Topbuilder) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-buildstone`. Recreation name: **Buildstone** (NEW name
> — the ColorLib source keeps its name "Topbuilder").

## Source mapping

- **ColorLib item:** "Topbuilder" (TEMPLATES.md line 1357; section
  "## Construction (16)"). The slug is `topbuilder`.
- **Source URL:** https://colorlib.com/wp/template/topbuilder/
- **Preview URL — REACHABLE (verified 2026-09-16):**
  **`https://preview.colorlib.com/theme/topbuilder/`** (HTTP 200, 45,822 bytes).
- **Preview CSS:** `css/style.css` (68,476 bytes) + Bootstrap + Animate.css +
  Owl Carousel. Fonts: Roboto + Oswald (Google Fonts via `<link>`).

## Reference research (done — do not redo)

### Screenshot (`topbuilder-construction-company-website-template.jpg`)

Construction company template: dark navy header bar with gold/yellow accents.
Hero slider with dark overlay and white/gold text. White content sections
alternating with light gray (#f5f5f5) backgrounds. Dark parallax sections for
achievements and featured works. Gold (#f6b60b) is the dominant accent color
on buttons, highlights, and CTAs.

### Live DOM structure (14 sections, top to bottom)

1. `top_header_area` — dark bar, phone/email/hours left, social icons right
2. `navbar` — white sticky nav with logo, Home/About/Services/Portfolio/Team/Blog/Contact
3. `slider_area` — full-width hero slider, 2 slides with dark overlay, gold "Read More" CTA
4. `professional_builder` — 4-column icon bar: Professional Builder, We Deliver Quality, Always On Time, We Are Passionate
5. `about_us_area` — heading "ABOUT US", 2-col: text + "Contact Now" button | image
6. `what_we_area` — heading "WHAT WE OFFER", 3-col cards: Building Construction, Project Planning, Interior Design (each with image + icon)
7. `our_feature_area` — heading "Our Features", 2-col: worker image | "WHY CHOOSE US" list (30+ Years, Building the Future, Unique Design)
8. `our_services_area` — heading "Our Services", filterable portfolio grid (Architecture/Building/Construction/Design/Painting tabs)
9. `our_team_area` — heading "Our Team", 4-col cards with photo, social links, name, role
10. `our_achievments_area` — dark parallax, heading "Our Achievements", 4 counter stats (800/230/1390/125)
11. `testimonial_area` — heading "Our TESTIMONIALS", carousel with avatar/name/role/quote
12. `featured_works` — dark parallax, heading "Our Featured Works", 4-col gallery with hover overlays
13. `latest_blog_area` — heading "Our Latest Blog", 3-col blog cards with image/title/author/date/excerpt
14. `our_partners_area` — heading "Our Partners", logo slider, then gold "Booking Now" CTA bar
15. `footer_area` — 4-col dark footer (About/Quick Links/Twitter/Contact) + copyright

### Design tokens extracted from CSS

| Token | Value | Usage |
|-------|-------|-------|
| Brand gold | `#f6b60b` | Buttons, highlights, links, accents |
| Dark primary | `#111f29` | Navbar bg, parallax sections, text on light |
| Dark secondary | `#222222` | Body text, button text, headings |
| Gray bg | `#f5f5f5` | Alternating section backgrounds |
| Light gray text | `#888888` / `#555555` | Body copy, descriptions |
| White | `#fff` / `#fefefe` | Text on dark, content areas |
| Font: body | Roboto (400, 700) | All body text |
| Font: headings | Oswald | Hero banner headings |
| Button style | 180px wide, uppercase Roboto bold 18px/59px, gold bg, dark text; hover: dark bg scales in from center, white text |
| Card radius | 10px | Service cards, blog cards |
| Avatar radius | 50% | Team members, testimonials |
| Parallax sections | Background image + `rgba(0,0,0,0.8)` overlay | Achievements, Featured Works |

## Section implementation order

1. `TopHeader` — dark bar, contact info, social icons
2. `Navbar` — white sticky nav, mobile hamburger
3. `HeroSlider` — full-width slider with CTA (simplify to single image for v1)
4. `FeaturesBar` — 4-column icon+text bar
5. `AboutUs` — heading + 2-col text/image + gold button
6. `WhatWeOffer` — heading + 3 service cards
7. `OurFeatures` — heading + image/list split
8. `ServicesPortfolio` — heading + filter tabs + gallery grid
9. `OurTeam` — heading + 4 member cards
10. `Achievements` — dark parallax + 4 counter stats
11. `Testimonials` — heading + carousel cards
12. `FeaturedWorks` — dark parallax + gallery grid
13. `LatestBlog` — heading + 3 blog cards
14. `Partners` — heading + logo slider + booking CTA
15. `Footer` — 4-col dark footer + copyright with Component Dock link

## Fidelity notes

- Hero slider: simplify from camera-slider to a single static hero image with
  dark overlay for v1; implement carousel later if needed
- Portfolio filter: can use React state + conditional rendering; no jQuery needed
- Partners carousel: use CSS scroll-snap or simple flex overflow; Owl Carousel
  not needed
- Achievements counters: use React state with useEffect for animated counting
  on scroll into view (IntersectionObserver)
- All placeholder images via picsum.photos seeded with "buildstone-{n}"
- All icons via lucide-react (Home, Building2, Clock, ThumbsUp, Wrench,
  Users, Award, QuoteRight, ChevronRight, etc.)
- Font Awesome icons in original → replace with lucide-react equivalents
