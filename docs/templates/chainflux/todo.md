# ChainFlux — Implementation Notes

Source: ColorLib "Cryptian" (https://preview.colorlib.com/theme/cryptian/)
New name: chainflux

## Design notes

### Section order (from live preview)

1. **Navbar** — transparent/absolute header, logo left, centered nav (8 links with dropdown), gradient "login" button right
2. **Hero/Welcome** — particles.js bg, left text + right illustration, 2 gradient CTA buttons
3. **Featured In** — logo carousel of partner logos
4. **About** — split: left illustration, right text + "join us on telegraph" button
5. **Features** — 3 icon cards (Exciting Opportunity, Vetted ICO Marketplace, Diverse Profit Ways)
6. **ICO Live Now** — stats (Token Sold, ETH/BTC/LTH), countdown timer, progress bar, "Buy Tokens" button
7. **Whitepaper** — 5 language flag buttons (English, Spanish, Russian, Arabic, Portuguese)
8. **Token Distribution** — pie chart + legend (4 segments: Team 15%, Investors 50%, Marketing 25%, Bounty 10%)
9. **Token Sales Contribution** — second pie chart + legend (Dev 40%, Marketing 30%, Buyout 20%, Legal 10%)
10. **Roadmap** — timeline carousel with alternating left/right items
11. **Core Team** — 4 member cards (photo, name, role, social icons)
12. **Advisory Board** — 5 advisor cards (same layout)
13. **Mobile App** — left text + store buttons, right phone mockup
14. **FAQ** — 4 tabs (General, ICO, Token, Cryptocurrency) with carousel
15. **Community** — social media icon grid (8 icons)
16. **Footer** — 4 columns (logo/desc, nav links, secondary links, newsletter form)

### Fidelity notes

- Deep blue (#062489) is the dominant background color — dark tech/crypto aesthetic
- Gradient buttons use coral-pink gradient (right: #fe998b → #fa768d → #f78ca0)
- Hover gradient transitions from blue (#072487) to pink
- Accent coral/pink (#fa758e) used for links, highlights, interactive elements
- Accent gold (#F6D266) for secondary highlights
- Font: Montserrat (Google Fonts)
- Particles.js animated background on hero (can use tsparticles or canvas)
- Logo carousel uses Owl Carousel (replace with simple CSS carousel or framer-motion)
- Roadmap timeline alternates left/right items with images
- Team cards have circular social icon buttons
- FAQ uses Bootstrap tabs + Owl Carousel
- Progress bar shows ICO funding progress (soft cap → max cap)
- Countdown timer component for ICO sale end date
- Token distribution uses pie charts (can use recharts or similar)
- Mobile app section has store badge buttons with icons
- Community section has a grid of social media icons with brand colors

### Component plan

- `Navbar.tsx` — transparent header, logo, centered nav with dropdown, login button, mobile toggle
- `Hero.tsx` — particles.js bg, heading, subtext, illustration, 2 CTA buttons
- `FeaturedIn.tsx` — logo carousel
- `About.tsx` — split layout: image left, text right, CTA button
- `Features.tsx` — 3 FeatureCard components
- `FeatureCard.tsx` — icon + title + description
- `IcoLiveNow.tsx` — stats display, countdown timer, progress bar, buy button
- `CountdownTimer.tsx` — days/hours/minutes/seconds display
- `ProgressBar.tsx` — animated funding progress bar
- `Whitepaper.tsx` — 5 language flag buttons
- `TokenDistribution.tsx` — pie chart + legend (first distribution)
- `TokenSales.tsx` — pie chart + legend (second distribution)
- `Roadmap.tsx` — timeline carousel with alternating items
- `TeamSection.tsx` — heading + grid of TeamMember cards
- `TeamMember.tsx` — photo, name, role, social icons
- `MobileApp.tsx` — text + store buttons + phone mockup
- `Faq.tsx` — tabbed interface with FAQ carousel
- `Community.tsx` — social media icon grid
- `Footer.tsx` — 4-column layout, newsletter form, Component Dock link

### Placeholder images

- Hero illustration: `https://picsum.photos/seed/chainflux-hero/600/400`
- About illustration: `https://picsum.photos/seed/chainflux-about/600/400`
- Feature icons: lucide-react (Zap, Shield, TrendingUp, etc.)
- Partner logos: `https://picsum.photos/seed/chainflux-logo-<n>/120/40` (n=1..8)
- Team photos: `https://picsum.photos/seed/chainflux-team-<n>/300/300` (n=1..9)
- Phone mockup: `https://picsum.photos/seed/chainflux-phone/300/600`
- Pie charts: use recharts PieChart component with data arrays
- Roadmap images: `https://picsum.photos/seed/chainflux-road-<n>/100/100` (n=1..6)
- Token distribution images: `https://picsum.photos/seed/chainflux-token-<n>/400/400` (n=1..2)
