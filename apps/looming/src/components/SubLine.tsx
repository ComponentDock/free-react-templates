import { cn } from '@free-react-templates/ui'

export interface SubLineProps {
  children?: string
  className?: string
}

/**
 * The one soft type token on the page: 24px Poppins in a mid grey, roughly a
 * quarter of the heading's size, sitting between it and the e-mail well.
 */
export function SubLine({
  children = 'Follow along for the first look.',
  className,
}: SubLineProps) {
  return (
    <p
      data-testid="sub-line"
      className={cn('pb-[46px] font-sans text-[24px] leading-[1.2] text-subline', className)}
    >
      {children}
    </p>
  )
}
