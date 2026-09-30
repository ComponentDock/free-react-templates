# Template: Boostly (SaaS / Startup Landing)

## Purpose

Boostly is a startup & SaaS landing page template (peach split hero, bordered
service cards, philosophy split, pricing cards on an orange band, feature
accordion, dark plum testimonial slider, blog cards, black 4-column footer) in
the free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Thestartup" startup landing template, built under a DIFFERENT
name (Boostly — a growth/momentum name; single lowercase word), per the
monorepo naming mandate (never reuse the ColorLib source name), with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

- **Source slug:** `thestartup`
- **Source:** https://colorlib.com/wp/template/thestartup/
- **Preview (LIVE, verified 2026-09-30 by direct fetch):**
  https://preview.colorlib.com/theme/thestartup/
  (HTTP 200; DOM sections in order: header, slider-area hero, services-area,
  about-area, pricing-card-area, project-us accordion, testimonial-area,
  home-blog-area, footer).
- **Preview CSS:** `assets/css/style.css` (71,624 bytes) — carries all
  template tokens; bootstrap.min.css only supplies grid utilities.
- **Screenshot:**
  https://colorlib.com/wp/wp-content/uploads/sites/2/thestartup-free-template.jpg
  (downloaded 2026-09-30, converted from AVIF and visually analyzed: white
  navbar with orange star logo + Join Us button; peach hero with orange
  uppercase tagline, huge black headline, orange Explore Us button and a
  right-side team photo; white services section with a left title, right
  blurb and three bordered cards with orange line icons).
- **Stack:** React 19 + Vite + Tailwind CSS 4 + TypeScript (strict).

## Design tokens (extracted from the live preview stylesheet)

| Token                     | Value                                                                               | Notes                                                                                                                          |
| ------------------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Brand color               | `#FF9100`                                                                           | Orange — buttons, hero eyebrow, link hovers, pricing band, plan price, accordion open titles, blog badge, footer heart + links |
| Gradient mid              | `#DF7E00`                                                                           | Middle stop of the header "Join Us" gradient                                                                                   |
| Hero background           | `#FFDDB5`                                                                           | Light peach — hero section area                                                                                                |
| About strip               | `#FFE0BB`                                                                           | Peach block behind the left edge of the about photo                                                                            |
| Dark section bg           | `#2D0A31`                                                                           | Deep plum — testimonials section                                                                                               |
| Heading font              | `Josefin Sans`                                                                      | Weights 300–700; h1–h6, nav links, section titles                                                                              |
| Body font                 | `Roboto`                                                                            | Weight 400 (+500/700/900 loaded); paragraphs, body text                                                                        |
| Button radius             | `5px`                                                                               | `.btn` primary buttons                                                                                                         |
| Button style              | Solid orange `#FF9100` bg, white text, black wipe-on-hover via scaleX               | `.btn::before`                                                                                                                 |
| Header btn                | Gradient orange `linear-gradient(to left, #FF9100, #df7e00, #FF9100)`, `4px` radius | `.btn_0`                                                                                                                       |
| Browse/link btn           | Black uppercase, 2px underline bar, orange on hover                                 | `.browse-btn`                                                                                                                  |
| Text heading color        | `#000`                                                                              | h1–h6                                                                                                                          |
| Body text color           | `#5E5E5E`                                                                           | paragraphs                                                                                                                     |
| Pricing feature list      | `#7977A2`                                                                           | `font-weight: 300`, 17px                                                                                                       |
| Collapsed accordion title | `#010A44`                                                                           | Open title turns `#FF9100`                                                                                                     |
| Footer text               | `#949494`                                                                           | links/body on black                                                                                                            |
| Section padding           | `120px` top / `100px` bottom                                                        | `.section-padding`                                                                                                             |

## Section inventory (DOM order, home page)

1. **Navbar** — white bar, star wordmark "Boostly" left; Home (active), About,
   Services, Blog (orange dropdown: Blog, Blog Details, Element), Contact;
   gradient "Join Us" button; sticky shadow on scroll; mobile off-canvas menu.
2. **Hero** — peach `#FFDDB5` split: left caption (orange uppercase tagline
   "We are new but doing great", 60px h1 "We give the power back to the user",
   black 20px paragraph, orange "Explore Us" button), right full-height photo
   (hidden below lg).
3. **Services** — heading row (46px "Services we provide" left, blurb right);
   3 bordered white cards (`1px #ddd`, padding 52/50): orange line icon, 24px
   bold title ("Web Design", "Web Design", "E-Commerce"), blurb, "Let's Talk"
   browse-btn with black underline bar.
4. **About / Philosophy** — split: photo left (778px tall, peach `#FFE0BB`
   strip behind its left edge), text right (padding 120/75): two-line h2 "Our
   Philosophy", two paragraphs, attribution `CEO, Consulto` over the 45px
   light-weight name "Capcilena Hanry".
5. **Pricing** — orange `#FF9100` band behind the top 53% of the section;
   centered white h2 "Affordable pricing plan" + white blurb on the band;
   3 white cards (padding 35/40): bordered pill "Basic Plan" (radius 20px),
   orange 40px `$700` with superscript dollar, divider `#E7E6EB`, lilac
   feature list (Increase traffic 50%, Social Media Marketing, 10 Free
   Optimization, 24/7 support), orange "Get Started Now" button; middle card
   highlighted with `0px 15px 25px rgba(168,96,0,0.1)` shadow.
6. **Features accordion** — left 70%: h2 "Some more features that seal the
   deal and convert the customer" + 4 accordion rows (border-bottom
   `#EFEFEF`; open row title `#FF9100` + minus glyph, closed rows `#010A44` +
   plus glyph; second row open by default; exclusive expand); right 30% photo.
7. **Testimonials** — plum `#2D0A31` band with a fixed cover-photo overlay;
   white card pushed right (padding 70/60/53): 30px quote h3, `#5E5E5E` body,
   black founder name + small gray role; three dot indicators navigate the
   slides ("Robert Brown / CEO of Boostly", "Angela Moss / CTO of Northwind
   Labs", "Daniel Cruz / Founder of Loopstack").
8. **Blog** — centered h2 "Our latest blog"; 3 cards: photo with "Urban"
   category badge (orange fill on the first card, white outline on the rest),
   24px title "Starts the automated process." (underline on hover), excerpt.
9. **Footer** — black band, 4 columns: white star wordmark + blurb + 4 social
   icons (Twitter, Facebook, Linkedin, Pinterest); "Navigation" (Home, About,
   Services, Blog, Contact); "Services" (Blackforest, Bodhubon, Rongdhonu,
   Meghrong); "Contact Us" (76/A, Green Lane, Dhanmondi, NYC; tel link). Bottom
   bar: orange heart + "Copyright © <year> All rights reserved | Made with ♥
   by Component Dock" linking https://www.componentdock.com/.
10. **Scroll-to-top** — fixed orange circle bottom-right (arrow-up glyph).

## Requirements

(Gherkin-style scenarios per requirement — each scenario lists Given/When/Then
steps mirroring the component tests.)

### Requirement: Navbar renders wordmark, menu, Blog dropdown and Join Us button

The page SHALL render a sticky navbar with the Josefin Sans wordmark "Boostly"
and a star glyph on the left, a right-aligned bold menu (Home marked active,
About, Services, Blog with an orange dropdown, Contact) and the gradient
"Join Us" button; after scrolling past 40px the navbar SHALL gain a white
background, a drop shadow and tighter padding, and SHALL release them when
scrolled back to the top.

#### Scenario: Desktop navigation

```
Given the page loads
Then the navbar shows the "Boostly" wordmark with a star glyph on the left
And the right-aligned menu links are "Home", "About", "Services", "Blog", "Contact" in Josefin Sans 700 black
And "Home" is marked aria-current="page"
And a gradient orange "Join Us" button links to the contact section
```

#### Scenario: Blog dropdown

```
Given the desktop navbar is visible
When the user activates "Blog" (click, tap, or keyboard)
Then an orange dropdown panel opens with items "Blog", "Blog Details", "Element"
And the toggle exposes aria-expanded=true
When the user activates "Blog" again
Then the dropdown closes and aria-expanded returns to false
```

#### Scenario: Sticky scroll state

```
Given the page is at the top
Then the navbar has no shadow
When the page is scrolled past 40px
Then the navbar gains a box shadow and tighter padding
When the page scrolls back to the top
Then the shadow is removed
```

### Requirement: Hero shows the peach split layout with tagline, headline and CTA

The hero SHALL render a peach `#FFDDB5` band with the caption column on the
left 42% (orange uppercase tagline, 60px Josefin Sans headline, black 20px
paragraph, orange "Explore Us" button with the black wipe-on-hover treatment)
and the full-height photo column on the right 50%, which SHALL be hidden on
viewports below `lg`.

#### Scenario: Hero caption and CTA

```
Given the hero is visible
Then the peach background (#FFDDB5) spans the section
And the orange uppercase tagline reads "We are new but doing great"
And the h1 reads "We give the power back to the user"
And the paragraph reads "Content marketing is nothing but offering users value. It is not just about traffic minion customers."
And the "Explore Us" button links to #services
```

#### Scenario: Hero photo

```
Given the hero is visible on a desktop viewport
Then the right column shows a full-height photo (picsum placeholder boostly-hero)
When the viewport is smaller than lg
Then the hero photo is hidden
```

### Requirement: Services renders three bordered cards with icons and browse links

The services section SHALL render the 46px heading "Services we provide" with
the descriptive blurb opposite it, and exactly 3 bordered white cards, each
with an orange line icon, a 24px bold title, a blurb and a "Let's Talk"
uppercase link with a black underline bar that turns orange on hover; the
links SHALL point at the contact section.

#### Scenario: Three service cards

```
Given the services section is visible
Then the heading reads "Services we provide"
And exactly 3 cards are rendered with titles "Web Design", "Web Design", "E-Commerce"
And each card contains an orange line icon, a blurb and a "Let's Talk" link
And every "Let's Talk" link points to #contact
```

### Requirement: About renders the philosophy split with founder attribution

The about section SHALL render a split band with the photo on the left (a
peach `#FFE0BB` strip behind its left edge) and the text panel on the right:
the two-line heading "Our Philosophy", two body paragraphs, and the founder
attribution with "CEO, Consulto" above the 45px light-weight name "Capcilena
Hanry".

#### Scenario: Philosophy content

```
Given the about section is visible
Then the heading renders as "Our Philosophy" across two lines
And two body paragraphs are shown
And the attribution shows "CEO, Consulto" above the name "Capcilena Hanry"
And the left column shows the photo with the peach strip behind its left edge
```

### Requirement: Pricing renders three plan cards on an orange band

The pricing section SHALL render an orange `#FF9100` band behind the top 53%
of the section, a centered white heading "Affordable pricing plan" with a
white blurb on the band, and exactly 3 white cards, each with a bordered pill
plan name ("Basic Plan"), the orange price `$700` with a superscript dollar
sign, a divider, a 4-item lilac feature list and an orange "Get Started Now"
button; the middle card SHALL carry the highlighted shadow.

#### Scenario: Three pricing cards

```
Given the pricing section is visible
Then the heading reads "Affordable pricing plan" in white on the orange band
And exactly 3 cards are rendered, each with "Basic Plan", the price "$700", 4 features and a "Get Started Now" button
And every "Get Started Now" button points to #contact
And only the middle card has the highlighted active shadow
```

### Requirement: Features accordion expands exclusively beside the section photo

The features section SHALL render the heading "Some more features that seal
the deal and convert the customer" over 4 accordion rows on the left 70% with
a photo on the right 30%; the open row's title SHALL turn orange `#FF9100`
with a minus glyph, closed rows SHALL show `#010A44` titles with a plus
glyph, exactly one row SHALL be expanded at a time (second row open by
default), and clicking the open row SHALL collapse it.

#### Scenario: Accordion behavior

```
Given the features section is visible
Then 4 accordion rows are rendered and the second row is expanded by default
And exactly one panel body is present at a time
When the user activates a closed row
Then that row expands and the previously open row collapses
When the user activates the open row
Then it collapses and no panel body remains rendered
```

### Requirement: Testimonials render a white card slider on the plum band

The testimonials section SHALL render the deep plum `#2D0A31` band with a
fixed cover-photo overlay and a white card pushed to the right containing the
active slide: a 30px quote heading, a `#5E5E5E` body paragraph, and the
founder name in black with a small gray role; three dot indicators SHALL
navigate between the three slides and mark the active slide with
aria-current.

#### Scenario: Testimonial slider

```
Given the testimonials section is visible
Then the section background is plum (#2D0A31) with a fixed cover photo (picsum seed boostly-testimonial)
And the first slide shows the quote, body, "Robert Brown" and "CEO of Boostly"
And three dot indicators are rendered with the first marked active
When the user activates the second dot
Then the second slide's content is shown ("Angela Moss") and the dot is marked aria-current
When the user activates the third dot and then the first dot
Then the third slide ("Daniel Cruz") and then the first slide are shown in turn
```

### Requirement: Blog renders three cards with category badges

The blog section SHALL render the centered heading "Our latest blog" and
exactly 3 cards, each with a photo carrying an "Urban" category badge (orange
fill on the first card, white outline on the rest), a 24px title "Starts the
automated process." that underlines on hover, and the excerpt "The automated
process starts as soon as your clothes go into the machine."

#### Scenario: Three blog cards

```
Given the blog section is visible
Then the heading reads "Our latest blog"
And exactly 3 cards are rendered, each with an "Urban" badge, the title "Starts the automated process." and the excerpt
And the first badge is orange-filled while the remaining badges are white-outlined
```

### Requirement: Footer renders four columns and the Component Dock attribution

The footer SHALL render a black band with four columns (white "Boostly"
wordmark + blurb + four social icon links; "Navigation" list; "Services"
list; "Contact Us" with the address and a tel: phone link) and a bottom bar
with an orange heart, the copyright line, and an attribution link to
https://www.componentdock.com/ branded "Component Dock".

#### Scenario: Footer content

```
Given the footer is visible
Then the background is black and four columns are rendered
And the social links are named "Twitter", "Facebook", "Linkedin", "Pinterest"
And the contact column shows "76/A, Green Lane, Dhanmondi, NYC" and the tel link "+10 (78) 738-9083"
And the bottom bar links "Component Dock" to https://www.componentdock.com/
```

### Requirement: Scroll-to-top control returns to the page top

The page SHALL render a fixed orange circular button (bottom-right, arrow-up
glyph, aria-label "Back to top") that scrolls the window to the top when
activated.

#### Scenario: Back to top

```
Given any page state
Then the fixed "Back to top" button is visible at the bottom-right
When the user activates it
Then window.scrollTo(0, 0) is invoked
```

### Requirement: Mobile navigation is fully operability-tested

On mobile viewports the page SHALL hide the inline menu behind a hamburger
toggle (aria-expanded) that opens an off-canvas panel with the "Boostly"
wordmark, a close button, stacked links (Home, About, Services, Contact),
a collapsible Blog group and a Join Us button; activating any link inside the
menu SHALL close the menu.

#### Scenario: Mobile menu toggle

```
Given the viewport is mobile-sized
Then a hamburger button labeled "Open menu" is shown with aria-expanded=false
When the user activates it
Then an off-canvas panel opens with the wordmark, a "Close menu" button, the stacked links and "Join Us"
And the Blog group is collapsed by default and expands on activation
When the user activates any menu link or the close button
Then the menu closes and aria-expanded returns to false
```

### Requirement: Global fidelity and provenance rules

The app SHALL apply the design tokens above via Tailwind `@theme` tokens,
SHALL use picsum.photos seeded placeholders for all photos, Google Fonts
(Josefin Sans + Roboto) via `index.html`, lucide-react icons plus inline SVG
brand icons, and SHALL NOT contain any reference to the design source in app
files (comments included). The footer SHALL link
https://www.componentdock.com/.

#### Scenario: Design tokens applied

```
Given the app is built
Then the brand orange #FF9100, hero peach #FFDDB5 and plum #2D0A31 are declared as @theme tokens and used through Tailwind classes
And the fonts Josefin Sans and Roboto are loaded via the Google Fonts <link> in index.html
```

#### Scenario: No source provenance in app code

```
When the apps/boostly tree is searched for the design source's name or domain
Then no matches are found in any source, comment or asset file
```

#### Scenario: Placeholder assets only

```
Given any image in the app
Then its src is a picsum.photos URL seeded with "boostly-"
And no source-template asset is shipped
```

## Verification checklist

- [x] Navbar: sticky shadow on scroll, star wordmark, links, Blog dropdown, Join Us button, mobile off-canvas menu
- [x] Hero: peach split, orange tagline, 60px headline, paragraph, Explore Us CTA, right photo (hidden below lg)
- [x] Services: 3 bordered cards, orange icons, titles, blurbs, Let's Talk links
- [x] About: split with peach strip, "Our Philosophy" two-line heading, paragraphs, CEO attribution
- [x] Pricing: orange band, white heading, 3 cards, pill name, $700, features, CTA, middle card highlighted
- [x] Features: 4-row exclusive accordion (second open by default), orange open titles, photo right
- [x] Testimonials: plum band + fixed photo overlay, white card slider, 3 dots, founder attribution
- [x] Blog: 3 cards, Urban badge (first orange), titles, excerpts
- [x] Footer: black, 4 columns, social icons, contact info, Component Dock attribution
- [x] Scroll-to-top: fixed orange circle, scrolls to top
- [x] No design-source references in app code
- [x] Footer links to https://www.componentdock.com/
- [x] Uses picsum.photos for placeholder images
- [x] Uses Google Fonts (Josefin Sans + Roboto) via index.html link
- [x] Uses lucide-react + inline SVG brand icons
- [x] 100% test coverage (51 tests)
