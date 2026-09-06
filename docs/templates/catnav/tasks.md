# Catnav — Design Notes & Implementation Tasks

## Source
- ColorLib: Dropdown 20 (slug: `dropdown-20`)
- Preview: https://preview.colorlib.com/theme/bootstrap/dropdown-20/
- Category: Dropdown Navigation Snippet

## Structure Order (Section-by-Section)

1. **Page wrapper** — centered content area with `7rem` vertical padding
2. **Heading** — "Dropdown #8" text centered (we'll rename to something generic)
3. **Dropdown toggle** — "Menu" text + down-arrow icon, centered
4. **Dropdown menu** (shown/hidden via state):
   a. Section heading: "Help & Feedback"
   b. Item: Getting started (dashboard icon)
   c. Item: Help center (mail icon, orange badge "3")
   d. Item: Contact us (people icon)
   e. HR divider
   f. Section heading: "About"
   g. Item: Blog (comment icon)
   h. Item: Privacy (lock icon)
   i. Item: Security (shield icon)
   j. Item: Terms of service (list icon)

## Fidelity Notes

- **Fonts:** Roboto loaded via Google Fonts (weights 300, 400, 700)
- **Icons:** Material Design style — use `lucide-react` equivalents:
  - dashboard → LayoutDashboard
  - mail_outline → Mail
  - people → Users
  - comment → MessageSquare
  - lock_outline → Lock
  - security → Shield
  - featured_play_list → List
  - arrow_down → ChevronDown
- **Colors:** Body #efefef, text #b3b3b3, menu bg #fff, hover #f8f9fa, badge orange #fd7e14
- **Shape:** Square corners (border-radius: 0) on the dropdown menu
- **Animation:** CSS transition .3s ease on opacity + margin-top for open/close
- **Shadow:** `0 15px 30px 0 rgba(0,0,0,0.2)` on the dropdown menu
- **Badge:** Right-aligned, absolute positioned, orange bg, white text, 4px radius

## Tasks

- [ ] Create `apps/catnav/` workspace (copy simplest existing app)
- [ ] Rename package to `@free-react-templates/catnav`
- [ ] Set up Tailwind v4 + theme tokens in `index.css`
- [ ] Create `Navbar.tsx` component with dropdown toggle
- [ ] Create `DropdownMenu.tsx` component with open/close state
- [ ] Create `DropdownItem.tsx` component (icon + label + optional badge)
- [ ] Create `SectionHeading.tsx` component
- [ ] Create `App.tsx` composing the page layout
- [ ] Implement CSS transitions for open/close animation
- [ ] Add aria attributes for accessibility
- [ ] Write tests (100% coverage) before implementation
- [ ] Verify: typecheck + lint + test:coverage + build pass
