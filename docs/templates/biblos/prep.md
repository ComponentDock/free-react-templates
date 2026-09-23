# Biblos — Template Prep Notes

**Source:** ColorLib "Booke" → https://colorlib.com/wp/template/booke/
**Preview analyzed:** https://preview.colorlib.com/theme/booke/ (live DOM + css/style.css, 2026-09-23)

## Task checklist (for implementer)

- [ ] Create `apps/biblos/` — copy simplest existing app, rename package to `@free-react-templates/biblos`
- [ ] Add Google Fonts `<link>` for Oswald + Roboto in `index.html`
- [ ] Set `src/index.css` theme tokens: brand color `#1C63FB`, Oswald for headings, Roboto for body
- [ ] Implement `Navbar.tsx` — sticky top, logo left, links right, mobile hamburger
- [ ] Implement `Hero.tsx` — dark bg image, heading + subtext + white pill CTA button, centered book cover image
- [ ] Implement `Features.tsx` — light bg, heading + 6 feature cards in 3-col grid (icon + title + desc)
- [ ] Implement `BookScreenshots.tsx` — carousel section with heading, prev/next nav, image carousel
- [ ] Implement `AboutAuthor.tsx` — side-by-side: author bg image left, heading + bio + social + signature right
- [ ] Implement `Testimonials.tsx` — light bg, heading, 3 testimonial cards (quote + photo + name + title)
- [ ] Implement `Newsletter.tsx` — full-width blue bg, heading, horizontal email input + send button
- [ ] Implement `Footer.tsx` — dark bg, 3 cols (About Us / Navigation / Quick Contact form), social icons row, copyright with Component Dock link
- [ ] Wire all sections in `App.tsx` in correct order
- [ ] Write tests: 100% coverage for all components
- [ ] Run `scripts/verify-app.sh biblos` — must pass
- [ ] Commit: `feat: add biblos template (ColorLib booke)`

## Section order (fidelity)

1. **Navbar** — sticky, logo + 5 links + mobile menu
2. **Hero** — dark bg, heading "Meet Your Next Book", subtext, white pill CTA, book cover image
3. **Features** — light bg, "Features Of This Book", 6 icon cards (3x2 grid)
4. **Book Screenshots** — white bg, "Book Screenshot", prev/next carousel
5. **About Author** — split layout: author photo left, bio + social + signature right
6. **Testimonials** — light bg, "Testimonial From Readers", 3 white cards
7. **Newsletter** — blue bg, "Subscribe For The New Updates", email input + button
8. **Footer** — dark bg, 3 columns, social icons, copyright

## Design token notes

- **Brand blue:** `#1C63FB` — primary buttons, newsletter bg, carousel arrow accent, form borders
- **Heading font:** Oswald (bold, sans-serif) — all h1/h2/h3 in headings, nav logo, section titles
- **Body font:** Roboto — all paragraphs, form inputs, button text
- **Button pill:** `border-radius: 30px` on all `.btn` elements
- **Hero CTA:** white bg, white text, on hover → transparent bg + white border/text
- **Feature icon container:** white square with 4px radius behind icomoon icons
- **Light sections:** `#f6f6f6` (features + testimonials)
- **Footer bg:** `#333333` dark charcoal
- **Footer contact form inputs:** transparent bg, white border, white text (on dark footer bg)
- **Testimonial cards:** white bg on light section bg, circular person photos

## ColorLib DOM structure notes

- `.site-section` wraps each main content section
- `.bg-light` class toggles light background (`#f6f6f6`)
- `.bg-primary` toggles the blue newsletter section
- `.site-footer` wraps the dark footer
- `.site-navbar-wrap` / `.js-sticky-header` for sticky nav
- `.owl-carousel.slide-one-item` for the book screenshots carousel
- `.author.d-lg-flex` for the side-by-side about author section
- Icon font: `icomoon` — icon classes: `icon-book`, `icon-bookmark`, `icon-files-o`, `icon-font`, `icon-photo`, `icon-text-height`, `icon-facebook`, `icon-twitter`, `icon-instagram`, `icon-linkedin`, `icon-heart`
