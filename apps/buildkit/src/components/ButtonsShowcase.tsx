import { useState } from 'react'
import { ChevronDown, Heart } from 'lucide-react'
import { COLOR_LABELS, KIT_COLORS, KitButton } from './KitButton'
import { ShowcaseSection, SubHeading } from './section'

const LINK_COLORS = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'dark',
] as const

const DROPDOWN_COLORS = ['primary', 'success', 'danger'] as const

const DROPDOWN_ITEMS = ['Action', 'Another action', 'Something else here'] as const

export function ButtonsShowcase() {
  const [openRow, setOpenRow] = useState<number | null>(null)

  return (
    <ShowcaseSection id="buttons" title="Buttons">
      <div className="space-y-4">
        <SubHeading>Pick your style</SubHeading>
        <div className="flex flex-wrap items-center gap-3">
          <KitButton color="primary" variant="solid" size="md">
            Default
          </KitButton>
          <KitButton color="primary" variant="round" size="md">
            Round
          </KitButton>
          <KitButton color="primary" variant="round" size="md">
            <Heart className="h-4 w-4" aria-hidden="true" />
            With Icon
          </KitButton>
          <KitButton color="primary" variant="link" size="md">
            Simple
          </KitButton>
        </div>
      </div>

      <div className="space-y-4">
        <SubHeading>Pick your size</SubHeading>
        <div className="flex flex-wrap items-center gap-3">
          <KitButton color="primary" variant="solid" size="sm">
            Small Size
          </KitButton>
          <KitButton color="primary" variant="solid" size="md">
            Regular Size
          </KitButton>
          <KitButton color="primary" variant="solid" size="lg">
            Large Size
          </KitButton>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <KitButton color="primary" variant="outline" size="sm">
            Small Size
          </KitButton>
          <KitButton color="primary" variant="outline" size="md">
            Regular Size
          </KitButton>
          <KitButton color="primary" variant="outline" size="lg">
            Large Size
          </KitButton>
        </div>
      </div>

      <div className="space-y-4">
        <SubHeading>Pick your color</SubHeading>
        <div className="flex flex-wrap items-center gap-3">
          {KIT_COLORS.map((color) => (
            <KitButton key={`solid-${color}`} color={color} variant="solid" size="md">
              {COLOR_LABELS[color]}
            </KitButton>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {KIT_COLORS.map((color) => (
            <KitButton key={`outline-${color}`} color={color} variant="outline" size="md">
              {COLOR_LABELS[color]}
            </KitButton>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <SubHeading>Links</SubHeading>
        <div className="flex flex-wrap items-center gap-3">
          {LINK_COLORS.map((color) => (
            <KitButton key={`link-${color}`} color={color} variant="link" size="md">
              {COLOR_LABELS[color]} link
            </KitButton>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <SubHeading>Disabled Buttons</SubHeading>
        <div className="flex flex-wrap items-center gap-3">
          <KitButton color="primary" variant="solid" size="lg" disabled>
            Primary link
          </KitButton>
          <KitButton color="success" variant="solid" size="lg" disabled>
            Link
          </KitButton>
        </div>
      </div>

      <div className="space-y-4">
        <SubHeading>Buttons with Dropdown</SubHeading>
        <div className="flex flex-wrap items-start gap-3">
          {DROPDOWN_COLORS.map((color, index) => (
            <div key={color} className="relative">
              <KitButton
                color={color}
                variant="solid"
                size="md"
                aria-expanded={openRow === index}
                onClick={() => setOpenRow(openRow === index ? null : index)}
              >
                Dropdown button
                <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </KitButton>
              {openRow === index && (
                <div className="absolute left-0 top-full z-10 mt-1 w-52 rounded bg-white py-2 shadow-lg">
                  {DROPDOWN_ITEMS.map((item) => (
                    <a
                      key={item}
                      href="#buttons"
                      className="block px-4 py-2 text-sm text-body hover:bg-light"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <SubHeading>Block Level Buttons</SubHeading>
        <div className="space-y-3">
          <KitButton color="info" variant="solid" size="block">
            Block Level info
          </KitButton>
          <KitButton color="success" variant="solid" size="block">
            Block Level Success
          </KitButton>
        </div>
      </div>
    </ShowcaseSection>
  )
}
