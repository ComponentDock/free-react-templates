# Charis (ColorLib Lovecare) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-charis`.

## Design notes (replication findings)

- **Original:** ColorLib "Lovecare" — warm, emotional CHARITY / NON-PROFIT
  one-pager (source: https://colorlib.com/wp/template/lovecare/, Charity
  category). TEMPLATES.md has TWO copies of this item (lines 602, 1276 —
  mark ALL `[x]` when done).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/lovecare/
  (HTTP 200, ~47 KB HTML; `css/style.css` ~84 KB parsed for tokens; inline
  `<style>` = "Patrick Hand" @font-face). Stack: Bootstrap 5 + tiny-slider
  (causes + testimonial carousels) + glightbox (lightbox) + AOS (scroll
  anims) + rellax (parallax) + Font Awesome + ionicons + flaticon — recreate
  ALL interactivity client-side in React.
- **Screenshot:** `lovecare-colorlib-template.jpg` (1200×946, viewed in
  browser) — dark moody hero photo (child at a window): left text block on
  the dark area — "Raising Hope" white tagline, big white headline "To the
  Homeless & Hopeless People", mustard-gold pill "Join Us" button, "Watch
  the Video" play link. Dark-teal donation box overlaps the hero bottom
  edge: teal header strip (hands/heart icon, donor count, gold "Donate Now"
  button) + form with light-grey inputs. Content below on soft
  off-white/cream; clean modern sans (Poppins).
- **New name:** Charis (Greek for grace/kindness/giving — matches the
  headline "Giving is the greatest act of grace"). Single lowercase word,
  no collision with `apps/` or existing spec folders. NOT "lovecare" —
  never reuse the source name.
- **Visual design (DOM + CSS tokens + screenshot):** GOLD `#d49a3a` brand
  (.btn-primary fill, section subheadings uppercase gold, testimony card
  bg, services icon bg, hero h1 span highlight) + dark teal `#0a686e`
  (.btn-secondary fill, fund-raised strip) + dark brown `#39311d` (donation
  card body) + near-black teal `#042628` footer. Warm sand `#e9e4db` causes
  cards on light `bg-light` section. Two fonts: Poppins (body/headings) +
  Patrick Hand (handwritten subheadings). Buttons: gold pill primary
  (hover → transparent + gold text), teal secondary (hover → transparent +
  teal text). Donation card radius 10, margin-top -136px (overlaps hero).

## Structure (1:1, section order — from the live DOM)

1. **Navbar** (`nav.ftco-navbar-light`, transparent over hero) — brand "Love
   Care Charity Theme" ("Love Care" + gold small "Care", white caption
   "Charity Theme"); links Home, About, Causes, Blog, Contact; hamburger
   toggle (fa-bars) → collapse panel (`aria-expanded`).
2. **Hero** (`hero-wrap rellax`, 100vh, cover bg photo, overlay opacity .8
   gradient `#0a4f53` → `#d49a3a`, fixed attachment): subheading "Raising
   Hope" (handwritten feel), h1 "To the Homeless & Hopeless People" (white,
   gold span highlight), `btn-secondary` "Join Us" + play-icon "Watch the
   Video" link.
3. **Donation card + about/steps** (`ftco-intro-wrap`, row g-lg-5):
   - RIGHT `col-md-5` — `.fund-wrap` (bg `#39311d`, radius 10,
     margin-top -136px overlap): `.fund-raised` teal strip (icon-heart +
     "$1,850,000" + "Funds raised by 1200 people" + gold "Donate Now"
     button); body: gold subheading "Donate Now", h2 "Giving is the
     greatest act of grace"; form: Full Name, Email, Select Causes (Food,
     Medical, Health, Education, Environment, Shelter/Home, Clothes,
     Other), "Amount to Give" + radios Paypal / Credit Card / Payoneer,
     submit gold "Donate Now" (`py-3 px-4 rounded`).
   - LEFT `col-md-7` — about-wrap: gold subheading "Welcome to Lovecare
     Charity", h2 "We Help Thousands of Children to Get Their Education",
     paragraph; below: 3 step cards `a.services-2` (+ color-2/color-3):
     gold 80×80 icon + title — "Start Donating", "Join Our Community", "Be
     A Volunteer".
4. **Stats band** (`ftco-section-counter img`, bg photo `bg_3.jpg`, white
   headings): subheading "Great Reviews for our services", h2 "Technical
   Statistics"; 4 counters — $60M Fund Raised, 9200 Completed Projects,
   5800 Donation, 2750 Volunteer (count-up on scroll).
5. **Causes** (`ftco-causes ftco-section bg-light`): gold subheading "Our
   Causes", h2 "Our Causes & Help Us"; carousel of 4 `.causes-wrap` sand
   cards (bg `#e9e4db`): photo (glightbox), category, h2 title ("Give Food
   to Homeless Children" — VARY), copy, progress bar 70%, "Raised: $9,800"
   / "Goal: 15,000", Donate link.
6. **Quote CTA band** (`ftco-image img`, bg photo `bg_2.jpg`): gold
   subheading "Lovecare Charity", white h2 "The Smallest Act of Kindness is
   Worth More Than the Grandest Intention", gold "Donate Now!" +
   teal "Become A Volunteer".
7. **Volunteers** (`ftco-section`, white): subheading "Meet Our Volunteer",
   h2 "Our Volunteer"; 4 team cards — photo, h3 name, role "Volunteer",
   bio, social icons (VARY names/bios).
8. **Testimonials** (`ftco-section testimony-section img`, fixed bg):
   subheading "Testimonial", h2 "What People Says"; carousel of GOLD cards
   `.testimony-wrap` (bg `#d49a3a`, white text): quote + avatar + name +
   role (REWORD "Roger Scott / Marketing Manager" demo pattern).
9. **Donate CTA** (`ftco-section ftco-no-pt ftco-no-pb`): gold subheading
   "Welcome to LoveCare Non-Profit Charity", h2 "Do You Care Our
   Children?", copy, teal "Be A Volunteer" (`btn-secondary py-3 px-4`).
10. **Blog** (`ftco-section`, white): subheading "Our Blog", h2 "Recent From
    Blog"; 3 cards — photo, meta (Admin / Feb. 22, 2021 / 3 Comments),
    h3 title (VARY), excerpt, "Read More".
11. **Footer** (`ftco-footer img`, bg `#042628`, white text): 3 columns —
    (1) brand + about copy + socials (facebook, twitter, instagram, heart),
    (2) "Recent Posts" (2 posts + dates), (3) "Have a Questions?" (address
    "203 Fake St. Mountain View, San Francisco, California, USA", phone
    "+2 392 3929 210", email "info@yourdomain.com"). Bottom bar: "Copyright
    © <year> All rights reserved" + "made with" credit — REPLACED with
    **Component Dock link** (https://www.componentdock.com/).

## Todo (implementation order)

- [ ] `npm run spec:validate` passes (spec: `openspec/specs/template-charis/`)
- [ ] Scaffold `apps/charis` (copy simplest existing app; package
      `@free-react-templates/charis`; `public/CNAME` =
      `charis.free.componentdock.com`; homepage
      `https://charis.free.componentdock.com`); run `npm install` at
      root and verify lockfile registration
- [ ] `src/index.css`: `@theme` tokens — brand gold `#d49a3a`, teal
      `#0a686e`, deep teal `#0a4f53`/`#082729`, dark brown `#39311d`,
      footer `#042628`, sand `#e9e4db`, cream `#f3f0eb`; Poppins + Patrick
      Hand Google Fonts `<link>` in index.html
- [ ] `Navbar` — transparent over hero, brand "Love Care Charity Theme",
      links (Home, About, Causes, Blog, Contact), mobile collapse toggle
- [ ] `Hero` — 100vh cover photo, teal→gold overlay, "Raising Hope"
      subheading, white h1 with gold highlight, teal "Join Us" + play-icon
      "Watch the Video"
- [ ] `DonationCard` — `#39311d` radius-10 card overlapping hero
      (negative top margin), teal `#0a686e` header strip ($1,850,000 /
      "Funds raised by 1200 people" / gold "Donate Now"), gold subheading +
      h2 "Giving is the greatest act of grace"
- [ ] `DonationForm` — Full Name, Email, Select Causes (8 options), Amount +
      radios (Paypal / Credit Card / Payoneer), gold submit; zod validation + success state
- [ ] `AboutSteps` — gold subheading + h2 "We Help Thousands of Children to
      Get Their Education" + copy; 3 step cards (Start Donating / Join Our
      Community / Be A Volunteer) with gold icons, color-2/color-3 variants
- [ ] `StatsBand` — photo bg, "Technical Statistics", 4 count-up counters
      ($60M Fund Raised, 9200 Completed Projects, 5800 Donation, 2750
      Volunteer)
- [ ] `Causes` — light section, "Our Causes & Help Us", carousel of sand
      cards (#e9e4db: photo, category, title, progress 70%, Raised/Goal,
      Donate link), client-side cycling
- [ ] `QuoteBand` — photo bg, "The Smallest Act of Kindness is Worth More
      Than the Grandest Intention", gold "Donate Now!" + teal "Become A
      Volunteer"
- [ ] `Volunteers` — "Our Volunteer", 4 cards (photo, name, role, bio,
      socials; VARY)
- [ ] `Testimonials` — photo bg, gold cards (#d49a3a, white text), carousel
      (quote + avatar + name + role; REWORD demo roles)
- [ ] `DonateCta` — "Do You Care Our Children?" + teal "Be A Volunteer"
- [ ] `Blog` — "Recent From Blog", 3 cards (photo, meta, title, excerpt,
      Read More; VARY)
- [ ] `Footer` — 3 columns (brand + socials / Recent Posts / Have a
      Questions?) + bottom bar with Component Dock link
- [ ] Tests per section (100% coverage) → `scripts/verify-app.sh charis`
- [ ] PR `feat/template-charis` → merge immediately; TEMPLATES.md rows
      602 + 1276 → `[x]` + surge URL + readme:status
