# Orator — Implementation Notes

## Source mapping

| Field | Value |
|---|---|
| ColorLib source | Manup |
| ColorLib URL | https://colorlib.com/wp/template/manup/ |
| Preview URL | https://preview.colorlib.com/theme/manup/ |
| Screenshot | https://colorlib.com/wp/wp-content/uploads/sites/2/manup-free-template.jpg |
| New name | `orator` |
| Package | `@free-react-templates/orator` |

## Section order (match 1:1)

1. **Navbar** — sticky, logo left, nav links center-right, "Ticket" pill CTA on far right. Links: Home, About, Speakers (dropdown), Schedule, Blog, Contact. Mobile: hamburger menu.
2. **Hero** — full-width background image (dark overlay), left column: date text (uppercase accent), headline (white, 60px), "Buy Ticket" pill button. Right column: hero illustration.
3. **Counter** — gradient background bar. Left: "Conference Date" label + "Count Every Second Until the Event". Right: 4 countdown boxes (Days/Hours/Minutes/Seconds) with semi-transparent border.
4. **About** — two-column: left = shadowed image, right = "About Conference" heading, paragraph, 4-item checklist (accent check icons), "Discover Now" underline link.
5. **Speakers** — "Who's Speaking" centered heading, 5×2 grid of speaker cards. Each card: background image, hover shows gradient social bar (top) + name/role text (bottom-left slide-in).
6. **Schedule** — "Our Schedule" centered heading, 5 tab buttons (Day 1–5 with date), each tab shows 4 session rows: photo circle, session title + speaker name/email, time + location.
7. **Pricing** — dark background image. 3 pricing cards: tier name, large price (Poppins font, gradient), feature list, "Get Ticket" button. Middle card = "top rated" with ribbon badge.
8. **Blog** — light gray bg. "Latest News" heading. Asymmetric grid: 1 large card (left, full height) + 2 smaller cards (right, stacked). Each: bg image, category tag, title, date.
9. **Newsletter** — background image with overlay. "Subscribe Newsletter" heading + description left, email input (pill) + "Subscribe" button (gradient pill) right.
10. **Contact** — two-column: left = "Location" heading, address/phone/email details. Right = Google Maps iframe embed with shadow.
11. **Footer** — dark bg (#171822). Partner logo carousel strip, nav links, copyright text ("Component Dock"), social icon circles.

## Design tokens for Tailwind @theme

```
@theme {
  --color-brand-start: #ee8425;
  --color-brand-end: #f9488b;
  --color-brand-gradient: linear-gradient(120deg, #ee8425 0%, #f9488b 100%);
  --color-accent: #f44949;
  --color-heading: #171822;
  --color-body: #6a6b7c;
  --color-muted: #a0a1b5;
  --color-footer-bg: #171822;
  --color-blog-bg: #f4f6f8;
}
```

## Component plan

- `src/App.tsx` — section composer (Navbar → Hero → Counter → About → Speakers → Schedule → Pricing → Blog → Newsletter → Contact → Footer)
- `src/components/Navbar.tsx` — sticky nav with mobile menu
- `src/components/Hero.tsx` — hero with background image, CTA
- `src/components/Counter.tsx` — countdown timer (use `useState` + `useEffect` with `setInterval`)
- `src/components/About.tsx` — two-column about with checklist
- `src/components/Speakers.tsx` — speaker grid with hover effects
- `src/components/Schedule.tsx` — tabbed schedule (state for active tab)
- `src/components/Pricing.tsx` — 3-column pricing cards
- `src/components/Blog.tsx` — asymmetric blog card grid
- `src/components/Newsletter.tsx` — newsletter signup bar
- `src/components/Contact.tsx` — location details + map placeholder
- `src/components/Footer.tsx` — dark footer with links and socials

## Placeholder images

- Hero bg: `https://picsum.photos/seed/orator-hero/1920/1080`
- About: `https://picsum.photos/seed/orator-about/600/400`
- Speakers: `https://picsum.photos/seed/orator-speaker-<1-10>/400/420`
- Schedule: `https://picsum.photos/seed/orator-sched-<1-4>/120/120` (circular)
- Pricing bg: `https://picsum.photos/seed/orator-pricing/1920/800`
- Blog: `https://picsum.photos/seed/orator-blog-<1-3>/600/400`
- Newsletter bg: `https://picsum.photos/seed/orator-news/1920/200`
- Partner logos: `https://picsum.photos/seed/orator-logo-<1-6>/120/41`

## Fidelity notes

- The original uses Bootstrap grid (col-lg-*) — replicate with Tailwind grid/flex
- The original uses `data-setbg` JS for background images — use inline `style` or Tailwind `bg-[url(...)]` with picsum
- Countdown timer in original uses jQuery countdown plugin — implement with React hooks
- Tab switching in schedule uses Bootstrap tabs — implement with React state
- Carousel in footer partner logos uses Owl Carousel — implement with CSS scroll-snap or simple flex overflow
- Newsletter form has absolute-positioned button inside input wrapper — use relative/absolute Tailwind
- Speaker hover effect uses CSS transitions (top/left) — replicate with Tailwind group-hover
- Pricing "top rated" ribbon uses CSS clip-path — replicate with Tailwind clip-path or pseudo-elements
