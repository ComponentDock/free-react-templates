import { Smile } from 'lucide-react'
import { Band, DemoPanel, GroupLabel } from './Band'
import { COLOR_LABELS, KitButton, type KitColor, type KitSize } from './KitButton'

const SOLID_COLORS: KitColor[] = ['primary', 'secondary', 'info', 'danger', 'warning', 'success']

const SIZES: { size: KitSize; label: string }[] = [
  { size: 'sm', label: 'Small' },
  { size: 'md', label: 'Medium' },
  { size: 'lg', label: 'Large' },
]

export function ButtonsShowcase() {
  return (
    <Band
      title="Buttons"
      lead="Use the kit's custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more."
    >
      <DemoPanel className="space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <KitButton color="primary" variant="solid" size="md">
            Button
          </KitButton>
          <KitButton color="primary" variant="solid" size="md">
            <Smile className="h-4 w-4" aria-hidden="true" />
            With Icon
          </KitButton>
        </div>
      </DemoPanel>

      <div>
        <GroupLabel>Example</GroupLabel>
        <div className="flex flex-wrap items-center gap-3">
          {SOLID_COLORS.map((color) => (
            <KitButton key={color} color={color} variant="solid" size="md">
              {COLOR_LABELS[color]}
            </KitButton>
          ))}
        </div>
      </div>

      <div>
        <GroupLabel>Button outline</GroupLabel>
        <div className="flex flex-wrap items-center gap-3">
          {SOLID_COLORS.map((color) => (
            <KitButton key={color} color={color} variant="outline" size="md">
              {COLOR_LABELS[color]}
            </KitButton>
          ))}
        </div>
      </div>

      <div>
        <GroupLabel>Button Pill</GroupLabel>
        <div className="flex flex-wrap items-center gap-3">
          {SOLID_COLORS.map((color) => (
            <KitButton key={color} color={color} variant="pill" size="md">
              {COLOR_LABELS[color]}
            </KitButton>
          ))}
        </div>
      </div>

      <div>
        <GroupLabel>Sizes</GroupLabel>
        <div className="flex flex-wrap items-center gap-3">
          {SIZES.map(({ size, label }) => (
            <KitButton key={size} color="primary" variant="solid" size={size}>
              {label}
            </KitButton>
          ))}
        </div>
      </div>
    </Band>
  )
}
