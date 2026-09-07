import { useState } from 'react'
import { cn } from '@free-react-templates/ui'

interface FormCheckboxProps {
  id: string
  label: string
  defaultChecked?: boolean
  className?: string
  linkText?: string
  linkHref?: string
}

export function FormCheckbox({
  id,
  label,
  defaultChecked = false,
  className,
  linkText,
  linkHref,
}: FormCheckboxProps) {
  const [checked, setChecked] = useState(defaultChecked)

  const content =
    linkText && linkHref ? (
      <>
        {label.split(linkText)[0]}
        <a
          href={linkHref}
          className="text-accent underline transition-colors hover:text-accent-link-hv"
        >
          {linkText}
        </a>
        {label.split(linkText)[1]}
      </>
    ) : (
      label
    )

  return (
    <label
      htmlFor={id}
      className={cn(
        'flex cursor-pointer items-center gap-2 text-[13px] leading-[1.9] text-input',
        className,
      )}
    >
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
        className="peer sr-only"
      />
      <span
        aria-hidden="true"
        className={cn(
          'flex h-[13px] w-[13px] shrink-0 items-center justify-center rounded-full border border-tick transition-colors',
          checked ? 'border-tick bg-transparent' : 'bg-transparent',
        )}
      >
        {checked && <span className="h-[7px] w-[7px] rounded-full bg-tick" />}
      </span>
      {content}
    </label>
  )
}
