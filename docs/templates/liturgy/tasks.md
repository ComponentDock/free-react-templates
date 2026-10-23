# Liturgy — Implementation Tasks

**Source:** ColorLib Advent (https://colorlib.com/wp/template/advent/)
**Preview:** https://preview.colorlib.com/theme/advent/
**App name:** liturgy
**Deploy target:** https://liturgy.free.componentdock.com

## Design Notes

- **Aesthetic:** Dark, elegant church website. Dark charcoal body (#262626) with golden yellow (#ffc107) accents. White headings in Playfair Display serif give a formal, reverent feel.
- **Buttons:** All square (radius 0), uppercase, wide letter-spacing. Primary = yellow bg, Outline = white border.
- **Section headings:** Yellow badge/pill (#ffc107 bg, white text, uppercase, 11px).
- **Sermon cards:** Pure black (#000) background — distinct from the charcoal body.
- **Worship Time section:** Only white-bg section — provides strong contrast against the dark design.
- **Navbar:** Absolute positioned, transparent bg (no visible bg on desktop, black on mobile). Links are tiny uppercase with wide tracking.
- **Footer:** Same dark bg as body, with #2e2e2e top border. Social icons are circular outlines. Footer links are yellow.

## Section-by-section fidelity notes

### 1. Navbar
- Transparent, absolute-positioned, no visible background (desktop)
- Mobile: solid black background
- Brand: "Liturgy" uppercase, letter-spacing .2em
- Links: uppercase, 12px, letter-spacing .2em
- Ministries: dropdown with 5 items, hover = #ffc107

### 2. Hero Slider
- Full-viewport height (calc(100vh - navbar))
- Dark overlay (rgba(0,0,0,0.2))
- Centered white text: h1 (Playfair Display, 40px, weight 300), paragraph (20px, weight 300)
- Outline-white button (white border, white text, radius 0)
- Navigation dots at bottom (white outlined circles, active = white fill)
- Implement as carousel/slider with auto-advance + dots

### 3. Upcoming Events
- Dark bg (#262626)
- Yellow badge section heading
- Event title in Playfair Display
- Meta: date, location, speaker — uppercase, 10px, rgba white text
- Countdown timer: 5 yellow blocks side by side, numbers white

### 4. Worship Time
- White bg, split half layout
- Left: "Worship Time" heading + schedule list
- Right: background image
- List items: black text, 16px, bottom border separator, time below in lighter text
- Items: Morning Worship (5:30-6:00 AM), Afternoon (1:30-2:00 PM), Evening (7:30-8:00 PM)

### 5. Recent Sermons
- White bg section, padding 7em 0
- Section heading badge + "Listen Our Sermons"
- 3-column grid of sermon cards
- Cards: black bg, white text
- Card content: title (Playfair Display 18px), author + date metadata, audio player
- Use placeholder audio for audio players

### 6. Ministries
- White bg section
- Section heading badge + "Events & Ministries"
- 3-column grid of ministry cards
- Media layout: thumbnail (120px) left, text right
- Title (Playfair Display 18px), metadata (uppercase 11px), description paragraph
- Use placeholder images from picsum.photos

### 7. Footer
- Dark bg (#262626), top border (#2e2e2e), padding 5em
- 3 columns: About + social icons (4 circles), Quick Links (4 items), Contact Info (address, phone, email)
- Social icons: circular 30px, border rgba(255,255,255,0.1), hover = white bg
- Copyright line + Component Dock link (https://www.componentdock.com/)

## Component plan

```
apps/liturgy/src/
  main.tsx
  App.tsx
  index.css
  components/
    Navbar.tsx
    HeroSlider.tsx
    UpcomingEvents.tsx
    WorshipTime.tsx
    RecentSermons.tsx
    Ministries.tsx
    Footer.tsx
  test/
    setup.ts
```
