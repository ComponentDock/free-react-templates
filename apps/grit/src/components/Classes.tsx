import { classCards, classesEyebrow, classesLead, classesTitle } from '../data'

export function Classes() {
  return (
    <section aria-label={classesTitle} className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand">
            {classesEyebrow}
          </span>
          <h2 className="mt-2 text-4xl font-black text-ink md:text-[2.5rem]">{classesTitle}</h2>
          <p className="mt-4 text-muted">{classesLead}</p>
        </div>
        <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {classCards.map((card) => (
            <li key={card.title} className="group">
              <div className="overflow-hidden">
                <img
                  src={card.image}
                  alt=""
                  className="aspect-[3/2] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-5 text-xl font-bold text-black transition-colors hover:text-brand">
                {card.title}
              </h3>
              <p className="mt-2 text-sm text-[#aeaeae]">{card.instructor}</p>
              <p className="text-sm text-[#aeaeae]">{card.duration}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
