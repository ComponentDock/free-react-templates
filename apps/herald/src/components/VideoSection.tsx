import { featuredVideoTitle, imgUrl, videoPosts } from '../data'
import { MetaRow } from './MetaRow'
import { SectionTitle } from './SectionTitle'
import { Play } from 'lucide-react'

/** Navy FEATURED VIDEO section: four cards with a circular play hover overlay. */
export function VideoSection() {
  return (
    <section aria-label={featuredVideoTitle} className="bg-primary pb-5 text-white">
      <div className="mx-auto max-w-[1200px] px-4 pt-10">
        <SectionTitle title={featuredVideoTitle} light />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {videoPosts.map((video) => (
            <a key={video.seed} href="#" className="group block">
              <div className="relative overflow-hidden">
                <img
                  src={imgUrl(video.seed, 300, 300)}
                  alt={video.headline}
                  loading="lazy"
                  className="w-full object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-black/0 transition-colors duration-200 group-hover:bg-black/40"
                />
                <span className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white text-white opacity-0 transition-all duration-200 group-hover:opacity-100">
                  <Play className="h-4 w-4 fill-current" aria-hidden="true" />
                </span>
              </div>
              <h5 className="mt-4 font-heading text-sm font-semibold transition-colors group-hover:text-[#ccc]">
                {video.headline}
              </h5>
              <div className="mt-2">
                <MetaRow meta={video.meta} className="text-white/70" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
