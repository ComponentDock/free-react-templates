# Tripforge — design notes (ColorLib Direngine)

Source slug: `direngine` · Preview: https://preview.colorlib.com/theme/direngine/
(verified 2026-10-01, HTTP 200, 50,840 bytes; `css/style.css` 82,533 bytes).
Screenshot reviewed:
https://colorlib.com/wp/wp-content/uploads/sites/2/direngine-free-template.jpg

## Structure order (1:1 with reference)

1. Navbar (transparent, absolute over hero) — brand · 6 links · "Add listing" pill
2. Hero — beach photo · "Explore / your amazing city" · subtext · search bar
   (keyword + Where select + coral Search) · "Or browse the highlights" +
   4 white chips
3. Services strip — 4 white cards overlapping hero (-120px), coral icons,
   coral hover flip
4. Featured Destination — heading + carousel of image tiles (hover 60px
   white circle + coral search icon) + "15 Listing"
5. Top Tour Packages — light bg, rich cards: stars, blue price, days chip,
   location + Discover
6. Fun facts counter band — photo bg + dark overlay, 4 animated counters
7. Popular Hotels & Rooms — cards with `$40 /night` + Book Now
8. Why Choose Us + Our Guests Says — two columns: copy + outline button |
   testimonial carousel (round photo + coral quote badge)
9. Popular Restaurants — destination-pattern cards, 4 across
10. Tips & Articles — blog cards: tag chip, title, meta row
11. Newsletter — teal→mint gradient band, bordered subscribe form
12. Footer — dark charcoal, 4 columns: brand/social · Information ·
    Customer Support · Have a Questions?

## Section-by-section fidelity notes

- **Hero**: reference h1 = 60px, weight 200, FIRST line bold ("Explore"),
  second line thin ("your amazing city"). Subtext 20px/300 white 80%.
  Search inputs are SQUARE (radius 0, 52px, border `#e6e6e6`) — contrast
  with the pill Search button (radius 30px, `#f85959`). Chips are white
  radius-2 pills with dark icon+label, sitting under "Or browse the
  highlights". Hero overlay gradient (`#2ebdc4→#68e5b2`) is opacity-0 in
  the reference (fades in on scroll) — recreation: subtle static overlay
  or none; the PHOTO is the hero treatment (screenshot).
- **Services**: `.services-section .container { margin-top: -120px }` —
  the cards visibly overlap the beach photo (screenshot). Hover flips the
  whole card to coral `#f85959` with white icon+text. Icons: line-style
  (badge/seal, heart, agent, headset) — lucide BadgeCheck, HeartHandshake,
  Compass, Headphones approximate them; keep them ~60px coral.
- **Card pattern**: destination/tour/hotel/restaurant cards share one
  pattern — image tile + hover centered 60px white circle with coral
  search icon, then text block below. Star ratings are tiny (10px) coral
  stars + "N Rating" text. Price is `#2f89fc` (18px), NOT coral — easy
  to get wrong.
- **Counter**: same beach photo reused as bg with dark overlay; numbers
  are 30px white weight 400 — smaller than typical counter templates.
  Labels: Happy Customers · Destination Places · Hotels · Restaurant.
- **Why + Testimony**: one `bg-light` section, two columns (5/1 + 6).
  "Read more" is an OUTLINE pill (coral border/text, fills on hover), not
  solid. Testimonial card: white, padding 30px, very subtle shadow; 100px
  round photo with a 40px coral circle quote badge overlapping its
  bottom-right.
- **Newsletter**: gradient band IS the design (teal→mint, -45deg). Form
  is unusual: outer box square (radius 0) with translucent white border,
  but the inner INPUT is a pill (radius 30px) transparent; submit is a
  left-border divider inside the same box. White 70% placeholder text.
  Original heading is misspelled "Subcribe" — fix in recreation copy.
- **Footer**: charcoal `#222831` (theme `.ftco-footer` wins over
  `.ftco-bg-dark`'s `#3c312e`). Social icons = 50px translucent circles
  with brand glyphs — lucide-react does NOT ship brand icons; use inline
  SVG (simple-icons paths). Footer MUST link Component Dock.

## Token quick-reference

coral `#f85959` · teal `#2ebdc4` · mint `#68e5b2` · sky `#78d5ef` ·
footer `#222831` · light bg `#f8f9fa` · body `#4d4d4d` · heading `#212529` ·
muted `#6c757d` · location `#999999` · tag `#b3b3b3` · price `#2f89fc` ·
border `#e6e6e6` · Poppins 300 body / 200 hero h1 / 300 h2 (bold inner) /
400 dark-band h2 · buttons pill 30px · search inputs square 52px ·
cards shadow `0 2px 5px rgba(0,0,0,0.03)` · hover circles 60px ·
testimonial photo 100px + quote badge 40px.

## Placeholder image seeds (picsum)

`tripforge-hero` · `tripforge-band` · `tripforge-dest-1..6` ·
`tripforge-tour-1..5` · `tripforge-hotel-1..5` · `tripforge-rest-1..4` ·
`tripforge-blog-1..4` · `tripforge-quote-1..3`

## Known reference quirks

- "Lodon, UK" and "San Franciso, CA" are misspelled in the original —
  paraphrase/fix freely (copy may be paraphrased per replication rules).
- The demo repeats "Paris, Italy" across tour cards and "Luxury
  Restaurant" across restaurant cards — recreate with varied plausible
  names or keep the repetition; either is acceptable.
- Inner pages exist in the reference (about/tour/hotel/blog/contact) —
  NOT recreated; single page only.
