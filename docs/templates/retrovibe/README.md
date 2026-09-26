# RetroVibe — Design Notes

Source: ColorLib Rettro (https://colorlib.com/wp/template/rettro/)
Preview: https://preview.colorlib.com/theme/rettro/
New name: retrovibe

## Structure Order

1. Navbar (sticky, logo + nav + hamburger)
2. Hero Slider (3 slides, auto-play, dark overlay)
3. Gallery (4-column grid with hover overlays)
4. About / Startup (text + CTA)
5. Services / Categories (4 icon cards)
6. Testimonials (dark bg, carousel)
7. Pricing (3 cards with features)
8. Instagram Feed (6 horizontal images)
9. Footer (nav links, copyright, Component Dock)

## Section-by-Section Fidelity Notes

### Navbar
- Sticky top bar with logo on left
- Navigation links: Home, About, Portfolio, Pricing, Blog, Contact
- Hamburger menu for mobile (hamburger--collapse pattern)
- White background, clean minimalist style

### Hero Slider
- Full-width carousel with 3 slides
- Each slide: "Photography" heading (Playfair Display), "Travel pro" subtitle
- Description text + CTA button per slide
- Dark semi-transparent overlay on background images
- Navigation arrows and dot indicators
- Auto-advance every ~5 seconds

### Gallery
- Section heading: "With my camera, I capture daily life"
- Description paragraph below heading
- 4-column image grid (responsive: 2-col on tablet, 1-col on mobile)
- Each image has hover overlay with category label
- Labels: Travelshots, Experimental, Father's Day, Curious Cats
- "More Portfolio" button centered below grid

### About / Startup
- Heading: "I'm Ready to Exceed Expectations"
- Long description paragraph
- "About Me" button/link
- Left-aligned text layout

### Services / Categories
- Heading: "Life is about Creating Experiences"
- Description paragraph
- 4 service cards in a row (responsive grid)
- Each card: icon (flaticon), title, description
- Cards have subtle background or border treatment

### Testimonials
- Dark navy background with background image overlay
- Carousel with testimonial quotes
- Quote text in large italic/serif font
- Author name and role displayed below
- Navigation dots for carousel

### Pricing
- Heading: "Choose a plan"
- 3 pricing cards: Silver ($50), Gold ($100), Platinum ($50)
- Each card: plan name, price, feature list, "Get Started" button
- Gold card has "Most Popular" badge/highlight
- Features: 2 TB space, unlimited bandwidth, full backup systems, free domain, unlimited database

### Instagram Feed
- 6 images displayed in a horizontal row
- Equal-width columns, no gaps (full-bleed)
- Simple image display, no overlay

### Footer
- Navigation links: Home, About, Portfolio, Pricing, Blog, Contact
- Copyright notice with current year
- "Made with Component Dock" branding (replaces original Colorlib attribution)
- Dark background matching the testimonial section

## Design Token Summary

- Primary navy: #1f2b7b
- Secondary blue: #6382e6
- Accent colors: #f4e700 (yellow), #e66686 (pink), #73fbaf (green), #a367e7 (purple), #f09359 (orange)
- Heading font: Playfair Display (serif)
- Body font: Sans-serif (Montserrat)
- Button style: sharp edges (border-radius: 0), rectangular
- Section backgrounds: alternating light (#fbf9ff, #f7f7f7) and dark (#010a44)
