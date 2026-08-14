import type { ReactNode } from 'react'
import { cn } from '@free-react-templates/ui'

interface SiteButtonProps {
  children: ReactNode
  href: string
  className?: string
}

/* Corner-bracket outline button from the reference design: transparent
   background, white uppercase 14px/600 text, min-width 186px, four 15x14px
   corner brackets with 2px white borders. */
export function SiteButton({ children, href, className }: SiteButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        'relative inline-block min-w-[186px] text-center text-sm font-semibold uppercase text-white',
        className,
      )}
    >
      <span className="inline-block px-[45px] py-[23px]">{children}</span>
      <span
        aria-hidden="true"
        className="absolute left-0 top-0 h-[14px] w-[15px] border-l-2 border-t-2 border-white"
      />
      <span
        aria-hidden="true"
        className="absolute right-0 top-0 h-[14px] w-[15px] border-r-2 border-t-2 border-white"
      />
      <span
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-[14px] w-[15px] border-b-2 border-l-2 border-white"
      />
      <span
        aria-hidden="true"
        className="absolute bottom-0 right-0 h-[14px] w-[15px] border-b-2 border-r-2 border-white"
      />
    </a>
  )
}
