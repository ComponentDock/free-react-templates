# Domicile — Implementation Todo & Design Notes

Source: ColorLib "Occupy" → https://preview.colorlib.com/theme/occupy/

## Section order (1:1 with preview)

1. **Navbar** — Sticky header, logo image, nav links (Home, About, Services, Pages dropdown [Portfolio, Portfolio Details, Elements], Blog dropdown [Blog, Blog Details], Contact), social icons right (FB, Twitter, Dribbble, Behance, Search), mobile hamburger
2. **Hero Slider** — Full-width Swiper with 3 slides, dark overlay (rgba(34,34,34,0.8)), heading "We Combine Business with Finance" (Oswald font), two buttons: "Explore Us" (green #a7cb00) + "Get Free Quote" (outline)
3. **Mission** — 2-col: left = image (mission-1.jpg), right = owl-carousel text slider with items "Road to Success" / "About Our Mission", bullet navigation
4. **Success** — Stats/achievements section (numbers/metrics)
5. **Project** — Project showcase grid
6. **Team** — Owl-carousel slider, 4 team member cards (photo, name, position)
7. **Project CTA** — Full-width dark overlay banner: "Get to Know Project Estimate?" + "Get Free Estimate" white button
8. **Blog** — 4 blog cards in grid, each: image, date/author meta, title, excerpt
9. **Footer** — Light bg (#f9f9ff), 4 columns: About Biznance, Navigation Links (2 lists), Newsletter (email form), InstaFeed (image grid), Copyright + social icons

## Design token notes for implementer

- Brand primary: #a7cb00 — lime/yellow-green, use via Tailwind `bg-primary`, `text-primary`
- CTA overlay green: rgba(167, 203, 0, 0.8) — for banner backgrounds
- Dark overlay: rgba(34, 34, 34, 0.8) — for hero images and CTA banners
- Body font: "Raleway" (weights 300-700) — load via Google Fonts
- Heading font: "Oswald" — load via Google Fonts
- Body text color: #666666, headings: #000000
- Footer bg: #f9f9ff, footer text: #777777
- Buttons: sharp corners (border-radius 0), padding 0 38px, line-height 48px
- Card border-radius: 5px (only for certain elements)
- Border color: #eeeeee

## Component breakdown

```
src/
  main.tsx
  App.tsx
  index.css          (Tailwind + @theme tokens)
  components/
    Navbar.tsx       (sticky, dropdowns, social icons, mobile menu)
    HeroSlider.tsx   (Swiper, 3 slides, dark overlay, CTA buttons)
    Mission.tsx      (image + owl-carousel text slider)
    Success.tsx      (stats/achievements)
    ProjectShowcase.tsx (project grid)
    Team.tsx         (owl-carousel team cards)
    ProjectCTA.tsx   (dark banner with CTA button)
    Blog.tsx         (4-column blog cards)
    Footer.tsx       (4-col footer with newsletter)
```

## Fidelity notes

- Original uses Bootstrap 4 grid — map to Tailwind grid/flex
- Original uses Swiper.js for hero slider — use a React Swiper wrapper or native scroll-snap
- Original uses Owl Carousel for mission text and team — consider a lightweight React carousel or native scroll-snap
- Original uses Lightbox for images — implement with a React lightbox library
- Original uses Nice Select for custom dropdowns — not needed for React
- Original uses AOS (Animate On Scroll) — consider framer-motion or CSS animations
- Original uses Font Awesome + Linericon icon fonts — replace with lucide-react
- Social icons in navbar: FB, Twitter, Dribbble, Behance — use lucide-react equivalents
- Footer newsletter form: keep the email input + submit button pattern
- Footer InstaFeed: replace with a placeholder image grid using picsum.photos
- Original uses `wow.js` for scroll animations — implement with intersection observer
- Navbar logo is an image file — use text-based logo "Domicile" instead
