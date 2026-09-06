# SplitModal — Notes

## Template Identity

- Name: SplitModal
- Folder: apps/splitmodal
- Package: @free-react-templates/splitmodal
- Recreation of: ColorLib Modal 19 (split-screen product review modal)

## Design Tokens

- Font: Roboto (300, 400, 500, 700)
- Modal bg: #efefef
- Modal border-radius: 7px
- Modal shadow: 0 10px 50px -10px rgba(0,0,0,0.9)
- Body text: #b3b3b3, font-weight 300
- Heading: #000
- Description: #777
- Separator: 70px, 1px, #ccc
- Stars: #ffc107
- Heart: #dc3545
- Message/Plus: #007bff
- Share icon: #ccc, hover #000

## Key Decisions

- Copied scaffold from apps/modalrosa (simplest existing modal)
- injectUiSource() kept exactly as-is from modalrosa
- Uses lucide-react for all icons
- Split layout: left panel (image + price badge) / right panel (details)
