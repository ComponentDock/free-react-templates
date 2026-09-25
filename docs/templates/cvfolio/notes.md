# CvFolio — Design Notes & Implementation Tasks

Source: ColorLib Cvportfolio (https://colorlib.com/wp/template/cvportfolio/)
Preview: https://preview.colorlib.com/theme/cvportfolio/
New name: cvfolio

## Section order (from live DOM)

1. Header (absolute, yellow bar, 3-column contact info + Download CV button)
2. Intro / Profile (hero background image + white card overlay + circular photo)
3. Portfolio (heading + filter tabs + masonry 3-col grid)
4. About Me (heading + paragraph + 4 radial progress circles)
5. Work Experience (heading + 2 job entries with bullets)
6. Education (heading + degree entries)
7. Footer (Component Dock link)

## Design fidelity notes

### Color palette

- Primary accent: `#FFA804` / `#FFAD01` (golden yellow)
- Body text: `#333`, paragraphs: `#777`, muted: `#999`
- Social icon default: `#887392` (purple), hover: `#FFA804`
- All section headings have a yellow accent bar: 10px tall, 50px wide, 5px border-radius

### Typography

- Primary: Poppins (400, 500, 600, 700) — body and headings
- Script accent: Allura (400) — loaded in original but not prominent; can omit

### Key visual details

- Header: absolute-positioned at top:30px, rounded (5px), yellow bg, white text
- Intro: hero background image with dark overlay, white gradient at bottom (150px)
- Profile photo: 200×200px circle, floated up 100px into hero via negative margin
- Social icons: 35px circles with scale-up yellow overlay on hover
- Portfolio filter: text links, active state colored yellow
- Portfolio grid: 3 columns, some items are 2 stacked images (50/50 split)
- About section: 4 radial progress circles in a row
- Experience entries: yellow company name, grey description, bullet list

### Layout

- Bootstrap-based grid (col-sm-4 / col-sm-8 split for heading + content)
- Section padding: 100px top/bottom
- Centered container (max-width ~1170px)

## Implementation tasks

- [ ] Create `apps/cvfolio/` from simplest existing app (rename package)
- [ ] Set up `index.html` with Poppins font link
- [ ] Build `Header.tsx` — 3-column contact bar, Download CV button
- [ ] Build `Hero.tsx` — background image, dark overlay, white bottom gradient
- [ ] Build `Profile.tsx` — circular photo, name, title, info list, social icons
- [ ] Build `Portfolio.tsx` — heading, filter tabs, masonry grid (all filters show everything since filtering is JS-based, simplify to display all)
- [ ] Build `About.tsx` — heading, paragraph, 4 radial progress circles
- [ ] Build `Experience.tsx` — heading, 2 job entries
- [ ] Build `Education.tsx` — heading, education entries
- [ ] Build `Footer.tsx` — Component Dock link
- [ ] Compose in `App.tsx` in DOM order
- [ ] Write tests for every component (100% coverage)
- [ ] Verify build and coverage pass
