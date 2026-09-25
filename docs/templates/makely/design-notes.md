# Makely — Design Notes

## Source Template

- **ColorLib name:** Create
- **Slug:** create
- **Preview URL:** https://preview.colorlib.com/theme/create/
- **Category:** Creative agency / business landing page

## Design Tokens (extracted from preview CSS)

| Token         | Value     | Usage                                                |
| ------------- | --------- | ---------------------------------------------------- |
| Primary       | #32dbc6   | Headings, buttons, check icons, links, active states |
| Text body     | #4d4d4d   | Body copy                                            |
| Text headings | #000      | Section headings, logo                               |
| Footer bg     | #333333   | Dark footer background                               |
| Border        | #edf0f5   | Subtle borders, section dividers                     |
| Button radius | 30px      | Pill-shaped buttons                                  |
| Font family   | Quicksand | All text (headings + body)                           |
| Check icon    | #32dbc6   | Teal checkmarks in feature lists                     |

## Section Order

1. TopBar (dark, phone/email + social)
2. Navbar (white, sticky, logo + nav + hamburger)
3. Hero (bg image, typed text, CTA button)
4. Features (3 numbered columns with checklists)
5. Gallery (6-item image grid with overlays)
6. AboutDark (black bg, image + 4 service items)
7. Testimonials (quotes + avatars)
8. Services (6 cards with icons)
9. About (image + text + 2 features)
10. Team (3 members with photos)
11. Blog (3 post cards)
12. Contact (form + address)
13. CTA (teal banner)
14. Footer (dark, about/features/social/newsletter/copyright)

## Key Design Decisions

- Typed text animation simplified to static text (React doesn't need typed.js)
- Testimonials rendered statically (no carousel library needed)
- Social icons use lucide-react (Facebook, Twitter, Instagram, LinkedIn)
- All placeholder images use picsum.photos with seeded URLs
- Pill-shaped buttons throughout (rounded-full or rounded-[30px])
- Footer links to Component Dock instead of ColorLib attribution
