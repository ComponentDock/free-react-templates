# Lexguard Task Outline & Design Notes

## Overview

- **Source Template**: ColorLib Schmidt (`https://colorlib.com/wp/template/schmidt/`)
- **New Name**: Lexguard (`apps/lexguard`)
- **Category**: Portfolio / Personal Branding
- **Design Aesthetic**: Clean modern portfolio featuring a warm gold accent (`#d5c455`), dark headings (`#222222`), Poppins typography, split hero layout, and professional sections.

## Tasks

1. Scaffold `apps/lexguard` following existing portfolio app structure (e.g. `apps/aurora` or `apps/lexicon`).
2. Register `@free-react-templates/lexguard` workspace in root `package.json` and run `npm install`.
3. Configure `vite.config.ts` with `injectUiSource()`.
4. Implement components:
   - `Navbar.tsx`
   - `Hero.tsx`
   - `Services.tsx`
   - `Experience.tsx`
   - `Works.tsx`
   - `Blog.tsx`
   - `Contact.tsx`
   - `Footer.tsx` (linking `https://www.componentdock.com/`)
5. Write comprehensive unit tests for all components achieving 100% test coverage across lines, functions, branches, and statements.
6. Verify build, linter, typecheck, and test suite.
