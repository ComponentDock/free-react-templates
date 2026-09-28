import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Review {
  quote: string
  name: string
  imageSeed: string
}

const REVIEWS: Review[] = [
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
    name: 'John Gustavo',
    imageSeed: 'zing-person1',
  },
  {
    quote:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
    name: 'Michelle Fraulen',
    imageSeed: 'zing-person2',
  },
  {
    quote:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.',
    name: 'Sarah Mitchell',
    imageSeed: 'zing-person3',
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? REVIEWS.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === REVIEWS.length - 1 ? 0 : c + 1))

  const review = REVIEWS[current]!

  return (
    <section className="bg-brand-light py-20">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <div className="mb-12">
          <h2
            className="mb-3 text-3xl font-bold text-brand-dark"
            style={{ fontFamily: 'var(--font-dancing)' }}
          >
            Happy Customer
          </h2>
        </div>
        <div className="relative">
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 text-muted-text hover:text-brand-dark"
            aria-label="Previous review"
          >
            <ChevronLeft size={24} />
          </button>
          <blockquote className="mx-10">
            <p className="mb-6 text-base italic leading-relaxed text-muted-text">
              &ldquo;{review.quote}&rdquo;
            </p>
            <div className="flex flex-col items-center">
              <div
                className="mb-3 h-16 w-16 rounded-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(https://picsum.photos/seed/${review.imageSeed}/200/200)`,
                }}
              />
              <h4 className="font-bold text-brand-dark">{review.name}</h4>
            </div>
          </blockquote>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-muted-text hover:text-brand-dark"
            aria-label="Next review"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  )
}
