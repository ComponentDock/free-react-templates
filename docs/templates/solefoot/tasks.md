# Solefoot — Implementation Tasks

## Setup
- [ ] Create `apps/solefoot/` by copying simplest existing app
- [ ] Rename package to `@free-react-templates/solefoot`
- [ ] Create `public/CNAME` with `solefoot.free.componentdock.com`
- [ ] Set `homepage` in `package.json` to `https://solefoot.free.componentdock.com`
- [ ] Run `npm install` at repo root to register workspace in lockfile

## Components
- [ ] `src/components/Hero.tsx` — centered heading "Footer #04", white bg
- [ ] `src/components/FooterColumns.tsx` — 4-column grid wrapper
- [ ] `src/components/BrandColumn.tsx` — brand name, description, "read more" link
- [ ] `src/components/CategoryColumn.tsx` — "Categories" heading + list of 4 links
- [ ] `src/components/TagCloudColumn.tsx` — "Tag cloud" heading + 8 tag links
- [ ] `src/components/SubscribeColumn.tsx` — "Subscribe" heading, email input, submit button, "Follow us" heading, 3 social icons
- [ ] `src/components/CopyrightBar.tsx` — copyright text, Terms/Privacy/Compliances links
- [ ] `src/App.tsx` — compose all sections
- [ ] `src/main.tsx` — entry point
- [ ] `src/index.css` — Tailwind entry + theme tokens (`--color-accent: #f7b633; --color-footer-bg: #272727; ...`)

## Styling
- [ ] Load "Nunito Sans" from Google Fonts in `index.html`
- [ ] Set footer background `#272727`, copyright bar `#1a1a1a`
- [ ] Headings: 13px, uppercase, letter-spacing 1px, font-weight 600, color `#fff`
- [ ] Body text in footer: `rgba(255, 255, 255, 0.3)`
- [ ] List links: `rgba(255, 255, 255, 0.7)`
- [ ] Copyright links: `rgba(255, 255, 255, 0.5)`
- [ ] All interactive links: accent color `#f7b633`
- [ ] Submit button: 52x52px, gold `#f7b633` bg, no border-radius
- [ ] Input: transparent bg `rgba(255, 255, 255, 0.05)`, no border
- [ ] Social icons: 40x40px, 4px radius, `1px solid rgba(255, 255, 255, 0.1)`
- [ ] Tag cloud: uppercase, 4px 10px padding, 4px radius, 11px font
- [ ] Footer: 4-col grid (25% each on lg), 15px gutter
- [ ] Hero: generous vertical padding (12em), centered text

## Footer Attribution
- [ ] Footer MUST link `https://www.componentdock.com/` (branded "Component Dock")

## Tests (TDD)
- [ ] Hero renders heading
- [ ] FooterColumns renders 4 columns on desktop
- [ ] BrandColumn shows name, description, read-more link
- [ ] CategoryColumn shows heading + 4 links
- [ ] TagCloudColumn shows heading + 8 tag links
- [ ] SubscribeColumn shows form + social icons
- [ ] CopyrightBar shows copyright text + legal links
- [ ] ComponentDock link present in footer

## Verification
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] Build succeeds
