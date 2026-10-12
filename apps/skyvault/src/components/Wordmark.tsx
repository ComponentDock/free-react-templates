import { cn } from '@free-react-templates/ui'

export interface WordmarkProps {
  className?: string
}

/**
 * Skyvault wordmark: the brand name with its second half in brand mint, the
 * two-tone treatment the header and footer share.
 */
export function Wordmark({ className }: WordmarkProps) {
  return (
    <span className={cn('font-heading font-semibold text-white', className)}>
      Sky
      <span className="text-mint">vault</span>
    </span>
  )
}
