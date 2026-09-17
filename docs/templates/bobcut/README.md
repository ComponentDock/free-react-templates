# Bobcut — Design Notes

**Source:** ColorLib Akame → https://preview.colorlib.com/theme/akame/
**New name:** bobcut
**Category:** Hair Salon / Beauty

## Structure Order

1. TopHeaderBar — dark strip with welcome text + hours/phone
2. Navbar — sticky nav with logo, links, mobile hamburger
3. Hero — full-width carousel with overlay text + CTA button
4. AboutUs — split: image left, text right with blockquote
5. Services — 4-col grid: icon + title + description cards
6. WhyChooseUs — gray bg split: image + text/features
7. Portfolio — filter tabs + masonry image grid with hover
8. Experts — 4-col team member cards
9. Blog — 3-col post cards with meta
10. CTA — gray bg split: heading + buttons + image
11. Footer — dark multi-column with hours, contact, copyright

## Section-by-Section Fidelity Notes

### TopHeaderBar
- Background: `#252525` (dark)
- Text: white, 14px, Open Sans
- Left: "Welcome to hair salon!" (paraphrase as needed)
- Right: hours + phone number
- Height: 50px

### Navbar
- White background
- Logo left (use text logo or placeholder)
- Links: Home, Portfolio, Services, About Us, Blog, Contact
- Sticky on scroll
- Mobile: hamburger menu
- Cart icon (can omit — not core salon feature)

### Hero / Welcome
- Full-width section with background image
- Overlay text: "We Care About Your Hair"
- Subtext: "Beautiful Hair Comes From A Legendary"
- Button: "About Us" — Playfair Display, gold `#bca858` fill
- Originally a carousel (2 slides); can simplify to single static hero

### AboutUs
- Left half: background image (salon interior)
- Right half: heading "The House of Hair Salon & Spa" + body text + blockquote
- Blockquote text: salon trends quote (paraphrase)
- "Read More" button
- Use picsum.photos for image

### Services
- Centered heading "Our Services"
- Subtitle text
- 4-column grid: Coloring, Haircut, Hairstyle, Coloring
- Each card: icon (lucide: Paintbrush, Scissors, Sparkles, Palette), title, short description
- Clean layout, no border/bg per card

### WhyChooseUs
- Background: light gray `#f6f9f9`
- Left: image with overlay content
- Right: heading "Why Choose Us" + checklist items (checkmark icons)
- Feature list: Quality, Experience, Professional, Creative

### Portfolio
- Filter tabs: All, Hairstyle (paraphrase categories)
- 4-column masonry grid (use CSS grid with varying heights)
- Items: 6-8 images with hover overlay showing category name
- Use picsum.photos with seed for consistency

### Experts
- Centered heading "Our Experts"
- 4-column grid of team cards
- Each: photo (picsum), name, role
- Names: Mila Hartley (Hairdresser), Teigan Duran (Stylist), Tanya Ramsay (Hairstylist), Donna Carr (Barber)

### Blog
- Centered heading "Latest News"
- 3-column grid of post cards
- Each: image, title (hair/beauty article), date, comment count icon
- Paraphrase article titles

### CTA
- Background: light gray `#f6f9f9`
- Left: heading "Make Stilo Your Number One Choice" (paraphrase: salon name)
- Body text
- Two buttons: "Book An Appointment" (gold), "Contact Us" (outline)
- Right: background image
- Originally had parallax bg image

### Footer
- Dark background
- Columns: about text + social icons, opening hours, contact info
- Hours: Mon-Fri 10-23, Sat 10-19
- Contact: phone, email, address (placeholder)
- Copyright with Component Dock link (NOT ColorLib)

## Design Tokens for Tailwind @theme

```css
@theme {
  --color-brand: #bca858;
  --color-brand-hover: #a8934d;
  --color-dark: #252525;
  --color-body: #6e6e6e;
  --color-light-bg: #f6f9f9;
  --color-border: #e5e5e5;
  --font-heading: "Playfair Display", serif;
  --font-body: "Open Sans", sans-serif;
}
```

## Implementation Notes

- Use `packages/ui` Button, Card components where possible
- Hero can be static (no carousel needed for fidelity)
- Portfolio filter: simple React state toggle (no external lib)
- Team cards: use picsum with seed `bobcut-expert-1` etc.
- Footer MUST link componentdock.com (replacing ColorLib attribution)
- No ColorLib strings anywhere in app code
