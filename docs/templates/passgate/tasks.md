# Passgate — Tasks

## Spec

- [x] Write spec: `openspec/specs/template-passgate/spec.md`

## Implementation

- [ ] Scaffold `apps/passgate/` (copy passcraft, rename)
- [ ] Write `index.css` design tokens
- [ ] Write `index.html` with Google Fonts
- [ ] Implement `HeroSection` component
- [ ] Implement `LoginCard` component
- [ ] Implement `Footer` component
- [ ] Compose `App.tsx`

## Tests

- [ ] `App.test.tsx` — renders form, footer, title
- [ ] `HeroSection.test.tsx` — renders image, aria-label, hidden on mobile
- [ ] `LoginCard.test.tsx` — fields, checkbox, submit, accessibility
- [ ] `Footer.test.tsx` — link, target

## Verification

- [ ] `scripts/verify-app.sh passgate` passes
- [ ] `npm run spec:validate` passes

## Bookkeeping

- [ ] `TEMPLATES.md` [x] + surge URL
- [ ] `package.json` homepage set
- [ ] `public/CNAME` created
- [ ] `npm run readme:status`

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/passgate/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/passgate/public/CNAME` = `passgate.free.componentdock.com`
  and the package `homepage` = `https://passgate.free.componentdock.com`.
