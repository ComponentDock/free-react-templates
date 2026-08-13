import { Play } from 'lucide-react'
import { video } from '../data'

/** Parallax video CTA band: a cover photo with dark overlay, a circular
 *  play button that grows on hover, and a call-to-action heading. */
export function VideoBand() {
  return (
    <section
      aria-label="Video"
      className="relative flex min-h-[600px] items-center justify-center bg-cover bg-fixed bg-center"
      style={{ backgroundImage: `url(${video.image})` }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 py-20 text-center">
        <button
          type="button"
          aria-label="Play video"
          className="group mb-4 flex h-[90px] w-[90px] items-center justify-center rounded-full border-2 border-white text-white transition-all duration-300 hover:h-[120px] hover:w-[120px]"
        >
          <Play className="h-[50px] w-[50px] fill-white" />
        </button>
        <h2 className="text-4xl font-light text-white">{video.heading}</h2>
      </div>
    </section>
  )
}
