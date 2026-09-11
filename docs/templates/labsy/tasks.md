# Labsy — Tasks & Design Notes

## Source

- **ColorLib slug:** digilab
- **Preview URL:** https://preview.colorlib.com/theme/digilab/
- **Screenshot:** digilab-free-template.jpg

## Section order (implementation sequence)

1. **Navbar** — "Labsy" logo + nav links + dark-mode toggle
2. **Hero** — split-screen: text left ("Small Details Make A Big Impression") + image right
3. **Services tabs** — vertical pills (7 services) with tab content
4. **Parallax band** — full-width background image with overlay
5. **Projects grid** — "Our Projects" heading + 6 hover-overlay cards
6. **About** — split layout with image left + "We Are Digital Agency" + counter
7. **Stats bar** — green bg, 4 metrics (500 Clients, 850 Projects, 20 Years, 24 Awards)
8. **Process** — "How We Work" + 4 numbered steps (Discovery, Planning, Execution, Delivery)
9. **Clients** — "Trusted By Industry Leaders" + 6 logo placeholders
10. **FAQ** — accordion with 5 questions
11. **Testimonials** — "Happy Clients" + carousel cards
12. **Blog** — "Our Blog" + 3 image cards with dates
13. **Contact** — "Contact Us" + 4 info columns + form
14. **Footer** — About, Links, Services, Questions + Component Dock link

## Design token reference (from css/style.css)

| Token              | Value                                           |
|--------------------|-------------------------------------------------|
| Primary color      | #31de79 (green — buttons, accents, stats bar)   |
| Button gradient    | linear-gradient(135deg, #9ff669, #31de79)       |
| Heading text       | #1a1a1a                                         |
| Body text          | #666                                             |
| Light bg           | #f8f9fa (bg-light sections)                      |
| Stats bar bg       | #31de79 (green)                                  |
| Font               | system-ui stack (Bootstrap 5 default)            |
| Button style       | .btn-primary: green gradient, 1px solid #31de79  |
| Hero               | split-screen with background image + overlay     |
| Tabs               | vertical pill-style (Bootstrap nav-pills)        |

## Fidelity notes

- Hero is a split-screen: left side has vertical "Welcome" text + slider
  with headline + CTA; right side has a full-height background image with
  overlay. Use a seeded picsum photo as the background.
- Services: vertical pill tabs on the left, tab content on the right with
  icon, heading, description, and "Learn More" button. Use Bootstrap
  nav-pills pattern or custom implementation.
- Projects: grid of cards with hover overlay effect. Use a simple grid with
  overlay on hover.
- About: split layout — image left, text right with "20 Years" counter badge
  on green bg.
- Stats bar: full-width green bg (#31de79) with 4 centered stats (number
  + caption).
- Process: 4 steps in a row, each with a step number, icon, title, and
  description.
- Clients: 6 placeholder logo boxes in a grid.
- FAQ: Bootstrap accordion with 5 expandable questions.
- Testimonials: carousel of cards with circular author photos, blockquotes,
  names, and roles.
- Blog: 3 cards with background images, date display (day/month/year),
  title, excerpt, and "Read More" green button.
- Contact: 4-column info (Address, Phone, Email, Website) + contact form.
- Footer: dark bg, 4 columns (About + social, Links, Services, Questions).
  Replace ColorLib attribution with ComponentDock link.
- Font: system-ui stack is fine — use Tailwind's default sans-serif.
- Primary green (#31de79) is distinctive — use it consistently for CTAs.

## Components to reuse from packages/ui

- Button / ButtonLink (for CTA buttons)
- Card (for project cards, blog cards, testimonial cards)
- Badge (for step numbers, counter)
- cn (class merging utility)

## Images

All placeholder images: `https://picsum.photos/seed/labsy-<n>/<w>/<h>`
