import { Play } from 'lucide-react'
import { VIDEO_ITEMS } from '../data'
import { Carousel } from './Carousel'

function VideoCard({ image, caption }: { image: string; caption: string }) {
  return (
    <article className="text-center">
      <div className="group relative overflow-hidden">
        <img
          src={image}
          alt=""
          className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <button
          type="button"
          aria-label={`Play ${caption}`}
          className="absolute inset-0 m-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-brand shadow-lg transition-colors hover:bg-brand hover:text-white"
        >
          <Play className="ml-0.5 h-6 w-6" fill="currentColor" />
        </button>
      </div>
      <h4 className="mt-3 font-heading text-base font-bold text-navy">{caption}</h4>
    </article>
  )
}

export function VideoSection() {
  return (
    <section id="video" aria-label="Latest videos" className="pt-12">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-6 font-heading text-3xl font-bold text-navy">Latest Video - 2020</h2>
        <Carousel
          slides={VIDEO_ITEMS.map((item) => (
            <VideoCard key={item.caption} image={item.image} caption={item.caption} />
          ))}
          visibleCount={3}
          regionLabel="Latest videos"
          prevLabel="Previous videos"
          nextLabel="Next videos"
          className="-mx-2"
        />
      </div>
    </section>
  )
}
