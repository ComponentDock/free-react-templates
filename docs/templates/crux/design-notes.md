# Crux — Design Notes & Task Outline

## Source

- **ColorLib template:** Olla
- **Preview URL:** https://preview.colorlib.com/theme/olla/
- **Source page:** https://colorlib.com/wp/template/olla/
- **Screenshot:** `olla-colorlib-template.jpg` (TEMPLATES.md line 611)

## Section order (top to bottom)

1. Header top bar — dark navy `#041735`, white text, announcement + pill CTA
2. Header bottom — sticky, logo + nav + "Free Quote" blue CTA
3. Hero slider — headline + email input + hero image + decorative shape
4. Services — 3-column icon cards (Unlimited Components, Awesome Support,
   Responsive Design)
5. About — left image + right feature list (3 items)
6. Brand logos — heading + CTA + logo carousel
7. FAQ accordion + image — 3 Bootstrap-style accordion items + right image
8. Pricing — pricing cards (2–3 tiers)
9. Gallery — image grid with hover overlay (title + description)
10. Newsletter CTA — heading + "Start Free Trial" button
11. Footer — light gray #F1FBFF, logo + Quick Links + Support + Newsletter
    form + social icons + copyright (Component Dock link)

## Design tokens

| Token           | Value               | Usage                          |
| --------------- | ------------------- | ------------------------------ |
| brand-primary   | #2845BA             | Buttons, links, accents        |
| brand-dark      | #041735             | Header bar, headings           |
| brand-orange    | #ec583a             | Button hover sweep             |
| bg-light        | #F1FBFF             | Footer, gray-bg sections       |
| text-heading    | #041735             | All headings                   |
| text-body       | #5C6168             | Body paragraphs                |
| text-subtitle   | #656565             | Section subtitles              |
| border-light    | #DBDEE9             | Card/header borders            |
| font-heading    | Cabin (500-700)     | h1–h6, buttons                 |
| font-body       | Open Sans (400-800) | Body text, nav links           |
| btn-primary     | #2845BA, 4px radius | `.btn_1` style CTA buttons     |
| btn-pill        | 30px radius         | `.btn2` style announcement bar |
| section-padding | 120px top/bottom    | Desktop section spacing        |

## Component mapping

| Section         | Component file      | Shared UI            |
| --------------- | ------------------- | -------------------- |
| Navbar          | Navbar.tsx          | —                    |
| AnnouncementBar | AnnouncementBar.tsx | —                    |
| Hero            | Hero.tsx            | —                    |
| Services        | Services.tsx        | Card, lucide icons   |
| About           | About.tsx           | Card                 |
| BrandLogos      | BrandLogos.tsx      | —                    |
| FAQ             | FAQ.tsx             | — (accordion state)  |
| Pricing         | Pricing.tsx         | Card, Button         |
| Gallery         | Gallery.tsx         | —                    |
| NewsletterCTA   | NewsletterCTA.tsx   | Button               |
| Footer          | Footer.tsx          | Button, social icons |

## Fidelity notes

- The original uses Bootstrap grid (col-xl-4, col-lg-4, etc.) — translate
  to Tailwind grid/flex equivalents with matching column counts.
- The hero uses a slider/Carousel (owl.carousel) — simplify to a static
  hero with the first slide's content.
- Brand logos use owl.carousel — simplify to a static flex row.
- FAQ uses Bootstrap accordion with `data-bs-toggle="collapse"` — use
  React state for accordion toggle.
- Gallery uses hover-direction-snake effect — simplify to CSS hover
  overlay with `opacity` transition.
- Button styles: `.btn_1` (blue filled, 4px radius) maps to Tailwind
  `bg-[#2845BA] text-white rounded px-8 py-4`. Hover: transparent bg
  with blue border.
- The `.gray-bg` class (#F1FBFF) applies to footer and any gray sections.
- Section titles use Cabin font with blue overline text above h2.

## Tasks

1. [ ] Scaffold `apps/crux` (copy simplest existing app, rename package)
2. [ ] Create AnnouncementBar component
3. [ ] Create Navbar component with sticky behavior
4. [ ] Create Hero component with email input + CTA
5. [ ] Create Services component (3-column card grid)
6. [ ] Create About component (image + feature list)
7. [ ] Create BrandLogos component (static logo row)
8. [ ] Create FAQ component (accordion with state)
9. [ ] Create Pricing component (card grid)
10. [ ] Create Gallery component (image grid + hover overlay)
11. [ ] Create NewsletterCTA component
12. [ ] Create Footer component with newsletter form
13. [ ] Compose App.tsx with all sections in order
14. [ ] Add Google Fonts (Cabin + Open Sans) to index.html
15. [ ] Write tests for all components (100% coverage)
16. [ ] Run verify-app.sh, fix any issues
17. [ ] Commit and push
