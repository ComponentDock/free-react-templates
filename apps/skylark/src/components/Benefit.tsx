import { Armchair, Clock, ShieldCheck, Users } from 'lucide-react'
import { BENEFITS, BENEFIT_PHOTOS } from '../data'

const ICONS = { Clock, Armchair, ShieldCheck, Users } as const

/* Our Benefit — light band section with a 2x2 feature grid on the left
   and a 2x2 photo collage on the right. */
export function Benefit() {
  return (
    <section aria-label="Our Benefit" id="our-benefit" className="bg-cloud py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="h-1.5 w-20 bg-brand" aria-hidden="true" />
          <h2 className="mt-4 text-4xl font-extrabold text-ink lg:text-5xl">Our Benefit</h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/60">
            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
            letters.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
            {BENEFITS.map((item) => {
              const Icon = ICONS[item.icon as keyof typeof ICONS]
              return (
                <div key={item.title} className="flex gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-white shadow-[0_10px_20px_rgba(29,42,59,0.08)]">
                    <Icon className="h-6 w-6 text-brand" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-lg font-extrabold text-ink">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/60">{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {BENEFIT_PHOTOS.map((photo, index) => (
            <img
              key={photo}
              src={photo}
              alt={`Adventure scene ${index + 1}`}
              loading="lazy"
              className={index % 2 === 1 ? 'mt-8 w-full object-cover' : 'w-full object-cover'}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
