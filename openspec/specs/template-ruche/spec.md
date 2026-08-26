# OpenSpec: Template Ruche (Accordion Component)

## Purpose

Recreation of ColorLib **Accordion 11** (`https://colorlib.com/wp/template/accordion-11/`), styled as **Ruche** — an interactive, elegant accordion component showcase and FAQ documentation template. Built with React 19, Tailwind CSS 4, and TypeScript.

## Design Tokens (Inferred from Screenshot / Standard Component Themes)

- **Colors**:
  - Primary / Accent: Indigo-600 (`#4f46e5`) for active tabs, badges, and focus rings.
  - Backgrounds: Neutral slate-50 (`#f8fafc`) for cards, white (`#ffffff`) for container panels, dark slate-900 (`#0f172a`) for header/footer.
  - Text: Slate-900 (`#0f172a`) for headings, Slate-600 (`#475569`) for body descriptions.
- **Typography**:
  - Font Family: Inter / system sans-serif (`font-sans`).
- **Radii & Borders**: Rounded-xl (`0.75rem`) cards and collapsible panels with subtle slate-200 borders.

## Requirements & Scenarios

### Requirement 1: Hero / Header Section

- **Scenario:** The page displays a prominent header section introducing the Ruche accordion collection with a title ("Ruche Interactive Accordions"), subtitle, and quick search or category filter.

### Requirement 2: Interactive Accordion Groups

- **Scenario:** Multiple categorized accordion groups (e.g., General Information, Technical Specifications, Integration Guide, Billing & Support) are rendered.
- **Scenario:** Each accordion item can be expanded/collapsed smoothly. Clicking an item toggles its open/closed state while maintaining proper accessibility attributes (`aria-expanded`, `aria-controls`).
- **Scenario:** Supports both single-expand (accordion mode) and multi-expand (collapse mode) behaviors.

### Requirement 3: Interactive Playground / Customizer

- **Scenario:** A live customization panel allows users to toggle accordion variants (flush, bordered, separated, rounded), add icons, and test states instantly.

### Requirement 4: Footer Component

- **Scenario:** The footer displays branding and a required link to `https://www.componentdock.com/` ("Component Dock").
- **Scenario:** Includes quick navigation links and copyright information.

## Verification Checklist

- [ ] Spec validated (`npm run spec:validate`)
- [ ] 100% test coverage (`npm run test:coverage`)
- [ ] Correct CNAME and homepage URL (`ruche.free.componentdock.com`)
- [ ] Footer links Component Dock
