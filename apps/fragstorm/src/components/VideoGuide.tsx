import { Clock, MessageCircle, Play } from 'lucide-react'
import { VIDEO_GUIDES } from '../data'

/* VideoGuide recreated from the source template's video-guide-section:
   3-column video cards with thumbnails, play overlay, and meta info. */

export function VideoGuide() {
  return (
    <section id="videos" className="bg-body-bg py-20" aria-label="Video guides">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="section-title font-heading text-lg font-bold uppercase italic tracking-widest text-text-primary">
          <span className="relative pl-5 before:absolute before:left-0 before:top-1 before:h-4 before:w-2.5 before:-skew-x-[15deg] before:bg-brand before:content-['']">
            Video Guide
          </span>
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {VIDEO_GUIDES.map((video) => (
            <article key={video.title} className="group overflow-hidden rounded bg-card-bg">
              <div className="relative overflow-hidden">
                <img
                  src={video.image}
                  alt={video.title}
                  className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand">
                    <Play
                      className="h-5 w-5 fill-text-primary text-text-primary"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold leading-snug text-text-primary">
                  <a href="#" className="transition-colors hover:text-brand">
                    {video.title}
                  </a>
                </h3>
                <div className="mt-3 flex items-center gap-3 text-xs text-text-muted">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" aria-hidden="true" />
                    {video.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="h-3 w-3" aria-hidden="true" />
                    {video.comments}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
