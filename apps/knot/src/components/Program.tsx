import { Flower2 } from 'lucide-react'
import { programCards, programTitle } from '../data'

export function Program() {
  return (
    <section id="program-section" className="py-20">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <Flower2 aria-hidden="true" className="mx-auto h-6 w-6 text-brand" />
        <h2 className="mt-5 text-4xl font-normal uppercase text-ink">{programTitle}</h2>
      </div>
      <div className="mx-auto mt-14 grid max-w-6xl gap-8 px-4 md:grid-cols-3">
        {programCards.map((card) => (
          <div key={card.title} className="relative h-[520px] overflow-hidden">
            <img
              src={card.image}
              alt={card.alt}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-5 flex items-center justify-center bg-white">
              <div className="p-8 text-center">
                <span className="text-2xl font-semibold text-brand">{card.time}</span>
                <h3 className="mt-3 text-2xl font-normal text-ink">{card.title}</h3>
                <p className="mt-4 text-base leading-7">{card.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
