# Brightbite — Prep Notes

Source: ColorLib Dentamax (https://preview.colorlib.com/theme/dentamax/)
New name: Brightbite
Spec: openspec/specs/template-brightbite/spec.md

## Section order (from preview DOM, top → bottom)

1. Top bar — phone + email + social icons (absolute, transparent bg)
2. Navbar — "Brightbite" brand (Denta→dark navy, bite→teal), 7 nav links (Home, About, Services, Dentist, Blog, Gallery, Contact), white bg rounded on desktop
3. Hero — owl-carousel, 2 slides, dark overlay, bg images, CTA buttons (primary + white outline)
4. Services strip — 4 cards (Emergency, Qualified Dentist, General Treatment, Online Appointment), icon circles overlap hero (-80px margin-top), white bg
5. Appointment + features — split: left has 4 feature items (Easy Booking, Experience, Flexible Schedule, Best Price Guarantee), right has appointment form. Gradient bg (peach→tan→teal 135deg)
6. About — split: image left (with overlay), text right ("Welcome to Brightbite" + "We Are Brightbite A Dental Clinic"), "Get in touch with us" button
7. Dentist team — 4 staff cards in grid, each with photo, name, role, social links
8. Why choose us — heading + feature/benefit items
9. Gallery — image grid with parallax bg
10. Blog — 3 blog cards (image, date/author/comments, title, excerpt, "Read more")
11. Newsletter — bg image + overlay, heading + email subscribe form
12. Footer — 4 columns (About+social, Explore, Info, Have a Questions?), social icons
13. Copyright bar — black bg, Colorlib credit (replaced with Component Dock)

## Design fidelity notes

- **Navbar**: Transparent overlay on hero (desktop), white bg on scroll. Logo uses Arizonia font for the brand display. Nav links dark navy, hover → teal.
- **Hero**: Uses owl-carousel for slides. Each slide has a dark semi-transparent overlay, bg image, and positioned text. Buttons: primary blue (#007bff) + white outline.
- **Services strip**: Cards have 90px icon circles with `#65d8ea` color, positioned to overlap the hero section with negative top margin. White bg cards with padding.
- **Appointment form**: The gradient is critical — `linear-gradient(135deg, rgba(255,207,148,0.35) 0%, rgba(227,209,163,0.35) 18%, #65d8ea 100%)`. Form inputs are borderless with dark navy text.
- **Staff cards**: 4-column grid, each card has a photo (250px height), hover effect slides image up, text panel with name (dark navy) and role (teal, uppercase, letter-spacing 2px).
- **Footer**: 4 columns, heading color `#0f4883`, link text `#6c8faf`, social icons use `#65d8ea` bg circles.
- **Newsletter**: Background image with dark overlay, email input inline with subscribe button.
- **Copyright**: Black bar, white text, replace Colorlib attribution with Component Dock link.

## Component mapping (suggested)

| Section        | Component            | Shared UI reuse                        |
| -------------- | -------------------- | -------------------------------------- |
| TopBar         | TopBar.tsx           | —                                      |
| Navbar         | Navbar.tsx           | — (sticky behavior needed)             |
| Hero           | Hero.tsx             | Button, ButtonLink from packages/ui   |
| Services       | Services.tsx         | Card pattern                           |
| Appointment    | Appointment.tsx      | Form inputs (custom)                   |
| About          | About.tsx            | —                                      |
| Team           | Team.tsx             | Card grid pattern                      |
| WhyChooseUs    | WhyChooseUs.tsx      | —                                      |
| Gallery        | Gallery.tsx          | Image grid                             |
| Blog           | Blog.tsx             | Card pattern                           |
| Newsletter     | Newsletter.tsx       | —                                      |
| Footer         | Footer.tsx           | —                                      |

## Images (placeholder seeds)

- hero-1: `https://picsum.photos/seed/brightbite-hero1/1920/1080`
- hero-2: `https://picsum.photos/seed/brightbite-hero2/1920/1080`
- about: `https://picsum.photos/seed/brightbite-about/800/600`
- dentist-1..4: `https://picsum.photos/seed/brightbite-doc1/400/500` (etc.)
- gallery-1..N: `https://picsum.photos/seed/brightbite-gal1/600/400` (etc.)
- blog-1..3: `https://picsum.photos/seed/brightbite-blog1/600/400` (etc.)
- newsletter-bg: `https://picsum.photos/seed/brightbite-newsletter/1920/600`
