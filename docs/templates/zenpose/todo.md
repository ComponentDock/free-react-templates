# Zenpose — Implementation Notes

Source: ColorLib Yogafun (https://colorlib.com/wp/template/yogafun/)
Preview: https://preview.colorlib.com/theme/yogafun/
New name: Zenpose (apps/zenpose, @free-react-templates/zenpose)

## Section order (top to bottom)

1. Navbar — dark bg, brand "Zenpose", links: Home, About, Classes (dropdown),
   Blog, Contact. Mobile hamburger.
2. Hero — full-width bg image, h1 "Lose Yourself In Ambience & Atmosphere",
   circular white play button (60px, border-radius 50%), "Watch Video" label.
3. Features — 3-col: left = 2 cards (Chakra, Lotus), center = image,
   right = 2 cards (Chakra 2, Yoga). Cards: bg #f8f9fa, icon (lucide),
   h3, paragraph.
4. About 1 — 2-col: text left (h2 "Do Yoga Today For Better Tomorrow",
   paragraph, readmore link), image right with frame border.
5. About 2 — bg-light, 2-col reversed: image left, text right
   (h2 "Perfect Yoga Style", paragraph, readmore link).
6. Yoga Classes — centered h2 + subtitle. 2x3 grid of thumbnail cards
   (Yoga Barre, Yoga Core, Yoga For Health, Yoga For Beginners,
   Yoga for All, Yoga Restore). Each: bg image, overlay icon + h3,
   hover reveals full image.
7. Testimonials — bg-light, centered h2, carousel of cards: avatar,
   name (h2), role, blockquote. Auto-loop.
8. CTA Band — bg-primary (#71774b), 3-col: icon + h3 + description,
   all white text. Columns: Chat With Us, Happy Customers, Fast Support.
9. Blog — centered h2 + subtitle. 2-col: thumbnail + date + h3 title
   + excerpt + readmore link.
10. Subscribe — bg-light, centered h2, subtitle, email input + primary
    button.
11. Footer — 4-col: About (text + social icons: Twitter, Facebook,
    LinkedIn, Instagram), Contact Info (address, phone, email),
    Quick Links (About, Terms, Disclaimers, Contact). Copyright bar
    with "Made with Component Dock".

## Design tokens

| Token          | Value     | Usage                                |
|----------------|-----------|--------------------------------------|
| Brand primary  | #71774b   | Buttons, links, accents, CTA band    |
| Brand hover    | #5b603c   | Button hover, link hover             |
| Brand active   | #535837   | Button active/pressed                |
| Dark           | #343a40   | Navbar background                    |
| Body text      | #212529   | Paragraphs, body copy                |
| Heading        | #000      | .heading class, h2/h3               |
| Light bg       | #f8f9fa   | .bg-light sections, feature cards    |
| White          | #fff      | Hero text, CTA text, play button bg  |
| Font body      | Oxygen    | Body text (400, 700)                 |
| Font heading   | Montserrat| Headings (weight 900)                |
| Button radius  | 0.2rem    | Small rounded corners                |
| Play button    | 60px circle| White bg, border-radius 50%         |

## Component mapping

- Navbar → src/components/Navbar.tsx
- Hero → src/components/Hero.tsx
- Features → src/components/Features.tsx
- About1 → src/components/AboutSection.tsx (variant: imageRight)
- About2 → src/components/AboutSection.tsx (variant: imageLeft, bgLight)
- YogaClasses → src/components/YogaClasses.tsx
- Testimonials → src/components/Testimonials.tsx
- CtaBand → src/components/CtaBand.tsx
- Blog → src/components/Blog.tsx
- Subscribe → src/components/Subscribe.tsx
- Footer → src/components/Footer.tsx

## Fidelity notes

- Hero uses a background image (not an img tag) with centered overlay text.
- Play button is a white circle with a play icon inside — use lucide-react Play.
- Feature cards use flaticon icons (chakra, lotus, yoga) — replace with
  lucide-react equivalents (Circle, Flower2, Heart, etc.).
- Class thumbnails have an overlay effect: icon + title on top, image behind,
  hover reveals full image. Implement with relative positioning + opacity transition.
- Testimonials carousel — use a simple CSS-based auto-scroll or a lightweight
  React carousel (no jQuery dependency).
- Readmore links are uppercase with an arrow icon that slides right on hover.
- Footer social icons: use lucide-react (Twitter, Facebook, Linkedin, Instagram).
- All placeholder images: picsum.photos/seed/zenpose-<n>/<w>/<h>.
- No ColorLib references anywhere in app code.
- Footer MUST include "Made with Component Dock" link.
