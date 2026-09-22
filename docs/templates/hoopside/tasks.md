# Hoopside (ColorLib Thebasketball) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-hoopside`. Recreation name: **Hoopside** (NEW name —
> the ColorLib source keeps its name "Thebasketball").

## Source mapping

- **ColorLib item:** "Thebasketball" (TEMPLATES.md line 1882; section "## Gym (20)" near line 1875).
- **Source URL:** https://colorlib.com/wp/template/thebasketball/
- **Preview URL:** https://preview.colorlib.com/theme/thebasketball/ (REACHABLE, 88KB HTML, 8 CSS files)
- **Preview CSS:** `css/style.css` (175KB, massive) + Bootstrap + Font Awesome + Elegant Icons + OwlCarousel2 + Magnific Popup + Nice Select + SlickNav
- **Fonts:** 'Oswald' (headings/labels) + 'Roboto' (body) — Google Fonts
- **Stack:** Bootstrap 4 grid + custom CSS + OwlCarousel2 for sliders

## Reference research (done — do not redo)

### Screenshot analysis

Dark-themed basketball sports landing page. Hero section has a full-width basketball court background image with dark overlay, large white heading about national leagues, a countdown timer with gold numbers, and a red "Book Tickets" button. Below, latest results show a match scoreboard. Team section has player cards on dark backgrounds with jersey numbers. Statistics section has tabbed navigation. Latest videos section has image thumbnails. Product/shop section shows shoes. Call-to-action on parallax background. Footer is dark with contact info and newsletter.

### Section order (from DOM)

1. Header — top bar (emails, cart) + logo + nav + search
2. Hero — background image, countdown, "Book Tickets" CTA
3. Latest Results — section title, match results table, featured match (two teams)
4. Team — heading, 4 player cards (image, name, position, jersey number)
5. Player Statistics — tabs (Goalkeepers/Defenders/Midfielders/Attackers), player slider, league points table
6. Latest Videos — owl-carousel of video thumbnails with titles
7. Product/Shop — category filters, product slider (shoes with prices)
8. Call-to-action — parallax bg, "Join our fan club" heading, "Register" button
9. Footer — contact info, latest news, newsletter subscription, copyright

### Design tokens (from style.css, verified via curl)

| Token | Value | Use |
|-------|-------|-----|
| Font headings | 'Oswald', sans-serif | Section titles, labels, countdown |
| Font body | 'Roboto', sans-serif | Body text, descriptions |
| Primary brand | #e02529 | CTA buttons, active states, highlights |
| Secondary | #2f76c7 | Blue accents, secondary buttons |
| Gold accent | #ECBA0B | Highlights, star ratings |
| Dark bg deep | #100303 | Hero overlay, darkest sections |
| Dark bg | #111111 | General dark sections |
| Dark bg warm | #211E1E, #2F2C2C, #332D2E | Section variations |
| Body text | #111111, #444444 | Headings, body copy |
| Muted text | #888888, #999, #b1b1b5 | Secondary text |
| Light bg | #f5f5f5, #f7f5fa | Light section backgrounds |
| White | #ffffff | Text on dark, card backgrounds |
| Button primary | #e02529 bg, white text | Main CTAs |
| Button border | transparent bg, #e02529 border | Secondary outline buttons |
| Button radius | 2px (primary/border), 60px (pill) | Different button styles |
| Icon circles | 50% radius | Social icons, player photos |
| Overlay | rgba(0,0,0,0.7) | Hero, video backgrounds |

### Icon mapping (lucide-react)

| Source icon | Recreation |
|-------------|-----------|
| Font Awesome social | lucide-react: Facebook, Twitter, Instagram |
| Elegant Icons search | lucide-react: Search |
| Cart icon | lucide-react: ShoppingCart |
| Player position icons | lucide-react equivalents |
| Arrow navigation | lucide-react: ChevronRight, ChevronLeft |

### Picsum placeholder plan

- Hero background: `https://picsum.photos/seed/hoopside-hero/1920/800`
- Player photos: `https://picsum.photos/seed/hoopside-player-1/400/500` etc. (4 players)
- Video thumbnails: `https://picsum.photos/seed/hoopside-video-1/400/250` etc.
- Product images: `https://picsum.photos/seed/hoopside-product-1/400/400` etc.
- Match background: `https://picsum.photos/seed/hoopside-match/800/400`
- CTA background: `https://picsum.photos/seed/hoopside-cta/1920/400`

## Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/hoopside` from the simplest existing app, rename package to `@free-react-templates/hoopside`, add Oswald 400/500/700 + Roboto 400/500/700 Google Fonts `<link>` in index.html, set `public/CNAME` = `hoopside.free.componentdock.com` + `"homepage"`. Register workspace in package-lock.json.
2. [ ] Write spec-traceable test suite FIRST (Vitest + Testing Library, 100% coverage): Header (top bar, logo, nav links, cart, search), Hero (headline, countdown timer, CTA), LatestResults (heading, match display, team names, join button), Team (heading, 4 player cards with names/positions), PlayerStats (heading, tabs, player slider, league table), LatestVideos (video carousel), Product (items, prices, add-to-cart), CTA (heading, register button), Footer (contact, newsletter, componentdock link), App (composition, document title).
3. [ ] Layout shell: install Oswald + Roboto via Google Fonts, set up Tailwind theme tokens (#e02529 primary, #2f76c7 secondary, #ECBA0B gold, dark palette), base styles with dark section backgrounds.
4. [ ] Header: top bar (dark bg, emails, cart) + main nav (logo, links, search icon), offcanvas mobile menu.
5. [ ] Hero section: full-width background image, dark overlay, "National leagues" heading, countdown timer (hours/min/sec), "Book Tickets" pill button.
6. [ ] Latest Results: section title, match results table, featured match display (two teams with scores), "Join our team" border button.
7. [ ] Team roster: heading "First team", 4 player cards (dark bg, jersey number, photo, name, position).
8. [ ] Player Statistics: heading, tabbed navigation (4 tabs), player stats slider with point values + "View Portfolio" buttons, league points table.
9. [ ] Latest Videos: owl-carousel style video thumbnails with titles and overlays.
10. [ ] Product/Shop: section title, category filters, product carousel with items (image, name, price, "Add to cart" button).
11. [ ] CTA section: parallax background, "Join our fan club" heading, "Register" white button.
12. [ ] Footer: dark bg, 3 columns (contact, latest news, newsletter), copyright bar with Component Dock link.
13. [ ] Run `npm run verify:app -- hoopside` (typecheck → lint → vitest 100% → build) and fix until green.
14. [ ] Open PR `feat/template-hoopside` → merge immediately. PR description: source URL, preview URL, token list, what differs.
15. [ ] Bookkeeping: mark TEMPLATES.md line 1882 `[x]` + surge URL, `npm run readme:status`, push.
