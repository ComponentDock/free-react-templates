# Subforge — Implementation Notes

## Template overview
- ColorLib source: Modal 13 (`modal-13`)
- Category: Modal / Popup — subscription form with dual CTAs
- New name: `subforge`
- Preview: https://preview.colorlib.com/theme/bootstrap/modal-13/

## Design notes

### Layout structure
Single-page modal popup. Page has a full-viewport container with a centered
"Launch modal" button (secondary/gray style). Clicking opens a centered modal
with a solid light pink background (no image overlay like Modal 12).

### Modal structure (top to bottom)
1. **Close button row**: top-right aligned, black X icon
2. **Logo section**: centered, 70px wide icon (Instagram-style)
3. **Heading**: "Exclusives offer from Instagram" (h3, 22px, black #000)
4. **Description paragraph**: gray (#777), light weight
5. **Email form**:
   - Full-width email input with placeholder "Enter your email address"
   - Input has subtle shadow: 0 2px 2px 0 rgba(0,0,0,0.1)
   - 2-column button row below:
     - Left: "No, thanks" button (Bootstrap secondary, full-width)
     - Right: "Subscribe" button (Bootstrap primary, full-width)
6. **Footer text**: small gray text below the form

### Color palette
- Modal background: #f9eaf2 (light pink/rose)
- Text on modal: varies — heading #000, paragraph #777, links #fff
- Close button: #000
- Button primary: Bootstrap primary blue (#007bff)
- Button secondary: Bootstrap secondary gray (#6c757d)
- Cancel/link hover: #fff
- Body page text: #b3b3b3

### Typography
- All text: "Roboto" (300, 400) — same as Modal 12
- Heading h3: 22px, black
- Paragraph: Roboto 300 weight, #777

### Key CSS values
- Modal border-radius: 7px
- Button border-radius: 4px
- Modal shadow: 0 10px 50px -10px rgba(0,0,0,0.9)
- Logo image: 70px width
- Form input shadow: 0 2px 2px 0 rgba(0,0,0,0.1)

### Key differences from Modal 12 (Leadgate)
- Solid pink background (#f9eaf2) instead of background image + overlay
- Black heading and close button (not white)
- Gray paragraph text (#777, not white)
- Two action buttons ("No, thanks" + "Subscribe") instead of inline form
- Larger centered logo (70px vs 30px)
- Form input has subtle shadow

## Implementation tasks

1. [ ] Create `apps/subforge/` — copy simplest existing modal app
2. [ ] Set up `package.json` with `@free-react-templates/subforge`
3. [ ] Create `src/App.tsx` — launch button + modal state
4. [ ] Create `src/components/Modal.tsx` — centered modal, pink bg
5. [ ] Create `src/components/ModalHeader.tsx` — close button (top-right)
6. [ ] Create `src/components/ModalBody.tsx` — logo, heading, desc, form, buttons
7. [ ] Create `src/index.css` — Tailwind + theme tokens (Roboto, #f9eaf2, etc.)
8. [ ] Use placeholder icon (lucide-react) for Instagram-style logo
9. [ ] Implement open/close: button click, close icon, "No, thanks", Escape
10. [ ] Implement focus trap + return focus on close
11. [ ] Responsive: modal width on mobile, button layout
12. [ ] Write tests (Vitest + Testing Library) — cover all Gherkin scenarios
13. [ ] Verify 100% coverage
14. [ ] Add `public/CNAME` → `subforge.free.componentdock.com`
15. [ ] Footer: link to https://www.componentdock.com/
16. [ ] No ColorLib references in app code
17. [ ] `npm install` at repo root to register workspace
18. [ ] Run `scripts/verify-app.sh subforge`

## Fidelity notes
- Match section order exactly: button page → modal content
- Match modal border-radius (7px), button radius (4px)
- Match solid pink background (#f9eaf2) — NO overlay, NO background image
- Match logo at 70px width, centered
- Match dual-button layout (2-column row)
- Match form input shadow and focus behavior
- Use lucide-react for close icon and Instagram-style logo
- Replicate the exact heading and copy text
