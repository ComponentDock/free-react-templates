# Cabin — Design Notes & Task Outline

Source: ColorLib "Hus" (https://colorlib.com/wp/template/hus/)
Preview: https://preview.colorlib.com/theme/hus/
New name: Cabin (apps/cabin)

## Section order (top to bottom)

1. **Navbar** — Sticky. Logo left, nav links center (Home, About, Pages, Blog, Contact), login + phone right. Mobile hamburger.
2. **Hero slider** — Full-width owl-carousel. Dark overlay (41% black). Headline "We Create your dream apartment", description, "View Project" boxed-btn3 CTA.
3. **About area** — Two-column. Left: circular experience badge "10 Years of Experience". Right: heading "We are Cabin / Realestate Company" with red divider, description, bullet list (4 items), stats "120 Buildings" + "500+ Clients".
4. **Our Facilities** — Three-column grid on dark background. Each card: icon, heading "Planning Stage", description, "Learn more" link. White text.
5. **Property Certificates** — Two-column. Left: heading "Property Certificates" with red divider. Right: 3 certificate images in a row.
6. **Apartment carousel** — Horizontal scroll/carousel of apartment cards. Each: image with dark gradient overlay, price "$35,000", title, room details (2BD, 2BA, 920 SF).
7. **Testimonials** — Owl-carousel. Each slide: circular author photo, name "Margaret Lawson", role "Creative Director", quoted paragraph.
8. **Quotation CTA** — Dark background. Left: "Get a free quotation Today!" + "Have any questions?" + "Contact Us" button. Right: phone icon + phone number.
9. **Latest News** — Owl-carousel of news cards. Each: thumbnail, date badge (24 Nov), category "Properties", title, "Read more" link.
10. **Footer** — Dark bg (image). 4 columns: About Us, Contact Info, Important Link, Newsletter. Copyright + social icons (Facebook, Twitter, Dribbble, Behance).

## Design tokens

| Token | Value |
|-------|-------|
| Brand accent | #FF2424 (red) |
| Hover accent | #FF4A52 |
| Heading color | #191d34 |
| Body text | #6b6a6a |
| Link color | #1F1F1F |
| Label color | #7e7e7e |
| Dark bg | #000, #0d101c, #303030 |
| Footer bg | dark image-based |
| Overlay opacity | 41% black |
| Fonts | Oswald (headings), Roboto (body/paragraphs) |
| Button border-radius | 5px |
| Button style | White bg, red #FF2424 text/border, red hover bg |

## Task outline

- [ ] Set up apps/cabin workspace (copy simplest existing app, rename package)
- [ ] Install dependencies, run npm install at root
- [ ] Create index.html with Google Fonts (Oswald + Roboto)
- [ ] Create src/index.css with Tailwind + @theme tokens (red accent, fonts)
- [ ] Create src/App.tsx composing all section components
- [ ] Create Navbar.tsx (sticky, logo, nav links, login, phone, hamburger)
- [ ] Create HeroSlider.tsx (carousel, overlay, headline, CTA)
- [ ] Create AboutArea.tsx (experience badge, heading, stats)
- [ ] Create Facilities.tsx (3 cards, dark bg, icons)
- [ ] Create PropertyCertificates.tsx (heading + 3 images)
- [ ] Create ApartmentCarousel.tsx (cards with overlay, price, details)
- [ ] Create Testimonials.tsx (carousel, author photos)
- [ ] Create QuotationCTA.tsx (dark bg, heading, button, phone)
- [ ] Create LatestNews.tsx (carousel, date, category, title)
- [ ] Create Footer.tsx (4 columns, newsletter, social, Component Dock link)
- [ ] Write tests for each component (Vitest + RTL, 100% coverage)
- [ ] Run verify-app.sh cabin
- [ ] Commit, push, open PR
