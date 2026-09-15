# GreenCause — Implementation Tasks

Source: ColorLib Seelife (https://preview.colorlib.com/theme/seelife/)
New name: greencause
Category: Charity / Nonprofit

## Task outline

### 1. Scaffold
- [ ] Copy simplest existing app as base (e.g. `apps/amity`)
- [ ] Rename package to `@free-react-templates/greencause`
- [ ] Update `public/CNAME` to `greencause.free.componentdock.com`
- [ ] Update `homepage` in `package.json`
- [ ] Run `npm install` at repo root for lockfile registration

### 2. Theme tokens (`src/index.css`)
- [ ] Set `@theme` with brand colors: `--color-brand: #60bc0f`, `--color-accent: #fdbb00`
- [ ] Set `--color-footer: #091b27`, `--color-footer-bottom: #071721`
- [ ] Import Poppins + Roboto via Google Fonts in `index.html`

### 3. Components (build order)
- [ ] `Navbar.tsx` — absolute navbar, logo, nav links, hamburger
- [ ] `Hero.tsx` — dark overlay bg image, yellow accent, heading, 2 CTAs
- [ ] `Causes.tsx` — 3-column icon cards (Give Donation, Give Inspiration, Become Volunteer)
- [ ] `About.tsx` — 2-col: left image, right content + Learn more button
- [ ] `FeaturedCauses.tsx` — 3-col cards with image, raised/goal, donor count, donate btn
- [ ] `Events.tsx` — 2-col event cards with countdown timer
- [ ] `Team.tsx` — 4-col volunteer cards with social icons
- [ ] `CtaBanner.tsx` — green bg + dark overlay, heading, yellow rounded CTA
- [ ] `Stories.tsx` — 3-col blog cards with date/category meta
- [ ] `Footer.tsx` — 4-col dark footer: mission, links, gallery, contact + copyright bar

### 4. App composition (`src/App.tsx`)
- [ ] Compose all sections in order
- [ ] Ensure responsive layout (mobile stacked)

### 5. Tests (Vitest + RTL)
- [ ] Each component: render, content, interactive elements
- [ ] Countdown timer logic test
- [ ] 100% coverage gate

### 6. Deploy prep
- [ ] `scripts/verify-app.sh greencause` passes
- [ ] Commit: `feat: add GreenCause (ColorLib Seelife) template`
- [ ] PR, merge, surge deploy
