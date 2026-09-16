import { Quote } from 'lucide-react'
import { testimonies } from '../data'

export function Testimonies() {
  return (
    <section className="bg-section py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-ink">Testimonies</h2>
          <p className="mx-auto mt-4 max-w-2xl text-body">
            Read, Get Inspired, and Share Your Story
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonies.map((t) => (
            <div
              key={`${t.name}-${t.role}`}
              className="rounded-lg bg-white p-8 text-center shadow-sm"
            >
              <div className="relative mx-auto mb-6 h-20 w-20">
                <img src={t.image} alt={t.name} className="h-20 w-20 rounded-full object-cover" />
                <span className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full bg-brand text-white">
                  <Quote className="h-4 w-4" />
                </span>
              </div>
              <p className="mb-6 text-body">{t.quote}</p>
              <p className="font-bold text-ink">{t.name}</p>
              <p className="text-sm text-body">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
