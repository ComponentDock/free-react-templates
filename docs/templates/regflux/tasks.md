# Regflux — Task Outline

## Template info

- **Name**: Regflux
- **Original**: ColorLib Regform 14
- **Preview URL**: https://preview.colorlib.com/theme/colorlib-regform-14/ (404 — using screenshot reference)
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-14.jpg

## Design tokens extracted

- Background: #c5e4f3 (light blue)
- Card: white, shadow, max-w-[520px], rounded-lg
- Labels: uppercase, text-xs, font-bold, dark gray
- Inputs: full-width, border-b-2, transparent bg
- Gender toggle: #5ba4cf blue selected, rounded buttons
- Submit button: #5ba4cf blue, rounded, white text
- Additional Info: collapsible with arrow, blue text
- Font: Poppins via Google Fonts

## Implementation steps

1. Scaffold from regcraft (copy app, rename package)
2. Update index.css with regflux design tokens
3. Implement RegistrationForm with all fields
4. Implement collapsible Additional Info section
5. Add gender toggle buttons (not select)
6. Update Navbar (remove — design has no navbar, just card on background)
7. Write tests for all components
8. Run per-app gate: scripts/verify-app.sh regflux
9. Create PR, merge, bookkeeping

## Differences from source

- Using placeholder images (picsum) where original had assets
- Google Fonts (Poppins) loaded via link in index.html
- No ColorLib branding or attribution
- Footer links to Component Dock
