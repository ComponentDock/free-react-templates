import { Play } from 'lucide-react'
import { SectionTitle } from './SectionTitle'
import { videos } from '../data'

// "Youtube feed" — three video cards with a circular play button linking the
// video's YouTube URL.
export function Youtube() {
  return (
    <section id="videos" className="bg-paper py-[100px]">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle title="Youtube feed" watermark="Latest videos" />
        <div className="grid gap-8 md:grid-cols-3">
          {videos.map((video) => (
            <article key={video.title}>
              <a
                href={video.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Watch ${video.title}`}
                className="group relative block h-[240px] bg-cover bg-center"
                style={{ backgroundImage: `url(${video.image})` }}
              >
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="inline-flex h-[90px] w-[90px] items-center justify-center rounded-full bg-white/30 text-brand transition group-hover:bg-white/50">
                    <Play className="h-7 w-7" />
                  </span>
                </span>
              </a>
              <h4 className="mt-6 font-display text-[22px] font-bold text-ink">{video.title}</h4>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
