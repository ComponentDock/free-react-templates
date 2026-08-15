import { Play } from 'lucide-react'
import { videoImage, videoPlayLabel, videoTitle } from '../data'

export function VideoBanner() {
  return (
    <section
      id="video-section"
      aria-label={videoTitle}
      className="relative flex h-[420px] items-center justify-center lg:h-[700px]"
    >
      <img src={videoImage} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div aria-hidden="true" className="absolute inset-0 bg-black/20" />
      <button
        type="button"
        aria-label={videoPlayLabel}
        className="relative flex h-20 w-20 items-center justify-center rounded-full border-2 border-white bg-white/20 text-white backdrop-blur transition-colors hover:border-brand hover:bg-white hover:text-brand"
      >
        <Play className="ml-1 h-8 w-8 fill-current" aria-hidden="true" />
      </button>
    </section>
  )
}
