# Convene — Implementation Notes

Source: ColorLib Manup (https://preview.colorlib.com/theme/manup/)
New name: convene

## Section Order (fidelity notes)

1. **Navbar** — Sticky. Logo left, 6 nav links center, "Buy Ticket" pill right. Mobile: hamburger menu. Original uses Bootstrap nav with slicknav mobile plugin.
2. **Hero** — Full-width bg image with dark overlay. Date/venue subtitle above main heading "Change Your Mind". Single "Buy Ticket" CTA. Original: `set-bg` with JS background image.
3. **Counter** — Gradient strip (`#ee8425`→`#f9488b`). 4 counter boxes: Days, Hours, Minutes, Seconds. Label "Count Every Second". Original uses jQuery countdown plugin.
4. **About** — Two-column grid (6+6). Left: rounded image. Right: "About Conference" heading, 2 paragraphs, "Discover Now" button. White bg.
5. **Team/Speakers** — "Who's speaking" centered heading, subtitle, 3 speaker cards in a row. Each card: bg image covering full card, gradient social overlay (4 icon links), name text at bottom. Hover reveals social icons.
6. **Schedule** — "Our Schedule" heading + subtitle. Bootstrap tab nav (Day 1–5 pills). Each tab panel: list of session items (title + time). Active tab has gradient bg. Original uses Bootstrap tabs JS.
7. **Pricing** — Dark bg image section. "Ticket Pricing" heading. 3 pricing cards: 1 Day Pass, Full Pass, Group Pass. Each: tier name, large price (with $ prefix), "Get Ticket" button. Cards have dark bg with slight transparency.
8. **Blog** — "Latest News" heading + subtitle. 3 blog cards in a row. Each: image, category tag (gradient bg), title, date, excerpt. Light gray bg (`#f4f6f8`).
9. **Newsletter** — Dark bg (`#171822`). "Subscribe Newsletter" heading, description text, email input + "Subscribe" button (gradient). Centered layout.
10. **Contact** — "Location" heading + subtitle. Two-column: left = info (address, phone, email, website), right = 5-day event schedule table with day/date columns. White bg.
11. **Footer** — Dark bg (`#171822`). Logo, nav links (Home, Speakers, Schedule, Blog, Contact), social icons row, copyright line with "Component Dock" link.

## Design Token Reference

- Gradient: `linear-gradient(to right, #ee8425 0%, #f9488b 100%)`
- Angled gradient (used on bg-gradient class): `linear-gradient(120deg, #ee8425 0%, #f9488b 100%)`
- Font: Work Sans (Google Fonts)
- Button radius: 50px (pill)
- Section spacing: ~80-90px padding top/bottom (`.spad`)
- Container: Bootstrap-style `container` (max-width ~1140px, centered)

## Implementation Notes

- Replace jQuery countdown with a React hook using `useState` + `setInterval`
- Replace Bootstrap tabs with a controlled React component (useState for active tab)
- Replace `set-bg` JS background images with Tailwind `bg-[url(...)]` using picsum placeholders
- Social icon hover overlay: absolute-positioned div with gradient bg, transitions on hover
- Map placeholder: simple styled div or static image
- Original uses Bootstrap grid — use Tailwind grid/flex equivalents
- Contact "schedule table" in the original is actually a simple day+date table, not the main schedule
