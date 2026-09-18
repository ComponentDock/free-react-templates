# Prismo — Implementation Notes

**Source:** ColorLib Dizzi (https://preview.colorlib.com/theme/dizzi/)
**Category:** Business / Digital Agency
**Name:** Prismo (`apps/prismo`)

## Section Order (top → bottom)

1. **Navbar** — Logo left, nav links center, social icons right (desktop). Hamburger on mobile. Sticky on scroll.
2. **Hero / Banner** — Dark overlay background image, subtitle + headline + pill CTA button. Left-aligned text in a container.
3. **Client Logo Carousel** — Horizontal auto-scrolling row of partner logos. Use a simple CSS animation or inline carousel.
4. **About Us** — Two-column: left text (subtitle "About Us" in green, heading, paragraph, CTA button), right illustration.
5. **Services** — 3-column numbered cards (01/02/03). Each: number badge, heading, paragraph, bullet list of links. Light gray background.
6. **Projects / Portfolio** — Section title + filter tabs + 2-column grid. Cards have hover overlay. "more projects" link on desktop.
7. **Creative / Video** — Full-width fluid container. Left image, right text (heading + paragraph + quote + video CTA link).
8. **Testimonials** — Section title, carousel of testimonial cards. Each: avatar, name, role, quote text.
9. **CTA Banner** — Green background or image. Centered heading + pill CTA button.
10. **Footer** — 4 columns. Col 1: logo + nav + social icons. Col 2: Company links. Col 3: Resources links. Col 4: Contact info (2 offices). Must link componentdock.com.

## Fidelity Notes

- **Colors:** Brand green #00d089 is used everywhere — section subtitles, button backgrounds, link hovers. Button hover changes to #0042ff blue.
- **Typography:** Open Sans via Google Fonts. Headings black (#000) weight 700. Body text #848484 weight 300 at 14px. Section subtitle text #00d089 uppercase at 16px.
- **Buttons:** Pill shape (border-radius 50px). Desktop padding 27px 70px. Mobile padding 10px 30px. Green bg, white text. Hover turns blue #0042ff.
- **Layout:** Bootstrap-like 12-column grid (use Tailwind grid/flex). Container max-width 1170px. Section padding 140px desktop / 70px mobile.
- **Hero:** Background image with dark overlay. Text left-aligned offset.
- **Services:** Cards are simple numbered blocks, not cards with shadows. Just numbered heading + list.
- **Projects:** Filter tabs are simple list items with active state. Hover overlay on project images (dark semi-transparent bg with text).
- **Creative section:** Uses `container-fluid` (full-width). Image left, text right.
- **Testimonials:** Carousel with avatar images and quote text. Original uses owl carousel — implement as simple React carousel or CSS scroll snap.
- **Footer:** Dark background. 4 equal columns with headings and link lists. Contact info shows two office locations.
- **Icons:** Original uses themify-icons (ti-facebook, ti-twitter-alt, etc.). Replace with lucide-react equivalents.
- **Images:** All placeholder images use picsum.photos/seed/prismo-{n}/width/height.

## Component Plan

| Component      | File                   | Notes                                      |
| -------------- | ---------------------- | ------------------------------------------ |
| App            | src/App.tsx             | Composes all sections                      |
| Navbar         | src/components/Navbar.tsx | Sticky, hamburger, social icons           |
| Hero           | src/components/Hero.tsx | Background image overlay, headline + CTA   |
| ClientLogos    | src/components/ClientLogos.tsx | Auto-scrolling logo row              |
| About          | src/components/About.tsx | Two-column text + image                   |
| Services       | src/components/Services.tsx | 3 numbered service cards               |
| Projects       | src/components/Projects.tsx | Filter tabs + project grid + overlay   |
| Creative       | src/components/Creative.tsx | Full-width image + text + video CTA    |
| Testimonials   | src/components/Testimonials.tsx | Carousel of testimonials            |
| CTABanner      | src/components/CTABanner.tsx | Green bg CTA section                  |
| Footer         | src/components/Footer.tsx | 4-column dark footer                    |
