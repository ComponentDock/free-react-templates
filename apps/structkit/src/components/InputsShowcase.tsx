import { useState } from 'react'
import { Check, Mail, Paperclip, User, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { ShowcaseSection } from './section'

const FIELD_CLASS =
  'w-full rounded border border-line bg-white px-3 py-[6px] text-[16px] text-input outline-none placeholder:text-placeholder focus:border-primary'

/** Text field whose label rises on focus or when the field holds a value. */
function FloatingField({ id, label, shadow }: { id: string; label: string; shadow?: boolean }) {
  const [value, setValue] = useState('')
  const [focused, setFocused] = useState(false)
  const raised = focused || value !== ''

  return (
    <div className="relative pt-4">
      <label
        htmlFor={id}
        className={cn(
          'pointer-events-none absolute left-3 bg-white px-1 text-body transition-all',
          raised ? 'top-0 text-[12px]' : 'top-6 text-[16px]',
        )}
      >
        {label}
      </label>
      <input
        id={id}
        type="email"
        value={value}
        required
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={(event) => setValue(event.target.value)}
        className={cn(FIELD_CLASS, shadow === true && 'shadow-sm')}
      />
    </div>
  )
}

function FieldRow({ shadow }: { shadow?: boolean }) {
  const suffix = shadow === true ? '-shadow' : ''

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <input
        type="text"
        aria-label={`Default${suffix}`}
        placeholder="Default"
        className={cn(FIELD_CLASS, shadow === true && 'shadow-sm')}
      />
      <FloatingField id={`float${suffix}`} label="With Floating Label" shadow={shadow} />
      <div className="relative">
        <input
          type="text"
          aria-label={`Success${suffix}`}
          placeholder="Success"
          className={cn(FIELD_CLASS, 'pr-10', 'border-success', shadow === true && 'shadow-sm')}
        />
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-success">
          <Check className="h-4 w-4" aria-hidden="true" />
        </span>
      </div>
      <div className="relative">
        <input
          type="text"
          aria-label={`Error Input${suffix}`}
          placeholder="Error Input"
          className={cn(FIELD_CLASS, 'pr-10', 'border-danger', shadow === true && 'shadow-sm')}
        />
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-danger">
          <X className="h-4 w-4" aria-hidden="true" />
        </span>
      </div>
      <div className="flex items-stretch">
        <span className="flex items-center rounded-l border border-r-0 border-line bg-light px-3 text-body">
          <User className="h-4 w-4" aria-hidden="true" />
        </span>
        <input
          type="text"
          aria-label={`With Leading Icon${suffix}`}
          placeholder="With Material Icons"
          className={cn(FIELD_CLASS, 'rounded-l-none', shadow === true && 'shadow-sm')}
        />
      </div>
      <div className="flex items-stretch">
        <input
          type="text"
          aria-label={`With Trailing Icon${suffix}`}
          placeholder="With Ionicons Icons"
          className={cn(FIELD_CLASS, 'rounded-r-none', shadow === true && 'shadow-sm')}
        />
        <span className="flex items-center rounded-r border border-l-0 border-line bg-light px-3 text-body">
          <Paperclip className="h-4 w-4" aria-hidden="true" />
        </span>
      </div>
    </div>
  )
}

/** The kit's input catalog: plain fields plus the shadowed light-band variant. */
export function InputsShowcase() {
  return (
    <ShowcaseSection id="inputs" title="Inputs">
      <FieldRow />
      <div className="-mx-4 bg-light px-4 py-8 sm:-mx-6 sm:px-6">
        <div className="mx-auto w-full max-w-6xl">
          <h3 className="mb-6 flex items-center gap-2 text-2xl font-normal text-heading">
            <Mail className="h-5 w-5" aria-hidden="true" />
            With Floating Label
          </h3>
          <FieldRow shadow />
        </div>
      </div>
    </ShowcaseSection>
  )
}
