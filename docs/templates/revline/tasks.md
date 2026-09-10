# Tasks & Design Notes: RevLine (`automotive`)

## Overview

Recreation of ColorLib **AutoMotive** (`https://colorlib.com/wp/template/automotive/`) under the name **RevLine**.

## Section Order & Architecture

1. **Header/Navbar**: Top bar (phone, hours, map link, social icons) + main nav (logo, Home, Services, Shop, Pages dropdown, Blog, search/cart). Sticky or static header.
2. **Hero Section**: Full-width background image with dark overlay. Headline "Welcome To" (small) + "RevLine Garage" (large bold). Subtitle + primary CTA button "Our Services".
3. **Services Section**: "What We Do?" centered title. 4 service items in alternating text/image layout (2x2 grid with swapped column order): Engine Overhaul, Power Steering, Oil Change, Upgrades Car. Each has an icon, title, description.
4. **Choose Us Section**: Split layout — left half is a background image (`picsum.photos`), right half is text with checklist (4 items with indigo checkmarks) + "About Us" button.
5. **Products Section**: "Our Products" centered title. 4-column grid of product cards. Each card: product image with hover overlay (heart, eye, compare icons), product name, price, "Add To Cart" button.
6. **Testimonial Section**: White background carousel. Purple (`#5F67FF`) quotation mark icons. Quote text. Dot pagination.
7. **Counter/Statistics Section**: Full-width background image with dark tint. "About Our Statistics" title in white. 4 stat items: All Project, Project Completed, Customers Action, Awards Winner (each with icon, number 560+, label).
8. **Latest News Section**: "Latest News" centered title. 3-column blog card grid. Each card: featured image with author/date overlay, post title, excerpt, "Continue Reading" link.
9. **Footer**: 3 info cards at top (Booking, Contact, Location) on dark background. 4-column body: About (logo + text + Contact button), Quick Links, News items, Address. Copyright bar with social icons. Link to Component Dock.

## Design Fidelity Notes

- **Colors**: Primary indigo `#5F67FF` throughout (buttons, icons, accents). Dark headings `#111111` / `#353535`. Body text `#727171`. White cards/surfaces. Dark backgrounds on hero, counter, footer.
- **Typography**: Public Sans font (Google Fonts). Bold 700 for headings, 400 for body. Hero heading 60px, section titles 40px, body 15px.
- **Buttons**: Square primary buttons (`#5F67FF` bg, white text, no border-radius). Site buttons have `border-radius: 2px`.
- **Layout**: Bootstrap-inspired 12-column grid. Services use alternating order (`order-lg-*` classes). Choose Us uses offset layout. Products use 4-column responsive grid.
- **Background Images**: Hero, Choose Us image half, Counter, and Footer all use background images. Use `picsum.photos` with seed-based deterministic placeholders.
- **Icons**: Use `lucide-react` for service icons, stats icons, and social icons. Replace Font Awesome and Elegant Icons.
- **Hover States**: Product cards have overlay with action icons on hover. Carousel has dot navigation.
