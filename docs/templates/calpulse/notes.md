# Calpulse — Tasks & Design Notes

## Structure & Section Order

1. **Header / Title Section**: Centered heading "Calendar #05" (adapted as Calpulse Header).
2. **Main Calendar Grid**:
   - 3-column flex/grid container (`year`, `month`, `day`).
   - Each container features:
     - Previous item (opacity 0.3, dark semi-transparent bg).
     - Current item (prominent 40px numbers, category label).
     - Next item (opacity 0.3, dark semi-transparent bg).
3. **Footer**: Branded attribution linking `https://www.componentdock.com/` ("Component Dock").

## Design Notes & Tokens

- **Colors**: `#7e0cf5` (Year), `#983df7` (Month), `#a555f8` (Day).
- **Font**: Google Font `Lato`.
- **Responsive**: Stacks vertically on smaller screens, 3-column row on medium+ screens.
