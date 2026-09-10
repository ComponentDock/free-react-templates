# WhiteRoom — Implementation Tasks & Design Notes

**Source**: ColorLib Cleaning Company (`cleaning-company`)
**Preview**: https://preview.colorlib.com/#cleaning-company
**Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/cleaningcompany.jpg
**Spec**: openspec/specs/template-whiteroom/spec.md

---

## Section Order (top → bottom, matching original)

1. **Top Utility Bar** — solid blue `#1976D2`, phone + email left, social icons (FB, Twitter, IG, Pinterest) right
2. **Navbar** — sticky white, logo "CLEANING" (dark) + "COMPANY" (yellow), nav links: Home, About, Services, Portfolio, Pricing, Blog, Contact; Home underlined in yellow
3. **Hero Banner** — full-viewport bg photo (cleaner with supplies), left-aligned: subtitle "Leave the house cleaning chores to us", headline "Let us do the dirty work, so you don't have to.", blue "LEARN MORE" button
4. **Appointment Booking Bar** — white bg, 4 fields (Name, Phone, Select Services, Select Cleaners) + blue "MAKE AN APPOINTMENT" button
5. **Welcome / About** — two-column: cleaner photo left, blue caption "WELCOME TO CLEANING COMPANY", heading "Let's make you fresher than ever", body text; floating blue "Business Hours" box with yellow heading overlapping left
6. **Services** — light bg, service cards with icons + titles + descriptions
7. **Gallery / Portfolio** — grid of work sample images
8. **Testimonials** — customer quotes with names/roles
9. **Contact** — form or Google Maps embed + contact details
10. **Footer** — dark bg, multi-column navigation, copyright, Component Dock link

## Component Mapping

| Section | Component File | Notes |
|---------|---------------|-------|
| TopBar | `TopBar.tsx` | Full-width blue bar, white text, lucide-react social icons |
| Navbar | `Navbar.tsx` | Sticky, flex layout, logo as styled text (dark+yellow), yellow underline on active |
| Hero | `Hero.tsx` | Background image, left-aligned text, no dark overlay |
| BookingBar | `BookingBar.tsx` | Full-width white, flex row of 4 fields + CTA button |
| Welcome | `Welcome.tsx` | Two-column grid, floating positioned Business Hours box |
| Services | `Services.tsx` | Light bg, service card grid with icons |
| Gallery | `Gallery.tsx` | Image grid (masonry or CSS grid) |
| Testimonials | `Testimonials.tsx` | Customer quote cards |
| Contact | `Contact.tsx` | Contact form or map embed |
| Footer | `Footer.tsx` | Dark bg, 4-column layout, copyright + Component Dock link |

## Fidelity Notes

- **Font**: Use Poppins via Google Fonts `<link>` in `index.html`. Clean geometric sans-serif matches the screenshot.
- **Brand blue**: `#1976D2` — use as `--color-brand` in Tailwind `@theme`.
- **Accent yellow**: `#FFC107` — use as `--color-accent` in Tailwind `@theme` for logo text and active nav underline.
- **Button shape**: 4px border-radius, uppercase, 13px font, 14px 30px padding, solid blue.
- **Logo treatment**: "CLEANING" in dark `#212121` + "COMPANY" in yellow `#FFC107`, both bold sans-serif. Use two `<span>` elements with different color classes.
- **Active nav underline**: 3px solid yellow `#FFC107` underline on the active link.
- **Hero**: No dark overlay — the photo is visible as-is with white text positioned on the left side. Min-height 100vh.
- **Booking bar**: Full-width, white bg, 4 input fields in a row (stacked on mobile) with a tall blue CTA button at the end. Inputs have subtle borders.
- **Floating Business Hours box**: Absolutely positioned, overlapping the two-column layout. Blue bg `#1976D2`, yellow heading, white text for hours.
- **Social icons**: Flat white icons on blue utility bar. Use lucide-react icons (Facebook, Twitter, Instagram, Pinterest).
- **Placeholder images**: Use `picsum.photos/seed/whiteroom-<n>/...` for all images.
- **Footer attribution**: Replace any Colorlib reference with "Component Dock" linking to `https://www.componentdock.com/`.
- **No dark mode**: This template is light-themed only (cleaning services aesthetic).

## Design Reference

- Screenshot shows: professional cleaner (woman in teal shirt, pink gloves) in a kitchen setting for the hero photo.
- The booking bar is a distinctive feature — not all ColorLib templates have this. It should be prominent and functional-looking.
- The floating Business Hours box is a unique visual element — position it with `absolute` or `relative` positioning to overlap the columns.
- The overall aesthetic is clean, professional, and conversion-focused with blue as the trust color and yellow as the accent.
