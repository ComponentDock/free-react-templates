# Sidebarium — Implementation Todo

## Source
- ColorLib: Bootstrap Sidebar 05
- Slug: bootstrap-sidebar-05
- Preview: https://preview.colorlib.com/theme/bootstrap-sidebar-05/ (404 at prep time)
- Screenshot: bootstrap-sidebar-170635.jpg (TEMPLATES.md)

## Structure (section order, top → bottom)

### Sidebar (fixed left, 250px, full height, royal blue #4361ee)
1. Logo area — "Portfolic" white bold + "Portfolio Agency" lighter blue subtitle
2. Navigation — 7 items vertically: Home, About, Works, Blog, Gallery, Services, Contacts
   - Each item: lucide icon prefix + white text link
   - Hover/active: brighten or underline
3. Newsletter — "Subscribe for newsletter" heading + email input (darker blue #3451c7 bg)
4. Copyright footer — "Copyright ©2019 All rights reserved" white ~12px

### Main Content (white, fills remaining width)
1. Heading — large bold dark text (e.g. "Sidebar #05" → replace with portfolio-appropriate heading)
2. Body text — grey paragraphs with lorem ipsum or portfolio description

### Responsive (≤768px)
- Sidebar collapses/hides; hamburger toggle visible
- Hamburger click toggles sidebar overlay/drawer

## Design Notes

- No imagery/photos — pure nav + text layout
- No gradients, shadows, rounded corners — flat clean aesthetic
- Fonts: Poppins (Google Fonts) weights 400/500/600/700
- Icons: lucide-react (House, User, Briefcase, PenTool, Image, Settings, Mail)
- Newsletter: mock submit (no backend), functional email input
- Footer: Component Dock attribution link

## Fidelity Notes

- Source "Portfolic" is a ColorLib brand artifact — keep as-is for fidelity
  (provenance lives in spec, not in app code comments)
- Source "Sidebar #05" heading is a ColorLib artifact — replace with a
  portfolio-appropriate heading for the recreation
- Copyright year 2019 is from the source — can be updated to current year
- Sidebar width 250px estimated from screenshot; may need adjustment
- Color #4361ee estimated from screenshot (preview was 404)
- Newsletter form: source likely submits to nothing; mock is fine
- No dark mode in source — skip dark mode toggle for fidelity
