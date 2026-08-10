import { Play } from 'lucide-react'
import { imgUrl, playVideoLabel, videoDate, videoSlides, videoTitle } from '../data'

/** Full-width video section: fixed background image with a centered
    circular play button, date + title, then a slideshow strip of six
    video cards under a 2px accent top border (reference: .video-area
    .bg-fixed + .video-slideshow). */
export function VideoSection() {
  return (
    <section aria-label="Featured video" className="bg-ink">
      <div className="relative overflow-hidden">
        <img
          src={imgUrl('bulletin-video-bg', 1600, 700)}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 py-24 text-center">
          <a
            href="#featured-video"
            aria-label={playVideoLabel}
            className="flex h-[63px] w-[63px] items-center justify-center rounded-full bg-accent text-white transition-colors hover:bg-black"
          >
            <Play className="ml-0.5 h-6 w-6 fill-current" aria-hidden="true" />
          </a>
          <p className="mt-6 text-xs text-white/80">{videoDate}</p>
          <h2 className="mt-1 text-2xl font-semibold text-white lg:text-3xl">{videoTitle}</h2>
        </div>
      </div>

      <div className="border-t-2 border-accent">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-3">
          {videoSlides.map((post) => (
            <a key={post.seed} href="#video" className="group block">
              <div className="relative overflow-hidden">
                <img
                  src={imgUrl(post.seed, 400, 250)}
                  alt=""
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors group-hover:bg-black/10">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white">
                    <Play className="ml-0.5 h-4 w-4 fill-current" aria-hidden="true" />
                  </span>
                </span>
              </div>
              <p className="mt-3 text-xs text-white/70">{post.date}</p>
              <h3 className="mt-1 text-[22px] leading-snug font-semibold text-white transition-colors group-hover:text-accent">
                {post.title}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
