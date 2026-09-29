# Panelview — Implementation Tasks

Source: ColorLib "Bootstrap Sidebar 08"
Preview: https://preview.colorlib.com/theme/bootstrap-sidebar-08/ (unreachable; design from screenshot)
New name: panelview
App folder: apps/panelview

## Structure order

1. App shell (App.tsx) — two-column layout container
2. Sidebar component (Sidebar.tsx) — right column containing:
   - Categories section
   - Tag Cloud section
   - Newsletter section
3. MainContent component (MainContent.tsx) — left column with heading + paragraphs
4. Footer (with Component Dock link)

## Section-by-section fidelity notes

### Main Content Area
- Left column, ~65% width on desktop
- Large heading "Sidebar #08" → paraphrase as "Sidebar Template" or keep as-is (heading only)
- Two paragraphs of body text (lorem ipsum → paraphrased content)
- Dark gray text (#333), system sans-serif font
- Generous padding and line-height

### Sidebar (Right Column)
- Right column, ~35% width on desktop
- White background, same as main content
- No visible sidebar border (clean separation via spacing)

#### Categories
- Heading: "Categories" (bold, dark)
- 4 items: Mens Shoes, Mens Shoes, Accessories, Clothes
- Each item: text left-aligned, chevron icon right-aligned
- Items separated by light gray horizontal dividers (#e0e0e0)
- Hover state: subtle background change

#### Tag Cloud
- Heading: "Tag Cloud" (bold, dark)
- 8 tags: DISH, MENU, FOOD, SWEET, TASTY, DELICIOUS, DESSERTS, DRINKS
- Tags: light gray background (#f0f0f0), small rounded corners (4px)
- Uppercase text, medium gray (#555)
- Tags wrap naturally in a flex row

#### Newsletter
- Heading: "Newsletter" (bold, dark)
- Single email input with placeholder "Enter Email Address"
- Clean border style, full-width within sidebar column

### Responsive Behavior
- Below 768px: sidebar stacks below main content (single column)
- All sections remain readable and accessible

### Footer
- Links to https://www.componentdock.com/ branded as "Component Dock"
- No ColorLib attribution
