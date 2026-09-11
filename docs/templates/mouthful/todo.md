# Mouthful — Implementation Todo & Design Notes

Source: ColorLib Dingo
Preview: https://preview.colorlib.com/theme/dingo/
Spec: openspec/specs/template-mouthful/spec.md

## Section order (from source HTML, lines 35–909)

1. Navbar (header, main_menu) — line 35–86
2. Hero / Banner (banner_part) — line 88–113
3. Popular Dishes (exclusive_item_part) — line 115–178
4. About (about_part, split layout) — line 180–204
5. Food Menu (food_menu, tabbed) — line 224–544
6. Chefs (chefs_part, 3-col grid) — line 546–629
7. Reservation (regervation_part, form) — line 631–700
8. Testimonials (review_part, carousel) — line 702–757
9. Blog (exclusive_item_part, 3-col grid) — line 759–834
10. Footer (footer-area, 4-col) — line 836–909

## Component breakdown

| Component | Source selector | React component |
|-----------|----------------|-----------------|
| Navbar | `.main_menu` | Navbar.tsx |
| Hero | `.banner_part` | Hero.tsx |
| PopularDishes | `.exclusive_item_part` (first) | PopularDishes.tsx |
| About | `.about_part` (split) | About.tsx |
| FoodMenu | `.food_menu` (tabbed) | FoodMenu.tsx |
| Chefs | `.chefs_part` | Chefs.tsx |
| Reservation | `.regervation_part` | Reservation.tsx |
| Testimonials | `.review_part` | Testimonials.tsx |
| Blog | `.exclusive_item_part` (second) | Blog.tsx |
| Footer | `.footer-area` | Footer.tsx |

## Design notes

### Color palette
- Body bg: #ffffff (white)
- Gray sections: #f6f5f1 (warm light gray) — Food Menu, Testimonials
- Brand orange: #ff6426 — buttons, hovers, links
- Heading color: #2c3033 (dark charcoal)
- Body text: #555555 (medium gray)
- Button text: #1d272f (very dark)
- Button hover underline bg: #ffeee7 (light pink-orange)

### Typography
- Headings (h1–h6): Cardo, serif
- Body/paragraph: Lora, serif, 15px, line-height 1.7
- Base size: 14px
- h2: 44px, weight 600, line-height 1.222
- h3: 24px
- h5: 18px

### Buttons
- btn_1: White bg, orange (#ff6426) text → orange bg, white text on hover (nav CTA)
- btn_2: Dark text (#1d272f), underline with #ffeee7 bg (hero CTAs)
- btn_3: Dark text with arrow icon (read more)
- btn_4: Orange primary action (reservation submit)
- No border-radius visible (rectangular buttons)

### Layout
- Bootstrap-like 12-col grid → Tailwind grid/flex
- Container max-width ~1140px
- Section padding: 140px top/bottom (`.section_padding`)
- Full-width container-fluid for About section

### Food Menu tabs
- Bootstrap pills/nav tabs in source
- Implement as React state-driven tabs
- 5 categories: Special, Breakfast, Lunch, Dinner, Snacks
- Each tab: 6 food items in 2-column layout
- Food item: thumbnail (100px), name, description, price

### Reservation form
- 2-column grid layout
- Fields: Name, Email, Persons (select), Phone, Date (date picker), Time (select), Notes (textarea)
- Submit button: btn_4 style
- Use native HTML date input or a lightweight date picker

### Testimonials
- Source: owl-carousel slider
- Implement as CSS-only carousel or simple React slider
- Each review: client photo, quote text, reviewer name + title

### Blog cards
- 3-column grid
- Each card: image, date + tag, title, "Read More" link
- Reuse PopularDishes card pattern

### Footer
- 4 columns: About Us, Important Links, Contact, Newsletter
- Newsletter: email input + submit button with paper plane icon
- Copyright row: text + social icons (Facebook, Twitter, Dribbble, Behance)
- Must link to componentdock.com

### Placeholder images
- Hero background: picsum.photos/seed/mouthful-hero/1920/800
- Food item thumbnails: picsum.photos/seed/mouthful-food-N/100/100
- About illustration: picsum.photos/seed/mouthful-about/600/400
- Chef photos: picsum.photos/seed/mouthful-chef-N/300/300
- Client review photos: picsum.photos/seed/mouthful-client-N/100/100
- Blog images: picsum.photos/seed/mouthful-blog-N/400/300

### Icons mapping (Themify/Flaticon → Lucide)
- ti-facebook → Facebook
- ti-twitter-alt → Twitter
- ti-instagram → Instagram
- ti-skype → Phone or MessageCircle
- ti-heart → Heart
- ti-dribbble → Dribbble (or Figma)
- fab fa-facebook-f → Facebook
- fab fa-twitter → Twitter
- fab fa-behance → ExternalLink
- fa-paper-plane → Send
- play.svg → Play
- left_1.svg, left_2.svg → ArrowRight
