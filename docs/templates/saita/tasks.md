# Tasks & Design Notes: Saita (Digital Agency)

## Source & Mapping

- **ColorLib Source:** Saita (`https://colorlib.com/wp/template/saita/`)
- **New Template Name:** `saita` (`@free-react-templates/saita`)
- **Preview URL:** `https://preview.colorlib.com/theme/saita/`
- **Deploy Domain:** `saita.free.componentdock.com`

## Design & Structure Notes

1. **Hero Section:**
   - Background: Gradient from `#1fc1a9` to `#2889a6` (`linear-gradient(135deg, rgb(31, 193, 169) 0%, rgb(40, 137, 166) 100%)`).
   - Text: White typography, bold heading "We Are Digital Agency Helping To Boost Your sales".
   - Buttons: Primary CTA buttons with clean borders and hover states.
2. **About / Experience Section:**
   - Multi-column layout with counter stats (60, 9200, 5800, 100).
   - Skill progress bars for Design & Development (70%), Branding (85%), and Marketing (75%).
3. **Services Section:**
   - Grid of interactive service cards (Creative Design, Digital Marketing, Web Development, etc.) with icon support from Lucide icons and hover background transition to primary blue/teal.
4. **Portfolio / Projects:**
   - Filterable grid (All, Web Design, Web Development, Branding, Marketing, UI/UX Design).
5. **Team Section:**
   - 4 executive/consultant profile cards with image placeholders from picsum.
6. **Pricing & Testimonials:**
   - 3-tier pricing table and interactive testimonial carousel.
7. **Blog & Footer:**
   - 3 recent blog cards with metadata (date, comments).
   - Footer with company description, recent posts, contact details, and mandatory Component Dock link (`https://www.componentdock.com/`).

## Implementation Checklist for Implementers

- [ ] Create `apps/saita` workspace (copy structure from a clean reference app like `apps/aurora`).
- [ ] Configure `vite.config.ts` with `injectUiSource()`.
- [ ] Set `public/CNAME` to `saita.free.componentdock.com`.
- [ ] Build components (`Navbar`, `Hero`, `About`, `Counters`, `Services`, `Portfolio`, `Team`, `Pricing`, `Testimonials`, `Blog`, `Footer`).
- [ ] Write Vitest unit tests covering all components with 100% coverage.
- [ ] Run `scripts/verify-app.sh saita`.
