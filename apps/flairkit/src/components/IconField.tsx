import type { InputHTMLAttributes, ReactNode } from 'react'
import { cn } from '@free-react-templates/ui'

export type FieldShape = 'plain' | 'pill' | 'underline'

export interface IconFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Leading or trailing glyph (the source's transparent input-group icon). */
  icon: ReactNode
  iconPosition?: 'start' | 'end'
  shape?: FieldShape
  inputClassName?: string
}

/**
 * The kit's transparent-icon input group. Three shapes: plain (square, icon
 * sits flush against the field), pill (30px radius) and underline (icon+field
 * share a `#ccc` bottom rule that turns brand pink while focused).
 */
export function IconField({
  icon,
  iconPosition = 'start',
  shape = 'plain',
  className,
  inputClassName,
  ...props
}: IconFieldProps) {
  const underline = shape === 'underline'
  const pill = shape === 'pill'
  const atEnd = iconPosition === 'end'

  const iconBox = cn(
    'flex items-center text-body',
    underline
      ? 'border-b border-hairline pb-1 group-focus-within:border-flair-primary'
      : 'h-10 border border-gray-300 bg-white px-3',
    !underline && pill && (atEnd ? 'rounded-r-[30px]' : 'rounded-l-[30px]'),
    !underline && !pill && (atEnd ? 'rounded-r' : 'rounded-l'),
    !underline && (atEnd ? 'border-l-0' : 'border-r-0'),
  )

  const input = cn(
    'h-10 w-full border border-gray-300 bg-white px-3 text-[0.9rem] outline-none focus:border-flair-primary focus:ring-0',
    underline &&
      'h-auto border-0 border-b border-hairline bg-transparent px-0 pb-1 group-focus-within:border-flair-primary',
    pill ? 'rounded-[30px]' : 'rounded',
    !underline && (atEnd ? 'border-r-0' : 'border-l-0'),
    inputClassName,
  )

  return (
    <div className={cn('group flex w-full items-center', className)}>
      {!atEnd && (
        <span className={iconBox} aria-hidden="true">
          {icon}
        </span>
      )}
      <input className={input} {...props} />
      {atEnd && (
        <span className={iconBox} aria-hidden="true">
          {icon}
        </span>
      )}
    </div>
  )
}
