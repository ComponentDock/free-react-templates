import { useState } from 'react'
import { ChevronDown, Heart } from 'lucide-react'
import { KitButton, KitLink, type KitColor, type KitSize } from './KitButton'
import { ShowcaseSection, SubHeading } from './section'

const STYLE_ROW: { label: string; variant: 'solid' | 'round' }[] = [
  { label: 'Default', variant: 'solid' },
  { label: 'Round', variant: 'round' },
]
const SIZE_ROW: { label: string; size: KitSize }[] = [
  { label: 'Small Size', size: 'sm' },
  { label: 'Regular Size', size: 'md' },
  { label: 'Large Size', size: 'lg' },
]
const SOLID_COLORS: { color: KitColor; label: string }[] = [
  { color: 'primary', label: 'Primary' },
  { color: 'success', label: 'Success' },
  { color: 'danger', label: 'Danger' },
  { color: 'warning', label: 'Warning' },
  { color: 'info', label: 'Info' },
  { color: 'light', label: 'Light' },
  { color: 'dark', label: 'Dark' },
]
const LINK_COLORS: { color: KitColor; label: string }[] = [
  { color: 'primary', label: 'Primary link' },
  { color: 'secondary', label: 'Secondary link' },
  { color: 'success', label: 'Success link' },
  { color: 'danger', label: 'Danger link' },
  { color: 'warning', label: 'Warning link' },
  { color: 'info', label: 'Info link' },
  { color: 'dark', label: 'Dark link' },
]
const DISABLED_ROW = ['Primary link', 'Secondary Link'] as const
const DROPDOWN_ITEMS = ['Action', 'Another action', 'Something else here']
const DROPDOWN_LABELS = ['Dropdown button', 'Dropdown button', 'Dropdown button']

/** One dropdown button: closed by default, toggled open on demand. */
function DropdownButton({ label, index }: { label: string; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative inline-block">
      <KitButton
        color="primary"
        variant="solid"
        size="md"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {label}
        <ChevronDown className="h-4 w-4" aria-hidden="true" />
      </KitButton>
      {open && (
        <ul
          aria-label={`${label} menu ${index}`}
          className="absolute left-0 top-full z-20 mt-1 w-52 rounded border border-line bg-white py-2 text-left shadow-menu"
        >
          {DROPDOWN_ITEMS.map((item) => (
            <li key={item}>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="w-full cursor-pointer px-4 py-1 text-left text-sm normal-case text-body hover:bg-light"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

/** The kit's button catalog: styles, sizes, colours, links, dropdowns, blocks. */
export function ButtonsShowcase() {
  return (
    <ShowcaseSection id="buttons" title="Buttons" subtitle="Pick your style">
      <div className="flex flex-wrap items-center gap-3">
        {STYLE_ROW.map(({ label, variant }) => (
          <KitButton key={label} color="primary" variant={variant} size="md">
            {label}
          </KitButton>
        ))}
        <KitButton color="primary" variant="round" size="md">
          <Heart className="h-4 w-4" aria-hidden="true" /> With Icon
        </KitButton>
        <KitButton color="primary" variant="round" size="md" circle aria-label="Favourite this kit">
          <Heart className="h-4 w-4" aria-hidden="true" />
        </KitButton>
        <KitButton color="primary" variant="link" size="md">
          Simple
        </KitButton>
      </div>

      <div>
        <SubHeading>Pick your size</SubHeading>
        <div className="flex flex-wrap items-center gap-3">
          {SIZE_ROW.map(({ label, size }) => (
            <KitButton key={label} color="primary" variant="round" size={size}>
              {label}
            </KitButton>
          ))}
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          {SIZE_ROW.map(({ label, size }) => (
            <KitButton key={label} color="primary" variant="outline" size={size}>
              {label}
            </KitButton>
          ))}
        </div>
      </div>

      <div>
        <SubHeading>Pick your color</SubHeading>
        <div className="flex flex-wrap items-center gap-3">
          {SOLID_COLORS.map(({ color, label }) => (
            <KitButton key={label} color={color} variant="solid" size="md">
              {label}
            </KitButton>
          ))}
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          {SOLID_COLORS.map(({ color, label }) => (
            <KitButton key={label} color={color} variant="outline" size="md">
              {label}
            </KitButton>
          ))}
        </div>
      </div>

      <div>
        <SubHeading>Links</SubHeading>
        <div className="flex flex-wrap items-center gap-4">
          {LINK_COLORS.map(({ color, label }) => (
            <KitButton key={label} color={color} variant="link" size="md">
              {label}
            </KitButton>
          ))}
        </div>
      </div>

      <div>
        <SubHeading>Disabled Buttons</SubHeading>
        <div className="flex flex-wrap items-center gap-4">
          <KitButton color="primary" variant="link" size="md" disabled>
            {DISABLED_ROW[0]}
          </KitButton>
          <KitButton color="secondary" variant="solid" size="md" disabled>
            {DISABLED_ROW[1]}
          </KitButton>
        </div>
      </div>

      <div>
        <SubHeading>Buttons with Dropdown</SubHeading>
        <div className="flex flex-wrap items-center gap-3">
          {DROPDOWN_LABELS.map((label, index) => (
            <DropdownButton key={`${label}-${index}`} label={label} index={index} />
          ))}
        </div>
      </div>

      <div>
        <SubHeading>Block Level Buttons</SubHeading>
        <div className="space-y-3">
          <KitButton color="info" variant="solid" size="block">
            Block Level info
          </KitButton>
          <KitLink href="#cards" color="success" variant="solid" size="block">
            Block Level Success
          </KitLink>
        </div>
      </div>
    </ShowcaseSection>
  )
}
