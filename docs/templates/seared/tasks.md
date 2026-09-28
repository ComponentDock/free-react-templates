# Seared — Prep Notes

Source: ColorLib Diner (https://preview.colorlib.com/theme/diner/)

## Section Order (top → bottom)

1. Site Header — logo left, nav links (Home, About Us, Our Menu, Our Blog, Reserve A Table, Contact), hamburger toggle on mobile; sticky
2. Hero — full-width dark food image with overlay, large centered white heading (Playfair Display)
3. Features/Services — 4-column row, each: gold circular icon + title + description (Quality Cuisine, Fresh Food, Friendly Staff, Easy Reservation)
4. Specialties — "Our Specialties" heading, 6 recipe cards in carousel (image + title + text)
5. Testimonials — carousel with author photo + name + review quote
6. Feature Menu — "Feature Menu" heading, tab-based (Breakfast/Lunch/Dinner), each tab: list of menu items with images; "View All Menu" button
7. Master Chef — "Master Chef" heading, chef images; "Meet Our Chef" button
8. Menu List with Price — accordion layout, each: dish name + description + price
9. Events & News — heading + event cards
10. Why Choose Us — heading + supporting content
11. Footer — restaurant name, description, service hours, Quick Links, newsletter subscribe, copyright with Component Dock link

## Fidelity Notes

- **Primary color:** Gold #fdb44b (warm amber/gold, NOT green or red)
- **Secondary/hover:** Light Gold #fec97d
- **Button style:** Rounded corners (border-radius 4px), 2px border — distinct from square Delicious buttons
- **Fonts:** Playfair Display for headings, Open Sans for body — TWO font families (unlike Delicious which uses only Open Sans)
- **Icon circles:** 50% border-radius, gold background — used in features section
- **Specialty cards:** border-radius 16px, image + text overlay
- **Hero:** Dark food photo with semi-transparent overlay, very large serif heading
- **No parallax** — standard background images
- **Menu pricing:** Accordion-style with dish names and prices, not cards
- **Feature menu:** Tab-based navigation (Breakfast/Lunch/Dinner) — unique interaction pattern
- **Testimonials:** Carousel with author avatars, not a static list
- **Footer:** Multi-column (restaurant info, hours, links, newsletter) — more complex than Delicious footer
- **Overall aesthetic:** Elegant, warm, fine-dining feel — darker tones with gold accents

## Implementation Notes

- Use `picsum.photos/seed/seared-<n>/<w>/<h>` for all placeholder images
- Hero: static full-width image with overlay (no carousel needed, single hero slide)
- Specialties: implement as horizontal scroll or manual carousel, no external lib needed
- Testimonials: manual carousel (prev/next + dots)
- Feature Menu: tab component with state management for active tab
- Menu Pricing: accordion component with expand/collapse
- Icons: use lucide-react for feature icons (UtensilsCrossed, Leaf, Users, CalendarCheck or similar)
- Newsletter form: email input + submit in footer
- Mobile: hamburger menu, stacked layouts for all sections
- Two fonts: load Playfair Display + Open Sans from Google Fonts in index.html
