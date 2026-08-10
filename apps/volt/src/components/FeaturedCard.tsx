import { useEffect, useState } from 'react'
import {
  ArrowRight,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Folder,
  MessageCircle,
} from 'lucide-react'
import { ButtonLink, cn } from '@free-react-templates/ui'
import { featured, imgUrl } from '../data'

const AUTOPLAY_MS = 5000

export function FeaturedCard() {
  const [index, setIndex] = useState(0)
  const slideCount = featured.images.length

  const next = () => setIndex((value) => (value + 1) % slideCount)
  const prev = () => setIndex((value) => (value - 1 + slideCount) % slideCount)

  useEffect(() => {
    const id = setInterval(() => setIndex((value) => (value + 1) % slideCount), AUTOPLAY_MS)
    return () => clearInterval(id)
  }, [slideCount])

  return (
    <article className="group flex h-full flex-col bg-brand transition-colors duration-300">
      <div className="relative h-64 w-full overflow-hidden">
        <div className="absolute inset-0">
          {featured.images.map((image, i) => (
            <div
              key={image.seed}
              aria-hidden={i !== index}
              className={cn(
                'absolute inset-0 transition-opacity duration-500',
                i === index ? 'opacity-100' : 'opacity-0',
              )}
            >
              <img
                src={imgUrl(image.seed, 800, 500)}
                alt={image.alt}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-brand opacity-0 transition-opacity duration-300 group-hover:opacity-70"
        />
        <button
          type="button"
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 font-sans text-xl font-normal text-white">
          <a href="#top" className="focus-visible:outline-none focus-visible:underline">
            {featured.post.title}
          </a>
        </h3>
        <p className="mb-4 flex flex-wrap gap-x-2.5 gap-y-1 text-[13px] text-white/80">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
            {featured.post.date}
          </span>
          <a href="#top" className="inline-flex items-center gap-1.5 hover:text-white">
            <Folder className="h-3.5 w-3.5" aria-hidden="true" />
            {featured.post.category}
          </a>
          <span className="inline-flex items-center gap-1.5">
            <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
            {featured.post.comments} Comment
          </span>
        </p>
        <p className="mb-4 text-white/80">{featured.post.excerpt}</p>
        <ButtonLink
          href="#top"
          variant="outline"
          className="mt-auto h-auto w-fit rounded-none border-0 bg-transparent px-0 text-white hover:bg-transparent focus-visible:ring-white/40"
        >
          Read More <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </ButtonLink>
      </div>
    </article>
  )
}
