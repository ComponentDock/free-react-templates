# Peakpoint — Implementation Notes

Source: ColorLib Bizpro → https://preview.colorlib.com/theme/bizpro/
New name: peakpoint

## Section Order (1:1 with source)

1. **Navbar** — Sticky header, logo left, one-page nav links right, hamburger on mobile
2. **Hero** — Full-screen background image slider, centered headline + subtitle + outlined CTA button, prev/next arrows
3. **About** — "ABOUT OUR PEAKPOINT", paragraph, 4 circular-bordered icon cards (3-col → stacked on mobile)
4. **Services** — "SERVICES WE PROVIDE", 6 items in 3-col grid, each with icon + heading + text
5. **Portfolio** — "OUR AWESOME PROJECTS", filter bar (All + 6 categories), 3x3 image grid, hover overlay with title + tags
6. **Parallax Banner** — Dark background image, "We Create Creative & Best Unique Design" + red ampersand, CTA button
7. **Team** — "Meet our Team", 3 member cards with photo, name, role, social icons, hover overlay
8. **Skills** — 2-column: image left, 5 progress bars right (animated on scroll)
9. **Clients** — "OUR HAPPY CLIENTS", testimonial slider (avatar + quote + name)
10. **Pricing** — 3 cards (Basic/Advanced/Premium) with price, feature list, "BUY IT NOW" red button
11. **Blog** — "OUR LATEST Blog", 3 image cards with title, author, date, excerpt, "Read More"
12. **Partners** — Logo carousel (5+ logos)
13. **Contact** — 2-column: contact info (address/phone/email with red circle icons) + map; below: "Send Message" form (First Name, Last Name, Email, Subject, Message, submit)
14. **Footer** — Centered logo, 8 social icons, copyright line, Component Dock link

## Design Fidelity Notes

- Font: Raleway (Google Fonts) — not Montserrat, not Roboto
- Brand color: `#d8545d` (muted red) — used for nav active, button borders, dividers, icon circles, pricing CTA
- Dark sections: `#232a34` for footer/parallax; `#1e1e1e` for darkest accents
- Buttons: rectangular (border-radius 0), outlined red by default, solid red on hover/submit
- Icon circles: `border-radius: 50%`, red border, centered FontAwesome icon
- Section titles: uppercase, bold, centered, with description paragraph below
- Portfolio overlay: semi-transparent dark + centered content with border-shape box
- Skill bars: red fill, percentage label, animate on scroll
- Pricing cards: white background, subtle shadow on hover (`hvr-float-shadow`)
- Contact form: light styling, full-width inputs, solid red submit button
- Placeholder images: `https://picsum.photos/seed/peakpoint-<n>/<w>/<h>`
- Icons: `lucide-react` equivalents for FontAwesome icons (Camera, Pencil, Globe, BarChart, Paintbrush, Anchor, LifeRing, etc.)

## Component Map

| Section       | Component file          | Key pieces                                      |
| ------------- | ----------------------- | ----------------------------------------------- |
| Navbar        | `Navbar.tsx`            | Sticky, logo, 10 nav links, mobile hamburger     |
| Hero          | `Hero.tsx`              | Background image, headline, subtitle, CTA button |
| About         | `About.tsx`             | 4 ServiceCard items in a grid                    |
| Services      | `Services.tsx`          | 6 ServiceItem cards in 3-col grid                |
| Portfolio     | `Portfolio.tsx`         | Filter bar + 9 PortfolioItem cards               |
| ParallaxCTA   | `ParallaxCTA.tsx`       | Dark bg, text, button                            |
| Team          | `Team.tsx`              | 3 TeamMember cards                               |
| Skills        | `Skills.tsx`            | Image + 5 ProgressBar items                      |
| Clients       | `Clients.tsx`           | Testimonial slider                               |
| Pricing       | `Pricing.tsx`           | 3 PricingCard items                              |
| Blog          | `Blog.tsx`              | 3 BlogCard items                                 |
| Partners      | `Partners.tsx`          | Logo carousel                                    |
| Contact       | `Contact.tsx`           | Info + map + form                                |
| Footer        | `Footer.tsx`            | Logo, social links, copyright, CD link           |

## TODO

- [ ] Create app scaffold from simplest existing app
- [ ] Implement Navbar (sticky, mobile hamburger)
- [ ] Implement Hero (full-screen bg, slider, CTA)
- [ ] Implement About (4 cards, circular icons)
- [ ] Implement Services (6 cards, 3-col)
- [ ] Implement Portfolio (filter, 9 items, hover overlay)
- [ ] Implement ParallaxCTA (dark bg, text, button)
- [ ] Implement Team (3 cards, hover overlay, social icons)
- [ ] Implement Skills (image + progress bars)
- [ ] Implement Clients (testimonial slider)
- [ ] Implement Pricing (3 cards)
- [ ] Implement Blog (3 cards)
- [ ] Implement Partners (logo carousel)
- [ ] Implement Contact (info + map + form)
- [ ] Implement Footer (social icons, CD link)
- [ ] Run `scripts/verify-app.sh peakpoint` — typecheck + lint + 100% coverage + build
