# Visage — Prep Notes

## Source
- ColorLib template: The Look
- Preview: https://preview.colorlib.com/theme/thelook/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/thelook-free-template.jpg
- New name: visage

## Section Build Order

1. **index.css** — Tailwind entry + @theme tokens (Lato, #081624, #222222, #f6f7f9, #5c5c5c, #828282, #c1c1c1)
2. **Header.tsx** — Logo left, 6 nav links right, sticky/fixed
3. **Hero.tsx** — Full-height section, background image with dark overlay, centered headline + subtitle + CTA button
4. **Gallery.tsx** — Two-column layout (left: quote + desc + 3 items; right: 3 items + see-all CTA)
5. **Blog.tsx** — Light gray bg, section title, 2 blog cards (thumbnail left, content right)
6. **Footer.tsx** — Dark bg, "Get in touch" heading + contact form (3 inputs + textarea + send button) + copyright
7. **App.tsx** — Compose all sections in order

## Fidelity Notes

### Header
- Horizontal nav, no hamburger in original (desktop-only design). Mobile: add hamburger menu for responsive.
- Logo is an image file — use placeholder or text "Visage".

### Hero
- Full viewport height (950px in original). Use `min-h-screen` or `h-[950px]`.
- Dark semi-transparent overlay on background image: `bg-black/50` or similar.
- Headline is large, bold, white, centered. Two-line break in original ("The Look\nGallery").
- Subtitle below: artist name + date range, smaller white text.
- CTA: transparent bg button with white text + arrow icon right. Hover inverts to white bg + dark text.

### Gallery
- Two-column grid: `grid grid-cols-2` or `grid md:grid-cols-2`.
- Left column: large blockquote (big font, dark text), paragraph text, 3 stacked items.
- Right column: 3 stacked items, then "see all galleries" CTA at bottom.
- Each gallery item: thumbnail image + title + "Artist: Name" + "view gallery" CTA link.
- Use picsum.photos for placeholder images.

### Blog
- Background: `bg-[#f6f7f9]`.
- Section title "Latest from the blog" — left-aligned.
- Blog cards: horizontal layout (thumbnail left ~30%, content right ~70%).
- Content: category badge (uppercase small text), h4 title, date, paragraph excerpt, "Read More" CTA.

### Footer
- Background: `bg-[#222222]`, text white.
- Two-column: left = heading + text, right = form.
- Form: 3 inputs in a row (Name, Email, Subject), textarea below, "send message" button.
- Button: white text, transparent bg, arrow icon.
- Copyright bar at bottom: link to Component Dock.

## Design Tokens Summary

```
Font: Lato (Google Fonts) — 300, 400, 700
Brand: #081624 (dark navy/black)
Body text: #5c5c5c
Muted text: #828282
Light text: #c1c1c1
Footer bg: #222222
Blog bg: #f6f7f9
White: #fff
```
