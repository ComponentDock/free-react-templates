# Communique — Implementation Notes

## Source Mapping

| Field           | Value                                                  |
| --------------- | ------------------------------------------------------ |
| ColorLib source | Modal 07                                               |
| Source slug     | `modal-07`                                             |
| Preview URL     | https://preview.colorlib.com/theme/bootstrap/modal-07/ |
| New name        | `communique`                                           |
| App path        | `apps/communique`                                      |
| Spec            | `openspec/specs/template-communique/spec.md`           |

## Section Order (fidelity)

1. **Landing page** — Centered section with "Communique" heading + "Launch Modal" button
2. **Modal dialog** — Two-column layout:
   - Left panel: full-height background image (business/lifestyle photo)
   - Right panel (olive #afa939 background): "Booking an Appointment" subheading, "Free Consultation" heading, contact form (name, email, subject, message), "Send Message" button
3. **Footer** — Component Dock link

## Design Notes

### Colors

- Primary brand: `#afa939` (olive/yellow-green) — used for right panel background, button hover
- Secondary: `#2b2b28` (dark charcoal) — submit button background
- Text on olive: `rgba(255,255,255,0.8)` (80% white)
- Form input bg: `rgba(255,255,255,0.05)` (5% white)
- Placeholder: `rgba(255,255,255,0.4)` (40% white)
- Close button: `rgba(0,0,0,0.1)` background, white X icon

### Typography

- Body: Poppins (300–900) — via Google Fonts
- Subheading: bold, white
- Heading: bold, h3, white
- Form inputs: 14px, white text

### Layout

- Modal max-width: 950px (wider than other modals)
- Border-radius: 0 (sharp corners)
- Shadow: `0px 10px 34px -15px rgba(0,0,0,0.24)`
- Two-column: left col-md-6 (image), right col-md-6 (form), no gutters
- Mobile: stacks vertically, image panel height 300px

### Form Elements

- 4 fields: Full Name, Email address, Subject, Message (textarea 4 rows)
- Inputs: no border, semi-transparent white background, white text
- Submit button: dark charcoal (#2b2b28), rounded, 52px height
- Form has no action (submission prevented)

### Close Button

- Absolute positioned top-right of modal content
- X icon (ionicons ion-ios-close pattern)
- 40x40px, semi-transparent dark background, white icon

## Task Outline

1. [ ] Scaffold `apps/communique` from simplest existing modal app (overlay)
2. [ ] Rename package to `@free-react-templates/communique`
3. [ ] Add `public/CNAME` with `communique.free.componentdock.com`
4. [ ] Set `homepage` in `package.json`
5. [ ] Install dependencies (`npm install` at root for lockfile)
6. [ ] Create `src/index.css` with Tailwind v4.3 `@source` + brand tokens (#afa939, #2b2b28)
7. [ ] Create `src/App.tsx` composing Landing + Modal + Footer sections
8. [ ] Create `src/components/Landing.tsx` — heading + launch button
9. [ ] Create `src/components/CommuniqueModal.tsx` — two-column modal with image left, olive form right
10. [ ] Create `src/components/Footer.tsx` — Component Dock link
11. [ ] Create `src/components/Navbar.tsx` — dark mode toggle
12. [ ] Write tests for each component (Vitest + Testing Library)
13. [ ] Verify 100% coverage: `npm run test:coverage`
14. [ ] Verify build: `npm run build`
15. [ ] Commit as `docs: prep Communique (ColorLib Modal 07) spec + research`
