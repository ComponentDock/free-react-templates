# Plea — Prep Notes

## Source
- ColorLib template: Counselor
- Preview: https://preview.colorlib.com/theme/counselor/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/counselor-free-template.jpg

## Section order (fidelity reference)

| # | Section | Component name | Notes |
|---|---------|----------------|-------|
| 1 | Top bar | TopBar | Green (#589167) background, phone + email left, social icons right |
| 2 | Navbar | Navbar | Dark (#1a1a1a), sticky, brand "Plea", links: Home, About, Practice Areas, Attorney, Blog, Contact |
| 3 | Hero | Hero | Full-width bg image, dark overlay, parallax, heading "Counseling For Your Better Life", subtitle, green CTA button |
| 4 | Intro features | IntroFeatures | 3-column: "100% Confidential", "Qualified Team", "Individual Approach", each with icon + colored bg |
| 5 | How It Works | HowItWorks | 3 steps: Make Schedule → Start Discussion → Enjoy Plan, icons, connected visually |
| 6 | About | About | Split: image left, text right on #f5f4f0 bg, heading "Best Counseling Funding Network Worldwide" |
| 7 | Services | Services | 3 cards, icons with green accents, title + description |
| 8 | Testimonials | Testimonials | Carousel/slider, dark overlay bg, quotes + avatars |
| 9 | Pricing | Pricing | 3 tiers on #f7f7f7 bg, plan name, price, features, CTA |
| 10 | Appointment | Appointment | Contact form on bg image + dark overlay, fields: Name, Email, Phone, Date, Subject, Message |
| 11 | Blog | Blog | 3 cards, image + date + title + excerpt |
| 12 | Footer | Footer | Dark bg, 5 columns: brand + social, Explore, Legal, Company, Contact info. "Made with Component Dock" link |

## Design tokens summary

```
Brand:     #589167 (green)
Dark:      #1a1a1a
Text:      #1a1a1a / #6c757d (secondary)
BG white:  #ffffff
BG warm:   #f5f4f0
BG gray:   #f7f7f7
Font:      Roboto (300, 400, 500, 700)
Buttons:   border-radius 0px, bg #589167, white text
Icons:     Font Awesome 4.7 (use lucide-react equivalents)
```

## Implementation checklist

- [ ] Copy simplest existing app as base (e.g. apps/adviso or similar single-page)
- [ ] Rename package to @free-react-templates/plea
- [ ] Create all 12 section components
- [ ] Set up Tailwind theme with brand tokens in index.css
- [ ] Use picsum.photos for placeholder images (seed: plea-1, plea-2, etc.)
- [ ] Testimonials carousel — use a simple CSS/JS slider or lucide-react arrows
- [ ] Parallax on hero — use CSS background-attachment: fixed
- [ ] Appointment form — simple controlled form, no backend
- [ ] Footer: link to https://www.componentdock.com/
- [ ] Write tests for every component (100% coverage)
- [ ] Verify: typecheck + lint + test:coverage + build
