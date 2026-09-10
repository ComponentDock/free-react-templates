# Coincast (ColorLib Coinbuzz) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-coincast`. Recreation name: **Coincast** (NEW name —
> the ColorLib source keeps its name "Coinbuzz").

## Source mapping

- **ColorLib item:** "Coinbuzz" (TEMPLATES.md line 944; section
  "## C" at line 912).
- **Source URL:** https://colorlib.com/wp/template/coinbuzz/
- **Preview URL — REACHABLE (verified 2026-09-10 by direct fetch):**
  **`https://preview.colorlib.com/theme/coinbuzz/coinbuzz/index.html`**
  (HTTP 200, 45,798 bytes — the actual homepage; the outer preview at
  `/theme/coinbuzz/` is just a demo gallery page, NOT the template).
- **Preview CSS:** `assets/css/styles.css` (45,943 bytes — main styles)
  + `assets/css/responsive.css`. Also loads: bootstrap 3.3.7, animate.css,
  owl.carousel, swiper, font-awesome, flaticon, magnific-popup, metisMenu.
  Fonts: **Open Sans** (body) + **Roboto** (headings) via Google Fonts.
- **Note:** This is a multi-page template (12 HTML pages). This spec
  covers only the HOMEPAGE (`index.html`). Implementer should focus on
  homepage sections only.

## Reference research (done — do not redo)

### Screenshot (coinbuzz-free-template.jpg, 1200×946 JPEG)

Browsed visually via vision analysis 2026-09-10. The screenshot shows a
preview/gallery page with the title "coinbuzz" in large text, a subtitle
"Responsive Bitcoin HTML5 Template", links to "Home Page" and "Blog Pages",
and a "buy now" button. Below are thumbnail previews of the 12 sub-pages
(Home One/Two/Three, About, Service, Service Details, Blog variants, Shop,
Contact). The actual template design is visible in the thumbnails: dark
header with orange accent, hero with city/crypto background, orange CTA
buttons. **The screenshot shows the PREVIEW PAGE, not the actual template —
use the live homepage for design reference.**

### Design tokens (live homepage stylesheet + rendered page, verified 2026-09-10)

| Token         | Value                                  | Use                                                                 |
| ------------- | -------------------------------------- | ------------------------------------------------------------------- |
| Font primary  | 'Open Sans', sans-serif                | Body text, paragraphs, inputs, general UI                           |
| Font heading  | 'Roboto', sans-serif                   | Headings, section titles, navigation                                |
| Brand orange  | `#ff7700`                             | Primary accent (76 occurrences in CSS), buttons, logo "Buzz", CTA  |
| Orange hover  | `#ff8d29`                             | Button hover state                                                  |
| Orange light  | `#ffbb19`                             | Secondary accent (minimal)                                          |
| Dark bg       | `#242424`                             | Header bottom bar, footer, about area, expert area                  |
| White         | `#fff`                                | Text on dark, button text, page default bg                          |
| Light gray    | `#f4f4f4`                             | Featured area, service area, about stats, blog, special bg          |
| Border gray   | `#e5e5e5`                             | Card borders, dividers                                              |
| Medium gray   | `#616162`                             | Secondary text, muted content                                       |
| Button style  | bg `#ff7700`, white text, radius 4px  | Uppercase, weight 700, 14px/24px padding                            |
| Section title | 36px, weight 700, centered, orange line | Orange underline image below heading                              |
| Card shadow   | 0px 5px 20px rgba(0,0,0,0.05)        | Featured cards, service items, blog cards                            |
| Counter style | 48px, weight 700, white on dark bg     | Stats: 1454, 759, 1250, 2391                                       |
| Testimonial   | Avatar (left) + quote (right)          | Star rating (fa-star), quote icon (fa-quote-right)                  |
| Slider overlay| dark semi-transparent                   | Text readability over hero images                                    |

## Section order (from live homepage DOM)

1. **Header** — two-bar: top (white, contact info) + bottom (`#242424`,
   logo + nav + "Get a Quote" button)
2. **Hero Slider** — owl-carousel, 2 slides, full-width bg images with
   dark overlay, heading "We Are Everyone's Coinbuzz Agency" + CTA
3. **Featured** — `#f4f4f4` bg, 3 equal cards (image + orange icon badge
   + title + desc + "Read More")
4. **About Content** — `#242424` bg, left text + right image (hidden mobile)
5. **Services** — white bg, "Why Choose Bitcoin" title, 3-col asymmetric
   layout (text + 4 service items with icons)
6. **About/Stats** — `#242424` bg, left image + right 2×2 counter grid
7. **Testimonials** — white bg, owl-carousel, avatar + quote + stars
8. **Special** — `#ff7700` orange bg, CTA with "Join Now" button
9. **Resources** — white bg, 3 cards (icon + title + desc)
10. **Expert** — `#242424` bg, team member cards with social icons
11. **Contact** — split: left bg image (hidden mobile) + right form
    (name/email/phone/subject/message + submit)
12. **Team** — white bg, "Our Team" with member cards
13. **Investments** — white bg, CTA "Need to take care of your Currency
    Investments" + buttons + side image
14. **Blog** — `#f4f4f4` bg, 3 cards (image + date badge + title + excerpt)
15. **Footer** — `#242424` bg, 3-column widgets + copyright + social icons

## Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/coincast` from the simplest existing app, rename
       package to `@free-react-templates/coincast`, add Open Sans (400/600/700)
       + Roboto (400/500/700) Google Fonts `<link>` in index.html, set
       `public/CNAME` = `coincast.free.componentdock.com` + `"homepage"`.
       Register workspace in package-lock.json.
2. [ ] Write the spec-traceable test suite FIRST (Vitest + Testing Library,
       100% coverage): Header (two bars, logo, nav, hamburger toggle,
       "Get a Quote" button), HeroSlider (2 slides, heading, paragraph,
       CTA, navigation), Featured (3 cards with images/icons/titles),
       AboutContent (dark bg, text + feature list + button), Services
       (title + 4 items in asymmetric layout), Stats (4 counters),
       Testimonials (carousel with avatar + quote + stars), Special
       (orange bg CTA), Resources (3 cards), Expert (team cards), Contact
       (form with background image), Team (member cards), Investments
       (CTA with side image), Blog (3 cards with date badges), Footer
       (3-column widgets + copyright + social), App (landmarks, document
       title "Coincast — Cryptocurrency Agency").
3. [ ] Layout shell: page bg `#fff`, Open Sans + Roboto fonts, section
       containers with correct bg colors (`#242424`, `#f4f4f4`, `#ff7700`).
4. [ ] Header component: two-bar layout. Top bar: white bg, contact info
       (phone + email) right-aligned. Bottom bar: `#242424` bg, logo
       ("Coin" white + "Buzz" orange) left, nav links center (white,
       uppercase, weight 700, 14px, 20px gap), "Get a Quote" orange
       button right. Hamburger for mobile.
5. [ ] HeroSlider component: full-width bg images (picsum placeholders)
       with dark overlay. Content: "We Are" (white) + "Everyone's"
       (orange) heading, paragraph, "Read More" button. 2 slides with
       alternating text alignment (left / right). Navigation dots.
6. [ ] Featured component: `#f4f4f4` bg, 3 equal cards in a row. Each:
       rounded image, orange circular icon badge, title, description,
       "Read More" link. Shadow + hover lift.
7. [ ] AboutContent component: `#242424` bg, 2-col layout. Left: heading,
       paragraph, feature list with check icons, "Learn More" orange
       button. Right: large image (hidden on mobile).
8. [ ] Services component: white bg, centered "Why Choose Bitcoin" title
       with orange underline. 3-col asymmetric: left (text +
       "Free Consultation"), middle (2 stacked service items with
       flaticon→lucide icons), right (2 stacked service items).
9. [ ] Stats component: `#242424` bg, left image + right 2×2 counter grid.
       Counters: 1454, 759, 1250, 2391 with labels.
10. [ ] Testimonials component: white bg, carousel with slides. Each:
       avatar image left (3-col), quote content right (9-col): name,
       star rating, paragraph, quote icon.
11. [ ] Special component: `#ff7700` bg, centered heading + "Join Now"
       white button.
12. [ ] Resources component: white bg, section title + 3 cards (icon +
       title + description).
13. [ ] Expert component: `#242424` bg, team member cards with photos,
       names, roles, social icons.
14. [ ] Contact component: split layout. Left: background image (hidden
       mobile). Right: "Request A Call Back" form (Name, Email, Phone,
       Subject, Message textarea, "Submit Now" button).
15. [ ] Team component: white bg, "Our Team" section with member cards
       (photo, name, role, social links).
16. [ ] Investments component: white bg, left text ("Need to take care
       of your Currency Investments") + "View Services" / "Contact Us"
       buttons + right side image (hidden mobile).
17. [ ] Blog component: `#f4f4f4` bg, 3 cards (image, orange date badge,
       title, excerpt, "Read More" link).
18. [ ] Footer component: `#242424` bg, 3-column widgets (About, Quick
       Links, Latest News) + copyright bar with social icons. Link to
       https://www.componentdock.com/.
19. [ ] Run `npm run verify:app -- coincast` (typecheck → lint → vitest
       100% → build) and fix until green.
20. [ ] Open PR `feat/template-coincast` → merge immediately
       (`gh pr merge --squash --delete-branch`); PR description must
       include: source URL, preview URL (the `/coinbuzz/index.html` one),
       token list (Open Sans + Roboto, orange `#ff7700`, dark `#242424`,
       light `#f4f4f4`, 4px radius buttons), and what differs (renamed
       "Coincast", Google Fonts, lucide icons, picsum placeholders,
       homepage only — not 12-page template, Component Dock footer).
21. [ ] Bookkeeping after merge: mark TEMPLATES.md line 944 `[x]` + surge
       URL (`https://coincast.free.componentdock.com`), `npm run
       readme:status`, push.

## Picsum placeholder plan

| Section          | Seed pattern                     | Size       | Notes                      |
| ---------------- | -------------------------------- | ---------- | -------------------------- |
| Hero slide       | `coincast-hero-1` / `coincast-hero-2` | 1920×800 | 2 slider images            |
| Featured card 1  | `coincast-feature-1`             | 600×400    | Card thumbnail             |
| Featured card 2  | `coincast-feature-2`             | 600×400    | Card thumbnail             |
| Featured card 3  | `coincast-feature-3`             | 600×400    | Card thumbnail             |
| About image      | `coincast-about`                 | 800×600    | Side image in about section|
| Stats image      | `coincast-stats`                 | 800×600    | Side image in stats section|
| Testimonial avatars | `coincast-testimonial`       | 200×200    | Avatar images              |
| Contact bg       | `coincast-contact`               | 1200×800   | Background image           |
| Team members     | `coincast-team-1/2/3/4`         | 400×500    | Team member photos         |
| Investments img  | `coincast-invest`                | 600×500    | Side image in CTA          |
| Blog cards       | `coincast-blog-1/2/3`           | 600×400    | Blog post thumbnails       |
| Expert photos    | `coincast-expert-1/2/3/4`      | 400×500    | Expert section photos      |

## Icon mapping (Flaticon/FontAwesome → lucide)

| Source glyph                    | Recreation                |
| ------------------------------- | ------------------------- |
| `flaticon-bitcoin-9` (Safe)    | lucide `Shield`           |
| `flaticon-profits` (Exchange)  | lucide `ArrowLeftRight`   |
| `flaticon-exchange-1` (Wallet) | lucide `Wallet`           |
| `flaticon-bitcoin-7` (Support) | lucide `Headphones`       |
| `fa fa-star` / `fa fa-star-o`  | lucide `Star` (filled/outline) |
| `fa fa-quote-right`            | lucide `Quote`            |
| `fa fa-facebook`               | lucide `Facebook`         |
| `fa fa-twitter`                | lucide `Twitter`          |
| `fa fa-linkedin`               | lucide `Linkedin`         |
| `fa fa-behance`                | lucide `Figma` (closest)  |
| `fa fa-dribbble`               | lucide `Dribbble`         |
| `fa fa-google-plus`            | lucide `Globe` (fallback) |

Probe all icon exports with `node -e "console.log(typeof require('lucide-react').X)"` before use.
