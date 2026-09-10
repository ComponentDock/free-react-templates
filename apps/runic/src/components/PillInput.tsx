import { forwardRef, type InputHTMLAttributes } from 'react'
import { FieldDot } from './FieldDot'

interface PillInputProps extends InputHTMLAttributes<HTMLInputElement> {
  active?: boolean
}

export const PillInput = forwardRef<HTMLInputElement, PillInputProps>(
  ({ active, className, ...props }, ref) => {
    return (
      <div className="relative mb-5 pl-7">
        <FieldDot active={active} />
        <input
          ref={ref}
          className={
            className ??
            'h-11 w-full rounded-full border-none bg-input-bg px-6 text-[13px] text-text-primary uppercase placeholder:text-text-placeholder'
          }
          {...props}
        />
      </div>
    )
  },
)

PillInput.displayName = 'PillInput'
