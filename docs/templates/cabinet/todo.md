# Cabinet — Implementation Notes

## Source

- ColorLib template: Listio
- Source URL: https://colorlib.com/wp/template/listio/
- Preview URL: https://preview.colorlib.com/theme/listio/
- Original stack: Bootstrap 4, jQuery, Owl Carousel, SlickNav, Themify Icons

## Section order (from preview DOM)

1. **Header** — transparent, search input (left), logo (center), nav (right)
2. **Hero** — full-width bg image + gradient overlay, search form (text + 2 selects + submit)
3. **Categories** — icon carousel (Hotel, Restaurant, Cafe, Shopping Mall), heading + subtitle
4. **Best Café & Bars** — split: bg image left, text + CTA right
5. **Featured Listings** — 3-col grid, 6 cards with image overlays, price/status badges
6. **How It Works** — 3 numbered steps on parallax bg image
7. **Testimonials** — centered slider, quote + avatar + name/role
8. **Newsletter** — bg image, email input + subscribe button
9. **Latest News** — 2-column blog cards with image, tag, date, title
10. **Footer** — 3 columns (logo+desc, Quick Links, Company), social icons, copyright

## Design notes

- Brand accent: `#FF377B` (hot pink) — used for buttons, section title spans, search icon bg, submit buttons, border-btn hover
- Headings: `#072366` (section titles) and `#140C40` (base headings)
- Body text: `#10285d`, paragraphs `#5E5E5E`
- Font: "Josefin Sans" 300–700 from Google Fonts
- Buttons: primary `#FF377B` bg with 4–6px radius; outline variant uses `border: 1px solid #FF377B`
- Header: transparent by default, sticky with `rgba(94,3,34,0.8)` on scroll
- Hero overlay: `linear-gradient(to bottom, rgba(0,0,0,0.6), transparent)`
- Sections: alternate white / parallax bg image / light bg
- Card shadows: `0px 10px 20px 0px rgba(221,221,221,0.3)`
- Featured cards have overlay3 class on images (dark overlay for badges)
- Process steps: large number in a circular badge container, heading + description

## Implementation tasks

- [ ] Scaffold app: copy simplest existing app, rename to `cabinet`, update package name
- [ ] Install Google Font "Josefin Sans" in index.html
- [ ] Set up Tailwind theme tokens (`@theme` in index.css) for brand colors
- [ ] Build Navbar component (transparent, sticky, search input, logo, nav, CTA)
- [ ] Build Hero component (bg image, gradient overlay, search form)
- [ ] Build Categories component (icon grid/carousel with counts)
- [ ] Build FeaturedBanner component (split layout: image left, text+CTA right)
- [ ] Build FeaturedListings component (3-col grid, 6 cards with overlays)
- [ ] Build ProcessSteps component (3 numbered steps on bg image)
- [ ] Build Testimonials component (quote, avatar, name/role)
- [ ] Build Newsletter component (bg image, email input, subscribe button)
- [ ] Build LatestNews component (2 blog cards)
- [ ] Build Footer component (3 columns, social icons, Component Dock copyright)
- [ ] Compose all sections in App.tsx
- [ ] Write tests for each component (100% coverage)
- [ ] Run verify-app.sh cabinet to pass gate
