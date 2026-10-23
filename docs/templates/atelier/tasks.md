# Atelier — Task Outline

## Source

- ColorLib "Design": https://colorlib.com/wp/template/design/
- Preview: https://preview.colorlib.com/theme/design/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/design-free-template.jpg

## Sections to implement

1. Navbar (sticky, mobile hamburger)
2. Hero (2-col split with image + quote overlay)
3. Achievements (4-col stats)
4. How It Works (3 steps with connectors)
5. Services (2-col split with checklist)
6. Testimonial (carousel)
7. Blog (5-col card grid)
8. Footer (about + socials + nav columns + copyright)

## Design tokens extracted

- Primary: #1264fa (blue)
- Body: #000839 (dark navy)
- Font: Montserrat (Google Fonts)
- Buttons: pill shape (border-radius 30px)
- Section padding: 70px vertical

## Dependencies

- packages/ui (cn, Button)
- lucide-react (icons)
- picsum.photos (placeholder images)
- Google Fonts (Montserrat)

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/atelier/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/atelier/public/CNAME` = `atelier.free.componentdock.com`
  and the package `homepage` = `https://atelier.free.componentdock.com`.
