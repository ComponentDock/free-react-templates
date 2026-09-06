# Splitform — Tasks

Recreation of ColorLib Modal 02 (sign-in/sign-up split modal).

## Design Research

- **Preview:** https://preview.colorlib.com/theme/bootstrap/modal-02/
- **Font:** Poppins (Google Fonts)
- **Primary:** #007bff (Bootstrap blue)
- **Layout:** Two-panel modal (sign-in left, sign-up right) with vertical divider
- **Social:** Facebook + Twitter login buttons

## Implementation Tasks

1. Scaffold app from drift template
2. Create Navbar component (site name, Home link, dark mode toggle)
3. Create Landing component (heading + Launch Modal button)
4. Create SplitModal component:
   - Sign-in panel: username, password, sign-in button, remember me, forgot password, social login
   - Sign-up panel: first name, last name, email, password, login button, terms text
   - Vertical divider between panels
   - Close button, backdrop click, Escape key dismissal
5. Create Footer component (site name, tagline, Component Dock link)
6. Write tests for all components (100% coverage)
7. Run per-app gate
8. PR + merge + bookkeeping
