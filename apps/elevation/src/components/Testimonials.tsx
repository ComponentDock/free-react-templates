import { Star, StarHalf } from 'lucide-react'

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-coal">
      <img
        src="https://picsum.photos/seed/elevation-testimonial/1400/800"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-3xl rounded-[10px] bg-white px-8 py-14 text-center shadow-xl dark:bg-gray-900 sm:px-16">
          <img
            src="https://picsum.photos/seed/elevation-avatar/96/96"
            alt="Portrait of Fanny Spencer"
            className="mx-auto mb-10 h-20 w-20 rounded-full object-cover"
          />
          <p className="mx-auto max-w-xl italic leading-relaxed text-mist dark:text-gray-300">
            As conscious traveling Paupers we must always be concerned about our dear Mother Earth.
            If you think about it, you travel across her face and She is the host to your journey.
          </p>
          <h3 className="mt-8 font-display text-lg font-bold uppercase text-ink dark:text-white">
            Fanny Spencer
          </h3>
          <div
            role="img"
            aria-label="Rated 4.5 out of 5"
            className="mt-3 flex justify-center gap-1"
          >
            {[0, 1, 2, 3].map((index) => (
              <Star
                key={index}
                className="h-4 w-4 text-sun"
                fill="currentColor"
                aria-hidden="true"
              />
            ))}
            <StarHalf className="h-4 w-4 text-sun" fill="currentColor" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}
