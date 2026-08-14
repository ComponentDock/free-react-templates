import { showCards } from '../data'

export function ShowCards() {
  return (
    <section className="relative z-10 -mt-[100px] pb-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {showCards.map((card) => (
          <a
            key={card.title}
            href="#schedule"
            className="group relative block h-[300px] overflow-hidden"
          >
            <img
              src={card.img}
              alt={card.alt}
              className="absolute inset-0 h-full w-full scale-[1.05] object-cover transition-transform duration-300 group-hover:scale-100"
            />
            <div className="absolute left-0 top-1/2 -translate-y-1/2 px-0 transition-transform duration-300 group-hover:-translate-y-[65%]">
              <h2 className="inline bg-brand py-[5px] pl-[10px] pr-0 text-xl text-white shadow-[10px_0_0_#7cbd1e]">
                {card.title}
              </h2>
              <span className="mt-2 block bg-ink py-[4px] pl-[10px] text-[11px] uppercase tracking-[0.15em] text-white shadow-[10px_0_0_#000]">
                {card.schedule}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
