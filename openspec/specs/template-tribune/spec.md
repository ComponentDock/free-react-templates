# Template: Tribune (Conference / Event)

## Purpose

Tribune is a CONFERENCE / EVENT template in the free-react-templates monorepo.
It is an original React recreation of the ColorLib "Confpro" free template
(source: https://colorlib.com/wp/template/confpro/), built under a DIFFERENT
name (**Tribune**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

- **Source slug:** `confpro`
- **Source URL:** https://colorlib.com/wp/template/confpro/
- **Preview URL:** https://preview.colorlib.com/theme/confpro/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/confpro-free-template.jpg
- **New name:** `tribune` (apps/tribune, @free-react-templates/tribune)
- **Deploy target:** https://tribune.free.componentdock.com
- **Category:** Conference / Event
- **Description (from ColorLib):** "Confpro is a free conference/event website
  template with a bold purple accent, countdown timer, schedule, speakers, and
  CTA sections — designed for marketing conferences and professional events."

## Design Tokens

Extracted from the live preview stylesheet
(`https://preview.colorlib.com/theme/confpro/styles/main_styles.css`).

### Colors

| Token                    | Value              | Usage                                      |
| ------------------------ | ------------------ | ------------------------------------------ |
| `--color-primary`        | `#7f66ff`          | Primary accent (violet/purple)             |
| `--color-secondary`      | `#ff9000`          | Secondary accent (orange)                  |
| `--color-dark`           | `#0a2642`          | Navbar, dark section backgrounds (navy)    |
| `--color-darker`         | `#081624`          | Deepest navy (footer bar)                  |
| `--color-heading`        | `#ffffff`          | Headings on dark backgrounds               |
| `--color-text`           | `#68727c`          | Body text (medium gray)                    |
| `--color-text-light`     | `#a1acb7`          | Secondary/muted text                       |
| `--color-bg`             | `#ffffff`          | Main content background (white)            |
| `--color-bg-alt`         | `#f5f8fb`          | Alternate section background (off-white)   |
| `--color-red`            | `#db5246`          | Alert/decorative red                       |
| `--color-white`          | `#ffffff`          | Button text, nav text on dark              |

### Fonts

| Font     | Family                                | Usage                           |
| -------- | ------------------------------------- | ------------------------------- |
| All text | `'Roboto', sans-serif`                | Everything (300, 400, 500, 700) |

**Font weights used:** 300 (body), 400 (paragraphs, nav links), 500 (subtitles),
700 (headings, section titles, countdown numbers).

### Button Shape

- **Default (.button):** rectangular, no border-radius, `width: 202px`,
  `height: 59px`, uppercase text, `letter-spacing: 1px`, centered content.
- **Button 1 (white):** `background: #ffffff`, dark text, bottom accent
  `::after` in `#7f66ff`.
- **Button 2 (purple):** `background: #7f66ff`, white text, bottom accent
  `::after` in `#0a2642`.
- **Button 3 (orange):** `background: #ff9000`, white text.
- **Button 4 (purple hover):** `background: #7f66ff` with transition.
- **Navbar CTA:** Purple background `#7f66ff`, white text, uppercase, arrow icon.

### Section Title Accent

- Section titles are centered (`text-center`) with a subtitle above
  ("see what's all about") in `#7f66ff` color, 13px, font-weight 700.
- Schedule title bars are full-width colored bars (`height: 112px`,
  `line-height: 112px`): Day 1 = `#7f66ff`, Day 2 = `#ff9000`.

## Section Structure (DOM order)

### 1. Header / Navbar

- **Background:** `#0a2642` (dark navy), full-width fixed.
- **Logo:** "CONFPRO CONFERENCE" — left-aligned, white text, bold.
- **Nav links:** Home, About us (dropdown), Schedule (dropdown), News,
  Contact — white text, uppercase, `letter-spacing: 2px`.
- **Right side:** "Login / Register" text link, "GET TICKETS →" purple button.
- **Mobile:** hamburger menu toggles dropdown nav.

### 2. Hero Slider (3 slides)

- **Layout:** Full-viewport-width carousel with background images.
- **Each slide contains:**
  - Large white heading (e.g. "2019 Marketing Conference")
  - Orange year text ("2019") — `color: #ff9000`
  - Purple date badge: "12-16 February 2019 | Miami, FL" —
    `background: #7f66ff`, white text, inline-block
  - White "GET TICKETS →" button with bottom border animation
- **Dots:** Numbered (01. 02. 03.), active dot gets purple background.
- **Transition:** Fade or slide between slides.

### 3. Countdown Timer

- **Background:** Purple overlay (`#7f66ff` with opacity) on a crowd image.
- **Layout:** Four columns: Days, Hours, Minutes, Seconds.
- **Numbers:** Large white bold text (`font-size: 72px`, `font-weight: 700`).
- **Labels:** Small white text below each number.
- **Colons:** Between each number pair.

### 4. About Section

- **Background:** `#ffffff` (white).
- **Content:** Centered section title "The Best Marketing Conference".
- **Text:** Description paragraph below the title.
- **Layout:** Centered text, max-width container.

### 5. Topics / Tabs Section

- **Background:** `#f5f8fb` (off-white).
- **Subtitle:** "see what's all about" — purple, uppercase, 13px.
- **Title:** "The Topics" — centered, large, bold.
- **Tabs:** 6 topics in a vertical tab list:
  1. Marketing 101 - Studies for beginners
  2. Marketing Strategy
  3. Cyber Marketing
  4. Online Strategy
  5. Stories
  6. Special Guest
- **Active tab:** Purple left border or background highlight.
- **Tab content:** Image + text description for each topic.

### 6. Schedule Section

- **Background:** `#ffffff` (white).
- **Subtitle:** "see what's all about".
- **Title:** "Schedule".
- **Day bars:** Full-width colored headers:
  - Day 1: `#7f66ff` background, "Day 1. February 12, 2019"
  - Day 2: `#ff9000` background, "Day 2. February 13, 2019"
- **Schedule items:** Each row has:
  - Speaker thumbnail image
  - Time slot (e.g. "08:00 AM - 09:00 AM")
  - Session title (bold)
  - Host info with link

### 7. Speakers Section

- **Background:** `#f5f8fb` (off-white).
- **Subtitle:** "see what's all about".
- **Title:** "Speakers".
- **Layout:** Grid of speaker cards (3-4 per row).
- **Each card:** Photo, name, role/title.

### 8. CTA Section

- **Background:** Purple overlay (`#7f66ff`) on a background image.
- **Content:** "Get your tickets now!" — centered, large, white.
- **Description text** below the heading.
- **Button:** White "GET TICKETS →" button.

### 9. Footer

- **Background:** `#0a2642` (dark navy).
- **Columns:**
  - Logo + description text
  - Quick Links
  - Newsletter (email input + subscribe button)
  - Instagram (image grid)
- **Footer bar:** `#081624` (darkest navy), copyright text + social icons.

## Verification Checklist

- [ ] Header matches: dark navy bg, logo left, nav center, CTA right
- [ ] Hero slider: 3 slides, background images, white headings, orange year,
      purple date badge, numbered dots
- [ ] Countdown timer: purple overlay, 4-column layout, large numbers
- [ ] About section: white bg, centered title
- [ ] Topics section: off-white bg, 6 tabs, image + text content
- [ ] Schedule section: white bg, colored day bars, schedule items with
      thumbnails
- [ ] Speakers section: off-white bg, card grid
- [ | ] CTA section: purple overlay, centered text + button
- [ ] Footer: dark navy, 4 columns, newsletter form, copyright bar
- [ ] Colors match tokens: `#7f66ff` primary, `#ff9000` secondary,
      `#0a2642` dark
- [ ] Font: Roboto throughout
- [ ] Buttons: rectangular, no border-radius, correct variants
- [ ] Footer links to `https://www.componentdock.com/` ("Component Dock")
- [ ] No ColorLib references in app code
- [ ] `public/CNAME` contains `tribune.free.componentdock.com`
- [ ] `"homepage": "https://tribune.free.componentdock.com"` in package.json
