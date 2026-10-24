# Template: Cryptonex (Cryptocurrency / Business)
<!-- prep-status: shipped-as=coincast -->
> **SHIPPED-UNDER** — the ColorLib `coinbuzz` design this prep describes already
> ships as `apps/coincast` (<https://coincast.free.componentdock.com>).
> Do not scaffold `apps/cryptonex`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-coincast/spec.md`.

## Purpose

Recreation of ColorLib **Coinbuzz** template.
- Source: https://colorlib.com/wp/template/coinbuzz/
- Preview: https://preview.colorlib.com/theme/coinbuzz/coinbuzz/index.html
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/coinbuzz-free-template.jpg
- Stack: React 19, Vite, Tailwind CSS 4, TypeScript

A cryptocurrency/blockchain business landing page with a two-tier header (contact
info top bar + dark nav bar with logo), full-width hero slider, featured cards,
about section with stats counters, services grid, testimonials carousel, market
resources with chart area, expert team CTA, contact form with background image,
team member cards, investment CTA banner, blog cards, and a multi-column footer
with newsletter subscription.

## Design tokens

Extracted from live preview CSS (`assets/css/styles.css`):

| Token              | Value                          | Usage                                           |
| ------------------ | ------------------------------ | ----------------------------------------------- |
| Primary / Accent   | `#ff7700`                      | Logo bg, CTA buttons, dividers, highlights      |
| Secondary orange   | `#ff8d29`                      | Hover states, lighter accent                    |
| Dark bg            | `#242424`                      | Navigation bar, dark sections, footer           |
| Light gray bg      | `#f4f4f4`                      | Alternate section backgrounds (`.bg-1`)         |
| White              | `#fff`                         | Header top bar, text on dark bg, cards          |
| Body text          | `#333`                         | Default paragraph color                         |
| Secondary text     | `#616162`                      | Lighter text, meta info                         |
| Border color       | `#eaeaea`                      | Header top border, card borders                 |
| Font (headings)    | `Roboto, sans-serif`           | Headings, nav links                             |
| Font (body)        | `Open Sans, sans-serif`        | Body text, descriptions                         |
| Button radius      | `3px` (slight rounding)        | CTA buttons, form inputs                        |
| Button style       | uppercase, bold, bg `#ff7700`  | Primary CTA buttons                             |
| Social colors      | FB `#4267b2`, TW `#1da1f2`    | Social icon hover backgrounds                   |
|                    | LI `#0077b5`, DR `#dd4e42`    |                                                 |

## Section structure (order preserved 1:1)

1. **Header Top Bar** — white bg; left: contact info (phone, fax, email, website) with icons; right: social media circular icons (Facebook, Twitter, Google+, LinkedIn, YouTube); border-bottom separator
2. **Navigation Bar** — dark bg (#242424); left: logo ("CoinBuzz" with orange arrow-shaped bg); right: main nav (Home with dropdown, About Us, Pages, Blog, Contact) + orange "GET A QUOTE?" CTA button; mobile: hamburger + slide-down menu
3. **Hero Slider** — full-width image slider (owl-carousel); background image with overlay; centered content: heading "We Are Everyone's Coinbuzz Agency" + description + "Read more" button; slider navigation dots
4. **Featured Cards** — 3-column row; each: image + title link + description paragraph; items: "Personalized", "Behind The Screen", "Time Saver"
5. **About / Bitcoin** — split layout; right half: "WHAT IS BITCOIN / Buy And Sell Bitcoin" heading + description + "JOIN US NOW" CTA button; left: decorative image (visible on lg+); light gray bg
6. **Services** — "Why Choose Bitcoin" title with decorative line; left column: "What We Offer" with description + "Free Consultation" button; right columns: 4 service items in 2x2 layout (Safe And Secure, Instant Exchange, Secure Wallet, Experts Support) each with icon + title + description
7. **About Bitcoin** — "About Bitcoin" title; left: about image; right: heading about token purchase + description + 4 stats counters (1454 Support Countries, 759 Bank Support, 1250 Bitcoin ATMs, 2391 Producers Ready) with icon images
8. **Testimonials** — owl-carousel slider; each slide: avatar image (left) + name + star rating + quote text + quote icon (right)
9. **Special CTA** — dark bg (#242424); large heading quote + 2-column checklist with check icons (4 items)
10. **Market Resources** — "Our Market Resource" title; left: 2-column grid of crypto trading pairs (btc/usd, btc/eur, etc.) with prices; right: chart area (canvas for JS chart)
11. **Expert Team CTA** — dark bg with decorative image; right-aligned text: "We're a dynamic team of creatives" heading + description + "More About" link
12. **Contact** — "Request A Call Back" form; fields: Name, Email, Phone, Subject, textarea + "Submit Now" button; background image on left (visible on lg+)
13. **Team** — "Our Experts Team" title; 4 team member cards in row; each: photo + name + role + social icons (Facebook, Twitter, Google+, LinkedIn)
14. **Investments CTA** — dark bg section; heading "Need to take care of your Currency Investments" + description + 2 buttons: "View Services" + "CONTACT US"; decorative image on right
15. **Blog** — "Latest Our News" title; 3 blog cards; each: image + title + meta (author, date, category) + excerpt + "Read More" link
16. **Footer** — dark bg; 4 columns: logo + description + newsletter form, Our Services list, Twitter Feeds, Newsletter signup; bottom: copyright + social icons

## Requirements

### Feature: Cryptonex landing page

#### Scenario: Header top bar displays contact info and social icons

- **GIVEN** the user visits the Cryptonex page
- **THEN** the top bar shows phone numbers, fax, email, and website on the left
- **AND** circular social media icons (Facebook, Twitter, Google+, LinkedIn, YouTube) are on the right
- **AND** the top bar has a white background with a bottom border

#### Scenario: Navigation bar shows logo and menu

- **GIVEN** the user visits the Cryptonex page
- **THEN** the nav bar has a dark background (#242424)
- **AND** the logo is on the left with an orange accent
- **AND** navigation links include Home, About Us, Pages, Blog, Contact
- **AND** an orange "GET A QUOTE?" button is on the right
- **AND** on mobile the nav collapses to a hamburger menu

#### Scenario: Hero slider displays with background image and content

- **GIVEN** the user visits the Cryptonex page
- **THEN** a full-width image slider is displayed
- **AND** each slide has a heading, description, and call-to-action link
- **AND** slider navigation dots are shown

#### Scenario: Featured section shows 3 content cards

- **GIVEN** the user scrolls to the Featured section
- **THEN** 3 cards are displayed in a row
- **AND** each card has an image, title link, and description paragraph

#### Scenario: About Bitcoin section shows description and image

- **GIVEN** the user scrolls to the About Bitcoin section
- **THEN** a "WHAT IS BITCOIN" heading with "Buy And Sell Bitcoin" is displayed
- **AND** a description paragraph and "JOIN US NOW" button appear
- **AND** a decorative image is shown on the left (desktop only)

#### Scenario: Services section shows service offerings

- **GIVEN** the user scrolls to the Services section
- **THEN** "Why Choose Bitcoin" heading with decorative line is shown
- **AND** a "What We Offer" column with description and "Free Consultation" button appears
- **AND** 4 service items in a 2x2 grid display (Safe And Secure, Instant Exchange, Secure Wallet, Experts Support)
- **AND** each service item has an icon, title, and description

#### Scenario: About section shows stats counters

- **GIVEN** the user scrolls to the About section
- **THEN** "About Bitcoin" heading is displayed
- **AND** a heading about token purchase is shown with description
- **AND** 4 stat counters are displayed (Support Countries, Bank Support, Bitcoin ATMs, Producers Ready)

#### Scenario: Testimonials section shows review carousel

- **GIVEN** the user scrolls to the Testimonials section
- **THEN** a carousel with testimonial slides is displayed
- **AND** each slide shows an avatar, name, star rating, and quote text

#### Scenario: Special CTA section has dark background with checklist

- **GIVEN** the user scrolls to the Special CTA section
- **THEN** a dark background section with a large quote heading is shown
- **AND** a 2-column checklist with 4 check-marked items is displayed

#### Scenario: Market Resources section shows trading pairs and chart

- **GIVEN** the user scrolls to the Market Resources section
- **THEN** "Our Market Resource" heading is displayed
- **AND** a grid of crypto trading pairs with prices is shown on the left
- **AND** a chart area is displayed on the right

#### Scenario: Expert Team CTA shows team description

- **GIVEN** the user scrolls to the Expert Team section
- **THEN** a dark background section with decorative image is shown
- **AND** a "dynamic team" heading with description and "More About" link appears

#### Scenario: Contact section shows callback form

- **GIVEN** the user scrolls to the Contact section
- **THEN** a "Request A Call Back" heading is displayed
- **AND** a form with Name, Email, Phone, Subject, and textarea fields is shown
- **AND** a "Submit Now" button is below the form
- **AND** a background image is visible on the left (desktop only)

#### Scenario: Team section shows member cards

- **GIVEN** the user scrolls to the Team section
- **THEN** "Our Experts Team" heading is displayed
- **AND** 4 team member cards are shown in a row
- **AND** each card has a photo, name, role, and social media icons

#### Scenario: Investments CTA shows call-to-action

- **GIVEN** the user scrolls to the Investments CTA section
- **THEN** a dark background section with "Need to take care of your Currency Investments" is shown
- **AND** "View Services" and "CONTACT US" buttons are displayed
- **AND** a decorative image is on the right

#### Scenario: Blog section shows latest news

- **GIVEN** the user scrolls to the Blog section
- **THEN** "Latest Our News" heading is displayed
- **AND** 3 blog cards are shown in a row
- **AND** each card has an image, title, meta info, excerpt, and "Read More" link

#### Scenario: Footer shows logo, services, social, and copyright

- **GIVEN** the user scrolls to the footer
- **THEN** a dark background footer with logo, description, and newsletter form is shown
- **AND** columns for Our Services, Twitter Feeds, and Newsletter are displayed
- **AND** a copyright bar with social icons appears at the bottom
- **AND** it links to https://www.componentdock.com/

#### Scenario: Design tokens are applied consistently

- **GIVEN** any section of the page
- **THEN** headings use Roboto font family
- **AND** body text uses Open Sans font family
- **AND** the primary orange #ff7700 is used for buttons, accents, and highlights
- **AND** dark sections use #242424 background
- **AND** CTA buttons are uppercase with orange background

## Verification checklist

- [ ] Header top bar: white bg, contact info left, social icons right, border-bottom
- [ ] Nav bar: dark bg, logo with orange accent, nav links, orange CTA button, mobile hamburger
- [ ] Hero slider: full-width image, heading, description, CTA, slider dots
- [ ] Featured cards: 3-column with images, titles, descriptions
- [ ] About Bitcoin: split layout, heading, description, CTA, decorative image
- [ ] Services: title with line, "What We Offer" column, 4 service items with icons
- [ ] About stats: heading, description, 4 stat counters with icons
- [ ] Testimonials: carousel with avatar, name, rating, quote
- [ ] Special CTA: dark bg, large heading, 2-column checklist
- [ ] Market Resources: heading, trading pairs grid, chart area
- [ ] Expert Team CTA: dark bg, heading, description, link
- [ ] Contact: form with 4 fields + textarea + submit button, background image
- [ ] Team: 4 member cards with photo, name, role, social links
- [ ] Investments CTA: dark bg, heading, 2 buttons, decorative image
- [ ] Blog: 3 cards with image, title, meta, excerpt, read more
- [ ] Footer: dark bg, 4 columns, newsletter, copyright, social icons
- [ ] Responsive: hamburger nav, stacked layouts on mobile
- [ ] Tokens: Open Sans + Roboto fonts, #ff7700 orange primary, #242424 dark sections
- [ ] Footer links to componentdock.com
- [ ] No ColorLib references in app code

<!-- live-palette-unverified:start -->
**TOKEN-UNVERIFIED (2026-10-23)** — the demo `https://preview.colorlib.com/theme/coinbuzz/` paints no counterpart within 12 RGB units of these claims (the re-value threshold). Each line names the nearest painted colour and its RGB distance: the claim is a screenshot sample, **not** a measured value — build from the sheet, not this list:
- `#ff8d29` — nearest `#ff7700` (d=47)
- `#4267b2` — nearest `#337ab7` (d=25)
- `#dd4e42` — nearest `#ff7700` (d=85)
<!-- live-palette-unverified:end -->
