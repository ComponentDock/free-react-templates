# Homily — Design Notes & Task Outline

Source: ColorLib Faith 2 (slug: `faith-2`)
Preview: https://preview.colorlib.com/theme/faith2/
New name: homily
Package: @free-react-templates/homily

## Structure Order

1. TopBar
2. Navbar
3. Hero (carousel)
4. CTA Banner
5. AboutQuote
6. ChurchActivities (events + sermons)
7. Donate (carousel)
8. Blog
9. Footer

## Section-by-Section Fidelity Notes

### TopBar
- Dark background (#1b1b1b), full width
- "Next Big Event:" label + countdown timer
- Use a simple countdown hook (useState + useEffect with setInterval)
- Right-aligned content

### Navbar
- White background, sticky on scroll (shrink effect)
- Logo (church icon + "Homily" text, brand color accent)
- Nav links: Home, Pages (dropdown), Ministries, Sermons, Contact
- Search icon (triggers overlay, or simplified)
- "Send Donations" pill button: #ac8a74 bg, white text, 30px radius
- Dropdown menus for Pages

### Hero
- Full-width carousel, 3 slides
- Dark overlay (rgba(0,0,0,0.6)) on background images
- Left-aligned content in col-7: date badge (small, #ac8a74 bg), subtitle, h2 heading, body text
- Top-right floating button "Sunday Workshop: 10:30 AM" (pill, brand color)
- Prev/next arrow buttons (brown bg, semi-transparent)
- Dot indicators at bottom right

### CTA Banner
- Full-width #ac8a74 background
- Two items side by side: heading text left, "Visitors Info" pill button right
- Simple flex/row layout

### AboutQuote
- White background, centered content
- Small cross/star icon at top (use lucide-react `Star` or `Cross`)
- Large italic heading with bible quote
- Description paragraph below
- Generous padding (section-padding-100-0)

### ChurchActivities
- Two-column layout (col-6 each)
- Left column: "Upcoming Events"
  - List of 4 event items
  - Each: date badge (stacked day/month/year in brand color bg), thumbnail image, title link, time/location
  - "See All Events" pill button at bottom
- Right column: "Latest Sermons"
  - List of 3 sermon items
  - Each: thumbnail, title, author name, date
  - Inline audio player (use HTML5 <audio> or simplify to a play button)
  - "See More" link

### Donate
- Dark image overlay background (similar to hero)
- Centered heading "Donate to our Charities" with cross icon (white text)
- Carousel of donation cards
- Each card: image, title, subtitle, "Donate" pill button
- 4 cause cards: Church Building, Teens Found, Child Found, Church Building (dup)

### Blog
- White background
- "Latest News" heading with cross icon
- 3-column grid of blog cards
- Each card: thumbnail image with floating date badge, title link, excerpt, "Read More" link

### Footer
- Dark image overlay background (similar to hero)
- 4-column layout:
  - Col 1: Logo + social icons (lucide-react equivalents) + copyright
  - Col 2: Contact Us (address, phone, email)
  - Col 3: Useful Links (list of nav links)
  - Col 4: "Why Choose Us?" text + "Sunday Workshop" button
- Copyright must link to https://www.componentdock.com/

## Design Token Summary (for @theme in index.css)

```css
--color-brand: #ac8a74;
--color-dark: #1b1b1b;
--color-body: #5a5a5a;
--color-light: #a6a6a6;
--font-poppins: "Poppins", sans-serif;
```

## Placeholder Images

- Hero backgrounds: `https://picsum.photos/seed/homily-hero-1/1920/1080`
- Event thumbnails: `https://picsum.photos/seed/homily-event-{1-4}/200/200`
- Sermon thumbnails: `https://picsum.photos/seed/homily-sermon-{1-3}/200/200`
- Donate card images: `https://picsum.photos/seed/homily-donate-{1-4}/400/300`
- Blog thumbnails: `https://picsum.photos/seed/homily-blog-{1-3}/600/400`

## Icons

- Cross/star decorative: use lucide-react `Cross` or `Star`
- Social icons: lucide-react `Facebook`, `Twitter`, `Instagram`, etc.
- Search: lucide-react `Search`
- Navigation arrows: lucide-react `ChevronLeft`, `ChevronRight`
