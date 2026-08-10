import { cn } from '@free-react-templates/ui'

interface DropletLogoProps {
  className?: string
}

/** Inline droplet mark inside a bright-blue circle (ColorLib Droppler logo). */
export function DropletLogo({ className }: DropletLogoProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 text-white',
        className,
      )}
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M12 2C7.2 7.2 4 11.4 4 15a8 8 0 0 0 16 0c0-3.6-3.2-7.8-8-13z" />
      </svg>
    </span>
  )
}
