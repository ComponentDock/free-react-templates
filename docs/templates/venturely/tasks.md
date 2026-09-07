# Venturely — Implementation Tasks

Source: Colorlib Bravo (business & investment landing page)
New name: `venturely`
Preview: https://preview.colorlib.com/theme/bravo/ (reachable)

## Structure order (matching original)

1. **Navbar** — Fixed top nav with logo, menu items (Home, About, Services, Blog, Contact), phone button
2. **HeroSlider** — Animated slider with heading, description, CTA button, hero image
3. **AboutSection** — Split layout: text left with stats, images right
4. **ServicesSection** — 3 image cards with hover overlay ("Read More")
5. **TestimonialSlider** — Centered testimonial with dot navigation
6. **TeamSection** — 3 team member cards with photos and social links
7. **PortfolioSection** — 2 portfolio cards side by side with hover overlay
8. **ContactSection** — CTA/contact form with dark textured background
9. **Footer** — Dark footer with widgets and links

## Design notes

- Font: Roboto (Google Fonts, weights 300-900)
- Primary CTA: blue `#4760FF` for main `.btn` buttons
- Accent: salmon `#FA8F77` for `.border-btn`, `.boxed-btn`, section title accents
- Heading color: dark purple `#140C40`
- Buttons: square corners (no border-radius), letter-spacing 3px, padding 18px 44px
- `.border-btn`: outlined button with salmon border, transparent bg, hover fills with salmon
- `.boxed-btn`: white bg with salmon border, hover fills with salmon
- Section backgrounds: white default, image-based dark for testimonials/contact
- Cards: light lavender border `#C2C5DB`
- Hero: animated slider with fadeInLeft/fadeInRight transitions
- Section padding: 40px vertical
- Smooth transitions: 0.3s on images and links

## Fidelity notes (from live preview)

- Preview URL is reachable — CSS and HTML fully analyzed
- Hero uses Owl Carousel for slider with animated headlines
- About section has "10 Years" and "$40M+" stat boxes in a row
- Service cards have image + hover overlay with "Read More" text
- Testimonial uses Owl Carousel with dot navigation
- Team cards have circular/rectangular photos with social icon links
- Portfolio section shows 2 cards side by side (6-col each)
- Contact section uses a dark textured background image
- Footer has multiple widget columns

## Tasks

- [ ] Copy simplest existing app as scaffold
- [ ] Rename package to `@free-react-templates/venturely`
- [ ] Set up `public/CNAME` and `homepage` in package.json
- [ ] Implement Navbar with logo, menu items, and phone button
- [ ] Implement HeroSlider with animated content
- [ ] Implement AboutSection with stats
- [ ] Implement ServicesSection (3 cards with hover overlay)
- [ ] Implement TestimonialSlider with dot navigation
- [ ] Implement TeamSection (3 members with social links)
- [ ] Implement PortfolioSection (2 cards)
- [ ] Implement ContactSection with dark background
- [ ] Implement Footer
- [ ] Add smooth scroll navigation
- [ ] Add responsive layout (hamburger menu, stacking)
- [ ] Write tests for all components (100% coverage)
- [ ] Verify with `scripts/verify-app.sh venturely`
