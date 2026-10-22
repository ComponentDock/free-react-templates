# Template: Mill (Industrial / Corporate)
<!-- prep-status: shipped-as=cogwork -->
> **SHIPPED-UNDER** — the ColorLib `industries` design this prep describes already
> ships as `apps/cogwork` (<https://cogwork.free.componentdock.com>).
> Do not scaffold `apps/mill`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-cogwork/spec.md`.

## Purpose

Recreation of the ColorLib **Industries** template for use as a React 19 + Vite
+ Tailwind CSS 4 + TypeScript single-page app under the name `mill`.

- **ColorLib source:** https://colorlib.com/wp/template/industries/
- **Live preview (fetched):** https://preview.colorlib.com/theme/industries/
- **Screenshot reference:** https://colorlib.com/wp/wp-content/uploads/sites/2/industries-free-template.jpg
- **Preview status:** ✅ Reached and analyzed (DOM + CSS fetched 2026-09-13)

## Design tokens

Extracted from `css/style.css` on the live preview:

| Token            | Value                       | Notes                                         |
|------------------|-----------------------------|-----------------------------------------------|
| Primary color    | `#fd5f00`                   | Bright orange — used for `.text-primary`, `.bg-primary`, `.btn-primary` |
| Primary hover    | `#d75100`                   | Darker orange on hover                        |
| Dark background  | `#343a40`                   | Navbar and dark sections                      |
| Light background | `#f8f9fa`                   | `.bg-light` on services and testimonials      |
| Body text color  | `#212529`                   | Near-black                                    |
| Font family      | `Oxygen, sans-serif`        | Google Font (400, 700 weights)                |
| Button radius    | `0.25rem`                   | Slightly rounded (Bootstrap default)          |
| Border/separator | `#eee`                      | Section dividers, footer border-top           |
| Footer padding   | `7em 0`                     | Generous vertical spacing                     |
| Slider text      | `#ffffff`                   | White text on hero images                     |
| Readmore style   | Uppercase, arrow icon       | `.readmore` class, hover slides right          |
| CTA button       | `.btn-outline-white`        | White outline on orange bg, rounded corners   |
| Loader spinner   | Stroke `#f4b214`            | Golden yellow spinner (loading overlay)       |

### Color palette (Tailwind `@theme`)

```css
@theme {
  --color-primary: #fd5f00;
  --color-primary-hover: #d75100;
  --color-dark: #343a40;
  --color-surface: #f8f9fa;
  --color-body: #212529;
  --color-border: #eeeeee;
}
```

## Requirements

### 1. Navbar

Dark background (`#343a40`), brand text "Mill" (white), responsive collapse.
Links: Home, About, Projects, Services (dropdown → Architectural Design, Interior, Building), Blog, Contact.
Mobile: hamburger toggle with collapse menu.

#### Scenario: Desktop navbar renders all links

- **GIVEN** the viewport is wider than 992px
- **WHEN** the page loads
- **THEN** the navbar displays brand "Mill" and links Home, About, Projects, Services, Blog, Contact

#### Scenario: Services dropdown opens on hover/click

- **GIVEN** the viewport is wider than 992px
- **WHEN** the user hovers or clicks "Services"
- **THEN** a dropdown appears with Architectural Design, Interior, Building

#### Scenario: Mobile navbar shows hamburger toggle

- **GIVEN** the viewport is narrower than 992px
- **WHEN** the page loads
- **THEN** the navbar shows a hamburger button
- **AND** the nav links are hidden until the toggle is clicked

### 2. Hero Slider

Full-width image slider with background images, white centered text overlay.
Play button (fancy box video link placeholder).
Two slides: "We Are Industrial Company" / "Create, Enhance and Sustain".
Subtext placeholder underneath each heading.

#### Scenario: Hero slider displays first slide

- **GIVEN** the page loads
- **THEN** the hero section shows a full-width background image
- **AND** the heading reads "We Are Industrial Company"
- **AND** a play button icon is visible

#### Scenario: Hero slider auto-advances

- **GIVEN** the page loads
- **WHEN** 5 seconds pass
- **THEN** the second slide is visible with heading "Create, Enhance and Sustain"

### 3. Features / Services (3-column)

Light background (`#f8f9fa`). Three centered cards in a row:
- Automotive Parts (bookmark icon, orange)
- Maintenance Services (heart icon, orange)
- Green Energy (leaf icon, orange)

Each card: icon → heading → short paragraph.

#### Scenario: Three service cards render

- **GIVEN** the features section is in the viewport
- **THEN** three cards are visible: Automotive Parts, Maintenance Services, Green Energy
- **AND** each card has an orange icon above its heading

### 4. About / Engineering (image + 4 features)

Heading: "We Are Reliable Engineering In House".
Layout: image on left, 2 feature blocks stacked on center + 2 on right.
Features: Green Energy, Precision Mechanics, Construction Machines, Reliable and Stable.
Each feature: orange icon → heading → short text.

#### Scenario: About section shows heading and features

- **GIVEN** the about section is in the viewport
- **THEN** the heading reads "We Are Reliable Engineering In House"
- **AND** 4 feature items are displayed with orange icons

### 5. About Alternate (image + text block)

Image on right, text block on left.
Heading: "Create, Enhance and Sustain".
Paragraph + "Read More" link with arrow icon.

#### Scenario: About alternate section renders with read more

- **GIVEN** the about alternate section is in the viewport
- **THEN** a heading "Create, Enhance and Sustain" is visible
- **AND** a "Read More" link with arrow is present

### 6. Projects Grid

Heading: "Our Latest Projects".
Subtext paragraph.
6 project thumbnail cards in a 3-column grid (no gutters).
Each card: full-bleed image with overlay (project title + plus icon) on hover.

#### Scenario: Projects grid renders 6 items

- **GIVEN** the projects section is in the viewport
- **THEN** 6 project cards are visible in a 3-column grid
- **AND** each card shows a title and a plus icon overlay on hover

### 7. Testimonials (carousel)

Light background. Heading: "Happy Clients".
Owl-carousel style horizontal slider of testimonial cards.
Each card: avatar image + name + meta label + blockquote text.

#### Scenario: Testimonials carousel renders cards

- **GIVEN** the testimonials section is in the viewport
- **THEN** at least 3 testimonial cards are visible
- **AND** each card has an avatar, name, and blockquote

### 8. Blog Posts

Heading: "Blog Posts" + subtext.
4 blog post items in 2 columns.
Each: thumbnail image on left + date + title + "Read More" link on right.

#### Scenario: Blog section renders 4 posts

- **GIVEN** the blog section is in the viewport
- **THEN** 4 blog post items are displayed in 2 columns
- **AND** each post has a date, title, and Read More link

### 9. CTA Banner

Orange background (`#fd5f00`). White text.
Heading: "Create, Enhance and Sustain".
Description paragraph.
Button: "Download This Template" (white outline, rounded).

#### Scenario: CTA banner renders with orange background

- **GIVEN** the CTA section is in the viewport
- **THEN** the background is orange (#fd5f00)
- **AND** the heading text is white
- **AND** a white outline button is visible

### 10. Footer

Dark background. 4-column layout:
- Col 1: "About Us" + paragraph + social icons (Twitter, Facebook, LinkedIn, Instagram)
- Col 2: "Contact Info" with Address, Telephone, Email
- Col 3: "Quick Links" (About, Terms, Disclaimers, Contact)
- Col 4: (empty in original)
Bottom: Copyright line with heart icon.

#### Scenario: Footer renders all columns

- **GIVEN** the footer is in the viewport
- **THEN** "About Us" section with social icons is visible
- **AND** "Contact Info" with address, phone, email is visible
- **AND** "Quick Links" with 4 links is visible
- **AND** a copyright line with heart icon is visible

#### Scenario: Footer links to Component Dock

- **GIVEN** the footer renders
- **THEN** the copyright area links to https://www.componentdock.com/

## Replication reference notes

- **Preview DOM:** Fetched live from `https://preview.colorlib.com/theme/industries/` (504 lines HTML).
- **CSS:** `css/style.css` fetched (2305 lines). Tokens extracted above.
- **Screenshot:** ColorLib preview image shows a dark navbar, full-bleed hero with industrial imagery (factory/warehouse), orange accent color on icons and CTAs, light gray sections for features/testimonials, dark footer. Clean, professional industrial/corporate aesthetic.
- **Font:** Oxygen (Google Fonts, 400 + 700 weights). Montserrat also loaded via inline style but Oxygen is the main body/heading font.
- **Icons:** Ionicons (`ion-*` classes) and Font Awesome (`fa-*`). Replace with `lucide-react`.
- **Slider:** Owl Carousel with jQuery. Replace with a React carousel or CSS-only solution.
- **Fancybox:** Video lightbox on hero play button. Replace with a simple modal or omit.
- **No parallax sections.** Pure background-image sections.

## Verification checklist

- [ ] Spec written with all 10 sections
- [ ] Design tokens documented and mapped to `@theme`
- [ ] All Gherkin scenarios cover each section
- [ ] Preview DOM analyzed (live fetch confirmed)
- [ ] CSS tokens extracted and recorded
- [ ] Screenshot visual description included
- [ ] New name "mill" confirmed no collision with apps/ or specs/
- [ ] ColorLib source URL recorded
- [ ] Component Dock footer link requirement noted
