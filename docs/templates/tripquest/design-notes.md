# Tripquest — design notes

Recreation of ColorLib **Travel** (travel agency landing template).
Source: https://colorlib.com/wp/template/travel/ ·
Preview analyzed: https://preview.colorlib.com/theme/travel/
(HTTP 200, 41,945 bytes HTML + 68,736 bytes `css/main.css`, 2026-10-01;
saved to `/tmp/travel-preview.html`, `/tmp/travel-main.css`).
Screenshot reviewed: `travel-free-template.jpg` (hero treatment
authoritative; demo brand "Travelista" in the screenshot is NOT reused).

## Structure order (1:1 with preview DOM)

1. Top bar + Navbar — fixed translucent header over the hero. Top bar:
   "Visit Us" / "Buy Tickets" left, social icons right (white → yellow
   hover). Menu bar (`rgba(255,255,255,0.15)`): circular logo mark +
   wordmark left; uppercase white 12px/500 links right — Home, About,
   Packages, Hotels, Insurence [sic in source], Blog ▾, Pages ▾,
   Contact. On scroll: top bar hides, bar bg → `rgba(34,34,34,0.9)`.
2. Hero (banner) — full-bleed coastal photo + `rgba(4,9,30,0.4)`
   overlay. Left 6-col: eyebrow "Away from monotonous life" (uppercase
   14px, ls 2px), white uppercase h1 "Magical Travel" (60px), white
   paragraph, square yellow "Get Started" (hover `#222`/white). Right
   4-col: white booking widget — tab strip Flights (active white) /
   Hotels / Holidays (inactive `rgba(255,255,255,0.25)`), white panel
   with 6 square inputs (From, To, Start, Return, Adults, Child),
   square yellow submit per tab ("Search flights"/"Search Hotels"/
   "Search Holidays").
3. Popular Destinations — white bg, centered h1 + grey subtext; 3
   photo cards (Mountain River/Paraguay $150, Dream City/Paris $250,
   Cloud Mountain/Sri Lanka $350). Hover: `rgba(4,9,30,0.4)` overlay
   fades in + yellow price badge (`#f8b600`, charcoal 14px/600, square)
   fades in.
4. We Provide Affordable Prices — cover-image section background
   (reference `price-bg.png` → picsum placeholder); 3 white cards
   (`padding: 30px`): Cheap / Luxury / Camping Packages. Card h4
   centered with 1px `#f8b600` bottom rule; 6 rows each (New York,
   Maldives, Sri Lanka, Nepal, Thailand [source: "Thiland" — fix],
   Singapore) with light price pills (`#f9f9ff` bg, `#eee` border,
   e.g. `$1500`).
5. Other issues we can help you with — centered h1 + subtext; 4-up
   cards: image thumb (`overflow: hidden`, zoom ~1.05 on hover), h4
   (Rent a Car, Cruise Booking, To Do List, Food Features), grey blurb.
6. Testimonial from our Clients — `#f9f9ff` band, centered h1 +
   subtext; slider of white cards (`padding: 25px 30px 12px`): circular
   avatar left (`margin-right: 30px`), quote, name h4 (Harriet Maxwell,
   Carolyn Craig pattern), 5-star row (reference fills: 4,3,4,3…).
7. Custom-package CTA (home-about) — split band: dark left half
   ("Did not find your Package? / Feel free to ask us. We'll make it
   for you" + grey blurb + square yellow "Request Custom Price",
   `padding-left: 20%` in reference); full-bleed photo right half.
8. Latest from Our Blog — centered h1 + subtext; carousel of post
   cards: image, tag chips (Travel, Life Style), h4 title (Low Cost
   Advertising / Creative Outdoor Ads / It's Classified How To Utilize
   Free pattern), grey excerpt, date "31st January, 2018".
9. Footer — `#04091e`, `padding-top: 100px`. Four widgets: About
   Agency (blurb), Navigation Links (2 link cols: Home/Feature/Services/
   Portfolio + Team/Pricing/Blog/Contact), Newsletter (blurb + input +
   square yellow submit), InstaFeed (4-image grid). Bottom bar:
   copyright left (links Component Dock in the recreation), social
   icons right.

## Design tokens (from main.css)

| Token              | Value                                  | Usage |
| ------------------ | -------------------------------------- | ----- |
| yellow (primary)   | `#f8b600`                              | all CTA buttons, nav-link hover, destination price badge, price-card h4 underline, newsletter submit |
| heading charcoal   | `#222222`                              | h1–h6, button text on light pills |
| body grey          | `#777777`                              | paragraphs, subtexts, card blurbs |
| light lavender     | `#f9f9ff`                              | testimonial section bg, light price pills, genric-btn default bg |
| footer navy        | `#04091e`                              | footer bg (same navy family as the overlay) |
| hero overlay       | `rgba(4, 9, 30, 0.4)`                  | hero + destination-card hover overlay |
| scrolled header    | `rgba(34, 34, 34, 0.9)`                | `#header.header-scrolled` bg |
| menu translucent   | `rgba(255, 255, 255, 0.15)`            | `.main-menu` over the hero |
| inactive tab       | `rgba(255, 255, 255, 0.25)`            | booking-widget inactive tabs |
| border grey        | `#eee`                                 | form input borders, price-pill borders |
| palette extras     | `#4cd3e3` `#38a4ff` `#f4e700` `#f44a40` | genric-btn success/info/warning/danger variants (unused on this page; kept for token completeness) |
| font               | Poppins (`"Poppins", sans-serif`)      | ALL text — load 300–700 via Google Fonts `<link>` |
| buttons            | radius 0, 14px uppercase 500, `0 30px` padding, 40px line-height | `.genric-btn` + `.primary-btn`; hero CTA yellow → `#222` hover; genric primary yellow → white/yellow-border hover |
| section rhythm     | `section-gap` (≈120px top/bottom)      | every content section |
| section titles     | centered h1 charcoal + grey paragraph  | `.menu-content .title` pattern |

## Fidelity notes / recreation decisions

- **Name:** `tripquest` (single lowercase word). Never reuse the source
  slug `travel` or the screenshot demo brand "Travelista" in app files.
- **Assets:** hero photo, price-section bg, CTA photo, destination/
  service/blog/insta images → `https://picsum.photos/seed/tripquest-<n>/<w>/<h>`
  (deterministic per template). No copied images, fonts, or CSS.
- **Icons:** Linearicons + Font Awesome in the source → `lucide-react`
  (social: Facebook/Twitter/Dribbble/Behance approximations; stars for
  ratings; Menu/X for the mobile nav; calendar hints optional on date
  inputs).
- **JS/jQuery:** tabs, testimonial slider, blog carousel → React state
  (no owl-carousel, no jQuery, no magnific-popup, no nice-select).
- **Copy:** paraphrase freely but keep the same *kind* of content
  (eyebrow + headline + blurb + CTA; card title + blurb + link; etc.).
  Fix the source's "Insurence" typo? Keep the same *kind* of nav items;
  correcting the spelling to "Insurance" is acceptable and preferred.
  "Thiland" → "Thailand".
- **Bootstrap:** do not import Bootstrap; implement the 12-col rhythm
  with Tailwind (container, grid, gap) matching visual proportions.
- **Footer attribution:** replace the source's Colorlib credit with the
  mandatory Component Dock link (`https://www.componentdock.com/`,
  branded "Component Dock").
- **No `colorlib` strings anywhere in `apps/tripquest`** — provenance
  lives only in this spec, `docs/templates/tripquest/`, and
  TEMPLATES.md.
