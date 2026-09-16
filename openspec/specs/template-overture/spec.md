# Template: Overture (Coming Soon)

## Purpose

Recreation of ColorLib **06 Comming Soon** (`https://colorlib.com/wp/template/06-comming-soon/`) as a React 19 + Vite + Tailwind 4 + TypeScript template.

- **Preview URL:** `https://preview.colorlib.com/theme/06-comming-soon/` (404 — preview unavailable; design extracted from screenshot)
- **Source screenshot:** `https://colorlib.com/wp/wp-content/uploads/sites/2/coming-soon-21.jpg`
- **App name:** `overture`
- **Package:** `@free-react-templates/overture`
- **Deploy URL:** `https://overture.free.componentdock.com`

## Design tokens

Extracted from the screenshot (preview unavailable):

| Token | Value | Notes |
| --- | --- | --- |
| Brand color (accent) | `#e91e63` (pink/rose) | Used for countdown numbers, CTA button |
| Background | Full-screen mountain landscape image with dark overlay (`bg-black/50`) | `https://picsum.photos/seed/overture/1600/900` |
| Heading font | Display serif (e.g. Playfair Display or similar elegant serif) | White, centered, large (~3.5rem) |
| Body font | Sans-serif (system/Inter) | White, centered |
| Countdown circles | White (`#ffffff`) background, circular (50%), ~60px diameter | Pink numbers inside |
| CTA button | Pink (`#e91e63`), rounded (`rounded-[50px]`), white text, bold, uppercase | "NOTIFY US" label |
| Social icons | Circular, brand-colored (FB #3b5998, Twitter #1da1f2, Google+ #dd4b39, Pinterest #bd081c, Snapchat #fffc00) | "Follow us for update" label |
| Dark overlay | `bg-black/40` to `bg-black/50` | Over full background image |

## Layout

Full-screen centered single-page layout:

1. **Background layer:** Full-viewport image with dark semi-transparent overlay
2. **Content (centered, z-10):**
   - Heading: "Coming Soon"
   - Subtext: descriptive paragraph about maintenance
   - Countdown timer: 4 circular elements (Days, Hours, Mins, Sec)
   - CTA button: "NOTIFY US"
3. **Social section (bottom center):**
   - "Follow us for update" label
   - 5 social media icon circles (Facebook, Twitter, Google+, Pinterest, Snapchat)

## Gherkin requirements

### Scenario: Full-screen hero with background image
```gherkin
Given the user visits the Overture page
Then a full-viewport background image is visible
And a dark semi-transparent overlay covers the image
```

### Scenario: Heading and subtext
```gherkin
Given the user visits the Overture page
Then a heading "Coming Soon" is displayed centered on the page
And a subtext paragraph describes the maintenance status
```

### Scenario: Countdown timer
```gherkin
Given the user visits the Overture page
Then a countdown timer with 4 units (Days, Hours, Mins, Sec) is displayed
And each unit is shown in a white circular element with pink numbers
And the countdown targets a future date (e.g. 30 days from page load)
```

### Scenario: Notify Us button
```gherkin
Given the user visits the Overture page
Then a "NOTIFY US" button is displayed below the countdown
And the button has pink background with white text
And clicking the button shows a thank-you confirmation message
```

### Scenario: Social media links
```gherkin
Given the user visits the Overture page
Then a "Follow us for update" label is displayed near the bottom
And 5 social media icon circles are shown (Facebook, Twitter, Google+, Pinterest, Snapchat)
And each icon links to its respective social platform
```

### Scenario: Responsive layout
```gherkin
Given the user views the page on a mobile device
Then all content remains centered and readable
And the countdown timer scales down appropriately
And social icons remain visible at the bottom
```

## Verification checklist

- [ ] Full-viewport background image with dark overlay renders correctly
- [ ] "Coming Soon" heading centered and styled with display serif font
- [ ] Maintenance subtext paragraph is readable (white on dark)
- [ ] Countdown timer shows Days/Hours/Mins/Sec in white circles with pink numbers
- [ ] Countdown targets a future date and updates in real time
- [ ] "NOTIFY US" button is pink, rounded, and shows confirmation on click
- [ ] 5 social icons displayed with brand colors
- [ ] "Follow us for update" label present above social icons
- [ ] Responsive on mobile (single column, centered content)
- [ ] Component Dock footer link present
- [ ] No ColorLib references in app code
- [ ] `public/CNAME` set to `overture.free.componentdock.com`
- [ ] `homepage` in package.json set to `https://overture.free.componentdock.com`
