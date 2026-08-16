import { Play } from 'lucide-react'
import { videoBand } from '../data'

/**
 * Full-width background-photo band with a centered 100px white circle
 * holding a gold play icon and a translucent gold pulse ring. The play
 * button is decorative (the source links to a video; the recreation keeps
 * the visual only).
 */
export function VideoBand() {
  return (
    <section
      className="relative flex h-[420px] items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${videoBand.image})` }}
      aria-label="Bakery video"
    >
      <div aria-hidden="true" className="absolute inset-0 bg-ink/50" />
      <div className="relative">
        <span
          aria-hidden="true"
          className="absolute inset-0 animate-ping rounded-full border border-brand/40"
        />
        <button
          type="button"
          aria-label="Play bakery video"
          className="relative flex h-[100px] w-[100px] items-center justify-center rounded-full bg-white text-brand transition-colors hover:bg-brand hover:text-white"
        >
          <Play className="h-9 w-9 fill-current" aria-hidden="true" />
        </button>
      </div>
    </section>
  )
}
