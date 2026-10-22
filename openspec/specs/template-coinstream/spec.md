# Template: Coinstream (Cryptocurrency / Fintech)
<!-- prep-status: shipped-as=coincast -->
> **SHIPPED-UNDER** — the ColorLib `coinbuzz` design this prep describes already
> ships as `apps/coincast` (<https://coincast.free.componentdock.com>).
> Do not scaffold `apps/coinstream`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-coincast/spec.md`.

## Purpose

Recreation of the ColorLib **Coinbuzz** template
(https://colorlib.com/wp/template/coinbuzz/).
Preview URL: https://preview.colorlib.com/theme/coinbuzz/coinbuzz/index.html

Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript (strict).
Name: **coinstream** — new original name (ColorLib source "coinbuzz" not reused).

---

## Design Tokens (extracted from ColorLib preview CSS)

| Token              | Value / Notes                                                                 |
| ------------------ | ----------------------------------------------------------------------------- |
| Primary brand      | `#ff7700` (orange) — CTA buttons, highlights, hero accents, "GET A QUOTE"    |
| Dark background    | `#242424` — footer, dark sections                                             |
| Light background   | `#f4f4f4` — `.bg-1` utility, resource/investment CTA sections                |
| White              | `#fff` — main body, content areas                                             |
| Text dark          | `#333` — body copy                                                           |
| Text light         | `#9fa3a7` — secondary text, captions                                          |
| Red accent         | `#dd4e42` — error/brand accents                                               |
| Font (headings)    | `Roboto`, sans-serif (700 weight for headings)                                |
| Font (body)        | `Open Sans`, sans-serif                                                       |
| Button radius      | `2px` (default), `50px` (pill-shaped CTA in some areas)                      |
| Button bg (hero)   | `#ff7700` solid → transparent + `#ff7700` text on hover                      |
| Button border      | `2px solid #ff7700` (orange outline variant)                                  |
| Card radius        | `0px` (no border-radius on cards — sharp corners)                             |
| Image border       | `5px solid #fff` (white frame around profile pics)                            |
| Avatar radius      | `50%` (testimonial images)                                                    |
| Footer bg          | `url(../images/bg/4.jpg) no-repeat center center / cover` (dark image bg)     |
| Investments bg     | `url(../images/bg/3.jpg)` (parallax dark image)                               |
| Special/quote bg   | `url(../images/bg/1.jpg)` (parallax dark image)                               |

---

## Section Structure (in page order)

1. **Navbar** — Logo + top info bar (phone, fax, email, website) + social icons + main nav (Home [dropdown], About, Pages [dropdown], Blog [dropdown], Contact) + "GET A QUOTE" button (orange, right-aligned). Responsive hamburger menu on mobile.
2. **Hero / Slider** — Full-width image slider (owl-carousel style). Each slide: background image, centered text "We Are [Everyone's] Coinbuzz Agency" (orange highlight span), CTA buttons ("Read more"). Navigation dots.
3. **Featured** — 3-column cards (image + title + description). "Personalized", "Behind The Screen", "Time Saver".
4. **Bitcoin Info (Featured Content)** — Split layout: image left (desktop only), content right. "WHAT IS BITCOIN" subtitle + heading "Buy And Sell Bitcoin" + body text + "JOIN US NOW" CTA button (orange).
5. **Services** — Section title "Why Choose Bitcoin" + 3 service cards. Each card has icon, title, description. Subsections within cards (list items with check icons).
6. **About** — Split layout: image left (desktop), content right. Heading "About Bitcoin" + stats row (4 counters: Support Countries, Bank Support, Bitcoin ATMs, Producers Ready) with icons.
7. **Testimonials** — Carousel with avatar (50% rounded, white border), name, star rating (4/5 stars), quote text, quote icon.
8. **Special / Quote** — Full-width dark parallax background. Headline in italic Open Sans + two columns of checkmark list items.
9. **Market Resources** — "Our Market Resource" title + 2-column layout: left side has a grid of 10 crypto pair cards (btc/usd, btc/eur, etc.), right side has a CanvasJS line chart.
10. **Expert Team (CTA)** — Dark parallax bg + content right: "We're a dynamic team of creatives" heading + description + "More About" link.
11. **Contact** — Dark parallax bg + form right: "Request A Call Back" heading, form fields (Name, Email, Phone, Subject, Message), "Submit Now" button (white bg, orange text, transparent on hover).
12. **Team** — "Our Experts Team" + 4-column cards: photo, name, role, social links (Facebook, Twitter, Google+, LinkedIn).
13. **Investments CTA** — Dark parallax bg + content left + decorative image right: "Need to take care of your Currency Investments" + CTA buttons (View Services, Contact Us).
14. **Blog** — "Latest Our News" + 3-column blog cards: image, title, meta (author, date, category), description, "Read More" link.
15. **Footer** — Dark parallax bg: 4-column layout (logo + email subscribe, services list, Twitter feeds, contact info + social icons). Bottom bar: copyright + attribution.

---

## Requirements

### Navbar

#### Scenario: Navbar displays logo, navigation links, and CTA button

- **GIVEN** the page loads
- **THEN** the navbar shows a logo on the left
- **AND** nav links include "Home", "About", "Pages", "Blog", "Contact"
- **AND** a "GET A QUOTE" button appears on the right with orange background

#### Scenario: Navbar shows top info bar with contact details

- **GIVEN** the page loads
- **THEN** a top bar shows phone, fax, email, and website
- **AND** social icons (Facebook, Twitter, Google+, LinkedIn, YouTube) are visible

#### Scenario: Navbar collapses to hamburger on mobile

- **GIVEN** the viewport is less than 768px wide
- **THEN** the hamburger menu icon is visible
- **AND** clicking it opens a mobile dropdown menu with all nav links

### Hero Slider

#### Scenario: Hero slider displays full-width image with overlay text

- **GIVEN** the page loads
- **THEN** a full-width image slider is visible
- **AND** the first slide shows the heading "We Are Everyone's Coinbuzz Agency"
- **AND** the word "Everyone's" has an orange highlight background
- **AND** a "Read more" CTA button is visible

#### Scenario: Hero slider navigates between slides

- **GIVEN** the hero slider is displayed
- **WHEN** the user clicks the next dot indicator
- **THEN** the next slide transitions in with the same heading layout

### Featured Section

#### Scenario: Featured section shows 3 content cards

- **GIVEN** the user scrolls to the Featured area
- **THEN** 3 cards are displayed in a row
- **AND** each card has an image, a title, and a description paragraph
- **AND** the card titles are "Personalized", "Behind The Screen", "Time Saver"

### Bitcoin Info (Featured Content)

#### Scenario: Bitcoin info section shows split layout

- **GIVEN** the user scrolls to the Bitcoin info area
- **THEN** a heading "Buy And Sell Bitcoin" is displayed
- **AND** the subtitle "WHAT IS BITCOIN" appears above it in orange
- **AND** a "JOIN US NOW" CTA button with orange background is visible
- **AND** on desktop, a decorative image appears on the left side

### Services

#### Scenario: Services section displays 3 service cards

- **GIVEN** the user scrolls to the Services area
- **THEN** the section title "Why Choose Bitcoin" is centered
- **AND** 3 service cards are displayed with icons, titles, and descriptions

### About

#### Scenario: About section shows stats counters

- **GIVEN** the user scrolls to the About area
- **THEN** the heading "About Bitcoin" is displayed
- **AND** 4 stat counters are shown: Support Countries, Bank Support, Bitcoin ATMs, Producers Ready
- **AND** each counter has an icon above the number
- **AND** on desktop, a large image appears on the left side

### Testimonials

#### Scenario: Testimonials carousel shows testimonials with ratings

- **GIVEN** the user scrolls to the Testimonials area
- **THEN** a carousel displays testimonials
- **AND** each testimonial has a rounded avatar, name, star rating, and quote text
- **AND** a quote icon appears at the end

### Special Quote

#### Scenario: Special quote section shows dark parallax with text

- **GIVEN** the user scrolls to the Special area
- **THEN** a dark background image is displayed
- **AND** an italic headline is shown
- **AND** two columns of checkmark list items are visible

### Market Resources

#### Scenario: Market Resources section shows crypto pairs and chart

- **GIVEN** the user scrolls to the Market Resources area
- **THEN** the title "Our Market Resource" is centered
- **AND** a grid of 10 crypto pair cards (e.g. btc/usd, btc/eur) is displayed
- **AND** a line chart (CanvasJS) occupies the right side

### Expert Team CTA

#### Scenario: Expert Team CTA section shows parallax with team description

- **GIVEN** the user scrolls to the Expert area
- **THEN** a dark parallax background is displayed
- **AND** the text "We're a dynamic team of creatives" is visible
- **AND** a "More About" link is shown

### Contact

#### Scenario: Contact section shows callback form

- **GIVEN** the user scrolls to the Contact area
- **THEN** the heading "Request A Call Back" is displayed
- **AND** form fields for Name, Email, Phone, Subject, and Message are shown
- **AND** a "Submit Now" button with white background and orange text is visible
- **AND** on desktop, a dark background image appears on the left

### Team

#### Scenario: Team section shows 4 team members

- **GIVEN** the user scrolls to the Team area
- **THEN** the title "Our Experts Team" is centered
- **AND** 4 team member cards are displayed in a row
- **AND** each card shows a photo, name, role, and social media links

### Investments CTA

#### Scenario: Investments CTA section shows parallax with call to action

- **GIVEN** the user scrolls to the Investments area
- **THEN** a dark parallax background is displayed
- **AND** the text "Need to take care of your Currency Investments" is shown
- **AND** two CTA buttons "View Services" and "Contact Us" are visible
- **AND** on desktop, a decorative illustration appears on the right

### Blog

#### Scenario: Blog section shows 3 blog post cards

- **GIVEN** the user scrolls to the Blog area
- **THEN** the title "Latest Our News" is centered
- **AND** 3 blog cards are displayed with image, title, meta, description, and "Read More" link

### Footer

#### Scenario: Footer shows 4-column layout with newsletter and contact

- **GIVEN** the user scrolls to the footer
- **THEN** 4 columns are displayed: logo + email subscribe, services, Twitter feeds, contact info
- **AND** social icons (Facebook, Twitter, Google+, LinkedIn, YouTube) are shown
- **AND** a bottom bar shows copyright text
- **AND** the footer links to https://www.componentdock.com/ ("Component Dock")

---

## Verification Checklist

- [ ] Section order matches: Navbar → Hero Slider → Featured → Bitcoin Info → Services → About → Testimonials → Special Quote → Market Resources → Expert CTA → Contact → Team → Investments CTA → Blog → Footer
- [ ] Brand color `#ff7700` used for CTAs, highlights, and accents (not hard-coded — through Tailwind theme tokens)
- [ ] Dark sections use parallax background images (placeholder via picsum)
- [ ] Fonts: Roboto (headings, 700 weight) + Open Sans (body) loaded via Google Fonts
- [ ] Counter section displays 4 stats with icons
- [ ] Testimonials use 50% border-radius avatars with white border
- [ ] Footer links to Component Dock (`https://www.componentdock.com/`)
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] `public/CNAME` contains `coinstream.free.componentdock.com`
- [ ] `homepage` in package.json set to `https://coinstream.free.componentdock.com`
- [ ] `npm run spec:validate` passes
- [ ] Responsive layout: hamburger nav on mobile, stacked columns
