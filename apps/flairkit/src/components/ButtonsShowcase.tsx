import { Heart, Home } from 'lucide-react'
import { Band, LabelRow, SectionHeading } from './Band'
import { COLOR_LABELS, KitButton, OUTLINE_COLORS, type KitSize } from './KitButton'

const SOLID_COLORS = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
  'link',
] as const

const SIZES: { size: KitSize; label: string }[] = [
  { size: 'sm', label: 'Small' },
  { size: 'md', label: 'Regular' },
  { size: 'lg', label: 'Large' },
]

/** The opening `#start` band: label rows covering style, sizes, colors, outlines. */
export function ButtonsShowcase() {
  return (
    <Band id="start" className="bg-band">
      <SectionHeading>Buttons</SectionHeading>

      <div className="space-y-8">
        <LabelRow label="Style">
          <KitButton color="primary" variant="solid" size="md" className="px-4">
            Default
          </KitButton>
          <KitButton color="primary" variant="solid" size="md" pill>
            <Home className="h-4 w-4" aria-hidden="true" />
            Rounded
          </KitButton>
          <KitButton color="primary" variant="solid" size="md" fab aria-label="Favourite">
            <Heart className="h-4 w-4" aria-hidden="true" />
          </KitButton>
        </LabelRow>

        <LabelRow label="Sizes">
          {SIZES.map(({ size, label }) => (
            <KitButton key={size} color="primary" variant="solid" size={size}>
              {label}
            </KitButton>
          ))}
        </LabelRow>

        <LabelRow label="Colors">
          {SOLID_COLORS.map((color) => (
            <KitButton key={color} color={color} variant="solid" size="md">
              {COLOR_LABELS[color]}
            </KitButton>
          ))}
        </LabelRow>

        <LabelRow label="Outline">
          {OUTLINE_COLORS.map((color) => (
            <KitButton
              key={color}
              color={color}
              variant="outline"
              size="md"
              pill={color === 'primary'}
            >
              {COLOR_LABELS[color]}
            </KitButton>
          ))}
        </LabelRow>

        <LabelRow label="Outline Style 2">
          {OUTLINE_COLORS.map((color) => (
            <KitButton
              key={color}
              color={color}
              variant="outline-2"
              size="md"
              pill={color === 'primary'}
            >
              {COLOR_LABELS[color]}
            </KitButton>
          ))}
        </LabelRow>
      </div>
    </Band>
  )
}
