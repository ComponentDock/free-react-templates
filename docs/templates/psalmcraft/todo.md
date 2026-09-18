# PsalmCraft — Implementation Todo

**Source:** ColorLib Libchurch (https://colorlib.com/wp/template/libchurch/)
**Preview:** https://preview.colorlib.com/theme/libchurch/
**Spec:** openspec/specs/template-psalmcraft/spec.md

## Structure order

1. TopNavBar
2. Header/Navbar
3. Hero
4. EventBanner (countdown)
5. About
6. Services (3-column)
7. Sermon (split layout)
8. EventList
9. Donate (progress bar)
10. Blog (3 cards)
11. Newsletter
12. FooterTop (contact + map)
13. Footer

## Design notes

- **Brand palette:** #dd3e3e (red), #3c1919 (dark maroon), #252525 (charcoal)
- **Light sections:** #f6f8f9 (services, sermon), #f7f8f8 (blog)
- **Typography:** Lora (serif, headings), Open Sans (sans-serif, body)
- **Buttons:** 2px radius, 14px 23px padding, uppercase, weight 700, bg #dd3e3e, color #fff
- **Parallax:** Hero, EventBanner, Sermon, Donate all use parallax background images
- **Countdown timer:** JS-driven countdown in EventBanner, shows days/hours/mins/secs
- **Donate progress:** Circular progress indicator (60%), with raised/goal amounts
- **Map placeholder:** FooterTop has a map area (right half); use a placeholder or static image
- **Social icons:** Font Awesome icons in top nav, footer; Themify icons also loaded

## Fidelity checklist

- [ ] Match all 13 sections in the exact order above
- [ ] Hero: full-width bg, centered 70px Lora heading, 18px Open Sans subtext, CTA
- [ ] Event banner: #dd3e3e red bg, countdown timer with dark badge cells
- [ ] About: 50/50 split, text left / image right
- [ ] Services: #f6f8f9 bg, 3 cards with circular icons
- [ ] Sermon: parallax left half, content card right half with sermon details
- [ ] Event list: date badge (day + month colored blocks), thumbnail, details
- [ ] Donate: parallax bg, circular progress, raised/goal text
- [ ] Blog: #f7f8f8 bg, 3 cards with thumbnail + meta
- [ ] Newsletter: #dd3e3e red bg, centered email input + subscribe
- [ ] Footer: split (info left, map right), dark maroon bottom bar
- [ ] Brand color #dd3e3e for all CTAs and accent sections
- [ ] Lora headings, Open Sans body throughout
- [ ] Responsive: hamburger nav, stacked columns on mobile
- [ ] Placeholder images: picsum.photos/seed/psalmcraft-<n>/<w>/<h>
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in any app source file
