# Popwise — Design Notes

## Structure Order (section-by-section)

1. **Page background** — Full-height white container with centered content
2. **Launch Button** — Centered Bootstrap btn-secondary, px-4 py-3, text "Launch modal"
3. **Modal Dialog** — Bootstrap modal-lg, modal-dialog-centered, border-radius 7px
   - **Split Screen Container** — d-flex row
     - **Left: Product Image** — flex: 0 0 50%, bg-image cover, price badge absolute top-left (white text)
     - **Right: Product Info** — p-4 px-5, text-center
       - Share icon (absolute, top-right, #ccc → #000 on hover)
       - Product name h3 (#000, 22px) with centered 70px divider line (#ccc)
       - 5-star rating (4 × #ffc107 filled, 1 × empty)
       - Description paragraph (#777, 14px, font-weight 300)
       - Social row (w-50 mx-auto): heart/like (#dc3545), message (#007bff), add (#007bff)

## Fidelity Notes

- Match 7px border-radius on modal (not Bootstrap default 0.3rem)
- Match heavy box-shadow: 0 10px 50px -10px rgba(0,0,0,0.9)
- Product image is 50% flex with no border-radius (rounded-0 on modal-content)
- Divider line is 70px wide, 1px height, centered via absolute positioning
- Star rating uses Bootstrap text-warning (#ffc107) for filled stars, empty star has no color
- Social icons use icomoon font (replace with lucide-react)
- Button uses Bootstrap btn-secondary (#6c757d)
- Share icon is absolutely positioned at top-right of right panel
- Responsive: stack vertically on mobile (d-flex flex-column below breakpoint)
- Background color: #efefef on modal body
