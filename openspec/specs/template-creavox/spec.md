# Template: Creavox (Creative Agency)

## Purpose

Creavox is a single-page creative digital agency website in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Boxus" free template (source:
https://colorlib.com/wp/template/boxus/, preview:
https://preview.colorlib.com/theme/boxus/), built under a DIFFERENT name
(**Creavox**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a one-page agency site built with jQuery, SmartMenus,
carouFredSel, Isotope, and prettyPhoto: a full-width dark-purple hero with
centered logo + tagline, a services carousel, masonry portfolio grid,
about section with team slider, news/blog list with testimonials, a video
feature with full-width icon carousel, animated skill progress bars, and a
contact form with embedded Google Map. The page uses numbered section titles
(01–07) on colored backgrounds alternating left/right layout.

**WHAT MAKES CREAVOX DISTINCT (signature behaviors):**

1. **Alternating left/right section title columns.** Each section has a
   numbered badge (01–07) in a colored `span` inside a `.section-title-holder`
   that alternates left/right across sections. The title holder has a colored
   background (varies per section) with white text, creating a distinctive
   split-layout pattern: title on one side, content on the other.

2. **Deep purple primary palette.** The dominant brand color is deep purple
   navy `#221C5A` used across hero, services, video, and skills section
   backgrounds. Accent colors: green `#32DB8A` (service section title bg,
   progress bars), rose/pink `#e54b76` / `#ee87a4` (highlights, hover),
   gold `#FFBA42` / `#E3A536` (video timeline, progress bars), blue
   `#4C9EE7` (progress bars).

3. **Three typeface hierarchy.** Montserrat for section titles, hero title,
   and content titles. PT Serif for the hero subtitle/description. Roboto
   for body text and form elements. This three-font system creates clear
   visual hierarchy.

4. **Full-width background image sections with parallax-like repeats.** The
   hero, services, video, and skills sections use full-width dark-purple
   backgrounds with repeating/covering background images
   (`background-size: cover/100%`), creating a rich textured look on top
   of the purple base.

5. **Masonry portfolio grid with hover overlay.** Portfolio uses Isotope
   masonry with two column widths (`p_one` full-width, `p_one_half`
   half-width) in a 2x2 grid, each item with a hover overlay showing
   category icon + type + name text. A "LOAD MORE" button sits below.

6. **Team members as horizontal slider cards.** The about section has a
   horizontal image slider (carouFredSel) of team member cards, each with
   a photo on the right and name/position/description on the left.

7. **Full-width icon carousel.** Below the video section, a full-width
   horizontal scrolling carousel shows icon+label pairs (Video Editing,
   Premium Cleer, For All Displays, etc.) with a next-arrow and dot
   pagination.

8. **Animated skill progress bars with colored fills.** Skills section
   has percentage-based progress bars where each bar has a different
   color fill (green HTML, gold CSS, rose PSD, blue DESIGN) with matching
   percentage text and title.

9. **Testimonial slider in news section.** The news section includes a
   text testimonial carousel below the blog articles, showing quotes with
   author names.

10. **Numbered blog articles.** News items show a large sequence number
    (01–04) on the left, with author name, category tag, and article title
    on the right.

## Design Tokens

Extracted from live preview CSS (`style.css`) at
`https://preview.colorlib.com/theme/boxus/style.css`:

### Colors

| Token | Hex | Usage |
|-------|-----|-------|
| Primary (deep purple) | `#221C5A` | Hero bg, services bg, video bg, skills bg, nav bg, content titles, footer dark |
| Secondary purple | `#26276D` | Footer background |
| Section num bg (green) | `#32DB8A` | Service section title badge bg, HTML progress bar fill |
| Section num text | `#55B286` | Service section number text |
| Accent rose | `#e54b76` / `#ee87a4` | Links hover, about timeline dates, contact highlights, PSD progress bar bg |
| Accent gold | `#FFBA42` / `#E3A536` | Video timeline dates, CSS progress bar |
| Accent blue | `#4C9EE7` | Design progress bar fill |
| Body text | `#23214c` | All body text, form labels |
| Secondary text | `#727190` / `#5b5881` | Timeline descriptions, footer text |
| Muted text | `#9a9a9a` | Placeholder text |
| White | `#fff` | Section content bg, nav text, hero text, section title text |

### Typography

| Role | Font | Weights | Source |
|------|------|---------|--------|
| Body | Roboto | 300, 400, 700 | Google Fonts / Cloudflare CDN |
| Headings / Titles | Montserrat | 700 | Google Fonts / Cloudflare CDN |
| Hero subtitle | PT Serif | 400 | Google Fonts / Cloudflare CDN |

### Buttons

- "SEND" submit button: solid `#e54b76` background, white text, uppercase
- "LOAD MORE" / "GO TO BLOG": text links with uppercase styling, no border
- Navigation links: white text on transparent bg, no border

### Section Backgrounds

- Hero: `#221C5A` solid with repeating background image overlay
- Services: `#221C5A` solid
- Portfolio: `#fff` white
- About: `#fff` white
- News: `#221C5A` with background image
- Video: `#221C5A` with background image
- Skills: `#221C5A` with background image
- Contact: `#fff` white
- Footer: `#221C5A` / `#26276D`

### Spacing

- Content width: 1170px max (`.content-1170`)
- Section padding: generous vertical space (~100px+ top/bottom)

## Gherkin Requirements

### Feature: Creavox — Creative Agency One-Page Template

#### Scenario: Hero section displays centered logo and tagline
  - GIVEN the user loads the page
  - THEN the hero section shows a centered logo image
  - AND a large heading "We Craft Awesome Web And Graphic Design Solutions"
  - AND a subtitle in serif font below
  - AND the background is deep purple with a decorative image overlay

#### Scenario: Navigation menu anchors to sections
  - GIVEN the user loads the page
  - THEN a fixed navigation bar is visible with links: Home, Services,
    Portfolio, About, News, Video, Skills, Contact
  - AND clicking each link scrolls to the corresponding section

#### Scenario: Services section shows a card carousel
  - GIVEN the user scrolls to the Services section
  - THEN a numbered title "01" with label "Services" appears on a green
    background
  - AND four service cards are visible (Branding, Mobile Apps, Web, Graphic)
  - AND each card has an icon, title, and description
  - AND a next arrow allows sliding to a second set of four cards

#### Scenario: Portfolio section shows a masonry grid
  - GIVEN the user scrolls to the Portfolio section
  - THEN a numbered title "02" with label "Portfolio" appears
  - AND a 2-column masonry grid shows 4 portfolio items with images
  - AND hovering over a portfolio item reveals an overlay with category
    icon, type label, and item name
  - AND a "LOAD MORE" button is visible below the grid

#### Scenario: About section shows bio and team slider
  - GIVEN the user scrolls to the About section
  - THEN a numbered title "03" with label "CRAFTERS" appears
  - AND a two-column layout shows descriptive text on the left and a
    timeline with colored dates on the right
  - AND below the text, an image slider shows team member photos
  - AND team member cards show name, position, and bio description

#### Scenario: News section shows blog list and testimonials
  - GIVEN the user scrolls to the News section
  - THEN a numbered title "04" with label "STORIES" appears
  - AND four blog articles are listed with sequence numbers (01–04),
    author name, category tag, and headline
  - AND a "GO TO BLOG" link is at the bottom
  - AND a testimonial carousel below shows quotes with author names

#### Scenario: Video section shows feature with icon carousel
  - GIVEN the user scrolls to the Video section
  - THEN a numbered title "05" with label "OFFER" appears
  - AND a two-column layout shows description and a timeline on the left,
    and a video thumbnail with play button on the right
  - AND a full-width horizontal carousel below shows icon+label pairs
    (Video Editing, Premium Cleer, For All Displays, etc.)

#### Scenario: Skills section shows progress bars
  - GIVEN the user scrolls to the Skills section
  - THEN a numbered title "06" with label "EXPERTISE" appears
  - AND four animated progress bars are shown: HTML (81%, green),
    CSS (93%, gold), PSD (72%, rose), DESIGN (99%, blue)
  - AND each bar displays its percentage and label text in matching color

#### Scenario: Contact section shows form and map
  - GIVEN the user scrolls to the Contact section
  - THEN a numbered title "07" with label "Contact" appears
  - AND a two-column layout shows description text on the left and a
    contact form on the right
  - AND the form has fields: Name, Email, Subject, Message, and SEND button
  - AND an embedded Google Map iframe appears full-width below the form

#### Scenario: Footer shows copyright and social links
  - GIVEN the user scrolls to the bottom of the page
  - THEN a footer shows copyright text and a link to Component Dock
  - AND social media icon links (Twitter, Behance, Dribbble, Facebook, RSS)
    are visible on the right

## Verification Checklist

- [ ] Hero section: centered logo, Montserrat heading, PT Serif subtitle,
      deep purple background with image overlay
- [ ] Navigation: 8 section links, smooth scroll to anchors
- [ ] Services: numbered badge "01", 4-card carousel with prev/next,
      icon + title + description per card
- [ ] Portfolio: masonry grid 4 items, hover overlay, load more button
- [ ] About: numbered badge "03", 2-column layout, timeline with colored
      dates, image slider, team member cards
- [ ] News: numbered badge "04", 4 blog articles with numbers, author,
      category, title; testimonial carousel below
- [ ] Video: numbered badge "05", 2-column with video thumbnail + play
      button, full-width icon carousel below
- [ ] Skills: numbered badge "06", 4 colored progress bars with
      percentages
- [ ] Contact: numbered badge "07", 2-column with form + description,
      Google Map embed below
- [ ] Footer: copyright with Component Dock link, social icons
- [ ] Design tokens: deep purple `#221C5A` primary, Montserrat headings,
      PT Serif subtitle, Roboto body
- [ ] No ColorLib references in app code (only in spec/TEMPLATES.md/PR)
- [ ] Footer links to https://www.componentdock.com/
- [ ] All images use picsum.photos placeholders with deterministic seeds
