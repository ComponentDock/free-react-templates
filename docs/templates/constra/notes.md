# Constra — Design Notes & Implementation Tasks

Source: ColorLib Consto (https://colorlib.com/wp/template/consto/)
Preview: https://preview.colorlib.com/theme/consto/

## Design Tokens (from CSS analysis)

- Brand: #FF5E14 (orange) — all buttons, links, hover states
- Dark sections: #2D0A31 (deep purple) — CTA banner
- Footer: #F5F6F7 (light gray)
- Font: Raleway, sans-serif
- Pill buttons: border-radius 25px, bg #FF5E14, white text
- Outlined buttons: 1px solid #FF5E14, transparent bg, #FF5E14 text
- Card radius: 8px

## Section Order (1:1 with reference)

1. Navbar — sticky, logo left, address, nav (Home/About/Service/Project/Blog dropdown/Contact), phone right
2. Hero Slider — bg image, left text ("Experienced Construction Solution"), desc, pill CTA; right sidebar ("Explore Our Latest Projects" + "Explore Now" link)
3. About — split: large image left (col-7), content right (col-4): heading + desc + "Learn More" pill
4. Services — textured bg, left heading + "Get Free Quote" button, right 3 rows (image left + card right): General Contracting, Project Planning, Interior Design; each has "Explore Now" link
5. Projects Carousel — centered heading, owl-carousel with 3 project images, hover overlay with title + "View Project"
6. More Projects Banner — textured bg, centered "All Project" outlined button
7. Testimonials — carousel: quote icon, paragraph, founder avatar + name + title
8. Contact Form — textured bg, form card: chat icon + "Get Free Quote", fields (name/email/topic/message), "Send Message" pill
9. CTA Banner — textured bg, "Any help needed?" + desc + "Contact Us" outlined button right
10. Footer — 3 cols (logo+desc, links+hours, newsletter); copyright bar with Component Dock link

## Implementation Tasks

### Phase 1: Scaffold
- [ ] Create apps/constra from a minimal template (e.g. copy apps/aurora, rename package)
- [ ] Set up vite.config.ts with injectUiSource()
- [ ] Set up index.css with @import "tailwindcss" + @theme tokens (#FF5E14 as brand, Raleway font)
- [ ] Set up index.html with Google Fonts link for Raleway
- [ ] Add public/CNAME: constra.free.componentdock.com

### Phase 2: Components (TDD — write tests first)
- [ ] Navbar.tsx — sticky header with logo, address, nav links, phone CTA
- [ ] HeroSlider.tsx — full-width hero with bg image area, left text overlay, right sidebar
- [ ] AboutSection.tsx — split layout, image left, content right with heading + CTA
- [ ] ServicesSection.tsx — textured bg, heading + 3 service rows with images + cards
- [ ] ProjectsCarousel.tsx — carousel with project cards + hover overlays
- [ ] MoreProjectsBanner.tsx — centered outlined button on textured bg
- [ ] Testimonials.tsx — carousel with quote, text, founder info
- [ ] ContactForm.tsx — form with all fields + validation
- [ ] CtaBanner.tsx — heading + desc + outlined button
- [ ] Footer.tsx — 3-col layout + newsletter + copyright + Component Dock link

### Phase 3: Assembly
- [ ] App.tsx — compose all sections in order
- [ ] main.tsx — entry point

### Phase 4: Verify
- [ ] All tests pass at 100% coverage
- [ ] TypeCheck passes
- [ ] Build succeeds
- [ ] Visual fidelity check against preview

## Fidelity Notes

- The hero uses a slider (carousel) but for React SPA we can render a single hero slide or use a simple carousel
- Services section uses `data-background` attribute for image overlays — use Tailwind bg-image or CSS
- Projects carousel uses owl-carousel — use a React carousel library or CSS scroll-snap
- Testimonials use owl-carousel — same approach as projects
- Contact form has a topic dropdown — use native select or a styled component
- All button styles: pill (25px radius) for primary CTAs, outlined for secondary
- Footer newsletter form is decorative (no real backend needed)
- Use picsum.photos for all placeholder images with deterministic seeds
