# Propvale — Implementation Tasks

Source: ColorLib "Real Estate 2" (https://colorlib.com/wp/template/real-estate-2/)

## Scaffold

- [ ] Create `apps/propvale/` from `apps/driven/` template
- [ ] Rename package to `@free-react-templates/propvale`
- [ ] Set homepage to `https://propvale.free.componentdock.com`
- [ ] Create `public/CNAME` with `propvale.free.componentdock.com`
- [ ] Configure vite.config.ts with injectUiSource()
- [ ] Add Google Fonts (Poppins + Roboto) to index.html

## Components

- [ ] TopBar — dark navy bg, contact info, social icons
- [ ] Navbar — sticky, logo, nav links, Add Property button
- [ ] Hero — background image, heading, subtitle, search form
- [ ] PopularProperties — 6 property cards in 3-col grid
- [ ] FAQ — accordion with 3-4 items
- [ ] Counter — 3 stats on dark bg
- [ ] Testimonials — carousel with quotes
- [ ] Team — 4 agent cards
- [ ] CTA — orange gradient, heading, button
- [ ] Footer — 4 columns, newsletter, Component Dock link

## Tests

- [ ] All component tests at 100% coverage
- [ ] App.test.tsx for full render

## Verification

- [ ] `bash scripts/verify-app.sh propvale` passes
- [ ] `npm run spec:validate` passes
- [ ] PR created and merged
- [ ] Bookkeeping (TEMPLATES.md [x], readme:status)
