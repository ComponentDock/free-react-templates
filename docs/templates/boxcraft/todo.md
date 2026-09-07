# BoxCraft — Implementation Todo & Design Notes

## Source

- ColorLib: Boxus
- Slug: boxus
- Category: Creative / Digital Agency
- Preview: https://preview.colorlib.com/theme/boxus/

## Structure order

1. Navigation (fixed top, logo + menu + hamburger)
2. Hero full-width image slider with text overlays
3. Services (two-column: image slider + descriptions)
4. Portfolio (grid/masonry with filters + load-more)
5. Crafters/Team (member cards with social links)
6. Stories/Timeline (vertical timeline, alternating sides)
7. Offer (dark background, feature cards)
8. Expertise (progress bars with percentages)
9. Contact (form + company info)
10. Footer (copyright + social icons)

## Section-by-section fidelity notes

### Navigation
- Fixed position at top, transparent/dark background
- Logo on left, menu links on right
- Hamburger icon on mobile (< 768px)
- Font: Montserrat

### Hero slider
- Full-width image carousel (fw-image-slider)
- Text overlays on each slide with title + description
- Pagination dots at bottom
- Auto-advance with manual navigation arrows
- Images: use picsum.photos with seed for deterministic results

### Services
- Two-column layout: image slider left, text content right
- Service items with title + description
- Image slider wraps multiple service images
- Alternating layout (image left/right per item)

### Portfolio
- Grid/masonry layout (grid-item with p_one, p_one_half classes)
- Category filter tabs at top
- Hover overlay with project title
- "Load More" button for additional items
- 3-column grid on desktop, 2 on tablet, 1 on mobile

### Crafters/Team
- Team member cards with circular or rectangular photos
- Name and role below photo
- Social media icon links (font-awesome)
- Image slider for multiple team views

### Stories/Timeline
- Vertical timeline with left/right alternating entries
- Year markers in accent pink (#e54b76) or gold (#FFBA42)
- Date + description text for each entry
- Subtle line connecting entries

### Offer
- Dark background (#23214c)
- Feature/service cards in grid
- Icons + titles + descriptions
- White text on dark background

### Expertise
- Progress bar indicators
- Skill name + percentage label
- Bars animate on scroll into view
- Green accent (#55B286) for filled portion

### Contact
- Two-column: form left, info right
- Fields: Name, Email, Subject, Message (textarea)
- Submit button
- Company address/phone/email info on right

### Footer
- Dark background
- Copyright text
- Social icons: Twitter, Facebook, Dribbble, Behance, RSS
- Component Dock attribution link

## Fidelity priorities

1. **Exact colors** — #23214c brand, #e54b76 accent, #FFBA42 gold, #55B286 green
2. **Typography** — Montserrat headings, PT Serif body
3. **Section order** — match original 1:1
4. **Dark/light alternation** — sections alternate between white and dark backgrounds
5. **Hero slider** — full-width with auto-advance
6. **Portfolio grid** — masonry-style with hover overlays

## Component plan

- `src/App.tsx` — root layout with all sections
- `src/components/Navbar.tsx` — fixed navigation
- `src/components/HeroSlider.tsx` — full-width image carousel
- `src/components/Services.tsx` — two-column service cards
- `src/components/Portfolio.tsx` — grid with filters and load-more
- `src/components/Team.tsx` — crafters/team member cards
- `src/components/Timeline.tsx` — vertical timeline stories
- `src/components/Offer.tsx` — dark-background offer cards
- `src/components/Expertise.tsx` — progress bars
- `src/components/Contact.tsx` — contact form + info
- `src/components/Footer.tsx` — copyright + social links
- `src/index.css` — Tailwind + @theme tokens

## Dependencies

- No new dependencies beyond standard stack
- Use lucide-react for icons (Twitter, Facebook, etc.)
- Use picsum.photos for placeholder images
- Use Google Fonts (Montserrat, PT Serif, Roboto) via link in index.html
