import { cn } from '@free-react-templates/ui'
import { BodyBand } from './BodyBand'
import { TopBar } from './TopBar'

export interface ComingSoonProps {
  className?: string
}

/** The placeholder photograph standing in for the design's own sunrise shot. */
const PHOTO = 'https://picsum.photos/seed/airborne-bg/1900/900'

/**
 * The whole page: one full-viewport photograph washed by the blue→green
 * gradient, a wordmark and social row across the top, then the copy block and
 * the newsletter card. No navbar, no scrolling section, no footer band — the
 * photograph under the wash is the design.
 */
export function ComingSoon({ className }: ComingSoonProps) {
  return (
    <div
      className={cn(
        'relative flex min-h-screen w-full flex-col pt-[24px]',
        'bg-wash bg-cover bg-center bg-no-repeat',
        className,
      )}
      style={{ backgroundImage: `url('${PHOTO}')` }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_bottom,var(--color-wash-a),var(--color-wash-b))] opacity-80"
      />

      <TopBar />
      <BodyBand />
    </div>
  )
}
