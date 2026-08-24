# Smithy (Schmidt recreation) — Tasks & Todo

## Implementation Plan

1. **Scaffold App**: Create `apps/smithy` based on an existing simple app structure, update `package.json` name to `@free-react-templates/smithy`, `public/CNAME` to `smithy.free.componentdock.com`.
2. **Setup Tailwind & Font**: Configure Google Font "Poppins" in `index.html` or `index.css`, set up `@theme` colors.
3. **Build Components**:
   - `Navbar.tsx`: Brand logo + navigation links.
   - `Hero.tsx`: Subheading, headline, CTA buttons, visual portrait placeholder.
   - `About.tsx`: Professional summary and bio.
   - `Services.tsx`: Grid of service offerings with icons.
   - `Experience.tsx`: Career history / milestones timeline.
   - `Works.tsx`: Portfolio grid with picsum images.
   - `Blog.tsx`: Recent articles list.
   - `Contact.tsx`: Contact form with validation.
   - `Footer.tsx`: Copyright and Component Dock link (`https://www.componentdock.com/`).
4. **App Composition & Tests**: Compose in `App.tsx`, write unit tests with 100% test coverage.
5. **Verification**: Run `scripts/verify-app.sh smithy`.
