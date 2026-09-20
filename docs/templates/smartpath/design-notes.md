# SmartPath — Design Notes & Implementation Todo

## Source
- ColorLib: Edusmart (https://colorlib.com/wp/template/edusmart/)
- Preview: https://preview.colorlib.com/theme/edusmart/

## Section order (top to bottom)
1. Navbar (top bar + main nav)
2. Hero/Banner (full-width, dark overlay, search bar)
3. Feature Bar (3 cards, negative margin overlapping hero)
4. Department Area (10 category buttons on light bg)
5. Popular Courses (4 course cards, image overlays)
6. Testimonials (carousel, avatars, quotes)
7. Registration CTA (gradient bg, CTA button)
8. Footer (5 columns, social icons, Component Dock)

## Design token notes
- Primary brand: #00aee0 (cyan-blue) — buttons, links, gradient start
- Secondary brand: #f8b600 (gold) — price badges, highlights
- Accent: #4cd3e3 (light teal), #38a4ff (bright blue)
- Text: #222222 (dark), #777777 (muted)
- Background: #f9f9ff (faint blue-white for courses area)
- Fonts: Montserrat (headings), Crimson Text (body)
- Button radius: 45px (pill shape for primary buttons)
- Card radius: 5px (course cards, department items)
- Gradient: linear-gradient(90deg, #00aee0, #00fedc) for CTA + footer social hover
- Hero: dark image with semi-transparent overlay, white text

## Fidelity notes per section
- **Navbar:** Bootstrap-style navbar-light, top bar with contact info (phone, email, login), main nav with logo + 7 links. Mobile hamburger.
- **Hero:** Full-width background image, dark overlay, large heading (48px bold), search input + button. Min-height ~780px.
- **Feature Bar:** 3 feature items with icons (use lucide-react), positioned with negative top margin overlapping the hero. Flex row.
- **Department Area:** Grid of 10 category items. Each item has icon + label. Hover effect changes background. Light bg (#f9f9ff or white).
- **Popular Courses:** 4 course cards in a 2x2 or 4-col grid. Each card: image with overlay on hover, title, price/meta row, short description. Section background #f9f9ff.
- **Testimonials:** Owl-carousel style (use a React carousel library or CSS). 4 testimonials with avatar thumbnails below (active state highlighted). Quote text + name.
- **Registration CTA:** Full-width gradient (#00aee0 → #00fedc). Heading + subtext + CTA button (white bg, pill shape). Prominent call to action.
- **Footer:** Dark background. 5 columns: About text + social icons, Newsletter form, Courses links, Useful Links, Instagram placeholder. Bottom bar with copyright + Component Dock link.

## Implementation todo
- [ ] Copy simplest existing app as scaffold, rename package
- [ ] Set up index.html with Google Fonts (Montserrat, Crimson Text)
- [ ] Create Navbar.tsx (top bar + main nav + mobile hamburger)
- [ ] Create Hero.tsx (banner with search bar)
- [ ] Create FeatureBar.tsx (3 feature cards with negative margin)
- [ ] Create DepartmentArea.tsx (10 category grid)
- [ ] Create PopularCourses.tsx (4 course cards)
- [ ] Create Testimonials.tsx (carousel section)
- [ ] Create RegistrationCta.tsx (gradient CTA section)
- [ ] Create Footer.tsx (5 columns + Component Dock link)
- [ ] Compose all sections in App.tsx
- [ ] Set up index.css with Tailwind theme tokens
- [ ] Write tests for all components (TDD: tests first)
- [ ] Ensure 100% coverage
- [ ] Run verify-app.sh
