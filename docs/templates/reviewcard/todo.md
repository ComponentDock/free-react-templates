# ReviewCard — Implementation Todo

Source: ColorLib Modal 19 · https://colorlib.com/wp/template/modal-19/
New name: reviewcard · Package: @free-react-templates/reviewcard

## Pre-implementation

- [x] Spec written (openspec/specs/template-reviewcard/spec.md)
- [x] Design tokens extracted from preview CSS
- [x] Section structure documented

## Implementation tasks

### App scaffolding
- [ ] Copy simplest existing modal app as base (e.g. apps/modalbox or apps/modalshift)
- [ ] Rename package to @free-react-templates/reviewcard
- [ ] Update package.json homepage to https://reviewcard.free.componentdock.com
- [ ] Create public/CNAME with reviewcard.free.componentdock.com
- [ ] Configure vite.config.ts with injectUiSource()

### Components
- [ ] ReviewModal.tsx — main modal component (split-screen layout)
- [ ] ProductImagePanel.tsx — left panel with background image + price badge
- [ ] ReviewContentPanel.tsx — right panel with heading, rating, description
- [ ] StarRating.tsx — 5-star rating display (4 filled, 1 empty)
- [ ] SocialActions.tsx — heart/message/add action bar with counts
- [ ] ShareIcon.tsx — share button (absolute top-right)
- [ ] ModalTrigger.tsx — "Launch modal" trigger button

### Styling (Tailwind)
- [ ] Modal overlay + backdrop with fade animation
- [ ] Split-screen flexbox layout (50/50)
- [ ] Design tokens in @theme: brand colors, shadow, radius
- [ ] Price badge: absolute positioning, white text, top-left overlay
- [ ] Decorative heading underline (70px centered gray line)
- [ ] Star rating: filled (yellow #ffc107) / empty stars
- [ ] Social icons: red heart (#dc3545), blue message/add (#007bff)
- [ ] Modal background: #efefef
- [ ] Font: Roboto via Google Fonts link

### Tests
- [ ] ModalTrigger renders button text
- [ ] Modal opens on trigger click
- [ ] Modal displays split-screen layout
- [ ] Product image panel shows background image
- [ ] Price badge displays correct price
- [ ] StarRating renders 4 filled + 1 empty star
- [ ] SocialActions shows correct counts
- [ ] Modal closes on backdrop click
- [ ] 100% coverage (lines/functions/branches/statements)

### Footer & deploy
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references anywhere in app code
- [ ] npm install at root for lockfile registration
