import { trainers, trainersEyebrow, trainersLead, trainersTitle } from '../data'

export function Trainers() {
  return (
    <section aria-label={trainersTitle} className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand">
            {trainersEyebrow}
          </span>
          <h2 className="mt-2 text-4xl font-black text-ink md:text-[2.5rem]">{trainersTitle}</h2>
          <p className="mt-4 text-muted">{trainersLead}</p>
        </div>
        <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {trainers.map((trainer, index) => (
            <li
              key={`${trainer.name}-${index}`}
              className="group bg-white p-6 text-center transition-colors duration-300 hover:bg-brand"
            >
              <img
                src={trainer.image}
                alt={trainer.name}
                className="mx-auto h-48 w-40 object-cover"
              />
              <h3 className="mt-5 text-xl font-bold text-black transition-colors duration-300 group-hover:text-[#ff7c67]">
                {trainer.name}
              </h3>
              <p className="mt-1 text-sm font-bold uppercase tracking-wide text-brand transition-colors duration-300 group-hover:text-white">
                {trainer.position}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#989898] transition-colors duration-300 group-hover:text-white">
                {trainer.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
