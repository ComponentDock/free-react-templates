# Carepoint Design Notes

## Source

- ColorLib "Caremed" → https://colorlib.com/wp/template/caremed/
- Preview analyzed: https://preview.colorlib.com/theme/caremed/

## Key Design Decisions

- Roboto font family (not Poppins like many other ColorLib templates)
- Green primary brand (#20d34a) — vibrant, medical/health feel
- Blue secondary (#283290) — used in logo accent and department overlays
- 3-column info boxes at the top (Working Hours, Appointments, Emergency Cases)
- Parallax backgrounds on departments and CTA sections
- Circular department doctor images
- 6-service grid layout (3x2)

## Component Mapping

| Original Class           | Component       | Notes                            |
| ------------------------ | --------------- | -------------------------------- |
| `.top_bar`               | TopBar          | Thin info bar                    |
| `.header`                | Header          | Nav + logo                       |
| `.home_slider_container` | Hero            | Slider simplified to static hero |
| `.boxes`                 | InfoBoxes       | 3 green info boxes               |
| `.about`                 | About           | Split text + image               |
| `.departments`           | Departments     | Parallax + 4-card grid           |
| `.services`              | Services        | 6-card grid                      |
| `.cta`                   | CTA             | Parallax CTA section             |
| `.footer`                | Footer          | 3-column footer                  |
| `.copyright`             | Footer (bottom) | Copyright + Component Dock       |
