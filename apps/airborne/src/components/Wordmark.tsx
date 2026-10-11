import { cn } from '@free-react-templates/ui'

export interface WordmarkProps {
  className?: string
}

/** The brand's own text wordmark: no image asset, just the name set in white. */
export function Wordmark({ className }: WordmarkProps) {
  return (
    <div className={cn('my-[10px] mr-[30px] grow', className)}>
      <a
        href="#"
        className={cn(
          'font-heading text-[28px] leading-[1.2] font-bold tracking-[0.18em]',
          'text-white uppercase transition-opacity duration-[400ms] hover:opacity-80',
        )}
      >
        Airborne
      </a>
    </div>
  )
}
