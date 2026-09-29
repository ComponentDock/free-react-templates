# Sidekick — Design Notes & Implementation Guide

## Source

- ColorLib: Bootstrap Sidebar 06
- Slug: `bootstrap-sidebar-06`
- Preview URL: https://preview.colorlib.com/theme/bootstrap-sidebar-06/ (404 at prep time)
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-sidebar-170649.jpg

## Structure order (top to bottom, sidebar)

1. Logo + brand subtitle
2. Vertical navigation (6 items with icon prefixes)
3. Newsletter subscription form (email input + heading)
4. Copyright footer text

## Structure order (main content area)

1. Large heading (h1)
2. Body text paragraphs (lorem ipsum in original)
3. Generous padding (~40px)

## Section-by-section fidelity notes

### Sidebar (dark navy `#1a1f36`)
- Fixed position, full viewport height, 280px wide
- No border-radius, no shadow — flat edges
- Logo: "Sidekick" in white bold ~24px at top
- Subtitle: "Sidebar Navigation" in muted blue `#7c8ab8` ~14px
- Nav items: 6 vertical items with lucide-react icon prefixes
  - Home (House), About (User), Services (Briefcase),
    Portfolio (Image), Blog (PenTool), Contact (Mail)
  - White text, ~16px, ~16px vertical spacing between items
  - Hover: brighten text or subtle background highlight
- Newsletter: "Subscribe for newsletter" white bold ~16px heading
  - Email input: darker background `#141829`, placeholder "Enter Email Address"
  - Input padding: 12px 16px, border-radius: 4px
- Copyright: white text, opacity 0.8, ~12px at bottom

### Main content area
- White `#ffffff` background
- h1 heading: ~32px, bold, dark text `#222`
- Body paragraphs: grey `#666`, line-height ~1.6
- Padding: ~40px all sides
- No imagery, no cards — pure text layout

### Responsive behavior
- At ≤768px: sidebar collapses/hides off-screen
- Hamburger toggle icon visible (white, three horizontal lines)
- Click hamburger → sidebar slides in from left (overlay)
- Content fills full viewport width when sidebar hidden

## Typography
- Font: Poppins (Google Fonts), weights 400/500/600/700
- Base size: 16px
- No custom @font-face — Google Fonts link in index.html

## Color tokens (estimated — preview was 404)
- Sidebar background: `#1a1f36` (dark navy)
- Sidebar input bg: `#141829` (darker navy)
- Subtitle color: `#7c8ab8` (muted blue)
- Page background: `#ffffff`
- Heading text: `#222`
- Body text: `#666`
- Nav/footer text: `#ffffff`

## Key implementation notes

- Copy structure from `sidebarium` (Bootstrap Sidebar 05) as starting point
- Change sidebar background from royal blue `#4361ee` → dark navy `#1a1f36`
- Change input background from `#3451c7` → `#141829`
- Adjust subtitle color from `#7eb8ff` → `#7c8ab8`
- Sidebar width: 280px (vs 250px in sidebarium)
- Nav items: 6 (Home, About, Services, Portfolio, Blog, Contact) vs 7 in sidebarium
- Use picsum.photos for any placeholder images (though this template is text-only)
- No ColorLib references in any app file — provenance only in spec + TEMPLATES.md
- Footer MUST link https://www.componentdock.com/ branded as "Component Dock"

## Component outline

```
apps/sidekick/
  src/
    main.tsx              — entry point (excluded from coverage)
    App.tsx               — composes Sidebar + MainContent
    components/
      Sidebar.tsx         — fixed sidebar container (logo, nav, newsletter, footer)
      SidebarLogo.tsx     — logo wordmark + subtitle
      SidebarNav.tsx      — vertical navigation with icon-prefixed links
      SidebarNewsletter.tsx — email subscription form
      SidebarFooter.tsx   — copyright notice
      MainContent.tsx     — heading + body text area
      HamburgerToggle.tsx — mobile toggle button
    index.css             — Tailwind entry + theme tokens
    test/
      setup.ts            — jest-dom import
```

## TODO

- [ ] Write Sidebar.tsx (container + layout)
- [ ] Write SidebarLogo.tsx (logo + subtitle)
- [ ] Write SidebarNav.tsx (6 nav items with icons)
- [ ] Write SidebarNewsletter.tsx (email form)
- [ ] Write SidebarFooter.tsx (copyright)
- [ ] Write MainContent.tsx (heading + paragraphs)
- [ ] Write HamburgerToggle.tsx (responsive toggle)
- [ ] Write App.tsx (compose all sections)
- [ ] Write index.css (Tailwind + theme tokens)
- [ ] Write tests for all components (100% coverage)
- [ ] Verify: typecheck + lint + test:coverage + build
- [ ] Push to main, update TEMPLATES.md
