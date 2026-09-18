# GiveHeart — Implementation Notes

**Source:** ColorLib "Charity" (https://colorlib.com/wp/template/charity/)
**Preview:** https://preview.colorlib.com/theme/charity/
**New name:** giveheart
**App folder:** apps/giveheart

## Section order (top to bottom)

1. Navbar — black bg, site name, nav links, golden Donate CTA, hamburger mobile
2. Hero — fullscreen bg image, "Donate" heading, subtitle, golden CTA button
3. Service Intro — 3-item golden bar at hero bottom (wallet, heart, graduation cap)
4. Causes — "Most Popular Causes", 3 cards with progress bars, raised/goal
5. Donors — "Latest Donations", dark bg overlay, 4 circular-avatar donor cards
6. Testimonials — "What People Say", golden bg, carousel of quote cards
7. Success Stories — 50/50 split: image left, dark text right
8. News/About/Gallery — 3-column: news list, about w/ image, gallery carousel
9. Footer — 3-column black bg: about+social, contact info, donation CTA
10. Copyright bar — dark, copyright text, back-to-top, Component Dock link

## Design tokens (from preview CSS)

| Token               | Value                    | Usage                                  |
|---------------------|--------------------------|----------------------------------------|
| brand-primary       | #FDBE34                  | CTA buttons, progress bars, links      |
| brand-green         | #01c632                  | Money/donation amounts                 |
| body-bg             | #fff                     | Page background                        |
| text-color          | #637381                  | Body text                              |
| heading-color       | #000                     | Headings                               |
| dark-bg             | #000                     | Navbar, footer, dark sections          |
| dark-card-bg        | #1a1919                  | Success stories right panel            |
| border-color        | #e6e5e5                  | Card borders, progress track           |
| section-padding     | 4em 0                    | Between sections                       |
| font-body           | Lato 300                 | Body text                              |
| font-heading        | Montserrat 400/700/900   | Headings, hero                         |
| button-radius       | 0 (square)               | All buttons                            |
| progress-radius     | 10px                     | Progress bar fill and track            |
| donor-avatar-radius | 50% (circle)             | Donor/testimonial avatars              |

## Fidelity notes

- Hero uses a dark background image with zoom-out CSS animation. Use a
  picsum.photos seed for the hero image.
- Service intro bar is absolute-positioned at hero bottom on desktop, relative
  on mobile.
- Cause cards: image on top, white inner card with progress bar, amounts in
  green, "Donate Now!" black button.
- Donors: white card with circular avatar, hover lift effect (-10px top + shadow).
- Testimony: white card with circular photo (white border), centered blockquote.
- Success Stories: full-width split, left = image, right = dark bg (#1a1919)
  with white text and golden CTA.
- Footer: black bg, 3 columns, copyright bar below with dark (#1a1919) bg.
- No ColorLib references in app code — provenance only in spec + TEMPLATES.md.
- Footer MUST link https://www.componentdock.com/ (Component Dock).
