# Podwave — Implementation Tasks

> **SHIPPED** — this prep's design shipped as `apps/podwave`
> (<https://podwave.free.componentdock.com>). The unchecked items below are
> prep history, not outstanding work.

Recreation of ColorLib "Podca" (podcast template)

## Setup

- [x] Create app scaffold (copy from flux, rename package)
- [x] Configure vite.config.ts with injectUiSource()
- [x] Add index.html with Poppins font
- [x] Configure index.css with brand tokens
- [x] Configure vitest.config.ts
- [x] Register workspace in package-lock.json

## Components

- [ ] Navbar — transparent header, white text, logo, nav links, mobile hamburger
- [ ] Hero — bg image, featured episode, audio player, CTA
- [ ] RecentPodcasts — episode list with images, audio, pagination
- [ ] BehindTheMic — team grid with social links
- [ ] Subscribe — email form over bg image
- [ ] Footer — dark bg, about, menu, social, newsletter, copyright

## Tests

- [ ] Navbar.test.tsx
- [ ] Hero.test.tsx
- [ ] RecentPodcasts.test.tsx
- [ ] BehindTheMic.test.tsx
- [ ] Subscribe.test.tsx
- [ ] Footer.test.tsx
- [ ] App.test.tsx

## Verification

- [ ] Typecheck passes
- [ ] Lint passes
- [ ] 100% coverage
- [ ] Build succeeds
- [ ] spec:validate passes

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/podwave/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/podwave/public/CNAME` = `podwave.free.componentdock.com`
  and the package `homepage` = `https://podwave.free.componentdock.com`.
