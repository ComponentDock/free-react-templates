# Perkup — Implementation & Research Notes

## Source Mapping

- **ColorLib Source**: Unbrew (`https://colorlib.com/wp/template/unbrew/`)
- **Live Preview**: `https://preview.colorlib.com/theme/unbrew/`
- **Assigned App Name**: `perkup` (`apps/perkup`, `@free-react-templates/perkup`)

## Section Order & Architecture

1. `Navbar.tsx` — Sticky nav with mobile hamburger toggle and smooth scrolling.
2. `Hero.tsx` — Hero banner with heading, badges, and action buttons.
3. `Services.tsx` — 6-card grid with Lucide icons.
4. `Counter.tsx` — 4-column statistics bar.
5. `About.tsx` — Split layout with image and key feature checklist.
6. `Team.tsx` — 4-column team member cards.
7. `Testimonials.tsx` — Customer reviews grid.
8. `Work.tsx` — Portfolio showcase grid.
9. `Pricing.tsx` — 3-tier pricing cards.
10. `Blog.tsx` — Recent articles grid.
11. `Newsletter.tsx` — Subscription banner.
12. `Footer.tsx` — Comprehensive footer linking `https://www.componentdock.com/`.

## Verification Plan

1. Validate spec with `npm run spec:validate`.
2. Implement app via TDD with 100% test coverage.
3. Verify with `scripts/verify-app.sh perkup`.
