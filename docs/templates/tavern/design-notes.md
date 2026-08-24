# Tavern — Design Notes & Task Outline

**Source:** ColorLib "Pato" — https://preview.colorlib.com/theme/pato/
**New name:** tavern
**Date:** 2026-08-24

## Section Order (fidelity to source)

| #   | Section       | Source Class        | Notes                                                            |
| --- | ------------- | ------------------- | ---------------------------------------------------------------- |
| 1   | Header/Nav    | `.wrap-menu-header` | Sticky, gradient overlay, logo left, nav center, Book Now right  |
| 2   | Hero Carousel | `.section-slide`    | 3 Swiper slides with bg images, centered text overlay            |
| 3   | Welcome       | `.section-welcome`  | 2-col: text left (subtitle + h3 + p + link), rounded image right |
| 4   | About/Intro   | `.section-intro`    | Brief intro content                                              |
| 5   | Our Menu      | `.section-ourmenu`  | 6 category cards (2-col + 1-col), image bg with overlay button   |
| 6   | Events        | `.section-event`    | Swiper carousel, event cards with date/title/description         |
| 7   | Booking       | `.section-booking`  | 2-col: form left (6 fields), map/image right                     |
| 8   | Reviews       | `.section-review`   | Swiper carousel, avatar + quote + stars + name                   |
| 9   | Video         | `.section-video`    | Parallax bg, centered play button modal                          |
| 10  | Blog          | `.section-blog`     | 3-col grid, image + date + title + excerpt + link                |
| 11  | Footer        | `footer`            | 3-col: Contact/Opening + Posts + Gallery, social icons           |

## Fidelity Notes

- **Color palette:** Primary red #ec1d25, dark backgrounds #222222/#111111, warm gray accents #958e88
- **Typography:** Poppins body, Montserrat headings, Courgette for decorative/script text
- **Buttons:** All rounded (10px radius), white bg → red on hover pattern
- **Backgrounds:** Repeating pattern images on welcome/menu/booking sections (use subtle CSS patterns instead)
- **Parallax:** Video section uses parallax scroll effect on background image
- **Carousel:** Hero, Events, Reviews all use Swiper carousels — implement with CSS-only or simple React state (avoid Swiper dependency)
- **Images:** All placeholder images via picsum.photos with deterministic seeds per section
- **Footer:** Must link https://www.componentdock.com/ (replaces ColorLib attribution)
- **No ColorLib refs:** Provenance lives only in spec + TEMPLATES.md, never in app code

## Component Outline

1. `Navbar.tsx` — sticky header with gradient overlay, logo, nav links, Book Now CTA
2. `Hero.tsx` — carousel with 3 slides, auto-advance, centered text overlays
3. `Welcome.tsx` — 2-column layout, text + image
4. `About.tsx` — intro section
5. `MenuCategories.tsx` — grid of 6 category cards with overlay buttons
6. `Events.tsx` — carousel of event cards
7. `BookingForm.tsx` — reservation form with 6 fields
8. `Reviews.tsx` — carousel of customer testimonials
9. `VideoSection.tsx` — parallax section with play button
10. `BlogPosts.tsx` — 3-column blog card grid
11. `Footer.tsx` — 3-column footer with contact, posts, gallery

## Implementation Tasks

- [ ] Scaffold apps/tavern from existing template (copy simplest app, rename package)
- [ ] Set up index.css with Tailwind theme tokens (#ec1d25 brand, fonts)
- [ ] Implement Navbar component
- [ ] Implement Hero carousel (CSS transitions or simple state)
- [ ] Implement Welcome section
- [ ] Implement About section
- [ ] Implement MenuCategories grid
- [ ] Implement Events carousel
- [ ] Implement BookingForm
- [ ] Implement Reviews carousel
- [ ] Implement VideoSection with parallax
- [ ] Implement BlogPosts grid
- [ ] Implement Footer with Component Dock link
- [ ] Compose App.tsx with all sections
- [ ] Write tests for each component (100% coverage)
- [ ] Run verify-app.sh and fix any issues
- [ ] Deploy and verify on phone
