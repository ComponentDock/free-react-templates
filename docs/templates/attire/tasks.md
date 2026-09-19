# Attire — Implementation Tasks

Source: ColorLib Fashi → Name: Attire

## Component breakdown

### 1. HeaderTopBar
- Email + phone info (left)
- Login link + social icons (right)
- Dark/light background

### 2. MainHeader
- Logo (left)
- Category search bar with dropdown (center)
- Wishlist icon + cart icon with badge counts (right)

### 3. NavBar
- Navigation links: Home, Shop, Collection (dropdown: Men's, Women's, Kid's), Blog, Contact, Pages (dropdown: Blog Details, Shopping Cart, Checkout, FAQ, Register, Login)
- Active state with brand color

### 4. HeroCarousel
- Full-width carousel with 2+ slides
- Each slide: background image, tag line, heading, description, CTA button
- Off-card circular badge with discount percentage
- Animated entrance (slide up + fade in on active)

### 5. CategoryBanners
- 3-column grid: Men's, Women's, Kid's
- Each: background image, dark overlay, white heading

### 6. WomenProducts
- Large featured image (left, ~25%)
- Product carousel (right, ~75%) with filter tabs
- Product cards: image, name, price, sale badge

### 7. DealOfTheWeek
- Background image section
- Title, description, price
- Countdown timer (Days, Hours, Minutes, Seconds)
- "Shop Now" CTA button

### 8. MenProducts
- Mirror of WomenProducts layout
- Product carousel (left) + large featured image (right)

### 9. InstagramStrip
- 6 equal-width image tiles
- Hover overlay with Instagram icon + handle

### 10. BlogSection
- "From The Blog" heading
- 3 blog cards: image, date, comments, title, excerpt

### 11. PartnerLogos
- Logo carousel (partner brand logos)

### 12. Footer
- 4-column layout: logo+contact | Information | My Account | Newsletter
- Copyright bar with payment icons
- Component Dock link (mandatory)

## Implementation order

1. Scaffold: copy existing simple app, rename package, update vite.config.ts
2. HeaderTopBar + MainHeader + NavBar (navbar component)
3. HeroCarousel
4. CategoryBanners
5. WomenProducts (with filter tabs + carousel)
6. DealOfTheWeek (with countdown logic)
7. MenProducts (mirror of WomenProducts)
8. InstagramStrip
9. BlogSection
10. PartnerLogos
11. Footer (with Component Dock link)
12. index.css tokens + index.html font link
13. Tests (Vitest + RTL, 100% coverage)
14. Build verification
