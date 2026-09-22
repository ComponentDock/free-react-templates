import { programs } from '../data'

export function IntroPrograms() {
  return (
    <section id="programs-section" aria-label="Programs" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {programs.map((program) => (
            <div key={program.title} className="group relative h-80 overflow-hidden">
              <img
                src={program.image}
                alt={program.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="relative flex h-full flex-col justify-end p-6 text-white">
                <h3 className="text-xl font-bold">{program.title}</h3>
                <p className="mt-2 text-sm text-white/80">{program.description}</p>
                <span className="mt-3 text-center text-lg font-bold text-brand">
                  {program.price}
                  <br />
                  <small className="text-xs font-normal text-white/60">/month</small>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
