# Savorly (ColorLib Buri) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-savorly`. Recreation name: **Savorly** (NEW name —
> the ColorLib source keeps its name "Buri").

## Source mapping

- **ColorLib item:** "Buri" (TEMPLATES.md line 920; section "## Bootstrap Restaurant (26)").
- **Source URL:** https://colorlib.com/wp/template/buri/
- **Preview URL — REACHABLE (verified 2026-09-10):** `https://preview.colorlib.com/theme/buri/`
- **Preview CSS:** `css/style.css` (191KB, comprehensive custom styles + Bootstrap), `css/bootstrap.min.css`, `css/animate.css`, `css/owl.carousel.min.css`, `css/themify-icons.css`, `css/flaticon.css`, `css/magnific-popup.css`, `css/slick.css`, `css/gijgo.min.css`, `css/nice-select.css`, `css/all.css`. Scripts: jQuery, Bootstrap, Owl Carousel, Magnific Popup, Slick, Gijgo datepicker, Nice Select.
- **Fonts:** Google Fonts — Playfair Display (serif, headings) + Montserrat (sans-serif, body).

## Reference research (done — do not redo)

### Preview DOM structure (fetched 2026-09-10, 22KB HTML)

Sections in order:
1. `banner_part` — Hero with background image, heading "Expensive but the best", subtext, CTA
2. `about_part` — Two-column about section with text and image
3. `food_menu` — 2×3 grid of menu items with filter tabs
4. `intro_video_bg` — Video background section with play button
5. `review_part section_padding` — Testimonials carousel
6. `contact_part section_padding` — Contact info (address, hours, phone, email)
7. Footer — Quick links, newsletter, copyright

### Screenshot analysis

The preview screenshot (buri-free-template.jpg) shows:
- Dark, moody restaurant aesthetic with warm lighting
- Full-width hero with food photography background and text overlay
- Warm tan/brown (#d6ad86) as the primary brand color
- Clean typography with Playfair Display for headings
- Grid layout for menu items with food photography
- Testimonial section with author photos
- Professional footer with newsletter signup

### Design tokens (live stylesheet, verified 2026-09-10)

| Token       | Value                     | Use                                                  |
| ----------- | ------------------------- | ---------------------------------------------------- |
| Page BG     | `#f9f9ff` (light lavender)| Alternating section backgrounds                       |
| Primary     | `#d6ad86` (warm tan)      | Navbar brand, dividers, primary accent                |
| Heading     | `Playfair Display`, serif | All section headings, hero text                       |
| Body        | `Montserrat`, sans-serif  | Body copy, UI elements, navigation                    |
| Body text   | `#828bb2` (slate gray)    | Paragraph text and descriptions                       |
| Heading ink | `#2c3033` (near-black)    | Section headings                                      |
| Muted       | `#999999` (gray)          | Secondary text, captions                              |
| Navy        | `#415094`                 | Primary CTA buttons                                   |
| Sky blue    | `#4cd3e3`                 | Secondary accents                                     |
| Yellow      | `#f4e700`                 | Highlight accents                                     |
| Red-orange  | `#f44a40`                 | Alert accents                                         |
| Blue        | `#38a4ff`                 | Additional accent                                     |
| Mint green  | `#73fbaf`                 | Success accents                                       |
| Purple-blue | `#6382e6`                 | Alternate accent                                      |
| Pink        | `#e66686`                 | Alternate accent                                      |
| Amber       | `#ffb830`                 | Alternate accent                                      |
| Button radius | ~4px                    | Small rounded corners                                 |
| Hero BG     | Full-width food image     | Dark overlay with text                                |

## Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/savorly` from the simplest existing app, rename package
       to `@free-react-templates/savorly`, add Playfair Display (400, 700)
       and Montserrat (400, 500, 600, 700) Google Fonts `<link>` in index.html,
       set `public/CNAME` = `savorly.free.componentdock.com` + `"homepage"`.
       Register the workspace in package-lock.json.
2. [ ] Write the spec-traceable test suite FIRST (Vitest + Testing Library,
       100% coverage): Navbar (sticky, hamburger on mobile, section links),
       Hero (heading, subtext, CTA, background image with overlay),
       About (heading, description, two-column on desktop, Learn More button),
       FoodMenu (6 items in grid, images, names, descriptions, prices,
       category filter tabs), VideoIntro (background image, play button),
       Testimonials (heading, carousel cards, author names),
       Contact (address, hours, phone, email), Footer (quick links,
       newsletter form, Component Dock attribution).
3. [ ] Hero section: full-width background image from picsum.photos with
       dark overlay (`bg-black/50`), Playfair Display heading, Montserrat
       subtext, rounded CTA button in #415094 navy.
4. [ ] Navbar: sticky top, #d6ad86 tan background, white text, logo left,
       links right, hamburger on mobile. Nav items: Home, About, Menu,
       Blog, Elements, Contact.
5. [ ] About section: two-column layout (text left, image right on desktop,
       stacked on mobile). Heading in Playfair Display, body in Montserrat,
       "Learn More" button in #415094 navy.
6. [ ] Food Menu: section heading "Popular Menu" / "Delicious Food Menu",
       2×3 grid of menu items. Each item: picsum.photos food image, dish
       name (Playfair Display), description (Montserrat), price. Category
       filter tabs at top.
7. [ ] Video/Intro: full-width picsum.photos background with dark overlay,
       centered play button (lucide PlayCircle icon). Click opens video
       modal or external link.
8. [ ] Testimonials: section heading "What they said", carousel of review
       cards. Each card: quotation text, author name, author photo
       (picsum.photos avatar).
9. [ ] Contact: section with business info (address, hours, phone, email)
       in a grid layout. No map iframe — just the information cards.
10. [ ] Footer: quick links (About, Menu, Reservation, Blog, Breakfast,
        Lunch, Dinner), newsletter subscription form with email input and
        subscribe button, copyright with Component Dock link.
11. [ ] Run `npm run verify:app -- savorly` (typecheck → lint → vitest
        100% → build) and fix until green.
12. [ ] Open PR `feat/template-savorly` → merge immediately
        (`gh pr merge --squash --delete-branch`); PR description must
        include: source URL, preview URL, token list (tan #d6ad86, Playfair
        Display headings, Montserrat body, #415094 navy CTAs), and what
        differs (renamed "Savorly", Google Fonts, lucide icons replacing
        themify/flaticon, picsum.photos placeholders, Component Dock footer).
13. [ ] Bookkeeping after merge: mark TEMPLATES.md line 920 `[x]` + surge
        URL (`https://savorly.free.componentdock.com`), `npm run readme:status`,
        push.
