# Pixelera — Design Notes (replication of ColorLib Boxus)

## Source

- ColorLib slug: `boxus`
- Preview: https://preview.colorlib.com/theme/boxus/
- Category: Creative Digital Agency, one-page

## Section order (matches original 1:1)

1. **Hero** (`#home`, class `intro-page`) — Centered logo + big headline + subtitle
2. **Services** (`#services`, section 01) — Left green title box + right content: image slider + 8 service items
3. **Portfolio** (`#portfolio`, section 02) — Right green title box + left masonry grid (4 items + load more)
4. **About** (`#about`, section 03) — Left green title box + right content: 2-col text + timeline + image slider + team carousel
5. **News** (`#news`, section 04) — Right green title box + left blog list (4 articles)
6. **Video** (`#video`, section 05) — Left green title box + right content: 2-col text + timeline + video popup + icon carousel
7. **Skills** (`#skills`, section 06) — Right green title box + left progress bars (4 skills)
8. **Contact** (`#contact`, section 07) — Left green title box + right content: 2-col text + form + map
9. **Footer** — Deep purple bg, copyright + social icons

## Component breakdown

| Component | Source section | Notes |
| --- | --- | --- |
| `Navbar.tsx` | `#header-main-menu` | Fixed top, deep purple (#221C5A), white text, 8 nav links, smooth scroll |
| `Hero.tsx` | `#home` | Centered layout, big headline with pink span, subtitle text |
| `Services.tsx` | `#services` | Section title box (left) + image slider + 8 service cards |
| `Portfolio.tsx` | `#portfolio` | Section title box (right) + masonry grid + hover overlays + load more |
| `About.tsx` | `#about` | Section title box (left) + 2-col layout + timeline + image carousel + team slider |
| `News.tsx` | `#news` | Section title box (right) + 4 blog article items with numbered badges |
| `Video.tsx` | `#video` | Section title box (left) + 2-col text + video popup + icon carousel |
| `Skills.tsx` | `#skills` | Section title box (right) + 4 animated progress bars |
| `Contact.tsx` | `#contact` | Section title box (left) + 2-col (text + form) + map embed |
| `Footer.tsx` | `<footer>` | Deep purple bg, copyright text, social icons (Twitter, Behance, Dribbble, FB, RSS) |
| `SectionTitleBox.tsx` | Shared pattern | Reusable: green box (370x370), large number, vertical title text. Props: number, title, side (left/right) |

## Key design details

- **Section title boxes** are the signature visual element: 370x370px green (#32DB8A) squares with a large translucent number (Montserrat 180px, color #55B286, offset left by -64px) and a vertically-rotated white title (Montserrat 109px, uppercase, -3px letter-spacing).
- **Alternating layout**: odd sections (01, 03, 05, 07) title box left + content right; even sections (02, 04, 06) title box right + content left.
- **Content max-width**: 1170px centered.
- **Buttons**: no border-radius, 2px solid #e54b76, text #e54b76, hover fills solid pink with white text.
- **Progress bars**: animated width, colored fills matching skill category (green/amber/pink/blue).
- **Fonts**: Google Fonts — Roboto (body 400, 16px/26px) and Montserrat (headings 700).
- **Images**: use `https://picsum.photos/seed/pixelera-<n>/<w>/<h>` for placeholders.
- **Icons**: use `lucide-react` instead of Font Awesome.

## Section title box implementation note

The original uses absolute positioning with fixed dimensions (370x370). For the React recreation:
- Use a `SectionTitleBox` component with `side: 'left' | 'right'` prop
- Flexbox layout instead of float; the title box is a fixed-width flex item
- The large number uses negative margin to create the overlapping effect
- Consider responsive: on mobile, title boxes should stack above content at full width

## Footer note

Replace Colorlib attribution with "Component Dock" link (https://www.componentdock.com/).
Keep social icons but use lucide-react equivalents.
