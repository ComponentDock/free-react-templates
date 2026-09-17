# ShearGlow — Implementation Notes

## Source
- ColorLib: Akame
- Slug: `akame`
- Preview: https://preview.colorlib.com/theme/akame/ (live, CSS extracted)
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/akame-free-template.jpg

## Section order (top to bottom)

1. **Top header bar** — dark background, "Welcome to hair salon!" left, hours + phone right
2. **Main nav** — Logo + links (Home, Pages dropdown, Portfolio, Services, About, Blog, Contact) + Cart icon + "Book Now" button
3. **Hero slider** — Full-width background image, "We Care About Your Hair" heading, quote, "About Us" button
4. **About section** — 3-column: heading ("Hair Salon" / "The House of Hair Salon & Spa"), image, content + "Read More" button
5. **Services section** — 4-column grid: Coloring, Haircut, Hairstyle, Coloring (icons + descriptions)
6. **Why Choose Us** — 2-column on gray bg: image left, heading + bullet list right
7. **Portfolio** — Filter buttons (All, Haircuts, Dye, Shave) + image grid
8. **Our Experts** — Side background image + heading + certificates + team member cards
9. **Blog/Latest News** — 3-column post cards with thumbnails
10. **CTA section** — "Make Stilo Your Number One Choice" + two buttons + background image
11. **Footer** — 3-column: logo + description + copyright, Opening times + social icons, Contact Us + address

## Design tokens (from live CSS)

- Font: Open Sans (body), Playfair Display (headings/buttons)
- Brand color: `#bca858` (gold) — buttons, accents
- Button default: transparent bg + `#252525` border (outlined)
- Button hover/active: `#bca858` bg + white text (filled)
- Heading text: `#252525` (near-black)
- Body text: `#6e6e6e` (gray)
- Alt section bg: `#f6f9f9` (light gray)
- Button: 42px height, 150px min-width, 35px horizontal padding, uppercase
- Section padding: 80px vertical
- Portfolio filter: same as akame-btn style

## Fidelity notes

- The original uses Owl Carousel for the hero slider — implement as a simple CSS/JS slider or static hero
- The "Pages" nav item has a nested dropdown menu
- The portfolio has filter functionality (All / Haircuts / Dye / Shave)
- The experts section has certificate images and team member cards with social icons
- The CTA section has a background image on the right side
- The footer has social media icons (Facebook, Twitter, Google+, Instagram)
- The top header bar is separate from the main nav
- The nav has a hamburger toggler for mobile
- Use lucide-react for icons (replace FontAwesome)
- Use picsum.photos for placeholder images
- The original uses WOW.js for scroll animations — can use Intersection Observer or skip animations

## Implementation tasks

- [ ] Scaffold `apps/shearglow/` from simplest existing multi-section app
- [ ] Set up `vite.config.ts` with `injectUiSource()`
- [ ] Add Open Sans + Playfair Display font links in `index.html`
- [ ] Create `TopBar.tsx` (dark bar with welcome text + hours + phone)
- [ ] Create `Navbar.tsx` (sticky nav with logo, links, dropdown, Book Now)
- [ ] Create `Hero.tsx` (full-width slider or static hero with heading + button)
- [ ] Create `About.tsx` (3-column: heading, image, content)
- [ ] Create `Services.tsx` (4-column grid with icons)
- [ ] Create `WhyChooseUs.tsx` (2-column on gray bg with bullet list)
- [ ] Create `Portfolio.tsx` (filter buttons + image grid)
- [ ] Create `Experts.tsx` (side thumbnail + heading + certificates + team cards)
- [ ] Create `Blog.tsx` (3-column post cards)
- [ ] Create `CTA.tsx` (heading + two buttons + background image)
- [ ] Create `Footer.tsx` (3-column with logo, hours, contact + Component Dock link)
- [ ] Create `App.tsx` composing all sections
- [ ] Write tests (100% coverage)
- [ ] Run `scripts/verify-app.sh shearglow`
- [ ] Commit, push, deploy
