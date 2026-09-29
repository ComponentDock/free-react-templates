# Siderail — Implementation Tasks & Design Notes

## Source mapping
- **ColorLib source:** Bootstrap Sidebar 03
- **Source URL:** https://colorlib.com/wp/template/bootstrap-sidebar-03/
- **Preview URL:** https://preview.colorlib.com/theme/bootstrap-sidebar-03/ (404 at prep time)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-sidebar-170625.jpg
- **New name:** siderail (apps/siderail, @free-react-templates/siderail)

## Task checklist

### 1. Project scaffolding
- [ ] Copy simplest existing sidebar app (e.g. apps/sidecraft) as base
- [ ] Rename package to `@free-react-templates/siderail`
- [ ] Update `public/CNAME` to `siderail.free.componentdock.com`
- [ ] Update `package.json` homepage to `https://siderail.free.componentdock.com`
- [ ] Run `npm install` at repo root to register workspace in lockfile

### 2. Design tokens (src/index.css)
- [ ] Set `@theme` brand color: `--color-brand: #1a73e8`
- [ ] Set `--color-brand-dark: #1464cc` (hover state)
- [ ] Set `--color-sidebar-bg: #1a73e8` (sidebar background)
- [ ] Set `--color-sidebar-text: #ffffff`
- [ ] Set `--color-content-bg: #ffffff`
- [ ] Set `--color-heading: #26282b`
- [ ] Set `--color-body: #555555`
- [ ] Set `--color-nav-inactive: #d6d6d6`
- [ ] Import Google Font: Poppins (400, 600, 700)

### 3. Component structure (src/components/)
- [ ] `Sidebar.tsx` — Fixed left sidebar (~270px)
  - Logo text "Siderail" (white, bold, large)
  - Nav links: Home (active), About, Pages, Portfolio, Contact
  - Dropdown arrows on Home and Pages
  - Separator lines between nav items
  - Newsletter section: heading + email input + subscribe button
  - Copyright footer with ComponentDock link
- [ ] `HamburgerToggle.tsx` — Circular blue button at sidebar/content boundary
  - Blue bg (#1a73e8), white hamburger icon
  - onClick toggles sidebar visibility
- [ ] `MainContent.tsx` — Content area to the right of sidebar
  - Large bold heading
  - Body text paragraphs (line-height 1.8)

### 4. App.tsx composition
- [ ] Render Sidebar (fixed left)
- [ ] Render HamburgerToggle (absolute positioned at boundary)
- [ ] Render MainContent (remaining width)
- [ ] Mobile state: sidebar hidden by default, toggled by hamburger

### 5. Responsive behavior
- [ ] Desktop (>768px): sidebar always visible, hamburger hidden
- [ ] Mobile (<768px): sidebar hidden, hamburger visible, slide-in animation

### 6. Tests (100% coverage)
- [ ] Sidebar renders logo, nav links, newsletter, copyright
- [ ] Active nav link is visually distinct
- [ ] Hamburger toggles sidebar visibility
- [ ] Responsive breakpoint behavior
- [ ] Newsletter form renders with correct placeholder
- [ ] ComponentDock link in footer

### 7. Build & verification
- [ ] `npm run verify:app siderail` passes
- [ ] No ColorLib references in app code
- [ ] README status updated

## Design notes

### Layout structure
The template uses a fixed left sidebar layout. The sidebar occupies ~270px on
the left side of the viewport, with the main content area filling the remaining
width. On mobile (<768px), the sidebar collapses and a hamburger toggle button
appears to show/hide it with a slide-in animation from the left.

### Sidebar hierarchy (top to bottom)
1. Logo "Siderail" — white, bold, ~24px font
2. Navigation links — stacked vertically, ~16px, with dropdown arrows
3. Separator line
4. Newsletter subscription — heading + input + button
5. Copyright text — small, muted, with ComponentDock link

### Color scheme
Blue (#1a73e8) is the dominant brand color, used for the sidebar background,
hamburger button, and active states. White text on the blue sidebar provides
contrast. The main content area is white with dark text (#26282b headings,
#555555 body).

### Fidelity notes
- Preview was unreachable (404) — design derived from ColorLib page CSS tokens
  and the known Bootstrap Sidebar series pattern
- The sidebar series (01–07) all share the same structural pattern but differ
  in color scheme and sidebar content
- Sidebar 03's blue accent (#1a73e8) distinguishes it from Sidebar 01 (orange
  #f5a623) and Sidebar 02 (purple #6C4AB6)
- Newsletter form is static (no backend integration)
- Copyright text references are replaced with ComponentDock branding
