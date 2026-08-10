import type { ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface SiteButtonProps {
  children: ReactNode
  /** 'link' renders an anchor (hero CTA), 'button' a real button (form submit). */
  as?: 'link' | 'button'
  href?: string
  type?: 'button' | 'submit'
  onClick?: () => void
  className?: string
  withArrow?: boolean
}

/** Signature squared white button with the magenta offset block + glow. */
export function SiteButton({
  children,
  as = 'button',
  href = '#',
  type = 'button',
  onClick,
  className,
  withArrow = true,
}: SiteButtonProps) {
  const content = (
    <>
      {children}
      {withArrow && <ArrowRight className="h-5 w-5" aria-hidden="true" />}
    </>
  )

  if (as === 'link') {
    return (
      <a href={href} onClick={onClick} className={cn('site-btn', className)}>
        {content}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={cn('site-btn', className)}>
      {content}
    </button>
  )
}
