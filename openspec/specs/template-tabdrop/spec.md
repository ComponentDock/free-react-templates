# Template: TabDrop (Accordion / FAQ)

## Purpose

- **Recreation of ColorLib source:** `accordion-07` (`https://colorlib.com/wp/template/accordion-07/`)
- **Live Preview URL:** `https://preview.colorlib.com/theme/accordion-07/`
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript (strict), Lucide React icons, shadcn/tailwind styling patterns.
- **App Workspace:** `apps/tabdrop` (`@free-react-templates/tabdrop`)

## Design Tokens (captured from live preview & screenshot)

- **Primary Brand Color:** Indigo / Violet (`#4f46e5` / Tailwind `indigo-600`) with soft blue/slate background gradients.
- **Neutral / Text Colors:** Slate 900 (`#0f172a`) for headings, Slate 600 (`#475569`) for body text, Slate 100 (`#f1f5f9`) for accordion item backgrounds / borders.
- **Font Family:** Inter / system sans-serif (`font-sans`).
- **Border Radius:** Rounded-xl (`0.75rem`) containers and cards, rounded-lg buttons.
- **Section Background:** Light clean neutral canvas (`bg-slate-50` / `bg-white`) with centered elegant card layout.

## Requirements & Gherkin Scenarios

### Requirement 1: Hero / Header Section

- **Description:** A clean introductory header with title, subtitle, and badge highlighting the FAQ / Accordion features.
- **Scenario:** Viewing the header
  - Given the user visits the TabDrop page
  - When the header renders
  - Then it displays a badge ("FAQ & Accordion"), a main title ("Frequently Asked Questions"), and a helpful subtitle.

### Requirement 2: Interactive Accordion Sections

- **Description:** An accordion component featuring expandable Q&A items with smooth transitions, plus/minus or chevron indicators, and clear typography.
- **Scenario:** Expanding and collapsing accordion items
  - Given the accordion list is rendered with default items ("How many events can I create?", "How many collaborators can I invite?", "Transparent and simple pricing", "Is my data safe?")
  - When the user clicks an accordion header
  - Then that item expands to show its detailed response text, while other items remain collapsed or can be toggled independently.

### Requirement 3: Footer Attribution

- **Description:** A professional footer containing copyright, links, and the required Component Dock branding link.
- **Scenario:** Checking footer contents
  - Given the user scrolls to the bottom of the page
  - When the footer renders
  - Then it displays copyright information and a prominent link to `https://www.componentdock.com/` ("Component Dock").

## Verification Checklist

- [ ] `npm run verify:app tabdrop` passes (typecheck + lint + 100% coverage tests + build).
- [ ] Footer links to `https://www.componentdock.com/`.
- [ ] No mention of ColorLib in app source code.
- [ ] CNAME points to `tabdrop.free.componentdock.com`.
