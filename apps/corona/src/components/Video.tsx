import { Play } from 'lucide-react'

/* Video area (source: .video-area on the #828bb2 band — white title on the
   left, video thumbnails with a dark overlay and centered play buttons on
   the right; the owl-carousel is recreated as a two-column grid). */
const VIDEOS = [
  { title: 'Live class demo — Angular', src: 'corona-video-1', alt: 'Angular live class preview' },
  {
    title: 'Mentor workshop — Photography',
    src: 'corona-video-2',
    alt: 'Photography workshop preview',
  },
]

export function Video() {
  return (
    <section className="bg-muted py-[60px]">
      <div className="mx-auto flex max-w-[1140px] flex-col items-center gap-10 px-[15px] lg:flex-row">
        <div className="lg:w-2/5">
          <h2 className="font-display text-[42px] font-black leading-[1.2] text-white">
            Watch Our Trainers
            <br />
            in Live Action
          </h2>
          <p className="mt-5 max-w-[420px] text-[14px] leading-6 text-white/90">
            See how our mentors teach — live coding sessions, guided workshops and studio tours that
            bring every course to life.
          </p>
        </div>
        <div className="grid flex-1 grid-cols-1 gap-6 sm:grid-cols-2">
          {VIDEOS.map((video) => (
            <figure key={video.title} className="relative overflow-hidden rounded-md">
              <img
                src={`https://picsum.photos/seed/${video.src}/600/400`}
                alt={video.alt}
                className="h-[220px] w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
              <button
                type="button"
                aria-label={`Play ${video.title}`}
                className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-brand shadow-lg"
              >
                <Play className="ml-1 h-6 w-6 fill-current" aria-hidden="true" />
              </button>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
