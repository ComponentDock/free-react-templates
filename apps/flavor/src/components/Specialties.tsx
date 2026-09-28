import { Utensils } from 'lucide-react'
import type { Dish } from '../data'

interface SpecialtiesProps {
  heading: string
  dishes: readonly Dish[]
}

/** Reusable specialties section: centered heading with cutlery icon +
 *  3 dish cards (image + title). */
export function Specialties({ heading, dishes }: SpecialtiesProps) {
  return (
    <section id="specialties" className="bg-white py-[120px]">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <Utensils className="mx-auto mb-4 h-10 w-10 text-brand" aria-hidden="true" />
          <h1 className="text-4xl font-semibold">{heading}</h1>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {dishes.map((dish) => (
            <article key={dish.title} className="group text-center">
              <div className="overflow-hidden rounded-[10px]">
                <img
                  src={dish.image}
                  alt={dish.title}
                  loading="lazy"
                  className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h4 className="mt-5 text-lg font-semibold">{dish.title}</h4>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
