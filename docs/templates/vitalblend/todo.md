# VitalBlend — Prep Notes & Implementation Outline

**Source:** ColorLib Healthcouch  
**Preview:** https://preview.colorlib.com/theme/healthcouch/  
**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/healthcouch-free-template.jpg  
**New Name:** vitalblend

## Section Order (top to bottom)

1. **Navbar** — sticky white bar, logo left, nav links center-right, green CTA button far right
2. **Hero Slider** — full-width bg image, large Poppins 300 heading, dark green subtitle + CTA, green circular video play icon
3. **About Section** — 2-col: large image left, heading + paragraphs + trust icons right
4. **CTA Banner** — full-width green (`#5AAC4E`) bg, heading + subtitle left, white-border button right
5. **Services** — 3-col centered grid, icon + heading + paragraph + plus-icon link per card
6. **Testimonial** — centered slider, quote icon + text + circular avatar + name/role, dot nav
7. **Video** — full-width dark bg image, centered green circular play button
8. **Blog** — "Latest Blog" heading, 3 cards with rounded (50px) images, heading + paragraph
9. **Satisfaction/About-Low** — green shape bg left, white heading "100% satisfaction guaranteed.", white-border button, image right
10. **Footer** — dark bg image, white logo, nav links, social icons, newsletter form (email + green subscribe), copyright, ComponentDock link

## Design Token Notes

- Primary green: `#5AAC4E` — use as Tailwind `@theme` color `brand`
- Dark green: `#234821` — use as `brand-dark`
- Headings: `#0D210B` — near-black with green undertone
- Accent red: `#f04e3c` — section title label spans only
- Font: Poppins (weights 300, 400, 500, 600)
- L-shaped button: `border-radius: 0 0 0 17px` (bottom-left only)
- Blog images: `border-radius: 50px`
- Video icon: 60px circle, `#5AAC4E` bg, pulsing border animation
- Hero height: 920px desktop → 600px mobile

## Implementation Notes

- Use `packages/ui` Button/ButtonLink components where possible; the L-shaped radius (`rounded-bl-xl`) is unique — may need a custom variant
- Hero slider can be simplified to a static hero (single slide) since React doesn't need the slick carousel
- Video play icon: use `lucide-react` Play icon in a styled circle
- Testimonial slider: single static testimonial or simple state-based carousel
- Blog images: use `https://picsum.photos/seed/vitalblend-blogN/600/400`
- About/trust icons: use `lucide-react` icons (Heart, Shield, etc.)
- Service icons: use `lucide-react` (Activity, Apple, Dumbbell)
- Footer newsletter: controlled input + button (no actual submission)
- All ColorLib references in the original (provenance) stay ONLY in this doc and the spec — never in app code
