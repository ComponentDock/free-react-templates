# Consultly — Implementation Notes

## Source

- ColorLib Consula: https://colorlib.com/wp/template/consula/
- Preview: https://preview.colorlib.com/theme/consula/

## Section order (implement top-to-bottom)

1. **TopBar** — Thin strip with phone and email above navbar
2. **Navbar** — Fixed top, logo "Consultly", 7 nav links, mobile hamburger
3. **Hero** — Full-screen bg image + overlay, centered headline, rounded CTA
4. **About** — Split: "50 years" stat + image left, headline + text + CTA right
5. **HowItWorks** — 3-step horizontal: Innovate, Create, Scale with bullets
6. **Team** — 3-member cards: avatar, name, role, social, description
7. **Services** — 6-card grid on light bg with icomoon icons
8. **Testimonials** — Carousel with quotes, names, avatars
9. **AboutSecond** — Split: image left, text + stats right
10. **Blog** — 3 post cards with image, meta, title, excerpt, CTA
11. **Contact** — Form (5 fields) + address/phone/email info
12. **Footer** — Dark bg, 3 columns (About/Links/Social+Newsletter), copyright

## Fidelity notes

- Top bar: thin dark strip above navbar with phone/email
- Primary CTA: Bootstrap blue (#007bff), border-radius 30px (rounded-pill)
- Service icons: icomoon icon font (autorenew, backspace, av_timer, beenhere, business_center, cloud_done)
- About section: "50 years of experience" large text stat callout
- How It Works: horizontal 3-step with numbered steps and bullet lists
- Team cards: circular avatars, social media icon links, description
- Blog cards: image top, date/author/category tags, title, excerpt, CTA link
- Contact: left form + right info cards (address, phone, email)
- Footer: #25262a dark bg, newsletter subscribe input with "Send" button

## Component mapping

| Section      | Component file     | Key props                                               |
| ------------ | ------------------ | ------------------------------------------------------- |
| TopBar       | `TopBar.tsx`       | phone, email                                            |
| Navbar       | `Navbar.tsx`       | logo, links[]                                           |
| Hero         | `Hero.tsx`         | headline, subtitle, ctaText                             |
| About        | `About.tsx`        | stat, statLabel, headline, description, ctaText         |
| HowItWorks   | `HowItWorks.tsx`   | steps[] (number, title, desc, bullets[])                |
| Team         | `Team.tsx`         | members[] (name, role, avatar, description, social[])   |
| Services     | `Services.tsx`     | services[] (icon, title, description)                   |
| Testimonials | `Testimonials.tsx` | testimonials[] (quote, author, avatar)                  |
| AboutSecond  | `AboutSecond.tsx`  | image, headline, description                            |
| Blog         | `Blog.tsx`         | posts[] (image, date, author, category, title, excerpt) |
| Contact      | `Contact.tsx`      | address, phone, email                                   |
| Footer       | `Footer.tsx`       | aboutText, links[], copyright                           |

## Placeholder images

- Hero bg: `https://picsum.photos/seed/consultly-hero/1920/1080`
- About image: `https://picsum.photos/seed/consultly-about/600/400`
- Team avatars: `https://picsum.photos/seed/consultly-team-{n}/200/200`
- Service images: N/A (uses icomoon icons)
- Blog images: `https://picsum.photos/seed/consultly-blog-{n}/400/300`
- Testimonial avatars: `https://picsum.photos/seed/consultly-test-{n}/100/100`
- About second image: `https://picsum.photos/seed/consultly-about2/600/600`
