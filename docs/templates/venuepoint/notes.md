# VenuePoint — Implementation Notes

**Source:** ColorLib Thevenue → https://preview.colorlib.com/theme/thevenue/
**New Name:** venuepoint
**Package:** @free-react-templates/venuepoint

## Section Order (top to bottom)

1. Navbar — sticky top, logo left, nav links center, phone right
2. Hero — parallax background, centered text overlay, scroll icon
3. Intro — white bg, subtitle + heading + text + 2-image grid
4. Video — parallax bg, "Food for the soul" + play button
5. SignatureDish — two-column (text left, image right), rating, price, order button
6. TheMenu — off-white bg, 3-column grid (Starters/Main/Deserts), 5 dishes each
7. Reservations — parallax bg, date/time/party-size form
8. Footer — 3-column (logo, about, contact), Component Dock link

## Component Map

| Component         | Section              | Notes                                    |
|-------------------|----------------------|------------------------------------------|
| Navbar            | Header               | Sticky, mobile hamburger menu            |
| Hero              | Home/Hero            | Parallax bg via CSS background-image     |
| Intro             | Intro                | Text + 2-column image grid               |
| VideoSection      | Video                | Parallax bg + play button                |
| SignatureDish     | Signature Dish       | Two-column layout, star rating, price    |
| TheMenu           | The Menu             | 3-column menu grid, dish cards           |
| ReservationForm   | Reservations         | Parallax bg + form with date/time/select |
| Footer            | Footer               | 3-column footer layout                   |

## Fidelity Notes

- **Fonts:** Use Google Fonts for "Edward" (display/headings) and "PT Sans Narrow" (body). Edward is a script font; if unavailable, consider a similar elegant serif.
- **Colors:** Primary brand #b49383 (warm tan), hover #c4ab9f, light accent #ffa07f. Buttons are outlined (2px border) with brand color, transitioning to filled on hover.
- **Parallax:** Use CSS `background-attachment: fixed` or a lightweight parallax library for hero, video, and reservation sections.
- **Menu section:** Three equal-width columns, each with a title bar and list of 5 dishes. Each dish shows title + price on same line, ingredient tags below, and "Order Now" link.
- **Reservation form:** Date picker (can use native input[type=date]), time picker, party size dropdown (2-6 persons).
- **Mobile:** Hamburger menu for nav links, stacked columns on smaller screens.
- **Images:** Use picsum.photos with deterministic seeds (e.g. venuepoint-hero, venuepoint-intro-1, etc.)

## Placeholder Images

| Seed                   | Size      | Usage              |
|------------------------|-----------|-------------------|
| venuepoint-hero        | 1920x1080 | Hero parallax      |
| venuepoint-intro-1     | 600x400   | Intro left image   |
| venuepoint-intro-2     | 600x400   | Intro right image  |
| venuepoint-video       | 1920x1080 | Video section bg   |
| venuepoint-signature   | 800x600   | Signature dish     |
| venuepoint-reservation | 1920x1080 | Reservation bg     |
