# Countdown — Implementation Notes

## Source

- **ColorLib template:** "01 Comming Soon"
- **Source slug:** `01-comming-soon`
- **Source URL:** https://colorlib.com/wp/template/01-comming-soon/
- **Live preview:** https://colorlib.com/etc/cs/01-comming-soon.html
- **New name:** `countdown`
- **Spec:** `openspec/specs/template-countdown/spec.md`

## Section order (from source HTML)

1. **Logo** — absolute top-left of left section (30px height)
2. **Heading + Message** — "Under Construction" h1 + maintenance paragraph
3. **Email signup form** — pill input + pink "NOTIFY US" button
4. **Post-signup text** — grey "Sign up now..." line
5. **Social icons** — bottom of left section, 5 brand-colored circles
6. **Right section** — full background image with gradient overlay + countdown timer

## Design token extraction (from `styles.css` + `responsive.css`)

### Colors

| Token | Value | Source CSS |
|-------|-------|------------|
| Brand (primary) | `#F84982` | `.submit-btn` background |
| Brand hover | `#e40b52` | `.submit-btn:hover` |
| Focus border | `#f89fbc` | `.email-input:focus` border-color |
| Input bg | `#F1F2F3` | `.email-input` background |
| Body text | `#333` | `body` color |
| Paragraph | `#555` | `p` color |
| Muted | `#999` | `.post-desc` color |
| Heading | inherited `#333` | No explicit override on h1 |
| Gradient purple | `#23074d` | `.right-section:after` gradient start |
| Gradient orange | `#cc5333` | `.right-section:after` gradient end |
| Gradient opacity | `0.3` | `.right-section:after` opacity |

### Social icon brand colors

| Platform | Color |
|----------|-------|
| Facebook | `#2A61D6` |
| Twitter | `#3AA4F8` |
| Google+ | `#F43846` |
| Instagram | `#8F614A` |
| Pinterest | `#E1C013` |

### Typography

| Element | Font | Notes |
|---------|------|-------|
| Body | Open Sans, sans-serif | 16px base, weight 400 |
| h1-h3 | Poppins, sans-serif | h1: 3.5em, bold |
| Paragraphs | Open Sans | 1.05em, line-height 1.6 |
| Input placeholder | Open Sans | 0.9em, letter-spacing 1px |

### Layout

| Property | Value |
|----------|-------|
| Page height | `100vh` |
| Left section | `float: left; width: 50%; height: 100%` |
| Right section | `position: absolute; top: 0; right: 0; width: 50%; height: 100%` |
| Mobile (≤992px) | Stack vertically, each 50% height, 100vw |
| Email input width | `400px` (desktop), `100%` (mobile) |
| Submit button width | `120px` (desktop), `100px` (mobile) |
| Social icon size | `35×35px`, `border-radius: 40px` |
| Countdown container | `width: 80%` (desktop), `100%` (≤1200px) |

### Shapes

| Element | Border-radius |
|---------|---------------|
| Email input | `40px` (full pill) |
| Submit button | `0 40px 40px 0` (right-side pill) |
| Social icons | `40px` (circles) |

## Implementation tasks

### Task 1: Project scaffolding

- [ ] Copy simplest existing app as template base
- [ ] Rename package to `@free-react-templates/countdown`
- [ ] Update `vite.config.ts` with `injectUiSource()` pattern
- [ ] Set `public/CNAME` to `countdown.free.componentdock.com`
- [ ] Set `"homepage"` in package.json to `https://countdown.free.componentdock.com`
- [ ] Run `npm install` at repo root to register workspace in lockfile

### Task 2: Page layout (split sections)

- [ ] Create `src/App.tsx` with full-viewport 50/50 split layout
- [ ] Left section: white background, vertically centered content
- [ ] Right section: background image (picsum placeholder) with gradient overlay
- [ ] Responsive: stack at 992px breakpoint

### Task 3: Left section content

- [ ] Logo component (top-left, absolute)
- [ ] Heading: "Under Construction" in Poppins bold
- [ ] Maintenance message paragraph
- [ ] Email signup form: pill input + pink submit button
- [ ] "Sign up now..." muted text below form
- [ ] Social media icons row at bottom

### Task 4: Right section + countdown timer

- [ ] Background image with `linear-gradient(to right, #23074d, #cc5333)` overlay at 0.3 opacity
- [ ] Circular countdown timer component (Days, Hours, Minutes, Seconds)
- [ ] Timer targets configurable end date
- [ ] Timer reaches all zeros at expiry

### Task 5: Styling tokens

- [ ] Create `src/index.css` with Tailwind `@theme` block for brand colors
- [ ] Open Sans + Poppins via Google Fonts link in `index.html`
- [ ] Apply pill shapes, social icon colors, gradient overlay via Tailwind classes

### Task 6: Tests (TDD)

- [ ] Test page renders split layout
- [ ] Test heading and message content
- [ ] Test email input + submit button rendering and interactions
- [ ] Test social icons render with correct labels
- [ ] Test countdown timer displays and ticks
- [ ] Test responsive behavior at 992px
- [ ] Achieve 100% coverage

### Task 7: Footer + attribution

- [ ] Add Component Dock footer linking `https://www.componentdock.com/`

### Task 8: Verification

- [ ] Run `npm run verify:app -- countdown`
- [ ] Visual diff against live preview
- [ ] Responsive check at 992px
