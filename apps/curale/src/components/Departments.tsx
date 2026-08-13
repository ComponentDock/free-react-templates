import { HeartPulse, Scissors, Sparkles, type LucideIcon } from 'lucide-react'
import { departments } from '../data'

const icons: LucideIcon[] = [HeartPulse, Scissors, Sparkles, HeartPulse]

/** "Popular department" grid on a #f9f9fd background: four cards with a
 *  rounded image, a dark overlay + white icon revealed on hover, and a
 *  white text panel below. The source's owl-carousel slider is recreated
 *  as a static grid (documented simplification). */
export function Departments() {
  return (
    <section id="departments" className="bg-surface py-[130px] pb-[200px]">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-20 text-center">
          <h2 className="text-[30px] font-bold text-ink md:text-[36px]">Popular department</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-body">
            Green above he cattle god saw day multiply under fill in the cattle fowl a all, living,
            tree word link available in the service for subdue fruit.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {departments.map((department, index) => {
            const Icon = icons[index]!
            return (
              <article
                key={`${department.title}-${index}`}
                className="group rounded-[5px] bg-white transition-shadow duration-500 hover:shadow-[0_5px_20px_rgba(0,0,0,0.1)]"
              >
                <div className="relative overflow-hidden rounded-[5px]">
                  <img
                    src={department.image}
                    alt=""
                    loading="lazy"
                    className="aspect-[3/2] w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-[rgba(1,2,14,0.4)] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <Icon className="h-[50px] w-[50px] text-white" aria-hidden="true" />
                  </div>
                </div>
                <div className="bg-white p-10 text-center">
                  <h3 className="text-[18px] font-bold uppercase text-ink">{department.title}</h3>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
