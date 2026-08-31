# Turntable — Implementation Tasks

## Pre-implementation

- [ ] Create `apps/turntable/` from the simplest existing app scaffold
- [ ] Rename package to `@free-react-templates/turntable`
- [ ] Set `public/CNAME` to `turntable.free.componentdock.com`
- [ ] Set `homepage` in `package.json` to `https://turntable.free.componentdock.com`
- [ ] Run `npm install` at repo root to register workspace in lockfile

## Components to build

- [ ] `src/components/TestimonialCarousel.tsx` — main carousel wrapper
- [ ] `src/components/TestimonialCard.tsx` — individual slide card
- [ ] `src/components/CarouselDots.tsx` — pagination dots
- [ ] `src/components/CarouselArrows.tsx` — prev/next navigation
- [ ] `src/App.tsx` — compose section + footer
- [ ] `src/index.css` — Tailwind entry + theme tokens

## Styling details

- [ ] Brand gold #dbcc8f in @theme
- [ ] Playfair Display font loaded via Google Fonts link in index.html
- [ ] Poppins font loaded via Google Fonts link in index.html
- [ ] Card shadow: 0px 10px 40px -30px rgba(0, 0, 0, 0.42)
- [ ] 50/50 split layout (image left, text right)
- [ ] Responsive: stack vertically on mobile, image 450px
- [ ] Dots: 10px circles, black border, gold active
- [ ] Arrow hover transition to gold

## Tests (TDD)

- [ ] TestimonialCarousel renders heading + carousel
- [ ] TestimonialCard renders quote, author name (gold), position
- [ ] CarouselDots renders correct count, active state
- [ ] CarouselArrows render and handle click
- [ ] Responsive behavior (mobile stacking)
- [ ] Auto-advance functionality
- [ ] 100% coverage gate passes

## Final

- [ ] `scripts/verify-app.sh turntable` passes
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] Commit: `feat: add Turntable (ColorLib Carousel 08) template`
