# Speakly — Implementation Notes

Source: ColorLib Lingua (https://preview.colorlib.com/theme/lingua/)

## Section order & fidelity notes

1. **TopBar** — White bg, bottom border. Phone left, social icons right, language dropdown.
2. **Header** — Logo left, search right. Poppins font.
3. **LanguageSlider** — 8 language flags in horizontal carousel. Use CSS scroll or embla-carousel.
4. **Courses** — 3-col grid, light gray bg (#f8f8f8). Each card: image, title, meta info, student count, star rating, price badge (#2e21df bg, white text).
5. **Instructors** — 3-col grid, #f8f8f8 bg. Cards with photo, name, specialty.
6. **Register** — CTA section on #f8f8f8 bg. Timer or form element.
7. **Events** — White bg. 3-col event cards with date, title, description.
8. **Blog** — Two-panel: left = 6 category tiles (3x2 grid, rounded 3px, image+title overlay); right = featured post (image, category tag, title, text excerpt).
9. **Footer** — Dark bg (#252525). 4 columns: logo+newsletter input, link col, link col, phone+social. Component Dock link required.

## Key design decisions

- Replace owl-carousel with CSS scroll snap or embla-carousel for language slider
- Use lucide-react for social icons and search icon
- Placeholder images: `https://picsum.photos/seed/speakly-<n>/<w>/<h>`
- Brand color #2e21df as Tailwind theme variable
- Poppins as primary font, Montserrat as secondary
