# Wordcraft — Implementation Notes

Source: ColorLib "Author" (https://colorlib.com/wp/template/author/)
Preview: https://preview.colorlib.com/theme/author/
New name: wordcraft

## Component Order (App.tsx)

1. Navbar
2. Hero
3. PartnerLogos
4. AboutBook
5. Counter
6. ChapterContents
7. Testimonials
8. BookGrid
9. AboutAuthor
10. Contact
11. Footer

## Section-by-Section Fidelity Notes

### Navbar
- Transparent on load, fixed white on scroll (use IntersectionObserver or scroll listener)
- Brand: "Wordcraft." (Raleway 900 26px, period in green #17b978)
- Nav links: Home, About, Chapter, Reviews, My Books, Author, Contact
- Green underline animation on hover (CSS transform scaleX)
- Mobile: hamburger menu, black background

### Hero
- Split layout: text left (40% width), illustration right (60%)
- Height: 750px
- Subheading: uppercase 14px Raleway bold green (#17b978), letter-spacing 2px
- H1: Raleway 900 60px
- Description: Open Sans 18px
- CTA button: pill (40px radius), green bg, white text, shadow
- Illustration: placeholder book/reading image (picsum.photos)
- White overlay on mobile

### PartnerLogos
- 5 placeholder grayscale images in a flex row
- Use picsum.photos with grayscale filter

### AboutBook
- 2-column: left = background image (full height), right = text
- No gutters (no-gutters row)
- 3 sub-headings: "Award achievements", "Read On Any Devices", "Very High Resolution"
- Each has a bold h4 and paragraph

### Counter
- Background image with dark overlay
- 4 stat cards: bg-light (#f5f4fb), centered
- Numbers: Raleway 700 34px, dark navy (#263b5e)
- Labels: 16px
- Stats: Copies Sold (1100), Copies Released (1200), Cup Of Coffee (340), Happy Readers (12000)

### ChapterContents
- Centered heading: "What's Inside The Book"
- 3-column sidebar + 9-column content
- Sidebar: sticky, 8 nav links (Title page, Copyright, Table of contents, Dedication, Foreword, Prologue, Epilogue, Epigraph)
- Content: 8 page cards (bg-light, 5px radius, 30px padding)
- Each page: heading (Raleway 700 30px) + paragraph
- Active link gets green underline (via IntersectionObserver or scroll spy)

### Testimonials
- Background image with green overlay (#17b978, opacity 0.8)
- White text throughout
- Carousel of testimony cards (implement as CSS carousel or simple state)
- Card: white bg, 4px radius, shadow, green quote icon circle (40px, #17b978)
- User image (80px circle), name (20px 500), position (16px #4d4d4d)

### BookGrid
- 4-column grid, 8 items
- Each: 330px height, background image, dark overlay on hover
- Text: title + genre label, appears on hover (opacity transition)
- Use picsum.photos for book covers

### AboutAuthor
- 2-column: left = author photo, right = bg-light (#f5f4fb) with padding
- Subheading "Know More About The Author"
- H2: author name
- Bio paragraph
- Info list: Name, DOB, Address, Zip, Email, Phone
- "View All Books" CTA button (green, pill)

### Contact
- Heading: "Contact Me"
- 4 info boxes: bg-light, green circular icon (100px, #17b978), label + text
- Below: 2-column — form (right) + map placeholder (left)
- Form: name, email, subject, textarea, "Send Message" button (pill)
- Map: just a placeholder div

### Footer
- Black bg (#000000)
- 4 columns: About (text + social icons), Links, Services, "Have a Questions?"
- Social: Twitter, Facebook, Instagram (circle bg rgba(255,255,255,0.1))
- Copyright: links to Component Dock

## Design Token Summary for index.css @theme

```
--color-brand: #17b978;
--color-heading: #263b5e;
--color-body: #6a7695;
--color-nav: #051441;
--color-bg-light: #f5f4fb;
--color-footer: #000000;
--font-body: "Open Sans", sans-serif;
--font-heading: "Raleway", sans-serif;
--radius-btn: 40px;
--radius-card: 4px;
```

## Placeholder Images

- Hero illustration: https://picsum.photos/seed/wordcraft-hero/800/600
- About book bg: https://picsum.photos/seed/wordcraft-about/600/800
- Partner logos: https://picsum.photos/seed/wordcraft-partner-{1-5}/200/80
- Chapter page bg: https://picsum.photos/seed/wordcraft-chapter/600/400
- Testimonial bg: https://picsum.photos/seed/wordcraft-testi/1400/400
- Testimonial avatars: https://picsum.photos/seed/wordcraft-avatar-{1-3}/80/80
- Book covers: https://picsum.photos/seed/wordcraft-book-{1-8}/400/330
- Author photo: https://picsum.photos/seed/wordcraft-author/600/800
- Contact map: https://picsum.photos/seed/wordcraft-map/600/500
