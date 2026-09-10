# Boxpilot — Design Notes & Task Outline

**Source:** ColorLib Boxus — https://preview.colorlib.com/theme/boxus/
**New name:** boxpilot
**Category:** Creative Digital Agency (one-page)

## Structure Order (11 sections)

1. **Navbar** — Logo left, nav links right, sticky on scroll, hamburger on mobile
2. **Hero** — Full-width, white bg, large heading + subtext + CTA button
3. **Services** — 4 items, alternating left-right layout, numbered 01–04, colored dots
4. **Portfolio** — Grid with filter tabs (All/HTML/PSD Mockup), hover overlays, Load More
5. **Crafters (Team)** — Member cards + career timeline, 3 members in a row
6. **Stories (Blog)** — 3-card grid, image + title + excerpt + author, "GO TO BLOG" link
7. **Quotes** — Rotating quote cards with author attribution
8. **Offer** — 2×4 icon grid, capability showcase with icons + titles + descriptions
9. **Expertise (Skills)** — Horizontal progress bars with labels + percentages
10. **Contact** — Form with name/email/subject/message + submit button
11. **Footer** — Copyright + Component Dock link

## Fidelity Notes

### Section-by-section

**Navbar:**
- Logo text "BOXUS" → "BOXPILOT" (keep the all-caps style)
- Sticky positioning, transparent bg becomes solid on scroll
- Mobile: hamburger icon, slide-in menu

**Hero:**
- Centered text, clean white background
- Two-line heading with large font size
- Subtext below in muted color (#727190)
- CTA button: primary accent color (#E74C78), white text, rounded corners

**Services:**
- Alternating layout: odd = text-left + image-right, even = image-left + text-right
- Each has: number badge (01–04), colored dot, heading, paragraph
- Colors rotate: green → yellow → pink → blue
- Image area uses placeholder from picsum.photos

**Portfolio:**
- Filter tab bar at top (pill-style or text tabs)
- 2-column grid of portfolio cards with image thumbnails
- Hover effect: overlay with title
- "LOAD MORE" centered button at bottom

**Crafters (Team):**
- Section title "CRAFTERS" with subtitle
- Left: career timeline with year ranges (2001–2016)
- Right: team member cards with circular photos, name, role
- 3 members in a horizontal row

**Stories (Blog):**
- Section title "STORIES"
- 3-column card grid
- Each card: image top, title, short excerpt, author name, category tag
- "GO TO BLOG" link centered below

**Quotes:**
- Testimonial-style cards
- Large quotation marks, quote text, author name
- Rotating or static display

**Offer:**
- Section title "OFFER"
- 2×4 grid of icon items
- Each: icon (lucide-react), title, short description
- Clean, icon-forward layout

**Expertise:**
- Section title "EXPERTISE"  
- Horizontal skill bars with label left, percentage right
- Filled bar uses brand color (green #32DB8A or blue #4C9EE7)
- Light background

**Contact:**
- Form fields: name, email, subject, message (textarea)
- Submit button with primary accent
- Basic form validation (required fields)

**Footer:**
- Simple copyright line
- "Made with Component Dock" or similar with link to componentdock.com

## Design Tokens Summary

```
Font:      Roboto (Google Fonts)
Primary:   #E74C78 (pink-rose) — CTAs, active states
Green:     #32DB8A — skill bars, accent dots
Blue:      #4C9EE7 — alternate accents
Yellow:    #FFBB42 — tags, highlights
Body text: #727190 (muted purple-gray)
Headings:  Dark gray / near-black
Bg alt:    #f9f9f9 (light gray for alternating sections)
```

## Component Architecture

```
src/
  App.tsx              — Compose all sections
  components/
    Navbar.tsx         — Sticky nav with mobile hamburger
    Hero.tsx           — Intro section with CTA
    Services.tsx       — 4 alternating service cards
    Portfolio.tsx      — Filterable grid with Load More
    Crafters.tsx       — Team cards + timeline
    Stories.tsx        — Blog card grid
    Quotes.tsx         — Testimonial cards
    Offer.tsx          — 2×4 icon capability grid
    Expertise.tsx      — Skill progress bars
    Contact.tsx        — Contact form with validation
    Footer.tsx         — Copyright + Component Dock
```

## Implementation Priority

1. Navbar + Hero (establish layout + tokens)
2. Services (alternating pattern)
3. Portfolio (filterable grid)
4. Team/Crafters + Stories (card-based sections)
5. Quotes + Offer (content sections)
6. Expertise (progress bars)
7. Contact (form with validation)
8. Footer + responsive polish
