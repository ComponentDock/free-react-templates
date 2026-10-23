# Shores — Implementation Tasks

## Template

- **Name:** Shores
- **Original:** Seelife (ColorLib)
- **Slug:** seelife
- **Category:** Charity
- **Preview:** https://preview.colorlib.com/theme/seelife/

## Design Notes

- Primary: #60bc0f (green), Secondary: #fdbb00 (yellow)
- Headings: Poppins 600, Body: Roboto 400
- Buttons: uppercase, square corners, 12px font
- Banner: dark image overlay, white text
- Sections: white bg, generous padding (130px top/bottom)
- Footer: 4-column layout, dark background

## Tasks

1. Scaffold app from cuddle template → rename to shores
2. Set up index.css theme tokens (green, yellow, Poppins, Roboto)
3. Implement Navbar component
4. Implement Hero component (banner + CTAs)
5. Implement Causes component (3 cards)
6. Implement About component (split layout)
7. Implement FeaturedCauses component (cards with progress)
8. Implement Events component (4 cards with countdown)
9. Implement Team component (4 members)
10. Implement CTA component (parallax banner)
11. Implement Blog component (3 story cards)
12. Implement Newsletter component (email form)
13. Implement Footer component (4 columns + CTA link)
14. Write tests for all components (100% coverage)
15. Run verify-app.sh gates

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/shores/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/shores/public/CNAME` = `shores.free.componentdock.com`
  and the package `homepage` = `https://shores.free.componentdock.com`.
