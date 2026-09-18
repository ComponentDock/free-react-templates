# Turfcraft — Implementation TODO

**Source:** ColorLib "Lawncare"  
**Preview:** https://preview.colorlib.com/theme/lawncare/  
**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/lawncare-free-template.jpg  

## Design notes

- Green brand palette (#4e9525) dominant in navbar, icons, blog badges
- Golden yellow (#fbd341) hero subheading accent
- Blue (#007bff) CTA buttons, newsletter/CTA banners
- Black (#000) footer
- Two fonts: Lato (body) + Poppins (headings) — load via Google Fonts link
- Bootstrap 4 grid-based layout; convert to Tailwind equivalents
- Owl-carousel for seasonal tips and testimonials — use CSS snap or custom carousel
- Flaticon/ionicons icons → replace with lucide-react
- No assets from ColorLib: use picsum.photos + lucide-react

## Section order (from original)

1. **TopBar** — logo left, search form right, social icons far right
2. **Navbar** — sticky, green bg, 6 nav links (Home, About Us, Services, Gallery, Blog, Contact)
3. **Hero** — full-height bg image, overlay, golden subheading, white headline, blue CTA
4. **Services** — left: heading + description + button; right: 3-column icon cards
5. **About** — video placeholder left, welcome text + service list right, bg-light
6. **SeasonalTips** — horizontal carousel of 4 season cards (bg image + title + description)
7. **ContactCTA** — blue banner, heading + phone number
8. **Testimonials** — carousel of 3 testimonial cards (avatar, quote, name, position)
9. **Blog** — 3-column cards (image, date badge, title, desc, read more button), bg-light
10. **Newsletter** — blue banner, heading + email input + subscribe button
11. **Footer** — dark, 4 columns (brand, services, contact, hours), copyright bar with Component Dock link

## Component breakdown

| Section        | Component file         | Notes                                          |
| -------------- | ---------------------- | ---------------------------------------------- |
| TopBar         | `TopBar.tsx`           | Logo, search form, social icons (lucide-react) |
| Navbar         | `Navbar.tsx`           | Sticky, responsive, green bg                   |
| Hero           | `Hero.tsx`             | Full-height, overlay, headline + CTA           |
| Services       | `Services.tsx`         | Left heading + right 3-column icon grid        |
| About          | `About.tsx`            | Video placeholder + service list               |
| SeasonalTips   | `SeasonalTips.tsx`     | Horizontal carousel (CSS snap recommended)     |
| ContactCTA     | `ContactCTA.tsx`       | Blue bg banner with heading + phone            |
| Testimonials   | `Testimonials.tsx`     | Carousel of testimonial cards                  |
| Blog           | `Blog.tsx`             | 3-column cards with date badges                |
| Newsletter     | `Newsletter.tsx`       | Blue bg banner with email form                 |
| Footer         | `Footer.tsx`           | Dark, 4-column, Component Dock link            |

## Key fidelity notes

- Hero subheading text color: `#fbd341` (golden yellow), not white
- Service icons: use lucide-react equivalents (Fence → Fence, Scissors → Scissors, Leaf → Leaf or Sprout)
- Blog date badge: green triangle pointing down (CSS triangle using borders)
- Service list hover: row background turns green, text turns white, arrow icon turns yellow
- Services arrow button: absolute positioned at bottom, opacity 0 → 1 on hover, slides up
- Footer copyright: replace "Colorlib" with "Component Dock" link
- All placeholder images: picsum.photos/seed/turfcraft-{section}/{w}/{h}
