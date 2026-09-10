# Tasks & Design Notes: Garagely (`automotive`)

## Overview

Recreation of ColorLib **AutoMotive** (`https://colorlib.com/wp/template/automotive/`) under the name **Garagely**.

## Section Order & Architecture

1. **TopUtilityBar**: Dark bar with phone number, business hours, map link, social icons.
2. **Navbar**: White bar with logo, nav links (Home, Services, Shop, Pages dropdown, Blog), search/cart icons. Active link gets indigo underline.
3. **Hero**: Full-width background image (mechanic/engine), dark overlay, "Welcome To Auto-Motive Garage" headline, subtitle, "Our Services" primary CTA button.
4. **Services ("What We Do?")**: 4 service items, each a text+image pair in alternating layout. Icons: Engine Overhaul, Power Steering, Oil change, Upgrades Car.
5. **ChooseUs**: Split layout — left image (48%), right text panel with box-shadow. "20 Years Experience" headline, 4 checkmark bullet points, "About Us" button.
6. **Products ("Our Products")**: 4-column product card grid. Each: image, hover icons (heart, eye, exchange), product name, price ($800.00), "+Add To Cart" link.
7. **Testimonial**: Carousel/slider with indigo quotation icons and italic quotes. Owl carousel style dots.
8. **Counter ("About Our Statistics")**: Background image, 4 stat counters with icons (560+ each: All Project, Project Completed, Customers Action, Awards Winner).
9. **LatestNews ("Latest News")**: 3-column blog card grid. Each: background image with author/date overlay, heading, excerpt, "Continue Reading" link.
10. **Footer**: Background image, 3 CTA items (Appointment, Phone, Location), 4-column layout (About, Quick Links, News, Address), copyright bar with social icons. Footer MUST link `https://www.componentdock.com/`.

## Design Fidelity Notes

- **Colors**: Brand indigo `#5F67FF`, dark utility bar `#25282C`, text dark `#353535`, body `#111111`/`#727171`. Sections on white bg with background-image hero/counter/footer for dark overlays.
- **Typography**: Public Sans (Google Fonts), weights 400–900. Headings bold, body regular. Hero h2 at 60px bold, section h2 at 40px bold.
- **Buttons**: Primary button is square (no border-radius), `#5F67FF` bg, white text, 15px bold. The site-btn variant has `border-radius: 2px`.
- **Layout**: Bootstrap 4-style grid, `container` max-width. Choose Us section uses absolute positioning (image left 48%, text panel offset right).
- **Responsive**: Offcanvas mobile menu with hamburger, stacked layout on small screens, column stacking at breakpoints.
- **Images**: All via `picsum.photos/seed/<template>-<n>/<w>/<h>`. No asset copying from ColorLib.
- **No ColorLib references**: All provenance in spec and TEMPLATES.md only.
