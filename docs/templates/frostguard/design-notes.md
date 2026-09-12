# FrostGuard — Implementation Notes

**Source:** ColorLib Hvacompany → https://colorlib.com/wp/template/hvacompany/
**Preview:** https://preview.colorlib.com/theme/hvacompany/
**New name:** frostguard

## Section Order & Fidelity Notes

### 1. Header
- **Structure:** Single-tier header. Left side: social icons (Facebook, Twitter, Instagram, YouTube). Center: logo. Right: nav links (Home, About, Shop, Contact, News) + "Pages" dropdown + phone number (1-688-688-94).
- **Fidelity:** Match the horizontal layout. Social icons from lucide-react. Nav links use hover underline. Phone number displayed prominently.
- **Tailwind:** `bg-white` header, sticky positioning. Social icons: `text-[#4586D5]` hover. Phone: `font-['Saira_Condensed']`.

### 2. Hero
- **Structure:** Full-width slider/carousel with background images (use `picsum.photos/seed/frostguard-hero-1/1920/1080`). Overlay with centered text: headline "Keeping your home comfortable all year long", subtext, "Contact us" yellow CTA button. Left/right arrows for carousel navigation.
- **Fidelity:** Match the centered text layout on dark overlay. Hero images cover full width. CTA button is pill-shaped (`border-radius: 60px`), yellow (`#FAD110`), dark text (`#142336`).
- **Tailwind:** `bg-cover bg-center` for hero image. Text: `text-white text-center`. Button: `bg-[#FAD110] text-[#142336] rounded-[60px] font-['Saira_Condensed']`.

### 3. Benefits
- **Structure:** 4 benefit items in a row (CSS grid / flex 4-col). Each: icon image (top), title below. White card background.
- **Fidelity:** Icons use PNG images from original — replace with lucide-react icons. Items: No Upfront Payments, Satisfaction Guarantee, Emergency Service, 8 Years Experience.
- **Tailwind:** `grid grid-cols-4 gap-6`. Cards: `bg-white p-6 text-center`. Icons: use lucide-react (e.g. `CreditCard`, `ShieldCheck`, `Siren`, `Calendar`).

### 4. Services
- **Structure:** Section with heading "What We Can Offer You" + "Get a quote" outline button on right. Below: carousel of service cards. Each card: background image, icon overlay, title, description, "More info" link.
- **Fidelity:** Cards have image on top with icon overlay at bottom-left. Cards arranged in a horizontal scroll/carousel. Carousel has dot indicators.
- **Tailwind:** Section title: `font-['Saira_Condensed']`. Cards: `rounded-lg overflow-hidden`. Image: `bg-cover bg-center h-48`. Icon: circular overlay `bg-[#4586D5] rounded-full`.

### 5. Counter
- **Structure:** Full-width dark background (`#142336`). 4 counter items in a row, each with icon image, large number, and label.
- **Fidelity:** Numbers in white, labels in accent blue (`#4586D5`). Background is solid dark navy. Counter values: 3589 (Satisfied Customers), 868 (Professional), 5148 (Equipment Sold), 025 (Branches Operating).
- **Tailwind:** `bg-[#142336] text-white`. Numbers: `text-4xl font-bold text-white`. Labels: `text-[#4586D5]`. Icons: lucide-react (e.g. `Users`, `UserCheck`, `Package`, `Building`).

### 6. About
- **Structure:** Split 50/50 layout. Left: two images (one large, one small overlaid at bottom-right). Right: section title "Quality Heating & Cooling", paragraph about warranty, 3-item checklist, "Get in touch" outline button.
- **Fidelity:** Left images have slight overlap. Checklist items have check icons (use `CheckCircle` from lucide). Outline button: transparent bg, blue border/text.
- **Tailwind:** Left: `relative`. Small image: `absolute bottom-0 right-0`. Checklist: `text-[#4586D5]`. Button: `border border-[#4586D5] text-[#4586D5] rounded-[60px]`.

### 7. Quote
- **Structure:** Two-column layout. Left: form with "Get a quote" heading, input fields (Name, Phone, Email), service dropdown, message textarea, submit button. Right: video thumbnail with play button overlay.
- **Fidelity:** Form inputs are stacked in 2-column grid within the form. Dropdown has service options. Submit button is dark (`#000`). Video thumbnail uses `picsum.photos/seed/frostguard-video/800/500`.
- **Tailwind:** Form: `bg-white p-8`. Inputs: `border border-gray-300 rounded p-3`. Submit: `bg-black text-white rounded-[60px]`. Play button: circular `bg-white/80 rounded-full` overlay.

### 8. Testimonials
- **Structure:** Centered section title "What Clients Say?" + carousel of testimonial cards. Each card: quote text, horizontal divider, author photo (circular), author name, location.
- **Fidelity:** Cards have white background. On hover, a yellow (`#FAD110`) border appears. Carousel shows 3 cards. Author photos are circular.
- **Tailwind:** Cards: `bg-white p-8 rounded-lg`. Hover: `hover:border-2 hover:border-[#FAD110]`. Author photo: `w-12 h-12 rounded-full`. Divider: `border-t border-[#FAD110]`.

### 9. Call to Action
- **Structure:** Full-width section with dark background image (use `picsum.photos/seed/frostguard-cta/1920/600`). Centered text: subtitle "Modern Styling for your Modern Life", heading "less power Consume, more cooling", "installation now" yellow CTA button.
- **Fidelity:** Match the centered text layout on dark overlay. Text is white. Button is yellow pill-shaped.
- **Tailwind:** `bg-cover bg-center bg-[#142336]/80`. Text: `text-white text-center`. Button: `bg-[#FAD110] text-[#142336] rounded-[60px]`.

### 10. Products
- **Structure:** Section heading "Heating & Cooling Store" + "View all products" outline button. Grid of 4 product cards. Each: product image, optional label (New/-10%/Out of stock), product name, price, "Add to cart" link.
- **Fidelity:** Labels are positioned at top-right of image. "New" = green, "-10%" = red discount, "Out of stock" = gray. Price displayed prominently. Cards in a 4-column grid.
- **Tailwind:** Grid: `grid grid-cols-4 gap-6`. Card: `bg-white rounded-lg overflow-hidden`. Labels: `bg-green-500`, `bg-red-500`, `bg-gray-500`. Price: `text-lg font-bold`. "Add to cart": `text-[#4586D5]`.

### 11. Latest News
- **Structure:** Centered section title "HVAC Tips & Tricks". 3 blog cards in a row. Each: background image, category label ("Tips & tricks"), title, author name, date.
- **Fidelity:** Cards have image on top with label overlay. Title is a link. Author and date in small text below.
- **Tailwind:** Grid: `grid grid-cols-3 gap-8`. Card image: `bg-cover bg-center h-56`. Label: `bg-[#FAD110] text-[#142336] text-xs px-3 py-1 rounded`.

### 12. Footer
- **Structure:** Call-to-action bar (dark bg) with "Contact us now to get quote" + phone number with icon. Below: 4-column footer (Contact us, Quick links, What's news, Subscribe). Bottom: copyright line.
- **Fidelity:** CTA bar has dark background (`#142336`) with white text. Footer columns: contact info with social icons, link lists, 2 recent posts with thumbnails, email subscribe form. Copyright replaces Colorlib with Component Dock.
- **Tailwind:** CTA bar: `bg-[#142336] text-white`. Footer: `bg-[#0a1525]` (slightly darker than counter). Social icons: `text-[#4586D5]`. Subscribe button: `bg-black text-white rounded-[60px]`.

## Shared Components to Reuse from packages/ui
- `Button` / `ButtonLink` — for CTAs (primary variant with `#FAD110` bg, outline variant with `#4586D5` border)
- `Card` — for benefit cards, service cards, product cards, blog cards
- `cn()` — for all class merging

## Placeholder Images
- Hero bg: `https://picsum.photos/seed/frostguard-hero-1/1920/1080`
- Service images: `https://picsum.photos/seed/frostguard-service-1/600/400` through `-service-6`
- About images: `https://picsum.photos/seed/frostguard-about-1/600/600`, `-about-2/300/300`
- Video thumbnail: `https://picsum.photos/seed/frostguard-video/800/500`
- CTA bg: `https://picsum.photos/seed/frostguard-cta/1920/600`
- Product images: `https://picsum.photos/seed/frostguard-product-1/400/400` through `-product-4`
- Blog images: `https://picsum.photos/seed/frostguard-blog-1/600/400` through `-blog-3`
- Testimonial avatars: `https://picsum.photos/seed/frostguard-avatar-1/100/100` through `-avatar-3`
- Footer recent post thumbnails: `https://picsum.photos/seed/frostguard-news-1/100/100`, `-news-2`

## Implementation Priority
1. Header (nav + social icons)
2. Hero (bg image slider + CTA)
3. Benefits (4 cards)
4. Services (carousel)
5. Counter (dark bg + stats)
6. About (split layout)
7. Quote (form + video)
8. Testimonials (carousel)
9. Call to Action (dark bg + CTA)
10. Products (card grid)
11. Latest News (blog cards)
12. Footer (CTA bar + multi-column)
