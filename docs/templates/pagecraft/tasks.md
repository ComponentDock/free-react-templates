# Tasks & Design Notes: Pagecraft (ColorLib Pageone)

## Overview

- **Source**: ColorLib `pageone` (`https://colorlib.com/wp/template/pageone/`)
- **Preview URL**: `https://preview.colorlib.com/theme/pageone/`
- **New App Name**: `pagecraft`
- **Category**: Web Agency / Corporate Portfolio
- **Primary Color**: `#ec1e64` (Pink)
- **Secondary Color**: `#10495c` (Deep Teal)

## Implementation Order

1. **Scaffold**: Copy reference app or create `apps/pagecraft` with Vite + React 19 + Tailwind CSS 4 + TypeScript.
2. **Setup Tailwind & Font**: Configure `@theme` with brand colors and load Google Font "Poppins".
3. **Components**:
   - `Navbar.tsx`: Sticky navigation with mobile menu toggle.
   - `Hero.tsx`: Agency headline, intro text, and tags.
   - `Services.tsx`: Agency services grid.
   - `Process.tsx`: Step-by-step workflow.
   - `Clients.tsx`: Partner brand logos.
   - `Features.tsx`: Core agency features.
   - `Team.tsx`: Office and team member profiles.
   - `Contact.tsx`: Contact form with Zod validation + office details.
   - `Footer.tsx`: Links, social icons, and Component Dock attribution.
4. **App Integration**: Compose in `App.tsx`.
5. **Tests**: Colocated unit tests for all components with 100% coverage.
6. **Verification**: Run `npm run verify:app pagecraft`.
