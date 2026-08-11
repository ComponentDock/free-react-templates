import { useState } from 'react'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import {
  blogCards,
  blogSectionLabel,
  cardExcerpt,
  readMoreLabel,
  sliderCardLabel,
  sliderNextLabel,
  sliderPrevLabel,
  videoPlayLabel,
} from '../data'
import { Pagination } from './Pagination'

const picsum = (seed: string, width: number, height: number) =>
  `https://picsum.photos/seed/${seed}/${width}/${height}`

const sliderPhotos = Array.from({ length: 6 }, (_, i) => `miscellany-slider-${i + 1}`)

const rowRanges = [
  [0, 3],
  [3, 6],
  [6, 8],
  [8, 11],
  [11, 13],
] as const

function MetaLine({ category, date, author }: { category: string; date: string; author: string }) {
  return (
    <p className="mb-2 text-xs font-medium uppercase tracking-widest text-ink dark:text-white/70">
      <a href="#" className="font-bold text-heading hover:text-brand dark:text-white">
        {category}
      </a>{' '}
      <span>{date}</span> <span>By {author}</span>
    </p>
  )
}

function CardImage({ seed, alt }: { seed: string; alt: string }) {
  return (
    <img
      src={picsum(seed, 800, 500)}
      alt={alt}
      loading="lazy"
      className="h-64 w-full object-cover"
    />
  )
}

function SliderCard() {
  const [photo, setPhoto] = useState(0)
  const prev = () =>
    setPhoto((current) => (current - 1 + sliderPhotos.length) % sliderPhotos.length)
  const next = () => setPhoto((current) => (current + 1) % sliderPhotos.length)

  return (
    <div aria-label={sliderCardLabel} className="relative">
      <img
        src={picsum(sliderPhotos[photo]!, 800, 500)}
        alt={`Slide photo ${photo + 1}`}
        loading="lazy"
        className="h-64 w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/10" aria-hidden="true" />
      <button
        type="button"
        aria-label={sliderPrevLabel}
        onClick={prev}
        className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-heading shadow transition-colors hover:bg-brand hover:text-white"
      >
        <ChevronLeft className="h-5 w-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        aria-label={sliderNextLabel}
        onClick={next}
        className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-heading shadow transition-colors hover:bg-brand hover:text-white"
      >
        <ChevronRight className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  )
}

function VideoCard({ seed }: { seed: string }) {
  return (
    <div className="relative">
      <img
        src={picsum(seed, 800, 500)}
        alt=""
        loading="lazy"
        className="h-64 w-full object-cover"
      />
      <div
        className="absolute inset-0 bg-black/30 transition-colors hover:bg-black/60"
        aria-hidden="true"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <button
          type="button"
          aria-label={videoPlayLabel}
          className="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-[0_14px_30px_-15px_rgba(0,0,0,0.75)] transition-transform hover:scale-105"
        >
          <Play className="h-10 w-10 fill-brand text-brand" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}

function BlogCard({ card }: { card: (typeof blogCards)[number] }) {
  return (
    <article className="mb-4">
      {card.slider ? (
        <SliderCard />
      ) : card.video ? (
        <VideoCard seed={card.seed} />
      ) : (
        <CardImage seed={card.seed} alt="" />
      )}
      <div className="relative z-10 mx-auto -mt-12 w-[90%] bg-white p-6 shadow-md dark:bg-coal">
        <MetaLine category={card.category} date={card.date} author={card.author} />
        <h2 className="mb-2 text-[28px] font-bold leading-snug text-heading dark:text-white">
          <a href="#" className="transition-colors hover:text-brand">
            {card.title}
          </a>
        </h2>
        <p>{cardExcerpt}</p>
        <a
          href="#"
          className="mt-3 inline-block text-sm font-medium uppercase tracking-wide text-brand hover:underline"
        >
          {readMoreLabel} →
        </a>
      </div>
    </article>
  )
}

export function BlogGrid() {
  return (
    <section aria-label={blogSectionLabel} id="blog" className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {rowRanges.map(([start, end]) => (
          <div key={`${start}-${end}`} className="grid grid-cols-12 gap-x-6 gap-y-14 pb-14">
            {blogCards.slice(start, end).map((card) => (
              <div
                key={card.seed}
                className={cn('col-span-12 md:col-span-4', card.wide && 'md:col-span-8')}
              >
                <BlogCard card={card} />
              </div>
            ))}
          </div>
        ))}

        <Pagination />
      </div>
    </section>
  )
}
