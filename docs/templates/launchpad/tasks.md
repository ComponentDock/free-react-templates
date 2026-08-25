# Launchpad Template Implementation Outline

## Task Breakdown

1. **Scaffold App**: Create `apps/launchpad` following conventions, update root `package.json` workspaces or root install.
2. **Design Setup**: Configure Tailwind CSS 4 theme tokens in `src/index.css` (`--color-primary: #f2ad5f`, `--color-secondary: #10495c`, font Poppins).
3. **Components**:
   - `Navbar.tsx`: Logo + links
   - `Hero.tsx`: Headline, CTA, illustration
   - `Partners.tsx`: As seen on logos
   - `ValueProp.tsx`: Business efficiency section
   - `Spotlight.tsx`: Productive with Launchpad + Testimonial
   - `Stats.tsx`: Reviews, Downloads, Employees counters
   - `FeaturesGrid.tsx`: 6-card feature grid with Lucide icons
   - `Footer.tsx`: Links, newsletter form, Component Dock attribution link
4. **Tests**: Comprehensive unit tests for all components achieving 100% test coverage.
5. **Verification**: Run `scripts/verify-app.sh launchpad`.
