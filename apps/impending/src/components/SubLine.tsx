import { cn } from '@free-react-templates/ui'

export interface SubLineProps {
  children?: string
  className?: string
}

/**
 * The one soft type token on the page: 24px Poppins in a grey that stops short
 * of white, so it recedes behind the heading and the clock.
 */
export function SubLine({
  children = 'Be first to know the moment we go live.',
  className,
}: SubLineProps) {
  return (
    <p
      data-testid="sub-line"
      className={cn(
        'font-sans text-[24px] leading-[1.2] text-subline max-[992px]:text-center',
        className,
      )}
    >
      {children}
    </p>
  )
}
