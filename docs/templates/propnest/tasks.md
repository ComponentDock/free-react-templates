# PropNest — Implementation Notes

Source: ColorLib Rolast (real estate)
Preview: https://preview.colorlib.com/theme/rolast/
Spec: openspec/specs/template-propnest/spec.md

## Section order (top to bottom)

1. **Navbar** — sticky, white bg on scroll, logo left, nav links center, phone btn right
2. **Hero slider** — full-width bg image, overlay, heading + subtext, tabbed search form (Buy/Rent)
3. **Property listings** — "Searching for the Best Places?" heading, 3-col grid of 6 property cards
4. **Completed cases / Featured** — split: left text panel + right owl-carousel
5. **How it works** — 4 numbered step cards in a row
6. **Meet Our Agents** — centered heading, horizontal carousel of agent cards with hover overlay
7. **Location carousel** — full-width image slides with city label buttons
8. **Footer** — dark navy, 4 cols (logo+social, about, services, newsletter), copyright bar

## Fidelity notes

- Hero uses a tabbed search form (Buy Property / Rent Property) — this is the key distinguishing feature of Rolast
- Property cards show image + title + location pin + bed/bath + price in a pricing bar
- Featured section is a 40/60 split: left text with CTA, right image carousel
- Steps section uses circular number badges (#1, #2, etc.) overlaid on icons
- Agent cards have an overlay that shows social icons on hover
- Location carousel is full-bleed edge-to-edge images with label buttons
- Footer has a newsletter form with email + subscribe button

## Design tokens reference

- Font: Prompt (Google Fonts, 300-800)
- Brand green: #0FB45F
- Dark navy: #140C40
- Secondary text: #646D77
- Section bg: #f7f7f7
- Button radius: 25px (pill shape)
- Button style: white bg, green border, green text, green fill on hover

## Component plan

- `Navbar.tsx` — sticky header with logo, nav links, phone button
- `HeroSlider.tsx` — bg image, overlay, tabbed search form
- `PropertyGrid.tsx` — 3-col grid of property cards
- `PropertyCard.tsx` — individual property card
- `FeaturedSection.tsx` — split layout with text + carousel
- `HowItWorks.tsx` — 4 numbered steps
- `AgentCarousel.tsx` — horizontal carousel of agent cards
- `AgentCard.tsx` — individual agent with hover overlay
- `LocationCarousel.tsx` — full-bleed city image carousel
- `Footer.tsx` — 4-col footer with newsletter

## Placeholder image strategy

- Hero: `https://picsum.photos/seed/propnest-hero/1920/1080`
- Property cards: `https://picsum.photos/seed/propnest-prop-N/600/400` (N=1..6)
- Featured: `https://picsum.photos/seed/propnest-feat/800/500`
- Agent photos: `https://picsum.photos/seed/propnest-agent-N/300/300` (N=1..4)
- Location slides: `https://picsum.photos/seed/propnest-loc-N/1200/600` (N=1..5)
