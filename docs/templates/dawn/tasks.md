# Dawn — Implementation Notes

## Source
- ColorLib: "Coming Soon V18" (`03-comming-soon`)
- Preview: https://colorlib.com/etc/cs/03-comming-soon.html
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/coming-soon-18.jpg

## Section order (single-section template)
1. Full-screen hero area with background image + dark overlay

## Component structure
```
src/
  main.tsx           — entry
  App.tsx            — renders <Hero />
  components/
    Hero.tsx         — full-screen centered coming-soon view
  index.css          — Tailwind entry + @theme tokens
```

## Fidelity notes

### Hero area
- Full viewport height (`100vh`), background image set via CSS `background-size: cover`
- Dark overlay: pseudo-element `::after` with `background: #000; opacity: 0.4`
- Content centered via flexbox (Tailwind `flex items-center justify-center`)
- h1 "COMING SOON" — Poppins, bold (weight 500+), white, 3.5em / 2.8em mobile
- Description — Open Sans, white, `max-width: 500px`, centered, line-height 1.6
- CTA button — pill shape (`rounded-full`), brand pink `#F84982`, white text
  - Hover: background transparent, text stays pink
  - Padding: `13px 35px`, border `2px solid #F84982`
- Social links — absolute-positioned at bottom, white text, inline
  - Hover: 2px pink underline slides out (translateX animation)

### Background image
- Use `https://picsum.photos/seed/dawn-hero/1920/1080` as placeholder
- Full-bleed, cover, centered

### Fonts (loaded via Google Fonts)
- Open Sans 400, 700 (body + buttons)
- Poppins 400, 500, 700 (headings)

### Tailwind @theme tokens to define
```
--color-brand: #F84982;
--color-brand-hover: #E45F74;
--font-heading: 'Poppins', sans-serif;
--font-body: 'Open Sans', sans-serif;
```

## Tasks
- [ ] Scaffold app from simplest existing template
- [ ] Create Hero.tsx with full-screen layout
- [ ] Load Google Fonts (Open Sans + Poppins) in index.html
- [ ] Add @theme tokens to index.css
- [ ] Implement background image with dark overlay
- [ ] Implement heading, description, CTA button
- [ ] Implement social links with hover animation
- [ ] Responsive breakpoints (h1 size, line-height)
- [ ] Tests: rendering, button hover, responsive, accessibility
- [ ] Verify 100% coverage
- [ ] Set CNAME + homepage
- [ ] No ColorLib references in app code
