# Inkcraft — Implementation Notes

Source: ColorLib Tattooz
Preview: https://preview.colorlib.com/theme/tattooz/tattoo/index.html

## Implementation todo

- [ ] Scaffold app from a minimal existing app (e.g. `aurora` as template)
- [ ] Register workspace in `package-lock.json` (`npm install` at root)
- [ ] Create `public/CNAME` with `inkcraft.free.componentdock.com`
- [ ] Set `homepage` in `package.json` to `https://inkcraft.free.componentdock.com`
- [ ] Configure `vite.config.ts` with `injectUiSource()`
- [ ] Set up `src/index.css` with Tailwind v4 `@theme` tokens (brand orange, dark backgrounds, Montserrat font)
- [ ] Implement `src/components/Navbar.tsx` — sticky, logo left, nav links, search + cart icons
- [ ] Implement `src/components/HeroSlider.tsx` — full-width bg images, overlay text, CTA button
- [ ] Implement `src/components/About.tsx` — title, two-col: text left, images right
- [ ] Implement `src/components/Services.tsx` — "What We Do", 6 services with icons, center image
- [ ] Implement `src/components/Gallery.tsx` — filterable grid, category buttons, hover overlay
- [ ] Implement `src/components/Team.tsx` — 4 member cards, social icon overlay
- [ ] Implement `src/components/DiscountCTA.tsx` — parallax bg, overlay, centered text + CTA
- [ ] Implement `src/components/Pricing.tsx` — 3 pricing cards, Diamond highlighted
- [ ] Implement `src/components/BookingForm.tsx` — parallax bg, form fields, illustration
- [ ] Implement `src/components/Blog.tsx` — 4 blog cards, meta + excerpt
- [ ] Implement `src/components/Footer.tsx` — 4-column footer, orange bottom bar
- [ ] Add footer Component Dock link: `https://www.componentdock.com/`
- [ ] Write tests for all components (Vitest + RTL)
- [ ] Run `npm run verify:app inkcraft` — 100% coverage required
- [ ] Commit and push

## Design notes

### Section order (faithful to original)
1. Navbar (sticky)
2. Hero Slider (full-width, dark overlay, "Book Now")
3. About Us (bg-1: #0d0f11)
4. What We Do (bg-2: #131619)
5. Gallery / Latest Tattoos (bg-1)
6. Team (bg-2)
7. Discount CTA (parallax)
8. Pricing (bg-1)
9. Booking Form (parallax)
10. Blog / Latest News (bg-1)
11. Footer Top (bg-2: #131619)
12. Footer Bottom (brand orange: #fb9902)

### Color mapping to Tailwind
- Brand primary: `#fb9902` → `@theme { --color-brand: #fb9902; }`
- Dark bg 1: `#0d0f11` → Tailwind `bg-[#0d0f11]` or custom token
- Dark bg 2: `#131619` → Tailwind `bg-[#131619]` or custom token
- Overlay: `rgba(0,0,0,0.9)` → Tailwind `bg-black/90`

### Font
- Load Montserrat (weights 300, 400, 600) via Google Fonts `<link>` in index.html
- Apply `font-montserrat` globally

### Icons (lucide-react equivalents)
- Tattooing → `PenTool`
- Tattoo Design → `PenTool` or `Pencil`
- Tattoo Removal → `Scissors`
- Piercing → `Circle` or `Sparkles`
- Laser Removal → `Zap`
- Henna Design → `Flower2`
- Search → `Search`
- Cart → `ShoppingCart`
- Social: Facebook, Twitter, LinkedIn, GooglePlus, Vimeo, YouTube → lucide or simple SVGs
- Gallery overlay → `Link`
- Blog read more → `ArrowRight`

### Hero CTA button
- White bg, dark text, uppercase, 12px font, 8px 35px padding
- Hover: bg brand orange, text white
- Border radius: 3px

### Pricing cards
- Center card (Diamond) has `.active` class — highlight with brand orange border or subtle glow
- Silver and Golden: standard styling with strikethrough on unavailable features

### Parallax
- Use CSS `background-attachment: fixed` for parallax effect
- Dark overlay with `::before` pseudo-element (`bg-black/70`)
- Or use `react-parallax` library if needed

### Gallery filtering
- Data-driven: array of images with category tags
- React state for active filter
- CSS grid with transition for show/hide
- Hover: dark overlay + link icon

### Booking form
- Two-column layout on desktop: form left, illustration right
- Hidden on mobile (responsive)
- Form fields: First Name, Last Name, Date (select), Time (select), Email, Pack (select), Submit button
- Submit button: brand orange bg, white text
