# Kindheart — Implementation Notes

**Source:** ColorLib "Charilife" — https://preview.colorlib.com/theme/charilife/
**New name:** kindheart

## Design tokens

| Token         | Value                | Usage                              |
|---------------|----------------------|------------------------------------|
| Brand primary | `#ff573d` (coral-red) | Buttons, links, accents, highlights |
| Dark          | `#15181d` (charcoal)  | Headings, footer bg, navbar sticky |
| Body text     | `#666666` (grey)      | Paragraph text                     |
| Light bg      | `#ececec` (light grey)| Section backgrounds                |
| White         | `#ffffff`             | Card backgrounds, hero CTA bg      |
| Heading font  | Lora (serif, 700)     | h1–h6, buttons, section titles     |
| Body font     | Roboto (sans, 300)    | Body text, nav links               |

## Section order (1:1)

1. Navbar
2. Hero / Banner (parallax)
3. About Area (2-col + brand carousel + video)
4. Features Area (3 feature cards)
5. Popular Causes (3 cause cards with raised/goal)
6. Call-to-Action (dark overlay, volunteer CTA)
7. Upcoming Events (2×2 grid with countdown)
8. Blog (sidebar + 2 blog cards)
9. Instagram (5-image carousel)
10. Newsletter CTA (subscribe form)
11. Footer (3-col, dark bg)

## Implementation todos

- [ ] Create `apps/kindheart/` scaffold (copy from simplest app, rename package)
- [ ] Install dependencies, register workspace in package-lock.json
- [ ] Set up `index.html` with Google Fonts link for Lora + Roboto
- [ ] Set up `src/index.css` with Tailwind `@theme` tokens (brand color, fonts)
- [ ] Build `Navbar` component — transparent → sticky, hamburger, dropdowns
- [ ] Build `Hero` component — parallax image, overlay, headline, CTA
- [ ] Build `About` component — 2-col, brand carousel, video button
- [ ] Build `Features` component — 3 feature cards with icons
- [ ] Build `PopularCauses` component — 3 cause cards with progress/donate
- [ ] Build `CallToAction` component — dark overlay, volunteer CTA
- [ ] Build `UpcomingEvents` component — 2×2 grid with countdown
- [ ] Build `Blog` component — sidebar + 2 blog cards
- [ ] Build `Instagram` component — horizontal carousel with hover overlay
- [ ] Build `Newsletter` component — subscribe form
- [ ] Build `Footer` component — 3-col dark footer with CD link
- [ ] Compose all sections in `App.tsx`
- [ ] Write tests for every component (100% coverage)
- [ ] Run `npm run verify:app kindheart`

## Fidelity notes

- **Hero:** uses `data-parallax="scroll"` and `data-image-src` — implement with
  CSS `background-attachment: fixed` + `picsum.photos/seed/kindheart-hero/1920/900`
- **About section:** right side has a video play button with pulsing border
  animation (`pulse-border` keyframes). The gradient image bg on far right
  (`about_bg`) uses a dark overlay gradient.
- **Features cards:** light grey `#ececec` background with white icon containers,
  coral-red icon color. Icons are from Flaticon (compass, desk, bathroom) —
  replace with lucide-react equivalents.
- **Cause cards:** image → tag → title → raised/goal → donate + donors.
  Hover: shadow + image scale.
- **Events:** date badge on image (top-right, dark bg), countdown timer with
  days/hours/minutes.
- **Blog:** left column has large heading + description + "Show more" link;
  right has 2 cards with image, tags, title, comments/views.
- **Instagram:** 5-image horizontal slider (owl-carousel in original) —
  use CSS scroll-snap or a lightweight carousel.
- **CTA/Newsletter:** "Subscribe now" coral-red top text, form with name + email
  inputs and "Subscribe" button.
- **Footer:** dark `#15181d` bg, Lora headings, Roboto links, coral-red accents
  on icons and hover states.
- **Colors:** the only accent color is `#ff573d` — used universally for
  highlights, buttons, links, tags. Section backgrounds alternate between
  white and `#ececec`.
