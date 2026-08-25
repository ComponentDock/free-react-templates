# Eduford — Design Notes & Implementation Todo

**Source:** ColorLib Universityedu (https://preview.colorlib.com/theme/universityedu/)
**New name:** eduford
**Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Section Order (must match 1:1)

1. Header (promo bar + countdown + sticky nav)
2. Hero Slider (full-width bg + dark overlay + heading + CTA)
3. About (2-col: image | text, warm peach bg)
4. Programs (centered title + 2-card grid)
5. Essential Resources (split: green left + image right)
6. Top Stories (3-col card grid)
7. Partners (centered title + logo carousel)
8. CTA Split (image left | green bg right + white text)
9. Footer (4-col + newsletter + Component Dock link)

## Component Mapping

| Section    | Component file   | Notes                                                 |
| ---------- | ---------------- | ----------------------------------------------------- |
| Header     | `Header.tsx`     | TopBar (promo + countdown) + NavBar (sticky)          |
| Hero       | `Hero.tsx`       | Full-width bg img, dark overlay, left-aligned content |
| About      | `About.tsx`      | 2-col grid, warm peach bg (#FCF2EB)                   |
| Programs   | `Programs.tsx`   | Centered heading + 2 program cards                    |
| Resources  | `Resources.tsx`  | Split layout: green bg left + image right             |
| TopStories | `TopStories.tsx` | 3-col card grid                                       |
| Partners   | `Partners.tsx`   | Logo carousel (use picsum for placeholders)           |
| CtaSplit   | `CtaSplit.tsx`   | Green bg right, image left, white text                |
| Footer     | `Footer.tsx`     | 4-col + newsletter form + social links                |

## Fidelity Notes

### Header

- Top bar: white bg, centered promo text ("ENDS TOMORROW: ..."), countdown timer (days/hours/min/sec), "Learn More" link.
- Nav bar: sticky, white bg, logo left, links center, phone + social right. Links: Home, About, Programs, Blog (with dropdown), Contact.
- Mobile: hamburger menu, top bar hidden on small screens.

### Hero

- Full-width background image with dark overlay (opacity ~0.6).
- Left-aligned content in col-xxl-6: tagline span, h1 heading, paragraph, green CTA button.
- Green CTA: bg #007A5C, white text, no border-radius, padding 11px 20px.
- Tagline: uppercase, small text. Heading: uppercase, weight 900.

### About

- Background: warm peach #FCF2EB (`.section-bg`).
- Left column: image (rounded corners or straight, use picsum).
- Right column: h2 heading (weight 900, uppercase), two body paragraphs, "Learn More" link (green underline style).

### Programs

- White background.
- Centered section title "Programs we Offer" + subtitle.
- 2-column grid: each card has image on top, title below, description, "Learn More" link.
- Cards: image fills width, title is h3 link, description is gray text.

### Essential Resources (Gallery split)

- LEFT: dark green bg (#007A5C), white text. Title "Essential resources". Three items, each expandable with arrow icon (ti-angle-right). Items: First year students, Tuition & fees, International students.
- RIGHT: full-height image.
- Layout: flexbox, left side ~55%, right side ~45%.

### Top Stories

- Full-width fluid container (`container-fluid`).
- Header: "Top Stories" h2 + "More Stories" green link aligned right.
- 3-column grid: each card has image on top, centered title (h3) below. Cards have light shadow.

### Partners

- White background.
- Centered title "Our Partners" + subtitle.
- Logo carousel: 4-6 placeholder logos (use picsum or solid color blocks).

### CTA Split

- FULL-WIDTH split: left = image (50%), right = green bg (#007A5C) with white text.
- Right content: heading "TRUSTED BY OVER 6000+ STUDENTS" (uppercase, weight 900), two paragraphs, "Join Now" white link.
- Layout: flexbox, equal columns.

### Footer

- Light blue-gray bg (#F1FBFF).
- 5 columns: logo, Quick Links, Programs, Resources, Newsletter.
- Newsletter: email input + submit button.
- Bottom: copyright text, social links.
- MUST include Component Dock link.

## Implementation TODO

- [ ] Scaffold app from simplest existing app (copy + rename)
- [ ] Set up index.css with Tailwind @theme tokens (Chivo font, brand green, accent red)
- [ ] Implement Header (TopBar + NavBar with sticky)
- [ ] Implement Hero (full-width bg + overlay + content)
- [ ] Implement About (2-col + peach bg)
- [ ] Implement Programs (2-card grid)
- [ ] Implement Resources (split green/image layout)
- [ ] Implement TopStories (3-col cards)
- [ ] Implement Partners (logo carousel)
- [ ] Implement CtaSplit (green split layout)
- [ ] Implement Footer (4-col + newsletter + Component Dock)
- [ ] Wire up App.tsx composing all sections
- [ ] Write tests for every component (100% coverage)
- [ ] Set up public/CNAME + homepage
- [ ] Run verify-app.sh
- [ ] Commit, push, open PR, merge
