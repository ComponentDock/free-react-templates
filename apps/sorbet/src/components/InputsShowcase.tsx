import { Check, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { ShowcaseSection } from './section'

const FIELD =
  'h-12 w-full rounded border-2 bg-white px-4 text-input transition-colors focus:outline-none focus:border-primary-500'

const FIELDS = [
  { id: 'sorbet-input-default', placeholder: 'Default', border: 'border-gray-200', icon: null },
  {
    id: 'sorbet-input-success',
    placeholder: 'Success',
    border: 'border-success',
    icon: Check,
  },
  {
    id: 'sorbet-input-error',
    placeholder: 'Error Input',
    border: 'border-danger',
    icon: X,
  },
] as const

/** Four input states: default, valid, invalid and icon-adorned. */
export function InputsShowcase() {
  return (
    <ShowcaseSection id="inputs" title="Inputs">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {FIELDS.map(({ id, placeholder, border, icon: Icon }) => (
          <div key={id} className="relative">
            <label htmlFor={id} className="sr-only">
              {placeholder}
            </label>
            <input id={id} type="text" placeholder={placeholder} className={cn(FIELD, border)} />
            {Icon !== null && (
              <Icon
                className={cn(
                  'absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2',
                  border === 'border-success' ? 'text-success' : 'text-danger',
                )}
                aria-hidden="true"
              />
            )}
          </div>
        ))}

        <div className="flex items-center rounded border-2 border-gray-200 bg-white">
          <label htmlFor="sorbet-input-icon" className="sr-only">
            With icons
          </label>
          <input
            id="sorbet-input-icon"
            type="text"
            placeholder="With Ionicons Icons"
            className="h-12 w-full rounded-l bg-transparent px-4 text-input focus:outline-none"
          />
          <span className="flex h-12 w-12 items-center justify-center border-l-2 border-gray-200 text-primary-500">
            <Check className="h-5 w-5" aria-hidden="true" />
          </span>
        </div>
      </div>
    </ShowcaseSection>
  )
}
