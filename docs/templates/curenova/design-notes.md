# CureNova — Design Notes

## Source Analysis

**ColorLib Healthcare** — Full medical center landing page

- Preview: https://preview.colorlib.com/theme/healthcare/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/healthcare-free-template.jpg

## CSS Tokens Extracted

```css
font-family: 'Poppins', Arial, sans-serif;
body {
  color: #666666;
  background: #fff;
}
h1-h6 {
  color: #000;
}
a {
  color: #3c97e8;
}
::selection {
  background: #3c97e8;
  color: #fff;
}
.btn-primary {
  background: #3c97e8;
}
.icon-circle {
  background: #9bdf46;
}
nav.dark-bg {
  background: #282e34;
}
```

## Section Layout

| #   | Section      | Type            | Notes                                            |
| --- | ------------ | --------------- | ------------------------------------------------ |
| 1   | Navbar       | Sticky nav      | Logo + phone + location + menu links             |
| 2   | Hero         | Slider          | Full-width bg images, dark overlay, centered CTA |
| 3   | Counters     | 4-col grid      | Animated numbers, dark bg overlay                |
| 4   | Services     | Complex grid    | 5 icon + 2 image + 1 heading cells               |
| 5   | About        | Split           | Image right, accordion left                      |
| 6   | Features     | Split           | Bg image left, 2x2 features right                |
| 7   | Doctors      | Carousel → grid | 3 doctor cards with actions                      |
| 8   | Testimonials | Carousel → grid | Quote + stars + avatar                           |
| 9   | Blog         | 3-col grid      | Image + meta + excerpt                           |
| 10  | Footer       | 5-col           | Info + nav + form + Component Dock               |

## Implementation Decisions

- **Hero:** Single static hero (no carousel JS — keep simple)
- **Services grid:** CSS Grid with spanning cells for the complex layout
- **Doctors:** Static 3-column grid (no carousel)
- **Testimonials:** Static grid (no carousel)
- **Counters:** Simple static display (no animation library needed)
- **Accordion:** React state-driven expand/collapse
- **Font:** Google Fonts Poppins via `<link>` in index.html
