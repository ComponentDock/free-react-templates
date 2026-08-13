import { Box, ClipboardList, Hammer, Presentation, type LucideIcon } from 'lucide-react'
import { features } from '../data'

const icons: Record<string, LucideIcon> = {
  presentation: Presentation,
  hammer: Hammer,
  box: Box,
  clipboard: ClipboardList,
}

/** White features section (reference `.section`): centered heading, four
 *  orange-icon cards flanking a center photo column. */
export function Features() {
  return (
    <section className="bg-white py-[7rem]">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="mx-auto max-w-2xl text-center font-heading text-3xl font-black text-black md:text-4xl">
          We&apos;ll Handle Any Problems and Solve Them
        </h2>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_1.1fr_1fr]">
          <div className="flex flex-col gap-8">
            {features.slice(0, 2).map((feature) => {
              const Icon = icons[feature.icon]!
              return (
                <article key={feature.title} className="bg-surface p-[30px]">
                  <Icon className="h-[50px] w-[50px] text-primary-600" aria-hidden="true" />
                  <h3 className="mt-4 font-heading text-[1.2rem] font-semibold text-black">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">{feature.text}</p>
                </article>
              )
            })}
          </div>

          <div className="group overflow-hidden">
            <img
              src="https://picsum.photos/id/60/800/1000"
              alt=""
              aria-hidden="true"
              className="h-full min-h-[400px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          <div className="flex flex-col gap-8">
            {features.slice(2).map((feature) => {
              const Icon = icons[feature.icon]!
              return (
                <article key={feature.title} className="bg-surface p-[30px]">
                  <Icon className="h-[50px] w-[50px] text-primary-600" aria-hidden="true" />
                  <h3 className="mt-4 font-heading text-[1.2rem] font-semibold text-black">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">{feature.text}</p>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
