# Template: Crease (UI / Accordion Component)

## Purpose

Recreation of ColorLib **Accordion 05** (`https://colorlib.com/wp/template/accordion-05/`), preview URL: `https://preview.colorlib.com/theme/bac/accordion-05/`. Built with Vite, React 19, Tailwind CSS 4, and TypeScript (strict).

## Design Tokens (Extracted from Reference)

- **Primary Brand Color / Accent**: `#75d6d1` (Cyan / Teal)
- **Background Color**: `#fafafa` (light off-white for page background), `#fff` for accordion card containers.
- **Text Color**: `#212529` (body), `#000` (headings), `rgba(255, 255, 255, 0.8)` (collapsed/expanded card body text inside active accordion items).
- **Font Family**: `"Poppins", Arial, sans-serif`
- **Border / Divider**: `rgba(0, 0, 0, 0.05)` for item borders, `rgba(255, 255, 255, 0.2555)` for sub-list item borders.
- **Shadows**: `-webkit-box-shadow: 0px 10px 29px -16px rgba(0, 0, 0, 0.12);` box-shadow on `.myaccordion`.
- **Icons**: Lucide React equivalents for Ionicons (`Settings`, `MapPin`, `Trophy`/`Activity`, chevron arrows).

## Requirements & Gherkin Scenarios

### Requirement 1: Hero / Header Section

- As a visitor, I see a centered section heading "Accordion #05" with a generous padding rhythm (`ftco-section` padding).

### Requirement 2: Interactive Accordion Cards

- As a visitor, I can view an interactive accordion component (`.myaccordion`) containing collapsible items (Manage, Location, Hobbies, etc.).
- Clicking an accordion header toggles its expanded/collapsed state with smooth transitions and active icon color changes (`#75d6d1`).
- Expanded card bodies reveal either sub-lists (e.g., Account, Settings, Profile links with bullet numbers) or informative paragraph content with teal background highlights (`#75d6d1`) and white text.

### Requirement 3: Branding & Footer

- As a visitor, I see a branded footer linking to `https://www.componentdock.com/` ("Component Dock").

## Verification Checklist

- [ ] Spec validation passes (`npm run spec:validate`)
- [ ] 100% test coverage on all components
- [ ] Typecheck, lint, and build pass successfully
- [ ] Footer correctly points to Component Dock
- [ ] No mention of ColorLib in application source code
