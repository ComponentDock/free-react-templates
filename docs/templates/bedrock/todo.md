# Bedrock — Implementation Tasks & Design Notes

## Source
- ColorLib: Bootstrap Footer 05
- Slug: `bootstrap-footer-05`
- Preview: https://preview.colorlib.com/theme/bft/bootstrap-footer-05/
- Category: Footer Component (not a full-page template)

## New Name
- `bedrock` — construction foundation theme, follows pedestal/baseplate/groundwork lineage

## Tasks

### 1. Scaffold App
- [ ] Copy simplest existing footer app as base (e.g. `apps/groundwork`)
- [ ] Rename package to `@free-react-templates/bedrock`
- [ ] Update `public/CNAME` to `bedrock.free.componentdock.com`
- [ ] Update `homepage` in `package.json` to `https://bedrock.free.componentdock.com`
- [ ] Run `npm install` at repo root to register workspace in lockfile

### 2. Design Tokens (index.css / @theme)
- [ ] `--color-brand: #3e64ff` (blue — logo, hover states)
- [ ] `--color-footer-bg: #fff` (white background)
- [ ] `--color-footer-border: #efefef` (top border)
- [ ] `--color-link: #777` (nav link default)
- [ ] `--color-link-hover: #3e64ff` (nav link hover)
- [ ] `--color-input-bg: #e6e6e6` (email input background)
- [ ] `--color-placeholder: #b3b3b3` (input placeholder)
- [ ] `--color-social-bg: #e6e6e6` (social icon circle background)
- [ ] `--color-social-icon: #333` (social icon text)
- [ ] `--color-social-hover: #3e64ff` (social icon hover)
- [ ] `--color-copyright: #777` (copyright text)
- [ ] Font: Poppins (Google Fonts link in index.html)

### 3. Components

#### SubscribeForm.tsx
- [ ] Email input: gray bg (#e6e6e6), 45px height, border: none, placeholder "Enter your email"
- [ ] Submit button: absolutely positioned, rotated arrow icon (lucide-react ArrowLeft rotated 180°), no bg/border
- [ ] Form submits with basic email validation

#### NavLinks.tsx (horizontal)
- [ ] Inline horizontal nav links: Features, Blog, Pricing, Services
- [ ] Gray (#777) default, blue (#3e64ff) hover
- [ ] .3s all ease transition

#### SocialIcons.tsx
- [ ] 4 circular icon buttons (40×40px, rounded-full)
- [ ] Gray (#e6e6e6) background, dark (#333) icon
- [ ] Blue (#3e64ff) on hover
- [ ] Icons: Twitter, Instagram, Facebook, Pinterest (lucide-react)

#### FooterTopRow.tsx
- [ ] 3-column layout: SubscribeForm | NavLinks (centered) | SocialIcons (right)

#### SiteLogo.tsx
- [ ] Large bold text: "Bedrock", 30px, font-weight 900, color #3e64ff
- [ ] Centered in its column

#### SecondaryNav.tsx (horizontal)
- [ ] Inline horizontal links: Terms, About, Privacy, Contact
- [ ] Same style as NavLinks

#### Copyright.tsx
- [ ] Small muted text: "© 2025. All Rights Reserved."
- [ ] Right-aligned

#### FooterBottomRow.tsx
- [ ] 3-column layout: SecondaryNav (left) | SiteLogo (center, order-1 on lg) | Copyright (right)

#### Footer.tsx (main)
- [ ] White bg, 4rem vertical padding, 1px top border (#efefef)
- [ ] Contains FooterTopRow + border separator + FooterBottomRow

#### App.tsx
- [ ] Content area: light bg, centered "Footer #5" heading (demo placeholder, 70vh)
- [ ] Footer component below

### 4. Tests (Vitest + Testing Library)
- [ ] Footer.test.tsx — renders all sections, correct structure
- [ ] SubscribeForm.test.tsx — input renders, placeholder text, form submit
- [ ] SocialIcons.test.tsx — 4 icons render, correct links
- [ ] NavLinks.test.tsx — 4 nav items render
- [ ] SiteLogo.test.tsx — renders brand text
- [ ] Copyright.test.tsx — renders copyright text
- [ ] Coverage: 100% lines/functions/branches/statements

### 5. Build & Deploy
- [ ] `npm run build` succeeds
- [ ] `scripts/verify-app.sh bedrock` passes
- [ ] Surge deploy URL: `bedrock.free.componentdock.com`

## Fidelity Notes

### Section order (from preview HTML)
1. Content placeholder area (demo only — 70vh light bg with "Footer #5" heading)
2. Footer main section:
   - Top row: Subscribe form (left) | Nav links (center) | Social icons (right)
   - Bottom row: Secondary nav (left) | Site logo (center) | Copyright (right)

### Visual design (from screenshot + CSS analysis)
- Light/white footer — clean, minimal aesthetic
- Blue brand accent (#3e64ff) — used for logo, all hover states
- Circular social icons (40×40px, gray bg) — distinctive design element
- Email subscription input — flat gray bg, no border, integrated submit button
- Two horizontal separator lines: top border (#efefef) and border-bottom on subscribe row
- Font: Poppins (body uses Roboto, but footer overrides to Poppins)

### Differences from original
- New name: "bedrock" instead of "Bootstrap Footer 05"
- "Colorlib" logo text replaced with "Bedrock"
- Copyright year updated to 2025
- Footer links to https://www.componentdock.com/ (Component Dock branding)
- Placeholder images via picsum.photos (if needed for demo content)
- Icons via lucide-react instead of IcoMoon icon font
