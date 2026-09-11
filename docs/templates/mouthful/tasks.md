# Mouthful — Tasks & Design Notes

## Source

- **ColorLib slug:** dingo
- **Preview URL:** https://preview.colorlib.com/theme/dingo/
- **Screenshot:** dingo-free-template.jpg

## Section order (implementation sequence)

1. **Navbar** — "Mouthful" logo + nav (Home, About, Menu, Chefs, Blog, Contact) + "Book a table" button
2. **Hero** — "Deliciousness jumping into the mouth" + subtitle + "Reservation" button + video link
3. **Exclusive items** — "Our Exclusive Items" heading + product cards
4. **About** — split layout: food image + "Our History" + heading + "Read More" button
5. **Intro video band** — full-width background image with play button
6. **Food menu** — "Delicious Food Menu" heading + 6 menu items with images and prices
7. **Chefs** — chef cards with photos and names
8. **Reservation** — "Book A Table" form (name, email, date, time, message, submit)
9. **Testimonials** — "Customers Feedback" carousel with author photos
10. **Blog** — "Latest From Blog" heading + 3 blog cards
11. **Footer** — About, Links, Contact, Newsletter + Component Dock link

## Design token reference (from css/style.css)

| Token              | Value                                   |
|--------------------|-----------------------------------------|
| Brand color        | #ff6426 (orange — primary buttons)      |
| Hover color        | #e04000 (darker orange)                 |
| Heading text       | #1d272f                                 |
| Body text          | #777777                                 |
| Font (headings)    | Lora (serif)                            |
| Font (accents)     | Cardo (serif)                           |
| Button styles      | .btn_1 (solid + arrow), .btn_2 (text + arrow), .btn_3 (outline + arrow) |
| Button radius      | 50px on some buttons                    |
| Hero bg            | food-themed background image            |
| Footer bg          | dark                                    |

## Fidelity notes

- Hero: left-aligned text with "Expensive but the best" subtitle, large
  headline, paragraph, "Reservation" button with arrow icon, and "Watch our
  story" video link with play icon. Background is a food-themed image.
- Exclusive items: carousel of product cards with food images and titles.
  Implement as a grid or simple carousel.
- About: split layout — food image on left, text on right with "Our History"
  subtitle, heading, subheading, paragraph, and "Read More" button.
- Food menu: grid of menu items with food images, dish names, and prices
  ($40.00 each). Use seeded picsum photos as food images.
- Chefs: card grid with chef photos and names.
- Reservation: form with name, email, select dropdowns (date, time, people),
  message textarea, and submit button.
- Testimonials: carousel with author photos, blockquotes, names + roles.
  Implement as cards or simple carousel.
- Blog: 3 cards with background images, date/category tags, title, and
  "Read More" link with arrow.
- Footer: dark bg, 4 columns (About, Links, Contact, Newsletter).
  Replace ColorLib attribution with ComponentDock link.
- Fonts: Lora (serif headings) gives a warm, elegant feel. Cardo for accents.
- Primary orange (#ff6426) is warm and food-appropriate — use it consistently.

## Components to reuse from packages/ui

- Button / ButtonLink (for CTA buttons)
- Card (for menu items, blog cards, chef cards)
- Badge (for date/category tags)
- cn (class merging utility)

## Images

All placeholder images: `https://picsum.photos/seed/mouthful-<n>/<w>/<h>`
