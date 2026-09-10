# PackWell — Design Notes & Implementation Todo

**Source:** ColorLib Carries (https://preview.colorlib.com/theme/carries/)
**New name:** packwell
**Category:** Logistics / Freight website

## Section Order (from live preview DOM)

1. **Navbar** — sticky, dark background, logo left, nav links right
2. **Hero Slider** — full-width, 2 slides, background images with dark overlay, heading + CTA
3. **About** — gray bg (#f1f1f1), heading + paragraph, left-aligned
4. **Service Catalog** — two-part: dark top (#3c4a62) header + "Our Service" heading, light bottom (#f4f7f9) with 4 service cards (Ware House, Road Freight, Sea Freight, Air Freight)
5. **Promo / Why Choose Us** — light bg (#f4f7f9), decorative image right, feature list
6. **Feature Highlights** — dark image bg, 3-4 columns (Location, News, 24/7 Support, Fast Delivery), icon + text
7. **Testimonials** — dark image bg, slider with client quotes and prev/next arrows
8. **Newsletter** — white bg, "Weekly Newsletter", email input + submit
9. **Footer** — dark bg (#3c4a62), 3 columns (About Us, Latest Tweets, Customer Service), copyright bar (#212121)

## Fidelity Notes

- Hero uses a **slider** (OwlCarousel in original) — implement as a simple React carousel (CSS transitions or state-based)
- Service cards have **circular icons** (FontAwesome in original) — use lucide-react icons instead
- Promotional area has a decorative background image on the right — use picsum placeholder
- Feature highlights section has a dark background image — use picsum with dark overlay
- Testimonial section uses a slider — implement with state-based prev/next
- Newsletter form: simple email input + button, no validation needed per spec

## Design Tokens Summary

```
Primary blue:    #0083ff
Accent/CTA:      #f39c12
Dark sections:   #3c4a62
Dark footer:     #212121
Light sections:  #f4f7f9
Gray sections:   #f1f1f1
Font:            Roboto (Google Fonts)
Button radius:   3px
Button padding:  12px 30px
```

## Todo

- [ ] Scaffold app from existing template (copy simplest app, rename)
- [ ] Set up index.html with Roboto Google Font
- [ ] Create Navbar component
- [ ] Create HeroSlider component (2 slides, dark overlay, CTA)
- [ ] Create About section
- [ ] Create ServiceCatalog (dark header + 4 service cards)
- [ ] Create PromoSection (Why Choose Us)
- [ ] Create FeatureHighlights (icon grid)
- [ ] Create TestimonialSlider
- [ ] Create Newsletter section
- [ ] Create Footer (3 columns + Component Dock link)
- [ ] Wire up App.tsx with all sections
- [ ] Add Tailwind theme tokens in index.css
- [ ] Write tests (100% coverage)
- [ ] Verify: typecheck, lint, test, build
- [ ] Register package-lock.json (npm install at root)
