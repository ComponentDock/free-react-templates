# Lifegift — Implementation Notes

## Source mapping

- **ColorLib source:** Charilife — https://colorlib.com/wp/template/charilife/
- **Preview URL:** https://preview.colorlib.com/theme/charilife/
- **New name:** Lifegift
- **App folder:** `apps/lifegift`
- **Package:** `@free-react-templates/lifegift`

## Design tokens (from live preview CSS)

- Brand primary: `#ff573d` (coral-red, CTA buttons, links)
- Dark bg: `#15181d` (navbar, hero, footer, event cards)
- Body bg: `#ffffff` / `#f9f9ff`
- Section alt bg: `#f0e9ff` (lavender)
- Text primary: `#15181d`
- Text body: `#666` / `#999999`
- Accent teal: `#4cd3e3`
- Accent blue: `#38a4ff`
- Accent yellow: `#f4e700`
- Surface light: `#f1f1f1` / `#ececec`
- Heading font: `"Lora", serif`
- Body font: `"Roboto", sans-serif`
- Button radius: 3px default, 20px for `.circle`

## Section order (1:1 fidelity)

1. **Navbar** — sticky, logo left, nav links right, hamburger on mobile
2. **Hero/Banner** — dark overlay on background image, headline "Save the African children", subheading, CTA button
3. **About** — "We Are A Non-profit Organization", description text, video popup thumbnail (right side)
4. **Features** — "How Could You Help", three items: Give Donation, Give Inspiration, Become Volunteer (icons + text)
5. **Popular Causes** — three cause cards with image, progress bar (raised/goal), title, description
6. **Volunteer CTA** — dark overlay section, "Volunteer Needed At Your Area", CTA button
7. **Upcoming Events** — three/four event cards with title, description, countdown timer (days/hours/minutes)
8. **Blog** — "Latest From Our Blog", three blog cards with image, date badge, title, excerpt, "Read More"
9. **Instagram** — "Follow Us", image grid with hover overlay icons
10. **Newsletter** — "Subscribe Now And Receive The Weekly Newsletter", email input + subscribe button
11. **Footer** — three columns (About Us, Quick Links, Contact Us), social icons, Component Dock link

## Fidelity notes

- The hero uses a dark overlay (`rgba(0,0,0,0.5)`) over a background image — use picsum.photos placeholder
- About section has a video popup (magnific-popup pattern) — use a play button icon + modal
- Popular cause progress bars: red `#ff573d` track, green `#3CC78F` fill (or keep brand red)
- Event countdowns: use `useState` + `useEffect` with `setInterval` for live countdown
- Blog cards: bottom-positioned date badge (absolute position, overlapping image)
- Instagram section: 5-6 images in a flex row with hover overlay
- Footer: dark `#15181d` background, white text, three-column grid
- All sections use `section-gap-top` or `section-gap` for vertical spacing

## Component outline

- `src/App.tsx` — compose all sections
- `src/components/Navbar.tsx` — sticky nav with mobile hamburger
- `src/components/Hero.tsx` — full-width banner with overlay
- `src/components/About.tsx` — about info + video popup
- `src/components/Features.tsx` — three feature cards
- `src/components/PopularCauses.tsx` — cause cards with progress bars
- `src/components/VolunteerCta.tsx` — dark CTA section
- `src/components/UpcomingEvents.tsx` — event cards with countdown
- `src/components/Blog.tsx` — blog post cards
- `src/components/Instagram.tsx` — image grid
- `src/components/Newsletter.tsx` — email subscription form
- `src/components/Footer.tsx` — three-column footer

## Priority / risk

- Low complexity: standard charity template, no unusual interactions
- Countdown timer needs care (cleanup on unmount, timezone handling)
- Video popup can use a simple modal instead of magnific-popup library
- Progress bars are straightforward CSS + Tailwind
