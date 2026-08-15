import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import {
  joinNowLabel,
  packageImages,
  packageNextLabel,
  packageParagraph,
  packagePreviousLabel,
  packageSlides,
  packageTitle,
  starLabel,
} from '../data'

export function TourPackage() {
  const [index, setIndex] = useState(0)
  const slide = packageSlides[index]!

  const goPrevious = () => setIndex((value) => (value === 0 ? packageSlides.length - 1 : value - 1))
  const goNext = () => setIndex((value) => (value + 1) % packageSlides.length)

  return (
    <section id="packages-section" className="bg-paper py-36 lg:py-44">
      <div className="mx-auto grid max-w-[1320px] gap-16 px-6 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-7">
          <div className="relative">
            <img
              src={packageImages[index % packageImages.length]!}
              alt=""
              className="h-72 w-full object-cover lg:h-96"
            />
            <div className="bg-soft px-10 py-10 lg:px-12">
              <h3 className="font-heading text-2xl font-medium text-black">{slide.title}</h3>
              <p className="mt-4 text-[15px] leading-[1.8] text-muted">{slide.paragraph}</p>
              <div className="mt-10 flex items-center justify-between">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }, (_, starIndex) => (
                    <Star
                      key={starIndex}
                      aria-label={starLabel(starIndex)}
                      className="h-4 w-4 fill-brand text-brand"
                    />
                  ))}
                </div>
                <a
                  href="#search-section"
                  className="font-script text-lg text-black transition-colors hover:text-sky"
                >
                  {joinNowLabel}
                </a>
              </div>
            </div>
            <button
              type="button"
              aria-label={packagePreviousLabel}
              onClick={goPrevious}
              className="absolute -left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center bg-white text-ink shadow-md transition-colors hover:bg-brand"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label={packageNextLabel}
              onClick={goNext}
              className="absolute -right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center bg-white text-ink shadow-md transition-colors hover:bg-brand"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center lg:col-span-4 lg:col-start-9">
          <h2 className="font-heading text-4xl font-medium capitalize text-ink">{packageTitle}</h2>
          <p className="mt-6 text-[15px] leading-[1.8] text-muted">{packageParagraph}</p>
          <div className="mt-10">
            <a
              href="#search-section"
              className="rounded-full bg-brand px-11 py-3.5 font-heading text-[15px] font-medium text-black transition-colors hover:bg-transparent hover:text-brand hover:ring-2 hover:ring-brand"
            >
              {joinNowLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
