import { Play } from 'lucide-react'
import { videoPlayLabel, videoTitle } from '../data'

export function VideoSection() {
  return (
    <section id="video" className="relative overflow-hidden py-44">
      <img
        src="https://picsum.photos/seed/wayfarer-video/1920/700"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-navy/20" aria-hidden="true" />
      <div className="relative flex flex-col items-center text-center">
        <h2 className="font-cursive text-6xl text-white md:text-[80px] md:leading-[90px]">
          {videoTitle}
        </h2>
        <button
          type="button"
          aria-label={videoPlayLabel}
          className="mt-14 flex h-20 w-20 items-center justify-center rounded-full bg-teal text-white transition-colors hover:bg-coral md:h-[84px] md:w-[84px]"
        >
          <Play className="h-7 w-7 fill-current" aria-hidden="true" />
        </button>
      </div>
    </section>
  )
}
