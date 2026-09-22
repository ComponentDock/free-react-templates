# VoyagePoint — Implementation Notes

Source: ColorLib Gotrip (https://preview.colorlib.com/theme/gotrip/)

## Section Order (fidelity reference)

1. **TopBar** — dark navy bar, contact info (email, phone, address) left, social icons right
2. **Navbar** — white bg, logo left (script font), 6 nav links right, mobile hamburger
3. **Hero** — full-width background image (mountain lake), large heading "Find your Next tour!" (script accent on "Next tour!"), subtitle, search form (destination + date + gold button)
4. **Services** — 4-column stats cards (icon + count + label), white bg
5. **FeaturedTours** — section title + subtitle, 3×2 grid of tour cards (image, badge rating, title, price, duration, location)
6. **Video** — landscape image left with play button overlay, text + checklist right
7. **AboutCompany** — description + checklist left, image right (split layout)
8. **Testimonials** — carousel slider with quote, author name, avatar
9. **Blog** — dark blue gradient bg, 2-column blog cards (image, date badge, title, excerpt, read-more link)
10. **Footer** — dark bg, logo, quick links, products, support, copyright + Component Dock link

## Design Token Notes

- Primary: #014B85 (deep blue) — use as Tailwind theme color
- Accent: #F4E700 (gold) — for CTA buttons and script heading highlight
- Heading font: Barlow Condensed (Google Fonts, weight 600)
- Body font: Roboto (Google Fonts)
- Script font: Satisfy (Google Fonts, for hero accent text)
- Button: bg #014B85, text white, uppercase, letter-spacing, border-radius 3px
- Card border-radius: 3px default, tour cards may use 12px
- Section titles: #191D34, 60px desktop / 39px mobile, weight 600
- Light section bg: #F9F9FF
- Service icons: cyan #4CD3E3
- Blog section: gradient from #014B85

## Fidelity Notes

- Hero background image: use picsum.photos/seed/voyagepoint-hero/1920/1080
- Tour card images: picsum.photos/seed/voyagepoint-tour-n/600/400 (n=1..6)
- Blog card images: picsum.photos/seed/voyagepoint-blog-n/600/400
- About company image: picsum.photos/seed/voyagepoint-about/600/500
- Video section image: picsum.photos/seed/voyagepoint-video/1200/600
- Testimonial avatars: picsum.photos/seed/voyagepoint-avatar-n/100/100
- Service icons: use lucide-react (Users, Shield, Clock, ThumbsUp)
- Play button: use lucide-react Play icon
- Star ratings: use lucide-react Star icon

## Tasks

- [ ] Create apps/voyagepoint/ scaffold (copy minimal existing app)
- [ ] Set up index.html with Google Fonts (Barlow Condensed, Roboto, Satisfy)
- [ ] Implement TopBar component
- [ ] Implement Navbar component (with mobile hamburger)
- [ ] Implement Hero component with search form
- [ ] Implement Services component (4 stat cards)
- [ ] Implement FeaturedTours component (6 tour cards grid)
- [ ] Implement Video section
- [ ] Implement AboutCompany component
- [ ] Implement Testimonials carousel
- [ ] Implement Blog section (2 cards, dark bg)
- [ ] Implement Footer (with Component Dock link)
- [ ] Compose in App.tsx, set up Tailwind theme tokens
- [ ] Write tests (100% coverage)
- [ ] Verify: typecheck + lint + test:coverage + build
