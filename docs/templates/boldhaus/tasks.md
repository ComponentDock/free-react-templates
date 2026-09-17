# Boldhaus — Implementation Tasks & Design Notes

**Source:** ColorLib "Dup" — https://colorlib.com/wp/template/dup/
**Preview:** https://preview.colorlib.com/theme/dup/
**New name:** Boldhaus (apps/boldhaus)

## Section-by-Section Fidelity Notes

### 1. Header
- Logo image (placeholder) left, nav links right (Home, Features, Services)
- Linearicons hamburger menu icon for mobile
- Transparent/dark background over hero
- Use lucide-react Menu icon for hamburger

### 2. Hero Banner
- Fullscreen height, dark overlay (solid rgba dark)
- Split: left 50% text (h1 + p + CTA button), right 50% illustration
- h1: "Sleek and Clean with same perspective" (paraphrase OK)
- Primary button: pill shape (25px radius), border #e0003b, transparent bg
- Mobile: stack vertically, auto height
- Placeholder image: picsum.photos/seed/boldhaus-hero/600/800

### 3. Studio Showcase
- Red overlay rgba(224,0,59,0.8) over background
- Left: rounded thumbnail (3px radius), placeholder image
- Right: h2, paragraph, "View More" primary button
- Background: use a subtle texture or gradient behind the overlay

### 4. Achievements
- White background, section-gap padding
- Left 40%: h2 "Our Achievements", paragraph, "View More" button
- Right 60%: 3×2 grid of icon cards
- Cards: light #f9fcff bg, centered icon (42px, #777), h6 label below
- Hover: bg transitions to #e0003b, icon turns white
- Icons: Behance, Dribbble, YouTube, GitHub, Trophy, DollarSign
  (use lucide-react equivalents)

### 5. Video Banner
- Background image (placeholder), red overlay rgba(224,0,59,0.8)
- Centered play button (placeholder or lucide Play icon)
- h3 "Everyone wants to be unique" (white)
- Click → opens YouTube or does nothing (placeholder)

### 6. Skills / Progress Bars
- White background, section-gap
- Left 40%: h2 "Our Tools Expertness", paragraph, "View More" button
- Right 60%: 4 labeled progress bars
- Bar track: #f9fcff, height 5px
- Bar fill: #e0003b, animate from 0 to target width
- Labels: Photoshop 70%, Illustrator 60%, InDesign 50%, After Effects 80%

### 7. Carousel / Testimonials
- Background image (placeholder), red overlay rgba(224,0,59,0.8)
- 3-5 slides, each: left image thumb + right text (h2, h5, p, white btn)
- Auto-advance carousel with dots/arrows
- White variant button: border #fff, text white, hover fills white

### 8. Contact Info
- White background
- 4 columns centered: Office Address, Phone, Email, Support
- Each: h6 heading + paragraph with placeholder data
- Responsive: 2 cols tablet, 1 col mobile

### 9. Footer
- Background image (placeholder), red overlay
- Subscription form: email input + "Subscribe now" pill button
- 4-column widget area: About Agency links, Navigation Links (×2), Instafeed
- Instafeed: 8 placeholder images in flex-wrap grid
- Bottom bar: copyright + social icons (Facebook, Twitter, Dribbble, Behance)
- MUST include Component Dock link

## Component Architecture

```
apps/boldhaus/
  src/
    main.tsx              — entry (excluded from coverage)
    App.tsx               — composes all sections in order
    index.css             — Tailwind v4 entry + @theme tokens
    components/
      Header.tsx          — logo + nav + mobile menu
      Hero.tsx            — fullscreen hero with overlay
      Studio.tsx          — red-overlay studio showcase
      Achievements.tsx    — icon grid with hover animation
      VideoBanner.tsx     — background image + play button
      Skills.tsx          — progress bars
      Carousel.tsx        — testimonial slides
      Contact.tsx         — 4-column contact info
      Footer.tsx          — subscription + widgets + social
```

## Implementation Order

1. Scaffold from simplest existing app (copy + rename)
2. Header + Hero (establishes brand tokens)
3. Studio (first red-overlay section)
4. Achievements (grid + hover animation)
5. VideoBanner (simple overlay)
6. Skills (progress bars)
7. Carousel (most complex — needs carousel logic)
8. Contact (static columns)
9. Footer (subscription form + widget grid)
10. Tests for each component (TDD)
11. Run verify:app, fix any issues

## Dependencies

- packages/ui: Button, ButtonLink, cn utility
- lucide-react: Menu, Play, Behance (or Palette), Dribbble, Youtube,
  Github, Trophy, DollarSign, Facebook, Twitter
- No additional npm dependencies needed
- Poppins font via Google Fonts link in index.html
