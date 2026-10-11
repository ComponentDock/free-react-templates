import { Heart } from 'lucide-react'
import { COLOR_LABELS, KitButton } from './KitButton'
import { ShowcaseSection } from './section'

const LINK_COLORS = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'dark',
] as const

const DEMO_BUTTONS = [
  { id: 'default', label: 'Default Button', variant: 'outline' as const },
  { id: 'filled', label: 'Filled Button', variant: 'solid' as const },
  { id: 'round', label: 'Round Button', variant: 'round' as const },
]

/** Five button treatments plus the seven colored text links. */
export function ButtonsShowcase() {
  return (
    <ShowcaseSection id="buttons" title="Buttons">
      <div className="flex flex-wrap items-center gap-3">
        {DEMO_BUTTONS.map(({ id, label, variant }) => (
          <KitButton key={id} color="primary" variant={variant} size="md">
            {label}
          </KitButton>
        ))}
        <KitButton color="primary" variant="solid" size="md">
          <Heart className="h-4 w-4" aria-hidden="true" />
          Button With Icon
        </KitButton>
        <KitButton color="primary" variant="solid" size="md" circle aria-label="Heart button">
          <Heart className="h-4 w-4" aria-hidden="true" />
        </KitButton>
        <KitButton color="primary" variant="link" size="md">
          Simple Button
        </KitButton>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        {LINK_COLORS.map((color) => (
          <KitButton key={color} color={color} variant="link" size="md">
            {COLOR_LABELS[color]} link
          </KitButton>
        ))}
      </div>
    </ShowcaseSection>
  )
}
