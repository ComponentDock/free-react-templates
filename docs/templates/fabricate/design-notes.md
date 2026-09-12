# Fabricate — Implementation Notes

Source: ColorLib Industry (https://preview.colorlib.com/theme/industry/)

## Section order (match 1:1)

1. **Header** — Top bar (dark #222222, social icons left, phone+email right) + Nav (logo, links: Home, About, Service, Projects, Blog [dropdown], Contact)
2. **Banner/Hero** — Full-width bg image, dark overlay (rgba(0,0,0,0.5)), centered text: subtitle + h1 + paragraph + pill CTA button (#fab700)
3. **Features** — 3 hexagon icon cards in a row (Maintenance, Residential Service, Commercial Service) on white bg, section-gap spacing
4. **About** — Split: left text (accent h6 #fab700, h1, paragraph, CTA button) + right dark form panel (Request a Quote: select, name, phone, email, textarea, submit)
5. **Services** — Centered heading + 3 image cards (Automotive, Construction, Industrial) with title + paragraph below each image
6. **Stats/Counter** — Dark overlay bg, 4 items in a row: circular ring + counter number + label (Projects Completed, Employees, Happy Clients, Tickets)
7. **Projects** — Centered heading + asymmetric grid: row 1 = large (col-8) + small (col-4), row 2 = two equal (col-6 each). Clickable image gallery.
8. **Feedback** — Dark overlay bg, split: left video play button on image, right review carousel (name, star rating, testimonial text)
9. **Blog** — Centered heading + 3 cards: image thumb, author row (avatar + name + date + likes + comments), title, excerpt
10. **Footer** — Dark navy (#04091e), 3 columns: About Us + copyright, Newsletter (email input + arrow btn), Follow Us (social icons). Footer MUST link Component Dock.

## Component mapping

| Section | Component file | Notes |
|---|---|---|
| Header | `Navbar.tsx` | TopBar sub-component + main nav with mobile toggle |
| Banner | `Hero.tsx` | Bg image via picsum, overlay div, content |
| Features | `Features.tsx` | 3 cards, hexagon icons → use lucide-react (Wrench, Rocket, Building2) |
| About | `About.tsx` | Split grid, QuoteForm sub-component |
| Services | `Services.tsx` | 3 image cards with picsum placeholders |
| Stats | `Stats.tsx` | 4 counter items, animated count-up on scroll |
| Projects | `Projects.tsx` | Asymmetric grid of clickable images |
| Feedback | `Testimonials.tsx` | Star rating + carousel, play button (static) |
| Blog | `Blog.tsx` | 3 blog cards |
| Footer | `Footer.tsx` | 3-col grid, newsletter input, social links |

## Design fidelity notes

- **Colors**: brand #fab700 (amber), bg #f9f9ff (about), dark #222222 (header top), navy #04091e (footer), body #777777, headings #222222
- **Typography**: Poppins via Google Fonts, weights 300-700
- **Buttons**: pill shape (rounded-full), bg #fab700, white text, hover → transparent bg + #fab700 border/text
- **Overlays**: rgba(0,0,0,0.5) on hero, stats, feedback sections
- **Form panel**: dark gradient background over image, white text, dark inputs
- **Spacing**: section-gap (consistent vertical padding between sections)
- **Hexagon icons**: replace with lucide-react icons in circular containers
- **Stats counters**: animated on scroll entry (use IntersectionObserver)
- **Gallery**: asymmetric grid (not uniform), images clickable
- **Carousel**: static in MVP (show first review; carousel behavior can be added)

## Implementation order

1. Scaffold app from simplest existing template (copy structure)
2. Set up Tailwind @theme with brand tokens (#fab700, #04091e, #222222, #f9f9ff, #777777)
3. Add Poppins font to index.html
4. Build components top-down: Navbar → Hero → Features → About → Services → Stats → Projects → Testimonials → Blog → Footer
5. Write tests for each component (Vitest + Testing Library)
6. Verify 100% coverage, typecheck, lint, build
