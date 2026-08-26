# TabDrop Template Tasks & Design Notes

## Overview

Recreation of ColorLib accordion-07 as **TabDrop**, a modern, clean FAQ and collapsible accordion template.

## Section Breakdown & Fidelity Notes

1. **Header / Navbar:** Minimal top bar with logo ("TabDrop"), navigation links (Home, FAQ, Support, Contact), and a CTA button.
2. **Hero Section:** Centered heading with soft indigo accent badge and description subtitle.
3. **Accordion List Container:**
   - Item 1: "How many events can I create?" (Expanded by default matching live preview)
   - Item 2: "How many collaborators can I invite?"
   - Item 3: "Transparent and simple pricing"
   - Item 4: "Is my data safe?"
   - Interactive state management using React `useState` or accessible accordion primitives.
4. **Call to Action / Support Banner:** A secondary prompt for users who still have questions.
5. **Footer:** Clean multi-column footer with links and required Component Dock branding link (`https://www.componentdock.com/`).

## Design Tokens Mapping

- Tailwind v4 theme tokens configured in `src/index.css`.
- Indigo-600 primary action buttons & indicators.
- Slate-50 background with crisp white card containers (`shadow-sm border border-slate-200`).
