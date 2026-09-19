# CourseKit — Design Notes

Recreation of ColorLib Course (https://colorlib.com/wp/template/course/).
Preview: https://preview.colorlib.com/theme/course/

## Section structure (top → bottom)

1. **Header** — flex row: logo (image + "coursekit" text), nav links (home, about us, courses, elements, news, contact), phone icon + number, hamburger for mobile overlay
2. **Hero Slider** — 3-slide carousel, full-width bg image per slide, centered h1 "Get your Education today!" with "Education" accented, prev/next arrow nav
3. **Hero Boxes** — 3-column row overlaying hero bottom: "Online Courses", "Our Library", "Our Teachers". Dark bg #1a1a1a, hover → gold #ffb606. Each has SVG icon + title + "view more" link
4. **Popular Courses** — Section title "Popular Courses". 3-col grid of course cards: image top, card body (title link + description), footer (author avatar + name + price badge)
5. **Register + Search** — 50/50 split. Left: gold #ffb606 bg, centered register CTA + paragraph + dark button. Right: search form over bg image (Course Name, Category, Degree inputs + submit)
6. **Services** — Section title "Our Services". 3×2 grid: icon container + h3 + paragraph per item
7. **Testimonials** — Dark #1a1a1a bg + parallax image (27% opacity). Slider: quote mark, text, user avatar, name, title
8. **Events** — Section title "Upcoming Events". 3 items: gold-bordered date box (day+month), event content (name, location, description), event image. Alternating layout
9. **Footer** — Dark #1a1a1a bg. Newsletter (title + email input + gold subscribe btn, bottom border). 4-col content (About, Menu, Useful Links, Contact). Copyright bar + social icons

## Design fidelity notes

- Brand color is `#ffb606` (golden yellow). Use as primary in `@theme`.
- Dark color is `#1a1a1a` — used for header, hero boxes, testimonials bg, footer.
- Fonts: Open Sans (headings/nav/buttons) + Roboto (body text). Load via Google Fonts.
- Buttons are rectangular (no border-radius). Register button: dark bg, white text.
  Newsletter button: gold bg, white text. Hover: box-shadow elevation.
- Hero boxes: dark bg #1a1a1a, hover transitions to gold #ffb606.
- Event date boxes: 131×131px, gold border, centered day number + month.
- Testimonials: dark bg with parallax background image at 27% opacity.
- Hero and testimonials use carousels. Use embla-carousel-react or similar
  instead of OwlCarousel.
- Register + Search is a split 50/50 layout (row-eq-height).
- Newsletter: email input + gold submit button, bottom border separator.
- Responsive: hamburger menu on mobile (fullscreen overlay),
  single-column stacking for grids.
