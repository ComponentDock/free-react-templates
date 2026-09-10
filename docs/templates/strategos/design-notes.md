# Strategos — Design Notes & Implementation Outline

Source: ColorLib "Conbusi" (slug: conbusi)
Preview: https://preview.colorlib.com/theme/conbusi/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/conbusi-free-template.jpg

## Section Order (top to bottom)

1. TopContactBar — dark navy bar (#001D38) with "Welcome to Strategos consulting service", email, phone, social icons (hidden < lg)
2. Navbar — sticky white nav with logo, links (Home, Pages w/dropdown, Services, Case Study, Blog w/dropdown, Contact), "Get a Quote" CTA button
3. HeroCarousel — full-width carousel, 2 slides with alternating bg images + dark overlay, "Big Opportunity for your Business" heading + "Our Services" pill button
4. Services — white bg, centered "What we Do?" heading, 6 service cards in 3-col grid with SVG icons + title + description + "Learn More" link
5. AboutInfo — white bg, 2-col: text left (heading "Why our Consulting?" + body + "About Us" button), image right
6. CounterStats — dark bg image + overlay, 4 metrics in a row (200+ Team Members, 97% Business Success, 5628 Happy Client, 5637 Business Done), each with SVG icon
7. CaseStudy — white bg, "Case Study" heading, carousel of 4 case cards (image + "Finance Solution" label + "Consumer Products Consulting" title), "More Cases" outline button
8. AccordionFAQ — white bg, 2-col: image left (rounded 10px), FAQ right ("Frequently ask" + 3 accordion items)
9. Team — white bg, "Expert Team" heading, 3 team cards (photo + name + role + social icons: FB/Twitter/Instagram)
10. InformationCTA — dark bg image + overlay, "For Any Information Call Us" large heading + subtitle + phone number pill button
11. Footer — white bg, 4-col (Brand logo+contact, Services links, Useful Links, Subscribe form), copyright bar + Component Dock link

## Key Design Tokens

- Primary: #0181f5 (vibrant blue) — CTA buttons gradient start
- Secondary: #5DB2FF (light blue) — button gradient end, links, outline buttons
- Headings: #001D38 (dark navy) — section titles, 46px, weight 300
- Body text: #707070 (gray)
- Font: Poppins (Google Fonts) 300/400/500/600/700
- Button primary: gradient #0181f5 → #5DB2FF, border-radius 30px (pill), white text
- Button outline: border #5DB2FF, color #5DB2FF, radius 30px, hover fills #5DB2FF
- Top bar: #001D38 dark navy, white text
- Counter area: dark image bg + overlay, white text/icons
- Information area: dark image bg + overlay, white text
- Footer: white bg, text #919191, links #5DB2FF
- Service card accent tints: #6382e6, #e66686, #f09359, #73fbaf, #a367e7
- Border radius: 30px (buttons), 10px (accordion images)

## Component Breakdown

| Component | File | Notes |
|-----------|------|-------|
| TopContactBar | src/components/TopContactBar.tsx | Dark navy bar, flex row, hidden lg:block, social icons via lucide-react |
| Navbar | src/components/Navbar.tsx | Sticky white, logo + nav links + dropdowns + CTA button |
| HeroCarousel | src/components/HeroCarousel.tsx | 2-slide carousel with bg images, dark overlay, heading + CTA. Use embla-carousel or custom |
| Services | src/components/Services.tsx | 6 cards in 3-col grid, SVG icons (use lucide-react), title + desc + "Learn More" link |
| AboutInfo | src/components/AboutInfo.tsx | 2-col, text left (heading + body + button), image right (placeholder via picsum) |
| CounterStats | src/components/CounterStats.tsx | Dark overlay bg, 4-col metrics with lucide-react icons + number + label |
| CaseStudy | src/components/CaseStudy.tsx | Carousel of 4 cards, each with image + category + title. "More Cases" outline button |
| AccordionFAQ | src/components/AccordionFAQ.tsx | 2-col: image left, accordion right. 3 collapsible items, only one expanded at a time |
| Team | src/components/Team.tsx | 3 member cards: photo + name + role + social icons row |
| InformationCTA | src/components/InformationCTA.tsx | Dark overlay bg, large centered heading + subtitle + phone CTA button |
| Footer | src/components/Footer.tsx | 4-col white bg (brand, services, links, subscribe), copyright bar + Component Dock link |

## Fidelity Notes

- Hero uses owl-carousel in original; embla-carousel or custom React carousel acceptable
- Case study section also uses owl-carousel; same approach
- Accordion uses Bootstrap collapse; implement with React state (one open at a time)
- Parallax backgrounds: use `bg-fixed` or `bg-attachment: scroll` (mobile fallback)
- Top bar social icons use FontAwesome; replace with lucide-react icons
- Service card SVG icons are custom; use lucide-react equivalents that match the theme
- Counter numbers use a counting animation library in original; implement with simple counter or static display
- Subscribe form is simple email input + submit; no complex validation needed
- Original uses Bootstrap grid (col-xl-3, etc.); translate to Tailwind grid/flex utilities
- Dropdown nav uses Bootstrap toggle; implement with React state + click/hover
- "Get a Quote" and "Our Services" use the same pill button style (boxed-btn3)
- Footer subscribe form: simple email input + button, no validation needed for initial version

## TODO

- [ ] Create app scaffold from simplest existing app (copy + rename)
- [ ] Implement TopContactBar (dark navy bar with contact info)
- [ ] Implement Navbar with dropdowns and CTA button
- [ ] Implement HeroCarousel (2 slides)
- [ ] Implement Services section (6 cards in 3-col grid)
- [ ] Implement AboutInfo section (2-col layout)
- [ ] Implement CounterStats section (dark bg, 4 metrics)
- [ ] Implement CaseStudy carousel (4 cards + outline button)
- [ ] Implement AccordionFAQ (image + 3 collapsible items)
- [ ] Implement Team section (3 member cards)
- [ ] Implement InformationCTA (dark overlay + phone CTA)
- [ ] Implement Footer (4-col + copyright + Component Dock)
- [ ] Write tests for all components (100% coverage)
- [ ] Verify: typecheck + lint + test:coverage + build
- [ ] Commit, push, PR, merge
