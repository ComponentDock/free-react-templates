import { Quote } from 'lucide-react'
import { TESTIMONIALS } from '../data'

/* Testimonials — coral #fe9191 section with the dark #232931 overlay and
   quote cards (quote, circular photo, name, position). */
export function Testimonials() {
  return (
    <section aria-label="Testimonials" className="relative overflow-hidden bg-brand py-24">
      <div className="absolute inset-0 bg-overlay/70" />
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-xl text-center">
          <span className="text-[13px] font-bold uppercase tracking-[3px] text-white">
            Read testimonials
          </span>
          <h2 className="mt-2 text-4xl font-semibold text-white">What Client Says</h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((item) => (
            <article key={item.name} className="bg-white p-8 text-center">
              <Quote className="mx-auto h-8 w-8 text-brand" aria-hidden="true" />
              <p className="mt-5 leading-relaxed text-mist">{item.quote}</p>
              <img
                src={item.photo}
                alt=""
                className="mx-auto mt-6 h-20 w-20 rounded-full object-cover"
              />
              <h3 className="mt-4 font-bold text-black">{item.name}</h3>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-brand">
                {item.position}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
