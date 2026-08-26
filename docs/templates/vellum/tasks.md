# Vellum (Accordion 16) — Tasks & Design Notes

## Tasks / TODO Outline

1. **Scaffold Workspace**:
   - Create `apps/vellum/` workspace following existing app conventions.
   - Configure `package.json`, `vite.config.ts` (with `injectUiSource()`), `tsconfig.json`, `index.html` (CNAME `vellum.free.componentdock.com`), and `public/CNAME`.
2. **Design & Tokens**:
   - Set up Tailwind CSS 4 theme tokens in `src/index.css` (slate/indigo palette).
3. **Components**:
   - `Navbar.tsx`: Responsive navigation with mobile menu toggle.
   - `Hero.tsx`: Main headline, introductory text, and CTA buttons.
   - `Features.tsx`: 3-column grid highlighting key features with Lucide icons.
   - `AccordionSection.tsx`: Interactive stateful accordion items with smooth expand/collapse behavior.
   - `CtaBanner.tsx`: Engaging dark banner with email input / action button.
   - `Footer.tsx`: Footer links and mandatory Component Dock attribution (`https://www.componentdock.com/`).
4. **Tests & Verification**:
   - Write comprehensive Vitest + Testing Library tests in `src/App.test.tsx` achieving 100% test coverage across lines, functions, branches, and statements.
   - Run per-app verification (`scripts/verify-app.sh vellum`).

## Design Notes (Fidelity)

- **Source**: ColorLib Accordion 16 (`https://colorlib.com/wp/template/accordion-16/`). Live preview 404; faithfully structured from the official screenshot (`https://colorlib.com/wp/wp-content/uploads/sites/2/accordion-16.jpg`).
- **Aesthetic**: Modern, clean informational accordion layout emphasizing readability, structured Q&A, and professional corporate navy/indigo styling.
