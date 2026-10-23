# Template: Tidepool (UI Kit / Component Showcase)
<!-- prep-status: shipped-as=kaleido -->
> **SHIPPED-UNDER** — the ColorLib `jellyfish-ui-kit` design this prep describes already
> ships as `apps/kaleido` (<https://kaleido.free.componentdock.com>).
> Do not scaffold `apps/tidepool`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-kaleido/spec.md`.

## Purpose

Recreation of ColorLib **Jellyfish UI Kit** — a Bootstrap-based UI component
showcase with color swatches, cards, features, pricing, alerts, badges,
buttons, carousel, dropdowns, and forms. This is NOT a single-purpose
landing page; it demonstrates reusable UI components in a scrollable
showcase layout.

- **Source:** [colorlib.com/wp/template/jellyfish-ui-kit/](https://colorlib.com/wp/template/jellyfish-ui-kit/)
- **Preview (returned 404):** `https://preview.colorlib.com/theme/jellyfish-ui-kit/`
- **Fallback reference:** Screenshot at `https://colorlib.com/wp/wp-content/uploads/sites/2/jellyfish-ui-kit.jpg` + downloaded zip (`jellyfish.zip`) for CSS/HTML structure.
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript · Vitest

## Design Tokens (extracted from source `css/style.css` + screenshot)

### Colors

| Token         | Hex       | Usage                          |
|---------------|-----------|--------------------------------|
| primary       | `#007BFF` | Buttons, links, active states  |
| secondary     | `#6C757D` | Muted text, secondary buttons  |
| success       | `#49A942` | Success badges, alerts         |
| info          | `#17A2B8` | Info badges, alerts            |
| warning       | `#FFC20E` | Warning badges, alerts         |
| danger        | `#ED1C24` | Danger badges, alerts, errors  |
| indigo        | `#6A67CE` | Accent color, buttons          |
| dark          | `#454D66` | Dark text, dark button         |
| teal          | `#2DDE98` | Accent, teal backgrounds       |
| pink          | `#A626AA` | Pink accent background         |
| purple        | `#8E43E7` | Purple accent background       |
| orange        | `#FF6A00` | Orange accent background       |
| bg-light      | `#F7F8F9` | Light section backgrounds      |
| bg-gray       | `#F0F2F5` | Alternate section backgrounds  |
| text-heading  | `#454D66` | Section headings               |
| text-muted    | `#888888` | Subheadings, helper text       |

### Typography

- **Font family:** `"Work Sans", sans-serif` (Google Fonts)
- **Body font-weight:** 300 (light)
- **Line-height:** 1.7
- **Body padding:** 30px left/right (for full-width UI kit showcase)

### Border Radius

- **Cards:** 0 (sharp, Bootstrap default overridden to square)
- **Pricing cards:** 0 (sharp corners)
- **Buttons (pill variant):** 50px (fully rounded)
- **Badge pills:** 50px
- **Alerts:** 0.25rem (Bootstrap default)

### Shadows

- **Card hover:** `0 5px 15px -5px rgba(0, 0, 0, 0.2)` (`.card-20201`)
- **Buttons:** no box-shadow (flat)

### Transitions

- **Buttons:** `0.3s all ease`

## Section Order (from source `index.html`)

1. **Hero** — Full-width background image (underwater/jellyfish photo), centered headline "Jellyfish Bootstrap UI Kit", subtitle lorem ipsum. Overlay semi-transparent blue.
2. **Color Scheme** — 3×3 grid of color swatches (Primary, Secondary, Success, Info, Warning, Danger, Indigo, Dark, Teal) with `<h5>` labels.
3. **Cards** — 4-column grid: three "Anchor UI Kit" product cards (image + title + text + button) + one "James Smith" profile card (avatar + name + role + social links).
4. **Features** — 3-column layout: Settings (gear icon), Development (code icon), Support (headset icon). Each with heading + description.
5. **Icons** — Icon showcase grid (using icomoon icon font in source; use lucide-react in React).
6. **Avatars** — Avatar showcase grid (circular, various sizes).
7. **Pricing** — 3-column: Free ($0/mo), Pro ($15/mo), Enterprise ($29/mo). Each with feature list + CTA button. Pro card highlighted.
8. **Alerts** — Alert variants: with icon + shadow, dismissing (close button).
9. **Badge** — Contextual variations (primary, secondary, success, etc.) + Pill badges.
10. **Buttons** — Button examples: solid colors, outline variants, pill shapes, sizes (sm/md/lg).
11. **Carousel** — 3-slide carousel with labels and controls.
12. **Dropdowns** — Dropdown menu examples (standard, split, etc.).
13. **Forms** — Form inputs: text fields, selects, checkboxes, radio buttons, textareas.

## Requirements

### Feature: Tidepool template behaviour

Feature: Tidepool UI Kit Showcase

#### Scenario: Hero section displays correctly

- **GIVEN** the page loads
- **THEN** the hero section is visible with a full-width background image
- **AND** the heading "Jellyfish Bootstrap UI Kit" is centered on the hero
- **AND** the subtitle lorem ipsum text is displayed below the heading

#### Scenario: Color scheme grid shows all 9 colors

- **GIVEN** the page loads
- **WHEN** I scroll to the "Color Scheme" section
- **THEN** 9 color swatches are displayed in a 3x3 grid
- **AND** each swatch has a label: Primary, Secondary, Success, Info, Warning, Danger, Indigo, Dark, Teal
- **AND** each swatch displays its assigned brand color

#### Scenario: Cards section renders product and profile cards

- **GIVEN** the page loads
- **WHEN** I scroll to the "Cards" section
- **THEN** 3 product cards with image, title, text, and button are shown
- **AND** 1 profile card with avatar, name, role, and social links is shown

#### Scenario: Features section shows three feature blocks

- **GIVEN** the page loads
- **WHEN** I scroll to the "Features" section
- **THEN** 3 feature blocks are displayed: Settings, Development, Support
- **AND** each feature block has an icon, heading, and description

#### Scenario: Pricing section renders three tiers

- **GIVEN** the page loads
- **WHEN** I scroll to the "Pricing" section
- **THEN** 3 pricing cards are displayed: Free, Pro, Enterprise
- **AND** the Free card shows $0/mo
- **AND** the Pro card shows $15/mo and is highlighted
- **AND** the Enterprise card shows $29/mo
- **AND** each card has a feature list and CTA button

#### Scenario: Alerts section shows variants

- **GIVEN** the page loads
- **WHEN** I scroll to the "Alerts" section
- **THEN** alerts with icon and shadow are displayed
- **AND** dismissing alerts with a close button are displayed

#### Scenario: Badge section shows contextual and pill variations

- **GIVEN** the page loads
- **WHEN** I scroll to the "Badge" section
- **THEN** contextual badges in primary, secondary, success, info, warning, danger colors are shown
- **AND** pill-shaped badges are shown

#### Scenario: Buttons section demonstrates all variants

- **GIVEN** the page loads
- **WHEN** I scroll to the "Buttons" section
- **THEN** solid color buttons are displayed
- **AND** outline buttons are displayed
- **AND** pill-shaped buttons are displayed
- **AND** buttons in different sizes (sm, md, lg) are displayed

#### Scenario: Carousel shows three slides

- **GIVEN** the page loads
- **WHEN** I scroll to the "Carousel" section
- **THEN** a carousel with 3 slides is displayed
- **AND** navigation controls (prev/next) are functional
- **AND** slide indicators are clickable

#### Scenario: Dropdowns section shows menu examples

- **GIVEN** the page loads
- **WHEN** I scroll to the "Dropdowns" section
- **THEN** dropdown menus are displayed and toggle on click

#### Scenario: Forms section shows input components

- **GIVEN** the page loads
- **WHEN** I scroll to the "Forms" section
- **THEN** text inputs, selects, checkboxes, radio buttons, and textareas are displayed
- **AND** form inputs are focusable and accept user input

## Verification checklist

- [ ] All 13 sections render in correct order matching source `index.html`
- [ ] Color scheme grid uses exact brand hex values from CSS tokens
- [ ] Font is "Work Sans" (Google Fonts loaded in `index.html`)
- [ ] Cards use sharp corners (border-radius: 0) with shadow on hover
- [ ] Pricing cards have correct prices and highlighted Pro tier
- [ ] Buttons support solid, outline, pill, and size variants
- [ ] Carousel is functional with prev/next and indicators
- [ ] Alerts support icon + shadow and dismiss functionality
- [ ] Badges show contextual colors and pill shape variant
- [ ] Dropdowns toggle open/close on click
- [ ] Forms have proper input components (text, select, checkbox, radio, textarea)
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] No references to ColorLib in app code
- [ ] Uses `packages/ui` components (Button, Card, etc.) where applicable
- [ ] Tests: 100% coverage, Vitest + Testing Library
- [ ] Build: `vite build` succeeds
- [ ] `npm run spec:validate` passes
