# MuscleBay — Prep Notes

## Source
- ColorLib template: Fitnessclub
- Source URL: https://colorlib.com/wp/template/fitnessclub/
- Preview: https://preview.colorlib.com/theme/fitnessclub/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/fitnessclub-free-template.jpg

## Design Tokens Captured
- Primary: #f04e3c (orange-red)
- Dark navy: #0d1628
- Heading font: "Teko" (Google Fonts, 300–700, uppercase)
- Body font: "Barlow" (Google Fonts, 300–700)
- Button: .boxed-btn — white bg, #f04e3c border + text, Teko 14px, letter-spacing 3px, uppercase
- Button hover: solid #f04e3c bg, white text
- Hero button: padding 32px 41px
- Section backgrounds: image overlays with dark semi-transparent
- Text: #222 headings, #777 body, #828bb2 secondary

## Section Structure (implementation order)
1. Header — transparent, logo left, nav right (sticky)
2. Hero Slider — full-width bg image, animated heading, CTA button
3. About Section — image left + text right (title, heading, paragraphs, CTA)
4. Services Section — dark bg overlay, title, 3-column service cards
5. Testimonial Section — image with quotation overlay + client quote
6. Membership CTA — dark bg overlay, heading, button
7. Schedule/Tabs — title, tabbed day schedule
8. Team Section — 3-column cards (photo, role, name, social)
9. Contact Form — right-aligned form (name, email, subject, message)
10. Gallery — 2-column masonry with hover overlays
11. Blog Section — title, 2-column blog cards
12. Footer — dark bg overlay, 3 columns, copyright bar

## Fidelity Notes
- Header: transparent overlay on hero, sticky on scroll, logo left, nav right-aligned
- Hero: slider with animated fadeInLeft entrance, heading uppercase Teko, subtext Barlow
- About: 6/6 grid, left image, right text block with section-tittle3 style
- Services: dark section-bg image overlay, wantToWork-area layout, 3 service cards with flaticon icons
- Testimonial: 5/7 split, left image with quotation.png overlay, right testimonial text
- Membership CTA: full-width dark bg image, centered heading + button
- Schedule: tabbed interface (gijgo tabs), day-based schedule grid
- Team: 3 equal cards, team-img with team-caption overlay (role + name + social)
- Contact: right-aligned 7-col form, section-tittle style header
- Gallery: 2-col masonry, snake layout, hover overlay with icon + title + category
- Blog: 2-col cards, blog-img with date overlay, blog-caption with title + excerpt
- Footer: dark bg image overlay, 3-col (Company, Open Hours, Resources), copyright + social

## Placeholder Images
- Hero bg: `https://picsum.photos/seed/musclebay-hero/1920/1080`
- About image: `https://picsum.photos/seed/musclebay-about/600/500`
- Service icons: lucide-react icons
- Testimonial image: `https://picsum.photos/seed/musclebay-testimonial/500/600`
- CTA bg: `https://picsum.photos/seed/musclebay-cta/1920/400`
- Team photos: `https://picsum.photos/seed/musclebay-team-{1-3}/400/500`
- Gallery images: `https://picsum.photos/seed/musclebay-gallery-{1-4}/800/600`
- Blog images: `https://picsum.photos/seed/musclebay-blog-{1-2}/800/500`
- Footer bg: `https://picsum.photos/seed/musclebay-footer/1920/600`
