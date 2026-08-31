# Template: Glide (Carousel Showcase)

## Purpose

Recreation of ColorLib **Carousel 03** (`https://colorlib.com/wp/template/carousel-03/`, preview: `https://preview.colorlib.com/theme/bootstrap/carousel-03/`) as a modern React 19 + TypeScript + Tailwind CSS 4 application (`@free-react-templates/glide`).

## Design Tokens & Aesthetic

- **Brand Accent / Primary**: Purple/Mauve (`#b063c5` / `rgb(176, 99, 197)`)
- **Typography**: Playfair Display (serif) for headings; system sans-serif for body/labels.
- **Card Radius**: Rounded-xl / `15px` corners with subtle drop shadows (`shadow-2xl`) and dark gradient overlays (`from-transparent via-black/40 to-black/90`).
- **Interactive Elements**: Category pill tags with white background and uppercase purple text (`#b063c5`), interactive slide carousel with smooth transitions, pagination dots (active dot highlighted in purple), and navigation arrows.
- **Footer**: Required Component Dock attribution link (`https://www.componentdock.com/`).

## Requirements & Gherkin Scenarios

### 1. Header & Section Title

- **Requirement**: Display a clean header section with a prominent heading "Carousel Showcase" or "#03" and subtitle.
- **Scenario**: User views the top of the page
  - Given the Glide application is loaded
  - When the user views the header section
  - Then they should see the section title "Carousel #03" centered with appropriate spacing.

### 2. Interactive Carousel Cards

- **Requirement**: Showcase feature cards with background imagery, dark gradient overlay, category tag, and serif headline.
- **Scenario**: User interacts with the carousel slides
  - Given the carousel displays multiple work items (e.g. Working Spaces for Startups Freelancer)
  - When the user clicks navigation arrows or pagination dots
  - Then the active slide updates smoothly, showing the corresponding background image, category badge ("WEB DESIGN"), and bold serif headline.

### 3. Footer Attribution

- **Requirement**: Every template footer must link to Component Dock (`https://www.componentdock.com/`).
- **Scenario**: User scrolls to the footer
  - Given the user is at the bottom of the page
  - When they view the footer
  - Then they see "More templates at Component Dock" linking to `https://www.componentdock.com/`.

## Verification Checklist

- [ ] TypeScript strict check (`npm run typecheck`) passes.
- [ ] Lint check (`npm run lint`) passes.
- [ ] Unit tests with 100% coverage (`npm run test:coverage`) pass.
- [ ] Build succeeds (`npm run build`).
- [ ] CNAME and homepage configured correctly for Surge deployment (`glide.free.componentdock.com`).
