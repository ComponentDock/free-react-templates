# Navpoint — Directory & City Guide Template

**Source:** ColorLib DirectoryPlus (https://colorlib.com/wp/template/directoryplus/)
**Preview:** https://preview.colorlib.com/theme/directoryplus/

## Design Tokens (extracted from preview CSS)

| Token          | Value                  | Usage                          |
| -------------- | ---------------------- | ------------------------------ |
| Font family    | Poppins (Google Fonts) | Body + headings                |
| Brand color    | #ffb400 (amber/gold)   | Buttons, accents, hover states |
| Dark purple    | #360f64                | Header scrolled bg             |
| Deep purple    | #49237d                | Secondary purple               |
| Light blue bg  | #e1ecf4                | "How it works" section         |
| Light gold     | #fff3d6                | Icon box circle bg             |
| Body text      | #a5a5a5 / #a9a9a9      | Paragraphs                     |
| Headings       | #000000                | h1–h6                          |
| Link underline | #ffa07f (salmon)       | p a borders                    |
| Selection      | rgba(255,165,75,0.85)  | Text selection                 |
| Button radius  | 5px                    | Search, CTA buttons            |

## Section Structure (from preview DOM)

1. **Navbar** — Fixed header, transparent bg over hero. Logo "Navpoint", nav links (Home, About, Listings, News, Contact), "+Add Listing" outline button, Login/Register links. Mobile hamburger menu.

2. **Hero** — Full-width background image, centered content. Headline "The Best City Guide" with accent dot. Search form: text input + Search button (#ffb400 bg). Slider dots (01. 02. 03.).

3. **Categories** — Floating card over hero bottom (-132px margin). 5 category tiles: Restaurants, Hotels, Nightlife, Coffeeshops, Culture. Each with SVG icon + title. White bg, box-shadow.

4. **Locations** — "Explore Hot Locations" heading. 5 location cards: Amsterdam, Paris, Singapore, Chicago, New York. Image + overlay title with "+" icon.

5. **Food Grid** — "Find the best food near you" heading. Masonry-style grid: Fusion (large), Asian (small), Breakfast+Pizza (medium split), Vine & Dine (medium), Coffee (small), Fine Dine (large). Tag overlays on images.

6. **How It Works** — Light blue (#e1ecf4) bg. "How Navpoint works" heading. 3 icon boxes: 01. Choose a category, 02. Find your pick, 03. Go & have fun. White cards with gold circle icon borders.

7. **CTA** — Parallax background image. "Find the best places in town!" white heading. Description text. "See the list" button.

8. **CTA App** — White bg. "Get the Navpoint App" heading. Description. App store badges. Phone mockup image.

9. **Clients** — Logo carousel (5 client logos).

10. **Footer** — Dark bg. "Made with ❤ by Component Dock" link. Nav links (Home, About, Listings, News, Contact).

## Fidelity Notes

- Section order matches 1:1 with preview
- Colors extracted from main_styles.css
- Font: Poppins (Google Fonts) — not copied, loaded via link
- Images: picsum.photos seeded placeholders
- Icons: lucide-react (Utensils, Hotel, Music, Coffee, Landmark, etc.)
- No ColorLib assets copied; design recreated from scratch
- Footer links to Component Dock instead of Colorlib attribution
