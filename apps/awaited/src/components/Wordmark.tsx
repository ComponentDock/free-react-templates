import { cn } from '@free-react-templates/ui'

export interface WordmarkProps {
  className?: string
}

/** The brand's own text wordmark: the template name set in white, no image asset. */
export function Wordmark({ className }: WordmarkProps) {
  return (
    <div className={cn('my-[10px] mr-[30px] grow', className)}>
      <a
        href="#"
        className={cn(
          'font-heading text-[28px] leading-[1.2] font-black tracking-[0.18em]',
          'text-white uppercase transition-opacity duration-[400ms] hover:opacity-80',
        )}
      >
        Awaited
      </a>
    </div>
  )
}
