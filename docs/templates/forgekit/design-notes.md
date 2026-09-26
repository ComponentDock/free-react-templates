# ForgeKit — Design Notes & Task Outline

Source: ColorLib "Create" — https://colorlib.com/wp/template/create/
Preview: https://preview.colorlib.com/theme/create/
Spec: openspec/specs/template-forgekit/spec.md

## Structure Order (section-by-section)

| # | Component              | Notes                                                                                           |
|---|------------------------|-------------------------------------------------------------------------------------------------|
| 1 | TopBar                 | Dark bar: phone + email left, social icons right. Simple flex row.                              |
| 2 | Navbar                 | White sticky, brand "ForgeKit." with teal period, 6 nav links. Hamburger on mobile.             |
| 3 | Hero                   | Full-width bg image + dark overlay, centered headline with typed-text effect, pill CTA button.  |
| 4 | ServicesOverview       | 3-column cards: large faded number (01/02/03), teal heading, description, checkmark list.        |
| 5 | PortfolioGallery       | "Our Works" heading, 3×2 image grid with hover overlay (title + category). Use lightbox links.  |
| 6 | FeatureStrip           | Black bg full-width: image left, 2×2 features right (icon + title + desc + Read More).          |
| 7 | Testimonials           | Carousel: quote blocks, circular author photo, author name.                                     |
| 8 | OurServices            | 3×2 grid: icon + title + description + "Learn More" per service card.                            |
| 9 | AboutUs                | Two-col: left = heading + desc + 2 specialty cards; right = portrait image.                     |
|10 | OurTeam                | 3-member cards: circular photo, name, position, bio, social icon row.                           |
|11 | Blog                   | 3-card row: featured image, title, meta (author/date/category), excerpt, "Continue Reading".    |
|12 | Contact                | bg-light section: left form (5 fields + Send button), right sidebar (address/phone/email).      |
|13 | CTABanner              | Full-width teal bg-primary strip with "Let's Get Started" heading.                               |
|14 | Footer                 | Dark #333: About blurb, Features links, social icons, newsletter form, copyright → ComponentDock.|

## Design Token Extraction (from style.css)

- Brand: `#32dbc6` (Bootstrap `primary`)
- Body text: `#4d4d4d`
- Headings: `#000`
- Font: `Quicksand` via Google Fonts (300,400,500,700,900)
- Button radius: `30px` (pill)
- Input radius: `30px` (pill)
- Footer bg: `#333`
- Top bar bg: `#25262a` (dark)
- Light bg sections: `#f4f5f9`
- Section padding: `2.5em 0` mobile / `5em 0` desktop
- Body line-height: `1.7`

## Implementation Notes

- Use `https://picsum.photos/seed/forgekit-<n>/<w>/<h>` for all placeholder images
- Hero typed-text effect: implement with a simple rotating word array + interval
- Testimonial carousel: can use a simple state-based carousel (no external dep)
- Portfolio hover overlay: CSS `opacity` transition on group hover
- Feature strip: dark bg with white text, use lucide-react icons
- Contact form: basic controlled inputs with useState (no zod needed for static demo)
- Footer copyright: link to https://www.componentdock.com/ as "Component Dock"

## Fidelity Priorities

1. Exact section order matching the preview
2. Brand color `#32dbc6` on all accents (headings, links, buttons, checkmarks, form focus)
3. Quicksand font on headings
4. Pill buttons everywhere (border-radius 30px)
5. Dark feature strip and dark footer
6. Circular team member photos
7. Testimonial carousel with author photos
