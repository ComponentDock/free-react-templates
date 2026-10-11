import { cn } from '@free-react-templates/ui'

export interface LogoProps {
  className?: string
}

/** Wordmark: lowercase name with the brand-green full stop. */
export function Logo({ className }: LogoProps) {
  return (
    <div className={cn('w-1/2', className)}>
      <p className="font-heading text-[28px] leading-none font-bold tracking-tight text-ink">
        debut<span className="text-brand">.</span>
      </p>
    </div>
  )
}
