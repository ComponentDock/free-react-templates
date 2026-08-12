import { Play } from 'lucide-react'

const VIDEO_BG = 'https://picsum.photos/seed/axiom-video/1600/900'

/* Video band recreated from the source's offset video_area: a cover photo
   band pushed 20% off the left edge on desktop with a tall 120px circular
   play button (#0181F5) linking to the original promo video. */

export function VideoBand() {
  return (
    <section aria-label="Video" className="bg-white">
      <div
        className="relative flex min-h-[280px] items-center justify-center bg-cover bg-center py-24 lg:ml-[20%] lg:min-h-[560px]"
        style={{ backgroundImage: `url(${VIDEO_BG})` }}
      >
        <a
          href="https://www.youtube.com/watch?v=BnTroF3vEqg"
          target="_blank"
          rel="noreferrer"
          aria-label="Play the agency video"
          className="flex h-[120px] w-[120px] items-center justify-center rounded-full bg-play text-white transition-transform hover:scale-105"
        >
          <Play className="ml-1 h-9 w-9 fill-current" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
