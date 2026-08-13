import type { AnchorHTMLAttributes } from 'react'
import { ArrowRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

/* a.more-39291 — uppercase 12px bold link with a right-pointing arrow
   (the source's icomoon \e317 glyph rotated 180deg renders →, confirmed on
   the live preview), black text, green on hover. */
export function MoreLink({
  className,
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className={cn(
        'inline-flex items-center gap-1.5 text-[12px] font-bold tracking-wide text-ink uppercase transition-colors hover:text-brand',
        className,
      )}
      {...props}
    >
      {children}
      <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
    </a>
  )
}
