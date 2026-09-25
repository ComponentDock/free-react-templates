# ArtBox — Tasks & Design Notes

Source: ColorLib Boxus — https://preview.colorlib.com/theme/boxus/

## Section build order

1. **index.html** — Add Google Fonts link for Montserrat + PT Serif
2. **src/index.css** — Tailwind theme tokens: brand pink #e54b76, dark bg #221C5A, accent colors
3. **src/App.tsx** — Compose all sections in order
4. **src/components/Navbar.tsx** — Fixed top nav, 8 anchor links, mobile hamburger
5. **src/components/Hero.tsx** — Full-viewport dark purple bg, diagonal image overlay, centered logo frame, headline, subtext
6. **src/components/Services.tsx** — Section 01, left title, right carousel of service cards (icon + title + desc), 2 slides × 4 cards
7. **src/components/Portfolio.tsx** — Section 02, right title, masonry grid, hover overlay (type + category + title), LOAD MORE button
8. **src/components/About.tsx** — Section 03 "CRAFTERS", left title, 2-col (about text + timeline), image carousel, team member carousel
9. **src/components/Blog.tsx** — Section 04 "STORIES", right title, 4 numbered blog entries, GO TO BLOG link, testimonial carousel
10. **src/components/Video.tsx** — Section 05 "OFFER", left title, 2-col text + timeline, video thumbnail + play popup, feature icon carousel
11. **src/components/Skills.tsx** — Section 06 "EXPERTISE", right title, description, 4 animated progress bars
12. **src/components/Contact.tsx** — Section 07, left title, 2-col (text + form), Google Maps iframe
13. **src/components/Footer.tsx** — Copyright + social icons + Component Dock link

## Fidelity notes

- **Hero:** Dark purple (#221C5A) background with diagonal image overlay (use CSS clip-path or skew transform). White logo in a square border frame.
- **Section titles:** Numbered indicators (01–07) in a small box, alternating left/right alignment. Title uses Montserrat bold.
- **Services:** Horizontal carousel with prev/next arrows. Each card: icon image + uppercase title + description paragraph. 4 cards per visible slide.
- **Portfolio:** CSS Grid masonry (2 columns, mixed heights). Hover reveals overlay with icon, category text, and project title.
- **About/Timeline:** Year markers in brand pink (#e54b76), descriptions in muted purple (#727190). Below: image carousel + team member carousel.
- **Blog:** Numbered entries (01–04) with author name and category tag. Below: testimonial slider with quote text + author name in uppercase.
- **Video:** Thumbnail image with centered play button (SVG). Below: horizontal icon carousel with labels.
- **Skills:** Progress bars with colored fills and percentage labels. Each bar uses a unique accent color (green, gold, pink, blue).
- **Contact:** Two-column layout. Left: description with pink accent text. Right: form with 4 fields + SEND button. Below: full-width map embed.
- **Footer:** Simple single-line: copyright + social icon links (use lucide-react icons). Must link Component Dock.
- **Fonts:** Montserrat for headings/nav, PT Serif for body text.
- **No border-radius** — all elements use sharp/square edges.
- **Dark sections:** Hero and possibly intro use dark bg. Services/Portfolio/About/Blog/Skills use white or light bg.
