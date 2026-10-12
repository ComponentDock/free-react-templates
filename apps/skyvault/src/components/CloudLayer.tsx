import { cn } from '@free-react-templates/ui'

interface Cloud {
  /** Vertical offset of the sprite inside the hero band. */
  top: string
  /** Negative delay so the sprite is already mid-flight when the page loads. */
  delay: string
  /** Layering: the lowest sprite drifts behind the skyline. */
  z: string
  /** Own artwork — a blob outline drawn as a single path. */
  path: string
}

const CLOUDS: Cloud[] = [
  {
    top: 'top-[147px]',
    delay: '-39s',
    z: 'z-[4]',
    path: 'M12 44c-7 0-12-5-12-12s5-12 12-12c1-9 9-16 19-16 11 0 20 8 21 19 8 1 14 7 14 15 0 9-7 16-16 16H18Z',
  },
  {
    top: 'top-[204px]',
    delay: '-6s',
    z: 'z-[4]',
    path: 'M10 40c-6 0-10-4-10-10s4-11 11-11c1-8 8-14 17-14 10 0 18 7 19 17 7 1 12 6 12 13 0 8-6 14-14 14H15Z',
  },
  {
    top: 'top-[332px]',
    delay: '-45s',
    z: 'z-[4]',
    path: 'M12 44c-7 0-12-5-12-12s5-12 12-12c1-9 9-16 19-16 11 0 20 8 21 19 8 1 14 7 14 15 0 9-7 16-16 16H18Z',
  },
  {
    top: 'top-[353px]',
    delay: '-15s',
    z: 'z-[2]',
    path: 'M8 38c-5 0-8-4-8-9s3-9 9-9c1-7 7-12 15-12 9 0 16 6 17 15 6 1 10 5 10 11 0 7-5 12-12 12H12Z',
  },
]

/**
 * Four decorative cloud sprites drifting left to right across the hero band on
 * an infinite 60 s loop, each with a negative delay so they are already
 * travelling when the page paints. Purely ornamental: hidden from the
 * accessibility tree and frozen when the visitor reduces motion.
 */
export function CloudLayer() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {CLOUDS.map((cloud) => (
        <svg
          key={`${cloud.top}-${cloud.delay}`}
          viewBox="0 0 138 57"
          className={cn('absolute -left-[138px] h-[57px] w-[138px] animate-cloud motion-reduce:animate-none', cloud.top, cloud.z)}
          style={{ animationDelay: cloud.delay }}
          fill="rgba(255,255,255,.82)"
        >
          <path d={cloud.path} />
        </svg>
      ))}
    </div>
  )
}
