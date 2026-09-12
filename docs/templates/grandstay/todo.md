# GrandStay — Implementation TODO

## Pre-implementation
- [x] Replication research: preview DOM fetched, CSS tokens extracted
- [x] Spec written: openspec/specs/template-grandstay/spec.md
- [x] Design notes: docs/templates/grandstay/design-notes.md
- [ ] Validate spec: `npm run spec:validate`

## Implementation order (for implementer)

### Phase 1: Scaffold
- [ ] Copy simplest existing app as base (e.g. apps/amber)
- [ ] Rename package to @free-react-templates/grandstay
- [ ] Update vite.config.ts, index.html, index.css
- [ ] Set up @theme tokens (brand color, fonts)
- [ ] Add Google Fonts (Taviraj + Open Sans) to index.html

### Phase 2: Components (top-down)
- [ ] Navbar.tsx — links, dropdown, mobile menu
- [ ] HeroSlider.tsx — bg image, heading, thumbnail nav cards
- [ ] RoomAvailability.tsx — room card + check form
- [ ] AboutRoom.tsx — quote + 2-col text
- [ ] Facilities.tsx — alternating image/text blocks
- [ ] Guestbook.tsx — tabbed testimonials
- [ ] InstagramCta.tsx — centered heading
- [ ] FooterRoomPics.tsx — 4-image row
- [ ] Footer.tsx — 4-col contact + Component Dock link

### Phase 3: Tests
- [ ] Write tests for each component (Vitest + RTL)
- [ ] Ensure 100% coverage
- [ ] Run `scripts/verify-app.sh grandstay`

### Phase 4: Polish
- [ ] Responsive design (mobile-first)
- [ ] Placeholder images via picsum.photos
- [ ] Icons via lucide-react
- [ ] No ColorLib references in any app file
- [ ] Footer links to Component Dock
