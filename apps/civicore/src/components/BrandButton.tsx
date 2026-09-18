import { type ReactNode } from 'react'
import { cn } from '@free-react-templates/ui'

interface BrandButtonProps {
  children: ReactNode
  className?: string
  href?: string
  onClick?: () => void
}

export function BrandButton({ children, className, href, onClick }: BrandButtonProps) {
  const classes = cn(
    'inline-block bg-brand px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white',
    "rounded-[3px] transition-colors hover:bg-footer-bg font-['Open_Sans']",
    className,
  )

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
