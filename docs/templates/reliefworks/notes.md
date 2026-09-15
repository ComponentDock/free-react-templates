# ReliefWorks — Prep Notes

## Source

- **ColorLib template:** Charity Works
- **ColorLib URL:** https://colorlib.com/wp/template/charity-works/
- **Preview URL:** https://preview.colorlib.com/theme/charityworks/
- **Preview status at run time:** 404 at `/theme/charity-works/`, 200 at `/theme/charityworks/`
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/charityworks-free-template.jpg

## Design Tokens Captured

| Token          | Value       | Notes                              |
| -------------- | ----------- | ---------------------------------- |
| Brand green    | `#09cc7f`   | Primary CTA color                  |
| Brand navy     | `#1f2b7b`   | Secondary / outlined buttons       |
| Dark navy      | `#072366`   | Navbar text, header accents        |
| Heading color  | `#002d5b`   | Hero h1 and section headings       |
| Body text      | `#64676c`   | Paragraphs and body text           |
| Light bg       | `#f8fcff`   | Service area, WantToWork area bg   |
| Font           | Mulish      | Google Fonts, originally "Muli"    |
| Card radius    | 6px         | Service cards, cause cards         |
| Button radius  | 5px         | All buttons                        |
| Avatar radius  | 50%         | Team member circular avatars       |

## Section Order (top → bottom)

1. **Header** — Top bar (phone, email, social icons, language selector, subscribe link) + sticky nav (logo, menu links, Donate button)
2. **Hero/Slider** — Full-width background image, heading "We Are In A Mission To Help The Helpless", two CTA buttons (Donate, About US)
3. **Services** — 3 icon cards on `#f8fcff` bg, each with icon + title + description, white bg, 6px radius
4. **About** — Split layout: image left, text right, heading + paragraph + two buttons (About US, Become A Volunteer)
5. **Our Causes** — 3 cause cards with progress bars, heading "Explore our latest causes that we works"
6. **Featured Events** — Parallax background section, heading "We arrange many social events for charity donations"
7. **Team** — 4 volunteer cards, circular avatar + name + role + social icons
8. **CTA / WantToWork** — "Lets Chenge The World With Humanity" heading, Become A Volunteer button, light `#f8fcff` bg
9. **Testimonials** — Slider with dot navigation, quote + name + role
10. **Blog** — 3 blog cards, image + date + title + excerpt
11. **Counter/Funfact** — Parallax bg, 4 animated stat counters in white
12. **Footer** — 3 columns (Contact Info, Important Links, Newsletter signup) + copyright bar with Component Dock link

## Implementation Tasks

- [ ] Set up workspace: copy simplest existing app, rename to `reliefworks`, update package.json
- [ ] Create `index.html` with Mulish Google Fonts link
- [ ] Create `src/index.css` with Tailwind `@theme` block defining brand tokens
- [ ] Create `src/App.tsx` composing all sections in order
- [ ] Implement `Navbar.tsx` — top bar + sticky nav with logo, menu, Donate button
- [ ] Implement `Hero.tsx` — background image, heading, two CTA buttons
- [ ] Implement `Services.tsx` — 3 icon cards on light bg
- [ ] Implement `About.tsx` — split layout with image, text, two buttons
- [ ] Implement `Causes.tsx` — 3 cause cards with progress bars
- [ ] Implement `Events.tsx` — parallax background section with heading
- [ ] Implement `Team.tsx` — 4 volunteer cards with circular avatars
- [ ] Implement `CTA.tsx` — heading + volunteer button on light bg
- [ ] Implement `Testimonials.tsx` — slider with dot navigation
- [ ] Implement `Blog.tsx` — 3 blog post cards
- [ ] Implement `Counter.tsx` — parallax bg with 4 animated counters
- [ ] Implement `Footer.tsx` — 3 columns + copyright with Component Dock link
- [ ] Write tests for each component (TDD, 100% coverage)
- [ ] Run `scripts/verify-app.sh reliefworks`
- [ ] Commit and push

## Fidelity Notes

- Hero heading font-size is 70px desktop, 60px tablet, 50px mobile — use responsive Tailwind classes
- The original uses Bootstrap grid (col-xl-2, col-lg-2, etc.) — convert to Tailwind grid/flex
- Parallax effect via `background-attachment: fixed` — use `bg-fixed` in Tailwind
- Progress bars in causes section have percentage-based widths
- Counter animation (countUp) — use a simple counter hook or library
- Footer newsletter form needs email input + submit button
- Replace all ColorLib assets with picsum.photos placeholders and lucide-react icons
- No `colorlib.com` or `preview.colorlib.com` references in app code
- Footer MUST link `https://www.componentdock.com/`
