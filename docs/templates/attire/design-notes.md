# Attire — Design Notes

Source: ColorLib Fashi (https://colorlib.com/wp/template/fashi/)
Preview: https://preview.colorlib.com/theme/fashi/

## Section order (top to bottom)

1. Header top bar — email, phone, login, language selector, social icons
2. Main header — logo, category search bar, wishlist + cart icons
3. Navigation bar — Home, Shop, Collection (dropdown), Blog, Contact, Pages (dropdown)
4. Hero carousel — full-width owl-carousel, 2 slides, background images, headline + CTA + off-card badge
5. Category banners — 3-column: Men's, Women's, Kid's with background images
6. Women's products — large featured image left (3 cols), product carousel right (8 cols) with filter tabs (Clothings/HandBag/Shoes/Accessories)
7. Deal of the Week — background image, title, price, countdown timer (Days/Hrs/Mins/Secs), Shop Now CTA
8. Men's products — product carousel left (8 cols), large featured image right (3 cols) with filter tabs
9. Instagram photo strip — 6 equal-width image tiles, hover overlay with Instagram icon + handle
10. Blog section — "From The Blog" heading, 3 blog cards (image, date, comments, title, excerpt)
11. Partner logos — logo carousel
12. Footer — logo + contact info + social links | Information links | My Account links | Newsletter form
13. Copyright bar — copyright text + payment method icons

## Fidelity notes

### Header
- Two-tier header: thin top bar (#fafafa or light bg) with contact info, then main header with logo + search + cart
- Search bar has "All Categories" dropdown button + text input + search icon button
- Cart and wishlist have badge counts

### Navigation
- Horizontal nav below header, dark text on white bg
- Collection and Pages have dropdown menus (CSS-only hover)
- Active state: brand color (#e7ab3c)

### Hero
- Full-width carousel (OwlCarousel in original, use React carousel)
- Each slide: background image (cover), tag line (brand color, uppercase, letter-spacing), heading (72px, bold), paragraph, primary CTA button
- Circular "off-card" badge (border-radius 50%, #e7ab3c bg, shows discount %)
- Smooth entrance animation (slide up + fade in)

### Category banners
- 3 equal columns with background images, dark overlay, white heading text centered

### Women's/Men's product sections
- Mirror layout: one large featured image + product carousel
- Filter tabs: "Clothings", "HandBag", "Shoes", " Accessories" — active tab highlighted
- Product cards: image, product name, price (sale price + original with strikethrough)
- "Discover More" link on the large featured image

### Deal of the Week
- Background image (cover), centered content
- Countdown timer: white rounded boxes (border-radius 5px) with brand color numbers
- "Shop Now" primary button below countdown

### Instagram strip
- 6 equal-width tiles (16.66% each), fixed height ~320px
- On hover: dark overlay + Instagram icon + handle text

### Blog
- 3-column grid, each card: image, date (calendar icon), comment count (comment icon), heading link, excerpt text

### Footer
- Dark background (#191919)
- 4-column layout: logo+contact | Information | My Account | Newsletter
- Newsletter: email input + Subscribe button
- Copyright bar at bottom with payment method icons
- MUST include Component Dock link

## Color palette

- Primary: #e7ab3c (golden amber)
- Text: #111111, #252525, #636363
- Background: #ffffff (main), #191919 (footer)
- Accent: #e5e5e5 (inputs), #b2b2b2 (muted text)

## Typography

- Font: Muli (Google Fonts), weights 300–900
- Hero heading: 72px, bold
- Section headings: 26px, bold
- Body: 14–16px, normal
- Buttons: 14px, bold, uppercase

## Button styles

- Primary: #e7ab3c bg, #fff text, 12px 30px padding, uppercase, bold, square (no radius)
- Secondary/site: same colors with 1px border
- Nav buttons: transparent bg, brand color on hover
