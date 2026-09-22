# CarePath — Design Notes & Tasks

Source: ColorLib Medcare — https://preview.colorlib.com/theme/medcare/

## Section Order (fidelity to original)

1. TopBar — email, location, social icons (themify-icons style)
2. Navbar — logo (text-based), 7 nav items with Blog dropdown
3. HeroBanner — full-width blue (#0051d2) background, heading + 2 CTAs
4. FeatureStrip — 3 cards (Primary Care, Emergency Cases, Online Appointment) with icons
5. Services — heading + description + 3 service cards (Neurology, Dental, Plastic Surgery)
6. About — right-aligned content on desktop, heading + paragraph + "learn more" link
7. Team — heading + 3 doctor cards (photo, name, specialty, phone, social icons)
8. Appointment — FAQ accordion (5 items) left + appointment form (Name, Email, Message) right
9. Blog — 3 blog cards (image, tags, title, comments, likes)
10. Brands — logo carousel on #f7f7f7 background
11. Footer — 4 link columns + newsletter + social icons + copyright + Component Dock link

## Design Token Notes

- Brand palette: #0051d2 blue (primary), #020a21 near-black (headings), #797979 gray (body), #f7f7f7 off-white (alt backgrounds)
- Heading font: Playfair Display (serif, Google Font)
- Body font: Open Sans (sans-serif, Google Font)
- Buttons: square corners (border-radius: 0), main_btn = solid blue, main_btn_light = transparent white
- Cards: white background, subtle shadow/border on hover
- Forms: standard Bootstrap-style inputs with blue focus border

## Component Breakdown

| Component      | Notes                                                      |
| -------------- | ---------------------------------------------------------- |
| TopBar         | Flex row: left = email + location, right = social icons    |
| Navbar         | Bootstrap-style navbar, logo text "CarePath", dropdown     |
| HeroBanner     | Background image OR solid blue, centered heading + 2 CTAs |
| FeatureStrip   | 3-column grid, icon + title + subtitle per card            |
| Services       | Heading left + description right, 3 service cards below    |
| About          | Right-aligned on desktop, image left + content right       |
| Team           | 3 doctor cards: image, name, specialty, phone, social      |
| Appointment    | 2-column: FAQ accordion left, form right                   |
| Blog           | 3 blog cards in grid: image, tags, title, meta             |
| Brands         | Owl-carousel style logo slider on light bg                 |
| Footer         | 4 link columns + newsletter + social + copyright           |

## Placeholder Images

- Hero: `https://picsum.photos/seed/carepath-hero/1920/1080`
- About: `https://picsum.photos/seed/carepath-about/800/600`
- Team: `https://picsum.photos/seed/carepath-team-{1,2,3}/400/400`
- Blog: `https://picsum.photos/seed/carepath-blog-{1,2,3}/400/300`
- Services: Use lucide-react icons (Brain, Stethoscope, Heart)

## Shared UI Reuse

- `Button` / `ButtonLink` from packages/ui for CTAs
- `cn()` for class merging
- Lucide-react icons for feature/service icons (Layers, HeartPulse, Headphones, Brain, SmilePlus, UserRound)
