# Kindfund (ColorLib Charifit) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-kindfund`.

## Design notes (replication findings)

- **Original:** ColorLib "Charifit" — charity / donation website
  template (source: https://colorlib.com/wp/template/charifit/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/charifit/
  (HTTP 200, ~39.4 KB, title "Charifit — ColorLib Website Template").
  Stylesheets: `css/style.css` (150 KB) + `css/bootstrap.min.css` +
  owl.carousel / magnific-popup / font-awesome / themify-icons / nice-select /
  flaticon / gijgo / animate / slicknav. Fonts via Google Fonts:
  **Open Sans** (body, 19 usages) + **Yeseva One** (headings/brand, 5 usages).
- **Screenshot:** `charifit-free-template.jpg` — green-tinted charity
  template with a hero banner, reasons section, video area, popular causes
  with progress bars, counter stats, volunteer profiles, news/blog posts,
  donation form, and footer.
- **Visual design:** clean charity aesthetic — white/light-grey page, near-black
  text `#222222`, brand green `#3CC78F` (dominant accent — logo, hero overlay,
  counters, buttons, progress bars, footer), accent orange `#ff5e13`,
  light lavender `#f9f9ff` / `#f0e9ff` section backgrounds, deep navy
  `#191d34` / `#415094`, muted grey `#7a7b7c` / `#999999`. Open Sans body
  with Yeseva One display headings. Buttons 5–7px radius. Counters
  white-on-green. Bradcam uses `#3CC78F` at 0.8 opacity over background
  image.

## Design tokens (from css/style.css + live computed styles)

| Token            | Value                           | Where                                                                 |
|------------------|---------------------------------|-----------------------------------------------------------------------|
| Brand green      | `#3CC78F`                       | Bradcam overlay, counter bg, btn fills, progress bars, footer accent  |
| Accent orange    | `#ff5e13`                       | Secondary CTAs, hover states                                           |
| Light lavender   | `#f9f9ff`                       | Alternating section backgrounds                                        |
| Pale purple      | `#f0e9ff`                       | Additional section bg tint                                             |
| Deep navy        | `#191d34` / `#415094`           | Headings, footer elements                                              |
| Light teal       | `#4cd3e3`                       | Secondary accent                                                       |
| Muted grey       | `#7a7b7c` / `#999999`           | Body text, meta text                                                   |
| Near-black       | `#222222`                       | Primary heading text                                                   |
| White            | `#fff`                          | Page bg, button text on green, counter text                            |
| Red (progress)   | `#FF4F42`                       | Cause progress bar background                                          |
| Body font        | `"Open Sans", sans-serif`       | All body text, 16px                                                    |
| Display font     | `"Yeseva One", cursive`         | Section headings, footer titles                                        |
| Button radius    | 5–7px                           | CTA buttons                                                            |
| Card radius      | 7px                             | Counter boxes                                                          |
| Circle radius    | 50%                             | Avatars, icon containers                                               |

## Section structure (implementation order)

1. **TopBar** — phone + email left, social icons right; light grey bg
2. **Navbar** — logo left, 7 nav links right + "Donate Now" CTA; sticky
3. **Hero** — full-width bg image, overlay, headline + subtext + "Learn More" CTA
4. **Reasons** — "Reason of Helping" title, 3 feature cards (icon, title, desc, "Read More")
5. **LatestActivities** — video bg with green overlay, right-aligned text + "Donate Now"
6. **PopularCauses** — "Popular Causes" title, 3 cause cards with progress bars + raised/goal
7. **CounterStats** — green overlay bg, 4 stat boxes (icon, number, caption)
8. **Volunteer** — "Our Volunteer" title, 3 team cards (photo, name, role)
9. **NewsUpdates** — "News & Updates" title, 3 blog cards (image, meta, title, excerpt)
10. **DonationForm** — "Make a Donation" heading, amount buttons, name/email inputs, submit
11. **Footer** — 4 columns (About, Services, Contacts, News) + copyright + Component Dock link

## Fidelity notes

- Match the EXACT section order from the DOM analysis above
- Brand green `#3CC78F` is the dominant color — use it in `@theme` as the primary
- Hero uses a full-width background image with dark overlay; the headline text
  is white with a smaller sub-headline. Recreate with picsum.photos placeholder.
- Cause progress bars have TWO colors: red `#FF4F42` (unfilled) and green
  `#3CC78F` (filled portion). Show percentage + dollar amounts.
- Counter section uses a background image with green overlay at 0.6 opacity;
  numbers animate with count-up on scroll intersection.
- Volunteer cards have a hover overlay effect (green tint + social icons).
- Donation form has clickable amount buttons ($25 / $50 / $100 / $200) that
  pre-fill a hidden amount field, plus name/email inputs.
- Footer background is `#F3FCF8` (very light green tint).
- Footer MUST include Component Dock attribution link.
- Use `picsum.photos/seed/kindfund-<n>/<w>/<h>` for all placeholder images.
- Use `lucide-react` icons (Heart, Users, Droplets, DollarSign, etc.)
  instead of Font Awesome / Themify icons.

## Implementation tasks

- [ ] Create `apps/kindfund/` from boilerplate template
- [ ] Set up `vite.config.ts` with `injectUiSource()` pattern
- [ ] Create `index.html` with Google Fonts (Open Sans + Yeseva One)
- [ ] Set up `index.css` with Tailwind `@theme` tokens (brand green, fonts)
- [ ] Build `TopBar` component — phone, email, social icons
- [ ] Build `Navbar` component — sticky, scrollspy, mobile hamburger
- [ ] Build `Hero` component — bg image, overlay, headline, CTA
- [ ] Build `Reasons` component — 3 feature cards with icons
- [ ] Build `LatestActivities` component — video bg effect, text + CTA
- [ ] Build `PopularCauses` component — 3 cause cards with progress bars
- [ ] Build `CounterStats` component — 4 stat boxes with count-up animation
- [ ] Build `Volunteer` component — 3 team cards with hover effect
- [ ] Build `NewsUpdates` component — 3 blog cards
- [ ] Build `DonationForm` component — amount buttons, inputs, submit
- [ ] Build `Footer` component — 4-column layout + Component Dock link
- [ ] Compose all sections in `App.tsx`
- [ ] Write tests for each component (100% coverage)
- [ ] Run `scripts/verify-app.sh kindfund` — must pass
- [ ] Update `TEMPLATES.md` line 1255: mark `[x]` with surge URL
- [ ] Commit and PR: `feat: add kindfund (ColorLib Charifit)`
