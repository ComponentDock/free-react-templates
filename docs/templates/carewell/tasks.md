# Carewell — Implementation Task Outline

Source: ColorLib Kare → https://preview.colorlib.com/theme/kare/
New name: carewell
Package: @free-react-templates/carewell

## Implementation Order

1. Scaffold app from an existing simple app (e.g. copy `apps/aiden` or similar minimal template)
2. Rename package to `@free-react-templates/carewell`
3. Create `public/CNAME` with `carewell.free.componentdock.com`
4. Set up `index.html` with Roboto Google Font link
5. Create `src/index.css` with Tailwind v4 + theme tokens (`--brand-primary: #ea2c58`, etc.)
6. Build section components in order:
   - `Navbar.tsx` — brand "Carewell", nav links, donate button
   - `Hero.tsx` — full-width bg image, dark overlay, headline, CTA
   - `DonationStats.tsx` — 4 stat boxes (Total Donation, Fund Raised, Highest Donation, Total Donation)
   - `MajorCauses.tsx` — carousel of cause cards with progress bars (use picsum.photos for images)
   - `MakeDonation.tsx` — preset amount buttons ($10/$50/$100/$250), USD, submit
   - `ClientsLogos.tsx` — logo carousel (placeholder logos)
   - `SupportCampaign.tsx` — campaign cards with funding progress
   - `ExperienceDonation.tsx` — parallax bg, dark overlay, heading, CTA
   - `AboutNewsletter.tsx` — about card, newsletter signup, social links
   - `Footer.tsx` — copyright + Component Dock link
7. Compose in `App.tsx`
8. Write tests per component (TDD: red → green → 100%)
9. Verify with `scripts/verify-app.sh carewell`

## Design Fidelity Notes

- **Navbar**: Bootstrap-style sticky navbar, brand on left, links center, donate button right. Mobile hamburger menu.
- **Hero**: Full viewport-width image with dark semi-transparent overlay (`rgba(24,24,24,0.33)`). Text centered. Square buttons.
- **Donation Stats**: 4-column grid on desktop, each box white with subtle shadow/border. Large numbers + small labels.
- **Major Causes**: OwlCarousel-style horizontal scroll. Each card: top image, progress bar (red `#ea2c58`), amounts in gold `#f8b600`, title, blurb, "donate here" link.
- **Make Donation**: Centered section. Preset amount buttons in a row. Brand color active state. Square submit button.
- **Clients Logos**: Simple logo carousel, greyscale logos.
- **Support Campaign**: Cards with campaign info + funding percentage. Similar card style to causes.
- **Experience**: Full-width parallax bg with dark overlay (`rgba(0,0,0,0.42)`). White text centered. Square CTA button.
- **About/Newsletter**: Two-column bottom section. Left: about card with avatar + text. Right: newsletter input + social icons.
- **Footer**: Simple, dark background, copyright + Component Dock link.

## Key Design Tokens to Wire in index.css

```css
@theme {
  --color-brand: #ea2c58;
  --color-brand-gold: #f8b600;
  --color-brand-cyan: #4cd3e3;
  --color-brand-blue: #38a4ff;
  --color-bg-alt: #f9f9ff;
  --color-text-primary: #222222;
  --color-text-muted: #777777;
}
```

## Image Placeholders

Use `https://picsum.photos/seed/carewell-<n>/<w>/<h>` for all images:
- Hero: `picsum.photos/seed/carewell-hero/1920/800`
- Cause cards: `picsum.photos/seed/carewell-cause-<1-6>/400/250`
- About avatar: `picsum.photos/seed/carewell-about/150/150`
- Experience bg: `picsum.photos/seed/carewell-experience/1920/600`

## Pitfalls

- Square buttons (no border-radius) — Kare uses sharp edges, not rounded
- Brand color `#ea2c58` is used heavily — progress bars, buttons, hover states
- Two parallax/dark-overlay sections (hero + experience) — use the same overlay pattern
- Stats section uses `#f9f9ff` background, not white
- The "About" section at bottom is NOT a full-width section — it's a card within a container
