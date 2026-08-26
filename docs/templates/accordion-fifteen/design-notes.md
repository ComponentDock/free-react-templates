# Design Notes: AccordionFifteen (Accordion 15)

- **Source**: ColorLib Accordion 15 (`https://colorlib.com/wp/template/accordion-15/`)
- **Preview URL**: `https://preview.colorlib.com/theme/bac/accordion-15/`
- **Category**: Widget / Accordion
- **Design Structure**:
  1. Header container with soft shadow and `#efefef` background.
  2. Four main accordion rows (Profile, Messages, Settings, Logout) with icons.
  3. Expandable sub-lists inside active accordion panels.
  4. Footer with Component Dock branding link.
- **Implementation Guidelines for Implementers**:
  - Use `lucide-react` for clean icons (User, MessageSquare, Settings, LogOut).
  - Ensure 100% test coverage with Vitest and Testing Library.
  - Register app in `package.json` workspaces and root dependencies.
