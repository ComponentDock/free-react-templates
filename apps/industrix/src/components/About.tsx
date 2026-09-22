import { useState, useCallback, useEffect } from 'react'
import { Play, Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const reviews: Array<{ text: string; author: string; role: string; avatar: string }> = [
  {
    text: 'Their industrial construction team delivered exceptional quality. The project was completed on time and within budget.',
    author: 'Michael Chen',
    role: 'CEO, TechCorp',
    avatar: 'https://picsum.photos/seed/industrix-avatar1/80/80',
  },
  {
    text: 'Outstanding engineering solutions. They transformed our complex requirements into an efficient, modern facility.',
    author: 'Sarah Williams',
    role: 'Director, BuildPro',
    avatar: 'https://picsum.photos/seed/industrix-avatar2/80/80',
  },
  {
    text: 'Professional, reliable, and innovative. The bridge project exceeded all our expectations in every way.',
    author: 'James Rodriguez',
    role: 'Project Manager, InfraLink',
    avatar: 'https://picsum.photos/seed/industrix-avatar3/80/80',
  },
]

export function About() {
  const [reviewIdx, setReviewIdx] = useState(0)
  const nextReview = useCallback(() => setReviewIdx((c) => (c + 1) % reviews.length), [])
  const prevReview = useCallback(
    () => setReviewIdx((c) => (c - 1 + reviews.length) % reviews.length),
    [],
  )

  useEffect(() => {
    const id = setInterval(nextReview, 7000)
    return () => clearInterval(id)
  }, [nextReview])

  const review = reviews[reviewIdx]!

  return (
    <section id="about" className="py-20" aria-labelledby="about-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left — image */}
          <div className="relative overflow-hidden rounded-lg">
            <img
              src="https://picsum.photos/seed/industrix-about/700/500"
              alt="About Industrix"
              className="h-full w-full object-cover"
            />
            <button
              type="button"
              aria-label="Play video"
              className="absolute inset-0 flex items-center justify-center bg-ink/40 transition-colors hover:bg-ink/60"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand text-white shadow-lg">
                <Play className="h-6 w-6 ml-1" aria-hidden="true" />
              </span>
            </button>
          </div>

          {/* Right — content */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-brand">
              About Company
            </span>
            <h2
              id="about-heading"
              className="mt-2 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl"
            >
              Deliver innovative Industrial solution
            </h2>
            <p className="mt-6 text-body leading-relaxed">
              We are a leading industrial solutions provider with over 20 years of experience
              delivering cutting-edge construction and engineering projects. Our team of experts is
              dedicated to transforming your vision into reality with precision, quality, and
              innovation at every step.
            </p>
            <p className="mt-4 text-body leading-relaxed">
              From concept to completion, we handle every aspect of your project with the utmost
              professionalism and attention to detail that sets us apart.
            </p>
            <ButtonLink
              href="#contact"
              className="mt-8 inline-flex rounded bg-brand px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
            >
              Learn More
            </ButtonLink>
          </div>
        </div>

        {/* Review carousel */}
        <div className="mt-16 rounded-lg bg-surface p-8 sm:p-12">
          <div className="flex items-start gap-6">
            <div className="shrink-0">
              <Quote className="h-10 w-10 text-brand" aria-hidden="true" />
            </div>
            <div className="flex-1">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-star text-star" aria-hidden="true" />
                ))}
              </div>
              <p className="mt-4 text-body italic leading-relaxed">"{review.text}"</p>
              <div className="mt-6 flex items-center gap-4">
                <img
                  src={review.avatar}
                  alt={review.author}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-display text-sm font-bold text-ink">{review.author}</p>
                  <p className="text-xs text-body">{review.role}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <div className="flex gap-2">
              <button
                type="button"
                onClick={prevReview}
                aria-label="Previous review"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-body transition-colors hover:border-brand hover:text-brand"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={nextReview}
                aria-label="Next review"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-body transition-colors hover:border-brand hover:text-brand"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
            <div className="text-right">
              <span className="font-display text-3xl font-bold text-brand">350+</span>
              <p className="text-xs text-body">Positive Reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
