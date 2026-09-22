import { ArrowRight } from 'lucide-react'
import { classItems, classesTitle, classesSubtitle } from '../data'

export function Classes() {
  return (
    <section id="classes-section" aria-label="Classes" className="bg-light py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-ink">{classesTitle}</h2>
          <p className="mt-4 text-body">{classesSubtitle}</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {classItems.map((item) => (
            <div key={item.title} className="group overflow-hidden rounded-lg bg-white shadow-sm">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute right-4 top-4 rounded bg-brand px-3 py-1 text-xs font-bold text-white">
                  {item.price}/mo
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-ink">
                  <a href="#" className="transition-colors hover:text-brand">
                    {item.title}
                  </a>
                </h3>
                <p className="mt-2 text-sm text-muted">{item.description}</p>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand transition-colors hover:text-brand-dark"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
