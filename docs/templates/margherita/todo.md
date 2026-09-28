# Margherita — Implementation Notes

Source: ColorLib "Pizza" (https://preview.colorlib.com/theme/pizza/)
New name: margherita

## Section Order (1:1 with preview)

1. Navbar
2. Hero Slider (owl-carousel replacement → React carousel)
3. Intro Bar (contact info + social)
4. About (50/50 split)
5. Services (3 columns)
6. Hot Pizza Meals (6-item grid)
7. Gallery (4-column image grid)
8. Counter (4 stats)
9. Menu (tabbed, split layout)
10. Blog (3 cards)
11. Contact/Appointment (map + form)
12. Footer (4 columns + copyright)

## Fidelity Notes

- **Hero**: Replace owl-carousel with a React carousel or simple CSS slider. Maintain 750px height, dark overlay, text-over-image layout. Each slide: subheading (script font), h1 headline, paragraph, 2 CTA buttons (primary solid + white outline).
- **Intro Bar**: Flex row — left 65% black (phone/address/hours), right 35% gold (#fac564) with social icons. Use lucide-react icons (Phone, MapPin, Clock, Twitter, Facebook, Instagram).
- **About**: `d-md-flex` split — left half background image, right half heading + paragraph. 50/50 on desktop, stacked on mobile.
- **Services**: Patterned background (use a neutral pattern or solid dark), 3 cards each with circular icon (100px, gold border), heading, description.
- **Hot Meals**: 3-column grid (6 items). Each: circular image (200px, 50% radius), title, description, price badge, outline button. Use picsum.photos for images.
- **Gallery**: 4-column no-gap grid. Each cell: background image, centered search icon overlay on hover. Use lucide-react Search icon.
- **Counter**: Dark background image section, 4 counters with gold-bordered circles. Use a counter animation on scroll (intersection observer).
- **Menu**: Left image + right tabbed area. 4 tabs (Pizza/Drinks/Burgers/Pasta). Each tab: 3 items with circular image, text, price, "Add to cart" button. Tab navigation uses gold (#fac564) color.
- **Blog**: 3 cards with image, title, date, author, comment count. White background.
- **Contact**: Split — left map placeholder (gray div), right form (First Name, Last Name, Message, Send button). Dark overlay background.
- **Footer**: Dark (#101315), 4-column: About + social, Recent Blog (2 entries), Services links, Contact info. Copyright bar. Link to Component Dock.

## Component Outline

```
src/
  main.tsx
  App.tsx
  components/
    Navbar.tsx
    HeroSlider.tsx
    IntroBar.tsx
    About.tsx
    Services.tsx
    HotMeals.tsx
    Gallery.tsx
    Counter.tsx
    Menu.tsx
    Blog.tsx
    Contact.tsx
    Footer.tsx
  index.css
  test/
    setup.ts
```

## Key Decisions

- Menu tabs: use React state for tab switching (no jQuery)
- Hero slider: simple auto-advancing React carousel with manual dot navigation
- Counter: intersection observer + requestAnimationFrame for count-up animation
- All images: picsum.photos with seeded URLs for determinism
- Icons: lucide-react throughout
- No external JS dependencies beyond React ecosystem
