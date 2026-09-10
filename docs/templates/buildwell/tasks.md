# BuildWell — Design Notes & Task Outline

Source: ColorLib Celt (https://preview.colorlib.com/theme/celt/)

## Section order (top → bottom)

1. **TopNavbar** — dark navy bar, address/phone/email with icons
2. **MainNavbar** — logo left, nav links right, search icon, sticky on scroll
3. **Hero** — full-width bg image + dark overlay, white headline "We Build Your Dream", subtitle, two buttons (dark primary, yellow secondary)
4. **About** — 3-col grid, each: icon circle (yellow bg), title, description text
5. **Stats** — yellow `#FFD626` band, 4 circular counters with yellow icon badges
6. **Portfolio** — parallax bg image, "Featured Works" heading, 4 project cards in grid, hover overlay with link icons
7. **Services** — white bg, "Our Services" heading, 6 service cards (icon + title + desc)
8. **FAQ** — white bg, "Why Choose Us" heading, 3 accordion panels (expand/collapse)
9. **Testimonial** — yellow `#FFD626` band, large quote with quotation mark, client meta
10. **Partners** — row of partner logos (slider or flex)
11. **Blog** — white bg, "Latest News" heading, 3 blog cards (image + title + excerpt)
12. **CTA** — yellow band, "Quick Links" + newsletter subscribe form
13. **Footer** — dark navy, 3-column: logo, quick links, social + newsletter
14. **BottomFooter** — copyright + Component Dock link

## Component file plan

```
src/
  App.tsx
  index.css            (Tailwind + @theme tokens)
  main.tsx
  components/
    TopNavbar.tsx
    MainNavbar.tsx
    Hero.tsx
    About.tsx
    Stats.tsx
    Portfolio.tsx
    Services.tsx
    FAQ.tsx
    Testimonial.tsx
    Partners.tsx
    Blog.tsx
    CTA.tsx
    Footer.tsx
```

## Fidelity notes

- **Buttons:** Square corners (no border-radius), dark navy primary + yellow secondary. Hover: accent color fills from bottom up.
- **Stat icons:** 50% border-radius (circles), yellow `#FFD626` background, dark icon inside.
- **Portfolio hover:** Overlay fades in, showing view/link action icons.
- **FAQ accordion:** Bootstrap-style panel-collapse, single-open behavior.
- **Parallax:** Portfolio section uses fixed background-attachment on a background image.
- **Colors:** Strict adherence to #001232 / #FFD626 / #64728A / #004 palette.
- **Font:** Poppins via Google Fonts link in index.html.

## Implementation tasks

- [ ] Scaffold `apps/buildwell/` from simplest existing app
- [ ] Create `TopNavbar` component
- [ ] Create `MainNavbar` with sticky behavior + mobile toggle
- [ ] Create `Hero` with bg image overlay + two CTA buttons
- [ ] Create `About` (3-column feature cards)
- [ ] Create `Stats` yellow band (4 circular counters)
- [ ] Create `Portfolio` grid with parallax + hover overlay
- [ ] Create `Services` (6 service cards)
- [ ] Create `FAQ` accordion (3 panels)
- [ ] Create `Testimonial` yellow band with quote
- [ ] Create `Partners` logo row
- [ ] Create `Blog` (3 blog cards)
- [ ] Create `CTA` newsletter section
- [ ] Create `Footer` (3-column dark navy)
- [ ] Create `BottomFooter` with Component Dock link
- [ ] Write `App.tsx` composing all sections
- [ ] Add `@theme` tokens in `index.css`
- [ ] Write tests for every component (100% coverage)
- [ ] Run `npm run verify:app buildwell`
- [ ] Commit and open PR
