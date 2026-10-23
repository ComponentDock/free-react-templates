# BoxPulse — Design Notes & Implementation Outline

Source: ColorLib Boxus
Preview: https://preview.colorlib.com/theme/boxus/
Category: One Page — Creative Digital Agency

## Section order (top to bottom)

1. Navbar (fixed)
2. Hero — full-width dark bg, centered content
3. Services (01) — white bg, split layout (title left, content right)
4. Portfolio (02) — dark bg, split layout, project grid
5. About / Crafters (03) — white bg, split layout, timeline + team cards
6. News / Stories (04) — dark bg, split layout, blog cards + testimonials
7. Video / Offer (05) — white bg, split layout, video placeholder + features
8. Skills / Expertise (06) — dark bg, split layout, progress bars
9. Contact (07) — white bg, split layout, form + info
10. Footer — dark bg, centered

## Fidelity notes

### Layout pattern
Every section (except navbar/footer) follows the same split layout:
- Left side: large section number (01-07) + section title (uppercase)
- Right side: section content
- This creates a consistent visual rhythm across the page

### Color alternation
- Odd sections (01 Services, 03 Crafters, 05 Offer, 07 Contact): white background
- Even sections (02 Portfolio, 04 Stories, 06 Expertise): dark #221C5A background
- Hero and footer: dark #221C5A background

### Typography
- Montserrat: headings, nav links, section numbers, service titles (uppercase, letter-spacing)
- Roboto: body text, descriptions
- PT Serif: testimonial quotes, blog excerpts
- Large section numbers use very large font-size (100-180px) as decorative elements

### Services section
- Horizontal carousel/slider with prev/next arrows
- Each slide: icon (top) + title (uppercase) + description
- Two rows of 4 services each (total 8)

### Portfolio section
- 2x2 grid of project cards
- Each card: image + category label overlay + title
- "LOAD MORE" button centered below grid

### About section
- Timeline with 5 entries, each with year range + short text
- 3 team member cards below timeline
- Each card: photo + name + role + description

### News section
- 4 blog post cards, each numbered (01-04)
- Each card: number + author name + category tag + excerpt
- "GO TO BLOG" button
- 3 testimonial quotes below, using PT Serif font

### Video section
- Video placeholder (dark area)
- 6 feature items in a row below, each with icon + title

### Skills section
- 4 horizontal progress bars
- Each bar: label + percentage + colored fill (yellow #FFBA42)
- HTML 81%, CSS 93%, PSD 72%, Design 99%

### Contact section
- Two contact info items (text blocks)
- Form: Name, Email, Subject, Message textarea + Submit

### Footer
- Simple dark bar
- Copyright text
- "Made with Component Dock" link

## Key design tokens (for Tailwind @theme)

```css
@theme {
  --color-brand-dark: #221C5A;
  --color-brand-pink: #E74C78;
  --color-brand-green: #32DB8A;
  --color-brand-yellow: #FFBA42;
  --color-text-primary: #191919;
  --color-text-muted: #5B5881;
  --color-text-light: #8E8DA9;
  --font-heading: 'Montserrat', sans-serif;
  --font-body: 'Roboto', sans-serif;
  --font-accent: 'PT Serif', serif;
}
```

## Placeholder images

Use picsum.photos with seed "boxpulse-N":
- Hero logo: https://picsum.photos/seed/boxpulse-logo/200/60
- Service icons: use lucide-react icons instead
- Portfolio items: https://picsum.photos/seed/boxpulse-port-N/400/300
- Team photos: https://picsum.photos/seed/boxpulse-team-N/200/200
