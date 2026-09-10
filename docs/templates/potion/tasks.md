# Potion — Prep Tasks & Design Notes

**Source:** ColorLib Wizard 6 (colorlib-wizard-6)
**Demo:** https://colorlib.com/etc/bwiz/colorlib-wizard-6/index.html
**Status:** Spec complete, ready for implementation

## Tasks (for implementer)

1. **Scaffold app** — Copy simplest existing app, rename to `potion`, set package `@free-react-templates/potion`, create `public/CNAME`, set `homepage` in `package.json`.
2. **Install dependencies** — No new deps needed. Use lucide-react for Camera icon (replace Material Design Iconic Font), ChevronLeft/ChevronRight for navigation arrows. Use picsum.photos for placeholder images.
3. **Theme tokens** — Add to `index.css` `@theme` block:
   - `--color-brand-pink: #f6c2ec` (lavender pink accent)
   - `--color-brand-pink-hover: #dbadd2`
   - `--color-brand-blue: #aac1f0` (lavender blue — next buttons)
   - `--color-brand-blue-hover: #98add6`
   - `--color-input-bg: #f7f7f7`
   - `--color-text: #808080`
   - `--color-text-dark: #333`
   - `--color-card: #ffffff`
4. **Fonts** — Load Poppins (400, 500, 600) and Muli (700) via Google Fonts `<link>` in `index.html`.
5. **Components** (in order):
   - `WizardLayout.tsx` — Centered card container (738px wide, responsive)
   - `GradientBackground.tsx` — Full-viewport gradient bg with faded text overlay
   - `ProgressDots.tsx` — Dot indicators below card (active = 22px pill, inactive = 10px circles)
   - `StepProfile.tsx` — Step 1: Avatar upload + First Name, Last Name, Team Name, Email, Password
   - `AvatarUpload.tsx` — Circular avatar preview with "Choose Picture" file trigger
   - `StepCategories.tsx` — Step 2: 2×3 grid of category cards with bg-images + labels
   - `CategoryCard.tsx` — Individual category card (bg-image, icon, label)
   - `StepAddress.tsx` — Step 3: Street Name, Street Number, City, Country (pill inputs)
   - `PillInput.tsx` — Reusable pill-shaped input with optional circle indicator
   - `WizardNav.tsx` — Back (pink pill) / Next (blue pill) buttons
6. **App.tsx** — Compose layout, manage step state + selected category, handle navigation
7. **Tests** — TDD: test each component, step transitions, avatar upload, category selection
8. **Footer** — "Made with Component Dock" linking https://www.componentdock.com/

## Design notes

### Layout structure
- Outer: `display: flex; height: 100vh; align-items: center; justify-content: center;`
- Background: gradient image (form-wizard-bg.jpg) — soft lavender to pink gradient with faded "TELL US ABOUT YOURS" text overlay
- Card: `width: 738px; height: 554px; background: #fff; border-radius: 10px; box-shadow: 0px 2px 7px rgba(0,0,0,0.1); padding: 71px 93px 0;`
- At <768px: card auto width/height, no shadow, no radius, no background

### Progress dots
- Container: absolute positioned, left 50%, bottom -50px (below card), translateX(-50%)
- Flex row of dots with 8px margin-right
- Inactive: 10×10px circle, background white
- Active: 22px wide, border-radius 5.5px (pill), white background
- Transition: all 0.5s ease

### Avatar section (Step 1)
- Form-header: flex row (33.75% avatar / 66.25% form-group)
- Avatar: circular image with thin border
- "Choose Picture": uppercase, 12px, font-weight 800, dark grey, camera icon + text
- On mobile: full-width, centered, margin-bottom 25px

### Form inputs (pill-shaped)
- Height: 46px, no border, background #f7f7f7, border-radius 23px
- Padding: 0 25px, text color #333
- Placeholder: #808080, uppercase, 13px
- Left indicator: 10×10px circle, 2px border #f6c2ec; active state fills with #f6c2ec
- Indicator positioned absolutely at left: 0, vertically centered
- Input has padding-left: 26px to accommodate indicator

### Category grid (Step 2)
- Container: margin-top 15px
- Row: flex, flex-wrap
- Grid items: 30% width, 134px height, 27px margins (right + bottom), border-radius 7px
- Background: cover image per category
- Content: icon image + uppercase white label (Poppins Medium 500)
- Hover: elevated box-shadow

### Buttons
- Height: 46px, border-radius 23px (pill), uppercase text
- Next: width 146px, bg #aac1f0, text white, icon right
- Next hover: bg #98add6 + wobble animation on icon
- Back: bg #f6c2ec, text white, icon left, padding-left 65px
- Back hover: bg #dbadd2
- Back hidden on step 1
- Last step: back visible, next becomes submit

### Responsive notes
- <768px: body bg none, wrapper block, card auto/none/shadow/radius, form-header block, grid items full-width, form-row block, steps hidden
- Actions stack vertically aligned right on mobile
