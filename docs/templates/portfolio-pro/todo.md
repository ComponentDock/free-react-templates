# PortfolioPro — Implementation TODO

Source: ColorLib Beckham (https://colorlib.com/wp/template/beckham/)
Preview: https://preview.colorlib.com/theme/beckham/
New name: portfolio-pro

## Section structure order

1. Navbar (fixed top, avatar logo, hamburger, sidebar nav with numbered items)
2. Hero Slider (full-height carousel, background images, blue overlay, centered text, scroll indicator)
3. About Section (split: portrait left, "About" faded text + bio + social + contact right)
4. Services Section (heading + 3-column icon cards)
5. Portfolio Section (heading + 6 alternating image/text project items)
6. Counter Section (dark bg, 3 animated counters)
7. Footer (dark warm brown, social icons, contact email, copyright with Component Dock link)

## Component map

| Component     | File                           | Notes                                    |
| ------------- | ------------------------------ | ---------------------------------------- |
| Navbar        | components/Navbar.tsx          | Fixed top, avatar image, hamburger toggle |
| HeroSlider    | components/HeroSlider.tsx      | Full-height slides with overlay text     |
| About         | components/About.tsx           | Split layout, faded heading, social icons |
| Services      | components/Services.tsx        | 3-column grid, icon + service list       |
| Portfolio     | components/Portfolio.tsx       | Alternating layout, 6 project items      |
| Counter       | components/Counter.tsx         | Animated numbers, dark background        |
| Footer        | components/Footer.tsx          | Dark brown, social + contact + copyright |

## Design notes

- **Font**: Montserrat (Google Fonts) — weights 300, 400, 700
- **Primary**: #79efb4 (mint green) — links, buttons, accents
- **Accent**: #2f89fc (blue) — slider overlay, service icons, portfolio hover icon
- **Footer**: #3c312e (warm dark brown) — `.ftco-bg-dark`
- **Hero**: full-viewport height with background images, centered white text, uppercase with letter-spacing
- **About**: left side = portrait image (background-image), right side = faded large "About" text behind content, social icons in circular style
- **Services**: 3-column cards, each with an icon in blue and list of service titles
- **Portfolio**: alternating left-right layout, 6 items. Image section has circular blue icon overlay on hover. Text has category label (uppercase), bold title, description, "View Project" link
- **Counter**: 3 stats displayed in rows (Clients, Projects, Coffee), animated counting from 0
- **Footer**: centered layout, social icons, "Contact Us" heading, email, copyright line
- **Mobile**: hamburger nav toggles sidebar; services stack vertically; portfolio items stack vertically

## Fidelity notes from replication research

- Live preview fetched successfully at https://preview.colorlib.com/theme/beckham/
- CSS file at css/style.css extracted — all tokens documented in spec.md
- Screenshot from TEMPLATES.md confirms: dark hero with full-screen image, green accent color (#79efb4), warm brown footer
- Portfolio items alternate image side (odd: image left, even: image right)
- Counter section uses `.ftco-counter` class with animated number counting
- Social icons use flaticon/icomoon icon font — replace with lucide-react
