# Advisorly — Tasks & Design Notes

Source: ColorLib CellOn
Preview: https://preview.colorlib.com/theme/cellon/
New name: advisorly

## Section order (from preview DOM)

1. Navbar — logo + 3 nav links + hamburger (mobile)
2. Banner/Hero — split layout: image left, headline + CTA right
3. Video — background image + green overlay, play button, text right
4. About — split: heading + paragraph + button left, image right
5. Features — green overlay bg, 7 cards in 3-col grid
6. FAQ + Stats — 4 counters left, 3 FAQ items right
7. Contact — green overlay bg, centered heading, form (name/email/message)
8. Footer — 4 columns + bottom bar with copyright

## Design notes

- **Brand green** `#6cbb23` is the single dominant accent — buttons, icons,
  counters, overlay tint (`rgba(108,187,35,0.85)`), hover states, footer links.
- **Feature icon boxes**: light green `#f0f8e9` background, brand green icon,
  white on hover (swap to brand green bg + white icon).
- **Buttons**: pill-shaped (`border-radius: 20px`), primary = green filled +
  white text; secondary = green outline + green text; white-bg variant for
  contact section (white bg, green text, hover inverts).
- **Body shadow wrapper**: entire page wrapped in a box-shadow container
  (`box-shadow: 0 0 50px rgba(0,0,0,0.2)`) with 50px margin — gives a
  "card-in-page" feel.
- **Contact form**: transparent inputs with `#a6d477` borders, white text,
  48px line-height, placeholder in white.
- **Stats counters**: 48px font-weight-100 numbers in brand green.
- **Headings**: weight 100 for hero h1 and about h2, weight 600 for feature
  card titles and FAQ items; uppercase with letter-spacing on feature titles.
- **Responsive**: stack hero at 768px, hide nav links at 768px (show hamburger),
  reduce oz-body-wrap margin from 50px → 30px → 10px.

## Component outline

```
App.tsx
├── Navbar.tsx
├── HeroBanner.tsx
├── VideoSection.tsx
├── AboutSection.tsx
├── FeaturesSection.tsx
├── FaqStatsSection.tsx
├── ContactSection.tsx
└── Footer.tsx
```

## Tasks

- [ ] Set up project scaffold (copy minimal app, rename package)
- [ ] Add Poppins font to index.html
- [ ] Implement Navbar with logo + nav links + hamburger
- [ ] Implement HeroBanner split layout
- [ ] Implement VideoSection with green overlay
- [ ] Implement AboutSection two-column
- [ ] Implement FeaturesSection 7-card grid
- [ ] Implement FaqStatsSection (counters + FAQ)
- [ ] Implement ContactSection form
- [ ] Implement Footer 4-column + Component Dock link
- [ ] Add responsive breakpoints (768px, 575px)
- [ ] Write tests for all components (100% coverage)
- [ ] Verify build + lint + typecheck pass
