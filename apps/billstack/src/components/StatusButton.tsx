import { cn } from '@free-react-templates/ui'
import type { StatusVariant } from '../data/invoices'

/** Bootstrap-style status button variants (success / warning / danger). */
const variantStyles: Record<StatusVariant, string> = {
  success:
    'border-success bg-success text-white hover:border-[#1e7e34] hover:bg-success-hover focus-visible:ring-[rgba(72,180,97,0.5)]',
  warning:
    'border-warning bg-warning text-cell hover:border-[#d39e00] hover:bg-warning-hover focus-visible:ring-[rgba(222,170,12,0.5)]',
  danger:
    'border-danger bg-danger text-white hover:border-[#bd2130] hover:bg-danger-hover focus-visible:ring-[rgba(225,83,97,0.5)]',
}

const baseStyles =
  'inline-flex items-center justify-center rounded-[0.25rem] border px-[0.75rem] py-[0.375rem] text-base font-normal leading-[1.5] transition-all duration-150 ease-in-out motion-reduce:transition-none focus-visible:ring-2'

export interface StatusButtonProps {
  variant: StatusVariant
  label: string
}

export function StatusButton({ variant, label }: StatusButtonProps) {
  return (
    <button type="button" className={cn(baseStyles, variantStyles[variant])}>
      {label}
    </button>
  )
}
