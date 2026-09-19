# OakCraft — Implementation Todo and Design Notes

## Source mapping
- ColorLib template: "Amado"
- Preview URL: https://preview.colorlib.com/theme/amado/
- Screenshot: amado-free-template.jpg
- New name: oakcraft

## Implementation order (section-by-section)

1. Sidebar — fixed left sidebar with logo, nav, buttons, icons, social links
2. ProductGrid — 3-column grid of 9 furniture category cards with hover overlay
3. Newsletter — dark bg section with heading + email form
4. Footer — white bg, logo/copyright left, nav links right

## Design notes

### Colors
- Primary/brand: #fbb710 (golden yellow — buttons, accents, hover lines)
- Dark: #131212 (near-black — headings, nav, active states, button hover)
- Secondary text: #6d6d6d (gray — body, prices)
- Newsletter bg: #3c3c3c (dark gray)
- Newsletter text: #b3b1b1 (light gray)

### Typography
- Font: Helvetica Neue (bold + medium weights) — replace with Inter or similar
- Nav links: 14px uppercase, #131212
- Product hover text: price #6d6d6d, title white on hover
- Newsletter heading: 36px, white, "25% Discount" in yellow

### Layout patterns
- Sidebar + main content: flex layout, sidebar fixed width left
- Buttons: square (border-radius: 0), #fbb710 bg, white text, 18px, 55px height
- Button hover: #131212 bg
- Product cards: full-width bg image, dark overlay on hover
- Yellow accent line: 80px x 3px #fbb710 on product hover
- Newsletter form: email input white bg, submit button absolute right
- Footer: two-column flex, logo+copyright left, nav right

### Fidelity notes
- Sidebar is the primary navigation (not a top navbar)
- Product grid has 9 items in a 3-column layout (not a carousel)
- Each product card links to shop page
- Search overlay is a fixed fullscreen div
- Mobile: sidebar collapses to hamburger toggle
- FontAwesome icons — replace with lucide-react
- Replace Colorlib logo with placeholder/ComponentDock branding
- Replace "Amado" brand with "OakCraft"
- Replace Colorlib copyright with Component Dock link
