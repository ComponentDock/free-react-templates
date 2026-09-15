# Gracecraft — Tasks

## Prep (DONE)

- [x] Fetch preview DOM from https://preview.colorlib.com/theme/mimosan/
- [x] Extract CSS design tokens (colors, fonts, radii, spacing)
- [x] Analyze section structure from HTML
- [x] Write openspec/specs/template-gracecraft/spec.md
- [x] Write docs/templates/gracecraft/notes.md

## Implementation (for implementer)

- [ ] Scaffold apps/gracecraft from simplest existing app
- [ ] Configure: package.json, vite.config.ts (with injectUiSource), index.html (fonts), CNAME, homepage
- [ ] Implement TopBar component
- [ ] Implement Header component (with mobile menu)
- [ ] Implement Hero component (parallax background)
- [ ] Implement EventBanner component (countdown timer)
- [ ] Implement About component (two-column)
- [ ] Implement Sermons component (3-card grid)
- [ ] Implement Donation component (progress bar)
- [ ] Implement Quote component
- [ ] Implement Gallery component (image grid)
- [ ] Implement LatestNews component (3-post grid)
- [ ] Implement Footer component (3 columns + copyright)
- [ ] Compose App.tsx with all sections in order
- [ ] Write tests for all components (100% coverage)
- [ ] Run verify-app.sh gracecraft
- [ ] Update TEMPLATES.md: [~] → [x] + surge URL
- [ ] Commit, push, PR, merge
