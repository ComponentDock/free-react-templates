# SeekQuest — Implementation Tasks

## Pre-implementation
- [x] Spec written (openspec/specs/template-seekquest/spec.md)
- [x] Design notes documented (docs/templates/seekquest/)
- [x] Replication research complete (CSS tokens, DOM structure, screenshot)

## Implementation
- [ ] Copy simplest existing app as scaffold
- [ ] Rename package to @free-react-templates/seekquest
- [ ] Update public/CNAME to seekquest.free.componentdock.com
- [ ] Update homepage in package.json
- [ ] Add Poppins font link in index.html
- [ ] Create App.tsx with form layout
- [ ] Create SearchForm component (Location input, 3 selects, button)
- [ ] Style with Tailwind: pink (#ff62a5) labels, transparent inputs, square corners
- [ ] Implement responsive layout (horizontal desktop, vertical mobile)
- [ ] Add search/dropdown icons (lucide-react)
- [ ] Add hover state on button (pink → black)
- [ ] Footer with Component Dock link

## Testing
- [ ] Write tests for SearchForm component
- [ ] Write tests for form field interactions
- [ ] Write tests for responsive behavior
- [ ] Verify 100% coverage

## Verification
- [ ] Run verify-app.sh seekquest
- [ ] Visual comparison with screenshot
- [ ] No ColorLib references in app code
- [ ] Commit and push
