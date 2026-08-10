import { useState } from 'react'
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Play,
  Share2,
  User,
} from 'lucide-react'
import { BrandIcon } from './BrandIcon'

const shareRail = [
  { label: 'Facebook', name: 'facebook' },
  { label: 'Twitter', name: 'twitter' },
  { label: 'Google', name: 'google' },
] as const

const entries = [
  {
    seed: 'feature-blog-1',
    categories: ['Health', 'Workout'],
    title: 'The Most Popular Leg Workout for Women',
    date: 'January 21, 2017',
    media: 'gallery',
    gallery: ['feature-blog-1a', 'feature-blog-1b'],
    body: 'full',
  },
  {
    seed: 'feature-blog-2',
    categories: ['Fashion', 'Lifestyle'],
    title: 'Popular Lifestyle with Fashion & Modeling',
    date: 'January 18, 2017',
    media: 'image',
    body: 'short',
  },
  {
    seed: 'feature-blog-3',
    categories: ['Model', 'Fashion'],
    title: 'Fashion & Modeling',
    date: 'January 15, 2017',
    media: 'image',
    body: 'short',
  },
  {
    seed: 'feature-blog-4',
    categories: ['Lifestyle', 'Travel'],
    title: 'Video Post Travel with my Friends',
    date: 'January 12, 2017',
    media: 'video',
    body: 'short',
  },
] as const

type Entry = (typeof entries)[number]

function GalleryCarousel({ images }: { images: readonly string[] }) {
  const [index, setIndex] = useState(0)

  return (
    <div className="relative h-[400px]">
      <img
        src={`https://picsum.photos/seed/${images[index]!}/900/400`}
        alt=""
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-between px-3">
        <button
          type="button"
          aria-label="Previous image"
          onClick={() => setIndex((index - 1 + images.length) % images.length)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white transition-colors hover:bg-brand-500"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          aria-label="Next image"
          onClick={() => setIndex((index + 1) % images.length)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white transition-colors hover:bg-brand-500"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}

function EntryMedia({ entry }: { entry: Entry }) {
  if (entry.media === 'gallery') {
    return <GalleryCarousel images={entry.gallery} />
  }
  if (entry.media === 'video') {
    return (
      <div className="relative h-[300px] md:h-[400px]">
        <img
          src={`https://picsum.photos/seed/${entry.seed}/900/400`}
          alt=""
          className="h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 bg-black/50 transition-colors duration-300 hover:bg-black/70"
          aria-hidden="true"
        />
        <button
          type="button"
          aria-label="Play video"
          className="absolute top-1/2 left-1/2 flex h-[90px] w-[90px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand-500 text-white transition-transform hover:scale-110"
        >
          <Play className="h-8 w-8" aria-hidden="true" fill="currentColor" />
        </button>
      </div>
    )
  }
  return (
    <a href="#" className="block">
      <img
        src={`https://picsum.photos/seed/${entry.seed}/900/400`}
        alt={entry.title}
        loading="lazy"
        className="h-[400px] w-full object-cover"
      />
    </a>
  )
}

function ContinueReading() {
  return (
    <a
      href="#"
      className="mt-8 inline-block px-[30px] py-[10px] font-serif italic text-ink-heading transition-colors hover:text-brand-500 dark:text-gray-100"
    >
      Continue Reading
    </a>
  )
}

function EntryBody({ entry }: { entry: Entry }) {
  if (entry.body === 'full') {
    return (
      <div className="mb-16 text-ink-body">
        <p className="first-letter:float-left first-letter:mr-4 first-letter:[font-family:Georgia,serif] first-letter:text-[110px] first-letter:leading-[90px] first-letter:text-black dark:first-letter:text-white">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
          there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
          the Semantics, a large language ocean. A small river named Duden flows by their place and
          supplies it with the necessary regelialia.
        </p>
        <blockquote className="my-8 ml-12 font-serif italic text-ink-body">
          A small river named Duden flows by their place and supplies it with the necessary
          regelialia. It is a paradisematic country, in which roasted parts of sentences fly into
          your mouth.
        </blockquote>
        <ol className="list-decimal space-y-2 pl-8">
          <li>
            When she reached the first hills of the Italic Mountains, she had a last view back on
            the skyline of her hometown Bookmarksgrove.
          </li>
          <li>It is a paradisematic country, in which roasted parts of sentences fly.</li>
        </ol>
        <ul className="mt-4 list-disc space-y-2 pl-8">
          <li>
            When she reached the first hills of the Italic Mountains, she had a last view back on
            the skyline of her hometown Bookmarksgrove.
          </li>
          <li>It is a paradisematic country, in which roasted parts of sentences fly.</li>
        </ul>
        <ContinueReading />
      </div>
    )
  }
  return (
    <div className="mb-16 text-ink-body">
      <p>
        On her way she met a copy. The copy warned the Little Blind Text, that where it came from it
        would have been rewritten a thousand times and everything that was left from its origin
        would be the word &quot;and&quot;. But nothing the copy said could convince her and so it
        didn&apos;t take long until a few insidious Copy Writers ambushed her.
      </p>
      <ContinueReading />
    </div>
  )
}

export function BlogList() {
  return (
    <div>
      {entries.map((entry) => (
        <article key={entry.seed} className="mb-16 border-b border-line-300 pb-12 last:border-b-0">
          <div className="relative bg-card-100 py-8 dark:bg-gray-900">
            <ul
              aria-label="Share"
              className="absolute top-0 -left-10 hidden flex-col items-center gap-3 md:flex"
            >
              <li>
                <a
                  href="#"
                  aria-label="Share"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink-body shadow transition-colors hover:text-brand-500 dark:bg-gray-800 dark:text-gray-200"
                >
                  <Share2 className="h-4 w-4" aria-hidden="true" />
                </a>
              </li>
              {shareRail.map((social) => (
                <li key={social.name}>
                  <a
                    href="#"
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink-body shadow transition-colors hover:text-brand-500 dark:bg-gray-800 dark:text-gray-200"
                  >
                    <BrandIcon name={social.name} className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>

            <p className="mb-5 text-center font-serif text-[13px] font-semibold uppercase tracking-[0.3em] text-brand-500">
              {entry.categories.map((category, index) => (
                <span key={category}>
                  {index > 0 && <span className="mx-2 text-ink-body"> | </span>}
                  <a href="#" className="transition-colors hover:text-brand-600">
                    {category}
                  </a>
                </span>
              ))}
            </p>
            <h2 className="mb-8 text-center font-serif text-[28px] italic text-ink-heading dark:text-gray-100">
              <a href="#" className="transition-colors hover:text-brand-500">
                {entry.title}
              </a>
            </h2>

            <EntryMedia entry={entry} />

            <p className="my-5 text-center font-serif text-[13px] uppercase tracking-[0.16em] text-gray-500">
              <a
                href="#"
                className="inline-flex items-center gap-2 transition-colors hover:text-brand-500"
              >
                <Calendar className="h-4 w-4" aria-hidden="true" />
                {entry.date}
              </a>
              <span className="mx-2">|</span>
              <a
                href="#"
                className="inline-flex items-center gap-2 transition-colors hover:text-brand-500"
              >
                <User className="h-4 w-4" aria-hidden="true" />
                By Stephy
              </a>
              <span className="mx-2">|</span>
              <a
                href="#"
                className="inline-flex items-center gap-2 transition-colors hover:text-brand-500"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />5 Comments
              </a>
            </p>

            <EntryBody entry={entry} />
          </div>
        </article>
      ))}
    </div>
  )
}
