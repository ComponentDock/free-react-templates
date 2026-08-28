# Specification: BtnVortex (Bootstrap Buttons 14 Recreation)

Recreation of ColorLib "Bootstrap Buttons 14" (`https://colorlib.com/wp/template/bootstrap-buttons-14/`). Note: preview URL was unreachable; falling back to screenshot and professional button showcase patterns with modern vortex/gradient styling.

## User Requirements

- **Navbar**: Brand title, theme toggle (light/dark), links to sections, and CTA.
- **Hero Section**: Catchy header, subtitle, and action buttons introducing the vortex button collection.
- **Vortex Gradient Buttons**: High-energy gradient buttons with smooth hover transitions and glow effects.
- **Neon & Glow Buttons**: Vibrant neon-bordered and glowing interactive button styles.
- **3D Depth Buttons**: Buttons with realistic 3D elevation, active push states, and tactile feedback.
- **Interactive Playground**: Live customizer where users can tweak button text, variant, size, rounded corners, and copy the generated React/Tailwind code.
- **Footer**: Branded footer linking `https://www.componentdock.com/` ("Component Dock").

## Acceptance Criteria

1. **Spec Validation**: `npm run spec:validate` passes.
2. **Test Coverage**: 100% coverage across all files in `apps/btnvortex/src/`.
3. **Build & Typecheck**: `bash scripts/verify-app.sh btnvortex` passes successfully.
