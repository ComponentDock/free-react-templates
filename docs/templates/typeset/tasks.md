# Typeset — Tasks & Design Notes

Source: ColorLib Author — https://preview.colorlib.com/theme/author/

## Section build order

1. **index.html** — Add Google Fonts link for Raleway (400–900) + Open Sans (400, 600, 700)
2. **src/index.css** — Tailwind theme tokens: brand green #17b978, light bg #f5f4fb, dark text #000, navy #263b5e
3. **src/App.tsx** — Compose all sections in order (Navbar → Hero → Partners → AboutBook → Counter → Chapter → Services → Testimonials → Projects → AuthorBio → Contact → Footer)
4. **src/components/Navbar.tsx** — Dark transparent navbar, brand "Typeset" with green dot, 7 anchor links, mobile hamburger
5. **src/components/Hero.tsx** — Full-height (750px) split: left 40% text (subheading, h1, paragraph, pill CTA button), right 60% illustration placeholder
6. **src/components/Partners.tsx** — Row of 5 placeholder partner logos (grayscale)
7. **src/components/AboutBook.tsx** — Split: left background image, right "About The Book" heading + description + 3 feature sub-headings (Award achievements, Read On Any Devices, Very High Resolution)
8. **src/components/Counter.tsx** — Dark bg image with 4 stat cards on #f5f4fb: Copies Sold (1100), Copies Released (1200), Cup Of Coffee (340), Happy Readers (12000). Animate on scroll.
9. **src/components/Chapter.tsx** — "What's Inside The Book" + sticky left nav (8 chapters) + right content pages (Title Page, Copyright, Table of Contents, Dedication, Foreword, Prologue, Epilogue, Epigraph) on light bg cards
10. **src/components/Services.tsx** — 3 service cards: Experience, Marketing Goals, Targeting Vision. Icon (lucide-react) + h3 + green underline + description. Hover turns green.
11. **src/components/Testimonials.tsx** — Green overlay bg (#17b978 at 0.8), "Kind Words From Customers" heading, carousel of 3 testimony cards (quote icon, text, avatar, name, position)
12. **src/components/Projects.tsx** — "My Other Books" heading, 2×4 grid of book cover cards (330px height), overlay reveals title + genre on hover
13. **src/components/AuthorBio.tsx** — Split: left portrait image, right light bg card with subheading, author name h2, bio, info list (Name, DOB, Address, Zip, Email, Phone), "View All Books" pill button
14. **src/components/Contact.tsx** — "Contact Me" heading + description, 4 info cards (Address, Phone, Email, Website), two-column: form (Name, Email, Subject, Message, Send) + map placeholder
15. **src/components/Footer.tsx** — Black bg, 4 columns (About + social, Links, Services, Questions), copyright + Component Dock link

## Fidelity notes

- **Hero:** Split layout — text on left (40%), illustration on right (60%). White bg with subtle overlay on mobile. Subheading is uppercase green (#17b978), h1 is 60px/900 weight. CTA button is pill-shaped (border-radius 40px), green bg, white text, uppercase, letter-spacing 2px.
- **Navbar:** Dark mode (navbar-dark), transparent bg that becomes solid on scroll. Brand has a green dot after the name. Active nav link gets green color + green underline bar.
- **Partners:** Simple row of 5 grayscale logos. Use placeholder SVGs or text logos. Section has generous padding (4em).
- **About Book:** Two-column no-gutters layout. Left: full-height background image with overlay. Right: heading + paragraphs + feature sub-headings (h4, bold).
- **Counter:** Background image with dark overlay. 4 cards on light bg (#f5f4fb), centered text with large bold number + label below. Numbers should animate (count up on scroll into view).
- **Chapter:** Sticky left nav (position: sticky, top: 180px) with bold chapter links. Active chapter gets green color + green bar (::after pseudo-element). Right side: 8 content cards with 5px border-radius, 30px padding, light bg. Each card has a bold heading + paragraph.
- **Services:** 3-column grid. Each card has large icon (60px, green color), h3 title with green underline (:after, 30px wide, 1px height), description paragraph. Cards have transparent bg, turn green on hover.
- **Testimonials:** Full-width section with bg image + green overlay (80% opacity). Testimony cards: white bg, 4px border-radius, subtle box-shadow. Green circle icon (40px, positioned -20px top). User avatar (80px circle). Name bold, position muted.
- **Projects/Books:** 2×4 grid of book cover cards. Each 330px height with background image. Overlay fades in on hover (0 → 0.5 opacity), text fades in (0 → 1). Text: white h3 title + uppercase genre tag (12px, letter-spacing 2px).
- **Author Bio:** Split layout like About Book. Left: portrait image. Right: light bg (#f5f4fb) card with subheading, h2 name, bio paragraph, info list (bold labels, regular values), green pill button "View All Books".
- **Contact:** 4 info cards on light bg (icon + h3 + text). Below: form (white bg, 52px height inputs, 5px border-radius) + map placeholder. Send button is green pill.
- **Footer:** Black bg (#000000), 4 columns, 7em padding. Social icons (Twitter, Facebook, Instagram). Must link Component Dock.
- **Fonts:** Raleway for headings/nav (weights 400–900), Open Sans for body (weights 400, 600, 700). Load via Google Fonts link in index.html.
- **Colors:** Primary green #17b978 is the only accent. Everything else is black/white/light gray. Very clean, minimal palette.
- **No border-radius** on most elements except buttons (40px pill), testimony cards (4px), chapter pages (5px), and avatars (50%).
