# Boxwise — Implementation Notes

Source: ColorLib Boxus — https://preview.colorlib.com/theme/boxus/

## Section Build Order

1. **Navbar** — Fixed top nav, dark bg, links to all sections
2. **Hero** — Full-screen slider with left/right arrows, dark navy bg
3. **Services** — White bg, 6 service cards (icon + title + desc) in horizontal scroll
4. **Portfolio** — Dark navy bg, image grid, "LOAD MORE" link in pink
5. **About (Crafters)** — White bg, team member carousel with photos + social icons
6. **News (Stories)** — Dark navy bg, blog post cards in carousel
7. **Video** — Dark navy bg, full-width background image, play button → video popup
8. **Skills (Expertise)** — White bg, two-column: progress bars left + text right
9. **Contact** — White bg, form with name/email/subject/message fields
10. **Footer** — Dark bg, links to Component Dock

## Fidelity Notes

- The original uses sharp corners (no border-radius) on all elements
- Services section has 6 cards in a horizontal scrollable slider (not a grid)
- Portfolio uses a 3-column grid on dark navy
- Team section is a carousel with prev/next arrows
- Video section has a background image overlay with a centered play icon
- Skills section uses horizontal progress bars with percentage labels
- Contact form is a standard 4-field layout (no captcha)
- No prominent CTA button — the only CTA is "LOAD MORE" text link in pink
