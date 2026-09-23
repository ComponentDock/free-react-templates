import { Quote } from 'lucide-react'
import { TESTIMONIALS } from '../data'

export function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-12 text-center text-2xl font-bold text-black md:text-3xl">
          What Our Clients Say
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="rounded-lg bg-white p-6 shadow-sm">
              <Quote className="mb-4 h-8 w-8 text-[#2f89fc]" />
              <p className="mb-6 text-sm leading-relaxed text-[#828282]">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-10 w-10 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-semibold text-black">{t.name}</p>
                  <p className="text-xs text-[#828282]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
