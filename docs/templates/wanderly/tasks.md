# Wanderly — Implementation Tasks

> **SHIPPED** — this prep's design shipped as `apps/wanderly`
> (<https://wanderly.free.componentdock.com>). The unchecked items below are
> prep history, not outstanding work.

## Scaffolding

- [x] Create apps/wanderly/ from driven scaffold
- [x] Set package.json, public/CNAME, index.html
- [x] Configure vite.config.ts with injectUiSource()
- [x] Configure vitest.config.ts

## Components (section order from ColorLib Martine)

- [ ] TopBar — destination links, social icons, phone
- [ ] Navbar — logo, nav links, dropdowns, Book Now button
- [ ] Banner — hero with gradient, title, subtitle, CTA
- [ ] BookingSection — tabs (Hotels/Flights/Places), form fields
- [ ] TopPlaces — 4 destination cards
- [ ] FeaturedEvent — event details card
- [ ] HotelList — 3 hotel/restaurant cards
- [ ] ClientReviews — testimonial carousel
- [ ] BestServices — 4 service items with icons
- [ ] Footer — destinations, newsletter, contact, social

## Tests

- [ ] Per-component test files (TDD)

## Verification

- [ ] scripts/verify-app.sh wanderly passes
- [ ] 100% coverage

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/wanderly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/wanderly/public/CNAME` = `wanderly.free.componentdock.com`
  and the package `homepage` = `https://wanderly.free.componentdock.com`.
