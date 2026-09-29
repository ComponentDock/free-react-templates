# Sidelane — Design Notes

## Replication Analysis

### Layout

- Fixed left sidebar (w-64), full height, blue/indigo background
- Main content offset by `lg:ml-64` on desktop
- Mobile: sidebar slides in from left, overlay backdrop
- Hamburger button in topbar (mobile only)

### Color Tokens (extracted from screenshot)

- `--color-sidebar-bg: #4a6cf7` (vibrant blue/indigo)
- `--color-sidebar-text: #ffffff`
- `--color-sidebar-hover: rgba(255,255,255,0.1)`
- `--color-accent: #ffffff`
- `--color-body-text: #666666`
- `--color-heading-text: #333333`
- `--color-page-bg: #ffffff`

### Typography

- Font: Poppins (weights 400, 500, 600, 700)
- Heading: bold, dark gray
- Body: regular weight, medium gray

### Navigation

- 7 items with lucide-react icons: Home, About, Works, Blog, Gallery, Services, Contacts
- White text on blue background
- Active item: white left border + slightly brighter background

### Newsletter Section

- "Subscribe for newsletter" heading
- Email input with semi-transparent white background
- Placeholder text: "Enter Email Address"

### Footer

- Copyright line
- Component Dock link

### Main Content

- White background
- Large heading "Sidelane"
- Descriptive paragraphs about the template
