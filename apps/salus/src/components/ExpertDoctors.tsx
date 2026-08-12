import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { doctors } from '../data'

export function ExpertDoctors() {
  const [offset, setOffset] = useState(0)
  const visible = 4
  const total = doctors.length
  const maxOffset = Math.max(0, total - visible)

  const prev = () => setOffset((current) => Math.max(0, current - 1))
  const next = () => setOffset((current) => Math.min(maxOffset, current + 1))

  return (
    <section id="doctors" aria-label="Expert doctors" className="bg-white py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-14 max-w-xl text-center">
          <h3 className="relative inline-block pb-4 text-4xl font-medium text-ink">
            Expert Doctors
            <span
              className="absolute bottom-0 left-1/2 h-0.5 w-[50px] -translate-x-1/2 bg-sky"
              aria-hidden="true"
            />
          </h3>
          <p className="mt-5 text-base text-body">
            Esteem spirit temper too say adieus who direct esteem. It esteems luckily or picture
            placing drawing.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.slice(offset, offset + visible).map((doctor, i) => (
            <article
              key={doctor.name}
              className="group overflow-hidden rounded bg-white shadow-[0_6px_10px_rgba(0,0,0,0.04)]"
            >
              <div className="overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/salus-doc-${offset + i + 1}/400/440`}
                  alt={`Portrait of ${doctor.name}`}
                  className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="bg-tint py-5 text-center transition-colors group-hover:bg-sky">
                <h4 className="text-xl font-medium text-ink transition-colors group-hover:text-white">
                  {doctor.name}
                </h4>
                <p className="mt-1 text-[13px] text-muted transition-colors group-hover:text-white">
                  {doctor.specialty}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label="Previous doctors"
            onClick={prev}
            disabled={offset === 0}
            className="rounded-full border border-line p-3 text-ink transition-colors hover:border-sky hover:text-sky disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next doctors"
            onClick={next}
            disabled={offset >= maxOffset}
            className="rounded-full border border-line p-3 text-ink transition-colors hover:border-sky hover:text-sky disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
