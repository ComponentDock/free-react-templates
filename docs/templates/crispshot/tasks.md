# Crispshot — Implementation Tasks

## Setup
- [ ] Copy simplest existing app as base (e.g. abjure or similar)
- [ ] Rename package to `@free-react-templates/crispshot`
- [ ] Update `public/CNAME` to `crispshot.free.componentdock.com`
- [ ] Update `homepage` in package.json
- [ ] Run `npm install` at repo root to register workspace
- [ ] Verify `grep -c "free-react-templates/crispshot" package-lock.json` > 0

## Components
- [ ] `Navbar.tsx` — fixed transparent header, nav links, search icon, mobile hamburger
- [ ] `Hero.tsx` — full-width bg image + overlay, headline, paragraph, CTA button, email link
- [ ] `Gallery.tsx` — filter buttons, 4-col image grid, hover overlay, View More button
- [ ] `InstagramFeed.tsx` — heading + handle, image row/carousel, coral hover overlay
- [ ] `Footer.tsx` — copyright, Component Dock link, social icons

## Design tokens (apply in index.css @theme)
- [ ] Brand primary: `#fc6060`
- [ ] Text primary: `#252525`
- [ ] Text secondary: `#636363`
- [ ] Background light: `#f7f7f7`
- [ ] Font: Poppins (Google Fonts link in index.html)
- [ ] Button radius: 60px (pill)

## Testing (TDD)
- [ ] Write tests for Navbar (render, links, mobile toggle)
- [ ] Write tests for Hero (render, headline, CTA button, email link)
- [ ] Write tests for Gallery (render, filter buttons, filter interaction, hover effect)
- [ ] Write tests for InstagramFeed (render, hover overlay)
- [ ] Write tests for Footer (render, social icons, Component Dock link)
- [ ] Achieve 100% line/function/branch/statement coverage

## Verification
- [ ] `npm run verify:app crispshot` passes (typecheck + lint + test:coverage + build)
- [ ] Visual check: all 5 sections render in correct order
- [ ] No ColorLib references in app code
- [ ] Footer links to Component Dock
