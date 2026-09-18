# Zenflow — Prep Notes & Design Reference

Source: ColorLib "Onepro" (https://colorlib.com/wp/template/onepro/)
Preview: https://preview.colorlib.com/theme/onepro/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/onepro-free-template.jpg

## Structure Order (top to bottom)

1. Navbar — sticky, logo left, 9 nav links (Home, Features, Service, Portfolio, Team, Clients, Pricing, News, Contact)
2. Hero Slider — Owl carousel, 2 slides, full-width bg images + dark overlay, heading + CTA
3. Features — 4-column service cards (icon + title + desc + Learn More)
4. About — split: text left (heading + desc + Learn More), skill progress bars right
5. Services — 3-column grid, icon + title + desc
6. Portfolio — filterable image gallery with category tabs, hover overlay
7. Promo CTA — full-width parallax bg, centered heading + outlined download button
8. Team — 4 member cards in slider, photo + name + role + social hover
9. Info — split: image left, highlighted text right + Learn More
10. Testimonials — "Our Happy Clients" carousel with photos + quotes
11. Pricing — 3 cards (Basic $9.99, Standard, Premium), highlighted middle
12. Blog & News — "Our Latest News", 3-col: Twitter feed + 2 blog cards
13. Contact — split: contact details left (address, phone, email), form right
14. Footer — dark bg, brand name, 8 social icons, copyright bar

## Design Token Notes

- Primary brand: #26b7e7 (sky blue) — buttons, accents, icons
- Accent: #eb484d (red) — pricing highlights
- Font: Raleway only (single font family for all text)
- Buttons: 5px border-radius, #26b7e7 bg, white text, hover inverts
- Download button: outlined (white border, transparent bg)
- Section alternation: white → gray (#eeeeee) → white pattern
- Dark overlays on hero and promo: rgba(0,0,0,0.85) / rgba(0,0,0,0.9)
- Footer: dark bg (#292929 area)

## Implementation TODO

- [ ] Scaffold app: copy simplest existing app, rename to zenflow
- [ ] Set up vite.config.ts with injectUiSource()
- [ ] Set up public/CNAME (zenflow.free.componentdock.com)
- [ ] Set up package.json (name: @free-react-templates/zenflow, homepage)
- [ ] Load Google Fonts (Raleway) in index.html
- [ ] Define @theme tokens in index.css for #26b7e7
- [ ] Implement Navbar component (9 links, responsive)
- [ ] Implement HeroSlider component (2 slides, auto-play)
- [ ] Implement Features component (4-column service cards)
- [ ] Implement About component (text + skill bars)
- [ ] Implement Services component (3-column grid)
- [ ] Implement Portfolio component (filterable gallery)
- [ ] Implement PromoCTA component (parallax bg section)
- [ ] Implement Team component (4 member cards)
- [ ] Implement Info component (image + text split)
- [ ] Implement Testimonials component (client carousel)
- [ ] Implement Pricing component (3 cards)
- [ ] Implement BlogNews component (feed + 2 blog cards)
- [ ] Implement Contact component (details + form)
- [ ] Implement Footer component (brand + social + copyright)
- [ ] Compose App.tsx from all sections in correct order
- [ ] Write tests for each component (TDD: red-green-refactor)
- [ ] Verify 100% coverage, lint, typecheck, build
- [ ] Run scripts/verify-app.sh zenflow

## Fidelity Notes

- Original uses Owl carousel for hero, team, and testimonials — replace with Swiper React or Embla
- Portfolio uses Isotope for filtering — replace with React state-based filtering
- Skill progress bars use jQuery animate — replace with CSS animations or framer-motion
- Parallax effect uses Stellar.js — consider CSS `background-attachment: fixed` or a lightweight React parallax
- WOW.js for scroll animations — replace with Intersection Observer + Tailwind
- stellarnav for responsive menu — replace with a simple hamburger toggle
- Twitter feed widget in blog section — replace with a static placeholder or remove
- Google Maps in contact section — keep the form, note the maps API key dependency
- Contact form uses AJAX submission — implement with basic form handling
- Social icons: Facebook, Twitter, LinkedIn, Pinterest, Google+, Flickr, Instagram, Dribbble — use lucide-react
