# DesignBolt — Implementation Notes

Source: ColorLib Boxus (https://colorlib.com/wp/template/boxus/)
Preview: https://preview.colorlib.com/theme/boxus/

## Section order (matches original 1:1)

1. **Navbar** — fixed top, dark purple (#221C5A), white uppercase Roboto 13px links
2. **Hero** — full-viewport dark purple bg with image overlay, centered logo + Montserrat 56px headline + PT Serif 22px subtitle
3. **Services** — green (#32DB8A) title block (left-aligned) + 4 service cards (icon + title + description)
4. **Portfolio** — orange (#FFBA42) title block (right-aligned) + masonry grid + pink load-more bar
5. **About** — pink (#E74C78) title block (left-aligned) + team member cards (image + name + position + bio)
6. **News** — pink title block (right-aligned) + numbered blog list + "View All Posts" link
7. **Video** — orange title block (left-aligned) + video thumbnail with play button
8. **Skills** — green title block (right-aligned) + progress bars
9. **Contact** — pink title block (left-aligned) + form (name, email, subject, message) + outline submit button
10. **Footer** — dark purple, social icons (FB, Twitter, Behance, Dribbble, RSS), copyright, Component Dock link

## Section title block pattern

Every content section has a colored square block containing:
- A large faded number (e.g. "01", "02") — lighter shade of the block color
- The section title in white Montserrat uppercase

The block color alternates: green → orange → pink → pink → orange → green → pink

## Component structure

```
src/
  App.tsx
  components/
    Navbar.tsx          — fixed nav, hamburger on mobile
    Hero.tsx            — full-height hero with bg image
    Services.tsx        — 4-card grid with icons
    Portfolio.tsx       — masonry grid with hover overlay + load-more
    About.tsx           — team member cards
    News.tsx            — numbered blog list
    VideoSection.tsx    — video thumbnail + play button
    Skills.tsx          — progress bars
    Contact.tsx         — form with validation
    Footer.tsx          — social links + copyright + ComponentDock link
    SectionTitleBlock.tsx — reusable colored title block (color, number, title props)
```

## Design notes

- **Color palette:** Deep indigo (#221C5A) is the dominant dark. Accent colors cycle: green (#32DB8A), orange (#FFBA42), pink (#E74C78). Text is near-white on dark, dark (#23214c) on light content areas.
- **Section title blocks:** The signature design element — a large colored square positioned to the left or right, containing a huge faded number and the section name. In React, use a fixed-width div with absolute positioning for the number.
- **Portfolio grid:** Masonry layout with 2 columns (400px each in 800px container). Items have hover overlays that slide in. Use CSS grid or a masonry approach.
- **Contact button:** Outline style — transparent bg, 2px solid pink border, fills on hover.
- **Background images:** All sections have subtle background images over the dark purple. Use `picsum.photos` placeholders with appropriate dimensions.
- **Fonts:** Load Roboto (300, 400, 700), Montserrat (400, 700), PT Serif (400) from Google Fonts.
- **Responsive:** Hamburger menu on mobile, single-column layout, section title blocks above content.
